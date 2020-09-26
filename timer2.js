const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

const stdout = process.stdout;
const beep = () => {
  stdout.write('\x07');
};

let numbersArray = ["1","2","3","4","5","6","7","8","9"];

stdin.on('data', (input) => {
  if (input === "b") {
    beep();
  }
  if (numbersArray.includes(input)) {
    stdout.write(`Setting time for ${input} seconds!\n`);
    setTimeout(() => {
      beep();
    }, input*1000);
  }
  if (input === "\x03") {
    stdout.write("Thanks for using me, ciao!");
    process.exit();
  }
});