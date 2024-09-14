#include <fstream>
#include <iostream>

int main() {
    std::ifstream inputFile("input.txt");
    int n;
    inputFile >> n;

    std::ofstream outputFile("output.txt");

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            outputFile << " ";
        }
        for (int j = 0; j < 2 * i + 1; j++) {
            outputFile << "*";
        }
        outputFile << std::endl;
    }

    for (int i = n - 2; i >= 0; i--) {
        for (int j = 0; j < n - i - 1; j++) {
            outputFile << " ";
        }
        for (int j = 0; j < 2 * i + 1; j++) {
            outputFile << "*";
        }
        outputFile << std::endl;
    }

    return 0;
}