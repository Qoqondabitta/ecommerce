import { toggleContact } from "../redux/contact";

export const helpFooter = [
  {
    name: ["MayWe Help You?", "Yordam Berolamizmi?", "Можемли помочь?"],
    color: "grey",
    underline: "none",
    capital: "uppercase",
    botMar: "true",
    size: "14px",
  },
  {
    name: ["Contact Us", "Aloqaga Chiqilar", "Связаться с нами"],
    color: "white",
    underline: "underline",
    capital: "none",
    botMar: "false",
    func: toggleContact(),
  },
  {
    name: ["FAQs", "FAQs", "FAQs"],
    color: "white",
    underline: "underline",
    capital: "none",
    urlToPage: "/faqs",
    botMar: "false",
  },
  {
    name: ["My Order", "Buyurtmam", "Мой заказ"],
    color: "white",
    underline: "underline",
    capital: "none",
    botMar: "false",
    urlToPage: "/account",
    propertyDefiner: "order",
  },
  {
    name: ["Sitemap", "Sayt Haqida", "Карта сайта"],
    color: "white",
    underline: "underline",
    capital: "none",
    botMar: "false",
    urlToPage: "/sitemap",
  },
  {
    name: [
      "Email Unsubscribe",
      "Emaildan Chiqmoq",
      "Отписаться по электронной почте",
    ],
    color: "white",
    underline: "underline",
    capital: "none",
    urlToPage: "/unsubscribe",
    botMar: "false",
  },
];

export const companyFooter = [
  {
    name: ["The Company", "Kompaniya", "Компания"],
    color: "grey",
    capital: "uppercase",
    underline: "none",
    botMar: "true",
    size: "14px",
  },
  {
    name: ["About Xon", "Xon Haqida", "О Xоне"],
    color: "white",
    capital: "none",
    urlToPage: "/about",
    underline: "underline",
    botMar: "false",
    size: "14px",
  },
  {
    name: ["Xon Equilibrium", "Xon Hilmahilligi", "Разновидности"],
    color: "white",
    capital: "none",
    urlToPage: "/equilibrium",
    botMar: "false",
    underline: "underline",
  },
  {
    name: ["Code of Ethics", "Odob Kodi", "Моральный кодекс"],
    color: "white",
    capital: "none",
    underline: "underline",
    botMar: "false",
    urlToPage: "/ethics",
  },
  {
    name: ["Careers", "Bo'sh Ish O'rni", "Карьера"],
    color: "white",
    capital: "none",
    underline: "underline",
    urlToPage: "/careers",
    botMar: "false",
  },
  {
    name: ["Legal", "Qonuniy", "Юридический"],
    color: "white",
    capital: "none",
    underline: "underline",
    botMar: "false",
  },
  {
    name: [
      "Privacy & Cookie Policy",
      "Hafsizlik va Cookie lar",
      "конфиденциальност и использования cookie",
    ],
    color: "white",
    capital: "none",
    botMar: "false",
    underline: "underline",
  },
  {
    name: [
      "Corporate Information",
      "Korporatsiya Malumoti",
      "Корпоративная информация",
    ],
    color: "white",
    capital: "none",
    botMar: "false",
    underline: "underline",
  },
];

export const detailsFooter = [
  {
    name: ["store locator", "Do'kon Joylashuvi", "расположение магазинов"],
    capital: "uppercase",
    underline: "none",
    color: "grey",
    botMar: "true",
    placeHolder: {
      title: [
        "Country/Region, City",
        "Mamlakat/viloyat, shahar",
        "Страна/регион, город",
      ],
    },
    text: { script: "Choose Location", color: "white" },
    privacy: false,
  },
  {
    name: [
      "Sign Up For XON Updates",
      "Xon Haqidagi Yangiliklardan Boxabar Bo'lish",
      "Подпишитесь на обновления XON",
    ],
    capital: "uppercase",
    underline: "none",
    color: "grey",
    botMar: "false",
    placeHolder: { title: ["E-Mail", "E-Mail", "Электронная почта"] },
    text: {
      script: [
        "By entering your email address below, you consent to receiving our newsletter with access to our latest collections, events and initiatives.",
        "Quyida elektron pochta manzilingizni kiritish orqali siz bizning eng soʻnggi toʻplamlarimiz, tadbirlarimiz va tashabbuslarimiz bilan tanishish imkoniyati bilan bizning axborot byulletenimizni olishga rozilik bildirasiz.",
        "Вводя свой адрес электронной почты ниже, вы соглашаетесь получать нашу рассылку с доступом к нашим последним коллекциям, событиям и инициативам.",
      ],
      color: "white",
    },
    privacy: true,
  },
];

export const serviceFooter = [
  {
    color: "grey",
    text: ["XON SERVICES", "XON XIZMATLARI", "XOH УСЛУГИ"],
    underline: "none",
  },
  {
    color: "white",
    text: ["Discover our services", "Bizning Xizmatlar", "Hаши Услуги"],
    underline: "underline",
  },
];

export const countryFooter = [
  {
    color: "grey",
    text: ["CONTRY/REGION", "Mamlakat/Hudud", "СТРАНА/РЕГИОН"],
    underline: "none",
  },
  { color: "white", text: ["USA", "AQSH", "США"], underline: "underline" },
];
