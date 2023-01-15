const Products = [
  {
    id: 1,
    name: 'Karambit Doppler',
    price: 200,
    img: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfxPrMfipP7dezhr-KmsjmJrnIqWZQ-sd9j-Db8IjKhF2zowdyNj37cYaQcQ8_NF7Zr1Dqwb270cPv6Z_Izydj7CkjtHrelkThhxwaP_sv26JqHcKn6w',
    description: 'Faca tradicional indonésia, tem uma lâmina curva e é usada para cortar e esculpir.',
  },
  {
    id: 2,
    name: 'M9 Bayonet Rust Coast',
    price: 150,
    img: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-KhsjnJ77UmlRa5sx3j9bJ8I3jkRrs_UVkNWD0cdWSJlQ3ZA2C_lXqyOju1JLqtcifznc36SFz4C3elhTin1gSOcF0uSB4',
    description: 'Faca americana usada para combate corpo a corpo.',
  },
  {
    id: 3,
    name: 'AK-47',
    price: 300,
    img: '',
    description: 'Arma de assalto soviética, muito usada em combates urbanos.',
  },
  {
    id: 4,
    name: 'AWP Asiimov',
    price: 450,
    img: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PLfYQJD_9W7m5a0n_L1JaKfzzoGuJJ02e2W8d6m2gztrkRoZmigItDGcgA_N1iFqwC-xr_m1J-57YOJlyVerprbwA',
    description: 'Arma de precisão, usada para eliminar alvos a longa distância.',
  },
];

/**
 * [getAllProducts description]
 *
 * @return  {[array]}  [return lista de todos produtos cadastrados]
 */
function getAllProducts() {
  return Products;
}

/**
 *
 * @param {number} id
 * @returns Retorna skin com o ID informado
 */
function getProductById(id) {
  return Products.filter((product) => product.id === id)[0];
}

/**
 *
 * @param {number} id
 * @returns Retorna skin com o nome informado
 */
function getProductByName(name) {
  return Products.filter((product) => product.name === name)[0];
}
