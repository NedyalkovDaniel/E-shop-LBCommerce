const products = [
  {
    id: 1,
    name: "ELIT Течност за чистачки лятна концентрат ",
    category: "Течност за чистачки",
    code: "ELITS1L",
    type: "Лятна",
    brand: "ELIT",
    package: "1л.",
    price: 2,
    image: "/ELITS1L.png"
  },
  {
    id: 2,
    name: "Castrol edge 5w30 1l",
    category: "Масла",
    code: "CE5W301L",
    type: "5w30",
    brand: "Castrol",
    package: "1л.",
    price: 25.00,
    image: "/CE5W301L.png"
  },
  {
    id: 3,
    name: "Castrol edge 5w30 5l",
    category: "Масла",
    code: "CE5W305L",
    type: "5w30",
    brand: "Castrol",
    package: "5л.",
    price: 105.00,
    image: "/CE5W305L.png"
  },
  {
    id: 4,
    name: "Castrol edge 5w40 1l",
    category: "Масла",
    code: "CE5W401L",
    type: "5w40",
    brand: "Castrol",
    package: "1л.",
    price: 25.00,
    image: "/CE5W401L.png"
  },
  {
    id: 5,
    name: "Castrol edge 5w40 5l",
    category: "Масла",
    code: "CE5W405L",
    type: "5w40",
    brand: "Castrol",
    package: "5л.",
    price: 105.00,
    image: "/CE5W405L.png"
  },   
  {
    id: 6,
    name: "Castrol edge 5w40 4l",
    category: "Масла",
    code: "CE5W404L",
    type: "5w40",
    brand: "Castrol",
    package: "4л.",
    price: 95.00,
    image: "/CE5W404L.png"
  },  
  {
    id: 7,
    name: "Zxz 70AH 630A",
    category: "Акумулатори",
    code: "ZXZ70",
    type: "Стандартни клеми",
    brand: "ZXZ",
    package: "70AH",
    price: 230.00,
    image: "/ZXZ.png"
  },  
  {
    id: 8,
    name: "Zxz 100AH 820A",
    category: "Акумулатори",
    code: "ZXZ100",
    type: "Стандартни клеми",
    brand: "ZXZ",
    package: "100AH",
    price: 311.00,
    image: "/ZXZ.png"
  },  
  {
    id: 9,
    name: "Zxz 45AH 360A",
    category: "Акумулатори",
    code: "ZXZ45",
    type: "Стандартни клеми",
    brand: "ZXZ",
    package: "100AH",
    price: 176.00,
    image: "/ZXZ.png"
  },  
  {
    id: 10,
    name: "Zxz Maxima 50AH 450A",
    category: "Акумулатори",
    code: "ZXZM50",
    type: "Стандартни клеми",
    brand: "ZXZ",
    package: "50AH",
    price: 213.00,
    image: "/ZXZM.png"
  },  
  {
    id: 11,
    name: "Hepu P999-GRN",
    category: "Антифризи",
    code: "HEPUGRN",
    type: "Зелен",
    brand: "Hepu",
    package: "1.5л",
    price: 19.00,
    image: "/HEPUGRN.png"
  },  
  {
    id: 12,
    name: "Hepu P999-YLW",
    category: "Антифризи",
    code: "HEPUGRN",
    type: "Жълт",
    brand: "Hepu",
    package: "1.5л",
    price: 19.00,
    image: "/HEPUYLW.png"
  },  
  {
    id: 13,
    name: "Hepu P999-G11",
    category: "Антифризи",
    code: "HEPUGRN",
    type: "Син",
    brand: "Hepu",
    package: "1.5л",
    price: 19.00,
    image: "/HEPUG11.png"
  },
  {
    id: 14,
    name: "Hepu P999-G12",
    category: "Антифризи",
    code: "HEPUGRN",
    type: "Червен",
    brand: "Hepu",
    package: "1.5л",
    price: 19.00,
    image: "/HEPUG12.png"
  },
  {
    id: 15,
    name: "Hella 0.5L DOT4 ",
    category: "Спирачна течност",
    code: "8DF 355 360-011",
    type: "DOT4",
    brand: "HELLA PAGID",
    package: "0.5л",
    price: 11.00,
    image: "/HELLA0.5.png"
  },
  {
    id: 16,
    name: "Hella 1L DOT4 ",
    category: "Спирачна течност",
    code: "8DF 355 360-011",
    type: "DOT4",
    brand: "HELLA PAGID",
    package: "1л",
    price: 21.00,
    image: "/HELLA1.png"
  },
  {
    id: 17,
    name: "Ferodo 0.5L DOT4 ",
    category: "Спирачна течност",
    code: "FBX050B",
    type: "DOT4",
    brand: "DERODO",
    package: "0.5л",
    price: 12.00,
    image: "/FERODO0.5.png"
  },
  {
    id: 18,
    name: "Ferodo 1L DOT4 ",
    category: "Спирачна течност",
    code: "FBX100B",
    type: "DOT4",
    brand: "FERODO",
    package: "1л",
    price: 21.00,
    image: "/FERODO1.png"
  },
  {
    id: 19,
    name: "МАРКУЧ ГОРИВЕН 5X10mm (външна оплетка) ",
    category: "Горивни маркучи",
    code: "77841",
    type: "5мм",
    brand: "MALO",
    package: "1м",
    price: 14.00,
    image: "/MALO.png"
  },
  {
    id: 20,
    name: "МАРКУЧ ГОРИВЕН 10X17mm (външна оплетка) ",
    category: "Горивни маркучи",
    code: "7788",
    type: "10мм",
    brand: "MALO",
    package: "1м",
    price: 15.00,
    image: "/MALO.png"
  },
  {
    id: 21,
    name: "МАРКУЧ ГОРИВЕН 10X19mm (външна оплетка) ",
    category: "Горивни маркучи",
    code: "77882",
    type: "11мм",
    brand: "MALO",
    package: "1м",
    price: 16.00,
    image: "/MALO.png"
  },
  {
    id: 22,
    name: "МАРКУЧ ГОРИВЕН 13X19mm (външна оплетка) ",
    category: "Горивни маркучи",
    code: "7789",
    type: "13мм",
    brand: "MALO",
    package: "1м",
    price: 17.00,
    image: "/MALO.png"
  },
  {
    id: 23,
    name: "Osram H4 ",
    category: "Крушки",
    code: "64193",
    type: "H4",
    brand: "Osram",
    package: "1бр.",
    price: 6.00,
    image: "/OSRAM.png"
  },
  {
    id: 24,
    name: "Osram H7 ",
    category: "Крушки",
    code: "64215",
    type: "H7",
    brand: "Osram",
    package: "1бр.",
    price: 10.00,
    image: "/OSRAM.png"
  },
  {
    id: 25,
    name: "Osram H1 ",
    category: "Крушки",
    code: "64150",
    type: "H1",
    brand: "Osram",
    package: "1бр.",
    price: 7.00,
    image: "/OSRAM.png"
  },
  {
    id: 26,
    name: "Osram H3 ",
    category: "Крушки",
    code: "64156",
    type: "H3",
    brand: "Osram",
    package: "1бр.",
    price: 5.00,
    image: "/OSRAM.png"
  },
  {
    id: 27,
    name: "ELIT Течност за чистачки зимна концентрат ",
    category: "Течност за чистачки",
    code: "ELITW1L",
    type: "Зимна",
    brand: "ELIT",
    package: "1л.",
    price: 2.00,
    image: "/ELITW1L.png"
  },
  {
    id: 28,
    name: "ELIT Течност за чистачки лятна концентрат ",
    category: "Течност за чистачки",
    code: "ELITS5L",
    type: "Лятна",
    brand: "ELIT",
    package: "5л.",
    price: 5.00,
    image: "/ELITS5L.png"
  },
  {
    id: 29,
    name: "ELIT Течност за чистачки зимна концентрат ",
    category: "Течност за чистачки",
    code: "ELITW5L",
    type: "Зимна",
    brand: "ELIT",
    package: "5л.",
    price: 5.00,
    image: "/ELITW5L.png"
  },
  {
    id: 30,
    name: "ЧИСТАЧКА ПРЕДНА (600mm)",
    category: "Чистачки",
    code: "3 397 004 673",
    type: "ECO",
    brand: "BOSCH",
    package: "1бр",
    price: 10.00,
    image: "/BOSCH.png"
  },
  {
    id: 31,
    name: "ЧИСТАЧКА ПРЕДНА (450mm)",
    category: "Чистачки",
    code: "3 397 004 668",
    type: "ECO",
    brand: "BOSCH",
    package: "1бр",
    price: 8.00,
    image: "/BOSCH.png"
  },
  {
    id: 32,
    name: "ЧИСТАЧКА ПРЕДНА (500mm)",
    category: "Чистачки",
    code: "3 397 004 670",
    type: "ECO",
    brand: "BOSCH",
    package: "1бр",
    price: 9.00,
    image: "/BOSCH.png"
  },
  {
    id: 33,
    name: "ЧИСТАЧКА ПРЕДНА (700mm)",
    category: "Чистачки",
    code: "3 397 011 549",
    type: "ECO",
    brand: "BOSCH",
    package: "1бр",
    price: 12.00,
    image: "/BOSCH.png"
  },
  {
    id: 34,
    name: "BMW E36",
    brand: "BMW",
    image: "/e36.jpg",
 
  },
  {
    id: 35,
    name: "BMW E30",
    brand: "BMW",
    image: "/e30.jpg",
 
  },
  {
    id: 36,
    name: "BMW E46",
    brand: "BMW",
    image: "/e46.jpg",
 
  },
  {
    id: 37,
    name: "BMW E34",
    brand: "BMW",
    image: "/e34.jpg",
 
  },
  {
    id: 38,
    name: "BMW E39",
    brand: "BMW",
    image: "/e39.jpg",
 
  },
  {
    id: 39,
    name: "BMW E60",
    brand: "BMW",
    image: "/e60.jpg",
 
  }
];
export default products;


