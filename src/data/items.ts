// // I wanted prices to vary but also to be the same on each reload
// // Seeded random function was my solution
// // It definitely doesn't scale but it in a real e-commerce you would have real prices
// // Also it's pretty fast so idc
// function sfc32(a: number, b: number, c: number, d: number) {
//   return function () {
//     a >>>= 0;
//     b >>>= 0;
//     c >>>= 0;
//     d >>>= 0;
//     let t = (a + b) | 0;
//     a = b ^ (b >>> 9);
//     b = (c + (c << 3)) | 0;
//     c = (c << 21) | (c >>> 11);
//     d = (d + 1) | 0;
//     t = (t + d) | 0;
//     c = (c + t) | 0;
//     return (t >>> 0) / 4294967296;
//   };
// }
// const SEED = 137 ^ 0xdeadbeef;
// const seededRand = sfc32(0x9e3779b9, 0x243f6a88, 0xb7e15162, SEED);

// const importAll = (context: __WebpackModuleApi.RequireContext) => {
//   let images: { name: string; path: string }[] = [];
//   context.keys().forEach((item: string) => {
//     console.log(item);
//     images.push({
//       name: item.replace('./', '').replace(/\.[^/.]+$/, ''),
//       path: context(item)
//     });
//   });
//   return images;
// };

// // '../images' is a path to all the images
// // I wanted to put it into a variable
// // but require.context variables have to be statically analyzable
// // which means that it's difficult/impossible to put it into a variable
// const images = importAll(
//   require.context('../images', false, /\.(png|jpe?g|svg)$/)
// );

// const storeItems = images.map((image, index) => {
//   return {
//     id: index,
//     name: image.name,
//     price: 3000 + Math.floor(seededRand() * 10) * 100 - 500,
//     imgUrl: image.path
//   };
// });

const getProps = (year: string, type: string) => {
  return {
    name: `YEAR OF THE ${year.toUpperCase()} ${type} Pen Limited Edition`,
    paths: [
      `/images/YEAR OF THE ${year.toUpperCase()} ${type} Pen Limited Edition/1.png`,
      `/images/YEAR OF THE ${year.toUpperCase()} ${type} Pen Limited Edition/2.png`,
      `/images/YEAR OF THE ${year.toUpperCase()} ${type} Pen Limited Edition/3.png`,
      `/images/YEAR OF THE ${year.toUpperCase()} ${type} Pen Limited Edition/4.png`
    ]
  };
};

const storeItems = [
  {
    id: 1,
    name: getProps('dog', 'Fountain').name,
    price: 2500,
    paths: getProps('dog', 'Fountain').paths,
    desc: 'In the Chinese zodiac, the dog symbolises loyalty, integrity and devotion to just causes. Its profound intelligence, sensitive soul and alert mind often make it the defender of universal values. A loyal friend and reliable travelling companion, this pathfinder for peace brings balance and harmony to the world. Favourable to stability and positive change, the Chinese Year of the Dog promises the union of the very best energies.'
  },
  {
    id: 2,
    name: getProps('dog', 'Roller').name,
    price: 2500,
    paths: getProps('dog', 'Roller').paths,
    desc: 'According to legend, on one particular New Year, the Emperor of Jade summoned all the animals in creation to a mysterious meeting, promising them a special reward. Only 12 animals responded to the invitation. The Emperor then gave each of the twelve a year of their own, numbered in the order of their arrival, and that year would carry their name forever. The fifth sign is the Dragon, the only mythological animal to be included in the Chinese zodiac.'
  },
  {
    id: 3,
    name: getProps('dragon', 'Fountain').name,
    price: 2500,
    paths: getProps('dragon', 'Fountain').paths,
    desc: 'According to legend, on one particular New Year, the Emperor of Jade summoned all the animals in creation to a mysterious meeting, promising them a special reward. Only 12 animals responded to the invitation. The Emperor then gave each of the twelve a year of their own, numbered in the order of their arrival, and that year would carry their name forever. The fifth sign is the Dragon, the only mythological animal to be included in the Chinese zodiac.'
  },
  {
    id: 4,
    name: getProps('dragon', 'Roller').name,
    price: 2500,
    paths: getProps('dragon', 'Roller').paths,
    desc: 'In the Chinese zodiac, the dog symbolises loyalty, integrity and devotion to just causes. Its profound intelligence, sensitive soul and alert mind often make it the defender of universal values. A loyal friend and reliable travelling companion, this pathfinder for peace brings balance and harmony to the world. Favourable to stability and positive change, the Chinese Year of the Dog promises the union of the very best energies.'
  },
  {
    id: 5,
    name: getProps('goat', 'Fountain').name,
    price: 2500,
    paths: getProps('goat', 'Fountain').paths,
    desc: 'The Chinese commonly regard sheep as an auspicious animal, and the year of the sheep, therefore, heralds a year of promise and prosperity. In Chinese astrology, Goats are described as peace-loving, kind, and popular. With the addition of the Wood element, the Goat characteristic is thought to love peace and to be helpful and trusting, but yet also to be clinging and of a nature resistant to change.'
  },
  {
    id: 6,
    name: getProps('goat', 'Roller').name,
    price: 2500,
    paths: getProps('goat', 'Roller').paths,
    desc: 'The Chinese commonly regard sheep as an auspicious animal, and the year of the sheep, therefore, heralds a year of promise and prosperity. In Chinese astrology, Goats are described as peace-loving, kind, and popular. With the addition of the Wood element, the Goat characteristic is thought to love peace and to be helpful and trusting, but yet also to be clinging and of a nature resistant to change.'
  },
  {
    id: 7,
    name: getProps('horse', 'Fountain').name,
    price: 2500,
    paths: getProps('horse', 'Fountain').paths,
    desc: 'According to legend, at one Chinese New year the Emperor of Jade summoned all the animals in creation to his palace, promising them a valuable gift. Only 12 answered the mysterious invitation and the Emperor awarded each of them a year of the Zodiac in the order of their arrival.'
  },
  {
    id: 8,
    name: getProps('horse', 'Roller').name,
    price: 2500,
    paths: getProps('horse', 'Roller').paths,
    desc: 'According to legend, at one Chinese New year the Emperor of Jade summoned all the animals in creation to his palace, promising them a valuable gift. Only 12 answered the mysterious invitation and the Emperor awarded each of them a year of the Zodiac in the order of their arrival.'
  },
  {
    id: 9,
    name: getProps('monkey', 'Fountain').name,
    price: 2500,
    paths: getProps('monkey', 'Fountain').paths,
    desc: 'Endowed with a thirst for learning and a vivid imagination, the monkey is one of the most creative signs of the Chinese zodiac. These passionate beings have a creative mind and love a good challenge. Their intelligence and proven cleverness nurture social relationships, thus promising an exceptionally ingenious year.'
  },
  {
    id: 10,
    name: getProps('monkey', 'Roller').name,
    price: 2500,
    paths: getProps('monkey', 'Roller').paths,
    desc: 'Endowed with a thirst for learning and a vivid imagination, the monkey is one of the most creative signs of the Chinese zodiac. These passionate beings have a creative mind and love a good challenge. Their intelligence and proven cleverness nurture social relationships, thus promising an exceptionally ingenious year.'
  },
  {
    id: 11,
    name: getProps('ox', 'Fountain').name,
    price: 2500,
    paths: getProps('ox', 'Fountain').paths,
    desc: 'In the Chinese zodiac, the ox symbolises good fortune and prosperity. The year of the ox will be punctuated by numerous challenges, and if the effort made is sufficient, success will be guaranteed. A year under the aegis of the ox is therefore often synonymous with ambition and the consolidation of achievements.'
  },
  {
    id: 12,
    name: getProps('ox', 'Roller').name,
    price: 2500,
    paths: getProps('ox', 'Roller').paths,
    desc: 'In the Chinese zodiac, the ox symbolises good fortune and prosperity. The year of the ox will be punctuated by numerous challenges, and if the effort made is sufficient, success will be guaranteed. A year under the aegis of the ox is therefore often synonymous with ambition and the consolidation of achievements.'
  },
  {
    id: 13,
    name: getProps('pig', 'Fountain').name,
    price: 2500,
    paths: getProps('pig', 'Fountain').paths,
    desc: 'The joyful silhouette of the Pig appears on a glossy black Chinese lacquer background, patiently applied layer after layer, according to ancestral tradition. The delicately engraved design presents the animal in a joyful position, surrounding the body of the writing instrument with its friendly smile facing the observer. The lines and swirls in hot gold foil that define its shape leap forth from the black Chinese lacquer to create the noblest of contrasts.'
  },
  {
    id: 14,
    name: getProps('pig', 'Roller').name,
    price: 2500,
    paths: getProps('pig', 'Roller').paths,
    desc: 'The joyful silhouette of the Pig appears on a glossy black Chinese lacquer background, patiently applied layer after layer, according to ancestral tradition. The delicately engraved design presents the animal in a joyful position, surrounding the body of the writing instrument with its friendly smile facing the observer. The lines and swirls in hot gold foil that define its shape leap forth from the black Chinese lacquer to create the noblest of contrasts.'
  },
  {
    id: 15,
    name: getProps('rooster', 'Fountain').name,
    price: 2500,
    paths: getProps('rooster', 'Fountain').paths,
    desc: 'In the Chinese Zodiac, the rooster symbolises the sun’s energy, intelligence and the art of appearances. Brave, methodical and precise, the Rooster is successful and aims for excellence. Its profound honesty is an asset in its partnerships and alliances. Its exceptional strength of conviction and sparkling charisma often position it as a leading figure. Considerate and sensitive to the well-being of loved ones, the rooster protects family relationships, pledging peace and harmony.'
  },
  {
    id: 16,
    name: getProps('rooster', 'Roller').name,
    price: 2500,
    paths: getProps('rooster', 'Roller').paths,
    desc: 'In the Chinese Zodiac, the rooster symbolises the sun’s energy, intelligence and the art of appearances. Brave, methodical and precise, the Rooster is successful and aims for excellence. Its profound honesty is an asset in its partnerships and alliances. Its exceptional strength of conviction and sparkling charisma often position it as a leading figure. Considerate and sensitive to the well-being of loved ones, the rooster protects family relationships, pledging peace and harmony.'
  },
  {
    id: 17,
    name: getProps('snake', 'Fountain').name,
    price: 2500,
    paths: getProps('snake', 'Fountain').paths,
    desc: 'Following the Dragon, the legendary founder of Chinese civilisation, it is now the turn of its brother symbol, the Snake. In fact, the Dragon takes the form of a snake on Earth, and the two are linked together in Chinese astrology. They share intelligence, beauty, knowledge, magic and mystery. In Chinese mythology, the two are civilising divinities who originated human beings and are traditionally shown in the bodies of snakes. Entwined together to become one, they create order on earth and transmit knowledge.'
  },
  {
    id: 18,
    name: getProps('snake', 'Roller').name,
    price: 2500,
    paths: getProps('snake', 'Roller').paths,
    desc: 'Following the Dragon, the legendary founder of Chinese civilisation, it is now the turn of its brother symbol, the Snake. In fact, the Dragon takes the form of a snake on Earth, and the two are linked together in Chinese astrology. They share intelligence, beauty, knowledge, magic and mystery. In Chinese mythology, the two are civilising divinities who originated human beings and are traditionally shown in the bodies of snakes. Entwined together to become one, they create order on earth and transmit knowledge.'
  }
];

export default storeItems;
