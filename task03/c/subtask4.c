#include <stdio.h>
#include <stdlib.h>

int main() {
    FILE *inputFile = fopen("input.txt", "r");
    int n;
    fscanf(inputFile, "%d", &n);
    fclose(inputFile);

    FILE *outputFile = fopen("output.txt", "w");

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            fprintf(outputFile, " ");
        }
        for (int j = 0; j < 2 * i + 1; j++) {
            fprintf(outputFile, "*");
        }
        fprintf(outputFile, "\n");
    }

    for (int i = n - 2; i >= 0; i--) {
        for (int j = 0; j < n - i - 1; j++) {
            fprintf(outputFile, " ");
        }
        for (int j = 0; j < 2 * i + 1; j++) {
            fprintf(outputFile, "*");
        }
        fprintf(outputFile, "\n");
    }

    fclose(outputFile);
    return 0;
}