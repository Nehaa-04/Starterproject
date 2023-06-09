/*
//Traversing The Dom
 var itemList = document.querySelector('#items');

 //ParentNode
 console.log(itemList.parentNode);
 itemList.parentNode.style.backgroundColor='#f4f4f4';
 console.log(itemList.parentNode.parentNode);
 console.log(itemList.parentNode.parentNode.parentNode);

 //ParentElement
 console.log(itemList.parentElement);
 itemList.parentElement.style.backgroundColor='#f4f4f4';
 console.log(itemList.parentElement.parentElement);
 console.log(itemList.parentElement.parentElement.parentElement);

 //childNodes
 console.log(itemList.childNodes);
 console.log(itemList.children[1]);
 itemList.children[1].style.backgroundColor='yellow';

 //FirstChild
 console.log(itemList.firstChild);
 //FirstElementChild
 console.log(itemList.firstElementChild);
 itemList.firstElementChild.textContent='Hello';

 //LastChild
 console.log(itemList.lastChild);
 //LastElementChild
 console.log(itemList.lastElementChild);
 itemList.lastElementChild.textContent='Hello 4';

  //nextSibling
  console.log(itemList.nextSibling);
  //nextElementSibling
  console.log(itemList.nextElementSibling);

  //previousSibling
  console.log(itemList.previousSibling);
  //previousElementSibling
  console.log(itemList.previousElementSibling);
  itemList.previousElementSibling.style.color = 'green';

  //createElement

  //Create a div
  var newDiv = document.createElement('div');

  //Add class
  newDiv.className='hello';

  //Add id
  newDiv.id='hello';

  //Add attr
  newDiv.setAttribute('title','Hello Div');

  //Create text node
  var newDivText = document.createTextNode('Hello World');

  //Add text to div
  newDiv.appendChild(newDivText);

   var container = document.querySelector('header .container');
   var h1 = document.querySelector('header h1');

   console.log(newDiv);

   newDiv.style.fontSize = '30px';

   container.insertBefore(newDiv,h1);
   
  */
  
   const namelabel = document.querySelector('#header-title');
   if(namelabel)
   {
    namelabel.textContent = 'Hello ' + namelabel.textContent;
   }

   const itemList = document.querySelector('#items');
   if(itemList)
   {
    itemList.firstElementChild.textContent = 'Hello ' + itemList.firstElementChild.textContent;
   }

   
   //FirstElementChild
   //var itemList = document.querySelector('#items');
   //console.log(itemList.firstElementChild);
   //itemList.firstElementChild.textContent='Hello item 1';
