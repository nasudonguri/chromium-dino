// Copyright 2013 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * @typedef {{
 *   downloadButtonClick: function(),
 *   reloadButtonClick: function(string),
 *   detailsButtonClick: function(),
 *   diagnoseErrorsButtonClick: function(),
 *   trackEasterEgg: function(),
 *   updateEasterEggHighScore: function(number),
 *   resetEasterEggHighScore: function(),
 *   launchOfflineItem: function(string, string),
 *   savePageForLater: function(),
 *   cancelSavePage: function(),
 *   listVisibilityChange: function(boolean),
 * }}
 */
// eslint-disable-next-line no-var
var errorPageController;

const HIDDEN_CLASS = 'hidden';

// Decodes a UTF16 string that is encoded as base64.
function decodeUTF16Base64ToString(encoded_text) {
  const data = atob(encoded_text);
  let result = '';
  for (let i = 0; i < data.length; i += 2) {
    result +=
        String.fromCharCode(data.charCodeAt(i) * 256 + data.charCodeAt(i + 1));
  }
  return result;
}