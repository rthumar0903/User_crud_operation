const fileService = require('../services/fileService');

exports.upload = async (req, res) => {
  try {
    await fileService.saveFile(req.file);
    res.status(200).send({ message: 'File uploaded successfully.' });
  } catch (error) {
    res.status(500).send({ error: 'Upload failed.' });
  }
};

exports.listFiles = async (req, res) => {
  try {
    const files = await fileService.getFiles();
    res.status(200).send({ files });
  } catch (error) {
    res.status(500).send({ error: 'Failed to retrieve files.' });
  }
};

exports.deleteFile = async (req, res) => {
  try {
    await fileService.deleteFile(req.params.id);
    res.status(200).send({ message: 'File deleted successfully.' });
  } catch (error) {
    res.status(500).send({ error: 'Failed to delete file.' });
  }
};

exports.downloadFile = async (req, res) => {
  try {
    // Implement download functionality
  } catch (error) {
    res.status(500).send({ error: 'Failed to download file.' });
  }
};
