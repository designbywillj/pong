/**********************
 * filename: ScoreBoard.js
 * author: Will Johnson
 * description: 
 * 
 */
import Pong from "../Pong.js";

export default class ScoreBoard {

    // class props
    _playerOneScore;
    _playerTwoScore;

    constructor() {
        Pong._ctx.fillStyle = "#252A33";
        Pong._ctx.fillRect(canvas.width/2-50, 24, 100, 40);

        Pong._ctx.fillStyle = "#FFFFFF";
        Pong._ctx.font = "24px sans-serif";
        Pong._ctx.textAlign = "center";
        Pong._ctx.fillText('0', canvas.width/2-26, 52);
        Pong._ctx.fillText('0', canvas.width/2+26, 52);

        Pong._ctx.fillStyle = "#3A3F47";
        Pong._ctx.fillRect(canvas.width/2-1, 32, 1, 24);

        // create instances of the parts
        console.log("scoreBoard created");
    }

}