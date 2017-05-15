// Information about current environment (wrapper for navigator, screen, window, location, document and platform.js)
// Require platform.js <https://mths.be/platform>
// Require translations.js

function detectMe() {

    "use strict"

    var self = this;

    //---------- platform.js
    
    // get current user agent string and load information about current environment
    var currentUaString = navigator.userAgent;
    var currentInfo = platform.parse(currentUaString);

    // initializes with an external user agent string
    this.setUserAgentString = function(uaString) {
        currentUaString = uaString;
        currentInfo = platform.parse(currentUaString);
    }

    // return an object with all info
    this.getInfoObj = function() {
        return currentInfo;
    }

    // return the current user agent
    this.getUserAgent =  function() {
        return currentUaString;
    }

    // return information about browser and OS
    this.getInfo = function() {
        return testStr(tryMe(currentInfo.toString()));
    }

    // return the name of the browser/environment
    this.getBrowserName = function() {
        return testStr(tryMe(currentInfo.name));
    }

    // return the browser/environment version
    this.getBrowserVersion = function() {
        return testStr(tryMe(currentInfo.version));
    }

    // return the name of the browser's layout engine
    this.getLayoutEngine = function() {
        return testStr(tryMe(currentInfo.layout));
    }

    // return the name of the product's manufacturer
    this.getManufacturer = function() {
        return testStr(tryMe(currentInfo.manufacturer));
    }

    // return the complete name of operating system
    this.getOS = function() {
        return testStr(tryMe(currentInfo.os.toString()));
    }

    // return the alpha/beta release indicator
    this.getPreRelease = function() {
        return testStr(tryMe(currentInfo.prerelease));
    }

    // return the name of the product hosting the browser
    this.getProductName = function() {
        return testStr(tryMe(currentInfo.product));
    }

    // return the family of the OS
    this.getOSFamily = function() {
        return testStr(tryMe(currentInfo.os.family));
    }

    // return the version of the OS
    this.getOSVersion = function() {
        return testStr(tryMe(currentInfo.os.version));
    }

    // return the CPU architecture the OS is built for
    this.getCPUArchitecture = function() {
        return testStr(tryMe(currentInfo.os.architecture.toString()));
    }

    //---------- navigator

    // return the code name of the browser
    // (all modern browsers returns "Mozilla", for compatibility reasons)
    this.appCodeName = function() {
        return 'appCodeName' in navigator ? testStr(tryMe(navigator.appCodeName)) : notSupported('navigator.appCodeName');
    }

    // return the name of the browser
    this.appName = function() {
        return 'appName' in navigator ? testStr(tryMe(navigator.appName)) : notSupported('navigator.appName');
    }

    // return the version information of the browser
    this.appVersion = function() {
        return 'appVersion' in navigator ? testStr(tryMe(navigator.appVersion)) : notSupported('navigator.appVersion');
    }

    // return a Boolean value that specifies whether cookies are enabled in the browser
    this.cookieEnabled = function() {
        return 'cookieEnabled' in navigator ? tryMe(navigator.cookieEnabled) : notSupported('navigator.cookieEnabled');
    }

    // return a Boolean value that specifies whether geolocation is enabled in the browser
    this.geolocationEnabled = function() {
        return tryMe('geolocation' in navigator ? true : false);
    }

    // return the language version of the browser
    this.language = function() {
        return 'language' in navigator ? testStr(tryMe(navigator.language)) : notSupported('navigator.language');
    }

    // return a Boolean value that specifies whether the browser is in online or offline mode
    this.onLine = function() {
        return 'onLine' in navigator ? tryMe(navigator.onLine) : notSupported('navigator.onLine');
    }

    // return for which platform the browser is compiled
    this.compiledPlatform = function() {
        return 'platform' in navigator ? testStr(tryMe(navigator.platform)) : notSupported('navigator.platform');
    }

    // return the engine (product) name of the browser
    // (all modern browsers returns "Gecko", for compatibility reasons)
    this.product = function() {
        return 'product' in navigator ? testStr(tryMe(navigator.product)) : notSupported('navigator.product');
    }

    // return the value of the user-agent header sent by the browser to the server
    this.userAgent = function() {
        return 'userAgent' in navigator ? testStr(tryMe(navigator.userAgent)) : notSupported('navigator.userAgent');
    }

    // return a Boolean value that specifies whether the browser has Java enabled
    this.javaEnabled = function() {
        return tryMe(navigator.javaEnabled());
    }

    // return a Boolean value that specifies whether the browser suports Service Workers
    this.suportServiceWorker = function() {
        return tryMe('serviceWorker' in navigator ? true : false);
    }

    // return the number of logical processors available to run threads on the user's computer
    this.hardwareConcurrency = function() {
        return 'hardwareConcurrency' in navigator ? testNumber(tryMe(navigator.hardwareConcurrency)) : notSupported('navigator.hardwareConcurrency');
    }

    // return the maximum number of simultaneous touch contact points are supported by the current device
    this.maxTouchPoints = function() {
        return 'maxTouchPoints' in navigator ? testNumber(tryMe(navigator.maxTouchPoints)) : notSupported('navigator.maxTouchPoints');
    }

    // return an array object, listing the plugins installed in the application
    this.plugins = function() {
        return intoArray(tryMe(getPlugins()));
    }

    // return an array object, which contains a list of MimeType objects representing the MIME types recognized by the browser
    this.mimeTypes = function() {
        return intoArray(tryMe(getMimeTypes()));
    }

    // return the name of the browser vendor for the current browser
    this.vendor = function() {
        return 'vendor' in navigator ? testStr(tryMe(navigator.vendor)) : notSupported('navigator.vendor');
    }

    //---------- Screen

    // return the width in pixels of the screen (excluding the Windows Taskbar)
    this.availWidth = function() {
        return 'availWidth' in screen ? testNumber(tryMe(screen.availWidth)) : notSupported('screen.availWidth');
    }

    // return the height in pixels of the screen (excluding the Windows Taskbar)
    this.availHeight = function() {
        return 'availHeight' in screen ? testNumber(tryMe(screen.availHeight)) : notSupported('screen.availHeight');
    }

    // return the avaiable resolution in pixels of the screen (excluding the Windows Taskbar)
    this.availResolution = function() {
        return 'availWidth' in screen && 'availHeight' in screen ? testNumber(tryMe(screen.availWidth)).toString() + " x " + testNumber(tryMe(screen.availHeight)).toString() : notSupported('screen.availWidth and screen.availHeight');
    }

    // return the total width of the screen
    this.width = function() {
        return 'width' in screen ? testNumber(tryMe(screen.width)) : notSupported('screen.width');
    }

    // return the total height of the screen
    this.height = function() {
        return 'height' in screen ? testNumber(tryMe(screen.height)) : notSupported('screen.height');
    }

    // return the resolution in pixels of the screen
    this.resolution = function() {
        return 'width' in screen && 'height' in screen ? testNumber(tryMe(screen.width)).toString() + ' x ' + testNumber(tryMe(screen.height)).toString() : notSupported('screen.width and screen.height');
    }

    // return the bit depth of the color palette for displaying images
    this.colorDepth = function() {
        return 'colorDepth' in screen ? testNumber(tryMe(screen.colorDepth)) : notSupported('screen.colorDepth');
    }

    // return the color resolution (in bits per pixel) of the screen
    this.pixelDepth = function() {
        return 'pixelDepth' in screen ? testNumber(tryMe(screen.pixelDepth)) : notSupported('screen.pixelDepth');
    }

    // return a string representing the orientation of the screen
    this.orientation = function() {
        return 'orientation' in screen ? testStr(tryMe(screen.orientation.type)) : notSupported('screen.orientation.type');
    }

    //---------- Window

    // return the inner width of a window's content area
    this.winInnerWidth = function() {
        return 'innerWidth' in window ? testNumber(tryMe(window.innerWidth)) : notSupported('window.innerWidth');
    }

    // return the inner height of a window's content area
    this.winInnerHeight = function() {
        return 'innerHeight' in window ? testNumber(tryMe(window.innerHeight)) : notSupported('window.innerHeight');
    }

    // return the inner resolution in pixels of a window's content area
    this.winInnerResolution = function() {
        return 'innerWidth' in window && 'innerHeight' in window ? testNumber(tryMe(window.innerWidth)).toString() + " x " + testNumber(tryMe(window.innerHeight)).toString() : notSupported('window.innerWidth and window.innerHeight');
    }

    // return the outer Width of a window, including toolbars/scrollbars
    this.winOuterWidth = function() {
        return 'outerWidth' in window ? testNumber(tryMe(window.outerWidth)) : notSupported('window.outerWidth');
    }

    // return the outer height of a window, including toolbars/scrollbars
    this.winOuterHeight = function() {
        return 'outerHeight' in window ? testNumber(tryMe(window.outerHeight)) : notSupported('window.outerHeight');
    }

    // return the outer resolution of a window, including toolbars/scrollbars
    this.winOuterResolution = function() {
        return 'outerWidth' in window && 'outerHeight' in window ? testNumber(tryMe(window.outerWidth)).toString() + " x " + testNumber(tryMe(window.outerHeight)).toString() : notSupported('window.outerWidth and window.outerHeight');
    }

    // return the horizontal coordinate of the window relative to the screen
    this.winScreenX = function() {
        return 'screenX' in window ? testNumber(tryMe(window.screenX)) : notSupported('window.screenX');
    }

    // return the vertical coordinate of the window relative to the screen
    this.winScreenY = function() {
        return 'screenY' in window ? testNumber(tryMe(window.screenY)) : notSupported('window.screenY');
    }

    // return the name of a window
    this.winName = function() {
        return 'name' in window ? testStr(tryMe(window.name)) : notSupported('window.name');
    }

    // return a Boolean value that specifies whether the browser suports Application Cache
    this.suportApplicationCache = function() {
        return tryMe('applicationCache' in window ? true : false); 
    }

    // return a Boolean value that specifies whether the browser suports Push Notifications
    this.suportPushNotifications = function() {
        return tryMe('PushManager' in window ? true : false); 
    }

    // return a Boolean value that specifies whether the browser suports indexedDB
    this.suportIndexedDB = function() {
        return tryMe('indexedDB' in window ? true : false);
    }

    // return a Boolean value that specifies whether the browser suports Notifications
    this.suportNotifications = function() {
        return tryMe('Notification' in window ? true : false);
    }

    // return notification permission (if browser suports Notifications)
    this.notificationPermission = function() {
        return 'Notification' in window ? testStr(tryMe(window.Notification.permission)) : notSupported('window.Notification.permission');
    }

    // return a Boolean value that specifies whether the browser suports JS Promises
    this.suportPromises = function() {
        return tryMe('Promise' in window ? true : false);
    }

    //---------- Location

    // return the anchor part (#) of a URL
    this.hash = function() {
        return 'hash' in location ? testStr(tryMe(location.hash)) : notSupported('location.hash');
    }

    // return the hostname and port number of a URL
    this.host = function() {
        return 'host' in location ? testStr(tryMe(location.host)) : notSupported('location.host');
    }

    // return the hostname of a URL
    this.hostname = function() {
        return 'hostname' in location ? testStr(tryMe(location.hostname)) : notSupported('location.hostname');
    }

    // return the entire URL
    this.href = function() {
        return 'href' in location ? testStr(tryMe(location.href)) : notSupported('location.href');
    }

    // return the protocol, hostname and port number of a URL
    this.origin = function() {
        return 'origin' in location ? testStr(tryMe(location.origin)) : notSupported('location.origin');
    }

    // return the path name of a URL
    this.pathname = function() {
        return 'pathname' in location ? testStr(tryMe(location.pathname)) : notSupported('location.pathname');
    }

    // return the port number of URL
    this.port = function() {
        return 'port' in location ? testStr(tryMe(location.port)) : notSupported('location.port');
    }

    // return the protocol of URL
    this.protocol = function() {
        return 'protocol' in location ? testStr(tryMe(location.protocol)) : notSupported('location.protocol');
    }

    // return the querystring part of URL
    this.search = function() {
        return 'search' in location ? testStr(tryMe(location.search)) : notSupported('location.search');
    }

    //---------- Document

    // return the currently focused element in the document
    this.activeElement = function() {
        return 'activeElement' in document ? testStr(tryMe(document.activeElement.tagName)) : notSupported('document.activeElement.tagName');
    }

    // return the baseURI of the document
    this.baseURI = function() {
        return 'baseURI' in document ? testStr(tryMe(document.baseURI)) : notSupported('document.baseURI');
    }

    // return the character encoding for the document
    this.characterSet = function() {
        return 'characterSet' in document ? testStr(tryMe(document.characterSet)) : notSupported('document.characterSet');
    }

    // return the doctype name of an HTML document
    this.doctype = function() {
        return 'doctype' in document ? testStr(tryMe(document.doctype.name)) : notSupported('document.doctype.name');
    }

    // return mode used by the browser to render the document
    this.documentMode = function() {
        return 'documentMode' in document ? testStr(tryMe(document.documentMode)) : notSupported('document.documentMode');
    }

    // return the location URI of the document
    this.documentURI = function() {
        return 'documentURI' in document ? testStr(tryMe(document.documentURI)) : notSupported('document.documentURI');
    }

    // return the domain name of the server that loaded the document
    this.domain = function() {
        return 'domain' in document ? testStr(tryMe(document.domain)) : notSupported('document.domain');
    }

    //---------- This

    // return a Boolean value that specifies whether the browser suports local storage
    this.suportLocalStorage = function() {
        return tryMe(localStorage ? true : false);
    }

    // returns local storage maxsize (returns a promise, disabled on safari browsers)
    this.localStorageMaxSize = function() {
        return localStorage ? tryMe(formatBytes(getLocalStorageMaxSize())) : notSupported('localStorage');
    }

    // return local storage used space
    this.localStorageUsedSpace = function() {
        return localStorage ? tryMe(formatBytes(byteCount(localStorage))) : notSupported('localStorage');
    }

    // return a Boolean value that specifies whether the browser suports session storage
    this.suportSessionStorage = function() {
        return tryMe(sessionStorage ? true : false);
    }

    // returns session storage maxsize
    this.sessionStorageMaxSize = function() {
        if (this.getBrowserName() == 'Safari') 
            return self.translate("disabledOnSafari");
        return sessionStorage ? tryMe(formatBytes(getSessionStorageMaxSize())) : notSupported('sessionStorage');
    }

    // return session storage used space
    this.sessionStorageUsedSpace = function() {
        return sessionStorage ? tryMe(formatBytes(byteCount(sessionStorage))) : notSupported('sessionStorage');
    }

    //---------- Utils

    // if string is empty return ""
    function testStr(value) {
        return (value && value != null && value != "undefined" && value.length > 0) ? value : "";
    }

    // if number is empty return zero
    function testNumber(value) {
        return (value && value != null && value != "undefined") ? value : 0;
    }

    // executes a function inside a try catch
    function tryMe(myFunction) {
        try {
            return myFunction;
        } catch (e) {
            return self.translate('operationError', currentCulture) + "<br/>" + error;
        }
    }

    // if is a string return an array with that string as first elemnt
    function intoArray(value) {
        if (typeof(value) == 'string') {
            var myArr = [];
            myArr.push(value);
            return myArr;
        }
        return value;
    }

    // return a not supported proprety msg 
    function notSupported(prop) {
        //return prop + ' not supported in current environment';
        return prop + self.translate('notSupported', currentCulture);
    }

    // byte size of string
    function byteCount(s) {
        return encodeURI(s).split(/%..|./).length - 1;
    }

    // convert bytes in ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'] string
    function formatBytes(bytes,decimals) {
    if(bytes == 0) return '0 Bytes';
        var k = 1000,
            dm = decimals || 2,
            sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
            i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }

    // returns local storage maxsize
    function getLocalStorageMaxSize() {
        var itemBackup = localStorage.getItem("");
        var increase = true;
        var data = "1";
        var totalData = "";
        var trytotalData = "";
        localStorage.clear();
        while (true) {
            try {
                trytotalData = totalData + data;
                localStorage.setItem("", trytotalData);
                totalData = trytotalData;
                if (increase) data += data;
            } catch (e) {
                if (data.length < 2) 
                    break;
                increase = false;
                data = data.substr(data.length / 2);
            }
        }
        localStorage.setItem("", itemBackup);
        localStorage.clear();
        return totalData.length;
    }

    // returns session storage maxsize
    function getSessionStorageMaxSize() {
        var itemBackup = sessionStorage.getItem("");
        var increase = true;
        var data = "1";
        var totalData = "";
        var trytotalData = "";
        sessionStorage.clear();
        while (true) {
            try {
                trytotalData = totalData + data;
                sessionStorage.setItem("", trytotalData);
                totalData = trytotalData;
                if (increase) data += data;
            } catch (e) {
                if (data.length < 2) 
                    break;
                increase = false;
                data = data.substr(data.length / 2);
            }
        }
        sessionStorage.setItem("", itemBackup);
        sessionStorage.clear();
        return totalData.length;
    }

    // return an array object, listing the plugins installed in the application
    function getPlugins() {
        var result = navigator.plugins;
        var plugins = [];
        // if plugins list exist
        if (result.length > 0) {
            for (var i = 0; i < result.length; i++) {
                var plugin = result[i];
                var info = plugin.name + (plugin.filename ? ", " + plugin.filename : "") + (plugin.description ? ", " + plugin.description : "");
                plugins.push(info);
            }
        }
        return plugins;
    }

    // return an array object, which contains a list of MimeType objects representing the MIME types recognized by the browser
    function getMimeTypes() {
        var result = navigator.mimeTypes;
        var mimeTypes = [];
        // if plugins list exist
        if (result.length > 0) {
            for (var i = 0; i < result.length; i++) {
                var mimeType = result[i];
                var info = mimeType.description + (mimeType.type ? ", " + mimeType.type : "");
                mimeTypes.push(info);
            }
        }
        return mimeTypes;
    }

    // translates a string by id
    this.translate = function(id) {
        var translation = getTranslactionById(id);
        return translation[currentCulture]; 
    }

    // return a translation by id
    function getTranslactionById(id) {
        for (var i = 0; i < translations.length; i++) {
            var translation = translations[i];
            if (translation.id === id) {
                return translation;
            }
        }
    }

}