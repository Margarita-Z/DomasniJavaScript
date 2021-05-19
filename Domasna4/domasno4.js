/* Task 1 */

let person1 = {
    firstName: 'Margarita',
    lastName: 'Zdraveva'
};
let person2 = {
    firstName: 'Trajce',
    lastName: 'Zdravev'
};
let person3 = {
    firstName: 'Petar',
    lastName: 'Zdravev'
};
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1['firstName']);
console.log(person1['lastName']);

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2['firstName']);
console.log(person2['lastName']);

console.log(person3.firstName);
console.log(person3.lastName);
console.log(person3['firstName']);
console.log(person3['lastName']);

/* Task 2 */

person1.age = 31;
//person1['age'] = 31;
console.log(person1);
person2.age = 32;
//person2['age'] = 32;
console.log(person2);
person3.age = 1;
//person3['age'] = 1;
console.log(person3);

/* Task 3 */

if (person1.age > person2.age && person1.age > person3.age) {
    console.log('old', person1.age);
} else if (person2.age > person1.age && person2.age > person3.age) {
    console.log('old', person2.age);
} else if (person3.age > person1.age && person3.age > person2.age) {
    console.log('old', person3.age);
}
/* Task 4 */

let people = [person1, person2, person3];

/* Task 5 */

let rezultat = 0;
people.forEach ( sum => {
    rezultat += sum.age;
});
console.log(rezultat);

/* Task 6 */


console.log(rezultat / people.length );

/* Task 7 */

/* - pop Методот pop () го отстранува последниот елемент од низата.Овој метод ја менува должината на низата.
Пример: let vegetables = ['carrot', 'onion', 'pepper'] ;
            console.log(vegetables.pop());
            output: vegetables = ['carrot', 'onion']
*/
/* - push Методот push () додава нови елементи на крајот од низата и ја враќа новата должина.И овој метод ја менува должината на низата
Пример: let vegetables = ['carrot', 'onion', 'pepper'] ;
           console.log(vegetables.push('tomato')); 
           output: vegetables = ['carrot', 'onion', 'pepper', 'tomato']
 */
/* - map Методот map() создава нова низа, пополнета со резултато од повикувачката дадена  функција за секој елемент од низата.Овој метод не ја менува оргиналната низа
Пример:  const array1 = [1, 4, 9, 16];
         const map1 = array1.map(x => x * 2);
              console.log(map1);
              expected output: Array [2, 8, 18, 32]
 */
/* - filter Методот filter () создава нова низа со сите елементи што го поминуваат тестот имплементиран од дадената функција*/

/* - sort Методот за сортирање ги сортира елементите од низата.Редоследот на сортирање може да биде или азбучен или нумерички, и или растечки (горе) или опаѓачки (долу).Стандардно, методот сортирање ги сортира вредностите како низи по азбучен ред и растечки
Пример: const months = ['March', 'Jan', 'Feb', 'Dec'];
        months.sort();
           console.log(months);
           expected output: Array ["Dec", "Feb", "Jan", "March"]
 */
