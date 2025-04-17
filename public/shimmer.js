(() => {
  const shimmerSound = new Audio('https://media1.vocaroo.com/mp3/16FVkPyKDYG8');
  const shimmer = document.querySelector('.shimmer-beam');

  document.addEventListener('click', () => {
    shimmerSound.volume = 0.5;

    shimmerSound.play().then(() => {
      console.log("✨ Sound unlocked + shimmer synced");

      setInterval(() => {
        shimmerSound.currentTime = 0;
        shimmerSound.play();

        shimmer.classList.add('active');
        setTimeout(() => shimmer.classList.remove('active'), 2000);
      }, 30000);

    }).catch((err) => {
      console.error("🔇 Audio play blocked:", err);
    });
  }, { once: true });
})();
