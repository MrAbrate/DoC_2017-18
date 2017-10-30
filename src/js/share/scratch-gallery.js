(function () {
  const scratchGallery = document.querySelector('#scratch-gallery');
  const moreBtn = document.querySelector('#load-more-scratch-projects');
  let page = 1;

  loadMoreProjects();
  moreBtn.onclick = loadMoreProjects;

  function loadMoreProjects() {
    ajax.get('https://scratch.mit.edu/site-api/projects/in/4387897/' + page)
    .then(data => {
      const temp = document.createElement('div')
      temp.innerHTML = data;

      const projects = temp.querySelectorAll('.project');

      projects.forEach(project => {
        const aTags = project.querySelectorAll('a');
        aTags.forEach(a => {
          a.href = 'https://scratch.mit.edu' + a.getAttribute('href')
          a.setAttribute('target', '_blank');
        });
        scratchGallery.appendChild(project);
      });

      page += 1;
      lazyLoad(scratchGallery);
    })
    .catch(err => console.log(err));
  }

  function lazyLoad(parent) {
    const imgs = parent.querySelectorAll('.lazy');
    imgs.forEach(function (img) {
      const imgURL = img.getAttribute('data-original');
      img.src = 'https:' + imgURL;
      img.classList.remove('lazy');
    });
  }
})();
