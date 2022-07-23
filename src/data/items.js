// '../images' is a path to all the images
// I wanted to put it into a variable
// but require.context vars have to be statically analyzable
// which means that it's difficult/impossible to put it in a variable
const images = importAll(
  require.context('../images', false, /\.(png|jpe?g|svg)$/)
);

function importAll(r) {
  let images = {};
  r.keys().forEach((item) => (images[item.replace('./', '')] = r(item)));
  return images;
}

const storeItems = Object.keys(images).map((name, index) => {
  return {
    id: index,
    name: name,
    price: 3000,
    imgUrl: images[name]
  };
});

export default storeItems;
