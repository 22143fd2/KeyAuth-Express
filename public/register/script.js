
    const form = document.getElementById('registerForm');
    const message = document.getElementById('message');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      message.textContent = '';
      message.className = 'msg';

      const data = {
        username: form.username.value.trim(),
        email: form.email.value.trim(),
        password: form.password.value,
        key: form.key.value.trim(),
      };

      try {
        const response = await fetch('/api/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });

        const result = await response.json();

        if (result.success) {
          message.textContent = 'Registration successful!';
          message.classList.add('success');
          form.reset();
        } else {
          message.textContent = result.msg || 'Registration failed.';
          message.classList.add('error');
        }
      } catch (error) {
        message.textContent = 'Network or server error.';
        message.classList.add('error');
      }
    });
