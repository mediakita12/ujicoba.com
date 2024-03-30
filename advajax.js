/**
  * AdvancedAJAX 1.0
  * (c) 2005-2006 Lukasz Lach <anakin@php5.pl>
  *
  * Permission to use, copy and distribute this software
  * for any purpose with or without fee is hereby granted for both
  * non-commercial and commercial use, provided that the above copyright notice
  * and this permission notice appear in all copies. Copyright notice might also
  * appear on all HTML pages using AdvancedAJAX object.
  *
  * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
  * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT
  * OF THIRD PARTY RIGHTS. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
  * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
  * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
  * IN THE SOFTWARE.
  *
  * Except as contained in this notice, the name of a copyright holder shall
  * not be used in advertising or otherwise to promote the sale, use or other
  * dealings in this Software without prior written authorization of the
  * copyright holder.
  **/

function advAJAX() {
    var _1 = new Object();
    _1.url = window.location.href;
    _1.method = "GET";
    _1.async = true;
    _1.mimeType = "text/xml";
    _1.username = null;
    _1.password = null;
    _1.parameters = new Object();
    _1.headers = new Object();
    _1.form = null;
    _1.disableForm = true;
    _1.unique = true;
    _1.uniqueParameter = "advajax_uniqid";
    _1.requestDone = false;
    _1.queryString = "";
    _1.responseText = null;
    _1.responseXML = null;
    _1.status = null;
    _1.statusText = null;
    _1.aborted = false;
    _1.timeout = 0;
    _1.retryCount = 0;
    _1.retryDelay = 1000;
    _1.tag = null;
    _1.group = null;
    _1.xmlHttpRequest = null;
    _1.onInitialization = null;
    _1.onFinalization = null;
    _1.onLoading = null;
    _1.onLoaded = null;
    _1.onInteractive = null;
    _1.onComplete = null;
    _1.onSuccess = null;
    _1.onFatalError = null;
    _1.onError = null;
    _1.onTimeout = null;
    _1.onRetryDelay = null;
    _1.onRetry = null;
    _1.onGroupEnter = null;
    _1.onGroupLeave = null;
    _1.createXmlHttpRequest = function() {
        if (typeof XMLHttpRequest != "undefined") {
            return new XMLHttpRequest();
        }
        try {
            return new ActiveXObject("Msxml2.XMLHTTP");
        } catch (E) {
            try {
                return new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {
                if (typeof _1.onFatalError == "function") {
                    _1.onFatalError(e);
                }
                return null;
            }
            if (typeof _1.onFatalError == "function") {
                _1.onFatalError(E);
            }
        }
        return null;
    }
    ;
    _1._onInitializationHandled = false;
    _1._initObject = function() {
        if (_1.xmlHttpRequest != null) {
            delete _1.xmlHttpRequest["onreadystatechange"];
            _1.xmlHttpRequest = null;
        }
        if ((_1.xmlHttpRequest = _1.createXmlHttpRequest()) == null) {
            if (typeof _1.onFatalError == "function") {
                _1.onFatalError(null);
            }
            return null;
        }
        if (typeof _1.xmlHttpRequest.overrideMimeType != "undefined") {
            _1.xmlHttpRequest.overrideMimeType(_1.mimeType);
        }
        _1.xmlHttpRequest.onreadystatechange = function() {
            if (_1 == null || _1.xmlHttpRequest == null) {
                return;
            }
            switch (_1.xmlHttpRequest.readyState) {
            case 1:
                _1._onLoading(_1);
                break;
            case 2:
                _1._onLoaded(_1);
                break;
            case 3:
                _1._onInteractive(_1);
                break;
            case 4:
                _1._onComplete(_1);
                break;
            }
        }
        ;
        _1._onLoadingHandled = false;
        _1._onLoadedHandled = false;
        _1._onInteractiveHandled = false;
        _1._onCompleteHandled = false;
    }
    ;
    _1._onLoading = function() {
        if (_1._onLoadingHandled) {
            return;
        }
        if (!_1._retry && _1.group != null) {
            if (typeof advAJAX._groupData[_1.group] == "undefined") {
                advAJAX._groupData[_1.group] = 0;
            }
            advAJAX._groupData[_1.group]++;
            if (typeof _1.onGroupEnter == "function" && advAJAX._groupData[_1.group] == 1) {
                _1.onGroupEnter(_1);
            }
        }
        if (typeof _1.onLoading == "function") {
            _1.onLoading(_1);
        }
        _1._onLoadingHandled = true;
    }
    ;
    _1._onLoaded = function() {
        if (_1._onLoadedHandled) {
            return;
        }
        if (typeof _1.onLoaded == "function") {
            _1.onLoaded(_1);
        }
        _1._onLoadedHandled = true;
    }
    ;
    _1._onInteractive = function() {
        if (_1._onInteractiveHandled) {
            return;
        }
        if (typeof _1.onInteractive == "function") {
            _1.onInteractive(_1);
        }
        _1._onInteractiveHandled = true;
    }
    ;
    _1._onComplete = function() {
        if (_1._onCompleteHandled || _1.aborted) {
            return;
        }
        _1.requestDone = true;
        with (_1.xmlHttpRequest) {
            _1.responseText = responseText;
            _1.responseXML = responseXML;
            if (typeof status != "undefined") {
                _1.status = status;
            }
            if (typeof statusText != "undefined") {
                _1.statusText = statusText;
            }
        }
        if (typeof _1.onComplete == "function") {
            _1.onComplete(_1);
        }
        _1._onCompleteHandled = true;
        if (_1.status == 200 && typeof _1.onSuccess == "function") {
            _1.onSuccess(_1);
        } else {
            if (typeof _1.onError == "function") {
                _1.onError(_1);
            }
        }
        delete _1.xmlHttpRequest["onreadystatechange"];
        _1.xmlHttpRequest = null;
        if (_1.disableForm) {
            _1.switchForm(true);
        }
        _1._groupLeave();
        if (typeof _1.onFinalization == "function") {
            _1.onFinalization(_1);
        }
    }
    ;
    _1._groupLeave = function() {
        if (_1.group != null) {
            advAJAX._groupData[_1.group]--;
            if (typeof _1.onGroupLeave == "function" && advAJAX._groupData[_1.group] == 0) {
                _1.onGroupLeave(_1);
            }
        }
    }
    ;
    _1._retry = false;
    _1._retryNo = 0;
    _1._onTimeout = function() {
        if (_1 == null || _1.xmlHttpRequest == null || _1._onCompleteHandled) {
            return;
        }
        _1.aborted = true;
        _1.xmlHttpRequest.abort();
        if (typeof _1.onTimeout == "function") {
            _1.onTimeout(_1);
        }
        _1._retry = true;
        if (_1._retryNo != _1.retryCount) {
            _1._initObject();
            if (_1.retryDelay > 0) {
                if (typeof _1.onRetryDelay == "function") {
                    _1.onRetryDelay(_1);
                }
                startTime = new Date().getTime();
                while (new Date().getTime() - startTime < _1.retryDelay) {}
            }
            _1._retryNo++;
            if (typeof _1.onRetry == "function") {
                _1.onRetry(_1, _1._retryNo);
            }
            _1.run();
        } else {
            delete _1.xmlHttpRequest["onreadystatechange"];
            _1.xmlHttpRequest = null;
            if (_1.disableForm) {
                _1.switchForm(true);
            }
            _1._groupLeave();
            if (typeof _1.onFinalization == "function") {
                _1.onFinalization(_1);
            }
        }
    }
    ;
    _1.run = function() {
        _1._initObject();
        if (_1.xmlHttpRequest == null) {
            return false;
        }
        _1.aborted = false;
        if (_1.method == "GET" && _1.unique) {
            _1.parameters[encodeURIComponent(_1.uniqueParameter)] = new Date().getTime().toString().substr(5) + Math.floor(Math.random() * 100).toString();
        }
        if (!_1._retry) {
            for (var a in _1.parameters) {
                if (_1.queryString.length > 0) {
                    _1.queryString += "&";
                }
                _1.queryString += encodeURIComponent(a) + "=" + encodeURIComponent(_1.parameters[a]);
            }
            if (_1.method == "GET" && _1.queryString.length > 0) {
                _1.url += (_1.url.indexOf("?") != -1 ? "&" : "?") + _1.queryString;
            }
        }
        if (typeof _1.onInitialization == "function" && !_1._onInitializationHandled) {
            _1.onInitialization(_1);
            _1._onInitializationHandled = true;
        }
        if (_1.disableForm) {
            _1.switchForm(false);
        }
        try {
            _1.xmlHttpRequest.open(_1.method, _1.url, _1.async, _1.username, _1.password);
        } catch (e) {
            if (typeof _1.onFatalError == "function") {
                _1.onFatalError(e);
            }
            return;
        }
        if (_1.timeout > 0) {
            setTimeout(_1._onTimeout, _1.timeout);
        }
        if (typeof _1.xmlHttpRequest.setRequestHeader != "undefined") {
            for (var a in _1.headers) {
                _1.xmlHttpRequest.setRequestHeader(encodeURIComponent(a), encodeURIComponent(_1.headers[a]));
            }
        }
        if (_1.method == "POST" && typeof _1.xmlHttpRequest.setRequestHeader != "undefined") {
            _1.xmlHttpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            _1.xmlHttpRequest.send(_1.queryString);
        } else {
            if (_1.method == "GET") {
                _1.xmlHttpRequest.send(null);
            }
        }
    }
    ;
    _1.handleArguments = function(_3) {
        if (typeof _3.form == "object" && _3.form != null) {
            _1.form = _3.form;
            _1.appendForm();
        }
        for (a in _3) {
            if (typeof _1[a] == "undefined") {
                _1.parameters[a] = _3[a];
            } else {
                if (a != "parameters" && a != "headers") {
                    _1[a] = _3[a];
                } else {
                    for (b in _3[a]) {
                        _1[a][b] = _3[a][b];
                    }
                }
            }
        }
        _1.method = _1.method.toUpperCase();
    }
    ;
    _1.switchForm = function(_4) {
        if (typeof _1.form != "object" || _1.form == null) {
            return;
        }
        with (_1.form) {
            for (var nr = 0; nr < elements.length; nr++) {
                if (!_4) {
                    if (elements[nr]["disabled"]) {
                        elements[nr]["advajax_disabled"] = true;
                    } else {
                        elements[nr]["disabled"] = "disabled";
                    }
                } else {
                    if (typeof elements[nr]["advajax_disabled"] == "undefined") {
                        elements[nr].removeAttribute("disabled");
                    }
                }
            }
        }
    }
    ;
    _1.appendForm = function() {
        with (_1.form) {
            _1.method = method.toUpperCase();
            _1.url = action;
            for (var nr = 0; nr < elements.length; nr++) {
                var e = elements[nr];
                if (e.disabled) {
                    continue;
                }
                switch (e.type) {
                case "text":
                case "password":
                case "hidden":
                case "textarea":
                    _1.addParameter(e.name, e.value);
                    break;
                case "select-one":
                    if (e.selectedIndex >= 0) {
                        _1.addParameter(e.name, e.options[e.selectedIndex].value);
                    }
                    break;
                case "select-multiple":
                    for (var _7 = 0; _7 < e.options.length; _7++) {
                        if (e.options[_7].selected) {
                            _1.addParameter(e.name, e.options[_7].value);
                        }
                    }
                    break;
                case "checkbox":
                case "radio":
                    if (e.checked) {
                        _1.addParameter(e.name, e.value);
                    }
                    break;
                }
            }
        }
    }
    ;
    _1.addParameter = function(_8, _9) {
        _1.parameters[_8] = _9;
    }
    ;
    _1.delParameter = function(_10) {
        delete _1.parameters[_10];
    }
    ;
    if (typeof advAJAX._defaultParameters != "undefined") {
        _1.handleArguments(advAJAX._defaultParameters);
    }
    return _1;
}
advAJAX.get = function(_11) {
    return advAJAX.handleRequest("GET", _11);
}
;
advAJAX.post = function(_12) {
    return advAJAX.handleRequest("POST", _12);
}
;
advAJAX.head = function(_13) {
    return advAJAX.handleRequest("HEAD", _13);
}
;
advAJAX.submit = function(_14, _15) {
    if (typeof _15 == "undefined" || _15 == null) {
        return -1;
    }
    if (typeof _14 != "object" || _14 == null) {
        return -2;
    }
    var _16 = new advAJAX();
    _15["form"] = _14;
    _16.handleArguments(_15);
    return _16.run();
}
;
advAJAX.assign = function(_17, _18) {
    if (typeof _18 == "undefined" || _18 == null) {
        return -1;
    }
    if (typeof _17 != "object" || _17 == null) {
        return -2;
    }
    if (typeof _17["onsubmit"] == "function") {
        _17["advajax_onsubmit"] = _17["onsubmit"];
    }
    _17["advajax_args"] = _18;
    _17["onsubmit"] = function() {
        if (typeof this["advajax_onsubmit"] != "undefined") {
            this["advajax_onsubmit"]();
        }
        if (advAJAX.submit(this, this["advajax_args"]) == false) {
            return true;
        }
        return false;
    }
    ;
    return true;
}
;
advAJAX.handleRequest = function(_19, _20) {
    if (typeof _20 == "undefined" || _20 == null) {
        return -1;
    }
    var _21 = new advAJAX();
    _21.method = _19;
    _21.handleArguments(_20);
    return _21.run();
}
;
advAJAX._defaultParameters = new Object();
advAJAX.setDefaultParameters = function(_22) {
    advAJAX._defaultParameters = new Object();
    for (a in _22) {
        advAJAX._defaultParameters[a] = _22[a];
    }
}
;
advAJAX._groupData = new Object();
