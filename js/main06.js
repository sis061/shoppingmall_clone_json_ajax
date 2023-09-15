$(function(){
    $('.rec_nav_01').css({ "color": "#FF4438", "border": "1px solid #FF4438" });
})

function rec01() {
    $('.rec_nav_01').css({ "color": "#FF4438", "border": "1px solid #FF4438" });
    $('.rec_nav_02').css({ "color": "#888", "border": "1px solid #eee" });
    $("#rec_box_02").stop().hide();
    $("#main_rec").find('#rec_box_01').stop().show();
};

function rec02() {
    $('.rec_nav_02').css({ "color": "#FF4438", "border": "1px solid #FF4438" });
    $('.rec_nav_01').css({ "color": "#888", "border": "1px solid #eee" });
    $("#rec_box_02").css({"display":"flex"});
    $("#main_rec").find('#rec_box_02').stop().show();
    $('#rec_box_01').hide();
    
};

$(function(){
    $('.rec_nav_01').click(function(){
        rec01();
    });
});

$(function(){
    $('.rec_nav_02').click(function(){
        rec02();
    });
});

$(function(){
    $.ajax({
        url: "./json/main06.json",
        dataType: "json",
        success : function(data){
            if(data.length>0){
                for(var i in data){
                    $(".rec_product").eq(i).append("<a href='#'><img src='img/"+data[i].url+"' alt='"+data[i].alt+"'></a>");
                    $(".rec_product").eq(i).append("<a href='#'><h3>"+data[i].title+"</h3></a>");
                    $(".rec_product").eq(i).append("<a href='#'><span id='rec_0"+ i +"'>"+data[i].price+"</span></a>");
                    $(".rec_product").eq(i).append("<a href='#'><p>"+data[i].originPrice+"</p></a>");
                }
            }
        }
    })
});


