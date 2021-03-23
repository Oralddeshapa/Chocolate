//firebase deploy --only hosting

class Block {
	constructor(name, text) {
		this.name = name;
		this.text = text;
	}
}

class BlocksManager {
	constructor() {
		this.blocksList = [
		'index_body',
		'menu_body',
		'recipes_body'
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
            const next = this.createBlock(name)
            alert(name);
            alert(next);
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
        that.state = event.state;
      that.render();
    }
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
