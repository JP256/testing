//Basic Callback //////////////////////////
function doSomething(callback) {
  console.log("dooo");
  callback();
}
function doMore() {
  console.log("more");
}
// doSomething(doMore);
///////////////////////////////////////////
function one() {
  setTimeout(() => {
    console.log("hi");
  }, 500);
}
function two() {
  console.log("bye");
}
//print firs two and then two, behaving asynchronous
// one();
// two();
// the right way is using callbacks
function three(callback) {
  setTimeout(() => {
    console.log("hi");
    callback();
  }, 500);
}
function four() {
  console.log("bye");
}
three(four);
////// Promesas
function miP() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(console.log("hii"));
    }, 3000);
  });
}
function five() {
  console.log("bye");
}
miP()
  .then(() => {
    five();
  })
  .then(() => console.log("siii"));
//more changes to be coming...
// adding a change to working directory
// more changes
