$(document).on('ready', function() {

    var $window = $(window);
    var $document = $(document);
    var windowHeight = $window.height();
    var documentHeight = $document.height();
    var percentageFromTop = Math.ceil(((windowHeight / documentHeight) * 100));
    $('#pp').text(percentageFromTop + "%");

    console.log("win-h: " + windowHeight + "   doc-h: " + documentHeight)

    $window.scroll(function() {

        $('#pp').text(getPercentageFromTop(this) + "%");

    });

    var getPercentageFromTop = function() {
        percentageFromTop = Math.ceil(((($(this).scrollTop() + windowHeight) / documentHeight) * 100));
        console.log(percentageFromTop);
        return percentageFromTop;
    }






});