document.addEventListener("DOMContentLoaded", function() {
    const imageModal = new bootstrap.Modal(document.getElementById('imageModal'));
    const modalImage = document.getElementById('modalImage');

    document.querySelectorAll('.gallery-image').forEach(item => {
        item.addEventListener('click', event => {
            modalImage.src = event.target.src;
            imageModal.show();
        });
    });
});
