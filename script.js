document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById("typing-text");
    const texts = ["Backend Developer", "Frontend Developer"];
    let currentIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeText() {
        const currentText = texts[currentIndex];
        
        // Cek apakah sedang menghapus atau menambah teks
        if (isDeleting) {
            textElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            textElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        // Jika teks selesai ditulis, mulai menghapus setelah jeda
        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(typeText, 1000); // Jeda 1 detik sebelum menghapus teks
        } 
        // Jika teks selesai dihapus, pindah ke teks berikutnya
        else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            currentIndex = (currentIndex + 1) % texts.length; // Pindah ke teks berikutnya, kembali ke awal jika sudah habis
            setTimeout(typeText, 500); // Jeda 0.5 detik sebelum mulai teks baru
        } else {
            setTimeout(typeText, isDeleting ? 100 : 200); // Kecepatan pengetikan/hapus
        }
    }

    typeText(); // Mulai mengetik
});
document.addEventListener("DOMContentLoaded", function() {
    const skillBtn = document.getElementById("skill-btn");
    const skillSection = document.getElementById("Skill");

    skillBtn.addEventListener("click", function() {
        skillSection.style.display = skillSection.style.display === "none" ? "block" : "none";
    });
});