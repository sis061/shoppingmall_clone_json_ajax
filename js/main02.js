$(function(){
    $.ajax({
        url: "./json/main02.json",
        dataType: "json",
        success : function(data){
            if(data.length>0){
                for(var i in data){
                    $(".timesale_product").eq(i).append("<a href='#'><img src='img/"+data[i].url+"' alt='그라인더'></a>");
                    $(".timesale_product").eq(i).append("<a href='#'><h3>"+data[i].title+"</h3></a>");
                    $(".timesale_product").eq(i).append("<a href='#'><span id='timesale_0"+ i +"'>"+data[i].price+"</span></a>");
                    $(".timesale_product").eq(i).append("<a href='#'><p>"+data[i].originPrice+"</p></a>");
                }
            }
        }
    })
});