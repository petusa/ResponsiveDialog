/* ResponsiveDialog 0.0.1
 * http://github.com/petusa/ResponsiveDialog
 * 
 * Copyright 2015, Peter Nagy (petusa)
 * Dual licensed under the:
 *  - MIT License (http://opensource.org/licenses/mit-license.php)
 *  - GNU GPL (http://opensource.org/licenses/gpl-license.php)
 **/

var ResponsiveDialog = ResponsiveDialog || {};
(function(api){
    
    var settings = {
        responsiveDialogSource : "responsivedialog.html",
        onDialogsReady: function(){ /* noop */ },
        onDialogClosed: function(id) { /* noop */ },
        zIndex: "9999999",
        dialogsFolder: "dialogs"
    }

    var dialogsLoaded = false,
        dialogsFrameInitialized = false,
        dialogsIFrame = null,
        DIALOGS_ID = "ResponsiveDialogFrame";
    
    function _init(options){
        if (dialogsFrameInitialized==true) {
            console.log("WARNING: Responsive dialogs frame already intitilized, try to reload the document instead.");
            return;
        }
        dialogsFrameInitialized = true;


        // read custom parameters and settings

        if (options && options.responsiveDialogSource){
            settings.responsiveDialogSource = options.responsiveDialogSource;
        }

        if (options && options.onDialogsReady){
            settings.onDialogsReady = options.onDialogsReady;
        }

        if (options && options.onDialogClosed){
            settings.onDialogClosed = options.onDialogClosed;
        }

        if (options && options.dialogsFolder){
            settings.dialogsFolder = options.dialogsFolder;
        }

        // create and init dialogs iframe, that will load the jquery mobile based dialog mechanism

        dialogsIFrame = document.createElement("iframe");
        dialogsIFrame.id = DIALOGS_ID;
        dialogsIFrame.style.zIndex = settings.zIndex;
        dialogsIFrame.style.position = "absolute";
        dialogsIFrame.style.overflow = "hidden";
        dialogsIFrame.style.width = "100%";
        dialogsIFrame.style.height = "100%";
        dialogsIFrame.style.zIndex = "-1";
        dialogsIFrame.style.display = "none";
        dialogsIFrame.style.visibility = "hidden";
        dialogsIFrame.style.top = "0";
        dialogsIFrame.style.bottom = "0";
        dialogsIFrame.style.left = "0";
        dialogsIFrame.style.right = "0";
        dialogsIFrame.frameBorder = 0;
        dialogsIFrame.marginWidth = 0;
        dialogsIFrame.marginHeight = 0;
        dialogsIFrame.scrolling = "no";
        dialogsIFrame.setAttribute('allowtransparency', 'true');
        dialogsIFrame.setAttribute('vspace', '0');
        dialogsIFrame.setAttribute('hspace', '0');
        dialogsIFrame.setAttribute('border', '0');
        dialogsIFrame.src = settings.dialogsFolder + "/" + settings.responsiveDialogSource;
        dialogsIFrame.onload = function(){
            dialogsLoaded = true;
            settings.onDialogsReady();
        }
        document.body.appendChild(dialogsIFrame);
    }

    function _showDialog(dialogHref, maxRepeatNumber, delay) {
        if (dialogsLoaded==false) {
            console.log("WARNING: Responsive dialogs frame not yet loaded for '" + dialogHref + "', try to call this method after ready callback.");
            return;
        }
        _doShowDialog(dialogHref);
    }

    function _doShowDialog(dialogHref){
        var dialogsIframe = document.getElementById(DIALOGS_ID);
        dialogsIframe.style.zIndex = settings.zIndex;
        dialogsIFrame.style.height = "100%";
        dialogsIframe.style.display = "block";
        dialogsIframe.style.visibility = "visible";
        dialogsIframe.contentWindow.showDialog(dialogHref);
    }

    function _resetDialogs(){
        var dialogsIframe = document.getElementById(DIALOGS_ID), classNames = dialogsIframe.className;
        dialogsIframe.contentWindow.initDialogs();
    }
    
    window.onDialogClosed = function(href) {
        settings.onDialogClosed(href);
    }

    window.onAllDialogsClosed = function() {
        var dialogsIframe = document.getElementById(DIALOGS_ID);
        dialogsIframe.style.zIndex = "-1";
        dialogsIframe.style.display = "none";
        dialogsIframe.style.visibility = "hidden";
    }

    window.resizeIframe = function(h) {
        if (dialogsLoaded==false) return;
        dialogsIFrame.style.height = (h) ? (h+'px') : (dialogsIFrame.contentWindow.document.body.scrollHeight + 'px');
    }


    // PUBLIC API

    api.init = _init;
    
    api.showDialog = _showDialog;
    
    api.closeDialogs = _resetDialogs;

}(ResponsiveDialog));