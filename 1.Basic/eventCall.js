const eventLogger = require('./eventLogger');
const logger = new eventLogger.Logger();

logger.on('call_author', (obj) => console.log(`Author: Hello ${obj.name}`));

logger.log('hello');