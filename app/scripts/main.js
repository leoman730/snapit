// $('document').ready(function(){
// 	$('nav ul').affix({
//     offset: $('#nav').position()
// });


// });

/* dot nav */
$(window).bind('scroll',function(e){
  redrawDotNav();
});

function redrawDotNav(){
  
  	var topNavHeight = 100;
  	var numDivs = $('section').length;
	
  	$('#dotNav li a').removeClass('active').parent('li').removeClass('active');  	
  	$('section').each(function(i,item){
      var ele = $(item), nextTop;
      
      console.log(ele.next().html());
      
      if (typeof ele.next().offset() != "undefined") {
        nextTop = ele.next().offset().top;
      }
      else {
        nextTop = $(document).height();
      }
      
      if (ele.offset() !== null) {
        thisTop = ele.offset().top - ((nextTop - ele.offset().top) / numDivs);
      }
      else {
        thisTop = 0;
      }
      
      var docTop = $(document).scrollTop()+topNavHeight;
      
      if(docTop >= thisTop && (docTop < nextTop)){
        $('#dotNav li').removeClass('active');
        $('#dotNav li').eq(i).addClass('active');
      }
	});   
}

/* get clicks working */
$('#dotNav li').click(function(){
  
	var id = $(this).find('a').attr("href"),
      posi,
      ele,
      padding = $('.navbar-fixed-top').height();
  
	ele = $(id);
	posi = ($(ele).offset()||0).top - padding;
  
	$('html, body').animate({scrollTop:posi}, 'slow');
  
	return false;
});

/* end dot nav */