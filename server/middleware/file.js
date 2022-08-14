const multer = require('multer');
const { Track } = require('../db/models');

const DB = [];

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'audio/');
  },
  filename(req, file, cb) {
    const name = `${new Date().toISOString()}-${file.originalname}`;
    cb(null, name);
    const findAudio = Track.update({ url: name }, { where: { url: 'url' } });
  },
});

const allowedMimeTypes = ['audio/wav', 'audio/mp3'];

const filter = (req, file, cb) => {
  if (!allowedMimeTypes.includes(file.mimetype.toLowerCase())) {
    cb(null, false);
  }
  cb(null, true);
};

module.exports = multer({ storage, filter });
module.exports.DB = DB;
