let promise = new Promise((resolve, reject) => {
  // Api calling...
  let data = true;

  if (data) {
    resolve("Promise is successful");
  } else {
    reject("Promise is rejected");
  }
});

promise
  .then((msg) => console.log("Then: ", msg))
  .catch((msg) => console.log("Catch: ", msg))
  .finally(() => console.log("Promise Completed"));
