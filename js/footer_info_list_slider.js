function slide(){

    $('#info_list').stop().animate({marginTop:-80},1000, function(){
     $('#info_list li:first').appendTo('#info_list')
     $('#info_list').css({marginTop:0});
    });

   }

   setInterval(slide, 3000);