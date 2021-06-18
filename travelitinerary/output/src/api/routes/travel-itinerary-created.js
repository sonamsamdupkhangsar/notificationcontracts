const Router = require('hermesjs/lib/router');
const {validateMessage} = require('../../lib/message-validator');
const router = new Router();
const travelItineraryCreatedHandler = require('../handlers/travel-itinerary-created');
module.exports = router;

/**
 * Informat about new Travel Itinerary.
 */
router.use('travel/itinerary/created', async (message, next) => {
  try {
    await validateMessage(message.payload,'travel/itinerary/created','NewTravelItinerary','publish');
    await travelItineraryCreatedHandler.onNewTravelItinerary({message});
    next();
  } catch (e) {
    next(e);
  }
});
