const fs = require('fs');

fs.readFile('input.txt', 'utf8', (err, string) => {
  if (err) {
    console.error(err);
    return;
  }
  fs.writeFile('output.txt', string, (err) => {
    if (err) {
      console.error(err);
    }
  });
});