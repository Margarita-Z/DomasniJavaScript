/* Task 1 */

let a = 9;
let b = 7; 
let c = 4;
let d = 1;
let e = '7';

/* Arithmetic operators */

add = a + c + d;
console.log(add);
sub = b - c - d;
console.log(sub);
mult = b * c;
console.log(mult);
div = b / d;
console.log(div);
mod = a % c;
console.log(mod);
a++;
console.log(a);
a = a + 1;
console.log(a);
b--;
console.log(b);
b = b - 1;
console.log(b);

/* Comparison operators */

a = 9;
b = 7;
c = 4;
d = 1;
e = '7';
console.log(b == e);
console.log(a == b);
console.log(b === e);
console.log(b != e);
console.log(b !== e);
console.log(a !== d);
console.log(a > d);
console.log(a >= d);
console.log(b < c);
console.log(b <= a);

/* Logical operators */

console.log(a > c || c > b);
console.log(a < b || d > c);
console.log(b = e && a > d);
/* console.log(a > d && b = e);  zosto vaka mi javuva greska? */
console.log(d > a && c < b);
console.log('a > c || c > b' ,!(a > c || c > b));
console.log('d > a && c < b' , !(d > a && c < b));

/* Task 2 */

console.error('This message is an error!');
console.table(['day', 'month', 'year']);
console.log(['day', 'month', 'year']);
let fruit = { 
    name: 'Cherry',
    color: "red",
    form: "circular"
 };
console.dir(fruit);
console.dir(location); 
console.log(location);
console.info('Semos course: JavaScript basics.')

console.time('script');
setTimeout(() => {
    console.timeEnd('script');
}, 7000);

/* Bonus */
console.warn('Opasnost');

console.group("Group heading");
console.log("First line");
console.log("Second line");
console.log("Last line");
console.groupEnd();



