var MMaterial = (function(){
    function MMaterial(___material) {

        // define all the elements

        this._material = ___material;
        
        this.color = null;

        this.sliderRoughness = null;

        this.sliderMetalness = null;

        this.sliderTransperency = null;

        this.textureMap = null;

        this.textureEnvmap = null;

        this.textureAOmap = null;

        this.textureAlphamap = null;

        this.textureLightmap = null;
        
        this.initPanel();
        this.registerEvents();
    }
    
    MMaterial.prototype = {
        registerEvents: function() {
            this.materialChanged = new Event(this);
        },
        initPanel : function () {
            var self = this;
            // code to set the material properties
            console.log("init material settings panel");
            //document.getElementById('propertypanel').innerHTML = "<h3>Shineyness</h3><input id='slider1' type='range' min='0' max='1.0' step='0.01' />";
            
            /*document.getElementById('slider1').oninput = function(){
                self.changeShineyness();
            };*/
            //document.getElementById('imgInp').onchange = this.changeTextureMap;
        },
        changeShineyness: function (__shineyness) {
            console.log(this._material);
            console.log(parseFloat(document.getElementById('slider1').value));
            //___material.roughness = 0;
            this._material.roughness = parseFloat(document.getElementById('slider1').value);
            this._material.needsUpdate = true;
            this._material.update();

            this.materialChanged.notify();
        }
    };
    
    
    return MMaterial;
})();