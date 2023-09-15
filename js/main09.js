$(function () {
    $.ajax({
        url: "./json/main09.json",
        dataType: "json",
        success: function (data) {
            if (data.length > 0) {
                for (var i in data) {
                    $(".brandbox").eq(0).append("<a href='#'><div class='brand_img_wrap'><img src='img/" + data[i].url + "' alt='" + data[i].alt + "'></div></a>");
                }
            }
        }
    })
});