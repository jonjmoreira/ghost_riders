class Rider {
  constructor( x, y ) {
    this.pos = createVector( x, y );
    this.tcolor = color( 255, 0, 0 );
    this.riderPos = createVector( this.pos.x, this.pos.y - 200 );
  }

  get bike() {
    this.rider();
    this.guideShape();
    this.motorShape();
    this.wheelShape();
    this.cageShape();
  }

  rider() {
    rectMode(CENTER);

    // torso shirt
    fill( 34, 139, 34 );
    rect( this.riderPos.x, this.riderPos.y + 30, 100, 135, 50 );
    

    // neck
    fill( 241, 194, 125 );
    strokeWeight(1)
    beginShape();
      vertex( this.riderPos.x, this.riderPos.y - 10 );
      bezierVertex( this.riderPos.x - random( 45, 50 ), this.riderPos.y - 40,
        this.riderPos.x + random( 45, 50 ), this.riderPos.y - 40,
        this.riderPos.x, this.riderPos.y - 10 );
    endShape();

    stroke( 0, 12 );
    rect( this.riderPos.x, this.riderPos.y - 35, 20, 25, 3 );

    // head
    stroke( 0 );
    beginShape();
      vertex( this.riderPos.x, this.riderPos.y - 25 );
      bezierVertex( this.riderPos.x - 15, this.riderPos.y - 35,
        this.riderPos.x - 20, this.riderPos.y - 55,
        this.riderPos.x - 15, this.riderPos.y - 75 );
      bezierVertex( this.riderPos.x - 10, this.riderPos.y - 85,
        this.riderPos.x + 10, this.riderPos.y - 85 ,
        this.riderPos.x + 15, this.riderPos.y - 75 );
      bezierVertex( this.riderPos.x + 20, this.riderPos.y - 55,
        this.riderPos.x + 15, this.riderPos.y - 35,
        this.riderPos.x, this.riderPos.y - 25 );
    endShape(CLOSE);

    // ears
    noStroke()
    arc( this.riderPos.x - 20, this.riderPos.y - 55, 3, 10, -HALF_PI, HALF_PI );
    arc( this.riderPos.x + 20, this.riderPos.y - 55, 3, 10, HALF_PI, -HALF_PI );

    // hair
    noFill();
    stroke( 0 );
    for ( let h = 0; h < 40; h++ ) {
      beginShape();
        vertex( this.riderPos.x - 18 + h, this.riderPos.y - 65 );
        vertex( this.riderPos.x + random( -20, 20 ), this.riderPos.y - random( 60, 65 ) );
      endShape();
    }

    // beard and moustache
    fill( 0 );
    arc( this.riderPos.x, this.riderPos.y - 40, 20, 10, PI, TWO_PI );
    arc( this.riderPos.x, this.riderPos.y - 35, 8, 5, TWO_PI, PI );

    // glasses
    stroke( 0 );
    fill( 10 );
    rect( this.riderPos.x - 8, this.riderPos.y - 55, 12, 10, 4 );
    rect( this.riderPos.x + 8, this.riderPos.y - 55, 12, 10, 4 );
    line( this.riderPos.x - 8, this.riderPos.y - 55, this.riderPos.x + 8, this.riderPos.y - 58 );

    // helmet
    fill( 50 );
    arc( this.riderPos.x, this.riderPos.y - 65, 32, 40, PI, TWO_PI );
    stroke( 255 );
    strokeWeight(2)
    point( this.riderPos.x - 5, this.riderPos.y - 75 );
    point( this.riderPos.x, this.riderPos.y - 80 );
    point( this.riderPos.x + 5, this.riderPos.y - 75 );
    // collet
    fill( 20 )
    stroke( 127 );
    strokeWeight(1);

    // left tab
    beginShape();
      vertex( this.riderPos.x - 10, this.riderPos.y - 10 );
      bezierVertex( this.riderPos.x - random( 15, 25 ), this.riderPos.y - random( 40, 50 ),
        this.riderPos.x - 35, this.riderPos.y - 30,
        this.riderPos.x - 40, this.riderPos.y - 25 );
      bezierVertex( this.riderPos.x - random( 40, 60 ), this.riderPos.y,
        this.riderPos.x - random( 60, 80 ), this.riderPos.y + 30,
        this.riderPos.x - random( 60, 80 ), this.riderPos.y + random( 90, 100) );
      vertex( this.riderPos.x - 10, this.riderPos.y + 85)
    endShape(CLOSE);

    // right tab
    beginShape();
      vertex( this.riderPos.x + 10, this.riderPos.y - 10 );
      bezierVertex( this.riderPos.x + random( 15, 25 ), this.riderPos.y - random( 40, 50 ),
        this.riderPos.x + 35, this.riderPos.y - 30,
        this.riderPos.x + 40, this.riderPos.y - 25 );
      bezierVertex( this.riderPos.x + random( 40, 60 ), this.riderPos.y,
        this.riderPos.x + random( 60, 80 ), this.riderPos.y + 30,
        this.riderPos.x + random( 60, 80 ), this.riderPos.y + random( 90, 100)  );
      vertex( this.riderPos.x + 10, this.riderPos.y + 85)
    endShape(CLOSE);

    // left arm
    fill( 34, 139, 34 );
    stroke( 0 );
    strokeWeight(1)
    beginShape();
      vertex( this.riderPos.x - 98, this.riderPos.y + 5 );
      bezierVertex( this.riderPos.x - 80, this.riderPos.y - 15,
        this.riderPos.x - random( 60, 70 ), this.riderPos.y - random( 15, 25),
        this.riderPos.x - 40, this.riderPos.y - 25 );
      vertex( this.riderPos.x - 40, this.riderPos.y + 5 );
      bezierVertex( this.riderPos.x - 45, this.riderPos.y + 15,
        this.riderPos.x - 40, this.riderPos.y + 10,
        this.riderPos.x - random( 60, 70), this.riderPos.y + random(25, 30) );
      bezierVertex( this.riderPos.x - 80, this.riderPos.y + 30,
        this.riderPos.x - 90, this.riderPos.y + 15,
        this.riderPos.x - 100, this.riderPos.y + 5 );
      vertex( this.riderPos.x - 70, this.riderPos.y + 5 );
    endShape(CLOSE);

    // right arm
    fill( 34, 139, 34 );
    stroke( 0 );
    strokeWeight(1)
    beginShape();
      vertex( this.riderPos.x + 98, this.riderPos.y + 5 );
      bezierVertex( this.riderPos.x + 80, this.riderPos.y - 15,
        this.riderPos.x + random( 60, 70 ), this.riderPos.y - random( 15, 25),
        this.riderPos.x + 40, this.riderPos.y - 25 );
      vertex( this.riderPos.x + 40, this.riderPos.y + 5 );
      bezierVertex( this.riderPos.x + 45, this.riderPos.y + 15,
        this.riderPos.x + 40, this.riderPos.y + 10,
        this.riderPos.x + random( 60, 70), this.riderPos.y + random(25, 30) );
      bezierVertex( this.riderPos.x + 80, this.riderPos.y + 30,
        this.riderPos.x + 90, this.riderPos.y + 15,
        this.riderPos.x + 100, this.riderPos.y + 5 );
      vertex( this.riderPos.x + 70, this.riderPos.y + 5 );
    endShape(CLOSE);

    // main guide direction
    noStroke();
    fill( 50 );
    arc( this.pos.x, this.pos.y - 195, 120, 10, PI, TWO_PI );
    rect( this.pos.x, this.pos.y - 190, 200, 10, 2 );

    // left hand
    fill( 0 );
    stroke( 100 );
    strokeWeight(1);
    rect( this.riderPos.x - 85, this.riderPos.y + 10, 25, 15, 5 );
    stroke( 255 );
    for ( let i = 0; i < 4; i++ ) {
      line( this.riderPos.x - 92 + i * 4.4, this.riderPos.y + 15, this.riderPos.x - 92 + i * 4.4, this.riderPos.y + 5 );
    }

    // right hand
    fill( 0 );
    stroke( 100 );
    strokeWeight(1);
    rect( this.riderPos.x + 85, this.riderPos.y + 10, 25, 15, 5 );
    stroke( 255 );
    for ( let i = 0; i < 4; i++ ) {
      line( this.riderPos.x + 92 - i * 4.4, this.riderPos.y + 15, this.riderPos.x + 92 - i * 4.4, this.riderPos.y + 5 );
    }

    // legs
    fill( 36, 50, 62 );
    noStroke();
    // left leg
    beginShape();
      vertex( this.riderPos.x - 80, this.riderPos.y + 185 );
      bezierVertex( this.riderPos.x - random( 75, 85 ), this.riderPos.y + 155,
        this.riderPos.x - random( 75, 85 ), this.riderPos.y + 125,
        this.riderPos.x - 75, this.riderPos.y + 95 );
      bezierVertex( this.riderPos.x - 35, this.riderPos.y + 45,
        this.riderPos.x - 35, this.riderPos.y + 125,
        this.riderPos.x - 45, this.riderPos.y + 125 );
      bezierVertex( this.riderPos.x - 50, this.riderPos.y + 135,
        this.riderPos.x - random( 40, 50 ), this.riderPos.y + 155,
        this.riderPos.x - 50, this.riderPos.y + 185 );
    endShape(CLOSE);

    // right leg
    beginShape();
      vertex( this.riderPos.x + 80, this.riderPos.y + 185 );
      bezierVertex( this.riderPos.x + random( 75, 85 ), this.riderPos.y + 155,
        this.riderPos.x + random( 75, 85 ), this.riderPos.y + 125,
        this.riderPos.x + 75, this.riderPos.y + 95 );
      bezierVertex( this.riderPos.x + 35, this.riderPos.y + 45,
        this.riderPos.x + 35, this.riderPos.y + 125,
        this.riderPos.x + 45, this.riderPos.y + 125 );
      bezierVertex( this.riderPos.x + 50, this.riderPos.y + 135,
        this.riderPos.x + random( 40, 50 ), this.riderPos.y + 155,
        this.riderPos.x + 50, this.riderPos.y + 185 );
    endShape(CLOSE);

    // left foot
    stroke( 100 );
    strokeWeight(1);
    fill( 51, 25, 0 );
    beginShape();
    vertex( this.riderPos.x - 80, this.riderPos.y + 185 );
      bezierVertex( this.riderPos.x - 80, this.riderPos.y + 150,
        this.riderPos.x - 55, this.riderPos.y + 150,
        this.riderPos.x - 50, this.riderPos.y + 185 );
      bezierVertex( this.riderPos.x - 40, this.riderPos.y + 220,
        this.riderPos.x - 80, this.riderPos.y + 230,
        this.riderPos.x - 80, this.riderPos.y + 185 );
    endShape(CLOSE);
    // dirt
    stroke( 50, 150 );
    for ( let l = 0; l < 10; l+=1 ) {
      line( this.riderPos.x - 75 - l * 0.3, this.riderPos.y + 170 + l * 3, 
        this.riderPos.x - 60 + l, this.riderPos.y + 173 + l * 3 );
      line( this.riderPos.x - 75 + l * 1.6, this.riderPos.y + 170, 
        this.riderPos.x - 70 + l * 1.3, this.riderPos.y + 205 );
    }

    // right foot
    stroke( 100 );
    strokeWeight(1);
    fill( 51, 25, 0 );
    beginShape();
    vertex( this.riderPos.x + 80, this.riderPos.y + 185 );
      bezierVertex( this.riderPos.x + 80, this.riderPos.y + 150,
        this.riderPos.x + 55, this.riderPos.y + 150,
        this.riderPos.x + 50, this.riderPos.y + 185 );
      bezierVertex( this.riderPos.x + 40, this.riderPos.y + 220,
        this.riderPos.x + 80, this.riderPos.y + 230,
        this.riderPos.x + 80, this.riderPos.y + 185 );
    endShape(CLOSE);
    // dirt
    stroke( 50, 150 );
    for ( let l = 0; l < 10; l+=1 ) {
      line( this.riderPos.x + 75 + l * 0.3, this.riderPos.y + 170 + l * 3, 
        this.riderPos.x + 60 - l, this.riderPos.y + 173 + l * 3 );
      line( this.riderPos.x + 75 - l * 1.6, this.riderPos.y + 170, 
        this.riderPos.x + 70 - l * 1.3, this.riderPos.y + 205 );
    }
  }

  motorShape() {
    rectMode(CENTER);

    // gas tank
    noStroke();
    fill( 0 );
    rect( this.pos.x, this.pos.y - 100, 100, 30, 50);

    // pedals
    // left foot sup
    fill( 30);
    noStroke();
    rect( this.pos.x - 60, this.pos.y - 10, 40, 8, 3 );

    // right foot sup
    rect( this.pos.x + 60, this.pos.y - 10, 40, 8, 3 );

    // side engine
    // left
    fill( 0 );
    stroke( 100 );
    strokeWeight( 1 );
    rect( this.pos.x - 40, this.pos.y - 50, 10, 35, 50);
    fill( 50 );
    rect( this.pos.x - 45, this.pos.y - 50, 5, 15, 50);

    // right
    fill( 0 );
    stroke( 100 );
    strokeWeight( 1 );
    rect( this.pos.x + 40, this.pos.y - 50, 10, 35, 50);
    fill( 50 );
    rect( this.pos.x + 45, this.pos.y - 50, 5, 15, 50);

    // main engine
    fill( 20 );
    rect( this.pos.x, this.pos.y - 10, 90, 50, 15 );
    fill( 30 );
    stroke( 255, 20 );
    strokeWeight( 1 );
    beginShape();
    vertex( this.pos.x, this.pos.y );
    vertex( this.pos.x - 20, this.pos.y );
    vertex( this.pos.x - 25, this.pos.y - 50 );
    vertex( this.pos.x - 35, this.pos.y - 55 );
    vertex( this.pos.x - 40, this.pos.y - 85 );
    vertex( this.pos.x + 40, this.pos.y - 85 );
    vertex( this.pos.x + 35, this.pos.y - 55 );
    vertex( this.pos.x + 25, this.pos.y - 50 );
    vertex( this.pos.x + 20, this.pos.y );
    vertex( this.pos.x, this.pos.y );
    endShape(CLOSE);

    stroke( 255, 120 );
    strokeWeight( 2 );
    noFill();
    let count = 3;
    for ( let v = 0; v < 40; v+=5 ) {
    beginShape();
        vertex( this.pos.x - 40 + count, this.pos.y - 85 + v );
        vertex( this.pos.x - 30 + count, this.pos.y - 85 + v );
        vertex( this.pos.x - 10 + count, this.pos.y - 80 + v );
        vertex( this.pos.x + 10 - count, this.pos.y - 80 + v );
        vertex( this.pos.x + 30 - count, this.pos.y - 85 + v );
        vertex( this.pos.x + 40 - count, this.pos.y - 85 + v );
    endShape();
    beginShape();
      vertex( this.pos.x - 28 + count, this.pos.y - 55 + v );
      vertex( this.pos.x - 20 + count, this.pos.y - 55 + v );
      vertex( this.pos.x - 10 + count, this.pos.y - 50 + v );
      vertex( this.pos.x + 10 - count, this.pos.y - 50 + v );
      vertex( this.pos.x + 20 - count, this.pos.y - 55 + v );
      vertex( this.pos.x + 28 - count, this.pos.y - 55 + v );
    endShape();
      count += 1;
    }

    // engine supporters
    noFill();
    stroke( 0 );
    strokeWeight(8);
    line( this.pos.x - 10, this.pos.y - 100, this.pos.x - 40, this.pos.y + 10 );
    line( this.pos.x + 10, this.pos.y - 100, this.pos.x + 40, this.pos.y + 10 );
  }

  guideShape() {
    rectMode(CENTER);

    // main direction
    // fill( 50 );
    // arc( this.pos.x, this.pos.y - 195, 120, 10, PI, TWO_PI );
    // rect( this.pos.x, this.pos.y - 190, 200, 10, 2 );

    // mirrors
    // left mirror
    noStroke();
    fill( 50 );
    rect( this.pos.x - 75, this.pos.y - 220, 40, 20, 20 );
    stroke( 0 );
    strokeWeight(3);
    line( this.pos.x - 50, this.pos.y - 195, this.pos.x - 70, this.pos.y - 220 );

    // right mirror
    noStroke();
    fill( 50 );
    rect( this.pos.x + 75, this.pos.y - 220, 40, 20, 20 );
    stroke( 0 );
    strokeWeight(3);
    line( this.pos.x + 50, this.pos.y - 195, this.pos.x + 70, this.pos.y - 220 );

    // embreagem
    fill( 0 );
    stroke( 255 );
    strokeWeight( 1 );
    rect( this.pos.x + 55, this.pos.y - 190, 20, 15, 3 );
    fill( 10 );
    stroke( 100 );
    rect( this.pos.x + 80, this.pos.y - 190, 50, 5, 3 );
    noStroke();
    ellipse( this.pos.x + 110, this.pos.y - 190, 10 );

    // break
    fill( 0 );
    stroke( 255 );
    strokeWeight( 1 );
    rect( this.pos.x - 55, this.pos.y - 190, 20, 15, 3 );
    fill( 10 );
    stroke( 100 );
    rect( this.pos.x -80, this.pos.y - 190, 50, 5, 3 );
    noStroke();
    ellipse( this.pos.x - 110, this.pos.y - 190, 10 );

    // right lamp
    stroke( 100 );
    strokeWeight(4);
    line( this.pos.x + 48, this.pos.y - 125, this.pos.x + 70, this.pos.y - 125 );
    noStroke();
    fill( 50 );
    ellipse( this.pos.x + 70, this.pos.y - 125, 20 );
    fill( 255, 150, 50, 200 );
    ellipse( this.pos.x + 70, this.pos.y - 125, 15 );
    fill( 255, 150, 0, 255 );
    ellipse( this.pos.x + 70, this.pos.y - 125, 10 );

    // left lamp
    stroke( 100 );
    strokeWeight(4);
    line( this.pos.x - 48, this.pos.y - 125, this.pos.x - 70, this.pos.y - 125 );
    noStroke();
    fill( 50 );
    ellipse( this.pos.x - 70, this.pos.y - 125, 20 );
    fill( 255, 150, 50, 200 );
    ellipse( this.pos.x - 70, this.pos.y - 125, 15 );
    fill( 255, 150, 0, 255 );
    ellipse( this.pos.x - 70, this.pos.y - 125, 10 );
  }

  cageShape() {
    rectMode(CENTER);
    noStroke();
    fill( 0 );

    // left side black bar
    rect( this.pos.x - 27, this.pos.y - 35, 10, 90, 3 );
    // right side black bar
    rect( this.pos.x + 27, this.pos.y - 35, 10, 90, 3 );

    fill( 255 );
    stroke( 0 );
    strokeWeight( 1 );
    // left side white bar
    rect( this.pos.x - 27, this.pos.y - 80, 10, 45, 3 );
    // right side white bar
    rect( this.pos.x + 27, this.pos.y - 80, 10, 45, 3 );

    // shield
    stroke( 255, 127 );
    strokeWeight( 1 );
    fill( 10 );
    beginShape();
      vertex( this.pos.x, this.pos.y - 100 );
      bezierVertex( this.pos.x - 65, this.pos.y - 100,
        this.pos.x - 35, this.pos.y - 120,
        this.pos.x - 70, this.pos.y - 150 );
      bezierVertex( this.pos.x - 20, this.pos.y - 220,
        this.pos.x + 20, this.pos.y - 220,
        this.pos.x + 70, this.pos.y - 150 );
      bezierVertex( this.pos.x + 35, this.pos.y - 120,
        this.pos.x + 65, this.pos.y - 100,
        this.pos.x, this.pos.y - 100 );
    endShape(CLOSE);

    // shield detail
    noFill();
    beginShape();
    vertex( this.pos.x - 24, this.pos.y - 195 );
    vertex( this.pos.x - 24, this.pos.y - 170 );
    vertex( this.pos.x + 24, this.pos.y - 170 );
    vertex( this.pos.x + 24, this.pos.y - 195 );
    endShape();
    for ( let i = 0; i < 36; i+=9 ) {
      ellipse( this.pos.x - 14 + i, this.pos.y - 180, 3 );
      ellipse( this.pos.x - 14 + i, this.pos.y - 190, 1 );
    }

    // lamp
    fill( 255 );
    ellipse( this.pos.x, this.pos.y - 135, 55 );
    stroke( 0 );
    fill( 255, 255, 0, random( 127, 200 ) );
    ellipse( this.pos.x, this.pos.y - 135, 50 );
    noStroke();
    fill( random( 240, 255 ), 255, 120, random( 127, 255 ) );
    ellipse( this.pos.x, this.pos.y - 135, 25 );
  }

  wheelShape() {
    this.wheel = this.pos.copy();
    let wheelWidth = 30,
      wheelHeight = 150;
    rectMode(CENTER);

    // middle bar
    fill(50);
    noStroke();
    rect( this.wheel.x, this.wheel.y, wheelWidth * 2.4, wheelHeight / 15, 3);

    // discs
    fill( 0 );
    noStroke();
    rect( this.wheel.x, this.wheel.y, wheelWidth * 1.2, wheelHeight / 5, 6);

    // wheel
    noStroke();
    fill( random( 10, 50 ));
    rect( this.wheel.x, this.wheel.y, wheelWidth, wheelHeight, 12)
    fill( random( 50, 90 ));
    rect( this.wheel.x, this.wheel.y, wheelWidth / 3, wheelHeight, 20);

    // wheel protector
  }
}

class Scenery {
  constructor( x, y ) {
    this.pos = createVector( x, y );
  }
  
  get scene() {
    this.sky();
    this.sun();
    this.land();
    this.road();

  }

  road() {
    stroke( 0 );
    fill( 100 );
    strokeWeight(1);
    beginShape();
      vertex( this.pos.x - 350, height );
      vertex( this.pos.x - 20, this.pos.y );
      vertex( this.pos.x + 20, this.pos.y );
      vertex( this.pos.x + 350, height );
    endShape(CLOSE);

    // white strips
    fill( 255 );
    beginShape();
      vertex( this.pos.x - 35, height );
      vertex( this.pos.x - 1, this.pos.y );
      vertex( this.pos.x + 1, this.pos.y );
      vertex( this.pos.x + 35, height );
    endShape(CLOSE);

    // random points
  }

  sun() {
    fill( 255, 100, 10);
    stroke(0);
    strokeWeight(1);
    ellipse( this.pos.x, height / 2, 400);
  }

  sky() {
    fill( 53, 81, 122 );
    noStroke();
    beginShape();
      vertex( 0,0 );
      vertex( width, 0 );
      vertex( width, height / 2 );
      vertex( 0, height / 2 );
    endShape(CLOSE);
  }

  land() {
    fill( random(28, 20), random( 80, 85 ), random( 20, 43 ) );
    noStroke();
    beginShape();
      vertex( 0, height / 2 );
      vertex( width, height / 2 );
      vertex( width, height );
      vertex( 0, height );
    endShape(CLOSE);
  }
}

class Detail {
  constructor( x, y ) {
    this.pos = createVector( x, y );
    this.vel = createVector( 0, 0 );
    this.acc = createVector( 0, 0 );
  }

  points() {
    stroke( random( 20 , 80 ) );
    strokeWeight( random( 4, 9 ) );
    point( this.pos.x, this.pos.y );
    
    let center = createVector( width / 2, height / 2 );
    this.acc = p5.Vector.sub( center, this.pos );
    this.acc.setMag( 0.8 );

    this.vel.add( this.acc );
    //this.vel.limit( 10);

    this.pos.add( this.vel );

    if ( this.pos.y <= center.y ) {
      this.pos.set( random( width / 2 - 350, width / 2 + 350 ), height );
      this.vel.set( 0, 0);
    }
  }
}

var cnv,
  rider,
  scenery,
  detail = [],
  size = 100,
  courtain,
  mySound;

  function preload() {
    soundFormats( 'mp3', 'ogg' );
    mySound = loadSound( 'assets/rising-sun' );
  }
  
function setup() {
  frameRate( 60 );
	cnv = createCanvas(windowWidth, windowHeight);
  centerCanvas();
	rider = new Rider( width / 2, height - 200 );
  scenery = new Scenery( width / 2, height / 2 );
  for ( let i = 0; i < size; i++ ) {
    detail[i] = new Detail( random( width / 2 - 350, width / 2 + 350 ), random( height / 2, height ) );
  }
  courtain = height * 2;
  mySound.play();
}

function draw() {
  //noLoop();
  background( 255 );
  scenery.scene;
  for ( let i = 0; i < size; i++ ) {
    detail[i].points();
  }
  rider.bike;

  rectMode(CENTER);
  fill( 255 );
  rect( width / 2, height, width, courtain );

  if ( courtain > 0 ) courtain -= 3;

}



function centerCanvas() {
  let x = ( windowWidth - width ) / 2
  let y = ( windowHeight - height ) / 2
  return cnv.position( x, y );
}

function windowResized() {
  centerCanvas();
}