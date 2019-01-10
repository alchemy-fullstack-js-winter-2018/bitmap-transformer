// use seTimeout to fire a callback in 2 seconds
setTimeout(() => {
  console.log('OHHHH, callbacks');
}, 2000);

// after 1 second
setTimeout(() => {
  console.log('OHHHH, callbacks');
}, 1000);

// loop every 1 second
const msg = () => console.log('OHHHH, callbacks');
setInterval(msg, 1000, 'OHHHH, callbacks');