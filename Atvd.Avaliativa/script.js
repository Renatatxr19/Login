document.getElementById("loginForm").addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Login com sucesso');
    this.reset();
});
