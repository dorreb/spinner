const chars = ['|', '/', '-', '\\', '|'];
let delay = 0;

for (let i = 0; i < chars.length; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${chars[i]}  `);
  }, delay);
  delay = delay + 100;
}
