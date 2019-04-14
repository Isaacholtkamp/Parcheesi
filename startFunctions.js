function drawStartingGamePieces(ctx) {

	console.log(Game_State);
	var num = Game_State.get_users().length;
	console.log(Game_State.get_users().length);
	
	var pieces = [];
	var pos;
	var circle;
	
	pieces.push(new Piece("red", 1, new Position(90, 491), new Circle(75, 491, 15, 0, 2 * Math.PI)));
	pieces.push(new Piece("red", 2, new Position(165, 491), new Circle(150, 491, 15, 0, 2 * Math.PI)));
	pieces.push(new Piece("red", 3, new Position(90, 566), new Circle(75, 566, 15, 0, 2 * Math.PI)));
	pieces.push(new Piece("red", 4, new Position(165, 566), new Circle(150, 566, 15, 0, 2 * Math.PI)));
	
	console.log(typeof pieces[1].get_color());
	
	pieces.push(new Piece("yellow", 1, new Position(506, 75), new Circle(491, 75, 15, 0, 2 * Math.PI)));
	pieces.push(new Piece("yellow", 2, new Position(581, 75), new Circle(566, 75, 15, 0, 2 * Math.PI)));
	pieces.push(new Piece("yellow", 3, new Position(506, 150), new Circle(491, 150, 15, 0, 2 * Math.PI)));
	pieces.push(new Piece("yellow", 4, new Position(581, 150), new Circle(566, 150, 15, 0, 2 * Math.PI)));
	
	if(num == 3){
		pieces.push(new Piece("green", 1, new Position(506,491), new Circle(491, 491, 15, 0, 2 * Math.PI)));
		pieces.push(new Piece("green", 2, new Position(581,491), new Circle(566, 491, 15, 0, 2 * Math.PI)));
		pieces.push(new Piece("green", 3, new Position(506,566), new Circle(491, 566, 15, 0, 2 * Math.PI)));
		pieces.push(new Piece("green", 4, new Position(581,566), new Circle(566, 566, 15, 0, 2 * Math.PI)));
	}else if(num == 4){
		pieces.push(new Piece("blue", 1, new Position(90,75), new Circle(75, 75, 15, 0, 2 * Math.PI)));
		pieces.push(new Piece("blue", 2, new Position(165,75), new Circle(150, 75, 15, 0, 2 * Math.PI)));
		pieces.push(new Piece("blue", 3, new Position(90,150), new Circle(75, 150, 15, 0, 2 * Math.PI)));
		pieces.push(new Piece("blue", 4, new Position(165,150), new Circle(150, 150, 15, 0, 2 * Math.PI)));
	}
	
	
	return pieces;
}
	
function drawBoard(ctx) {
	
	var boardPieces = [];
	//red areas
	boardPieces.push(new rectBoardPiece(0, 416, 224, 224, "red"));
	boardPieces.push(new rectBoardPiece(128, 352, 32, 64, "red"));
	boardPieces.push(new rectBoardPiece(32,288,32,64, "red"));
	boardPieces.push(new rectBoardPiece(64,288,32,64, "red"));
	boardPieces.push(new rectBoardPiece(96,288,32,64, "red"));
	boardPieces.push(new rectBoardPiece(128,288,32,64, "red"));
	boardPieces.push(new rectBoardPiece(160,288,32,64, "red"));
	boardPieces.push(new rectBoardPiece(192,288,32,64, "red"));
	boardPieces.push(new rectBoardPiece(224,288,32,64, "red"));
	boardPieces.push(new triangleBoardPiece(new Position(256,256), new Position(320,320), new Position(256,386), "red"));
	
	//green areas
	boardPieces.push(new rectBoardPiece(416, 416, 224, 224, "green"));
	boardPieces.push(new rectBoardPiece(352, 480, 64, 32, "green"));
	boardPieces.push(new rectBoardPiece(288,576,64,32, "green"));
	boardPieces.push(new rectBoardPiece(288,544,64,32, "green"));
	boardPieces.push(new rectBoardPiece(288,512,64,32, "green"));
	boardPieces.push(new rectBoardPiece(288,480,64,32, "green"));
	boardPieces.push(new rectBoardPiece(288,448,64,32, "green"));
	boardPieces.push(new rectBoardPiece(288,416,64,32, "green"));
	boardPieces.push(new rectBoardPiece(288,384,64,32, "green"));
	boardPieces.push(new triangleBoardPiece(new Position(384,384), new Position(320,320), new Position(256,384), "green"));
	
	//yellow areas
	boardPieces.push(new rectBoardPiece(416, 0, 224, 224, "yellow"));
	boardPieces.push(new rectBoardPiece(480, 224, 32, 64, "yellow"));
	boardPieces.push(new rectBoardPiece(384,288,32,64, "yellow"));
	boardPieces.push(new rectBoardPiece(416,288,32,64, "yellow"));
	boardPieces.push(new rectBoardPiece(448,288,32,64, "yellow"));
	boardPieces.push(new rectBoardPiece(480,288,32,64, "yellow"));
	boardPieces.push(new rectBoardPiece(512,288,32,64, "yellow"));
	boardPieces.push(new rectBoardPiece(544,288,32,64, "yellow"));
	boardPieces.push(new rectBoardPiece(576,288,32,64, "yellow"));
	boardPieces.push(new triangleBoardPiece(new Position(384,384), new Position(320,320), new Position(384,256), "yellow"));
	
	//blue areas
	boardPieces.push(new rectBoardPiece(0, 0, 224, 224, "blue"));
	boardPieces.push(new rectBoardPiece(224, 128, 64, 32, "blue"));
	boardPieces.push(new rectBoardPiece(288,224,64,32, "blue"));
	boardPieces.push(new rectBoardPiece(288,192,64,32, "blue"));
	boardPieces.push(new rectBoardPiece(288,160,64,32, "blue"));
	boardPieces.push(new rectBoardPiece(288,128,64,32, "blue"));
	boardPieces.push(new rectBoardPiece(288,96,64,32, "blue"));
	boardPieces.push(new rectBoardPiece(288,64,64,32, "blue"));
	boardPieces.push(new rectBoardPiece(288,32,64,32, "blue"));
	boardPieces.push(new triangleBoardPiece(new Position(320,320), new Position(384,256), new Position(256,256), "blue"));
	
	//gray areas
	boardPieces.push(new rectBoardPiece(288,0,64,32, "gray"));
	boardPieces.push(new rectBoardPiece(352,128,64,32, "gray"));
	boardPieces.push(new rectBoardPiece(608,288,32,64, "gray"));
	boardPieces.push(new rectBoardPiece(480,352,32,64, "gray"));
	boardPieces.push(new rectBoardPiece(288,608,64,32, "gray"));
	boardPieces.push(new rectBoardPiece(224,480,64,32, "gray"));
	boardPieces.push(new rectBoardPiece(0,288,32,64, "gray"));
	boardPieces.push(new rectBoardPiece(128,224,32,64, "gray"));
	
	//white areas
	boardPieces.push(new rectBoardPiece(0, 352, 32, 64, "white"));
	boardPieces.push(new rectBoardPiece(32, 352, 32, 64, "white"));
	boardPieces.push(new rectBoardPiece(64, 352, 32, 64, "white"));
	boardPieces.push(new rectBoardPiece(96, 352, 32, 64, "white"));
	boardPieces.push(new rectBoardPiece(160, 352, 32, 64, "white"));
	boardPieces.push(new rectBoardPiece(192, 352, 32, 64, "white"));
	boardPieces.push(new otherBoardPiece(new Position(224,352), new Position(256,352), new Position(256,384), new Position(224,416), "white"));
	boardPieces.push(new otherBoardPiece(new Position(256,384), new Position(288,384), new Position(288,416), new Position(224,416), "white"));
	boardPieces.push(new rectBoardPiece(224,416,64,32, "white"));
	boardPieces.push(new rectBoardPiece(224,448,64,32, "white"));
	boardPieces.push(new rectBoardPiece(224,512,64,32, "white"));
	boardPieces.push(new rectBoardPiece(224,544,64,32, "white"));
	boardPieces.push(new rectBoardPiece(224,576,64,32, "white"));
	boardPieces.push(new rectBoardPiece(224,608,64,32, "white"));
	boardPieces.push(new rectBoardPiece(352,608,64,32, "white"));
	boardPieces.push(new rectBoardPiece(352,576,64,32, "white"));
	boardPieces.push(new rectBoardPiece(352,544,64,32, "white"));
	boardPieces.push(new rectBoardPiece(352,512,64,32, "white"));
	boardPieces.push(new rectBoardPiece(352,448,64,32, "white"));
	boardPieces.push(new rectBoardPiece(352,416,64,32, "white"));
	boardPieces.push(new otherBoardPiece(new Position(352,384), new Position(384,384), new Position(416,416), new Position(352,416), "white"));
	boardPieces.push(new otherBoardPiece(new Position(384,384), new Position(384,352), new Position(416,352), new Position(416,416), "white"));
	boardPieces.push(new rectBoardPiece(416,352,32,64, "white"));
	boardPieces.push(new rectBoardPiece(448,352,32,64, "white"));
	boardPieces.push(new rectBoardPiece(512,352,32,64, "white"));
	boardPieces.push(new rectBoardPiece(544,352,32,64, "white"));
	boardPieces.push(new rectBoardPiece(576,352,32,64, "white"));
	boardPieces.push(new rectBoardPiece(608,352,32,64, "white"));
	boardPieces.push(new rectBoardPiece(416,224,32,64, "white"));
	boardPieces.push(new rectBoardPiece(448,224,32,64, "white"));
	boardPieces.push(new rectBoardPiece(512,224,32,64, "white"));
	boardPieces.push(new rectBoardPiece(544,224,32,64, "white"));
	boardPieces.push(new rectBoardPiece(576,224,32,64, "white"));
	boardPieces.push(new rectBoardPiece(608,224,32,64, "white"));
	boardPieces.push(new otherBoardPiece(new Position(384,288), new Position(384,256), new Position(416,224), new Position(416,288), "white"));
	boardPieces.push(new otherBoardPiece(new Position(384,256), new Position(352,256), new Position(352,224), new Position(416,224), "white"));
	boardPieces.push(new rectBoardPiece(352,192,64,32, "white"));
	boardPieces.push(new rectBoardPiece(352,160,64,32, "white"));
	boardPieces.push(new rectBoardPiece(352,96,64,32, "white"));
	boardPieces.push(new rectBoardPiece(352,64,64,32, "white"));
	boardPieces.push(new rectBoardPiece(352,32,64,32, "white"));
	boardPieces.push(new rectBoardPiece(352,0,64,32, "white"));
	boardPieces.push(new rectBoardPiece(224,0,64,32, "white"));
	boardPieces.push(new rectBoardPiece(224,32,64,32, "white"));
	boardPieces.push(new rectBoardPiece(224,64,64,32, "white"));
	boardPieces.push(new rectBoardPiece(224,96,64,32, "white"));
	boardPieces.push(new rectBoardPiece(224,160,64,32, "white"));
	boardPieces.push(new rectBoardPiece(224,192,64,32, "white"));
	boardPieces.push(new otherBoardPiece(new Position(288,256), new Position(256,256), new Position(224,224), new Position(288,224), "white"));
	boardPieces.push(new otherBoardPiece(new Position(256,256), new Position(256,288), new Position(224,288), new Position(224,224), "white"));
	boardPieces.push(new rectBoardPiece(0, 224, 32, 64, "white"));
	boardPieces.push(new rectBoardPiece(32, 224, 32, 64, "white"));
	boardPieces.push(new rectBoardPiece(64, 224, 32, 64, "white"));
	boardPieces.push(new rectBoardPiece(96, 224, 32, 64, "white"));
	boardPieces.push(new rectBoardPiece(160, 224, 32, 64, "white"));
	boardPieces.push(new rectBoardPiece(192, 224, 32, 64, "white"));
	
	
	
	//blue circles
	ctx.beginPath();
	ctx.moveTo(95,75);
	ctx.arc(75, 75, 20, 0, 2 * Math.PI);
	ctx.moveTo(170,75);
	ctx.arc(150, 75, 20, 0, 2 * Math.PI);
	ctx.moveTo(95,150);
	ctx.arc(75, 150, 20, 0, 2 * Math.PI);
	ctx.moveTo(170,150);
	ctx.arc(150, 150, 20, 0, 2 * Math.PI);
	//yellow circles
	ctx.moveTo(511,75);
	ctx.arc(491, 75, 20, 0, 2 * Math.PI);
	ctx.moveTo(586,75);
	ctx.arc(566, 75, 20, 0, 2 * Math.PI);
	ctx.moveTo(511,150);
	ctx.arc(491, 150, 20, 0, 2 * Math.PI);
	ctx.moveTo(586,150);
	ctx.arc(566, 150, 20, 0, 2 * Math.PI);
	//red circles
	ctx.moveTo(95,491);
	ctx.arc(75, 491, 20, 0, 2 * Math.PI);
	ctx.moveTo(170,491);
	ctx.arc(150, 491, 20, 0, 2 * Math.PI);
	ctx.moveTo(95,566);
	ctx.arc(75, 566, 20, 0, 2 * Math.PI);
	ctx.moveTo(170,566);
	ctx.arc(150, 566, 20, 0, 2 * Math.PI);
	//green circles
	ctx.moveTo(511,491);
	ctx.arc(491, 491, 20, 0, 2 * Math.PI);
	ctx.moveTo(586,491);
	ctx.arc(566, 491, 20, 0, 2 * Math.PI);
	ctx.moveTo(511,566);
	ctx.arc(491, 566, 20, 0, 2 * Math.PI);
	ctx.moveTo(586,566);
	ctx.arc(566, 566, 20, 0, 2 * Math.PI);
	ctx.fillStyle = "black";
	ctx.fill();
	ctx.stroke();
	
	return boardPieces;
}
