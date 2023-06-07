const words = ['banana', 'grapefruit', 'orange', 'banana', 'banana', 'grapefruit', 'grapefruit', 'grapefruit'];

const fruitSort = (fruits) => {
  const map = new Map();

  for (let i = 0; i < fruits.length; i++) {
    let c = 0;

    if (map.has(fruits[i])) {
      c = map.get(fruits[i]);
      c++;
    }

    map.set(fruits[i], c);
  }

  const sortedKeys = [...map.keys()].sort((a, b) => {
    return map.get(a) - map.get(b);
  });

  return sortedKeys;
};

console.log(fruitSort(words));
