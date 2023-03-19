import fs from 'fs'
import { dataFile } from './data.js'



// write file foreach item
const readFile = (dataInput) => {
    return new Promise((resolve,reject) => {
        dataInput.forEach((item) => {
            fs.writeFileSync('./data.txt',item.id + item.title + item.description + '\n \n' ,{flag : 'a+'}, (err) => {
                if (err) reject(err)
                else {
                    resolve("Daten erstellt")
                }
            })
        })
    })
}


readFile(dataFile)
.then(res => (console.log(res)))
