var imgArray = new Array();
imgArray[0] = new Image();
imgArray[0].src = '../img/i1.jpg';
imgArray[1] = new Image();
imgArray[1].src = '../img/i2.png';
imgArray[2] = new Image();
imgArray[2].src = '../img/i3.png';


var curIndex = 0;

$('.leftArrow').click(function(){
  leftChangePhoto()
});

$('.rightArrow').click(function(){
  rightChangePhoto()
});

function leftChangePhoto(){
  var cur = document.getElementsByClassName("im1")[0];
  if(curIndex != 0){
    curIndex = curIndex - 1;
  }
  else{
    curIndex = 2;
  }
  cur.src = imgArray[curIndex].src;
}

function rightChangePhoto(){
  var cur = document.getElementsByClassName("im1")[0];
  if(curIndex != 2){
    curIndex = curIndex + 1;
  }
  else{
    curIndex = 0;
  }
  cur.src = imgArray[curIndex].src;
}
