const Router = require('hermesjs/lib/router');
const {validateMessage} = require('../../lib/message-validator');
const router = new Router();
const jobPostedHandler = require('../handlers/job-posted');
module.exports = router;

/**
 * Inform about new Job posted or created.
 */
router.use('job/posted', async (message, next) => {
  try {
    await validateMessage(message.payload,'job/posted','newJob','publish');
    await jobPostedHandler.onNewJob({message});
    next();
  } catch (e) {
    next(e);
  }
});
