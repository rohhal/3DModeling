console.log("active-open.js loaded");

$(document).ready(function(){

    /* THE MAIN-TABS */
    $("ul.tabs li").click(function(e){ 
        var dataTab = this.getAttribute("data-tab");

        /* I have marked these tab name in html code as commnents.*/
        var mainTabsData = ["scene","lighting","materials","annotations","animation","vr"];
        var backgroundType = ["environment","fixed","color"];
        var textureColorTab = ["panel1","panel2"];
        var tabsToSwitch;

        if(mainTabsData.indexOf(dataTab) > -1 ) {
            tabsToSwitch = mainTabsData;
        } else if(backgroundType.indexOf(dataTab) > -1 ) {
            tabsToSwitch = backgroundType;
        } else if(textureColorTab.indexOf(dataTab) > -1 ) {
            tabsToSwitch = textureColorTab;
        }

        for( var i=0; i<tabsToSwitch.length; i++) {
            $("[data-tab='"+tabsToSwitch[i]+"']").removeClass("active");
            $("[data-panel='"+tabsToSwitch[i]+"']").removeClass("active");
        }

        $("[data-tab='"+dataTab+"']").addClass("active");
        $("[data-panel='"+dataTab+"']").addClass("active");
        
    });

    $(".label").click(function(e){ 

        /* THE INNER OPTIONS EXPANSION */
        var groupWidget = $(this).parent().parent().parent();
        if(groupWidget.hasClass("group-widget")) {
            groupWidget.toggleClass("opened");
        }
    });

    $(".state").click(function(e){ 
        
        /* THE ON/OFF SWITCH */
        var groupWidget = $(this).parent().parent().parent();
        if(groupWidget.hasClass("group-widget")) {
            groupWidget.toggleClass("active");
        }
    });

    /* THE CHECKBOX SWITCH */
    $(".checkbox-widget").click(function(e){ 
        $(this).toggleClass("active");
    });

    /* Options to switch */
    $("ul.options li").click(function(e){ 
        var dataValue = this.getAttribute("data-value");

        /* I have marked these options name in html code as commnents.*/
        var rendererType = ["classic","pbr","matcap"];
        var shadingType = ["lit","shadeless"];
        

        var optionsToSwitch;

        if(rendererType.indexOf(dataValue) > -1 ) {
            optionsToSwitch = rendererType;
        } else if(shadingType.indexOf(dataValue) > -1 ) {
            var titleValue = this.getAttribute("title");
            optionsToSwitch = shadingType;
            $("#selectedShading").attr("title",titleValue);
            $("#selectedShading").text(titleValue);

        }

        for( var i=0; i<optionsToSwitch.length; i++) {
            $("[data-value='"+optionsToSwitch[i]+"']").removeClass("active");
        }

        $("[data-value='"+dataValue+"']").addClass("active");
        
    });

    $("#ShadingSelect").click(function(e){ 

        if($(this).hasClass("opened")) {
            $(this).removeClass("opened");
        } else {
            $(this).addClass("opened");
        }
    });

    $("[data-value='lit']").hover(
        function(){$(this).toggleClass("cursor");}
    );

    $("[data-value='shadeless']").hover(
        function(){$(this).toggleClass("cursor");}
    );


});