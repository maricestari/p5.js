// variavel circulo 
let X1 = 15;
let Y1 = 15;
let C1 = 30;
let Vx = 2;
let Vy = 2;

// variavel circulo 2
let X2 = 15;
let Y2 = 435;
let C2 = 30;
let Vx2 = 2;1
let Vy2 = 2;

// variavel circulo 3
let X3 = 585;
let Y3 = 15;
let C3 = 30;
let Vx3 = 2;
let Vy3 = 2;

// variavel circulo 4
let X4 = 585;
let Y4 = 435;
let C4 = 30;
let Vx4 = 2;
let Vy4 = 2;

// variavel circulo 5
//let X5 = 300;
//let Y5 = 225;
//let C5 = 30;

 

function setup() {
 createCanvas( 600, 450);
}

function draw() {
 background(' green');
 fill('red');
 circle(X1, Y1, C1);
 fill( 'black');
 circle(X2, Y2, C2);
 fill( 'blue')
 circle(X3, Y3, C3);
 fill( 'yellow')
 circle(X4, Y4, C4);
 fill('pink')
 //circle(X5, Y5, C5)
 

 X1+=Vx;
 Y1+=Vy;
 
if(X1 > width || X1<0){Vx*=-1};
if(Y1 > height ||Y1<0){Vy *=-1};
 
 X3-=Vx3;
 Y3+=Vy3;
 
 if(X3 > width || X3<0){Vx3 *=-1};
 if(Y3 > height || Y3<0){Vy3 *=-1};
 
 X2+=Vx2;
 Y2-=Vy2;
 
 if(X2 > width || X2<0){Vx2 *=-1};
 if(Y2 > height || Y2<0){Vy2 *=-1};
 
 X4-=Vx4;
 Y4-=Vy4;
 
 if(X4 > width || X4<0){Vx4 *=-1};
 if(Y4 > height || Y4<0){Vy4 *=-1};
 
//C5+=2;
 
}