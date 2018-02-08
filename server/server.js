const express = require("express");
const bodyParser = require('body-parser');
const serveIndex = require('serve-index');
const contentDisposition = require('content-disposition');
const app = express();
app.set("port", process.env.PORT || 4001);

// Set header to force download
function setHeaders (res, path) {
    res.setHeader('Content-Disposition', contentDisposition(path))
  }
// app.use('/static', express.static('./data'));
app.use('/ftp', express.static('./data', {
    'setHeaders': setHeaders
  }), serveIndex('./data', { 'icons': true }))

app.listen(app.get("port"), () => {
    console.log(`Find the server at: http://localhost:${app.get("port")}/`); // eslint-disable-line no-console
});