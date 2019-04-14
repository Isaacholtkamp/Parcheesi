var player1;
var player2;

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

	//var board = drawBoard(context);
	drawBoard(context);
	
	//initGamePieces(red1);
	//drawGamePiece(context, red1.xPos, red1.yPos);
	//var pieces = drawStartingGamePieces(context);
	drawStartingGamePieces(context);
	
	
	player1 = new User(1, "John");
	player2 = new User(2, "Mary");
	
	var players = [player1, player2];
	
	
	
	var game = new Game(players, pieces, board);
	console.log(game.get_users());
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
	
	get_pieces(){
		return this._Pieces;
	}
	
	get_board_spaces(){
		return this._Board_Spaces;
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
	constructor(x, y, width, height){
		this._x = x;
		this._y = y;
		this._width = width;
		this._height = height;
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
}

class Piece {
	constructor(color, number, pos){
		this._color = color;
		this._number = number;
		this._pos = pos;
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
}


function drawStartingGamePieces(ctx, game) {
	
	
	//var num = game.get_users.length;
	
	//var pieces = [new Piece("red", 1, pos), new Piece("red", 2, pos), new Piece("red", 3, pos),new Piece("red", 4, pos), new Piece("yellow", 1, pos), new Piece("yellow", 2, pos), new Piece("yellow", 3, pos), new Piece("yellow", 4, pos)];
	
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
	}
	
	
	
	//red
	ctx.beginPath();
	ctx.arc(75, 491, 15, 0, 2 * Math.PI);
	ctx.moveTo(165,491);
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
	
	//return Pieces;
}

class boardPiece{
	constructor(x, y, width, height, color){
		this._x = x;
		this._y = y;
		this._width = width;
		this._height = height;
		this._color = color;
	}
	get_color(){
		return this._color;
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
}
	

function drawBoard(ctx) {
	//red areas
	
	
	ctx.beginPath();
	ctx.rect(0, 416, 224, 224);
	ctx.rect(128,352,32,64);
	ctx.rect(32,288,224,64);
	ctx.moveTo(256,256);
	ctx.lineTo(320,320);
	ctx.lineTo(256,386);
	ctx.lineTo(256,256);
	ctx.fillStyle = "red";
	ctx.fill();
	//green areas
	ctx.beginPath();
	ctx.rect(416,416,224,224);
	ctx.rect(352,480,64,32);
	ctx.rect(288,386,64,224);
	ctx.moveTo(386,386);
	ctx.lineTo(320,320);
	ctx.lineTo(256,386);
	ctx.lineTo(386,386);
	ctx.fillStyle = "green";
	ctx.fill();
	//yellow areas
	ctx.beginPath();
	ctx.rect(416,0,224,224);
	ctx.rect(480,224,32,64);
	ctx.rect(384,288,224,64);
	ctx.moveTo(386,386);
	ctx.lineTo(320,320);
	ctx.lineTo(386,256);
	ctx.lineTo(386,386);
	ctx.fillStyle = "yellow";
	ctx.fill();
	//blue areas
	ctx.beginPath();
	ctx.rect(0,0,224,224);
	ctx.rect(224,128,64,32);
	ctx.rect(288,32,64,224);
	ctx.moveTo(256,256);
	ctx.lineTo(320,320);
	ctx.lineTo(386,256);
	ctx.lineTo(256,256);
	ctx.fillStyle = "blue";
	ctx.fill();
	//gray areas
	ctx.beginPath();
	ctx.rect(288,0,64,32);
	ctx.rect(352,128,64,32);
	ctx.rect(608,288,32,64);
	ctx.rect(480,352,32,64);
	ctx.rect(288,608,64,32);
	ctx.rect(224,480,64,32);
	ctx.rect(0,288,32,64);
	ctx.rect(128,224,32,64);
	ctx.fillStyle = "gray";
	ctx.fill();
	//left vertical
	ctx.moveTo(224,0);
	ctx.lineTo(224,640);
	//top horizontal
	ctx.moveTo(0,224);
	ctx.lineTo(640,224);
	//right vertical
	ctx.moveTo(416,0);
	ctx.lineTo(416,640);
	//bottom horizontal
	ctx.moveTo(0,416);
	ctx.lineTo(640,416);
	//center diagonals
	ctx.moveTo(224,224);
	ctx.lineTo(416,416);
	ctx.moveTo(224,416);
	ctx.lineTo(416,224);
	//top left
	ctx.moveTo(0,288);
	ctx.lineTo(256,288);
	ctx.lineTo(256,256);
	ctx.lineTo(288,256);
	ctx.lineTo(288,0);
	//bottom left
	ctx.moveTo(0,352);
	ctx.lineTo(256,352);
	ctx.lineTo(256,384);
	ctx.lineTo(288,384);
	ctx.lineTo(288,640);
	//top right
	ctx.moveTo(640,288);
	ctx.lineTo(384,288);
	ctx.lineTo(384,256);
	ctx.lineTo(352,256);
	ctx.lineTo(352,0);
	//bottom right
	ctx.moveTo(640,352);
	ctx.lineTo(384,352);
	ctx.lineTo(384,384);
	ctx.lineTo(352,384);
	ctx.lineTo(352,640);
	//close arrows
	ctx.moveTo(288,256);
	ctx.lineTo(352,256);
	ctx.moveTo(384,288);
	ctx.lineTo(384,352);
	ctx.moveTo(288,384);
	ctx.lineTo(352,384);
	ctx.moveTo(256,352);
	ctx.lineTo(256,288);
	//bottom
	for(var i = 0; i < 7; i++) {
		ctx.moveTo(224,640-(32*i));
		ctx.lineTo(416,640-(32*i));
	}
	//top
	for(var i = 0; i < 7; i++) {
		ctx.moveTo(224,(32*i));
		ctx.lineTo(416,(32*i));
	}
	//left
	for(var i = 0; i < 7; i++) {
		ctx.moveTo((32*i),224);
		ctx.lineTo((32*i),416);
	}
	//right
	for(var i = 0; i < 7; i++) {
		ctx.moveTo(640-(32*i),224);
		ctx.lineTo(640-(32*i),416);
	}
	ctx.stroke();
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
}