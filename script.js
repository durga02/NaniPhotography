// Navbar toggle
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");
menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Slider
let currentIndex = 0;
const slides = document.querySelectorAll(".slides img");
const slidesContainer = document.querySelector(".slides");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const dots = document.querySelectorAll(".dot");

function showSlide(index){
  slides.forEach((img,i)=>{
    img.style.display = i===index?"block":"none";
    dots[i].classList.toggle("active", i===index);
  });
}
function nextSlide(){
  currentIndex=(currentIndex+1)%slides.length;
  showSlide(currentIndex);
}
function prevSlide(){
  currentIndex=(currentIndex-1+slides.length)%slides.length;
  showSlide(currentIndex);
}
showSlide(currentIndex);

// Arrows
leftArrow.addEventListener("click",()=>{ prevSlide(); resetInterval(); });
rightArrow.addEventListener("click",()=>{ nextSlide(); resetInterval(); });

// Dots
dots.forEach(dot=>{
  dot.addEventListener("click", e=>{
    currentIndex=parseInt(e.target.dataset.index);
    showSlide(currentIndex);
    resetInterval();
  });
});

// Auto-slide
let slideInterval=setInterval(nextSlide,3000);
function resetInterval(){
  clearInterval(slideInterval);
  slideInterval=setInterval(nextSlide,3000);
}

// Swipe
let startX=0,endX=0;
slidesContainer.addEventListener("touchstart",e=>startX=e.touches[0].clientX);
slidesContainer.addEventListener("touchmove",e=>endX=e.touches[0].clientX);
slidesContainer.addEventListener("touchend",()=>{
  if(startX-endX>50){ nextSlide(); resetInterval(); }
  else if(endX-startX>50){ prevSlide(); resetInterval(); }
});


// -------------------------------------

 const iframe = document.getElementById('autoVimeo');
 const player = new Vimeo.Player(iframe);

  const observer = new IntersectionObserver(
    ([entry]) => entry.isIntersecting ? player.play() : player.pause(),
    { threshold: 0.5 }
  );

  observer.observe(document.querySelector('.diagonal-video-section'));

// --------------------------------------------------------------
const viewer = document.getElementById("imageViewer");
  const viewerImg = document.getElementById("viewerImg");
  const downloadBtn = document.getElementById("downloadBtn");
  const closeBtn = document.getElementById("closeViewer");

  document.querySelectorAll(".category img").forEach(img => {
    img.addEventListener("click", () => {
      viewerImg.src = img.src;
      //downloadBtn.href = img.src;
      viewer.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  });

  closeBtn.addEventListener("click", closeViewer);

  viewer.addEventListener("click", (e) => {
    if (e.target === viewer) closeViewer();
  });

  function closeViewer() {
    viewer.classList.remove("active");
    viewerImg.src = "";
    document.body.style.overflow = "";
  }


function sendToWhatsApp() {
  const nameEl = document.getElementById("name");
  const phoneEl = document.getElementById("phone");
  const messageEl = document.getElementById("message");

  if (!nameEl || !phoneEl || !messageEl) {
    console.error("Form elements not found");
    alert("Form error. Please refresh the page.");
    return;
  }

  const name = nameEl.value.trim();
  const phone = phoneEl.value.trim();
  const message = messageEl.value.trim();

  const whatsappNumber = "919398657185"; // your number

  const text =
    `New Photography Inquiry!:%0A` +
    `Name: ${name}%0A` +
    `Phone: ${phone}%0A` +
    `Message: ${message}`;

  window.open(
    `https://wa.me/${whatsappNumber}?text=${text}`,
    "_blank"
  );
}


console.log(
  document.getElementById("name"),
  document.getElementById("phone"),
  document.getElementById("message")
);
