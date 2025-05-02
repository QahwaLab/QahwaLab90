const categories = {
  desserts: [
      { 
        name: "Классический десерт", 
        target: "classicDeserts" 
      },
      { 
        name: "Фисташковая пахлава", 
        target: "phistaBaklava" 
      },
      { 
        name: "Пахлава с грецким орехом", 
        target: "walnutsBaklava" 
      },
      { 
        name: "Десертная тарелка", 
        target: "desertPlate" 
      },
  ],
  breakfestCat: [
    {
      name: "Завтраки", 
      target: "breakfest" 
    },
    {
      name: "", 
      target: "toastsGozleme" 
    },
],
  bar: [
      {
        name: "Чай", 
        target: "tea" 
      },
      { 
        name: "Холодные чаи", 
        target: "coldTea" 
      },
      { 
        name: "Кофе", 
        target: "coffee" 
      },
      { 
        name: "Милкшейк", 
        target: "milksheik" 
      },
      { 
        name: "Смузи", 
        target: "smoothie" 
      },
      { 
        name: "Свежевыжатый сок", 
        target: "juice" 
      },
      { 
        name: "Лимонады", 
        target: "lemonades" 
      },
      { 
        name: "Холодные напитки", 
        target: "coldDrinks" 
      },
      
  ]
};

const cardsData = {
    // breakfest: [
    //   {
    //     title: 'Разнообразный завтрак',
    //     description: 'Омлет менемен, сыр Мараш с нашей фермы, жирный сыр фета, сыр чеддер, сыр с травами, сыр тулум, булочка Мараш...',
    //     price: '1600 с',
    //     image: './img/breakfest/breakfest-mixed.png'
    //   },
    //   {
    //     title: 'Завтрак с кусочками Борека',
    //     description: 'Два вареных яйца, сыр Мараш с нашей фермы, белый сыр, сыр тулум, аджика, грецкие орехи, помидоры черри, огурец...',
    //     price: '990 с',
    //     image: './img/breakfest/breakfest-borek.png'
    //   },
    //   {
    //     title: 'Поздний завтрак',
    //     description: 'Омлет из трех яиц, колбаса, картофель фри, белый сыр, сыр "Тулум", су борек, картофельные лепешки, ажика, грецкие орехи...',
    //     price: '1450 с',
    //     image: './img/breakfest/brakfest-late.png'
    //   },
    //   {
    //     title: 'Вечерний завтрак',
    //     description: 'Сыр "Мараш" с нашей фермы, белый сыр, сыр "Тулум", 2 картофельных шашлыка, фрикадельки, йогурт, перечное масло, суп, сырые...',
    //     price: '1450 с',
    //     image: './img/breakfest/brakfest-evening.png'
    //   },
    //   {
    //     title: 'Мой завтрак',
    //     description: 'Сыр Мараш, сыр фета, сыр чеддер, Выпечка с сыром Мараш, вареное яйцо, зеленые и черные оливки, аджука, помидоры черри, огурец...',
    //     price: '750 с',
    //     image: './img/breakfest/brakfest-my.png'
    //   },
    //   {
    //     title: 'Завтрак с моно бореком',
    //     description: 'Выдержанный сыр кашкавал, белый сыр, огурец, помидоры черри, руколла, соты, каймак, аджика, грецкий орех, сушеные абрикосы, зеленые...',
    //     price: '650 с',
    //     image: './img/breakfest/brakfest-mono-borek.png'
    //   },
    //   {
    //     title: 'Завтрак с круассаном',
    //     description: 'Круассан, 2 ломтика телячьей ветчины, кашкавальский сыр, белый сыр, огурец, помидоры черри, руколла, варенье, из кислой черешни...',
    //     price: '650 с',
    //     image: './img/breakfest/brakfest-krusan.png'
    //   },
    //   {
    //     title: 'Деревенский завтрак MADO',
    //     description: 'Сыр Мараш, сыр с травами, сыр тулум, сыр чеддер, фруктовый джем, аджука, товрог, сливки, масло, зеленые и черные оливки, две выпечки...',
    //     price: '900 с',
    //     image: './img/breakfest/brakfest-village.png'
    //   },
    //   {
    //     title: 'Быстрый завтрак',
    //     description: 'Полножирный сыр фета, сыр чеддер, зеленые и черные оливки, помидоры черри, аджука, огурец, перец, вареное яйцо и фруктовый джем',
    //     price: '450 с',
    //     image: './img/breakfest/brakfest-fast.png'
    //   },
    //   {
    //     title: 'Яичница с турецкой колбасой',
    //     description: '2 яйца с турецкой колбасой',
    //     weight: '150 г',
    //     price: '380 с',
    //     image: './img/breakfest/egg-with-sausage.png'
    //   },
    //   {
    //     title: 'Менемен',
    //     description: 'Яйцо скрэмбл, с овощами',
    //     weight: '270 г',
    //     price: '390 с',
    //     image: './img/breakfest/menemen.png'
    //   },
    //   {
    //     title: 'Классический омлет',
    //     description: 'На выбор: с зеленью/грибами/сыром',
    //     weight: '270 г',
    //     price: '380 с',
    //     image: './img/breakfest/omlet-with-egg.png'
    //   },
    // ],
    // salade: [
    //   {
    //     title: 'Салат "Цезарь"',
    //     description: 'Листья салата, смешанные с соусом цезарь, острыми гренками и сыром Пармезан',
    //     weight: '480 г',
    //     price: '450 с',
    //     image: './img/salade/cezar-chicken.jpg'
    //   },
    //   {
    //     title: 'Салат с руколлой и фркутами',
    //     description: 'Фрукты, заправленные с листьями салата',
    //     weight: '350 г',
    //     price: '430 с',
    //     image: './img/salade/rukolla-with-fruit.jpg'
    //   },
    //   {
    //     title: 'Салат с тунцом',
    //     description: 'Зеленые листья, смешанные с лимоном и оливковым маслом, руколлой, укропом, и тунцом',
    //     weight: '575 г',
    //     price: '480 с',
    //     image: './img/salade/salade-with-tunec.png'
    //   },
    //   {
    //     title: 'Салат с хрустящей курицей',
    //     description: 'Хрустящие кусочки курицы, листья салата, помидоры, огурцы, морковь и сухари',
    //     weight: '460 г',
    //     price: '480 с',
    //     image: './img/salade/salade-with-chicken.png'
    //   },
    //   {
    //     title: 'Салат из филе с горчичным соусом',
    //     description: 'Смесь зеленой зелени, с лимоном и оливковым маслом, руколлой, зеленым яблоком и жеренный стейк',
    //     weight: '525 г',
    //     price: '550 с',
    //     image: './img/salade/salade-with-steak.png'
    //   },
    //   {
    //     title: 'Салат из авокадо и с сыром "Тулум"',
    //     description: 'Смесь сезонной, зелени, и лимоном и оливковым маслом, ломтиками авокадо, с сыром тулум и огурцом',
    //     weight: '430 г',
    //     price: '450 с',
    //     image: './img/salade/salade-with-tulum-avacado.png'
    //   },
    //   {
    //     title: 'Хрустящий баклажан',
    //     description: 'Жареные баклажаны с помидорами и с соусом',
    //     weight: '400 г',
    //     price: '400 с',
    //     image: './img/salade/salade-baklazhan.png'
    //   },
    //   {
    //     title: 'Греческий салат',
    //     description: 'Помидоры и огурцы, лук, оливки и сыр Фета',
    //     weight: '415 г',
    //     price: '480 с',
    //     image: './img/salade/salade-grek.png'
    //   },
    //   {
    //     title: 'Бурата с томатами',
    //     description: '',
    //     weight: '380 г',
    //     price: '520 с',
    //     image: './img/special-menu/special-burata-tomata.png'
    //   },
    // ],
    tea: [
      {
        title: 'Бардак чай',
        description: '',
        weight: '0.1 мл',
        price: '49 с',
        image: './img/tea/turkish-bardak.png'
      },
      {
        title: 'Ассам',
        description: '',
        weight: '900 мл',
        price: '190 с',
        image: './img/tea/tea-assam.png'
      },
      {
        title: 'Эрл Грей',
        description: '',
        weight: '900 мл',
        price: '190 с',
        image: './img/tea/tea-assam.png'
      },
      {
        title: 'Ягодный чай',
        description: '',
        weight: '900 мл',
        price: '320 с',
        image: './img/tea/tea-strawbaerry.png'
      },
      {
        title: 'Облепиховый чай',
        description: '',
        weight: '900 мл',
        price: '320 с',
        image: './img/tea/tea-oblepiha.png'
      },
      {
        title: 'Имбирный чай',
        description: 'Имбирь, мята и лимон',
        weight: '900 мл',
        price: '320 с',
        image: './img/tea/tea-imbir.png'
      },
      {
        title: 'Чай с мятой и лимоном',
        description: '',
        weight: '900 мл',
        price: '320 с',
        image: './img/tea/tea-limon-mint.png'
      },
      {
        title: 'Яблоко-Корица чай',
        description: 'Яблоко и корица',
        weight: '900 мл',
        price: '320 с',
        image: './img/tea/tea-strawbaerry.png'
      },
      {
        title: 'Жасминовый чай',
        description: '',
        weight: '900 мл',
        price: '320 с',
        image: './img/tea/tea-jasmin.png'
      },
      {
        title: 'Клюквенный чай',
        description: '',
        weight: '900 мл',
        price: '320 с',
        // image: './img/tea/tea-assam.png'
      },
      {
        title: 'Молочный улун',
        description: '',
        weight: '900 мл',
        price: '190 с',
        // image: './img/tea/tea-strawbaerry.png'
      },
      {
        title: 'Сенча',
        description: '',
        weight: '900 мл',
        price: '190 с',
        // image: './img/tea/tea-strawbaerry.png'
      },
      
    ],
    coldTea: [ 
    {
      title: 'Айс-Ти Клубника',
      description: '',
      weight: '450 мл',
      price: '220 с',
    },
    {
      title: 'Айс-ти Малина-Мандарин',
      description: '',
      weight: '450 мл',
      price: '220 с',
    },
    {
      title: 'Айс-ти Малина',
      description: '',
      weight: '450 мл',
      price: '220 с',
    },
    {
      title: 'Айс-ти Освежающий',
      description: '',
      weight: '450 мл',
      price: '220 с',
    },
    ],
    coffee: [
      {
        title: 'Классическое турецкое кофе',
        description: 'Одинарный/двойной',
        weight: '250 г',
        price: '270/290 с',
        image: './img/coffee/turkish-coffee.png'
      },
      {
        title: 'Турецкое кофе дибек',
        description: '',
        weight: '250 г',
        price: '250 с',
        image: './img/coffee/turkish-coffee.png'
      },
      {
        title: 'Турецкое кофе Мененгич',
        description: '',
        weight: '250 г',
        price: '250 с',
        image: './img/coffee/turkish-coffee.png'
      },
      {
        title: 'Эспрессо',
        description: 'Чистое кофе',
        weight: '250 г',
        price: '120 с',
        image: './img/coffee/coffe-espresso.png'
      },
      {
        title: 'Капучино',
        description: '2 шота эспрессо, молоко',
        weight: '250/350 мл',
        price: '180/200 с',
        image: './img/coffee/coffe-capuch.png'
      },
      {
        title: 'Латте',
        description: 'Шот эспрессо, молоко',
        weight: '250/350 мл',
        price: '210/350 с',
        image: './img/coffee/coffe-latte.png'
      },
      {
        title: 'Американо',
        description: '2 шота эспрессо, вода',
        weight: '250/350 мл',
        price: '180/200 с',
        image: './img/coffee/coffee-amerikano.png'
      },
      {
        title: 'Флэт-Уайт',
        description: '2 шота эспрессо, молоко',
        weight: '250 мл',
        price: '220 с',
        image: './img/coffee/coffe-flet.png'
      },
      {
        title: 'Макиато',
        description: 'Шот эспрессо покрытый молочной пенкой',
        weight: '250/350 мл',
        price: '120 с',
        image: './img/coffee/coffe-mocchiatio.png'
      },
      {
        title: 'Матча',
        description: '',
        weight: '250/350 мл',
        price: '220/240 с',
        image: './img/coffee/coffe-macha.png'
      },
      {
        title: 'Раф',
        description: '',
        weight: '250 мл',
        price: '250 с',
        image: './img/coffee/coffe-raf.png'
      },
      {
        title: 'Айс-Американо',
        description: '2 шота эспрессо и вода со льдом',
        weight: '350 мл',
        price: '190 с',
        image: './img/ice-coffee/ice-americano.png'
      },
      {
        title: 'Айс-Латте',
        description: 'Шот эспрессо и молоко со льдом',
        weight: '350 мл',
        price: '210 с',
        image: './img/ice-coffee/ice-latte.png'
      },
      {
        title: 'Айс-Капучино',
        description: '2 шота эспрессо и молоко со льдом',
        weight: '350 мл',
        price: '220 с',
        image: './img/ice-coffee/ice-capuch.png'
      },
      {
        title: 'Бамбл-Кофе (Гранат)',
        description: '2 шота эспрессо и молоко со льдом',
        weight: '350 мл',
        price: '220 с',
        image: './img/ice-coffee/ice-capuch.png'
      },
      {
        title: 'Бамбл-Кофе (Апельсин)',
        description: '2 шота эспрессо и молоко со льдом',
        weight: '350 мл',
        price: '220 с',
        image: './img/ice-coffee/ice-capuch.png'
      },
      {
        title: 'Айс-Матча Малина',
        description: '',
        weight: '350 мл',
        price: '250 с',
        image: './img/ice-coffee/ice-frappe.png'
      },
      {
        title: 'Айс-Матча чай',
        description: '',
        weight: '350 мл',
        price: '250 с',
        image: './img/ice-coffee/ice-frappe.png'
      },
      {
        title: 'Айс-Мокко',
        description: '',
        weight: '350 мл',
        price: '250 с',
        image: './img/ice-coffee/ice-mocha.png'
      },
      {
        title: 'Айс-Аффогато',
        description: '',
        weight: '350 мл',
        price: '310 с',
        image: './img/ice-coffee/ice-mocha.png'
      },
      {
        title: 'Фраппе',
        description: '',
        weight: '350 мл',
        price: '250 с',
        image: './img/ice-coffee/ice-frappe.png'
      },
    ],
    milksheik: [
      {
        title: 'Клубничный милкшейк',
        description: 'Клубничное мороженое и молоко',
        weight: '250 мл',
        price: '360 с',
        image: './img/milksheik/milksheik-strawbaerry.png'
      },
      {
        title: 'Молочный милкшейк',
        description: 'Молочное мороженое и молоко',
        weight: '250 мл',
        price: '360 с',
        image: './img/milksheik/milksheik-classic.png'
      },
      {
        title: 'Шоколадный милкшейк',
        description: 'Шоколадное мороженое и молоко',
        weight: '250 мл',
        price: '360 с',
        image: './img/milksheik/milksheik-chocolate.png'
      },
      {
        title: 'Банановый милкшейк',
        description: 'Банановое мороженое и молоко',
        weight: '250 мл',
        price: '360 с',
        image: './img/milksheik/milksheik-phista.png'
      },
      {
        title: 'Орео милкшейк',
        description: 'Печенье Орео, мороженое и молоко',
        weight: '250 мл',
        price: '360 с',
        image: './img/milksheik/milksheik-phista.png'
      },
    ],
    smoothie : [ 
    {
      title: 'Ягодное смузи',
      description: 'Клубничное мороженое и молоко',
      weight: '250 мл',
      price: '290 с',
    },
    {
      title: 'Тропическое смузи',
      description: 'Клубничное мороженое и молоко',
      weight: '250 мл',
      price: '290 с',
    },
    {
      title: 'Смузи ананас-клубника',
      description: 'Клубничное мороженое и молоко',
      weight: '250 мл',
      price: '290 с',
    },
    {
      title: 'Смузи манго-маракуйя',
      description: 'Клубничное мороженое и молоко',
      weight: '250 мл',
      price: '290 с',
    },
    ],
    juice: [
      {
        title: 'Свежевыжатый Апельсиновый сок',
        description: '',
        weight: '250 мл',
        price: '190 с',
        image: './img/juice/juice-orange.png'
      },
      {
        title: 'Свежевыжатый Яблочный сок',
        description: '',
        weight: '250 мл',
        price: '270 с',
        image: './img/juice/juice-apple.png'
      },
    ],
    lemonades: [
      {
        title: 'Лимонад манго-маракуйя',
        description: '',
        weight: '250/1 л',
        price: '250/520 с',
        image: './img/lemonades/lemonade-mango-marakuya.png'
      },
      {
        title: 'Лимонад мохито',
        description: '',
        weight: '250/1 л',
        price: '250/520 с',
        image: './img/lemonades/lemonade-mohito.png'
      },
      {
        title: 'Лимонад Тропический',
        description: '',
        weight: '250/1 л',
        price: '250/520 с',
      },
      {
        title: 'Лимонад Ягодный',
        description: '',
        weight: '250/1 л',
        price: '250/520 с',
      },
      {
        title: 'Лимонад Лаймовый',
        description: '',
        weight: '250/1 л',
        price: '250/520 с',
      },
      {
        title: 'Лимонад Мятный',
        description: '',
        weight: '250/1 л',
        price: '250/520 с',
      },
      {
        title: 'Лимонад клубничный',
        description: '',
        weight: '250/1 л',
        price: '250/520 с',
        image: './img/lemonades/lemonade-strawberry.png'
      },
      {
        title: 'Лимонад лимон и апельсин',
        description: '',
        weight: '250/1 л',
        price: '250/520 с',
        image: './img/lemonades/lemonade-classic.png'
      },
    ],
    coldDrinks: [
      // {
      //   title: 'Coca-Cola',
      //   description: '',
      //   weight: '250/0.5 мл',
      //   price: '130/175 с',
      //   image: './img/cold-drinks/coca-cola250ml.png'
      // },
      // {
      //   title: 'Fanta',
      //   description: '',
      //   weight: '350 мл',
      //   price: '150 с',
      //   image: './img/cold-drinks/fanta250ml.png'
      // },
      // {
      //   title: 'Sprite',
      //   description: '',
      //   weight: '350 мл',
      //   price: '150 с',
      //   image: './img/cold-drinks/sprite250ml.png'
      // },
      {
        title: 'Beypazar',
        description: '',
        weight: '0.2 мл',
        price: '180 с',
      },
      {
        title: 'Bonaqua',
        description: '',
        weight: '0.5/1 л',
        price: '90/140 с',
      },
      // {
      //   title: 'J7',
      //   description: '',
      //   weight: '0.5/1 л',
      //   price: '150/380 с',
      //   image: './img/cold-drinks/J7.png'
      // },
    ],
    phistaBaklava: [
    {
      title: 'Озель с фисташками',
      description: '',
      weight: '5 шт/1 шт',
      price: '450/110 с',
    },
    {
      title: 'Дюрум',
      description: '',
      weight: '3 шт/1 шт',
      price: '480/160 с',
    },
    {
      title: 'Хавуч дилими',
      description: '',
      weight: '1 шт',
      price: '310 с',
    },
    {
      title: 'Хавуч дилими с мороженным',
      description: '',
      weight: '1 шт',
      price: '450 с',
    },
    {
      title: 'Бульбул( гнездо)',
      description: '',
      weight: '4 шт/1 шт',
      price: '490/140 с',
    },
    {
      title: 'Шоколадная пахлава',
      description: '',
      weight: '4 шт/1 шт',
      price: '470/140 с',
    },
    {
      title: 'Холодная пахлава',
      description: '',
      weight: '4 шт/1 шт',
      price: '460/130 с',
    },
    {
      title: 'Каре',
      description: '',
      weight: '4 шт/1 шт',
      price: '480/130 с',
    },
    ],
    walnutsBaklava: [
      {
        title: 'Бабочка',
        description: '',
        weight: '4 шт/1 шт',
        price: '400/105 с',
      },
      {
        title: 'Сарай пахлава',
        description: '',
        weight: '4 шт/1 шт',
        price: '320/85 с',
      },
      {
        title: 'Пахлава с орехами',
        description: '',
        weight: '4 шт/1 шт',
        price: '360/95 с',
      },
      {
        title: 'Озель грецкий орех',
        description: '',
        weight: '4 шт/1 шт',
        price: '330/70 с',
      },
    ],
    classicDeserts : [
    {
        title: 'Брауни классическое',
        description: '',
        weight: '',
        price: '380 с',
    },
    {
      title: 'Брауни с мороженным',
      description: '',
      weight: '',
      price: '480 с',
  },
    ],
  }

function loadContent(category) {
    // Очищаем текущие данные
    const contentContainer = document.getElementById("content-container");
    contentContainer.innerHTML = ''; // Очищаем содержимое контейнера
  
    // Проверяем, есть ли подкатегории для выбранной категории
    if (!categories[category] || categories[category].length === 0) {
      contentContainer.innerHTML = '<p>Нет доступных подкатегорий для этой категории.</p>';
      return;
    }
  
    // Генерация подкатегорий для выбранной категории
    categories[category].forEach(subcategory => {
      const subcategoryButton = document.createElement('button');
      subcategoryButton.classList.add('subcategory-btn');
      subcategoryButton.innerHTML = subcategory;
      subcategoryButton.addEventListener('click', () => loadCards(subcategory)); // Обработчик клика для подкатегорий
  
      contentContainer.appendChild(subcategoryButton);
    });
  }

document.querySelectorAll(".main-category").forEach(button => {
  button.addEventListener("click", function () {
      const category = this.dataset.category || this.dataset.target; // Получаем категорию
      const contentContainer = document.querySelector("#content-container");
      const subcategoriesContainer = document.querySelector(".subcategories-container");

      // Скрыть подкатегории, если они есть
      subcategoriesContainer.classList.add("hidden");
      
      contentContainer.innerHTML = ""; // Очищаем контейнер перед загрузкой новых данных

      // Если кнопка имеет подкатегории
      if (this.dataset.category) {
          // Показываем подкатегории
          subcategoriesContainer.classList.remove("hidden");

          // Очищаем подкатегории
          subcategoriesContainer.innerHTML = "";

          const categoryKey = this.dataset.category;
          if (categories[categoryKey]) {
              categories[categoryKey].forEach(sub => {
                  const subButton = document.createElement("button");
                  subButton.textContent = sub.name;
                  subButton.dataset.target = sub.target;
                  subButton.classList.add("subcategory");
                  subcategoriesContainer.appendChild(subButton);
              });
          }
      } else {
          // Если категория без подкатегорий
          if (cardsData[category] && cardsData[category].length > 0) {
              cardsData[category].forEach(item => {
                  const card = document.createElement("div");
                  card.classList.add("position-card");
                  card.innerHTML = `
                      <div class="card-img">
                      </div>
                      <div class="card-text">
                          <h5 class="card-text__title">${item.title}</h5>
                          <p class="card-text__descr">${item.description || 'Описание отсутствует.'}</p>
                      </div>
                      <div class="card-price">
                          <div class="card-price__weight">
                              <p class="card-price__weight-descr">${item.weight}</p>
                          </div>
                          <div class="card-price__sum">
                              <a class="card-price__sum-btn">${item.price}</a>
                          </div>
                      </div>
                  `;
                  contentContainer.appendChild(card);
              });
          } else {
              contentContainer.innerHTML = "<p>Нет доступного контента для этой категории.</p>";
          }
      }
  });
});

document.querySelector(".subcategories-container").addEventListener("click", function (event) {
  if (event.target.classList.contains("subcategory")) {
      const target = event.target.dataset.target;
      loadCards(target); // Загружаем карточки для выбранной подкатегории
  }
});

function loadCards(category) {
  const contentContainer = document.querySelector("#content-container");
  contentContainer.innerHTML = ""; // очищаем контент перед загрузкой

  if (cardsData[category]) {
      cardsData[category].forEach(item => {
          const card = document.createElement("div");
          card.classList.add("position-card"); // Здесь используем position-card
          card.innerHTML = `
              <div class="card-img">
              </div>
              <div class="card-text">
                  <h5 class="card-text__title">${item.title}</h5>
                  <p class="card-text__descr">${item.description || 'Описание отсутствует.'}</p>
              </div>
              <div class="card-price">
                  <div class="card-price__weight">
                      <p class="card-price__weight-descr">${item.weight || ''}</p>
                  </div>
                  <div class="card-price__sum">
                      <a class="card-price__sum-btn">${item.price}</a>
                  </div>
              </div>
          `;

          contentContainer.appendChild(card);
      });
  } else {
      contentContainer.innerHTML = `<p>Нет доступного контента для этой категории.</p>`;
  }
}

// Функция для отображения карточек при отсутствии подкатегорий
function displayCategoryCards(category) {
  const contentContainer = document.querySelector("#content-container");
  contentContainer.innerHTML = "";

  // Если категория существует в cardsData
  if (cardsData[category]) {
      cardsData[category].forEach(item => {
          const card = document.createElement("div");
          card.classList.add("position-card");
          card.innerHTML = `
              <div class="card-img">
                  <img src="${item.image}" alt="${item.title}">
              </div>
              <div class="card-text">
                  <h5 class="card-text__title">${item.title}</h5>
                  <p class="card-text__descr">${item.description || 'Описание отсутствует.'}</p>
              </div>
              <div class="card-text__line"></div>
              <div class="card-price">
                  <div class="card-price__weight">
                      <p class="card-price__weight-descr">${item.weight || ''}</p>
                  </div>
                  <div class="card-price__sum">
                      <a class="card-price__sum-btn">${item.price}</a>
                  </div>
              </div>
          `;
          contentContainer.appendChild(card);
      });
  }
}

  // Обработчик кликов по кнопкам меню
  document.querySelectorAll('.positions-menu button').forEach(button => {
    button.addEventListener('click', (event) => {
      const target = event.target.getAttribute('data-target'); // Получаем ID категории
      if (target) {
        // Скрываем все контейнеры .content
        document.querySelectorAll('.content').forEach(content => {
          content.classList.remove('active');
        });
  
        // Показываем активный контейнер и загружаем контент
        const targetContent = document.getElementById(target);
        if (targetContent) {
          targetContent.classList.add('active');
          loadContent(target); // Загружаем карточки
        } else {
          console.error('Контейнер с таким ID не найден:', target);
        }
      }
    });
  });

  // Обработчик кликов на контейнере подкатегорий
document.querySelector(".subcategories-container").addEventListener("click", function (event) {
  // Проверяем, что клик был именно по кнопке подкатегории
  if (event.target.classList.contains("subcategory")) {
      // Убираем класс "active" у всех кнопок подкатегорий
      document.querySelectorAll(".subcategory").forEach(btn => btn.classList.remove("active"));

      // Добавляем класс "active" только к текущей кнопке
      event.target.classList.add("active");
  }
});

  // Прокрутка к футеру при клике
  jQuery(document).ready(function () {
    jQuery("a.scrooll-footer").click(function () {
      const elementClick = jQuery(this).attr("href");
      const destination = jQuery(elementClick).offset().top;
      jQuery("html, body").animate({ scrollTop: destination }, 1100);
      return false;
    });
  });

  $(document).ready(function () {
    $(".owl-item.positions-menu").click(function () {
      $(".owl-item.positions-menu").removeClass("active"); // Убираем класс у всех
      $(this).addClass("active"); // Добавляем класс только к нажатому элементу
    });
  });


  let cart = []; // Массив для хранения товаров

  // Функция добавления товара в корзину
  function addToCart(item) {
      const existingItem = cart.find(cartItem => cartItem.title === item.title);
  
      if (existingItem) {
          existingItem.quantity++; // Увеличиваем количество товара
      } else {
          cart.push({ ...item, quantity: 1 }); // Добавляем новый товар
      }
  
      updateCartDisplay(); // Обновляем отображение корзины
  }
  
  // Функция обновления отображения корзины
  function updateCartDisplay() {
      const cartContainer = document.getElementById("cart-items-container");
      const cartCount = document.getElementById("cart-count");
  
      cartContainer.innerHTML = ""; // Очищаем корзину перед обновлением
  
      cart.forEach(item => {
          const cartItem = document.createElement("div");
          cartItem.classList.add("cart-item");
          cartItem.innerHTML = `
              <div class="cart-item-owl">
                <div class="cart-item-img">
                  <img src="${item.image}" alt="${item.title}">
                  <div class="cart-item-img__text">
                    <button class="cart-item-count-btn plus" data-title="${item.title}">+</button>
                    <span class="cart-item__count">${item.quantity}</span>
                    <button class="cart-item-count-btn minus" data-title="${item.title}">-</button>
                    <button class="cart-item-remove" data-title="${item.title}">
                      <img src="./img/trash.svg" alt="">
                    </button>
                  </div>
                </div>
                <div class="cart-item-text">
                  <h5 class="cart-item-title">${item.title}</h5>
                </div>
              </div>
          `;
          cartContainer.appendChild(cartItem);
      });
  
      cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0); // Обновляем счётчик товаров
  
      addCartEventListeners(); // Добавляем обработчики событий для кнопок
  }
  
  // Добавление обработчиков событий на кнопки внутри корзины
  function addCartEventListeners() {
      document.querySelectorAll(".cart-item-count-btn.plus").forEach(button => {
          button.addEventListener("click", function () {
              const title = this.dataset.title;
              const item = cart.find(i => i.title === title);
              if (item) {
                  item.quantity++;
                  updateCartDisplay();
              }
          });
      });
  
      document.querySelectorAll(".cart-item-count-btn.minus").forEach(button => {
          button.addEventListener("click", function () {
              const title = this.dataset.title;
              const item = cart.find(i => i.title === title);
              if (item) {
                  if (item.quantity > 1) {
                      item.quantity--;
                  } else {
                      cart = cart.filter(i => i.title !== title); // Удаляем товар, если количество 0
                  }
                  updateCartDisplay();
              }
          });
      });
  
      document.querySelectorAll(".cart-item-remove").forEach(button => {
          button.addEventListener("click", function () {
              const title = this.dataset.title;
              cart = cart.filter(i => i.title !== title);
              updateCartDisplay();
          });
      });
  }
  
  // Очистка корзины
  document.getElementById("clear-cart-btn").addEventListener("click", function () {
      cart = [];
      updateCartDisplay();
  });
  
  // Добавление товара в корзину при клике на цену
  document.addEventListener("click", function (event) {
      if (event.target.classList.contains("card-price__sum-btn")) {
          const card = event.target.closest(".position-card");
          const item = {
              title: card.querySelector(".card-text__title").textContent,
              price: event.target.textContent.replace(" ₽", ""),
              image: card.querySelector(".card-img img").src
          };
          addToCart(item);
      }
  });
  
// Функция открытия и закрытия модального окна
function toggleCart() {
    document.getElementById("my-modal").classList.toggle("open");
}

// Закрытие модального окна по кнопке
document.getElementById("close-my-modal__btn").addEventListener("click", function () {
    document.getElementById("my-modal").classList.remove("open");
});



  
// function toggleMenu() {
//   document.querySelector(".nav-list").classList.toggle("active");
//   document.querySelector(".burger-menu").classList.toggle("active");
// }

// document.getElementById("cart-toggle").addEventListener("click", function() {
//   document.getElementById("my-modal").classList.add("open")
// });

// document.getElementById("close-my-modal__btn").addEventListener("click", function() {
//   document.getElementById("my-modal").classList.remove("open")
// });




//        КОНТЕНТ КОРЗИНЫ
let totalItemsInCart = 0; // Переменная для отслеживания общего количества товаров

function updateCartCount() {
  const cartCountElement = document.getElementById('cart-count');
  cartCountElement.textContent = totalItemsInCart; // Обновляем счетчик
}

function loadContent(category) {
  const contentDiv = document.getElementById(category);
  
  if (!contentDiv) {
    console.error(`Контейнер с ID ${category} не найден.`);
    return;
  }

  contentDiv.innerHTML = ''; // Очищаем содержимое перед добавлением новых карточек

  if (!cardsData[category] || cardsData[category].length === 0) {
    contentDiv.innerHTML = '<p>Нет доступного контента для этой категории.</p>';
    return;
  }

  cardsData[category].forEach(card => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('position-card');

    cardElement.innerHTML = `
      <div class="card-img">
        <img src="${card.image}" alt="${card.title}">
      </div>
      <div class="card-text">
        <h5 class="card-text__title">${card.title}</h5>
        <p class="card-text__descr">${card.description || 'Описание отсутствует.'}</p>
      </div>
      <div class="card-text__line"></div>
      <div class="card-price">
        <div class="card-price__weight">
          <p class="card-price__weight-descr">${card.weight || ''}</p>
        </div>
        <div class="card-price__sum">
          <a class="card-price__sum-btn">${card.price}</a>
        </div>
      </div>
    `;

    contentDiv.appendChild(cardElement);

    const priceButton = cardElement.querySelector('.card-price__sum-btn');

    if (priceButton) {
      priceButton.addEventListener('click', () => {
        console.log("Цена кнопки нажата!");
        const productData = {
          title: card.title,
          description: card.description || 'Описание отсутствует.',
          weight: card.weight || '',
          price: card.price,
          image: card.image
        };

        const cartContainer = document.querySelector('.cart-items-container');

        if (cartContainer) {
          const cartItem = document.createElement('div');
          cartItem.classList.add('cart-item');

          cartItem.innerHTML = `
            <div class="cart-item-owl">
              <div class="cart-item-img">
                <img src="${productData.image}" alt="${productData.title}">
                <div class="cart-item-img__text">
                  <button class="cart-item-count-btn plus">+</button>
                  <span class="cart-item__count">1</span>
                  <button class="cart-item-count-btn minus">-</button>
                  <button class="cart-item-remove">
                    <img src="./img/trash.svg" alt="">
                  </button>
                </div>
              </div>
              <div class="cart-item-text">
                <h5 class="cart-item-title">${productData.title}</h5>
                <p class="cart-item-description">${productData.description}</p>
              </div>
            </div>
          `;

          cartContainer.appendChild(cartItem);

          cartItem.querySelector('.plus').addEventListener('click', () => {
            updateQuantity(cartItem, 1);
          });
          cartItem.querySelector('.minus').addEventListener('click', () => {
            updateQuantity(cartItem, -1);
          });

          // Обработчик для кнопки очистки корзины
          const clearCartBtn = document.getElementById('clear-cart-btn');
          if (clearCartBtn) {
            clearCartBtn.addEventListener('click', function() {
              // Очищаем корзину, удаляем все элементы внутри контейнера
              const cartItemsContainer = document.querySelector('.cart-items-container');
              if (cartItemsContainer) {
                cartItemsContainer.innerHTML = ''; // Очищаем корзину
                totalItemsInCart = 0; // Сбрасываем количество товаров в корзине
                updateCartCount(); // Обновляем счетчик
              }
              console.log('Корзина очищена!');
            });
}

          const removeButton = cartItem.querySelector('.cart-item-remove');
          removeButton.addEventListener('click', () => {
            cartContainer.removeChild(cartItem);
            totalItemsInCart--; // Уменьшаем количество товаров в корзине
            updateCartCount(); // Обновляем счетчик
          });

          totalItemsInCart++; // Увеличиваем количество товаров в корзине
          updateCartCount(); // Обновляем счетчик
        }
      });
    }
  });
}

function updateQuantity(cartItem, change) {
  const quantityElement = cartItem.querySelector('.cart-item__count');
  let quantity = parseInt(quantityElement.textContent);

  if (quantity + change > 0) {
    quantityElement.textContent = quantity + change;
    totalItemsInCart += change; // Обновляем общее количество товаров в корзине
    updateCartCount(); // Обновляем счетчик
  } else {
    cartItem.remove(); // Если количество товара меньше 1, удаляем его из корзины
    totalItemsInCart--; // Уменьшаем общее количество
    updateCartCount(); // Обновляем счетчик
  }
}