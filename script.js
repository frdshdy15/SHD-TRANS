document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.getElementById('loading-screen');
    const startBtn = document.getElementById('startExperience');

    // 1. PAKSA LOADING SELESAI & TOMBOL MUNCUL
    setTimeout(() => {
        const fill = document.querySelector('.progress-fill');
        if(fill) {
            fill.style.width = '100%';
            fill.style.left = '0';
        }
        if(startBtn) {
            startBtn.style.display = 'block';
            startBtn.style.opacity = '1';
        }
    }, 1500);

    // 2. FUNGSI MASUK
    if(startBtn) {
        startBtn.addEventListener('click', () => {
            loadingScreen.style.display = 'none'; 
            document.body.classList.remove('is-loading');
            
            if (typeof AOS !== 'undefined') {
                AOS.init({ duration: 1000, once: true });
            }
           
        });
    }

    // 3. SMOOTH SCROLL NAVIGASI
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                loadingScreen.style.display = 'none';
                document.body.classList.remove('is-loading');
                
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

   // COUNTER ENGINE FIX TOTAL
const counters = document.querySelectorAll('.counter');
let counterStarted = false;

function startCounters() {
    if (counterStarted) return;

    const statsSection = document.querySelector('#stats');
    const sectionTop = statsSection.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (sectionTop < screenHeight - 100) {
        counterStarted = true;

        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            let count = 0;
            const increment = target / 100;

            const updateCounter = () => {
                count += increment;
                if (count < target) {
                    counter.innerText = Math.floor(count).toLocaleString('id-ID') + "+";
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.innerText = target.toLocaleString('id-ID') + "+";
                }
            };

            updateCounter();
        });
    }
}

window.addEventListener('scroll', startCounters);



    // 5. WA FORM LOGIC
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const phone = "6281314444786";
            const nama = document.getElementById('nama').value;
            const jemput = document.getElementById('jemput').value;
            const tujuan = document.getElementById('tujuan').value;
            const tgl = document.getElementById('tgl').value;
            const jam = document.getElementById('jam').value;
            const seat = document.getElementById('seat').value;
            const keperluan = document.getElementById('keperluan').value;

            const msg = `*RESERVASI SHD TRANS*%0A` +
                        `----------------------------%0A` +
                        `*Nama:* ${nama}%0A` +
                        `*Keperluan:* ${keperluan}%0A` +
                        `*Jemput:* ${jemput}%0A` +
                        `*Tujuan:* ${tujuan}%0A` +
                        `*Waktu:* ${tgl} | ${jam} WIB%0A` +
                        `*Unit:* Jetbus 3+ HDD%0A` +
                        `*Seat:* ${seat}%0A` +
                        `----------------------------`;
            window.open(`https://wa.me/${phone}?text=${msg}`, '_blank');
        });
    }

 
});

document.addEventListener("DOMContentLoaded", function() {

  // ======================
  // PARALLAX HERO
  // ======================
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    const heroImg = document.querySelector(".hero-bg img");
    if(heroImg){
      heroImg.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
  });

  // ======================
  // NAVBAR GLASS EFFECT
  // ======================
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if(navbar){
      if(window.scrollY > 50){
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    }
  });

  // ======================
  // CUSTOM CURSOR
  // ======================
  document.addEventListener("mousemove", (e) => {
    const cursor = document.querySelector(".custom-cursor");
    if(cursor){
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    }
  });

  // ======================
  // HERO LETTER ANIMATION
  // ======================
  const title = document.querySelector(".hero-text-box h1");

if(title && !title.querySelector("span")){
  const text = title.innerText;
  title.innerHTML = text.split("").map(letter =>
    letter === " " 
      ? " " 
      : `<span class="letter">${letter}</span>`
  ).join("");
}


  // ======================
  // LOADING FADE OUT
  // ======================
  const startBtn = document.querySelector(".start-btn");
  const loadingScreen = document.querySelector(".loading-screen");

  if(startBtn && loadingScreen){
    startBtn.addEventListener("click", () => {
      loadingScreen.style.opacity = "0";
      setTimeout(()=>{
        loadingScreen.style.display = "none";
        document.body.classList.remove("is-loading");
      }, 500);
    });
  }

});
