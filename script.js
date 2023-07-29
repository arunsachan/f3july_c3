document.addEventListener('DOMContentLoaded', () => {
    const signupPage = document.getElementById('signup');
    const profilePage = document.getElementById('profile');
    const signupForm = document.getElementById('signupForm');
    const signupMessage = document.getElementById('signupMessage');
    const profileUsername = document.getElementById('profileUsername');
    const logoutBtn = document.getElementById('logoutBtn');
  
    const accessToken = localStorage.getItem('access_token');
    if (accessToken) {
      showProfilePage();
    } else {
      showSignupPage();
    }
  
    function showSignupPage() {
      signupPage.style.display = 'block';
      profilePage.style.display = 'none';
    }
  
    function showProfilePage() {
      signupPage.style.display = 'none';
      profilePage.style.display = 'block';
      profileUsername.textContent = localStorage.getItem('username');
    }
  
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
  
      const accessToken = generateAccessToken();
      localStorage.setItem('username', username);
      localStorage.setItem('access_token', accessToken);
  
      signupMessage.innerHTML = '<div id="success">Signup successful!</div>';
      signupForm.reset();
      showProfilePage();
    });
  
    logoutBtn.addEventListener('click', () => {
      localStorage.clear();
      showSignupPage();
    });
  
    function generateAccessToken() {
      return Math.random().toString(36).substr(2, 16);
    }
  });