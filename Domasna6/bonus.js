// 1.
document.body.style.fontFamily = 'Arial, sans-serif';
// 2.
document.getElementById('nickname').textContent = 'Margarita-Z';
document.getElementById('favorites').textContent = 'javascript';
document.getElementById('hometown').textContent = 'Radovis';
//3.
let list = document.getElementsByTagName('li');
for (let i = 0; i < items.length; i++) {
   list[i].className = 'listItem';
}
let mouse_over = () => {
    list.style.color = 'font';
    list.style.backgroundColor = 'red';
    list.style.font-size = '14px';
};
list.addEventListener('mouseover', mouse_over);
