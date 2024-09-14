import System.IO

main :: IO ()
main = do
    input_handle <- openFile "input.txt" ReadMode
    output_handle <- openFile "output.txt" WriteMode
    contents <- hGetContents input_handle
    hPutStr output_handle contents
    hClose input_handle
    hClose output_handle