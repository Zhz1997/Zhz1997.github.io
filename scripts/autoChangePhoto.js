var imgArray = new Array();
imgArray[0] = new Image();
imgArray[0].src = 'img/i1.jpg';
imgArray[1] = new Image();
imgArray[1].src = 'img/i2.png';
imgArray[2] = new Image();
imgArray[2].src = 'img/i3.png';


var ini = document.getElementsByClassName("im2")[0];
ini.src = imgArray[0].src;


var start = 1;

function callChangePhoto(){
  setInterval(changePhoto,2000);
}

function changePhoto(){
  var x = document.getElementsByClassName("im2")[0]
  x.src = imgArray[start].src;
  //console.log(imgArray[start]);
  if(start==2){
    start = 0;
  }
  else{
    start = start+1
  }
}

callChangePhoto();
