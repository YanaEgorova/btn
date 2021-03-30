const menuLinks = document.querySelectorAll('.js-nav__link');
const allProjects = document.querySelectorAll('.js-project');
const closeBtns = document.querySelectorAll('.js-project-close-btn');
const allProjectsOverlay = document.querySelectorAll('.project');
const paths = document.querySelectorAll('#project-overlay-svg path');

allProjects.forEach(project => {
  project.addEventListener('click', goToTheProject);
})
closeBtns.forEach(btn => {
  btn.addEventListener('click', closeProject);
})

function goToTheProject(e) {
  menuLinks.forEach(item => {
    item.classList.remove('nav__link--current')
  })
  let element = e.currentTarget;
  const projectId = element.getAttribute('id')
  document.body.classList.add('project-active');
  document.body.classList.add('animation');
  const indexes = [1, 0, 17, 5, 4, 22, 19, 2, 25, 14, 12, 21, 3, 27, 13, 7, 16, 24, 6, 15, 26, 20, 8, 18, 11, 9, 23, 10];
  let index = 0;
  const intervalId = setInterval(() => {
    const needIdx = indexes[index];
    paths[needIdx].style.display = 'block';
    index += 1;
    if (indexes.length === index) {
      clearInterval(intervalId)
    }
  }, 50)
  allProjectsOverlay.forEach(project => {
    if (project.dataset.projectid === projectId) {
      const projectTm = setTimeout(() => {
        project.classList.add('project-visible')
        clearTimeout(projectTm)
      }, 2000)
    } else {
      project.classList.add('project-none')
    }
  })
}

function closeProject(e) {
  let element = e.currentTarget;
  const projectId = element.getAttribute('id')
  allProjectsOverlay.forEach(project => {
    if (project.classList.contains('project-visible')) {
      project.classList.remove('project-visible')
    }
  })
  const indexes = [1, 0, 17, 5, 4, 22, 19, 2, 25, 14, 12, 21, 3, 27, 13, 7, 16, 24, 6, 15, 26, 20, 8, 18, 11, 9, 23, 10];
  let index = 0;
  const intervalId = setInterval(() => {
    const needIdx = indexes[index];
    paths[needIdx].style.display = 'none';
    index += 1;
    if (indexes.length === index) {
      clearInterval(intervalId)
    }
  }, 100)
  const tm = setTimeout(() => {
    document.body.classList.remove('project-active');
    document.body.classList.remove('animation');
  }, 3000)
  const howLink = document.querySelector('[data-linkid="how"]');
  howLink.classList.add('menu__link-current')
}

const allNextBtns = document.querySelectorAll('.next');
const allPrevBtns = document.querySelectorAll('.prev');
allNextBtns.forEach(btn => {
  btn.addEventListener('click', nextPageAnimation);
});
allPrevBtns.forEach(btn => {
  btn.addEventListener('click', prevPageAnimation);
});

function nextPageAnimation(e) {
  let element = e.currentTarget;
  const subParent = element.parentNode;
  const parent = subParent.parentNode;
  hasClass = parent.classList.contains('current-page');
  parent.classList.add('pt-page-moveToLeftEasing');
  parent.classList.add('pt-page-ontop');
  const nextSection = parent.nextElementSibling;
  nextSection.classList.add('pt-page-moveFromRight');
  nextSection.classList.add('current-page');
  const timeout = setTimeout(() => {
    parent.classList.remove('pt-page-moveToLeftEasing');
    parent.classList.remove('pt-page-ontop');
    nextSection.classList.remove('pt-page-moveFromRight');
    parent.classList.remove('current-page');
    // setSectionWrapHeight();
  }, 1000);
}

function prevPageAnimation(e) {
  let element = e.currentTarget;
  const subParent = element.parentNode;
  const parent = subParent.parentNode;
  hasClass = parent.classList.contains('current-page');
  parent.classList.add('pt-page-moveToRightEasing');
  parent.classList.add('pt-page-ontop');
  const prevSection = parent.previousElementSibling;
  prevSection.classList.add('pt-page-moveFromLeft');
  prevSection.classList.add('current-page');
  const timeout = setTimeout(() => {
    parent.classList.remove('pt-page-moveToRightEasing');
    parent.classList.remove('pt-page-ontop');
    prevSection.classList.remove('pt-page-moveFromLeft');
    parent.classList.remove('current-page');
    // setSectionWrapHeight();
  }, 1000);
}