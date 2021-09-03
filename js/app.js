const navbar = {
   container: document.querySelector('.header'),
   navButton: document.querySelector('.navigation__icon-box'),
   toggle: function () {
      this.container.addEventListener('click', (e) => {
         const target = e.target;
         if (target.classList.contains('toggle-navbar')) {
            this.container.classList.toggle('open');
         }
      });
   },
};

navbar.toggle();
