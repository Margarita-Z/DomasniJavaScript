let button = document.querySelector('.button');
let inputValue = document.querySelector('.inputValue');

let click = () => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputValue.value + '&units=metric&appid=2c7d08a307717eb84d6e2458735d6e28')
        .then(response => {
            return response.json();
        })
        .then(data => {
            let p = document.createElement('p');
            let nameValue = data['name'];
            p.innerHTML = `City - ${nameValue}`;
            document.body.appendChild(p);
            p.style.fontSize = '32px';
            p.style.fontWeight = '500';
            p.style.marginBottom = '5px';
            p.style.flexDirection = 'column';
            p.style.alignItems = 'center';
            p.style.textAlign = 'center';

            let div = document.createElement('div');
            let countryValue = data['sys']['country'];
            div.innerHTML = `Country - ${countryValue}`;
            document.body.appendChild(div);
            div.style.fontSize = '32px';
            div.style.fontWeight = '500';
            div.style.marginBottom = '5px';
            div.style.flexDirection = 'column';
            div.style.alignItems = 'center';
            div.style.textAlign = 'center';

            let p1 = document.createElement('p');
            let tempValue = data['main']['temp'];
            p1.innerHTML = `${tempValue.toFixed(0)}<span>°c</span>`;
            document.body.appendChild(p1);
            p1.style.fontSize = '102px';
            p1.style.fontWeight = '900';
            p1.style.marginBottom = '30px 0px';
            p1.style.flexDirection = 'column';
            p1.style.alignItems = 'center';
            p1.style.textAlign = 'center';
            p1.style.textShadow = '2px 8px rgba(148, 19, 116, 0.5)';

            let div1 = document.createElement('div');
            let descValue = data['weather'][0]['description'];
            div1.innerHTML = descValue;
            document.body.appendChild(div1);
            div1.style.fontSize = '32px';
            div1.style.fontWeight = '500';
            div1.style.marginBottom = '5px';
            div1.style.flexDirection = 'column';
            div1.style.alignItems = 'center';
            div1.style.textAlign = 'center';
            div1.style.fontStyle = 'italic';

            let div2 = document.createElement('div');
            let windValue = data['wind']['speed'];
            div2.innerHTML = `Wind speed:${windValue}m/s`;
            document.body.appendChild(div2);
            div2.style.fontSize = '32px';
            div2.style.fontWeight = '500';
            div2.style.marginBottom = '5px';
            div2.style.flexDirection = 'column';
            div2.style.alignItems = 'center';
            div2.style.textAlign = 'center';

            console.log(data);
        })
        .catch(error => {
            console.error('error', error);
        })
    };

    button.addEventListener('click', click);