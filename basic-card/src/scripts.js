function updateStats() {
  // Twitter stats we got
  const stats = {
    posts: '4,837',
    followers: '42',
    following: '224'
  }

  document.querySelector('.posts').textContent = stats.posts
  document.querySelector('.followers').textContent = stats.followers
  document.querySelector('.following').textContent = stats.following
}

// Update stats when the page loads
document.addEventListener('DOMContentLoaded', updateStats)