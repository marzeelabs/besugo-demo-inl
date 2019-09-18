netlifyIdentity.on('login', () => {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has('p')) {
    window.location = '/admin/';
  }
});
