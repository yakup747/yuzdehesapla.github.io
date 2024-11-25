/* common.js */

function gCookie(ad) { 
    var adEQ = ad + "="; var ca = document.cookie.split(';'); 
    for(var i=0;i < ca.length;i++) { 
        var c = ca[i]; while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(adEQ) == 0) return c.substring(adEQ.length,c.length); 
    } 
    return 0; 
}

function nightMode() {
    if(document.body.classList.contains('nightMode')) {
        document.body.classList.remove("nightMode");
        document.cookie='nightMode=0';
    }
    else {
        document.body.classList.add("nightMode");
        document.cookie='nightMode=1';
    }
}

function selectText(el) {
    var doc = document
        , text = doc.getElementById(el)
        , range, selection
    ;    
    if (doc.body.createTextRange) {
        range = document.body.createTextRange();
        range.moveToElementText(text);
        range.select();
    } else if (window.getSelection) {
        selection = window.getSelection();        
        range = document.createRange();
        range.selectNodeContents(text);
        selection.removeAllRanges();
        selection.addRange(range);
    }
}

$(document).ready(function() {
    if(gCookie('nightMode')==1) { nightMode(); }
    $('.btn-nightmode').click(function(){
        nightMode();
    }); 
    
    $(document).keydown(function(e) {
        if(e.which==115) { nightMode(); }
    });
    
});
