var inputCounter = 1;
var completeInfo;
var checked1 = false;

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

function inputSwitch(e, inputType) {
    if(e.keyCode == 13){
        inputType[inputCounter].focus();
    }
}


//Name Form

var nameInputs = [document.querySelector('#firstNameText'), document.querySelector('#lastNameText'), document.querySelector('#IDText')];
var nameForm = document.querySelector('.namePopUp');
var submitF1 = document.querySelector('#submitF1');
var focus1;
var userCard = document.querySelector('#accountLink');
var nameSmall = false;

function nameFormOPen() {
    nameForm.style.top = 'calc(50% - 200px)';
    focus1 = window.setInterval(function(){nameInputs[0].focus();}, 4000);
}

function nameFormEnd(e) {
    if(e.keyCode == 13){
        nameFormCLose();
        submitF1.focus();
    }
}

function nameFormCLose() {
    var moveOn = 3;

    if(nameInputs[2].value < 10234 || nameInputs[2].value > 187051) {
        nameInputs[2].required = true;
        moveOn--;
    } else {
        nameInputs[2].required = false;
    }

    if(nameInputs[0].value == '') {
        nameInputs[0].required = true;
        moveOn--;
    } else {
        nameInputs[0].required = false;
    }

    if(nameInputs[1].value == '') {
        nameInputs[1].required = true;
        moveOn--;
    } else {
        nameInputs[1].required = false;
    }

    if(moveOn == 3) {
        completeInfo = nameInputs[1].value + ', ' + nameInputs[0].value + ' (' + nameInputs[2].value + ')';
        userCard.innerHTML = completeInfo;
        if(userCard.offsetWidth > 200) {
            userCard.classList.remove('usersName');
            userCard.classList.add('usersIcon');
            userCard.innerHTML = '<i class="material-icons">&#xE7FD</i>';
            document.querySelector('.nameCard').innerHTML = completeInfo + '<br><br><i class="material-icons" onclick="nameTOggle(-260)" style="width: 100%; text-align: center; color: #f00; cursor: pointer;">&#xE888</i>';
            nameSmall = true;
        }
        setCookie('username', completeInfo, 30);
        btnResponse(submitF1, '#32b948', '&#xE877');
        nameForm.style.top = '200%';
        nameFormDone = true;
    } else {
        btnResponse(submitF1, '#f63f3f', '&#xE002');
    }

    inputCounter = 0;
    checked1 = true;
}

nameInputs[0].addEventListener('blur', function() {
    if(nameInputs[0].value == '' && checked1) {
        nameInputs[0].required = true;
    } else {
        nameInputs[0].required = false;
    }
}, true);

nameInputs[1].addEventListener('blur', function() {
    if(nameInputs[1].value == '' && checked1) {
        nameInputs[1].required = true;
    } else {
        nameInputs[1].required = false;
    }
}, true);

nameInputs[2].addEventListener('blur', function() {
    if(checked1 && nameInputs[2].value < 10234 || nameInputs[2].value > 187051) {
        nameInputs[2].required = true;
    } else {
        nameInputs[2].required = false;
    }
}, true);
