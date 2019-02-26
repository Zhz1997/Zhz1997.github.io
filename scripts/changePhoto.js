var imgArray = new Array();
imgArray[0] = new Image();
imgArray[0].src = '/img/i1.jpg';
imgArray[1] = new Image();
imgArray[1].src = '/img/i2.png';
imgArray[2] = new Image();
imgArray[2].src = '/img/i3.png';

var i = document.getElementsByClassName("imageBlock1")[0];
i.style.background = "url(" + imgArray[0].src + ")";
i.style.backgroundSize = "100% 100%"

var curIndex = 0;

$('.leftArrow').click(function(){
  leftChangePhoto()
});

$('.rightArrow').click(function(){
  rightChangePhoto()
});

function leftChangePhoto(){
  var cur = document.getElementsByClassName("imageBlock1")[0];
  if(curIndex != 0){
    curIndex = curIndex - 1;
  }
  else{
    curIndex = 2;
  }
  cur.style.background = "url(" + imgArray[curIndex].src + ")";
  cur.style.backgroundSize = "100% 100%"
}

function rightChangePhoto(){
  var cur = document.getElementsByClassName("imageBlock1")[0];
  if(curIndex != 2){
    curIndex = curIndex + 1;
  }
  else{
    curIndex = 0;
  }
  cur.style.background = "url(" + imgArray[curIndex].src + ")";
  cur.style.backgroundSize = "100% 100%"
}
