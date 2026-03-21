// 🎉 TELANGANA + IMPORTANT DAYS (MULTIPLE SUPPORT)
const events = {

  // ================= JAN =================
  "01-Jan": ["New Year’s Day 🎉"],
  "04-Jan": ["World Braille Day"],
  "09-Jan": ["NRI Day"],
  "10-Jan": ["World Hindi Day"],
  "12-Jan": ["National Youth Day"],
  "15-Jan": ["Army Day", "Sankranti / Pongal 🌾"],
  "14-Jan": ["Bhogi 🔥"],
  "24-Jan": ["National Girl Child Day"],
  "25-Jan": ["National Voters Day"],
  "26-Jan": ["Republic Day 🇮🇳"],
  "30-Jan": ["Martyrs’ Day"],

  // ================= FEB =================
  "02-Feb": ["World Wetlands Day"],
  "04-Feb": ["World Cancer Day"],
  "11-Feb": ["Women in Science Day"],
  "14-Feb": ["Valentine’s Day ❤️"],
  "15-Feb": ["Maha Shivaratri 🕉️"],
  "21-Feb": ["Mother Language Day"],
  "28-Feb": ["National Science Day"],

  // ================= MAR =================
  "01-Mar": ["Zero Discrimination Day"],
  "03-Mar": ["Holi 🎨", "World Wildlife Day"],
  "08-Mar": ["International Women’s Day 👩"],
  "15-Mar": ["Consumer Rights Day"],
  "19-Mar": ["Ugadi 🌿"],
  "20-Mar": ["Happiness Day"],
  "21-Mar": ["Eid-ul-Fitr 🌙", "Forest Day"],
  "22-Mar": ["World Water Day 💧"],
  "23-Mar": ["Shaheed Diwas"],
  "24-Mar": ["TB Day"],
  "27-Mar": ["Sri Rama Navami 🏹"],

  // ================= APR =================
  "02-Apr": ["Autism Awareness Day"],
  "03-Apr": ["Good Friday ✝️"],
  "07-Apr": ["World Health Day"],
  "10-Apr": ["Homeopathy Day"],
  "14-Apr": ["Ambedkar Jayanti"],
  "18-Apr": ["Heritage Day"],
  "21-Apr": ["Civil Services Day"],
  "22-Apr": ["Earth Day 🌍"],
  "23-Apr": ["Book Day 📚"],

  // ================= MAY =================
  "01-May": ["Labour Day 👷"],
  "03-May": ["Press Freedom Day"],
  "08-May": ["Red Cross Day"],
  "11-May": ["National Technology Day"],
  "12-May": ["Nurses Day"],
  "15-May": ["Family Day"],
  "17-May": ["Telecom Day"],
  "27-May": ["Eid-ul-Adha 🐐"],

  // ================= JUN =================
  "01-Jun": ["Parents Day"],
  "05-Jun": ["Environment Day 🌱"],
  "08-Jun": ["Oceans Day"],
  "12-Jun": ["Anti Child Labour Day"],
  "14-Jun": ["Blood Donor Day"],
  "21-Jun": ["Yoga Day 🧘"],
  "23-Jun": ["Olympic Day"],
  "26-Jun": ["Moharram", "Anti Drug Day"],

  // ================= JUL =================
  "01-Jul": ["Doctor’s Day 👨‍⚕️"],
  "11-Jul": ["Population Day"],
  "26-Jul": ["Kargil Vijay Diwas"],

  // ================= AUG =================
  "10-Aug": ["Bonalu 🎉"],
  "12-Aug": ["Youth Day"],
  "15-Aug": ["Independence Day 🇮🇳"],
  "16-Aug": ["Parsi New Year"],
  "19-Aug": ["Photography Day"],
  "26-Aug": ["Milad-un-Nabi 🌙"],
  "29-Aug": ["Sports Day"],

  // ================= SEP =================
  "05-Sep": ["Teachers’ Day 👩‍🏫"],
  "08-Sep": ["Literacy Day"],
  "14-Sep": ["Vinayaka Chavithi 🐘", "Hindi Day"],
  "15-Sep": ["Engineers Day"],
  "16-Sep": ["Ozone Day"],
  "21-Sep": ["Peace Day"],
  "27-Sep": ["Tourism Day"],

  // ================= OCT =================
  "01-Oct": ["Old Age Day"],
  "02-Oct": ["Gandhi Jayanti"],
  "05-Oct": ["World Teachers Day"],
  "10-Oct": ["Mental Health Day"],
  "16-Oct": ["Food Day"],
  "18-Oct": ["Bathukamma 🌸"],
  "20-Oct": ["Dussehra 🏹"],
  "24-Oct": ["UN Day"],

  // ================= NOV =================
  "08-Nov": ["Deepavali 🪔"],
  "11-Nov": ["Education Day"],
  "14-Nov": ["Children’s Day 👶"],
  "19-Nov": ["International Men’s Day 👨"],
  "20-Nov": ["Child Rights Day"],
  "26-Nov": ["Constitution Day"],

  // ================= DEC =================
  "01-Dec": ["World AIDS Day"],
  "04-Dec": ["Navy Day"],
  "10-Dec": ["Human Rights Day"],
  "14-Dec": ["Energy Day"],
  "25-Dec": ["Christmas 🎄"],
  "26-Dec": ["Boxing Day"]
};

// 🔗 WIKI LINKS
const festWiki = {
  "Bhogi": "https://en.wikipedia.org/wiki/Bhogi",
  "Sankranti": "https://en.wikipedia.org/wiki/Makar_Sankranti",
  "Holi": "https://en.wikipedia.org/wiki/Holi",
  "Ugadi": "https://en.wikipedia.org/wiki/Ugadi",
  "Ramzan": "https://en.wikipedia.org/wiki/Eid_al-Fitr",
  "Bakrid": "https://en.wikipedia.org/wiki/Eid_al-Adha",
  "Bonalu": "https://en.wikipedia.org/wiki/Bonalu",
  "Vinayaka": "https://en.wikipedia.org/wiki/Ganesh_Chaturthi",
  "Dussehra": "https://en.wikipedia.org/wiki/Vijayadashami",
  "Deepavali": "https://en.wikipedia.org/wiki/Diwali",
  "Christmas": "https://en.wikipedia.org/wiki/Christmas",
  "Women": "https://en.wikipedia.org/wiki/International_Women%27s_Day",
  "Men": "https://en.wikipedia.org/wiki/International_Men%27s_Day",
  "Teachers": "https://en.wikipedia.org/wiki/Teachers%27_Day"
};


// 🔥 CLOCK + EVENTS DISPLAY
function updateClock() {
    const now = new Date();

    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const dayName = days[now.getDay()];

    const d = String(now.getDate()).padStart(2,'0');

    const monthNames = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    const m = monthNames[now.getMonth()];

    const y = now.getFullYear();
    const time = now.toLocaleTimeString('en-IN',{hour12:true});

    const clockEl = document.getElementById("clock-box");
    const festivalEl = document.getElementById("festival-msg");

    // ⏰ CLOCK
    if(clockEl){
        clockEl.innerHTML = `
        <span class="date-part">${dayName}, ${d}-${m}-${y}</span><br>
        <span class="time-part">${time}</span>
        `;
    }

    // 🎉 EVENTS
    const key = `${d}-${m}`;
    const todayEvents = events[key];

    if(festivalEl && todayEvents){

        const message = todayEvents.join("  ✦  ");

   festivalEl.innerHTML = `
  <span class="fest-scroll">
    🎉 ${message} 🎉 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span>
`;

        festivalEl.className = "festival-msg";

        const text = message;

        // 🎨 COLORS
        if(text.includes("Deepavali")) festivalEl.classList.add("diwali");
        else if(text.includes("Sankranti")) festivalEl.classList.add("sankranti");
        else if(text.includes("Eid") || text.includes("Ramzan")) festivalEl.classList.add("ramzan");
        else if(text.includes("Christmas")) festivalEl.classList.add("christmas");
        else if(text.includes("Ugadi")) festivalEl.classList.add("ugadi");
        else if(text.includes("Women")) festivalEl.style.background = "linear-gradient(90deg,#e91e63,#ff4081)";
        else if(text.includes("Men")) festivalEl.style.background = "linear-gradient(90deg,#2196f3,#00bcd4)";
        else festivalEl.classList.add("default-fest");

        // 🔗 CLICK
        festivalEl.onclick = () => {
            let link = "https://en.wikipedia.org/wiki/";
            for(let key in festWiki){
                if(text.includes(key)){
                    link = festWiki[key];
                    break;
                }
            }
            window.open(link, "_blank");
        };
    }
}


// ⏳ LOAD FAST (NO DELAY)
window.onload = () => {
  setInterval(updateClock, 1000);
  updateClock();
};


// 🔥 HERO (OPTIMIZED)
const heroBg = document.getElementById("hero-bg");

if(heroBg){
    const images = [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200",
      "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?w=1200",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200",
      "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=1200"
    ];

    const allImages = [...images, ...images];

    heroBg.innerHTML = "";

    allImages.forEach(src => {
        const div = document.createElement("div");
        div.style.backgroundImage = `url(${src})`;
        heroBg.appendChild(div);
    });
}


// 🔥 SUBMENU (UNCHANGED)
document.querySelectorAll('.has-submenu > a').forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();

    const submenu = item.nextElementSibling;

    document.querySelectorAll('.submenu').forEach(s => {
      if (s !== submenu) s.classList.remove('show');
    });

    submenu.classList.toggle('show');
  });
});

window.addEventListener('click', (e) => {
  if (!e.target.closest('.has-submenu')) {
    document.querySelectorAll('.submenu').forEach(s => s.classList.remove('show'));
  }
});
