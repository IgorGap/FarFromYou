const router = require('express').Router();
const checkAuth = require('../middlewares/checkAuth');
const { Track } = require('../../db/models');

router.get('/', checkAuth, async (req, res) => {
  const findAudio = await Track.findAll();
  // console.log(findAudio);
  return res.json(findAudio);
});

router.post('/createtrack', async (req, res) => {
  const { artist, trackName } = req.body;
  console.log(req.body, req.session.user);
  const { id } = req.session.user;
  try {
    const newAudio = await Track.create({
      trackName, artist, url: 'url', user_id: id,
    });
    res.json(newAudio);
  } catch (er) {
    console.log(er);
  }
});
module.exports = router;
// trackName: DataTypes.STRING,
//     artist: DataTypes.STRING,
//     url: DataTypes.TEXT,
//     user_id: DataTypes.INTEGER,
