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
    checkCookie();
}

var nameFormDone = false;

var navbar = document.querySelector('nav');
var navLinks = document.querySelector('#links');
var navTitle = document.querySelector('#titleBar');
var navEnd = '0px';
var openAlefPage = false;
var openParaPage = false;
var openENDPage = false;
var justChecking = false;

function burstOPen() {
    //alert('ERROR: "455DD"');
    if(nameFormDone) {
        var page = document.querySelector('#headPage'),
            pageBack = document.querySelector('#mainPage');

        new mojs.Burst({
            shape: 'cicle',
            fill: '#de3f3f',
            x: '50.5%', y: '36%'
        });

        page.style.transform = 'translateX(-100%)';
        page.style.opacity = '0';
        pageBack.style.background = '#f1f1f1';
        document.querySelector('.history').style.opacity = '1';
        document.querySelector('footer').style.color = '#2d2d2d';
        document.querySelector('footer').style.opacity = '0.6';
        navbar.style.transform = 'translateY(0)';
        navEnd = '130px';
        histPage.scrollTop = 0;
        justChecking = true;
    }
}

function histOPen() {
    histPage.style.zIndex = '102';
    document.querySelector('.alefSection').style.zIndex = '100';
    histPage.style.transition = 'right 2000ms ease';
    histPage.style.right = '0';
    document.querySelector('.alefSection').style.transition = 'right 2000ms 2000ms ease';
    document.querySelector('.paradoxesSection').style.transition = 'right 2000ms 2000ms ease';
    document.querySelector('.alefSection').style.right = '-100%';
    document.querySelector('.paradoxesSection').style.right = '-100%';
    histPage.scrollTop = 0;
    navbar.style.transition = 'transform 2000ms 1500ms';
    navbar.style.transform = 'translateY(0)';
    navEnd = '130px';
    document.getElementById('icon').classList.remove('alef');
    document.getElementById('icon').classList.remove('paradox');
    document.getElementById('icon').classList.add('hist');
    document.querySelector('#icon').innerHTML = '<i class="material-icons">&#xE02F</i>';
    document.querySelector('#icon i').style.fontSize = '24px';
    document.querySelector('#icon i').style.lineHeight = '40px';
    document.querySelector('#pgTitle').innerHTML = 'History';
}

function alefOPen() {
    if(openAlefPage) {
        document.querySelector('.alefSection').style.zIndex = '102';
        histPage.style.zIndex = '0';
        document.querySelector('.alefSection').style.transition = 'right 2000ms ease';
        document.querySelector('.alefSection').style.right = '0';
        document.querySelector('.paradoxesSection').style.transition = 'right 2000ms 2000ms ease';
        document.querySelector('.paradoxesSection').style.right = '-100%';
        histPage.style.transition = 'right 2000ms 2000ms ease';
        histPage.style.right = '-100%';
        alefPage.scrollTop = 0;
        navbar.style.transition = 'transform 2000ms 1500ms';
        navbar.style.transform = 'translateY(0)';
        navEnd = '130px';
        document.getElementById('icon').classList.remove('hist');
        document.getElementById('icon').classList.remove('paradox');
        document.getElementById('alefLink').classList.remove('disabled');
        document.getElementById('icon').classList.add('alef');
        document.querySelector('#icon').innerHTML = '<i class="material-icons">א</i>';
        document.querySelector('#icon i').style.fontSize = '35px';
        document.querySelector('#icon i').style.lineHeight = '27px';
        document.querySelector('#pgTitle').innerHTML = 'Alephs';
    }
}

function paraOPen() {
    if(openParaPage) {
        document.querySelector('.alefSection').style.zIndex = '100';
        histPage.style.zIndex = '0';
        document.querySelector('.paradoxesSection').style.transition = 'right 2000ms ease';
        document.querySelector('.paradoxesSection').style.right = '0';
        document.querySelector('.alefSection').style.transition = 'right 2000ms 2000ms ease';
        document.querySelector('.alefSection').style.right = '-100%';
        histPage.style.transition = 'right 2000ms 2000ms ease';
        histPage.style.right = '-100%';
        paraPage.scrollTop = 0;
        //paraPage.scrollTo(0,0);
        navbar.style.transition = 'transform 2000ms 1500ms';
        navbar.style.transform = 'translateY(0)';
        navEnd = '130px';
        document.getElementById('icon').classList.remove('hist');
        document.getElementById('icon').classList.remove('alef');
        document.getElementById('paradoxLink').classList.remove('disabled');
        document.getElementById('icon').classList.add('paradox');
        document.querySelector('#icon').innerHTML = '<i class="material-icons">&#xE418</i>';
        document.querySelector('#icon i').style.fontSize = '24px';
        document.querySelector('#icon i').style.lineHeight = '40px';
        document.querySelector('#pgTitle').innerHTML = 'Paradoxes';
    }
}

var lastScroll = 0;
var histPage = document.querySelector('.history');
var alefPage = document.querySelector('.alefSection');
var paraPage = document.querySelector('.paradoxesSection');


histPage.addEventListener('scroll', function() {
    if(justChecking) {
        var sT = histPage.scrollTop;

        if(sT > lastScroll) {
            if(sT <= 130) {
                navbar.style.transition = 'transform 0ms 0ms';
                navbar.style.transform = 'translateY(-' + sT + 'px)';
                document.querySelector('#openNav').style.opacity = '1';
                navEnd = 130 - sT + 'px';
            } else {
                navbar.style.transform = 'translateY(-130px)';
                document.querySelector('#openNav').style.opacity = '1';
                navEnd = '0px';
            }
        } else if(sT <= 5) {
            navbar.style.transform = 'translateY(0px)';
            navEnd = '130px';
            document.querySelector('#openNav').style.opacity = '0';
        } else {
            navbar.style.transition = 'transform 800ms';
            navbar.style.transform = 'translateY(-80px)';
            navEnd = '50px';
        }

        lastScroll = sT;
    }
}, false);

alefPage.addEventListener('scroll', function() {
    if(justChecking) {
        var sT = alefPage.scrollTop;

        if(sT > lastScroll) {
            if(sT <= 130) {
                navbar.style.transition = 'transform 0ms 0ms';
                navbar.style.transform = 'translateY(-' + sT + 'px)';
                document.querySelector('#openNav').style.opacity = '1';
                navEnd = 130 - sT + 'px';
            } else {
                navbar.style.transform = 'translateY(-130px)';
                document.querySelector('#openNav').style.opacity = '1';
                navEnd = '0px';
            }
        } else if(sT <= 5) {
            navbar.style.transform = 'translateY(0px)';
            navEnd = '130px';
            document.querySelector('#openNav').style.opacity = '0';
        } else {
            navbar.style.transition = 'transform 800ms';
            navbar.style.transform = 'translateY(-80px)';
            navEnd = '50px';
        }

        lastScroll = sT;
    }
}, false);

paraPage.addEventListener('scroll', function() {
    if(justChecking) {
        var sT = paraPage.scrollTop;

        if(sT > lastScroll) {
            if(sT <= 130) {
                navbar.style.transition = 'transform 0ms 0ms';
                navbar.style.transform = 'translateY(-' + sT + 'px)';
                document.querySelector('#openNav').style.opacity = '1';
                navEnd = 130 - sT + 'px';
            } else {
                navbar.style.transform = 'translateY(-130px)';
                document.querySelector('#openNav').style.opacity = '1';
                navEnd = '0px';
            }
        } else if(sT <= 5) {
            navbar.style.transform = 'translateY(0px)';
            navEnd = '130px';
            document.querySelector('#openNav').style.opacity = '0';
        } else {
            navbar.style.transition = 'transform 800ms';
            navbar.style.transform = 'translateY(-80px)';
            navEnd = '50px';
        }

        lastScroll = sT;
    }
}, false);

var lCard = document.querySelector('.legalCard');
var cCard = document.querySelector('.cookiesCard');
var lBtn = document.querySelector('.legalCard .closeButtonL');
var cBtn = document.querySelector('.cookiesCard .closeButtonC');
var cardOpenL = false;
var cardOpenC = false;

function legalOPen(card, cardBtn, boolean) {
    //alert('ERROR: "874AC"');
    if(nameFormDone) {
        card.style.top = navEnd;
        card.style.right = '0';
        card.style.height = '100%';
        card.style.width = 'calc(100% - 50px)';
        cardBtn.style.top = 'calc('+ navEnd +' + 30px)';
        cardBtn.style.transform = 'scale(1)';
        boolean = true;
    }
}

function legalCLose(card, cardBtn, boolean) {
    if(nameFormDone) {
        card.style.top = '110%';
        card.style.right = '160px';
        card.style.height = '0';
        card.style.width = '0';
        cardBtn.style.transform = 'scale(0)';
        boolean = false;
    }
}

/*userCard.classList.add('usersIcon');
userCard.innerHTML = '<i class="material-icons">&#xE7FD</i>';
document.querySelector('.nameCard').innerHTML = completeInfo;*/

//document.getElementsByClassName('usersIcon').onclick = function(){document.querySelector('.nameCard').style.right = '20px'};

function nameTOggle(right) {
    if(nameSmall) document.querySelector('.nameCard').style.right = right + 'px';
}

var xPos, yPos;

window.onmousemove = function(e){xPos = e.clientX; yPos = e.clientY;};

document.querySelector('#links h1').addEventListener('mouseover', function() {
    new mojs.Transit({
        duration: 500,
        delay: 200,
        type: 'circle',
        radius: {0: 25},
        fill: 'transparent',
        stroke: '#ff4040',
        strokeWidth: {30:0},
        opacity: 0.9,
        x: xPos, y: yPos,
    });

    new mojs.Burst({
        duration: 500,
        delay: 100,
        shape: 'circle',
        radius: {0:50},
        fill: '#ffdd49',
        opacity: 0.9,
        x: xPos, y: yPos,
    });
});

/*

|   |   |   |
|   |   |   |
V   V   V   V


*/





//To remove class --> document.getElementById('ID').classList.remove('CLASS');
//To add class --> document.getElementById('ID').classList.add('CLASS');
