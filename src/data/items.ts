// I wanted prices to vary but also to be the same on each reload
// Seeded random function was my solution
// It definitely doesn't scale but it in a real e-commerce you would have real prices
// Also it's pretty fast so idc
function sfc32(a: number, b: number, c: number, d: number) {
  return function () {
    a >>>= 0;
    b >>>= 0;
    c >>>= 0;
    d >>>= 0;
    let t = (a + b) | 0;
    a = b ^ (b >>> 9);
    b = (c + (c << 3)) | 0;
    c = (c << 21) | (c >>> 11);
    d = (d + 1) | 0;
    t = (t + d) | 0;
    c = (c + t) | 0;
    return (t >>> 0) / 4294967296;
  };
}
const SEED = 137 ^ 0xdeadbeef;
const seededRand = sfc32(0x9e3779b9, 0x243f6a88, 0xb7e15162, SEED);

// '../images' is a path to all the images
// I wanted to put it into a variable
// but require.context variables have to be statically analyzable
// which means that it's difficult/impossible to put it into a variable
const images = importAll(
  require.context('../images', false, /\.(png|jpe?g|svg)$/)
);

function importAll(context: __WebpackModuleApi.RequireContext) {
  let images: { name: string; path: string }[] = [];
  context.keys().forEach((item: string) =>
    images.push({
      name: item.replace('./', '').replace(/\.[^/.]+$/, ''),
      path: context(item)
    })
  );
  return images;
}

const storeItems = images.map((image, index) => {
  return {
    id: index,
    name: image.name,
    price: 3000 + Math.floor(seededRand() * 10) * 100 - 500,
    imgUrl: image.path
  };
});

export default storeItems;
