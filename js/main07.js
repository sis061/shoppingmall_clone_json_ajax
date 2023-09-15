$(function(){
    $.ajax({
        url: "./json/main07.json",
        dataType: "json",
        success : function(data){
            if(data.length>0){
                for(var i in data){
                    $(".new_product").eq(i).append("<a href='#'><img src='img/"+data[i].url+"' alt='"+data[i].alt+"'></a>");
                    $(".new_product").eq(i).append("<a href='#'><h3>"+data[i].title+"</h3></a>");
                    $(".new_product").eq(i).append("<a href='#'><span id='rec_0"+ i +"'>"+data[i].price+"</span></a>");
                    $(".new_product").eq(i).append("<a href='#'><p>"+data[i].originPrice+"</p></a>");

                    if(i<4){
                        $(".new_product").eq(i).append("<img src='img/"+data[i].newIcon+"' alt='#' class='newicon'>");
                    };
                }
            }
        }
    })
});

function slide(){

    $('.new_product_big_slide').stop().animate({marginLeft:-484},1500, function(){
     $('.new_product_big_slide li:first').appendTo('.new_product_big_slide')
     $('.new_product_big_slide').css({marginLeft:0});
    });

   }

   setInterval(slide, 3000);