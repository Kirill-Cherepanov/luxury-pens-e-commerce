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
  }
  // {
  //   id: 2,
  //   name: 'YEAR OF THE DOG Roller Pen Limited Edition',
  //   price: 2500,
  //   imgUrl:
  //     '/images/YEAR OF THE DOG Roller Pen Limited Edition/YEAR OF THE DOG Roller Pen Limited Edition.png'
  // },
  // {
  //   id: 3,
  //   name: 'YEAR OF THE DRAGON Fountain Pen Limited Edition',
  //   price: 2500,
  //   imgUrl:
  //     '/images/YEAR OF THE DRAGON Fountain Pen Limited Edition/YEAR OF THE DRAGON Fountain Pen Limited Edition.png'
  // },
  // {
  //   id: 4,
  //   name: 'YEAR OF THE DRAGON Roller Pen Limited Edition',
  //   price: 2500,
  //   imgUrl:
  //     '/images/YEAR OF THE DRAGON Roller Pen Limited Edition/YEAR OF THE DRAGON Roller Pen Limited Edition.png'
  // },
  // {
  //   id: 5,
  //   name: 'YEAR OF THE GOAT Fountain Pen Limited Edition',
  //   price: 2500,
  //   imgUrl:
  //     '/images/YEAR OF THE GOAT Fountain Pen Limited Edition/YEAR OF THE GOAT Fountain Pen Limited Edition.png'
  // },
  // {
  //   id: 6,
  //   name: 'YEAR OF THE GOAT Roller Pen Limited Edition',
  //   price: 2500,
  //   imgUrl:
  //     '/images/YEAR OF THE GOAT Roller Pen Limited Edition/YEAR OF THE GOAT Roller Pen Limited Edition.png'
  // },
  // {
  //   id: 7,
  //   name: 'YEAR OF THE HORSE Fountain Pen Limited Edition',
  //   price: 2500,
  //   imgUrl:
  //     '/images/YEAR OF THE HORSE Fountain Pen Limited Edition/YEAR OF THE HORSE Fountain Pen Limited Edition.png'
  // },
  // {
  //   id: 8,
  //   name: 'YEAR OF THE HORSE Roller Pen Limited Edition',
  //   price: 2500,
  //   imgUrl:
  //     '/images/YEAR OF THE HORSE Roller Pen Limited Edition/YEAR OF THE HORSE Roller Pen Limited Edition.png'
  // },
  // {
  //   id: 9,
  //   name: 'YEAR OF THE MONKEY Fountain Pen Limited Edition',
  //   price: 2500,
  //   imgUrl:
  //     '/images/YEAR OF THE MONKEY Fountain Pen Limited Edition/YEAR OF THE MONKEY Fountain Pen Limited Edition.png'
  // },
  // {
  //   id: 10,
  //   name: 'YEAR OF THE MONKEY Roller Pen Limited Edition',
  //   price: 2500,
  //   imgUrl:
  //     '/images/YEAR OF THE MONKEY Roller Pen Limited Edition/YEAR OF THE MONKEY Roller Pen Limited Edition.png'
  // },
  // {
  //   id: 11,
  //   name: 'YEAR OF THE OX Fountain Pen Limited Edition',
  //   price: 2500,
  //   imgUrl:
  //     '/images/YEAR OF THE OX Fountain Pen Limited Edition/YEAR OF THE OX Fountain Pen Limited Edition.png'
  // },
  // {
  //   id: 12,
  //   name: 'YEAR OF THE OX Roller Pen Limited Edition',
  //   price: 2500,
  //   imgUrl:
  //     '/images/YEAR OF THE OX Roller Pen Limited Edition/YEAR OF THE OX Roller Pen Limited Edition.png'
  // },
  // {
  //   id: 13,
  //   name: 'YEAR OF THE PIG Fountain Pen Limited Edition',
  //   price: 2500,
  //   imgUrl:
  //     '/images/YEAR OF THE PIG Fountain Pen Limited Edition/YEAR OF THE PIG Fountain Pen Limited Edition.png'
  // },
  // {
  //   id: 14,
  //   name: 'YEAR OF THE PIG Roller Pen Limited Edition',
  //   price: 2500,
  //   imgUrl:
  //     '/images/YEAR OF THE PIG Roller Pen Limited Edition/YEAR OF THE PIG Roller Pen Limited Edition.png'
  // },
  // {
  //   id: 15,
  //   name: 'YEAR OF THE ROOSTER Fountain Pen Limited Edition',
  //   price: 2500,
  //   imgUrl:
  //     '/images/YEAR OF THE ROOSTER Fountain Pen Limited Edition/YEAR OF THE ROOSTER Fountain Pen Limited Edition.png'
  // },
  // {
  //   id: 16,
  //   name: 'YEAR OF THE ROOSTER Roller Pen Limited Edition',
  //   price: 2500,
  //   imgUrl:
  //     '/images/YEAR OF THE ROOSTER Roller Pen Limited Edition/YEAR OF THE ROOSTER Roller Pen Limited Edition.png'
  // },
  // {
  //   id: 17,
  //   name: 'YEAR OF THE SNAKE Fountain Pen Limited Edition',
  //   price: 2500,
  //   imgUrl:
  //     '/images/YEAR OF THE SNAKE Fountain Pen Limited Edition/YEAR OF THE SNAKE Fountain Pen Limited Edition.png'
  // },
  // {
  //   id: 18,
  //   name: 'YEAR OF THE DOG Roller Pen Limited Edition',
  //   price: 2500,
  //   imgUrl:
  //     '/images/YEAR OF THE SNAKE Roller Pen Limited Edition/YEAR OF THE SNAKE Roller Pen Limited Edition.png'
  // }
];

export default storeItems;
