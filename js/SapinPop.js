/**
* Makio - @Makio64 - www.makiopolis.com
*/
sapinLineMaterial = new THREE.LineBasicMaterial({ color: 0xFFFFFF });

var SapinPop = function(scene)
{
	this;
	this.scene = scene;
	this.lines = [];
	this.geometry = new THREE.Geometry();

    for (var i = 0; i < vectors.length; i++) {
    	this.geometry.vertices.push(new THREE.Vector3(vectors[i].x,vectors[i].y,0));
    };

   for (var i = vectors.length - 2; i >= 0; i--) {
    	this.geometry.vertices.push(new THREE.Vector3(-vectors[i].x,vectors[i].y,0));
    };

    var line = new THREE.Line(this.geometry, this.material);
    this.rotation = line.rotation;
  
    this.update = function(scroll) 
    {    
        this.particlesGeo.verticesNeedUpdate = true;
    }


}

SapinPop.prototype.constructor = SapinPop;