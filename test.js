// Copyright (c) 2016 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

document.addEventListener('DOMContentLoaded', function () {

    var createWebview = (function () {
        return function () {
            var wv = document.createElement('webview');
            wv.src = 'https://mdn.github.io/web-speech-api/speech-color-changer/';
            wv.style.width = "640px";
            wv.style.height = "480px";
            var container = document.createElement('div');
            container.appendChild(wv);
            return container;
        };
    })();

    document.body.appendChild(createWebview());
    var wv = document.querySelector('webview');
    wv.addEventListener('permissionrequest', function (e) {
        if (e.permission === 'media') {
            e.request.allow();
        }
    });
});
