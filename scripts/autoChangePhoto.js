var imgArray = new Array();
imgArray[0] = new Image();
imgArray[0].src = 'C:/work/gitweb/img/i1.jpg';
imgArray[1] = new Image();
imgArray[1].src = 'C:/work/gitweb/img/i2.png';
imgArray[2] = new Image();
imgArray[2].src = 'C:/work/gitweb/img/i3.png';

var ini = document.getElementsByClassName("imageBlock2")[0];
ini.style.background = "url('C:/work/gitweb/img/i1.jpg')";
ini.style.backgroundSize = "100% 100%"


var start = 1;

function callChangePhoto(){
  setInterval(changePhoto,2000);
}

function changePhoto(){
  var x = document.getElementsByClassName("imageBlock2")[0];
  x.style.background = "url(" + imgArray[start].src + ")";
  x.style.backgroundSize = "100% 100%"
  //console.log(imgArray[start]);
  if(start==2){
    start = 0;
  }
  else{
    start = start+1
  }
}
callChangePhoto();
