/* BookSwap MVP Script 
    Handles: Navigation, Modals, and Basic Form Interactions
*/

// --- 1. Navigation Logic ---
function switchTab(tabName, element) {
    // Hide all main sections
    const sections = document.querySelectorAll('.view-section');
    sections.forEach(section => section.style.display = 'none');

    // Remove 'active' class from all nav items
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => item.classList.remove('active'));

    // Show the target section
    if (tabName === 'home') {
        document.getElementById('home-section').style.display = 'block';
    } else if (tabName === 'upload') {
        document.getElementById('upload-section').style.display = 'block';
    }

    // Set clicked nav item as active
    if (element) {
        element.classList.add('active');
    }
}

// --- 2. Modal Logic ---
const modal = document.getElementById('authModal');

function toggleModal(show) {
    modal.style.display = show ? 'flex' : 'none';
}

// Close modal if clicking outside the white card
window.onclick = function(event) {
    if (event.target == modal) {
        toggleModal(false);
    }
}

// --- 3. Auth Tab Switching (Login vs Signup) ---
function switchAuth(type) {
    const tabs = document.querySelectorAll('.tab-btn');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    if (type === 'login') {
        tabs[0].classList.add('active');
        tabs[1].classList.remove('active');
        loginForm.style.display = 'flex';
        signupForm.style.display = 'none';
    } else {
        tabs[0].classList.remove('active');
        tabs[1].classList.add('active');
        loginForm.style.display = 'none';
        signupForm.style.display = 'flex';
    }
}

// --- 4. Form Submissions (Mock Logic) ---

function handleLogin(e) {
    e.preventDefault(); // Stop page reload
    
    // Simulate API call
    const email = e.target.querySelector('input[type="email"]').value;
    alert(`Welcome back! Logged in as: ${email}`);
    
    // Update UI to look logged in
    toggleModal(false);
    document.querySelector('.u-name').innerText = "Student User";
    document.querySelector('.u-points').innerText = "150 Points";
    document.querySelector('.btn-primary').innerText = "Log Out";
}

function handleSignup(e) {
    e.preventDefault();
    alert("Account created successfully! Please log in.");
    switchAuth('login');
}

function handleUpload(e) {
    e.preventDefault();
    alert("Book uploaded successfully! It is pending admin approval.");
    e.target.reset(); // Clear form
    switchTab('home', document.querySelectorAll('.nav-item')[0]); // Go back to home
}