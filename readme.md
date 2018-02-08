### serve-to-iOS

Target

---
Serve files(mainly graphics, PDFs) in a directory to iOS in local network.

Reference to and use the two middlewares below:
1. [serve-static](https://expressjs.com/en/resources/middleware/serve-static.html)
2. [serve-index](https://expressjs.com/en/resources/middleware/serve-index.html)

Use

---
1. Put files you want to share in ./data folder.
2. `npm install`
3. `npm run start`
4. Visit 'http://{localip}:4001/ftp' for viewing files below ./data folder.