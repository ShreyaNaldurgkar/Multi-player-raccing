class Game{
    constructor() {

    }
    getgamestate() {
        //to get the value of gamestate from the database
        var gamestateref = database.ref('gameState');
        gamestateref.on("value", function (data) {
            gameState = data.val();
        })
    }
    updategamestate(state) {
        //to update the value of gamestate in database
        database.ref('/').update({
            gameState: state
        });

    }
    async start() {
        if (gameState === 0) {
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value");
            if (playerCountRef.exists()) {
                playerCount = playerCountRef.val();
                player.getPlayerCount()

            }


            form = new Form();
            form.display();

        }

        player1 = createSprite()
        

        


    }
    /*play() {
        console.log("game has started");
        form.hide();
        Player.getAllPlayers();
        player.getCarsAtEnd();
        console.log(allPlayers)

        image(trackimg,displayWidth*4 ,0, displayWidth*5, displayHeight)

        if (allPlayers !== undefined) {
            var index = 0;
            var y = 200;
            var x;
            for (var plr in allPlayers) {
                index = index + 1;
                y = y + 220
                x = displayWidth - allPlayers[plr].distance
                players[index - 1].x = x;
                players[index - 1].y = y;
                if (index == player.index) {
                    camera.position.x = cars[index - 1].x 
                    camera.position.y = displayHeight / 2;
                    players[index - 1].shapeColor = "red"
                    stroke ("green");
                    strokeWeight(4);
                    ellipse(x,y,60,60);

                }

            }




        }

        if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
            player.distance = player.distance + 10
            player.updateInfo();

        }

        if (keyIsDown(space) && player.index !== null) {
            player.distance = player.distance + 10
            player.updateInfo();

        }

        if(player.distance>=4260){
            gameState=2
            player.rank = player.rank+1;
            Player.updateCarsAtEnd(player.rank)

        }
        drawSprites();
    }
    end() {
        console.log("game ended")
        console.log(player.rank);

    }*/
}