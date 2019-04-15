const express = require('express');
const multer = require('multer');
const { MulterConfig } = require('./config');
const { BoxController } = require('./controllers');
const { FileController } = require('./controllers');

const routes = express.Router();

routes.post('/boxes', BoxController.store);
routes.post('/files', multer(MulterConfig).single('file'), FileController.store);
routes.post('/boxes/:id/files', multer(MulterConfig).single('file'), FileController.store);

routes.get('/boxes/:id', BoxController.show);

module.exports = routes;