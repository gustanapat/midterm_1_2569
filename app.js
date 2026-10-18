const destinations = [
  {
    region: "ภาคเหนือ", english: "NORTH", name: "น่าน", roman: "NAN", image: "assets/nan.jpg",
    imageAlt: "ภาพถ่ายทะเลหมอกและพระอาทิตย์ขึ้นที่ดอยเสมอดาว จังหวัดน่าน", imageLabel: "DOI SAMER DAO / NAN",
    teaser: "เมืองช้า ๆ กลางขุนเขา", tagline: "เมืองเล็กที่ทำให้เราอยากเดินทางช้าลง",
    description: "น่านมีเสน่ห์ทั้งเมืองเก่า ศิลปะล้านนา และถนนที่พาเข้าสู่ภูเขา เริ่มจากเดินดูภาพกระซิบรักที่วัดภูมินทร์ ก่อนออกไปสูดอากาศที่ดอยเสมอดาวและบ่อเกลือ",
    mood: "ศิลปะ · ทะเลหมอก", forWho: "คนรักธรรมชาติและเมืองสงบ",
    places: [
      ["วัดภูมินทร์", "ชมจิตรกรรมฝาผนัง ‘ปู่ม่านย่าม่าน’ กลางเมืองน่าน"],
      ["ดอยเสมอดาว", "จุดชมพระอาทิตย์ขึ้นและทะเลหมอกในอุทยานแห่งชาติศรีน่าน"],
      ["บ่อเกลือสินเธาว์", "เรียนรู้วิถีต้มเกลือภูเขาและชุมชนบ่อเกลือ"]
    ],
    food: [["ขนมจีนน้ำเงี้ยว", "รสเข้มแบบเหนือ กินกับผักสดและเครื่องเคียง"], ["ข้าวซอย", "เส้นนุ่ม น้ำแกงหอมเครื่องเทศ เหมาะกับมื้อกลางวัน"]],
    stays: [["ที่พักในเมืองน่าน", "เดินเที่ยววัด คาเฟ่ และย่านเก่าได้สะดวก"], ["โฮมสเตย์ปัว–บ่อเกลือ", "ตื่นมารับวิวทุ่งนาและภูเขา"]],
    route: "เช้า วัดภูมินทร์ → บ่าย ขับรถผ่านปัว → เย็น พักโฮมสเตย์บ่อเกลือ",
    tip: "เส้นทางขึ้นเขาคดเคี้ยว ควรเผื่อเวลาเดินทาง", source: "https://www.tourismthailand.org/Destinations/Provinces/Nan/108", color: "#a9bca1"
  },
  {
    region: "ภาคอีสาน", english: "NORTHEAST", name: "อุบลราชธานี", roman: "UBON RATCHATHANI", image: "assets/ubon.jpg",
    imageAlt: "ภาพถ่ายประติมากรรมเทียนในงานแห่เทียนเข้าพรรษา จังหวัดอุบลราชธานี", imageLabel: "CANDLE FESTIVAL / UBON RATCHATHANI",
    teaser: "งานเทียนและเรื่องเล่าริมโขง", tagline: "ศิลป์แห่งงานเทียนและธรรมชาติริมแม่น้ำโขง",
    description: "อุบลราชธานีมีเสน่ห์ทั้งศิลปะและธรรมชาติ งานแห่เทียนเข้าพรรษาเผยฝีมือช่างท้องถิ่น ผาแต้มมีภาพเขียนสีโบราณริมหน้าผา และสามพันโบกเผยลวดลายหินเมื่อน้ำลด",
    mood: "งานเทียน · แม่น้ำโขง", forWho: "สายธรรมชาติและวัฒนธรรม",
    places: [["งานแห่เทียนเข้าพรรษา", "ชมประติมากรรมเทียนและขบวนแห่ตามช่วงเทศกาล"], ["อุทยานแห่งชาติผาแต้ม", "ชมภาพเขียนสีโบราณและวิวแม่น้ำโขง"], ["สามพันโบก", "สำรวจแอ่งหินธรรมชาติริมโขงในช่วงน้ำลด"]],
    food: [["ก๋วยจั๊บญวน", "เส้นเหนียวนุ่มในน้ำซุปร้อน ๆ เป็นมื้อเช้ายอดนิยม"], ["หมูยออุบล", "ของฝากขึ้นชื่อ กินกับข้าวหรือเป็นของว่างก็ได้"]],
    stays: [["โรงแรมในตัวเมือง", "สะดวกสำหรับตระเวนกินและเที่ยววัด"], ["ที่พักโขงเจียม", "เหมาะกับการออกไปผาแต้มตั้งแต่เช้า"]],
    route: "เช้า ผาแต้ม → บ่าย เที่ยวโขงเจียม → เย็น ชิมอาหารพื้นเมือง",
    tip: "งานเทียนจัดตามช่วงเข้าพรรษา ส่วนสามพันโบกเหมาะกับช่วงน้ำลด", source: "https://www.tourismthailand.org/Destinations/Provinces/ubon-ratchathani/587", color: "#d5a477"
  },
  {
    region: "ภาคกลาง", english: "CENTRAL", name: "พระนครศรีอยุธยา", roman: "AYUTTHAYA", image: "assets/ayutthaya.jpg",
    imageAlt: "ภาพถ่ายวัดไชยวัฒนารามยามค่ำในจังหวัดพระนครศรีอยุธยา", imageLabel: "WAT CHAIWATTHANARAM / AYUTTHAYA",
    teaser: "เดินผ่านหน้าประวัติศาสตร์", tagline: "เมืองเก่าที่เล่าเรื่องได้ทุกมุมถนน",
    description: "อยุธยาเคยเป็นราชธานีที่ยิ่งใหญ่ วันนี้โบราณสถานริมแม่น้ำยังพาเราย้อนเวลา อุทยานประวัติศาสตร์พระนครศรีอยุธยาเป็นมรดกโลก และเสน่ห์อีกด้านคืออาหารริมทางกับชุมชนริมน้ำ",
    mood: "มรดกโลก · ริมแม่น้ำ", forWho: "คนชอบประวัติศาสตร์และถ่ายภาพ",
    places: [["อุทยานประวัติศาสตร์ฯ", "เดินชมวัดและโบราณสถานในเขตเมืองเก่า"], ["วัดมหาธาตุ", "ชมเศียรพระพุทธรูปในรากไม้และซากโบราณสถาน"], ["วัดไชยวัฒนาราม", "ชมหมู่พระปรางค์ริมแม่น้ำในแสงเย็น"]],
    food: [["กุ้งแม่น้ำเผา", "เมนูเด่นของเมืองริมน้ำ กินคู่กับน้ำจิ้มซีฟู้ด"], ["โรตีสายไหม", "ขนมขึ้นชื่อ ห่อสายไหมในแผ่นโรตีบาง ๆ"]],
    stays: [["โรงแรมริมแม่น้ำ", "ชมวิววัดและสายน้ำยามค่ำ"], ["เกสต์เฮาส์เมืองเก่า", "ใกล้แหล่งโบราณสถานและร้านอาหาร"]],
    route: "เช้า วัดมหาธาตุ → บ่าย วัดพระศรีสรรเพชญ์ → เย็น วัดไชยวัฒนาราม",
    tip: "วัดหลายแห่งเป็นศาสนสถาน ควรแต่งกายสุภาพ", source: "https://www.tourismthailand.org/Destinations/Provinces/Phra-Nakhon-Si-Ayutthaya/229", color: "#cb9c7a"
  },
  {
    region: "ภาคตะวันออก", english: "EAST", name: "จันทบุรี", roman: "CHANTHABURI", image: "assets/chanthaburi.jpg",
    imageAlt: "ภาพถ่ายชุมชนริมน้ำจันทบูร จังหวัดจันทบุรี", imageLabel: "CHANTHABOON WATERFRONT / CHANTHABURI",
    teaser: "เมืองผลไม้และบ้านริมน้ำ", tagline: "เมืองที่มีทั้งกลิ่นทะเล รสผลไม้ และบ้านเก่า",
    description: "จันทบุรีไม่ได้มีดีแค่ทะเล ชุมชนริมน้ำจันทบูรชวนเดินดูอาคารเก่า อาสนวิหารใหญ่เป็นอีกภาพจำของเมือง แล้วค่อยขับรถเลียบชายฝั่งไปชมวิวเนินนางพญา",
    mood: "ชุมชนเก่า · ผลไม้ · ทะเล", forWho: "สายกินและคนชอบเมืองมีเรื่องเล่า",
    places: [["ชุมชนริมน้ำจันทบูร", "เดินชมบ้านเก่า ร้านเล็ก ๆ และวิถีริมน้ำ"], ["อาสนวิหารพระนางมารีอา", "ชมสถาปัตยกรรมแบบกอทิกกลางเมืองจันท์"], ["จุดชมวิวเนินนางพญา", "ชมถนนเลียบทะเลและอ่าวคุ้งกระเบน"]],
    food: [["หมูชะมวง", "หมูตุ๋นใบชะมวงรสเปรี้ยวกลมกล่อม"], ["เส้นจันท์ผัดปู", "เส้นท้องถิ่นผัดกับเนื้อปูและเครื่องปรุงรสจัด"]],
    stays: [["ที่พักย่านริมน้ำ", "เดินเล่นชุมชนเก่าได้ตั้งแต่เช้าจรดเย็น"], ["รีสอร์ตแถวคุ้งวิมาน", "พักริมทะเลและขับรถชมวิวชายฝั่ง"]],
    route: "เช้า ริมน้ำจันทบูร → บ่าย อาสนวิหาร → เย็น เนินนางพญา",
    tip: "ถ้าอยากชิมผลไม้สด ลองเช็กฤดูกาลก่อนวางแผน", source: "https://www.tourismthailand.org/Destinations/Provinces/Chanthaburi/463", color: "#91b8aa"
  },
  {
    region: "ภาคตะวันตก", english: "WEST", name: "กาญจนบุรี", roman: "KANCHANABURI", image: "assets/kanchanaburi.jpg",
    imageAlt: "ภาพถ่ายน้ำตกเอราวัณ จังหวัดกาญจนบุรี", imageLabel: "ERAWAN WATERFALL / KANCHANABURI",
    teaser: "สายน้ำ ป่าเขา และรอยอดีต", tagline: "ให้ธรรมชาติและประวัติศาสตร์พาเราเดินทาง",
    description: "กาญจนบุรีมีภูเขาและแม่น้ำโอบล้อมเมือง น้ำตกเอราวัณเหมาะกับวันพักใจ ขณะที่สะพานข้ามแม่น้ำแควและทางรถไฟสายประวัติศาสตร์บอกเล่าเรื่องราวอีกด้านของจังหวัด",
    mood: "น้ำตก · ประวัติศาสตร์", forWho: "สายธรรมชาติและทริปสุดสัปดาห์",
    places: [["น้ำตกเอราวัณ", "เดินตามเส้นทางธรรมชาติและชมน้ำตกหลายชั้น"], ["สะพานข้ามแม่น้ำแคว", "แลนด์มาร์กที่เชื่อมกับประวัติศาสตร์สงครามโลกครั้งที่สอง"], ["ทางรถไฟสายมรณะ", "เรียนรู้เรื่องราวผ่านเส้นทางรถไฟเลียบภูเขา"]],
    food: [["อาหารพื้นบ้านริมแคว", "ลองเมนูปลาและผักท้องถิ่นในร้านริมแม่น้ำ"], ["แกงป่า", "รสเผ็ดหอมสมุนไพร เหมาะกับมื้อหลังเที่ยวป่า"]],
    stays: [["แพพักริมน้ำ", "ฟังเสียงน้ำและชมหมอกยามเช้า"], ["ที่พักใกล้อุทยาน", "สะดวกสำหรับออกไปเที่ยวน้ำตกแต่เช้า"]],
    route: "เช้า น้ำตกเอราวัณ → บ่าย เดินเล่นสะพานข้ามแม่น้ำแคว → เย็น พักริมแคว",
    tip: "ตรวจประกาศอุทยานก่อนเข้าชมน้ำตก โดยเฉพาะช่วงฝนมาก", source: "https://www.tourismthailand.org/Destinations/Provinces/kanchanaburi/222", color: "#8ebdb6"
  },
  {
    region: "ภาคใต้", english: "SOUTH", name: "กระบี่", roman: "KRABI", image: "assets/krabi.jpg",
    imageAlt: "ภาพถ่ายหน้าผาหินปูนและทะเลสีฟ้าที่หาดไร่เลย์ จังหวัดกระบี่", imageLabel: "RAILAY BEACH / KRABI",
    teaser: "สีครามที่อยากกลับไปหา", tagline: "ทะเลสีฟ้าและภูเขาหินปูนที่จำได้ไม่ลืม",
    description: "กระบี่มีทั้งหน้าผาสูง หาดทราย และหมู่เกาะ อ่าวนางเป็นจุดเริ่มล่องเรือไปไร่เลย์ ส่วนใครชอบเดินทางแบบแอ็กทีฟก็มีพายคายัก ปีนผา และดำน้ำให้เลือก",
    mood: "ทะเลอันดามัน · หน้าผา", forWho: "คนรักทะเลและกิจกรรมกลางแจ้ง",
    places: [["หาดไร่เลย์", "เดินเล่นใต้หน้าผาหินปูนและชมทะเลอันดามัน"], ["อ่าวนาง", "จุดเริ่มต้นทริปล่องเรือและเดินเล่นริมทะเล"], ["ทะเลแหวก", "ชมสันทรายเชื่อมเกาะเมื่อระดับน้ำเหมาะสม"]],
    food: [["อาหารทะเลสด", "เลือกชิมปลา กุ้ง และหอยในร้านท้องถิ่น"], ["ขนมจีนแกงใต้", "มื้อเช้ารสจัด กินกับผักสดหลากชนิด"]],
    stays: [["ที่พักอ่าวนาง", "สะดวกต่อการต่อเรือและหาร้านอาหาร"], ["บังกะโลใกล้หาด", "พักสบาย ๆ ใกล้เสียงคลื่นและแสงเช้า"]],
    route: "เช้า ล่องเรือจากอ่าวนาง → บ่าย เที่ยวไร่เลย์ → เย็น ชมพระอาทิตย์ตก",
    tip: "เช็กคลื่นลมและตารางเรือก่อนออกทะเล", source: "https://www.tourismthailand.org/Destinations/Provinces/Krabi/344", color: "#82c8c3"
  }
];

const grid = document.querySelector("#destination-grid");
const feature = document.querySelector("#journey");
let currentIndex = 0;

grid.innerHTML = destinations.map((item, index) => `
  <button class="destination-card" type="button" data-index="${index}" aria-label="อ่านเรื่องราว${item.region} จังหวัด${item.name}" aria-pressed="${index === 0}">
    <img src="${item.image}" alt="${item.imageAlt}" loading="lazy" width="1600" height="1067">
    <span class="card-shade"></span>
    <span class="card-top"><span>${String(index + 1).padStart(2, "0")} / 06</span><span>${item.english}</span></span>
    <span class="card-bottom"><span><small>${item.region}</small><strong>${item.name}</strong><em>${item.teaser}</em></span><span class="card-arrow" aria-hidden="true">↗</span></span>
  </button>
`).join("");

function renderItems(selector, items) {
  document.querySelector(selector).innerHTML = items.map(([name, description]) => `
    <div class="detail-item"><strong>${name}</strong><p>${description}</p></div>
  `).join("");
}

function selectDestination(index, scrollToFeature = false) {
  currentIndex = (index + destinations.length) % destinations.length;
  const item = destinations[currentIndex];
  feature.style.setProperty("--destination-accent", item.color);
  document.querySelector("#feature-counter").textContent = `${String(currentIndex + 1).padStart(2, "0")} — 06`;
  document.querySelector("#feature-image").src = item.image;
  document.querySelector("#feature-image").alt = item.imageAlt;
  document.querySelector("#feature-image-label").textContent = item.imageLabel;
  document.querySelector("#feature-region").textContent = item.region;
  document.querySelector("#feature-en").textContent = item.roman;
  document.querySelector("#feature-heading").textContent = item.name;
  document.querySelector("#feature-tagline").textContent = item.tagline;
  document.querySelector("#feature-description").textContent = item.description;
  document.querySelector("#feature-mood").textContent = item.mood;
  document.querySelector("#feature-for").textContent = item.forWho;
  document.querySelector("#feature-source").href = item.source;
  document.querySelector("#feature-route").textContent = item.route;
  document.querySelector("#feature-tip").textContent = item.tip;
  renderItems("#feature-places", item.places);
  renderItems("#feature-food", item.food);
  renderItems("#feature-stays", item.stays);
  grid.querySelectorAll(".destination-card").forEach((card, cardIndex) => {
    card.setAttribute("aria-pressed", String(cardIndex === currentIndex));
  });
  if (scrollToFeature) feature.scrollIntoView({ behavior: "smooth", block: "start" });
}

grid.addEventListener("click", (event) => {
  const card = event.target.closest(".destination-card");
  if (card) selectDestination(Number(card.dataset.index), true);
});
document.querySelector("#previous-button").addEventListener("click", () => selectDestination(currentIndex - 1));
document.querySelector("#next-button").addEventListener("click", () => selectDestination(currentIndex + 1));
selectDestination(0);

const header = document.querySelector("#site-header");
const menuButton = document.querySelector("#menu-button");
const navLinks = document.querySelector("#nav-links");
const updateHeader = () => header.classList.toggle("is-scrolled", window.scrollY > 40);
window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();
menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") !== "true";
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "ปิดเมนู" : "เปิดเมนู");
  navLinks.classList.toggle("is-open", open);
});
navLinks.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  navLinks.classList.remove("is-open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "เปิดเมนู");
}));
