const { promise, reject, resolve } = Promise.withResolvers();
setTimeout(() => {
  resolve("hello");
}, 3000);

promise.then((result) => console.log(result)).catch((err) => console.log(err));

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(1);
//   }, 3000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject(2);
//   }, 2000);
// });

// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(3);
//   }, 1000);
// });

// Promise.all([p1, p2, p3])
//   .then((result) => {
//     console.log("Promise.all :", result);
//   })
//   .catch((err) => console.log("Promise.all catch :", err));

// Promise.allSettled([p1, p2, p3])
//   .then((result) => {
//     console.log("Promise.allSettled :", result);
//   })
//   .catch((err) => console.log("Promise.allSettled catch :", err));

//chemin le plus rapide
// Promise.race([p1, p2, p3])
//   .then((result) => {
//     console.log("Promise.race :", result);
//   })
//   .catch((err) => console.log("Promise.race catch :", err));

// Promise.any([p1, p2, p3])
//   .then((result) => {
//     console.log("Promise.any :", result);
//   })
//   .catch((err) => console.log("Promise.any catch :", err));

// Promise.resolve(1)
//   .then((result) => {
//     console.log("Promise.resolve :", result);
//   })
//   .catch((err) => console.log("Promise.resolve catch :", err));

// console.log("hello");
