// requires express and api folder
const router = require('express').Router()
const apiRoutes = require('./api')

router.use('/api', apiRoutes)

// shows wrong route when route does not exist
router.use((req, res) => {
    return res.send('Wrong route!');
  });

module.exports = router;