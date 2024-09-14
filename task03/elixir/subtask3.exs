n = IO.read(:line, "Enter a number: ") |> String.trim |> String.to_integer

for i <- 0..n-1 do
  IO.puts " " <> String.duplicate(" ", n - i - 1) <> String.duplicate("*", 2 * i + 1)
end

for i <- n-2..0 do
  IO.puts " " <> String.duplicate(" ", n - i - 1) <> String.duplicate("*", 2 * i + 1)
end
