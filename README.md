# Express WebC

## Install

```bash
npm install github:NickColley/express-webc
```

```javascript
// server.js
const express = require("express");
const { WebCEngine } = require("express-webc");

const app = express();
app.engine("webc", WebCEngine);
app.set("view engine", "webc");

app.get("/", async (request, response) => {
  response.render("index");
});

app.listen(8080, () => {
  console.log("Application running at http://localhost:8080");
});
```

```html
<!-- views/index.webc -->
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Hello, World.</title>
    </head>
    <body>
        <h1>Hello, World.</h2>
    </body>
</html>
```