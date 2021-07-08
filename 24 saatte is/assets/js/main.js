$(".read-more").click(function(){
	$(".intro").removeClass("content"),
    $(".read-more").css("display","none")
  });
  $(".scroll").hover(function(){
    $(this).animate({
      'scrollLeft':1150
    },{duration:600,queue:false});
  },function(){
   $(this).animate({
     'scrollLeft':0
   },{duration:600,queue:false});
 
  });
 