var capture;

function setup() {
  createCanvas(480 , 640);
  capture = createCapture(VIDEO);
  capture.hide();
} //setup

function draw() {
  capture.loadPixels();
  var filteredImage = createImage(480, 640);
  filteredImage.loadPixels();
  var i = 0; //counter for filtered pixels
  for(var y = 0; y < height; y++) {
    for(var x = (capture.width/2)-(width/2); x < (capture.width/2) + (width/2); x++) {
      var cap_i = (y * capture.width + x) * 4;
      var r = capture.pixels[cap_i];
      var g = capture.pixels[cap_i + 1];
      var b = capture.pixels[cap_i + 2];
      var a = capture.pixels[cap_i + 3];

      filteredImage.pixels[i++] = r;
      filteredImage.pixels[i++] = g;
      filteredImage.pixels[i++] = b;
      filteredImage.pixels[i++] = a;
    } //for
  } //for
  filteredImage.updatePixels();

  image(filteredImage, 0, 0, width, height);
} //draw
