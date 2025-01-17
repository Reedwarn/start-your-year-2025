let promise = new Promise(function (resolve, reject) {
  let success = true; // Change this to false to test the rejection

  if (success) {
    resolve("Operation was successful!");
  } else {
    reject("Operation failed.");
  }
});

console.log(await promise);

/*
 * Handrolled version of setTimeOut.
 */
const customSetTimeOut = (x: number) =>
  new Promise((resolve, reject) => {
    const currentTime = new Date();
    const previousSeconds = currentTime.getTime();
    const fullFilledSeconds = previousSeconds + (x * 1000);

    let newTime = new Date();
    do {
      newTime = new Date();
    } while (newTime.getTime() < fullFilledSeconds + 1);
    return resolve(`Finished the ${x} seconds countdown!`);
  });
