$(function(){
    $.ajax({
        url:"./json/main01.json",
        dataType:"json",
        success: function(data){
            if(data.length>0){
                for(var i in data){
                    $(".main_icon_img").eq(i).attr("src","img/main_"+data[i].url);
                    $(".main_icon_text").eq(i).text(data[i].title);
                }
            }
        }
    });
});