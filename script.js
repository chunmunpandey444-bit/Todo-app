function updateClock() {
    // 1. System se real current date aur time nikalna
    let now = new Date();
    
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';

    // 2. 24-hour format ko 12-hour format mein convert karna
    hours = hours % 12;
    hours = hours ? hours : 12; // Agar 0 baje ho toh use 12 dikhao

    // 3. Agar value single digit (0-9) ho toh aage '0' lagana (Jaise 05:09:02)
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // 4. HTML ke clock box ke andar time display karna
    document.getElementById('clock').innerHTML = `${hours}:${minutes}:${seconds} ${ampm}`;

    // 5. Advanced Theme Feature: Subah (6AM to 6PM) Day Mode aur Raat ko Night Mode loop style switch karna
    let realHour = now.getHours(); // Asli 24-hour format check karne ke liye
    let greetingText = document.getElementById('greeting');

    if (realHour >= 6 && realHour < 18) {
        document.body.classList.add('day-mode');
        greetingText.innerHTML = "☀️ Good Morning, Pushpraj";
    } else {
        document.body.classList.remove('day-mode');
        greetingText.innerHTML = "🌙 Good Night, Pushpraj";
    }
}

// 🔥 Sabse Important Core Engine Matrix: Har 1000 milliseconds (1 Second) mein function ko chalate raho
setInterval(updateClock, 1000);

// Pehli baar page load hote hi clock chalane ke liye ek baar function call karna
updateClock();
