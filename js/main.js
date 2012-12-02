var mouseX = 0, mouseY = 0,
screenWidth = $(window).width(),
screenHeight = $(window).width(),
windowHalfX = $(window).width()/2,
windowHalfY = $(window).height()/2,
isWebGL = Detector.webgl,
tanFOV, windowHeight,
stats, container, camera, scene, renderer, composer, analyser,
state = 0;


$(document).ready(function() 
{
	initScene();
	init();
	animate();	
});

function initScene(){
	container = document.createElement('div');
	document.body.appendChild(container);

	//same camera for all
	camera = new THREE.PerspectiveCamera( 25, $(window).width() / $(window).height(), 1, 500 );
	windowHeight =  $(window).height();

	camera.aspect = $(window).width() / Math.floor($(window).height());
	camera.position.set(0, 15, 45);
    camera.lookAt(new THREE.Vector3(0,6.8,0));
	camera.updateProjectionMatrix();
	
	scene = new THREE.Scene();
	scene.fog = new THREE.FogExp2( 0x000104, 0.0000675 );

	scene.add(camera);
	
	renderer = new THREE.WebGLRenderer({clearColor: 0xFFFFFF, clearAlpha: 0, antialias: false});
	renderer.setSize( $(window).width(), $(window).height());
	renderer.setClearColor( 0xFFFFFF, 1 );
	renderer.autoClear = false;
	renderer.sort = false;
	container.appendChild( renderer.domElement );
	
	// postprocessing
	var renderModel = new THREE.RenderPass( scene, camera );
	var effectBloom = new THREE.BloomPass( 0.95 );
	var effectFilm = new THREE.FilmPass( 1, 1, 1448, false );
	effectFocus = new THREE.ShaderPass( THREE.FocusShader );
	effectFocus.uniforms[ "screenWidth" ].value = screenWidth;
	effectFocus.uniforms[ "screenHeight" ].value = screenHeight;
	effectFocus.renderToScreen = true;

	composer = new THREE.EffectComposer( renderer );

	composer.addPass( renderModel );
	composer.addPass( effectBloom );
	composer.addPass( effectFilm );
	composer.addPass( effectFocus );

	document.addEventListener( 'mousemove', onDocumentMouseMove, false );
	document.addEventListener( 'touchstart', onDocumentTouchStart, false );
	document.addEventListener( 'touchmove', onDocumentTouchMove, false );
	
	stats = new Stats();
	stats.domElement.style.position = 'absolute';
	stats.domElement.style.top = '0px';
	container.appendChild( stats.domElement );
	
	$(window).resize(function() {
		renderer.setSize( $(window).width(), $(window).height());
		$(container).height( Math.floor($(window).height()) );
		camera.aspect = $(window).width() / Math.floor($(window).height());
		camera.lookAt(new THREE.Vector3(0,6.8,0));
		
		camera.updateProjectionMatrix();
		composer.reset( new THREE.WebGLRenderTarget( screenWidth, screenHeight ) );
	});
}

var sapin, star;

function init() {

	var h,  cube, angle, radius;
	
	cube = new THREE.Mesh(
   		new THREE.CubeGeometry( 40, 1, 40, 1, 1, 1 ),
    	new THREE.MeshBasicMaterial( {wireframe:true} )
	);
	cube.position.y = -1;
	// scene.add(cube);

	for (var i = 0; i < 10; i++) {
		h = Math.random()*2+.5;
		cube = new THREE.Mesh(
	   		new THREE.CubeGeometry( Math.random()*3+1, h, Math.random()*3+1, 1, 1, 1 ),
	    	new THREE.MeshBasicMaterial( {wireframe:true, color :Math.random()*0xFFFFFF} )
		);
		cube.position.y = h/2-1;
		cube.rotation.y = Math.PI*Math.random();
		radius = Math.random()*12+7;
		angle = (i/10*Math.PI*2)+Math.PI/8*Math.random();
		cube.position.x = Math.cos(angle)*radius;
		cube.position.z = Math.sin(angle)*radius;
		scene.add(cube);
	}
	sapin = new Sapin(scene);
	star = new Star(scene);	

	var audio = new Audio();
	audio.addEventListener('canplay', function() {
  		setTimeout(function() {  
  			star.start();
  			setTimeout(function() { 
  				$('body').css('cursor','pointer'); 
  				$(window).click(function(e){
	  				$('body').css('cursor','auto');
	  				if(state==1){
	  					return;
	  				}
	  				setTimeout(function() { state = 1; },4000);
	  				star.randomize(139,93);
	    			audio.play();
	  			})
  			},1000);
  		}, 1200);
    }, false);

	audio.src = 'sfx/music.mp3';
	audio.controls = true;
	audio.autoplay = false;
	document.body.appendChild(audio);
	var context = new webkitAudioContext();
	analyser = context.createAnalyser();

	var source = context.createMediaElementSource(audio);
	source.connect(analyser);
	analyser.connect(context.destination);
}

function animate() {
	console.log(analyser);
	var coeff = 0.05;
	camera.position.y += ((mouseY/screenHeight)*50+45-camera.position.y)*coeff;
	camera.position.z += ((mouseY/screenHeight)*60+105-camera.position.z)*coeff;//45
	camera.position.x += ((mouseX/screenWidth)*60-camera.position.x)*coeff;
	camera.lookAt(new THREE.Vector3(0,6.8,0));
		
	requestAnimationFrame( animate );
	stats.update();
	if(state==1){
		sapin.update((mouseX>screenWidth/2));
	}
	star.update();
	composer.render( 0.00001 );
}

function onDocumentMouseMove(event) {
	mouseX = event.clientX - windowHalfX;
	mouseY = event.clientY - windowHalfY;
}

function onDocumentTouchStart( event ) {
	if ( event.touches.length > 1 ) {
		event.preventDefault();
		mouseX = event.touches[ 0 ].pageX - windowHalfX;
		mouseY = event.touches[ 0 ].pageY - windowHalfY;
	}
}

function onDocumentTouchMove( event ) {
	if ( event.touches.length == 1 ) {
		event.preventDefault();
		mouseX = event.touches[ 0 ].pageX - windowHalfX;
		mouseY = event.touches[ 0 ].pageY - windowHalfY;
	}
}