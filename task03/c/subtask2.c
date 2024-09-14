#include <stdio.h>
#include <stdlib.h>

int main() {
    FILE *input_file = fopen("input.txt", "r");
    if (input_file == NULL) {
        perror("Error opening input file");
        return 1;
    }

    FILE *output_file = fopen("output.txt", "w");
    if (output_file == NULL) {
        perror("Error opening output file");
        fclose(input_file);
        return 1;
    }

    char buffer[1024];
    while (fgets(buffer, 1024, input_file) != NULL) {
        fputs(buffer, output_file);
    }

    fclose(input_file);
    fclose(output_file);
    return 0;
}