const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swaggerConfig');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors({
  origin: 'https://cinema-platform-743n6.ondigitalocean.app'
}));

app.use(bodyParser.json());
app.use('/api/auth', authRoutes);
app.use('/swaggerLogin', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
