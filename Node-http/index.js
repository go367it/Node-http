const http = require('http') // for http module
const fs = require('fs') // for completing the file operations
const path = require('path') // for taking path
const hostname = 'localhost' // assigning the hostname
const port = 3000 // assigning the port name

// creating a server
const server = http.createServer((req, res) => {
    console.log(`Request for ${req.url} by method ${req.method}`)

    // checking if the method is get or not
    if(req.method == 'GET'){
        let fileUrl
        // checking the url 
        if(req.url == '/'){
            fileUrl = '/index.html'
        }
        else{
            fileUrl = req.url
        }

        let filePath = path.resolve('./public'+fileUrl) // resolving the path to get the file
        const fileExt = path.extname(filePath) // checking for fle extension

        // if the file path is true 
        if(fileExt == '.html'){
            fs.exists(filePath, (exists) => {
                if(!exists){ // if the filepath does not exists
                    res.statusCode = 404
                    res.setHeader('Content-Type', 'text/html')
                    res.end(`
                    <html>
                        <body>
                         <h1>Error 404: ${fileUrl} not found</h1>
                        </body>
                    </html>
                    `)
                    return
                }
                // if the file path exists
                res.statusCode = 200
                res.setHeader('Content-Type', 'text/html')
                fs.createReadStream(filePath).pipe(res)
            })
        }
        else{  // if the file path is not an html file
            res.statusCode = 404
                    res.setHeader('Content-Type', 'text/html')
                    res.end(`
                    <html>
                        <body>
                         <h1>Error 404: ${fileUrl} not an html file</h1>
                        </body>
                    </html>
                    `)
                    return
        }
    }
    else{ // if the requested method is not the get method
        res.statusCode = 404
        res.setHeader('Content-Type', 'text/html')
        res.end(`
        <html>
            <body>
                <h1>Error 404: ${req.method} not supported</h1>
            </body>
        </html>
        `)
        return
    }
})

// listening to the server
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)
})