import os
import click
import hashlib
import requests
from bs4 import BeautifulSoup

@click.command()
@click.argument('file_path')
@click.option('-l', '--language', help='Filter subtitles by language.')
@click.option('-o', '--output', help='Specify the output folder for the subtitles.')
@click.option('-s', '--file-size', help='Filter subtitles by movie file size.')
@click.option('-h', '--match-by-hash', is_flag=True, help='Match subtitles by movie hash.')
@click.option('-b', '--batch-download', is_flag=True, help='Enable batch mode.')
def cli(file_path, language, output, file_size, match_by_hash, batch_download):
    if batch_download:
        if not os.path.isdir(file_path):
            click.echo('Error: Batch mode requires a directory.')
            return
        for file in os.listdir(file_path):
            if file.endswith('.mp4'):
                process_file(os.path.join(file_path, file), language, output, file_size, match_by_hash)
    else:
        process_file(file_path, language, output, file_size, match_by_hash)

def process_file(file_path, language, output, file_size, match_by_hash):
    imdb_id = find_imdb_id(file_path)
    movie_hash = find_movie_hash(file_path)
    movie_file_size = find_movie_file_size(file_path)

    subtitles = scrape_subtitles(imdb_id, movie_hash, movie_file_size, language, file_size)
    
    if output and not os.path.exists(output):
        os.makedirs(output)

    download_subtitles(subtitles, output)

def find_imdb_id(file_path):
    import requests
    api_key = 'f1d62f95'
    response = requests.get(f'http://www.omdbapi.com/?t={os.path.basename(file_path)}&apikey={api_key}')
    imdb_id = response.json().get('imdbID', 'N/A')
    return imdb_id

def find_movie_hash(file_path):
    with open(file_path, 'rb') as f:
        movie_hash = hashlib.md5(f.read()).hexdigest()
    return movie_hash

def find_movie_file_size(file_path):
    return os.path.getsize(file_path)

def scrape_subtitles(imdb_id, movie_hash, movie_file_size, language, file_size):
    try:
        url = f'https://opensubtitles.org/en/search/sublanguageid-eng/imdbid-{imdb_id}'
        response = requests.get(url)
        response.raise_for_status()
        soup = BeautifulSoup(response.content, 'html.parser')

        subtitles = []
        rows = soup.select('table.results tr')  # Update this if necessary

        for subtitle in rows:
            language_cell = subtitle.select_one('.language')
            file_size_cell = subtitle.select_one('.size')
            download_cell = subtitle.select_one('.download a')

            if language_cell and file_size_cell and download_cell:
                subtitle_language = language_cell.get_text(strip=True)
                subtitle_file_size = file_size_cell.get_text(strip=True)
                download_url = download_cell['href']

                if language and subtitle_language != language:
                    continue
                if file_size and subtitle_file_size != file_size:
                    continue

                subtitles.append({
                    'language': subtitle_language,
                    'file_size': subtitle_file_size,
                    'download_url': download_url
                })
            else:
                click.echo('Warning: Missing expected table cells in subtitle row.')

        return sorted(subtitles, key=lambda x: x['file_size'], reverse=True)
    
    except requests.RequestException as e:
        click.echo(f'Error fetching subtitles: {e}')
        return []
    except Exception as e:
        click.echo(f'An error occurred during scraping: {e}')
        return []

if __name__ == '__main__':
    cli()
