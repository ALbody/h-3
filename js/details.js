const buttons = document.querySelectorAll(".whatsapp-btn");

buttons.forEach(btn => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();

    // البطاقة الأقرب
    const card = this.closest(".box-content.project-detail");
    const title = card.querySelector("h2").innerText.trim();

    // رقم الواتساب (بدون + أو مسافات)
    const phone = "201094148933";

    // الرسالة
    var message = "مرحبا، أريد تفاصيل عن المنتج: " + title;

    // رابط الواتساب
    var url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);

    // فتح الرابط
    window.open(url, "_blank");
  });

});
