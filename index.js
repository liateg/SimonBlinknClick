/*
first game to be prepared using js. it took more or less one afternoon.
10/17/2024
@lia teg

*/

var i=0; // to generate random index for the buttons

var level=1;
var inId=[]; //user cliked buttons id
var outId=[]; //randomly generated buttons id
var c=[]; //save one trial user clicked bth history(id) . will be used on iteration process

$(document).keydown(function(){
    level=1;  //each time the game restarted all parameters needs to delete previous game data 
    inId=[];
    outId=[];
    c=[]; 
$('#level-title').text('level 1');
//$(document).off();
i= Math.round(Math.random()*3);  //get the random index
document.querySelectorAll('.btn')[i].classList.add('pressed');  //idk why but jquarey didnt work in this part, that I used raw js
setTimeout(function(){document.querySelectorAll('.btn')[i].classList.remove('pressed');},100);
outId.push($('.btn')[i].id); //save the random buton id(more of 'append')


// Now game time
$('.btn').click(function(){
    inId.push(this.id); // save the clicked btn id('append')
   
    //alert(inId);


    // controling each clike,wheater it alain with the generated id(outId)
    for(var k=0;k<inId.length;k++){
        if (inId[k]!=outId[k]){
            
            $('body').addClass('game-over');
            $('#level-title').text('Game Over');
            //alert(inId[k],outId[k])
           
            setTimeout(function(){$('body').removeClass('game-over');$('#level-title').text('Press A Key to Start');},2000)
            // $('.btn').hide();
            $('.btn').off(); // clicking the button while the game is over and not started wont do nth
            break;
            
            
        }
        else{
        c.push(inId[k]); //save the aligned id for each click 
        //and if its length is same as outId ; level up and start the next level
        if (c.length==outId.length){
            level++;
            $('#level-title').text('level '+ level);
            i= Math.round(Math.random()*3);
            document.querySelectorAll('.btn')[i].classList.add('pressed');
            setTimeout(function(){document.querySelectorAll('.btn')[i].classList.remove('pressed');},100);
            outId.push($('.btn')[i].id);
           inId=[]; 
            
        //alert(c)
        
        }
        
        
    }
    

}
c.length=0; // if the length is not equal with the outId , clean the data and make it prepared for another for loop that may procede upon new click
});
// if (inId==outId){

//     level++;
//     $('#level-title').text('level '+ level);
//     i= Math.round(Math.random()*3);
// document.querySelectorAll('.btn')[i].classList.add('pressed');
// setTimeout(function(){document.querySelectorAll('.btn')[i].classList.remove('pressed');},100);
// outId.push($('.btn')[i].id);


// }
});

//$('#level-title').text('sss');



