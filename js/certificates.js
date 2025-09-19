const allCertificates = [
    {
        title: 'Analyze Data with Python',
        subtitle: 'Data Analysis',
        image: 'img/cert/GreatLearning.jpg'
    },
    {
        title: 'Visualize Data with Python',
        subtitle: 'Data Visualization',
        image: 'img/cert/GreatLearning.jpg'
    },
    {
        title: 'Basic Statistics with Python',
        subtitle: 'Statistics',
        image: 'img/cert/GreatLearning.jpg'
    },
    {
        title: 'Intro to Databases and SQL',
        subtitle: 'Database Management',
        image: 'img/cert/GreatLearning.jpg'
    },
    {
        title: 'Python Fundamentals',
        subtitle: 'Programming Basics',
        image: 'img/cert/GreatLearning.jpg'
    },
    {
        title: 'Analyze Data with Python',
        subtitle: 'Data Analysis',
        image: 'img/cert/GreatLearning.jpg'
    },
    {
        title: 'Python Fundamentals',
        subtitle: 'Programming Basics',
        image: 'img/cert/GreatLearning.jpg'
    },
    {
        title: 'Visualize Data with Python',
        subtitle: 'Data Visualization',
        image: 'img/cert/GreatLearning.jpg'
    },
    {
        title: 'Basic Statistics with Python',
        subtitle: 'Statistics',
        image: 'img/cert/GreatLearning.jpg'
    },
    {
        title: 'Intro to Databases and SQL',
        subtitle: 'Database Management',
        image: 'img/cert/GreatLearning.jpg'
    },
];

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
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const certificatesPerPage = 5;
    let currentPage = 1;

    const certificateContainer = document.getElementById('certificateContainer');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const pageNumbersDiv = document.getElementById('pageNumbers');

    function displayCertificates(page) {
        certificateContainer.innerHTML = '';
        const start = (page - 1) * certificatesPerPage;
        const end = start + certificatesPerPage;
        const certificatesToShow = allCertificates.slice(start, end);

        certificatesToShow.forEach((cert, index) => {
            const certItem = document.createElement('div');
            certItem.className = 'certificate-item';
            certItem.setAttribute('data-index', start + index);
            
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
        });

        updatePaginationControls();
    }

    function updatePaginationControls() {
        const totalPages = Math.ceil(allCertificates.length / certificatesPerPage);
        prevBtn.disabled = currentPage === 1;
        nextBtn.disabled = currentPage === totalPages;
        pageNumbersDiv.textContent = `Page ${currentPage} of ${totalPages}`;
    }

    prevBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            displayCertificates(currentPage);
        }
    });

    nextBtn.addEventListener('click', () => {
        const totalPages = Math.ceil(allCertificates.length / certificatesPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            displayCertificates(currentPage);
        }
    });

    displayCertificates(currentPage);

    const certificateModal = document.getElementById('certificateModal');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalSubtitle = document.getElementById('modal-subtitle');
    const closeBtn = document.querySelector('.close-btn');

    certificateContainer.addEventListener('click', (event) => {
        const certItem = event.target.closest('.certificate-item');
        if (certItem) {
            const index = certItem.dataset.index;
            const cert = certificateData[index];
            if (cert) {
                modalImage.src = cert.image;
                modalImage.alt = cert.title;
                modalTitle.textContent = cert.title;
                modalSubtitle.textContent = cert.subtitle;
                certificateModal.style.display = 'block';
            }
        }
    });

    closeBtn.addEventListener('click', () => {
        certificateModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === certificateModal) {
            certificateModal.style.display = 'none';
        }
    });
});
