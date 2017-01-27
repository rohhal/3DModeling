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


});