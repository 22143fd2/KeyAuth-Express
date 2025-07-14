const form = document.getElementById('loginForm');
const message = document.getElementById('message');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  message.textContent = '';
  message.className = 'msg';

  const data = {
    username: form.username.value.trim(),
    password: form.password.value,
  };

  try {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (result.success) {
      // Save JWT token to localStorage with your key
      localStorage.setItem('_DO_NOT_SHARE_X_TOKEN', result.auth);

      message.textContent = 'Login successful!';
      message.classList.add('success');
      form.reset();

      // Optionally redirect after a delay

    } else {
      message.textContent = result.msg || 'Login failed.';
      message.classList.add('error');
    }
  } catch (error) {
    message.textContent = 'Network or server error.';
    message.classList.add('error');
  }
});
