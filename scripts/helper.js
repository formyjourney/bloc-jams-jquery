class Helper {

    playPauseAndUpdate(song) {
        $('.total-time').text(player.getDuration() );
        player.playPause(song);
    }
}

const helper = new Helper();
