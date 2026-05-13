/* ══════════════════════════════════════════════════════════════
   STORIES PAGE - YouTube Video Player
   ══════════════════════════════════════════════════════════════ */

// Video Player Manager
class VideoPlayer {
  constructor() {
    this.mainIframe = document.getElementById('mainVideoIframe');
    this.mainTitle = document.getElementById('mainVideoTitle');
    this.mainChannel = document.getElementById('mainVideoChannel');
    this.mainViews = document.getElementById('mainVideoViews');
    this.thumbnails = document.querySelectorAll('.video-thumb-sm');
    
    this.init();
  }

  init() {
    // Add click handlers to all video thumbnails
    this.thumbnails.forEach(thumb => {
      thumb.addEventListener('click', () => this.playVideo(thumb));
    });
  }

  playVideo(thumbnail) {
    // Get video data from data attributes
    const videoId = thumbnail.getAttribute('data-video-id');
    const title = thumbnail.getAttribute('data-title');
    const channel = thumbnail.getAttribute('data-channel');
    const views = thumbnail.getAttribute('data-views');

    // Update main video player
    this.mainIframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    this.mainTitle.textContent = title;
    this.mainChannel.textContent = channel;
    this.mainViews.textContent = views;

    // Scroll to video player smoothly
    document.getElementById('mainVideoPlayer').scrollIntoView({ 
      behavior: 'smooth', 
      block: 'center' 
    });

    // Add active state to clicked thumbnail
    this.thumbnails.forEach(t => t.classList.remove('active'));
    thumbnail.classList.add('active');
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new VideoPlayer();
  });
} else {
  new VideoPlayer();
}
