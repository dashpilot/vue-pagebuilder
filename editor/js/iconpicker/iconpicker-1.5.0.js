﻿/*!
* IconPicker ('https://github.com/furcan/IconPicker')
* Version: 1.5.0 
* Author: Furkan MT ('https://github.com/furcan')
* Dependencies: Font Awesome Free v5.11.2 (https://fontawesome.com/license/free)
* Copyright 2019 IconPicker, MIT Licence ('https://opensource.org/licenses/MIT')*
*/

'use strict';

// IconPicker: Default Options on
var ipDefaultOptions = {
    jsonUrl: null,
    searchPlaceholder: 'Search Icon',
    showAllButton: 'Show All',
    cancelButton: 'Cancel',
    noResultsFound: 'No results found.',
    borderRadius: '20px',
}
var ipNewOptions;
var ipGithubUrl = 'https://github.com/furcan/IconPicker';
// IconPicker: Default Options off

// IconPicker: Extend Options on
var extendIconPicker = function () {
    var extended = {};
    var deep = false;
    var i = 0;
    if (Object.prototype.toString.call(arguments[0]) === '[object Boolean]') {
        deep = arguments[0];
        i++;
    }
    var merge = function (obj) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                if (deep && Object.prototype.toString.call(obj[prop]) === '[object Object]') {
                    extended[prop] = extendIconPicker(extended[prop], obj[prop]);
                } else {
                    extended[prop] = obj[prop];
                }
            }
        }
    };
    for (; i < arguments.length; i++) {
        merge(arguments[i]);
    }
    return extended;
};
// IconPicker: Extend Options off


// IconPicker: Main on
var IconPicker = {

    // init
    Init: function (ipUserOptions) {
        ipNewOptions = extendIconPicker(true, ipDefaultOptions, ipUserOptions);
    },

    // run
    Run: function (theButton, theCallback) {

        // IconPicker: Console Error Function on
        var ipConsoleError = function (errorMessage) {
            return console.error('%c IconPicker (Error) ', 'padding:2px;border-radius:20px;color:#fff;background:#f44336', '\n' + errorMessage);
        }
        // IconPicker: Console Error Function off

        // IconPicker: Console Log Function on
        var ipConsoleLog = function (errorMessage) {
            return console.log('%c IconPicker (Info) ', 'padding:2px;border-radius:20px;color:#fff;background:#00bcd4', '\n' + errorMessage);
        }
        // IconPicker: Console Log Function off

        // IconPicker: Check The Arguments For Proceed on
        if (arguments && arguments.length <= 2) {

            // query selector
            var ipButtons = document.querySelectorAll(theButton);

            // if button exist on the document
            if (ipButtons && ipButtons.length > 0) {
                for (var i = 0; i < ipButtons.length; i++) {

                    // IconPicker: Button Listeners -> Send XMLHttpRequest on
                    var ipButton = ipButtons[i];
                    ipButton.addEventListener('click', function () {
                        var jsonUrl = ipNewOptions.jsonUrl;
                        var inputElement = this.dataset.iconpickerInput;
                        var previewElement = this.dataset.iconpickerPreview;
                        var showAllButton = ipNewOptions.showAllButton;
                        if (!showAllButton || (showAllButton && showAllButton.length < 1)) {
                            showAllButton = ipDefaultOptions.showAllButton;
                        }
                        var cancelButton = ipNewOptions.cancelButton;
                        if (!cancelButton || (cancelButton && cancelButton.length < 1)) {
                            cancelButton = ipDefaultOptions.cancelButton;
                        }
                        var searchPlaceholder = ipNewOptions.searchPlaceholder;
                        if (!searchPlaceholder || (searchPlaceholder && searchPlaceholder.length < 1)) {
                            searchPlaceholder = ipDefaultOptions.searchPlaceholder;
                        }
                        var borderRadius = ipNewOptions.borderRadius;
                        if (!borderRadius || (borderRadius && borderRadius.length < 1)) {
                            borderRadius = ipDefaultOptions.borderRadius;
                        }

                        // check the json url on
                        if (!jsonUrl) {
                            ipConsoleError('You have to set the path of IconPicker JSON file to "jsonUrl" option. \n\nVisit to learn how: ' + ipGithubUrl);
                            return false;
                        }
                        // check the json url off

                        // check the input on
                        var checkInput = document.querySelectorAll(inputElement);
                        if (checkInput.length <= 0) {
                            ipConsoleError('You must define your Input element with it\'s ID or Class Name to your Button element data attribute. \n\nExample: \ndata-iconpicker-input="#MyIconInput" or \ndata-iconpicker-input=".my-icon-input" \n\nVisit to learn how: ' + ipGithubUrl);
                            return false;
                        }
                        // check the input off

                        // check the preview icon on
                        var checkPreviewIcon = document.querySelectorAll(previewElement);
                        if (checkPreviewIcon.length <= 0) {
                            ipConsoleLog('You can define your Preview Icon element with it\'s ID or Class Name to your Button element data attribute. \n\nExample: \ndata-iconpicker-preview="i#MyIconElement" or \ndata-iconpicker-preview="i.my-icon-element" \n\nVisit to learn how: ' + ipGithubUrl);
                        }
                        // check the preview icon off

                        // check the callback on
                        if (!theCallback && typeof theCallback !== 'function') {
                            theCallback = undefined;
                        }
                        // check the callback off

                        getIconListXmlHttpRequest(jsonUrl, showAllButton, cancelButton, searchPlaceholder, borderRadius, inputElement, previewElement, theCallback);

                    });
                    // IconPicker: Button Listeners -> Send XMLHttpRequest off

                }
            }
            // not exist
            else {
                ipConsoleError('You called the IconPicker with "' + theButton + '" selector, but there is no such element on the document.');
            }

        } else if (arguments && arguments.length > 2) {
            ipConsoleError('More parameters than allowed.');
            return false;
        } else {
            ipConsoleError('You have to call the IconPicker with an Element(Button or etc.) Class or ID. \n\nYou can also find the other required data attributes in the Documentation. \n\nVisit: ' + ipGithubUrl);
            return false;
        }
        // IconPicker: Check The Arguments For Proceed off


        // IconPicker: Get Library from JSON and AppendTo Body on
        var getIconListXmlHttpRequest = function (jsonUrl, buttonShowAll, buttonCancel, searchPlaceholder, borderRadius, inputElement, previewElement, theCallback) {

            // if chrome browser
            if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
                // check the protocol
                if (window.location.protocol.indexOf('http') <= -1) {
                    ipConsoleLog('Chrome Browser blocked this request by CORS policy.');
                    return false;
                }
            }

            // modal element
            var ipElement = document.getElementById('IconPickerModal');

            // if modal element doesn't exist on document send XMLHttpRequest
            if (!ipElement) {
                var xmlHttp = new XMLHttpRequest();
                xmlHttp.open('GET', jsonUrl, true);
                xmlHttp.setRequestHeader('Content-type', 'application/json; charset=utf-8');
                xmlHttp.send();
                xmlHttp.onreadystatechange = function () {
                    if (this.readyState === 4) {
                        if (this.status === 200) { // success
                            var data = this.responseText;
                            appendIconListToBody(data, buttonShowAll, buttonCancel, searchPlaceholder, borderRadius, inputElement, previewElement, theCallback);
                        } else {
                            ipConsoleError('XMLHttpRequest Failed.');
                        }
                    }
                };
            }
        }
        // IconPicker: Get Library from JSON and AppendTo Body off


        // IconPicker: Append Library to Body on
        var appendIconListToBody = function (data, buttonShowAll, buttonCancel, searchPlaceholder, borderRadius, inputElement, previewElement, theCallback) {

            // data
            var jsonData = JSON.parse(data);

            // icons
            var icons = '';
            for (var key in jsonData) {
                if (jsonData.hasOwnProperty(key)) {
                    var forObj = jsonData[key];
                    var icon = '<i data-search="' + forObj + '" data-class="' + forObj + '" class="first-icon select-icon ' + forObj + '"></i>';
                    icons += icon;
                }
            }

            // loading indicator
            var loadingIndicator = '<div id="IconPickerLoading"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="60" height="60" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><g transform="translate(25 50)"><circle cx="0" cy="0" r="9" fill="#1e1e1e" transform="scale(0.24 0.24)"><animateTransform attributeName="transform" type="scale" begin="-0.2666s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="0.8s" repeatCount="indefinite"/></circle></g><g transform="translate(50 50)"><circle cx="0" cy="0" r="9" fill="#1e1e1e" transform="scale(0.00153 0.00153)"><animateTransform attributeName="transform" type="scale" begin="-0.1333s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="0.8s" repeatCount="indefinite"/></circle></g><g transform="translate(75 50)"><circle cx="0" cy="0" r="9" fill="#1e1e1e" transform="scale(0.3 0.3)"><animateTransform attributeName="transform" type="scale" begin="0s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="0.8s" repeatCount="indefinite"/></circle></g></svg></div>';

            // icons wrap
            var iconWrap = '<div class="ip-icons-content" style="border-radius:' + borderRadius + ';">' +
                '<div class="ip-icons-search"><input id="IconPickerSearch" type="text" spellcheck="false" autocomplete="off" placeholder="' + searchPlaceholder + '" style="border-radius:' + borderRadius + ';" /><i class="placeholder-icon fas fa-search"></i></div>' +
                '<div class="ip-icons-search-results"></div>' +
                '<div class="ip-icons-area">' +
                loadingIndicator +
                icons +
                '<a class="ip-show-all-icons" style="border-radius:' + borderRadius + ';">' + buttonShowAll + '</a>' +
                '</div>' +
                '<div class="ip-icons-footer"><a class="cancel" style="border-radius:' + borderRadius + ';">' + buttonCancel + '</a></div>' +
                '</div>';

            // create the modal element
            var IconPickerModal = document.createElement('div')
            IconPickerModal.id = 'IconPickerModal';
            IconPickerModal.innerHTML = iconWrap;

            // body
            var docBody = document.body;

            // append to body
            docBody.appendChild(IconPickerModal);

            // get the modal element
            var ipElement = document.getElementById(IconPickerModal.id);

            // modal element display css
            ipElement.style.display = 'block';

            // heights
            var ipHeight = parseInt(ipElement.offsetHeight);
            var winHeight = parseInt(window.innerHeight);

            // modal element position top css on
            var liveScrollTop = parseInt(window.pageYOffset || document.documentElement.scrollTop);
            var totalTopPos = liveScrollTop + ((winHeight - ipHeight) / 2);
            if (winHeight + 20 <= ipHeight) {
                totalTopPos = liveScrollTop;
            }
            ipElement.style.top = totalTopPos + 'px';
            // modal element position top css off

            // add css animation class to modal
            ipElement.classList.add('animate');

            // remove loading indicator on
            var loadingElement = document.getElementById('IconPickerLoading');
            var ltAnimate = setTimeout(function () {
                loadingElement.classList.add('hide');
                clearTimeout(ltAnimate);
            }, 600);
            var ltRemove = setTimeout(function () {
                loadingElement.parentNode.removeChild(loadingElement);
                clearTimeout(ltRemove);
            }, 900);
            // remove loading indicator off

            // show all button click listener on
            var showAllButtonElm = document.getElementById(IconPickerModal.id).getElementsByClassName('ip-show-all-icons')[0];
            showAllButtonElm.addEventListener('click', function () {
                ipElement.classList.add('show-all');
                this.parentNode.removeChild(this);
            }, false);
            // show all button click listener off

            // close and remove all on
            var removeIpElement = function (delay) {
                ipElement.classList.remove('animate');
                setTimeout(function () {
                    docBody.removeChild(ipElement);
                }, delay);
            }
            // close and remove all off

            // cancel button click listener on
            var cancelButtonElm = document.getElementById(IconPickerModal.id).getElementsByClassName('cancel')[0];
            cancelButtonElm.addEventListener('click', function () {
                removeIpElement(400);
            }, false);
            // cancel button click listener off

            // search input keyup listener on
            var searchInputElm = document.getElementById('IconPickerSearch');
            searchInputElm.addEventListener('keyup', function (e) {

                // keycodes
                var eKeyCode = e.keyCode;
                var eCode = e.code.toString().toLowerCase();

                // check space and backspace keyup
                var spaceOrBackspace = false;
                if (eKeyCode === 32 || eCode === 'space' || eKeyCode === 8 || eCode === 'backspace') {
                    spaceOrBackspace = true;
                }

                // cant type space
                if (eKeyCode === 32 || eCode === 'space') {
                    this.value = this.value.replace(' ', '');
                    return false;
                }

                // this val
                var searchVal = this.value.toString().toLowerCase();

                // define icons areas
                var firstIconsArea = document.getElementById(IconPickerModal.id).getElementsByClassName('ip-icons-area')[0];
                var searchResultArea = document.getElementById(IconPickerModal.id).getElementsByClassName('ip-icons-search-results')[0];

                // clear old results
                searchResultArea.innerHTML = '';

                // (if not space or backspace) and (if typed at least one char) able to search
                if (!spaceOrBackspace && searchVal.length > 0) {

                    // for "serch term" in Json
                    var tempIcons = '';
                    for (var key in jsonData) {
                        if (jsonData.hasOwnProperty(key)) {
                            var forObj = jsonData[key];
                            // if there is results create them
                            if (forObj.toString().indexOf(searchVal) > -1) {
                                firstIconsArea.style.display = 'none';
                                var tempIcon = '<i data-search="' + forObj + '" data-class="' + forObj + '" class="search-icon select-icon ' + forObj + '"></i>';
                                tempIcons += tempIcon;
                            }
                        }
                    }

                    // create a temp container
                    var tempResults = document.createElement('div');
                    tempResults.id = 'IconsTempResults';
                    tempResults.innerHTML = tempIcons;

                    // no results found on
                    if (tempIcons.length < 1) {
                        firstIconsArea.style.display = 'none';
                        var noResultsText = ipNewOptions.noResultsFound;
                        if (!noResultsText || (noResultsText && noResultsText.length < 1)) {
                            noResultsText = ipDefaultOptions.noResultsFound;
                        }
                        var noResultElm = '<p class="ip-no-results-found">' + noResultsText + '</p>';
                        tempResults.innerHTML = noResultElm;
                    }
                    // no results found off

                    // append temp container to results area
                    searchResultArea.appendChild(tempResults);

                    // event listener for each temp icon
                    eachIconEventListener('search');

                }
                // show first icons        
                else {
                    firstIconsArea.style.display = 'block';
                }

            }, false);
            // search input keyup listener off


            // each icon click listener on
            var eachIconEventListener = function (firstOrSearch) {

                var inputElm = document.querySelectorAll(inputElement);
                var previewElm = document.querySelectorAll(previewElement);

                // define icons on
                var eachIconElm;
                if (firstOrSearch === 'first') { // first
                    eachIconElm = document.getElementById(IconPickerModal.id).getElementsByClassName('first-icon');
                } else if (firstOrSearch === 'search') { // search
                    eachIconElm = document.getElementById(IconPickerModal.id).getElementsByClassName('search-icon');
                }
                // define icons off

                // add listeners each on
                for (var i = 0; i < eachIconElm.length; i++) {
                    var singleIconElm = eachIconElm[i];
                    singleIconElm.addEventListener('click', function (e) {
                        e.preventDefault();
                        var iconClassName = this.dataset.class;

                        // each input value on
                        for (var i = 0; i < inputElm.length; i++) {

                            var getTagName = inputElm[i].tagName.toString().toLowerCase();
                            // if an input or textarea element
                            if (getTagName === 'input' || getTagName === 'textarea') {
                                inputElm[i].value = iconClassName;
                            }
                            // else any of element
                            else {
                                inputElm[i].innerHTML = iconClassName;
                            }

                        }
                        // each input value off

                        // each preview on
                        for (var i = 0; i < previewElm.length; i++) {
                            previewElm[i].className = iconClassName;
                        }
                        // each preview off

                        // callback on
                        if (theCallback) {
                            theCallback();
                        }
                        // callback off

                        removeIpElement(400);
                    }, false);
                }
                // add listeners each off

            }
            // each icon click listener off

            // first icons listeners
            eachIconEventListener('first');

        }
        // IconPicker: Append Library to Body off
    },
}
// IconPicker: Main off