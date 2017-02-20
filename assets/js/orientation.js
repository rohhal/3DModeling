/* Orientation variables */
var orientationX = 0;
var orientationY = 0;
var orientationZ = 0;

console.log("orientation.js loaded");

$(document).ready(function(){
    
    /******************* ORIENTATION WIDGET LOGIC START ************************************/
    $(".reset-orientation-widget").click(function(e) {
        orientationX = 0;
        orientationY = 0;
        orientationZ = 0;
        defaultOrientaion();
        jQuery("advancedRotation").removeClass("active");
        stopAdvanceRotation();
    }); 

    $(".orientation-widget .right").click(function(e) {
        var axis = $(this).parent().children()[1].innerHTML;
        switch(axis) {
            case 'X' : changeOrientationX(1);
            break;
            case 'Y' : changeOrientationY(1);
            break;
            case 'Z' : changeOrientationZ(1);
            break;
        }
    });

    $(".orientation-widget .left").click(function(e) {
        var axis = $(this).parent().children()[1].innerHTML;
        switch(axis) {
            case 'X' : changeOrientationX(-1);
            break;
            case 'Y' : changeOrientationY(-1);
            break;
            case 'Z' : changeOrientationZ(-1);
            break;
        }
    });

    $("#advancedRotation").click(function(e){
       if($(this).hasClass("active")) {
            startAdvanceRotation();
        } else {
            stopAdvanceRotation();
        }
    });

    /******************* ORIENTATION WIDGET LOGIC ENDS ************************************/

});



function startAdvanceRotation() {
    console.log("start advaced rotation");
}

function stopAdvanceRotation() {
    console.log("stop advaced rotation");
}

function defaultOrientaion(){
    console.log("defaultOrientaion x=0 y=0 z=0");
}

function changeOrientationX(e) {
    if(orientationX === 0 && e === -1) {orientationX=4;}
    orientationX = (orientationX+e)%4;
    console.log("X = "+Math.abs(orientationX));
}

function changeOrientationY(e) {
    if(orientationY === 0 && e === -1) {orientationY=4;}
    orientationY = (orientationY+e)%4;
    console.log("Y = "+Math.abs(orientationY));
}

function changeOrientationZ(e) {
    if(orientationZ === 0 && e === -1) {orientationZ=4;}
    orientationZ = (orientationZ+e)%4;
    console.log("Z = "+Math.abs(orientationZ));
}


