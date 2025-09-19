const allProjects = [
    {
        'title': 'MS Excel Project',
        'subtitle': 'Data Cleaning and Visualization of Bike Sales.',
        'image': 'img/proj/project0.jpg',
        'tags': ['MS Excel', 'Data Cleaning', 'Data Visualization', 'Dashboards'],
        'description': 'This project showcases my proficiency in Microsoft Excel for comprehensive data analysis and visualization. I began by performing extensive data cleaning and data generalization to ensure the integrity and consistency of the dataset. Using lookup functions and conditional formatting, I enriched the data and highlighted key information. My analysis leveraged pivot tables to quickly summarize large datasets and uncover meaningful trends. I created a dynamic and interactive dashboard using various Excel graphs to present my findings in a clear, compelling visual format, demonstrating my ability to transform raw data into actionable insights.',
        'images': [
            'img/proj/project0.jpg',
            'img/proj/project1.jpg',
            'img/proj/project2.jpg',
            'img/proj/project3.jpg'
        ]
    },
    {
        'title': 'Thesis Project',
        'subtitle': 'A Geo-Analysis and Classification of 4P\'s Beneficiaries Data in Naic, Cavite.',
        'image': 'img/proj/mappinghope1.jpg',
        'tags': ['PHP', 'HTML', 'CSS', 'MySQL', 'GIS', 'Javascript', 'Leaflet'],
        'description': 'I led the development of a Geographic Information System (GIS) to analyze and manage geographical data for a local government\'s 4P\'s program. My work involved building a system to collect, classify, and visualize beneficiary data using GIS and data modeling. The project\'s outcome provides local government units with a data-driven platform for more efficient resource allocation and strategic planning. The technology stack includes PHP for the backend; HTML, CSS, and JavaScript for the frontend; a MySQL database with trigger functions to ensure data integrity and real-time updates; and the Leaflet library for third-party spatial visualization.',
        'images': [
            'img/proj/mappinghope1.jpg',
            'img/proj/mappinghope0.jpg',
            'img/proj/mappinghope2.jpg',
            'img/proj/mappinghope3.jpg',
            'img/proj/mappinghope4.jpg',
            'img/proj/mappinghope5.jpg',
            'img/proj/mappinghope6.jpg',
            'img/proj/mappinghope7.jpg',
            'img/proj/mappinghope8.jpg',
            'img/proj/mappinghope9.jpg',
            'img/proj/mappinghope10.jpg',
            'img/proj/mappinghope11.jpg',
            'img/proj/mappinghope12.jpg'
        ]
    },
    {
        'title': 'On the Job Training Project',
        'subtitle': 'Library information system for Cavite Community Academy Inc. in Naic, Cavite.',
        'image': 'img/proj/library1.jpg',
        'tags': ['PHP', 'HTML', 'CSS', 'MySQL', 'Javascript'],
        'description': 'I developed a comprehensive Library Information System during my On-the-Job Training. The system allows users to efficiently track book records, manage loans and returns, and maintain a digital catalog. This project streamlined library operations, improved data accuracy, and enhanced the overall user experience for students and staff.',
        'images': [
            'img/proj/library0.jpg',
            'img/proj/library1.jpg',
            'img/proj/library2.jpg',
            'img/proj/library3.jpg',
            'img/proj/library4.jpg',
            'img/proj/library5.jpg',
            'img/proj/library6.jpg',
            'img/proj/library7.jpg'
        ]
    },
    {
        'title': '3D Rendering',
        'subtitle': 'Rendered a 3D model of a School Building.',
        'image': 'img/proj/3d1.jpg',
        'tags': ['SketchUp', '3D Modeling', 'Rendering', 'Architectural Visualization'],
        'description': 'I created a detailed 3D model of a school building using SketchUp, showcasing skills in architectural modeling and digital rendering. The project involved building the model from blueprints, applying textures, and using rendering software to produce high-quality, photorealistic images. This work demonstrates proficiency in design software and the ability to bring complex concepts to life in a virtual environment.',
        'images': [
            'img/proj/3d1.jpg',
            'img/proj/3d2.jpg',
            'img/proj/3d3.jpg',
            'img/proj/3d4.jpg',
            'img/proj/3d5.jpg'
        ]
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const projectItems = document.querySelectorAll('.project-item');
    const modal = document.getElementById('projectModal');
    const closeBtn = document.querySelector('.project-close-btn');
    const modalTitle = document.getElementById('modal-project-title');
    const modalDesc = document.getElementById('modal-project-desc');
    const modalMainImage = document.getElementById('modal-main-image');
    const modalThumbnails = document.getElementById('modal-thumbnails');

    // Use event delegation on the parent container for more robust click handling
    document.querySelector('.projects-grid').addEventListener('click', (event) => {
        const item = event.target.closest('.project-item');
        if (item) {
            const projectIndex = item.dataset.index;
            const project = allProjects[projectIndex];

            // Populate the modal with project data
            modalTitle.textContent = project.title;
            modalDesc.textContent = project.description;

            // Clear existing thumbnails
            modalThumbnails.innerHTML = '';

            // Render thumbnails
            project.images.forEach((imgSrc, index) => {
                // Create a wrapper for the thumbnail and overlay
                const thumbnailWrapper = document.createElement('div');
                thumbnailWrapper.className = 'thumbnail-wrapper';
                thumbnailWrapper.dataset.index = index;

                const thumbnail = document.createElement('img');
                thumbnail.src = imgSrc;
                thumbnail.alt = `Project Image ${index + 1}`;

                const overlay = document.createElement('div');
                overlay.className = 'thumbnail-overlay';
                overlay.textContent = 'Selected';

                thumbnailWrapper.appendChild(thumbnail);
                thumbnailWrapper.appendChild(overlay); // Add the overlay to the wrapper
                modalThumbnails.appendChild(thumbnailWrapper);

                // Add click listener to change the main image
                thumbnailWrapper.addEventListener('click', () => {
                    modalMainImage.src = imgSrc;

                    // Remove 'active' class from all wrappers
                    document.querySelectorAll('.thumbnail-wrapper').forEach(t => t.classList.remove('active'));
                    // Add 'active' class to the clicked wrapper
                    thumbnailWrapper.classList.add('active');
                });
            });

            // Set the first image as the main image and active thumbnail by default
            if (project.images.length > 0) {
                modalMainImage.src = project.images[0];
                const firstThumbnail = modalThumbnails.querySelector('.thumbnail-wrapper');
                if (firstThumbnail) {
                    firstThumbnail.classList.add('active');
                }
            }

            modal.style.display = 'flex';
        }
    });

    // Close the modal when the user clicks on the close button or outside the modal
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
