$(function(){
    $.ajax({
        url: "./json/main03.json",
        dataType: "json",
        success : function(data){
            if(data.length>0){
                for(var i in data){
                    $(".only_product").eq(i).append("<a href='#'><img src='img/"+data[i].url+"' alt='"+data[i].alt+"'></a>");
                    $(".only_product").eq(i).append("<a href='#'><h3>"+data[i].title+"</h3></a>");
                    $(".only_product").eq(i).append("<a href='#'><span id='only_0"+ i +"'>"+data[i].price+"</span></a>");
                    $(".only_product").eq(i).append("<a href='#'><p>"+data[i].originPrice+"</p></a>");
                }
            }
        }
    })
});