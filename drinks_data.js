const barRange = {
  coffee: [],
  alcohol: [],
};

var sugarPrice = 0.25;

function Drink(title, price, img) {
  this.title = title;
  this.price = price;
  this.img = img;
}

const espresso = new Drink(
  "espresso",
  10 + "💲",
  "./images/coffee/espresso.jpg"
);
const americano = new Drink(
  "americano",
  15 + "💲",
  "./images/coffee/americano.jpg"
);
const capuchino = new Drink(
  "capuchino",
  20 + "💲",
  "./images/coffee/capuchino.jpg"
);
const latte = new Drink("latte", 20 + "💲", "./images/coffee/latte.jpg");
const macchiato = new Drink(
  "macchiato",
  20 + "💲",
  "./images/coffee/macchiato.jpg"
);
const flat_white = new Drink(
  "flat-white",
  25 + "💲",
  "./images/coffee/flat_white.jpg"
);
const red_eye = new Drink("red-eye", 18 + "💲", "./images/coffee/red-eye.jpg");
const irish_coffee = new Drink(
  "irish-coffee",
  25 + "💲",
  "./images/coffee/coffee-irish.jpg"
);

barRange.coffee.push(espresso);
barRange.coffee.push(americano);
barRange.coffee.push(capuchino);
barRange.coffee.push(latte);
barRange.coffee.push(macchiato);
barRange.coffee.push(flat_white);
barRange.coffee.push(red_eye);
barRange.coffee.push(irish_coffee);

const chivas_regal = new Drink(
  "chivas-regal",
  90 + "💲",
  "./images/alcohol/chivas-regal.jpg"
);
const dalmore = new Drink(
  "dalmore",
  70 + "💲",
  "./images/alcohol/Dalmore_15_Years_Old.jpg"
);
const glenfiddich = new Drink(
  "glenfiddich",
  60 + "💲",
  "./images/alcohol/glenfiddich.jpg"
);
const jameson = new Drink("jameson", 75 + "💲", "./images/alcohol/jameson.jpg");
const proper_no_twelve = new Drink(
  "proper-no-twelve",
  65 + "💲",
  "./images/alcohol/proper-no-twelve.jpg"
);
const glenturret = new Drink(
  "glenturret",
  75 + "💲",
  "./images/alcohol/glenturret.jpg"
);
const teeling = new Drink("teeling", 75 + "💲", "./images/alcohol/teeling.jpg");
const jim_beam = new Drink(
  "jim-beam",
  80 + "💲",
  "./images/alcohol/jim-beam.jpg"
);
const eagle_rare = new Drink(
  "eagle-rare",
  85 + "💲",
  "./images/alcohol/eagle-rare.jpg"
);

barRange.alcohol.push(chivas_regal);
barRange.alcohol.push(dalmore);
barRange.alcohol.push(glenfiddich);
barRange.alcohol.push(jameson);
barRange.alcohol.push(proper_no_twelve);
barRange.alcohol.push(glenturret);
barRange.alcohol.push(teeling);
barRange.alcohol.push(jim_beam);
barRange.alcohol.push(eagle_rare);
