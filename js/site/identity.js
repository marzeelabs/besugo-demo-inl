const redirectToAdmin = () => {
  window.location = '/admin/';
};

netlifyIdentity.on('login', redirectToAdmin);

if (netlifyIdentity.currentUser()) {
  redirectToAdmin();
}
