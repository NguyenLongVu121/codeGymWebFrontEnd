document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const navLinks = document.querySelector(".nav-links");

  // Lắng nghe sự kiện click vào biểu tượng hamburger menu
  menuIcon.addEventListener("click", function () {
    // Thêm/Xóa class 'active' để ẩn/hiện danh sách menu
    navLinks.classList.toggle("active");
  });
});
