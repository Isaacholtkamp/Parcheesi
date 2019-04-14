function render(ctx, Game){
	
	var pieces = Game.get_pieces();
	var p;
	var c;
	var num;
	var i = 0;
	
	var b = Game.get_board_spaces();
	num = b.length;
	for(i; i < b; i++) {
		drawBoardPiece(ctx, boardPieces[i]);
	}
	i = 0;
	num = pieces.length;
	for(i; i < num; i++){
		p = pieces[i];
		c = p.get_circle();
		
		ctx.beginPath();
		
		ctx.moveTo(p.get_pos().get_x(), p.get_pos().get_y());
		ctx.arc(c.get_x(), c.get_y(), c.get_radius(), c.get_start_angle(), c.get_end_angle());
		
		ctx.fillStyle = "tan";
		ctx.fill();
		
		ctx.beginPath();
		
		ctx.moveTo(p.get_pos().get_x(), p.get_pos().get_y());
		ctx.arc(c.get_x(), c.get_y(), c.get_radius()-3, c.get_start_angle(), c.get_end_angle());
		
		ctx.fillStyle = p.get_color();
		ctx.fill();
	}	
}

function drawBoardPiece(ctx, boardPiece) {
	ctx.beginPath();
	if(boardPiece instanceof rectBoardPiece) {
		ctx.rect(boardPiece.get_x(), boardPiece.get_y(), boardPiece.get_width(), boardPiece.get_height());
	}
	else if(boardPiece instanceof triangleBoardPiece) {
		ctx.moveTo(boardPiece.get_point1().get_x(),boardPiece.get_point1().get_y());
		ctx.lineTo(boardPiece.get_point2().get_x(),boardPiece.get_point2().get_y());
		ctx.lineTo(boardPiece.get_point3().get_x(),boardPiece.get_point3().get_y());
	}
	else if(boardPiece instanceof otherBoardPiece) {
		ctx.moveTo(boardPiece.get_point1().get_x(),boardPiece.get_point1().get_y());
		ctx.lineTo(boardPiece.get_point2().get_x(),boardPiece.get_point2().get_y());
		ctx.lineTo(boardPiece.get_point3().get_x(),boardPiece.get_point3().get_y());
		ctx.lineTo(boardPiece.get_point4().get_x(),boardPiece.get_point4().get_y());
	}
	//console.log(typeof boardPiece.get_color());
	ctx.fillStyle = boardPiece.get_color();
	ctx.fill();
	ctx.stroke();
}