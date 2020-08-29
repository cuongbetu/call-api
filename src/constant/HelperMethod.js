export const formatMoney = (price) => {
  let formated = new Intl.NumberFormat("vn-VN");
  return formated.format(price);
};

export const findIndex = (products, id) => {
  var result = -1;
  products.forEach((product, index) => {
    if (product.id === id) {
      result = index;
    }
  });
  return result;
};

export const randomID = () => {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
};
