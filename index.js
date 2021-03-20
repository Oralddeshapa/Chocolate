//firebase deploy --only hosting

let customize = document.querySelector('.customize');
let name = document.getElementsByClassName('name');
let sweets = document.getElementsByClassName('sweets');
let footer = document.getElementsByClassName('footer');
footer = footer[0];
sweets = sweets[0];
name = name[name.length - 1];

const first = `
			<div class="img-holder"><img src="images/sharlotka.png" alt="sharlotka"></div>
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
	   				<input type="text" size="40" placeholder="Your photo">
	  			</p>
	  			<p><b>Cake name:</b><br>
	   				<input type="text" size="40" placeholder="Your name goes here">
	  			</p>
	  			<p><b>Description:</b><br>
	   				<textarea name="comment" cols="40" rows="3" placeholder="And here is description"></textarea>
	  			</p>
	  			<p><b>Picture size:</b><br>
	  				<input type="range" min="1" max="100" value="50">
	  			</p>
	  			<p><b>Ingridients:</b><br>
	  				<select size="1">
				      <option value="1">Water</option>
				      <option value="2">Flavor</option>
				    </select>
				    <input type="text" size="40">
				</p>
				<p><b>Steps:</b><br>
	  				<select size="1">
				      <option value="1">Boil water</option>
				      <option value="2">Mix water with flavor</option>
				    </select>
				    <textarea name="comment" cols="40" rows="3"></textarea>
				</p>
				<button>Save</button>
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

}