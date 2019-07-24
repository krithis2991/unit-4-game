$(document).ready (function () {

    let computerScore = Math.floor((Math.random() * (120 - 19)) + 19);
    $("#computerScore").append(computerScore);
    

    let diamond = Math.floor((Math.random() * (12)) + 1);;
    let hexagon = Math.floor((Math.random() * (12)) + 1);;
    let oval = Math.floor((Math.random() * (12)) + 1);
    let square = Math.floor((Math.random() * (12)) + 1);

    let win = 0;
    let lose = 0;

    $("#win").append(win);
    $("#lose").append(lose);

    function wins() {
        win++;
         $("#win").append(win);
    }
    

    function loses() {
        lose++;
         $("#lose").append(lose);
    }

    $("#diamond").on("click", function() {
    
        userScore = userScore + diamond;
       
          // Check if the User score is incrementing 
        console.log("User Score = " + userScore);
        $("#userScore").text(userScore);
        if(userScore === computerScore ){
            wins();
        }
        else if ( userScore > computerScore ) {
        loses ();
        }
    });

     $("#hexagon").on("click", function() {
    
            userScore = userScore + hexagon;
            
            // Check if the User score is incrementing 
            console.log("User Score = " + userScore);
            $("#userScore").text(userScore);
            if(userScore === computerScore ){
                wins();
            }
            else if ( userScore > computerScore ) {
                loses ();
            }
    });

     $("#oval").on("click", function() {
    
             userScore = userScore + oval;
             
               // Check if the User score is incrementing 
             console.log("User Score = " + userScore);
             $("#userScore").text(userScore);
             if(userScore === computerScore ){
                wins();
             }
             else if ( userScore > computerScore ) {
                loses ();
             }
    
     });

      $("#square").on("click", function() {
    
                userScore = userScore + square;
               
                  // Check if the User score is incrementing 
                console.log("User Score = " + userScore);
                $("#userScore").text(userScore);
                if(userScore === computerScore ){
                    wins();
                }
                else if ( userScore > computerScore ) {
                    loses();
                }
                
    });
});



