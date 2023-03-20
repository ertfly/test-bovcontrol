const express = require("express");
const app = express();

const swaggerUi = require('swagger-ui-express'),
  swaggerDocument = require('./swagger.json');

app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, {
    swaggerOptions: {
      docExpansions: "none",
      persistAuthorization: true
    }
  })
);

app.listen(8001, () => {
  console.log("server listening on port 8001");
});