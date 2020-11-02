//Global Variables
var gameState = 1;
var t1_10,t11_20,next,home,t1_10b,t11_20b;

var table1,table2,table3,table4,table5,table6,table7,table8,table9,table10;
var table11,table12,table13,table14,table15,table16,table17,table18,table19,table20;

var t1,t2,t3,t4,t5,t6,t7,t8,t9,t10;
var t11,t12,t13,t14,t15,t16,t17,t18,t19,t20;

var t1_10Img,t11_20Img;

function preload(){
  t11_20Img = loadImage("t11-20.jpg")
  t1_10Img = loadImage("table 1-10.jpg")
}


function setup() {
  createCanvas(600,300);
  t1_10b = createButton('table 1to10');
  t11_20b = createButton('table 11to20');

  t1_10 = createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
//  t1_10.color = "red";
//t1_10.addImage(t1_10Img);

t11_20 = createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
//t11_20.color = "green";
//t11_20 = addImage(t11_20Img);

  next = createButton("next")

table1 = createButton('table 1');
table2 = createButton('table 2');
table3 = createButton('table 3');
table4 = createButton('table 4');
table5 = createButton('table 5');
table6 = createButton('table 6');
table7 = createButton('table 7');
table8 = createButton('table 8');
table9 = createButton('table 9');
table10 = createButton('table 10');


}


function draw(){
 background(255);
 t1_10b.position(displayWidth/2-300, displayHeight/2-100); 
 t11_20b.position(displayWidth/2+300, displayHeight/2-100); 

 t1_10.visible = false;
 t11_20.visible = false;

 if(gameState === 1){
  table1.hide();
  table2.hide();
  table3.hide();
  table4.hide();
  table5.hide();
  table6.hide();
  table7.hide();
  table8.hide();
  table9.hide();
  table10.hide();
  next.hide();
 }

 t1_10b.mousePressed(()=>{
   t1_10.visible = true;
   gameState = 2;
 t1_10b.hide();
 t11_20b.hide();
 next.show();
 next.position(displayWidth/2+300,displayHeight/2+200);
});
next.mousePressed(()=>{
  next.hide();
  table1.show();
  table2.show();
  table3.show();
  table4.show();
  table5.show();
  table6.show();
  table7.show();
  table8.show();
  table9.show();
  table10.show();
   table1 .position(displayWidth/2-300, displayHeight/2-100); 
  table2 .position(displayWidth/2-250, displayHeight/2-100); 
  table3 .position(displayWidth/2-200, displayHeight/2-100); 
  table4 .position(displayWidth/2-150, displayHeight/2-100); 
  table5 .position(displayWidth/2-100, displayHeight/2-100); 
  table6 .position(displayWidth/2-50, displayHeight/2-100); 
  table7 .position(displayWidth/2, displayHeight/2-100); 
  table8 .position(displayWidth/2+50, displayHeight/2-100); 
  table9 .position(displayWidth/2+100, displayHeight/2-100); 
  table10.position(displayWidth/2+150, displayHeight/2-100); 
  
 });
 table1.mousePressed(()=>{
table1.hide();
  table2.hide();
  table3.hide();
  table4.hide();
  table5.hide();
  table6.hide();
  table7.hide();
  table8.hide();
  table9.hide();
  table10.hide();

  text("1*1 = 1",100,100);
  });
 table2.mousePressed(()=>{
  table1.hide();
  table2.hide();
  table3.hide();
  table4.hide();
  table5.hide();
  table6.hide();
  table7.hide();
  table8.hide();
  table9.hide();
  table10.hide();
  });
 table3.mousePressed(()=>{
  table1.hide();
  table2.hide();
  table3.hide();
  table4.hide();
  table5.hide();
  table6.hide();
  table7.hide();
  table8.hide();
  table9.hide();
  table10.hide();
  });
 table4.mousePressed(()=>{
  table1.hide();
  table2.hide();
  table3.hide();
  table4.hide();
  table5.hide();
  table6.hide();
  table7.hide();
  table8.hide();
  table9.hide();
  table10.hide();
  });
 table5.mousePressed(()=>{
  table1.hide();
  table2.hide();
  table3.hide();
  table4.hide();
  table5.hide();
  table6.hide();
  table7.hide();
  table8.hide();
  table9.hide();
  table10.hide();
  });
 table6.mousePressed(()=>{
  table1.hide();
  table2.hide();
  table3.hide();
  table4.hide();
  table5.hide();
  table6.hide();
  table7.hide();
  table8.hide();
  table9.hide();
  table10.hide();
  });
 table7.mousePressed(()=>{
  table1.hide();
  table2.hide();
  table3.hide();
  table4.hide();
  table5.hide();
  table6.hide();
  table7.hide();
  table8.hide();
  table9.hide();
  table10.hide();
  });
 table8.mousePressed(()=>{
  table1.hide();
  table2.hide();
  table3.hide();
  table4.hide();
  table5.hide();
  table6.hide();
  table7.hide();
  table8.hide();
  table9.hide();
  table10.hide();
  });
 table9.mousePressed(()=>{
  table1.hide();
  table2.hide();
  table3.hide();
  table4.hide();
  table5.hide();
  table6.hide();
  table7.hide();
  table8.hide();
  table9.hide();
  table10.hide();
  });
 table10.mousePressed(()=>{
  table1.hide();
  table2.hide();
  table3.hide();
  table4.hide();
  table5.hide();
  table6.hide();
  table7.hide();
  table8.hide();
  table9.hide();
  table10.hide();
  });
t11_20b.mousePressed(()=>{
  t1_10b.hide();
  t11_20b.hide();
 });

 
}