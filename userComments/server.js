const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/dbConfig');
const commentRoutes = require('./routes/commentRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

const app = express();
const port = 3003;

connectDB();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Microservice Running' });
});

app.use(cors({
  origin: 'http://localhost:3000'
}));

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Cinema Comment API',
      version: '1.0.0',
      description: 'API to manage general comments'
    },
    servers: [
      {
        url: `http://localhost:${port}/api`
      }
    ]
  },
  apis: ['./routes/*.js'],
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use('/swaggerComments', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/api', commentRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
