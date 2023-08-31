document.addEventListener("DOMContentLoaded", function () {
    let formDOM = document.querySelector("#myform");
    formDOM.addEventListener('submit', myfunction);

    function myfunction(event) {
        event.preventDefault();
        let yas = document.getElementById("yas");
        let boy = document.getElementById("boy");
        let kilo = document.getElementById("kilo");
        let cinsiyet = document.querySelector('input[name="cinsiyet"]:checked');
        let aktivite = document.getElementById("aktivite");
        let bmhSonuc = document.getElementById("bmhSonuc");
        let kaloriSonuc = document.getElementById("kaloriSonuc");
        let sonuclar = document.getElementById("sonuclar");
        let bmh, kalori, aktiviteCarpani;

        yas = yas.value;
        boy = boy.value;
        kilo = kilo.value;
        cinsiyet = cinsiyet.value;
        aktivite = aktivite.value;
        console.log(aktivite);

        switch (aktivite) {
            case "1":
                aktiviteCarpani = 1.2;
                break;

            case "2":
                aktiviteCarpani = 1.375;
                break;

            case "3":
                aktiviteCarpani = 1.55;
                break;

            case "4":
                aktiviteCarpani = 1.72;
                break;

            case "5":
                aktiviteCarpani = 1.9;
                break;
        }
        //bazal metobolik hız hesaplama
        if (cinsiyet = "E") {
            bmh = (66.5 + (13.75 * kilo) + (5 * boy) - (6.75 * yas));
            bmhSonuc.innerHTML = `Girdiğiniz bilgilere Bazal Metobolik Hızınız ${bmh} kcal'dır.  BMH 24 saat hiç hareket etmezseniz ihtiyaç duyacağınız kalori miktarını ifade eder.`;
            kalori = aktiviteCarpani * bmh;
            kaloriSonuc.innerHTML = ` Hareket ve egzersiz durumunuza göre günlük almanız gereken Kalori ${kalori} kcal'dır. `
        } else if (cinsiyet = "K") {
            bmh = (655.1 + (9.56 * kilo) + (1.85 * boy - 4.67 * yas));
            bmhSonuc.innerHTML = `
            Girdiğiniz bilgilere Bazal Metobolik Hızınız ${bmh}  kcal' dır.  BMH 24 saat hiç hareket etmezseniz ihtiyaç duyacağınız kalori miktarını ifade eder.
            
            `;
            kaloriSonuc.innerHTML = ` Hareket ve egzersiz durumunuza göre günlük almanız gereken Kalori ${kalori} kcal'dır. `
        }
        sonuclar.style.display = "block";

    }

});