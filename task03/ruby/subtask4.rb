n = File.read("input.txt").to_i

File.open("output.txt", "w") do |f|
  (0...n).each do |i|
    f.puts " " * (n - i - 1) + "*" * (2 * i + 1)
  end

  (n - 2).downto(0) do |i|
    f.puts " " * (n - i - 1) + "*" * (2 * i + 1)
  end
end