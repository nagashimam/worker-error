const {Worker} = require("node:worker_threads")
const worker = new Worker("./worker.js");
new Promise((resolve)=>{
  worker.on("message", resolve);
}).then((result) => console.log(result))
