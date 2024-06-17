const express = require('express');
// const cluster = require('cluster');
// const os = require('os');


const app = express();

function delay(duration) {
    const startTime = Date.now()
    while(Date.now() - startTime <duration) {
        //event loop is blocked
    }
}

app.get('/', (req,res) => {
    // JSON.stringify({})
    // JSON.parse()
    //[4,1,2,3].sort()
    
    res.send(`Performance Example: ${process.pid}`);
})

app.get('/timer', (req,res) => {
    delay(4000);
    res.send(`Ding Ding Dingooo Beep: ${process.pid}`);
})

console.log('Running server.js ...');
console.log('Worker process started ...');

// if (cluster.isMaster){
//     console.log('Master has been started ...');

//     const NUM_WORKERS = os.cpus().length;
//     console.log(NUM_WORKERS);
//     for (let i=0;i<NUM_WORKERS; i++){
//         cluster.fork()
//     }

// }else{
//     console.log('Worker process started ...');
//     // app.listen(3000);
// }

app.listen(3000);

