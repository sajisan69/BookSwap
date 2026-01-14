const booksDB = [
    { id: 1, title: 'Clean Code', author: 'Robert C. Martin', category: 'Technology', cost: 50, trending: true, rating: 4.8, image: 'images/cleancode.jpg' },
    { id: 2, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', category: 'Fiction', cost: 20, trending: true, rating: 4.5, image: 'images/greatgatsby.jpg' },
    { id: 3, title: 'Astrophysics', author: 'Neil deGrasse Tyson', category: 'Science', cost: 40, trending: true, rating: 4.9, image: 'images/astrophysics.jpg' },
    { id: 4, title: 'UI Design 2025', author: 'Sarah Jenkins', category: 'Technology', cost: 60, trending: false, rating: 4.2, image: 'images/uidesign.jpg' },
    { id: 5, title: 'Modern Biology', author: 'Dr. A. P. Raven', category: 'Science', cost: 35, trending: false, rating: 4.0, image: 'images/biology.jpg' },
    { id: 6, title: 'Harry Potter', author: 'J.K. Rowling', category: 'Fiction', cost: 45, trending: true, rating: 4.7, image: 'images/harrypotter.jpg' },
    { id: 7, title: 'History of Rome', author: 'Mary Beard', category: 'Fiction', cost: 30, trending: false, rating: 3.8, image: 'images/rome.jpg' },
    { id: 8, title: 'Python Mastery', author: 'Eric Matthes', category: 'Technology', cost: 55, trending: false, rating: 4.6, image: 'images/python.jpg' },
    { id: 9, title: 'Chemistry Basics', author: 'John Moore', category: 'Science', cost: 25, trending: false, rating: 4.1, image: 'images/chemistry.jpg' },
    { id: 10, title: 'The Alchemist', author: 'Paulo Coelho', category: 'Fiction', cost: 15, trending: true, rating: 4.3, image: 'images/TheAlchemist.jpg' },
    { id: 11, title: 'Data Structures', author: 'Gayle L. McDowell', category: 'Technology', cost: 70, trending: false, rating: 4.4, image: 'images/DSA.jpg' },
    { id: 12, title: 'Quantum Physics', author: 'Richard Feynman', category: 'Science', cost: 80, trending: true, rating: 4.9, image: 'images/Qphysics.jpg' },
    { id: 13, title: 'To Kill a Mockingbird', author: 'Harper Lee', category: 'Fiction', cost: 30, trending: false, rating: 4.6, image: 'images/mockingbird.jpg' },
    { id: 14, title: 'Machine Learning', author: 'Andrew Ng', category: 'Technology', cost: 90, trending: true, rating: 4.8, image: 'images/ML.jpg' },
    { id: 15, title: 'Genetics 101', author: 'Dr. Siddra Ijaz', category: 'Science', cost: 45, trending: false, rating: 4.2, image: 'images/genetics.png' },
    { id: 16, title: '1984', author: 'George Orwell', category: 'Fiction', cost: 25, trending: true, rating: 4.5, image: 'images/1984.jpg' },
    { id: 17, title: 'Web Development', author: 'Angela Yu', category: 'Technology', cost: 65, trending: false, rating: 4.3, image: 'images/Bookswap2.png' },
    { id: 18, title: 'Environmental Science', author: 'G. Tyler Miller', category: 'Science', cost: 50, trending: true, rating: 4.7, image: 'images/Bookswap2.png' },
    { id: 19, title: 'The Hobbit', author: 'J.R.R. Tolkien', category: 'Fiction', cost: 40, trending: false, rating: 4.4, image: 'images/Bookswap2.png' },
    { id: 20, title: 'Cybersecurity Basics', author: 'Kevin Mitnick', category: 'Technology', cost: 75, trending: true, rating: 4.6, image: 'images/Bookswap2.png' },   
    { id: 21, title: 'Relativity Theory', author: 'Albert Einstein', category: 'Science', cost: 85, trending: false, rating: 4.5, image: 'images/Bookswap2.png' },
    { id: 22, title: 'Pride and Prejudice', author: 'Jane Austen', category: 'Fiction', cost: 20, trending: true, rating: 4.3, image: 'images/Bookswap2.png' }
];

/* ================= INITIALIZATION ================= */
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('bookswap_theme');
    if(savedTheme === 'dark') document.body.classList.add('dark-mode');
    
    checkLoginState();
    
    const trendingBooks = booksDB.filter(b => b.trending);
    renderBooks(trendingBooks, 'featuredGrid');
    renderBooks(booksDB, 'booksGrid');

    setupEventListeners();
});

function setupEventListeners() {
    document.getElementById('searchInput').addEventListener('input', (e) => {
        const val = e.target.value.toLowerCase();
        const filtered = booksDB.filter(book => 
            book.title.toLowerCase().includes(val) || 
            book.category.toLowerCase().includes(val) ||
            book.author.toLowerCase().includes(val)
        );
        renderBooks(filtered, 'booksGrid');
        
        const featuredGrid = document.getElementById('featuredGrid');
        const trendingHeader = document.querySelector('.section-header h3 i.fa-fire').parentElement.parentElement;
        
        if(val.length > 0) {
            featuredGrid.style.display = 'none';
            trendingHeader.style.display = 'none';
        } else {
            featuredGrid.style.display = 'grid';
            trendingHeader.style.display = 'flex';
        }
    });

    document.getElementById('themeToggleBtn').addEventListener('click', toggleTheme);
    document.getElementById('loginForm').addEventListener('submit', handleLoginSubmit);
    document.getElementById('signupForm').addEventListener('submit', handleSignupSubmit);
    document.getElementById('logoutBtn').addEventListener('click', handleLogout);
    
    document.getElementById('fileInput').addEventListener('change', (e) => {
        if(e.target.files.length > 0) {
            document.getElementById('uploadConfirmBtn').disabled = false;
            document.getElementById('fileNameDisplay').textContent = e.target.files[0].name;
        }
    });
    document.getElementById('uploadConfirmBtn').addEventListener('click', handleUpload);
}

/* ================= CORE LOGIC ================= */
function isLoggedIn() {
    return localStorage.getItem('bookswap_user') !== null;
}

function checkLoginState() {
    const user = JSON.parse(localStorage.getItem('bookswap_user'));
    const sidebarProfile = document.getElementById('sidebarProfile');
    const logoutBtn = document.getElementById('logoutBtn');
    const loginBtn = document.getElementById('loginBtn');
    
    if (user) {
        document.body.classList.add('user-logged-in');
        sidebarProfile.style.display = 'flex';
        document.getElementById('userNameDisplay').textContent = user.username;
        document.getElementById('userPoints').textContent = user.points;
        logoutBtn.style.display = 'flex';
        loginBtn.style.display = 'none';
        
        if(!localStorage.getItem('cookies_accepted')) {
            setTimeout(() => document.getElementById('cookieBanner').classList.add('show'), 1500);
        }
    } else {
        document.body.classList.remove('user-logged-in');
        sidebarProfile.style.display = 'none';
        logoutBtn.style.display = 'none';
        loginBtn.style.display = 'flex';
    }
}

function renderBooks(books, containerId) {
    const container = document.getElementById(containerId);
    if(!container) return;

    const user = JSON.parse(localStorage.getItem('bookswap_user'));
    const wishlistIds = (user && user.wishlist) ? user.wishlist : [];

    container.innerHTML = books.map(book => {
        const isWished = wishlistIds.includes(book.id) ? 'active' : '';
        return `
        <div class="book-card">
            <div class="cover-wrapper">
                <img src="${book.image}" alt="${book.title}" class="book-cover-img">
                <button class="wishlist-btn ${isWished}" onclick="handleWishlistToggle(${book.id}, this)">
                    <i class="fas fa-heart"></i>
                </button>
            </div>
            <div class="book-info">
                <div class="book-cat">${book.category}</div>
                <h4>${book.title}</h4>
                <div class="book-author">by ${book.author}</div>
                <div class="book-meta">
                    <span class="rating"><i class="fas fa-star"></i> ${book.rating}</span>
                </div>
                <div class="card-bottom">
                    <span class="cost-tag">${book.cost} Pts</span>
                    <button class="btn-dl" onclick="attemptDownload(${book.id}, ${book.cost})">
                        Download
                    </button>
                </div>
            </div>
        </div>
        `;
    }).join('');
}

function renderHistory() {
    const user = JSON.parse(localStorage.getItem('bookswap_user'));
    const container = document.getElementById('historyList');
    if(!user || !user.history || user.history.length === 0) {
        container.innerHTML = '<div class="empty-state"><i class="fas fa-clock"></i><p>No downloads yet.</p></div>';
        return;
    }
    container.innerHTML = user.history.map(item => `
        <div class="history-item">
            <div>
                <strong>${item.title}</strong><br>
                <small style="color:var(--text-muted)">${item.date}</small>
            </div>
            <span style="color:var(--danger)">-${item.cost} pts</span>
        </div>
    `).join('');
}

function renderUploads() {
    const user = JSON.parse(localStorage.getItem('bookswap_user'));
    const container = document.getElementById('myUploadsList');
    
    if(!user || !user.uploads || user.uploads.length === 0) {
        container.innerHTML = '<div class="empty-state"><i class="fas fa-folder-open"></i><p>No uploads yet.</p></div>';
        return;
    }

    container.innerHTML = user.uploads.map(item => `
        <div class="history-item upload-item">
            <div class="upload-info">
                <i class="fas fa-file-pdf" style="color: var(--danger); font-size: 1.2rem;"></i>
                <div>
                    <strong>${item.name}</strong><br>
                    <small style="color:var(--text-muted)">${item.date}</small>
                </div>
            </div>
            <div class="upload-status">
                <span class="badge badge-success">Approved</span>
                <span style="color:var(--success); font-weight:700;">+${item.points} pts</span>
            </div>
        </div>
    `).join('');
}

function handleRestrictedAction(viewId) {
    if (!isLoggedIn()) {
        openAuthModal('login');
        showToast("Please login to access this feature", "error");
    } else {
        if(viewId === 'view-history') renderHistory();
        if(viewId === 'view-upload') renderUploads();
        
        if(viewId === 'view-wishlist') {
             const user = JSON.parse(localStorage.getItem('bookswap_user'));
             const wishListBooks = booksDB.filter(b => user.wishlist && user.wishlist.includes(b.id));
             renderBooks(wishListBooks, 'wishlistGrid');
             if(wishListBooks.length === 0) document.getElementById('wishlistGrid').innerHTML = '<div class="empty-state"><i class="fas fa-heart-broken"></i><p>Wishlist is empty.</p></div>';
        }

        switchView(viewId);
    }
}

function handleWishlistToggle(bookId, btnElement) {
    if (!isLoggedIn()) {
        openAuthModal('login');
        return;
    }

    let user = JSON.parse(localStorage.getItem('bookswap_user'));
    if(!user.wishlist) user.wishlist = [];

    if(user.wishlist.includes(bookId)) {
        user.wishlist = user.wishlist.filter(id => id !== bookId);
        btnElement.classList.remove('active');
        showToast("Removed from wishlist", "success");
    } else {
        user.wishlist.push(bookId);
        btnElement.classList.add('active');
        showToast("Added to wishlist", "success");
    }

    localStorage.setItem('bookswap_user', JSON.stringify(user));
    
    if(document.getElementById('view-wishlist').style.display === 'block') {
         const wishListBooks = booksDB.filter(b => user.wishlist.includes(b.id));
         renderBooks(wishListBooks, 'wishlistGrid');
    }
}

function attemptDownload(id, cost) {
    if (!isLoggedIn()) {
        openAuthModal('login');
        showToast("Login required to download", "error");
        return;
    }
    
    let user = JSON.parse(localStorage.getItem('bookswap_user'));
    
    if(user.points < cost) {
        showToast(`Insufficient points! You need ${cost} pts.`, "error");
        return;
    }

    if(confirm(`Download for ${cost} points?`)) {
        user.points -= cost;
        const book = booksDB.find(b => b.id === id);
        
        if(!user.history) user.history = [];
        user.history.unshift({
            title: book.title, 
            cost: cost, 
            date: new Date().toLocaleDateString()
        });
        
        localStorage.setItem('bookswap_user', JSON.stringify(user));
        
        showToast("Download started successfully!", "success");
        checkLoginState();
    }
}

function handleUpload() {
    const fileInput = document.getElementById('fileInput');
    if(fileInput.files.length === 0) return;

    const fileName = fileInput.files[0].name;
    let user = JSON.parse(localStorage.getItem('bookswap_user'));
    
    const pointsEarned = 100;
    user.points += pointsEarned;
    
    if(!user.uploads) user.uploads = [];
    user.uploads.unshift({
        name: fileName,
        date: new Date().toLocaleDateString(),
        points: pointsEarned,
        status: 'Approved'
    });

    localStorage.setItem('bookswap_user', JSON.stringify(user));
    
    showToast(`Uploaded "${fileName}" (+100 pts)`, "success");
    
    document.getElementById('uploadConfirmBtn').disabled = true;
    document.getElementById('fileNameDisplay').textContent = "";
    fileInput.value = ""; 
    
    renderUploads();
    document.getElementById('userPoints').textContent = user.points;
}

function filterBooks(category) {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if(btn.textContent.includes(category) || (category === 'All' && btn.textContent === 'All')) {
            btn.classList.add('active');
        }
    });

    const filtered = category === 'All' ? booksDB : booksDB.filter(b => b.category === category);
    renderBooks(filtered, 'booksGrid');
}

window.switchView = function(viewId) {
    document.querySelectorAll('.view-section').forEach(el => el.style.display = 'none');
    
    const target = document.getElementById(viewId);
    if(target) target.style.display = 'block';
    else document.getElementById('view-home').style.display = 'block';

    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
    
    if(viewId === 'view-home') {
        document.querySelector('.nav-item[onclick*="view-home"]').classList.add('active');
        document.getElementById('featuredGrid').style.display = 'grid';
        document.querySelector('.section-header h3 i.fa-fire').parentElement.parentElement.style.display = 'flex';
    } 
    else if (viewId === 'view-wishlist') document.querySelector('.nav-item[onclick*="view-wishlist"]').classList.add('active');
    else if (viewId === 'view-history') document.querySelector('.nav-item[onclick*="view-history"]').classList.add('active');
    else if (viewId === 'view-upload') document.querySelector('.nav-item.action-upload').classList.add('active');
}

function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    const icon = type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle';
    const color = type === 'success' ? 'var(--success)' : 'var(--danger)';
    
    toast.className = `toast ${type}`;
    toast.innerHTML = `<i class="fas ${icon}" style="color: ${color}; font-size: 1.1rem;"></i><span>${message}</span>`;
    
    container.appendChild(toast);
    setTimeout(() => {
        toast.style.animation = 'fadeOut 0.3s ease forwards';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('bookswap_theme', isDark ? 'dark' : 'light');
    document.getElementById('themeToggleBtn').innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
}

function openAuthModal(tab) {
    document.getElementById('authModal').classList.add('open');
    switchAuthTab(tab);
}

function closeAuthModal() {
    document.getElementById('authModal').classList.remove('open');
}

function switchAuthTab(tab) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(tab === 'login' ? 'tabLogin' : 'tabSignup').classList.add('active');
    document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));
    document.getElementById(tab === 'login' ? 'loginForm' : 'signupForm').classList.add('active');
}

function handleLoginSubmit(e) {
    e.preventDefault();
    const user = { username: document.getElementById('loginUser').value, points: 100, wishlist: [], history: [], uploads: [] };
    localStorage.setItem('bookswap_user', JSON.stringify(user));
    location.reload();
}

function handleSignupSubmit(e) {
    e.preventDefault();
    const user = { username: document.getElementById('signupUser').value, points: 50, wishlist: [], history: [], uploads: [] };
    localStorage.setItem('bookswap_user', JSON.stringify(user));
    location.reload();
}

function handleLogout() {
    localStorage.removeItem('bookswap_user');
    location.reload();
}

function acceptCookies() {
    localStorage.setItem('cookies_accepted', 'true');
    document.getElementById('cookieBanner').classList.remove('show');
}
