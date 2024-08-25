const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://Grupo02:grupo2mineria@ac-8dssom8-shard-00-00.coxucv1.mongodb.net:27017,ac-8dssom8-shard-00-01.coxucv1.mongodb.net:27017,ac-8dssom8-shard-00-02.coxucv1.mongodb.net:27017/comments_db?replicaSet=atlas-h9rf95-shard-0&ssl=true&authSource=admin', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
