package main

import (
    "fmt"
    "os"
    "strconv"
    "bufio"
)

func main() {
    fmt.Print("Enter a number: ")
    scanner := bufio.NewScanner(os.Stdin)
    scanner.Scan()
    n, _ := strconv.Atoi(scanner.Text())

    for i := 0; i < n; i++ {
        for j := 0; j < n - i - 1; j++ {
            fmt.Print(" ")
        }
        for j := 0; j < 2 * i + 1; j++ {
            fmt.Print("*")
        }
        fmt.Println()
    }

    for i := n - 2; i >= 0; i-- {
        for j := 0; j < n - i - 1; j++ {
            fmt.Print(" ")
        }
        for j := 0; j < 2 * i + 1; j++ {
            fmt.Print("*")
        }
        fmt.Println()
    }
}