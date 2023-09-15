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

//디데이 카운터 함수

function counter(){
    var dday = new Date("Dec 31,2023,09:00:00").getTime(); //디데이
	setInterval(function(){
		var now = new Date(); //현재 날짜 가져오기
		var distance = dday - now;
		var d = Math.floor(distance / (1000 * 60 * 60 * 24));
		var h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var s = Math.floor((distance % (1000 * 60)) / 1000);
		if(s < 10){
			s = '0'+s;
		}
		$('#remain_time').html(d+'일 '+h+':'+m+':'+s)
	}, 1000);
}

counter()
