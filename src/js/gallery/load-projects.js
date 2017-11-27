(() => {

  const textSection = document.querySelector('.text-section');
  const textProjects = textSection.querySelector('.projects');
  const moreTextProjects = textSection.querySelector('.more-btn');

  const tinkerCADSection = document.querySelector('.nasa-3d-section');
  const tinkerProjects = tinkerCADSection.querySelector('.projects');
  const moreTinkerProjects = tinkerCADSection.querySelector('.more-btn');

  let shareData;

  ajax.get('https://script.google.com/a/thevillageschool.com/macros/s/AKfycbx8_cQR_z1yTAwDr0O2KyZ0fqtOvadlD2QabW7HIvYUB8OZRIDZ/exec')
  .then(data => {
    shareData = JSON.parse(data);
    shareData.projects.shown = 0;
    shareData.tinkerCAD.shown = 0;

    showNext(4, shareData.projects, textProjects);
    showNext(4, shareData.tinkerCAD, tinkerProjects);

    moreTextProjects.onclick = function () {
      showNext(10, shareData.projects, textProjects);
    };

    moreTinkerProjects.onclick = function () {
      showNext(10, shareData.tinkerCAD, tinkerProjects);
    };
  });



  function showNext(n, projects, parent) {
    const shown = projects.shown;
    const unshown = projects.slice(shown);

    n = (unshown.length >= n) ? n : unshown.length;

    for (let i = 0; i < n; i += 1) {
      renderProject(unshown[i], parent);
      projects.shown += 1;
    }
  }

  function renderProject(project, parent) {
    removeHTML('.loading-msg', parent);

    const a = document.createElement('a');
    a.setAttribute('href', 'https://' + project[2]);
    a.setAttribute('target', '_blank');
    a.classList.add('project');

    a.innerHTML = `
      <div class="project-title">${ project[1] }</div>
      <div class="project-author">${ project[0] }</div>
    `;
    parent.appendChild(a);
  }
})();
