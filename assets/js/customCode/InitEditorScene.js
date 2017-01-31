    function InitEditorScene(containerName) {

        //if (!Detector.webgl) Detector.addGetWebGLMessage();
        var CONTAINER_WIDTH = document.getElementById('maincontainer').offsetWidth;
        var CONTAINER_HEIGHT = document.getElementById('maincontainer').offsetHeight;
        var container;
        var camera, controls, scene, renderer;
        var cross;
        init();
        animate();

        function init() {
            camera = new THREE.PerspectiveCamera(60, CONTAINER_WIDTH / CONTAINER_HEIGHT, 1, 1000);
            camera.position.z = 500;
            controls = new THREE.TrackballControls(camera, document.getElementById('maincontainer'));
            controls.rotateSpeed = 1.0;
            controls.zoomSpeed = 1.2;
            controls.panSpeed = 0.8;
            controls.noZoom = false;
            controls.noPan = false;
            controls.staticMoving = true;
            controls.dynamicDampingFactor = 0.3;
            controls.keys = [65, 83, 68];
            controls.addEventListener('change', render);
            // world
            scene = new THREE.Scene();
            scene.fog = new THREE.FogExp2(0xcccccc, 0.002);
            var geometry = new THREE.SphereGeometry(100, 32, 32);
            var material = new THREE.MeshStandardMaterial({
                color: 0xffffff,
                shading: THREE.SmoothShading
            });

            


            var mesh = new THREE.Mesh(geometry, material);
            scene.add(mesh);

            // lights
            light = new THREE.DirectionalLight(0xffffff);
            light.position.set(1, 1, 1);
            scene.add(light);
            light = new THREE.DirectionalLight(0x002288);
            light.position.set(-1, -1, -1);
            scene.add(light);
            light = new THREE.AmbientLight(0x222222);
            scene.add(light);
            // renderer
            renderer = new THREE.WebGLRenderer({
                antialias: true
            });
            renderer.setClearColor(scene.fog.color);
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(CONTAINER_WIDTH, CONTAINER_HEIGHT);
            container = document.getElementById(containerName);
            container.appendChild(renderer.domElement);
            //
            window.addEventListener('resize', onWindowResize, false);
            //
            
            
            
            
            var m = new MMaterial(material, "");
            
            m.materialChanged.attach(function(){
                render();
            });
            /*m.addEventListener("myEventName", doSomething, false);

            function doSomething(e) {
                alert("Event is called: " + e.type);
            }*/
        }

        function onWindowResize() {
            camera.aspect = CONTAINER_WIDTH / CONTAINER_HEIGHT;
            camera.updateProjectionMatrix();
            renderer.setSize(CONTAINER_WIDTH, CONTAINER_HEIGHT);
            controls.handleResize();
            render();
        }

        function animate() {
            requestAnimationFrame(animate);
            controls.update();
        }

        function render() {
            //requestAnimationFrame(render);
            renderer.render(scene, camera);
        }
    }