let index = 0;
const intervalId = setInterval(() => {
  console.log("timer done");
  index++;
  if (index === 5) {
    clearInterval(intervalId);
  }
}, 1000);

console.log(intervalId);
// clearInterval(intervalId);
