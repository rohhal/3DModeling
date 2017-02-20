$(document).ready(function(){

console.log("slider.js loaded");

// Initialize a new plugin instance for all
    // e.g. $('input[type="range"]') elements.
    $('input[type="range"]').rangeslider({

    // Feature detection the default is `true`.
    // Set this to `false` if you want to use
    // the polyfill also in Browsers which support
    // the native <input type="range"> element.
    polyfill: false,

    // Default CSS classes
    rangeClass: 'rangeslider',
    disabledClass: 'rangeslider--disabled',
    horizontalClass: 'rangeslider--horizontal',
    verticalClass: 'rangeslider--vertical',
    fillClass: 'rangeslider__fill',
    handleClass: 'rangeslider__handle',

    // Callback function
    onInit: function() {

    },

    // Callback function
    onSlide: function(position, value) {
        console.log("sliding , position:"+position+"  , value:"+value);
        $("#FieldOfViewSliderValue").attr("value",value+"°");
    },

    // Callback function
    onSlideEnd: function(position, value) {
        console.log("slide end , position:"+position+"  , value:"+value);
        $("#FieldOfViewSliderValue").attr("value",value+"°");
    }
});

    $('input[type="range"]').rangeslider('update', true);

});