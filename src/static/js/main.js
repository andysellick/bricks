
function setVisible(el){
	el.focus().addClass('visible');
}

var brickpos = 0;

$(document).ready(function() {
	var bricksx = 10;
	var bricksy = 20;
	var brickw = 100 / bricksx;
	var brickh = 100 / bricksy;
	var brickt;
	var brickl;

	for(var y = 0; y < bricksy; y++){
		brickt = (100 / bricksy) * y;
		for(var x = 0; x < bricksx + 1; x++){
			brickl = (100 / bricksx) * x;
			if(y % 2 == 0){
				brickl -= (brickw / 2);
			}
			var brick = $('<div/>').addClass('brick').css({
				'width':brickw + '%',
				'height':brickh + '%',
				'top': brickt + '%',
				'left': brickl + '%'
			});
			brick.appendTo('#brickmain');
			brickpos++;
		}
	}
	var bricks = $('.brick');
	showBricks();
});

function showBricks(){
	$('.brick:nth-child(' + brickpos + ')').focus().addClass('visible');
	if(brickpos > 0){
		brickpos--;
		setTimeout(showBricks,50);
	}
}
