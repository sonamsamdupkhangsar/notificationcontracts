const Router = require('hermesjs/lib/router');
const {validateMessage} = require('../../lib/message-validator');
const router = new Router();
const documentRequestedHandler = require('../handlers/document-requested');
module.exports = router;

/**
 * Inform about new Document requested.
 */
router.use('document/requested', async (message, next) => {
  try {
    await validateMessage(message.payload,'document/requested','DocumentRequest','publish');
    await documentRequestedHandler.onDocumentRequested({message});
    next();
  } catch (e) {
    next(e);
  }
});
