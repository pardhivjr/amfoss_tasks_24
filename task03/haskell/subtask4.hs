import System.IO

main :: IO ()
main = do
    handle <- openFile "input.txt" ReadMode
    input <- hGetLine handle
    let n = read input :: Int
    hClose handle

    handle <- openFile "output.txt" WriteMode
    mapM_ (hPutStrLn handle) [replicate (n - i - 1) ' ' ++ replicate (2 * i + 1) '*' | i <- [0..n-1]]
    mapM_ (hPutStrLn handle) [replicate (n - i - 1) ' ' ++ replicate (2 * i + 1) '*' | i <- [n-2,n-3..0]]
    hClose handle