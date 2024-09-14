with open("input.txt", "r") as f:
    n = int(f.read())

with open("output.txt", "w") as f:
    for i in range(n):
        f.write(" " * (n - i - 1) + "*" * (2 * i + 1) + "\n")

    for i in range(n - 2, -1, -1):
        f.write(" " * (n - i - 1) + "*" * (2 * i + 1) + "\n")