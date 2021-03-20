//firebase deploy --only hosting

let customize = document.querySelector('.customize');
let name = document.getElementsByClassName('name');
let sweets = document.getElementsByClassName('sweets');
let footer = document.getElementsByClassName('footer');
footer = footer[0];
sweets = sweets[0];
name = name[name.length - 1];

customize.onclick = function (){
   name.innerHTML = "ADD"
   div = document.createElement("div");
   div.className = "CustomForm";
   sweets.classList.add('blur');
   footer.classList.add('blur');
   let space = document.createElement('div');
   space.classList.add('white_space');
   document.body.insertBefore(space, document.getElementsByClassName('content')[0]);
   document.getElementsByClassName('content')[0].style.marginTop = "-80vh";
   let Things = [];
   for (let i = 0; i <= 2; i++) {
   	Things.push(document.createElement('div'));
   	Things[i].classList.add('form_element');
   	space.appendChild(Things[i]);
   }
}