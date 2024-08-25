const swaggerJsDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'User Management API',
      version: '1.0.0',
      description: 'API for managing users',
    },
    servers: [
      {
        url: 'http://localhost:3002/api',
      },
    ],
  },
  apis: ['./routes/userRoutes.js'],
};

const swaggerSpec = swaggerJsDoc(options);

module.exports = swaggerSpec;
