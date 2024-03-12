const express = require('express');
const router = express.Router();
const fileController = require('../controllers/fileController');

router.post('/upload', fileController.upload);
router.get('/', fileController.listFiles);
router.delete('/:id', fileController.deleteFile);
router.get('/download/:id', fileController.downloadFile);

module.exports = router;
