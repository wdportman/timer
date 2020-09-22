//an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments

let userInput = process.argv;

//for loop:

for (let i = 2; i < (userInput.length); i++) {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, 1000*userInput[i]);
};

//forEach:

// userInput.forEach((element,index) => {
//   setTimeout(() => {
//     process.stdout.write('\x07');
//   },1000*index);
// });