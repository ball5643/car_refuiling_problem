// const arr = [230, 290, 700];
// const m = 400;
// const distance = 950;
// for (let i = 0; i < arr.length; i++) {
//     let currStop = arr[i];
//     let result = Math.max.apply(Math, arr.filter(function(x){return x < b}));

// }
function car(distance, m, arr) {
    let stops = 0;
    let lastIndex = arr.length - 1;
    let lastStop = arr[lastIndex];
    let currStop = arr[0];
    let result = Math.max.apply(Math, arr.filter(function(x){return x <= m}));
    let index = arr.indexOf(result);
    currStop = arr[index];
    let nextStop = arr[index + 1];
    if (nextStop - currStop > m || distance - lastStop > m || currStop > m) {
        return -1;
    }
    if (distance - currStop > m) {
        stops++;
        currStop = nextStop;
    }
    if (distance - currStop <= m) {
        stops++;
    }
    else {
        return -1;
    }
    return stops;
}
// console.log(currStop);
// console.log(car(950, 400, [230, 375, 550]));
console.log(car(950, 400, [200, 375, 550, 750]));
// console.log(car(10, 3, [1, 2, 5, 9]));
// console.log(car(100, 50, [10, 20, 30, 50]));
