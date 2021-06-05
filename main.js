var canvas = new fabric.Canvas('myCanvas');
player_x = 10;
player_y =10;
block_img_width=30;
block_img_height=30;
var player_object="";
var block_img_object="";
function player_update()
{
    fabric.Image.fromURL("player.png",function(Img)
    {
    player_object=Img;
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
        top:player_y,left:player_x
    });
    canvas.add(player_object);
    });
}
    function new_image(get_image)
    {
        fabric.Image.fromURL(get_image,function(Img)
        {
            block_img_object=Img;
            block_img_object.scaleToWidth(block_img_width);
            block_img_object.scaleToHeight(block_img_height);
            block_img_object.set({
                top:player_y,left:player_x
    });
    canvas.add(block_img_object);
    });
}
            window.addEventListener("keydown",my_keydown);
            function my_keydown(e)
            {
               keyPressed=e.keyCode;
                console.log(keyPressed);
                if (e.shiftKey==true&&keyPressed=='80')
                {
                    console.log("shift&P Pressed together");
                    block_img_width= block_img_width+10;
                    block_img_height= block_img_height+10;
                    document.getElementById("current_width").innerHTML=block_img_width;
                    document.getElementById("current_height").innerHTML=block_img_height;
                }
                if (e.shiftKey==true&&keyPressed=='77')
                {
                    console.log("shift&M Pressed together");
                    block_img_height= block_img_height-10;
                    block_img_width= block_img_width-10;
                    document.getElementById("current_width").innerHTML=block_img_width;
                    document.getElementById("current_height").innerHTML=block_img_height;
                }
                if (keyPressed=='38')
                {
                    up();
                    console.log("Up");
                }
                if (keyPressed=='40')
                {
                    down();
                    console.log("Down")
                }
                if (keyPressed=='37')
                {
                    right();
                    console.log("Right")
                }
                if (keyPressed=='39')
                {
                    left();
                    console.log("Left")
                }
                if (keyPressed=='70')
                {
                    new_image("ironman_face.png");
                    console.log("F");
                }
                if (keyPressed=='66')
                {
                    new_image("spiderman_body.png");
                    console.log("B");
                }
                if (keyPressed=='76')
                {
                    new_image("hulk_legs.png");
                    console.log("L");
                }
                if (keyPressed=='82')
                {
                    new_image("thor_right_hand.png");
                    console.log("R");
                }
                if (keyPressed=='72')
                {
                    new_image("captain_america_left_hand.png");
                    console.log("L");
                }
                
                }
            
            function up()
            {
                if (player_y>=0)
                {
                    player_y= player_y - block_img_height;
                    console.log("Block Image Height=" + block_img_height);
                    console.log("when up arrow is pressed,x="+player_x+",y="+player_y);
                    canvas.remove(player_object);
                    player_update();
                }
            }
            function down()
            {
                if (player_y<=500)
                {
                    player_y= player_y + block_img_height;
                    console.log("Block Image Height=" + block_img_height);
                    console.log("When down arrow is pressed,x="+player_x+",y="+player_y);
                    canvas.remove(player_object);
                    player_update();
                }
            }
            function left()
            {
                if (player_x>=0)
                {
                    player_x= player_x - block_img_width;
                    console.log("Block Image Width=" + block_img_width);
                    console.log("When left arrow is pressed,x=" + player_x+ ",y=" + player_y);
                    canvas.remove(player_object);
                    player_update();
                }
            }
            function right()
            {
                if (player_x<=850)
                {
                    player_x= player_x + block_img_width;
                    console.log("Block Image Width=" + block_img_width);
                    console.log("When right arrow is pressed,x=" + player_x+ ",y=" + player_y);
                    canvas.remove(player_object);
                    player_update();
                }
            }