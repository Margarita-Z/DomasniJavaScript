// 1.jsonplaceholder tasks
/* Task 1.1 */
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => { 
        console.log(response);
        return response.json();
    })
    .then(data => {
        
        console.log(data);
    })
    .catch(error => {
        console.error('error', error);
    });

    /* Task 1.2 */
    
    /*for(let i = 0; i < json.length; i++){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
        console.log('print the name');
        console.log(json[i].name);
        console.log('print the username');
        console.log(json[i].username);
    })
};*/

/* Task 1.3 */
let user = {
    "id": 10,
    "name": "Margarita Zdraveva",
    "username": "Moriah.Stanton",
    "email": "Rey.Padberg@karina.biz",
    "address": {
        "street": "Kattie Turnpike",
        "suite": "Suite 198",
        "city": "Radovis",
        "zipcode": "2024",
        "geo": {
            "lat": "-38.2386",
            "lng": "57.2232"
        }
    },
    "phone": "070 482 243",
    "website": "ambrose.net",
    "company": {
        "name": "Hoeger LLC",
        "catchPhrase": "Centralized empowering task-force",
        "bs": "target end-to-end models"
    }
}
fetch('https://jsonplaceholder.typicode.com/users/10', {
    method: 'PUT', 
    body: JSON.stringify({
        body: user
    }),
    headers: {
        'Content-Type': 'application/json'
    }
})
.then(response => { 
    return response.json();
})
.then(data => {
    console.log('put');
    console.log(data);
})
.catch(error => {
    console.error('error', error);
});

/* Task 1.4*/
let newUser = {
    "id": 11,
    "name": "Margarita Zdraveva",
    "username": "Margarita-Z",
    "email": "margaritazdraveve@gmail.com",
    "address": {
        "street": "samoilova",
        "suite": "40/38-2",
        "city": "Radovis",
        "zipcode": "2024",
        "geo": {
            "lat": "-38.2386",
            "lng": "57.2232"
        }
    },
    "phone": "070 482 243",
    "website": "ambrose.net",
    "company": {
        "name": "Hoeger LLC",
        "catchPhrase": "Centralized empowering task-force",
        "bs": "target end-to-end models"
    }
}
fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    body: JSON.stringify({
        body: newUser
    }),
    headers: {
        'Content-Type': 'application/json'
    }
})
.then(response => { 
    return response.json();
})
.then(data => {
    console.log('post');
    console.log(data);
})
.catch(error => {
    console.error('error', error);
});

/* Task 1.5 */
fetch('https://jsonplaceholder.typicode.com/users/11', {
    method: 'DELETE'
})
.then(response => { 
    return response.json();
})
.then(data => {
    console.log('delete');
    console.log(data);
})
.catch(error => {
    console.error('error', error);
});

/* Bonus */

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => { 
        console.log(response);
        return response.json();
    })
    .then(data => {
        
        console.log(data);
    })
    .catch(error => {
        console.error('error', error);
    });
  
    
