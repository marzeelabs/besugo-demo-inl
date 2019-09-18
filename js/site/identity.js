console.log({ test1: netlifyIdentity.currentUser() });

netlifyIdentity.init();

console.log({ test2: netlifyIdentity.currentUser() });

netlifyIdentity.on('init', (user) => { console.log({ user, test3: netlifyIdentity.currentUser() }); });

netlifyIdentity.on('login', () => {
  window.location = '/admin/';
});
