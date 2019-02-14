var iframe;
var popupDiv;
function popUp(articleFileName) {
    popupDiv = document.getElementById('PopUp');
    iframe = document.createElement('iframe');
    iframe.setAttribute('id', 'popupFrame');
    var closeButtonPrefab = document.createElement("div");
    var closeButton = document.createElement("div");
    closeButtonPrefab.setAttribute('id', 'buttonPlacer');
    closeButton.setAttribute('id', 'closeButton');

    popupDiv.appendChild(iframe);
    popupDiv.appendChild(closeButtonPrefab);

    popupDiv.setAttribute('width', document.body.offsetWidth+"px");
    popupDiv.setAttribute('height', document.body.offsetHeight+"px");

    iframe.setAttribute('src', 'article/'+articleFileName);
    iframe.setAttribute('width', (document.body.offsetWidth/6*4)+"px");
    iframe.setAttribute('height', (document.body.offsetHeight/6*4)+"px");

    closeButtonPrefab.appendChild(closeButton);

    closeButton.setAttribute('width', '50px');
    closeButton.setAttribute('height', '50px');
    closeButton.setAttribute('onclick', 'closePopup();');
    closeButton.innerHTML = 'X';
}

window.onresize = function(){
    iframe = document.getElementById('popupFrame');
    if(typeof(iframe) != 'undefined' && iframe != null){

        popupDiv.setAttribute('width', document.body.offsetWidth+"px");
        popupDiv.setAttribute('height', document.body.offsetHeight+"px");

        iframe.setAttribute('width', (document.body.offsetWidth/6*4)+"px");
        iframe.setAttribute('height', (document.body.offsetHeight/6*4)+"px");        
    }
}

function closePopup() {
    if(typeof(iframe) != 'undefined' && iframe != null){
        popupDiv.removeChild(iframe);

        popupDiv.setAttribute('width', "0px");
        popupDiv.setAttribute('height', "0px");       
    }
}