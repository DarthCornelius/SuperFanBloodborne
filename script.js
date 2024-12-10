var centralSelect = false;
var oldSelect = false;
var wardSelect = false;
var upperSelect = false;
var boss = 0;
var oldie = 0;
var locationImg = 1;
var buttonSound = document.getElementById("buttonSound");
var newLocation = document.getElementById("newLocation");
var tour = false;

function sizeReset() {
  document.getElementById("mainText").classList.remove("small2");
  document.getElementById("mainText").classList.add("box2");
  document.getElementById("mainImg").classList.add("box2");
  document.getElementById("mainText").classList.remove("small");
  document.getElementById("mainImg").classList.remove("big");
}
function addHoverAll() {
  document.getElementById("locals").classList.add("hover");
  document.getElementById("touristAttractions").classList.add("hover");
  document.getElementById("location").classList.add("hover");
}

function centralYharnam() {
  theme.play();
  theme4.pause();
  theme2.pause();
  theme3.pause();
  theme1.pause();
  document.getElementById("next").classList.add("invisible");
  locationImg = 1;
  newLocation.play();
  document.getElementById("mainText").classList.remove("small2");
  document.getElementById("mainText").classList.add("box2");
  document.getElementById("mainImg").classList.add("box2");
  // document.getElementById("locals").classList.add("hover");
  // document.getElementById("touristAttractions").classList.add("hover");
  // document.getElementById("location").classList.add("hover");
  addHoverAll();
  document.getElementById("locals").classList.remove("dark-grey");
  document.getElementById("touristAttractions").classList.remove("dark-grey");
  document.getElementById("location").classList.remove("dark-grey");
  document.getElementById("orange").classList.add("light-blue");
  document.getElementById("orange").classList.remove("black");
  document.getElementById("mainTitle").textContent = "Central Yharnam";
  document.getElementById("purple").classList.add("black");
  document.getElementById("yellow").classList.add("black");
  document.getElementById("gold").classList.add("black");
  document.getElementById("gold").classList.remove("light-blue");
  document.getElementById("purple").classList.remove("light-blue");
  document.getElementById("yellow").classList.remove("light-blue");
  document.getElementById("imgMain").src = "images/central.jpg";
  document.getElementById("tour-text").textContent = "Yharnam Great Bridge";
  document.getElementById("location-text").textContent = "Location";
  document.getElementById("local-text").textContent = "Locals";
  centralSelect = true;
  oldSelect = false;
  wardSelect = false;
  upperSelect = false;
  boss = 0;
  document.getElementById("imgMain").classList.remove("hover");
  sizeReset();
  document.getElementById("main-text").textContent =
    "Central Yharnam has something new around every corner. As a prosperous city located in close proximity with the Cathedral Ward and Byrgenwerth College Central Yharnam is a hub of culture and philosophy. While certainly an expensive trip the architecture and kind nature of the locals will make up for it. Here you can visit the historic Yharnam Cemetary which holds the remains of many famous hunters. Our personally recommendation for your stay here is the historic Yharnam Bonfire which is a combination of Yharnams vibrant past with the modern culture and society of the locals!";
}

function oldYharnam() {
  theme.play();
  newLocation.play();

  centralSelect = false;
  oldSelect = true;
  wardSelect = false;
  upperSelect = false;
  boss = 0;
  theme4.pause();
  theme2.pause();
  theme3.pause();
  theme1.pause();
  document.getElementById("next").classList.add("invisible");
  locationImg = 1;
  sizeReset();
  addHoverAll();
  document.getElementById("imgMain").classList.add("hover");
  document.getElementById("locals").classList.remove("dark-grey");
  document.getElementById("touristAttractions").classList.remove("dark-grey");
  document.getElementById("location").classList.remove("dark-grey");
  document.getElementById("yellow").classList.add("light-blue");
  document.getElementById("yellow").classList.remove("black");
  document.getElementById("mainTitle").textContent = "Old Yharnam";
  document.getElementById("purple").classList.add("black");
  document.getElementById("gold").classList.add("black");
  document.getElementById("orange").classList.add("black");
  document.getElementById("gold").classList.remove("light-blue");
  document.getElementById("purple").classList.remove("light-blue");
  document.getElementById("orange").classList.remove("light-blue");
  document.getElementById("imgMain").src = "images/old_yharnam_map.jpg";
  document.getElementById("tour-text").textContent =
    "Church of the Good Chalice";
  document.getElementById("location-text").textContent = "Location";
  document.getElementById("local-text").textContent = "Locals";
  document.getElementById("main-text").textContent =
    "Old Yharnam is the historic district of Yharnam located north of Central Yharnam and east of the Cathedral Ward. Here the infamous branch of Hunters known as Powder Kegs based their organization as they pushed the limits of technology and revolutionized hunting. Eventually they clashed with the Workshop and their organization ceased to exist but their legacy lives on in the arsenals of Hunters to this very day. Old Yharnam is also the site of the infamous Ashen Blood epidemic which was thankfully ended when Saint Laurence and the Healing Church arrived with their miraculous healing blood and saved the city. This is the event that gave rise to the Healing Church which caused the prosperity and expansion of Yharnam as the center of the new church's power. When visiting Old Yharnam be sure to take note of the historic sites and appreciate the long and storied past of this part of Yharnam.";
}
function cathedralWard() {
  theme.play();
  newLocation.play();

  centralSelect = false;
  oldSelect = false;
  wardSelect = true;
  upperSelect = false;
  boss = 0;
  theme4.pause();
  theme2.pause();
  theme3.pause();
  theme1.pause();
  document.getElementById("next").classList.add("invisible");
  locationImg = 1;
  sizeReset();
  addHoverAll();
  document.getElementById("imgMain").classList.remove("hover");
  document.getElementById("locals").classList.remove("dark-grey");
  document.getElementById("touristAttractions").classList.remove("dark-grey");
  document.getElementById("location").classList.remove("dark-grey");
  document.getElementById("purple").classList.add("light-blue");
  document.getElementById("purple").classList.remove("black");
  document.getElementById("mainTitle").textContent = "Cathedral Ward";
  document.getElementById("gold").classList.add("black");
  document.getElementById("yellow").classList.add("black");
  document.getElementById("orange").classList.add("black");
  document.getElementById("gold").classList.remove("light-blue");
  document.getElementById("yellow").classList.remove("light-blue");
  document.getElementById("orange").classList.remove("light-blue");
  document.getElementById("imgMain").src = "images/cathedral.jpg";
  document.getElementById("tour-text").textContent = "Grand Cathedral";
  document.getElementById("location-text").textContent = "Location";
  document.getElementById("local-text").textContent = "Locals";
  document.getElementById("main-text").textContent =
    "The Cathedral Ward is our most popular destination and for good reason. Prepared to be awestruck by the majesty and power of the Healing Church's center of operations. True to it's name the Cathedral Ward hosts both the greatest Cathedrals and Church centers of worship. The sheer quantity of religious iconography and the changing of the Choir Guard are the most popular attractions. Witness firsthand the majesty of the Amygdala statues and enter the main plaza of the Cathedral Ward under the protection of the Church Giants. Here in the Cathedral Ward is also the Hunter's Workshop where the weapons of the Hunters are made and it is even rumored that somewhere hidden in the ward is the near mythical Abandoned Workshop. If Hunters don't suit you then maybe you should visit Oedon Chapel, and old church who's doors are always open to those in need. So what are you waiting for? Book your visit today!.";
}
function upperWard() {
  theme.play();
  newLocation.play();

  centralSelect = false;
  oldSelect = false;
  wardSelect = false;
  upperSelect = true;
  boss = 0;
  theme4.pause();
  theme2.pause();
  theme3.pause();
  theme1.pause();
  document.getElementById("next").classList.add("invisible");
  locationImg = 1;

  sizeReset();
  addHoverAll();
  document.getElementById("imgMain").classList.remove("hover");
  document.getElementById("locals").classList.remove("dark-grey");
  document.getElementById("touristAttractions").classList.remove("dark-grey");
  document.getElementById("location").classList.remove("dark-grey");
  document.getElementById("gold").classList.add("light-blue");
  document.getElementById("gold").classList.remove("black");
  document.getElementById("mainTitle").textContent = "Upper Cathedral Ward";
  document.getElementById("purple").classList.add("black");
  document.getElementById("yellow").classList.add("black");
  document.getElementById("orange").classList.add("black");
  document.getElementById("yellow").classList.remove("light-blue");
  document.getElementById("purple").classList.remove("light-blue");
  document.getElementById("orange").classList.remove("light-blue");
  document.getElementById("imgMain").src = "images/upper.webp";
  document.getElementById("tour-text").textContent = "Altar of Despair";
  document.getElementById("location-text").textContent = "Location";
  document.getElementById("local-text").textContent = "Locals";
  document.getElementById("main-text").textContent =
    "Upper Cathedral Ward is home to the highest and most secretive group in the Healing Church, The Choir. Entry to the Upper Cathedral Ward is very limited and tours are very rare so I would recommend booking far in advance. If you do have the privelege to enter the Upper Cathedral Ward then you will have an exclusive look inside of the inner workings of the Choir and the top-secret research that they do. Our Favorite part of the tour is the visit to the beautiful Lumenflower Garden maintained by the Choir. Lumenflowers are extremely rare and the Choir holds the only known location where they exist so I would strongly recommend booking a tour today!";
}
var theme = document.getElementById("dreamTheme");
var theme1 = document.getElementById("guacTheme");
var theme2 = document.getElementById("bloodyTheme");
var theme3 = document.getElementById("vicarTheme");
var theme4 = document.getElementById("cosmosTheme");

function soundPlay() {
  if (oldSelect == true && boss == 0 && oldie == 0) {
    oldie = 1;
    document.getElementById("imgMain").src = "images/old_yharnam_map2.webp";
  } else if (oldSelect == true && boss == 0 && oldie == 1) {
    oldie = 0;
    buttonSound.play();

    document.getElementById("imgMain").src = "images/old_yharnam_map.jpg";
  } else if (boss == 1) {
    theme.pause();
    theme2.pause();
    theme3.pause();
    theme4.pause();
    theme1.play();
    buttonSound.play();
  } else if (boss == 2) {
    theme2.play();
    theme.pause();
    theme1.pause();
    theme3.pause();
    theme4.pause();
    buttonSound.play();
  } else if (boss == 3) {
    theme.pause();
    theme2.pause();
    theme1.pause();
    theme4.pause();
    theme3.play();
    buttonSound.play();
  } else if (boss == 4) {
    theme4.play();
    theme.pause();
    theme2.pause();
    theme3.pause();
    theme1.pause();
    buttonSound.play();
  } else {
    theme.play();
    theme.loop();
  }
}
if (boss == 0) {
  theme.play();
}
function localSelect() {
  if (centralSelect == true) {
    buttonSound.play();
    boss = 1;
    document.getElementById("next").classList.add("invisible");
    locationImg = 1;
    document.getElementById("imgMain").classList.add("hover");
    sizeReset();
    document.getElementById("main-text").textContent =
      "Gascoigne was a priest in a foreign land, where he earned the title of Father. At some point in his life, Gascoigne travelled to Yharnam and eventually joined the Healing Church as a hunter. From here, Gascoigne was partnered with Henryk, an older hunter. The two made an effective duo, and their partnership led to Henryk's 'tragically' long life. At some point, Father Gascoigne took a wife by the name of Viola and the pair had children. As Gascoigne continued to hunt, he became affected by the bloodlust, forgetting even his family.";
    document.getElementById("mainTitle").textContent = "Father Gascoigne";
    document.getElementById("locals").classList.add("dark-grey");
    document.getElementById("imgMain").src = "images/fatherg.webp";
    document.getElementById("location").classList.remove("dark-grey");
    document.getElementById("touristAttractions").classList.remove("dark-grey");
  } else if (oldSelect == true) {
    boss = 2;
    document.getElementById("next").classList.add("invisible");
    locationImg = 1;
    buttonSound.play();

    document.getElementById("imgMain").classList.add("hover");
    sizeReset();
    document.getElementById("main-text").textContent =
      "The Blood-Starved Beast is a malnourished beast that resides in Old Yharnam. He was once afflicted with the Ashen Blood Plague and now this beasts very blood is poisonous to any hunter unfortunate enough to cross it's path. There are multiple Blood-Starved Beasts in Old Yharnam but the rest have fallen victim to hunters and this is the last living one left. His lair is the Church of the Good Chalice and he has taken the Pthumerian Chalice, an artifact of priceless value that is essential to enter the Chalice Dungeons below Yharnam.";
    document.getElementById("mainTitle").textContent = "Blood-Starved Beast";
    document.getElementById("locals").classList.add("dark-grey");
    document.getElementById("imgMain").src = "images/bloodstarved.webp";
    document.getElementById("location").classList.remove("dark-grey");
    document.getElementById("touristAttractions").classList.remove("dark-grey");
  } else if (wardSelect == true) {
    boss = 3;
    buttonSound.play();

    document.getElementById("next").classList.add("invisible");
    locationImg = 1;

    document.getElementById("imgMain").classList.add("hover");
    sizeReset();
    document.getElementById("mainTitle").textContent = "Vicar Amelia";
    document.getElementById("main-text").textContent =
      "Vicar Amelia is a high ranking member of the Church who is considered by many to be the heir to Laurence, the First Vicar and Founder of the Healing Church. She leads the members of the Church in Prayer in the Grand Cathedral and is the protector of Laurence's remains. Vicar Amelia is rumored to have great healing powers and her prayers are known to revitalize the injured and afflicted. Amelia still holds on to Laurence's golden pendant which is a reminder to all Vicars of the old adage: We are born of the Blood. Made men by the Blood. Undone by the Blood. Fear the Old Blood.";
    document.getElementById("locals").classList.add("dark-grey");
    document.getElementById("imgMain").src = "images/vicar.png";
    document.getElementById("location").classList.remove("dark-grey");
    document.getElementById("touristAttractions").classList.remove("dark-grey");
  } else if (upperSelect == true) {
    boss = 4;
    document.getElementById("next").classList.add("invisible");
    locationImg = 1;
    buttonSound.play();

    document.getElementById("main-text").textContent =
      "The object of the Healing Church's worship, Ebrietas communes only with the highest members of the Church, guiding them in the ways of Blood Ministration. She is one of the Great Ones who was left behind in the old labyrinth, eventually discovered by the Healing Church. The Healing Church later founded the Choir to protect and study her. Ebrietas holds great power as it is her blood that is rumored to give birth to the Celestial Emissaries and is also said to be the origin of the Church's healing powers. Some say that she still holds power despite her abandonment and that she can even call beyond to the cosmos from whence she came in order to summon the power of a star.";
    document.getElementById("mainTitle").textContent =
      "Ebrietas, Daughter of the Cosmos";
    document.getElementById("imgMain").classList.add("hover");
    sizeReset();
    document.getElementById("imgMain").src = "images/ebrietas.webp";
    document.getElementById("location").classList.remove("dark-grey");
    document.getElementById("touristAttractions").classList.remove("dark-grey");
    document.getElementById("locals").classList.add("dark-grey");
  } else {
  }
}
function locationSelect() {
  if (centralSelect == true) {
    locationImg = 1;
    document.getElementById("imgMain").classList.remove("hover");
    buttonSound.play();
    document.getElementById("next").textContent = "NEXT";
    document.getElementById("main-text").textContent = "";
    document.getElementById("mainText").classList.remove("box2");
    document.getElementById("mainImg").classList.remove("box2");
    document.getElementById("mainText").classList.add("small2");
    document.getElementById("mainImg").classList.add("big");
    document.getElementById("next").classList.remove("invisible");
    document.getElementById("mainTitle").textContent = "1/5";
    document.getElementById("location").classList.add("dark-grey");
    document.getElementById("imgMain").src = "images/central1.avif";
    document.getElementById("touristAttractions").classList.remove("dark-grey");
    document.getElementById("locals").classList.remove("dark-grey");
  } else if (oldSelect == true) {
    locationImg = 1;
    document.getElementById("imgMain").classList.remove("hover");
    buttonSound.play();
    document.getElementById("next").textContent = "NEXT";

    document.getElementById("main-text").textContent = "";
    document.getElementById("mainText").classList.remove("box2");
    document.getElementById("mainImg").classList.remove("box2");
    document.getElementById("mainText").classList.add("small2");
    document.getElementById("mainImg").classList.add("big");
    document.getElementById("next").classList.remove("invisible");
    document.getElementById("mainTitle").textContent = "1/5";
    document.getElementById("location").classList.add("dark-grey");
    document.getElementById("imgMain").src = "images/old1.webp";
    document.getElementById("touristAttractions").classList.remove("dark-grey");
    document.getElementById("locals").classList.remove("dark-grey");
  } else if (wardSelect == true) {
    locationImg = 1;
    document.getElementById("imgMain").classList.remove("hover");
    buttonSound.play();
    document.getElementById("next").textContent = "NEXT";

    document.getElementById("main-text").textContent = "";
    document.getElementById("mainText").classList.remove("box2");
    document.getElementById("mainImg").classList.remove("box2");
    document.getElementById("mainText").classList.add("small2");
    document.getElementById("mainImg").classList.add("big");
    document.getElementById("next").classList.remove("invisible");
    document.getElementById("mainTitle").textContent = "1/5";
    document.getElementById("location").classList.add("dark-grey");
    document.getElementById("imgMain").src = "images/ward1.png";
    document.getElementById("touristAttractions").classList.remove("dark-grey");
    document.getElementById("locals").classList.remove("dark-grey");
  } else if (upperSelect == true) {
    locationImg = 1;
    document.getElementById("imgMain").classList.remove("hover");
    buttonSound.play();
    document.getElementById("next").textContent = "NEXT";

    document.getElementById("main-text").textContent = "";
    document.getElementById("mainText").classList.remove("box2");
    document.getElementById("mainImg").classList.remove("box2");
    document.getElementById("mainText").classList.add("small2");
    document.getElementById("mainImg").classList.add("big");
    document.getElementById("next").classList.remove("invisible");
    document.getElementById("mainTitle").textContent = "1/5";
    document.getElementById("location").classList.add("dark-grey");
    document.getElementById("imgMain").src = "images/upper1.webp";
    document.getElementById("touristAttractions").classList.remove("dark-grey");
    document.getElementById("locals").classList.remove("dark-grey");
  } else {
  }
}
function tourSelect() {
  if (centralSelect == true) {
    document.getElementById("next").classList.add("invisible");
    locationImg = 1;
    document.getElementById("imgMain").classList.remove("hover");
    buttonSound.play();
    tour = true;
    document.getElementById("mainText").classList.add("small");
    document.getElementById("mainImg").classList.add("big");
    document.getElementById("mainText").classList.remove("box2");
    document.getElementById("mainImg").classList.remove("box2");
    document.getElementById("mainTitle").textContent = "Yharnam Great Bridge ";
    document.getElementById("main-text").textContent = "";
    document.getElementById("touristAttractions").classList.add("dark-grey");
    document.getElementById("imgMain").src = "images/bridge.webp";
    document.getElementById("location").classList.remove("dark-grey");
    document.getElementById("locals").classList.remove("dark-grey");
    document.getElementById("next").textContent = "";
  } else if (oldSelect == true) {
    document.getElementById("next").classList.add("invisible");
    locationImg = 1;
    document.getElementById("imgMain").classList.remove("hover");
    buttonSound.play();
    tour = true;
    document.getElementById("next").textContent = "";

    document.getElementById("mainTitle").textContent =
      "Church of the Good Chalice";
    document.getElementById("main-text").textContent = "";
    document.getElementById("mainText").classList.add("small");
    document.getElementById("mainImg").classList.add("big");
    document.getElementById("mainText").classList.remove("box2");
    document.getElementById("mainImg").classList.remove("box2");
    document.getElementById("touristAttractions").classList.add("dark-grey");
    document.getElementById("imgMain").src = "images/chalice.gif";
    document.getElementById("location").classList.remove("dark-grey");
    document.getElementById("locals").classList.remove("dark-grey");
  } else if (wardSelect == true) {
    document.getElementById("next").classList.add("invisible");
    locationImg = 1;
    document.getElementById("imgMain").classList.remove("hover");
    buttonSound.play();
    tour = true;
    document.getElementById("next").textContent = "";

    document.getElementById("main-text").textContent = "";
    document.getElementById("mainText").classList.remove("box2");
    document.getElementById("mainImg").classList.remove("box2");
    document.getElementById("mainText").classList.add("small");
    document.getElementById("mainImg").classList.add("big");
    document.getElementById("mainTitle").textContent = "Grand Cathedral";
    document.getElementById("touristAttractions").classList.add("dark-grey");
    document.getElementById("imgMain").src = "images/cathedral.webp";
    document.getElementById("location").classList.remove("dark-grey");
    document.getElementById("locals").classList.remove("dark-grey");
  } else if (upperSelect == true) {
    document.getElementById("next").classList.add("invisible");
    document.getElementById("imgMain").classList.remove("hover");
    buttonSound.play();
    tour = true;
    document.getElementById("next").textContent = "";

    document.getElementById("main-text").textContent = "";
    document.getElementById("mainText").classList.remove("box2");
    document.getElementById("mainImg").classList.remove("box2");
    document.getElementById("mainText").classList.add("small");
    document.getElementById("mainImg").classList.add("big");
    locationImg = 1;

    document.getElementById("mainTitle").textContent = "Altar of Despair";
    document.getElementById("touristAttractions").classList.add("dark-grey");
    document.getElementById("imgMain").src = "images/altar.png";
    document.getElementById("location").classList.remove("dark-grey");
    document.getElementById("locals").classList.remove("dark-grey");
  } else {
  }
}
if (boss == 0) {
  document.getElementById("mainImg").classList.remove("hover");
}

function nextImg() {
  if (centralSelect == true && locationImg == 1) {
    document.getElementById("mainTitle").textContent = "2/5";
    document.getElementById("imgMain").src = "images/central2.jpg";
    locationImg = 2;
    buttonSound.play();
  } else if (centralSelect == true && locationImg == 2) {
    document.getElementById("mainTitle").textContent = "3/5";
    document.getElementById("imgMain").src = "images/central3.webp";
    buttonSound.play();

    locationImg = 3;
  } else if (centralSelect == true && locationImg == 3) {
    document.getElementById("mainTitle").textContent = "4/5";
    buttonSound.play();

    document.getElementById("imgMain").src = "images/central4.jpg";
    locationImg = 4;
  } else if (centralSelect == true && locationImg == 4) {
    document.getElementById("mainTitle").textContent = "5/5";

    document.getElementById("imgMain").src = "images/central5.jpg";

    buttonSound.play();

    locationImg = 5;
  } else if (centralSelect == true && locationImg == 5) {
    document.getElementById("mainTitle").textContent = "1/5";
    document.getElementById("imgMain").src = "images/central1.avif";
    locationImg = 1;
    buttonSound.play();
  } else if (oldSelect == true && locationImg == 1) {
    document.getElementById("mainTitle").textContent = "2/5";
    document.getElementById("imgMain").src = "images/old2.webp";
    locationImg = 2;
    buttonSound.play();
  } else if (oldSelect == true && locationImg == 2) {
    document.getElementById("mainTitle").textContent = "3/5";
    document.getElementById("imgMain").src = "images/old3.jpeg";
    locationImg = 3;
    buttonSound.play();
  } else if (oldSelect == true && locationImg == 3) {
    document.getElementById("mainTitle").textContent = "4/5";
    document.getElementById("imgMain").src = "images/old4.jpg";
    locationImg = 4;
    buttonSound.play();
  } else if (oldSelect == true && locationImg == 4) {
    document.getElementById("mainTitle").textContent = "5/5";
    document.getElementById("imgMain").src = "images/old6.jpg";
    locationImg = 5;
    buttonSound.play();
  } else if (oldSelect == true && locationImg == 5) {
    document.getElementById("mainTitle").textContent = "1/5";
    document.getElementById("imgMain").src = "images/old1.webp";
    locationImg = 1;
    buttonSound.play();
  } else if (wardSelect == true && locationImg == 1) {
    document.getElementById("mainTitle").textContent = "2/5";
    document.getElementById("imgMain").src = "images/ward2.png";
    locationImg = 2;
    buttonSound.play();
  } else if (wardSelect == true && locationImg == 2) {
    document.getElementById("mainTitle").textContent = "3/5";
    document.getElementById("imgMain").src = "images/ward3.png";
    locationImg = 3;
    buttonSound.play();
  } else if (wardSelect == true && locationImg == 3) {
    document.getElementById("mainTitle").textContent = "4/5";
    document.getElementById("imgMain").src = "images/ward4.jpg";
    locationImg = 4;
    buttonSound.play();
  } else if (wardSelect == true && locationImg == 4) {
    document.getElementById("mainTitle").textContent = "5/5";
    document.getElementById("imgMain").src = "images/ward5.webp";
    locationImg = 5;
    buttonSound.play();
  } else if (wardSelect == true && locationImg == 5) {
    document.getElementById("mainTitle").textContent = "1/5";
    document.getElementById("imgMain").src = "images/ward1.png";
    locationImg = 1;
    buttonSound.play();
  } else if (upperSelect == true && locationImg == 1) {
    document.getElementById("mainTitle").textContent = "2/5";
    document.getElementById("imgMain").src = "images/upper2.png";
    locationImg = 2;
    buttonSound.play();
  } else if (upperSelect == true && locationImg == 2) {
    document.getElementById("mainTitle").textContent = "3/5";
    document.getElementById("imgMain").src = "images/upper3.jpg";
    locationImg = 3;
    buttonSound.play();
  } else if (upperSelect == true && locationImg == 3) {
    document.getElementById("mainTitle").textContent = "4/5";
    document.getElementById("imgMain").src = "images/upper4.png";
    locationImg = 4;
    buttonSound.play();
  } else if (upperSelect == true && locationImg == 4) {
    document.getElementById("mainTitle").textContent = "5/5";
    document.getElementById("imgMain").src = "images/upper5.webp";
    locationImg = 5;
    buttonSound.play();
  } else if (upperSelect == true && locationImg == 5) {
    document.getElementById("mainTitle").textContent = "1/5";
    document.getElementById("imgMain").src = "images/upper1.webp";
    locationImg = 1;
    buttonSound.play();
  } else {
  }
}
