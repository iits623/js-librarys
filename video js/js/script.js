videojs("my-video").ready(function (e) {
    this.hotkeys({
        volumeStep: 0.1,
        seekStep: 5,
        enableModifiersForNumbers: false,
        enableMute: true,
        enableFullscreen: true,
    });
    // this.watermark({
    //     file: 'media/sticker.jpg',
    //     xpos: 50,
    //     ypos: 50,
    //     xrepeat: 0,
    //     opacity: 0.5,
    // });
})