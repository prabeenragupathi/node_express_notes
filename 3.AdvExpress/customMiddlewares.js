const logger = (req, res, next) => {
    console.log('logging...');
    next();
}

const auth = (req, res, next) => {
    console.log('Authenticated');
    next();
}

module.exports.logger = logger;
module.exports.auth = auth;