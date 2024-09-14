import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

public class subtask4 {
    public static void main(String[] args) throws IOException {
        BufferedReader reader = new BufferedReader(new FileReader("input.txt"));
        int n = Integer.parseInt(reader.readLine());

        BufferedWriter writer = new BufferedWriter(new FileWriter("output.txt"));

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                writer.write(" ");
            }
            for (int j = 0; j < 2 * i + 1; j++) {
                writer.write("*");
            }
            writer.write("\n");
        }

        for (int i = n - 2; i >= 0; i--) {
            for (int j = 0; j < n - i - 1; j++) {
                writer.write(" ");
            }
            for (int j = 0; j < 2 * i + 1; j++) {
                writer.write("*");
            }
            writer.write("\n");
        }

        writer.close();
    }
}