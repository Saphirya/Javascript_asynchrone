const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p1");
  }, 1000);
});
//pour cette version de await au premier niveau target au  moins es 2022 dans vite.config.js
const value = await p1;
console.log(value);
// async function func() {
//   try {
//     const value = await p1;
//     console.log(value);
//   } catch (e) {
//     console.log("err:", e);
//   }
// }
// func()
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));
