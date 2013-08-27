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


$('#slideToggle').click( function() {
  $('#carousel').toggle();
});


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



(function(){
  var timeout;

  $('.hotspot').hover( function onEnter(e, i) {
    var $container = $('#wireframeContainer');

    var offset = $(this).position();
    $container.css({ left: offset.left + $(this).width()/2, top: offset.top + $(this).height()/2 });

    // update container content
    $container.find('img').attr('src', $(this).find('img').attr('src'));
    $container.find('.note').html($(this).find('.note').html());

    $container.show();

  }, function onLeave() {
    timeout = window.setTimeout( function() {
      $('#wireframeContainer').hide();
      timeout == null;
    }, 100);  
  });

  $('#wireframeContainer').hover( function onEnter() {
    if (timeout !== null) {
      window.clearTimeout(timeout);
    }
  }, function onLeave() {
    $('#wireframeContainer').hide();
  });


})();

















