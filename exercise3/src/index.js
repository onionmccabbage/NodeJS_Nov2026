import { fetchPhotos } from "./util/getData.js";
import { fileLogger } from "./util/log_writer.js";
import { EventEmitter } from 'node:events'
import { appendFile } from "node:fs";


const processRequest = (id) => {
    const myEv = new EventEmitter()
    // myEv.on('photosReceived', (p)=>{return fileLogger})
    myEv.on('photosReceived', (str = '') => {
        console.log('logging...')
    })

    const numberOfArgs = process.argv.length
    if (numberOfArgs > 2) {
        // validate we have numeric values
        for (let i = 2; i < numberOfArgs; i++) {
            fetchPhotos(process.argv[i])
                .then((p) => {
                    console.log(p)
                    // trigger the file logger via a custom event
                    myEv.emit('photosReceived', p)
                })
            .catch( (err)=>{ 
                // skip any other processing and cut to the next Node run-loop iteration
                process.nextTick( ()=>{
                    console.error(`Problem: ${err}`)} )
                } )
        }
    }
}
processRequest()