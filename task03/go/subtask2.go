package main

import (
    "io"
    "os"
)

func main() {
    input, err := os.Open("input.txt")
    if err != nil {
        panic(err)
    }
    defer input.Close()

    output, err := os.Create("output.txt")
    if err != nil {
        panic(err)
    }
    defer output.Close()

    _, err = io.Copy(output, input)
    if err != nil {
        panic(err)
    }
}