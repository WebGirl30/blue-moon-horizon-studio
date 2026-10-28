const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

if (toggle && nav) {

  toggle.addEventListener('click', () => {

    nav.classList.toggle('open');

    toggle.setAttribute(
      'aria-expanded',
      nav.classList.contains('open')
    );

  });


  nav.querySelectorAll('a').forEach(a =>

    a.addEventListener('click', () =>

      nav.classList.remove('open')

    )

  );

}



document.querySelectorAll('[data-year]').forEach(

  el =>

    el.textContent = new Date().getFullYear()

);



const observer = new IntersectionObserver(

  entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add('visible');

        observer.unobserve(entry.target);

      }

    });

  },

  {
    threshold: .12
  }

);



document.querySelectorAll('.reveal').forEach(

  el => observer.observe(el)

);



const filterButtons =
  document.querySelectorAll('.filter-btn');


const portfolioItems =
  document.querySelectorAll('[data-category]');



filterButtons.forEach(

  btn =>

    btn.addEventListener('click', () => {


      filterButtons.forEach(

        b => b.classList.remove('active')

      );


      btn.classList.add('active');


      const filter = btn.dataset.filter;


      portfolioItems.forEach(item => {

        item.style.display =

          (
            filter === 'all' ||

            item.dataset.category
              .split(/\s+/)
              .includes(filter)

          )

          ? ''

          : 'none';

      });

    })

);





// ==============================
// PORTFOLIO PROJECT GALLERY
// Campus Eats
// ==============================


const projectCard =
  document.querySelector(
    '[data-project="campus-eats"]'
  );


const projectModal =
  document.querySelector(
    '#campus-eats-modal'
  );


const galleryMain =
  document.querySelector(
    '#campus-eats-main'
  );


const galleryThumbs =
  document.querySelectorAll(
    '.gallery-thumb'
  );



function openProjectModal() {

  if (!projectModal) return;


  projectModal.classList.add('open');


  projectModal.setAttribute(
    'aria-hidden',
    'false'
  );


  document.body.classList.add(
    'modal-open'
  );


  projectModal
    .querySelector('.project-modal-close')
    ?.focus();

}



function closeProjectModal() {

  if (!projectModal) return;


  projectModal.classList.remove('open');


  projectModal.setAttribute(
    'aria-hidden',
    'true'
  );


  document.body.classList.remove(
    'modal-open'
  );


  projectCard?.focus();

}



if (projectCard) {

  projectCard.addEventListener(

    'click',

    openProjectModal

  );


  projectCard.addEventListener(

    'keydown',

    e => {

      if (

        e.key === 'Enter' ||

        e.key === ' '

      ) {

        e.preventDefault();

        openProjectModal();

      }

    }

  );

}



projectModal
  ?.querySelectorAll(
    '[data-close-modal]'
  )
  .forEach(

    el =>

      el.addEventListener(

        'click',

        closeProjectModal

      )

  );



galleryThumbs.forEach(

  button =>

    button.addEventListener(

      'click',

      () => {


        galleryThumbs.forEach(

          b =>

            b.classList.remove(
              'active'
            )

        );


        button.classList.add(
          'active'
        );


        if (galleryMain) {

          galleryMain.src =
            button.dataset.gallerySrc;


          galleryMain.alt =

            button.dataset.galleryAlt ||

            'Campus Eats project screenshot';

        }

      }

    )

);



document.addEventListener(

  'keydown',

  e => {

    if (

      e.key === 'Escape' &&

      projectModal
        ?.classList
        .contains('open')

    ) {

      closeProjectModal();

    }

  }

);





// ==============================
// NAN'S SOUL KITCHEN
// VIDEO DEMO MODAL
// ==============================


const nanCard =
  document.querySelector(
    '[data-project="nans-soul-kitchen"]'
  );


const nanModal =
  document.querySelector(
    '#nans-soul-kitchen-modal'
  );


const nanVideo =
  document.querySelector(
    '#nans-soul-kitchen-video'
  );



function openNanModal() {

  if (!nanModal) return;


  nanModal.classList.add(
    'open'
  );


  nanModal.setAttribute(
    'aria-hidden',
    'false'
  );


  document.body.classList.add(
    'modal-open'
  );


  nanModal
    .querySelector(
      '.project-modal-close'
    )
    ?.focus();

}



function closeNanModal() {

  if (!nanModal) return;


  nanModal.classList.remove(
    'open'
  );


  nanModal.setAttribute(
    'aria-hidden',
    'true'
  );


  document.body.classList.remove(
    'modal-open'
  );


  if (nanVideo) {

    nanVideo.pause();

  }


  nanCard?.focus();

}



if (nanCard) {

  nanCard.addEventListener(

    'click',

    openNanModal

  );


  nanCard.addEventListener(

    'keydown',

    e => {

      if (

        e.key === 'Enter' ||

        e.key === ' '

      ) {

        e.preventDefault();

        openNanModal();

      }

    }

  );

}



document
  .querySelectorAll(
    '[data-close-modal="nans-soul-kitchen"]'
  )
  .forEach(

    el =>

      el.addEventListener(

        'click',

        closeNanModal

      )

  );



document.addEventListener(

  'keydown',

  e => {

    if (

      e.key === 'Escape' &&

      nanModal
        ?.classList
        .contains('open')

    ) {

      closeNanModal();

    }

  }

);