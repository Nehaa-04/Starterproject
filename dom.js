//console.dir(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
document.title = "123";
console.log(document.title);
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
console.log(document.all[10].textContent="Hello");
console.log(document.forms);
console.log(document.links);
console.log(document.images);
//console.log(document.getElementById('header-title'));
//var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');

//console.log(headerTitle);
//headerTitle.textContent = 'Hello';
//headerTitle.innerText = 'Goodbye';
//console.log(headerTitle.innerText);
//headerTitle.innerHTML = '<h3>Hello</h3>';
//headerTitle.style.borderBottom = 'solid 3px #000';
header.style.borderBottom = 'solid 3px #000';


