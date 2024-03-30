// Copyright 2012 Google Inc. All rights reserved.

(function() {

    var data = {
        "resource": {
            "version": "2",

            "macros": [{
                "function": "__e"
            }, {
                "vtp_signal": 0,
                "function": "__c",
                "vtp_value": 0
            }, {
                "function": "__c",
                "vtp_value": "google.co.id"
            }, {
                "function": "__c",
                "vtp_value": 0
            }, {
                "vtp_signal": 0,
                "function": "__c",
                "vtp_value": 0
            }, {
                "function": "__c",
                "vtp_value": "google.co.id"
            }, {
                "function": "__c",
                "vtp_value": 0
            }],
            "tags": [{
                "function": "__ogt_ga_send",
                "priority": 6,
                "vtp_value": true,
                "tag_id": 16
            }, {
                "function": "__ogt_referral_exclusion",
                "priority": 6,
                "vtp_includeConditions": ["list", "esnooker\\.pl"],
                "tag_id": 18
            }, {
                "function": "__ogt_session_timeout",
                "priority": 6,
                "vtp_sessionMinutes": 30,
                "vtp_sessionHours": 0,
                "tag_id": 19
            }, {
                "function": "__ogt_1p_data_v2",
                "priority": 6,
                "vtp_cityType": "CSS_SELECTOR",
                "vtp_manualEmailEnabled": false,
                "vtp_firstNameType": "CSS_SELECTOR",
                "vtp_countryType": "CSS_SELECTOR",
                "vtp_cityValue": "",
                "vtp_isAutoEnabled": true,
                "vtp_autoCollectExclusionSelectors": ["list", ["map", "exclusionSelector", ""]],
                "vtp_emailType": "CSS_SELECTOR",
                "vtp_regionType": "CSS_SELECTOR",
                "vtp_autoEmailEnabled": true,
                "vtp_postalCodeValue": "",
                "vtp_lastNameValue": "",
                "vtp_phoneType": "CSS_SELECTOR",
                "vtp_phoneValue": "",
                "vtp_streetType": "CSS_SELECTOR",
                "vtp_autoPhoneEnabled": true,
                "vtp_postalCodeType": "CSS_SELECTOR",
                "vtp_emailValue": "",
                "vtp_firstNameValue": "",
                "vtp_streetValue": "",
                "vtp_lastNameType": "CSS_SELECTOR",
                "vtp_isEnabled": true,
                "vtp_autoAddressEnabled": true,
                "vtp_regionValue": "",
                "vtp_countryValue": "",
                "vtp_isAutoCollectPiiEnabledFlag": false,
                "tag_id": 20
            }, {
                "function": "__ccd_ga_first",
                "priority": 5,
                "vtp_instanceDestinationId": "G-J7YR94K8NN",
                "tag_id": 26
            }, {
                "function": "__set_product_settings",
                "priority": 4,
                "vtp_instanceDestinationId": "G-J7YR94K8NN",
                "vtp_foreignTldMacroResult": ["macro", 5],
                "vtp_isChinaVipRegionMacroResult": ["macro", 6],
                "tag_id": 25
            }, {
                "function": "__ogt_google_signals",
                "priority": 3,
                "vtp_googleSignals": "DISABLED",
                "vtp_instanceDestinationId": "G-J7YR94K8NN",
                "vtp_serverMacroResult": ["macro", 4],
                "tag_id": 24
            }, {
                "function": "__ccd_ga_regscope",
                "priority": 2,
                "vtp_settingsTable": ["list", ["map", "redactFieldGroup", "DEVICE_AND_GEO", "disallowAllRegions", false, "disallowedRegions", ""], ["map", "redactFieldGroup", "GOOGLE_SIGNALS", "disallowAllRegions", true, "disallowedRegions", ""]],
                "vtp_instanceDestinationId": "G-J7YR94K8NN",
                "tag_id": 23
            }, {
                "function": "__ccd_conversion_marking",
                "priority": 1,
                "vtp_conversionRules": ["list", ["map", "matchingRules", "{\"type\":5,\"args\":[{\"stringValue\":\"purchase\"},{\"contextValue\":{\"namespaceType\":1,\"keyParts\":[\"eventName\"]}}]}"]],
                "vtp_instanceDestinationId": "G-J7YR94K8NN",
                "tag_id": 22
            }, {
                "function": "__gct",
                "vtp_trackingId": "G-J7YR94K8NN",
                "vtp_sessionDuration": 0,
                "vtp_googleSignals": ["macro", 1],
                "vtp_foreignTld": ["macro", 2],
                "vtp_restrictDomain": ["macro", 3],
                "vtp_eventSettings": ["map"],
                "tag_id": 13
            }, {
                "function": "__ccd_ga_last",
                "priority": 0,
                "vtp_instanceDestinationId": "G-J7YR94K8NN",
                "tag_id": 21
            }],
            "predicates": [{
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.js"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.init"
            }],
            "rules": [[["if", 0], ["add", 9]], [["if", 1], ["add", 0, 1, 2, 3, 10, 8, 7, 6, 5, 4]]]
        },
        "runtime": [[50, "__ccd_conversion_marking", [46, "a"], [22, [30, [28, [17, [15, "a"], "conversionRules"]], [20, [17, [17, [15, "a"], "conversionRules"], "length"], 0]], [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]]], [52, "b", ["require", "internal.copyPreHit"]], [52, "c", ["require", "internal.evaluateBooleanExpression"]], [52, "d", ["require", "internal.registerCcdCallback"]], [52, "e", "is_conversion"], [52, "f", "is_first_visit"], [52, "g", "is_first_visit_conversion"], [52, "h", "is_session_start"], [52, "i", "is_session_start_conversion"], [52, "j", "first_visit"], [52, "k", "session_start"], [41, "l"], [41, "m"], ["d", [17, [15, "a"], "instanceDestinationId"], [51, "", [7, "n"], [52, "o", [8, "preHit", [15, "n"]]], [65, "p", [17, [15, "a"], "conversionRules"], [46, [22, ["c", [17, [15, "p"], "matchingRules"], [15, "o"]], [46, [2, [15, "n"], "setMetadata", [7, [15, "e"], true]], [4]]]]], [22, [2, [15, "n"], "getMetadata", [7, [15, "f"]]], [46, [22, [28, [15, "l"]], [46, [53, [52, "p", ["b", [15, "n"], [8, "omitHitData", true, "omitMetadata", true]]], [2, [15, "p"], "setEventName", [7, [15, "j"]]], [3, "l", [8, "preHit", [15, "p"]]]]]], [65, "p", [17, [15, "a"], "conversionRules"], [46, [22, ["c", [17, [15, "p"], "matchingRules"], [15, "l"]], [46, [2, [15, "n"], "setMetadata", [7, [15, "g"], true]], [4]]]]]]], [22, [2, [15, "n"], "getMetadata", [7, [15, "h"]]], [46, [22, [28, [15, "m"]], [46, [53, [52, "p", ["b", [15, "n"], [8, "omitHitData", true, "omitMetadata", true]]], [2, [15, "p"], "setEventName", [7, [15, "k"]]], [3, "m", [8, "preHit", [15, "p"]]]]]], [65, "p", [17, [15, "a"], "conversionRules"], [46, [22, ["c", [17, [15, "p"], "matchingRules"], [15, "m"]], [46, [2, [15, "n"], "setMetadata", [7, [15, "i"], true]], [4]]]]]]]]], [2, [15, "a"], "gtmOnSuccess", [7]], [36]], [50, "__ccd_ga_first", [46, "a"], [2, [15, "a"], "gtmOnSuccess", [7]]], [50, "__ccd_ga_last", [46, "a"], [2, [15, "a"], "gtmOnSuccess", [7]]], [50, "__ccd_ga_regscope", [46, "a"], [52, "b", [15, "__module_ccdGaRegionScopedSettings"]], [2, [15, "b"], "applyRegionScopedSettings", [7, [15, "a"]]], [2, [15, "a"], "gtmOnSuccess", [7]]], [50, "__ogt_1p_data_v2", [46, "a"], [50, "j", [46, "m", "n", "o"], [22, [20, [16, [15, "n"], "type"], [15, "o"]], [46, [22, [28, [15, "m"]], [46, [3, "m", [8]]]], [22, [28, [16, [15, "m"], [15, "o"]]], [46, [43, [15, "m"], [15, "o"], [16, [15, "n"], "userData"]]]]]], [36, [15, "m"]]], [50, "k", [46, "m", "n"], [52, "o", [16, [15, "a"], [15, "m"]]], [41, "p"], [22, [20, [15, "o"], "CSS_SELECTOR"], [46, [3, "p", "css_selector"]], [46, [22, [20, [15, "o"], "JS_VAR"], [46, [3, "p", "js_variable"]]]]], [36, [8, "selector_type", [15, "p"], "value", [16, [15, "a"], [15, "n"]]]]], [50, "l", [46, "m", "n", "o", "p"], [22, [28, [16, [15, "a"], [15, "p"]]], [46, [36]]], [43, [15, "m"], [15, "n"], ["k", [15, "o"], [15, "p"]]]], [22, [28, [17, [15, "a"], "isEnabled"]], [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]]], [52, "b", [13, [41, "$0"], [3, "$0", ["require", "internal.getFlags"]], ["$0"]]], [52, "c", ["require", "internal.getDestinationIds"]], [52, "d", ["require", "internal.getProductSettingsParameter"]], [52, "e", ["require", "internal.detectUserProvidedData"]], [52, "f", ["require", "internal.setRemoteConfigParameter"]], [52, "g", ["require", "internal.registerCcdCallback"]], [52, "h", [30, ["c"], [7]]], [52, "i", [8, "enable_code", true]], [22, [17, [15, "a"], "isAutoEnabled"], [46, [53, [52, "m", [7]], [22, [1, [17, [15, "a"], "autoCollectExclusionSelectors"], [17, [17, [15, "a"], "autoCollectExclusionSelectors"], "length"]], [46, [53, [41, "o"], [3, "o", 0], [63, [7, "o"], [23, [15, "o"], [17, [17, [15, "a"], "autoCollectExclusionSelectors"], "length"]], [33, [15, "o"], [3, "o", [0, [15, "o"], 1]]], [46, [53, [52, "p", [17, [16, [17, [15, "a"], "autoCollectExclusionSelectors"], [15, "o"]], "exclusionSelector"]], [22, [15, "p"], [46, [2, [15, "m"], "push", [7, [15, "p"]]]]]]]]]]], [52, "n", [39, [17, [15, "a"], "isAutoCollectPiiEnabledFlag"], [17, [15, "a"], "autoEmailEnabled"], true]], [43, [15, "i"], "auto_detect", [8, "email", [15, "n"], "phone", [17, [15, "a"], "autoPhoneEnabled"], "address", [17, [15, "a"], "autoAddressEnabled"], "exclude_element_selectors", [15, "m"]]]]]], [22, [17, [15, "a"], "isManualEnabled"], [46, [53, [52, "m", [8]], [22, [17, [15, "a"], "manualEmailEnabled"], [46, ["l", [15, "m"], "email", "emailType", "emailValue"]]], [22, [17, [15, "a"], "manualPhoneEnabled"], [46, ["l", [15, "m"], "phone", "phoneType", "phoneValue"]]], [22, [17, [15, "a"], "manualAddressEnabled"], [46, [53, [52, "n", [8]], ["l", [15, "n"], "first_name", "firstNameType", "firstNameValue"], ["l", [15, "n"], "last_name", "lastNameType", "lastNameValue"], ["l", [15, "n"], "street", "streetType", "streetValue"], ["l", [15, "n"], "city", "cityType", "cityValue"], ["l", [15, "n"], "region", "regionType", "regionValue"], ["l", [15, "n"], "country", "countryType", "countryValue"], ["l", [15, "n"], "postal_code", "postalCodeType", "postalCodeValue"], [43, [15, "m"], "name_and_address", [7, [15, "n"]]]]]], [43, [15, "i"], "selectors", [15, "m"]]]]], [65, "m", [15, "h"], [46, [53, [41, "n"], [3, "n", [15, "i"]], [22, [1, [20, [2, [15, "m"], "indexOf", [7, "G-"]], 0], [28, [16, [15, "b"], "enableEuidAutoMode"]]], [46, [53, [52, "q", [8, "enable_code", true, "selectors", [16, [15, "i"], "selectors"]]], [3, "n", [15, "q"]]]]], ["f", [15, "m"], "user_data_settings", [15, "n"]], [52, "o", [16, [15, "n"], "auto_detect"]], [22, [28, [15, "o"]], [46, [6]]], [52, "p", [51, "", [7, "q"], [52, "r", [2, [15, "q"], "getMetadata", [7, "user_data_from_automatic"]]], [22, [15, "r"], [46, [36, [15, "r"]]]], [52, "s", ["e", [8, "excludeElementSelectors", [16, [15, "o"], "exclude_element_selectors"], "fieldFilters", [8, "email", [16, [15, "o"], "email"], "phone", [16, [15, "o"], "phone"], "address", [16, [15, "o"], "address"]]]]], [52, "t", [1, [15, "s"], [16, [15, "s"], "elements"]]], [52, "u", [8]], [22, [1, [15, "t"], [18, [17, [15, "t"], "length"], 0]], [46, [53, [41, "v"], [53, [41, "w"], [3, "w", 0], [63, [7, "w"], [23, [15, "w"], [17, [15, "t"], "length"]], [33, [15, "w"], [3, "w", [0, [15, "w"], 1]]], [46, [53, [52, "x", [16, [15, "t"], [15, "w"]]], ["j", [15, "u"], [15, "x"], "email"], [22, [16, [15, "b"], "enableAutoPiiOnPhoneAndAddress"], [46, ["j", [15, "u"], [15, "x"], "phone_number"], [3, "v", ["j", [15, "v"], [15, "x"], "first_name"]], [3, "v", ["j", [15, "v"], [15, "x"], "last_name"]], [3, "v", ["j", [15, "v"], [15, "x"], "country"]], [3, "v", ["j", [15, "v"], [15, "x"], "postal_code"]]]]]]]], [22, [1, [15, "v"], [28, [16, [15, "u"], "address"]]], [46, [43, [15, "u"], "address", [15, "v"]]]]]]], [2, [15, "q"], "setMetadata", [7, "user_data_from_automatic", [15, "u"]]], [36, [15, "u"]]]], ["g", [15, "m"], [51, "", [7, "q"], [2, [15, "q"], "setMetadata", [7, "user_data_from_automatic_getter", [15, "p"]]]]]]]], [2, [15, "a"], "gtmOnSuccess", [7]]], [50, "__ogt_ga_send", [46, "a"], [50, "g", [46, "h", "i", "j", "k"], [22, [21, [16, [15, "h"], [15, "i"]], [44]], [46, [43, [15, "j"], [15, "k"], [16, [15, "h"], [15, "i"]]]]]], [22, [28, [17, [15, "a"], "value"]], [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]]], [52, "b", ["require", "getContainerVersion"]], [52, "c", ["require", "internal.getDestinationIds"]], [52, "d", ["require", "internal.sendGtagEvent"]], [52, "e", ["require", "internal.addGaSendListener"]], [41, "f"], [3, "f", ["c"]], [22, [30, [28, [15, "f"]], [20, [17, [15, "f"], "length"], 0]], [46, [3, "f", [7, [17, ["b"], "containerId"]]]]], ["e", [51, "", [7, "h", "i"], [41, "j"], [41, "k"], [3, "k", [8]], [22, [20, [15, "h"], "event"], [46, [3, "j", [16, [15, "i"], "eventAction"]], ["g", [15, "i"], "eventCategory", [15, "k"], "event_category"], ["g", [15, "i"], "eventLabel", [15, "k"], "event_label"], ["g", [15, "i"], "eventValue", [15, "k"], "value"]], [46, [22, [20, [15, "h"], "exception"], [46, [3, "j", "exception"], ["g", [15, "i"], "exDescription", [15, "k"], "description"], ["g", [15, "i"], "exFatal", [15, "k"], "fatal"]], [46, [22, [20, [15, "h"], "timing"], [46, [22, [30, [30, [20, [16, [15, "i"], "timingCategory"], [44]], [20, [16, [15, "i"], "timingVar"], [44]]], [20, [16, [15, "i"], "timingValue"], [44]]], [46, [36]]], [3, "j", "timing_complete"], ["g", [15, "i"], "timingCategory", [15, "k"], "event_category"], ["g", [15, "i"], "timingVar", [15, "k"], "name"], ["g", [15, "i"], "timingValue", [15, "k"], "value"], ["g", [15, "i"], "timingLabel", [15, "k"], "event_label"]]]]]]], [22, [21, [15, "j"], [44]], [46, [53, [52, "l", [8, "eventMetadata", [8, "event_usage", [7, 7]], "eventId", [17, [15, "a"], "gtmEventId"], "noGtmEvent", true]], [65, "m", [15, "f"], [46, [22, [20, [2, [15, "m"], "indexOf", [7, "G-"]], 0], [46, ["d", [15, "m"], [15, "j"], [15, "k"], [15, "l"]]]]]]]]]]], [2, [15, "a"], "gtmOnSuccess", [7]]], [50, "__ogt_google_signals", [46, "a"], [52, "b", ["require", "internal.setProductSettingsParameter"]], [52, "c", ["require", "getContainerVersion"]], [52, "d", [13, [41, "$0"], [3, "$0", ["require", "internal.getFlags"]], ["$0"]]], [52, "e", [30, [17, [15, "a"], "instanceDestinationId"], [17, ["c"], "containerId"]]], ["b", [15, "e"], "google_signals", [20, [17, [15, "a"], "serverMacroResult"], 1]], ["b", [15, "e"], "google_ono", [20, [17, [15, "a"], "serverMacroResult"], 2]], [2, [15, "a"], "gtmOnSuccess", [7]]], [50, "__ogt_referral_exclusion", [46, "a"], [52, "b", [15, "__module_convertDomainConditions"]], [52, "c", ["require", "internal.getDestinationIds"]], [52, "d", ["require", "internal.setRemoteConfigParameter"]], [52, "e", [13, [41, "$0"], [3, "$0", ["require", "internal.getFlags"]], ["$0"]]], [22, [17, [15, "a"], "includeConditions"], [46, [53, [41, "f"], [3, "f", [30, ["c"], [7]]], [65, "g", [15, "f"], [46, [53, [41, "h"], [3, "h", [17, [15, "a"], "includeConditions"]], [22, [17, [15, "h"], "length"], [46, [3, "h", [2, [15, "b"], "convertDomainConditions", [7, [15, "h"]]]], ["d", [15, "g"], "referral_exclusion_definition", [8, "include_conditions", [15, "h"]]]]]]]]]]], [2, [15, "a"], "gtmOnSuccess", [7]]], [50, "__ogt_session_timeout", [46, "a"], [52, "b", ["require", "internal.getDestinationIds"]], [52, "c", ["require", "makeNumber"]], [52, "d", ["require", "internal.setRemoteConfigParameter"]], [41, "e"], [3, "e", [30, ["b"], [7]]], [52, "f", [30, ["c", [17, [15, "a"], "sessionHours"]], 0]], [52, "g", [30, ["c", [17, [15, "a"], "sessionMinutes"]], 0]], [22, [30, [15, "f"], [15, "g"]], [46, [53, [52, "i", [0, [26, [15, "f"], 60], [15, "g"]]], [65, "j", [15, "e"], [46, ["d", [15, "j"], "session_duration", [15, "i"]]]]]]], [52, "h", [30, ["c", [17, [15, "a"], "engagementSeconds"]], 0]], [22, [15, "h"], [46, [53, [52, "i", [26, [15, "h"], 1000]], [65, "j", [15, "e"], [46, ["d", [15, "j"], "session_engaged_time", [15, "i"]]]]]]], [2, [15, "a"], "gtmOnSuccess", [7]]], [50, "__set_product_settings", [46, "a"], [2, [15, "a"], "gtmOnSuccess", [7]]], [52, "__module_convertDomainConditions", [13, [41, "$0"], [3, "$0", [51, "", [7], [50, "a", [46], [50, "e", [46, "g"], [36, [2, [15, "g"], "replace", [7, [15, "d"], "\\$&"]]]], [50, "f", [46, "g"], [52, "h", [7]], [53, [41, "i"], [3, "i", 0], [63, [7, "i"], [23, [15, "i"], [17, [15, "g"], "length"]], [33, [15, "i"], [3, "i", [0, [15, "i"], 1]]], [46, [53, [41, "j"], [22, [20, ["c", [16, [15, "g"], [15, "i"]]], "object"], [46, [53, [52, "l", [16, [16, [15, "g"], [15, "i"]], "matchType"]], [52, "m", [16, [16, [15, "g"], [15, "i"]], "matchValue"]], [38, [15, "l"], [46, "BEGINS_WITH", "ENDS_WITH", "EQUALS", "REGEX", "CONTAINS"], [46, [5, [46, [3, "j", [0, "^", ["e", [15, "m"]]]], [4]]], [5, [46, [3, "j", [0, ["e", [15, "m"]], "$"]], [4]]], [5, [46, [3, "j", [0, [0, "^", ["e", [15, "m"]]], "$"]], [4]]], [5, [46, [3, "j", [15, "m"]], [4]]], [5, [46]], [9, [46, [3, "j", ["e", [15, "m"]]], [4]]]]]]], [46, [3, "j", [16, [15, "g"], [15, "i"]]]]], [41, "k"], [22, [15, "j"], [46, [3, "k", ["b", [15, "j"]]]]], [22, [15, "k"], [46, [2, [15, "h"], "push", [7, [15, "k"]]]]]]]]], [36, [15, "h"]]], [52, "b", ["require", "internal.createRegex"]], [52, "c", ["require", "getType"]], [52, "d", ["b", "[.*+\\-?^${}()|[\\]\\\\]", "g"]], [36, [8, "convertDomainConditions", [15, "f"]]]], [36, ["a"]]]], ["$0"]]], [52, "__module_activities", [13, [41, "$0"], [3, "$0", [51, "", [7], [50, "a", [46], [50, "b", [46, "c", "d"], [36, [39, [15, "d"], ["d", [15, "c"]], [15, "c"]]]], [36, [8, "withRequestContext", [15, "b"]]]], [36, ["a"]]]], ["$0"]]], [52, "__module_ccdGaRegionScopedSettings", [13, [41, "$0"], [3, "$0", [51, "", [7], [50, "a", [46], [50, "j", [46, "l", "m"], [50, "r", [46, "s"], [22, [30, [28, [15, "p"]], [21, [17, [15, "p"], "length"], 2]], [46, [36, false]]], [52, "t", ["k", [15, "s"]]], [53, [41, "u"], [3, "u", 0], [63, [7, "u"], [23, [15, "u"], [17, [15, "t"], "length"]], [33, [15, "u"], [3, "u", [0, [15, "u"], 1]]], [46, [53, [52, "v", [16, [15, "t"], [15, "u"]]], [52, "w", [17, [15, "v"], "countryCode"]], [52, "x", [17, [15, "v"], "regionCode"]], [52, "y", [20, [15, "w"], [15, "p"]]], [52, "z", [30, [28, [15, "x"]], [20, [15, "x"], [15, "q"]]]], [22, [1, [15, "y"], [15, "z"]], [46, [36, true]]]]]]], [36, false]], [22, [28, [17, [15, "l"], "settingsTable"]], [46, [36]]], [52, "n", [30, [17, [15, "l"], "instanceDestinationId"], [17, ["b"], "containerId"]]], [52, "o", ["g", [15, "c"], [15, "m"]]], [52, "p", [13, [41, "$0"], [3, "$0", ["g", [15, "d"], [15, "m"]]], ["$0"]]], [52, "q", [13, [41, "$0"], [3, "$0", ["g", [15, "e"], [15, "m"]]], ["$0"]]], [53, [41, "s"], [3, "s", 0], [63, [7, "s"], [23, [15, "s"], [17, [17, [15, "l"], "settingsTable"], "length"]], [33, [15, "s"], [3, "s", [0, [15, "s"], 1]]], [46, [53, [52, "t", [16, [17, [15, "l"], "settingsTable"], [15, "s"]]], [22, [30, [17, [15, "t"], "disallowAllRegions"], ["r", [17, [15, "t"], "disallowedRegions"]]], [46, [53, [52, "u", [16, [15, "i"], [17, [15, "t"], "redactFieldGroup"]]], [22, [28, [15, "u"]], [46, [6]]], [53, [41, "v"], [3, "v", 0], [63, [7, "v"], [23, [15, "v"], [17, [15, "u"], "length"]], [33, [15, "v"], [3, "v", [0, [15, "v"], 1]]], [46, [53, [52, "w", [16, [15, "u"], [15, "v"]]], ["o", [15, "n"], [17, [15, "w"], "name"], [17, [15, "w"], "value"]]]]]]]]]]]]]], [50, "k", [46, "l"], [52, "m", [7]], [22, [28, [15, "l"]], [46, [36, [15, "m"]]]], [52, "n", [2, [15, "l"], "split", [7, ","]]], [53, [41, "o"], [3, "o", 0], [63, [7, "o"], [23, [15, "o"], [17, [15, "n"], "length"]], [33, [15, "o"], [3, "o", [0, [15, "o"], 1]]], [46, [53, [52, "p", [2, [16, [15, "n"], [15, "o"]], "trim", [7]]], [22, [28, [15, "p"]], [46, [6]]], [52, "q", [2, [15, "p"], "split", [7, "-"]]], [52, "r", [16, [15, "q"], 0]], [52, "s", [39, [20, [17, [15, "q"], "length"], 2], [15, "p"], [44]]], [22, [30, [28, [15, "r"]], [21, [17, [15, "r"], "length"], 2]], [46, [6]]], [22, [1, [21, [15, "s"], [44]], [30, [23, [17, [15, "s"], "length"], 4], [18, [17, [15, "s"], "length"], 6]]], [46, [6]]], [2, [15, "m"], "push", [7, [8, "countryCode", [15, "r"], "regionCode", [15, "s"]]]]]]]], [36, [15, "m"]]], [52, "b", ["require", "getContainerVersion"]], [52, "c", ["require", "internal.setRemoteConfigParameter"]], [52, "d", ["require", "internal.getCountryCode"]], [52, "e", ["require", "internal.getRegionCode"]], [52, "f", [15, "__module_activities"]], [52, "g", [17, [15, "f"], "withRequestContext"]], [41, "h"], [52, "i", [8, "GOOGLE_SIGNALS", [7, [8, "name", "allow_google_signals", "value", false]], "DEVICE_AND_GEO", [7, [8, "name", "geo_granularity", "value", true], [8, "name", "redact_device_info", "value", true]]]], [36, [8, "applyRegionScopedSettings", [15, "j"]]]], [36, ["a"]]]], ["$0"]]]
        ],
        "entities": {
            "__ccd_conversion_marking": {
                "2": true,
                "4": true
            },
            "__ccd_ga_first": {
                "2": true,
                "4": true
            },
            "__ccd_ga_last": {
                "2": true,
                "4": true
            },
            "__ccd_ga_regscope": {
                "2": true,
                "4": true
            },
            "__ogt_1p_data_v2": {
                "2": true
            },
            "__ogt_ga_send": {
                "2": true
            },
            "__ogt_google_signals": {
                "2": true,
                "4": true
            },
            "__ogt_referral_exclusion": {
                "2": true
            },
            "__ogt_session_timeout": {
                "2": true
            },
            "__set_product_settings": {
                "2": true,
                "4": true
            }

        },
        "permissions": {
            "__ccd_conversion_marking": {},
            "__ccd_ga_first": {},
            "__ccd_ga_last": {},
            "__ccd_ga_regscope": {
                "read_container_data": {}
            },
            "__ogt_1p_data_v2": {
                "detect_user_provided_data": {
                    "limitDataSources": true,
                    "allowAutoDataSources": true,
                    "allowManualDataSources": false,
                    "allowCodeDataSources": false
                }
            },
            "__ogt_ga_send": {
                "access_globals": {
                    "keys": [{
                        "key": "ga.q",
                        "read": true,
                        "write": true,
                        "execute": true
                    }, {
                        "key": "GoogleAnalyticsObject",
                        "read": true,
                        "write": false,
                        "execute": false
                    }]
                },
                "read_container_data": {}
            },
            "__ogt_google_signals": {
                "read_container_data": {}
            },
            "__ogt_referral_exclusion": {},
            "__ogt_session_timeout": {},
            "__set_product_settings": {}

        }
        ,
        "security_groups": {
            "google": ["__ccd_conversion_marking", "__ccd_ga_first", "__ccd_ga_last", "__ccd_ga_regscope", "__ogt_1p_data_v2", "__ogt_ga_send", "__ogt_google_signals", "__ogt_referral_exclusion", "__ogt_session_timeout", "__set_product_settings"
            ]

        }

    };

    var aa, ba = function(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }, da = function(a) {
        return a.raw = a
    }, ea = function(a, b) {
        a.raw = b;
        return a
    }, ha = function(a) {
        var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        if (b)
            return b.call(a);
        if ("number" == typeof a.length)
            return {
                next: ba(a)
            };
        throw Error(String(a) + " is not an iterable or ArrayLike");
    }, ia = function(a) {
        for (var b, c = []; !(b = a.next()).done; )
            c.push(b.value);
        return c
    }, ja = function(a) {
        return a instanceof Array ? a : ia(ha(a))
    }, ka = "function" == typeof Object.create ? Object.create : function(a) {
        var b = function() {};
        b.prototype = a;
        return new b
    }
    , ma;
    if ("function" == typeof Object.setPrototypeOf)
        ma = Object.setPrototypeOf;
    else {
        var na;
        a: {
            var oa = {
                a: !0
            }
              , pa = {};
            try {
                pa.__proto__ = oa;
                na = pa.a;
                break a
            } catch (a) {}
            na = !1
        }
        ma = na ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b)
                throw new TypeError(a + " is not extensible");
            return a
        }
        : null
    }
    var qa = ma
      , ra = function(a, b) {
        a.prototype = ka(b.prototype);
        a.prototype.constructor = a;
        if (qa)
            qa(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else
                        a[c] = b[c];
        a.mo = b.prototype
    }
      , ta = function() {
        for (var a = Number(this), b = [], c = a; c < arguments.length; c++)
            b[c - a] = arguments[c];
        return b
    };
    /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
    var ua = this || self
      , va = function(a) {
        return a
    };
    var wa = function(a, b) {
        this.h = a;
        this.s = b
    };
    var xa = function() {
        this.h = {};
        this.C = {}
    };
    aa = xa.prototype;
    aa.get = function(a) {
        return this.h["dust." + a]
    }
    ;
    aa.set = function(a, b) {
        a = "dust." + a;
        this.C.hasOwnProperty(a) || (this.h[a] = b)
    }
    ;
    aa.di = function(a, b) {
        this.set(a, b);
        this.C["dust." + a] = !0
    }
    ;
    aa.has = function(a) {
        return this.h.hasOwnProperty("dust." + a)
    }
    ;
    aa.remove = function(a) {
        a = "dust." + a;
        this.C.hasOwnProperty(a) || delete this.h[a]
    }
    ;
    var ya = function() {
        this.quota = {}
    };
    ya.prototype.reset = function() {
        this.quota = {}
    }
    ;
    var za = function(a, b) {
        this.W = a;
        this.M = function(c, d, e) {
            return c.apply(d, e)
        }
        ;
        this.C = b;
        this.s = new xa;
        this.h = this.F = void 0
    };
    za.prototype.add = function(a, b) {
        Aa(this, a, b, !1)
    }
    ;
    var Aa = function(a, b, c, d) {
        d ? a.s.di(b, c) : a.s.set(b, c)
    };
    za.prototype.set = function(a, b) {
        !this.s.has(a) && this.C && this.C.has(a) ? this.C.set(a, b) : this.s.set(a, b)
    }
    ;
    za.prototype.get = function(a) {
        return this.s.has(a) ? this.s.get(a) : this.C ? this.C.get(a) : void 0
    }
    ;
    za.prototype.has = function(a) {
        return !!this.s.has(a) || !(!this.C || !this.C.has(a))
    }
    ;
    var Ba = function(a) {
        var b = new za(a.W,a);
        a.F && (b.F = a.F);
        b.M = a.M;
        b.h = a.h;
        return b
    };
    var Ea = function() {}
      , Ga = function(a) {
        return "function" === typeof a
    }
      , k = function(a) {
        return "string" === typeof a
    }
      , Ha = function(a) {
        return "number" === typeof a && !isNaN(a)
    }
      , Ia = Array.isArray
      , Ja = function(a, b) {
        if (a && Ia(a))
            for (var c = 0; c < a.length; c++)
                if (a[c] && b(a[c]))
                    return a[c]
    }
      , Ka = function(a, b) {
        if (!Ha(a) || !Ha(b) || a > b)
            a = 0,
            b = 2147483647;
        return Math.floor(Math.random() * (b - a + 1) + a)
    }
      , Ma = function(a, b) {
        for (var c = new La, d = 0; d < a.length; d++)
            c.set(a[d], !0);
        for (var e = 0; e < b.length; e++)
            if (c.get(b[e]))
                return !0;
        return !1
    }
      , Na = function(a, b) {
        for (var c in a)
            Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
    }
      , Oa = function(a) {
        return !!a && ("[object Arguments]" === Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, "callee"))
    }
      , Pa = function(a) {
        return Math.round(Number(a)) || 0
    }
      , Qa = function(a) {
        return "false" === String(a).toLowerCase() ? !1 : !!a
    }
      , Ra = function(a) {
        var b = [];
        if (Ia(a))
            for (var c = 0; c < a.length; c++)
                b.push(String(a[c]));
        return b
    }
      , Sa = function(a) {
        return a ? a.replace(/^\s+|\s+$/g, "") : ""
    }
      , Ta = function() {
        return new Date(Date.now())
    }
      , Ua = function() {
        return Ta().getTime()
    }
      , La = function() {
        this.prefix = "gtm.";
        this.values = {}
    };
    La.prototype.set = function(a, b) {
        this.values[this.prefix + a] = b
    }
    ;
    La.prototype.get = function(a) {
        return this.values[this.prefix + a]
    }
    ;
    var Va = function(a, b, c) {
        return a && a.hasOwnProperty(b) ? a[b] : c
    }
      , Wa = function(a) {
        var b = a;
        return function() {
            if (b) {
                var c = b;
                b = void 0;
                try {
                    c()
                } catch (d) {}
            }
        }
    }
      , Xa = function(a, b) {
        for (var c in b)
            b.hasOwnProperty(c) && (a[c] = b[c])
    }
      , Ya = function(a, b) {
        for (var c = [], d = 0; d < a.length; d++)
            c.push(a[d]),
            c.push.apply(c, b[a[d]] || []);
        return c
    }
      , Za = function(a, b) {
        return a.substring(0, b.length) === b
    }
      , $a = function(a, b) {
        var c = l;
        b = b || [];
        for (var d = c, e = 0; e < a.length - 1; e++) {
            if (!d.hasOwnProperty(a[e]))
                return;
            d = d[a[e]];
            if (0 <= b.indexOf(d))
                return
        }
        return d
    }
      , ab = function(a, b) {
        for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++)
            d = d[e[f]] = {};
        d[e[e.length - 1]] = b;
        return c
    }
      , bb = /^\w{1,9}$/
      , cb = function(a, b) {
        a = a || {};
        b = b || ",";
        var c = [];
        Na(a, function(d, e) {
            bb.test(d) && e && c.push(d)
        });
        return c.join(b)
    }
      , db = function(a, b) {
        function c() {
            ++d === b && (e(),
            e = null,
            c.done = !0)
        }
        var d = 0
          , e = a;
        c.done = !1;
        return c
    };
    function eb(a, b) {
        for (var c, d = 0; d < b.length && !(c = fb(a, b[d]),
        c instanceof wa); d++)
            ;
        return c
    }
    function fb(a, b) {
        try {
            var c = a.get(String(b[0]));
            if (!c || "function" !== typeof c.invoke)
                throw Error("Attempting to execute non-function " + b[0] + ".");
            return c.invoke.apply(c, [a].concat(b.slice(1)))
        } catch (e) {
            var d = a.F;
            d && d(e, b.context ? {
                id: b[0],
                line: b.context.line
            } : null);
            throw e;
        }
    }
    ;var hb = function() {
        this.C = new ya;
        this.h = new za(this.C)
    };
    hb.prototype.execute = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 0);
        return this.s(c)
    }
    ;
    hb.prototype.s = function(a) {
        for (var b, c = 0; c < arguments.length; c++)
            b = fb(this.h, arguments[c]);
        return b
    }
    ;
    hb.prototype.F = function(a, b) {
        var c = Ba(this.h);
        c.h = a;
        for (var d, e = 1; e < arguments.length; e++)
            d = fb(c, arguments[e]);
        return d
    }
    ;
    var ib = function() {
        xa.call(this);
        this.s = !1
    };
    ra(ib, xa);
    var jb = function(a, b) {
        var c = [], d;
        for (d in a.h)
            if (a.h.hasOwnProperty(d))
                switch (d = d.substr(5),
                b) {
                case 1:
                    c.push(d);
                    break;
                case 2:
                    c.push(a.get(d));
                    break;
                case 3:
                    c.push([d, a.get(d)])
                }
        return c
    };
    ib.prototype.set = function(a, b) {
        this.s || xa.prototype.set.call(this, a, b)
    }
    ;
    ib.prototype.di = function(a, b) {
        this.s || xa.prototype.di.call(this, a, b)
    }
    ;
    ib.prototype.remove = function(a) {
        this.s || xa.prototype.remove.call(this, a)
    }
    ;
    ib.prototype.Jb = function() {
        this.s = !0
    }
    ;
    /*
 jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var kb = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/
      , lb = function(a) {
        if (null == a)
            return String(a);
        var b = kb.exec(Object.prototype.toString.call(Object(a)));
        return b ? b[1].toLowerCase() : "object"
    }
      , mb = function(a, b) {
        return Object.prototype.hasOwnProperty.call(Object(a), b)
    }
      , nb = function(a) {
        if (!a || "object" != lb(a) || a.nodeType || a == a.window)
            return !1;
        try {
            if (a.constructor && !mb(a, "constructor") && !mb(a.constructor.prototype, "isPrototypeOf"))
                return !1
        } catch (c) {
            return !1
        }
        for (var b in a)
            ;
        return void 0 === b || mb(a, b)
    }
      , ob = function(a, b) {
        var c = b || ("array" == lb(a) ? [] : {}), d;
        for (d in a)
            if (mb(a, d)) {
                var e = a[d];
                "array" == lb(e) ? ("array" != lb(c[d]) && (c[d] = []),
                c[d] = ob(e, c[d])) : nb(e) ? (nb(c[d]) || (c[d] = {}),
                c[d] = ob(e, c[d])) : c[d] = e
            }
        return c
    };
    var pb = function(a) {
        for (var b = [], c = 0; c < a.length(); c++)
            a.has(c) && (b[c] = a.get(c));
        return b
    }
      , qb = function(a) {
        if (void 0 == a || Ia(a) || nb(a))
            return !0;
        switch (typeof a) {
        case "boolean":
        case "number":
        case "string":
        case "function":
            return !0
        }
        return !1
    }
      , rb = function(a) {
        return "number" === typeof a && 0 <= a && isFinite(a) && 0 === a % 1 || "string" === typeof a && "-" !== a[0] && a === "" + parseInt(a, 10)
    };
    var sb = function(a) {
        this.s = new ib;
        this.h = [];
        this.C = !1;
        a = a || [];
        for (var b in a)
            a.hasOwnProperty(b) && (rb(b) ? this.h[Number(b)] = a[Number(b)] : this.s.set(b, a[b]))
    };
    aa = sb.prototype;
    aa.toString = function(a) {
        if (a && 0 <= a.indexOf(this))
            return "";
        for (var b = [], c = 0; c < this.h.length; c++) {
            var d = this.h[c];
            null === d || void 0 === d ? b.push("") : d instanceof sb ? (a = a || [],
            a.push(this),
            b.push(d.toString(a)),
            a.pop()) : b.push(String(d))
        }
        return b.join(",")
    }
    ;
    aa.set = function(a, b) {
        if (!this.C)
            if ("length" === a) {
                if (!rb(b))
                    throw Error("RangeError: Length property must be a valid integer.");
                this.h.length = Number(b)
            } else
                rb(a) ? this.h[Number(a)] = b : this.s.set(a, b)
    }
    ;
    aa.get = function(a) {
        return "length" === a ? this.length() : rb(a) ? this.h[Number(a)] : this.s.get(a)
    }
    ;
    aa.length = function() {
        return this.h.length
    }
    ;
    aa.ac = function() {
        for (var a = jb(this.s, 1), b = 0; b < this.h.length; b++)
            a.push(b + "");
        return new sb(a)
    }
    ;
    aa.remove = function(a) {
        rb(a) ? delete this.h[Number(a)] : this.s.remove(a)
    }
    ;
    aa.pop = function() {
        return this.h.pop()
    }
    ;
    aa.push = function(a) {
        return this.h.push.apply(this.h, Array.prototype.slice.call(arguments))
    }
    ;
    aa.shift = function() {
        return this.h.shift()
    }
    ;
    aa.splice = function(a, b, c) {
        return new sb(this.h.splice.apply(this.h, arguments))
    }
    ;
    aa.unshift = function(a) {
        return this.h.unshift.apply(this.h, Array.prototype.slice.call(arguments))
    }
    ;
    aa.has = function(a) {
        return rb(a) && this.h.hasOwnProperty(a) || this.s.has(a)
    }
    ;
    aa.Jb = function() {
        this.C = !0;
        Object.freeze(this.h);
        this.s.Jb()
    }
    ;
    var tb = function() {
        ib.call(this)
    };
    ra(tb, ib);
    tb.prototype.ac = function() {
        return new sb(jb(this, 1))
    }
    ;
    function ub() {
        for (var a = vb, b = {}, c = 0; c < a.length; ++c)
            b[a[c]] = c;
        return b
    }
    function wb() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }
    var vb, xb;
    function yb(a) {
        vb = vb || wb();
        xb = xb || ub();
        for (var b = [], c = 0; c < a.length; c += 3) {
            var d = c + 1 < a.length
              , e = c + 2 < a.length
              , f = a.charCodeAt(c)
              , g = d ? a.charCodeAt(c + 1) : 0
              , h = e ? a.charCodeAt(c + 2) : 0
              , m = f >> 2
              , n = (f & 3) << 4 | g >> 4
              , p = (g & 15) << 2 | h >> 6
              , q = h & 63;
            e || (q = 64,
            d || (p = 64));
            b.push(vb[m], vb[n], vb[p], vb[q])
        }
        return b.join("")
    }
    function zb(a) {
        function b(m) {
            for (; d < a.length; ) {
                var n = a.charAt(d++)
                  , p = xb[n];
                if (null != p)
                    return p;
                if (!/^[\s\xa0]*$/.test(n))
                    throw Error("Unknown base64 encoding at char: " + n);
            }
            return m
        }
        vb = vb || wb();
        xb = xb || ub();
        for (var c = "", d = 0; ; ) {
            var e = b(-1)
              , f = b(0)
              , g = b(64)
              , h = b(64);
            if (64 === h && -1 === e)
                return c;
            c += String.fromCharCode(e << 2 | f >> 4);
            64 != g && (c += String.fromCharCode(f << 4 & 240 | g >> 2),
            64 != h && (c += String.fromCharCode(g << 6 & 192 | h)))
        }
    }
    ;var Ab = {}
      , Bb = function(a, b) {
        Ab[a] = Ab[a] || [];
        Ab[a][b] = !0
    }
      , Cb = function(a) {
        var b = Ab[a];
        if (!b || 0 === b.length)
            return "";
        for (var c = [], d = 0, e = 0; e < b.length; e++)
            0 === e % 8 && 0 < e && (c.push(String.fromCharCode(d)),
            d = 0),
            b[e] && (d |= 1 << e % 8);
        0 < d && c.push(String.fromCharCode(d));
        return yb(c.join("")).replace(/\.+$/, "")
    }
      , Db = function() {
        for (var a = [], b = Ab.fdr || [], c = 0; c < b.length; c++)
            b[c] && a.push(c);
        return 0 < a.length ? a : void 0
    };
    var Eb, Fb = function() {
        if (void 0 === Eb) {
            var a = null
              , b = ua.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: va,
                        createScript: va,
                        createScriptURL: va
                    })
                } catch (c) {
                    ua.console && ua.console.error(c.message)
                }
                Eb = a
            } else
                Eb = a
        }
        return Eb
    };
    var Gb = function(a) {
        this.h = a
    };
    Gb.prototype.toString = function() {
        return this.h + ""
    }
    ;
    var Hb = function(a) {
        return a instanceof Gb && a.constructor === Gb ? a.h : "type_error:TrustedResourceUrl"
    }
      , Ib = {}
      , Jb = function(a) {
        var b = a
          , c = Fb()
          , d = c ? c.createScriptURL(b) : b;
        return new Gb(d,Ib)
    };
    /*

 SPDX-License-Identifier: Apache-2.0
*/
    var Kb = da([""])
      , Lb = ea(["\x00"], ["\\0"])
      , Mb = ea(["\n"], ["\\n"])
      , Nb = ea(["\x00"], ["\\u0000"]);
    function Ob(a) {
        return -1 === a.toString().indexOf("`")
    }
    Ob(function(a) {
        return a(Kb)
    }) || Ob(function(a) {
        return a(Lb)
    }) || Ob(function(a) {
        return a(Mb)
    }) || Ob(function(a) {
        return a(Nb)
    });
    var Pb = function(a) {
        this.h = a
    };
    Pb.prototype.toString = function() {
        return this.h.toString()
    }
    ;
    var Qb = function(a) {
        return a instanceof Pb && a.constructor === Pb ? a.h : "type_error:SafeUrl"
    }
      , Rb = {};
    var Sb = new Pb("about:invalid#zClosurez",Rb);
    var Tb = function(a) {
        this.xm = a
    };
    function Ub(a) {
        return new Tb(function(b) {
            return b.substr(0, a.length + 1).toLowerCase() === a + ":"
        }
        )
    }
    var Vb = [Ub("data"), Ub("http"), Ub("https"), Ub("mailto"), Ub("ftp"), new Tb(function(a) {
        return /^[^:]*([/?#]|$)/.test(a)
    }
    )];
    function Wb(a, b) {
        b = void 0 === b ? Vb : b;
        if (a instanceof Pb)
            return a;
        for (var c = 0; c < b.length; ++c) {
            var d = b[c];
            if (d instanceof Tb && d.xm(a))
                return new Pb(a,Rb)
        }
    }
    function Xb(a) {
        var b;
        b = void 0 === b ? Vb : b;
        return Wb(a, b) || Sb
    }
    var Yb = /^\s*(?!javascript:)(?:[a-z0-9+.-]+:|[^:\/?#]*(?:[\/?#]|$))/i;
    function Zb(a) {
        if (Yb.test(a))
            return a
    }
    ;var $b = {};
    var ac = function() {}
      , bc = function(a) {
        this.h = a
    };
    ra(bc, ac);
    bc.prototype.toString = function() {
        return this.h
    }
    ;
    var cc = Array.prototype.indexOf ? function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    }
    : function(a, b) {
        if ("string" === typeof a)
            return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b)
                return c;
        return -1
    }
    ;
    var dc, ec;
    a: {
        for (var fc = ["CLOSURE_FLAGS"], gc = ua, hc = 0; hc < fc.length; hc++)
            if (gc = gc[fc[hc]],
            null == gc) {
                ec = null;
                break a
            }
        ec = gc
    }
    var ic = ec && ec[610401301];
    dc = null != ic ? ic : !1;
    function jc() {
        var a = ua.navigator;
        if (a) {
            var b = a.userAgent;
            if (b)
                return b
        }
        return ""
    }
    var kc, lc = ua.navigator;
    kc = lc ? lc.userAgentData || null : null;
    function mc(a) {
        return dc ? kc ? kc.brands.some(function(b) {
            var c = b.brand;
            return c && -1 != c.indexOf(a)
        }) : !1 : !1
    }
    function nc(a) {
        return -1 != jc().indexOf(a)
    }
    ;function oc() {
        return dc ? !!kc && 0 < kc.brands.length : !1
    }
    function pc() {
        return oc() ? !1 : nc("Opera")
    }
    function qc() {
        return nc("Firefox") || nc("FxiOS")
    }
    function rc() {
        return oc() ? mc("Chromium") : (nc("Chrome") || nc("CriOS")) && !(oc() ? 0 : nc("Edge")) || nc("Silk")
    }
    ;var sc = {}
      , tc = function(a) {
        this.h = a
    };
    tc.prototype.toString = function() {
        return this.h.toString()
    }
    ;
    var uc = function(a) {
        return a instanceof tc && a.constructor === tc ? a.h : "type_error:SafeHtml"
    };
    function vc(a, b) {
        var c = [new bc(wc[0].toLowerCase(),$b)];
        if (0 === c.length)
            throw Error("");
        var d = c.map(function(f) {
            var g;
            if (f instanceof bc)
                g = f.h;
            else
                throw Error("");
            return g
        })
          , e = b.toLowerCase();
        if (d.every(function(f) {
            return 0 !== e.indexOf(f)
        }))
            throw Error('Attribute "' + b + '" does not match any of the allowed prefixes.');
        a.setAttribute(b, "true")
    }
    function xc(a) {
        var b = a.tagName;
        if ("SCRIPT" === b || "STYLE" === b)
            throw Error("");
    }
    ;function yc(a, b) {
        var c = b instanceof Pb ? Qb(b) : Zb(b);
        void 0 !== c && (a.action = c)
    }
    ;"ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT".split(" ").concat(["BUTTON", "INPUT"]);
    function zc(a) {
        var b = a = Ac(a)
          , c = Fb()
          , d = c ? c.createHTML(b) : b;
        return new tc(d,sc)
    }
    function Ac(a) {
        return null === a ? "null" : void 0 === a ? "undefined" : a
    }
    ;var l = window
      , z = document
      , Bc = navigator
      , Cc = z.currentScript && z.currentScript.src
      , Dc = function(a, b) {
        var c = l[a];
        l[a] = void 0 === c ? b : c;
        return l[a]
    }
      , Ec = function(a, b) {
        b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() {
            a.readyState in {
                loaded: 1,
                complete: 1
            } && (a.onreadystatechange = null,
            b())
        }
        )
    }
      , Fc = {
        async: 1,
        nonce: 1,
        onerror: 1,
        onload: 1,
        src: 1,
        type: 1
    }
      , Gc = {
        onload: 1,
        src: 1,
        width: 1,
        height: 1,
        style: 1
    };
    function Hc(a, b, c) {
        b && Na(b, function(d, e) {
            d = d.toLowerCase();
            c.hasOwnProperty(d) || a.setAttribute(d, e)
        })
    }
    var Ic = function(a, b, c, d, e) {
        var f = z.createElement("script");
        Hc(f, d, Fc);
        f.type = "text/javascript";
        f.async = d && !1 === d.async ? !1 : !0;
        var g;
        g = Jb(Ac(a));
        f.src = Hb(g);
        var h, m, n, p = null == (n = (m = (f.ownerDocument && f.ownerDocument.defaultView || window).document).querySelector) ? void 0 : n.call(m, "script[nonce]");
        (h = p ? p.nonce || p.getAttribute("nonce") || "" : "") && f.setAttribute("nonce", h);
        Ec(f, b);
        c && (f.onerror = c);
        if (e)
            e.appendChild(f);
        else {
            var q = z.getElementsByTagName("script")[0] || z.body || z.head;
            q.parentNode.insertBefore(f, q)
        }
        return f
    }
      , Jc = function() {
        if (Cc) {
            var a = Cc.toLowerCase();
            if (0 === a.indexOf("https://"))
                return 2;
            if (0 === a.indexOf("http://"))
                return 3
        }
        return 1
    }
      , Kc = function(a, b, c, d, e) {
        var f;
        f = void 0 === f ? !0 : f;
        var g = e
          , h = !1;
        g || (g = z.createElement("iframe"),
        h = !0);
        Hc(g, c, Gc);
        d && Na(d, function(n, p) {
            g.dataset[n] = p
        });
        f && (g.height = "0",
        g.width = "0",
        g.style.display = "none",
        g.style.visibility = "hidden");
        if (h) {
            var m = z.body && z.body.lastChild || z.body || z.head;
            m.parentNode.insertBefore(g, m)
        }
        Ec(g, b);
        void 0 !== a && (g.src = a);
        return g
    }
      , Lc = function(a, b, c, d) {
        var e = new Image(1,1);
        Hc(e, d, {});
        e.onload = function() {
            e.onload = null;
            b && b()
        }
        ;
        e.onerror = function() {
            e.onerror = null;
            c && c()
        }
        ;
        e.src = a
    }
      , Mc = function(a, b, c, d) {
        a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
    }
      , Nc = function(a, b, c) {
        a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
    }
      , C = function(a) {
        l.setTimeout(a, 0)
    }
      , Oc = function(a, b) {
        return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
    }
      , Pc = function(a) {
        var b = a.innerText || a.textContent || "";
        b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
        b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
        return b
    }
      , Qc = function(a) {
        var b = z.createElement("div")
          , c = b
          , d = zc("A<div>" + a + "</div>");
        1 === c.nodeType && xc(c);
        c.innerHTML = uc(d);
        b = b.lastChild;
        for (var e = []; b.firstChild; )
            e.push(b.removeChild(b.firstChild));
        return e
    }
      , Rc = function(a, b, c) {
        c = c || 100;
        for (var d = {}, e = 0; e < b.length; e++)
            d[b[e]] = !0;
        for (var f = a, g = 0; f && g <= c; g++) {
            if (d[String(f.tagName).toLowerCase()])
                return f;
            f = f.parentElement
        }
        return null
    }
      , Sc = function(a) {
        var b;
        try {
            b = Bc.sendBeacon && Bc.sendBeacon(a)
        } catch (c) {
            Bb("TAGGING", 15)
        }
        b || Lc(a)
    }
      , Tc = function(a, b) {
        try {
            if (Bc.sendBeacon)
                return Bc.sendBeacon(a, b)
        } catch (c) {
            Bb("TAGGING", 15)
        }
        return !1
    }
      , Uc = {
        cache: "no-store",
        credentials: "include",
        keepalive: !0,
        method: "POST",
        mode: "no-cors",
        redirect: "follow"
    }
      , Vc = function(a, b) {
        var c = {
            Km: !0
        };
        if ("fetch"in l) {
            var d = Object.assign({}, Uc);
            b && (d.body = b);
            c && (c.attributionReporting && (d.attributionReporting = c.attributionReporting),
            c.zl && (d.browsingTopics = c.zl));
            try {
                return l.fetch(a, d),
                !0
            } catch (e) {}
        }
        if (c && c.Km)
            return !1;
        if (b)
            return Tc(a, b);
        Sc(a);
        return !0
    }
      , Wc = function(a, b) {
        var c = a[b];
        c && "string" === typeof c.animVal && (c = c.animVal);
        return c
    }
      , Xc = function() {
        var a = l.performance;
        if (a && Ga(a.now))
            return a.now()
    }
      , Yc = function() {
        return l.performance || void 0
    };
    var Zc = function(a, b) {
        return H(this, a) && H(this, b)
    }
      , $c = function(a, b) {
        return H(this, a) === H(this, b)
    }
      , ad = function(a, b) {
        return H(this, a) || H(this, b)
    }
      , bd = function(a, b) {
        a = H(this, a);
        b = H(this, b);
        return -1 < String(a).indexOf(String(b))
    }
      , cd = function(a, b) {
        a = String(H(this, a));
        b = String(H(this, b));
        return a.substring(0, b.length) === b
    }
      , ed = function(a, b) {
        a = H(this, a);
        b = H(this, b);
        switch (a) {
        case "pageLocation":
            var c = l.location.href;
            b instanceof tb && b.get("stripProtocol") && (c = c.replace(/^https?:\/\//, ""));
            return c
        }
    };
    var fd = function(a, b) {
        ib.call(this);
        this.F = a;
        this.M = b
    };
    ra(fd, ib);
    fd.prototype.toString = function() {
        return this.F
    }
    ;
    fd.prototype.ac = function() {
        return new sb(jb(this, 1))
    }
    ;
    fd.prototype.invoke = function(a, b) {
        return this.M.apply(new gd(this,a), Array.prototype.slice.call(arguments, 1))
    }
    ;
    fd.prototype.eb = function(a, b) {
        try {
            return this.invoke.apply(this, Array.prototype.slice.call(arguments, 0))
        } catch (c) {}
    }
    ;
    var gd = function(a, b) {
        this.s = a;
        this.h = b
    }
      , H = function(a, b) {
        var c = a.h;
        return Ia(b) ? fb(c, b) : b
    }
      , I = function(a) {
        return a.s.F
    };
    var hd = function() {
        this.map = new Map
    };
    hd.prototype.set = function(a, b) {
        this.map.set(a, b)
    }
    ;
    hd.prototype.get = function(a) {
        return this.map.get(a)
    }
    ;
    var id = function() {
        this.keys = [];
        this.values = []
    };
    id.prototype.set = function(a, b) {
        this.keys.push(a);
        this.values.push(b)
    }
    ;
    id.prototype.get = function(a) {
        var b = this.keys.indexOf(a);
        if (-1 < b)
            return this.values[b]
    }
    ;
    function jd() {
        try {
            return Map ? new hd : new id
        } catch (a) {
            return new id
        }
    }
    ;var kd = function(a) {
        if (a instanceof kd)
            return a;
        if (qb(a))
            throw Error("Type of given value has an equivalent Pixie type.");
        this.h = a
    };
    kd.prototype.toString = function() {
        return String(this.h)
    }
    ;
    var md = function(a) {
        ib.call(this);
        this.F = a;
        this.set("then", ld(this));
        this.set("catch", ld(this, !0));
        this.set("finally", ld(this, !1, !0))
    };
    ra(md, tb);
    var ld = function(a, b, c) {
        b = void 0 === b ? !1 : b;
        c = void 0 === c ? !1 : c;
        return new fd("",function(d, e) {
            b && (e = d,
            d = void 0);
            c && (e = d);
            d instanceof fd || (d = void 0);
            e instanceof fd || (e = void 0);
            var f = Ba(this.h)
              , g = function(m) {
                return function(n) {
                    return c ? (m.invoke(f),
                    a.F) : m.invoke(f, n)
                }
            }
              , h = a.F.then(d && g(d), e && g(e));
            return new md(h)
        }
        )
    };
    var od = function(a, b, c) {
        var d = jd()
          , e = function(g, h) {
            for (var m = jb(g, 1), n = 0; n < m.length; n++)
                h[m[n]] = f(g.get(m[n]))
        }
          , f = function(g) {
            var h = d.get(g);
            if (h)
                return h;
            if (g instanceof sb) {
                var m = [];
                d.set(g, m);
                for (var n = g.ac(), p = 0; p < n.length(); p++)
                    m[n.get(p)] = f(g.get(n.get(p)));
                return m
            }
            if (g instanceof md)
                return g.F;
            if (g instanceof tb) {
                var q = {};
                d.set(g, q);
                e(g, q);
                return q
            }
            if (g instanceof fd) {
                var r = function() {
                    for (var u = Array.prototype.slice.call(arguments, 0), v = 0; v < u.length; v++)
                        u[v] = nd(u[v], b, c);
                    var w = new za(b ? b.W : new ya);
                    b && (w.h = b.h);
                    return f(g.invoke.apply(g, [w].concat(u)))
                };
                d.set(g, r);
                e(g, r);
                return r
            }
            var t = !1;
            switch (c) {
            case 1:
                t = !0;
                break;
            case 2:
                t = !1;
                break;
            case 3:
                t = !1;
                break;
            default:
            }
            if (g instanceof kd && t)
                return g.h;
            switch (typeof g) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
                return g;
            case "object":
                if (null === g)
                    return null
            }
        };
        return f(a)
    }
      , nd = function(a, b, c) {
        var d = jd()
          , e = function(g, h) {
            for (var m in g)
                g.hasOwnProperty(m) && h.set(m, f(g[m]))
        }
          , f = function(g) {
            var h = d.get(g);
            if (h)
                return h;
            if (Ia(g) || Oa(g)) {
                var m = new sb([]);
                d.set(g, m);
                for (var n in g)
                    g.hasOwnProperty(n) && m.set(n, f(g[n]));
                return m
            }
            if (nb(g)) {
                var p = new tb;
                d.set(g, p);
                e(g, p);
                return p
            }
            if ("function" === typeof g) {
                var q = new fd("",function(x) {
                    for (var y = Array.prototype.slice.call(arguments, 0), B = 0; B < y.length; B++)
                        y[B] = od(H(this, y[B]), b, c);
                    return f((0,
                    this.h.M)(g, g, y))
                }
                );
                d.set(g, q);
                e(g, q);
                return q
            }
            var v = typeof g;
            if (null === g || "string" === v || "number" === v || "boolean" === v)
                return g;
            var w = !1;
            switch (c) {
            case 1:
                w = !0;
                break;
            case 2:
                w = !1;
                break;
            default:
            }
            if (void 0 !== g && w)
                return new kd(g)
        };
        return f(a)
    };
    var pd = function() {
        var a = !1;
        return a
    };
    var qd = {
        supportedMethods: "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),
        concat: function(a, b) {
            for (var c = [], d = 0; d < this.length(); d++)
                c.push(this.get(d));
            for (var e = 1; e < arguments.length; e++)
                if (arguments[e]instanceof sb)
                    for (var f = arguments[e], g = 0; g < f.length(); g++)
                        c.push(f.get(g));
                else
                    c.push(arguments[e]);
            return new sb(c)
        },
        every: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
                if (this.has(d) && !b.invoke(a, this.get(d), d, this))
                    return !1;
            return !0
        },
        filter: function(a, b) {
            for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++)
                this.has(e) && b.invoke(a, this.get(e), e, this) && d.push(this.get(e));
            return new sb(d)
        },
        forEach: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
                this.has(d) && b.invoke(a, this.get(d), d, this)
        },
        hasOwnProperty: function(a, b) {
            return this.has(b)
        },
        indexOf: function(a, b, c) {
            var d = this.length()
              , e = void 0 === c ? 0 : Number(c);
            0 > e && (e = Math.max(d + e, 0));
            for (var f = e; f < d; f++)
                if (this.has(f) && this.get(f) === b)
                    return f;
            return -1
        },
        join: function(a, b) {
            for (var c = [], d = 0; d < this.length(); d++)
                c.push(this.get(d));
            return c.join(b)
        },
        lastIndexOf: function(a, b, c) {
            var d = this.length()
              , e = d - 1;
            void 0 !== c && (e = 0 > c ? d + c : Math.min(c, e));
            for (var f = e; 0 <= f; f--)
                if (this.has(f) && this.get(f) === b)
                    return f;
            return -1
        },
        map: function(a, b) {
            for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++)
                this.has(e) && (d[e] = b.invoke(a, this.get(e), e, this));
            return new sb(d)
        },
        pop: function() {
            return this.pop()
        },
        push: function(a, b) {
            return this.push.apply(this, Array.prototype.slice.call(arguments, 1))
        },
        reduce: function(a, b, c) {
            var d = this.length(), e, f = 0;
            if (void 0 !== c)
                e = c;
            else {
                if (0 === d)
                    throw Error("TypeError: Reduce on List with no elements.");
                for (var g = 0; g < d; g++)
                    if (this.has(g)) {
                        e = this.get(g);
                        f = g + 1;
                        break
                    }
                if (g === d)
                    throw Error("TypeError: Reduce on List with no elements.");
            }
            for (var h = f; h < d; h++)
                this.has(h) && (e = b.invoke(a, e, this.get(h), h, this));
            return e
        },
        reduceRight: function(a, b, c) {
            var d = this.length(), e, f = d - 1;
            if (void 0 !== c)
                e = c;
            else {
                if (0 === d)
                    throw Error("TypeError: ReduceRight on List with no elements.");
                for (var g = 1; g <= d; g++)
                    if (this.has(d - g)) {
                        e = this.get(d - g);
                        f = d - (g + 1);
                        break
                    }
                if (g > d)
                    throw Error("TypeError: ReduceRight on List with no elements.");
            }
            for (var h = f; 0 <= h; h--)
                this.has(h) && (e = b.invoke(a, e, this.get(h), h, this));
            return e
        },
        reverse: function() {
            for (var a = pb(this), b = a.length - 1, c = 0; 0 <= b; b--,
            c++)
                a.hasOwnProperty(b) ? this.set(c, a[b]) : this.remove(c);
            return this
        },
        shift: function() {
            return this.shift()
        },
        slice: function(a, b, c) {
            var d = this.length();
            void 0 === b && (b = 0);
            b = 0 > b ? Math.max(d + b, 0) : Math.min(b, d);
            c = void 0 === c ? d : 0 > c ? Math.max(d + c, 0) : Math.min(c, d);
            c = Math.max(b, c);
            for (var e = [], f = b; f < c; f++)
                e.push(this.get(f));
            return new sb(e)
        },
        some: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
                if (this.has(d) && b.invoke(a, this.get(d), d, this))
                    return !0;
            return !1
        },
        sort: function(a, b) {
            var c = pb(this);
            void 0 === b ? c.sort() : c.sort(function(e, f) {
                return Number(b.invoke(a, e, f))
            });
            for (var d = 0; d < c.length; d++)
                c.hasOwnProperty(d) ? this.set(d, c[d]) : this.remove(d);
            return this
        },
        splice: function(a, b, c, d) {
            return this.splice.apply(this, Array.prototype.splice.call(arguments, 1, arguments.length - 1))
        },
        toString: function() {
            return this.toString()
        },
        unshift: function(a, b) {
            return this.unshift.apply(this, Array.prototype.slice.call(arguments, 1))
        }
    };
    var rd = function(a) {
        var b;
        b = Error.call(this, a);
        this.message = b.message;
        "stack"in b && (this.stack = b.stack)
    };
    ra(rd, Error);
    var sd = {
        charAt: 1,
        concat: 1,
        indexOf: 1,
        lastIndexOf: 1,
        match: 1,
        replace: 1,
        search: 1,
        slice: 1,
        split: 1,
        substring: 1,
        toLowerCase: 1,
        toLocaleLowerCase: 1,
        toString: 1,
        toUpperCase: 1,
        toLocaleUpperCase: 1,
        trim: 1
    }
      , td = new wa("break")
      , ud = new wa("continue")
      , vd = function(a, b) {
        return H(this, a) + H(this, b)
    }
      , wd = function(a, b) {
        return H(this, a) && H(this, b)
    }
      , xd = function(a, b, c) {
        a = H(this, a);
        b = H(this, b);
        c = H(this, c);
        if (!(c instanceof sb))
            throw Error("Error: Non-List argument given to Apply instruction.");
        if (null === a || void 0 === a) {
            var d = "TypeError: Can't read property " + b + " of " + a + ".";
            if (pd())
                throw new rd(d);
            throw Error(d);
        }
        var e = "number" === typeof a;
        if ("boolean" === typeof a || e) {
            if ("toString" === b) {
                if (e && c.length()) {
                    var f = od(c.get(0));
                    try {
                        return a.toString(f)
                    } catch (y) {}
                }
                return a.toString()
            }
            var g = "TypeError: " + a + "." + b + " is not a function.";
            if (pd())
                throw new rd(g);
            throw Error(g);
        }
        if ("string" === typeof a) {
            if (sd.hasOwnProperty(b)) {
                var h = 2;
                h = 1;
                var m = od(c, void 0, h);
                return nd(a[b].apply(a, m), this.h)
            }
            var n = "TypeError: " + b + " is not a function";
            if (pd())
                throw new rd(n);
            throw Error(n);
        }
        if (a instanceof sb) {
            if (a.has(b)) {
                var p = a.get(b);
                if (p instanceof fd) {
                    var q = pb(c);
                    q.unshift(this.h);
                    return p.invoke.apply(p, q)
                }
                var r = "TypeError: " + b + " is not a function";
                if (pd())
                    throw new rd(r);
                throw Error(r);
            }
            if (0 <= qd.supportedMethods.indexOf(b)) {
                var t = pb(c);
                t.unshift(this.h);
                return qd[b].apply(a, t)
            }
        }
        if (a instanceof fd || a instanceof tb) {
            if (a.has(b)) {
                var u = a.get(b);
                if (u instanceof fd) {
                    var v = pb(c);
                    v.unshift(this.h);
                    return u.invoke.apply(u, v)
                }
                var w = "TypeError: " + b + " is not a function";
                if (pd())
                    throw new rd(w);
                throw Error(w);
            }
            if ("toString" === b)
                return a instanceof fd ? a.F : a.toString();
            if ("hasOwnProperty" === b)
                return a.has.apply(a, pb(c))
        }
        if (a instanceof kd && "toString" === b)
            return a.toString();
        var x = "TypeError: Object has no '" + b + "' property.";
        if (pd())
            throw new rd(x);
        throw Error(x);
    }
      , yd = function(a, b) {
        a = H(this, a);
        if ("string" !== typeof a)
            throw Error("Invalid key name given for assignment.");
        var c = this.h;
        if (!c.has(a))
            throw Error("Attempting to assign to undefined value " + b);
        var d = H(this, b);
        c.set(a, d);
        return d
    }
      , zd = function(a) {
        var b = Ba(this.h)
          , c = eb(b, Array.prototype.slice.apply(arguments));
        if (c instanceof wa)
            return c
    }
      , Ad = function() {
        return td
    }
      , Bd = function(a) {
        for (var b = H(this, a), c = 0; c < b.length; c++) {
            var d = H(this, b[c]);
            if (d instanceof wa)
                return d
        }
    }
      , Cd = function(a) {
        for (var b = this.h, c = 0; c < arguments.length - 1; c += 2) {
            var d = arguments[c];
            if ("string" === typeof d) {
                var e = H(this, arguments[c + 1]);
                Aa(b, d, e, !0)
            }
        }
    }
      , Dd = function() {
        return ud
    }
      , Ed = function(a, b) {
        return new wa(a,H(this, b))
    }
      , Fd = function(a, b, c) {
        var d = new sb;
        b = H(this, b);
        for (var e = 0; e < b.length; e++)
            d.push(b[e]);
        var f = [51, a, d].concat(Array.prototype.splice.call(arguments, 2, arguments.length - 2));
        this.h.add(a, H(this, f))
    }
      , Gd = function(a, b) {
        return H(this, a) / H(this, b)
    }
      , Hd = function(a, b) {
        a = H(this, a);
        b = H(this, b);
        var c = a instanceof kd
          , d = b instanceof kd;
        return c || d ? c && d ? a.h == b.h : !1 : a == b
    }
      , Id = function(a) {
        for (var b, c = 0; c < arguments.length; c++)
            b = H(this, arguments[c]);
        return b
    };
    function Jd(a, b, c, d) {
        for (var e = 0; e < b(); e++) {
            var f = a(c(e))
              , g = eb(f, d);
            if (g instanceof wa) {
                if ("break" === g.h)
                    break;
                if ("return" === g.h)
                    return g
            }
        }
    }
    function Kd(a, b, c) {
        if ("string" === typeof b)
            return Jd(a, function() {
                return b.length
            }, function(f) {
                return f
            }, c);
        if (b instanceof tb || b instanceof sb || b instanceof fd) {
            var d = b.ac()
              , e = d.length();
            return Jd(a, function() {
                return e
            }, function(f) {
                return d.get(f)
            }, c)
        }
    }
    var Ld = function(a, b, c) {
        a = H(this, a);
        b = H(this, b);
        c = H(this, c);
        var d = this.h;
        return Kd(function(e) {
            d.set(a, e);
            return d
        }, b, c)
    }
      , Md = function(a, b, c) {
        a = H(this, a);
        b = H(this, b);
        c = H(this, c);
        var d = this.h;
        return Kd(function(e) {
            var f = Ba(d);
            Aa(f, a, e, !0);
            return f
        }, b, c)
    }
      , Nd = function(a, b, c) {
        a = H(this, a);
        b = H(this, b);
        c = H(this, c);
        var d = this.h;
        return Kd(function(e) {
            var f = Ba(d);
            f.add(a, e);
            return f
        }, b, c)
    }
      , Pd = function(a, b, c) {
        a = H(this, a);
        b = H(this, b);
        c = H(this, c);
        var d = this.h;
        return Od(function(e) {
            d.set(a, e);
            return d
        }, b, c)
    }
      , Qd = function(a, b, c) {
        a = H(this, a);
        b = H(this, b);
        c = H(this, c);
        var d = this.h;
        return Od(function(e) {
            var f = Ba(d);
            Aa(f, a, e, !0);
            return f
        }, b, c)
    }
      , Rd = function(a, b, c) {
        a = H(this, a);
        b = H(this, b);
        c = H(this, c);
        var d = this.h;
        return Od(function(e) {
            var f = Ba(d);
            f.add(a, e);
            return f
        }, b, c)
    };
    function Od(a, b, c) {
        if ("string" === typeof b)
            return Jd(a, function() {
                return b.length
            }, function(d) {
                return b[d]
            }, c);
        if (b instanceof sb)
            return Jd(a, function() {
                return b.length()
            }, function(d) {
                return b.get(d)
            }, c);
        if (pd())
            throw new rd("The value is not iterable.");
        throw new TypeError("The value is not iterable.");
    }
    var Sd = function(a, b, c, d) {
        function e(p, q) {
            for (var r = 0; r < f.length(); r++) {
                var t = f.get(r);
                q.add(t, p.get(t))
            }
        }
        var f = H(this, a);
        if (!(f instanceof sb))
            throw Error("TypeError: Non-List argument given to ForLet instruction.");
        var g = this.h;
        d = H(this, d);
        var h = Ba(g);
        for (e(g, h); fb(h, b); ) {
            var m = eb(h, d);
            if (m instanceof wa) {
                if ("break" === m.h)
                    break;
                if ("return" === m.h)
                    return m
            }
            var n = Ba(g);
            e(h, n);
            fb(n, c);
            h = n
        }
    }
      , Td = function(a, b, c) {
        var d = this.h
          , e = H(this, b);
        if (!(e instanceof sb))
            throw Error("Error: non-List value given for Fn argument names.");
        var f = Array.prototype.slice.call(arguments, 2);
        return new fd(a,function() {
            return function(g) {
                var h = Ba(d);
                void 0 === h.h && (h.h = this.h.h);
                for (var m = Array.prototype.slice.call(arguments, 0), n = 0; n < m.length; n++)
                    if (m[n] = H(this, m[n]),
                    m[n]instanceof wa)
                        return m[n];
                for (var p = e.get("length"), q = 0; q < p; q++)
                    q < m.length ? h.add(e.get(q), m[q]) : h.add(e.get(q), void 0);
                h.add("arguments", new sb(m));
                var r = eb(h, f);
                if (r instanceof wa)
                    return "return" === r.h ? r.s : r
            }
        }())
    }
      , Ud = function(a) {
        a = H(this, a);
        var b = this.h
          , c = !1;
        if (c && !b.has(a))
            throw new ReferenceError(a + " is not defined.");
        return b.get(a)
    }
      , Vd = function(a, b) {
        var c;
        a = H(this, a);
        b = H(this, b);
        if (void 0 === a || null === a) {
            var d = "TypeError: Cannot read properties of " + a + " (reading '" + b + "')";
            if (pd())
                throw new rd(d);
            throw Error(d);
        }
        if (a instanceof tb || a instanceof sb || a instanceof fd)
            c = a.get(b);
        else if ("string" === typeof a)
            "length" === b ? c = a.length : rb(b) && (c = a[b]);
        else if (a instanceof kd)
            return;
        return c
    }
      , Wd = function(a, b) {
        return H(this, a) > H(this, b)
    }
      , Xd = function(a, b) {
        return H(this, a) >= H(this, b)
    }
      , Yd = function(a, b) {
        a = H(this, a);
        b = H(this, b);
        a instanceof kd && (a = a.h);
        b instanceof kd && (b = b.h);
        return a === b
    }
      , Zd = function(a, b) {
        return !Yd.call(this, a, b)
    }
      , $d = function(a, b, c) {
        var d = [];
        H(this, a) ? d = H(this, b) : c && (d = H(this, c));
        var e = eb(this.h, d);
        if (e instanceof wa)
            return e
    }
      , ae = function(a, b) {
        return H(this, a) < H(this, b)
    }
      , be = function(a, b) {
        return H(this, a) <= H(this, b)
    }
      , ce = function(a) {
        for (var b = new sb, c = 0; c < arguments.length; c++) {
            var d = H(this, arguments[c]);
            b.push(d)
        }
        return b
    }
      , de = function(a) {
        for (var b = new tb, c = 0; c < arguments.length - 1; c += 2) {
            var d = H(this, arguments[c]) + ""
              , e = H(this, arguments[c + 1]);
            b.set(d, e)
        }
        return b
    }
      , ee = function(a, b) {
        return H(this, a) % H(this, b)
    }
      , fe = function(a, b) {
        return H(this, a) * H(this, b)
    }
      , ge = function(a) {
        return -H(this, a)
    }
      , he = function(a) {
        return !H(this, a)
    }
      , ie = function(a, b) {
        return !Hd.call(this, a, b)
    }
      , je = function() {
        return null
    }
      , ke = function(a, b) {
        return H(this, a) || H(this, b)
    }
      , le = function(a, b) {
        var c = H(this, a);
        H(this, b);
        return c
    }
      , me = function(a) {
        return H(this, a)
    }
      , ne = function(a) {
        return Array.prototype.slice.apply(arguments)
    }
      , oe = function(a) {
        return new wa("return",H(this, a))
    }
      , pe = function(a, b, c) {
        a = H(this, a);
        b = H(this, b);
        c = H(this, c);
        if (null === a || void 0 === a) {
            var d = "TypeError: Can't set property " + b + " of " + a + ".";
            if (pd())
                throw new rd(d);
            throw Error(d);
        }
        (a instanceof fd || a instanceof sb || a instanceof tb) && a.set(b, c);
        return c
    }
      , qe = function(a, b) {
        return H(this, a) - H(this, b)
    }
      , re = function(a, b, c) {
        a = H(this, a);
        var d = H(this, b)
          , e = H(this, c);
        if (!Ia(d) || !Ia(e))
            throw Error("Error: Malformed switch instruction.");
        for (var f, g = !1, h = 0; h < d.length; h++)
            if (g || a === H(this, d[h]))
                if (f = H(this, e[h]),
                f instanceof wa) {
                    var m = f.h;
                    if ("break" === m)
                        return;
                    if ("return" === m || "continue" === m)
                        return f
                } else
                    g = !0;
        if (e.length === d.length + 1 && (f = H(this, e[e.length - 1]),
        f instanceof wa && ("return" === f.h || "continue" === f.h)))
            return f
    }
      , se = function(a, b, c) {
        return H(this, a) ? H(this, b) : H(this, c)
    }
      , te = function(a) {
        a = H(this, a);
        return a instanceof fd ? "function" : typeof a
    }
      , ue = function(a) {
        for (var b = this.h, c = 0; c < arguments.length; c++) {
            var d = arguments[c];
            "string" !== typeof d || b.add(d, void 0)
        }
    }
      , ve = function(a, b, c, d) {
        var e = H(this, d);
        if (H(this, c)) {
            var f = eb(this.h, e);
            if (f instanceof wa) {
                if ("break" === f.h)
                    return;
                if ("return" === f.h)
                    return f
            }
        }
        for (; H(this, a); ) {
            var g = eb(this.h, e);
            if (g instanceof wa) {
                if ("break" === g.h)
                    break;
                if ("return" === g.h)
                    return g
            }
            H(this, b)
        }
    }
      , we = function(a) {
        return ~Number(H(this, a))
    }
      , xe = function(a, b) {
        return Number(H(this, a)) << Number(H(this, b))
    }
      , ye = function(a, b) {
        return Number(H(this, a)) >> Number(H(this, b))
    }
      , ze = function(a, b) {
        return Number(H(this, a)) >>> Number(H(this, b))
    }
      , Ae = function(a, b) {
        return Number(H(this, a)) & Number(H(this, b))
    }
      , Be = function(a, b) {
        return Number(H(this, a)) ^ Number(H(this, b))
    }
      , Ce = function(a, b) {
        return Number(H(this, a)) | Number(H(this, b))
    }
      , De = function() {}
      , Ee = function(a, b, c, d, e) {
        var f = !0;
        try {
            var g = H(this, c);
            if (g instanceof wa)
                return g
        } catch (r) {
            if (!(r instanceof rd && a))
                throw f = r instanceof rd,
                r;
            var h = Ba(this.h)
              , m = new kd(r);
            h.add(b, m);
            var n = H(this, d)
              , p = eb(h, n);
            if (p instanceof wa)
                return p
        } finally {
            if (f && void 0 !== e) {
                var q = H(this, e);
                if (q instanceof wa)
                    return q
            }
        }
    };
    var Ge = function() {
        this.h = new hb;
        Fe(this)
    };
    Ge.prototype.execute = function(a) {
        return this.h.s(a)
    }
    ;
    var Fe = function(a) {
        var b = function(c, d) {
            var e = new fd(String(c),d);
            e.Jb();
            a.h.h.set(String(c), e)
        };
        b("map", de);
        b("and", Zc);
        b("contains", bd);
        b("equals", $c);
        b("or", ad);
        b("startsWith", cd);
        b("variable", ed)
    };
    var Ie = function() {
        this.h = new hb;
        He(this)
    };
    Ie.prototype.execute = function(a) {
        return Je(this.h.s(a))
    }
    ;
    var Ke = function(a, b, c) {
        return Je(a.h.F(b, c))
    }
      , He = function(a) {
        var b = function(c, d) {
            var e = String(c)
              , f = new fd(e,d);
            f.Jb();
            a.h.h.set(e, f)
        };
        b(0, vd);
        b(1, wd);
        b(2, xd);
        b(3, yd);
        b(56, Ae);
        b(57, xe);
        b(58, we);
        b(59, Ce);
        b(60, ye);
        b(61, ze);
        b(62, Be);
        b(53, zd);
        b(4, Ad);
        b(5, Bd);
        b(52, Cd);
        b(6, Dd);
        b(49, Ed);
        b(7, ce);
        b(8, de);
        b(9, Bd);
        b(50, Fd);
        b(10, Gd);
        b(12, Hd);
        b(13, Id);
        b(51, Td);
        b(47, Ld);
        b(54, Md);
        b(55, Nd);
        b(63, Sd);
        b(64, Pd);
        b(65, Qd);
        b(66, Rd);
        b(15, Ud);
        b(16, Vd);
        b(17, Vd);
        b(18, Wd);
        b(19, Xd);
        b(20, Yd);
        b(21, Zd);
        b(22, $d);
        b(23, ae);
        b(24, be);
        b(25, ee);
        b(26, fe);
        b(27, ge);
        b(28, he);
        b(29, ie);
        b(45, je);
        b(30, ke);
        b(32, le);
        b(33, le);
        b(34, me);
        b(35, me);
        b(46, ne);
        b(36, oe);
        b(43, pe);
        b(37, qe);
        b(38, re);
        b(39, se);
        b(67, Ee);
        b(40, te);
        b(44, De);
        b(41, ue);
        b(42, ve)
    };
    function Je(a) {
        if (a instanceof wa || a instanceof fd || a instanceof sb || a instanceof tb || a instanceof kd || null === a || void 0 === a || "string" === typeof a || "number" === typeof a || "boolean" === typeof a)
            return a
    }
    ;var Ne = function(a) {
        this.message = a
    };
    function Oe(a) {
        var b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[a];
        return void 0 === b ? new Ne("Value " + a + " can not be encoded in web-safe base64 dictionary.") : b
    }
    ;function Pe(a) {
        switch (a) {
        case 1:
            return "1";
        case 2:
        case 4:
            return "0";
        default:
            return "-"
        }
    }
    ;var Qe = function() {
        var a = function(b) {
            return {
                toString: function() {
                    return b
                }
            }
        };
        return {
            uk: a("consent"),
            ni: a("convert_case_to"),
            oi: a("convert_false_to"),
            ri: a("convert_null_to"),
            si: a("convert_true_to"),
            ui: a("convert_undefined_to"),
            Dn: a("debug_mode_metadata"),
            ma: a("function"),
            bh: a("instance_name"),
            Vk: a("live_only"),
            Wk: a("malware_disabled"),
            Xk: a("metadata"),
            al: a("original_activity_id"),
            Sn: a("original_vendor_template_id"),
            Rn: a("once_on_load"),
            Zk: a("once_per_event"),
            qj: a("once_per_load"),
            Wn: a("priority_override"),
            Xn: a("respected_consent_types"),
            vj: a("setup_tags"),
            we: a("tag_id"),
            Aj: a("teardown_tags")
        }
    }();
    var mf;
    var nf = [], of = [], pf = [], qf = [], rf = [], sf = {}, tf, uf, vf = function(a) {
        uf = uf || a
    }, wf = function(a) {}, xf, yf = [], zf = [], Af = function(a, b) {
        var c = {};
        c[Qe.ma] = "__" + a;
        for (var d in b)
            b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
        return c
    }, Bf = function(a, b) {
        var c = a[Qe.ma]
          , d = b && b.event;
        if (!c)
            throw Error("Error: No function name given for function call.");
        var e = sf[c], f = b && 2 === b.type && d.reportMacroDiscrepancy && e && -1 !== yf.indexOf(c), g = {}, h = {}, m;
        for (m in a)
            a.hasOwnProperty(m) && 0 === m.indexOf("vtp_") && (e && (g[m] = a[m]),
            !e || f) && (h[m.substr(4)] = a[m]);
        e && d && d.cachedModelValues && (g.vtp_gtmCachedValues = d.cachedModelValues);
        if (b) {
            if (null == b.name) {
                var n;
                a: {
                    var p = b.type
                      , q = b.index;
                    if (null == q)
                        n = "";
                    else {
                        var r;
                        switch (p) {
                        case 2:
                            r = nf[q];
                            break;
                        case 1:
                            r = qf[q];
                            break;
                        default:
                            n = "";
                            break a
                        }
                        var t = r && r[Qe.bh];
                        n = t ? String(t) : ""
                    }
                }
                b.name = n
            }
            e && (g.vtp_gtmEntityIndex = b.index,
            g.vtp_gtmEntityName = b.name)
        }
        var u, v, w;
        if (f && -1 === zf.indexOf(c)) {
            zf.push(c);
            var x = Ua();
            u = e(g);
            var y = Ua() - x
              , B = Ua();
            v = mf(c, h, b);
            w = y - (Ua() - B)
        } else if (e && (u = e(g)),
        !e || f)
            v = mf(c, h, b);
        f && d && (d.reportMacroDiscrepancy(d.id, c, void 0, !0),
        qb(u) ? (Ia(u) ? Ia(v) : nb(u) ? nb(v) : u === v) || d.reportMacroDiscrepancy(d.id, c) : u !== v && d.reportMacroDiscrepancy(d.id, c),
        void 0 != w && d.reportMacroDiscrepancy(d.id, c, w));
        return e ? u : v
    }, Df = function(a, b, c) {
        c = c || [];
        var d = {}, e;
        for (e in a)
            a.hasOwnProperty(e) && (d[e] = Cf(a[e], b, c));
        return d
    }, Cf = function(a, b, c) {
        if (Ia(a)) {
            var d;
            switch (a[0]) {
            case "function_id":
                return a[1];
            case "list":
                d = [];
                for (var e = 1; e < a.length; e++)
                    d.push(Cf(a[e], b, c));
                return d;
            case "macro":
                var f = a[1];
                if (c[f])
                    return;
                var g = nf[f];
                if (!g || b.isBlocked(g))
                    return;
                c[f] = !0;
                var h = String(g[Qe.bh]);
                try {
                    var m = Df(g, b, c);
                    m.vtp_gtmEventId = b.id;
                    b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
                    d = Bf(m, {
                        event: b,
                        index: f,
                        type: 2,
                        name: h
                    });
                    xf && (d = xf.Cl(d, m))
                } catch (y) {
                    b.logMacroError && b.logMacroError(y, Number(f), h),
                    d = !1
                }
                c[f] = !1;
                return d;
            case "map":
                d = {};
                for (var n = 1; n < a.length; n += 2)
                    d[Cf(a[n], b, c)] = Cf(a[n + 1], b, c);
                return d;
            case "template":
                d = [];
                for (var p = !1, q = 1; q < a.length; q++) {
                    var r = Cf(a[q], b, c);
                    uf && (p = p || uf.sm(r));
                    d.push(r)
                }
                return uf && p ? uf.El(d) : d.join("");
            case "escape":
                d = Cf(a[1], b, c);
                if (uf && Ia(a[1]) && "macro" === a[1][0] && uf.vm(a))
                    return uf.Vm(d);
                d = String(d);
                for (var t = 2; t < a.length; t++)
                    Re[a[t]] && (d = Re[a[t]](d));
                return d;
            case "tag":
                var u = a[1];
                if (!qf[u])
                    throw Error("Unable to resolve tag reference " + u + ".");
                return d = {
                    Kj: a[2],
                    index: u
                };
            case "zb":
                var v = {
                    arg0: a[2],
                    arg1: a[3],
                    ignore_case: a[5]
                };
                v[Qe.ma] = a[1];
                var w = Ef(v, b, c)
                  , x = !!a[4];
                return x || 2 !== w ? x !== (1 === w) : null;
            default:
                throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
            }
        }
        return a
    }, Ef = function(a, b, c) {
        try {
            return tf(Df(a, b, c))
        } catch (d) {
            JSON.stringify(a)
        }
        return 2
    }, Ff = function(a) {
        var b = a[Qe.ma];
        if (!b)
            throw Error("Error: No function name given for function call.");
        return !!sf[b]
    };
    var Gf = function(a, b, c) {
        var d;
        d = Error.call(this, c);
        this.message = d.message;
        "stack"in d && (this.stack = d.stack);
        this.h = a
    };
    ra(Gf, Error);
    function Hf(a, b) {
        if (Ia(a)) {
            Object.defineProperty(a, "context", {
                value: {
                    line: b[0]
                }
            });
            for (var c = 1; c < a.length; c++)
                Hf(a[c], b[c])
        }
    }
    ;var If = function(a, b) {
        var c;
        c = Error.call(this);
        this.message = c.message;
        "stack"in c && (this.stack = c.stack);
        this.Qm = a;
        this.s = b;
        this.h = []
    };
    ra(If, Error);
    var Kf = function() {
        return function(a, b) {
            a instanceof If || (a = new If(a,Jf));
            b && a.h.push(b);
            throw a;
        }
    };
    function Jf(a) {
        if (!a.length)
            return a;
        a.push({
            id: "main",
            line: 0
        });
        for (var b = a.length - 1; 0 < b; b--)
            Ha(a[b].id) && a.splice(b++, 1);
        for (var c = a.length - 1; 0 < c; c--)
            a[c].line = a[c - 1].line;
        a.splice(0, 1);
        return a
    }
    ;var Nf = function(a) {
        function b(r) {
            for (var t = 0; t < r.length; t++)
                d[r[t]] = !0
        }
        for (var c = [], d = [], e = Lf(a), f = 0; f < of.length; f++) {
            var g = of[f]
              , h = Mf(g, e);
            if (h) {
                for (var m = g.add || [], n = 0; n < m.length; n++)
                    c[m[n]] = !0;
                b(g.block || [])
            } else
                null === h && b(g.block || []);
        }
        for (var p = [], q = 0; q < qf.length; q++)
            c[q] && !d[q] && (p[q] = !0);
        return p
    }
      , Mf = function(a, b) {
        for (var c = a["if"] || [], d = 0; d < c.length; d++) {
            var e = b(c[d]);
            if (0 === e)
                return !1;
            if (2 === e)
                return null
        }
        for (var f = a.unless || [], g = 0; g < f.length; g++) {
            var h = b(f[g]);
            if (2 === h)
                return null;
            if (1 === h)
                return !1
        }
        return !0
    }
      , Lf = function(a) {
        var b = [];
        return function(c) {
            void 0 === b[c] && (b[c] = Ef(pf[c], a));
            return b[c]
        }
    };
    var Of = {
        Cl: function(a, b) {
            b[Qe.ni] && "string" === typeof a && (a = 1 == b[Qe.ni] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(Qe.ri) && null === a && (a = b[Qe.ri]);
            b.hasOwnProperty(Qe.ui) && void 0 === a && (a = b[Qe.ui]);
            b.hasOwnProperty(Qe.si) && !0 === a && (a = b[Qe.si]);
            b.hasOwnProperty(Qe.oi) && !1 === a && (a = b[Qe.oi]);
            return a
        }
    };
    var Pf = function() {
        this.h = {}
    }
      , Rf = function(a, b) {
        var c = Qf.s, d;
        null != (d = c.h)[a] || (d[a] = []);
        c.h[a].push(function() {
            return b.apply(null, ja(ta.apply(0, arguments)))
        })
    };
    function Sf(a, b, c, d) {
        if (a)
            for (var e = 0; e < a.length; e++) {
                var f = void 0
                  , g = "A policy function denied the permission request";
                try {
                    f = a[e](b, c, d),
                    g += "."
                } catch (h) {
                    g = "string" === typeof h ? g + (": " + h) : h instanceof Error ? g + (": " + h.message) : g + "."
                }
                if (!f)
                    throw new Gf(c,d,g);
            }
    }
    function Tf(a, b, c) {
        return function() {
            var d = arguments[0];
            if (d) {
                var e = a.h[d]
                  , f = a.h.all;
                if (e || f) {
                    var g = c.apply(void 0, Array.prototype.slice.call(arguments, 0));
                    Sf(e, b, d, g);
                    Sf(f, b, d, g)
                }
            }
        }
    }
    ;var Uf = []
      , Vf = {}
      , Wf = function(a) {
        return void 0 == Uf[a] ? !1 : Uf[a]
    };
    var $f = function() {
        var a = data.permissions || {}
          , b = Xf.ctid
          , c = this;
        this.s = new Pf;
        this.h = {};
        var d = Wf(15)
          , e = {}
          , f = {}
          , g = Tf(this.s, b, function() {
            var h = arguments[0];
            return h && e[h] ? e[h].apply(void 0, Array.prototype.slice.call(arguments, 0)) : {}
        });
        Na(a, function(h, m) {
            var n = {};
            Na(m, function(q, r) {
                var t = Yf(q, r);
                n[q] = t.assert;
                e[q] || (e[q] = t.K);
                d && t.Dj && !f[q] && (f[q] = t.Dj)
            });
            var p;
            d && (p = function(q) {
                var r = ta.apply(1, arguments);
                if (!n[q])
                    throw Zf(q, {}, "The requested additional permission " + q + " is not configured.");
                g.apply(null, [q].concat(ja(r)))
            }
            );
            c.h[h] = function(q, r) {
                var t = n[q];
                if (!t)
                    throw Zf(q, {}, "The requested permission " + q + " is not configured.");
                var u = Array.prototype.slice.call(arguments, 0);
                t.apply(void 0, u);
                g.apply(void 0, u);
                if (d) {
                    var v = f[q];
                    v && v.apply(null, [p].concat(ja(u.slice(1))))
                }
            }
        })
    }
      , ag = function(a) {
        return Qf.h[a] || function() {}
    };
    function Yf(a, b) {
        var c = Af(a, b);
        c.vtp_permissionName = a;
        c.vtp_createPermissionError = Zf;
        try {
            return Bf(c)
        } catch (d) {
            return {
                assert: function(e) {
                    throw new Gf(e,{},"Permission " + e + " is unknown.");
                },
                K: function() {
                    if (Wf(15))
                        throw new Gf(a,{},"Permission " + a + " is unknown.");
                    for (var e = {}, f = 0; f < arguments.length; ++f)
                        e["arg" + (f + 1)] = arguments[f];
                    return e
                }
            }
        }
    }
    function Zf(a, b, c) {
        return new Gf(a,b,c)
    }
    ;var bg = !1;
    var cg = {};
    cg.xn = Qa('');
    cg.Hl = Qa('');
    var dg = bg
      , eg = cg.Hl
      , fg = cg.xn;
    var jg = function(a) {
        var b = {}
          , c = 0;
        Na(a, function(e, f) {
            if (null != f)
                if (f = ("" + f).replace(/~/g, "~~"),
                gg.hasOwnProperty(e))
                    b[gg[e]] = f;
                else if (hg.hasOwnProperty(e)) {
                    var g = hg[e]
                      , h = f;
                    b.hasOwnProperty(g) || (b[g] = h)
                } else if ("category" === e)
                    for (var m = f.split("/", 5), n = 0; n < m.length; n++) {
                        var p = b
                          , q = ig[n]
                          , r = m[n];
                        p.hasOwnProperty(q) || (p[q] = r)
                    }
                else if (27 > c) {
                    var t = String.fromCharCode(10 > c ? 48 + c : 65 + c - 10);
                    b["k" + t] = ("" + String(e)).replace(/~/g, "~~");
                    b["v" + t] = f;
                    c++
                }
        });
        var d = [];
        Na(b, function(e, f) {
            d.push("" + e + f)
        });
        return d.join("~")
    }
      , gg = {
        item_id: "id",
        item_name: "nm",
        item_brand: "br",
        item_category: "ca",
        item_category2: "c2",
        item_category3: "c3",
        item_category4: "c4",
        item_category5: "c5",
        item_variant: "va",
        price: "pr",
        quantity: "qt",
        coupon: "cp",
        item_list_name: "ln",
        index: "lp",
        item_list_id: "li",
        discount: "ds",
        affiliation: "af",
        promotion_id: "pi",
        promotion_name: "pn",
        creative_name: "cn",
        creative_slot: "cs",
        location_id: "lo"
    }
      , hg = {
        id: "id",
        name: "nm",
        brand: "br",
        variant: "va",
        list_name: "ln",
        list_position: "lp",
        list: "ln",
        position: "lp",
        creative: "cn"
    }
      , ig = ["ca", "c2", "c3", "c4", "c5"];
    var kg = function(a) {
        var b = [];
        Na(a, function(c, d) {
            null != d && b.push(encodeURIComponent(c) + "=" + encodeURIComponent(String(d)))
        });
        return b.join("&")
    }
      , lg = function(a, b, c, d) {
        this.oa = a.oa;
        this.Oc = a.Oc;
        this.sh = a.sh;
        this.s = b;
        this.F = c;
        this.C = kg(a.oa);
        this.h = kg(a.sh);
        this.M = this.h.length;
        if (d && 16384 < this.M)
            throw Error("EVENT_TOO_LARGE");
    };
    var mg = function() {
        this.events = [];
        this.h = "";
        this.oa = {};
        this.s = "";
        this.F = 0;
        this.M = this.C = !1;
    };
    mg.prototype.add = function(a) {
        return this.W(a) ? (this.events.push(a),
        this.h = a.C,
        this.oa = a.oa,
        this.s = a.s,
        this.F += a.M,
        this.C = a.F,
        !0) : !1
    }
    ;
    mg.prototype.W = function(a) {
        return this.events.length ? 20 <= this.events.length || 16384 <= a.M + this.F ? !1 : this.s === a.s && this.C === a.F && this.Da(a) : !0
    }
    ;
    mg.prototype.Da = function(a) {
        var b = this;
        if (this.M) {
            var c = Object.keys(this.oa);
            return c.length === Object.keys(a.oa).length && c.every(function(d) {
                return a.oa.hasOwnProperty(d) && String(b.oa[d]) === String(a.oa[d])
            })
        }
        return this.h === a.C
    }
    ;
    var ng = function(a, b) {
        Na(a, function(c, d) {
            null != d && b.push(encodeURIComponent(c) + "=" + encodeURIComponent(d))
        })
    }
      , og = function(a, b) {
        var c = [];
        a.C && c.push(a.C);
        b && c.push("_s=" + b);
        ng(a.Oc, c);
        var d = !1;
        a.h && (c.push(a.h),
        d = !0);
        var e = c.join("&")
          , f = ""
          , g = e.length + a.s.length + 1;
        d && 2048 < g && (f = c.pop(),
        e = c.join("&"));
        return {
            params: e,
            body: f
        }
    }
      , pg = function(a, b) {
        var c = a.events;
        if (1 == c.length)
            return og(c[0], b);
        var d = [];
        a.h && d.push(a.h);
        for (var e = {}, f = 0; f < c.length; f++)
            Na(c[f].Oc, function(t, u) {
                null != u && (e[t] = e[t] || {},
                e[t][String(u)] = e[t][String(u)] + 1 || 1)
            });
        var g = {};
        Na(e, function(t, u) {
            var v, w = -1, x = 0;
            Na(u, function(y, B) {
                x += B;
                var A = (y.length + t.length + 2) * (B - 1);
                A > w && (v = y,
                w = A)
            });
            x == c.length && (g[t] = v)
        });
        ng(g, d);
        b && d.push("_s=" + b);
        for (var h = d.join("&"), m = [], n = {}, p = 0; p < c.length; n = {
            Lh: void 0
        },
        p++) {
            var q = [];
            n.Lh = {};
            Na(c[p].Oc, function(t) {
                return function(u, v) {
                    g[u] != "" + v && (t.Lh[u] = v)
                }
            }(n));
            c[p].h && q.push(c[p].h);
            ng(n.Lh, q);
            m.push(q.join("&"))
        }
        var r = m.join("\r\n");
        return {
            params: h,
            body: r
        }
    };
    var tg = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];
    function ug(a, b) {
        a = String(a);
        b = String(b);
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) === c
    }
    var vg = new La;
    function wg(a, b, c) {
        var d = c ? "i" : void 0;
        try {
            var e = String(b) + d
              , f = vg.get(e);
            f || (f = new RegExp(b,d),
            vg.set(e, f));
            return f.test(a)
        } catch (g) {
            return !1
        }
    }
    function xg(a, b) {
        return 0 <= String(a).indexOf(String(b))
    }
    function yg(a, b) {
        return String(a) === String(b)
    }
    function zg(a, b) {
        return Number(a) >= Number(b)
    }
    function Ag(a, b) {
        return Number(a) <= Number(b)
    }
    function Bg(a, b) {
        return Number(a) > Number(b)
    }
    function Cg(a, b) {
        return Number(a) < Number(b)
    }
    function Dg(a, b) {
        return 0 === String(a).indexOf(String(b))
    }
    ;var Kg = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;
    function Lg(a, b) {
        for (var c = "", d = !0; 7 < a; ) {
            var e = a & 31;
            a >>= 5;
            d ? d = !1 : e |= 32;
            c = Oe(e) + c
        }
        a <<= 2;
        d || (a |= 32);
        return c = Oe(a | b) + c
    }
    ;var Mg = /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|PixieMap|List|OpaqueValue)$/i
      , Ng = {
        Fn: "function",
        PixieMap: "Object",
        List: "Array"
    }
      , J = function(a, b, c) {
        for (var d = 0; d < b.length; d++) {
            var e = Mg.exec(b[d]);
            if (!e)
                throw Error("Internal Error in " + a);
            var f = e[1]
              , g = "!" === e[2]
              , h = e[3]
              , m = c[d];
            if (null == m) {
                if (g)
                    throw Error("Error in " + a + ". Required argument " + f + " not supplied.");
            } else if ("*" !== h) {
                var n = typeof m;
                m instanceof fd ? n = "Fn" : m instanceof sb ? n = "List" : m instanceof tb ? n = "PixieMap" : m instanceof kd && (n = "OpaqueValue");
                if (n != h)
                    throw Error("Error in " + a + ". Argument " + f + " has type " + (Ng[n] || n) + ", which does not match required type " + (Ng[h] || h) + ".");
            }
        }
    };
    function Og(a) {
        return "" + a
    }
    function Pg(a, b) {
        var c = [];
        return c
    }
    ;var Qg = function(a, b) {
        var c = new fd(a,function() {
            for (var d = Array.prototype.slice.call(arguments, 0), e = 0; e < d.length; e++)
                d[e] = H(this, d[e]);
            try {
                return b.apply(this, d)
            } catch (g) {
                if (pd())
                    throw new rd(g.message);
                throw g;
            }
        }
        );
        c.Jb();
        return c
    }
      , Rg = function(a, b) {
        var c = new tb, d;
        for (d in b)
            if (b.hasOwnProperty(d)) {
                var e = b[d];
                Ga(e) ? c.set(d, Qg(a + "_" + d, e)) : nb(e) ? c.set(d, Rg(a + "_" + d, e)) : (Ha(e) || k(e) || "boolean" === typeof e) && c.set(d, e)
            }
        c.Jb();
        return c
    };
    var Sg = function(a, b) {
        J(I(this), ["apiName:!string", "message:?string"], arguments);
        var c = {}
          , d = new tb;
        return d = Rg("AssertApiSubject", c)
    };
    var Tg = function(a, b) {
        J(I(this), ["actual:?*", "message:?string"], arguments);
        if (a instanceof md)
            throw Error("Argument actual cannot have type Promise. Assertions on asynchronous code aren't supported.");
        var c = {}
          , d = new tb;
        return d = Rg("AssertThatSubject", c)
    };
    function Ug(a) {
        return function() {
            for (var b = [], c = this.h, d = 0; d < arguments.length; ++d)
                b.push(od(arguments[d], c));
            return nd(a.apply(null, b))
        }
    }
    var Wg = function() {
        for (var a = Math, b = Vg, c = {}, d = 0; d < b.length; d++) {
            var e = b[d];
            a.hasOwnProperty(e) && (c[e] = Ug(a[e].bind(a)))
        }
        return c
    };
    var Xg = function(a) {
        var b;
        return b
    };
    var Yg = function(a) {
        var b;
        return b
    };
    var Zg = function(a) {
        try {
            return encodeURI(a)
        } catch (b) {}
    };
    var $g = function(a) {
        try {
            return encodeURIComponent(a)
        } catch (b) {}
    };
    function ah(a, b) {
        var c = !1;
        J(I(this), ["booleanExpression:!string", "context:?PixieMap"], arguments);
        var d = JSON.parse(a);
        if (!d)
            throw Error("Invalid boolean expression string was given.");
        var e = b ? od(b) : {};
        c = bh(d, e);
        return c
    }
    var ch = function(a, b) {
        for (var c = 0; c < b.length; c++) {
            if (void 0 === a)
                return;
            a = a[b[c]]
        }
        return a
    }
      , dh = function(a, b) {
        var c = b.preHit;
        if (c) {
            var d = a[0];
            switch (d) {
            case "hitData":
                return 2 > a.length ? void 0 : ch(c.getHitData(a[1]), a.slice(2));
            case "metadata":
                return 2 > a.length ? void 0 : ch(c.getMetadata(a[1]), a.slice(2));
            case "eventName":
                return c.getEventName();
            case "destinationId":
                return c.getDestinationId();
            default:
                throw Error(d + " is not a valid field that can be accessed\n                      from PreHit data.");
            }
        }
    }
      , eh = function(a, b) {
        if (a) {
            if (void 0 !== a.contextValue) {
                var c;
                a: {
                    var d = a.contextValue
                      , e = d.keyParts;
                    if (e && 0 !== e.length) {
                        var f = d.namespaceType;
                        switch (f) {
                        case 1:
                            c = dh(e, b);
                            break a;
                        case 2:
                            var g = b.macro;
                            c = g ? g[e[0]] : void 0;
                            break a;
                        default:
                            throw Error("Unknown Namespace Type used: " + f);
                        }
                    }
                    c = void 0
                }
                return c
            }
            if (void 0 !== a.booleanExpressionValue)
                return bh(a.booleanExpressionValue, b);
            if (void 0 !== a.booleanValue)
                return !!a.booleanValue;
            if (void 0 !== a.stringValue)
                return String(a.stringValue);
            if (void 0 !== a.integerValue)
                return Number(a.integerValue);
            if (void 0 !== a.doubleValue)
                return Number(a.doubleValue);
            throw Error("Unknown field used for variable of type ExpressionValue:" + a);
        }
    }
      , bh = function(a, b) {
        var c = a.args;
        if (!Ia(c) || 0 === c.length)
            throw Error('Invalid boolean expression format. Expected "args":' + c + " property to\n         be non-empty array.");
        var d = function(g) {
            return eh(g, b)
        };
        switch (a.type) {
        case 1:
            for (var e = 0; e < c.length; e++)
                if (d(c[e]))
                    return !0;
            return !1;
        case 2:
            for (var f = 0; f < c.length; f++)
                if (!d(c[f]))
                    return !1;
            return 0 < c.length;
        case 3:
            return !d(c[0]);
        case 4:
            return wg(d(c[0]), d(c[1]), !1);
        case 5:
            return yg(d(c[0]), d(c[1]));
        case 6:
            return Dg(d(c[0]), d(c[1]));
        case 7:
            return ug(d(c[0]), d(c[1]));
        case 8:
            return xg(d(c[0]), d(c[1]));
        case 9:
            return Cg(d(c[0]), d(c[1]));
        case 10:
            return Ag(d(c[0]), d(c[1]));
        case 11:
            return Bg(d(c[0]), d(c[1]));
        case 12:
            return zg(d(c[0]), d(c[1]));
        default:
            throw Error('Invalid boolean expression format. Expected "type" property tobe a positive integer which is less than 13.');
        }
    };
    ah.D = "internal.evaluateBooleanExpression";
    var fh = function(a) {
        J(I(this), ["message:?string"], arguments);
    };
    var gh = function(a, b) {
        J(I(this), ["min:!number", "max:!number"], arguments);
        return Ka(a, b)
    };
    var kh = function() {
        return (new Date).getTime()
    };
    var lh = function(a) {
        if (null === a)
            return "null";
        if (a instanceof sb)
            return "array";
        if (a instanceof fd)
            return "function";
        if (a instanceof kd) {
            a = a.h;
            if (void 0 === a.constructor || void 0 === a.constructor.name) {
                var b = String(a);
                return b.substring(8, b.length - 1)
            }
            return String(a.constructor.name)
        }
        return typeof a
    };
    var mh = function(a) {
        function b(c) {
            return function(d) {
                try {
                    return c(d)
                } catch (e) {
                    (dg || fg) && a.call(this, e.message)
                }
            }
        }
        return {
            parse: b(function(c) {
                return nd(JSON.parse(c))
            }),
            stringify: b(function(c) {
                return JSON.stringify(od(c))
            })
        }
    };
    var nh = function(a) {
        return Pa(od(a, this.h))
    };
    var oh = function(a) {
        return Number(od(a, this.h))
    };
    var ph = function(a) {
        return null === a ? "null" : void 0 === a ? "undefined" : a.toString()
    };
    var qh = function(a, b, c) {
        var d = null
          , e = !1;
        return e ? d : null
    };
    var Vg = "floor ceil round max min abs pow sqrt".split(" ");
    var rh = function() {
        var a = {};
        return {
            Tl: function(b) {
                return a.hasOwnProperty(b) ? a[b] : void 0
            },
            qn: function(b, c) {
                a[b] = c
            },
            reset: function() {
                a = {}
            }
        }
    }
      , sh = function(a, b) {
        return function() {
            var c = Array.prototype.slice.call(arguments, 0);
            c.unshift(b);
            return fd.prototype.invoke.apply(a, c)
        }
    }
      , th = function(a, b) {
        J(I(this), ["apiName:!string", "mock:?*"], arguments);
    };
    var uh = {};
    uh.keys = function(a) {
        return new sb
    }
    ;
    uh.values = function(a) {
        return new sb
    }
    ;
    uh.entries = function(a) {
        return new sb
    }
    ;
    uh.freeze = function(a) {
        return a
    }
    ;
    uh.delete = function(a, b) {
        return !1
    }
    ;
    var K = function(a, b, c) {
        var d = a.h.h;
        if (!d)
            throw Error("Missing program state.");
        if (d.fn) {
            try {
                d.Fj.apply(null, Array.prototype.slice.call(arguments, 1))
            } catch (e) {
                throw Bb("TAGGING", 21),
                e;
            }
            return
        }
        d.Fj.apply(null, Array.prototype.slice.call(arguments, 1))
    };
    var wh = function() {
        this.h = {};
        this.s = {};
    };
    wh.prototype.get = function(a, b) {
        var c = this.h.hasOwnProperty(a) ? this.h[a] : void 0;
        return c
    }
    ;
    wh.prototype.add = function(a, b, c) {
        if (this.h.hasOwnProperty(a))
            throw "Attempting to add a function which already exists: " + a + ".";
        if (this.s.hasOwnProperty(a))
            throw "Attempting to add an API with an existing private API name: " + a + ".";
        this.h[a] = c ? void 0 : Ga(b) ? Qg(a, b) : Rg(a, b)
    }
    ;
    function xh(a, b) {
        var c = void 0;
        return c
    }
    ;function yh() {
        var a = {};
        return a
    }
    ;var Ah = function(a) {
        return zh ? z.querySelectorAll(a) : null
    }
      , Bh = function(a, b) {
        if (!zh)
            return null;
        if (Element.prototype.closest)
            try {
                return a.closest(b)
            } catch (e) {
                return null
            }
        var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector
          , d = a;
        if (!z.documentElement.contains(d))
            return null;
        do {
            try {
                if (c.call(d, b))
                    return d
            } catch (e) {
                break
            }
            d = d.parentElement || d.parentNode
        } while (null !== d && 1 === d.nodeType);
        return null
    }
      , Ch = !1;
    if (z.querySelectorAll)
        try {
            var Dh = z.querySelectorAll(":root");
            Dh && 1 == Dh.length && Dh[0] == z.documentElement && (Ch = !0)
        } catch (a) {}
    var zh = Ch;
    var L = function(a) {
        Bb("GTM", a)
    };
    var Eh = function(a) {
        return null == a ? "" : k(a) ? Sa(String(a)) : "e0"
    }
      , Gh = function(a) {
        return a.replace(Fh, "")
    }
      , Ih = function(a) {
        return Hh(a.replace(/\s/g, ""))
    }
      , Hh = function(a) {
        return Sa(a.replace(Jh, "").toLowerCase())
    }
      , Lh = function(a) {
        a = a.replace(/[\s-()/.]/g, "");
        "+" !== a.charAt(0) && (a = "+" + a);
        return Kh.test(a) ? a : "e0"
    }
      , Nh = function(a) {
        var b = a.toLowerCase().split("@");
        if (2 == b.length) {
            var c = b[0];
            /^(gmail|googlemail)\./.test(b[1]) && (c = c.replace(/\./g, ""));
            c = c + "@" + b[1];
            if (Mh.test(c))
                return c
        }
        return "e0"
    }
      , Qh = function(a) {
        if ("" === a || "e0" === a)
            return Promise.resolve(a);
        if (l.crypto && l.crypto.subtle) {
            if (Oh.test(a))
                return Promise.resolve(a);
            try {
                var b = Ph(a);
                return l.crypto.subtle.digest("SHA-256", b).then(function(c) {
                    var d = Array.from(new Uint8Array(c)).map(function(e) {
                        return String.fromCharCode(e)
                    }).join("");
                    return l.btoa(d).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
                }).catch(function() {
                    return "e2"
                })
            } catch (c) {
                return Promise.resolve("e2")
            }
        } else
            return Promise.resolve("e1")
    }
      , Ph = function(a) {
        var b;
        if (l.TextEncoder)
            b = (new TextEncoder("utf-8")).encode(a);
        else {
            for (var c = [], d = 0; d < a.length; d++) {
                var e = a.charCodeAt(d);
                128 > e ? c.push(e) : 2048 > e ? c.push(192 | e >> 6, 128 | e & 63) : 55296 > e || 57344 <= e ? c.push(224 | e >> 12, 128 | e >> 6 & 63, 128 | e & 63) : (e = 65536 + ((e & 1023) << 10 | a.charCodeAt(++d) & 1023),
                c.push(240 | e >> 18, 128 | e >> 12 & 63, 128 | e >> 6 & 63, 128 | e & 63))
            }
            b = new Uint8Array(c)
        }
        return b
    }
      , Jh = /[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g
      , Mh = /^\S+@\S+\.\S+$/
      , Kh = /^\+\d{10,15}$/
      , Fh = /[.~]/g
      , Rh = /^[0-9A-Za-z_-]{43}$/
      , Oh = /^[0-9A-Fa-f]{64}$/
      , Sh = {}
      , Th = (Sh.email = "em",
    Sh.phone_number = "pn",
    Sh.first_name = "fn",
    Sh.last_name = "ln",
    Sh.street = "sa",
    Sh.city = "ct",
    Sh.region = "rg",
    Sh.country = "co",
    Sh.postal_code = "pc",
    Sh.error_code = "ec",
    Sh)
      , Uh = {}
      , Vh = (Uh.email = "sha256_email_address",
    Uh.phone_number = "sha256_phone_number",
    Uh.first_name = "sha256_first_name",
    Uh.last_name = "sha256_last_name",
    Uh.street = "sha256_street",
    Uh)
      , Xh = function(a, b) {
        a.some(function(c) {
            c.value && Wh.indexOf(c.name)
        }) ? b(a) : l.Promise ? Promise.all(a.map(function(c) {
            return c.value && -1 !== Wh.indexOf(c.name) ? Qh(c.value).then(function(d) {
                c.value = d
            }) : Promise.resolve()
        })).then(function() {
            b(a)
        }).catch(function() {
            b([])
        }) : b([])
    }
      , Zh = function(a, b) {
        var c = Yh(a);
        Xh(c, b)
    }
      , Yh = function(a) {
        function b(r, t, u, v) {
            var w = Eh(r);
            "" !== w && (Oh.test(w) ? h.push({
                name: t,
                value: w,
                index: v
            }) : h.push({
                name: t,
                value: u(w),
                index: v
            }))
        }
        function c(r, t) {
            var u = r;
            if (k(u) || Ia(u)) {
                u = Ia(r) ? r : [r];
                for (var v = 0; v < u.length; ++v) {
                    var w = Eh(u[v])
                      , x = Oh.test(w);
                    t && !x && L(89);
                    !t && x && L(88)
                }
            }
        }
        function d(r, t) {
            var u = r[t];
            c(u, !1);
            var v = Vh[t];
            r.hasOwnProperty(v) && (r.hasOwnProperty(t) && L(90),
            u = r[v],
            c(u, !0));
            return u
        }
        function e(r, t, u) {
            var v = d(r, t);
            v = Ia(v) ? v : [v];
            for (var w = 0; w < v.length; ++w)
                b(v[w], t, u)
        }
        function f(r, t, u, v) {
            var w = d(r, t);
            b(w, t, u, v)
        }
        function g(r) {
            return function(t) {
                L(64);
                return r(t)
            }
        }
        var h = [];
        if ("https:" !== l.location.protocol)
            return h.push({
                name: "error_code",
                value: "e3",
                index: void 0
            }),
            h;
        e(a, "email", Nh);
        e(a, "phone_number", Lh);
        e(a, "first_name", g(Ih));
        e(a, "last_name", g(Ih));
        var m = a.home_address || {};
        e(m, "street", g(Hh));
        e(m, "city", g(Hh));
        e(m, "postal_code", g(Gh));
        e(m, "region", g(Hh));
        e(m, "country", g(Gh));
        var n = a.address || {};
        n = Ia(n) ? n : [n];
        for (var p = 0; p < n.length; p++) {
            var q = n[p];
            f(q, "first_name", Ih, p);
            f(q, "last_name", Ih, p);
            f(q, "street", Hh, p);
            f(q, "city", Hh, p);
            f(q, "postal_code", Gh, p);
            f(q, "region", Hh, p);
            f(q, "country", Gh, p)
        }
        return h
    }
      , ai = function(a, b) {
        Zh(a, function(c) {
            var d = $h(c);
            b(d.Yf, d.Sh)
        })
    }
      , $h = function(a) {
        for (var b = ["tv.1"], c = 0, d = 0; d < a.length; ++d) {
            var e = a[d].name
              , f = a[d].value
              , g = a[d].index
              , h = Th[e];
            h && f && (-1 === Wh.indexOf(e) || /^e\d+$/.test(f) || Rh.test(f) || Oh.test(f)) && (void 0 !== g && (h += g),
            b.push(h + "." + f),
            c++)
        }
        1 === a.length && "error_code" === a[0].name && (c = 0);
        return {
            Yf: encodeURIComponent(b.join("~")),
            Sh: c
        }
    }
      , bi = function(a) {
        if (l.Promise)
            try {
                return new Promise(function(b) {
                    ai(a, function(c, d) {
                        b({
                            Tj: c,
                            Sh: d
                        })
                    })
                }
                )
            } catch (b) {}
    }
      , Wh = Object.freeze(["email", "phone_number", "first_name", "last_name", "street"]);
    var M = {
        g: {
            xa: "ad_personalization",
            J: "ad_storage",
            N: "ad_user_data",
            R: "analytics_storage",
            Ab: "region",
            kc: "consent_updated",
            jf: "wait_for_update",
            vi: "app_remove",
            wi: "app_store_refund",
            xi: "app_store_subscription_cancel",
            yi: "app_store_subscription_convert",
            zi: "app_store_subscription_renew",
            og: "add_payment_info",
            pg: "add_shipping_info",
            mc: "add_to_cart",
            nc: "remove_from_cart",
            qg: "view_cart",
            Ob: "begin_checkout",
            oc: "select_item",
            ib: "view_item_list",
            Bb: "select_promotion",
            jb: "view_promotion",
            Ka: "purchase",
            qc: "refund",
            Na: "view_item",
            rg: "add_to_wishlist",
            yk: "exception",
            Ai: "first_open",
            Bi: "first_visit",
            da: "gtag.config",
            Sa: "gtag.get",
            Ci: "in_app_purchase",
            sc: "page_view",
            zk: "screen_view",
            Di: "session_start",
            Ak: "timing_complete",
            Bk: "track_social",
            Pc: "user_engagement",
            kb: "gclgb",
            Ta: "gclid",
            aa: "ads_data_redaction",
            Ei: "gad_source",
            Dd: "gclid_url",
            Fi: "gclsrc",
            kf: "wbraid",
            ka: "allow_ad_personalization_signals",
            lf: "allow_custom_scripts",
            nf: "allow_display_features",
            Ed: "allow_enhanced_conversions",
            lb: "allow_google_signals",
            Ea: "allow_interest_groups",
            Ck: "app_id",
            Dk: "app_installer_id",
            Ek: "app_name",
            Fk: "app_version",
            Cb: "auid",
            Gi: "auto_detection_enabled",
            Pb: "aw_remarketing",
            pf: "aw_remarketing_only",
            Fd: "discount",
            Gd: "aw_feed_country",
            Hd: "aw_feed_language",
            Z: "items",
            Id: "aw_merchant_id",
            sg: "aw_basket_type",
            Qc: "campaign_content",
            Rc: "campaign_id",
            Sc: "campaign_medium",
            Tc: "campaign_name",
            Uc: "campaign",
            Vc: "campaign_source",
            Wc: "campaign_term",
            nb: "client_id",
            Hi: "rnd",
            Ii: "content_group",
            Ji: "content_type",
            Xa: "conversion_cookie_prefix",
            Xc: "conversion_id",
            ya: "conversion_linker",
            Gk: "conversion_linker_disabled",
            Qb: "conversion_api",
            qf: "cookie_deprecation",
            Ua: "cookie_domain",
            Va: "cookie_expires",
            Ya: "cookie_flags",
            uc: "cookie_name",
            Rb: "cookie_path",
            Oa: "cookie_prefix",
            vc: "cookie_update",
            wc: "country",
            za: "currency",
            Jd: "customer_lifetime_value",
            Yc: "custom_map",
            ug: "gcldc",
            Kd: "dclid",
            Ki: "debug_mode",
            fa: "developer_id",
            Li: "disable_merchant_reported_purchases",
            Zc: "dc_custom_params",
            Mi: "dc_natural_search",
            vg: "dynamic_event_settings",
            wg: "affiliation",
            Ld: "checkout_option",
            rf: "checkout_step",
            xg: "coupon",
            ad: "item_list_name",
            tf: "list_name",
            Ni: "promotions",
            bd: "shipping",
            uf: "tax",
            Md: "engagement_time_msec",
            Nd: "enhanced_client_id",
            Od: "enhanced_conversions",
            yg: "enhanced_conversions_automatic_settings",
            Pd: "estimated_delivery_date",
            vf: "euid_logged_in_state",
            dd: "event_callback",
            Hk: "event_category",
            pb: "event_developer_id_string",
            Ik: "event_label",
            Qd: "event",
            Rd: "event_settings",
            Sd: "event_timeout",
            Jk: "description",
            Kk: "fatal",
            Oi: "experiments",
            wf: "firebase_id",
            xc: "first_party_collection",
            Td: "_x_20",
            qb: "_x_19",
            Pi: "fledge_drop_reason",
            zg: "fledge",
            Ag: "flight_error_code",
            Bg: "flight_error_message",
            Qi: "fl_activity_category",
            Ri: "fl_activity_group",
            Cg: "fl_advertiser_id",
            Si: "fl_ar_dedupe",
            Dg: "match_id",
            Ti: "fl_random_number",
            Ui: "tran",
            Vi: "u",
            Ud: "gac_gclid",
            yc: "gac_wbraid",
            Eg: "gac_wbraid_multiple_conversions",
            Fg: "ga_restrict_domain",
            xf: "ga_temp_client_id",
            zc: "gdpr_applies",
            Gg: "geo_granularity",
            Db: "value_callback",
            rb: "value_key",
            Lk: "google_ono",
            Sb: "google_signals",
            Hg: "google_tld",
            Vd: "groups",
            Ig: "gsa_experiment_id",
            Wd: "iframe_state",
            ed: "ignore_referrer",
            yf: "internal_traffic_results",
            Tb: "is_legacy_converted",
            Eb: "is_legacy_loaded",
            Xd: "is_passthrough",
            fd: "_lps",
            Pa: "language",
            Yd: "legacy_developer_id_string",
            Aa: "linker",
            Ub: "accept_incoming",
            tb: "decorate_forms",
            X: "domains",
            Fb: "url_position",
            Jg: "method",
            Mk: "name",
            gd: "new_customer",
            Kg: "non_interaction",
            Wi: "optimize_id",
            Xi: "page_hostname",
            hd: "page_path",
            Fa: "page_referrer",
            Gb: "page_title",
            Lg: "passengers",
            Mg: "phone_conversion_callback",
            Yi: "phone_conversion_country_code",
            Ng: "phone_conversion_css_class",
            Zi: "phone_conversion_ids",
            Og: "phone_conversion_number",
            Pg: "phone_conversion_options",
            Qg: "_protected_audience_enabled",
            jd: "quantity",
            Zd: "redact_device_info",
            zf: "referral_exclusion_definition",
            Vb: "restricted_data_processing",
            aj: "retoken",
            Nk: "sample_rate",
            Af: "screen_name",
            Hb: "screen_resolution",
            bj: "search_term",
            Qa: "send_page_view",
            Wb: "send_to",
            kd: "server_container_url",
            ld: "session_duration",
            ae: "session_engaged",
            Bf: "session_engaged_time",
            ub: "session_id",
            be: "session_number",
            md: "delivery_postal_code",
            Ok: "temporary_client_id",
            Cf: "topmost_url",
            cj: "tracking_id",
            Df: "traffic_type",
            Ba: "transaction_id",
            Ib: "transport_url",
            Rg: "trip_type",
            Xb: "update",
            Za: "url_passthrough",
            ce: "_user_agent_architecture",
            de: "_user_agent_bitness",
            ee: "_user_agent_full_version_list",
            fe: "_user_agent_mobile",
            he: "_user_agent_model",
            ie: "_user_agent_platform",
            je: "_user_agent_platform_version",
            ke: "_user_agent_wow64",
            Ga: "user_data",
            Sg: "user_data_auto_latency",
            Tg: "user_data_auto_meta",
            Ug: "user_data_auto_multi",
            Vg: "user_data_auto_selectors",
            Wg: "user_data_auto_status",
            me: "user_data_mode",
            ne: "user_data_settings",
            Ra: "user_id",
            ab: "user_properties",
            dj: "_user_region",
            oe: "us_privacy_string",
            la: "value",
            Xg: "wbraid_multiple_conversions",
            kj: "_host_name",
            lj: "_in_page_command",
            mj: "_is_passthrough_cid",
            Kb: "non_personalized_ads",
            ve: "_sst_parameters",
            ob: "conversion_label",
            ra: "page_location",
            sb: "global_developer_id_string",
            Ac: "tc_privacy_string"
        }
    }
      , ci = {}
      , di = Object.freeze((ci[M.g.ka] = 1,
    ci[M.g.nf] = 1,
    ci[M.g.Ed] = 1,
    ci[M.g.lb] = 1,
    ci[M.g.Z] = 1,
    ci[M.g.Ua] = 1,
    ci[M.g.Va] = 1,
    ci[M.g.Ya] = 1,
    ci[M.g.uc] = 1,
    ci[M.g.Rb] = 1,
    ci[M.g.Oa] = 1,
    ci[M.g.vc] = 1,
    ci[M.g.Yc] = 1,
    ci[M.g.fa] = 1,
    ci[M.g.vg] = 1,
    ci[M.g.dd] = 1,
    ci[M.g.Rd] = 1,
    ci[M.g.Sd] = 1,
    ci[M.g.xc] = 1,
    ci[M.g.Fg] = 1,
    ci[M.g.Sb] = 1,
    ci[M.g.Hg] = 1,
    ci[M.g.Vd] = 1,
    ci[M.g.yf] = 1,
    ci[M.g.Tb] = 1,
    ci[M.g.Eb] = 1,
    ci[M.g.Aa] = 1,
    ci[M.g.zf] = 1,
    ci[M.g.Vb] = 1,
    ci[M.g.Qa] = 1,
    ci[M.g.Wb] = 1,
    ci[M.g.kd] = 1,
    ci[M.g.ld] = 1,
    ci[M.g.Bf] = 1,
    ci[M.g.md] = 1,
    ci[M.g.Ib] = 1,
    ci[M.g.Xb] = 1,
    ci[M.g.ne] = 1,
    ci[M.g.ab] = 1,
    ci[M.g.ve] = 1,
    ci));
    Object.freeze([M.g.ra, M.g.Fa, M.g.Gb, M.g.Pa, M.g.Af, M.g.Ra, M.g.wf, M.g.Ii]);
    var ei = {}
      , fi = Object.freeze((ei[M.g.vi] = 1,
    ei[M.g.wi] = 1,
    ei[M.g.xi] = 1,
    ei[M.g.yi] = 1,
    ei[M.g.zi] = 1,
    ei[M.g.Ai] = 1,
    ei[M.g.Bi] = 1,
    ei[M.g.Ci] = 1,
    ei[M.g.Di] = 1,
    ei[M.g.Pc] = 1,
    ei))
      , gi = {}
      , hi = Object.freeze((gi[M.g.og] = 1,
    gi[M.g.pg] = 1,
    gi[M.g.mc] = 1,
    gi[M.g.nc] = 1,
    gi[M.g.qg] = 1,
    gi[M.g.Ob] = 1,
    gi[M.g.oc] = 1,
    gi[M.g.ib] = 1,
    gi[M.g.Bb] = 1,
    gi[M.g.jb] = 1,
    gi[M.g.Ka] = 1,
    gi[M.g.qc] = 1,
    gi[M.g.Na] = 1,
    gi[M.g.rg] = 1,
    gi))
      , ii = Object.freeze([M.g.ka, M.g.lb, M.g.vc, M.g.xc, M.g.ed, M.g.Qa, M.g.Xb])
      , ji = Object.freeze([].concat(ii))
      , ki = Object.freeze([M.g.Va, M.g.Sd, M.g.ld, M.g.Bf, M.g.Md])
      , li = Object.freeze([].concat(ki))
      , mi = {}
      , ni = (mi[M.g.J] = "1",
    mi[M.g.R] = "2",
    mi[M.g.N] = "3",
    mi[M.g.xa] = "4",
    mi)
      , oi = {}
      , pi = Object.freeze((oi[M.g.ka] = 1,
    oi[M.g.Ed] = 1,
    oi[M.g.Ea] = 1,
    oi[M.g.Pb] = 1,
    oi[M.g.pf] = 1,
    oi[M.g.Fd] = 1,
    oi[M.g.Gd] = 1,
    oi[M.g.Hd] = 1,
    oi[M.g.Z] = 1,
    oi[M.g.Id] = 1,
    oi[M.g.Xa] = 1,
    oi[M.g.ya] = 1,
    oi[M.g.Ua] = 1,
    oi[M.g.Va] = 1,
    oi[M.g.Ya] = 1,
    oi[M.g.Oa] = 1,
    oi[M.g.za] = 1,
    oi[M.g.Jd] = 1,
    oi[M.g.fa] = 1,
    oi[M.g.Li] = 1,
    oi[M.g.Od] = 1,
    oi[M.g.Pd] = 1,
    oi[M.g.wf] = 1,
    oi[M.g.xc] = 1,
    oi[M.g.Tb] = 1,
    oi[M.g.Eb] = 1,
    oi[M.g.Pa] = 1,
    oi[M.g.gd] = 1,
    oi[M.g.ra] = 1,
    oi[M.g.Fa] = 1,
    oi[M.g.Mg] = 1,
    oi[M.g.Ng] = 1,
    oi[M.g.Og] = 1,
    oi[M.g.Pg] = 1,
    oi[M.g.Vb] = 1,
    oi[M.g.Qa] = 1,
    oi[M.g.Wb] = 1,
    oi[M.g.kd] = 1,
    oi[M.g.md] = 1,
    oi[M.g.Ba] = 1,
    oi[M.g.Ib] = 1,
    oi[M.g.Xb] = 1,
    oi[M.g.Za] = 1,
    oi[M.g.Ga] = 1,
    oi[M.g.Ra] = 1,
    oi[M.g.la] = 1,
    oi))
      , qi = {}
      , ri = Object.freeze((qi.search = "s",
    qi.youtube = "y",
    qi.playstore = "p",
    qi.shopping = "h",
    qi.ads = "a",
    qi.maps = "m",
    qi));
    Object.freeze(M.g);
    var si = {}
      , ti = l.google_tag_manager = l.google_tag_manager || {}
      , ui = Math.random();
    si.eh = "43d0";
    si.ue = Number("0") || 0;
    si.ja = "dataLayer";
    si.Bn = "ChEI8MzfrwYQ8+ru7MTo5MTJARIlAOuBJcgkjnWLdjiTIsVQbXvBKYGcxVQeCvRTrFWRu78AN+g5ihoCdxA\x3d";
    var vi = {
        __cl: 1,
        __ecl: 1,
        __ehl: 1,
        __evl: 1,
        __fal: 1,
        __fil: 1,
        __fsl: 1,
        __hl: 1,
        __jel: 1,
        __lcl: 1,
        __sdl: 1,
        __tl: 1,
        __ytl: 1
    }, wi = {
        __paused: 1,
        __tg: 1
    }, xi;
    for (xi in vi)
        vi.hasOwnProperty(xi) && (wi[xi] = 1);
    var yi = Qa("true"), zi, Ai = !1;
    Ai = !0;
    zi = Ai;
    var Bi, Ci = !1;
    Bi = Ci;
    var Di, Ei = !1;
    Di = Ei;
    si.Cd = "www.googletagmanager.com";
    var Fi = "" + si.Cd + (zi ? "/gtag/js" : "/gtm.js")
      , Gi = null
      , Hi = null
      , Ii = {}
      , Ji = {}
      , Ki = function() {
        var a = ti.sequence || 1;
        ti.sequence = a + 1;
        return a
    };
    si.vk = "";
    var Li = "";
    si.Kf = Li;
    var Mi = new function() {
        this.h = "";
        this.F = this.s = !1;
        this.W = this.M = this.Da = this.C = ""
    }
      , Ni = function() {
        var a = Mi.C.length;
        return "/" === Mi.C[a - 1] ? Mi.C.substring(0, a - 1) : Mi.C
    };
    function Oi(a) {
        for (var b = {}, c = ha(a.split("|")), d = c.next(); !d.done; d = c.next())
            b[d.value] = !0;
        return b
    }
    var Pi = new La
      , Qi = {}
      , Ri = {}
      , Ui = {
        name: si.ja,
        set: function(a, b) {
            ob(ab(a, b), Qi);
            Si()
        },
        get: function(a) {
            return Ti(a, 2)
        },
        reset: function() {
            Pi = new La;
            Qi = {};
            Si()
        }
    }
      , Ti = function(a, b) {
        return 2 != b ? Pi.get(a) : Vi(a)
    }
      , Vi = function(a, b) {
        var c = a.split(".");
        b = b || [];
        for (var d = Qi, e = 0; e < c.length; e++) {
            if (null === d)
                return !1;
            if (void 0 === d)
                break;
            d = d[c[e]];
            if (-1 !== b.indexOf(d))
                return
        }
        return d
    }
      , Wi = function(a, b) {
        Ri.hasOwnProperty(a) || (Pi.set(a, b),
        ob(ab(a, b), Qi),
        Si())
    }
      , Xi = function() {
        for (var a = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], b = 0; b < a.length; b++) {
            var c = a[b]
              , d = Ti(c, 1);
            if (Ia(d) || nb(d))
                d = ob(d);
            Ri[c] = d
        }
    }
      , Si = function(a) {
        Na(Ri, function(b, c) {
            Pi.set(b, c);
            ob(ab(b), Qi);
            ob(ab(b, c), Qi);
            a && delete Ri[b]
        })
    }
      , Yi = function(a, b) {
        var c, d = 1 !== (void 0 === b ? 2 : b) ? Vi(a) : Pi.get(a);
        "array" === lb(d) || "object" === lb(d) ? c = ob(d) : c = d;
        return c
    };
    var Zi = function(a, b, c) {
        if (!c)
            return !1;
        var d = c.selector_type, e = String(c.value), f;
        if ("js_variable" === d) {
            e = e.replace(/\["?'?/g, ".").replace(/"?'?\]/g, "");
            for (var g = e.split(","), h = 0; h < g.length; h++) {
                var m = g[h].trim();
                if (m) {
                    if (0 === m.indexOf("dataLayer."))
                        f = Ti(m.substring(10));
                    else {
                        var n = m.split(".");
                        f = l[n.shift()];
                        for (var p = 0; p < n.length; p++)
                            f = f && f[n[p]]
                    }
                    if (void 0 !== f)
                        break
                }
            }
        } else if ("css_selector" === d && zh) {
            var q = Ah(e);
            if (q && 0 < q.length) {
                f = [];
                for (var r = 0; r < q.length && r < ("email" === b || "phone_number" === b ? 5 : 1); r++)
                    f.push(Pc(q[r]) || Sa(q[r].value));
                f = 1 === f.length ? f[0] : f
            }
        }
        return f ? (a[b] = f,
        !0) : !1
    }
      , $i = function(a) {
        if (a) {
            var b = {}
              , c = !1;
            c = Zi(b, "email", a.email) || c;
            c = Zi(b, "phone_number", a.phone) || c;
            b.address = [];
            for (var d = a.name_and_address || [], e = 0; e < d.length; e++) {
                var f = {};
                c = Zi(f, "first_name", d[e].first_name) || c;
                c = Zi(f, "last_name", d[e].last_name) || c;
                c = Zi(f, "street", d[e].street) || c;
                c = Zi(f, "city", d[e].city) || c;
                c = Zi(f, "region", d[e].region) || c;
                c = Zi(f, "country", d[e].country) || c;
                c = Zi(f, "postal_code", d[e].postal_code) || c;
                b.address.push(f)
            }
            return c ? b : void 0
        }
    }
      , aj = function(a) {
        return nb(a) ? !!a.enable_code : !1
    };
    var bj = [];
    function cj(a) {
        switch (a) {
        case 0:
            return 0;
        case 12:
            return 19;
        case 21:
            return 15;
        case 42:
            return 11;
        case 43:
            return 12;
        case 48:
            return 14;
        case 51:
            return 13;
        case 61:
            return 20;
        case 73:
            return 16;
        case 83:
            return 18;
        case 93:
            return 21;
        case 95:
            return 22
        }
    }
    function O(a) {
        bj[a] = !0;
        var b = cj(a);
        void 0 !== b && (Uf[b] = !0)
    }
    O(27);
    O(24);
    O(25);
    O(26);
    O(44);
    O(6);
    O(49);
    O(63);
    O(29);
    O(15);
    O(91);
    O(14);
    O(99);
    O(90);
    O(48);
    O(52);
    O(74);
    O(92);
    O(39);
    O(7);
    O(4);
    O(67);
    O(11);
    O(87);
    O(57);
    O(58);
    O(60);
    O(54);
    O(53);
    O(82);
    O(59);
    O(72);
    O(102);
    O(21);
    O(100);
    O(88);
    O(30);
    O(31);
    O(32);
    O(73);
    O(78);
    O(22);
    O(47);
    O(77);
    Vf[1] = Number('1') || 6E4;
    Vf[2] = Number('') || 50;
    O(75);
    O(38);
    O(40);

    function dj(a, b) {
        for (var c = void 0, d = void 0, e = 0; c === d; )
            if (c = Math.floor(2 * Math.random()),
            d = Math.floor(2 * Math.random()),
            e++,
            20 < e)
                return;
        c ? O(a) : O(b)
    }
    function R(a) {
        return !!bj[a]
    }
    var ej = function(a) {
        Bb("HEALTH", a)
    };
    var fj;
    try {
        fj = JSON.parse(zb("eyIwIjoiSUQiLCIxIjoiSUQtSlQiLCIyIjpmYWxzZSwiMyI6Imdvb2dsZS5jby5pZCIsIjQiOiIiLCI1Ijp0cnVlLCI2IjpmYWxzZSwiNyI6ImFkX3N0b3JhZ2V8YW5hbHl0aWNzX3N0b3JhZ2V8YWRfdXNlcl9kYXRhfGFkX3BlcnNvbmFsaXphdGlvbiJ9"))
    } catch (a) {
        L(123),
        ej(2),
        fj = {}
    }
    var gj = function() {
        return fj["0"] || ""
    }
      , hj = function() {
        return fj["1"] || ""
    }
      , ij = function() {
        var a = !1;
        a = !!fj["2"];
        return a
    }
      , jj = function() {
        return !1 !== fj["6"]
    }
      , kj = function() {
        var a = "";
        a = fj["4"] || "";
        return a
    }
      , lj = function() {
        var a = !1;
        a = !!fj["5"];
        return a
    }
      , mj = function() {
        var a = "";
        a = fj["3"] || "";
        return a
    };
    var nj = /:[0-9]+$/
      , oj = /^\d+\.fls\.doubleclick\.net$/
      , pj = function(a, b, c, d) {
        for (var e = [], f = ha(a.split("&")), g = f.next(); !g.done; g = f.next()) {
            var h = ha(g.value.split("="))
              , m = h.next().value
              , n = ia(h);
            if (decodeURIComponent(m.replace(/\+/g, " ")) === b) {
                var p = n.join("=");
                if (!c)
                    return d ? p : decodeURIComponent(p.replace(/\+/g, " "));
                e.push(d ? p : decodeURIComponent(p.replace(/\+/g, " ")))
            }
        }
        return c ? e : void 0
    }
      , sj = function(a, b, c, d, e) {
        b && (b = String(b).toLowerCase());
        if ("protocol" === b || "port" === b)
            a.protocol = qj(a.protocol) || qj(l.location.protocol);
        "port" === b ? a.port = String(Number(a.hostname ? a.port : l.location.port) || ("http" === a.protocol ? 80 : "https" === a.protocol ? 443 : "")) : "host" === b && (a.hostname = (a.hostname || l.location.hostname).replace(nj, "").toLowerCase());
        return rj(a, b, c, d, e)
    }
      , rj = function(a, b, c, d, e) {
        var f, g = qj(a.protocol);
        b && (b = String(b).toLowerCase());
        switch (b) {
        case "url_no_fragment":
            f = tj(a);
            break;
        case "protocol":
            f = g;
            break;
        case "host":
            f = a.hostname.replace(nj, "").toLowerCase();
            if (c) {
                var h = /^www\d*\./.exec(f);
                h && h[0] && (f = f.substr(h[0].length))
            }
            break;
        case "port":
            f = String(Number(a.port) || ("http" === g ? 80 : "https" === g ? 443 : ""));
            break;
        case "path":
            a.pathname || a.hostname || Bb("TAGGING", 1);
            f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
            var m = f.split("/");
            0 <= (d || []).indexOf(m[m.length - 1]) && (m[m.length - 1] = "");
            f = m.join("/");
            break;
        case "query":
            f = a.search.replace("?", "");
            e && (f = pj(f, e, !1));
            break;
        case "extension":
            var n = a.pathname.split(".");
            f = 1 < n.length ? n[n.length - 1] : "";
            f = f.split("/")[0];
            break;
        case "fragment":
            f = a.hash.replace("#", "");
            break;
        default:
            f = a && a.href
        }
        return f
    }
      , qj = function(a) {
        return a ? a.replace(":", "").toLowerCase() : ""
    }
      , tj = function(a) {
        var b = "";
        if (a && a.href) {
            var c = a.href.indexOf("#");
            b = 0 > c ? a.href : a.href.substr(0, c)
        }
        return b
    }
      , uj = {}
      , vj = 0
      , wj = function(a) {
        var b = uj[a];
        if (!b) {
            var c = z.createElement("a");
            a && (c.href = a);
            var d = c.pathname;
            "/" !== d[0] && (a || Bb("TAGGING", 1),
            d = "/" + d);
            var e = c.hostname.replace(nj, "");
            b = {
                href: c.href,
                protocol: c.protocol,
                host: c.host,
                hostname: e,
                pathname: d,
                search: c.search,
                hash: c.hash,
                port: c.port
            };
            5 > vj && (uj[a] = b,
            vj++)
        }
        return b
    }
      , Cj = function(a) {
        function b(n) {
            var p = n.split("=")[0];
            return 0 > d.indexOf(p) ? n : p + "=0"
        }
        function c(n) {
            return n.split("&").map(b).filter(function(p) {
                return void 0 !== p
            }).join("&")
        }
        var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" ")
          , e = wj(a)
          , f = a.split(/[?#]/)[0]
          , g = e.search
          , h = e.hash;
        "?" === g[0] && (g = g.substring(1));
        "#" === h[0] && (h = h.substring(1));
        g = c(g);
        h = c(h);
        "" !== g && (g = "?" + g);
        "" !== h && (h = "#" + h);
        var m = "" + f + g + h;
        "/" === m[m.length - 1] && (m = m.substring(0, m.length - 1));
        return m
    }
      , Dj = function(a) {
        var b = wj(l.location.href)
          , c = sj(b, "host", !1);
        if (c && c.match(oj)) {
            var d = sj(b, "path").split(a + "=");
            if (1 < d.length)
                return d[1].split(";")[0].split("?")[0]
        }
    };
    var Ej = {
        "https://www.google.com": "/g",
        "https://googlesyndication.com": "/gs",
        "https://www.googleadservices.com": "/as",
        "https://pagead2.googlesyndication.com": "/gs"
    };
    function Fj(a, b) {
        if (a) {
            var c = "" + a;
            0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
            "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
            return wj("" + c + b).href
        }
    }
    function Gj() {
        return Mi.s || Bi
    }
    function Hj() {
        return !!si.Kf && "SGTM_TOKEN" !== si.Kf.split("@@").join("")
    }
    function Ij(a) {
        for (var b = ha([M.g.kd, M.g.Ib]), c = b.next(); !c.done; c = b.next()) {
            var d = S(a, c.value);
            if (d)
                return d
        }
    }
    function Jj(a, b) {
        return Mi.s ? "" + Ni() + (b ? Ej[a] || "" : "") : a
    }
    ;var Kj = function(a) {
        var b = String(a[Qe.ma] || "").replace(/_/g, "");
        0 === b.indexOf("cvt") && (b = "cvt");
        return b
    }
      , Lj = 0 <= l.location.search.indexOf("?gtm_latency=") || 0 <= l.location.search.indexOf("&gtm_latency=");
    var Nj = function(a, b) {
        var c = Mj();
        c.pending || (c.pending = []);
        Ja(c.pending, function(d) {
            return d.target.ctid === a.ctid && d.target.isDestination === a.isDestination
        }) || c.pending.push({
            target: a,
            onLoad: b
        })
    }
      , Oj = function() {
        this.container = {};
        this.destination = {};
        this.canonical = {};
        this.pending = [];
        this.siloed = []
    }
      , Mj = function() {
        var a = Dc("google_tag_data", {})
          , b = a.tidr;
        b || (b = new Oj,
        a.tidr = b);
        return b
    };
    var Pj = {}
      , Qj = !1
      , Xf = {
        ctid: "G-J7YR94K8NN",
        canonicalContainerId: "110702823",
        Uj: "G-J7YR94K8NN|GT-NBPJ84J",
        Vj: "G-J7YR94K8NN"
    };
    Pj.qe = Qa("");
    var Tj = function() {
        var a = Rj();
        return Qj ? a.map(Sj) : a
    }
      , Vj = function() {
        var a = Uj();
        return Qj ? a.map(Sj) : a
    }
      , Xj = function() {
        return Wj(Xf.ctid)
    }
      , Yj = function() {
        return Wj(Xf.canonicalContainerId || "_" + Xf.ctid)
    }
      , Rj = function() {
        return Xf.Uj ? Xf.Uj.split("|") : [Xf.ctid]
    }
      , Uj = function() {
        return Xf.Vj ? Xf.Vj.split("|") : []
    }
      , bk = function() {
        var a = Zj(ak());
        if (a) {
            for (; a.parent; ) {
                var b = Zj(a.parent);
                if (!b)
                    break;
                a = b
            }
            return a
        }
    }
      , Zj = function(a) {
        var b = Mj();
        return a.isDestination ? b.destination[a.ctid] : b.container[a.ctid]
    }
      , Wj = function(a) {
        return Qj ? Sj(a) : a
    }
      , Sj = function(a) {
        return "siloed_" + a
    }
      , dk = function(a) {
        return Qj ? ck(a) : a
    };
    function ck(a) {
        a = String(a);
        return 0 === a.indexOf("siloed_") ? a.substring(7) : a
    }
    var ek = function() {
        var a = !1;
        a = !0;
        if (a) {
            var b = Mj();
            if (b.siloed) {
                for (var c = [], d = Rj().map(Sj), e = Uj().map(Sj), f = {}, g = 0; g < b.siloed.length; f = {
                    Pf: void 0
                },
                g++)
                    f.Pf = b.siloed[g],
                    !Qj && Ja(f.Pf.isDestination ? e : d, function(h) {
                        return function(m) {
                            return m === h.Pf.ctid
                        }
                    }(f)) ? Qj = !0 : c.push(f.Pf);
                b.siloed = c
            }
        }
    };
    function fk() {
        var a = Mj();
        if (a.pending) {
            for (var b, c = [], d = !1, e = Tj(), f = Vj(), g = {}, h = 0; h < a.pending.length; g = {
                Ye: void 0
            },
            h++)
                g.Ye = a.pending[h],
                Ja(g.Ye.target.isDestination ? f : e, function(m) {
                    return function(n) {
                        return n === m.Ye.target.ctid
                    }
                }(g)) ? d || (b = g.Ye.onLoad,
                d = !0) : c.push(g.Ye);
            a.pending = c;
            if (b)
                try {
                    b(Yj())
                } catch (m) {}
        }
    }
    var gk = function() {
        for (var a = Xf.ctid, b = Tj(), c = Vj(), d = function(n, p) {
            var q = {
                canonicalContainerId: Xf.canonicalContainerId,
                scriptContainerId: a,
                state: 2,
                containers: b.slice(),
                destinations: c.slice()
            };
            Cc && (q.scriptSource = Cc);
            var r = p ? e.destination : e.container
              , t = r[n];
            t ? (p && 0 === t.state && L(93),
            Object.assign(t, q)) : r[n] = q
        }, e = Mj(), f = ha(b), g = f.next(); !g.done; g = f.next())
            d(g.value, !1);
        for (var h = ha(c), m = h.next(); !m.done; m = h.next())
            d(m.value, !0);
        e.canonical[Yj()] = {};
        fk()
    }
      , hk = function(a) {
        return !!Mj().container[a]
    }
      , ik = function(a) {
        var b = Mj().destination[a];
        return !!b && !!b.state
    }
      , ak = function() {
        return {
            ctid: Xj(),
            isDestination: Pj.qe
        }
    };
    function jk(a) {
        var b = Mj();
        (b.siloed = b.siloed || []).push(a)
    }
    var kk = function() {
        var a = Mj().container, b;
        for (b in a)
            if (a.hasOwnProperty(b) && 1 === a[b].state)
                return !0;
        return !1
    }
      , lk = function() {
        var a = {};
        Na(Mj().destination, function(b, c) {
            0 === c.state && (a[ck(b)] = c)
        });
        return a
    }
      , mk = function(a) {
        return !!(a && a.parent && a.context && 1 === a.context.source && 0 !== a.parent.ctid.indexOf("GTM-"))
    };
    var nk = {
        sampleRate: "0.005000",
        rk: "",
        qk: Number("5"),
        no: Number("")
    }
      , ok = [];
    function pk(a) {
        ok.push(a)
    }
    var qk = !1, rk;
    if (!(rk = Lj)) {
        var sk = Math.random()
          , tk = nk.sampleRate;
        rk = sk < Number(tk)
    }
    var uk = rk
      , vk = "/a?id=" + Xf.ctid
      , wk = "https://www.googletagmanager.com" + vk
      , xk = void 0
      , yk = {}
      , zk = void 0
      , Ak = new function() {
        var a = 5;
        0 < nk.qk && (a = nk.qk);
        this.h = 0;
        this.C = [];
        this.s = a
    }
      , Bk = 1E3;
    function Ck(a, b) {
        var c = xk;
        if (void 0 === c)
            if (b)
                c = Ki();
            else
                return "";
        for (var d = [Jj("https://www.googletagmanager.com"), vk], e = ha(ok), f = e.next(); !f.done; f = e.next())
            for (var g = f.value, h = g({
                eventId: c,
                zb: !!a,
                eg: function() {
                    qk = !0
                }
            }), m = ha(h), n = m.next(); !n.done; n = m.next()) {
                var p = ha(n.value)
                  , q = p.next().value
                  , r = p.next().value;
                d.push("&" + q + "=" + r)
            }
        d.push("&z=0");
        return d.join("")
    }
    function Dk() {
        zk && (l.clearTimeout(zk),
        zk = void 0);
        if (void 0 !== xk && Ek) {
            var a;
            (a = yk[xk]) || (a = Ak.h < Ak.s ? !1 : 1E3 > Ua() - Ak.C[Ak.h % Ak.s]);
            if (a || 0 >= Bk--)
                L(1),
                yk[xk] = !0;
            else {
                var b = Ak.h++ % Ak.s;
                Ak.C[b] = Ua();
                var c = Ck(!0);
                Lc(c);
                if (qk) {
                    var d = c.replace("/a?", "/td?");
                    Lc(d)
                }
                Ek = qk = !1
            }
        }
    }
    var Ek = !1;
    function Fk(a) {
        yk[a] || (a !== xk && (Dk(),
        xk = a),
        Ek = !0,
        zk || (zk = l.setTimeout(Dk, 500)),
        2022 <= Ck().length && Dk())
    }
    var Gk = Ka();
    function Hk() {
        Gk = Ka()
    }
    function Ik() {
        return [["v", "3"], ["t", "t"], ["pid", Gk]]
    }
    ;var Jk = []
      , Kk = [];
    function Lk(a) {
        R(75) && -1 === Kk.indexOf(a) && (Jk.push(a),
        Kk.push(a))
    }
    function Mk(a) {
        var b = [];
        if (!Jk.length)
            return b;
        for (var c = ha(Jk), d = c.next(); !d.done; d = c.next())
            b.push([d.value, "1"]);
        a.zb && (a.eg(),
        Jk.length = 0);
        return b
    }
    ;var Nk = new function(a, b) {
        this.h = a;
        this.defaultValue = void 0 === b ? !1 : b
    }
    (1933);
    var Ok = function(a) {
        Ok[" "](a);
        return a
    };
    Ok[" "] = function() {}
    ;
    var Qk = function() {
        var a = Pk
          , b = "Bh";
        if (a.Bh && a.hasOwnProperty(b))
            return a.Bh;
        var c = new a;
        return a.Bh = c
    };
    var Pk = function() {
        var a = {};
        this.h = function() {
            var b = Nk.h
              , c = Nk.defaultValue;
            return null != a[b] ? a[b] : c
        }
        ;
        this.s = function() {
            a[Nk.h] = !0
        }
    };
    var Rk = !1
      , Sk = !1
      , Tk = {}
      , Uk = {}
      , Vk = {
        ad_storage: !1,
        ad_user_data: !1,
        ad_personalization: !1
    };
    function Wk() {
        var a = Dc("google_tag_data", {});
        return a.ics = a.ics || new Xk
    }
    var Xk = function() {
        this.entries = {};
        this.waitPeriodTimedOut = this.wasSetLate = this.accessedAny = this.accessedDefault = this.usedImplicit = this.usedUpdate = this.usedDefault = this.usedDeclare = this.active = !1;
        this.h = []
    };
    Xk.prototype.default = function(a, b, c, d, e, f) {
        this.usedDefault || this.usedDeclare || !this.accessedDefault && !this.accessedAny || (this.wasSetLate = !0);
        this.usedDefault = this.active = !0;
        Bb("TAGGING", 19);
        void 0 == b ? Bb("TAGGING", 18) : Yk(this, a, "granted" === b, c, d, e, f)
    }
    ;
    Xk.prototype.waitForUpdate = function(a, b) {
        for (var c = 0; c < a.length; c++)
            Yk(this, a[c], void 0, void 0, "", "", b)
    }
    ;
    var Yk = function(a, b, c, d, e, f, g) {
        var h = a.entries
          , m = h[b] || {}
          , n = m.region
          , p = d && k(d) ? d.toUpperCase() : void 0;
        e = e.toUpperCase();
        f = f.toUpperCase();
        if (Zk(p, n, e, f)) {
            var q = !!(g && 0 < g && void 0 === m.update)
              , r = {
                region: p,
                declare_region: m.declare_region,
                implicit: m.implicit,
                default: void 0 !== c ? c : m.default,
                declare: m.declare,
                update: m.update,
                quiet: q
            };
            if ("" !== e || !1 !== m.default)
                h[b] = r;
            q && l.setTimeout(function() {
                h[b] === r && r.quiet && (Bb("TAGGING", 2),
                a.waitPeriodTimedOut = !0,
                a.clearTimeout(b, void 0),
                a.notifyListeners())
            }, g)
        }
    };
    aa = Xk.prototype;
    aa.clearTimeout = function(a, b) {
        var c = [a], d;
        for (d in Tk)
            Tk.hasOwnProperty(d) && Tk[d] === a && c.push(d);
        var e = this.entries[a] || {}
          , f = this.getConsentState(a);
        if (e.quiet) {
            e.quiet = !1;
            for (var g = ha(c), h = g.next(); !h.done; h = g.next())
                $k(this, h.value)
        } else if (void 0 !== b && f !== b)
            for (var m = ha(c), n = m.next(); !n.done; n = m.next())
                $k(this, n.value)
    }
    ;
    aa.update = function(a, b) {
        this.usedDefault || this.usedDeclare || this.usedUpdate || !this.accessedAny || (this.wasSetLate = !0);
        this.usedUpdate = this.active = !0;
        if (void 0 != b) {
            var c = this.getConsentState(a)
              , d = this.entries;
            (d[a] = d[a] || {}).update = "granted" === b;
            this.clearTimeout(a, c)
        }
    }
    ;
    aa.declare = function(a, b, c, d, e) {
        this.usedDeclare = this.active = !0;
        var f = this.entries
          , g = f[a] || {}
          , h = g.declare_region
          , m = c && k(c) ? c.toUpperCase() : void 0;
        d = d.toUpperCase();
        e = e.toUpperCase();
        if (Zk(m, h, d, e)) {
            var n = {
                region: g.region,
                declare_region: m,
                declare: "granted" === b,
                implicit: g.implicit,
                default: g.default,
                update: g.update,
                quiet: g.quiet
            };
            if ("" !== d || !1 !== g.declare)
                f[a] = n
        }
    }
    ;
    aa.implicit = function(a, b) {
        this.usedImplicit = !0;
        var c = this.entries
          , d = c[a] = c[a] || {};
        !1 !== d.implicit && (d.implicit = "granted" === b)
    }
    ;
    aa.getConsentState = function(a) {
        var b = this.entries
          , c = b[a] || {}
          , d = c.update;
        if (void 0 !== d)
            return d ? 1 : 2;
        d = c.default;
        if (void 0 !== d)
            return d ? 1 : 2;
        if (Tk.hasOwnProperty(a)) {
            var e = b[Tk[a]] || {};
            d = e.update;
            if (void 0 !== d)
                return d ? 1 : 2;
            d = e.default;
            if (void 0 !== d)
                return d ? 1 : 2
        }
        d = c.declare;
        if (void 0 !== d)
            return d ? 1 : 2;
        d = c.implicit;
        return void 0 !== d ? d ? 3 : 4 : Wf(19) && Vk.hasOwnProperty(a) ? (Bb("TAGGING", 22),
        Vk[a] ? 3 : 4) : 0
    }
    ;
    aa.addListener = function(a, b) {
        this.h.push({
            consentTypes: a,
            Ml: b
        })
    }
    ;
    var $k = function(a, b) {
        for (var c = 0; c < a.h.length; ++c) {
            var d = a.h[c];
            Ia(d.consentTypes) && -1 !== d.consentTypes.indexOf(b) && (d.Wj = !0)
        }
    };
    Xk.prototype.notifyListeners = function(a, b) {
        for (var c = 0; c < this.h.length; ++c) {
            var d = this.h[c];
            if (d.Wj) {
                d.Wj = !1;
                try {
                    d.Ml({
                        consentEventId: a,
                        consentPriorityId: b
                    })
                } catch (e) {}
            }
        }
    }
    ;
    function Zk(a, b, c, d) {
        return "" === c || a === d ? !0 : a === c ? b !== d : !a && !b
    }
    function al(a, b, c) {
        var d = gj()
          , e = hj()
          , f = Uk[a] || {}
          , g = f.region
          , h = c && k(c) ? c.toUpperCase() : void 0;
        d = d.toUpperCase();
        e = e.toUpperCase();
        if (Zk(h, g, d, e)) {
            var m = {
                enabled: "granted" === b,
                region: h
            };
            if ("" !== d || !1 !== f.enabled)
                Uk[a] = m
        }
    }
    function bl(a) {
        var b = Wk();
        if ("ad_user_data" === a)
            if (Wf(22)) {
                var c = b.getConsentState("ad_storage");
                if (2 !== c && 4 !== c)
                    return c
            } else
                Wf(21) && (a = "ad_storage");
        return b.getConsentState(a)
    }
    var cl = function(a) {
        Wk().accessedAny = !0;
        return (k(a) ? [a] : a).every(function(b) {
            switch (bl(b)) {
            case 1:
            case 3:
                return !0;
            case 2:
            case 4:
                return !1;
            default:
                return !0
            }
        })
    }
      , dl = function(a) {
        Wk().accessedAny = !0;
        return bl(a)
    }
      , el = function(a) {
        for (var b = {}, c = ha(a), d = c.next(); !d.done; d = c.next()) {
            var e = d.value;
            b[e] = void 0 === Uk[e] || !1 !== Uk[e].enabled
        }
        return b
    }
      , fl = function(a) {
        var b = Wk();
        b.accessedAny = !0;
        return !(b.entries[a] || {}).quiet
    }
      , gl = function() {
        if (!Qk().h())
            return !1;
        var a = Wk();
        a.accessedAny = !0;
        return a.active
    }
      , hl = function(a, b) {
        if (Wf(21)) {
            for (var c = [], d = a.find(function(h) {
                return "ad_storage" === h
            }), e = ha(a), f = e.next(); !f.done; f = e.next()) {
                var g = f.value;
                if ("ad_user_data" === g) {
                    if (d)
                        continue;
                    c.push("ad_storage")
                }
                c.push(g)
            }
            Wk().addListener(c, b)
        } else
            Wk().addListener(a, b)
    }
      , il = function(a, b) {
        Wk().notifyListeners(a, b)
    }
      , jl = function(a, b) {
        function c() {
            for (var e = 0; e < b.length; e++)
                if (!fl(b[e]))
                    return !0;
            return !1
        }
        if (c()) {
            var d = !1;
            hl(b, function(e) {
                d || c() || (d = !0,
                a(e))
            })
        } else
            a({})
    }
      , kl = function(a, b) {
        function c() {
            for (var h = [], m = 0; m < e.length; m++) {
                var n = e[m];
                cl(n) && !f[n] && h.push(n)
            }
            return h
        }
        function d(h) {
            for (var m = 0; m < h.length; m++)
                f[h[m]] = !0
        }
        var e = k(b) ? [b] : b
          , f = {}
          , g = c();
        g.length !== e.length && (d(g),
        hl(e, function(h) {
            function m(q) {
                0 !== q.length && (d(q),
                h.consentTypes = q,
                a(h))
            }
            var n = c();
            if (0 !== n.length) {
                var p = Object.keys(f).length;
                n.length + p >= e.length ? m(n) : l.setTimeout(function() {
                    m(c())
                }, 500)
            }
        }))
    };
    function ll() {}
    function ml() {}
    ;var nl = [M.g.J, M.g.R, M.g.N, M.g.xa], ol, pl, ql = function(a) {
        for (var b = a[M.g.Ab], c = Array.isArray(b) ? b : [b], d = {
            Me: 0
        }; d.Me < c.length; d = {
            Me: d.Me
        },
        ++d.Me)
            Na(a, function(e) {
                return function(f, g) {
                    if (f !== M.g.Ab) {
                        var h = c[e.Me]
                          , m = gj()
                          , n = hj();
                        Sk = !0;
                        Rk && Bb("TAGGING", 20);
                        Wk().declare(f, g, h, m, n)
                    }
                }
            }(d))
    }, rl = function(a) {
        R(40) && (!pl && ol && Lk("crc"),
        pl = !0);
        var b = a[M.g.Ab];
        b && L(40);
        var c = a[M.g.jf];
        c && L(41);
        for (var d = Ia(b) ? b : [b], e = {
            Ne: 0
        }; e.Ne < d.length; e = {
            Ne: e.Ne
        },
        ++e.Ne)
            Na(a, function(f) {
                return function(g, h) {
                    if (g !== M.g.Ab && g !== M.g.jf) {
                        var m = d[f.Ne]
                          , n = Number(c)
                          , p = gj()
                          , q = hj();
                        Rk = !0;
                        Sk && Bb("TAGGING", 20);
                        Wk().default(g, h, m, p, q, n)
                    }
                }
            }(e))
    }, sl = function(a, b) {
        ol = !0;
        Na(a, function(c, d) {
            Rk = !0;
            Sk && Bb("TAGGING", 20);
            Wk().update(c, d)
        });
        il(b.eventId, b.priorityId)
    }, tl = function(a) {
        for (var b = a[M.g.Ab], c = Array.isArray(b) ? b : [b], d = {
            sd: 0
        }; d.sd < c.length; d = {
            sd: d.sd
        },
        ++d.sd)
            a.hasOwnProperty("all") && Na(ri, function(e) {
                return function(f) {
                    al(f, a.all, c[e.sd])
                }
            }(d)),
            Na(a, function(e) {
                return function(f, g) {
                    f !== M.g.Ab && "all" !== f && al(f, g, c[e.sd])
                }
            }(d))
    }, U = function(a) {
        Array.isArray(a) || (a = [a]);
        return a.every(function(b) {
            return cl(b)
        })
    }, ul = function(a, b) {
        hl(a, b)
    }, vl = function(a, b) {
        kl(a, b)
    }, wl = function(a, b) {
        jl(a, b)
    }, xl = function() {
        var a = [M.g.J, M.g.xa, M.g.N];
        Wk().waitForUpdate(a, 500)
    }, yl = function(a) {
        for (var b = ha(a), c = b.next(); !c.done; c = b.next()) {
            var d = c.value;
            Wk().clearTimeout(d, void 0)
        }
        il()
    };
    var zl = function() {
        function a(b) {
            ti.pscdl = b
        }
        if (void 0 === ti.pscdl)
            try {
                "cookieDeprecationLabel"in Bc ? (a("pending"),
                Bc.cookieDeprecationLabel.getValue().then(a)) : a("noapi")
            } catch (b) {
                a("error")
            }
    };
    var Al = /[A-Z]+/
      , Bl = /\s/
      , Cl = function(a, b) {
        if (k(a)) {
            a = Sa(a);
            var c = a.indexOf("-");
            if (!(0 > c)) {
                var d = a.substring(0, c);
                if (Al.test(d)) {
                    var e = a.substring(c + 1), f;
                    if (b) {
                        var g = function(n) {
                            var p = n.indexOf("/");
                            return 0 > p ? [n] : [n.substring(0, p), n.substring(p + 1)]
                        };
                        f = g(e);
                        if ("DC" === d && 2 === f.length) {
                            var h = g(f[1]);
                            2 === h.length && (f[1] = h[0],
                            f.push(h[1]))
                        }
                    } else {
                        f = e.split("/");
                        for (var m = 0; m < f.length; m++)
                            if (!f[m] || Bl.test(f[m]) && ("AW" !== d || 1 !== m))
                                return
                    }
                    return {
                        id: a,
                        prefix: d,
                        ba: d + "-" + f[0],
                        O: f
                    }
                }
            }
        }
    }
      , El = function(a, b) {
        for (var c = {}, d = 0; d < a.length; ++d) {
            var e = Cl(a[d], b);
            e && (c[e.id] = e)
        }
        Dl(c);
        var f = [];
        Na(c, function(g, h) {
            f.push(h)
        });
        return f
    };
    function Dl(a) {
        var b = [], c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                "AW" === d.prefix && d.O[1] && b.push(d.ba)
            }
        for (var e = 0; e < b.length; ++e)
            delete a[b[e]]
    }
    ;var Fl = ""
      , Gl = [];
    function Hl(a) {
        var b = [];
        Fl && b.push(["dl", encodeURIComponent(Fl)]);
        0 < Gl.length && b.push(["tdp", Gl.join(".")]);
        a.zb && (Fl = "",
        Gl.length = 0,
        b.length && a.eg());
        return b
    }
    ;var Il = [];
    function Jl(a) {
        if (!Il.length)
            return [];
        var b = [["tdc", Il.join("!")]];
        a.zb && (a.eg(),
        Il.length = 0);
        return b
    }
    ;var Kl = {
        initialized: 11,
        complete: 12,
        interactive: 13
    }
      , Ll = {}
      , Ml = Object.freeze((Ll[M.g.Qa] = !0,
    Ll))
      , Nl = 0 <= z.location.search.indexOf("?gtm_diagnostics=") || 0 <= z.location.search.indexOf("&gtm_diagnostics=")
      , Pl = function(a, b, c) {
        if (uk && "config" === a && !(1 < Cl(b).O.length)) {
            var d, e = Dc("google_tag_data", {});
            e.td || (e.td = {});
            d = e.td;
            var f = ob(c.F);
            ob(c.h, f);
            var g = [], h;
            for (h in d) {
                var m = Ol(d[h], f);
                m.length && (Nl && console.log(m),
                g.push(h))
            }
            g.length && (g.length && uk && Il.push(b + "*" + g.join(".")),
            Bb("TAGGING", Kl[z.readyState] || 14));
            d[b] = f
        }
    };
    function Ql(a, b) {
        var c = {}, d;
        for (d in b)
            b.hasOwnProperty(d) && (c[d] = !0);
        for (var e in a)
            a.hasOwnProperty(e) && (c[e] = !0);
        return c
    }
    function Ol(a, b, c, d) {
        c = void 0 === c ? {} : c;
        d = void 0 === d ? "" : d;
        if (a === b)
            return [];
        var e = function(q, r) {
            var t = r[q];
            return void 0 === t ? Ml[q] : t
        }, f;
        for (f in Ql(a, b)) {
            var g = (d ? d + "." : "") + f
              , h = e(f, a)
              , m = e(f, b)
              , n = "object" === lb(h) || "array" === lb(h)
              , p = "object" === lb(m) || "array" === lb(m);
            if (n && p)
                Ol(h, m, c, g);
            else if (n || p || h !== m)
                c[g] = !0
        }
        return Object.keys(c)
    }
    ;var Rl = function(a, b, c, d, e, f, g, h, m, n, p) {
        this.eventId = a;
        this.priorityId = b;
        this.h = c;
        this.M = d;
        this.C = e;
        this.F = f;
        this.s = g;
        this.eventMetadata = h;
        this.onSuccess = m;
        this.onFailure = n;
        this.isGtmEvent = p
    }
      , Sl = function(a, b) {
        var c = [];
        switch (b) {
        case 3:
            c.push(a.h);
            c.push(a.M);
            c.push(a.C);
            c.push(a.F);
            c.push(a.s);
            break;
        case 2:
            c.push(a.h);
            break;
        case 1:
            c.push(a.M);
            c.push(a.C);
            c.push(a.F);
            c.push(a.s);
            break;
        case 4:
            c.push(a.h),
            c.push(a.M),
            c.push(a.C),
            c.push(a.F)
        }
        return c
    }
      , S = function(a, b, c, d) {
        for (var e = ha(Sl(a, void 0 === d ? 3 : d)), f = e.next(); !f.done; f = e.next()) {
            var g = f.value;
            if (void 0 !== g[b])
                return g[b]
        }
        return c
    }
      , Tl = function(a) {
        for (var b = {}, c = Sl(a, 4), d = ha(c), e = d.next(); !e.done; e = d.next())
            for (var f = Object.keys(e.value), g = ha(f), h = g.next(); !h.done; h = g.next())
                b[h.value] = 1;
        return Object.keys(b)
    }
      , Ul = function(a, b, c) {
        function d(n) {
            nb(n) && Na(n, function(p, q) {
                f = !0;
                e[p] = q
            })
        }
        var e = {}
          , f = !1
          , g = Sl(a, void 0 === c ? 3 : c);
        g.reverse();
        for (var h = ha(g), m = h.next(); !m.done; m = h.next())
            d(m.value[b]);
        return f ? e : void 0
    }
      , Vl = function(a) {
        for (var b = [M.g.Uc, M.g.Qc, M.g.Rc, M.g.Sc, M.g.Tc, M.g.Vc, M.g.Wc], c = Sl(a, 3), d = ha(c), e = d.next(); !e.done; e = d.next()) {
            for (var f = e.value, g = {}, h = !1, m = ha(b), n = m.next(); !n.done; n = m.next()) {
                var p = n.value;
                void 0 !== f[p] && (g[p] = f[p],
                h = !0)
            }
            var q = h ? g : void 0;
            if (q)
                return q
        }
        return {}
    }
      , Wl = function(a, b) {
        this.Ff = a;
        this.Gf = b;
        this.C = {};
        this.Zb = {};
        this.h = {};
        this.F = {};
        this.od = {};
        this.Yb = {};
        this.s = {};
        this.Da = function() {}
        ;
        this.W = function() {}
        ;
        this.M = !1
    }
      , Xl = function(a, b) {
        a.C = b;
        return a
    }
      , Yl = function(a, b) {
        a.Zb = b;
        return a
    }
      , Zl = function(a, b) {
        a.h = b;
        return a
    }
      , $l = function(a, b) {
        a.F = b;
        return a
    }
      , am = function(a, b) {
        a.od = b;
        return a
    }
      , bm = function(a, b) {
        a.Yb = b;
        return a
    }
      , cm = function(a, b) {
        a.s = b || {};
        return a
    }
      , dm = function(a, b) {
        a.Da = b;
        return a
    }
      , em = function(a, b) {
        a.W = b;
        return a
    }
      , fm = function(a, b) {
        a.M = b;
        return a
    }
      , gm = function(a) {
        return new Rl(a.Ff,a.Gf,a.C,a.Zb,a.h,a.F,a.Yb,a.s,a.Da,a.W,a.M)
    };
    var hm = {};
    function im(a, b, c) {
        uk && void 0 !== a && (hm[a] = hm[a] || [],
        hm[a].push(c + b),
        Fk(a))
    }
    function jm(a) {
        var b = a.eventId
          , c = a.zb
          , d = []
          , e = hm[b] || [];
        e.length && d.push(["epr", e.join(".")]);
        c && delete hm[b];
        return d
    }
    ;var lm = function(a, b) {
        var c = Cl(Wj(a), !0);
        c && km.register(c, b)
    }
      , mm = function(a, b, c, d) {
        var e = Cl(c, d.isGtmEvent);
        e && km.push("event", [b, a], e, d)
    }
      , nm = function(a, b, c, d) {
        var e = Cl(c, d.isGtmEvent);
        e && km.push("get", [a, b], e, d)
    }
      , pm = function(a) {
        var b = Cl(Wj(a), !0), c;
        b ? c = om(km, b).h : c = {};
        return c
    }
      , qm = function(a, b) {
        var c = Cl(Wj(a), !0);
        if (c) {
            var d = km
              , e = ob(b);
            ob(om(d, c).h, e);
            om(d, c).h = e
        }
    }
      , rm = function() {
        this.status = 1;
        this.M = {};
        this.h = {};
        this.s = {};
        this.W = null;
        this.F = {};
        this.C = !1
    }
      , sm = function(a, b, c, d) {
        var e = Ua();
        this.type = a;
        this.C = e;
        this.h = b;
        this.s = c;
        this.messageContext = d
    }
      , tm = function() {
        this.s = {};
        this.C = {};
        this.h = []
    }
      , om = function(a, b) {
        var c = b.ba;
        return a.s[c] = a.s[c] || new rm
    }
      , um = function(a, b, c, d) {
        if (d.h) {
            var e = om(a, d.h)
              , f = e.W;
            if (f) {
                var g = ob(c)
                  , h = ob(e.M[d.h.id])
                  , m = ob(e.F)
                  , n = ob(e.h)
                  , p = ob(a.C)
                  , q = {};
                if (uk)
                    try {
                        q = ob(Qi)
                    } catch (v) {
                        L(72)
                    }
                var r = d.h.prefix
                  , t = function(v) {
                    im(d.messageContext.eventId, r, v)
                }
                  , u = gm(fm(em(dm(cm(am($l(bm(Zl(Yl(Xl(new Wl(d.messageContext.eventId,d.messageContext.priorityId), g), h), m), n), p), q), d.messageContext.eventMetadata), function() {
                    if (t) {
                        var v = t;
                        t = void 0;
                        v("2");
                        if (d.messageContext.onSuccess)
                            d.messageContext.onSuccess()
                    }
                }), function() {
                    if (t) {
                        var v = t;
                        t = void 0;
                        v("3");
                        if (d.messageContext.onFailure)
                            d.messageContext.onFailure()
                    }
                }), !!d.messageContext.isGtmEvent));
                try {
                    im(d.messageContext.eventId, r, "1"),
                    Pl(d.type, d.h.id, u),
                    f(d.h.id, b, d.C, u)
                } catch (v) {
                    im(d.messageContext.eventId, r, "4")
                }
            }
        }
    };
    tm.prototype.register = function(a, b, c) {
        var d = om(this, a);
        3 !== d.status && (d.W = b,
        d.status = 3,
        c && (ob(d.h, c),
        d.h = c),
        this.flush())
    }
    ;
    tm.prototype.push = function(a, b, c, d) {
        void 0 !== c && (1 === om(this, c).status && (om(this, c).status = 2,
        this.push("require", [{}], c, {})),
        om(this, c).C && (d.deferrable = !1));
        this.h.push(new sm(a,c,b,d));
        d.deferrable || this.flush()
    }
    ;
    tm.prototype.flush = function(a) {
        for (var b = this, c = [], d = !1, e = {}; this.h.length; e = {
            Bc: void 0,
            th: void 0
        }) {
            var f = this.h[0]
              , g = f.h;
            if (f.messageContext.deferrable)
                !g || om(this, g).C ? (f.messageContext.deferrable = !1,
                this.h.push(f)) : c.push(f),
                this.h.shift();
            else {
                switch (f.type) {
                case "require":
                    if (3 !== om(this, g).status && !a) {
                        this.h.push.apply(this.h, c);
                        return
                    }
                    break;
                case "set":
                    Na(f.s[0], function(r, t) {
                        ob(ab(r, t), b.C)
                    });
                    break;
                case "config":
                    var h = om(this, g);
                    e.Bc = {};
                    Na(f.s[0], function(r) {
                        return function(t, u) {
                            ob(ab(t, u), r.Bc)
                        }
                    }(e));
                    var m = !!e.Bc[M.g.Xb];
                    delete e.Bc[M.g.Xb];
                    var n = g.ba === g.id;
                    m || (n ? h.F = {} : h.M[g.id] = {});
                    h.C && m || um(this, M.g.da, e.Bc, f);
                    h.C = !0;
                    n ? ob(e.Bc, h.F) : (ob(e.Bc, h.M[g.id]),
                    L(70));
                    d = !0;
                    break;
                case "event":
                    e.th = {};
                    Na(f.s[0], function(r) {
                        return function(t, u) {
                            ob(ab(t, u), r.th)
                        }
                    }(e));
                    um(this, f.s[1], e.th, f);
                    break;
                case "get":
                    var p = {}
                      , q = (p[M.g.rb] = f.s[0],
                    p[M.g.Db] = f.s[1],
                    p);
                    um(this, M.g.Sa, q, f)
                }
                this.h.shift();
                vm(this, f)
            }
        }
        this.h.push.apply(this.h, c);
        d && this.flush()
    }
    ;
    var vm = function(a, b) {
        if ("require" !== b.type)
            if (b.h)
                for (var c = om(a, b.h).s[b.type] || [], d = 0; d < c.length; d++)
                    c[d]();
            else
                for (var e in a.s)
                    if (a.s.hasOwnProperty(e)) {
                        var f = a.s[e];
                        if (f && f.s)
                            for (var g = f.s[b.type] || [], h = 0; h < g.length; h++)
                                g[h]()
                    }
    }
      , km = new tm;
    function wm(a, b) {
        if ("" === a)
            return b;
        var c = Number(a);
        return isNaN(c) ? b : c
    }
    ;var xm = function(a, b) {
        var c = function() {};
        c.prototype = a.prototype;
        var d = new c;
        a.apply(d, Array.prototype.slice.call(arguments, 1));
        return d
    }
      , ym = function(a) {
        var b = a;
        return function() {
            if (b) {
                var c = b;
                b = null;
                c()
            }
        }
    };
    var zm = function(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    };
    function Am() {
        return dc ? !!kc && !!kc.platform : !1
    }
    function Bm() {
        return nc("iPhone") && !nc("iPod") && !nc("iPad")
    }
    function Cm() {
        Bm() || nc("iPad") || nc("iPod")
    }
    ;pc();
    oc() || nc("Trident") || nc("MSIE");
    nc("Edge");
    !nc("Gecko") || -1 != jc().toLowerCase().indexOf("webkit") && !nc("Edge") || nc("Trident") || nc("MSIE") || nc("Edge");
    -1 != jc().toLowerCase().indexOf("webkit") && !nc("Edge") && nc("Mobile");
    Am() || nc("Macintosh");
    Am() || nc("Windows");
    (Am() ? "Linux" === kc.platform : nc("Linux")) || Am() || nc("CrOS");
    Am() || nc("Android");
    Bm();
    nc("iPad");
    nc("iPod");
    Cm();
    jc().toLowerCase().indexOf("kaios");
    var Dm = function(a, b, c, d) {
        for (var e = b, f = c.length; 0 <= (e = a.indexOf(c, e)) && e < d; ) {
            var g = a.charCodeAt(e - 1);
            if (38 == g || 63 == g) {
                var h = a.charCodeAt(e + f);
                if (!h || 61 == h || 38 == h || 35 == h)
                    return e
            }
            e += f + 1
        }
        return -1
    }
      , Em = /#|$/
      , Fm = function(a, b) {
        var c = a.search(Em)
          , d = Dm(a, 0, b, c);
        if (0 > d)
            return null;
        var e = a.indexOf("&", d);
        if (0 > e || e > c)
            e = c;
        d += b.length + 1;
        return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "))
    }
      , Gm = /[?&]($|#)/
      , Hm = function(a, b, c) {
        for (var d, e = a.search(Em), f = 0, g, h = []; 0 <= (g = Dm(a, f, b, e)); )
            h.push(a.substring(f, g)),
            f = Math.min(a.indexOf("&", g) + 1 || e, e);
        h.push(a.slice(f));
        d = h.join("").replace(Gm, "$1");
        var m, n = null != c ? "=" + encodeURIComponent(String(c)) : "";
        var p = b + n;
        if (p) {
            var q, r = d.indexOf("#");
            0 > r && (r = d.length);
            var t = d.indexOf("?"), u;
            0 > t || t > r ? (t = r,
            u = "") : u = d.substring(t + 1, r);
            q = [d.slice(0, t), u, d.slice(r)];
            var v = q[1];
            q[1] = p ? v ? v + "&" + p : p : v;
            m = q[0] + (q[1] ? "?" + q[1] : "") + q[2]
        } else
            m = d;
        return m
    };
    var Im = function(a) {
        try {
            var b;
            if (b = !!a && null != a.location.href)
                a: {
                    try {
                        Ok(a.foo);
                        b = !0;
                        break a
                    } catch (c) {}
                    b = !1
                }
            return b
        } catch (c) {
            return !1
        }
    }
      , Jm = function(a, b) {
        if (a)
            for (var c in a)
                Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    };
    function Km(a) {
        if (!a || !z.head)
            return null;
        var b = Lm("META");
        z.head.appendChild(b);
        b.httpEquiv = "origin-trial";
        b.content = a;
        return b
    }
    var Mm = function(a) {
        if (l.top == l)
            return 0;
        if (void 0 === a ? 0 : a) {
            var b = l.location.ancestorOrigins;
            if (b)
                return b[b.length - 1] == l.location.origin ? 1 : 2
        }
        return Im(l.top) ? 1 : 2
    }
      , Lm = function(a, b) {
        b = void 0 === b ? document : b;
        return b.createElement(String(a).toLowerCase())
    };
    function Nm(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        a.google_image_requests || (a.google_image_requests = []);
        var e = Lm("IMG", a.document);
        if (c) {
            var f = function() {
                if (c) {
                    var g = a.google_image_requests
                      , h = cc(g, e);
                    0 <= h && Array.prototype.splice.call(g, h, 1)
                }
                e.removeEventListener && e.removeEventListener("load", f, !1);
                e.removeEventListener && e.removeEventListener("error", f, !1)
            };
            zm(e, "load", f);
            zm(e, "error", f)
        }
        d && (e.attributionSrc = "");
        e.src = b;
        a.google_image_requests.push(e)
    }
    var Pm = function(a) {
        var b;
        b = void 0 === b ? !1 : b;
        var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
        Jm(a, function(d, e) {
            if (d || 0 === d)
                c += "&" + e + "=" + encodeURIComponent("" + d)
        });
        Om(c, b)
    }
      , Om = function(a, b) {
        var c = window, d;
        b = void 0 === b ? !1 : b;
        d = void 0 === d ? !1 : d;
        if (c.fetch) {
            var e = {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            };
            d && (e.mode = "cors",
            "setAttributionReporting"in XMLHttpRequest.prototype ? e.attributionReporting = {
                eventSourceEligible: "true",
                triggerEligible: "false"
            } : e.headers = {
                "Attribution-Reporting-Eligible": "event-source"
            });
            c.fetch(a, e)
        } else
            Nm(c, a, void 0 === b ? !1 : b, void 0 === d ? !1 : d)
    };
    var Qm = function() {};
    var Rm = function(a) {
        void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
        void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
        return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
    }
      , Sm = function(a, b) {
        b = void 0 === b ? {} : b;
        this.s = a;
        this.h = null;
        this.M = {};
        this.Da = 0;
        var c;
        this.W = null != (c = b.lk) ? c : 500;
        var d;
        this.F = null != (d = b.fo) ? d : !1;
        this.C = null
    };
    ra(Sm, Qm);
    var Um = function(a) {
        return "function" === typeof a.s.__tcfapi || null != Tm(a)
    };
    Sm.prototype.addEventListener = function(a) {
        var b = this
          , c = {
            internalBlockOnErrors: this.F
        }
          , d = ym(function() {
            return a(c)
        })
          , e = 0;
        -1 !== this.W && (e = setTimeout(function() {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, this.W));
        var f = function(g, h) {
            clearTimeout(e);
            g ? (c = g,
            c.internalErrorState = Rm(c),
            c.internalBlockOnErrors = b.F,
            h && 0 === c.internalErrorState || (c.tcString = "tcunavailable",
            h || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable",
            c.internalErrorState = 3);
            a(c)
        };
        try {
            Vm(this, "addEventListener", f)
        } catch (g) {
            c.tcString = "tcunavailable",
            c.internalErrorState = 3,
            e && (clearTimeout(e),
            e = 0),
            d()
        }
    }
    ;
    Sm.prototype.removeEventListener = function(a) {
        a && a.listenerId && Vm(this, "removeEventListener", null, a.listenerId)
    }
    ;
    var Xm = function(a, b, c) {
        var d;
        d = void 0 === d ? "755" : d;
        var e;
        a: {
            if (a.publisher && a.publisher.restrictions) {
                var f = a.publisher.restrictions[b];
                if (void 0 !== f) {
                    e = f[void 0 === d ? "755" : d];
                    break a
                }
            }
            e = void 0
        }
        var g = e;
        if (0 === g)
            return !1;
        var h = c;
        2 === c ? (h = 0,
        2 === g && (h = 1)) : 3 === c && (h = 1,
        1 === g && (h = 0));
        var m;
        if (0 === h)
            if (a.purpose && a.vendor) {
                var n = Wm(a.vendor.consents, void 0 === d ? "755" : d);
                m = n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? !0 : n && Wm(a.purpose.consents, b)
            } else
                m = !0;
        else
            m = 1 === h ? a.purpose && a.vendor ? Wm(a.purpose.legitimateInterests, b) && Wm(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
        return m
    }
      , Wm = function(a, b) {
        return !(!a || !a[b])
    }
      , Vm = function(a, b, c, d) {
        c || (c = function() {}
        );
        if ("function" === typeof a.s.__tcfapi) {
            var e = a.s.__tcfapi;
            e(b, 2, c, d)
        } else if (Tm(a)) {
            Ym(a);
            var f = ++a.Da;
            a.M[f] = c;
            if (a.h) {
                var g = {};
                a.h.postMessage((g.__tcfapiCall = {
                    command: b,
                    version: 2,
                    callId: f,
                    parameter: d
                },
                g), "*")
            }
        } else
            c({}, !1)
    }
      , Tm = function(a) {
        if (a.h)
            return a.h;
        var b;
        a: {
            for (var c = a.s, d = 0; 50 > d; ++d) {
                var e;
                try {
                    e = !(!c.frames || !c.frames.__tcfapiLocator)
                } catch (h) {
                    e = !1
                }
                if (e) {
                    b = c;
                    break a
                }
                var f;
                b: {
                    try {
                        var g = c.parent;
                        if (g && g != c) {
                            f = g;
                            break b
                        }
                    } catch (h) {}
                    f = null
                }
                if (!(c = f))
                    break
            }
            b = null
        }
        a.h = b;
        return a.h
    }
      , Ym = function(a) {
        a.C || (a.C = function(b) {
            try {
                var c;
                c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                a.M[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }
        ,
        zm(a.s, "message", a.C))
    }
      , Zm = function(a) {
        if (!1 === a.gdprApplies)
            return !0;
        void 0 === a.internalErrorState && (a.internalErrorState = Rm(a));
        return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ? (Pm({
            e: String(a.internalErrorState)
        }),
        !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0
    };
    var $m = {
        1: 0,
        3: 0,
        4: 0,
        7: 3,
        9: 3,
        10: 3
    };
    function an() {
        var a = ti.tcf || {};
        return ti.tcf = a
    }
    var gn = function() {
        var a = an()
          , b = new Sm(l,{
            lk: -1
        });
        Um(b) && !bn() && !cn() && L(124);
        if (!a.active && Um(b)) {
            bn() && (a.active = !0,
            a.ic = {},
            a.cmpId = 0,
            a.tcfPolicyVersion = 0,
            Wk().active = !0,
            a.tcString = "tcunavailable");
            xl();
            try {
                b.addEventListener(function(c) {
                    if (0 !== c.internalErrorState)
                        dn(a),
                        yl([M.g.J, M.g.xa, M.g.N]),
                        Wk().active = !0;
                    else if (a.gdprApplies = c.gdprApplies,
                    a.cmpId = c.cmpId,
                    a.enableAdvertiserConsentMode = c.enableAdvertiserConsentMode,
                    cn() && (a.active = !0),
                    !en(c) || bn() || cn()) {
                        a.tcfPolicyVersion = c.tcfPolicyVersion;
                        var d;
                        if (!1 === c.gdprApplies) {
                            var e = {}, f;
                            for (f in $m)
                                $m.hasOwnProperty(f) && (e[f] = !0);
                            d = e;
                            b.removeEventListener(c)
                        } else if (en(c)) {
                            var g = {}, h;
                            for (h in $m)
                                if ($m.hasOwnProperty(h))
                                    if ("1" === h) {
                                        var m, n = c, p = {
                                            Rl: !0
                                        };
                                        p = void 0 === p ? {} : p;
                                        m = Zm(n) ? !1 === n.gdprApplies ? !0 : "tcunavailable" === n.tcString ? !p.Qj : (p.Qj || void 0 !== n.gdprApplies || p.Rl) && (p.Qj || "string" === typeof n.tcString && n.tcString.length) ? Xm(n, "1", 0) : !0 : !1;
                                        g["1"] = m
                                    } else
                                        g[h] = Xm(c, h, $m[h]);
                            d = g
                        }
                        if (d) {
                            a.tcString = c.tcString || "tcempty";
                            a.ic = d;
                            var q = {}
                              , r = (q[M.g.J] = a.ic["1"] ? "granted" : "denied",
                            q);
                            !0 !== a.gdprApplies ? (yl([M.g.J, M.g.xa, M.g.N]),
                            Wk().active = !0) : (r[M.g.xa] = a.ic["3"] && a.ic["4"] ? "granted" : "denied",
                            "number" === typeof a.tcfPolicyVersion && 4 <= a.tcfPolicyVersion ? r[M.g.N] = a.ic["1"] && a.ic["7"] ? "granted" : "denied" : yl([M.g.N]),
                            sl(r, {
                                eventId: 0
                            }, {
                                gdprApplies: a ? a.gdprApplies : void 0,
                                tcString: fn() || ""
                            }))
                        }
                    } else
                        yl([M.g.J, M.g.xa, M.g.N])
                })
            } catch (c) {
                dn(a),
                yl([M.g.J, M.g.xa, M.g.N]),
                Wk().active = !0
            }
        }
    };
    function dn(a) {
        a.type = "e";
        a.tcString = "tcunavailable"
    }
    function en(a) {
        return "tcloaded" === a.eventStatus || "useractioncomplete" === a.eventStatus || "cmpuishown" === a.eventStatus
    }
    var bn = function() {
        return !0 === l.gtag_enable_tcf_support
    };
    function cn() {
        return !0 === an().enableAdvertiserConsentMode
    }
    var fn = function() {
        var a = an();
        if (a.active)
            return a.tcString
    }
      , hn = function() {
        var a = an();
        if (a.active && void 0 !== a.gdprApplies)
            return a.gdprApplies ? "1" : "0"
    }
      , jn = function(a) {
        if (!$m.hasOwnProperty(String(a)))
            return !0;
        var b = an();
        return b.active && b.ic ? !!b.ic[String(a)] : !0
    }
      , kn = function() {
        return Um(new Sm(l,{
            lk: -1
        }))
    };
    var ln = [M.g.J, M.g.R, M.g.N, M.g.xa]
      , mn = {}
      , nn = (mn[M.g.J] = 1,
    mn[M.g.R] = 2,
    mn);
    function on(a) {
        if (void 0 === a)
            return 0;
        switch (S(a, M.g.ka)) {
        case void 0:
            return 1;
        case !1:
            return 3;
        default:
            return 2
        }
    }
    var pn = function(a) {
        var b = on(a);
        if (3 === b)
            return !1;
        switch (dl(M.g.xa)) {
        case 1:
        case 3:
            return !0;
        case 2:
            return !1;
        case 4:
            return 2 === b;
        case 0:
            return !0;
        default:
            return !1
        }
    }
      , qn = function() {
        return gl() || !cl(M.g.J) || !cl(M.g.R)
    }
      , rn = function() {
        var a = {}, b;
        for (b in nn)
            nn.hasOwnProperty(b) && (a[nn[b]] = dl(b));
        return "G1" + Pe(a[1] || 0) + Pe(a[2] || 0)
    }
      , sn = {}
      , tn = (sn[M.g.J] = 0,
    sn[M.g.R] = 1,
    sn[M.g.N] = 2,
    sn[M.g.xa] = 3,
    sn);
    function un(a) {
        switch (a) {
        case void 0:
            return 1;
        case !0:
            return 3;
        case !1:
            return 2;
        default:
            return 0
        }
    }
    var vn = function(a) {
        for (var b = "1", c = 0; c < ln.length; c++) {
            var d = b, e, f = ln[c], g = Tk[f];
            e = void 0 === g ? 0 : tn.hasOwnProperty(g) ? 12 | tn[g] : 8;
            var h = Wk();
            h.accessedAny = !0;
            var m = h.entries[f] || {};
            e = e << 2 | un(m.implicit);
            b = d + ("" + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[e] + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[un(m.declare) << 4 | un(m.default) << 2 | un(m.update)])
        }
        var n = b, p;
        p = "" + (gl() << 2 | on(a));
        return n + p
    }
      , wn = function() {
        if (!cl(M.g.N))
            return "-";
        for (var a = Object.keys(ri), b = el(a), c = "", d = ha(a), e = d.next(); !e.done; e = d.next()) {
            var f = e.value;
            b[f] && (c += ri[f])
        }
        return c || "-"
    }
      , xn = function() {
        return jj() || (bn() || cn()) && "1" === hn() ? "1" : "0"
    }
      , In = function() {
        return (jj() ? !0 : !(!bn() && !cn()) && "1" === hn()) || !cl(M.g.N)
    }
      , Jn = function() {
        var a = "0", b = "0", c;
        var d = an();
        c = d.active ? d.cmpId : void 0;
        "number" === typeof c && 0 <= c && 4095 >= c && (a = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[c >> 6 & 63],
        b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[c & 63]);
        var e = "0", f;
        var g = an();
        f = g.active ? g.tcfPolicyVersion : void 0;
        "number" === typeof f && 0 <= f && 63 >= f && (e = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[f]);
        var h = 0;
        jj() && (h |= 1);
        "1" === hn() && (h |= 2);
        bn() && (h |= 4);
        var m;
        var n = an();
        m = void 0 !== n.enableAdvertiserConsentMode ? n.enableAdvertiserConsentMode ? "1" : "0" : void 0;
        "1" === m && (h |= 8);
        Wk().waitPeriodTimedOut && (h |= 16);
        return "1" + a + b + e + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[h]
    };
    var Kn = function() {
        var a = !1;
        return a
    };
    var Ln = {
        UA: 1,
        AW: 2,
        DC: 3,
        G: 4,
        GF: 5,
        GT: 12,
        GTM: 14,
        HA: 6,
        MC: 7
    }
      , Mn = function(a, b) {
        var c = Xf.ctid.split("-")[0].toUpperCase()
          , d = {};
        d.ctid = Xf.ctid;
        d.dn = si.ue;
        d.jn = si.eh;
        d.Fm = Pj.qe ? 2 : 1;
        d.ze = Xf.canonicalContainerId;
        d.ze !== a && (d.gg = a);
        R(71) ? d.ik = 2 : R(70) && (d.ik = 1);
        zi ? (d.dg = Ln[c],
        d.dg || (d.dg = 0)) : d.dg = Di ? 13 : 10;
        Mi.F ? (d.Xf = 0,
        d.xl = 2) : Bi ? d.Xf = 1 : Kn() ? d.Xf = 2 : d.Xf = 3;
        var e = {};
        e[6] = Qj;
        d.Bl = e;
        var f;
        var g = d.dg
          , h = d.Xf;
        void 0 === g ? f = "" : (h || (h = 0),
        f = "" + Lg(1, 1) + Oe(g << 2 | h));
        var m = d.xl, n = 4 + f + (m ? "" + Lg(2, 1) + Oe(m) : ""), p, q = d.jn;
        p = q && Kg.test(q) ? "" + Lg(3, 2) + q : "";
        var r, t = d.dn;
        r = t ? "" + Lg(4, 1) + Oe(t) : "";
        var u;
        var v = d.ctid;
        if (v && b) {
            var w = v.split("-")
              , x = w[0].toUpperCase();
            if ("GTM" !== x && "OPT" !== x)
                u = "";
            else {
                var y = w[1];
                u = "" + Lg(5, 3) + Oe(1 + y.length) + (d.Fm || 0) + y
            }
        } else
            u = "";
        var B = d.ik, A = d.ze, F = d.gg, G = d.lo, D = n + p + r + u + (B ? "" + Lg(6, 1) + Oe(B) : "") + (A ? "" + Lg(7, 3) + Oe(A.length) + A : "") + (F ? "" + Lg(8, 3) + Oe(F.length) + F : "") + (G ? "" + Lg(9, 3) + Oe(G.length) + G : ""), E;
        var P = d.Bl;
        P = void 0 === P ? {} : P;
        for (var N = [], W = ha(Object.keys(P)), Z = W.next(); !Z.done; Z = W.next()) {
            var Q = Z.value;
            N[Number(Q)] = P[Q]
        }
        if (N.length) {
            var T = Lg(10, 3), la;
            if (0 === N.length)
                la = Oe(0);
            else {
                for (var fa = [], ca = 0, Fa = !1, Da = 0; Da < N.length; Da++) {
                    Fa = !0;
                    var Ca = Da % 6;
                    N[Da] && (ca |= 1 << Ca);
                    5 === Ca && (fa.push(Oe(ca)),
                    ca = 0,
                    Fa = !1)
                }
                Fa && fa.push(Oe(ca));
                la = fa.join("")
            }
            var sa = la;
            E = "" + T + Oe(sa.length) + sa
        } else
            E = "";
        return D + E
    };
    var Nn = function(a, b, c) {
        for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
            var g = e[f].split("=")
              , h = g[0].replace(/^\s*|\s*$/g, "");
            if (h && h == a) {
                var m = g.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                m && c && (m = decodeURIComponent(m));
                d.push(m)
            }
        }
        return d
    };
    var Qn = function(a, b, c, d) {
        return On(d) ? Nn(a, String(b || Pn()), c) : []
    }
      , Tn = function(a, b, c, d, e) {
        if (On(e)) {
            var f = Rn(a, d, e);
            if (1 === f.length)
                return f[0].id;
            if (0 !== f.length) {
                f = Sn(f, function(g) {
                    return g.Qf
                }, b);
                if (1 === f.length)
                    return f[0].id;
                f = Sn(f, function(g) {
                    return g.Xe
                }, c);
                return f[0] ? f[0].id : void 0
            }
        }
    };
    function Un(a, b, c, d) {
        var e = Pn()
          , f = window;
        "null" !== f.origin && (f.document.cookie = a);
        var g = Pn();
        return e != g || void 0 != c && 0 <= Qn(b, g, !1, d).indexOf(c)
    }
    var Yn = function(a, b, c, d) {
        function e(w, x, y) {
            if (null == y)
                return delete h[x],
                w;
            h[x] = y;
            return w + "; " + x + "=" + y
        }
        function f(w, x) {
            if (null == x)
                return delete h[x],
                w;
            h[x] = !0;
            return w + "; " + x
        }
        if (!On(c.Nb))
            return 2;
        var g;
        void 0 == b ? g = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)),
        b = Vn(b),
        g = a + "=" + b);
        var h = {};
        g = e(g, "path", c.path);
        var m;
        c.expires instanceof Date ? m = c.expires.toUTCString() : null != c.expires && (m = "" + c.expires);
        g = e(g, "expires", m);
        g = e(g, "max-age", c.Jm);
        g = e(g, "samesite", c.kn);
        c.mn && (g = f(g, "secure"));
        var n = c.domain;
        if (n && "auto" === n.toLowerCase()) {
            for (var p = Wn(), q = void 0, r = !1, t = 0; t < p.length; ++t) {
                var u = "none" !== p[t] ? p[t] : void 0
                  , v = e(g, "domain", u);
                v = f(v, c.flags);
                try {
                    d && d(a, h)
                } catch (w) {
                    q = w;
                    continue
                }
                r = !0;
                if (!Xn(u, c.path) && Un(v, a, b, c.Nb))
                    return 0
            }
            if (q && !r)
                throw q;
            return 1
        }
        n && "none" !== n.toLowerCase() && (g = e(g, "domain", n));
        g = f(g, c.flags);
        d && d(a, h);
        return Xn(n, c.path) ? 1 : Un(g, a, b, c.Nb) ? 0 : 1
    }
      , Zn = function(a, b, c) {
        null == c.path && (c.path = "/");
        c.domain || (c.domain = "auto");
        return Yn(a, b, c)
    };
    function Sn(a, b, c) {
        for (var d = [], e = [], f, g = 0; g < a.length; g++) {
            var h = a[g]
              , m = b(h);
            m === c ? d.push(h) : void 0 === f || m < f ? (e = [h],
            f = m) : m === f && e.push(h)
        }
        return 0 < d.length ? d : e
    }
    function Rn(a, b, c) {
        for (var d = [], e = Qn(a, void 0, void 0, c), f = 0; f < e.length; f++) {
            var g = e[f].split(".")
              , h = g.shift();
            if (!b || -1 !== b.indexOf(h)) {
                var m = g.shift();
                m && (m = m.split("-"),
                d.push({
                    id: g.join("."),
                    Qf: 1 * m[0] || 1,
                    Xe: 1 * m[1] || 1
                }))
            }
        }
        return d
    }
    var Vn = function(a) {
        a && 1200 < a.length && (a = a.substring(0, 1200));
        return a
    }
      , $n = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/
      , ao = /(^|\.)doubleclick\.net$/i
      , Xn = function(a, b) {
        return ao.test(window.document.location.hostname) || "/" === b && $n.test(a)
    }
      , Pn = function() {
        return "null" !== window.origin ? window.document.cookie : ""
    }
      , Wn = function() {
        var a = []
          , b = window.document.location.hostname.split(".");
        if (4 === b.length) {
            var c = b[b.length - 1];
            if (parseInt(c, 10).toString() === c)
                return ["none"]
        }
        for (var d = b.length - 2; 0 <= d; d--)
            a.push(b.slice(d).join("."));
        var e = window.document.location.hostname;
        ao.test(e) || $n.test(e) || a.push("none");
        return a
    }
      , On = function(a) {
        return a && Qk().h() ? (k(a) ? [a] : a).every(function(b) {
            return fl(b) && cl(b)
        }) : !0
    }
      , bo = function(a) {
        if (!a)
            return 1;
        a = 0 === a.indexOf(".") ? a.substr(1) : a;
        return a.split(".").length
    }
      , co = function(a) {
        if (!a || "/" === a)
            return 1;
        "/" !== a[0] && (a = "/" + a);
        "/" !== a[a.length - 1] && (a += "/");
        return a.split("/").length - 1
    }
      , eo = function(a, b) {
        var c = "" + bo(a)
          , d = co(b);
        1 < d && (c += "-" + d);
        return c
    };
    var fo = function(a) {
        var b = Math.round(2147483647 * Math.random()), c;
        if (a) {
            var d = 1, e, f, g;
            if (a)
                for (d = 0,
                f = a.length - 1; 0 <= f; f--)
                    g = a.charCodeAt(f),
                    d = (d << 6 & 268435455) + g + (g << 14),
                    e = d & 266338304,
                    d = 0 !== e ? d ^ e >> 21 : d;
            c = String(b ^ d & 2147483647)
        } else
            c = String(b);
        return c
    }
      , go = function(a) {
        return [fo(a), Math.round(Ua() / 1E3)].join(".")
    }
      , ho = function(a, b, c, d, e) {
        var f = bo(b);
        return Tn(a, f, co(c), d, e)
    }
      , io = function(a, b, c, d) {
        return [b, eo(c, d), a].join(".")
    };
    function jo(a, b, c, d) {
        var e, f = Number(null != a.Hc ? a.Hc : void 0);
        0 !== f && (e = new Date((b || Ua()) + 1E3 * (f || 7776E3)));
        return {
            path: a.path,
            domain: a.domain,
            flags: a.flags,
            encode: !!c,
            expires: e,
            Nb: d
        }
    }
    ;var ko;
    var oo = function() {
        var a = lo
          , b = mo
          , c = no()
          , d = function(g) {
            a(g.target || g.srcElement || {})
        }
          , e = function(g) {
            b(g.target || g.srcElement || {})
        };
        if (!c.init) {
            Mc(z, "mousedown", d);
            Mc(z, "keyup", d);
            Mc(z, "submit", e);
            var f = HTMLFormElement.prototype.submit;
            HTMLFormElement.prototype.submit = function() {
                b(this);
                f.call(this)
            }
            ;
            c.init = !0
        }
    }
      , po = function(a, b, c, d, e) {
        var f = {
            callback: a,
            domains: b,
            fragment: 2 === c,
            placement: c,
            forms: d,
            sameHost: e
        };
        no().decorators.push(f)
    }
      , qo = function(a, b, c) {
        for (var d = no().decorators, e = {}, f = 0; f < d.length; ++f) {
            var g = d[f], h;
            if (h = !c || g.forms)
                a: {
                    var m = g.domains
                      , n = a
                      , p = !!g.sameHost;
                    if (m && (p || n !== z.location.hostname))
                        for (var q = 0; q < m.length; q++)
                            if (m[q]instanceof RegExp) {
                                if (m[q].test(n)) {
                                    h = !0;
                                    break a
                                }
                            } else if (0 <= n.indexOf(m[q]) || p && 0 <= m[q].indexOf(n)) {
                                h = !0;
                                break a
                            }
                    h = !1
                }
            if (h) {
                var r = g.placement;
                void 0 == r && (r = g.fragment ? 2 : 1);
                r === b && Xa(e, g.callback())
            }
        }
        return e
    };
    function no() {
        var a = Dc("google_tag_data", {})
          , b = a.gl;
        b && b.decorators || (b = {
            decorators: []
        },
        a.gl = b);
        return b
    }
    ;var ro = /(.*?)\*(.*?)\*(.*)/
      , so = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/
      , to = /^(?:www\.|m\.|amp\.)+/
      , uo = /([^?#]+)(\?[^#]*)?(#.*)?/;
    function vo(a) {
        var b = uo.exec(a);
        if (b)
            return {
                Ph: b[1],
                query: b[2],
                fragment: b[3]
            }
    }
    function wo(a, b) {
        var c = [Bc.userAgent, (new Date).getTimezoneOffset(), Bc.userLanguage || Bc.language, Math.floor(Ua() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"), d;
        if (!(d = ko)) {
            for (var e = Array(256), f = 0; 256 > f; f++) {
                for (var g = f, h = 0; 8 > h; h++)
                    g = g & 1 ? g >>> 1 ^ 3988292384 : g >>> 1;
                e[f] = g
            }
            d = e
        }
        ko = d;
        for (var m = 4294967295, n = 0; n < c.length; n++)
            m = m >>> 8 ^ ko[(m ^ c.charCodeAt(n)) & 255];
        return ((m ^ -1) >>> 0).toString(36)
    }
    function xo() {
        return function(a) {
            var b = wj(l.location.href)
              , c = b.search.replace("?", "")
              , d = pj(c, "_gl", !1, !0) || "";
            a.query = yo(d) || {};
            var e = sj(b, "fragment"), f;
            var g = -1;
            if (Za(e, "_gl="))
                g = 4;
            else {
                var h = e.indexOf("&_gl=");
                0 < h && (g = h + 3 + 2)
            }
            if (0 > g)
                f = void 0;
            else {
                var m = e.indexOf("&", g);
                f = 0 > m ? e.substring(g) : e.substring(g, m)
            }
            a.fragment = yo(f || "") || {}
        }
    }
    var zo = function(a) {
        var b = xo()
          , c = no();
        c.data || (c.data = {
            query: {},
            fragment: {}
        },
        b(c.data));
        var d = {}
          , e = c.data;
        e && (Xa(d, e.query),
        a && Xa(d, e.fragment));
        return d
    }
      , yo = function(a) {
        try {
            var b = Ao(a, 3);
            if (void 0 !== b) {
                for (var c = {}, d = b ? b.split("*") : [], e = 0; e + 1 < d.length; e += 2) {
                    var f = d[e]
                      , g = zb(d[e + 1]);
                    c[f] = g
                }
                Bb("TAGGING", 6);
                return c
            }
        } catch (h) {
            Bb("TAGGING", 8)
        }
    };
    function Ao(a, b) {
        if (a) {
            var c;
            a: {
                for (var d = a, e = 0; 3 > e; ++e) {
                    var f = ro.exec(d);
                    if (f) {
                        c = f;
                        break a
                    }
                    d = decodeURIComponent(d)
                }
                c = void 0
            }
            var g = c;
            if (g && "1" === g[1]) {
                var h = g[3], m;
                a: {
                    for (var n = g[2], p = 0; p < b; ++p)
                        if (n === wo(h, p)) {
                            m = !0;
                            break a
                        }
                    m = !1
                }
                if (m)
                    return h;
                Bb("TAGGING", 7)
            }
        }
    }
    function Bo(a, b, c, d, e) {
        function f(p) {
            var q = p
              , r = (new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)")).exec(q)
              , t = q;
            if (r) {
                var u = r[2]
                  , v = r[4];
                t = r[1];
                v && (t = t + u + v)
            }
            p = t;
            var w = p.charAt(p.length - 1);
            p && "&" !== w && (p += "&");
            return p + n
        }
        d = void 0 === d ? !1 : d;
        e = void 0 === e ? !1 : e;
        var g = vo(c);
        if (!g)
            return "";
        var h = g.query || ""
          , m = g.fragment || ""
          , n = a + "=" + b;
        d ? 0 !== m.substring(1).length && e || (m = "#" + f(m.substring(1))) : h = "?" + f(h.substring(1));
        return "" + g.Ph + h + m
    }
    function Co(a, b) {
        function c(n, p, q) {
            var r;
            a: {
                for (var t in n)
                    if (n.hasOwnProperty(t)) {
                        r = !0;
                        break a
                    }
                r = !1
            }
            if (r) {
                var u, v = [], w;
                for (w in n)
                    if (n.hasOwnProperty(w)) {
                        var x = n[w];
                        void 0 !== x && x === x && null !== x && "[object Object]" !== x.toString() && (v.push(w),
                        v.push(yb(String(x))))
                    }
                var y = v.join("*");
                u = ["1", wo(y), y].join("*");
                d ? (Wf(13) || Wf(11) || !p) && Do("_gl", u, a, p, q) : Eo("_gl", u, a, p, q)
            }
        }
        var d = "FORM" === (a.tagName || "").toUpperCase()
          , e = qo(b, 1, d)
          , f = qo(b, 2, d)
          , g = qo(b, 4, d)
          , h = qo(b, 3, d);
        c(e, !1, !1);
        c(f, !0, !1);
        Wf(11) && c(g, !0, !0);
        for (var m in h)
            h.hasOwnProperty(m) && Fo(m, h[m], a)
    }
    function Fo(a, b, c) {
        "a" === c.tagName.toLowerCase() ? Eo(a, b, c) : "form" === c.tagName.toLowerCase() && Do(a, b, c)
    }
    function Eo(a, b, c, d, e) {
        d = void 0 === d ? !1 : d;
        e = void 0 === e ? !1 : e;
        var f;
        if (f = c.href) {
            var g;
            if (!(g = !Wf(16) || d)) {
                var h = l.location.href
                  , m = vo(c.href)
                  , n = vo(h);
                g = !(m && n && m.Ph === n.Ph && m.query === n.query && m.fragment)
            }
            f = g
        }
        if (f) {
            var p = Bo(a, b, c.href, d, e);
            Yb.test(p) && (c.href = p)
        }
    }
    function Do(a, b, c, d, e) {
        d = void 0 === d ? !1 : d;
        e = void 0 === e ? !1 : e;
        if (c && c.action) {
            var f = (c.method || "").toLowerCase();
            if ("get" !== f || d) {
                if ("get" === f || "post" === f) {
                    var g = Bo(a, b, c.action, d, e);
                    Yb.test(g) && (c.action = g)
                }
            } else {
                for (var h = c.childNodes || [], m = !1, n = 0; n < h.length; n++) {
                    var p = h[n];
                    if (p.name === a) {
                        p.setAttribute("value", b);
                        m = !0;
                        break
                    }
                }
                if (!m) {
                    var q = z.createElement("input");
                    q.setAttribute("type", "hidden");
                    q.setAttribute("name", a);
                    q.setAttribute("value", b);
                    c.appendChild(q)
                }
            }
        }
    }
    function lo(a) {
        try {
            var b;
            a: {
                for (var c = a, d = 100; c && 0 < d; ) {
                    if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                        b = c;
                        break a
                    }
                    c = c.parentNode;
                    d--
                }
                b = null
            }
            var e = b;
            if (e) {
                var f = e.protocol;
                "http:" !== f && "https:" !== f || Co(e, e.hostname)
            }
        } catch (g) {}
    }
    function mo(a) {
        try {
            if (a.action) {
                var b = sj(wj(a.action), "host");
                Co(a, b)
            }
        } catch (c) {}
    }
    var Go = function(a, b, c, d) {
        oo();
        po(a, b, "fragment" === c ? 2 : 1, !!d, !1)
    }
      , Ho = function(a, b) {
        oo();
        po(a, [rj(l.location, "host", !0)], b, !0, !0)
    }
      , Io = function() {
        var a = z.location.hostname
          , b = so.exec(z.referrer);
        if (!b)
            return !1;
        var c = b[2]
          , d = b[1]
          , e = "";
        if (c) {
            var f = c.split("/")
              , g = f[1];
            e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g)
        } else if (d) {
            if (0 === d.indexOf("xn--"))
                return !1;
            e = d.replace(/-/g, ".").replace(/\.\./g, "-")
        }
        var h = a.replace(to, ""), m = e.replace(to, ""), n;
        if (!(n = h === m)) {
            var p = "." + m;
            n = h.substring(h.length - p.length, h.length) === p
        }
        return n
    }
      , Jo = function(a, b) {
        return !1 === a ? !1 : a || b || Io()
    };
    var Ko = ["1"]
      , Lo = {}
      , Mo = {}
      , Ro = function(a, b) {
        b = void 0 === b ? !0 : b;
        var c = No(a.prefix);
        if (!Lo[c])
            if (Oo(c, a.path, a.domain)) {
                var d = Mo[No(a.prefix)];
                Po(a, d ? d.id : void 0, d ? d.Jh : void 0)
            } else {
                var e = Dj("auiddc");
                if (e)
                    Bb("TAGGING", 17),
                    Lo[c] = e;
                else if (b) {
                    var f = No(a.prefix)
                      , g = go();
                    if (0 === Qo(f, g, a)) {
                        var h = Dc("google_tag_data", {});
                        h._gcl_au || (h._gcl_au = g)
                    }
                    Oo(c, a.path, a.domain)
                }
            }
    };
    function Po(a, b, c) {
        var d = No(a.prefix)
          , e = Lo[d];
        if (e) {
            var f = e.split(".");
            if (2 === f.length) {
                var g = Number(f[1]) || 0;
                if (g) {
                    var h = e;
                    b && (h = e + "." + b + "." + (c ? c : Math.floor(Ua() / 1E3)));
                    Qo(d, h, a, 1E3 * g)
                }
            }
        }
    }
    function Qo(a, b, c, d) {
        var e = io(b, "1", c.domain, c.path)
          , f = jo(c, d);
        f.Nb = So();
        return Zn(a, e, f)
    }
    function Oo(a, b, c) {
        var d = ho(a, b, c, Ko, So());
        if (!d)
            return !1;
        To(a, d);
        return !0
    }
    function To(a, b) {
        var c = b.split(".");
        5 === c.length ? (Lo[a] = c.slice(0, 2).join("."),
        Mo[a] = {
            id: c.slice(2, 4).join("."),
            Jh: Number(c[4]) || 0
        }) : 3 === c.length ? Mo[a] = {
            id: c.slice(0, 2).join("."),
            Jh: Number(c[2]) || 0
        } : Lo[a] = b
    }
    function No(a) {
        return (a || "_gcl") + "_au"
    }
    function Uo(a) {
        function b() {
            cl(c) && a()
        }
        var c = So();
        jl(function() {
            b();
            cl(c) || kl(b, c)
        }, c)
    }
    function Vo(a) {
        var b = zo(!0)
          , c = No(a.prefix);
        Uo(function() {
            var d = b[c];
            if (d) {
                To(c, d);
                var e = 1E3 * Number(Lo[c].split(".")[1]);
                if (e) {
                    Bb("TAGGING", 16);
                    var f = jo(a, e);
                    f.Nb = So();
                    var g = io(d, "1", a.domain, a.path);
                    Zn(c, g, f)
                }
            }
        })
    }
    function Wo(a, b, c, d, e) {
        e = e || {};
        var f = function() {
            var g = {}
              , h = ho(a, e.path, e.domain, Ko, So());
            h && (g[a] = h);
            return g
        };
        Uo(function() {
            Go(f, b, c, d)
        })
    }
    function So() {
        return Wf(14) ? ["ad_storage", "ad_user_data"] : ["ad_storage"]
    }
    ;var Xo = function(a) {
        for (var b = [], c = z.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
            var f = c[e].match(d);
            f && b.push({
                fi: f[1],
                value: f[2],
                timestamp: Number(f[2].split(".")[1]) || 0
            })
        }
        b.sort(function(g, h) {
            return h.timestamp - g.timestamp
        });
        return b
    };
    function Yo(a, b) {
        var c = Xo(a)
          , d = {};
        if (!c || !c.length)
            return d;
        for (var e = 0; e < c.length; e++) {
            var f = c[e].value.split(".");
            if (!("1" !== f[0] || b && 3 > f.length || !b && 3 !== f.length) && Number(f[1])) {
                d[c[e].fi] || (d[c[e].fi] = []);
                var g = {
                    version: f[0],
                    timestamp: 1E3 * Number(f[1]),
                    ia: f[2]
                };
                b && 3 < f.length && (g.labels = f.slice(3));
                d[c[e].fi].push(g)
            }
        }
        return d
    }
    ;var Zo = {}
      , $o = (Zo.k = {
        Ma: /^[\w-]+$/
    },
    Zo.b = {
        Ma: /^[\w-]+$/,
        Xh: !0
    },
    Zo.i = {
        Ma: /^[1-9]\d*$/
    },
    Zo)
      , ap = {}
      , bp = (ap[5] = {
        version: "2",
        zn: ["2"],
        ek: "ad_storage",
        Gj: ["k", "i", "b"]
    },
    ap);
    function cp(a, b) {
        var c = b.Ma;
        return "function" === typeof c ? c(a) : c.test(a)
    }
    function dp(a) {
        for (var b = ha(Object.keys(a)), c = b.next(), d = {}; !c.done; d = {
            Be: void 0
        },
        c = b.next()) {
            var e = c.value
              , f = a[e];
            d.Be = $o[e];
            d.Be ? d.Be.Xh ? a[e] = Array.isArray(f) ? f.filter(function(g) {
                return function(h) {
                    return cp(h, g.Be)
                }
            }(d)) : void 0 : "string" === typeof f && cp(f, d.Be) || (a[e] = void 0) : a[e] = void 0
        }
        return a
    }
    function ep(a) {
        var b = bp[5];
        if (b) {
            for (var c = [], d = Qn(a, void 0, void 0, b.ek), e = ha(d), f = e.next(); !f.done; f = e.next()) {
                var g = f.value.split(".")
                  , h = g.shift();
                if (-1 !== b.zn.indexOf(h)) {
                    g.shift();
                    var m = g.join("."), n = c, p = n.push, q;
                    var r = {}
                      , t = bp[5];
                    if (t) {
                        for (var u = t.Gj, v = ha(m.split("$")), w = v.next(); !w.done; w = v.next()) {
                            var x = w.value
                              , y = x[0];
                            if (-1 !== u.indexOf(y))
                                try {
                                    var B = decodeURIComponent(x.substring(1))
                                      , A = $o[y];
                                    A && (A.Xh ? (r[y] = r[y] || [],
                                    r[y].push(B)) : r[y] = B)
                                } catch (F) {}
                        }
                        q = dp(r)
                    } else
                        q = void 0;
                    p.call(n, q)
                }
            }
            return c
        }
    }
    function fp(a, b, c, d) {
        c = c || {};
        var e;
        var f = bp[5];
        if (f) {
            for (var g = [], h = ha(f.Gj), m = h.next(); !m.done; m = h.next()) {
                var n = m.value
                  , p = $o[n];
                if (p) {
                    var q = b[n];
                    if (void 0 !== q)
                        if (p.Xh && Array.isArray(q))
                            for (var r = ha(q), t = r.next(); !t.done; t = r.next())
                                g.push(encodeURIComponent("" + n + t.value));
                        else
                            g.push(encodeURIComponent("" + n + q))
                }
            }
            e = g.join("$")
        } else
            e = void 0;
        var u = e;
        if (u) {
            var v = bp[5]
              , w = [v.version, eo(c.domain, c.path), u].join(".");
            Zn(a, w, jo(c, d, void 0, v.ek))
        }
    }
    ;var gp = /^\w+$/
      , hp = /^[\w-]+$/
      , ip = {
        ag: "_ag",
        aw: "_aw",
        dc: "_dc",
        gb: "_gb",
        gf: "_gf",
        gp: "_gp",
        ha: "_ha"
    };
    function jp() {
        return Wf(14) ? ["ad_storage", "ad_user_data"] : ["ad_storage"]
    }
    var kp = function(a) {
        return !Qk().h() || cl(a)
    }
      , lp = function(a) {
        function b() {
            var d = kp(c);
            d && a();
            return d
        }
        var c = jp();
        jl(function() {
            b() || kl(b, c)
        }, c)
    }
      , np = function(a) {
        return mp(a).map(function(b) {
            return b.ia
        })
    }
      , rp = function(a) {
        var b = op(a.prefix)
          , c = pp("gb", b)
          , d = pp("ag", b);
        if (!d || !c)
            return [];
        var e = function(h) {
            return function(m) {
                m.type = h;
                return m
            }
        }
          , f = mp(c).map(e("gb"))
          , g = qp(d).map(e("ag"));
        return f.concat(g).sort(function(h, m) {
            return m.timestamp - h.timestamp
        })
    };
    function sp(a, b, c, d, e) {
        var f = Ja(a, function(g) {
            return g.ia === c
        });
        f ? (f.timestamp = Math.max(f.timestamp, d),
        f.labels = tp(f.labels || [], e || [])) : a.push({
            version: b,
            ia: c,
            timestamp: d,
            labels: e
        })
    }
    var mp = function(a) {
        for (var b = [], c = Qn(a, z.cookie, void 0, jp()), d = ha(c), e = d.next(); !e.done; e = d.next()) {
            var f = up(e.value);
            if (null != f) {
                var g = f;
                sp(b, g.version, g.ia, g.timestamp, g.labels)
            }
        }
        b.sort(function(h, m) {
            return m.timestamp - h.timestamp
        });
        return vp(b)
    }
      , qp = function(a) {
        if (!Wf(20))
            return [];
        for (var b = ep(a) || [], c = [], d = ha(b), e = d.next(); !e.done; e = d.next()) {
            var f = e.value
              , g = f
              , h = f ? 1E3 * (Number(f.i) || 0) : 0;
            h && sp(c, "2", g.k, h, g.b || [])
        }
        return c.sort(function(m, n) {
            return n.timestamp - m.timestamp
        })
    };
    function tp(a, b) {
        if (!a.length)
            return b;
        if (!b.length)
            return a;
        var c = {};
        return a.concat(b).filter(function(d) {
            return c.hasOwnProperty(d) ? !1 : c[d] = !0
        })
    }
    function op(a) {
        return a && "string" == typeof a && a.match(gp) ? a : "_gcl"
    }
    function wp(a, b) {
        var c = Wf(20), d = wj(a), e = sj(d, "query", !1, void 0, "gclid"), f = sj(d, "query", !1, void 0, "gclsrc"), g = sj(d, "query", !1, void 0, "wbraid"), h;
        c && (h = sj(d, "query", !1, void 0, "gbraid"));
        var m = sj(d, "query", !1, void 0, "dclid");
        if (b && (!e || !f || !g || c && !h)) {
            var n = d.hash.replace("#", "");
            e = e || pj(n, "gclid", !1);
            f = f || pj(n, "gclsrc", !1);
            g = g || pj(n, "wbraid", !1);
            c && (h = h || pj(n, "gbraid", !1))
        }
        return xp(e, f, m, g, h)
    }
    var yp = function() {
        return wp(l.location.href, !0)
    }
      , xp = function(a, b, c, d, e) {
        var f = {}
          , g = function(h, m) {
            f[m] || (f[m] = []);
            f[m].push(h)
        };
        f.gclid = a;
        f.gclsrc = b;
        f.dclid = c;
        if (void 0 !== a && a.match(hp))
            switch (b) {
            case void 0:
                g(a, "aw");
                break;
            case "aw.ds":
                g(a, "aw");
                g(a, "dc");
                break;
            case "ds":
                g(a, "dc");
                break;
            case "3p.ds":
                g(a, "dc");
                break;
            case "gf":
                g(a, "gf");
                break;
            case "ha":
                g(a, "ha")
            }
        c && g(c, "dc");
        void 0 !== d && hp.test(d) && (f.wbraid = d,
        g(d, "gb"));
        Wf(20) && void 0 !== e && hp.test(e) && (f.gbraid = e,
        g(e, "ag"));
        return f
    }
      , Ap = function(a) {
        var b = yp();
        if (Wf(18)) {
            for (var c = !0, d = ha(Object.keys(b)), e = d.next(); !e.done; e = d.next())
                if (void 0 !== b[e.value]) {
                    c = !1;
                    break
                }
            c && (b = wp(l.document.referrer, !1))
        }
        zp(b, !1, a)
    };
    function zp(a, b, c, d, e) {
        c = c || {};
        e = e || [];
        var f = op(c.prefix);
        d = d || Ua();
        var g = Math.round(d / 1E3)
          , h = jp()
          , m = !1
          , n = !1
          , p = function() {
            if (kp(h)) {
                var q = jo(c, d, !0);
                q.Nb = h;
                for (var r = function(D, E) {
                    var P = pp(D, f);
                    P && (Zn(P, E, q),
                    "gb" !== D && (m = !0))
                }, t = function(D) {
                    var E = ["GCL", g, D];
                    0 < e.length && E.push(e.join("."));
                    return E.join(".")
                }, u = ha(["aw", "dc", "gf", "ha", "gp"]), v = u.next(); !v.done; v = u.next()) {
                    var w = v.value;
                    a[w] && r(w, t(a[w][0]))
                }
                if (!m && a.gb) {
                    var x = a.gb[0]
                      , y = pp("gb", f);
                    !b && mp(y).some(function(D) {
                        return D.ia === x && D.labels && 0 < D.labels.length
                    }) || r("gb", t(x))
                }
            }
            if (!n && Wf(20) && a.gbraid && kp("ad_storage") && (n = !0,
            !m)) {
                var B = a.gbraid
                  , A = pp("ag", f);
                if (b || !qp(A).some(function(D) {
                    return D.ia === B && D.labels && 0 < D.labels.length
                })) {
                    var F = {}
                      , G = (F.k = B,
                    F.i = g,
                    F.b = e,
                    F);
                    fp(A, G, c, d)
                }
            }
        };
        jl(function() {
            p();
            kp(h) || kl(p, h)
        }, h)
    }
    var Cp = function(a, b) {
        var c = zo(!0);
        lp(function() {
            for (var d = op(b.prefix), e = 0; e < a.length; ++e) {
                var f = a[e];
                if (void 0 !== ip[f]) {
                    var g = pp(f, d)
                      , h = c[g];
                    if (h) {
                        var m = Math.min(Bp(h), Ua()), n;
                        b: {
                            for (var p = m, q = Qn(g, z.cookie, void 0, jp()), r = 0; r < q.length; ++r)
                                if (Bp(q[r]) > p) {
                                    n = !0;
                                    break b
                                }
                            n = !1
                        }
                        if (!n) {
                            var t = jo(b, m, !0);
                            t.Nb = jp();
                            Zn(g, h, t)
                        }
                    }
                }
            }
            zp(xp(c.gclid, c.gclsrc), !1, b)
        })
    }
      , pp = function(a, b) {
        var c = ip[a];
        if (void 0 !== c)
            return b + c
    }
      , Bp = function(a) {
        return 0 !== Dp(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) || 0) : 0
    };
    function up(a) {
        var b = Dp(a.split("."));
        return 0 === b.length ? null : {
            version: b[0],
            ia: b[2],
            timestamp: 1E3 * (Number(b[1]) || 0),
            labels: b.slice(3)
        }
    }
    function Dp(a) {
        return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !hp.test(a[2]) ? [] : a
    }
    var Ep = function(a, b, c, d, e) {
        if (Ia(b) && "null" !== l.origin) {
            var f = op(e)
              , g = function() {
                for (var h = {}, m = 0; m < a.length; ++m) {
                    var n = pp(a[m], f);
                    if (n) {
                        var p = Qn(n, z.cookie, void 0, jp());
                        p.length && (h[n] = p.sort()[p.length - 1])
                    }
                }
                return h
            };
            lp(function() {
                Go(g, b, c, d)
            })
        }
    }
      , vp = function(a) {
        return a.filter(function(b) {
            return hp.test(b.ia)
        })
    }
      , Fp = function(a, b) {
        if ("null" !== l.origin) {
            for (var c = op(b.prefix), d = {}, e = 0; e < a.length; e++)
                ip[a[e]] && (d[a[e]] = ip[a[e]]);
            lp(function() {
                Na(d, function(f, g) {
                    var h = Qn(c + g, z.cookie, void 0, jp());
                    h.sort(function(t, u) {
                        return Bp(u) - Bp(t)
                    });
                    if (h.length) {
                        var m = h[0], n = Bp(m), p = 0 !== Dp(m.split(".")).length ? m.split(".").slice(3) : [], q = {}, r;
                        r = 0 !== Dp(m.split(".")).length ? m.split(".")[2] : void 0;
                        q[f] = [r];
                        zp(q, !0, b, n, p)
                    }
                })
            })
        }
    };
    function Gp(a, b) {
        for (var c = 0; c < b.length; ++c)
            if (a[b[c]])
                return !0;
        return !1
    }
    var Hp = function(a) {
        function b(e, f, g) {
            g && (e[f] = g)
        }
        if (gl()) {
            var c = yp();
            if (Gp(c, a)) {
                var d = {};
                b(d, "gclid", c.gclid);
                b(d, "dclid", c.dclid);
                b(d, "gclsrc", c.gclsrc);
                b(d, "wbraid", c.wbraid);
                Wf(20) && b(d, "gbraid", c.gbraid);
                Ho(function() {
                    return d
                }, 3);
                Ho(function() {
                    var e = {};
                    return e._up = "1",
                    e
                }, 1)
            }
        }
    }
      , Ip = function(a) {
        if (!Wf(11))
            return null;
        var b = zo(!0).gad_source;
        if (null != b)
            return l.location.hash = "",
            b;
        if (Wf(12)) {
            var c = wj(l.location.href);
            b = sj(c, "query", !1, void 0, "gad_source");
            if (null != b)
                return b;
            var d = yp();
            if (Gp(d, a))
                return "0"
        }
        return null
    }
      , Jp = function(a) {
        var b = Ip(a);
        null != b && Ho(function() {
            var c = {};
            return c.gad_source = b,
            c
        }, 4)
    }
      , Kp = function(a, b, c, d) {
        var e = [];
        c = c || {};
        if (!kp(jp()))
            return e;
        var f = mp(a), g;
        a: {
            if (f.length) {
                for (var h = 0; h < f.length; h++)
                    -1 === (f[h].labels || []).indexOf(b) ? e.push(0) : e.push(1);
                if (1 !== e[0]) {
                    g = f[0];
                    break a
                }
            }
            g = void 0
        }
        var m = g;
        if (m && !d) {
            var n = m.timestamp
              , p = [m.version, Math.round(n / 1E3), m.ia].concat(m.labels || [], [b]).join(".")
              , q = jo(c, n, !0);
            q.Nb = jp();
            Zn(a, p, q)
        }
        return e
    };
    function Lp(a, b) {
        var c = op(b)
          , d = pp(a, c);
        if (!d)
            return 0;
        var e;
        e = "ag" === a ? qp(d) : mp(d);
        for (var f = 0, g = 0; g < e.length; g++)
            f = Math.max(f, e[g].timestamp);
        return f
    }
    function Mp(a) {
        var b = 0, c;
        for (c in a)
            for (var d = a[c], e = 0; e < d.length; e++)
                b = Math.max(b, Number(d[e].timestamp));
        return b
    }
    var Np = function(a, b) {
        b = void 0 === b ? !1 : b;
        var c = Math.max(Lp("aw", a), Mp(kp(jp()) ? Yo() : {}))
          , d = Math.max(Lp("gb", a), Mp(kp(jp()) ? Yo("_gac_gb", !0) : {}));
        Wf(20) && b && (d = Math.max(d, Lp("ag", a)));
        return d > c
    };
    var dq, eq = !1;
    function fq() {
        eq = !0;
        dq = dq || {}
    }
    var gq = function(a) {
        eq || fq();
        return dq[a]
    };
    var hq = function(a, b, c) {
        this.target = a;
        this.eventName = b;
        this.o = c;
        this.h = {};
        this.metadata = ob(c.eventMetadata || {});
        this.isAborted = !1
    };
    hq.prototype.copyToHitData = function(a, b, c) {
        var d = S(this.o, a);
        void 0 === d && (d = b);
        if (void 0 !== d && void 0 !== c && k(d) && R(54))
            try {
                d = c(d)
            } catch (e) {}
        void 0 !== d && (this.h[a] = d)
    }
    ;
    var iq = function(a, b, c) {
        var d = gq(a.target.ba);
        return d && d.hasOwnProperty(b) ? d[b] : c
    };
    var jq = function() {
        ti.dedupe_gclid || (ti.dedupe_gclid = "" + go());
        return ti.dedupe_gclid
    };
    var kq = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/
      , lq = /^www.googleadservices.com$/
      , nq = function(a) {
        a || (a = mq());
        return a.yn ? !1 : a.hm || a.im || a.jm || a.zh || a.Sf || a.Ql || a.Xl ? !0 : !1
    }
      , mq = function() {
        var a = {}
          , b = zo(!0);
        a.yn = !!b._up;
        var c = yp();
        a.hm = void 0 !== c.aw;
        a.im = void 0 !== c.dc;
        a.jm = void 0 !== c.wbraid;
        var d = wj(l.location.href)
          , e = sj(d, "query", !1, void 0, "gad");
        a.zh = void 0 !== e;
        if (!a.zh) {
            var f = d.hash.replace("#", "")
              , g = pj(f, "gad", !1);
            a.zh = void 0 !== g
        }
        a.Sf = void 0;
        if (R(59)) {
            var h = sj(d, "query", !1, void 0, "gad_source");
            a.Sf = h;
            if (void 0 === a.Sf) {
                var m = d.hash.replace("#", "")
                  , n = pj(m, "gad_source", !1);
                a.Sf = n
            }
        }
        var p = z.referrer ? sj(wj(z.referrer), "host") : "";
        a.Xl = kq.test(p);
        a.Ql = lq.test(p);
        return a
    };
    var oq = RegExp("^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$")
      , pq = /^~?[\w-]+(?:\.~?[\w-]+)*$/
      , qq = /^\d+\.fls\.doubleclick\.net$/
      , rq = /;gac=([^;?]+)/
      , sq = /;gacgb=([^;?]+)/
      , tq = /;gclaw=([^;?]+)/
      , uq = /;gclgb=([^;?]+)/;
    function vq(a, b) {
        if (qq.test(z.location.host)) {
            var c = z.location.href.match(b);
            return c && 2 == c.length && c[1].match(oq) ? decodeURIComponent(c[1]) : ""
        }
        var d = [], e;
        for (e in a) {
            for (var f = [], g = a[e], h = 0; h < g.length; h++)
                f.push(g[h].ia);
            d.push(e + ":" + f.join(","))
        }
        return 0 < d.length ? d.join(";") : ""
    }
    var wq = function(a, b, c) {
        var d = kp(jp()) ? Yo("_gac_gb", !0) : {}, e = [], f = !1, g;
        for (g in d) {
            var h = Kp("_gac_gb_" + g, a, b, c);
            f = f || 0 !== h.length && h.some(function(m) {
                return 1 === m
            });
            e.push(g + ":" + h.join(","))
        }
        return {
            Pl: f ? e.join(";") : "",
            Ol: vq(d, sq)
        }
    };
    function xq(a, b, c) {
        if (qq.test(z.location.host)) {
            var d = z.location.href.match(c);
            if (d && 2 == d.length && d[1].match(pq))
                return [{
                    ia: d[1]
                }]
        } else {
            if ("gclid" === b)
                return mp((a || "_gcl") + "_aw");
            if ("wbraid" === b)
                return mp((a || "_gcl") + "_gb");
            if ("braids" === b)
                return rp({
                    prefix: a
                })
        }
        return []
    }
    var yq = function(a) {
        return xq(a, "gclid", tq).map(function(b) {
            return b.ia
        }).join(".")
    }
      , zq = function(a) {
        return xq(a, "wbraid", uq).map(function(b) {
            return b.ia
        }).join(".")
    }
      , Aq = function(a) {
        var b;
        b = void 0 === b ? !1 : b;
        return qq.test(z.location.host) ? !(tq.test(z.location.href) || rq.test(z.location.href)) : Np(a, b)
    }
      , Bq = function(a, b) {
        var c;
        c = Kp((b && b.prefix || "_gcl") + "_gb", a, b);
        return 0 === c.length || c.every(function(d) {
            return 0 === d
        }) ? "" : c.join(".")
    };
    var Cq = function() {
        if (Ga(l.__uspapi)) {
            var a = "";
            try {
                l.__uspapi("getUSPData", 1, function(b, c) {
                    if (c && b) {
                        var d = b.uspString;
                        d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d)
                    }
                })
            } catch (b) {}
            return a
        }
    };
    function Kq(a) {
        var b = S(a.o, M.g.Eb)
          , c = S(a.o, M.g.Tb);
        b && !c ? (a.eventName !== M.g.da && a.eventName !== M.g.Pc && L(131),
        a.isAborted = !0) : !b && c && (L(132),
        a.isAborted = !0)
    }
    function Lq(a) {
        var b = U(M.g.J) ? ti.pscdl : "denied";
        a.h[M.g.qf] = b
    }
    ;var Tq = function(a, b, c, d) {
        var e = Jc(), f;
        if (1 === e)
            a: {
                var g = Fi;
                g = g.toLowerCase();
                for (var h = "https://" + g, m = "http://" + g, n = 1, p = z.getElementsByTagName("script"), q = 0; q < p.length && 100 > q; q++) {
                    var r = p[q].src;
                    if (r) {
                        r = r.toLowerCase();
                        if (0 === r.indexOf(m)) {
                            f = 3;
                            break a
                        }
                        1 === n && 0 === r.indexOf(h) && (n = 2)
                    }
                }
                f = n
            }
        else
            f = e;
        return (2 === f || d || "http:" != l.location.protocol ? a : b) + c
    };
    function fr(a) {
        return {
            getDestinationId: function() {
                return a.target.ba
            },
            getEventName: function() {
                return a.eventName
            },
            setEventName: function(b) {
                a.eventName = b
            },
            getHitData: function(b) {
                return a.h[b]
            },
            setHitData: function(b, c) {
                a.h[b] = c
            },
            setHitDataIfNotDefined: function(b, c) {
                void 0 === a.h[b] && (a.h[b] = c)
            },
            copyToHitData: function(b, c) {
                a.copyToHitData(b, c)
            },
            getMetadata: function(b) {
                return a.metadata[b]
            },
            setMetadata: function(b, c) {
                a.metadata[b] = c
            },
            isAborted: function() {
                return a.isAborted
            },
            abort: function() {
                a.isAborted = !0
            },
            getFromEventContext: function(b) {
                return S(a.o, b)
            },
            Nj: function() {
                return a
            },
            getHitKeys: function() {
                return Object.keys(a.h)
            }
        }
    }
    ;var hr = function(a) {
        var b = gr[a.target.ba];
        if (!a.isAborted && b)
            for (var c = fr(a), d = 0; d < b.length; ++d) {
                try {
                    b[d](c)
                } catch (e) {
                    a.isAborted = !0
                }
                if (a.isAborted)
                    break
            }
    }
      , ir = function(a, b) {
        var c = gr[a];
        c || (c = gr[a] = []);
        c.push(b)
    }
      , gr = {};
    var nr = function() {
        var a = l.screen;
        return {
            width: a ? a.width : 0,
            height: a ? a.height : 0
        }
    }
      , or = function(a) {
        if (z.hidden)
            return !0;
        var b = a.getBoundingClientRect();
        if (b.top == b.bottom || b.left == b.right || !l.getComputedStyle)
            return !0;
        var c = l.getComputedStyle(a, null);
        if ("hidden" === c.visibility)
            return !0;
        for (var d = a, e = c; d; ) {
            if ("none" === e.display)
                return !0;
            var f = e.opacity
              , g = e.filter;
            if (g) {
                var h = g.indexOf("opacity(");
                0 <= h && (g = g.substring(h + 8, g.indexOf(")", h)),
                "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)),
                f = Math.min(g, f))
            }
            if (void 0 !== f && 0 >= f)
                return !0;
            (d = d.parentElement) && (e = l.getComputedStyle(d, null))
        }
        return !1
    };
    var yr = function(a, b, c) {
        var d = a.element
          , e = {
            U: a.U,
            type: a.qa,
            tagName: d.tagName
        };
        b && (e.querySelector = xr(d));
        c && (e.isVisible = !or(d));
        return e
    }
      , zr = function(a, b, c) {
        return yr({
            element: a.element,
            U: a.U,
            qa: "1"
        }, b, c)
    }
      , Ar = function(a) {
        var b = !!a.vd + "." + !!a.wd;
        a && a.Ee && a.Ee.length && (b += "." + a.Ee.join("."));
        a && a.wb && (b += "." + a.wb.email + "." + a.wb.phone + "." + a.wb.address);
        return b
    }
      , Dr = function(a) {
        if (0 != a.length) {
            var b;
            b = Br(a, function(c) {
                return !Cr.test(c.U)
            });
            b = Br(b, function(c) {
                return "INPUT" === c.element.tagName.toUpperCase()
            });
            b = Br(b, function(c) {
                return !or(c.element)
            });
            return b[0]
        }
    }
      , Er = function(a, b) {
        if (!b || 0 === b.length)
            return a;
        for (var c = [], d = 0; d < a.length; d++) {
            for (var e = !0, f = 0; f < b.length; f++) {
                var g = b[f];
                if (g && Bh(a[d].element, g)) {
                    e = !1;
                    break
                }
            }
            e && c.push(a[d])
        }
        return c
    }
      , Br = function(a, b) {
        if (1 >= a.length)
            return a;
        var c = a.filter(b);
        return 0 == c.length ? a : c
    }
      , xr = function(a) {
        var b;
        if (a === z.body)
            b = "body";
        else {
            var c;
            if (a.id)
                c = "#" + a.id;
            else {
                var d;
                if (a.parentElement) {
                    var e;
                    a: {
                        var f = a.parentElement;
                        if (f) {
                            for (var g = 0; g < f.childElementCount; g++)
                                if (f.children[g] === a) {
                                    e = g + 1;
                                    break a
                                }
                            e = -1
                        } else
                            e = 1
                    }
                    d = xr(a.parentElement) + ">:nth-child(" + e + ")"
                } else
                    d = "";
                c = d
            }
            b = c
        }
        return b
    }
      , Gr = function(a) {
        for (var b = [], c = 0; c < a.length; c++) {
            var d = a[c]
              , e = d.textContent;
            "INPUT" === d.tagName.toUpperCase() && d.value && (e = d.value);
            if (e) {
                var f = e.match(Fr);
                if (f) {
                    var g = f[0], h;
                    if (l.location) {
                        var m = rj(l.location, "host", !0);
                        h = 0 <= g.toLowerCase().indexOf(m)
                    } else
                        h = !1;
                    h || b.push({
                        element: d,
                        U: g
                    })
                }
            }
        }
        return b
    }
      , Kr = function() {
        var a = []
          , b = z.body;
        if (!b)
            return {
                elements: a,
                status: "4"
            };
        for (var c = b.querySelectorAll("*"), d = 0; d < c.length && 1E4 > d; d++) {
            var e = c[d];
            if (!(0 <= Hr.indexOf(e.tagName.toUpperCase())) && e.children instanceof HTMLCollection) {
                for (var f = !1, g = 0; g < e.childElementCount && 1E4 > g; g++)
                    if (!(0 <= Ir.indexOf(e.children[g].tagName.toUpperCase()))) {
                        f = !0;
                        break
                    }
                (!f || R(23) && -1 !== Jr.indexOf(e.tagName)) && a.push(e)
            }
        }
        return {
            elements: a,
            status: 1E4 < c.length ? "2" : "1"
        }
    }
      , Lr = !1;
    var Fr = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i
      , Mr = /@(gmail|googlemail)\./i
      , Cr = /support|noreply/i
      , Hr = "SCRIPT STYLE IMG SVG PATH BR NOSCRIPT TEXTAREA".split(" ")
      , Ir = ["BR"]
      , Nr = {
        Gn: "1",
        Un: "2",
        Kn: "3",
        On: "4",
        Cn: "5",
        Vn: "6",
        Qn: "7"
    }
      , Or = {}
      , Jr = ["INPUT", "SELECT"];
    var gs = function(a) {
        a = a || {
            vd: !0,
            wd: !0
        };
        a.wb = a.wb || {
            email: !0,
            phone: !1,
            address: !1
        };
        var b = Ar(a)
          , c = Or[b];
        if (c && 200 > Ua() - c.timestamp)
            return c.result;
        var d = Kr(), e = d.status, f = [], g, h, m = [];
        if (!R(23)) {
            if (a.wb && a.wb.email) {
                var n = Gr(d.elements);
                f = Er(n, a && a.Ee);
                g = Dr(f);
                10 < n.length && (e = "3")
            }
            !a.bi && g && (f = [g]);
            for (var p = 0; p < f.length; p++)
                m.push(zr(f[p], a.vd, a.wd));
            m = m.slice(0, 10)
        } else if (a.wb) {}
        g && (h = zr(g, a.vd, a.wd));
        var F = {
            elements: m,
            Th: h,
            status: e
        };
        Or[b] = {
            timestamp: Ua(),
            result: F
        };
        return F
    }
      , hs = function(a) {
        return a.tagName + ":" + a.isVisible + ":" + a.U.length + ":" + Mr.test(a.U)
    };
    var is = function(a) {
        return iq(a, M.g.Sb, S(a.o, M.g.Sb)) || iq(a, "google_ono", !1)
    }
      , js = function(a) {
        if (a.metadata.is_merchant_center || !Ij(a.o))
            return !1;
        if (!S(a.o, M.g.kd)) {
            var b = S(a.o, M.g.xc);
            return !0 === b || "true" === b
        }
        return !0
    }
      , ks = function(a) {
        var b = a.metadata.user_data;
        if (nb(b))
            return b
    }
      , ls = function(a, b) {
        var c = iq(a, M.g.Rd, a.o.s[M.g.Rd]);
        if (c && void 0 !== c[b || a.eventName])
            return c[b || a.eventName]
    }
      , ms = function(a, b, c) {
        a.h[M.g.ve] || (a.h[M.g.ve] = {});
        a.h[M.g.ve][b] = c
    };
    var ns = {
        nl: Number('') || 500,
        Rk: Number('') || 5E3,
        nj: Number('20') || 10,
        xk: Number('') || 5E3
    };
    function os(a) {
        return a.performance && a.performance.now() || Date.now()
    }
    var ps = function(a, b) {
        var c;
        return c
    };
    var qs = "https://" + si.Cd
      , rs = qs + "/gtm/static/"
      , ss = Number('') || 5
      , ts = Number('') || 50
      , us = qs
      , vs = rs
      , ws = !1
      , xs = 0
      , ys = Ka();
    function Js() {
        var a = !1;
        return a
    }
    function Ks(a) {
        var b = Math.round(Ua());
    }
    function Ls(a, b, c) {}
    function Gs(a, b, c, d) {}
    function As(a, b, c, d, e) {}
    function Ms(a, b, c, d) {}
    function Ns(a, b, c, d) {}
    function Os(a) {
        var b = {}
          , c = ["tv.1"]
          , d = 0;
        var u = c.join("~");
        return {
            U: b,
            Yf: u
        }
    }
    var Ps = void 0;
    function Qs(a) {
        var b = [];
        return b
    }
    ;var Rs = function(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            128 > e ? b[c++] = e : (2048 > e ? b[c++] = e >> 6 | 192 : (55296 == (e & 64512) && d + 1 < a.length && 56320 == (a.charCodeAt(d + 1) & 64512) ? (e = 65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023),
            b[c++] = e >> 18 | 240,
            b[c++] = e >> 12 & 63 | 128) : b[c++] = e >> 12 | 224,
            b[c++] = e >> 6 & 63 | 128),
            b[c++] = e & 63 | 128)
        }
        return b
    };
    qc();
    Bm() || nc("iPod");
    nc("iPad");
    !nc("Android") || rc() || qc() || pc() || nc("Silk");
    rc();
    !nc("Safari") || rc() || (oc() ? 0 : nc("Coast")) || pc() || (oc() ? 0 : nc("Edge")) || (oc() ? mc("Microsoft Edge") : nc("Edg/")) || (oc() ? mc("Opera") : nc("OPR")) || qc() || nc("Silk") || nc("Android") || Cm();
    var Ss = {}
      , Ts = null
      , Us = function(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            255 < e && (b[c++] = e & 255,
            e >>= 8);
            b[c++] = e
        }
        var f = 4;
        void 0 === f && (f = 0);
        if (!Ts) {
            Ts = {};
            for (var g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), h = ["+/=", "+/", "-_=", "-_.", "-_"], m = 0; 5 > m; m++) {
                var n = g.concat(h[m].split(""));
                Ss[m] = n;
                for (var p = 0; p < n.length; p++) {
                    var q = n[p];
                    void 0 === Ts[q] && (Ts[q] = p)
                }
            }
        }
        for (var r = Ss[f], t = Array(Math.floor(b.length / 3)), u = r[64] || "", v = 0, w = 0; v < b.length - 2; v += 3) {
            var x = b[v]
              , y = b[v + 1]
              , B = b[v + 2]
              , A = r[x >> 2]
              , F = r[(x & 3) << 4 | y >> 4]
              , G = r[(y & 15) << 2 | B >> 6]
              , D = r[B & 63];
            t[w++] = "" + A + F + G + D
        }
        var E = 0
          , P = u;
        switch (b.length - v) {
        case 2:
            E = b[v + 1],
            P = r[(E & 15) << 2] || u;
        case 1:
            var N = b[v];
            t[w] = "" + r[N >> 2] + r[(N & 3) << 4 | E >> 4] + P + u
        }
        return t.join("")
    };
    Object.freeze(new function() {}
    );
    Object.freeze(new function() {}
    );
    var Vs = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");
    function Ws(a) {
        var b;
        return null != (b = a.google_tag_data) ? b : a.google_tag_data = {}
    }
    function Xs() {
        var a = l.google_tag_data, b;
        if (null != a && a.uach) {
            var c = a.uach
              , d = Object.assign({}, c);
            c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
            b = d
        } else
            b = null;
        return b
    }
    function Ys() {
        var a, b;
        return null != (b = null == (a = l.google_tag_data) ? void 0 : a.uach_promise) ? b : null
    }
    function Zs(a) {
        var b, c;
        return "function" === typeof (null == (b = a.navigator) ? void 0 : null == (c = b.userAgentData) ? void 0 : c.getHighEntropyValues)
    }
    function $s() {
        var a = l;
        if (!Zs(a))
            return null;
        var b = Ws(a);
        if (b.uach_promise)
            return b.uach_promise;
        var c = a.navigator.userAgentData.getHighEntropyValues(Vs).then(function(d) {
            null != b.uach || (b.uach = d);
            return d
        });
        return b.uach_promise = c
    }
    ;var at, bt = function() {
        if (Zs(l) && (at = Ua(),
        !Ys())) {
            var a = $s();
            a && (a.then(function() {
                L(95);
            }),
            a.catch(function() {
                L(96)
            }))
        }
    }, dt = function(a) {
        var b = ct.wn
          , c = function(g, h) {
            try {
                a(g, h)
            } catch (m) {}
        }
          , d = Xs();
        if (d)
            c(d);
        else {
            var e = Ys();
            if (e) {
                b = Math.min(Math.max(isFinite(b) ? b : 0, 0), 1E3);
                var f = l.setTimeout(function() {
                    c.Qe || (c.Qe = !0,
                    L(106),
                    c(null, Error("Timeout")))
                }, b);
                e.then(function(g) {
                    c.Qe || (c.Qe = !0,
                    L(104),
                    l.clearTimeout(f),
                    c(g))
                }).catch(function(g) {
                    c.Qe || (c.Qe = !0,
                    L(105),
                    l.clearTimeout(f),
                    c(null, g))
                })
            } else
                c(null)
        }
    }, et = function(a, b) {
        a && (b.h[M.g.ce] = a.architecture,
        b.h[M.g.de] = a.bitness,
        a.fullVersionList && (b.h[M.g.ee] = a.fullVersionList.map(function(c) {
            return encodeURIComponent(c.brand || "") + ";" + encodeURIComponent(c.version || "")
        }).join("|")),
        b.h[M.g.fe] = a.mobile ? "1" : "0",
        b.h[M.g.he] = a.model,
        b.h[M.g.ie] = a.platform,
        b.h[M.g.je] = a.platformVersion,
        b.h[M.g.ke] = a.wow64 ? "1" : "0")
    };
    function ft() {
        return "attribution-reporting"
    }
    function gt(a) {
        var b;
        b = void 0 === b ? document : b;
        var c;
        return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a))
    }
    ;var ht = !1;
    function it() {
        if (gt("join-ad-interest-group") && Ga(Bc.joinAdInterestGroup))
            return !0;
        ht || (Km('AymqwRC7u88Y4JPvfIF2F37QKylC04248hLCdJAsh8xgOfe/dVJPV3XS3wLFca1ZMVOtnBfVjaCMTVudWM//5g4AAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1RoaXJkUGFydHkiOnRydWV9'),
        ht = !0);
        return gt("join-ad-interest-group") && Ga(Bc.joinAdInterestGroup)
    }
    function jt(a, b) {
        var c = void 0;
        try {
            c = z.querySelector('iframe[data-tagging-id="' + b + '"]')
        } catch (e) {}
        if (c) {
            var d = Number(c.dataset.loadTime);
            if (d && Ua() - d < (void 0 == Vf[1] ? 6E4 : Vf[1])) {
                Bb("TAGGING", 9);
                return
            }
            try {
                c.parentNode.removeChild(c)
            } catch (e) {}
            c = void 0
        } else
            try {
                if (z.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]').length >= (void 0 == Vf[2] ? 50 : Vf[2])) {
                    Bb("TAGGING", 10);
                    return
                }
            } catch (e) {}
        Kc(a, void 0, {
            allow: "join-ad-interest-group"
        }, {
            taggingId: b,
            loadTime: Ua()
        }, c)
    }
    function kt() {
        return "https://td.doubleclick.net"
    }
    ;var eu = {
        H: {
            ii: "ads_conversion_hit",
            Bd: "container_execute_start",
            li: "container_setup_end",
            lg: "container_setup_start",
            ji: "container_blocking_end",
            ki: "container_execute_end",
            mi: "container_yield_end",
            mg: "container_yield_start",
            fj: "event_execute_end",
            ej: "event_evaluation_end",
            Yg: "event_evaluation_start",
            gj: "event_setup_end",
            pe: "event_setup_start",
            ij: "ga4_conversion_hit",
            se: "page_load",
            Tn: "pageview",
            bc: "snippet_load",
            wj: "tag_callback_error",
            xj: "tag_callback_failure",
            yj: "tag_callback_success",
            zj: "tag_execute_end",
            pd: "tag_execute_start"
        }
    };
    function fu() {
        function a(c, d) {
            var e = Cb(d);
            e && b.push([c, e])
        }
        var b = [];
        a("u", "GTM");
        a("ut", "TAGGING");
        a("h", "HEALTH");
        return b
    }
    ;var gu = !1;
    var Ou = function(a, b) {}
      , Pu = function(a, b) {}
      , Qu = function(a, b) {}
      , Ru = function(a, b) {}
      , Su = function() {
        var a = {};
        return a
    }
      , Gu = function(a) {
        a = void 0 === a ? !0 : a;
        var b = {};
        return b
    }
      , Tu = function() {}
      , Uu = function(a, b) {}
      , Vu = function(a, b, c) {}
      , Wu = function() {};
    var Xu = function(a, b) {
        var c = l, d, e = c.GooglebQhCsO;
        e || (e = {},
        c.GooglebQhCsO = e);
        d = e;
        if (d[a])
            return !1;
        d[a] = [];
        d[a][0] = b;
        return !0
    };
    var Yu = function(a, b, c) {
        var d = Fm(a, "fmt");
        if (b) {
            var e = Fm(a, "random")
              , f = Fm(a, "label") || "";
            if (!e)
                return !1;
            var g = Us(decodeURIComponent(f.replace(/\+/g, " ")) + ":" + decodeURIComponent(e.replace(/\+/g, " ")));
            if (!Xu(g, b))
                return !1
        }
        d && 4 != d && (a = Hm(a, "rfmt", d));
        var h = Hm(a, "fmt", 4);
        Ic(h, function() {
            l.google_noFurtherRedirects && b && b.call && (l.google_noFurtherRedirects = null,
            b())
        }, void 0, c, z.getElementsByTagName("script")[0].parentElement || void 0);
        return !0
    };
    var ov = function() {
        this.h = {}
    }
      , pv = function(a, b, c) {
        null != c && (a.h[b] = c)
    }
      , qv = function(a) {
        return Object.keys(a.h).map(function(b) {
            return encodeURIComponent(b) + "=" + encodeURIComponent(a.h[b])
        }).join("&")
    }
      , sv = function(a, b, c, d) {};
    function uv(a, b) {
        if (data.entities && data.entities[a])
            return data.entities[a][b]
    }
    ;var wv = function(a, b, c) {
        c = void 0 === c ? !1 : c;
        vv().addRestriction(0, a, b, c)
    }
      , xv = function(a, b, c) {
        c = void 0 === c ? !1 : c;
        vv().addRestriction(1, a, b, c)
    }
      , yv = function() {
        var a = Yj();
        return vv().getRestrictions(1, a)
    }
      , zv = function() {
        this.h = {};
        this.s = {}
    }
      , Av = function(a, b) {
        var c = a.h[b];
        c || (c = {
            _entity: {
                internal: [],
                external: []
            },
            _event: {
                internal: [],
                external: []
            }
        },
        a.h[b] = c);
        return c
    };
    zv.prototype.addRestriction = function(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        if (!d || !this.s[b]) {
            var e = Av(this, b);
            0 === a ? d ? e._entity.external.push(c) : e._entity.internal.push(c) : 1 === a && (d ? e._event.external.push(c) : e._event.internal.push(c))
        }
    }
    ;
    zv.prototype.getRestrictions = function(a, b) {
        var c = Av(this, b);
        if (0 === a) {
            var d, e;
            return [].concat(ja((null == c ? void 0 : null == (d = c._entity) ? void 0 : d.internal) || []), ja((null == c ? void 0 : null == (e = c._entity) ? void 0 : e.external) || []))
        }
        if (1 === a) {
            var f, g;
            return [].concat(ja((null == c ? void 0 : null == (f = c._event) ? void 0 : f.internal) || []), ja((null == c ? void 0 : null == (g = c._event) ? void 0 : g.external) || []))
        }
        return []
    }
    ;
    zv.prototype.getExternalRestrictions = function(a, b) {
        var c = Av(this, b), d, e;
        return 0 === a ? (null == c ? void 0 : null == (d = c._entity) ? void 0 : d.external) || [] : (null == c ? void 0 : null == (e = c._event) ? void 0 : e.external) || []
    }
    ;
    zv.prototype.removeExternalRestrictions = function(a) {
        var b = Av(this, a);
        b._event && (b._event.external = []);
        b._entity && (b._entity.external = []);
        this.s[a] = !0
    }
    ;
    function vv() {
        var a = ti.r;
        a || (a = new zv,
        ti.r = a);
        return a
    }
    ;var Bv = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/)
      , Cv = {
        cl: ["ecl"],
        customPixels: ["nonGooglePixels"],
        ecl: ["cl"],
        ehl: ["hl"],
        gaawc: ["googtag"],
        hl: ["ehl"],
        html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
        customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
        nonGooglePixels: [],
        nonGoogleScripts: ["nonGooglePixels"],
        nonGoogleIframes: ["nonGooglePixels"]
    }
      , Dv = {
        cl: ["ecl"],
        customPixels: ["customScripts", "html"],
        ecl: ["cl"],
        ehl: ["hl"],
        gaawc: ["googtag"],
        hl: ["ehl"],
        html: ["customScripts"],
        customScripts: ["html"],
        nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
        nonGoogleScripts: ["customScripts", "html"],
        nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
    }
      , Ev = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ")
      , Hv = function(a) {
        var b = Ti("gtm.allowlist") || Ti("gtm.whitelist");
        b && L(9);
        zi && (b = ["google", "gtagfl", "lcl", "zone"]);
        Fv() && (zi ? L(116) : (L(117),
        Gv && (b = [],
        window.console && window.console.log && window.console.log("GTM blocked. See go/13687728."))));
        var c = b && Ya(Ra(b), Cv)
          , d = Ti("gtm.blocklist") || Ti("gtm.blacklist");
        d || (d = Ti("tagTypeBlacklist")) && L(3);
        d ? L(8) : d = [];
        Fv() && (d = Ra(d),
        d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
        0 <= Ra(d).indexOf("google") && L(2);
        var e = d && Ya(Ra(d), Dv)
          , f = {};
        return function(g) {
            var h = g && g[Qe.ma];
            if (!h || "string" != typeof h)
                return !0;
            h = h.replace(/^_*/, "");
            if (void 0 !== f[h])
                return f[h];
            var m = Ji[h] || []
              , n = R(10) ? !0 : a(h, m);
            if (b) {
                var p;
                if (p = n)
                    a: {
                        if (0 > c.indexOf(h))
                            if (m && 0 < m.length)
                                for (var q = 0; q < m.length; q++) {
                                    if (0 > c.indexOf(m[q])) {
                                        L(11);
                                        p = !1;
                                        break a
                                    }
                                }
                            else {
                                p = !1;
                                break a
                            }
                        p = !0
                    }
                n = p
            }
            var r = !1;
            if (d) {
                var t = 0 <= e.indexOf(h);
                if (t)
                    r = t;
                else {
                    var u = Ma(e, m || []);
                    u && L(10);
                    r = u
                }
            }
            var v = !n || r;
            v || !(0 <= m.indexOf("sandboxedScripts")) || c && -1 !== c.indexOf("sandboxedScripts") || (v = Ma(e, Ev));
            return f[h] = v
        }
    }
      , Gv = !1;
    Gv = !0;
    var Fv = function() {
        return Bv.test(l.location && l.location.hostname)
    }
      , Iv = function() {
        Qj && wv(Yj(), function(a) {
            var b = Af(a.entityId), c;
            if (Ff(b)) {
                var d = b[Qe.ma];
                if (!d)
                    throw "Error: No function name given for function call.";
                var e = sf[d];
                c = !!e && !!e.runInSiloedMode
            } else
                c = !!uv(b[Qe.ma], 4);
            return c
        })
    };
    var Kv = function(a, b, c, d, e) {
        if (!Jv()) {
            var f = d.siloed ? Sj(a) : a;
            if (!hk(f)) {
                var g = "?id=" + encodeURIComponent(a) + "&l=" + si.ja
                  , h = 0 === a.indexOf("GTM-");
                h || (g += "&cx=c");
                R(64) && (g += "&gtm=" + Mn());
                var m = Hj();
                m && (g += "&sign=" + si.Kf);
                var n = c ? "/gtag/js" : "/gtm.js"
                  , p = Gj() ? Fj(b, n + g) : void 0;
                if (!p) {
                    var q = si.Cd + n;
                    m && Cc && h ? (q = Cc.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0],
                    p = Tq("https://", "http://", q + g)) : p = Mi.s ? Ni() + n + g : Tq("https://", "http://", q + g)
                }
                d.siloed && jk({
                    ctid: f,
                    isDestination: !1
                });
                var r = ak();
                Mj().container[f] = {
                    state: 1,
                    context: d,
                    parent: r
                };
                Nj({
                    ctid: f,
                    isDestination: !1
                }, e);
                Ic(p)
            }
        }
    }
      , Lv = function(a, b, c, d) {
        if (!Jv()) {
            var e = c.siloed ? Sj(a) : a;
            if (!ik(e))
                if (!c.siloed && kk())
                    Mj().destination[e] = {
                        state: 0,
                        transportUrl: b,
                        context: c,
                        parent: ak()
                    },
                    Nj({
                        ctid: e,
                        isDestination: !0
                    }, d),
                    L(91);
                else {
                    var f = "/gtag/destination?id=" + encodeURIComponent(a) + "&l=" + si.ja + "&cx=c";
                    R(64) && (f += "&gtm=" + Mn());
                    Hj() && (f += "&sign=" + si.Kf);
                    var g = Gj() ? Fj(b, f) : void 0;
                    g || (g = Mi.s ? Ni() + f : Tq("https://", "http://", si.Cd + f));
                    c.siloed && jk({
                        ctid: e,
                        isDestination: !0
                    });
                    Mj().destination[e] = {
                        state: 1,
                        context: c,
                        parent: ak()
                    };
                    Nj({
                        ctid: e,
                        isDestination: !0
                    }, d);
                    Ic(g)
                }
        }
    };
    function Jv() {
        if (Kn()) {
            return !0
        }
        return !1
    }
    ;var Mv = !1
      , Nv = 0
      , Ov = [];
    function Pv(a) {
        if (!Mv) {
            var b = z.createEventObject
              , c = "complete" == z.readyState
              , d = "interactive" == z.readyState;
            if (!a || "readystatechange" != a.type || c || !b && d) {
                Mv = !0;
                for (var e = 0; e < Ov.length; e++)
                    C(Ov[e])
            }
            Ov.push = function() {
                for (var f = 0; f < arguments.length; f++)
                    C(arguments[f]);
                return 0
            }
        }
    }
    function Qv() {
        if (!Mv && 140 > Nv) {
            Nv++;
            try {
                z.documentElement.doScroll("left"),
                Pv()
            } catch (a) {
                l.setTimeout(Qv, 50)
            }
        }
    }
    var Rv = function(a) {
        Mv ? a() : Ov.push(a)
    };
    var Tv = function(a, b, c) {
        return {
            entityType: a,
            indexInOriginContainer: b,
            nameInOriginContainer: c,
            originContainerId: Xj()
        }
    };
    var Vv = function(a, b) {
        this.h = !1;
        this.F = [];
        this.M = {
            tags: []
        };
        this.W = !1;
        this.s = this.C = 0;
        Uv(this, a, b)
    }
      , Wv = function(a, b, c, d) {
        if (wi.hasOwnProperty(b) || "__zone" === b)
            return -1;
        var e = {};
        nb(d) && (e = ob(d, e));
        e.id = c;
        e.status = "timeout";
        return a.M.tags.push(e) - 1
    }
      , Xv = function(a, b, c, d) {
        var e = a.M.tags[b];
        e && (e.status = c,
        e.executionTime = d)
    }
      , Yv = function(a) {
        if (!a.h) {
            for (var b = a.F, c = 0; c < b.length; c++)
                b[c]();
            a.h = !0;
            a.F.length = 0
        }
    }
      , Uv = function(a, b, c) {
        void 0 !== b && a.Mf(b);
        c && l.setTimeout(function() {
            return Yv(a)
        }, Number(c))
    };
    Vv.prototype.Mf = function(a) {
        var b = this
          , c = Wa(function() {
            return C(function() {
                a(Xj(), b.M)
            })
        });
        this.h ? c() : this.F.push(c)
    }
    ;
    var Zv = function(a) {
        a.C++;
        return Wa(function() {
            a.s++;
            a.W && a.s >= a.C && Yv(a)
        })
    }
      , $v = function(a) {
        a.W = !0;
        a.s >= a.C && Yv(a)
    };
    var aw = {}
      , cw = function() {
        return l[bw()]
    }
      , dw = !1;
    function bw() {
        return l.GoogleAnalyticsObject || "ga"
    }
    var gw = function(a) {}
      , hw = function(a, b) {
        return function() {
            var c = cw()
              , d = c && c.getByName && c.getByName(a);
            if (d) {
                var e = d.get("sendHitTask");
                d.set("sendHitTask", function(f) {
                    var g = f.get("hitPayload")
                      , h = f.get("hitCallback")
                      , m = 0 > g.indexOf("&tid=" + b);
                    m && (f.set("hitPayload", g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0),
                    f.set("hitCallback", void 0, !0));
                    e(f);
                    m && (f.set("hitPayload", g, !0),
                    f.set("hitCallback", h, !0),
                    f.set("_x_19", void 0, !0),
                    e(f))
                })
            }
        }
    };
    var mw = ["es", "1"]
      , nw = {}
      , ow = {};
    function pw(a, b) {
        if (uk) {
            var c;
            c = b.match(/^(gtm|gtag)\./) ? encodeURIComponent(b) : "*";
            nw[a] = [["e", c], ["eid", a]];
            Fk(a)
        }
    }
    function qw(a) {
        var b = a.eventId
          , c = a.zb;
        if (!nw[b])
            return [];
        var d = [];
        ow[b] || d.push(mw);
        d.push.apply(d, ja(nw[b]));
        c && (ow[b] = !0);
        return d
    }
    ;var rw = {}
      , sw = {}
      , tw = {};
    function uw(a, b, c, d) {
        uk && R(74) && ((void 0 === d ? 0 : d) ? (tw[b] = tw[b] || 0,
        ++tw[b]) : void 0 !== c ? (sw[a] = sw[a] || {},
        sw[a][b] = Math.round(c)) : (rw[a] = rw[a] || {},
        rw[a][b] = (rw[a][b] || 0) + 1))
    }
    function vw(a) {
        var b = a.eventId, c = a.zb, d = rw[b] || {}, e = [], f;
        for (f in d)
            d.hasOwnProperty(f) && e.push("" + f + d[f]);
        c && delete rw[b];
        return e.length ? [["md", e.join(".")]] : []
    }
    function ww(a) {
        var b = a.eventId, c = a.zb, d = sw[b] || {}, e = [], f;
        for (f in d)
            d.hasOwnProperty(f) && e.push("" + f + d[f]);
        c && delete sw[b];
        return e.length ? [["mtd", e.join(".")]] : []
    }
    function xw() {
        for (var a = [], b = ha(Object.keys(tw)), c = b.next(); !c.done; c = b.next()) {
            var d = c.value;
            a.push("" + d + tw[d])
        }
        return a.length ? [["mec", a.join(".")]] : []
    }
    ;var yw = {}
      , zw = {};
    function Aw(a, b, c) {
        if (uk && b) {
            var d = Kj(b);
            yw[a] = yw[a] || [];
            yw[a].push(c + d);
            var e = (Ff(b) ? "1" : "2") + d;
            zw[a] = zw[a] || [];
            zw[a].push(e);
            Fk(a)
        }
    }
    function Bw(a) {
        var b = a.eventId
          , c = a.zb
          , d = []
          , e = yw[b] || [];
        e.length && d.push(["tr", e.join(".")]);
        var f = zw[b] || [];
        f.length && d.push(["ti", f.join(".")]);
        c && (delete yw[b],
        delete zw[b]);
        return d
    }
    ;function Cw(a, b, c, d) {
        var e = qf[a]
          , f = Dw(a, b, c, d);
        if (!f)
            return null;
        var g = Cf(e[Qe.vj], c, []);
        if (g && g.length) {
            var h = g[0];
            f = Cw(h.index, {
                onSuccess: f,
                onFailure: 1 === h.Kj ? b.terminate : f,
                terminate: b.terminate
            }, c, d)
        }
        return f
    }
    function Dw(a, b, c, d) {
        function e() {
            if (f[Qe.Wk])
                h();
            else {
                var w = Df(f, c, [])
                  , x = w[Qe.uk];
                if (null != x)
                    for (var y = 0; y < x.length; y++)
                        if (!U(x[y])) {
                            h();
                            return
                        }
                var B = Wv(c.fc, String(f[Qe.ma]), Number(f[Qe.we]), w[Qe.Xk])
                  , A = !1;
                w.vtp_gtmOnSuccess = function() {
                    if (!A) {
                        A = !0;
                        var D = Ua() - G;
                        Aw(c.id, qf[a], "5");
                        Xv(c.fc, B, "success", D);
                        R(65) && Vu(c, f, eu.H.yj);
                        g()
                    }
                }
                ;
                w.vtp_gtmOnFailure = function() {
                    if (!A) {
                        A = !0;
                        var D = Ua() - G;
                        Aw(c.id, qf[a], "6");
                        Xv(c.fc, B, "failure", D);
                        R(65) && Vu(c, f, eu.H.xj);
                        h()
                    }
                }
                ;
                w.vtp_gtmTagId = f.tag_id;
                w.vtp_gtmEventId = c.id;
                c.priorityId && (w.vtp_gtmPriorityId = c.priorityId);
                Aw(c.id, f, "1");
                var F = function() {
                    ej(3);
                    var D = Ua() - G;
                    Aw(c.id, f, "7");
                    Xv(c.fc, B, "exception", D);
                    R(65) && Vu(c, f, eu.H.wj);
                    A || (A = !0,
                    h())
                };
                R(65) && Uu(c, f);
                var G = Ua();
                try {
                    Bf(w, {
                        event: c,
                        index: a,
                        type: 1
                    })
                } catch (D) {
                    F(D)
                }
                R(65) && Vu(c, f, eu.H.zj)
            }
        }
        var f = qf[a]
          , g = b.onSuccess
          , h = b.onFailure
          , m = b.terminate;
        if (c.isBlocked(f))
            return null;
        var n = Cf(f[Qe.Aj], c, []);
        if (n && n.length) {
            var p = n[0]
              , q = Cw(p.index, {
                onSuccess: g,
                onFailure: h,
                terminate: m
            }, c, d);
            if (!q)
                return null;
            g = q;
            h = 2 === p.Kj ? m : q
        }
        if (f[Qe.qj] || f[Qe.Zk]) {
            var r = f[Qe.qj] ? rf : c.rn
              , t = g
              , u = h;
            if (!r[a]) {
                e = Wa(e);
                var v = Ew(a, r, e);
                g = v.onSuccess;
                h = v.onFailure
            }
            return function() {
                r[a](t, u)
            }
        }
        return e
    }
    function Ew(a, b, c) {
        var d = []
          , e = [];
        b[a] = Fw(d, e, c);
        return {
            onSuccess: function() {
                b[a] = Gw;
                for (var f = 0; f < d.length; f++)
                    d[f]()
            },
            onFailure: function() {
                b[a] = Hw;
                for (var f = 0; f < e.length; f++)
                    e[f]()
            }
        }
    }
    function Fw(a, b, c) {
        return function(d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }
    function Gw(a) {
        a()
    }
    function Hw(a, b) {
        b()
    }
    ;var Jw = function(a, b) {
        return 1 === arguments.length ? Iw("set", a) : Iw("set", a, b)
    }
      , fx = function(a, b) {
        return 1 === arguments.length ? Iw("config", a) : Iw("config", a, b)
    }
      , lx = function(a, b, c) {
        c = c || {};
        c[M.g.Wb] = a;
        return Iw("event", b, c)
    };
    function Iw(a) {
        return arguments
    }
    var mx = function() {
        this.h = [];
        this.s = []
    };
    mx.prototype.enqueue = function(a, b, c) {
        var d = this.h.length + 1;
        a["gtm.uniqueEventId"] = b;
        a["gtm.priorityId"] = d;
        c.eventId = b;
        c.fromContainerExecution = !0;
        c.priorityId = d;
        var e = {
            message: a,
            notBeforeEventId: b,
            priorityId: d,
            messageContext: c
        };
        this.h.push(e);
        for (var f = 0; f < this.s.length; f++)
            try {
                this.s[f](e)
            } catch (g) {}
    }
    ;
    mx.prototype.listen = function(a) {
        this.s.push(a)
    }
    ;
    mx.prototype.get = function() {
        for (var a = {}, b = 0; b < this.h.length; b++) {
            var c = this.h[b]
              , d = a[c.notBeforeEventId];
            d || (d = [],
            a[c.notBeforeEventId] = d);
            d.push(c)
        }
        return a
    }
    ;
    mx.prototype.prune = function(a) {
        for (var b = [], c = [], d = 0; d < this.h.length; d++) {
            var e = this.h[d];
            e.notBeforeEventId === a ? b.push(e) : c.push(e)
        }
        this.h = c;
        return b
    }
    ;
    var ox = function(a, b, c) {
        c.eventMetadata = c.eventMetadata || {};
        c.eventMetadata.source_canonical_id = Xf.canonicalContainerId;
        nx().enqueue(a, b, c)
    }
      , qx = function() {
        var a = px;
        nx().listen(a)
    };
    function nx() {
        var a = ti.mb;
        a || (a = new mx,
        ti.mb = a);
        return a
    }
    var yx = function(a) {
        var b = ti.zones;
        return b ? b.getIsAllowedFn(Tj(), a) : function() {
            return !0
        }
    }
      , zx = function() {
        xv(Yj(), function(a) {
            var b = a.originalEventData["gtm.uniqueEventId"]
              , c = ti.zones;
            return c ? c.isActive(Tj(), b) : !0
        });
        R(88) && wv(Yj(), function(a) {
            var b = a.entityId
              , c = a.securityGroups;
            return yx(Number(a.originalEventData["gtm.uniqueEventId"]))(b, c)
        })
    };
    var Cx = function(a, b) {
        for (var c = [], d = 0; d < qf.length; d++)
            if (a[d]) {
                var e = qf[d];
                var f = Zv(b.fc);
                try {
                    var g = Cw(d, {
                        onSuccess: f,
                        onFailure: f,
                        terminate: f
                    }, b, d);
                    if (g) {
                        var h = e[Qe.ma];
                        if (!h)
                            throw "Error: No function name given for function call.";
                        var m = sf[h];
                        c.push({
                            jk: d,
                            Xj: (m ? m.priorityOverride || 0 : 0) || uv(e[Qe.ma], 1) || 0,
                            execute: g
                        })
                    } else
                        Ax(d, b),
                        f()
                } catch (p) {
                    f()
                }
            }
        c.sort(Bx);
        for (var n = 0; n < c.length; n++)
            c[n].execute();
        return 0 < c.length
    };
    function Bx(a, b) {
        var c, d = b.Xj, e = a.Xj;
        c = d > e ? 1 : d < e ? -1 : 0;
        var f;
        if (0 !== c)
            f = c;
        else {
            var g = a.jk
              , h = b.jk;
            f = g > h ? 1 : g < h ? -1 : 0
        }
        return f
    }
    function Ax(a, b) {
        if (uk) {
            var c = function(d) {
                var e = b.isBlocked(qf[d]) ? "3" : "4"
                  , f = Cf(qf[d][Qe.vj], b, []);
                f && f.length && c(f[0].index);
                Aw(b.id, qf[d], e);
                var g = Cf(qf[d][Qe.Aj], b, []);
                g && g.length && c(g[0].index)
            };
            c(a)
        }
    }
    var Fx = !1, Dx;
    var Lx = function(a) {
        var b = a["gtm.uniqueEventId"]
          , c = a["gtm.priorityId"]
          , d = a.event;
        if (R(65)) {}
        if ("gtm.js" === d) {
            if (Fx)
                return !1;
            Fx = !0
        }
        var e, f = !1, g = yv(), h = ob(a);
        if (g.every(function(u) {
            return u({
                originalEventData: h
            })
        }))
            e = yx(b);
        else {
            if ("gtm.js" !== d && "gtm.init" !== d && "gtm.init_consent" !== d)
                return !1;
            f = !0;
            e = yx(Number.MAX_SAFE_INTEGER)
        }
        pw(b, d);
        var m = a.eventCallback
          , n = a.eventTimeout
          , p = {
            id: b,
            priorityId: c,
            name: d,
            isBlocked: Hx(e, h, f),
            rn: [],
            logMacroError: function() {
                L(6);
                ej(0)
            },
            cachedModelValues: Ix(),
            fc: new Vv(function() {
                if (R(65)) {}
                m && m.apply(m, [].slice.call(arguments, 0))
            }
            ,n),
            originalEventData: h
        };
        R(74) && uk && (p.reportMacroDiscrepancy = uw);
        R(65) && Qu(p.id, p.name);
        var q = Nf(p);
        R(65) && Ru(p.id, p.name);
        f && (q = Jx(q));
        if (R(65)) {}
        var r = Cx(q, p)
          , t = !1;
        $v(p.fc);
        "gtm.js" !== d && "gtm.sync" !== d || gw(Xj());
        return Kx(q, r) || t
    };
    function Ix() {
        var a = {};
        a.event = Yi("event", 1);
        a.ecommerce = Yi("ecommerce", 1);
        a.gtm = Yi("gtm");
        a.eventModel = Yi("eventModel");
        return a
    }
    function Hx(a, b, c) {
        var d = Hv(a);
        return function(e) {
            if (d(e))
                return !0;
            var f = e && e[Qe.ma];
            if (!f || "string" != typeof f)
                return !0;
            f = f.replace(/^_*/, "");
            var g, h = Yj();
            g = vv().getRestrictions(0, h);
            var m = b;
            c && (m = ob(b),
            m["gtm.uniqueEventId"] = Number.MAX_SAFE_INTEGER);
            for (var n = Ji[f] || [], p = ha(g), q = p.next(); !q.done; q = p.next()) {
                var r = q.value;
                try {
                    if (!r({
                        entityId: f,
                        securityGroups: n,
                        originalEventData: m
                    }))
                        return !0
                } catch (t) {
                    return !0
                }
            }
            return !1
        }
    }
    function Jx(a) {
        for (var b = [], c = 0; c < a.length; c++)
            if (a[c]) {
                var d = String(qf[c][Qe.ma]);
                if (vi[d] || void 0 !== qf[c][Qe.al] || uv(d, 2))
                    b[c] = !0
            }
        return b
    }
    function Kx(a, b) {
        if (!b)
            return b;
        for (var c = 0; c < a.length; c++)
            if (a[c] && qf[c] && !wi[String(qf[c][Qe.ma])])
                return !0;
        return !1
    }
    var Qf;
    var Mx = {}
      , Nx = {}
      , Ox = function(a, b) {
        for (var c = [], d = [], e = {}, f = 0; f < a.length; e = {
            Rh: void 0,
            yh: void 0
        },
        f++) {
            var g = a[f];
            if (0 <= g.indexOf("-")) {
                if (e.Rh = Cl(g, b),
                e.Rh) {
                    var h = Vj();
                    Ja(h, function(r) {
                        return function(t) {
                            return r.Rh.ba === t
                        }
                    }(e)) ? c.push(g) : d.push(g)
                }
            } else {
                var m = Mx[g] || [];
                e.yh = {};
                m.forEach(function(r) {
                    return function(t) {
                        return r.yh[t] = !0
                    }
                }(e));
                for (var n = Tj(), p = 0; p < n.length; p++)
                    if (e.yh[n[p]]) {
                        c = c.concat(Vj());
                        break
                    }
                var q = Nx[g] || [];
                q.length && (c = c.concat(q))
            }
        }
        return {
            Hm: c,
            Lm: d
        }
    }
      , Px = function(a) {
        Na(Mx, function(b, c) {
            var d = c.indexOf(a);
            0 <= d && c.splice(d, 1)
        })
    }
      , Qx = function(a) {
        Na(Nx, function(b, c) {
            var d = c.indexOf(a);
            0 <= d && c.splice(d, 1)
        })
    };
    var Rx = "HA GF G UA AW DC MC".split(" ")
      , Sx = !1
      , Tx = !1
      , Ux = !1
      , Vx = !1;
    function Wx(a, b) {
        a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", {
            value: Ki()
        });
        b.eventId = a["gtm.uniqueEventId"];
        b.priorityId = a["gtm.priorityId"];
        return {
            eventId: b.eventId,
            priorityId: b.priorityId
        }
    }
    var Xx = void 0
      , Yx = void 0;
    function Zx(a, b, c) {
        var d = ob(a);
        d.eventId = void 0;
        d.inheritParentConfig = void 0;
        Object.keys(b).some(function(f) {
            return void 0 !== b[f]
        }) && L(136);
        var e = ob(b);
        ob(c, e);
        ox(fx(Tj()[0], e), a.eventId, d)
    }
    function $x(a) {
        for (var b = ha([M.g.kd, M.g.Ib]), c = b.next(); !c.done; c = b.next()) {
            var d = c.value
              , e = a && a[d] || km.C[d];
            if (e)
                return e
        }
    }
    var ay = [M.g.kd, M.g.Ib, M.g.xc, M.g.nb, M.g.ub, M.g.Ra, M.g.Aa, M.g.Oa, M.g.Ua, M.g.Rb]
      , by = {
        config: function(a, b) {
            var c = Wx(a, b);
            if (!(2 > a.length) && k(a[1])) {
                var d = {};
                if (2 < a.length) {
                    if (void 0 != a[2] && !nb(a[2]) || 3 < a.length)
                        return;
                    d = a[2]
                }
                var e = Cl(a[1], b.isGtmEvent);
                if (e) {
                    var f, g, h;
                    a: {
                        if (!Pj.qe) {
                            var m = Zj(ak());
                            if (mk(m)) {
                                var n = m.parent
                                  , p = n.isDestination;
                                h = {
                                    Rm: Zj(n),
                                    Gm: p
                                };
                                break a
                            }
                        }
                        h = void 0
                    }
                    var q = h;
                    q && (f = q.Rm,
                    g = q.Gm);
                    pw(c.eventId, "gtag.config");
                    var r = e.ba
                      , t = e.id !== r;
                    if (t ? -1 === Vj().indexOf(r) : -1 === Tj().indexOf(r)) {
                        if (!b.inheritParentConfig && !d[M.g.Eb]) {
                            var u = $x(d);
                            if (t)
                                Lv(r, u, {
                                    source: 2,
                                    fromContainerExecution: b.fromContainerExecution
                                });
                            else if (void 0 !== f && -1 !== f.containers.indexOf(r)) {
                                var v = d;
                                Xx ? Zx(b, v, Xx) : Yx || (Yx = ob(v))
                            } else
                                Kv(r, u, !0, {
                                    source: 2,
                                    fromContainerExecution: b.fromContainerExecution
                                })
                        }
                    } else {
                        if (f && (L(128),
                        g && L(130),
                        b.inheritParentConfig)) {
                            var w;
                            var x = d;
                            Yx ? (Zx(b, Yx, x),
                            w = !1) : (!x[M.g.Xb] && yi && Xx || (Xx = ob(x)),
                            w = !0);
                            w && f.containers && f.containers.join(",");
                            return
                        }
                        var y = d;
                        if (R(38) && !Ux && (Ux = !0,
                        Tx))
                            for (var B = ha(ay), A = B.next(); !A.done; A = B.next())
                                if (y.hasOwnProperty(A.value)) {
                                    Lk("erc");
                                    break
                                }
                        if (yi && !t && !d[M.g.Xb]) {
                            var F = Vx;
                            Vx = !0;
                            if (F)
                                return
                        }
                        Sx || L(43);
                        if (!b.noTargetGroup)
                            if (t) {
                                Qx(e.id);
                                var G = e.id
                                  , D = d[M.g.Vd] || "default";
                                D = String(D).split(",");
                                for (var E = 0; E < D.length; E++) {
                                    var P = Nx[D[E]] || [];
                                    Nx[D[E]] = P;
                                    0 > P.indexOf(G) && P.push(G)
                                }
                            } else {
                                Px(e.id);
                                var N = e.id
                                  , W = d[M.g.Vd] || "default";
                                W = W.toString().split(",");
                                for (var Z = 0; Z < W.length; Z++) {
                                    var Q = Mx[W[Z]] || [];
                                    Mx[W[Z]] = Q;
                                    0 > Q.indexOf(N) && Q.push(N)
                                }
                            }
                        delete d[M.g.Vd];
                        var T = b.eventMetadata || {};
                        T.hasOwnProperty("is_external_event") || (T.is_external_event = !b.fromContainerExecution);
                        b.eventMetadata = T;
                        delete d[M.g.dd];
                        for (var la = t ? [e.id] : Vj(), fa = 0; fa < la.length; fa++) {
                            var ca = d
                              , Fa = la[fa]
                              , Da = ob(b)
                              , Ca = Cl(Fa, Da.isGtmEvent);
                            Ca && km.push("config", [ca], Ca, Da)
                        }
                    }
                }
            }
        },
        consent: function(a, b) {
            if (3 === a.length) {
                L(39);
                var c = Wx(a, b)
                  , d = a[1]
                  , e = a[2];
                b.fromContainerExecution || (e[M.g.N] && L(139),
                e[M.g.xa] && L(140));
                "default" === d ? rl(e) : "update" === d ? sl(e, c) : "declare" === d && b.fromContainerExecution && ql(e)
            }
        },
        event: function(a, b) {
            var c = a[1];
            if (!(2 > a.length) && k(c)) {
                var d;
                if (2 < a.length) {
                    if (!nb(a[2]) && void 0 != a[2] || 3 < a.length)
                        return;
                    d = a[2]
                }
                var e = d
                  , f = {}
                  , g = (f.event = c,
                f);
                e && (g.eventModel = ob(e),
                e[M.g.dd] && (g.eventCallback = e[M.g.dd]),
                e[M.g.Sd] && (g.eventTimeout = e[M.g.Sd]));
                var h = Wx(a, b)
                  , m = h.eventId
                  , n = h.priorityId;
                g["gtm.uniqueEventId"] = m;
                n && (g["gtm.priorityId"] = n);
                if ("optimize.callback" === c)
                    return g.eventModel = g.eventModel || {},
                    g;
                var p;
                var q = d
                  , r = q && q[M.g.Wb];
                void 0 === r && (r = Ti(M.g.Wb, 2),
                void 0 === r && (r = "default"));
                if (k(r) || Ia(r)) {
                    var t;
                    b.isGtmEvent ? t = k(r) ? [r] : r : t = r.toString().replace(/\s+/g, "").split(",");
                    var u = Ox(t, b.isGtmEvent)
                      , v = u.Hm
                      , w = u.Lm;
                    if (w.length)
                        for (var x = $x(q), y = 0; y < w.length; y++) {
                            var B = Cl(w[y], b.isGtmEvent);
                            B && Lv(B.ba, x, {
                                source: 3,
                                fromContainerExecution: b.fromContainerExecution
                            })
                        }
                    p = El(v, b.isGtmEvent)
                } else
                    p = void 0;
                var A = p;
                if (A) {
                    A.length && (Tx = !0);
                    pw(m, c);
                    for (var F = [], G = 0; G < A.length; G++) {
                        var D = A[G]
                          , E = ob(b);
                        if (-1 !== Rx.indexOf(dk(D.prefix))) {
                            var P = ob(d)
                              , N = E.eventMetadata || {};
                            N.hasOwnProperty("is_external_event") || (N.is_external_event = !E.fromContainerExecution);
                            E.eventMetadata = N;
                            delete P[M.g.dd];
                            mm(c, P, D.id, E)
                        }
                        F.push(D.id)
                    }
                    g.eventModel = g.eventModel || {};
                    0 < A.length ? g.eventModel[M.g.Wb] = F.join() : delete g.eventModel[M.g.Wb];
                    Sx || L(43);
                    void 0 === b.noGtmEvent && b.eventMetadata && b.eventMetadata.syn_or_mod && (b.noGtmEvent = !0);
                    g.eventModel[M.g.Tb] && (b.noGtmEvent = !0);
                    return b.noGtmEvent ? void 0 : g
                }
            }
        },
        get: function(a, b) {
            L(53);
            if (4 === a.length && k(a[1]) && k(a[2]) && Ga(a[3])) {
                var c = Cl(a[1], b.isGtmEvent)
                  , d = String(a[2])
                  , e = a[3];
                if (c) {
                    Sx || L(43);
                    var f = $x();
                    if (!Ja(Vj(), function(h) {
                        return c.ba === h
                    }))
                        Lv(c.ba, f, {
                            source: 4,
                            fromContainerExecution: b.fromContainerExecution
                        });
                    else if (-1 !== Rx.indexOf(dk(c.prefix))) {
                        Wx(a, b);
                        var g = {};
                        ll(ob((g[M.g.rb] = d,
                        g[M.g.Db] = e,
                        g)));
                        nm(d, function(h) {
                            C(function() {
                                return e(h)
                            })
                        }, c.id, b)
                    }
                }
            }
        },
        js: function(a, b) {
            if (2 == a.length && a[1].getTime) {
                Sx = !0;
                var c = Wx(a, b)
                  , d = c.eventId
                  , e = c.priorityId
                  , f = {};
                return f.event = "gtm.js",
                f["gtm.start"] = a[1].getTime(),
                f["gtm.uniqueEventId"] = d,
                f["gtm.priorityId"] = e,
                f
            }
        },
        policy: function(a) {
            if (3 === a.length && k(a[1]) && Ga(a[2])) {
                Rf(a[1], a[2]);
                if (L(74),
                "all" === a[1]) {
                    L(75);
                    var b = !1;
                    try {
                        b = a[2](Xj(), "unknown", {})
                    } catch (c) {}
                    b || L(76)
                }
            } else {
                L(73);
            }
        },
        set: function(a, b) {
            var c;
            2 == a.length && nb(a[1]) ? c = ob(a[1]) : 3 == a.length && k(a[1]) && (c = {},
            nb(a[2]) || Ia(a[2]) ? c[a[1]] = ob(a[2]) : c[a[1]] = a[2]);
            if (c) {
                var d = Wx(a, b)
                  , e = d.eventId
                  , f = d.priorityId;
                ob(c);
                var g = ob(c);
                km.push("set", [g], void 0, b);
                c["gtm.uniqueEventId"] = e;
                f && (c["gtm.priorityId"] = f);
                R(6) && delete c.event;
                b.overwriteModelFields = !0;
                return c
            }
        }
    }
      , cy = {
        policy: !0
    };
    var dy = function(a) {
        var b = l[si.ja].hide;
        if (b && void 0 !== b[a] && b.end) {
            b[a] = !1;
            var c = !0, d;
            for (d in b)
                if (b.hasOwnProperty(d) && !0 === b[d]) {
                    c = !1;
                    break
                }
            c && (b.end(),
            b.end = null)
        }
    }
      , ey = function(a) {
        var b = l[si.ja]
          , c = b && b.hide;
        c && c.end && (c[a] = !0)
    };
    var fy = !1
      , gy = [];
    function hy() {
        if (!fy) {
            fy = !0;
            for (var a = 0; a < gy.length; a++)
                C(gy[a])
        }
    }
    var iy = function(a) {
        fy ? C(a) : gy.push(a)
    };
    var zy = function(a) {
        if (yy(a))
            return a;
        this.h = a
    };
    zy.prototype.getUntrustedMessageValue = function() {
        return this.h
    }
    ;
    var yy = function(a) {
        return !a || "object" !== lb(a) || nb(a) ? !1 : "getUntrustedMessageValue"in a
    };
    zy.prototype.getUntrustedMessageValue = zy.prototype.getUntrustedMessageValue;
    var Ay = 0
      , By = {}
      , Cy = []
      , Dy = []
      , Ey = !1
      , Fy = !1;
    function Gy(a, b) {
        return a.messageContext.eventId - b.messageContext.eventId || a.messageContext.priorityId - b.messageContext.priorityId
    }
    var Hy = function(a) {
        return l[si.ja].push(a)
    }
      , Iy = function(a, b, c) {
        a.eventCallback = b;
        c && (a.eventTimeout = c);
        return Hy(a)
    }
      , Jy = function(a, b) {
        if (!Ha(b) || 0 > b)
            b = 0;
        var c = ti[si.ja]
          , d = 0
          , e = !1
          , f = void 0;
        f = l.setTimeout(function() {
            e || (e = !0,
            a());
            f = void 0
        }, b);
        return function() {
            var g = c ? c.subscribers : 1;
            ++d === g && (f && (l.clearTimeout(f),
            f = void 0),
            e || (a(),
            e = !0))
        }
    };
    function Ky(a, b) {
        var c = a._clear || b.overwriteModelFields;
        Na(a, function(e, f) {
            "_clear" !== e && (c && Wi(e),
            Wi(e, f))
        });
        Gi || (Gi = a["gtm.start"]);
        var d = a["gtm.uniqueEventId"];
        if (!a.event)
            return !1;
        "number" !== typeof d && (d = Ki(),
        a["gtm.uniqueEventId"] = d,
        Wi("gtm.uniqueEventId", d));
        return Lx(a)
    }
    function Ly(a) {
        if (null == a || "object" !== typeof a)
            return !1;
        if (a.event)
            return !0;
        if (Oa(a)) {
            var b = a[0];
            if ("config" === b || "event" === b || "js" === b || "get" === b)
                return !0
        }
        return !1
    }
    function My() {
        var a;
        if (Dy.length)
            a = Dy.shift();
        else if (Cy.length)
            a = Cy.shift();
        else
            return;
        var b;
        var c = a;
        if (Ey || !Ly(c.message))
            b = c;
        else {
            Ey = !0;
            var d = c.message["gtm.uniqueEventId"];
            "number" !== typeof d && (d = c.message["gtm.uniqueEventId"] = Ki());
            var e = {}
              , f = {
                message: (e.event = "gtm.init_consent",
                e["gtm.uniqueEventId"] = d - 2,
                e),
                messageContext: {
                    eventId: d - 2
                }
            }
              , g = {}
              , h = {
                message: (g.event = "gtm.init",
                g["gtm.uniqueEventId"] = d - 1,
                g),
                messageContext: {
                    eventId: d - 1
                }
            };
            Cy.unshift(h, c);
            if (uk) {
                var m = Xf.ctid;
                if (m) {
                    var n, p = Zj(ak());
                    n = p && p.context;
                    var q, r = wj(l.location.href);
                    q = r.hostname + r.pathname;
                    var t = n && n.fromContainerExecution
                      , u = n && n.source
                      , v = Xf.canonicalContainerId
                      , w = Pj.qe;
                    uk && (Fl || (Fl = q),
                    Gl.push(m + ";" + v + ";" + (t ? 1 : 0) + ";" + (u || 0) + ";" + (w ? 1 : 0)))
                }
            }
            b = f
        }
        return b
    }
    function Ny() {
        for (var a = !1, b; !Fy && (b = My()); ) {
            Fy = !0;
            delete Qi.eventModel;
            Si();
            var c = b
              , d = c.message
              , e = c.messageContext;
            if (null == d)
                Fy = !1;
            else {
                e.fromContainerExecution && Xi();
                try {
                    if (Ga(d))
                        try {
                            d.call(Ui)
                        } catch (x) {}
                    else if (Ia(d)) {
                        var f = d;
                        if (k(f[0])) {
                            var g = f[0].split(".")
                              , h = g.pop()
                              , m = f.slice(1)
                              , n = Ti(g.join("."), 2);
                            if (null != n)
                                try {
                                    n[h].apply(n, m)
                                } catch (x) {}
                        }
                    } else {
                        var p = void 0
                          , q = !1;
                        if (Oa(d)) {
                            a: {
                                if (d.length && k(d[0])) {
                                    var r = by[d[0]];
                                    if (r && (!e.fromContainerExecution || !cy[d[0]])) {
                                        p = r(d, e);
                                        break a
                                    }
                                }
                                p = void 0
                            }
                            (q = p && "set" === d[0] && !!p.event) && L(101)
                        } else
                            p = d;
                        if (p) {
                            var t = Ky(p, e);
                            a = t || a;
                            q && t && L(113)
                        }
                    }
                } finally {
                    e.fromContainerExecution && Si(!0);
                    var u = d["gtm.uniqueEventId"];
                    if ("number" === typeof u) {
                        for (var v = By[String(u)] || [], w = 0; w < v.length; w++)
                            Dy.push(Oy(v[w]));
                        v.length && Dy.sort(Gy);
                        delete By[String(u)];
                        u > Ay && (Ay = u)
                    }
                    Fy = !1
                }
            }
        }
        return !a
    }
    function Py() {
        if (R(65)) {
            var a = Qy();
        }
        var b = Ny();
        if (R(65)) {}
        try {
            dy(Xj())
        } catch (c) {}
        return b
    }
    function px(a) {
        if (Ay < a.notBeforeEventId) {
            var b = String(a.notBeforeEventId);
            By[b] = By[b] || [];
            By[b].push(a)
        } else
            Dy.push(Oy(a)),
            Dy.sort(Gy),
            C(function() {
                Fy || Ny()
            })
    }
    function Oy(a) {
        return {
            message: a.message,
            messageContext: a.messageContext
        }
    }
    var Ry = function() {
        function a(f) {
            var g = {};
            if (yy(f)) {
                var h = f;
                f = yy(h) ? h.getUntrustedMessageValue() : void 0;
                g.fromContainerExecution = !0
            }
            return {
                message: f,
                messageContext: g
            }
        }
        var b = Dc(si.ja, [])
          , c = ti[si.ja] = ti[si.ja] || {};
        !0 === c.pruned && L(83);
        By = nx().get();
        qx();
        Rv(function() {
            if (!c.gtmDom) {
                c.gtmDom = !0;
                var f = {};
                b.push((f.event = "gtm.dom",
                f))
            }
        });
        iy(function() {
            if (!c.gtmLoad) {
                c.gtmLoad = !0;
                var f = {};
                b.push((f.event = "gtm.load",
                f))
            }
        });
        c.subscribers = (c.subscribers || 0) + 1;
        var d = b.push;
        b.push = function() {
            var f;
            if (0 < ti.SANDBOXED_JS_SEMAPHORE) {
                f = [];
                for (var g = 0; g < arguments.length; g++)
                    f[g] = new zy(arguments[g])
            } else
                f = [].slice.call(arguments, 0);
            var h = f.map(function(q) {
                return a(q)
            });
            Cy.push.apply(Cy, h);
            var m = d.apply(b, f)
              , n = Math.max(100, Number("1000") || 300);
            if (this.length > n)
                for (L(4),
                c.pruned = !0; this.length > n; )
                    this.shift();
            var p = "boolean" !== typeof m || m;
            return Ny() && p
        }
        ;
        var e = b.slice(0).map(function(f) {
            return a(f)
        });
        Cy.push.apply(Cy, e);
        if (Qy()) {
            if (R(65)) {}
            C(Py)
        }
    }
      , Qy = function() {
        var a = !0;
        a = !1;
        return a
    };
    function Sy(a) {
        if (null == a || 0 === a.length)
            return !1;
        var b = Number(a)
          , c = Ua();
        return b < c + 3E5 && b > c - 9E5
    }
    function Ty(a) {
        return a && 0 === a.indexOf("pending:") ? Sy(a.substr(8)) : !1
    }
    ;
    var nz = function() {};
    var oz = function() {};
    oz.prototype.toString = function() {
        return "undefined"
    }
    ;
    var pz = new oz;
    var Xz = l.clearTimeout
      , Yz = l.setTimeout
      , Zz = function(a, b, c, d) {
        if (Kn()) {
            b && C(b)
        } else
            return Ic(a, b, c, d)
    }
      , $z = function() {
        return new Date
    }
      , aA = function() {
        return l.location.href
    }
      , bA = function(a) {
        return sj(wj(a), "fragment")
    }
      , cA = function(a) {
        return tj(wj(a))
    }
      , dA = function(a, b) {
        return Ti(a, b || 2)
    }
      , eA = function(a, b, c) {
        return b ? Iy(a, b, c) : Hy(a)
    }
      , fA = function(a, b) {
        l[a] = b
    }
      , V = function(a, b, c) {
        b && (void 0 === l[a] || c && !l[a]) && (l[a] = b);
        return l[a]
    }
      , gA = function(a, b, c) {
        return Qn(a, b, void 0 === c ? !0 : !!c)
    }
      , hA = function(a, b, c) {
        return 0 === Zn(a, b, c)
    }
      , iA = function(a, b) {
        if (Kn()) {
            b && C(b)
        } else
            Kc(a, b)
    }
      , jA = function(a) {
        return !!Az(a, "init", !1)
    }
      , kA = function(a) {
        yz(a, "init", !0)
    };

    function HA(a, b) {
        function c(g) {
            var h = wj(g)
              , m = sj(h, "protocol")
              , n = sj(h, "host", !0)
              , p = sj(h, "port")
              , q = sj(h, "path").toLowerCase().replace(/\/$/, "");
            if (void 0 === m || "http" === m && "80" === p || "https" === m && "443" === p)
                m = "web",
                p = "default";
            return [m, n, p, q]
        }
        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
            if (d[f] !== e[f])
                return !1;
        return !0
    }
    function IA(a) {
        return JA(a) ? 1 : 0
    }
    function JA(a) {
        var b = a.arg0
          , c = a.arg1;
        if (a.any_of && Array.isArray(c)) {
            for (var d = 0; d < c.length; d++) {
                var e = ob(a, {});
                ob({
                    arg1: c[d],
                    any_of: void 0
                }, e);
                if (IA(e))
                    return !0
            }
            return !1
        }
        switch (a["function"]) {
        case "_cn":
            return xg(b, c);
        case "_css":
            var f;
            a: {
                if (b)
                    try {
                        for (var g = 0; g < tg.length; g++) {
                            var h = tg[g];
                            if (b[h]) {
                                f = b[h](c);
                                break a
                            }
                        }
                    } catch (m) {}
                f = !1
            }
            return f;
        case "_ew":
            return ug(b, c);
        case "_eq":
            return yg(b, c);
        case "_ge":
            return zg(b, c);
        case "_gt":
            return Bg(b, c);
        case "_lc":
            return 0 <= String(b).split(",").indexOf(String(c));
        case "_le":
            return Ag(b, c);
        case "_lt":
            return Cg(b, c);
        case "_re":
            return wg(b, c, a.ignore_case);
        case "_sw":
            return Dg(b, c);
        case "_um":
            return HA(b, c)
        }
        return !1
    }
    ;function KA() {
        var a = [["cv", "2"], ["rv", si.eh], ["tc", qf.filter(function(b) {
            return b
        }).length]];
        si.ue && a.push(["x", si.ue]);
        Mi.h && a.push(["tag_exp", Mi.h]);
        return a
    }
    ;function LA() {
        var a = gj();
        return a.length ? [["exp_geo", a]] : []
    }
    var MA;
    function NA() {
        try {
            null != MA || (MA = (new Intl.DateTimeFormat).resolvedOptions().timeZone)
        } catch (b) {}
        var a;
        return (null == (a = MA) ? 0 : a.length) ? [["exp_tz", MA]] : []
    }
    ;function OA(a) {
        if (a.scriptSource) {
            var b;
            try {
                b = Yc().getEntriesByType("resource")
            } catch (g) {}
            if (b) {
                for (var c = {}, d = 0; d < b.length; ++d) {
                    var e = b[d]
                      , f = e.initiatorType;
                    if ("script" === f && e.name === a.scriptSource)
                        return {
                            gn: d,
                            hn: c
                        };
                    c[f] = 1 + (c[f] || 0)
                }
                L(146)
            } else
                L(145)
        }
    }
    function PA() {
        if (uk && R(77)) {
            var a = bk();
            if (!a)
                L(144);
            else if (a.canonicalContainerId) {
                var b = OA(a);
                if (b) {
                    var c = !1;
                    pk(function(d) {
                        if (c)
                            return [];
                        d.zb && (c = !0);
                        d.eg();
                        return [["rtg", a.canonicalContainerId], ["rlo", b.gn], ["slo", b.hn.script || 0]]
                    })
                }
            }
        }
    }
    ;var QA = function() {
        return !1
    }
      , RA = function() {
        var a = {};
        return function(b, c, d) {}
    };
    function SA() {
        var a = TA;
        return function(b, c, d) {
            var e = d && d.event;
            UA(c);
            var f = 0 === b.indexOf("__cvt_") ? void 0 : 1
              , g = new tb;
            Na(c, function(r, t) {
                var u = nd(t, void 0, f);
                void 0 === u && void 0 !== t && L(44);
                g.set(r, u)
            });
            a.h.h.F = Kf();
            var h = {
                Fj: ag(b),
                eventId: void 0 !== e ? e.id : void 0,
                priorityId: void 0 !== e ? e.priorityId : void 0,
                Mf: void 0 !== e ? function(r) {
                    return e.fc.Mf(r)
                }
                : void 0,
                hc: function() {
                    return b
                },
                log: function() {},
                Ll: {
                    index: d && d.index,
                    type: d && d.type,
                    name: d && d.name
                },
                fn: !!uv(b, 3),
                originalEventData: null == e ? void 0 : e.originalEventData
            };
            e && e.cachedModelValues && (h.cachedModelValues = {
                gtm: e.cachedModelValues.gtm,
                ecommerce: e.cachedModelValues.ecommerce
            });
            if (QA()) {
                var m = RA()
                  , n = void 0
                  , p = void 0;
                h.hb = {
                    ei: [],
                    xe: {},
                    xb: function(r, t, u) {
                        1 === t && (n = r);
                        7 === t && (p = u);
                        m(r, t, u)
                    },
                    Kh: rh()
                };
                h.log = function(r, t) {
                    if (n) {
                        var u = Array.prototype.slice.call(arguments, 1);
                        m(n, 4, {
                            level: r,
                            source: p,
                            message: u
                        })
                    }
                }
            }
            var q = Ke(a, h, [b, g]);
            a.h.h.F = void 0;
            q instanceof wa && "return" === q.h && (q = q.s);
            return od(q, void 0, f)
        }
    }
    function UA(a) {
        var b = a.gtmOnSuccess
          , c = a.gtmOnFailure;
        Ga(b) && (a.gtmOnSuccess = function() {
            C(b)
        }
        );
        Ga(c) && (a.gtmOnFailure = function() {
            C(c)
        }
        )
    }
    ;function VA(a, b) {
        var c = this;
    }
    VA.P = "addConsentListener";
    var WA;
    var XA = function(a) {
        for (var b = 0; b < a.length; ++b)
            if (WA)
                try {
                    a[b]()
                } catch (c) {
                    L(77)
                }
            else
                a[b]()
    };
    function YA(a, b, c) {
        var d = this, e;
        return e
    }
    YA.D = "internal.addDataLayerEventListener";
    function ZA(a, b, c) {}
    ZA.P = "addDocumentEventListener";
    function $A(a, b, c, d) {}
    $A.P = "addElementEventListener";
    function aB(a) {}
    aB.P = "addEventCallback";
    function eB(a) {}
    eB.D = "internal.addFormAbandonmentListener";
    function fB(a, b, c, d) {}
    fB.D = "internal.addFormData";
    var gB = {}
      , hB = []
      , iB = {}
      , jB = 0
      , kB = 0;
    function rB(a, b) {}
    rB.D = "internal.addFormInteractionListener";
    function yB(a, b) {}
    yB.D = "internal.addFormSubmitListener";
    var zB = function(a) {
        return null != a && void 0 !== a.length && Ga(a.push)
    }
      , CB = function(a) {
        var b = AB.exec(a[0]);
        if (!b)
            return null;
        var c = b[2];
        if (void 0 !== c && c.match(/^(gtm\d+|gtag_.+)$/))
            return null;
        var d, e;
        k(a[1]) ? (d = a[1],
        e = [].slice.call(a, 2)) : (d = a[1] && a[1].hitType,
        e = [].slice.call(a, 1));
        if (!d)
            return null;
        var f;
        var g = BB[d]
          , h = e;
        if (1 == h.length && null != h[0] && "object" === typeof h[0])
            f = h[0];
        else {
            for (var m = {}, n = Math.min(g ? g.length + 1 : 1, h.length), p = 0; p < n; p++)
                if ("object" === typeof h[p]) {
                    for (var q in h[p])
                        h[p].hasOwnProperty(q) && (m[q] = h[p][q]);
                    break
                } else
                    g && p < g.length && (m[g[p]] = h[p]);
            f = m
        }
        var r = f;
        r.hitType = d;
        return {
            Le: d,
            Fe: r
        }
    }
      , AB = /^((.+)\.)?send$/
      , BB = {
        pageview: ["page"],
        event: ["eventCategory", "eventAction", "eventLabel", "eventValue"],
        social: ["socialNetwork", "socialAction", "socialTarget"],
        timing: ["timingCategory", "timingVar", "timingValue", "timingLabel"]
    };
    function DB(a) {
        J(I(this), ["dustCallback:!Fn"], arguments);
        K(this, "access_globals", "read", "GoogleAnalyticsObject");
        K(this, "access_globals", "readwrite", "ga.q");
        K(this, "access_globals", "execute", "ga.q");
        var b = 0
          , c = od(a);
        C(function() {
            var d = cw();
            if (d && zB(d.q)) {
                for (var e = d.q, f = 0; f < e.length; f++) {
                    var g = CB(e[f]);
                    b++;
                    null !== g && c(g.Le, g.Fe)
                }
                var h = e.push;
                e.push = function() {
                    var m = cw()
                      , n = [].slice.call(arguments, 0);
                    h.apply(e, n);
                    if (!(b >= m.q.length + (m.qd || 0))) {
                        var p = CB.apply(this, n);
                        b++;
                        null !== p && c(p.Le, p.Fe)
                    }
                }
            }
        });
    }
    DB.D = "internal.addGaSendListener";
    function EB(a) {
        if (!a)
            return {};
        var b = a.Ll;
        return Tv(b.type, b.index, b.name)
    }
    function FB(a) {
        return a ? {
            originatingEntity: EB(a)
        } : {}
    }
    ;var GB = function(a, b) {
        this.tagId = a;
        this.ze = b
    };
    function HB(a, b) {
        var c = this;
    }
    HB.D = "internal.loadGoogleTag";
    function IB(a) {
        return new fd("",function(b) {
            b = H(this, b);
            if (b instanceof fd)
                return new fd("",function() {
                    var c = ta.apply(0, arguments)
                      , d = this
                      , e = ob(this.h.h);
                    e.eventId = a.eventId;
                    e.priorityId = a.priorityId;
                    e.originalEventData = a.originalEventData;
                    var f = c.map(function(h) {
                        return H(d, h)
                    })
                      , g = Ba(this.h);
                    g.h = e;
                    return b.eb.apply(b, [g].concat(ja(f)))
                }
                )
        }
        )
    }
    ;function JB(a, b, c) {
        var d = this;
    }
    JB.D = "internal.addGoogleTagRestriction";
    var KB = {}
      , LB = [];
    var SB = function(a, b) {};
    SB.D = "internal.addHistoryChangeListener";
    function TB(a, b, c) {}
    TB.P = "addWindowEventListener";
    function UB(a, b) {
        return !0
    }
    UB.P = "aliasInWindow";
    function VB(a, b, c) {}
    VB.D = "internal.appendRemoteConfigParameter";
    function WB() {
        var a = 2;
        return a
    }
    ;function XB(a, b) {
        var c;
        return c
    }
    XB.P = "callInWindow";
    function YB(a) {}
    YB.P = "callLater";
    function ZB(a) {}
    ZB.D = "callOnDomReady";
    function $B(a) {}
    $B.D = "callOnWindowLoad";
    function aC(a, b) {
        var c;
        return c
    }
    aC.D = "internal.computeGtmParameter";
    function bC(a, b) {
        var c;
        var d = nd(c, this.h, WB());
        void 0 === d && void 0 !== c && L(45);
        return d
    }
    bC.P = "copyFromDataLayer";
    function cC(a) {
        var b = void 0;
        return b
    }
    cC.D = "internal.copyFromDataLayerCache";
    function dC(a) {
        var b;
        return b
    }
    dC.P = "copyFromWindow";
    function eC(a) {
        var b = void 0;
        return nd(b, this.h, WB())
    }
    eC.D = "internal.copyKeyFromWindow";
    function fC(a, b) {
        var c;
        J(I(this), ["preHit:!PixieMap", "dustOptions:?PixieMap"], arguments);
        var d = od(b) || {}
          , e = od(a, this.h, 1).Nj()
          , f = e.o;
        d.omitEventContext && (f = gm(new Wl(e.o.eventId,e.o.priorityId)));
        var g = new hq(e.target,e.eventName,f);
        d.omitHitData || ob(e.h, g.h);
        d.omitMetadata ? g.metadata = {} : ob(e.metadata, g.metadata);
        g.isAborted = e.isAborted;
        c = nd(fr(g), this.h, 1);
        return c
    }
    fC.D = "internal.copyPreHit";
    function gC(a, b) {
        var c = null
          , d = WB();
        return nd(c, this.h, d)
    }
    gC.P = "createArgumentsQueue";
    function hC(a) {
        var b;
        return nd(b, this.h, 1)
    }
    hC.D = "internal.createGaCommandQueue";
    function iC(a) {
        var b;
        return nd(b, this.h, WB())
    }
    iC.P = "createQueue";
    function jC(a, b) {
        var c = null;
        J(I(this), ["pattern:!string", "flags:?string"], arguments);
        try {
            var d = (b || "").split("").filter(function(e) {
                return 0 <= "ig".indexOf(e)
            }).join("");
            c = new kd(new RegExp(a,d))
        } catch (e) {}
        return c
    }
    jC.D = "internal.createRegex";
    function kC(a) {}
    kC.D = "internal.declareConsentState";
    function lC(a) {
        var b = "";
        return b
    }
    lC.D = "internal.decodeUrlHtmlEntities";
    function mC(a, b, c) {
        var d;
        return d
    }
    mC.D = "internal.decorateUrlWithGaCookies";
    function nC(a) {
        var b;
        K(this, "detect_user_provided_data", "auto");
        var c = od(a) || {}
          , d = gs({
            vd: !!c.includeSelector,
            wd: !!c.includeVisibility,
            Ee: c.excludeElementSelectors,
            wb: c.fieldFilters,
            bi: !!c.selectMultipleElements
        });
        b = new tb;
        var e = new sb;
        b.set("elements", e);
        for (var f = d.elements, g = 0; g < f.length; g++)
            e.push(oC(f[g]));
        void 0 !== d.Th && b.set("preferredEmailElement", oC(d.Th));
        b.set("status", d.status);
        return b
    }
    var oC = function(a) {
        var b = new tb;
        b.set("userData", a.U);
        b.set("tagName", a.tagName);
        void 0 !== a.querySelector && b.set("querySelector", a.querySelector);
        void 0 !== a.isVisible && b.set("isVisible", a.isVisible);
        if (R(23)) {} else
            switch (a.type) {
            case "1":
                b.set("type", "email")
            }
        return b
    };
    nC.D = "internal.detectUserProvidedData";
    function rC(a, b) {
        return b
    }
    rC.D = "internal.enableAutoEventOnClick";
    function wC(a, b) {
        return b
    }
    wC.D = "internal.enableAutoEventOnElementVisibility";
    function xC() {}
    xC.D = "internal.enableAutoEventOnError";
    var yC = {}
      , zC = []
      , AC = {}
      , BC = 0
      , CC = 0;
    function IC(a, b) {
        var c = this;
        return b
    }
    IC.D = "internal.enableAutoEventOnFormInteraction";
    function NC(a, b) {
        var c = this;
        return b
    }
    NC.D = "internal.enableAutoEventOnFormSubmit";
    function SC() {
        var a = this;
    }
    SC.D = "internal.enableAutoEventOnGaSend";
    var TC = {}
      , UC = [];
    function aD(a, b) {
        var c = this;
        return b
    }
    aD.D = "internal.enableAutoEventOnHistoryChange";
    var bD = ["http://", "https://", "javascript:", "file://"];
    function fD(a, b) {
        var c = this;
        return b
    }
    fD.D = "internal.enableAutoEventOnLinkClick";
    var gD, hD;
    function sD(a, b) {
        var c = this;
        return b
    }
    sD.D = "internal.enableAutoEventOnScroll";
    function tD(a) {
        return function() {
            if (a.Fc && a.Ic >= a.Fc)
                a.Dc && l.clearInterval(a.Dc);
            else {
                a.Ic++;
                var b = Ua();
                Hy({
                    event: a.eventName,
                    "gtm.timerId": a.Dc,
                    "gtm.timerEventNumber": a.Ic,
                    "gtm.timerInterval": a.interval,
                    "gtm.timerLimit": a.Fc,
                    "gtm.timerStartTime": a.cf,
                    "gtm.timerCurrentTime": b,
                    "gtm.timerElapsedTime": b - a.cf,
                    "gtm.triggers": a.gi
                })
            }
        }
    }
    function uD(a, b) {
        return b
    }
    uD.D = "internal.enableAutoEventOnTimer";
    var wc = da(["data-gtm-yt-inspected-"]), vD = ["www.youtube.com", "www.youtube-nocookie.com"], wD, xD = !1;
    function HD(a, b) {
        var c = this;
        return b
    }
    HD.D = "internal.enableAutoEventOnYouTubeActivity";
    var ID;
    function JD(a) {
        var b = !1;
        return b
    }
    JD.D = "internal.evaluateMatchingRules";
    var pE = function() {
        var a = !0;
        jn(7) && jn(9) && jn(10) || (a = !1);
        return a
    };
    function kF(a, b, c, d) {}
    kF.D = "internal.executeEventProcessor";
    function lF(a) {
        var b = void 0;
        return nd(b, this.h, 1)
    }
    lF.D = "internal.executeJavascriptString";
    var mF = function(a) {
        var b;
        return b
    };
    var nF = null;
    function oF() {
        var a = new tb;
        K(this, "read_container_data"),
        R(41) && nF ? a = nF : (a.set("containerId", 'G-J7YR94K8NN'),
        a.set("version", '2'),
        a.set("environmentName", ''),
        a.set("debugMode", dg),
        a.set("previewMode", fg),
        a.set("environmentMode", eg),
        a.set("firstPartyServing", Gj()),
        a.set("containerUrl", Cc),
        a.Jb(),
        R(41) && (nF = a));
        return a
    }
    oF.P = "getContainerVersion";
    function pF(a, b) {
        b = void 0 === b ? !0 : b;
        var c;
        return c
    }
    pF.P = "getCookieValues";
    function qF() {
        return gj()
    }
    qF.D = "internal.getCountryCode";
    function rF() {
        var a = [];
        a = Vj();
        return nd(a)
    }
    rF.D = "internal.getDestinationIds";
    function sF(a, b) {
        var c = null;
        return c
    }
    sF.D = "internal.getElementAttribute";
    function tF(a) {
        var b = null;
        return b
    }
    tF.D = "internal.getElementById";
    function uF(a) {
        var b = "";
        return b
    }
    uF.D = "internal.getElementInnerText";
    function vF(a, b) {
        var c = null;
        return c
    }
    vF.D = "internal.getElementProperty";
    function wF(a) {
        var b;
        return b
    }
    wF.D = "internal.getElementValue";
    function xF(a) {
        var b = 0;
        return b
    }
    xF.D = "internal.getElementVisibilityRatio";
    function yF(a) {
        var b = null;
        return b
    }
    yF.D = "internal.getElementsByCssSelector";
    function zF(a) {
        var b = void 0;
        return b
    }
    zF.D = "internal.getEventData";
    var AF = {};
    AF.enableAWFledge = R(24);
    AF.enableAdsConversionValidation = R(14);
    AF.enableAutoPiiOnPhoneAndAddress = R(23);
    AF.enableCachedEcommerceData = R(28);
    AF.enableCcdPreAutoPiiDetection = R(29);
    AF.enableCloudRecommentationsErrorLogging = R(33);
    AF.enableCloudRecommentationsSchemaIngestion = R(34);
    AF.enableCloudRetailInjectPurchaseMetadata = R(36);
    AF.enableCloudRetailLogging = R(35);
    AF.enableCloudRetailPageCategories = R(37);
    AF.enableConsentDisclosureActivity = R(39);
    AF.enableDCFledge = R(44);
    AF.enableDecodeUri = R(54);
    AF.enableDeferAllEnhancedMeasurement = R(45);
    AF.enableEuidAutoMode = R(49);
    AF.enableFormSkipValidation = R(52);
    AF.enableUrlDecodeEventUsage = R(87);
    AF.enableZoneConfigInChildContainers = R(89);
    AF.loadContainerForGtmEventTags = R(92);
    AF.useEnableAutoEventOnFormApis = R(101);
    AF.autoPiiEligible = lj();
    function BF() {
        return nd(AF)
    }
    BF.D = "internal.getFlags";
    function CF() {
        return new kd(pz)
    }
    CF.D = "internal.getHtmlId";
    function DF(a, b) {
        var c;
        J(I(this), ["targetId:!string", "name:!string"], arguments);
        var d = gq(a) || {};
        c = nd(d[b], this.h);
        return c
    }
    DF.D = "internal.getProductSettingsParameter";
    function EF(a, b) {
        var c;
        return c
    }
    EF.P = "getQueryParameters";
    function FF(a, b) {
        var c;
        return c
    }
    FF.P = "getReferrerQueryParameters";
    function GF(a) {
        var b = "";
        return b
    }
    GF.P = "getReferrerUrl";
    function HF() {
        return hj()
    }
    HF.D = "internal.getRegionCode";
    function IF(a, b) {
        var c;
        return c
    }
    IF.D = "internal.getRemoteConfigParameter";
    function JF(a) {
        var b = "";
        return b
    }
    JF.P = "getUrl";
    function KF() {
        K(this, "get_user_agent");
        return Bc.userAgent
    }
    KF.P = "getUserAgent";
    var LF = !1
      , MF = function(a) {
        var b = a.eventName === M.g.sc && gl() && js(a)
          , c = a.metadata.is_sgtm_service_worker
          , d = a.metadata.batch_on_navigation
          , e = a.metadata.is_conversion
          , f = a.metadata.is_session_start
          , g = a.metadata.create_dc_join
          , h = a.metadata.create_google_join
          , m = a.metadata.euid_mode_enabled && !!ks(a);
        return !(!(R(55) && R(56) && "fetch"in l || Bc.sendBeacon) || e || m || f || g || h || b || c || !d && LF)
    };
    var NF = function(a) {
        var b = 0
          , c = 0;
        return {
            start: function() {
                b = Ua()
            },
            stop: function() {
                c = this.get()
            },
            get: function() {
                var d = 0;
                a.Eh() && (d = Ua() - b);
                return d + c
            }
        }
    }
      , OF = function() {
        this.h = void 0;
        this.s = 0;
        this.isActive = this.isVisible = this.C = !1;
        this.M = this.F = void 0
    };
    aa = OF.prototype;
    aa.Sk = function(a) {
        var b = this;
        if (!this.h) {
            this.C = z.hasFocus();
            this.isVisible = !z.hidden;
            this.isActive = !0;
            var c = function(d, e, f) {
                Mc(d, e, function(g) {
                    b.h.stop();
                    f(g);
                    b.Eh() && b.h.start()
                })
            };
            c(l, "focus", function() {
                b.C = !0
            });
            c(l, "blur", function() {
                b.C = !1
            });
            c(l, "pageshow", function(d) {
                b.isActive = !0;
                d.persisted && L(56);
                b.M && b.M()
            });
            c(l, "pagehide", function() {
                b.isActive = !1;
                b.F && b.F()
            });
            c(z, "visibilitychange", function() {
                b.isVisible = !z.hidden
            });
            js(a) && -1 === (Bc.userAgent || "").indexOf("Firefox") && -1 === (Bc.userAgent || "").indexOf("FxiOS") && c(l, "beforeunload", function() {
                LF = !0
            });
            this.Yh();
            this.s = 0
        }
    }
    ;
    aa.Yh = function() {
        this.s += this.Tf();
        this.h = NF(this);
        this.Eh() && this.h.start()
    }
    ;
    aa.un = function(a) {
        var b = this.Tf();
        0 < b && (a.h[M.g.Md] = b)
    }
    ;
    aa.gm = function(a) {
        a.h[M.g.Md] = void 0;
        this.Yh();
        this.s = 0
    }
    ;
    aa.Eh = function() {
        return this.C && this.isVisible && this.isActive
    }
    ;
    aa.Vl = function() {
        return this.s + this.Tf()
    }
    ;
    aa.Tf = function() {
        return this.h && this.h.get() || 0
    }
    ;
    aa.bn = function(a) {
        this.F = a
    }
    ;
    aa.bk = function(a) {
        this.M = a
    }
    ;
    var PF = function(a) {
        Bb("GA4_EVENT", a)
    }
      , QF = function() {
        delete Ab.GA4_EVENT
    };
    function RF() {
        return l.gaGlobal = l.gaGlobal || {}
    }
    var SF = function() {
        var a = RF();
        a.hid = a.hid || Ka();
        return a.hid
    }
      , TF = function(a, b) {
        var c = RF();
        if (void 0 == c.vid || b && !c.from_cookie)
            c.vid = a,
            c.from_cookie = b
    };
    var UF = function(a, b, c) {
        var d = a.metadata.client_id_source;
        if (void 0 === d || c <= d)
            a.h[M.g.nb] = b,
            a.metadata.client_id_source = c
    }
      , XF = function(a, b) {
        var c;
        var d = b.metadata.cookie_options
          , e = d.prefix + "_ga"
          , f = jo(d, void 0, void 0, M.g.R);
        if (!1 === S(b.o, M.g.vc) && VF(b) === a)
            c = !0;
        else {
            var g = io(a, WF[0], d.domain, d.path);
            c = 1 !== Zn(e, g, f)
        }
        return c
    }
      , VF = function(a) {
        var b = a.metadata.cookie_options
          , c = b.prefix + "_ga"
          , d = ho(c, b.domain, b.path, WF, M.g.R);
        if (!d) {
            var e = String(S(a.o, M.g.uc, ""));
            e && e != c && (d = ho(e, b.domain, b.path, WF, M.g.R))
        }
        return d
    }
      , WF = ["GA1"]
      , YF = function(a, b) {
        var c = a.h[M.g.nb];
        if (S(a.o, M.g.Eb) && S(a.o, M.g.Tb) || b && c === b)
            return c;
        if (c) {
            c = "" + c;
            if (!XF(c, a))
                return L(31),
                a.isAborted = !0,
                "";
            TF(c, U(M.g.R));
            return c
        }
        L(32);
        a.isAborted = !0;
        return ""
    };
    var aG = function(a, b, c) {
        if (!b)
            return a;
        if (!a)
            return b;
        var d = ZF(a);
        if (!d)
            return b;
        var e, f = Pa(null != (e = S(c.o, M.g.ld)) ? e : 30);
        if (!(Math.floor(c.metadata.event_start_timestamp_ms / 1E3) > d.Te + 60 * f))
            return a;
        var g = ZF(b);
        if (!g)
            return a;
        g.Nc = d.Nc + 1;
        var h;
        return null != (h = $F(g.sessionId, g.Nc, g.yd, g.Te, g.Ih, g.Gc, g.De)) ? h : b
    }
      , dG = function(a, b) {
        var c = b.metadata.cookie_options
          , d = bG(b, c)
          , e = io(a, cG[0], c.domain, c.path)
          , f = {
            Nb: M.g.R,
            domain: c.domain,
            path: c.path,
            expires: c.Hc ? new Date(Ua() + 1E3 * c.Hc) : void 0,
            flags: c.flags
        };
        Zn(d, void 0, f);
        return 1 !== Zn(d, e, f)
    }
      , eG = function(a) {
        var b = a.metadata.cookie_options
          , c = bG(a, b)
          , d = ho(c, b.domain, b.path, cG, M.g.R);
        if (!d)
            return d;
        var e = Qn(c, void 0, void 0, M.g.R);
        if (d && 1 < e.length) {
            L(114);
            for (var f = void 0, g = void 0, h = 0; h < e.length; h++) {
                var m = e[h].split(".");
                if (!(7 > m.length)) {
                    var n = Number(m[5]);
                    n && (!g || n > g) && (g = n,
                    f = e[h])
                }
            }
            f && f.substring(f.length - d.length, f.length) !== d && (L(115),
            d = f.split(".").slice(2).join("."))
        }
        return d
    }
      , $F = function(a, b, c, d, e, f, g) {
        if (a && b) {
            var h = [a, b, Pa(c), d, e];
            h.push(f ? "1" : "0");
            h.push(g || "0");
            return h.join(".")
        }
    }
      , cG = ["GS1"]
      , bG = function(a, b) {
        return b.prefix + "_ga_" + a.target.O[0]
    }
      , ZF = function(a) {
        if (a) {
            var b = a.split(".");
            if (!(5 > b.length || 7 < b.length)) {
                7 > b.length && L(67);
                var c = Number(b[1])
                  , d = Number(b[3])
                  , e = Number(b[4] || 0);
                c || L(118);
                d || L(119);
                isNaN(e) && L(120);
                if (c && d && !isNaN(e))
                    return {
                        sessionId: b[0],
                        Nc: c,
                        yd: !!Number(b[2]),
                        Te: d,
                        Ih: e,
                        Gc: "1" === b[5],
                        De: "0" !== b[6] ? b[6] : void 0
                    }
            }
        }
    }
      , fG = function(a) {
        return $F(a.h[M.g.ub], a.h[M.g.be], a.h[M.g.ae], Math.floor(a.metadata.event_start_timestamp_ms / 1E3), a.metadata.join_timer_sec || 0, !!a.metadata[M.g.vf], a.h[M.g.Nd])
    };
    var gG = function(a) {
        var b = S(a.o, M.g.Aa)
          , c = a.o.s[M.g.Aa];
        if (c === b)
            return c;
        var d = ob(b);
        c && c[M.g.X] && (d[M.g.X] = (d[M.g.X] || []).concat(c[M.g.X]));
        return d
    }
      , hG = function(a, b) {
        var c = zo(!0);
        return "1" !== c._up ? {} : {
            clientId: c[a],
            fg: c[b]
        }
    }
      , iG = function(a, b, c) {
        var d = zo(!0)
          , e = d[b];
        e && (UF(a, e, 2),
        XF(e, a));
        var f = d[c];
        f && dG(f, a);
        return {
            clientId: e,
            fg: f
        }
    }
      , jG = !1
      , kG = function(a) {
        var b = gG(a) || {}
          , c = a.metadata.cookie_options
          , d = c.prefix + "_ga"
          , e = bG(a, c)
          , f = {};
        Jo(b[M.g.Ub], !!b[M.g.X]) && (f = iG(a, d, e),
        f.clientId && f.fg && (jG = !0));
        b[M.g.X] && Go(function() {
            var g = {}
              , h = VF(a);
            h && (g[d] = h);
            var m = eG(a);
            m && (g[e] = m);
            var n = Qn("FPLC", void 0, void 0, M.g.R);
            n.length && (g._fplc = n[0]);
            return g
        }, b[M.g.X], b[M.g.Fb], !!b[M.g.tb]);
        return f
    }
      , mG = function(a) {
        if (!S(a.o, M.g.Za))
            return {};
        var b = a.metadata.cookie_options
          , c = b.prefix + "_ga"
          , d = bG(a, b);
        Ho(function() {
            var e;
            if (U("analytics_storage"))
                e = {};
            else {
                var f = {};
                e = (f._up = "1",
                f[c] = a.h[M.g.nb],
                f[d] = fG(a),
                f)
            }
            return e
        }, 1);
        return !U("analytics_storage") && lG() ? hG(c, d) : {}
    }
      , lG = function() {
        var a = rj(l.location, "host")
          , b = rj(wj(z.referrer), "host");
        return a && b ? a === b || 0 <= a.indexOf("." + b) || 0 <= b.indexOf("." + a) ? !0 : !1 : !1
    };
    var nG = function() {
        var a = Ua()
          , b = a + 864E5
          , c = 20
          , d = 5E3;
        return function(e) {
            var f = Ua();
            f >= b && (b = f + 864E5,
            d = 5E3);
            c = Math.min(c + (f - a) / 1E3 * 5, 20);
            a = f;
            var g = !1;
            1 > d || 1 > c || (g = !0,
            d--,
            c--);
            e && (e.Fl = d,
            e.Al = c);
            return g
        }
    };
    var oG = function(a, b) {
        qn() && (a.gcs = rn(),
        b.metadata.is_consent_update && (a.gcu = "1"));
        a.gcd = vn(b.o);
        pn(b.o) ? a.npa = "0" : a.npa = "1"
    }
      , rG = function(a) {
        if (a.metadata.is_merchant_center)
            return Jj("https://www.merchant-center-analytics.goog") + "/mc/collect";
        var b = Fj(Ij(a.o), "/g/collect");
        if (b)
            return b;
        if (Mi.s)
            return "" + Ni() + "/g/collect";
        var c = is(a)
          , d = S(a.o, M.g.lb);
        return c && !ij() && !1 !== d && pE() && U(M.g.J) && U(M.g.R) ? pG() : qG()
    }
      , sG = !1;
    sG = !0;
    var tG = {};
    tG[M.g.nb] = "cid";
    tG[M.g.Qb] = "are";
    tG[M.g.wf] = "_fid";
    tG[M.g.Gg] = "_geo";
    tG[M.g.sb] = "gdid";
    tG[M.g.ed] = "ir";
    tG[M.g.Pa] = "ul";
    tG[M.g.Qg] = "pae";
    tG[M.g.Zd] = "_rdi";
    tG[M.g.Hb] = "sr";
    tG[M.g.cj] = "tid";
    tG[M.g.Df] = "tt";
    tG[M.g.me] = "ec_mode";
    tG[M.g.mj] = "gtm_up";
    tG[M.g.ce] = "uaa";
    tG[M.g.de] = "uab";
    tG[M.g.ee] = "uafvl";
    tG[M.g.fe] = "uamb";
    tG[M.g.he] = "uam";
    tG[M.g.ie] = "uap";
    tG[M.g.je] = "uapv";
    tG[M.g.ke] = "uaw";
    tG[M.g.dj] = "ur";
    tG[M.g.fd] = "lps";
    tG[M.g.qf] = "pscdl";
    var uG = {};
    uG[M.g.Qc] = "cc";
    uG[M.g.Rc] = "ci";
    uG[M.g.Sc] = "cm";
    uG[M.g.Tc] = "cn";
    uG[M.g.Vc] = "cs";
    uG[M.g.Wc] = "ck";
    uG[M.g.za] = "cu";
    uG[M.g.ra] = "dl";
    uG[M.g.Fa] = "dr";
    uG[M.g.Gb] = "dt";
    uG[M.g.ae] = "seg";
    uG[M.g.ub] = "sid";
    uG[M.g.be] = "sct";
    uG[M.g.Ra] = "uid";
    R(91) && (uG[M.g.hd] = "dp");
    var vG = {};
    vG[M.g.Md] = "_et";
    vG[M.g.pb] = "edid";
    var wG = {};
    wG[M.g.Qc] = "cc";
    wG[M.g.Rc] = "ci";
    wG[M.g.Sc] = "cm";
    wG[M.g.Tc] = "cn";
    wG[M.g.Vc] = "cs";
    wG[M.g.Wc] = "ck";
    var xG = {}
      , yG = Object.freeze((xG[M.g.Ga] = 1,
    xG))
      , qG = function() {
        var a = "www";
        sG && kj() && (a = kj());
        return "https://" + a + ".google-analytics.com/g/collect"
    }
      , pG = function() {
        var a;
        sG && "" !== kj() && (a = kj());
        return "https://" + (a ? a + "." : "") + "analytics.google.com/g/collect"
    }
      , zG = function(a, b, c) {
        var d = {}
          , e = {}
          , f = {};
        d.v = "2";
        d.tid = a.target.ba;
        iq(a, "google_ono", !1) && !ij() && (d._ono = 1);
        d.gtm = Mn(a.metadata.source_canonical_id);
        d._p = R(102) ? Gi : SF();
        c && (d.em = c);
        a.metadata.create_google_join && (d._gaz = 1);
        oG(d, a);
        In() && (d.dma_cps = wn());
        d.dma = xn();
        kn() && (d.tcfd = Jn());
        Mi.h && (d.tag_exp = Mi.h);
        var g = a.h[M.g.sb];
        g && (d.gdid = g);
        e.en = String(a.eventName);
        a.metadata.is_first_visit && (e._fv = a.metadata.is_first_visit_conversion ? 2 : 1);
        a.metadata.is_new_to_site && (e._nsi = 1);
        a.metadata.is_session_start && (e._ss = a.metadata.is_session_start_conversion ? 2 : 1);
        a.metadata.is_conversion && (e._c = 1);
        a.metadata.is_external_event && (e._ee = 1);
        if (a.metadata.is_ecommerce) {
            var h = a.h[M.g.Z] || S(a.o, M.g.Z);
            if (Ia(h))
                for (var m = 0; m < h.length && 200 > m; m++)
                    e["pr" + (m + 1)] = jg(h[m])
        }
        var n = a.h[M.g.pb];
        n && (e.edid = n);
        var p = function(t, u) {
            if ("object" !== typeof u || !yG[t]) {
                var v = "ep." + t
                  , w = "epn." + t;
                t = Ha(u) ? w : v;
                var x = Ha(u) ? v : w;
                e.hasOwnProperty(x) && delete e[x];
                e[t] = String(u)
            }
        }
          , q = R(96) && js(a);
        Na(a.h, function(t, u) {
            if (void 0 !== u && !di.hasOwnProperty(t)) {
                null === u && (u = "");
                var v;
                t !== M.g.Nd ? v = !1 : a.metadata.euid_mode_enabled || q ? (d.ecid = u,
                v = !0) : v = void 0;
                if (!v && t !== M.g.vf) {
                    var w = u;
                    !0 === u && (w = "1");
                    !1 === u && (w = "0");
                    w = String(w);
                    var x;
                    if (tG[t])
                        x = tG[t],
                        d[x] = w;
                    else if (uG[t])
                        x = uG[t],
                        f[x] = w;
                    else if (vG[t])
                        x = vG[t],
                        e[x] = w;
                    else if ("_" === t.charAt(0))
                        d[t] = w;
                    else {
                        var y;
                        wG[t] ? y = !0 : t !== M.g.Uc ? y = !1 : ("object" !== typeof u && p(t, u),
                        y = !0);
                        y || p(t, u)
                    }
                }
            }
        });
        (function(t) {
            js(a) && "object" === typeof t && Na(t || {}, function(u, v) {
                "object" !== typeof v && (d["sst." + u] = String(v))
            })
        }
        )(a.h[M.g.ve]);
        var r = a.h[M.g.ab] || {};
        R(66) && !1 === S(a.o, M.g.lb, void 0, 4) && (d.ngs = "1");
        Na(r, function(t, u) {
            void 0 !== u && ((null === u && (u = ""),
            t !== M.g.Ra || f.uid) ? b[t] !== u && (e[(Ha(u) ? "upn." : "up.") + String(t)] = String(u),
            b[t] = u) : f.uid = String(u))
        });
        return lg.call(this, {
            oa: d,
            Oc: f,
            sh: e
        }, rG(a), js(a)) || this
    };
    ra(zG, lg);
    var AG = function(a) {
        this.s = a;
        this.C = "";
        this.h = this.s
    }
      , BG = function(a, b) {
        a.h = b;
        return a
    }
      , CG = function(a, b) {
        a.F = b;
        return a
    };
    function DG(a) {
        var b = a.search;
        return a.protocol + "//" + a.hostname + a.pathname + (b ? b + "&richsstsse" : "?richsstsse")
    }
    function EG(a, b, c) {
        if (a) {
            var d = a || [];
            if (Array.isArray(d))
                for (var e = nb(b) ? b : {}, f = ha(d), g = f.next(); !g.done; g = f.next())
                    c(g.value, e)
        }
    }
    ;var FG = function(a, b) {
        return a.replace(/\$\{([^\}]+)\}/g, function(c, d) {
            return b[d] || c
        })
    }
      , GG = function(a) {
        var b = {}
          , c = ""
          , d = a.pathname.indexOf("/g/collect");
        0 <= d && (c = a.pathname.substring(0, d));
        b.transport_url = a.protocol + "//" + a.hostname + c;
        return b
    }
      , HG = function(a, b, c, d) {
        var e = CG(BG(new AG(function(h, m) {
            var n = FG(h, c);
            d && (n = n.replace("_is_sw=0", d));
            var p = {};
            m.attribution_reporting && (p.attributionsrc = "");
            Lc(n, void 0, void 0, p)
        }
        ), function(h) {
            var m = FG(h, c);
            Sc(m)
        }), function(h, m) {
            var n = FG(h, c)
              , p = m.dedupe_key;
            p && jt(n, p)
        })
          , f = 0
          , g = new l.XMLHttpRequest;
        g.withCredentials = !0;
        g.onprogress = function(h) {
            if (200 === g.status) {
                var m = g.responseText.substring(f);
                f = h.loaded;
                var n;
                n = e.C + m;
                for (var p = n.indexOf("\n\n"); -1 !== p; ) {
                    var q;
                    a: {
                        var r = ha(n.substring(0, p).split("\n"))
                          , t = r.next().value
                          , u = r.next().value;
                        if (0 === t.indexOf("event: message") && 0 === u.indexOf("data: "))
                            try {
                                q = JSON.parse(u.substring(u.indexOf(":") + 1));
                                break a
                            } catch (E) {}
                        q = void 0
                    }
                    var v = e
                      , w = q;
                    if (w) {
                        EG(w.send_pixel, w.options, v.s);
                        EG(w.send_beacon, void 0, v.h);
                        var x = w.create_iframe
                          , y = w.options
                          , B = v.F;
                        if (x && B) {
                            var A = x || [];
                            if (Array.isArray(A))
                                for (var F = nb(y) ? y : {}, G = ha(A), D = G.next(); !D.done; D = G.next())
                                    B(D.value, F)
                        }
                    }
                    n = n.substring(p + 2);
                    p = n.indexOf("\n\n")
                }
                e.C = n
            }
        }
        ;
        g.open(b ? "POST" : "GET", a);
        R(22) && g.setAttributionReporting && g.setAttributionReporting({
            eventSourceEligible: !1,
            triggerEligible: !0
        });
        g.send(b)
    }
      , IG = function(a, b) {
        var c = wj(a)
          , d = GG(c)
          , e = DG(c);
        R(80) && R(71) ? Ns(e, b, d, function(f) {
            HG(e, b, d, f)
        }) : HG(e, b, d)
    };
    var JG = function(a, b) {
        return a ? [a, b].join("&") : b
    }
      , MG = function(a, b, c, d) {
        var e = R(58) && d;
        if (R(57) || e) {
            var f = b
              , g = Xc();
            void 0 !== g && (f += "&tfd=" + Math.round(g));
            b = f
        }
        var h = a + "?" + b;
        KG && (d = !(0 === h.indexOf(qG()) || 0 === h.indexOf(pG())));
        if (d && !LF)
            IG(h, c);
        else {
            var m;
            var n = b;
            R(55) && "fetch"in l ? R(56) ? m = Vc(a + "?" + JG(n, "_z=fetch"), c) : (LG(a, JG(n, "_z=sendBeacon"), c),
            m = !0) : m = !1;
            m || LG(a, b, c)
        }
    }
      , NG = function(a, b) {
        function c(t) {
            n.push(t + "=" + encodeURIComponent("" + a.oa[t]))
        }
        var d = b.nn
          , e = b.on
          , f = b.Yl
          , g = b.qm
          , h = b.om
          , m = b.Ym;
        if (d || e) {
            var n = [];
            a.oa._ono && c("_ono");
            c("tid");
            c("cid");
            c("gtm");
            n.push("aip=1");
            a.Oc.uid && !h && n.push("uid=" + encodeURIComponent("" + a.Oc.uid));
            var p = function() {
                c("dma");
                null != a.oa.dma_cps && c("dma_cps");
                null != a.oa.gcs && c("gcs");
                c("gcd");
                null != a.oa.npa && c("npa")
            };
            p();
            d && (LG("https://stats.g.doubleclick.net/g/collect", "v=2&" + n.join("&")),
            ml("https://stats.g.doubleclick.net/g/collect?v=2&" + n.join("&")));
            if (e) {
                var q = function() {
                    var t = kt() + "/td/ga/rul?";
                    n = [];
                    c("tid");
                    n.push("gacid=" + encodeURIComponent(String(a.oa.cid)));
                    c("gtm");
                    p();
                    R(32) && c("pscdl");
                    n.push("aip=1");
                    n.push("fledge=1");
                    n.push("z=" + Ka());
                    jt(t + n.join("&"), a.oa.tid)
                };
                n.push("z=" + Ka());
                if (!g) {
                    var r = f && 0 === f.indexOf("google.") && "google.com" != f ? "https://www.%/ads/ga-audiences?v=1&t=sr&slf_rd=1&_r=4&".replace("%", f) : void 0;
                    r && Lc(r + n.join("&"))
                }
                R(66) && m && !LF && q()
            }
        }
    }
      , KG = !1;
    var OG = function() {
        this.F = 1;
        this.M = {};
        this.h = new mg;
        this.s = -1
    };
    OG.prototype.C = function(a, b) {
        var c = this
          , d = new zG(a,this.M,b)
          , e = MF(a);
        e && this.h.W(d) || this.flush();
        if (e && this.h.add(d)) {
            if (0 > this.s) {
                var f = l.setTimeout, g;
                js(a) ? PG ? (PG = !1,
                g = QG) : g = RG : g = 5E3;
                this.s = f.call(l, function() {
                    return c.flush()
                }, g)
            }
        } else {
            var h = og(d, this.F++);
            MG(d.s, h.params, h.body, d.F);
            var m = a.metadata.create_dc_join
              , n = a.metadata.create_google_join
              , p = !1 !== S(a.o, M.g.Ea)
              , q = pn(a.o)
              , r = {
                eventId: a.o.eventId,
                priorityId: a.o.priorityId
            }
              , t = a.h[M.g.Qg]
              , u = {
                nn: m,
                on: n,
                Yl: mj(),
                eo: p,
                co: q,
                qm: ij(),
                om: a.metadata.euid_mode_enabled,
                jo: r,
                Ym: t,
                o: a.o
            };
            NG(d, u)
        }
        Ou(a.o.eventId, a.eventName)
    }
    ;
    OG.prototype.add = function(a) {
        a.metadata.euid_mode_enabled && !LF ? this.W(a) : this.C(a)
    }
    ;
    OG.prototype.flush = function() {
        if (this.h.events.length) {
            var a = pg(this.h, this.F++);
            MG(this.h.s, a.params, a.body, this.h.C);
            this.h = new mg;
            0 <= this.s && (l.clearTimeout(this.s),
            this.s = -1)
        }
    }
    ;
    OG.prototype.W = function(a) {
        var b = this
          , c = ks(a);
        c ? ai(c, function(d) {
            b.C(a, 1 === d.split("~").length ? void 0 : d)
        }) : this.C(a)
    }
    ;
    var LG = function(a, b, c) {
        var d = a + "?" + b;
        c ? Tc(d, c) : Sc(d)
    }
      , QG = wm('', 500)
      , RG = wm('', 5E3)
      , PG = !0;
    var SG = function(a, b, c) {
        void 0 === c && (c = {});
        if ("object" === typeof b)
            for (var d in b)
                SG(a + "." + d, b[d], c);
        else
            c[a] = b;
        return c
    }
      , TG = function(a) {
        if (js(a)) {
            if (R(96)) {
                var b = iq(a, "ccd_add_1p_data", !1) ? 1 : 0;
                ms(a, "ude", b)
            }
            var c = function(e) {
                var f = SG(M.g.Ga, e);
                Na(f, function(g, h) {
                    a.h[g] = h
                })
            }
              , d = S(a.o, M.g.Ga);
            void 0 !== d ? (c(d),
            R(97) && (a.h[M.g.me] = "c")) : c(a.metadata.user_data);
            a.metadata.user_data = void 0
        }
    };
    var UG = window
      , VG = document
      , WG = function(a) {
        var b = UG._gaUserPrefs;
        if (b && b.ioo && b.ioo() || VG.documentElement.hasAttribute("data-google-analytics-opt-out") || a && !0 === UG["ga-disable-" + a])
            return !0;
        try {
            var c = UG.external;
            if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs)
                return !0
        } catch (f) {}
        for (var d = Nn("AMP_TOKEN", String(VG.cookie), !0), e = 0; e < d.length; e++)
            if ("$OPT_OUT" == d[e])
                return !0;
        return VG.getElementById("__gaOptOutExtension") ? !0 : !1
    };
    var YG = function(a) {
        return !a || XG.test(a) || fi.hasOwnProperty(a)
    }
      , ZG = function(a) {
        var b = M.g.Hb, c;
        c || (c = function() {}
        );
        void 0 !== a.h[b] && (a.h[b] = c(a.h[b]))
    }
      , $G = function(a) {
        var b = a.indexOf("?")
          , c = -1 === b ? a : a.substring(0, b);
        try {
            c = decodeURIComponent(c)
        } catch (d) {}
        return -1 === b ? c : "" + c + a.substring(b)
    }
      , aH = function(a, b, c) {
        U(c) || vl(function() {
            b.metadata.is_consent_update = !0;
            var d = ni[c || ""];
            d && ms(b, "gcut", d);
            a.Cj(b)
        }, c)
    }
      , ct = {
        Jl: "",
        wn: Number("")
    }
      , bH = {}
      , cH = (bH[M.g.Qc] = 1,
    bH[M.g.Rc] = 1,
    bH[M.g.Sc] = 1,
    bH[M.g.Tc] = 1,
    bH[M.g.Vc] = 1,
    bH[M.g.Wc] = 1,
    bH)
      , XG = /^(_|ga_|google_|gtag\.|firebase_).*$/
      , dH = function(a) {
        this.M = a;
        this.Yb = new OG;
        this.h = void 0;
        this.F = new OF;
        this.s = this.C = void 0;
        this.Zb = this.Da = !1;
        this.od = 0;
        this.W = !1
    };
    aa = dH.prototype;
    aa.Wm = function(a, b, c) {
        var d = this
          , e = Cl(this.M);
        if (e)
            if (c.eventMetadata.is_external_event && "_" === a.charAt(0))
                c.onFailure();
            else {
                a !== M.g.da && a !== M.g.Sa && YG(a) && L(58);
                eH(c.h);
                var f = new hq(e,a,c);
                f.metadata.event_start_timestamp_ms = b;
                var g = [M.g.R]
                  , h = iq(f, M.g.Sb, S(f.o, M.g.Sb));
                (h || js(f)) && g.push(M.g.J);
                (R(48) && h || R(11) && js(f)) && g.push(M.g.N);
                dt(function() {
                    wl(function() {
                        d.Xm(f)
                    }, g)
                })
            }
        else
            c.onFailure()
    }
    ;
    aa.Xm = function(a) {
        this.s = a;
        try {
            if (WG(a.target.ba))
                L(28),
                a.isAborted = !0;
            else if (R(90)) {
                var b;
                var c = Zj(ak())
                  , d = c && c.parent;
                b = d ? Zj(d) : void 0;
                if (b && Ia(b.destinations))
                    for (var e = 0; e < b.destinations.length; e++)
                        if (WG(b.destinations[e])) {
                            L(125);
                            a.isAborted = !0;
                            break
                        }
            }
            if (0 <= ct.Jl.replace(/\s+/g, "").split(",").indexOf(a.eventName))
                a.isAborted = !0;
            else {
                var f = ls(a);
                f && f.blacklisted && (a.isAborted = !0)
            }
            var g = z.location.protocol;
            "http:" != g && "https:" != g && (L(29),
            a.isAborted = !0);
            Bc && "preview" == Bc.loadPurpose && (L(30),
            a.isAborted = !0);
            R(84) && (a.isAborted = !0);
            Kq(a);
            var h = {}
              , m = ti.grl;
            m || (m = nG(),
            ti.grl = m);
            m(h) || (L(35),
            a.isAborted = !0);
            if (a.isAborted) {
                a.o.onFailure();
                QF();
                return
            }
            var n = h.Al;
            0 === h.Fl && PF(25);
            0 === n && PF(26);
            var p = {
                prefix: String(S(a.o, M.g.Oa, "")),
                path: String(S(a.o, M.g.Rb, "/")),
                flags: String(S(a.o, M.g.Ya, "")),
                domain: String(S(a.o, M.g.Ua, "auto")),
                Hc: Number(S(a.o, M.g.Va, 63072E3))
            };
            a.metadata.cookie_options = p;
            fH(a);
            this.Tk(a);
            this.F.un(a);
            a.metadata.is_merchant_center ? a.metadata.euid_mode_enabled = !1 : iq(a, "ccd_add_1p_data", !1) && (a.metadata.euid_mode_enabled = !0);
            if (a.metadata.euid_mode_enabled && iq(a, "ccd_add_1p_data", !1)) {
                var q = a.o.s[M.g.ne];
                if (aj(q)) {
                    var r = S(a.o, M.g.Ga);
                    null === r ? a.metadata.user_data_from_code = null : (q.enable_code && nb(r) && (a.metadata.user_data_from_code = r),
                    nb(q.selectors) && !a.metadata.user_data_from_manual && (a.metadata.user_data_from_manual = $i(q.selectors)))
                }
            }
            var t = this.Zj, u;
            S(a.o, M.g.Za) && (U(M.g.R) || S(a.o, M.g.nb) || (a.h[M.g.mj] = !0));
            var v;
            var w;
            w = void 0 === w ? 3 : w;
            var x = l.location.href;
            if (x) {
                var y = wj(x).search.replace("?", "")
                  , B = pj(y, "_gl", !1, !0) || "";
                v = B ? void 0 !== Ao(B, w) : !1
            } else
                v = !1;
            v && js(a) && ms(a, "glv", 1);
            if (a.eventName !== M.g.da)
                u = {};
            else {
                S(a.o, M.g.Za) && Hp(["aw", "dc"]);
                Jp(["aw", "dc"]);
                var A = kG(a)
                  , F = mG(a);
                u = Object.keys(A).length ? A : F
            }
            t.call(this, u);
            var G = a.eventName === M.g.da;
            G && (this.W = !0);
            a.eventName == M.g.da && (S(a.o, M.g.Qa, !0) ? (a.o.h[M.g.fa] && (a.o.C[M.g.fa] = a.o.h[M.g.fa],
            a.o.h[M.g.fa] = void 0,
            a.h[M.g.fa] = void 0),
            a.eventName = M.g.sc) : a.isAborted = !0);
            G && !a.isAborted && 0 < this.od++ && PF(17);
            var D = cb(Ul(a.o, M.g.fa, 1), ".");
            D && (a.h[M.g.sb] = D);
            var E = cb(Ul(a.o, M.g.fa, 2), ".");
            E && (a.h[M.g.pb] = E);
            var P = this.C
              , N = this.F
              , W = !this.Zb
              , Z = this.h
              , Q = S(a.o, M.g.nb);
            if (S(a.o, M.g.Eb) && S(a.o, M.g.Tb))
                Q ? UF(a, Q, 1) : (L(127),
                a.isAborted = !0);
            else {
                var T = Q ? 1 : 8;
                a.metadata.is_new_to_site = !1;
                Q || (Q = VF(a),
                T = 3);
                Q || (Q = Z,
                T = 5);
                if (!Q) {
                    var la = U(M.g.R)
                      , fa = RF();
                    Q = !fa.from_cookie || la ? fa.vid : void 0;
                    T = 6
                }
                Q ? Q = "" + Q : (Q = go(),
                T = 7,
                a.metadata.is_first_visit = a.metadata.is_new_to_site = !0);
                UF(a, Q, T)
            }
            var ca = Math.floor(a.metadata.event_start_timestamp_ms / 1E3)
              , Fa = void 0;
            a.metadata.is_new_to_site || (Fa = eG(a) || P);
            var Da = Pa(S(a.o, M.g.ld, 30));
            Da = Math.min(475, Da);
            Da = Math.max(5, Da);
            var Ca = Pa(S(a.o, M.g.Bf, 1E4))
              , sa = ZF(Fa);
            a.metadata.is_first_visit = !1;
            a.metadata.is_session_start = !1;
            a.metadata.join_timer_sec = 0;
            sa && sa.Ih && (a.metadata.join_timer_sec = Math.max(0, sa.Ih - Math.max(0, ca - sa.Te)));
            var gb = !1;
            sa || (gb = a.metadata.is_first_visit = !0,
            sa = {
                sessionId: String(ca),
                Nc: 1,
                yd: !1,
                Te: ca,
                Gc: !1,
                De: void 0
            });
            ca > sa.Te + 60 * Da && (gb = !0,
            sa.sessionId = String(ca),
            sa.Nc++,
            sa.yd = !1,
            sa.De = void 0);
            if (gb)
                a.metadata.is_session_start = !0,
                N.gm(a);
            else if (N.Vl() > Ca || a.eventName == M.g.sc)
                sa.yd = !0;
            a.metadata.euid_mode_enabled ? S(a.o, M.g.Ra) ? sa.Gc = !0 : (sa.Gc && !R(9) && (sa.De = void 0),
            sa.Gc = !1) : sa.Gc = !1;
            var Le = sa.De
              , Me = R(96) && js(a);
            if (a.metadata.euid_mode_enabled || Me) {
                var dd = S(a.o, M.g.Nd)
                  , yn = dd ? 1 : 8;
                dd || (dd = Le,
                yn = 4);
                dd || (dd = fo(),
                yn = 7);
                var oJ = dd.toString()
                  , Kw = yn
                  , Lw = a.metadata.enhanced_client_id_source;
                if (void 0 === Lw || Kw <= Lw)
                    a.h[M.g.Nd] = oJ,
                    a.metadata.enhanced_client_id_source = Kw
            }
            W ? (a.copyToHitData(M.g.ub, sa.sessionId),
            a.copyToHitData(M.g.be, sa.Nc),
            a.copyToHitData(M.g.ae, sa.yd ? 1 : 0)) : (a.h[M.g.ub] = sa.sessionId,
            a.h[M.g.be] = sa.Nc,
            a.h[M.g.ae] = sa.yd ? 1 : 0);
            a.metadata[M.g.vf] = sa.Gc ? 1 : 0;
            gH(a);
            if (!S(a.o, M.g.Tb) || !S(a.o, M.g.Eb)) {
                var Mw = ""
                  , hh = z.location;
                if (hh) {
                    var xj = hh.pathname || "";
                    "/" != xj.charAt(0) && (xj = "/" + xj);
                    Mw = hh.protocol + "//" + hh.hostname + xj + hh.search
                }
                a.copyToHitData(M.g.ra, Mw, $G);
                var qJ = a.copyToHitData, rJ = M.g.Fa, yj;
                a: {
                    var Nw = Qn("_opt_expid", void 0, void 0, M.g.R)[0];
                    if (Nw) {
                        var Ow = decodeURIComponent(Nw).split("$");
                        if (3 === Ow.length) {
                            yj = Ow[2];
                            break a
                        }
                    }
                    if (void 0 !== ti.ga4_referrer_override)
                        yj = ti.ga4_referrer_override;
                    else {
                        var Pw = Ti("gtm.gtagReferrer." + a.target.ba)
                          , sJ = z.referrer;
                        yj = Pw ? "" + Pw : sJ
                    }
                }
                qJ.call(a, rJ, yj || void 0, $G);
                a.copyToHitData(M.g.Gb, z.title);
                a.copyToHitData(M.g.Pa, (Bc.language || "").toLowerCase());
                var Qw = nr();
                a.copyToHitData(M.g.Hb, Qw.width + "x" + Qw.height);
                R(91) && a.copyToHitData(M.g.hd, void 0, $G);
                R(60) && nq() && a.copyToHitData(M.g.fd, "1")
            }
            a.metadata.create_dc_join = !1;
            a.metadata.create_google_join = !1;
            if (!(Mi.s || R(7) && js(a) || a.metadata.is_merchant_center || !1 === S(a.o, M.g.lb)) && pE() && U(M.g.J)) {
                var Rw = is(a);
                (a.metadata.is_session_start || S(a.o, M.g.xf)) && (a.metadata.create_dc_join = !!Rw);
                var Sw;
                Sw = a.metadata.join_timer_sec;
                Rw && 0 === (Sw || 0) && (a.metadata.join_timer_sec = 60,
                a.metadata.create_google_join = !0)
            }
            hH(a);
            hi.hasOwnProperty(a.eventName) && (a.metadata.is_ecommerce = !0,
            a.copyToHitData(M.g.Z),
            a.copyToHitData(M.g.za));
            a.copyToHitData(M.g.Df);
            for (var Tw = S(a.o, M.g.yf) || [], zn = 0; zn < Tw.length; zn++) {
                var Uw = Tw[zn];
                if (Uw.rule_result) {
                    a.copyToHitData(M.g.Df, Uw.traffic_type);
                    PF(3);
                    break
                }
            }
            if (!a.metadata.is_merchant_center && Ij(a.o)) {
                var Vw = gG(a) || {}
                  , uJ = (Jo(Vw[M.g.Ub], !!Vw[M.g.X]) ? zo(!0)._fplc : void 0) || (0 < Qn("FPLC", void 0, void 0, M.g.R).length ? void 0 : "0");
                a.h._fplc = uJ
            }
            if (void 0 !== S(a.o, M.g.ed))
                a.copyToHitData(M.g.ed);
            else {
                var Ww = S(a.o, M.g.zf), An, zj;
                a: {
                    if (jG) {
                        var Bn = gG(a) || {};
                        if (Bn && Bn[M.g.X])
                            for (var Xw = sj(wj(a.h[M.g.Fa]), "host", !0), Aj = Bn[M.g.X], ih = 0; ih < Aj.length; ih++)
                                if (Aj[ih]instanceof RegExp) {
                                    if (Aj[ih].test(Xw)) {
                                        zj = !0;
                                        break a
                                    }
                                } else if (0 <= Xw.indexOf(Aj[ih])) {
                                    zj = !0;
                                    break a
                                }
                    }
                    zj = !1
                }
                if (!(An = zj)) {
                    var Bj;
                    if (Bj = Ww)
                        a: {
                            for (var Yw = Ww.include_conditions || [], vJ = sj(wj(a.h[M.g.Fa]), "host", !0), Cn = 0; Cn < Yw.length; Cn++)
                                if (Yw[Cn].test(vJ)) {
                                    Bj = !0;
                                    break a
                                }
                            Bj = !1
                        }
                    An = Bj
                }
                An && (a.h[M.g.ed] = "1",
                PF(4))
            }
            js(a) && (ms(a, "uc", gj()),
            gl() && ms(a, "rnd", jq()));
            if (R(63) && js(a)) {
                iq(a, M.g.Sb, !1) && ms(a, "gse", 1);
                !1 === S(a.o, M.g.lb, void 0, 4) && ms(a, "ngs", 1);
                ij() && ms(a, "ga_rd", 1);
                pE() || ms(a, "ngst", 1);
                var Zw = mj();
                Zw && ms(a, "etld", Zw)
            }
            if (js(a)) {
                var $w = sG ? kj() : "";
                $w && ms(a, "gcsub", $w)
            }
            js(a) && (ms(a, "gcd", vn(a.o)),
            gl() && S(a.o, M.g.aa) && ms(a, "adr", 1));
            if (js(a)) {
                var ax = Cq();
                ax && ms(a, "us_privacy", ax);
                var bx = hn();
                bx && ms(a, "gdpr", bx);
                var cx = fn();
                cx && ms(a, "gdpr_consent", cx)
            }
            js(a) && (a.h[M.g.dj] = hj() || gj());
            if (js(a) && R(58)) {
                var dx = Gi;
                dx && ms(a, "tft", Number(dx))
            }
            R(71) && R(80) && ms(a, "sw_exp", 1);
            R(82) && js(a) && (a.metadata.speculative && ms(a, "sp", 1),
            a.metadata.is_syn && ms(a, "syn", 1),
            a.metadata.em_event && (ms(a, "em_event", 1),
            ms(a, "sp", 1)));
            R(98) && js(a) && !1 !== S(a.o, M.g.Ea) && gt("join-ad-interest-group") && Ga(Bc.joinAdInterestGroup) && ms(a, "flg", 1);
            if (!Zs(l))
                L(87);
            else if (void 0 !== at) {
                L(85);
                var ex = Xs();
                ex ? S(a.o, M.g.Zd) && !js(a) || et(ex, a) : L(86)
            }
            var Dn = gt(ft());
            Dn || iH || (iH = !0,
            Km('AymqwRC7u88Y4JPvfIF2F37QKylC04248hLCdJAsh8xgOfe/dVJPV3XS3wLFca1ZMVOtnBfVjaCMTVudWM//5g4AAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1RoaXJkUGFydHkiOnRydWV9'),
            Dn = gt(ft()));
            Dn && (a.h[M.g.Qb] = "1");
            if (!1 !== S(a.o, M.g.Ea) && pn(a.o)) {
                var wJ = is(a)
                  , xJ = S(a.o, M.g.lb);
                wJ && !1 !== xJ && pE() && U(M.g.J) && (!R(48) || cl(M.g.N) && el(["ads"]).ads) && gt("join-ad-interest-group") && Ga(Bc.joinAdInterestGroup) && (a.h[M.g.Qg] = !0)
            }
            R(32) && Lq(a);
            if (a.eventName == M.g.Sa) {
                var gx = S(a.o, M.g.rb)
                  , yJ = S(a.o, M.g.Db)
                  , hx = void 0;
                hx = a.h[gx];
                yJ(hx || S(a.o, gx));
                a.isAborted = !0
            }
            a.copyToHitData(M.g.Ra);
            a.copyToHitData(M.g.ab);
            hr(a);
            TG(a);
            R(82) && js(a) && (a.metadata.speculative = !1);
            var ix = S(a.o, M.g.Eb);
            ix && PF(12);
            a.metadata.em_event && PF(14);
            var jh = Zj(ak());
            (ix || mk(jh) || jh && jh.parent && jh.context && 5 === jh.context.source) && PF(19);
            !this.W && a.metadata.em_event && PF(18);
            var En = a.metadata.event_usage;
            if (Ia(En))
                for (var Fn = 0; Fn < En.length; Fn++)
                    PF(En[Fn]);
            var jx = Cb("GA4_EVENT");
            jx && (a.h._eu = jx);
            if (a.metadata.speculative || a.isAborted) {
                a.o.onFailure();
                QF();
                return
            }
            var zJ = this.Zj, kx, AJ = this.h, Gn;
            a: {
                var Hn = fG(a);
                if (Hn) {
                    if (dG(Hn, a)) {
                        Gn = Hn;
                        break a
                    }
                    L(25);
                    a.isAborted = !0
                }
                Gn = void 0
            }
            var BJ = Gn;
            kx = {
                clientId: YF(a, AJ),
                fg: BJ
            };
            zJ.call(this, kx);
            this.Zb = !0;
            this.sn(a);
            if (R(79) && U(M.g.R) && (js(a) && R(80) && (R(71) || R(70)) && (a.metadata.is_sgtm_service_worker = !0),
            R(71)))
                a: {}
            if (js(a)) {
                var DJ = a.metadata.is_conversion;
                if ("page_view" === a.eventName || DJ)
                    aH(this, a, M.g.J),
                    R(11) && aH(this, a, M.g.N)
            }
            this.F.Yh();
            a.copyToHitData(M.g.Gg);
            S(a.o, M.g.Zd) && (a.h[M.g.Zd] = !0,
            js(a) || ZG(a));
            if (a.isAborted) {
                a.o.onFailure();
                QF();
                return
            }
            this.Cj(a);
            a.o.onSuccess()
        } catch (fK) {
            a.o.onFailure()
        }
        QF()
    }
    ;
    aa.Cj = function(a) {
        this.Yb.add(a)
    }
    ;
    aa.Zj = function(a) {
        var b = a.clientId
          , c = a.fg;
        b && c && (this.h = b,
        this.C = c)
    }
    ;
    aa.flush = function() {
        this.Yb.flush()
    }
    ;
    aa.sn = function(a) {
        var b = this;
        if (!this.Da) {
            if (R(46)) {
                var c = U(M.g.N)
                  , d = U(M.g.R);
                ul([M.g.N, M.g.R], function() {
                    var f = U(M.g.N)
                      , g = U(M.g.R)
                      , h = !1
                      , m = {}
                      , n = {};
                    if (d ^ g && b.s && b.C && b.h) {
                        var p = b.h;
                        if (g) {
                            var q = VF(b.s);
                            if (q) {
                                b.h = q;
                                var r = eG(b.s);
                                r && (b.C = aG(r, b.C, b.s))
                            } else
                                XF(b.h, b.s),
                                TF(b.h, !0);
                            dG(b.C, b.s);
                            h = !0;
                            m[M.g.xf] = p
                        } else
                            b.C = void 0,
                            b.h = void 0,
                            l.gaGlobal = {}
                    }
                    f && !c && (h = !0,
                    n.is_consent_update = !0);
                    if (h) {
                        var t = lx(b.M, M.g.Pc, m);
                        ox(t, a.o.eventId, {
                            eventMetadata: n
                        })
                    }
                    d = g;
                    c = f
                })
            } else {
                var e = U(M.g.R);
                ul([M.g.R], function() {
                    var f = U(M.g.R);
                    if (e ^ f && b.s && b.C && b.h) {
                        var g = b.h;
                        if (f) {
                            var h = VF(b.s);
                            if (h) {
                                b.h = h;
                                var m = eG(b.s);
                                m && (b.C = aG(m, b.C, b.s))
                            } else
                                XF(b.h, b.s),
                                TF(b.h, !0);
                            dG(b.C, b.s);
                            var n = {};
                            n[M.g.xf] = g;
                            var p = lx(b.M, M.g.Pc, n);
                            ox(p, a.o.eventId, {})
                        } else
                            b.C = void 0,
                            b.h = void 0,
                            l.gaGlobal = {};
                        e = f
                    }
                })
            }
            this.Da = !0
        }
    }
    ;
    aa.Tk = function(a) {
        a.eventName !== M.g.Sa && this.F.Sk(a)
    }
    ;
    var fH = function(a) {
        function b(c, d) {
            di[c] || void 0 === d || (a.h[c] = d)
        }
        Na(a.o.C, b);
        Na(a.o.h, b)
    }
      , gH = function(a) {
        var b = Vl(a.o)
          , c = function(d, e) {
            cH[d] && (a.h[d] = e)
        };
        nb(b[M.g.Uc]) ? Na(b[M.g.Uc], function(d, e) {
            c((M.g.Uc + "_" + d).toLowerCase(), e)
        }) : Na(b, c)
    }
      , hH = function(a) {
        var b = function(c) {
            return !!c && c.conversion
        };
        a.metadata.is_conversion = b(ls(a));
        a.metadata.is_first_visit && (a.metadata.is_first_visit_conversion = b(ls(a, "first_visit")));
        a.metadata.is_session_start && (a.metadata.is_session_start_conversion = b(ls(a, "session_start")))
    }
      , iH = !1;
    function eH(a) {
        Na(a, function(c) {
            "_" === c.charAt(0) && delete a[c]
        });
        var b = a[M.g.ab] || {};
        Na(b, function(c) {
            "_" === c.charAt(0) && delete b[c]
        })
    }
    ;var jH = function(a) {
        if (R(4) && "prerendering"in z ? z.prerendering : "prerender" === z.visibilityState)
            return !1;
        a();
        return !0
    }
      , kH = function(a) {
        if (!jH(a)) {
            var b = !1
              , c = function() {
                !b && jH(a) && (b = !0,
                Nc(z, "visibilitychange", c),
                R(4) && Nc(z, "prerenderingchange", c),
                L(55))
            };
            Mc(z, "visibilitychange", c);
            R(4) && Mc(z, "prerenderingchange", c);
            L(54)
        }
    };
    var mH = function(a, b) {
        kH(function() {
            var c = Cl(a);
            if (c) {
                var d = lH(c, b);
                lm(a, d)
            }
        });
    };
    function lH(a, b) {
        var c = function() {};
        var d = new dH(a.id)
          , e = "MC" === a.prefix;
        c = function(f, g, h, m) {
            e && (m.eventMetadata.is_merchant_center = !0);
            d.Wm(g, h, m)
        }
        ;
        Qj || nH(a, d, b);
        return c
    }
    function nH(a, b, c) {
        var d = b.F
          , e = {}
          , f = {
            eventId: c,
            eventMetadata: (e.batch_on_navigation = !0,
            e)
        };
        R(45) && (f.deferrable = !0);
        d.bn(function() {
            LF = !0;
            km.flush();
            1E3 <= d.Tf() && Bc.sendBeacon && mm(M.g.Pc, {}, a.id, f);
            b.flush();
            d.bk(function() {
                LF = !1;
                d.bk()
            })
        });
    }
    ;var oH = lH;
    function qH(a, b, c) {
        var d = this;
    }
    qH.D = "internal.gtagConfig";
    function rH() {
        var a = {};
        return a
    }
    ;function tH(a, b) {}
    tH.P = "gtagSet";
    function uH(a, b) {}
    uH.P = "injectHiddenIframe";
    function vH(a, b, c, d, e) {}
    vH.D = "internal.injectHtml";
    var zH = {};
    function BH(a, b, c, d) {}
    var CH = Object.freeze({
        dl: 1,
        id: 1
    })
      , DH = {};
    function EH(a, b, c, d) {}
    BH.P = "injectScript";
    EH.D = "internal.injectScript";
    function FH(a) {
        var b = !0;
        return b
    }
    FH.P = "isConsentGranted";
    function GH() {
        return jj()
    }
    GH.D = "internal.isDmaRegion";
    function HH(a) {
        var b = !1;
        return b
    }
    HH.D = "internal.isEntityInfrastructure";
    var IH = function() {
        var a = mh(function(b) {
            this.h.h.log("error", b)
        });
        a.P = "JSON";
        return a
    };
    function JH(a) {
        var b = void 0;
        return nd(b)
    }
    JH.D = "internal.legacyParseUrl";
    var KH = function() {
        return !1
    }
      , LH = {
        getItem: function(a) {
            var b = null;
            return b
        },
        setItem: function(a, b) {
            return !1
        },
        removeItem: function(a) {}
    };
    function MH() {}
    MH.P = "logToConsole";
    function NH(a, b) {}
    NH.D = "internal.mergeRemoteConfig";
    function OH(a, b, c) {
        c = void 0 === c ? !0 : c;
        var d = [];
        return nd(d)
    }
    OH.D = "internal.parseCookieValuesFromString";
    function PH(a) {
        var b = void 0;
        return b
    }
    PH.P = "parseUrl";
    function QH(a) {}
    QH.D = "internal.processAsNewEvent";
    function RH(a, b, c) {
        var d;
        return d
    }
    RH.D = "internal.pushToDataLayer";
    function SH(a, b) {
        var c = !1;
        return c
    }
    SH.P = "queryPermission";
    function TH() {
        var a = "";
        return a
    }
    TH.P = "readCharacterSet";
    function UH() {
        return si.ja
    }
    UH.D = "internal.readDataLayerName";
    function VH() {
        var a = "";
        return a
    }
    VH.P = "readTitle";
    function WH(a, b) {
        var c = this;
        J(I(this), ["destinationId:!string", "callback:!Fn"], arguments),
        ir(a, function(d) {
            b.invoke(c.h, nd(d, c.h, 1))
        });
    }
    WH.D = "internal.registerCcdCallback";
    function XH(a) {
        return !0
    }
    XH.D = "internal.registerDestination";
    var YH = Object.freeze(["config", "event", "get", "set"]);
    function ZH(a, b, c) {}
    ZH.D = "internal.registerGtagCommandListener";
    function $H(a, b) {
        var c = !1;
        return c
    }
    $H.D = "internal.removeDataLayerEventListener";
    function aI(a, b) {}
    aI.D = "internal.removeFormData";
    function bI() {}
    bI.P = "resetDataLayer";
    function cI(a, b, c, d) {
        J(I(this), ["destinationIds:!*", "eventName:!*", "eventParameters:?PixieMap", "messageContext:?PixieMap"], arguments);
        var e = c ? od(c) : {}
          , f = od(a);
        Array.isArray(f) || (f = [f]);
        b = String(b);
        var g = d ? od(d) : {}
          , h = this.h.h;
        g.originatingEntity = EB(h);
        for (var m = 0; m < f.length; m++) {
            var n = f[m];
            if ("string" === typeof n) {
                var p = ob(e)
                  , q = ob(g)
                  , r = lx(n, b, p);
                ox(r, g.eventId || h.eventId, q)
            }
        }
    }
    cI.D = "internal.sendGtagEvent";
    function dI(a, b, c) {}
    dI.P = "sendPixel";
    function eI(a, b) {}
    eI.D = "internal.setAnchorHref";
    function fI(a, b, c, d) {
        var e = this;
        d = void 0 === d ? !0 : d;
        var f = !1;
        return f
    }
    fI.P = "setCookie";
    function gI(a) {}
    gI.D = "internal.setCorePlatformServices";
    function hI(a, b) {}
    hI.D = "internal.setDataLayerValue";
    function iI(a) {}
    iI.P = "setDefaultConsentState";
    function jI(a, b) {}
    jI.D = "internal.setDelegatedConsentType";
    function kI(a, b) {}
    kI.D = "internal.setFormAction";
    function lI(a, b, c) {
        return !1
    }
    lI.P = "setInWindow";
    function mI(a, b, c) {
        J(I(this), ["targetId:!string", "name:!string", "value:!*"], arguments);
        var d = gq(a) || {};
        d[b] = od(c, this.h);
        var e = a;
        eq || fq();
        dq[e] = d;
    }
    mI.D = "internal.setProductSettingsParameter";
    function nI(a, b, c) {
        J(I(this), ["targetId:!string", "name:!string", "value:!*"], arguments);
        for (var d = b.split("."), e = pm(a), f = 0; f < d.length - 1; f++) {
            if (void 0 === e[d[f]])
                e[d[f]] = {};
            else if (!nb(e[d[f]]))
                throw Error("setRemoteConfigParameter failed, path contains a non-object type: " + d[f]);
            e = e[d[f]]
        }
        e[d[f]] = od(c, this.h, 1);
    }
    nI.D = "internal.setRemoteConfigParameter";
    function oI(a, b) {
        var c = this;
    }
    oI.D = "internal.setupConversionLinker";
    function pI(a, b, c, d) {
        var e = this;
    }
    pI.P = "sha256";
    function qI(a, b, c) {}
    qI.D = "internal.sortRemoteConfigParameters";
    var rI = {}
      , sI = {};
    rI.P = "templateStorage";
    rI.getItem = function(a) {
        var b = null;
        return b
    }
    ;
    rI.setItem = function(a, b) {}
    ;
    rI.removeItem = function(a) {}
    ;
    rI.clear = function() {}
    ;
    function tI(a, b) {
        var c = !1;
        return c
    }
    tI.D = "internal.testRegex";
    var uI = function(a) {
        var b;
        return b
    };
    function vI(a) {
        var b;
        return b
    }
    vI.D = "internal.unsiloId";
    function wI(a) {}
    wI.P = "updateConsentState";
    var xI;
    function yI(a, b, c) {
        xI = xI || new wh;
        xI.add(a, b, c)
    }
    function zI(a, b) {
        var c = xI = xI || new wh;
        if (c.s.hasOwnProperty(a))
            throw "Attempting to add a private function which already exists: " + a + ".";
        if (c.h.hasOwnProperty(a))
            throw "Attempting to add a private function with an existing API name: " + a + ".";
        c.s[a] = Ga(b) ? Qg(a, b) : Rg(a, b)
    }
    function AI() {
        return function(a) {
            var b;
            var c = xI;
            if (c.h.hasOwnProperty(a))
                b = c.get(a, this);
            else {
                var d;
                if (d = c.s.hasOwnProperty(a)) {
                    var e = !1
                      , f = this.h.h;
                    if (f) {
                        var g = f.hc();
                        if (g) {
                            0 !== g.indexOf("__cvt_") && (e = !0);
                        }
                    } else
                        e = !0;
                    d = e
                }
                if (d) {
                    var h = c.s.hasOwnProperty(a) ? c.s[a] : void 0;
                    b = h
                } else
                    throw Error(a + " is not a valid API name.");
            }
            return b
        }
    }
    ;var BI = function() {
        var a = function(c) {
            return zI(c.D, c)
        }
          , b = function(c) {
            return yI(c.P, c)
        };
        b(VA);
        b(aB);
        b(UB);
        b(XB);
        b(YB);
        b(bC);
        b(dC);
        b(gC);
        b(IH());
        b(iC);
        b(oF);
        b(pF);
        b(EF);
        b(FF);
        b(GF);
        b(JF);
        b(tH);
        b(uH);
        b(BH);
        b(FH);
        b(MH);
        b(PH);
        b(SH);
        b(TH);
        b(VH);
        b(dI);
        b(fI);
        b(iI);
        b(lI);
        b(pI);
        b(rI);
        b(wI);
        yI("Math", Wg());
        yI("Object", uh);
        yI("TestHelper", yh());
        yI("assertApi", Sg);
        yI("assertThat", Tg);
        yI("decodeUri", Xg);
        yI("decodeUriComponent", Yg);
        yI("encodeUri", Zg);
        yI("encodeUriComponent", $g);
        yI("fail", fh);
        yI("generateRandom", gh);
        yI("getTimestamp", kh);
        yI("getTimestampMillis", kh);
        yI("getType", lh);
        yI("makeInteger", nh);
        yI("makeNumber", oh);
        yI("makeString", ph);
        yI("makeTableMap", qh);
        yI("mock", th);
        yI("fromBase64", mF, !("atob"in l));
        yI("localStorage", LH, !KH());
        yI("toBase64", uI, !("btoa"in l));
        a(YA);
        a(fB);
        a(rB);
        a(yB);
        a(DB);
        a(JB);
        a(SB);
        a(VB);
        a(ZB);
        a($B);
        a(cC);
        a(eC);
        a(fC);
        a(hC);
        a(jC);
        a(kC);
        a(lC);
        a(mC);
        a(nC);
        a(rC);
        a(wC);
        a(xC);
        a(IC);
        a(NC);
        a(SC);
        a(aD);
        a(fD);
        a(sD);
        a(uD);
        a(HD);
        a(ah);
        a(JD);
        a(kF);
        a(lF);
        a(qF);
        a(rF);
        a(sF);
        a(tF);
        a(uF);
        a(vF);
        a(wF);
        a(xF);
        a(yF);
        a(zF);
        a(BF);
        a(CF);
        a(DF);
        a(HF);
        a(IF);
        a(qH);
        a(vH);
        a(EH);
        a(GH);
        a(HH);
        a(JH);
        a(HB);
        a(NH);
        a(OH);
        a(QH);
        a(RH);
        a(UH);
        a(WH);
        a(XH);
        a(ZH);
        a($H);
        a(aI);
        a(cI);
        a(eI);
        a(gI);
        a(hI);
        a(jI);
        a(kI);
        a(mI);
        a(nI);
        a(oI);
        a(qI);
        a(tI);
        a(vI);
        zI("internal.GtagSchema", rH());
        return AI()
    };
    var TA;
    function CI() {
        TA.h.h.M = function(a, b, c) {
            ti.SANDBOXED_JS_SEMAPHORE = ti.SANDBOXED_JS_SEMAPHORE || 0;
            ti.SANDBOXED_JS_SEMAPHORE++;
            try {
                return a.apply(b, c)
            } finally {
                ti.SANDBOXED_JS_SEMAPHORE--
            }
        }
    }
    function DI(a) {
        void 0 !== a && Na(a, function(b, c) {
            for (var d = 0; d < c.length; d++) {
                var e = c[d].replace(/^_*/, "");
                Ji[e] = Ji[e] || [];
                Ji[e].push(b)
            }
        })
    }
    ;var EI = encodeURI
      , X = encodeURIComponent
      , FI = function(a, b, c) {
        Lc(a, b, c)
    }
      , GI = function(a, b) {
        if (!a)
            return !1;
        var c = sj(wj(a), "host");
        if (!c)
            return !1;
        for (var d = 0; b && d < b.length; d++) {
            var e = b[d] && b[d].toLowerCase();
            if (e) {
                var f = c.length - e.length;
                0 < f && "." != e.charAt(0) && (f--,
                e = "." + e);
                if (0 <= f && c.indexOf(e, f) == f)
                    return !0
            }
        }
        return !1
    }
      , HI = function(a, b, c) {
        for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
            a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c],
            e = !0);
        return e ? d : null
    };
    var Y = {
        securityGroups: {}
    };
    Y.securityGroups.c = ["google"],
    function() {
        (function(a) {
            Y.__c = a;
            Y.__c.m = "c";
            Y.__c.isVendorTemplate = !0;
            Y.__c.priorityOverride = 0;
            Y.__c.isInfrastructure = !0;
            Y.__c.runInSiloedMode = !0
        }
        )(function(a) {
            return a.vtp_value
        })
    }();
    Y.securityGroups.e = ["google"],
    function() {
        (function(a) {
            Y.__e = a;
            Y.__e.m = "e";
            Y.__e.isVendorTemplate = !0;
            Y.__e.priorityOverride = 0;
            Y.__e.isInfrastructure = !0;
            Y.__e.runInSiloedMode = !0
        }
        )(function(a) {
            return String(a.vtp_gtmCachedValues.event)
        })
    }();
    Y.securityGroups.access_globals = ["google"],
    function() {
        function a(b, c, d) {
            var e = {
                key: d,
                read: !1,
                write: !1,
                execute: !1
            };
            switch (c) {
            case "read":
                e.read = !0;
                break;
            case "write":
                e.write = !0;
                break;
            case "readwrite":
                e.read = e.write = !0;
                break;
            case "execute":
                e.execute = !0;
                break;
            default:
                throw Error("Invalid " + b + " request " + c);
            }
            return e
        }
        (function(b) {
            Y.__access_globals = b;
            Y.__access_globals.m = "access_globals";
            Y.__access_globals.isVendorTemplate = !0;
            Y.__access_globals.priorityOverride = 0;
            Y.__access_globals.isInfrastructure = !1;
            Y.__access_globals.runInSiloedMode = !1
        }
        )(function(b) {
            for (var c = b.vtp_keys || [], d = b.vtp_createPermissionError, e = [], f = [], g = [], h = 0; h < c.length; h++) {
                var m = c[h]
                  , n = m.key;
                m.read && e.push(n);
                m.write && f.push(n);
                m.execute && g.push(n)
            }
            return {
                assert: function(p, q, r) {
                    if (!k(r))
                        throw d(p, {}, "Key must be a string.");
                    if ("read" === q) {
                        if (-1 < e.indexOf(r))
                            return
                    } else if ("write" === q) {
                        if (-1 < f.indexOf(r))
                            return
                    } else if ("readwrite" === q) {
                        if (-1 < f.indexOf(r) && -1 < e.indexOf(r))
                            return
                    } else if ("execute" === q) {
                        if (-1 < g.indexOf(r))
                            return
                    } else
                        throw d(p, {}, "Operation must be either 'read', 'write', or 'execute', was " + q);
                    throw d(p, {}, "Prohibited " + q + " on global variable: " + r + ".");
                },
                K: a
            }
        })
    }();
    Y.securityGroups.v = ["google"],
    function() {
        (function(a) {
            Y.__v = a;
            Y.__v.m = "v";
            Y.__v.isVendorTemplate = !0;
            Y.__v.priorityOverride = 0;
            Y.__v.isInfrastructure = !0;
            Y.__v.runInSiloedMode = !1
        }
        )(function(a) {
            var b = a.vtp_name;
            if (!b || !b.replace)
                return !1;
            var c = dA(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1);
            return void 0 !== c ? c : a.vtp_defaultValue
        })
    }();

    Y.securityGroups.read_container_data = ["google"],
    function() {
        (function(a) {
            Y.__read_container_data = a;
            Y.__read_container_data.m = "read_container_data";
            Y.__read_container_data.isVendorTemplate = !0;
            Y.__read_container_data.priorityOverride = 0;
            Y.__read_container_data.isInfrastructure = !1;
            Y.__read_container_data.runInSiloedMode = !1
        }
        )(function() {
            return {
                assert: function() {},
                K: function() {
                    return {}
                }
            }
        })
    }();

    Y.securityGroups.detect_user_provided_data = ["google"],
    function() {
        function a(b, c) {
            return {
                dataSource: c
            }
        }
        (function(b) {
            Y.__detect_user_provided_data = b;
            Y.__detect_user_provided_data.m = "detect_user_provided_data";
            Y.__detect_user_provided_data.isVendorTemplate = !0;
            Y.__detect_user_provided_data.priorityOverride = 0;
            Y.__detect_user_provided_data.isInfrastructure = !1;
            Y.__detect_user_provided_data.runInSiloedMode = !1
        }
        )(function(b) {
            var c = b.vtp_createPermissionError;
            return {
                assert: function(d, e) {
                    if ("auto" !== e && "manual" !== e && "code" !== e)
                        throw c(d, {}, "Unknown user provided data source.");
                    if (b.vtp_limitDataSources)
                        if ("auto" !== e || b.vtp_allowAutoDataSources) {
                            if ("manual" === e && !b.vtp_allowManualDataSources)
                                throw c(d, {}, "Detection of user provided data via manually specified CSS selectors is not allowed.");
                            if ("code" === e && !b.vtp_allowCodeDataSources)
                                throw c(d, {}, "Detection of user provided data from an in-page variable is not allowed.");
                        } else
                            throw c(d, {}, "Automatic detection of user provided data is not allowed.");
                },
                K: a
            }
        })
    }();

    Y.securityGroups.gct = ["google"],
    function() {
        function a(b) {
            for (var c = [], d = 0; d < b.length; d++)
                try {
                    c.push(new RegExp(b[d]))
                } catch (e) {}
            return c
        }
        (function(b) {
            Y.__gct = b;
            Y.__gct.m = "gct";
            Y.__gct.isVendorTemplate = !0;
            Y.__gct.priorityOverride = 0;
            Y.__gct.isInfrastructure = !1;
            Y.__gct.runInSiloedMode = !0
        }
        )(function(b) {
            var c = {}
              , d = b.vtp_sessionDuration;
            0 < d && (c[M.g.ld] = d);
            c[M.g.Rd] = b.vtp_eventSettings;
            c[M.g.vg] = b.vtp_dynamicEventSettings;
            c[M.g.Sb] = 1 === b.vtp_googleSignals;
            c[M.g.Hg] = b.vtp_foreignTld;
            c[M.g.Fg] = 1 === b.vtp_restrictDomain;
            c[M.g.yf] = b.vtp_internalTrafficResults;
            var e = M.g.Aa
              , f = b.vtp_linker;
            f && f[M.g.X] && (f[M.g.X] = a(f[M.g.X]));
            c[e] = f;
            var g = M.g.zf
              , h = b.vtp_referralExclusionDefinition;
            h && h.include_conditions && (h.include_conditions = a(h.include_conditions));
            c[g] = h;
            var m = dk(b.vtp_trackingId);
            qm(m, c);
            mH(m, b.vtp_gtmEventId);
            C(b.vtp_gtmOnSuccess)
        })
    }();

    Y.securityGroups.get = ["google"],
    function() {
        (function(a) {
            Y.__get = a;
            Y.__get.m = "get";
            Y.__get.isVendorTemplate = !0;
            Y.__get.priorityOverride = 0;
            Y.__get.isInfrastructure = !1;
            Y.__get.runInSiloedMode = !1
        }
        )(function(a) {
            var b = a.vtp_settings
              , c = b.eventParameters || {}
              , d = String(a.vtp_eventName)
              , e = {};
            e.eventId = a.vtp_gtmEventId;
            e.priorityId = a.vtp_gtmPriorityId;
            a.vtp_deferrable && (e.deferrable = !0);
            var f = lx(String(b.streamId), d, c);
            ox(f, e.eventId, e);
            a.vtp_gtmOnSuccess()
        })
    }();

    var dK = {};
    dK.dataLayer = Ui;
    dK.callback = function(a) {
        Ii.hasOwnProperty(a) && Ga(Ii[a]) && Ii[a]();
        delete Ii[a]
    }
    ;
    dK.bootstrap = 0;
    dK._spx = !1;
    function eK() {
        ti[Xj()] = ti[Xj()] || dK;
        gk();
        kk() || Na(lk(), function(d, e) {
            Lv(d, e.transportUrl, e.context);
            L(92)
        });
        Xa(Ji, Y.securityGroups);
        var a = Zj(ak()), b, c = null == a ? void 0 : null == (b = a.context) ? void 0 : b.source;
        2 !== c && 4 !== c && 3 !== c || L(142);
        xf = Of
    }
    (function(a) {
        function b() {
            m = z.documentElement.getAttribute("data-tag-assistant-present");
            Sy(m) && (h = g.Pk)
        }
        if (!l["__TAGGY_INSTALLED"]) {
            var c = !1;
            if (z.referrer) {
                var d = wj(z.referrer);
                c = "cct.google" === rj(d, "host")
            }
            if (!c) {
                var e = Qn("googTaggyReferrer");
                c = e.length && e[0].length
            }
            c && (l["__TAGGY_INSTALLED"] = !0,
            Ic("https://cct.google/taggy/agent.js"))
        }
        if (Di)
            a();
        else {
            var f = function(u) {
                var v = "GTM"
                  , w = "GTM";
                zi ? (v = "OGT",
                w = "GTAG") : Di && (w = v = "OPT");
                var x = l["google.tagmanager.debugui2.queue"];
                x || (x = [],
                l["google.tagmanager.debugui2.queue"] = x,
                Ic("https://" + si.Cd + "/debug/bootstrap?id=" + Xf.ctid + "&src=" + w + "&cond=" + u + "&gtm=" + Mn()));
                var y = {
                    messageType: "CONTAINER_STARTING",
                    data: {
                        scriptSource: Cc,
                        containerProduct: v,
                        debug: !1,
                        id: Xf.ctid,
                        targetRef: {
                            ctid: Xf.ctid,
                            isDestination: Pj.qe
                        },
                        aliases: Rj(),
                        destinations: Uj()
                    }
                };
                y.data.resume = function() {
                    a()
                }
                ;
                si.vk && (y.data.initialPublish = !0);
                x.push(y)
            }
              , g = {
                Ln: 1,
                Qk: 2,
                fl: 3,
                wk: 4,
                Pk: 5
            }
              , h = void 0
              , m = void 0
              , n = sj(l.location, "query", !1, void 0, "gtm_debug");
            Sy(n) && (h = g.Qk);
            if (!h && z.referrer) {
                var p = wj(z.referrer);
                "tagassistant.google.com" === rj(p, "host") && (h = g.fl)
            }
            if (!h) {
                var q = Qn("__TAG_ASSISTANT");
                q.length && q[0].length && (h = g.wk)
            }
            h || b();
            if (!h && Ty(m)) {
                var r = function() {
                    if (t)
                        return !0;
                    t = !0;
                    b();
                    h && Cc ? f(h) : a()
                }
                  , t = !1;
                Mc(z, "TADebugSignal", function() {
                    r()
                }, !1);
                l.setTimeout(function() {
                    r()
                }, 200)
            } else
                h && Cc ? f(h) : a()
        }
    }
    )(function() {
        try {
            ek();
            if (R(65)) {}
            Qk().s();
            gn();
            (R(30) || R(31) || R(32)) && zl();
            var a = Yj();
            if (Mj().canonical[a]) {
                var b = ti.zones;
                b && b.unregisterChild(Tj());
                vv().removeExternalRestrictions(Yj());
            } else {
                bt();
                Mi.h = "";
                Mi.s = Mi.F;
                Mi.C = "";
                Mi.Da = "ad_storage|analytics_storage|ad_user_data|ad_personalization";
                Mi.M = "ad_storage|analytics_storage|ad_user_data|ad_personalization";
                Mi.W = "ad_storage|analytics_storage|ad_user_data";
                Iv();
                for (var c = data.resource || {}, d = c.macros || [], e = 0; e < d.length; e++)
                    nf.push(d[e]);
                for (var f = c.tags || [], g = 0; g < f.length; g++)
                    qf.push(f[g]);
                for (var h = c.predicates || [], m = 0; m < h.length; m++)
                    pf.push(h[m]);
                for (var n = c.rules || [], p = 0; p < n.length; p++) {
                    for (var q = n[p], r = {}, t = 0; t < q.length; t++) {
                        var u = q[t][0];
                        r[u] = Array.prototype.slice.call(q[t], 1);
                        "if" !== u && "unless" !== u || wf(r[u])
                    }
                    of.push(r)
                }
                sf = Y;
                tf = IA;
                Qf = new $f;
                var v = data.sandboxed_scripts
                  , w = data.security_groups;
                a: {
                    var x = data.runtime || []
                      , y = data.runtime_lines;
                    TA = new Ie;
                    CI();
                    mf = SA();
                    var B = TA
                      , A = BI()
                      , F = new fd("require",A);
                    F.Jb();
                    B.h.h.set("require", F);
                    for (var G = [], D = 0; D < x.length; D++) {
                        var E = x[D];
                        if (!Ia(E) || 3 > E.length) {
                            if (0 === E.length)
                                continue;
                            break a
                        }
                        y && y[D] && y[D].length && Hf(E, y[D]);
                        try {
                            TA.execute(E),
                            R(74) && uk && 50 === E[0] && G.push(E[1])
                        } catch (gb) {}
                    }
                    R(74) && (yf = G)
                }
                if (void 0 !== v)
                    for (var P = ["sandboxedScripts"], N = 0; N < v.length; N++) {
                        var W = v[N].replace(/^_*/, "");
                        Ji[W] = P
                    }
                DI(w);
                eK();
                if (!Di)
                    for (var Z = jj() ? R(47) ? Oi(Mi.W) : Oi(Mi.M) : Oi(Mi.Da), Q = 0; Q < nl.length; Q++) {
                        var T = nl[Q]
                          , la = T
                          , fa = Z[T] ? "granted" : "denied";
                        Wk().implicit(la, fa)
                    }
                Ry();
                Mv = !1;
                Nv = 0;
                if ("interactive" == z.readyState && !z.createEventObject || "complete" == z.readyState)
                    Pv();
                else {
                    Mc(z, "DOMContentLoaded", Pv);
                    Mc(z, "readystatechange", Pv);
                    if (z.createEventObject && z.documentElement.doScroll) {
                        var ca = !0;
                        try {
                            ca = !l.frameElement
                        } catch (gb) {}
                        ca && Qv()
                    }
                    Mc(l, "load", Pv)
                }
                fy = !1;
                "complete" === z.readyState ? hy() : Mc(l, "load", hy);
                uk && (pk(Ik),
                l.setInterval(Hk, 864E5));
                pk(KA);
                pk(qw);
                pk(fu);
                pk(jm);
                pk(Bw);
                pk(Jl);
                pk(Qs);
                pk(Hl);
                R(74) && (pk(vw),
                pk(ww),
                pk(xw));
                uk && R(62) && (pk(LA),
                pk(NA));
                PA();
                R(75) && pk(Mk);
                nz();
                ej(1);
                zx();
                Hi = Ua();
                dK.bootstrap = Hi;
                dK._spx = !0,
                Py();
                if (R(65)) {}
            }
        } catch (gb) {
            if (ej(4),
            uk) {
                var sa = Ck(!0, !0);
                Lc(sa)
            }
        }
    });

}
)()
