$(function(){
    $.ajax({
        url: "./json/main08.json",
        dataType: "json",
        success : function(data){
            if(data.length>0){
                for(var i in data){
                    $(".vidbox_item").eq(i).append("<a href='#'><img src='img/"+data[i].url+"' alt='"+data[i].alt+"'></a>");
                    $(".vidbox_item").eq(i).append("<p>"+data[i].title+"</p>");
                    $(".vidbox_item").eq(i).append("<h3>"+data[i].subtitle+"</h3>");
                }
            }
        }
    })
});