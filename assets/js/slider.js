$(document).ready(function(){

console.log("slider.js loaded");

// Initialize a new plugin instance for all
    // e.g. $('input[type="range"]') elements.
    $('input[type="range"]').rangeslider({
        polyfill: false,
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

    $('input[type="rangeWireFrame"]').rangeslider({
        polyfill: false,
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
            $("#WireFrameSliderValue").attr("value",value);
        },

        // Callback function
        onSlideEnd: function(position, value) {
            $("#WireFrameSliderValue").attr("value",value);
        }
    });

    $('input[type="rangeWireFrame"]').rangeslider('update', true);

$('input[type="rangeBrightness"]').rangeslider({
        polyfill: false,
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
            $("#BrightnessSliderValue").attr("value",value);
        },

        // Callback function
        onSlideEnd: function(position, value) {
            $("#BrightnessSliderValue").attr("value",value);
        }
    });

    $('input[type="rangeBrightness"]').rangeslider('update', true);


});