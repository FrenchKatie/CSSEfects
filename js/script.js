$(document).ready(function(){
  $("#rotateBox").hover(function(){
    $(this).toggleClass("rotate360");
  });

  // Did not get the HTML
  // $(".collumn").hover(function(){
  //   $(this).toggleClass("grow");
  // });

  $(".menu").click(function(){
    $(".middle").toggleClass("hide");
    // $(".middle").hide();
  })
});
