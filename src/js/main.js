const ajax = {
  get(url) {
    return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();
      request.open('GET', url, true);

      request.onload = function() {
        if (this.status >= 200 && this.status < 400) {
          // Success!
          resolve(this.response);
        } else {
          // We reached our target server, but it returned an error
          reject(undefined);
        }
      };

      request.onerror = function() {
        // There was a connection error of some sort
        reject(undefined);
      };

      request.send();
    });
  }
};

function removeHTML(selector, parent) {
  const searchNode = parent || document;
  const elements = searchNode.querySelectorAll(selector);
  for (let i = 0; i < elements.length; i += 1) {
    const el = elements[i];
    el.parentNode.removeChild(el);
  }
}


// Modals
(function () {
  const modalBtns = document.querySelectorAll('.modal-btn');
  const modalCloseBtns = document.querySelectorAll('.close-modal');

  modalBtns.forEach(btn => {
    const target = btn.getAttribute('data-target');
    const modal = document.getElementById(target);
    btn.addEventListener('click', function () {
      modal.style.display = 'block';
      console.log('btn clicked')
    });
  });

  modalCloseBtns.forEach(btn => {
    const target = btn.getAttribute('data-target');
    const modal = document.getElementById(target);
    btn.addEventListener('click', function () {
      modal.style.display = 'none';
      console.log('btn clicked')
    });
  });
})();

// Random Colors
(() => {
  const selectors = ['.activity'];
  selectors.forEach(selector => {
    const elements = document.querySelectorAll(selector);
    for (let i = 0; i < elements.length; i += 1) {
      const el = elements[i];
      const hue = Math.floor(Math.random() * 360);
      const color = `hsl(${ hue }, 90%, 65%)`;
      el.style.backgroundColor = color;
    }
  });
})();
