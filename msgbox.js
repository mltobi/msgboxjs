

// class to create a message box
class MsgBox {

    constructor(name, retFunc, width = 500, height = 300, boxtype = "okcancel") {

        this.name = name;
        this.retFunc= retFunc;

        // add message box style sheet css file
        let elem = document.getElementsByTagName("head")[0];
        if( elem.innerHTML.includes('msgbox.css') == false ) {
            elem.innerHTML = '<link rel="stylesheet" href="msgbox.css">' + elem.innerHTML;
        }

        // create html code for message box
        let tmp = '';
        tmp = tmp + '    <div id="' + this.name + '" class="msgbox">\n';
        tmp = tmp + '      <div id="' + this.name + '-title" class="msgbox-title">\n';
        tmp = tmp + '        <div id="' + this.name + '-title-text" class="msgbox-title-text"></div>\n';
        tmp = tmp + '        <div id="' + this.name + '-close-icon" class="msgbox-close-icon" onclick="' + this.name + '.hide(\'close\')">x</div>\n';
        tmp = tmp + '      </div>\n';
        if( boxtype.includes('cancel') ) {
            tmp = tmp + '  <div id="' + this.name + '-button-cancel" class="msgbox-button msgbox-button-cancel" onclick="' + this.name + '.hide(\'cancel\')">\n';
            tmp = tmp + '    <div id="' + this.name + '-button-text" class="msgbox-button-text">Cancel</div>\n';
            tmp = tmp + '  </div>\n';
        }
        if( boxtype.includes('ok') ) {
            tmp = tmp + '  <div id="' + this.name + '-button-ok" class="msgbox-button msgbox-button-ok-yes" onclick="' + this.name + '.hide(\'ok\')" >\n';
            tmp = tmp + '    <div class="msgbox-button-text">Ok</div>\n';
            tmp = tmp + '  </div>\n';
        }
        if( boxtype.includes('yes') ) {
            tmp = tmp + '  <div id="' + this.name + '-button-yes" class="msgbox-button msgbox-button-ok-yes" onclick="' + this.name + '.hide(\'yes\')" >\n';
            tmp = tmp + '    <div class="msgbox-button-text">Yes</div>\n';
            tmp = tmp + '  </div>\n';
        }
        if( boxtype.includes('no') ) {
            tmp = tmp + '  <div id="' + this.name + '-button-ok" class="msgbox-button msgbox-button-no" onclick="' + this.name + '.hide(\'no\')" >\n';
            tmp = tmp + '    <div class="msgbox-button-text">No</div>\n';
            tmp = tmp + '  </div>\n';
        }
        tmp = tmp + '      <div id="' + this.name + '-content-text" class="msgbox-content-text"></div>\n';
        tmp = tmp + '    </div>\n';

        // add message box to beginning of body element
        elem = document.createElement('div');
        elem.innerHTML = tmp
        document.body.appendChild(elem);

        // set size of message box
        elem = document.getElementById(this.name);
        elem.style.width = width + 'px';
        elem.style.height = height + 'px';

        elem = document.getElementById(this.name + '-title');
        elem.addEventListener('mousedown', function() {MsgBoxMouseDown(name)}, false);
        
        elem = document.getElementById(this.name + '-content-text');
        elem.style.width = (parseInt(width) - 30) + 'px';
        elem.style.height = (parseInt(height) - 110) + 'px';

    }

    // show message box
    show(title, content) {

        // hide all other message boxes without answering them
        let elems = document.getElementsByClassName("msgbox");
        for( let i = 0; i < elems.length; i++) {
            elems[i].style.display = "none";
        }

        // add content that is shown in message box
        let elem = document.getElementById(this.name + "-content-text");
        elem.innerHTML = content;
        
        // add title of message box
        elem = document.getElementById(this.name + "-title-text");
        elem.innerHTML = title;

        // show message box
        elem = document.getElementById(this.name)
        elem.style.display = "block";
    }


    // hide message box and return answer
    hide(answer) {
        // hide message boy
        document.getElementById(this.name).style.display = "none";

        // return answer via function callback
        this.retFunc(answer);
    }
}


var MsgBoxName = "";
window.addEventListener('mouseup', MsgBoxMouseUp, false);
window.addEventListener('mousemove', MsgBoxMouseMove, true);

function MsgBoxMouseUp() {
    MsgBoxName = "";
}
function MsgBoxMouseDown(name) {
    MsgBoxName = name;
}
function MsgBoxMouseMove(e) {
    if( MsgBoxName != "" ) {
        let elem = document.getElementById(MsgBoxName)
        elem.style.top = e.clientY + 'px';
        elem.style.left = e.clientX + 'px';
    }
};

// EOF

