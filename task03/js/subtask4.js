const fs = require('fs');

fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const n = parseInt(data);

  let output = '';
  for (let i = 0; i < n; i++) {
    output += " ".repeat(n - i - 1) + "*".repeat(2 * i + 1) + "\n";
  }

  for (let i = n - 2; i >= 0; i--) {
    output += " ".repeat(n - i - 1) + "*".repeat(2 * i + 1) + "\n";
  }

  fs.writeFile('output.txt', output, (err) => {
    if (err) {
      console.error(err);
    }
  });
});