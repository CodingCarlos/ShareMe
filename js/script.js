
$('#share').on('click', function() {
    prepareShare(function(txt, img, url) {
        // Let's Share!!
        share(txt, img, url);
    });
});

$('#custom').on('click', function() {
    $('#form').slideUp('fast');
    $('#customShare').slideDown('fast');
});

$('#edit').on('click', function() {
    $('#customShare').slideUp('fast');
    $('#form').slideDown('fast');
});

$('#shareTwitter').on('click', function() {
    prepareShare(function(txt, img, url) {
        // Let's Share!!
        share(txt, img, url, 'twitter');
    });
});

$('#shareFacebook').on('click', function() {
    prepareShare(function(txt, img, url) {
        // Let's Share!!
        share(txt, img, url, 'facebook');
    });
});

$('#shareWhatsapp').on('click', function() {
    prepareShare(function(txt, img, url) {
        // Let's Share!!
        share(txt, img, url, 'whatsapp');
    });
});

function prepareShare(callback) {

    var txt = $('#text').val();
    var img = $('#image_url').val();
    var url = $('#url').val();

    callback(txt, img, url);
}

/**
 *  Generic Share (Uses system default interface)
 *  
 *  @param  text    Text to share
 *  @param  image   Image to share
 *  @param  url     URL to share
 *  @param  via     Via to share (twitter, facebook...) Default: 'generic'
 */
function share(text, image, url, via) {
    console.log(text)
    console.log(image)
    console.log(url)
    console.log(via)

    switch(via) {
        case "twitter":
            return window.plugins.socialsharing.shareViaTwitter(text, image, url);
            break;

        case "facebook":
            return window.plugins.socialsharing.shareViaFacebook(text, image, url, function() {
                    console.log('share ok');
                }, 
                function(errormsg) {
                    alert(errormsg);
                });
            break;

        case "whatsapp":
            return window.plugins.socialsharing.shareViaWhatsApp(text, image, url, function() {
                    console.log('share ok');
                }, function(errormsg) {
                    alert(errormsg);
                });
            break;

        default:
            return window.plugins.socialsharing.share(text, null, img, url);
    }
    
}


