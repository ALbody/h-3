// JavaScript
const buttons = document.querySelectorAll(".whatsapp-btn");

buttons.forEach(btn => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    
    // البحث عن البطاقة الأقرب (card) لزرار الواتس
    const card = this.closest(".box-content.project-detail");
    const title = card.querySelector("h2").innerText.trim(); // نص العنوان
    
    // رقم الواتساب
    const phone = "+201019890771";
    
    // الرسالة المخصصة
    const message = 'مرحبا، أريد تفاصيل عن المنتج: ${title}';
    
    // فتح رابط الواتساب
    const url = 'https://wa.me/${phone}?text=${encodeURIComponent(message)}';
    window.open(url, "_blank");
  });

});
