
"use strict"

var dataContainer = document.getElementById("data-container");
var winTitle = document.getElementById("winTitle");
var title = document.getElementById("title");
var titleDesc = document.getElementById("titleDesc");
var subTitle = document.getElementById("subTitle");
var detector = new detectMe();
var data = [];

// start app
initialCulture();
startAll();

// initializes page
function startAll() {
    refresh();
    cacheUpdate();
}

// refresh data and display
function refresh() {
    fillData();
    translateCommon();
    displayData();
    whaitForClickToExecute();
}

// change current language
function changeCultureClick(option) {
    currentCulture = option;
    refresh();
}

// executes the translations of common strings
function translateCommon() {
    winTitle.innerHTML = translate("detectMe");
    title.innerHTML = translate("detectMe") + " ...";
    titleDesc.innerHTML = translate("titleDesc");
    subTitle.innerHTML = translate("subTitle");
}

// create containers with title, desc and wrapped command
function displayData() {
    var myHtml = "";
    for (var i = 0; i < data.length; i++) {
        var item = data[i];
        myHtml += '<div class="row" id="' + item.id + 'Container">';
        myHtml += '  <div class="col-md-6">';
        myHtml += '    <h4 id="' + item.id + 'Title">' + testStr(item.title) + '</h4>';
        myHtml += '    <div id="' + item.id + 'Desc" class="text-primary">' + translate("performs") + ' <strong>' + item.wrappedCommand + '</strong> ' + translate('and') + ' ' + testStr(translate(item.id)) + '</div>';
        myHtml += '  </div>';
        myHtml += '  <div class="col-md-6">';
        myHtml += '    <h4 id="'+ item.id + 'Result">' + testStr(item.runFunction) + '</h4>';
        myHtml += '  </div>';
        myHtml += '</div>'; 
        myHtml += (i + 1 == data.length) ? '' : '<hr/>';
    }
    dataContainer.innerHTML = myHtml;
}

// convert an array of strings in html rows
function convertArrayToHtmlRows(myArray) {
    var arrayHtml = "";
    if (myArray) {
        // create html for array
        for (var i = 0; i < myArray.length; i++) {
            arrayHtml += myArray[i] + "<br/>"
        }
    }
    return arrayHtml;
}

// clean and fills data var
function fillData() {
    data = [];
    // (platform)
    addObjInfo("infoRH", detector.getInfo(), "getInfo()", "platform.toString()");
    addObjInfo("browserNameRH", detector.getBrowserName(), "getBrowserName()", "platform.name");
    addObjInfo("browserVersionRH", detector.getBrowserVersion(), "getBrowserVersion()", "platform.version");
    addObjInfo("layoutEngineRH", detector.getLayoutEngine(), "getLayoutEngine()", "platform.layout");
    addObjInfo("manufacturerRH", detector.getManufacturer(), "getManufacturer()", "platform.manufacturer");
    addObjInfo("osRH", detector.getOS(), "getOS()", "platform.os.toString()");
    addObjInfo("preReleaseRH", detector.getPreRelease(), "getPreRelease()", "platform.prerelease");
    addObjInfo("productNameRH", detector.getProductName(), "getProductName()", "platform.product");
    addObjInfo("OSFamilyRH", detector.getOSFamily(), "getOSFamily()", "platform.os.family");
    addObjInfo("OSVersionRH", detector.getOSVersion(), "getOSVersion()", "platform.os.version");
    addObjInfo("CPUArchitectureRH", detector.getCPUArchitecture(), "getCPUArchitecture()", "platform.os.architecture.toString()");
    // (navigator)
    addObjInfo("appCodeName", detector.appCodeName(), "appCodeName()", "navigator.appCodeName");
    addObjInfo("appName", detector.appName(), "appName()", "navigator.appName");
    addObjInfo("appVersion", detector.appVersion(), "appVersion()", "navigator.appVersion");
    addObjInfo("userAgent", detector.userAgent(), "userAgent()", "navigator.userAgent");
    addObjInfo("compiledPlatform", detector.compiledPlatform(), "compiledPlatform()", "navigator.platform");
    addObjInfo("product", detector.product(), "product()", "navigator.product");
    addObjInfo("vendor", detector.vendor(), "vendor()", "navigator.vendor");
    addObjInfo("hardwareConcurrency", detector.hardwareConcurrency().toString(), "hardwareConcurrency()", "navigator.hardwareConcurrency");
    addObjInfo("maxTouchPoints", detector.maxTouchPoints().toString(), "maxTouchPoints()", "navigator.maxTouchPoints");
    addObjInfo("plugins", convertArrayToHtmlRows(detector.plugins()), "plugins()", "navigator.plugins");
    addObjInfo("mimeTypes", convertArrayToHtmlRows(detector.mimeTypes()), "mimeTypes()", "navigator.mimeTypes");
    addObjInfo("language", detector.language(), "language()", "navigator.language");
    addObjInfo("onLine", detector.onLine().toString(), "onLine()", "navigator.onLine");
    addObjInfo("javaEnabled", detector.javaEnabled().toString(), "javaEnabled()", "navigator.javaEnabled()");
    addObjInfo("cookieEnabled", detector.cookieEnabled().toString(), "cookieEnabled()", "navigator.cookieEnabled");
    addObjInfo("geolocationEnabled", detector.geolocationEnabled().toString(), "geolocationEnabled()", "navigator.geolocation");
    addObjInfo("suportServiceWorker", detector.suportServiceWorker().toString(), "suportServiceWorker()", "navigator.serviceWorker");
    // (window)
    addObjInfo("suportApplicationCache", detector.suportApplicationCache().toString(), "suportApplicationCache()", "window.applicationCache");
    addObjInfo("suportIndexedDB", detector.suportIndexedDB().toString(), "suportIndexedDB()", "window.indexedDB");
    addObjInfo("suportNotifications", detector.suportNotifications().toString(), "suportNotifications()", "window.Notification");
    addObjInfo("notificationPermission", detector.notificationPermission(), "notificationPermission()", "window.Notification.permission");
    addObjInfo("suportPushNotifications", detector.suportPushNotifications().toString(), "suportPushNotifications()", "window.PushManager");
    addObjInfo("suportPromises", detector.suportPromises().toString(), "suportPromises()", "window.Promise");
    addObjInfo("winName", detector.winName(), "winName()", translate("winName"), "window.name");
    addObjInfo("winInnerWidth", detector.winInnerWidth().toString(), "winInnerWidth()", "window.innerWidth");
    addObjInfo("winInnerHeight", detector.winInnerHeight().toString(), "winInnerHeight()", "window.innerHeight");
    addObjInfo("winInnerResolution", detector.winInnerResolution(), "winInnerResolution()", "window.innerWidth " + translate("and") + " window.innerHeight");
    addObjInfo("winOuterWidth", detector.winOuterWidth().toString(), "winOuterWidth()", "window.outerWidth");
    addObjInfo("winOuterHeight", detector.winOuterHeight().toString(), "winOuterHeight()", "window.outerHeight");
    addObjInfo("winOuterResolution", detector.winOuterResolution(), "winOuterResolution()", "window.outerWidth " + translate("and") + " window.outerHeight");
    addObjInfo("winScreenX", detector.winScreenX().toString(), "winScreenX()", "window.screenX");
    addObjInfo("winScreenY", detector.winScreenY().toString(), "winScreenY()", "window.screenY");
    // (screen)
    addObjInfo("availWidth", detector.availWidth().toString(), "availWidth()", "screen.availWidth");
    addObjInfo("availHeight", detector.availHeight().toString(), "availHeight()", "screen.availHeight");
    addObjInfo("availResolution", detector.availResolution(), "availResolution()", "screen.availWidth " + translate("and") + " screen.availHeight");
    addObjInfo("width", detector.width().toString(), "width()", "screen.width");
    addObjInfo("height", detector.height().toString(), "height()", "screen.height");
    addObjInfo("resolution", detector.resolution(), "resolution()", "screen.width and screen.height");
    addObjInfo("colorDepth", detector.colorDepth().toString(), "colorDepth()", "screen.colorDepth");
    addObjInfo("pixelDepth", detector.pixelDepth().toString(), "pixelDepth()", "screen.pixelDepth");
    addObjInfo("orientation", detector.orientation(), "orientation()", "screen.orientation.type");
    // (location)
    addObjInfo("origin", detector.origin(), "origin()", "location.origin");
    addObjInfo("href", detector.href(), "href()", "location.href");
    addObjInfo("host", detector.host(), "host()", "location.host");
    addObjInfo("hostname", detector.hostname(), "hostname()", "location.hostname");
    addObjInfo("port", detector.port().toString(), "port()", "location.port");
    addObjInfo("pathname", detector.pathname(), "pathname()", "location.pathname");
    addObjInfo("hash", detector.hash(), "hash()", "location.hash");
    addObjInfo("search", detector.search(), "search()", "location.search");
    addObjInfo("protocol", detector.protocol(), "protocol()", "location.protocol");
    // (document)
    addObjInfo("baseURI", detector.baseURI(), "baseURI()", "document.baseURI");
    addObjInfo("documentURI", detector.documentURI(), "documentURI()", "document.documentURI");
    addObjInfo("domain", detector.domain(), "domain()", "document.domain");
    addObjInfo("activeElement", detector.activeElement(), "activeElement()", "document.activeElement.tagName");
    addObjInfo("doctype", detector.doctype(), "doctype()", "document.doctype.name");
    addObjInfo("characterSet", detector.characterSet(), "characterSet()", "document.characterSet");
    addObjInfo("documentMode", detector.documentMode(), "documentMode()", "document.documentMode");
    // (this)
    addObjInfo("suportLocalStorage", detector.suportLocalStorage().toString(), "suportLocalStorage()", "detectMe.localStorage");
    addObjInfo("localStorageUsedSpace", detector.localStorageUsedSpace(), "localStorageUsedSpace()", "detectMe.localStorageUsedSpace");
    addObjInfo("localStorageMaxSize", translate("pressToCalculate"), "localStorageMaxSize()", "detectMe.localStorageMaxSize");
    addObjInfo("suportSessionStorage", detector.suportSessionStorage().toString(), "suportSessionStorage()", "detectMe.sessionStorage");
    addObjInfo("sessionStorageUsedSpace", detector.sessionStorageUsedSpace(), "sessionStorageUsedSpace()", "detectMe.sessionStorageUsedSpace");
    addObjInfo("sessionStorageMaxSize", translate("pressToCalculate"), "sessionStorageMaxSize()", "detectMe.sessionStorageMaxSize");
}

// change localStorageMaxSize and sessionStorageMaxSize result to execute command when press
function whaitForClickToExecute() {
    var localStorageMaxSizeResult = document.getElementById("localStorageMaxSizeResult");
    var sessionStorageMaxSizeResult = document.getElementById("sessionStorageMaxSizeResult");
    localStorageMaxSizeResult.setAttribute("onclick", "executeCommandByClick('localStorageMaxSizeResult');");
    localStorageMaxSizeResult.className += " clickMe";
    sessionStorageMaxSizeResult.setAttribute("onclick", "executeCommandByClick('sessionStorageMaxSizeResult');");
    sessionStorageMaxSizeResult.className += " clickMe";
}

// remove click attribute and class from an element
function removeClickAttributeAndClass(id) {
    var elem = document.getElementById(id);
    elem.classList.remove("clickMe");
    elem.removeAttribute("onclick");
}

// execute de command when clicked
function executeCommandByClick(command) {
    switch(command) {
        case "localStorageMaxSizeResult":
            refreshElementHtml("localStorageMaxSizeResult", translate("calculating"));
            removeClickAttributeAndClass("localStorageMaxSizeResult");
            refreshElementHtml("localStorageMaxSizeResult", detector.localStorageMaxSize());
            break;
        case "sessionStorageMaxSizeResult":
            refreshElementHtml("sessionStorageMaxSizeResult", translate("calculating"));
            removeClickAttributeAndClass("sessionStorageMaxSizeResult");
            refreshElementHtml("sessionStorageMaxSizeResult", detector.sessionStorageMaxSize());
    } 
}

// defines the initial culture depending on the browser culture (if there is no translation for the browser culture configures for en-GB)
function initialCulture() {
    var browserCulture = detector.language();
    if (isSupportedCulture(browserCulture))
        currentCulture = browserCulture;
}

// check if culture is supported by app
function isSupportedCulture(culture) {
    for (var i = 0; i < supportedCultures.length; i++) {
        if (supportedCultures[i] === culture)
            return true;
    }
    return false;
}

// Add an object to data var with the information needed to show results
// id - string with Id of object
// runFunction - function to run
// title - string with name of the function in detectMe JS
// wrappedCommand - string with wrapped command by the function in detectMe JS
function addObjInfo(id, runFunction, title, wrappedCommand) {
    var obj = {
        "id": id,
        "runFunction": runFunction,
        "title": title,
        "wrappedCommand": wrappedCommand
    };
    data.push(obj);
}

// check for cache updates (if app cache is suported)
function cacheUpdate() {
    if ("applicationCache" in window) {
        var appCache = window.applicationCache;
        appCache.addEventListener('updateready', function(e) {
            if (appCache.status == window.applicationCache.UPDATEREADY) {
                // Browser downloaded a new app cache. Swap it in and reload the page to get the new hotness.
                appCache.swapCache();
                window.location.reload();
            }
        }, false);
    }
}

// wraps detector.translate
function translate(id) {
    return detector.translate(id);
}

// if string is empty return ""
function testStr(value) {
    return (value && value != null && value != "undefined" && value.length > 0) ? value : "";
}

// return the pressToCalculate translation (used on localStorageMaxSize and sessionStorageMaxSizeResult)
function pressToCalculate() {
    return translate("pressToCalculate");
}

// fill an element with new html
function refreshElementHtml(id, myHtml) {
    document.getElementById(id).innerHTML = myHtml; 
}