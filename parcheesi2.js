var player1;
var player2;
var Game_State;

turn;

document.getElementById("end_turn").addEventListener("click", function(e){
		 if( ! confirm("End Turn?") ){
            e.preventDefault(); // ! => don't want to do this
        } else {
			
            if(turn.get_id() == player1.get_id()){
				player_turn(player2);
			}else{
				player_turn(player1);
			}
        }
    });

function run() {
	var context = document.getElementById("board").getContext("2d");
	
	Game_State = new Game(null, null, null);
	
	player1 = new User(1, "John");
	player2 = new User(2, "Mary");
	player3 = new User(3, "Dan");
	
	var players = [player1, player2, player3];
	
	Game_State.set_users(players);
	console.log(Game_State.get_users());
	//var myVar = eval(pieces[0]);
	Game_State.set_board_spaces(drawBoard(context));
	
	
	
	//initGamePieces(red1);
	//drawGamePiece(context, red1.xPos, red1.yPos);
	Game_State.set_pieces(drawStartingGamePieces(context));
	
	render(context, Game_State);
	
	
	get_startup();
}

//TODO move functions to server
function get_startup(){
	start = Math.floor(Math.random()*2);
	
	if(start == 1){
		player_turn(player1);
	}else{
		player_turn(player2);
	}
}


function player_turn(player){
	turn = player;

	var print_turn = player.get_name() + "'s turn";
	document.getElementById("turn").innerHTML = print_turn;
	
	//TODO Change dice to dice pictures
	var roll1 = Math.floor((Math.random() * 6) + 1);
	var roll2 = Math.floor((Math.random() * 6) + 1);
	
	var dice = "DICE ROLLS: " + roll1;
	dice = dice + " " + roll2;
	
	document.getElementById("dice").innerHTML = dice;
	
	//TODO Show move options
	
}

class Game{
	constructor(Users, Pieces, Board_Spaces){
		this._Users = Users;
		this._Pieces = Pieces;
		this._Board_Spaces = Board_Spaces;
	}
	
	get_users(){
		return this._Users;
	}
	
	set_users(Users){
		this._Users = Users;
	}
	
	get_pieces(){
		return this._Pieces;
	}
	
	set_pieces(Pieces){
		this._Pieces = Pieces;
	}
	
	get_board_spaces(){
		return this._Board_Spaces;
	}
	
	set_board_spaces(Board_Spaces){
		this._Board_Spaces = Board_Spaces;
	}
}

class User{
	constructor(id, name){
		this._id = id;
		this._name = name;
	}
	
	get_id(){
		return this._id;
	}
	
	get_name(){
		return this._name;
	}
}

class Position{
	constructor(x, y){
		this._x = x;
		this._y = y;
	}

	get_x(){
		return this._x;
	}
	
	get_y(){
		return this._y;
	}
	
	set_x(x){
		this._x = x;
	}
	
	set_y(y){
		this._y = y;
	}
<<<<<<< HEAD
=======

>>>>>>> e88a6c188a0302df2386d3ba560906414ada65c3
}

class Piece {
	
	constructor(color, number, pos, circle){
		this._color = color;
		this._number = number;
		this._pos = pos;
		this._original = pos;
		this._circle = circle;
	}
	
	get_pos(){
		return this._pos;
	}
	
	set_pos(pos){
		this._pos = pos;
	}
	
	get_color(){
		return this._color;
	}
	
	get_number(){
		return this._name;
	}
	
	get_circle(){
		return this._circle;
	}
	
	set_circle(circle){
		this._circle = circle;
	}
	
	get_original(){
		return this._original;
	}
}

class Circle{
	constructor(x, y, radius, start_angle, end_angle){
		this._x = x;
		this._y = y;
		this._radius = radius;
		this._start_angle = start_angle;
		this._end_angle = end_angle;
	}
	
	get_x(){
		return this._x;
	}
	
	set_x(x){
		this._x = x;
	}
	
	get_y(){
		return this._y;
	}
	
	set_y(y){
		this._y = y;
	}
	
	get_radius(){
		return this._radius;
	}
	
<<<<<<< HEAD
	//var num = game.get_users.length;
	
	/*
	var pieces = [new Piece("red", 1, pos), new Piece("red", 2, pos), new Piece("red", 3, pos),new Piece("red", 4, pos), new Piece("yellow", 1, pos), new Piece("yellow", 2, pos), new Piece("yellow", 3, pos), new Piece("yellow", 4, pos)];
	
	if(num == 3){
		var i = 0;
		for(i; i < 4; i++){
			pieces.push(new Piece("blue", i+1, pos);
		}
	}else if(num == 4){
		var i = 0;
		for(i; i < 4; i++){
			pieces.push(new Piece("green", i+1, pos);
		}
	}*/
	
	
	//red
	ctx.beginPath();
	ctx.arc(75, 491, 15, 0, 2 * Math.PI);
	//ctx.moveTo(165,491);
	ctx.arc(150, 491, 15, 0, 2 * Math.PI);
	ctx.moveTo(90,566);
	ctx.arc(75, 566, 15, 0, 2 * Math.PI);
	ctx.moveTo(165,566);
	ctx.arc(150, 566, 15, 0, 2 * Math.PI);
	ctx.fillStyle = "tan";
	ctx.fill();
	ctx.beginPath();
	ctx.moveTo(87, 491);
	ctx.arc(75, 491, 12, 0, 2 * Math.PI);
	ctx.moveTo(165,491);
	ctx.arc(150, 491, 12, 0, 2 * Math.PI);
	ctx.moveTo(90,566);
	ctx.arc(75, 566, 12, 0, 2 * Math.PI);
	ctx.moveTo(165,566);
	ctx.arc(150, 566, 12, 0, 2 * Math.PI);
	ctx.fillStyle = "red";
	ctx.fill();
	//yellow
	ctx.beginPath();
	ctx.moveTo(506,75);
	ctx.arc(491, 75, 15, 0, 2 * Math.PI);
	ctx.moveTo(581,75);
	ctx.arc(566, 75, 15, 0, 2 * Math.PI);
	ctx.moveTo(506,150);
	ctx.arc(491, 150, 15, 0, 2 * Math.PI);
	ctx.moveTo(581,150);
	ctx.arc(566, 150, 15, 0, 2 * Math.PI);
	ctx.fillStyle = "tan";
	ctx.fill();
	ctx.beginPath();
	ctx.moveTo(506,75);
	ctx.arc(491, 75, 12, 0, 2 * Math.PI);
	ctx.moveTo(581,75);
	ctx.arc(566, 75, 12, 0, 2 * Math.PI);
	ctx.moveTo(506,150);
	ctx.arc(491, 150, 12, 0, 2 * Math.PI);
	ctx.moveTo(581,150);
	ctx.arc(566, 150, 12, 0, 2 * Math.PI);
	ctx.fillStyle = "yellow";
	ctx.fill();
	//green
	ctx.beginPath();
	ctx.moveTo(506,491);
	ctx.arc(491, 491, 15, 0, 2 * Math.PI);
	ctx.moveTo(581,491);
	ctx.arc(566, 491, 15, 0, 2 * Math.PI);
	ctx.moveTo(506,566);
	ctx.arc(491, 566, 15, 0, 2 * Math.PI);
	ctx.moveTo(581,566);
	ctx.arc(566, 566, 15, 0, 2 * Math.PI);
	ctx.fillStyle = "tan";
	ctx.fill();
	ctx.beginPath();
	ctx.moveTo(504,491);
	ctx.arc(491, 491, 12, 0, 2 * Math.PI);
	ctx.moveTo(579,491);
	ctx.arc(566, 491, 12, 0, 2 * Math.PI);
	ctx.moveTo(504,566);
	ctx.arc(491, 566, 12, 0, 2 * Math.PI);
	ctx.moveTo(579,566);
	ctx.arc(566, 566, 12, 0, 2 * Math.PI);
	ctx.fillStyle = "green";
	ctx.fill();
	//blue
	ctx.beginPath();
	ctx.moveTo(90,75);
	ctx.arc(75, 75, 15, 0, 2 * Math.PI);
	ctx.moveTo(165,75);
	ctx.arc(150, 75, 15, 0, 2 * Math.PI);
	ctx.moveTo(90,150);
	ctx.arc(75, 150, 15, 0, 2 * Math.PI);
	ctx.moveTo(165,150);
	ctx.arc(150, 150, 15, 0, 2 * Math.PI);
	ctx.fillStyle = "tan";
	ctx.fill();
	ctx.beginPath();
	ctx.moveTo(88,75);
	ctx.arc(75, 75, 12, 0, 2 * Math.PI);
	ctx.moveTo(163,75);
	ctx.arc(150, 75, 12, 0, 2 * Math.PI);
	ctx.moveTo(88,150);
	ctx.arc(75, 150, 12, 0, 2 * Math.PI);
	ctx.moveTo(163,150);
	ctx.arc(150, 150, 12, 0, 2 * Math.PI);
	ctx.fillStyle = "blue";
	ctx.fill();
	
	ctx.stroke();
=======
	set_radius(radius){
		this._radius = radius;
	}
	
	get_start_angle(){
		return this._start_angle;
	}
	
	set_start_angle(start_angle){
		this._start_angle = start_angle;
	}
	
	get_end_angle(){
		return this._end_angle;
	}
	
	set_end_angle(end_angle){
		this._end_angle = end_angle;
	}
>>>>>>> e88a6c188a0302df2386d3ba560906414ada65c3
}

class rectBoardPiece{
	constructor(x, y, width, height, color, tokens){
		this._x = x;
		this._y = y;
		this._width = width;
		this._height = height;
		this._color = color;
	}
	get_x(){
		return this._x;
	}
	
	get_y(){
		return this._y;
	}
	
	get_width(){
		return this._width;
	}
	
	get_height(){
		return this._height;
	}
	
	set_x(x){
		this._x = x;
	}
	
	set_y(y){
		this._y = y;
	}
	
	set_width(width){
		this._width = width;
	}
	
	set_height(height){
		this._height = height;
	}
	
	get_color(){
		return this._color;
	}
}

class triangleBoardPiece{
	constructor(point1, point2, point3, color, tokens){
		this._point1 = point1;
		this._point2 = point2;
		this._point3 = point3;
		this._color = color;
	}
	get_point1(){
		return this._point1;
	}
	
	get_point2(){
		return this._point2;
	}
	
	get_point3(){
		return this._point3;
	}
	
	set_point1(point1){
		this._point1 = point1;
	}
	
	set_point2(point2){
		this._point2 = point2;
	}
<<<<<<< HEAD
	
	set_point3(point3){
		this._point3 = point3;
	}
	
=======
	
	set_point3(point3){
		this._point3 = point3;
	}
	
>>>>>>> e88a6c188a0302df2386d3ba560906414ada65c3
	get_color(){
		return this._color;
	}
}

<<<<<<< HEAD
class circleBoardPiece{
	constructor(position, radius, color, tokens){
		this._position = position;
		this._radius = radius;
		this._color = color;
	}
	get_position(){
		return this._position;
	}
	
	get_radius(){
		return this._radius;
	}
	
	set_position(position){
		this._position = position;
	}
	
	set_radius(radius){
		this._radius = radius;
	}
	
	get_color(){
		return this._color;
	}
}

=======
>>>>>>> e88a6c188a0302df2386d3ba560906414ada65c3
class otherBoardPiece{
	constructor(point1, point2, point3, point4, color, tokens){
		this._point1 = point1;
		this._point2 = point2;
		this._point3 = point3;
		this._point4 = point4;
		this._color = color;
	}
	get_point1(){
		return this._point1;
	}
	
	get_point2(){
		return this._point2;
	}
	
	get_point3(){
		return this._point3;
	}
	
	get_point4(){
		return this._point4;
	}
	
	set_point1(point1){
		this._point1 = point1;
	}
	
	set_point2(point2){
		this._point2 = point2;
	}
	
	set_point3(point3){
		this._point3 = point3;
	}
	
	set_point4(point4){
		this._point4 = point4;
	}
	
	get_color(){
		return this._color;
	}
<<<<<<< HEAD
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
	else if(boardPiece instanceof circleBoardPiece) {
		ctx.moveTo(boardPiece.get_position().get_x(),boardPiece.get_position().get_y());
		ctx.arc(boardPiece.get_position().get_x()-boardPiece.get_radius(), boardPiece.get_position().get_y(), boardPiece.get_radius(), 0, 2 * Math.PI);
	}
	else if(boardPiece instanceof otherBoardPiece) {
		ctx.moveTo(boardPiece.get_point1().get_x(),boardPiece.get_point1().get_y());
		ctx.lineTo(boardPiece.get_point2().get_x(),boardPiece.get_point2().get_y());
		ctx.lineTo(boardPiece.get_point3().get_x(),boardPiece.get_point3().get_y());
		ctx.lineTo(boardPiece.get_point4().get_x(),boardPiece.get_point4().get_y());
	}
	console.log(typeof boardPiece.get_color());
	ctx.fillStyle = boardPiece.get_color();
	ctx.fill();
	ctx.stroke();
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
	boardPieces.push(new circleBoardPiece(new Position(95,75), 20, "black"));
	boardPieces.push(new circleBoardPiece(new Position(170,75), 20, "black"));
	boardPieces.push(new circleBoardPiece(new Position(95,150), 20, "black"));
	boardPieces.push(new circleBoardPiece(new Position(170,150), 20, "black"));
	//yellow circles
	boardPieces.push(new circleBoardPiece(new Position(511,75), 20, "black"));
	boardPieces.push(new circleBoardPiece(new Position(586,75), 20, "black"));
	boardPieces.push(new circleBoardPiece(new Position(511,150), 20, "black"));
	boardPieces.push(new circleBoardPiece(new Position(586,150), 20, "black"));
	//red circles
	boardPieces.push(new circleBoardPiece(new Position(95,491), 20, "black"));
	boardPieces.push(new circleBoardPiece(new Position(170,491), 20, "black"));
	boardPieces.push(new circleBoardPiece(new Position(95,566), 20, "black"));
	boardPieces.push(new circleBoardPiece(new Position(170,566), 20, "black"));
	//green circles
	boardPieces.push(new circleBoardPiece(new Position(511,491), 20, "black"));
	boardPieces.push(new circleBoardPiece(new Position(586,491), 20, "black"));
	boardPieces.push(new circleBoardPiece(new Position(511,566), 20, "black"));
	boardPieces.push(new circleBoardPiece(new Position(586,566), 20, "black"));
	
	for(var i = 0; i < boardPieces.length; i++) {
		drawBoardPiece(ctx, boardPieces[i]);
	}
=======
>>>>>>> e88a6c188a0302df2386d3ba560906414ada65c3
}