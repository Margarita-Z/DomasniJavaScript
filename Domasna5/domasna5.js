/* Task 1 */
let fruits = ['Apple', 'Banana', 'Orange'];
let students = [
    {
        firstName: 'John',
        lastName: 'Doe',
        index: 20201
    },
    {
        firstName: 'Jane',
        lastName: 'Doe',
        index: 20202
    },
    {
        firstName: 'David',
        lastName: 'Vinoth',
        index: 20203
    },
    {
        firstName: 'Divya',
        lastName: 'Ishitha',
        index: 20204
    },
    {
        firstName: 'Thomas',
        lastName: 'Edgardson',
        index: 20205
    }
];
fruits.forEach(fruit => {
    console.log(fruit);
});

students.forEach(student => {
    console.log(student);
});

/* Task 2 */

students.forEach(student => {
    console.log(`${student.firstName} ${student.lastName} ${student.index}`);
});

/* Task 3 */

for(let i = 1; i <= 10; i++) {
    console.log(i);
}

/* Task 4 */
// for
for(let i = 0; i <= 10; i = i + 2) {
    console.log(i , 'even');
}
// while
let i = 0;
while(i < 10) {
    i % 2 == 0;
    i = i + 2;
    console.log(i);
}

// a
for(let i = 0; i <= 10; i++) {
    if (i % 2 === 0){
        console.log(i , 'even'); 
    }
}


/* Task 5 */

for(let i = 1; i <= 10; i = i + 2) {
    console.log(i , ' odd');
}

// a

for(let i = 0; i <= 10; i++) {
    if (i % 2 !== 0){
        console.log(i , 'odd'); 
    }
}