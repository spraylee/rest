/**
 * Created by 子浪 on 2015/10/21.
 */
document.onload = chess_game("game");


function chess_game(object) {

    var can = document.getElementById(object);
    var ctx = can.getContext("2d");
    var game_bg = new Image();
    game_bg.src = "images/chess_bg.jpg";
    var game_width = 720;
    var game_height = 850;
    var lasttime = Date.now();


    init();
    game_loop();


    function init() {
    }


    function game_loop() {
        requestAnimationFrame(game_loop);
        ctx.drawImage(game_bg,0,0,game_width,game_height);

        console_fps();

    }

    function console_fps(){
        var now = Date.now();
        var fps = Math.floor(1000/(now - lasttime));
        lasttime = now;
        console.log(fps);
    }
}