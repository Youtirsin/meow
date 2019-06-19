function preload(){
    var imgs= new Array();
    for (var i=0;i<preload.arguments.length;i++){
        imgs[i]= new Image();
        imgs[i].src=preload.arguments[i];
    }
}
if(!IsPC()){
    window.location.href='mobile.html';
}else{
    $(document).ready(function () {
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
    
    preload(
        'pieces/cat00.png',
        'pieces/cat01.png',
        'pieces/cat02.png',
        'pieces/cat03.png',
        
        'pieces/cat10.png',
        'pieces/cat11.png',
        'pieces/cat12.png',
        'pieces/cat13.png',
    
        'pieces/cat20.png',
        'pieces/cat21.png',
        'pieces/cat22.png',
        'pieces/cat23.png',
    
        'pieces/cat30.png',
        'pieces/cat31.png',
        'pieces/cat32.png',
        'pieces/cat33.png',
    
        'cat.gif'
    );
}
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