var baseURL = {
    domain: 'https://docentedu.com/',
    version: 'beta'
};
baseURL.api = baseURL.domain + baseURL.version + '/api/';

function onSignIn(googleUser) {
    if (!googleUser.isSignedIn()) {
        jQuery('.google-login').show();
        return false;
    }
    var token = googleUser.getAuthResponse();
    jQuery.ajaxSetup({
        beforeSend: function(xhr) {
            xhr.setRequestHeader('Authorization', 'Bearer ' + token.access_token);
            xhr.setRequestHeader('X-Id-Token', token.id_token);
        }
    });
    userSignup();
}
function switchView(newView) {
    jQuery('#install-container').attr('data-version', newView);
    jQuery('.' + newView + '-container').show();
    jQuery('.noversion-container').hide();
}
function userSignup() {
    var url = baseURL.api + 'user';
    var data = {
        user_type: jQuery('#install-container').attr('data-version')
    };
    jQuery.post(url, data, function(response) {
        if (response) {
            jQuery('.google-login,.newsletter-opt-in').hide();
            console.log('Signed up as:', response.userType);
            if (jQuery('#install-container').attr('data-version') != response.userType) {
                showExtension();
            }
            else if (response.userType == 'student') {
                jQuery('.extension-wrapper').hide();
                jQuery('.enroll-wrapper').show();
            }
            else if (response.userType == 'teacher') {
                jQuery('.extension-wrapper').hide();
                jQuery('.create-course-wrapper').show();
            }
        }
        if (jQuery('#install-container').attr('data-version') == 'student') {
            return;
        }
        var data = {
            status: jQuery('.newsletter-opt-in input').prop('checked') ? 'subscribed' : 'unsubscribed'
        };
        var url = baseURL.api + 'user/newsletter';
        jQuery.post(url, data, function(response) {
            console.log(response);
        });
    });
}
function postCourse() {
    var url = baseURL.api + 'courses';
    var data = {
        courseName: jQuery('.create-course-input').val()
    }
    jQuery.post(url, data, function(response) {
        console.log('Course was successfully added.');

        if (response) {
            showExtension();
        }
    })
    .fail(function(response) {
        console.log('Error:',response.status,response.statusText);
    });
}
function enroll() {
    var url = baseURL.api + 'courses';
    var data = {
        class_code: jQuery('.enroll-input').val()
    };
    jQuery.post(url, data, function(response) {
        if (response) {
            if (response.ok) {
                if (response.n == 1) {
                    if (response.nModified == 1) {
                        showExtension();
                        alert('Success! You are now enrolled.');
                    }
                    else if (response.nModified == 0) {
                        showExtension();
                        alert('You are already in that class.');
                    }
                    else console.log(response);
                }
                else if (response.n == 0) {
                    alert("Couldn't find your class. Please check that you have the correct class code.");
                }
                else console.log(response);
            }
        }
        else alert('Something went wrong, please try again.');
    });
}
function showExtension() {
    jQuery('.enroll-wrapper,.create-course-wrapper').hide();
    jQuery('.extension-wrapper').show();
}
function installExtension() {
    if (window.chrome) {
        chrome.webstore.install('https://chrome.google.com/webstore/detail/dehajjkfchegiinhcmoclkfbnmpgcahj', function() {
            window.location = 'https://docentedu.com/beta/dashboard';
        });
    }
    else if (window.InstallTrigger) {
        var xpi = {
            DocentEDU: {
                URL: 'https://addons.mozilla.org/downloads/latest/579384/addon-579384-latest.xpi?src=external-signup',
                IconURL: 'https://docentedu.com/images/logo.png'
            }
        };
        InstallTrigger.install(xpi);
        // Delete the next line for v0.10.3+
        window.location = 'https://docentedu.com/beta/dashboard';
    }
    else {
        showBookmarklet();
    }
}
function showBookmarklet() {
    var f = function(doc) {
        var t = (new Date()).valueOf();
        var s = doc.createElement('script');
        s.src = 'https://docentedu.com/beta/toolbar/docent.js?t=' + t;
        s.async = true;
        doc.getElementsByTagName('head')[0].appendChild(s);
    };
    var href = encodeURI('javascript:(' + f.toString().replace(/\s{2,}/g, '') + ')(document)');
    jQuery('.bookmarklet').attr('href', href);
    window.location.hash = href;
    
    jQuery('.extension-wrapper').hide();
    jQuery('.bookmarklet-wrapper').show();
}
