document.addEventListener('DOMContentLoaded', () => {
    // This data array holds the information for the full-size modal pop-up.
    // The 'image' key should point to the path of your full-size certificate images.
    const certificateData = [
        {
            title: 'Analyze Data with Python',
            subtitle: 'Data Analysis',
            image: 'img/cert/analyzedata.jpg'
        },
        {
            title: 'Visualize Data with Python',
            subtitle: 'Data Visualization',
            image: 'img/cert/VisualizeDataPython.jpg'
        },
        {
            title: 'Basic Statistics with Python',
            subtitle: 'Statistics',
            image: 'img/cert/basicstatspython.jpg'
        },
        {
            title: 'Intro to Databases and SQL',
            subtitle: 'Database Management',
            image: 'img/cert/IntrotoDBandSQL.jpg'
        },
        {
            title: 'Python Fundamentals',
            subtitle: 'Programming Basics',
            image: 'img/cert/pythonfundamentals.jpg'
        },
        {
            title: 'Analyze Data with Python',
            subtitle: 'Data Analysis',
            image: 'img/cert/analyzedata.jpg'
        },
        {
            title: 'Python Fundamentals',
            subtitle: 'Programming Basics',
            image: 'img/cert/pythonfundamentals.jpg'
        },
        {
            title: 'Visualize Data with Python',
            subtitle: 'Data Visualization',
            image: 'img/cert/VisualizeDataPython.jpg'
        },
        {
            title: 'Basic Statistics with Python',
            subtitle: 'Statistics',
            image: 'img/cert/basicstatspython.jpg'
        },
        {
            title: 'Intro to Databases and SQL',
            subtitle: 'Database Management',
            image: 'img/cert/IntrotoDBandSQL.jpg'
        }
    ];

    const certificatesPerPage = 5;
    let currentPage = 1;

    const certificateContainer = document.getElementById('certificateContainer');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const pageNumbersContainer = document.getElementById('pageNumbers');
    const modal = document.getElementById('certificateModal');
    const closeBtn = document.getElementsByClassName('close-btn')[0];
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalSubtitle = document.getElementById('modal-subtitle');

    function renderCertificates(page) {
        certificateContainer.innerHTML = '';
        const startIndex = (page - 1) * certificatesPerPage;
        const endIndex = startIndex + certificatesPerPage;
        const certsToRender = allCertificates.slice(startIndex, endIndex);

        certsToRender.forEach((cert, index) => {
            const certItem = document.createElement('div');
            certItem.className = 'certificate-item';
            certItem.dataset.index = startIndex + index;

            certItem.innerHTML = `
                <div class="certificate-image">
                    <img src="${cert.image}" alt="${cert.title}" class="minimized-cert-img">
                </div>
                <div class="certificate-details">
                    <h4>${cert.title}</h4>
                    <p>${cert.subtitle}</p>
                </div>
            `;
            certificateContainer.appendChild(certItem);

            certItem.addEventListener('click', () => {
                const fullCertData = certificateData[certItem.dataset.index];
                if (fullCertData) {
                    modalImage.src = fullCertData.image;
                    modalTitle.textContent = fullCertData.title;
                    modalSubtitle.textContent = fullCertData.subtitle;
                    modal.style.display = 'flex';
                }
            });
        });
    }

    function renderPageNumbers() {
        pageNumbersContainer.innerHTML = '';
        const totalPages = Math.ceil(allCertificates.length / certificatesPerPage);
        for (let i = 1; i <= totalPages; i++) {
            const pageSpan = document.createElement('span');
            pageSpan.textContent = i;
            pageSpan.className = 'page-number';
            if (i === currentPage) {
                pageSpan.classList.add('active');
            }
            pageSpan.addEventListener('click', () => {
                currentPage = i;
                renderCertificates(currentPage);
                renderPageNumbers();
            });
            pageNumbersContainer.appendChild(pageSpan);
        }
        prevBtn.disabled = currentPage === 1;
        nextBtn.disabled = currentPage === totalPages;
    }

    // Initial render
    renderCertificates(currentPage);
    renderPageNumbers();

    prevBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            renderCertificates(currentPage);
            renderPageNumbers();
        }
    });

    nextBtn.addEventListener('click', () => {
        const totalPages = Math.ceil(allCertificates.length / certificatesPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            renderCertificates(currentPage);
            renderPageNumbers();
        }
    });

    closeBtn.onclick = () => {
        modal.style.display = 'none';
    };

    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
});