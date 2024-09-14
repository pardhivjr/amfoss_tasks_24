use std::fs::File;
use std::io::{Read, Write};

fn main() {
    let mut input_file = File::open("input.txt").expect("Error opening input file");
    let mut output_file = File::create("output.txt").expect("Error opening output file");

    let mut string = String::new();
    input_file.read_to_string(&mut string).expect("Error reading input file");
    output_file.write_all(string.as_bytes()).expect("Error writing to output file");
}