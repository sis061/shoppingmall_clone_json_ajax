function slide(){

    $('#main_ban01').stop().animate({marginLeft:-1260},1000, function(){
     $('#main_ban01 li:first').appendTo('#main_ban01')
     $('#main_ban01').css({marginLeft:0});
    });

    $('#main_ban02').stop().animate({marginLeft:-1260},1000, function(){
        $('#main_ban02 li:first').appendTo('#main_ban02')
        $('#main_ban02').css({marginLeft:0});
       });

   }

   setInterval(slide, 3000);