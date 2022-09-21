const express = require('express');
const app = express();
const karyawanRoutes = require('../routes/karyawan')
const recordRoutes = require('../routes/record')
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/karyawan',karyawanRoutes);
app.use('/record',recordRoutes);
app.use('/');

module.exports = app;


