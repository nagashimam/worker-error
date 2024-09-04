const {parentPort} = require("node:worker_threads");
try {
  parentPort.postMessage(() => console.log("hi"));
}catch(e) {
  console.log(e);
}
