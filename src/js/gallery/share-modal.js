(function () {
  const modal = document.querySelector('#share-modal');
  const instructionButtons = modal.querySelector('.instruction-buttons');
  const instructionDivs = modal.querySelectorAll('.instructions > div');
  const close = modal.querySelector('.close-modal');

  close.addEventListener('click', function () {
    modal.style.display = 'none';
    instructionButtons.classList.remove('small');
    instructionDivs.forEach(div => {
      div.classList.remove('show');
    });
  });

  instructionButtons.querySelectorAll('.instruction-btn').forEach((btn) => {
    btn.onclick = function () {
      instructionButtons.classList.add('small');
      const dataTarget = this.getAttribute('data-target');
      const instructions = document.getElementById(dataTarget);

      instructionDivs.forEach(div => {
        if (div === instructions) {
          div.classList.add('show');
        } else {
          div.classList.remove('show');
        }
      });

    };
  });
})();
