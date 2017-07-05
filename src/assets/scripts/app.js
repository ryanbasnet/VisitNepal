var video = function ($) {

    var video = $('.intro-video');

    var pause = function () {

        var isVideoVisible = video.visible();
        (isVideoVisible == true) ? video.get(0).play() : video.get(0).pause();

    }

    var controlAudio = function () {

        var audioController = $('.video-audio');
        var volume = $('.video-audio .volume');
        var isAudioOn = volume.hasClass('fa-volume-up');
        if (isAudioOn) {

            volume.removeClass('fa-volume-up');
            volume.addClass('fa-volume-off');
            video.prop('muted', true);

        } else {

            volume.removeClass('fa-volume-off');
            volume.addClass('fa-volume-up');
            video.prop('muted', false);

        }
        console.log(isAudioOn);
    };


    //attach event handler on body scroll
    $(window).on('scroll', pause);

    $(".video-audio").on('click', controlAudio);




}(jQuery);