//GetElementByClassName

var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent="Hello 2";
items[1].style.fontWeight='bold';
items[1].style.backgroundColor='yellow';

//items.style.backgroundColor='#f4f4f4'; 
//not possible, we have to loopthrough it coz it is an array

// for(var i=0; i<items.length; i++)
// {
//    items[i].style.backgroundColor='#f4f4f4'; 
// }

//Deliverable
items[2].style.backgroundColor='green';

for(var i=0; i<items.length; i++)
{
    items[i].style.fontWeight='bold';
}



