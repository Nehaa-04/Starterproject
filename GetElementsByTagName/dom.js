//GetElementByClassName

var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent="Hello 2";
items[1].style.fontWeight='bold';
items[1].style.backgroundColor='yellow';

//items.style.backgroundColor='#f4f4f4'; 
//not possible, we have to loopthrough it coz it is an array

 for(var i=0; i<items.length; i++)
 {
    items[i].style.backgroundColor='#f4f4f4'; 
 }

//items[2].style.backgroundColor='green';

for(var i=0; i<items.length; i++)
{
    items[i].style.fontWeight='bold';
}

//GetElementByTagName
/*
var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent = "hello"
li[1].style.backgroundColor = 'yellow';

for(var i=0; i<li.length; i++)
{
  li[i].style.backgroundColor = '#f4f4f4';
}

li[4].textContent="hello";
*/