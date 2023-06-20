const menuItems = document.querySelectorAll('nav li');

menuItems.forEach(item => {
  const submenu = item.querySelector('ul');

  if (submenu) {
    item.classList.add('has-submenu');

    item.addEventListener('click', event => {
      event.preventDefault();

      submenu.classList.toggle('open');
    });
  }
});