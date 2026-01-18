const DEFAULT_BOOKS = [
    { 
        "id": 1, 
        "title": "Clean Code", 
        "author": "Robert C. Martin", 
        "category": "Technology", 
        "cost": 50, 
        "trending": true, 
        "rating": 4.8, 
        "image": "images/cleancode.jpg",
        "downloadUrl": "https://ptgmedia.pearsoncmg.com/images/9780132350884/samplepages/9780132350884.pdf"
    },
    { 
        "id": 2, 
        "title": "The Great Gatsby", 
        "author": "F. Scott Fitzgerald", 
        "category": "Fiction", 
        "cost": 20, 
        "trending": true, 
        "rating": 4.5, 
        "image": "images/greatgatsby.jpg",
        "downloadUrl": "https://www.gutenberg.org/files/64317/64317-pdf.pdf"
    },
    { 
        "id": 3, 
        "title": "Astrophysics for People in a Hurry", 
        "author": "Neil deGrasse Tyson", 
        "category": "Science", 
        "cost": 40, 
        "trending": true, 
        "rating": 4.9, 
        "image": "images/astrophysics.jpg",
        "downloadUrl": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
    },
    { 
        "id": 4, 
        "title": "UI Design 2025", 
        "author": "Sarah Jenkins", 
        "category": "Technology", 
        "cost": 60, 
        "trending": false, 
        "rating": 4.2, 
        "image": "images/uidesign.jpg",
        "downloadUrl": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
    },
    { 
        "id": 5, 
        "title": "Modern Biology", 
        "author": "Dr. A. P. Raven", 
        "category": "Science", 
        "cost": 35, 
        "trending": false, 
        "rating": 4.0, 
        "image": "images/biology.jpg",
        "downloadUrl": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
    },
    { 
        "id": 6, 
        "title": "Harry Potter", 
        "author": "J.K. Rowling", 
        "category": "Fiction", 
        "cost": 45, 
        "trending": true, 
        "rating": 4.7, 
        "image": "images/harrypotter.jpg",
        "downloadUrl": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
    },
    { 
        "id": 7, 
        "title": "History of Rome", 
        "author": "Mary Beard", 
        "category": "Fiction", 
        "cost": 30, 
        "trending": false, 
        "rating": 3.8, 
        "image": "images/rome.jpg",
        "downloadUrl": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
    },
    { 
        "id": 8, 
        "title": "Python Mastery", 
        "author": "Eric Matthes", 
        "category": "Technology", 
        "cost": 55, 
        "trending": false, 
        "rating": 4.6, 
        "image": "images/python.jpg",
        "downloadUrl": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
    },
    { 
        "id": 9, 
        "title": "Chemistry Basics", 
        "author": "John Moore", 
        "category": "Science", 
        "cost": 25, 
        "trending": false, 
        "rating": 4.1, 
        "image": "images/chemistry.jpg",
        "downloadUrl": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
    },
    { 
        "id": 10, 
        "title": "The Alchemist", 
        "author": "Paulo Coelho", 
        "category": "Fiction", 
        "cost": 15, 
        "trending": true, 
        "rating": 4.3, 
        "image": "images/TheAlchemist.jpg",
        "downloadUrl": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
    },
    { 
        "id": 11, 
        "title": "Data Structures", 
        "author": "Gayle L. McDowell", 
        "category": "Technology", 
        "cost": 70, 
        "trending": false, 
        "rating": 4.4, 
        "image": "images/DSA.jpg",
        "downloadUrl": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
    },
    { 
        "id": 12, 
        "title": "Quantum Physics", 
        "author": "Richard Feynman", 
        "category": "Science", 
        "cost": 80, 
        "trending": true, 
        "rating": 4.9, 
        "image": "images/Qphysics.jpg",
        "downloadUrl": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
    },
    { 
        "id": 13, 
        "title": "To Kill a Mockingbird", 
        "author": "Harper Lee", 
        "category": "Fiction", 
        "cost": 30, 
        "trending": false, 
        "rating": 4.6, 
        "image": "images/mockingbird.jpg",
        "downloadUrl": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
    },
    { 
        "id": 14, 
        "title": "Machine Learning", 
        "author": "Andrew Ng", 
        "category": "Technology", 
        "cost": 90, 
        "trending": true, 
        "rating": 4.8, 
        "image": "images/ML.jpg",
        "downloadUrl": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
    },
    { 
        "id": 15, 
        "title": "Genetics 101", 
        "author": "Dr. Siddra Ijaz", 
        "category": "Science", 
        "cost": 45, 
        "trending": false, 
        "rating": 4.2, 
        "image": "images/genetics.png",
        "downloadUrl": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
    },
    { 
        "id": 16, 
        "title": "1984", 
        "author": "George Orwell", 
        "category": "Fiction", 
        "cost": 25, 
        "trending": true, 
        "rating": 4.5, 
        "image": "images/1984.jpg",
        "downloadUrl": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
    },
    { 
        "id": 17, 
        "title": "Web Development", 
        "author": "Angela Yu", 
        "category": "Technology", 
        "cost": 65, 
        "trending": false, 
        "rating": 4.3, 
        "image": "images/Bookswap2.png",
        "downloadUrl": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
    },
    { 
        "id": 18, 
        "title": "Environmental Science", 
        "author": "G. Tyler Miller", 
        "category": "Science", 
        "cost": 50, 
        "trending": true, 
        "rating": 4.7, 
        "image": "images/Bookswap2.png",
        "downloadUrl": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
    },
    { 
        "id": 19, 
        "title": "The Hobbit", 
        "author": "J.R.R. Tolkien", 
        "category": "Fiction", 
        "cost": 40, 
        "trending": false, 
        "rating": 4.4, 
        "image": "images/Bookswap2.png",
        "downloadUrl": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
    },
    { 
        "id": 20, 
        "title": "Cybersecurity Basics", 
        "author": "Kevin Mitnick", 
        "category": "Technology", 
        "cost": 75, 
        "trending": true, 
        "rating": 4.6, 
        "image": "images/Bookswap2.png",
        "downloadUrl": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
    }, 
    { 
        "id": 21, 
        "title": "Relativity Theory", 
        "author": "Albert Einstein", 
        "category": "Science", 
        "cost": 85, 
        "trending": false, 
        "rating": 4.5, 
        "image": "images/Bookswap2.png",
        "downloadUrl": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
    },
    { 
        "id": 22, 
        "title": "Pride and Prejudice", 
        "author": "Jane Austen", 
        "category": "Fiction", 
        "cost": 20, 
        "trending": true, 
        "rating": 4.3, 
        "image": "images/Bookswap2.png",
        "downloadUrl": "https://www.gutenberg.org/files/1342/1342-pdf.pdf"
    }
];

// ==========================================
// 2. STATE & INIT
// ==========================================
let allBooks = [];
let allUsers = [];
let currentUser = null;
let currentBookId = null;
let currentCategory = 'All';

document.addEventListener('DOMContentLoaded', () => {
    loadTheme();
    loadData();
    checkSession();
    checkCookies();
});

function loadData() {
    // Load Books
    const saved = localStorage.getItem('bs_library_v9'); 
    if (saved) {
        allBooks = JSON.parse(saved);
    } else {
        allBooks = DEFAULT_BOOKS;
        localStorage.setItem('bs_library_v9', JSON.stringify(allBooks));
    }

    // Load Users
    const uSaved = localStorage.getItem('bs_users_v9');
    if (uSaved) {
        allUsers = JSON.parse(uSaved);
    } else {
        // Default Admin User
        allUsers = [{ username: "admin", password: "123", email: "admin@test.com", points: 500, wishlist: [], history: [], activityLog: [] }];
        localStorage.setItem('bs_users_v9', JSON.stringify(allUsers));
    }
    
    renderHome(allBooks);
}

// ==========================================
// 3. RENDERING HOME
// ==========================================
function renderHome(booksToRender) {
    const searchVal = document.getElementById('searchInput').value.trim();
    const isSearching = searchVal.length > 0;
    
    let trendingBooks = isSearching ? booksToRender.filter(b => b.trending) : allBooks.filter(b => b.trending);
    
    renderGrid('trendingGrid', trendingBooks, null); 
    renderGrid('booksGrid', booksToRender, 'noResults');
}

function handleSearch() {
    const term = document.getElementById('searchInput').value.toLowerCase().trim();
    
    let filtered = allBooks.filter(b => 
        b.title.toLowerCase().includes(term) || 
        b.author.toLowerCase().includes(term) ||
        b.category.toLowerCase().includes(term)
    );

    if (currentCategory !== 'All') {
        filtered = filtered.filter(b => b.category === currentCategory);
    }
    
    const trendingSec = document.getElementById('trendingSection');
    if(term.length > 0 && filtered.length === 0) {
        trendingSec.style.display = 'none';
    } else {
        trendingSec.style.display = 'block';
    }

    renderHome(filtered);
}

function filterCategory(category, btnElement) {
    currentCategory = category;
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    if(btnElement) btnElement.classList.add('active');
    handleSearch();
}

function renderGrid(id, books, emptyMsgId) {
    const grid = document.getElementById(id);
    if (!grid) return;
    grid.innerHTML = '';
    
    if (books.length === 0 && emptyMsgId) {
        const msg = document.getElementById(emptyMsgId);
        if(msg) msg.style.display = 'block';
        return;
    }
    if(emptyMsgId) {
        const msg = document.getElementById(emptyMsgId);
        if(msg) msg.style.display = 'none';
    }

    books.forEach(book => {
        grid.appendChild(createBookCard(book));
    });
}

function createBookCard(book) {
    const div = document.createElement('div');
    div.className = 'book-card';
    
    div.innerHTML = `
        <img src="${book.image}" onclick="openPreview(${book.id})" onerror="this.src='https://via.placeholder.com/200x300?text=No+Image'">
        <div class="book-info" onclick="openPreview(${book.id})">
            <h4>${book.title}</h4>
            <p>${book.author}</p>
            <div class="card-stats">
                <span><i class="fas fa-coins text-warning"></i> ${book.cost}</span>
                <span><i class="fas fa-star text-warning"></i> ${book.rating}</span>
            </div>
        </div>
        <div class="card-actions">
            <button class="btn-card btn-card-primary" onclick="downloadBookById(${book.id}, event)">
                <i class="fas fa-download"></i> Get
            </button>
            <button class="btn-card btn-card-outline" onclick="openPreview(${book.id})">
                <i class="fas fa-eye"></i> Preview
            </button>
        </div>
    `;
    return div;
}

// ==========================================
// 4. ACTIVITY LOG (DOWNLOAD & UPLOAD)
// ==========================================

// Helper to add activity
function logActivity(type, title) {
    if (!currentUser) return;
    
    const logItem = {
        type: type, // 'download' or 'upload'
        title: title,
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    if (!currentUser.activityLog) currentUser.activityLog = [];
    currentUser.activityLog.unshift(logItem); // Add new log to top
    updateUserSession();
}

// Render Activity Log in History Tab
function renderActivityLog() {
    if (!currentUser) return;

    const dlGrid = document.getElementById('downloadHistoryGrid');
    const upGrid = document.getElementById('uploadHistoryGrid');
    
    if(!dlGrid || !upGrid) return;
    
    dlGrid.innerHTML = '';
    upGrid.innerHTML = '';

    const logs = currentUser.activityLog || [];
    
    const downloads = logs.filter(l => l.type === 'download');
    const uploads = logs.filter(l => l.type === 'upload');

    // Helper to create log card
    const createLogCard = (log, icon, color) => `
        <div class="book-card" style="display:flex; align-items:center; padding:15px; height:auto; min-height:80px;">
            <div style="font-size:1.5rem; color:${color}; margin-right:15px; margin-left:10px;">
                <i class="fas ${icon}"></i>
            </div>
            <div>
                <h4 style="margin:0; font-size:1rem;">${log.title}</h4>
                <p style="margin:5px 0 0; font-size:0.8rem; color:var(--text-muted);">
                    ${log.date} at ${log.time}
                </p>
            </div>
        </div>
    `;

    // Render Downloads
    if(downloads.length === 0) document.getElementById('emptyDownHist').style.display = 'block';
    else {
        document.getElementById('emptyDownHist').style.display = 'none';
        downloads.forEach(log => dlGrid.innerHTML += createLogCard(log, 'fa-download', '#6366f1'));
    }

    // Render Uploads
    if(uploads.length === 0) document.getElementById('emptyUpHist').style.display = 'block';
    else {
        document.getElementById('emptyUpHist').style.display = 'none';
        uploads.forEach(log => upGrid.innerHTML += createLogCard(log, 'fa-cloud-upload-alt', '#10b981'));
    }
}

// Switch between Downloads and Uploads in History View
function switchHistoryTab(tab) {
    // 1. Toggle Content
    document.getElementById('hist-downloads').style.display = tab === 'downloads' ? 'block' : 'none';
    document.getElementById('hist-uploads').style.display = tab === 'uploads' ? 'block' : 'none';

    // 2. Toggle Active Buttons
    const buttons = document.querySelectorAll('.history-tabs-container .tab-link');
    buttons.forEach(btn => {
        if(btn.textContent.toLowerCase().includes(tab === 'downloads' ? 'downloads' : 'uploads')) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// ==========================================
// 5. ACTIONS (Download, Upload, Wishlist)
// ==========================================

function downloadBookById(id, event) {
    if(event) event.stopPropagation(); 
    const book = allBooks.find(b => b.id === id);
    downloadBook(book);
}

function downloadBook(book) {
    if (!currentUser) { openAuthModal('login'); return; }
    
    // Allow re-download if in history, else check points
    const alreadyOwn = currentUser.history.includes(book.id);

    if (alreadyOwn || currentUser.points >= book.cost) {
        if(!alreadyOwn) {
            currentUser.points -= book.cost;
            currentUser.history.push(book.id);
            // LOG THE ACTIVITY
            logActivity('download', book.title);
            updateUserSession();
        }
        
        alert(`Starting download for: ${book.title}`);
        window.open(book.downloadUrl, '_blank');
        closePreviewModal();
    } else {
        alert(`Not enough points! You have ${currentUser.points}, need ${book.cost}.`);
    }
}

function handleUpload(e) {
    e.preventDefault();
    if (!currentUser) { openAuthModal('login'); return; }
    
    const title = document.getElementById('upTitle').value;
    const author = document.getElementById('upAuthor').value;
    const category = document.getElementById('upCategory').value;
    const url = document.getElementById('upUrl').value;
    const cost = document.getElementById('upCost').value;
    const rating = document.getElementById('upRating').value; 

    if(!title || !author || !url) { alert("Please fill required fields."); return; }

    const newBook = {
        id: Date.now(),
        title: title,
        author: author,
        category: category,
        cost: parseInt(cost) || 0,
        rating: parseFloat(rating) || 4.0,
        trending: false,
        image: "BookSwapLogo.png", 
        downloadUrl: url
    };
    
    allBooks.unshift(newBook);
    saveAllData();
    
    // Reward and Log
    currentUser.points += 50;
    logActivity('upload', title);
    updateUserSession();
    
    alert("Book Uploaded Successfully! +50 Points");
    document.getElementById('uploadForm').reset(); // If using ID on form, or e.target.reset()
    switchView('home');
}

function toggleWishlist() {
    if (!currentUser) { openAuthModal('login'); return; }
    const idx = currentUser.wishlist.indexOf(currentBookId);
    if (idx === -1) { currentUser.wishlist.push(currentBookId); } 
    else { currentUser.wishlist.splice(idx, 1); }
    updateUserSession();
    openPreview(currentBookId); 
}

// ==========================================
// 6. PREVIEW MODAL
// ==========================================
function openPreview(id) {
    currentBookId = id;
    const book = allBooks.find(b => b.id === id);
    if (!book) return;

    document.getElementById('pTitle').innerText = book.title;
    document.getElementById('pAuthor').innerText = book.author;
    document.getElementById('pCategory').innerText = book.category;
    document.getElementById('pCost').innerText = book.cost;
    document.getElementById('pRating').innerText = book.rating;
    document.getElementById('pImg').src = book.image;
    document.getElementById('pDesc').innerHTML = `Dive into <strong>${book.title}</strong> by ${book.author}. Category: ${book.category}.`;

    document.getElementById('dlBtn').onclick = () => downloadBook(book);
    
    const wishBtn = document.getElementById('wishBtn');
    wishBtn.onclick = () => toggleWishlist();
    
    if (currentUser && currentUser.wishlist.includes(id)) {
        wishBtn.innerHTML = '<i class="fas fa-heart"></i> Remove Wishlist';
    } else {
        wishBtn.innerHTML = '<i class="far fa-heart"></i> Add to Wishlist';
    }

    document.getElementById('previewModal').classList.add('open');
}

// ==========================================
// 7. NAVIGATION & SESSION
// ==========================================
function switchView(view) {
    // Hide all views
    document.querySelectorAll('.view-section').forEach(el => el.style.display = 'none');
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
    
    // Activate current nav
    // Matching onclick="switchView('home')" or onclick="handleRestrictedAction('history')"
    let activeNav;
    if(view === 'home') activeNav = document.querySelector(`.nav-item[onclick*="switchView('home')"]`);
    else activeNav = document.querySelector(`.nav-item[onclick*="${view}"]`);
    
    if(activeNav) activeNav.classList.add('active');

    // Show View
    document.getElementById('view-' + view).style.display = 'block';
    
    // Load Specific Data
    if (view === 'wishlist' && currentUser) {
        const list = allBooks.filter(b => currentUser.wishlist.includes(b.id));
        renderGrid('wishlistGrid', list, 'emptyWish');
    }
    if (view === 'history') {
        renderActivityLog();
        switchHistoryTab('downloads'); // Default tab
    }
}

function handleRestrictedAction(view) {
    if (!currentUser) { openAuthModal('login'); } 
    else { switchView(view); }
}

function checkSession() {
    const session = localStorage.getItem('bs_session_v9');
    const authBtn = document.getElementById('authBtn');
    
    if (session) {
        currentUser = JSON.parse(session);
        if(!currentUser.activityLog) currentUser.activityLog = []; // Compat fix

        document.getElementById('uName').innerText = currentUser.username;
        document.getElementById('uStatus').innerText = "Premium Member";
        document.getElementById('pointsDisplay').style.display = 'block';
        document.getElementById('uPoints').innerText = currentUser.points;
        document.querySelectorAll('.lock-icon').forEach(el => el.style.display = 'none');
        authBtn.innerText = "Logout";
        authBtn.onclick = logout;
    } else {
        currentUser = null;
        document.getElementById('uName').innerText = "Guest";
        document.getElementById('uStatus').innerText = "Not Logged In";
        document.getElementById('pointsDisplay').style.display = 'none';
        document.querySelectorAll('.lock-icon').forEach(el => el.style.display = 'inline-block');
        authBtn.innerText = "Login / Join";
        authBtn.onclick = () => openAuthModal('login');
    }
}

function updateUserSession() {
    localStorage.setItem('bs_session_v9', JSON.stringify(currentUser));
    const idx = allUsers.findIndex(u => u.username === currentUser.username);
    if (idx !== -1) {
        allUsers[idx] = currentUser;
        localStorage.setItem('bs_users_v9', JSON.stringify(allUsers));
    }
    checkSession();
}

function saveAllData() {
    localStorage.setItem('bs_library_v9', JSON.stringify(allBooks));
}

function logout() { 
    localStorage.removeItem('bs_session_v9'); 
    location.reload(); 
}

// ==========================================
// 8. AUTH, THEME, COOKIES
// ==========================================
function openAuthModal(tab) { document.getElementById('authModal').classList.add('open'); switchAuthTab(tab); }
function closeAuthModal() { document.getElementById('authModal').classList.remove('open'); }
function closePreviewModal() { document.getElementById('previewModal').classList.remove('open'); }

function switchAuthTab(tab) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));
    if (tab === 'login') {
        document.querySelectorAll('.tab-btn')[0].classList.add('active');
        document.getElementById('loginForm').classList.add('active');
    } else {
        document.querySelectorAll('.tab-btn')[1].classList.add('active');
        document.getElementById('signupForm').classList.add('active');
    }
}

function processLogin(e) {
    e.preventDefault();
    const u = document.getElementById('logUser').value;
    const p = document.getElementById('logPass').value;
    const found = allUsers.find(user => user.username === u && user.password === p);
    if (found) {
        localStorage.setItem('bs_session_v9', JSON.stringify(found));
        closeAuthModal();
        checkSession();
        switchView('home');
    } else { alert("Invalid User/Pass (Try admin / 123)"); }
}

function processSignup(e) {
    e.preventDefault();
    const u = document.getElementById('signUser').value;
    const em = document.getElementById('signEmail').value;
    const p = document.getElementById('signPass').value;
    if (allUsers.find(user => user.username === u)) { alert("Username taken"); return; }
    
    const newUser = { username: u, email: em, password: p, points: 100, wishlist: [], history: [], activityLog: [] };
    allUsers.push(newUser);
    
    localStorage.setItem('bs_users_v9', JSON.stringify(allUsers));
    localStorage.setItem('bs_session_v9', JSON.stringify(newUser));
    
    closeAuthModal();
    checkSession();
    switchView('home');
}

function checkCookies() {
    if (!localStorage.getItem('bs_cookies_accepted')) document.getElementById('cookieBanner').style.display = 'block';
}
function acceptCookies() {
    localStorage.setItem('bs_cookies_accepted', 'true');
    document.getElementById('cookieBanner').style.display = 'none';
}

function loadTheme() {
    if (localStorage.getItem('bs_theme') === 'dark') {
        document.body.classList.add('dark-mode');
        const txt = document.getElementById('themeText'); if(txt) txt.innerText = "Light Mode";
        const icon = document.getElementById('themeIcon'); if(icon) icon.className = "fas fa-sun";
    }
}
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('bs_theme', isDark ? 'dark' : 'light');
    document.getElementById('themeText').innerText = isDark ? "Light Mode" : "Dark Mode";
    document.getElementById('themeIcon').className = isDark ? "fas fa-sun" : "fas fa-moon";
}
