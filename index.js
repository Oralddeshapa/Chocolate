let first, second, third;

let customize = document.querySelector('.customize');
let name = document.getElementsByClassName('name');
let sweets = document.getElementsByClassName('sweets');
let footer = document.getElementsByClassName('footer');
footer = footer[0];
sweets = sweets[0];
name = name[name.length - 1];

async function get_data() {
	first = `<div class="img-holder"><img src="images/sharlotka.png" alt="cake"></div>
			<hr/>
			<div class="name">Your name goes here</div> 
			<hr/>
			<p class="description">And here is description</p>`
	second = await fetch('second.html');
	third = await fetch('third.html');
}

customize.onclick = function (){
   await get_data();
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
   }
   Things[0].innerHTML = first;
   Things[1].innerHTML = second;
   Things[2].innerHTML = third;
   for (let i = 0; i <= 2; i++) {
   		space.appendChild(Things[i]);
   } 

   document.querySelector('.input_form .name_in').oninput = function() {
    document.querySelector('.form_element .name').innerHTML = document.querySelector('.input_form .name_in').value;
  };

  document.querySelector('.input_form .desc_in').oninput = function() {
    document.querySelector('.form_element .description').innerHTML = document.querySelector('.input_form .desc_in').value;
  };

  document.querySelector('.input_form .url_in').oninput = function() {
    document.querySelector('.form_element .img-holder img').src = document.querySelector('.input_form .url_in').value;
  	document.querySelector('.ing_custom').style.backgroundImage = "url(" + document.querySelector('.input_form .url_in').value + ")";
  };

  document.querySelector('.range_in').oninput = function() {
    document.querySelector('.form_element .img-holder img').style.height = String(Number(document.querySelector('.range_in').value) / 3) + "vh";
  	document.querySelector('.form_element .img-holder img').style.width = document.querySelector('.range_in').value + "%";
  	let val = document.querySelector('.range_in').value;
  	document.querySelector('.ing_custom').style.backgroundSize = val + "% " + val + "%";
  };

  document.querySelector('.add_ing').onclick = function() {
    let select =  document.querySelector('.ing_option');
    let ing = document.querySelector('.ing_list');
    let val = document.querySelector('.ing_in').value;
    let option = document.createElement('option');
    let li = document.createElement('li');
    let li_list = document.querySelector('.ing_list').getElementsByTagName('li');
    for (let i = 0; i < li_list.length; i ++)
    {
    	 if(li_list[i].innerHTML.toLowerCase() == val.toLowerCase())
    	 	return;
    }
    if (val != "")
    {
	    li.value = val;
	    li.innerHTML = val;
	    option.value = val;
	    option.innerHTML = val;
	    select.appendChild(option);
	    ing.appendChild(li);
	}
  };

  document.querySelector('.add_step').onclick = function() {
    let select =  document.querySelector('.steps');
    let ing = document.querySelector('.recipe');
    let val = document.querySelector('.step_in').value;
    let option = document.createElement('option');
    let li = document.createElement('li');
    let li_list = document.querySelector('.recipe').getElementsByTagName('li');
    for (let i = 0; i < li_list.length; i ++)
    {
    	 if(li_list[i].innerHTML.toLowerCase() == val.toLowerCase())
    	 	return;
    }
    if (val != "")
    {
	    li.value = val;
	    li.innerHTML = val;
	    option.value = val;
	    option.innerHTML = val;
	    select.appendChild(option);
	    ing.appendChild(li);
	}
  };

  document.querySelector('.save').onclick = function() {
  	document.getElementsByClassName('content')[0].style.marginTop = "0";
  	sweets.classList.remove('blur');
    footer.classList.remove('blur');
  	space.parentNode.removeChild(space);
  	
  }
}