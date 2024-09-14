use std::fs::File;
use std::io::{self, BufReader, BufWriter, Write};

fn main() -> io::Result<()> {
    let file = File::open("input.txt")?;
    let reader = BufReader::new(file);
    let mut input = String::new();
    reader.read_line(&mut input)?;
    let n: i32 = input.trim().parse().expect("Please type a number");

    let file = File::create("output.txt")?;
    let mut writer = BufWriter::new(file);

    for i in 0..n {
        for _ in 0..n - i - 1 {
            writer.write(b" ")?;
        }
        for _ in 0..2 * i + 1 {
            writer.write(b"*")?;
        }
        writer.write(b"\n")?;
    }

    for i in (0..n - 1).rev() {
        for _ in 0..n - i - 1 {
            writer.write(b" ")?;
        }
        for _ in 0..2 * i + 1 {
            writer.write(b"*")?;
        }
        writer.write(b"\n")?;
    }

    Ok(())
}