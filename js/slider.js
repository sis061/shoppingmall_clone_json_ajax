
function slide(){

    $('.slider').stop().animate({marginLeft:-1920},1200, function(){
 
     $('.slider li:first').appendTo('.slider')
 
     $('.slider').css({marginLeft:0});
 
    });
 
   }
 
   setInterval(slide, 5000);

   $(function () {
    $.ajax({
        url: "./json/slider.json",
        dataType: "json",
        success: function (data) {
            if (data.length > 0) {
                for (var i in data) {
                    $(".slider").eq(0).append("<li><a href='#'><img src='img/" + data[i].url + "' alt='slider_img'></a></li>");
                }
            }
        }
    });
});

