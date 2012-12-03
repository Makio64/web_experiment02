/**
* Makio - @Makio64 - www.makiopolis.com
*/

var trueLetters = ["s","a","t","r","l","o","d","i","n","g","m","e","y"," ","c","h","j","b","v"]
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

//M 10
letters.push ([[1,0,0,0,1],
              [1,1,0,1,1],
              [1,0,1,0,1],
              [1,0,0,0,1],
              [1,0,0,0,1],
              [1,0,0,0,1],
              [1,0,0,0,1],
              [1,0,0,0,1],
              [1,0,0,0,1],
              [1,0,0,0,1]
            ]);

//E 11
letters.push ([[1,1,1,1,1],
              [1,0,0,0,0],
              [1,0,0,0,0],
              [1,0,0,0,0],
              [1,1,1,1,0],
              [1,0,0,0,0],
              [1,0,0,0,0],
              [1,0,0,0,0],
              [1,0,0,0,0],
              [1,1,1,1,1]
            ]);
//Y 12
letters.push ([[1,0,0,0,1],
              [0,1,0,1,0],
              [0,0,1,0,0],
              [0,0,1,0,0],
              [0,0,1,0,0],
              [0,0,1,0,0],
              [0,0,1,0,0],
              [0,0,1,0,0],
              [0,0,1,0,0],
              [0,0,1,0,0]
            ]);
//C 13
letters.push ([[0,1,1,1,0],
              [1,0,0,0,1],
              [1,0,0,0,0],
              [1,0,0,0,0],
              [1,0,0,0,0],
              [1,0,0,0,0],
              [1,0,0,0,0],
              [1,0,0,0,0],
              [1,0,0,0,1],
              [0,1,1,1,0]
            ]);
//H 14
letters.push ([[1,0,0,0,1],
              [1,0,0,0,1],
              [1,0,0,0,1],
              [1,0,0,0,1],
              [1,1,1,1,1],
              [1,0,0,0,1],
              [1,0,0,0,1],
              [1,0,0,0,1],
              [1,0,0,0,1],
              [1,0,0,0,1]
            ]);
//SPACE 15
letters.push ([[0,0,0,0,0],
              [0,0,0,0,0],
              [0,0,0,0,0],
              [0,0,0,0,0],
              [0,0,0,0,0],
              [0,0,0,0,0],
              [0,0,0,0,0],
              [0,0,0,0,0],
              [0,0,0,0,0],
              [0,0,0,0,0]
            ]);

//J 16
letters.push ([[1,1,1,1,1],
              [0,0,1,0,0],
              [0,0,1,0,0],
              [0,0,1,0,0],
              [0,0,1,0,0],
              [0,0,1,0,0],
              [0,0,1,0,0],
              [1,0,1,0,0],
              [1,0,1,0,0],
              [0,1,0,0,0]
            ]);

//B 16
letters.push ([[1,1,1,1,0],
              [1,0,0,0,1],
              [1,0,0,0,1],
              [1,0,0,0,1],
              [1,1,1,1,0],
              [1,0,0,0,1],
              [1,0,0,0,1],
              [1,0,0,0,1],
              [1,0,0,0,1],
              [1,1,1,1,0]
            ]);

//V 17
letters.push ([[1,0,0,0,1],
              [1,0,0,0,1],
              [1,0,0,0,1],
              [1,0,0,0,1],
              [1,0,0,0,0],
              [1,0,0,0,1],
              [1,0,0,0,1],
              [0,1,0,1,0],
              [0,1,0,1,0],
              [0,0,1,0,0]
            ]);

var Star = function(scene)
{
    this.scene = scene;
    this.particlesGeo = new THREE.Geometry();

    var max = 600;
    this.radius = 90;
    this.textWidth = 0;
    this.currentIndex = 0;

    //randomposition
    for (var i = 1; i < max; i++) {
        var vertex = new THREE.Vector3();
        vertex.set(Math.random()*this.radius-this.radius/2,Math.random()*this.radius/2,Math.random()*this.radius-this.radius/2)
        this.particlesGeo.vertices.push( vertex );
    };

    this.material = new THREE.ParticleBasicMaterial( { size: 0.3, depthTest: false, color:0xFFFFFF } );
    this.particleSystem = new THREE.ParticleSystem(this.particlesGeo, this.material);
    this.particleSystem.sortParticles = false;
    
    
    this.madeLetter = function(l,tweenable,duration)
    {
        var vertices = this.particlesGeo.vertices;
        var verticesl = vertices.length;
        var vertice;
        var offsetY = 15;
        var offsetX = -l.length*2+1;
        this.randomize(this.textWidth,this.currentIndex-this.textWidth<0?verticesl+this.currentIndex-this.textWidth:this.currentIndex-this.textWidth);
        this.textWidth = 0;
        for (var n = 0; n < l.length; n++) {
            var letter = letters[l[n]];
            for (var i = 0; i < 10; i++) {
                for (var j = 0; j < 5; j++) {
                    if(letter[i][j]==1) {
                        vertice = vertices[this.currentIndex%verticesl];
                        if(tweenable){
                            TweenLite.to(vertice, duration+Math.random(), {x: n*4+(j)/3+offsetX,y:(10-i)/4+offsetY,z:0});
                        } else {
                            vertice.z = 0;
                            vertice.x = n*4+(j)/3+offsetX;
                            vertice.y = (10-i)/4+offsetY;
                        }
                        this.textWidth++;
                        this.currentIndex++;
                    }
                }
            }
        };

        this.currentIndex %= verticesl;
    }


    this.update = function() 
    {    
        this.particlesGeo.verticesNeedUpdate = true;
        this.particleSystem.position.x = Math.random()*0.03;
        this.particleSystem.position.y = Math.random()*0.03;
        this.particleSystem.position.z = Math.random()*0.03;
    }

    this.merryChristmas = function()
    {
        this.madeLetter(this.charToTable("merry christmas"), true);
    }

    this.jinglebells = function()
    {
        this.madeLetter(this.charToTable("jingle bells"), true);
    }

     this.author = function()
    {
        this.madeLetter(this.charToTable("by david ronai"), true);
    }

    this.hihi = function()
    {
        this.madeLetter(this.charToTable("hihi"), true);
    }
    
    this.hoho = function()
    {
        this.madeLetter(this.charToTable("hoho"), true);
    }

    this.charToTable = function(s){
      var a = [];
      for (var i = 0; i < s.length; i++) {
        for (var j = trueLetters.length - 1; j >= 0; j--) {
          if(trueLetters[j] == s[i]){
            a.push(j);
            break;
          }
        };
      };
      return a;
    }

    this.start = function()
    {
        this.madeLetter(this.charToTable("start"), true, 1.2,139,0);
    }

    this.randomize = function(count,fromIndex)
    {
        var vertices = this.particlesGeo.vertices;
        var verticesl = vertices.length;
        count = count+fromIndex;
        for(var n = fromIndex; n < count; n++){
            vertice = vertices[n%verticesl];
            TweenLite.to(vertice, 2+Math.random(), {x: Math.random()*this.radius-this.radius/2,y:Math.random()*this.radius/2,z:Math.random()*this.radius-this.radius/2});
        }
    }

    console.log(this.charToTable("merry christmas"));
    this.madeLetter([4,5,1,6,7,8,9], true,.8,0,0);
    this.scene.add( this.particleSystem );
}

Star.prototype.constructor = Star;