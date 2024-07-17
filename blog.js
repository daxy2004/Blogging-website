function previewImage(event) {
    const imagePlaceholder = document.querySelector('.image-placeholder');
    imagePlaceholder.innerHTML = '';
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.onload = function() {
                const maxWidth = imagePlaceholder.offsetWidth;
                const maxHeight = imagePlaceholder.offsetHeight;
                const width = img.width;
                const height = img.height;
                let newWidth, newHeight;
                if (width > maxWidth || height > maxHeight) {
                    if (width > height) {
                        newWidth = maxWidth;
                        newHeight = (height / width) * maxWidth;
                    } else {
                        newHeight = maxHeight;
                        newWidth = (width / height) * maxHeight;
                    }
                } else {
                    newWidth = width;
                    newHeight = height;
                }
                img.width = newWidth;
                img.height = newHeight;
            };
            imagePlaceholder.appendChild(img);
        };
        reader.readAsDataURL(file);
    }
}