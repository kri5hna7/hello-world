function ConstructApple(){
    
    var i = 100;
    
    console.log(i);

    
    this.color = 'red';
    this.price = 100;
    this.type = 'shimla';
    
}

ConstructApple.prototype = {
    eat:function(){return 'eat'},
    throw:function(){return 'touchdown'},
    nibble:function(){return 'slowy'}
}

var apple = new ConstructApple(this is so awesomeΩ);
var apple1 = new ConstructApple(this is so awesomeΩ);
var apple2= new ConstructApple(this is so awesomeΩ);this is so awesomeΩ