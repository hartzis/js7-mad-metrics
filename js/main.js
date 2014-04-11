$(document).on('ready', function() {



    var $window = $(window);
    var $document = $(document);
    var windowHeight = $window.height();
    var documentHeight = $document.height();
    var percentageFromTop = Math.ceil(((windowHeight / documentHeight) * 100));
    $('#pp').text(percentageFromTop + "%");
    var lastScrollTop = $window.scrollTop();
    var totalScroll = 0;
    var startTime = new Date();
    var sections = [];
    var totalSections = 6;
    for (var i = 0; i < totalSections; i++) {
        var newSection = {
            section: i + 1,
            pxTop: Math.ceil(0 + ((documentHeight / totalSections) * i)),
            pxBottom: Math.ceil((documentHeight / totalSections) + ((documentHeight / totalSections) * i)) - 1,
            time: 0
        }
        sections.push(newSection);
    };

    for (var i = 0; i < sections.length; i++) {
        console.log(sections[i]);
    };

    console.log("win-h: " + windowHeight + "   doc-h: " + documentHeight)

    $window.scroll(function() {
        addDistanceScrolled();
        $('#pp').text(getPercentageFromTop(this) + "%");
        lastScrollTop = $(this).scrollTop();
        getSection();
        drawRedCenterLine();
    });

    var drawRedCenterLine = function() {
        var centerY = Math.ceil($(this).scrollTop() + ($(this).height() / 2));
        if ($('body').find('#red-line').length >= 1) {
            $('#red-line').css('top', centerY + 'px');
        } else {
            var $redLine = $('<div>', {
                id: 'red-line'
            });
            $('body').append($redLine);
            $('#red-line').css('top', centerY + 'px');
        };
    }

    var getSection = function() {
        var middleViewWindow = Math.ceil($(this).scrollTop() + ($(this).height() / 2));
        for (var i = 0; i < sections.length; i++) {
            if (middleViewWindow >= sections[i]['pxTop'] && middleViewWindow <= sections[i]['pxBottom']) {
                console.log('Currently in:', sections[i]['section']);
            };
        };
    };

    // return percentage from top based on top Y of window
    var getPercentageFromTop = function() {
        percentageFromTop = Math.ceil(((($(this).scrollTop() + windowHeight) / documentHeight) * 100));
        // console.log('%:', percentageFromTop);
        return percentageFromTop;
    };

    // tally total scrolling distanc
    var addDistanceScrolled = function() {
        var currentScrollTop = $(this).scrollTop();
        var distance = currentScrollTop - lastScrollTop
        totalScroll = totalScroll + Math.abs(distance);

        // console.log('total scrolled:', totalScroll, 'total distance:', Math.abs(distance));
    }






});