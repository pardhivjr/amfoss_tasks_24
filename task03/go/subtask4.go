package main

import (
    "bufio"
    "fmt"
    "io"
    "os"
    "strconv"
)

func main() {
    file, err := os.Open("input.txt")
    if err != nil {
        fmt.Println(err)
        return
    }
    defer file.Close()

    scanner := bufio.NewScanner(file)
    scanner.Scan()
    n, _ := strconv.Atoi(scanner.Text())

    file, err = os.Create("output.txt")
    if err != nil {
        fmt.Println(err)
        return
    }
    defer file.Close()

    writer := bufio.NewWriter(file)

    for i := 0; i < n; i++ {
        for j := 0; j < n - i - 1; j++ {