document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('videoPlayer');

    // Cambia esto por tu URL de ngrok con el stream HLS activo
    const streamUrl = 'https://4d7d-45-189-116-231.ngrok-free.app/hls/test.m3u8';

    function loadVideo() {
        if (Hls.isSupported()) {
            const hls = new Hls();
            hls.loadSource(streamUrl);
            hls.attachMedia(video);
            hls.on(Hls.Events.MANIFEST_PARSED, function() {
                video.play();
            });
        } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
            video.src = streamUrl;
            video.addEventListener('loadedmetadata', function() {
                video.play();
            });
        } else {
            alert('Tu navegador no soporta la reproducción de este video.');
        }
    }

    loadVideo();
});