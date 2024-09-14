#include <fstream>
#include <iostream>

int main() {
    std::ifstream input_file("input.txt");
    if (!input_file) {
        std::cerr << "Error opening input file" << std::endl;
        return 1;
    }

    std::ofstream output_file("output.txt");
    if (!output_file) {
        std::cerr << "Error opening output file" << std::endl;
        input_file.close();
        return 1;
    }

    char buffer[1024];
    while (input_file.getline(buffer, 1024)) {
        output_file << buffer;
    }

    input_file.close();
    output_file.close();
    return 0;
}