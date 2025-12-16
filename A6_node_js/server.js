// Import the required built-in Node.js modules

const http = require('http'); // http is used to create the web server
const fs = require('fs').promises; // fs is used to read HTML files asynchronously
const path = require('path'); // path helps handle file paths safely across different operating systems

// Define the port number where the server will run
const PORT = 3000;

//This function reads an HTML file and sends it as a response to the browser
async function serveFile(res, filePath, statusCode = 200) {
    // error handling 
    try{
        const data = await fs.readFile(filePath); // Read the HTML file

        res.writeHead(statusCode, {'Content-Type' : 'text/html'});
        res.end(data);
    } catch (error){ // If an error occurs, send a 500 Internal Server Error status
        res.writeHead(500, {'Content-Type' : 'text/plain'});

        res.end('Internal Server Error');
    }
}

// Create the HTTP server
const server = http.createServer(async (req, res) => {

    let filePath;

    switch(req.url){
        // Handle root URL and home page route
        case '/':
        case '/home':
            filePath = path.join(__dirname, 'pages', 'home.html'); // path to the home.html file
            await serveFile(res, filePath);
            break;
        
        case '/about':
            filePath = path.join(__dirname, 'pages', 'about.html'); // path to the about.html file
            await serveFile(res, filePath);
            break;

        case '/contact':
            filePath = path.join(__dirname, 'pages', 'contact.html'); // path to the contact.html file
            await serveFile(res, filePath);
            break;

        // Handle invalid or unknown routes
        default:
            filePath = path.join(__dirname, 'pages', '404.html'); // path to the contact.html file
            await serveFile(res, 404);
            break; // Exit the switch case
    }
});


// Start the server and listen for requests on the defined port
server.listen(PORT, () => {
    // Display a message in the terminal
    console.log(`Server runnning at http://localhost:${PORT}`);
});