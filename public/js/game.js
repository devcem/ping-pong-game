app.onInit = function(){
	this.nodes.push({
		id : 'red-box',
		x  : 100,
		y  : 0,
		width  : 100,
		height : 100,
		color  : 'red',
		direction : 0
	});

	this.nodes.push({
		id : 'black-box',
		x  : 50,
		y  : 0,
		width  : 150,
		height : 150,
		color  : 'black'
	});
};

app.onUpdate = function(time){
	this.getNode('black-box').y++;

	if(Math.cos(this.timestamp / 100) > 0){
		this.getNode('red-box').direction = -1;
	}else{
		this.getNode('red-box').direction = 1;
	}

	this.getNode('red-box').x+=this.getNode('red-box').direction;
};