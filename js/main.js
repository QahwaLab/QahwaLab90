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
        name: "Айс-Ти", 
        target: "coldTea" 
      },
      { 
        name: "Кофе", 
        target: "coffee" 
      },
      { 
        name: "Айс-Кофе", 
        target: "coldCoffee" 
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
        description: 'Свежий турецкий чай',
        weight: '0.1 мл',
        price: '49 с',
      },
      {
        title: 'Ассам',
        description: 'Насыщенный и бодрящий черный чай',
        weight: '900 мл',
        price: '190 с',
      },
      {
        title: 'Сенча',
        description: 'Освежающий зелёный чай с лёгким травяным вкусом и мягким, нежным ароматом.',
        weight: '900 мл',
        price: '190 с',
      },
      {
        title: 'Эрл Грей',
        description: 'Изысканный чёрный чай с тонким ароматом бергамота',
        weight: '900 мл',
        price: '210 с',
      },
      {
        title: 'Жасминовый чай',
        description: 'Нежный зелёный чай с тонким ароматом жасмина',
        weight: '900 мл',
        price: '210 с',
      },
      {
        title: 'Молочный улун',
        description: 'Мягкий и ароматный чай с нежным молочным привкусом',
        weight: '900 мл',
        price: '250 с',
      },
      {
        title: 'Ягодный чай',
        description: 'Насыщенный вкус ягод с нотами апельсина и лёгкой кислинкой лимона. Яркий, ароматный и согревающий.',
        weight: '900 мл',
        price: '360 с',
      },
      {
        title: 'Облепиховый чай',
        description: 'Насыщенный и пряный, с облепиховым пюре, лимоном и апельсином. Согревает и бодрит.',
        weight: '900 мл',
        price: '360 с',
      },
      {
        title: 'Имбирный чай',
        description: 'Зелёный чай с имбирём, лимоном и апельсином. Тонизирует, освежает и согревает.',
        weight: '900 мл',
        price: '360 с',
      },
      {
        title: 'Марокканский чай',
        description: 'Зелёный чай с яркими нотами апельсина, лимона, бадьяна и корицы.',
        weight: '900 мл',
        price: '360 с',
      },
      {
        title: 'Ананас-клубника чай',
        description: 'Зелёный чай с яркими нотами апельсина, лимона, бадьяна и корицы.',
        weight: '900 мл',
        price: '360 с',
      },
      {
        title: 'Яблоко-Корица чай',
        description: 'Ароматный и пряный, с тёплыми нотами фруктов и специй.',
        weight: '900 мл',
        price: '360 с',
      },
      {
        title: 'Клюквенный чай',
        description: 'Освежающий напиток с клюквой, апельсином, мёдом и лимоном. ',
        weight: '900 мл',
        price: '360 с',
      },
    ],
    coldTea: [ 
    {
      title: 'Айс-Ти Клубника',
      description: 'Охлаждающий напиток с освежающим вкусом клубники,',
      weight: '450 мл',
      price: '220 с',
    },
    {
      title: 'Айс-ти Малина-Мандарин',
      description: 'Освежающий напиток с сочными нотами малины и ярким цитрусовым акцентом мандарина.',
      weight: '450 мл',
      price: '220 с',
    },
    {
      title: 'Айс-ти Малина',
      description: 'Напиток с ярким вкусом малины, который идеально утолит жажду в любое время дня.',
      weight: '450 мл',
      price: '220 с',
    },
    {
      title: 'Айс-ти Освежающий',
      description: 'Фруктовый напиток с цитрусовыми нотами лимона и апельсина.',
      weight: '450 мл',
      price: '220 с',
    },
    ],
    coffee: [
      {
        title: 'Классическое турецкое кофе',
        description: 'Одинарный/двойной',
        weight: '70 мл',
        price: '270/290 с',
        image: './img/coffee/turkish-coffee.png'
      },
      {
        title: 'Турецкое кофе дибек',
        description: 'Насыщенный и ароматный кофе, приготовленный по традиционному рецепту с добавлением молотого дибека',
        weight: '70 мл',
        price: '250 с',
        image: './img/coffee/turkish-coffee.png'
      },
      {
        title: 'Турецкое кофе Мененгич',
        description: 'Насыщенный и ароматный кофе, приготовленный с добавлением мененгича',
        weight: '70 г',
        price: '250 с',
        image: './img/coffee/turkish-coffee.png'
      },
      {
        title: 'Эспрессо',
        description: 'Крепкий и насыщенный чёрный кофе, приготовленный под давлением, с богатым вкусом и густой кремовой текстурой.',
        weight: '70 г',
        price: '250 с',
        image: './img/coffee/coffe-espresso.png'
      },
      {
        title: 'Капучино',
        description: 'Насыщенное кофе, в котором два шота эспрессо раскрывают глубокий вкус, а молочная пена придаёт напитку мягкость и кремовую текстуру.',
        weight: '250/350 мл',
        price: '330/360с',
        image: './img/coffee/coffe-capuch.png'
      },
      {
        title: 'Латте',
        description: 'мягкий и кремовый кофе на основе эспрессо с добавлением тёплого молока и легкой молочной пены.',
        weight: '320/350 мл',
        price: '210/350 с',
        image: './img/coffee/coffe-latte.png'
      },
      {
        title: 'Американо',
        description: 'Кчрепкий и насыщенный напиток, приготовленный на основе эспрессо с добавлением горячей воды.',
        weight: '250/350 мл',
        price: '270/290 с',
        image: './img/coffee/coffee-amerikano.png'
      },
      {
        title: 'Флэт-Уайт',
        description: 'Этот напиток идеально сбалансирован по крепости и текстуре',
        weight: '250 мл',
        price: '360 с',
        image: './img/coffee/coffe-flet.png'
      },
      {
        title: 'Макиато',
        description: 'Эспрессо с небольшим количеством молочной пены, придающей напитку мягкость, но не скрывающей насыщенный вкус кофе.',
        weight: '250',
        price: '390 с',
        image: './img/coffee/coffe-mocchiatio.png'
      },
      {
        title: 'Мокко',
        description: 'Насыщенный кофе с тёплым молоком и шоколадным сиропом, создающий идеальное сочетание кофе и сладкой шоколадной нотки.',
        weight: '250 мл',
        price: '360 с',
        image: './img/coffee/coffe-macha.png'
      },
      {
        title: 'Раф',
        description: 'Эспрессо с добавлением взбитых сливок и тёплого молока, создающий кремовый и насыщенный вкус.',
        weight: '250 мл',
        price: '380 с',
        image: './img/coffee/coffe-raf.png'
      },
     
    ],
    coldCoffee : [
      {
        title: 'Айс-Американо',
        description: 'Крепкий и освежающий напиток, приготовленный на основе эспрессо с добавлением холодной воды и льда.',
        weight: '350 мл',
        price: '290 с',
        image: './img/ice-coffee/ice-americano.png'
      },
      {
        title: 'Айс-Латте',
        description: 'Лёгкий и освежающий напиток, приготовленный на основе эспрессо с холодным молоком и льдом.',
        weight: '350 мл',
        price: '390 с',
        image: './img/ice-coffee/ice-latte.png'
      },
      {
        title: 'Айс-Капучино',
        description: 'Охлаждённый кофе с эспрессо, холодным молоком и воздушной молочной пеной.',
        weight: '350 мл',
        price: '390 с',
        image: './img/ice-coffee/ice-capuch.png'
      },
      {
        title: 'Бамбл-Кофе (Гранат)',
        description: 'Уникальный напиток, сочетающий крепкий кофе с яркими нотами свежего граната.',
        weight: '350 мл',
        price: '390 с',
        image: './img/ice-coffee/ice-capuch.png'
      },
      {
        title: 'Бамбл-Кофе (Апельсин)',
        description: 'Яркий и ароматный напиток, в котором крепкий кофе прекрасно сочетается с освежающими цитрусовыми нотами апельсина.',
        weight: '350 мл',
        price: '390 с',
        image: './img/ice-coffee/ice-capuch.png'
      },
      {
        title: 'Айс-Матча Малина',
        description: 'Освежающий напиток с насыщенным вкусом зелёного чая матча и лёгкой кислинкой малины.',
        weight: '350 мл',
        price: '390 с',
        image: './img/ice-coffee/ice-frappe.png'
      },
      {
        title: 'Айс-Матча чай',
        description: 'Охлаждённый зелёный чай матча с насыщенным вкусом и мягкой текстурой. ',
        weight: '350 мл',
        price: '390 с',
        image: './img/ice-coffee/ice-frappe.png'
      },
      {
        title: 'Айс-Мокко',
        description: 'Кофе с шоколадным сиропом, молоком и льдом, создающий гармонию крепкого кофе и сладкой шоколадной нотки.',
        weight: '350 мл',
        price: '390 с',
        image: './img/ice-coffee/ice-mocha.png'
      },
      {
        title: 'Айс-Аффогато',
        description: 'Шарик мороженого, заливаемый горячим эспрессо, создающий уникальное сочетание холодной сладости и насыщенного кофе.',
        weight: '350 мл',
        price: '390 с',
        image: './img/ice-coffee/ice-mocha.png'
      },
      {
        title: 'Фраппе',
        description: 'Холодный напиток на основе эспрессо с добавлением льда, молока и лёгкой пеной.',
        weight: '350 мл',
        price: '390 с',
        image: './img/ice-coffee/ice-frappe.png'
      },
    ],
    milksheik: [
      {
        title: 'Клубничный милкшейк',
        description: 'Кремовый и сладкий напиток, приготовленный из свежей клубники и молока, с добавлением мороженого.',
        weight: '350 мл',
        price: '360 с',
        image: './img/milksheik/milksheik-strawbaerry.png'
      },
      {
        title: 'Молочный милкшейк',
        description: 'Нежный и кремовый напиток на основе молока и мороженого, идеально сбалансированный по текстуре и сладости.',
        weight: '350 мл',
        price: '360 с',
        image: './img/milksheik/milksheik-classic.png'
      },
      {
        title: 'Шоколадный милкшейк',
        description: 'Густой и кремовый напиток, приготовленный из молока, мороженого и насыщенного шоколада.',
        weight: '350 мл',
        price: '360 с',
        image: './img/milksheik/milksheik-chocolate.png'
      },
      {
        title: 'Банановый милкшейк',
        description: 'Мягкий и кремовый напиток, приготовленный из спелых бананов, молока и мороженого.',
        weight: '350 мл',
        price: '360 с',
        image: './img/milksheik/milksheik-phista.png'
      },
      {
        title: 'Орео милкшейк',
        description: 'Кремовый и насыщенный напиток с кусочками печенья Орео, молоком и мороженым. ',
        weight: '350 мл',
        price: '360 с',
        image: './img/milksheik/milksheik-phista.png'
      },
    ],
    smoothie : [ 
    {
      title: 'Ягодное смузи',
      description: 'Свежий и освежающий напиток, приготовленный из разнообразных ягод, молока и льда.',
      weight: '250 мл',
      price: '400 с',
    },
    {
      title: 'Облепиховое смузи',
      description: 'Витаминный напиток с яркой кислинкой облепихи и натуральной фруктовой сладостью',
      weight: '250 мл',
      price: '400 с',
    },
    {
      title: 'Киви-Апельсин смузи',
      description: 'Сочное сочетание кисло-сладкого киви и яркого апельсина.',
      weight: '250 мл',
      price: '400 с',
    },
    {
      title: 'Тропическое смузи',
      description: 'Освежающий напиток с яркими нотами грейпфрута, ананаса и клубничного сиропа. ',
      weight: '250 мл',
      price: '400 с',
    },
    {
      title: 'Смузи ананас-клубника',
      description: 'Яркий и освежающий напиток, сочетающий сладость клубники и экзотическую кислинку ананаса. ',
      weight: '250 мл',
      price: '400 с',
    },
    {
      title: 'Смузи манго-маракуйя',
      description: 'Экзотический напиток с насыщенным вкусом манго и лёгкой кислинкой маракуйи.',
      weight: '250 мл',
      price: '400 с',
    },
    ],
    juice: [
      {
        title: 'Свежевыжатый Апельсиновый сок',
        description: '',
        weight: '250 мл',
        price: '270 с',
      },
      {
        title: 'Свежевыжатый Гранатовый сок',
        description: '',
        weight: '250 мл',
        price: '270 с',
      },
    ],
    lemonades: [
      {
        title: 'Лимонад манго-маракуйя',
        description: 'Освежающий напиток с яркими тропическими нотами манго и маракуйи, сбалансированный лимонной кислинкой.',
        weight: '400/1 л',
        price: '310/620 с',
      },
      {
        title: 'Лимонад мохито',
        description: 'Освежающий напиток с нотами лимона, мяты и лайма. ',
        weight: '400/1 л',
        price: '290/580 с',
      },
      {
        title: 'Лимонад мохито-киви',
        description: 'Освежающий лимонад с мякотью киви, лимоном и мятой.',
        weight: '400/1 л',
        price: '310/620 с',
      },
      {
        title: 'Лимонад мохито-клубничный',
        description: 'Ароматный лимонад с клубникой, мятой и лимоном',
        weight: '400/1 л',
        price: '310/620 с',
      },
      {
        title: 'Лимонад Тропический',
        description: 'Яркий фруктовый микс грейпфрута, ананаса, манго и лимона.',
        weight: '400/1 л',
        price: '310/620 с',
      },
      {
        title: 'Лимонад Ягодный',
        description: 'Насыщенный напиток с ягодами, апельсином, лимоном и свежей мятой.',
        weight: '400/1 л',
        price: '310/620 с',
      },
      {
        title: 'Лимонад Лаймовый',
        description: 'Освежающий напиток с яркой цитрусовой кислинкой и ароматом свежего лайма.',
        weight: '400/1 л',
        price: '290/580 с',
      },
      {
        title: 'Лимонад Мятный',
        description: 'Лёгкий и освежающий напиток с ароматом свежей мяты и лимонной кислинкой.',
        weight: '400/1 л',
        price: '290/580 с',
      },
      {
        title: 'Лимонад клубничный',
        description: 'Яркий и ароматный напиток с натуральной сладостью клубники и лёгкой лимонной кислинкой. ',
        weight: '400/1 л',
        price: '290/580 с',
      },
      {
        title: 'Лимонад лимон и апельсин',
        description: 'Освежающий напиток с цитрусовой свежестью, где яркие ноты лимона и апельсина идеально сочетаются с лёгкой кислинкой.',
        weight: '400/1 л',
        price: '290/580 с',
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
      description: 'Пахлава с хрустящими слоёными коржами, пропитанными ароматным сиропом и щедро посыпанными свежими фисташками',
      weight: '5 шт',
      price: '450 с',
    },
    {
      title: 'Дюрум',
      description: 'Уникальный турецкий десерт с тонкими слоёными коржами, идеально пропитанными сладким сиропом.',
      weight: '3 шт',
      price: '480 с',
    },
    {
      title: 'Хавуч дилими',
      description: 'Изысканный турецкий десерт с хрустящей, но нежной текстурой.',
      weight: '1 шт',
      price: '310 с',
    },
    {
      title: 'Хавуч дилими с мороженным',
      description: 'Изысканный турецкий десерт с хрустящей, но нежной текстурой. Подается вместе с мороженным',
      weight: '1 шт',
      price: '450 с',
    },
    {
      title: 'Бульбул( гнездо)',
      description: 'Тонкие слоёные коржи, аккуратно пропитанные сладким сиропом и наполненные нежной фисташковой начинкой.',
      weight: '4 шт',
      price: '490 с',
    },
    {
      title: 'Шоколадная пахлава',
      description: 'Необычное сочетание традиционной турецкой пахлавы с насыщенным вкусом тёмного шоколада.',
      weight: '4 шт',
      price: '470/140 с',
    },
    {
      title: 'Холодная пахлава',
      description: 'Лёгкий и изысканный десерт с хрустящими слоёными коржами, который подаётся охлаждённым.',
      weight: '4 шт',
      price: '460/130 с',
    },
    {
      title: 'Каре',
      description: 'Изысканное лакомство с хрустящей текстурой и насыщенным вкусом, которое тает во рту.',
      weight: '4 шт',
      price: '480/130 с',
    },
    ],
    walnutsBaklava: [
      {
        title: 'Бабочка',
        description: 'Нежная турецкая пахлава с хрустящими слоёными коржами и ароматной начинкой из грецких орехов.',
        weight: '4 шт',
        price: '400/105 с',
      },
      {
        title: 'Сарай пахлава',
        description: 'Насыщенная начинка из грецких орехов, придающая пахлаве глубокий, ореховый вкус и текстуру.',
        weight: '4 шт',
        price: '320/85 с',
      },
      {
        title: 'Пахлава с орехами',
        description: 'Традиционное восточное лакомство, где хрустящие слоёные коржи наполнены богатой ореховой начинкой.',
        weight: '4 шт',
        price: '360/95 с',
      },
      {
        title: 'Озель грецкий орех',
        description: 'Традиционная турецкая пахлава с тонкими слоями теста, наполненными ароматной начинкой из грецких орехов.',
        weight: '4 шт',
        price: '330/70 с',
      },
    ],
    classicDeserts : [
    {
        title: 'Брауни классическое',
        description: 'Тёплый шоколадный десерт с хрустящей корочкой и влажной, насыщенной серединкой.',
        weight: '',
        price: '380 с',
    },
    {
      title: 'Брауни с мороженным',
      description: 'Тёплый шоколадный десерт с хрустящей корочкой и влажной, насыщенной серединкой. Подается вместе с мороженным',
      weight: '',
      price: '480 с',
    },
    {
      title: 'Сан-Себастьян',
      description: 'Воздушный и сливочный чизкейк с лёгкой запечённой корочкой. Подаётся с тёмным шоколадом',
      weight: '',
      price: '390 с',
    }, 
    {
      title: 'Три шоколада',
      description: 'Изысканный десерт в трёх слоях: тёмный, молочный и белый шоколад в идеальной гармонии.',
      weight: '',
      price: '390 с',
    }, 
    {
      title: 'Шоколадный чизкейк',
      description: 'Плотный и насыщенный десерт с глубоким вкусом тёмного шоколада и бархатной текстурой.',
      weight: '',
      price: '350 с',
    }, 
    {
      title: 'Фисташковый чизкейк',
      description: 'Нежный и насыщенный десерт, в основе которого натуральные фисташки, придающие ему изысканный вкус',
      weight: '',
      price: '350 с',
    }, 
    {
      title: 'Меренговый рулет',
      description: 'Воздушный и лёгкий десерт с хрустящей корочкой и мягким, тающим в рту сердцем.',
      weight: '',
      price: '480 с',
    }, 
    {
      title: 'Чизкейк Нью-Йорк',
      description: 'Классический, плотный и кремовый десерт с насыщенным сливочным вкусом и идеально сбалансированной текстурой.',
      weight: '',
      price: '350 с',
    }, 
    {
      title: 'Тирамису',
      description: 'Итальянская классика с мягким кремом маскарпоне, пропитанным кофе и нежными слоями бисквитного савоярди.',
      weight: '',
      price: '350 с',
    }, 
    {
      title: 'Меренговый рулет с фисташкой',
      description: 'Скоро!',
      weight: '',
      price: '0 с',
    },
    {
      title: 'Сютлач',
      description: 'Скоро!',
      weight: '',
      price: '0 с',
    },
    {
      title: 'Суфле',
      description: 'Скоро!',
      weight: '',
      price: '0 с',
    },
    {
      title: 'Сникерс',
      description: 'Скоро!',
      weight: '',
      price: '0 с',
    },
    ],
    bakery : [
      {
        title: 'Круассан классический',
        description: 'Воздушная, слоёная выпечка с хрустящей золотистой корочкой и нежной маслянистой текстурой внутри.',
        weight: '1 шт',
        price: '230 с',
      },
      {
        title: 'Круассан в ассортименте',
        description: 'Воздушная, слоёная выпечка с хрустящей золотистой корочкой и нежной маслянистой текстурой внутри.',
        weight: '1 шт',
        price: '310 с',
      },
      {
        title: 'Симит классический',
        description: 'Турецкий бублик с хрустящей корочкой и мягкой, пышной серединой, щедро покрытый золотистым кунжутом.',
        weight: '1 шт',
        price: '150 с',
      },
      {
        title: 'Симит в ассортименте',
        description: 'Турецкий бублик с хрустящей корочкой и мягкой, пышной серединой, щедро покрытый золотистым кунжутом.',
        weight: '1 шт',
        price: '290 с',
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