$(function(){
    $.ajax({
        url: "./json/main05.json",
        dataType: "json",
        success : function(data){
            if(data.length>0){
                for(var i in data){
                    $(".event_product").eq(i).append("<a href='#'><img src='img/"+data[i].urlBig+"' alt='#' class='event_big' ></a>");
                    $(".event_product").eq(i).append("<a href='#'><img src='img/"+data[i].urlSmall+"' alt='#' class='event_small' ></a>");
                    $(".event_product").eq(i).append("<a href='#'><h3>"+data[i].title+"</h3></a>");
                    $(".event_product").eq(i).append("<a href='#'><span id='event_1_"+ i +"'>"+data[i].price+"</span></a>");
                    $(".event_product").eq(i).append("<a href='#'><p>"+data[i].originPrice+"</p></a>");
                    $(".event_product").eq(i).append("<a href='#'><img src='img/"+data[i].iconHeart+"' alt='찜아이콘' class='event_icon1' ></a>");
                    $(".event_product").eq(i).append("<a href='#'><img src='img/"+data[i].iconCart+"' alt='장바구니아이콘' class='event_icon2' ></a>");
                }
            }
        }
    })
});