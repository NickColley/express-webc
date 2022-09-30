# Express WebC

Not implemented yet: Access to webc bundles.

## Getting started

### 1. Install the package

```bash
npm install express express-webc
```

### 2. Create your application and define webc as your view engine

```javascript
// app.js
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

## 3. Create your initial view

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
        <h1>Hello, World.</h1>
        <cool-button>I'm a pretty cool button</cool-button>
    </body>
</html>
```

### 4. Create a component
```html
<!-- components/cool-button.webc -->
<style webc:scoped>
    button {
        position: relative;
        cursor: pointer;
        padding: 0.5em 0.8em;
        font-size: 1.2rem;
        background: forestgreen;
        color: white;
        text-shadow: 0 1px darkgreen;
        border: 1px solid darkgreen;
        border-radius: 5px;
    }

    button:hover {
        background: darkgreen;
    }

    button:active {
        top: 1px;
    }

    button:focus {
        outline-offset: 2px;
        outline: 2px solid darkgreen;
    }
</style>
<button>
    <slot></slot>
</button>
```

### 5. Run your application
```bash
node app.js
```

See [examples/ directory for full examples](examples/).

## Configuring components

Default components directory is the "components" directory

```javascript
app.set("webc:components", "directory-for-my-components");
```