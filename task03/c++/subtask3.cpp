#include <iostream>

int main() {
    int n;
    std::cout << "Enter a number: ";
    std::cin >> n;

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            std::cout << " ";
        }
        for (int j = 0; j < 2 * i + 1; j++) {
            std::cout << "*";
        }
        std::cout << std::endl;
    }

    for (int i = n - 2; i >= 0; i--) {
        for (int j = 0; j < n - i - 1; j++) {
            std::cout << " ";
        }
        for (int j = 0; j < 2 * i + 1; j++) {
            std::cout << "*";
        }
        std::cout << std::endl;
    }

    return 0;
}