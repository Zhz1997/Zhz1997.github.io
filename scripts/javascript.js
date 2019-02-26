$('.nav-item').hover(
  function(){
    if(!$(this).hasClass("active")){
      $(this).css("background-color", "grey");
    }
  },
  function(){
    $(this).css("background-color", "#343a40");
  }
)
