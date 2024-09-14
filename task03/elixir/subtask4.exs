n = File.read!("input.txt") |> String.trim |> String.to_integer

File.write!("output.txt", "")

for i <- 0..n-1 do
  IO.write(:stdio, " " <> String.duplicate(" ", n - i - 1) <> String.duplicate("*", 2 * i + 1) <> "\n")
end

for i <- n-2..0 do
  IO.write(:stdio, " " <> String.duplicate(" ", n - i - 1) <> String.duplicate("*", 2 * i + 1) <> "\n")
end
