$(document).ready(function () {
    setTimeout(() => {
        $('#landing-title-container-text').animate({ opacity: 1 }, 3000);
        // $('#landing-title-container-arrow').animate({ opacity: 1 }, 1000);
        // $("#landing-title-container-arrow").fadeIn();
    }, 500);
    setTimeout(() => {
        // the time in the query is the time it takes to change the opacity to 1
        $('#landing-title-container-arrow').animate({ opacity: 1 }, 3000);
        // $('#landing-title-container-arrow').animate({ opacity: 1 }, 1000);
        // $("#landing-title-container-arrow").fadeIn();
    }, 3000);

    //  now i need to make the arrow blink
});
