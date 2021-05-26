/* Task 1 */
//Area of Rectangle = L * W
//Perimeter of Rectangle = 2 * (L + W)

let area = (a = 0, b = 0) => {
    let p = a * b;
    return p;
};
let area_rectangle = area(7, 5);
console.log('P = ', area_rectangle);

let perimeter = (c = 0, d = 0) => {
    let l = 2 * (c + d);
    return l;
};
let perimeter_rectangle = perimeter(9, 3);
console.log('L = ', perimeter_rectangle);

/* Task 2 */
// Area of circle = π * r * r
//Perimeter of circle = 2 * π * r

let area_c = (r = 0, pi = 0) => {
    let p_c = pi * r * r;
    return p_c;
};
let area_circle = area_c(3, 3.14);
console.log('P = ', area_circle);

let perimeter_c = (r = 0, pi = 0) => {
    let l_c = 2 * pi * r;
    return l_c;
};
let perimeter_circle = perimeter_c(2, 3.14);
console.log('L = ', perimeter_circle);

/* Task 3 */
let = compares_num = (a = 0, b = 'a') => {
    return new Promise((resolve, reject) => {
        if (a > b) {
            const bigger = 'a is the bigger number';
            resolve(bigger);
        } else {
            const greska = 'error';
            reject(greska);
        }

    });
};
let com_num = compares_num(5, 'c');
console.log(com_num);

/* Task 4 */

let cop_rang = (z = 0) => {
    return new Promise((resolve, reject) => {
        if (1 <= z && z <= 25) {
            return resolve('small');
        } else {
            return reject('error');
        }
    });
};

let wait_for_response = async () => {
    try {
        console.log('try');
        let response = await cop_rang ();
        console.log('success');
        console.log('response', response);
    } catch(error) {
        console.log('catch');
        console.log(error);
    }
};
let compares = cop_rang(14);
console.log(compares);
