const routes = require('express').Router();
const temple = require('./temple');

console.log("routesIndex");
routes.use('/', temple);
/*routes.use(
  '/',
    console.log("docData");
    let docData = {
      documentationURL: 'app-docs',
    };
    res.send(docData);
  })
); */

module.exports = routes;
