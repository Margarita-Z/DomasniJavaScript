/* Task 1 */
let a = 8;
let b = 7;
let c = 3;
a = 6;
console.log(a);
a += 2;
console.log(a);
b += 3;
console.log(b);
b -= 2;
console.log(b);
b *= 2;
console.log(b);
c /= 1;
console.log(c);
c %= 2;
console.log(c);
b %= 2;
console.log(b);

/* Task 2 */
let x = 8;
let y = 10;
let z = 9;

if (x <= y && y <= z) {
    console.log(x, y, z);
} else if (x <= z && z <= y) { 
    console.log(x, z, y);
} else if (y <= x && x <= z) {
    console.log(y, x, z);
} else if (y <= z && z <= x) {
    console.log(y, z, x);
} else if (z <= x && x <= y) {
    console.log(z, x, y);
} else {
    console.log(z, y, x);
}

/* Task 3 */
let David = 80;
let Vinoth = 77;
let Divya = 88;
let Ishitha = 95;
let Tomash = 68;
let prosec = (David + Vinoth + Divya + Ishitha + Tomash) / 5;
console.log(prosec);

if (prosec < 60) {
    console.log('F');
} else if (prosec < 70) {
    console.log('D');
} else if (prosec < 80) {
    console.log('D');
} else if (prosec < 90) {
    console.log('B');
} else if (prosec < 100) {
    console.log('A');
}

/* Task 4 */
// so switch i case
let day = 'Cetvrtok';
switch (day) {
    case 'Ponedelnik':
        console.log('workDay');
        break;
    case 'Vtornik':
        console.log('workDay');
        break;
    case 'Sreda':
        console.log('workDay');
        break;
    case 'Cetvrtok':
        console.log('workDay');
        break;
    case 'Petok':
        console.log('workDay');
        break;
    case 'Sabota':
        console.log('weekend');
        break;
    case 'Nedela':
        console.log('weekend');
        break;
    default:
        console.log('unnone');

}
// so if i else
let workDay = ['Ponedelnik', 'Vtornik', 'Sreda', 'Cetvrtok', 'Petok'];
let notWorkDay = ['Sabota', 'Nedela'];
if (day == workDay[3]) {
    console.log('work week', workDay[3]);
} else {
    console.log('weekend', notWorkDay);
}

/* Task 5 */
let month = 'Maj';
switch (month) {
    case 'Januari':
        console.log('winter');
        break;
    case 'Februari':
        console.log('winter');
        break;
    case 'Mart':
        console.log('spring');
        break;
    case 'April':
        console.log('spring');
        break;
    case 'Maj':
        console.log('spring');
        break;
    case 'Juni':
        console.log('summer');
        break;
    case 'Juli':
        console.log('summer');
        break;
    case 'Avgust':
        console.log('summer');
        break;
    case 'Septemvri':
        console.log('autumn');
        break;
    case 'Oktomvri':
        console.log('autumn');
        break;
    case 'Noemvri':
        console.log('autumn');
        break;
    case 'Dekemvri':
        console.log('winter');
        break;
    default:
        console.log('unknown month');
}

let season1 = ['Dekemvri', 'Januari', 'Februari'];
let season2 = ['Mart', 'April', 'Maj'];
let season3 = ['Juni', 'Juli', 'Avgust'];
let season4 = ['Septemvri', 'Oktomvri', 'Noemvri'];
if (month == season1){
    console.log('winter',sesona1);
} else if (month == season2){
    console.log('spring', sesona2[2]);
} else if (month == season3){
    console.log('summer', sesona3);
} else if (month == season4){
    console.log('autumn', sesona4);
} 
