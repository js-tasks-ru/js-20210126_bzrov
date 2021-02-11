export default class ColumnChart {
  constructor({data = [], label = '', link = '', value = 0} = {}) {
    this.data = data;
    this.label = label;
    this.link = link;
    this.value = value;
    this.chartHeight = 50;
    this.nodes = {};

    this.render();
  }

	getChartColumns(data){
		const maxDataValue = Math.max(...data);
		
		return data.map( item => {
      const percent = Math.round((item / maxDataValue * 100));
      const value = Math.floor(item * (this.chartHeight / maxDataValue ));

      return `<div style="--value: ${value}" data-tooltip="${percent}%"></div>`;
		}).join('');
	}

	getChildNodes(parentNode){
		const nodes = parentNode.querySelectorAll('[data-element]');

		nodes.forEach( node => {
			this.nodes[node.dataset.element] = node;
		})
	}

	getLayout(){
		return `
			<div class="column-chart" style="--chart-height: ${this.chartHeight}">
	      <div class="column-chart__title">
	        Total ${this.label}
	        ${this.link && `<a href="${this.link}" class="column-chart__link">View all</a>`}
	      </div>
	      <div class="column-chart__container">
	        <div data-element="header" class="column-chart__header">${this.value}</div>
	        <div data-element="body" class="column-chart__chart">
	        	${this.getChartColumns(this.data)}
	        </div>
	      </div>
	    </div>
		`
	}


	render(){
		const element = document.createElement("div");

		element.innerHTML = this.getLayout();
		this.element = element.firstElementChild; 

		this.getChildNodes(this.element);

		if(!this.data.length){
			this.element.classList.add('column-chart_loading');
		}
	}

	update({newData = []}){
		this.nodes.body = this.getChartColumns(newData);

		if(newData.length){
			this.element.classList.add('column-chart_loading');
		} else{
			this.element.classList.remove('column-chart_loading');
		}
	}

	destroy(){
		this.remove()
	}

	remove(){
		this.element.remove()
	}



}
