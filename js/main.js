var mouseX = 0, mouseY = 0,
screenWidth = $(window).width(),
screenHeight = $(window).width(),
windowHalfX = $(window).width()/2,
windowHalfY = $(window).height()/2,
isWebGL = Detector.webgl,
tanFOV, windowHeight,
stats, container, camera, scene, renderer, composer,
activatePlatform = 0;


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
	camera = new THREE.PerspectiveCamera( 25, $(window).width() / $(window).height(), 1, 10000 );
	tanFOV = Math.tan( ( ( Math.PI / 180 ) * camera.fov / 2 ) );
	windowHeight =  $(window).height();

	camera.aspect = $(window).width() / Math.floor($(window).height());
    camera.fov = ( 360 / Math.PI ) * Math.atan( tanFOV * ( $(window).height() / windowHeight ) );
	camera.position.set(0, 15, 45);
    camera.lookAt(new THREE.Vector3(0,6.8,0));
	camera.updateProjectionMatrix();
	
	scene = new THREE.Scene();
	scene.add(camera);
	
	renderer = new THREE.WebGLRenderer();
	renderer.setSize( $(window).width(), $(window).height());
	container.appendChild( renderer.domElement );
	
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
		camera.lookAt(new THREE.Vector3(0,0,0));
		// adjust the FOV
		camera.fov = ( 360 / Math.PI ) * Math.atan( tanFOV * ( $(window).height() / windowHeight ) );
		camera.updateProjectionMatrix();
	});
}

var sapins = [];
var state = 'line';
var	ax, vx;

function init() {
	for (var i = 0; i < 36; i++) {
		var s = new Sapin(scene);	
		s.rotation.z = Math.PI/2;
		s.rotation.y = Math.PI*2*i/36;
		sapins[i] = s;
	}
}

function animate() {
	for (var i = 0; i < sapins.length; i++) {
		sapins[i].rotation.y += Math.PI/80;
	};
	requestAnimationFrame( animate );
	stats.update();
	renderer.render(scene, camera);
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