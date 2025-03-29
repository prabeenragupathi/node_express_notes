const Event = require('events');

class Logger extends Event {
    log(msg){
        console.log(msg);

        this.emit('call_author', {name:"prabeen"});
    }
}

module.exports.Logger = Logger;