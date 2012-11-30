/**
* Makio - @Makio64 - www.makiopolis.com
*/

var Sapin = function(scene){
	scope = this;
	scope.scene = scene;
	scope.lines = [];
	scope.geometry = new THREE.Geometry()
	scope.material = new THREE.LineBasicMaterial({
        color: 0xFFFFFF,
    });

    var vectors = [{x:0,y:0},{x:1,y:0},{x:1,y:3},{x:4,y:3},{x:2,y:6},{x:3,y:6},{x:1,y:9},{x:2,y:9},{x:0,y:13}];

    for (var i = 0; i < vectors.length; i++) {
    	scope.geometry.vertices.push(new THREE.Vector3(vectors[i].y,0,vectors[i].x));
    };

   for (var i = vectors.length - 2; i >= 0; i--) {
    	scope.geometry.vertices.push(new THREE.Vector3(vectors[i].y,0,-vectors[i].x));
    };

    var line = new THREE.Line(scope.geometry, scope.material);
    //scene.add( line );
    scope.rotation = line.rotation;

    particlesGeo = new THREE.Geometry();

    var materials = [];
    var sprite = THREE.ImageUtils.loadTexture( "img/particle.png" );

    for (var i = 1; i < vectors.length; i++) {
        var start = vectors[i-1]; 
        var dest = vectors[i];
        var vertex = new THREE.Vector3();
        for (var j = 0; j < 5; j++) {
            vertex.x = dest.x*i/5 - start.x;
            vertex.y = dest.y*i/5 - start.y;
            vertex.z = dest.z*i/5 - start.z;
            particlesGeo.vertices.push( vertex );
        };
    }

    material = new THREE.ParticleBasicMaterial( { size: 10, map: sprite, blending: THREE.AdditiveBlending, depthTest: false, transparent : true } );
    particleSystem = new THREE.ParticleSystem(particlesGeo, material);
    scene.add( particleSystem );
}

Sapin.prototype.constructor = Sapin;