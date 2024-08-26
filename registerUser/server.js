const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swaggerConfig');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');

const app = express();
const port = 3002;

app.get('/', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Microservice Running...' });
});

app.use(cors({
  origin: 'https://cinema-platform-743n6.ondigitalocean.app'
}));

app.use(bodyParser.json());
app.use('/api', userRoutes);
app.use('/swaggerRegister', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(port, () => {
  console.log(`User service listening at http://localhost:${port}`);
});
