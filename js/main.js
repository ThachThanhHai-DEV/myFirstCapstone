// CHUYỂN THEME LIGHT - DARK
const themeToggleBtn = document.querySelector('#theme-toggle');

if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    // 1. Kiểm tra trạng thái hiện tại
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const newTheme = isDark ? 'light' : 'dark';

    // 2. Cập nhật thuộc tính & lưu bộ nhớ
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });
}