document.addEventListener('DOMContentLoaded', () => {
    const projectItems = document.querySelectorAll('.project-item');
    const modal = document.getElementById('projectModal');
    const closeBtn = document.querySelector('.project-close-btn');
    const modalTitle = document.getElementById('modal-project-title');
    const modalDesc = document.getElementById('modal-project-desc');
    const modalMainImage = document.getElementById('modal-main-image');
    const modalThumbnails = document.getElementById('modal-thumbnails');

    projectItems.forEach(item => {
        item.addEventListener('click', () => {
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
                modalThumbnails.querySelector('.thumbnail-wrapper').classList.add('active');
            }

            modal.style.display = 'flex';
        });
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