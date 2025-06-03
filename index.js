// /* Change document background color to silver 
// Change the font color for h1 title tag to green
// Change the font case for h3 title tags to uppercase
// Add one more fruit to the fruits list
// Add one more vegetable to the vegetables list
//  */




const doc = document.documentElement;
const title = document.getElementById('title');
const subtitle = document.getElementById('subtitle');
const categoryContainer = document.querySelectorAll('.categoryContainer');
const fruits = document.getElementById('fruList');
const vegetables = document.getElementById('vegList');
const h3Tags = document.querySelectorAll('h3')


// /* Change document background color to silver 

doc.style.backgroundColor = '#d1fbfb';

// Change the font color for h1 title tag to green
title.style.color = 'green';


// Change the font case for h3 title tags to uppercase

h3Tags.forEach(h3 =>{
    h3.style.textTransform = 'uppercase'
    h3.style.textAlign = 'center'
    h3.style.padding = '2em'
    h3.style.fontSize = '2em'
    
})





doc.style.fontFamily = 'helvetica';
title.style.fontSize = '3em';
subtitle.style.textAlign = 'center';
subtitle.style.fontSize = '2.5em';
subtitle.textContent = subtitle.textContent.toUpperCase();


categoryContainer.forEach((category) => {
   category.style.border = 'solid 2px';
   category.style.borderRadius = '0.5em';
   category.style.padding = '3em';
   category.style.backgroundColor = '#BDF1C7';

});



// Add a new fruit: Apple
const apple = document.createElement('p');
apple.textContent = 'Apples';

const appleContainer = document.createElement('div');
appleContainer.className = 'categoryContainer';

   appleContainer.style.border = 'solid 2px';
   appleContainer.style.borderRadius = '0.5em';
   appleContainer.style.padding = '2.5em';
   appleContainer.style.backgroundColor = '#BDF1C7';
      appleContainer.style.height = '25em';




const appleImg = new Image();
appleImg.src = 'https://i.pinimg.com/736x/e9/4f/f9/e94ff9033a4baba74f59b3daa4c08c1b.jpg';
appleImg.style.width = '15em';
appleImg.style.height = '15em';
appleImg.style.borderRadius = '1em';



const applePrice = document.createElement('div');
applePrice.className = 'price';
applePrice.innerHTML = '<p>Price</p><p>+</p>';

const appleQty = document.createElement('div');
appleQty.className = 'price';
appleQty.innerHTML = '<p>Quantity</p><p>kgs</p>';
appleQty.style.display = 'flex'
appleQty.style.justifyContent= 'space-between'

appleContainer.append( apple,appleImg, applePrice, appleQty);
newFruitItem.appendChild(appleContainer);
fruits.appendChild(newFruitItem);


// Add a new vegetable: Carrot
const newVegItem = document.createElement('li');

const carrot= document.createElement('p');
carrot.textContent = 'Carrots';

const carrotContainer = document.createElement('div');
carrotContainer.className = 'categoryContainer';



carrotContainer.style.border = 'solid 2px';
carrotContainer.style.borderRadius = '0.5em';
carrotContainer.style.padding = '3em';
carrotContainer.style.backgroundColor = '#BDF1C7';
carrotContainer.style.height = '25em';

const carrotImg = new Image();
carrotImg.src = 'https://i.pinimg.com/736x/b0/68/6e/b0686e954482395d6ffb75fc2f6c94de.jpg';
carrotImg.style.width = '15em';
carrotImg.style.height = '15em';
carrotImg.style.borderRadius = '1em';

const carrotPrice = document.createElement('div');
carrotPrice.className = 'price';
carrotPrice.innerHTML = '<p>Price</p><p>+</p>';
carrotPrice.style.display = 'flex'
carrotPrice.style.justifyContent= 'space-between'




const carrotQty = document.createElement('div');
carrotQty.className = 'price';
carrotQty.innerHTML = '<p>Quantity</p><p>kgs</p>';
carrotQty.style.display = 'flex'

carrotQty.style.justifyContent= 'space-between'


carrotContainer.append(carrot, carrotImg, carrotPrice, carrotQty);
newVegItem.appendChild(carrotContainer);
vegetables.appendChild(newVegItem);

