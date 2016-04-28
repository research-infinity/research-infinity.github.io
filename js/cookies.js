function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = 'expires=' + d.toGMTString();
    document.cookie = cname+'='+cvalue+'; '+expires;
}

function getCookie(cname) {
    var name = cname + '=';
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return '';
}

function checkCookie() {
    var user = getCookie('username');
    if (user == '') {
        nameFormOPen();
    } else {
        //nameFormDone = true;
        userCard.innerHTML = user;
        if(userCard.offsetWidth > 200) {
            userCard.classList.remove('usersName');
            userCard.classList.add('usersIcon');
            userCard.innerHTML = '<i class="material-icons">&#xE7FD</i>';
            document.querySelector('.nameCard').innerHTML = user + '<br><br><i class="material-icons" onclick="nameTOggle(-260)" style="width: 100%; text-align: center; color: #f00; cursor: pointer;">&#xE888</i>';
            nameSmall = true;
        }
    }
}
