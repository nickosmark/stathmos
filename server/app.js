const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const usersRoutes = require('./routes/users');
const submissionsRoutes = require('./routes/submissions');
const commentsRoutes = require('./routes/comments');

const sequelize = require('./config/database');

const app = express();

app.use(bodyParser.json()); // application/json

app.use('/submissions',submissionsRoutes);
app.use('/comments',submissionsRoutes);
app.use('/users',usersRoutes);
app.use('/submissions',submissionsRoutes);
app.use('/admin',commentsRoutes);  

//ERROR 404
app.use((req,res,next) =>{
    res.status(404).send('<h1>Oops:page not found!</h1>');
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const server = http.createServer(app);

sequelize.sync().then(result => {server.listen(5000); }).catch(err =>{console.log(err)})

