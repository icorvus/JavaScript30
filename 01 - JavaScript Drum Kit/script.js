const keys = document.querySelectorAll('.key');
keys.forEach((key) => {
  document.addEventListener('keydown', e => {
    if (e.keyCode == key.getAttribute('data-key')) {
      key.classList.toggle('playing');
    };
  });
  document.addEventListener('keyup', e => {
    if (e.keyCode == key.getAttribute('data-key')) {
      key.classList.toggle('playing');
    };
  });
});

const sounds = document.querySelectorAll('audio');
sounds.forEach((sound) => {
  document.addEventListener('keydown', e => {
    if (e.keyCode == sound.getAttribute('data-key')) {
      sound.play();
    };
  });
});