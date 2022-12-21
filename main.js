// FOR NAVBAR
const navItems = document.querySelectorAll("label");

navItems.forEach(function(navItem) {
    navItem.addEventListener("click", function() {
        navItems.forEach(function(item) {
            item.classList.remove("select");
        });
        this.classList.add("select");
    })
})

const btn1 = document.getElementById('btn1');

btn1.addEventListener('click', function() {
    let inputCelcius1 = document.getElementById('input1').value;
    let logCelcius1 = document.getElementById('log-celcius1');
    let logCelcius2 = document.getElementById('log-celcius2');
    let logCelcius3 = document.getElementById('log-celcius3');
    let logCelcius4 = document.getElementById('log-celcius4');
    if (isNaN(inputCelcius1)) {
                document.getElementById('popup').style.visibility = "visible"
            } else if (inputCelcius1 === "" || inputCelcius1 === null || inputCelcius1 === undefined) {
                document.getElementById('popup').style.visibility = "visible"
            } else {
                logCelcius1.textContent = 'Fahrenheit : ' + ((9/5) * inputCelcius1 + 32).toFixed(1) + ' ℉';
                logCelcius2.textContent = 'Kelvin : ' + (parseFloat(inputCelcius1) + 273.15).toFixed(2) + ' K';
                logCelcius3.textContent = 'Reamur : ' + (inputCelcius1 * 0.8).toFixed(2) + ' ⁰R';
                logCelcius4.textContent = 'Rangkine : ' + ((parseFloat(inputCelcius1) + 273.15) * 9/5).toFixed(2) + " ⁰Ra";
            }
        })
const btn2 = document.getElementById('btn2');

btn2.addEventListener('click', function() {
    let inputCelcius2 = document.getElementById('input2').value;
    let logCelcius5 = document.getElementById('log-celcius5');
    let logCelcius6 = document.getElementById('log-celcius6');
    let logCelcius7 = document.getElementById('log-celcius7');
    let logCelcius8 = document.getElementById('log-celcius8');
    if (isNaN(inputCelcius2)) {
                document.getElementById('popup').style.visibility = "visible"
            } else if (inputCelcius2 === "" || inputCelcius2 === null || inputCelcius2 === undefined) {
                document.getElementById('popup').style.visibility = "visible"
            } else {
                logCelcius5.textContent = 'Celcius : ' + ((inputCelcius2 - 32) * 5/9).toFixed(2) + " °C";
                logCelcius6.textContent = 'Kelvin : ' + ((parseFloat(inputCelcius2) + 459.67) * 5/9).toFixed(2) + " K";
                logCelcius7.textContent = 'Reamur : ' + ((inputCelcius2-32) * (4/9)).toFixed(2) + " R";
                logCelcius8.textContent = 'Rangkine : ' + (parseFloat(inputCelcius2) + 459.67).toFixed(2) + " ⁰Ra";
            }
        })
const btn3 = document.getElementById('btn3');

btn3.addEventListener('click', function() {
    let inputCelcius3 = document.getElementById('input3').value;
    let logCelcius9 = document.getElementById('log-celcius9');
    let logCelcius10 = document.getElementById('log-celcius10');
    let logCelcius11 = document.getElementById('log-celcius11');
    let logCelcius12 = document.getElementById('log-celcius12');
    if (isNaN(inputCelcius3)) {
                document.getElementById('popup').style.visibility = "visible"
            } else if (inputCelcius3 === "" || inputCelcius3 === null || inputCelcius3 === undefined) {
                document.getElementById('popup').style.visibility = "visible"
            } else {
                logCelcius9.textContent = 'Celcius : ' + (parseFloat(inputCelcius3 - 273.15)).toFixed(2) + " °C";
                logCelcius10.textContent = 'Fahrenheit : ' + (parseFloat(inputCelcius3) * (9/5) - 459.67).toFixed(2) + " F";
                logCelcius11.textContent = 'Reamur : ' + (parseFloat(4/5) * (inputCelcius3 - 273.15)).toFixed(2) + " R";
                logCelcius12.textContent = 'Rangkine : ' + (parseFloat(inputCelcius3) * 9/5).toFixed(2) + " ⁰Ra";
            }
        })
const btn4 = document.getElementById('btn4');

btn4.addEventListener('click', function() {
    let inputCelcius4 = document.getElementById('input4').value;
    let logCelcius13 = document.getElementById('log-celcius13');
    let logCelcius14 = document.getElementById('log-celcius14');
    let logCelcius15 = document.getElementById('log-celcius15');
    let logCelcius16 = document.getElementById('log-celcius16');
    if (isNaN(inputCelcius4)) {
                document.getElementById('popup').style.visibility = "visible"
            } else if (inputCelcius4 === "" || inputCelcius4 === null || inputCelcius4 === undefined) {
                document.getElementById('popup').style.visibility = "visible"
            } else {
                logCelcius13.textContent = 'Celcius : ' + (parseFloat(inputCelcius4/0.8)).toFixed(2) + " °C";
                logCelcius14.textContent = 'Fahrenheit : ' + (parseFloat(inputCelcius4 * 2.25) + 32).toFixed(2) + " F";
                logCelcius15.textContent = 'Kelvin : ' + (parseFloat(inputCelcius4/0.8) + 273.15).toFixed(2) + " K";
                logCelcius16.textContent = 'Rangkine : ' + (parseFloat(inputCelcius4 * 2.25) + 491.67).toFixed(2) + " ⁰Ra";
            }
        })

function closePopup() {
    document.getElementById('popup').style.visibility = "hidden"
}
// FOR NAVBAR

// RANDOM COLOR
function getRandomColor() {
    var r = Math.floor(Math.random() * 256).toString(16);
    var g = Math.floor(Math.random() * 256).toString(16);
    var b = Math.floor(Math.random() * 256).toString(16);
    return "#" + pad(r) + pad(g) + pad(b);
  }
  
  function pad(n) {
    return (n.length < 2) ? "0" + n : n;
  }

  let header = document.querySelector(".logo");

setInterval(function() {
  header.style.color = getRandomColor();
}, 1000); // Change the color every 1000 milliseconds (1 second)
// RANDOM COLOR


gsap.from('#animate-header', { duration: 5, ease: "power3.out", opacity: 0 });
gsap.from('#dashboard-tab', { duration: 2.5, ease: "power3.out", x: -300,opacity: 0 });
gsap.from('#profile-tab', { duration: 2.5, ease: "power3.out", x: -100,opacity: 0, });
gsap.from('#settings-tab', { duration: 2.5, ease: "power3.out", x: -500,opacity: 0 });
gsap.from('#contacts-tab', { duration: 2.5, ease: "power3.out", x: -600,opacity: 0 });
gsap.from('#tempe', { duration: 2.5, ease: "bounce.out", y: -100,opacity: 0 });
gsap.from('#input1', { duration: 2.5, ease: "power3.out", x: -500,opacity: 0 });
gsap.from('#log-celcius1', { duration: 2.5, ease: "power3.out", x: -500,opacity: 0 });
gsap.from('#log-celcius2', { duration: 2.5, ease: "power3.out", x: 500,opacity: 0 });
gsap.from('#log-celcius3', { duration: 2.5, ease: "power3.out", x: -500,opacity: 0 });
gsap.from('#log-celcius4', { duration: 2.5, ease: "power3.out", x: 500,opacity: 0 });
gsap.from('#btn1', { duration: 2.5, ease: "power3.out", x: 500,opacity: 0 });


gsap.from('#cel', { duration: 2.5, ease: "power3.out", x: -500,opacity: 0 });




