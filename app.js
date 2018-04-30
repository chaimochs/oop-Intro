var Animal = require('./animal');
var Fish = require('./fish');
var Mammal = require('./mammal');

    let billy = new Animal('Billy', 500, 20, 300);
    console.log(billy.eat());
    console.log(billy.play());
    console.log(billy.eat());
    console.log(billy.play());

   

    let bilfishy = new Fish('Filly', 500, 20, 300);
    console.log(bilfishy.eat());
    console.log(bilfishy.play());
    console.log(bilfishy.eat());
    console.log(bilfishy.play());

   
    let lion = new Mammal("Leo", 0, 200, 600);
    lion.greet();

    let goldfish = new Fish("Goldy", 200, 5, 60);
    goldfish.greet();

    let carp = new Fish("Carpy", 25, 17, 90);

    carp.mate(carp, lion);

    lion.mate(carp, goldfish);