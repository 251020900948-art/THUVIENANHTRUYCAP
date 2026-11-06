// Hàm cập nhật vùng ảnh lớn khi di chuột vào hoặc focus
function upDate(previewPic) {
    let largeImage = document.getElementById('image');
    
    // Cập nhật background với nguồn (src) của ảnh nhỏ
    largeImage.style.backgroundImage = "url('" + previewPic.src + "')";
    
    // Cập nhật nội dung văn bản bằng thuộc tính alt của ảnh nhỏ
    largeImage.innerHTML = previewPic.alt;
}

// Hàm đặt lại vùng ảnh lớn khi di chuột ra hoặc blur (hardcoding)
function unDo() {
    let largeImage = document.getElementById('image');
    
    // Đặt lại background thành URL trống (Hardcoded)
    largeImage.style.backgroundImage = "url('')";
    
    // Đặt lại văn bản về văn bản gốc (Hardcoded)
    largeImage.innerHTML = "Di chuột qua một hình ảnh bên dưới để hiển thị ở đây.";
}

// Hàm chạy khi trang web tải xong (onload)
function initializeGallery() {
    // 16.a: In thông báo ra console
    console.log("Trang đã tải xong! Bắt đầu gán thuộc tính tabindex và trình nghe sự kiện.");
    
    // Lấy tất cả các hình ảnh có class 'preview'
    let previewImages = document.querySelectorAll('.preview');
    
    // 16.b: Viết vòng lặp for để lặp qua từng hình ảnh
    for (let i = 0; i < previewImages.length; i++) {
        
        // 16.c: Thêm thuộc tính tabindex (động bằng JavaScript, không mã hóa cứng)
        previewImages[i].setAttribute("tabindex", "0");
        
        // Thêm Event Listeners cho Chuột (Mouse Events)
        previewImages[i].addEventListener("mouseover", function() {
            upDate(this);
        });
        
        previewImages[i].addEventListener("mouseleave", function() {
            unDo();
        });
        
        // Thêm Event Listeners cho Bàn phím (Focus/Blur Events)
        previewImages[i].addEventListener("focus", function() {
            upDate(this);
        });
        
        previewImages[i].addEventListener("blur", function() {
            unDo();
        });
    }
}

// Thêm trình nghe cho onload kích hoạt hàm initializeGallery
window.addEventListener("load", initializeGallery);
