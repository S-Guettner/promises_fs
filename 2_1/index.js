import fs from 'fs'
import { dataFile } from './data.js'



const readFile = (dataInput) => {
    return new Promise((resolve,reject) => {
        fs.readFile(dataInput,'utf8', (err,data) => {
            if (err) reject(err)
            else {
                resolve(data)
            }
        })
    })
}




