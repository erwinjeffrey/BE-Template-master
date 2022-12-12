const express = require('express');
const bodyParser = require('body-parser');
const {sequelize} = require('./model')
const app = express();
app.use(bodyParser.json());
app.set('sequelize', sequelize)
app.set('models', sequelize.models)


const contractRoutes = require('./routes/contractRoute');
const jobRoutes = require('./routes/jobRoute');
const adminRoutes = require('./routes/adminRoute');
const profileRoutes = require('./routes/profileRoute');


app.use('/admin', adminRoutes);
app.use('/contracts', contractRoutes);
app.use('/balances', profileRoutes);
app.use('/jobs', jobRoutes);

module.exports = app;
