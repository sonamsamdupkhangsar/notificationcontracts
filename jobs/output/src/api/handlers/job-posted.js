
const handler = module.exports = {};

/**
 * Inform about new Job posted or created.
 * @param {object} options
 * @param {object} options.message
 * @param {integer} options.message.payload.id - id of the jobPosted.
 * @param {string} options.message.payload.name - Name of the job.
 */
handler.onNewJob = async ({message}) => {
  // Implement your business logic here...
};
