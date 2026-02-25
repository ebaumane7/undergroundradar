// BLOG DATA
const blogPosts = [
  {
    artist: "Lo-Fi Explorer",
    genre: "Lo-Fi",
    description: "Atmospheric late-night beats with deep textures.",
    track: "https://soundcloud.com/forss/flickermood",
    date: "2026-02-10"
  },
  {
    artist: "Neon Dreams",
    genre: "Synthwave",
    description: "Retro-inspired synth melodies with modern production.",
    track: "https://soundcloud.com/forss/soulhack",
    date: "2026-02-05"
  }
];

// TOP ARTISTS DATA
const topArtists = [
  {
    rank: 1,
    name: "Midnight Static",
    genre: "Indie Electronic",
    followers: "2.1K",
    track: "https://soundcloud.com/forss/flickermood"
  },
  {
    rank: 2,
    name: "Echo Bloom",
    genre: "Ambient",
    followers: "1.4K",
    track: "https://soundcloud.com/forss/soulhack"
  }
];


// RENDER BLOG
const blogContainer = document.getElementById("blog-container");
if (blogContainer) {
  blogPosts.forEach(post => {
    blogContainer.innerHTML += `
      <div class="card">
        <h3>${post.artist}</h3>
        <p><strong>Genre:</strong> ${post.genre}</p>
        <p>${post.description}</p>
        <p><small>${post.date}</small></p>
        <iframe 
          width="100%" 
          height="166" 
          scrolling="no" 
          frameborder="no" 
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=${post.track}">
        </iframe>
      </div>
    `;
  });
}


// RENDER TOP
const topContainer = document.getElementById("top-container");
if (topContainer) {
  topArtists.forEach(artist => {
    topContainer.innerHTML += `
      <div class="card">
        <p class="rank">#${artist.rank}</p>
        <h3>${artist.name}</h3>
        <p><strong>Genre:</strong> ${artist.genre}</p>
        <p><strong>Followers:</strong> ${artist.followers}</p>
        <iframe 
          width="100%" 
          height="166" 
          scrolling="no" 
          frameborder="no" 
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=${artist.track}">
        </iframe>
      </div>
    `;
  });
}
