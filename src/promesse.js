const promesse = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise done");
  }, 3000);
});

promesse
  .then((result) => {
    console.log("then :", result);
    // return "nouvelle valeur";
    // throw new Error("error");
  })
  .catch((err) => console.log("err : ", err))
  .finally(() => console.log("in finally"));
// .then((result) => {
//   console.log("then 2 :", result);
//   return "nouvelle valeur 2";
// })

// .then((result) => {
//   console.log("then 3 :", result);
// })
// .catch((err) => {
//   console.log(err);
// });

// promesse.then((result) => {
//   console.log("then 2 :", result);
// });

promesse;
