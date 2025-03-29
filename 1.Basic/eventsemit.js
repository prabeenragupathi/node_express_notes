const event = require('events');

const emiter = new event();

//?event creation
emiter.on('event_name', (obj) => {
    console.log(`hello ${obj.name}`);
})

//? event triggering
emiter.emit('event_name', {name:"prabeen"})
