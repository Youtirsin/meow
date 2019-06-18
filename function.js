$(document).ready(function () {
    if(!IsPC()){
        window.location.href='mobile.html';
    }
    $('.piece').each(function (index) {
        $(this).css({
            'left': parseInt($('#container').css('left')) + index % 4 * 150,
            'top': parseInt($('#container').css('top')) + parseInt(index / 4) * 84
        });
        $(this).click(() => {
            if ($(this).html() == '') {
                i = index % 4;
                j = parseInt(index / 4);
                $(this).html('<img src="pieces/cat' + i + j + '.png"/>');
            } else {
                $(this).html('');
            }
            allshowed = true;
            for (var i = 0; i < 4; i++) {
                for (var j = 0; j < 4; j++) {
                    if ($('.piece').eq(i * 4 + j).html() == '') {
                        allshowed = false;
                    }
                }
            }
            if (allshowed) {
                $('#note').html("<h1>This is my sister's cat</h1><h1>Pretty cute,huh?</h1>");
                $('#container').html('<img src="cat.gif" id="gif"/>');
                $('#gif').css({
                    'left': $('#container').css('left'),
                    'top': $('#container').css('top'),
                    'opacity':1,
                    'transition':'opacity 4s'
                });
            }
        });
    });
});

function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
        "SymbianOS", "Windows Phone",
        "iPad", "iPod"
    ];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}