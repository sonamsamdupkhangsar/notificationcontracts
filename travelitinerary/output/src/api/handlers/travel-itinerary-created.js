
const handler = module.exports = {};

/**
 * Informat about new Travel Itinerary.
 * @param {object} options
 * @param {object} options.message
 * @param {integer} options.message.payload.id - id of the travel itinerary.
 * @param {string} options.message.payload.name - A name to show to in mobile notification such as &#39;Your Flight has been booked.&#39;
 */
handler.onNewTravelItinerary = async ({message}) => {
  // Implement your business logic here...
};
