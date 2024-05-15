let currentPage = 0;
const pages = document.querySelectorAll('.page');
const pagesContainer = document.querySelector('.pages');
const controls = document.querySelector('.controls');

// مخفی کردن دکمه‌ها هنگام بارگذاری صفحه
controls.style.display = 'none';

function toggleEnvelope() {
    const flap = document.querySelector('.flap');
    // چک کردن برای مشخص کردن وضعیت پاکت
    if (pagesContainer.style.top === '0%') {
        pagesContainer.style.top = '-100%';
        controls.style.display = 'none'; // مخفی کردن دکمه‌ها وقتی پاکت بسته می‌شود
    } else {
        pagesContainer.style.top = '0%';
        controls.style.display = 'flex'; // نمایش دکمه‌ها وقتی پاکت باز می‌شود
        showPage(currentPage); // نمایش اولین صفحه پس از باز شدن پاکت
    }
}

function showPage(index) {
    pages.forEach(page => {
        page.style.display = 'none';
        page.classList.remove('active'); // برداشتن کلاس فعال از همه صفحات
    });
    pages[index].classList.add('active'); // افزودن کلاس فعال به صفحه جاری
    pages[index].style.display = 'block';
}

function previousPage() {
    if (currentPage > 0) {
        currentPage--;
        showPage(currentPage);
    }
}

function nextPage() {
    if (currentPage < pages.length - 1) {
        currentPage++;
        showPage(currentPage);
    }
}

var myVideo = document.getElementById("reel"); 

function playPause() { 
  if (myVideo.paused) 
    myVideo.play(); 
  else 
    myVideo.pause(); 
} 