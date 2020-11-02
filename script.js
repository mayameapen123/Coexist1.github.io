var count = 1;
$(".para2").hide();
$(".tog").click(function() {
  if (count == 1) {
    $("p").css("font-family","freight-sans-pro");
     $("p").css("font-style","italic");
$(".para1").hide();
$(".para2").show();
    $("h2").css("font-family","freight-sans-pro");
       $("h2").css("font-style","italic");
$(".logo1").attr("src", "coexistfancy.png");
$(".img1").attr("src", "hand.png");}
else {
  $(".logo1").attr("src", "logo.png");
$(".img1").attr("src", "drillrev.png");
$("p").css("font-family","Rajdhani");
     $("p").css("font-style","normal");
        $("h2").css("font-family","Rajdhani");
        $("h2").css("font-style","normal");
        $(".para1").show();
$(".para2").hide();}
count = count*-1;
});

$("video").mouseenter(function(){
$(this).trigger("play");
$(this).autoplay = true;
      
});

$("video").mouseleave(function(){
$(this).trigger("pause");

});

$(".c1").click(function() {
   
  window.location.href='https://mayameapen123.github.io/Coexist1.github.io/';
});

$(".c2").click(function() {
   
  window.location.href='https://mayameapen123.github.io/coexist2.github.io/';
});

$(".c3").click(function() {
   
  window.location.href='https://mayameapen123.github.io/coexist3.github.io/';
});
