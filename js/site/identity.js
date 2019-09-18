if (!netlifyIdentity.currentUser()) {
  netlifyIdentity.on('login', () => {
    window.location = '/admin/';
  });
}
