
const order = false;

const breakfastPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (order) {
            resolve('Your order is ready, come and get it');
        } else { 
            reject( Error('Oh no, we didn\'t get that order')); //Added Error for debugging
        }
    }, 3000);
});

console.log(breakfastPromise);
breakfastPromise
    .then( val => console.log(val))
    .catch(err => console.log(err))