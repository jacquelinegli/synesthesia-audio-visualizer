$(document).ready(function () {
    // fade in the text after .5 seconds
    setTimeout(() => {
        $('#landing-title-container-text').animate({ opacity: 1 }, 3000);
    }, 500);

    // fade in the arrow after 3 seconds
    setTimeout(() => {
        // the time in the query is the time it takes to change the opacity to 1
        $('#landing-title-container-arrow').animate({ opacity: 1 }, 3000);
    }, 3000);

    // make the arrow blink after 4 seconds
    setTimeout(() => {

        // one round of blinking
        function blink_text() {
            $('.blink').fadeOut(500);
            $('.blink').fadeIn(500);
        }

        // repeat blink every second
        setInterval(blink_text, 1000);
    }, 4000);
});
