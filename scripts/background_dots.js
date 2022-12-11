function freshDot(){
    var rgb3 = [];
    for (var i=0; i<3; i++) rgb3[i] = rgb1[i]+Math.random()*(rgb2[i]-rgb1[i])|0;
    var newColor = '#' + rgb3
        .map(function(n){ return n.toString(16) })
        .map(function(s){ return "00".slice(s.length)+s}).join(''); 
    this.obj = document.createElement("div");
    this.obj.classList.add("box");
    this.obj.style.top = (100 * Math.random()) + '%';
    this.obj.style.left = (100 * Math.random()) + '%';
    this.obj.style.backgroundColor = newColor
    this.size = Math.floor((window.innerHeight*window.innerWidth)/900000 * Math.random()) + 2;
    this.obj.style.height =  this.size + 'px';
    this.obj.style.width = this.size + 'px';

    
    document.body.appendChild(this.obj);
}
var rgb1 = rgb("#00f5cc");
var rgb2 = rgb("#17e9c6");
var dot = [];
for(var i = 0 ; i < 200; i++ ){
    dot.push(new freshDot());
    }

function rgb(string){
    return string.match(/\w\w/g).map(function(b){ return parseInt(b,16) })
}
