use std::io;

fn main() {
    let mut input = String::new();
    println!("Enter a number: ");
    io::stdin().read_line(&mut input).expect("Failed to read line");
    let n: i32 = input.trim().parse().expect("Please type a number");

    for i in 0..n {
        for _ in 0..n - i - 1 {
            print!(" ");
        }
        for _ in 0..2 * i + 1 {
            print!("*");
        }
        println!();
    }

    for i in (0..n - 1).rev() {
        for _ in 0..n - i - 1 {
            print!(" ");
        }
        for _ in 0..2 * i + 1 {
            print!("*");
        }
        println!();
    }
}