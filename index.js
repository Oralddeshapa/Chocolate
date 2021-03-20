//firebase deploy --only hosting

let customize = document.querySelector('.customize');
let name = document.getElementsByClassName('name');
let sweets = document.getElementsByClassName('sweets');
let footer = document.getElementsByClassName('footer');
footer = footer[0];
sweets = sweets[0];
name = name[name.length - 1];

const first = `
			<div class="img-holder"><img src="images/sharlotka.png" alt="cake"></div>
			<hr/>
			<div class="name">Your name goes here</div> 
			<hr/>
			<p class="description">And here is description</p>
			`

const second = `
			<div class="ing_custom">
				<ol class="ing_list">
					<li>Water</li>
					<li>Flavor</li>
				</ol>
			</div>
			<hr/>
			<ol class="recipe">
				<li>Boil Water</li>
				<li>Mix water with flavor</li>
			</ol>
			`

const third = `
			<div class="input_form">
				<p><b>URL to cake photo:</b><br>
	   				<input class="url_in" type="text" size="40" placeholder="Your photo">
	  			</p>
	  			<p><b>Cake name:</b><br>
	   				<input class="name_in" type="text" size="40" placeholder="Your name goes here">
	  			</p>
	  			<p><b>Description:</b><br>
	   				<textarea class="desc_in" cols="40" rows="3" placeholder="And here is description"></textarea>
	  			</p>
	  			<p><b>Picture size:</b><br>
	  				<input class="range_in" type="range" min="50" max="100" value="100">
	  			</p>
	  			<p><b>Ingridients:</b><br>
	  				<select class="ing_option" size="1">
				      <option value="1">Water</option>
				      <option value="2">Flavor</option>
				    </select>
				    <button class="add_ing">ADD</button>
				    <input class="ing_in" type="text" size="40">
				</p>
				<p><b>Steps:</b><br>
	  				<select class="steps" size="1">
				      <option value="1">Boil water</option>
				      <option value="2">Mix water with flavor</option>
				    </select>
				    <button class="add_step">ADD</button>
				    <textarea class="step_in" cols="40" rows="3"></textarea>
				</p>
				<button class="save" >Save</button>
			</div>
			`

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
    	 if(li_list[i].innerHTML == val)
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
    	 if(li_list[i].innerHTML == val)
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