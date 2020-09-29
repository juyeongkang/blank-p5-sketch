// The things what i love
let things = [{
    who: "Father",
    color: "special treat color"
    },{
    who: "Mother ",
    color: "chartrese"
    },{
    who:"Brother",
    color: "poop"
    },{
    who:"Girlfriend",
    color: "blue"
    },{
    who:"Bestfriends",
    color: "black"
    },{
    who:"Games",
    color: "red"
    },{
    who:"Art",
    color: "white"
    }];

   let randomIndex;

    function setup() {
      createCanvas(400, 400);
      background(200);

}

    function draw() {

    }

   function mousePressed()  {
     background(random(200, 255));
     randomIndex = int(random(things.length));
     text(things[randomIndex].who, 155, 155);
     things.splice(randomIndex, 1);

}
