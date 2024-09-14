with open("input.txt", "r") as input_file:
    string = input_file.read()

with open("output.txt", "w") as output_file:
    output_file.write(string)