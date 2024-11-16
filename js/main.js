let musicPlayer = document.querySelectorAll('.musicPlayerDiv');
let albumCover = document.querySelectorAll('.albumCoverImage');
let players = document.querySelectorAll('audio');

function hideAll() {
    musicPlayer.forEach(function(el) {
        el.style.display = 'none';
    });
}

hideAll();

albumCover.forEach(function(el) {
    el.onclick = (e) => {
        hideAll();

        switch(e.target.getAttribute('id')) {
            case 'dimensionanswerButton':
                document.querySelector('#uppersidedreamin')
                .style.display = 'block';
                players.forEach(function(el) {
                    el.pause();
                    el.currentTime = 0;
                });
                break;
            case 'manifestodayoneButton':
                document.querySelector('#shoutout')
                .style.display = 'block';
                players.forEach(function(el) {
                    el.pause();
                    el.currentTime = 0;
                });
                break;
            case 'orangebloodButton':
                document.querySelector('#blind')
                .style.display = 'block';
                players.forEach(function(el) {
                    el.pause();
                    el.currentTime = 0;
                });
                break;
            case 'romanceuntoldButton':
                document.querySelector('#youreyesonly')
                .style.display = 'block';
                players.forEach(function(el) {
                    el.pause();
                    el.currentTime = 0;
                });
                break;
        }
    }
});
