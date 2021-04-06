// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   process.stdout.write('\r\\   ')
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r|   \n');
// }, 900);

const spinArr = ['|', '/', '-', '\\', '|   \n']

let duration = 100

for (let element of spinArr) {
  setTimeout(() => {
    process.stdout.write(`\r${element}`)
  }, duration);
  duration += 200;
};