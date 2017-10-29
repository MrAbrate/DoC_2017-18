
(function () {
  console.log('share.js')
  const btn = document.querySelector('#share-modal-btn');
  const modal = document.querySelector('#share-modal');
  const instructionBtns = modal.querySelectorAll('.instruction-btn')
  const instructionDivs = modal.querySelectorAll('.instructions > div');

  instructionBtns.forEach(function(btn) {
    btn.onclick = function () {
      btn.parentNode.classList.add('small');
      const instructions = document.getElementById(this.getAttribute('data-target'));

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
