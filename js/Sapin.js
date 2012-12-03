/**
* Makio - @Makio64 - www.makiopolis.com
*/

var Sapin = function(scene)
{
	scope = this;
	scope.scene = scene;
	scope.lines = [];
	scope.geometry = new THREE.Geometry()
	scope.material = new THREE.LineBasicMaterial({
        color: 0xFFFFFF,
    });
    scope.vx = 0;
    scope.ax = 0;
    scope.speed = 0;

    var vectors = [{x:0,y:0},{x:1,y:0},{x:1,y:3},{x:4,y:3},{x:2,y:6},{x:3,y:6},{x:1,y:9},{x:2,y:9},{x:0,y:13}];

   //  for (var i = 0; i < vectors.length; i++) {
   //  	scope.geometry.vertices.push(new THREE.Vector3(vectors[i].y,0,vectors[i].x));
   //  };

   // for (var i = vectors.length - 2; i >= 0; i--) {
   //  	scope.geometry.vertices.push(new THREE.Vector3(vectors[i].y,0,-vectors[i].x));
   //  };

   //  var line = new THREE.Line(scope.geometry, scope.material);
    // scope.rotation = line.rotation;

    scope.particlesGeo = new THREE.Geometry();
    scope.values = [];
    
    var sprite = THREE.ImageUtils.loadTexture( "img/circle.png" );

    for (var i = 1; i < vectors.length; i++) {
        var start = vectors[i-1]; 
        var dest = vectors[i];
        var division = 100;
        for (var j = 0; j < division; j++) {
            var vertex = new THREE.Vector3();
            vertex.x = start.x + (dest.x-start.x)*j/division;
            scope.values.push({coeff:vertex.x,x:0});
            vertex.y = start.y + (dest.y-start.y)*j/division;
            scope.particlesGeo.vertices.push( vertex );
            
            vertex = new THREE.Vector3();
            vertex.x = -(start.x + (dest.x-start.x)*j/division);
            scope.values.push({coeff:vertex.x,x:Math.PI});
            vertex.y = start.y + (dest.y-start.y)*j/division;
            scope.particlesGeo.vertices.push( vertex );
        };
    }
    // map: sprite, blending:THREE.AdditiveBlending, transparent : true 
    material = new THREE.ParticleBasicMaterial( { size: .6, color:0xFFFFFF } );
    particleSystem = new THREE.ParticleSystem(scope.particlesGeo, material);
    
    scene.add( particleSystem );

    scope.update = function(scroll) 
    {    
        if(scroll) {
            scope.ax += Math.PI/40;
        } else {
            scope.ax -= Math.PI/40; 
        }
        scope.vx += scope.ax;
        scope.speed += scope.vx;
        var s = scope.speed;
        if(scope.speed=0)
            return;
        var coeffX = 2;
        var coeffZ = 2;
        var degreeMax = 40;
 
        var basevx = tmpvx = Math.PI*degreeMax/180;
        var p;
        var v;
        var deceleration = basevx/4000;
        var l = scope.particlesGeo.vertices.length;
        for (var i = 0; i < l; i++) {
            if(tmpvx<0)
                return;
            p = scope.particlesGeo.vertices[i];
            v = scope.values[i];
            v.x += tmpvx;
            p.x = Math.cos(v.x)*v.coeff; 
            p.z = Math.sin(v.x)*v.coeff; 
            tmpvx -= deceleration;
        };
        scope.particlesGeo.verticesNeedUpdate = true;
    }
}

Sapin.prototype.constructor = Sapin;