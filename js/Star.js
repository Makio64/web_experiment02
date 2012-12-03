/**
* Makio - @Makio64 - www.makiopolis.com
*/

var letters = [];
//S 0
letters.push([[0,1,1,1,1],
              [1,0,0,0,1],
              [1,0,0,0,0],
              [1,0,0,0,0],
              [0,1,1,1,0],
              [0,0,0,0,1],
              [0,0,0,0,1],
              [0,0,0,0,1],
              [0,0,0,0,1],
              [1,1,1,1,0]
            ]);
//A 1
letters.push([[0,1,1,1,0],
              [1,0,0,0,1],
              [1,0,0,0,1],
              [1,0,0,0,1],
              [1,0,0,0,1],
              [1,1,1,1,1],
              [1,0,0,0,1],
              [1,0,0,0,1],
              [1,0,0,0,1],
              [1,0,0,0,1]
            ]);
//T 2
letters.push ([[1,1,1,1,1],
              [0,0,1,0,0],
              [0,0,1,0,0],
              [0,0,1,0,0],
              [0,0,1,0,0],
              [0,0,1,0,0],
              [0,0,1,0,0],
              [0,0,1,0,0],
              [0,0,1,0,0],
              [0,0,1,0,0]
            ]);
//R 3
letters.push ([[1,1,1,1,0],
              [1,0,0,0,1],
              [1,0,0,0,1],
              [1,0,0,0,1],
              [1,1,1,1,0],
              [1,0,0,0,0],
              [1,1,0,0,0],
              [1,0,1,0,0],
              [1,0,0,1,0],
              [1,0,0,0,1]
            ]);

//L 4
letters.push ([[1,0,0,0,0],
              [1,0,0,0,0],
              [1,0,0,0,0],
              [1,0,0,0,0],
              [1,0,0,0,0],
              [1,0,0,0,0],
              [1,0,0,0,0],
              [1,0,0,0,0],
              [1,0,0,0,0],
              [1,1,1,1,1]
            ]);

//O 5
letters.push ([[0,1,1,1,0],
              [1,0,0,0,1],
              [1,0,0,0,1],
              [1,0,0,0,1],
              [1,0,0,0,1],
              [1,0,0,0,1],
              [1,0,0,0,1],
              [1,0,0,0,1],
              [1,0,0,0,1],
              [0,1,1,1,0]
            ]);
//D 6
letters.push ([[1,1,1,1,0],
              [1,0,0,0,1],
              [1,0,0,0,1],
              [1,0,0,0,1],
              [1,0,0,0,1],
              [1,0,0,0,1],
              [1,0,0,0,1],
              [1,0,0,0,1],
              [1,0,0,0,1],
              [1,1,1,1,0]
            ]);
//I 7
letters.push ([[0,0,1,0,0],
              [0,0,0,0,0],
              [0,0,1,0,0],
              [0,0,1,0,0],
              [0,0,1,0,0],
              [0,0,1,0,0],
              [0,0,1,0,0],
              [0,0,1,0,0],
              [0,0,1,0,0],
              [0,0,1,0,0]
            ]);
//N 8
letters.push ([[1,0,0,0,1],
              [1,0,0,0,1],
              [1,0,0,0,1],
              [1,1,0,0,1],
              [1,0,0,0,1],
              [1,0,1,0,1],
              [1,0,0,0,1],
              [1,0,0,1,1],
              [1,0,0,0,1],
              [1,0,0,0,1]
            ]);
//G 9
letters.push ([[0,1,1,1,1],
              [1,0,0,0,1],
              [1,0,0,0,0],
              [1,0,0,0,0],
              [1,0,0,0,0],
              [1,0,1,1,1],
              [1,0,1,0,1],
              [1,0,0,0,1],
              [1,0,0,0,1],
              [0,1,1,1,0]
            ]);
var Star = function(scene)
{
	scene = scene;
    this.particlesGeo = new THREE.Geometry();

    var sprite = THREE.ImageUtils.loadTexture( "img/circle.png" );

    var max = 600;
    this.radius = 90;

    //randomposition
    for (var i = 1; i < max; i++) {
        var vertex = new THREE.Vector3();
        vertex.set(Math.random()*this.radius-this.radius/2,Math.random()*this.radius/2,Math.random()*this.radius-this.radius/2)
        this.particlesGeo.vertices.push( vertex );
    };

    material = new THREE.ParticleBasicMaterial( { size: 0.3, color:0xFFFFFF } );
    particleSystem = new THREE.ParticleSystem(this.particlesGeo, material);
    
    
    
    this.madeLetter = function(l,tweenable,duration, clean, fromIndex)
    {
        var vertices = this.particlesGeo.vertices;
        var vertice;
        var k=clean;
        var offsetY = 15;
        var offsetX = -l.length*2;
        this.randomize(clean,fromIndex)
        for (var n = 0; n < l.length; n++) {
            var letter = letters[l[n]];
            for (var i = 0; i < 10; i++) {
                for (var j = 0; j < 5; j++) {
                    if(letter[i][j]==1) {
                        vertice = vertices[k];
                        if(tweenable){
                            TweenLite.to(vertice, duration+Math.random(), {x: n*4+(j)/3+offsetX,y:(10-i)/4+offsetY,z:0});
                        } else {
                            vertice.z = 0;
                            vertice.x = n*4+(j)/3+offsetX;
                            vertice.y = (10-i)/4+offsetY;
                        }
                        k++;
                    }
                }
            }
        };
    }


    this.update = function() 
    {    
        this.particlesGeo.verticesNeedUpdate = true;
        particleSystem.position.x = Math.random()*0.03;
        particleSystem.position.y = Math.random()*0.03;
        particleSystem.position.z = Math.random()*0.03;
    }

    this.start = function()
    {
        this.madeLetter([0,2,1,3,2], true, 1.2,139,0);
    }

    this.randomize = function(count,fromIndex)
    {
        var vertices = this.particlesGeo.vertices;
        count = count+fromIndex;
        for(var n = fromIndex; n < count; n++){
            vertice = vertices[n];
            TweenLite.to(vertice, 2+Math.random(), {x: Math.random()*this.radius-this.radius/2,y:Math.random()*this.radius/2,z:Math.random()*this.radius-this.radius/2});
        }
    }

    this.madeLetter([4,5,1,6,7,8,9], true,.8,0,0);
    scene.add( particleSystem );
}

Star.prototype.constructor = Star;