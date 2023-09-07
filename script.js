// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });

    // Toggle between coding and music portfolios
    const codingPortfolioLink = document.querySelector('a[href="#coding-portfolio"]');
    const musicPortfolioLink = document.querySelector('a[href="#music-portfolio"]');
    const codingPortfolio = document.getElementById('coding-portfolio');
    const musicPortfolio = document.getElementById('music-portfolio');

    codingPortfolioLink.addEventListener('click', () => {
        codingPortfolio.style.display = 'block';
        musicPortfolio.style.display = 'none';
    });

    musicPortfolioLink.addEventListener('click', () => {
        musicPortfolio.style.display = 'block';
        codingPortfolio.style.display = 'none';
    });

    // JavaScript to make the navigation bar sticky
    const navbar = document.getElementById("navbar");
    let lastScrollTop = 0;

    window.addEventListener("scroll", () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            navbar.style.top = "-80px"; // Hide the navbar when scrolling down
        } else {
            navbar.style.top = "0"; // Show the navbar when scrolling up
        }

        lastScrollTop = scrollTop;
    });

    const audioPlayer = document.getElementById('audio-player');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const volumeSlider = document.getElementById('volume-slider');

    // Play or pause the audio
    playPauseBtn.addEventListener('click', () => {
        if (audioPlayer.paused || audioPlayer.ended) {
            audioPlayer.play();
            playPauseBtn.textContent = 'Pause';
        } else {
            audioPlayer.pause();
            playPauseBtn.textContent = 'Play';
        }
    });

    // Update volume
    volumeSlider.addEventListener('input', () => {
        audioPlayer.volume = volumeSlider.value;
    });

    // Update button text when audio ends
    audioPlayer.addEventListener('ended', () => {
        playPauseBtn.textContent = 'Play';
    });


});
