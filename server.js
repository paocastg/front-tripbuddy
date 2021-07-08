const next = require('next')
const express = require('express')
const { parse } = require("url")

global.fetch = require('node-fetch')

// Next App
const nextApp = next({
  dev: true
});

// Next Handle
const nextHandle = nextApp.getRequestHandler();

nextApp
  .prepare()
  .then(() => {
    const app = express()
    app.use(express.json())

    const routes = [
      { slug: '/', file: '/Modules/Public/HomePage' },
      { slug: '/login', file: '/Modules/Public/LoginPage' }
    ]

    for (let route of routes) {
      app.get(route.slug, (req, res) => {
        const parsedUrl = parse(req.url, true);
        const { query } = parsedUrl;
        nextApp.render(req, res, route.file, query);
      });
    }

    app.get("*", (req, res) => nextHandle(req, res));

    app.listen(3030, err => {
      if (err) {
        throw err;
      }

      console.log("Running server on http://localhost:3030");
    });
  })
  .catch(err => {
    console.error(err.stack);
    process.exit(1);
  });