$(document).on('ready', function() {



    var $window = $(window);
    var $document = $(document);
    var windowHeight = $window.height();
    var documentHeight = $document.height();
    var percentageFromTop = Math.ceil(((windowHeight / documentHeight) * 100));
    $('#pp').text(percentageFromTop + "%");
    var lastScrollTop = $window.scrollTop();
    var totalScroll = 0;
    var readyTime = new Date();
    var sections = [];
    var totalSections = 6;
    for (var i = 0; i < totalSections; i++) {
        var newSection = {
            section: i + 1,
            pxTop: 0,
            pxBottom: Math.ceil((documentHeight / totalSections) + ((documentHeight / totalSections) * i)),
            time: 0
        }
        sections.push(newSection);
    };

    for (var i = 0; i < sections.length; i++) {
        console.log(sections[i]);
    };

    console.log("win-h: " + windowHeight + "   doc-h: " + documentHeight)

    $window.scroll(function() {
        addDistance();
        $('#pp').text(getPercentageFromTop(this) + "%");
        lastScrollTop = $window.scrollTop();

    });

    var getPercentageFromTop = function() {
        percentageFromTop = Math.ceil(((($(this).scrollTop() + windowHeight) / documentHeight) * 100));
        console.log('%:', percentageFromTop);
        return percentageFromTop;
    };

    var addDistance = function() {
        var currentScrollTop = $(this).scrollTop();
        var distance = currentScrollTop - lastScrollTop
        totalScroll = totalScroll + Math.abs(distance);

        console.log('total scrolled:', totalScroll, 'total distance:', Math.abs(distance));
    }






});