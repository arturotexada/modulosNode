





const http = require('http');  // Crear servidor


const path = require('path');   // 
const fs = require('fs/promises');
const { response } = require('express');
//const { HttpServerRequest } = require('http');

const PORT = 8000;

// const app = http.createServer((req, res) => {
//     // funcionamiento
//     const jsonPath = path.resolve('./data.json');
//     console.log(jsonPath);
//     res.end();
// });


// const app = http.createServer((req, res) => {
//     // funcionamiento
//     const jsonPath = path.resolve('./data.json');
//     console.log(req.method);
//     res.end();
// });


// const app = http.createServer(async(req, res) => {
//     // funcionamiento
//     const method = req.method;
//     console.log(req.url)
//     if (method == 'GET') {
//         const jsonPath = path.resolve('./data.json');
//         const jsonFile = await fs.readFile(jsonPath, 'utf8');
//         res.setHeader("Content-Type", "application/json");
//         res.write(jsonFile);
//     }    
//         res.end();
// });


// const app = http.createServer(async(req, res) => {
//     // funcionamiento
//     const method = req.method;
//     const url = req.url;

//     if(url == '/tasks' && method == 'GET') {
//             const jsonPath = path.resolve('./data.json');
//             const jsonFile = await fs.readFile(jsonPath, 'utf8');
//             res.setHeader("Content-Type", "application/json");
//             res.write(jsonFile);    
//     }    
//         res.end();
// });


const app = http.createServer(async(req, res) => {
    // funcionamiento
    const method = req.method;
    const url = req.url;

    if(url== '/tasks') {
        const jsonPath = path.resolve('./data.json');
        const jsonFile = await fs.readFile(jsonPath, 'utf8');
        if (method == 'GET') {
            // moved 'path' codeline
            // moved 'readFile' line of code
            res.setHeader("Content-Type", "application/json");
            req.writeHead('200');
            res.write(jsonFile);
        }

        if (method == 'POST') {
            console.log(req.body)
            // const jsonPath = path.resolve('./data.json');
            // const jsonFile = await fs.readFile(jsonPath, 'utf8');
            // res.setHeader("Content-Type", "application/json");
            // res.write(jsonFile);

            // Agregar la data a dataJSON
            // necesito obtener la información
            // necesito escribir en el archivo
            // necesito la ruta del archivo
            // primero leer en el archivo
            // escribir en el archivo

            req.on('data', (data) => {
                const newTask = JSON.parse(data);
                console.log(newTask);
                const arr = JSON.parse(jsonFile);
                
                arr.push(newTask);
                console.log(arr);
                //console.log(newTask);
            })
        }

    }    
        res.end();
});


app.listen(PORT);
console.log("Servidor corriendo");