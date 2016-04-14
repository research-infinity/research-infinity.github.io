function loading() {
    var square = document.querySelector('#js-square'),
    translateCurve = mojs.easing.path('M0,100 C4.09332506,96.8557232 7.94664867,88.3615401 10.4890103,0.101163189 L21.0369247,0.0529570347 C21.0369247,-1.65137514 30.4637771,115.895775 38.3003969,0.121056532 L46.9324469,0.201100531 C46.9324469,-0.645830728 53.708714,57.6710335 58.8370818,0.108432613 L64.7902198,0.101163189 C64.7902198,-0.884162099 69.2782346,29.0847003 73.2517768,0.0563486783 L77.4798577,0.0566611047 C77.4798577,0.0345576664 80.9058556,16.5228732 83.4115682,0.0345576664 L86.3881372,0.0345576664 C86.5206567,-0.645437439 88.7521049,9.04031166 90.4486848,0.0730637537 L92.4781637,0.0726514455 C92.6134623,-0.122912361 94.428037,4.62670777 95.6251679,0.0336964333 L97.1134524,0.0262594354 C97.1134524,0.00758931351 98.2373898,1.95224833 99.0529099,0.00758931351 L100,0'),
    squashCurve = mojs.easing.path('M0,100 C7.81150159,99.8552004 10.5,124.956388 10.5,124.956388 C10.6364142,-0.167048257 20.7999985,99.8575387 20.8,99.8575415 C20.8000015,99.8575443 26.8367187,138.182953 30.6039062,99.857543 C36.3236123,99.9221201 38.1,118.97564 38.1,118.97564 C38.2039989,23.5845053 46.8999988,99.923904 46.9,99.9239062 C46.9000012,99.9239083 50.8279858,129.142288 53.7,99.923906 C57.6148517,99.9884282 58.9,113.065132 58.9,113.065132 C58.9711335,47.8192476 64.7999992,99.989649 64.8,99.9896504 C64.8000008,99.9896519 67.4706109,119.974518 69.4350189,99.9896506 C72.3313246,100.046231 73.2,109.611947 73.2,109.611947 C73.2519882,61.9267379 77.3999994,100.047123 77.4,100.047124 C77.4000006,100.047125 79.4204624,114.653142 80.8561577,100.047124 C82.8367206,100.021884 83.3999999,106.746427 83.3999999,106.746427 C83.4364957,73.2713076 86.4999995,100.02251 86.4999999,100.022511 C86.5000003,100.022512 87.6948194,110.275967 88.7026805,100.022511 C90.1283952,100.031273 90.5289739,104.813463 90.5289739,104.813463 C90.5549281,81.0074753 92.3999997,100.031718 92.4,100.031719 C92.4000003,100.031719 93.5948603,107.323512 94.3116055,100.031719 C95.2672636,99.9339509 95.7,103.132754 95.7,103.132754 C95.7175753,87.0120996 97.0999998,99.9342524 97.1,99.9342527 C97.1000002,99.9342531 97.6146431,104.872022 98.1,100 L100,100');

    new mojs.Tween({
      duration: 2000,
      onUpdate: function (progress) {
        var translateProgress = translateCurve(progress),
            squashProgress = squashCurve(progress),
            scaleX = 1 + 2*squashProgress,
            scaleY = 1 - 2*squashProgress;

        square.style.transform =
          'translateY(' + 45*translateProgress + 'vh) '+
          'scaleX(' + scaleX + ') ' + 'scaleY(' + scaleY + ')';

      }
    }).run();
}

function burstOPen() {
    var page = document.querySelector('#headPage'),
        pageBack = document.querySelector('#mainPage');

    new mojs.Burst({
        shape:    'circle',
        fill:     '#de3f3f',
        x: '50.5%', y: '36%'
    });

    page.style.transform = 'translateX(-100%)';
    page.style.opacity = '0';
    pageBack.style.background = '#d94255';
    document.querySelector('.history').style.opacity = '1';
    checkCookie();
}

function btnResponse(btnName, bg, icon) {
    btnName.style.background = bg;

    var squashCurve = mojs.easing.path('M0,100 C7.81150159,99.8552004 10.5,124.956388 10.5,124.956388 C90.1283952,80.031273 90.5289739,104.813463 90.5289739,104.813463 C90.5549281,81.0074753 92.3999997,100.031718 92.4,100.031719 C92.4000003,100.031719 93.5948603,107.323512 94.3116055,100.031719 C95.2672636,99.9339509 95.7,103.132754 95.7,103.132754 C95.7175753,87.0120996 97.0999998,99.9342524 97.1,99.9342527 L100,100');

    new mojs.Tween({
      duration: 200,
      onUpdate: function (progress) {
        var squashProgress = squashCurve(progress),
            scaleX = 1 + 2*squashProgress,
            scaleY = 1 - 2*squashProgress;

        btnName.style.transform = 'scaleX(' + scaleX + ') ' + 'scaleY(' + scaleY + ')';

      }
    }).run();

    btnName.innerHTML = icon;
}

var nameForm = document.querySelector('.namePopUp');
var submitF1 = document.querySelector('#submitF1');

function nameFormOPen() {
    nameForm.style.top = 'calc(50% - 200px)';
}

var fname;
var lname;
var idname;
var completeInfo;

function nameFormCLose() {
    var moveOn = 3;
    fname = document.querySelector('#firstNameText');
    lname = document.querySelector('#lastNameText');
    idname = document.querySelector('#IDText');

    if(idname.value < 10234 || idname.value > 187051) {
        idname.setAttribute('required' , 'required');
        moveOn--;
    }

    if(fname.value == '') {
        fname.setAttribute('required' , 'required');
        moveOn--;
    }

    if(lname.value == '') {
        lname.setAttribute('required' , 'required');
        moveOn--;
    }

    if(moveOn == 3) {
        completeInfo = lname.value + ", " + fname.value + " (" + idname.value + ")";
        setCookie("username", completeInfo, 30);
        btnResponse(submitF1, '#32b948', '&#xE877');
        nameForm.style.top = '200%';
    } else {
        btnResponse(submitF1, '#f63f3f', '&#xE000');
    }
}

function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user = getCookie("username");
    if (user == "") {
        nameFormOPen();
    }
}
