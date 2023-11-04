import {colors} from '../colors';
import {appIcons, appImages} from '../assets';

export const network_error = 'Check Internet Connection';

export const profile_uri =
  'https://www.shareicon.net/data/512x512/2017/01/06/868320_people_512x512.png';

export const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const sliderCardList = [];

export const paymentOptions = [
  {value: 'creditCard', title: 'Debit/Credit Card'},
  {value: 'netBanking', title: 'Net Banking'},
  {value: 'cod', title: 'Cash on Delivery'},
  {value: 'wallet', title: 'Wallet'},
];

export const homeSliderList = [
  {
    title: 'READY TO DELIVER TO YOU HOME',
    text: 'START SHOPPING',
    imgSrc: appImages.fruitsImage,
  },
  {
    title: 'READY TO DELIVER TO YOU HOME',
    text: 'START SHOPPING',
    imgSrc: appImages.bakeryImage,
  },
  {
    title: 'READY TO DELIVER TO YOU HOME',
    text: 'START SHOPPING',
    imgSrc: appImages.petImage,
  },
];

export const homeSquareMenuList = [
  {
    title: 'Beverages',
    imgSrc: appImages.beverageImage,
  },
  {
    title: 'Bakery',
    imgSrc: appImages.bakeryImage,
  },
  {
    title: 'Vegetables',
    imgSrc: appImages.vegetableImage,
  },
  {
    title: 'Fruit',
    imgSrc: appImages.fruitImage,
  },
  {
    title: 'Frozen Veg',
    imgSrc: appImages.frozenVegImage,
  },
  {
    title: 'Home Care',
    imgSrc: appImages.homecareImage,
  },
  {
    title: 'Pet Care',

    imgSrc: appImages.petcareImage,
  },
  {
    title: 'Personal Care',
    imgSrc: appImages.percareImage,
  },
];

export const homeNewList = [
  {
    id: 0,
    title: 'Nike Original',
    store: 'Bitomic',
    price: '25',
    actual_price: '35',
    img: appImages.new1Image,
  },
  {
    id: 1,
    title: 'Broccoli',
    store: 'Hashi Vegs',
    price: '5',
    img: appImages.new2Image,
  },
  {
    id: 2,
    title: 'Vim',
    store: 'Pointens',
    price: '7',
    img: appImages.new3Image,
    actual_price: '10',
  },
];
