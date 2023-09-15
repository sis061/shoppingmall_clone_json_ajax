//이전 버튼 클릭 시 이동하는 함수
function prev() {
    $('.md_box_slide li:last').prependTo('.md_box_slide');
    $('.md_box_slide').css('margin-left', -390);
    $('.md_box_slide').stop().animate({ marginLeft: 0 }, 800);
}

//다음 버튼 클릭 시 이동하는 함수

function next() {
    $('.md_box_slide').stop().animate({ marginLeft: -390 }, 800, function () {
        $('.md_box_slide li:first').appendTo('.md_box_slide');
        $('.md_box_slide').css({ marginLeft: 0 });
    });
}

//이전 버튼 클릭 시 css값 변경하는 함수

function chgPrev() {
    $(".item_box a ").find("img").eq(2).animate({ "width": "350", "height": "350" });
    $(".item_box a ").find("h3").eq(2).fadeIn('slow');
    $(".item_box").find("span").eq(2).fadeIn('slow');
    $(".item_box").find("p").eq(2).fadeIn('slow');

    $(".item_box a ").find("img").eq(3).animate({ "width": "317.16", "height": "317.16" });
    $(".item_box a ").find("h3").eq(3).fadeOut();
    $(".item_box").find("span").eq(3).fadeOut();
    $(".item_box").find("p").eq(3).fadeOut();
}

//다음 버튼 클릭 시 css값 변경하는 함수

function chgNext() {
    $(".item_box a ").find("img").eq(3).animate({ "width": "350", "height": "350" });
    $(".item_box a ").find("h3").eq(3).fadeIn('slow');
    $(".item_box").find("span").eq(3).fadeIn('slow');
    $(".item_box").find("p").eq(3).fadeIn('slow');

    $(".item_box a ").find("img").eq(2).animate({ "width": "317.16", "height": "317.16" });
    $(".item_box a ").find("h3").eq(2).fadeOut();
    $(".item_box").find("span").eq(2).fadeOut();
    $(".item_box").find("p").eq(2).fadeOut();
};

//HTML 시작시 index 2번 째 이미지 css값 변경하는 함수

function appear(){
    $(".item_box a ").find("img").eq(2).animate({ "width": "350", "height": "350" });
    $(".item_box a ").find("h3").eq(2).fadeIn('slow');
    $(".item_box").find("span").eq(2).fadeIn('slow');
    $(".item_box").find("p").eq(2).fadeIn('slow');

}

setTimeout(appear, 100);

$(function () {
    $('.prev').click(function () {
        prev();
        chgPrev();
    });
});

$(function () {
    $('.next').click(function () {
        next();
        chgNext();
    });
});

//json

$(function () {
    $.ajax({
        url: "./json/main04.json",
        dataType: "json",
        success: function (data) {
            if (data.length > 0) {
                for (var i in data) {
                    $(".item_box").eq(i).append("<a href='sub.html' target='_self'><img src='img/" + data[i].url + "' alt='" + data[i].alt + "' class='item_box_img'></a>");
                    $(".item_box").eq(i).append("<a href='sub.html' target='_self'><h3>" + data[i].title + "</h3></a>");
                    $(".item_box").eq(i).append("<span id='md_0" + i + "'>" + data[i].price + "</span>");
                    $(".item_box").eq(i).append("<p>" + data[i].originPrice + "</p>");
                }
            }
        }
    })
});

