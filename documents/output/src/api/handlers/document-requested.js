
const handler = module.exports = {};

/**
 * Inform about new Document requested.
 * @param {object} options
 * @param {object} options.message
 * @param {string} options.message.payload.event - name of event such as DocumentRequested
 * @param {integer} options.message.payload.id - id type of the document request.
 * @param {string} options.message.payload.name - Document type requested in readable form.
 */
handler.onDocumentRequested = async ({message}) => {
  // Implement your business logic here...
};
