//firebase deploy --only hosting

export class Slide {

    constructor(title, htmlContent) {
        this.title = title;
        this.htmlContent = htmlContent;
    }
}

export class SlideManager {

    constructor() {
        this.slideTitleList = [
            `index_body`,
            `menu_body`,
            `recipes_body`
        ];
        this.slides = [];
        this.loadSlides();
    }


    async loadSlide(slideTitle) {
        const response = await fetch(`./blocks/${slideTitle}.html`);
        const slideContent = await response.text();
        return new Slide(slideTitle, slideContent);
    }

    async loadSlides() {
        for (let slideTitle of this.slideTitleList) {
            const nextSlide = await this.loadSlide(slideTitle);
            this.slides.push(nextSlide);
        }
    }
}

export class Navigator {

    constructor() {
        this.initialize();
        this.configureOnPopHandler();
        this.state = {
            currentSlide: null,
        };
    }

    initialize() {
        window.history.replaceState(this.state, null, "");
    }

    configureOnPopHandler() {
        let that = this;
        window.onpopstate = function (event) {
            if (event.state) { that.state = event.state; }
            that.render();
        };
    }

    pushSlide(slide) {
        this.state.currentSlide = slide;
        window.history.pushState(this.state, null, "");
        this.render();
    }


    render() {
        let oldSlideBlock = document.getElementById('slide-block');
        if (oldSlideBlock != null) {
            oldSlideBlock.parentNode.removeChild(oldSlideBlock);
        }
        let slideBlock = document.createElement('div');
        slideBlock.id = 'slide-block';
        if (this.state.currentSlide != undefined) {
            slideBlock.innerHTML = `<header>
    
    <ul>
      <li><a href="#Chocolate">Black</a></li>
      <li><a href="#White">White</a></li>
      <li><a href="#Sweets">Cakes</a></li>
    </ul>
  </header>

  <div class="content">
    <div class="container-1">
      <div class="slide s-1">
        <a class="anchor" name="Chocolate"></a> 
        <div class="contaiment">
          Black Chocolate
        </div>  
      </div>
      <div class="paragraph p-1">
        <div class="contaiment">
          Шокола́д — кондитерское изделие на основе масла какао, являющееся продуктом переработки какао-бобов — семян шоколадного дерева, богатых теобромином и кофеином. Шоколад входит в состав большого количества продуктов — преимущественно десертных. Шоколад в качестве подарков выпускается в различных формах и является традиционным на некоторых праздниках, таких как Пасха и День святого Валентина. Кроме того, шоколад используется в горячих и холодных напитках, таких как шоколадное молоко и горячий шоколад.
        </div>
      </div>
    </div>

    <div class="container-2">
      <div class="slide s-2">
        <a class="anchor" name="White"></a>
        <div class="contaiment">
          White Chocolate
        </div>
      </div>
      <div class="paragraph p-2">
        <div class="contaiment">
          Белый шоколад — шоколад, который вырабатывают из масла какао, сахара, плёночного сухого молока и ванилина без добавления какао-порошка, благодаря чему он имеет цвет слоновой кости (часто с желтоватым оттенком) и содержит минимум антиоксидантов, таких, как теобромин и кофеин.Своеобразным вкусом этот продукт обязан особому сухому молоку, имеющему карамельный привкус, а в качестве ароматизатора чаще всего используется ванилин.
        </div>
      </div>
    </div>  

    <div class="cakes">
      <a class="anchor" name="Sweets"></a>
      <div class="slide s-3">
        <div class="bg"></div>
        <div class="contaiment">
          <div>Cakes menu</div>
            <div class="menu"><a href="menu.html">Menu</a></div>
        </div>
      </div>
    </div>
  </div>`;
            document.body.insertBefore(slideBlock, document.getElementsByTagName('footer')[0]);
        }
        else {
            console.log('ERROR: Current slide is undefined!');
        }
    }
}

const navigator = new Navigator();
const slideManager = new SlideManager();

navigator.pushSlide(slideManager.slides[1]);





/*class Block {
	constructor(name, text) {
		this.name = name;
		this.text = text;
	}
}

class BlocksManager {
	constructor() {
		this.blocksList = [
		`index_body`,
		`menu_body`,
		`recipes_body`
		];

		this.blocks = [];
		this.prepareBlocks();
	}

	async createBlock(name){
        const block = await fetch(`./blocks/${name}.html`);
        const content = await block.text();
        return new Block(name, content);
    }

	async prepareBlocks(){
		for (let name of this.blocksList) {
            const next = await this.createBlock(name)
            this.blocks.push(next);
        }

	}
}

class SPA {

  constructor() {
      this.init();
      this.changeBack();
      this.state = {
          currentBlock: null
      };
  }

  init() {
    window.history.replaceState(this.state, null, "");
  }

  pushBlock(block) {
        this.state.currentBlock = block;
        window.history.pushState(this.state, null, "");
        this.render();
    }

  changeBack() {
    let that = this;
    window.onpopstate = function(event) {
      if (event.state) 
      { that.state = event.state;}
      that.render();
    };
  }

  render() {
    let oldBlock = document.getElementById('old-block');
    if (oldBlock != null) {
      oldBlock.parentNode.removeChild(oldBlock);
    }
    let newBlock = document.createElement('div');
    newBlock.id = 'old-block';
    if (this.state.currentBlock != undefined) {
      newBlock.innerHTML = this.state.currentBlock.text;
      document.body.insertBefore(newBlock, document.getElementsByTagName('footer')[0]);
    }
    else 
      alert('What?');
  }

}

const BB = new BlocksManager();
const Spa = new SPA();

Spa.pushBlock(BB.blocks[0]);
