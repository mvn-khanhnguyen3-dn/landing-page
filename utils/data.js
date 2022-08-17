import { MdOutlinePhoneInTalk } from "react-icons/md";
import { FaSortAmountUpAlt, FaRegAddressCard } from "react-icons/fa";
import { FiHeadphones } from "react-icons/fi";
import {
  AiOutlineLaptop,
  AiFillHeart,
  AiOutlineLogin,
  AiOutlineRight,
} from "react-icons/ai";
import { BsLaptop, BsKeyboardFill, BsMouse2 } from "react-icons/bs";
import { BiUserCircle, BiHelpCircle } from "react-icons/bi";
import { RiAdvertisementLine } from "react-icons/ri";
import { MdDone } from "react-icons/md";

export const data = [
  {
    id: 1,
    icon: <MdOutlinePhoneInTalk />,
    title: "Phone and Electronics",
  },
  {
    id: 2,
    icon: <MdOutlinePhoneInTalk />,
    title: "Phone and Electronics",
  },
  {
    id: 3,
    icon: <FaSortAmountUpAlt />,
    title: "Best Seller",
    icon2: <AiOutlineRight />,
    subMenu: [
      {
        id: 1,
        subTitle: "Title One",
        items: [
          { id: 1, text: "Listing One" },
          { id: 2, text: "Listing Two" },
          { id: 3, text: "Listing Three" },
          { id: 4, text: "Listing Four" },
          { id: 5, text: "Listing Five" },
        ],
      },
      {
        id: 2,
        subTitle: "Title Two",
        items: [
          { id: 1, text: "Listing One" },
          { id: 2, text: "Listing Two" },
          { id: 3, text: "Listing Three" },
          { id: 4, text: "Listing Four" },
          { id: 5, text: "Listing Five" },
        ],
      },
      {
        id: 3,
        subTitle: "Title Three",
        items: [
          { id: 1, text: "Listing One" },
          { id: 2, text: "Listing Two" },
          { id: 3, text: "Listing Three" },
          { id: 4, text: "Listing Four" },
          { id: 5, text: "Listing Five" },
        ],
      },
      {
        id: 4,
        subTitle: "Title Four",
        items: [
          { id: 1, text: "Listing One" },
          { id: 2, text: "Listing Two" },
          { id: 3, text: "Listing Three" },
          { id: 4, text: "Listing Four" },
          { id: 5, text: "Listing Five" },
        ],
      },
      {
        id: 5,
        subTitle: "Title Five",
        items: [
          { id: 1, text: "Listing One" },
          { id: 2, text: "Listing Two" },
          { id: 3, text: "Listing Three" },
          { id: 4, text: "Listing Four" },
          { id: 5, text: "Listing Five" },
        ],
      },
    ],
  },
  {
    id: 4,
    icon: <FiHeadphones />,
    title: "Top 10 Offers",
    icon2: <AiOutlineRight />,
    product: "product",
    items: [
      {
        id: 1,
        subTitle: "items Title",
        image: "/images/catitems1.jpeg",
        newPrice: "$33.00",
        oldPrice: "$50.00",
      },
      {
        id: 2,
        subTitle: "items Title",
        image: "/images/catitems2.jpeg",
        newPrice: "$33.00",
        oldPrice: "$50.00",
      },
      {
        id: 3,
        subTitle: "items Title",
        image: "/images/catitems3.jpeg",
        newPrice: "$33.00",
        oldPrice: "$50.00",
      },
      {
        id: 4,
        subTitle: "items Title",
        image: "/images/catitems4.jpeg",
        newPrice: "$33.00",
        oldPrice: "$50.00",
      },
      {
        id: 5,
        subTitle: "items Title",
        image: "/images/catitems5.jpeg",
        newPrice: "$33.00",
        oldPrice: "$50.00",
      },
      {
        id: 6,
        subTitle: "items Title",
        image: "/images/catitems6.jpeg",
        newPrice: "$33.00",
        oldPrice: "$50.00",
      },
      {
        id: 7,
        subTitle: "items Title",
        image: "/images/catitems7.jpeg",
        newPrice: "$33.00",
        oldPrice: "$50.00",
      },
      {
        id: 8,
        subTitle: "items Title",
        image: "/images/phoneCat1.jpeg",
        newPrice: "$33.00",
        oldPrice: "$50.00",
      },
      {
        id: 9,
        subTitle: "items Title",
        image: "/images/catitems9.jpeg",
        newPrice: "$33.00",
        oldPrice: "$50.00",
      },
      {
        id: 10,
        subTitle: "items Title",
        image: "/images/catitems2.jpeg",
        newPrice: "$33.00",
        oldPrice: "$50.00",
      },
    ],
  },
  {
    id: 5,
    icon: <BsLaptop />,
    title: "TV & Audio",
    icon2: <AiOutlineRight />,
    product: "product",
    items: [
      {
        id: 1,
        subTitle: "items Title",
        image: "/images/phoneCat1.jpeg",
        newPrice: "$33.00",
        oldPrice: "$50.00",
      },
      {
        id: 2,
        subTitle: "items Title",
        image: "/images/phoneCat2.jpeg",
        newPrice: "$33.00",
        oldPrice: "$50.00",
      },
      {
        id: 3,
        subTitle: "items Title",
        image: "/images/phoneCat3.jpeg",
        newPrice: "$33.00",
        oldPrice: "$50.00",
      },
      {
        id: 4,
        subTitle: "items Title",
        image: "/images/phoneCat4.jpeg",
        newPrice: "$33.00",
        oldPrice: "$50.00",
      },
      {
        id: 5,
        subTitle: "items Title",
        image: "/images/phoneCat5.jpeg",
        newPrice: "$33.00",
        oldPrice: "$50.00",
      },
      {
        id: 6,
        subTitle: "items Title",
        image: "/images/phoneCat6.jpeg",
        newPrice: "$33.00",
        oldPrice: "$50.00",
      },
      {
        id: 7,
        subTitle: "items Title",
        image: "/images/phoneCat7.jpeg",
        newPrice: "$33.00",
        oldPrice: "$50.00",
      },
      {
        id: 8,
        subTitle: "items Title",
        image: "/images/phoneCat8.jpeg",
        newPrice: "$33.00",
        oldPrice: "$50.00",
      },
      {
        id: 9,
        subTitle: "items Title",
        image: "/images/phoneCat9.jpeg",
        newPrice: "$33.00",
        oldPrice: "$50.00",
      },
      {
        id: 10,
        subTitle: "items Title",
        image: "/images/phoneCat2.jpeg",
        newPrice: "$33.00",
        oldPrice: "$50.00",
      },
    ],
  },
  {
    id: 6,
    icon: <BsKeyboardFill />,
    title: "Key Board",
    icon2: <AiOutlineRight />,
    product: "product",
    items: [
      {
        id: 1,
        subTitle: "items Title",
        image: "/images/recentListings1.jpeg",
        newPrice: "$33.00",
        oldPrice: "$50.00",
      },
      {
        id: 2,
        subTitle: "items Title",
        image: "/images/recentListings2.jpeg",
        newPrice: "$33.00",
        oldPrice: "$50.00",
      },
      {
        id: 3,
        subTitle: "items Title",
        image: "/images/recentListings3.jpeg",
        newPrice: "$33.00",
        oldPrice: "$50.00",
      },
      {
        id: 4,
        subTitle: "items Title",
        image: "/images/catitems4.jpeg",
        newPrice: "$33.00",
        oldPrice: "$50.00",
      },
      {
        id: 5,
        subTitle: "items Title",
        image: "/images/catitems5.jpeg",
        newPrice: "$33.00",
        oldPrice: "$50.00",
      },
      {
        id: 6,
        subTitle: "items Title",
        image: "/images/recentListings6.jpeg",
        newPrice: "$33.00",
        oldPrice: "$50.00",
      },
      {
        id: 7,
        subTitle: "items Title",
        image: "/images/phoneCat2.jpeg",
        newPrice: "$33.00",
        oldPrice: "$50.00",
      },
      {
        id: 8,
        subTitle: "items Title",
        image: "/images/phoneCat1.jpeg",
        newPrice: "$33.00",
        oldPrice: "$50.00",
      },
      {
        id: 9,
        subTitle: "items Title",
        image: "/images/catitems9.jpeg",
        newPrice: "$33.00",
        oldPrice: "$50.00",
      },
      {
        id: 10,
        subTitle: "items Title",
        image: "/images/catitems4.jpeg",
        newPrice: "$33.00",
        oldPrice: "$50.00",
      },
    ],
  },
  {
    id: 7,
    icon: <BsMouse2 />,
    title: "Mouse Electronics",
  },
  {
    id: 8,
    icon: <AiOutlineLaptop />,
    title: "Jewelry Watches",
  },
];

export const mesengeData = [
  {
    id: 1,
    avatar: "/images/user.png",
    userName: "Rupak",
    timeAgo: "4 hours ago",
  },
  {
    id: 2,
    avatar: "/images/user.png",
    userName: "Md.Shahin",
    timeAgo: "8 hours ago",
  },
  {
    id: 3,
    avatar: "/images/user.png",
    userName: "Shariful Rahman",
    timeAgo: "1 day ago",
  },
  {
    id: 4,
    avatar: "/images/user.png",
    userName: "Suzon islam",
    timeAgo: "3 day ago",
  },
  {
    id: 5,
    avatar: "/images/user.png",
    userName: "Md Zahid",
    timeAgo: "7 day ago",
  },
];

export const userData = [
  {
    id: 1,
    icon: <BiUserCircle />,
    name: "My Account",
  },
  {
    id: 2,
    icon: <FaRegAddressCard />,
    name: "Membership",
  },
  {
    id: 3,
    icon: <RiAdvertisementLine />,
    name: "Promoted Ads",
  },
  {
    id: 4,
    icon: <AiFillHeart />,
    name: "Wishlistol",
  },
  {
    id: 5,
    icon: <BiHelpCircle />,
    name: "Help",
  },
  {
    id: 6,
    icon: <AiOutlineLogin />,
    name: "Logout",
  },
];
export const pageData = [
  {
    id: 1,
    name: "Home One",
  },
  {
    id: 2,
    name: "Home Two",
  },
  {
    id: 3,
    name: "Home Three",
  },
  {
    id: 4,
    name: "Home Four",
  },
  {
    id: 5,
    name: "Ad Lists",
  },
  {
    id: 6,
    name: "Add Details",
  },
  {
    id: 7,
    name: "ad lists category",
  },
  {
    id: 8,
    name: "Add listing Details",
  },
  {
    id: 9,
    name: "Add Setting",
  },
  {
    id: 10,
    name: "My Account",
  },
  {
    id: 11,
    name: "Member Ship",
  },
  {
    id: 12,
    name: "Wish list",
  },
  {
    id: 13,
    name: "Promoted add_list",
  },
  {
    id: 14,
    name: "Image Uploded",
  },
  {
    id: 15,
    name: "Payment",
  },
  {
    id: 16,
    name: "Login",
  },
  {
    id: 17,
    name: "Messages All",
  },
];

export const categoryData = [
  {
    id: 1,
    image: "/images/explore1.jpg",
    title: "Electronics",
    pera: "12,990 items",
  },
  {
    id: 2,
    image: "/images/explore2.jpg",
    title: "Mobiles",
    pera: "12,990 items",
  },
  {
    id: 3,
    image: "/images/explore3.jpg",
    title: "Vehicles",
    pera: "12,990 items",
  },
  {
    id: 4,
    image: "/images/explore4.jpg",
    title: "Appliances",
    pera: "12,990 items",
  },
  {
    id: 5,
    image: "/images/explore5.jpg",
    title: "Fashions",
    pera: "12,990 items",
  },
  {
    id: 6,
    image: "/images/explore6.jpg",
    title: "Property",
    pera: "12,990 items",
  },
  {
    id: 7,
    image: "/images/explore7.jpg",
    title: "Pets",
    pera: "12,990 items",
  },
  {
    id: 8,
    image: "/images/explore8.jpg",
    title: "Businesses",
    pera: "12,990 items",
  },
  {
    id: 9,
    image: "/images/explore9.jpg",
    title: "Services",
    pera: "12,990 items",
  },
  {
    id: 10,
    image: "/images/explore10.jpg",
    title: "Sports",
    pera: "12,990 items",
  },
];
export const featureData = [
  {
    id: 1,
    image: "/images/featured8.jpg",
    title: "Apple smartwatch 6",
    desc: "Los Angels, CA · ",
    time: "12hrs ago",
    price: "$139.40",
    btnGroup: [
      {
        id: 1,
        name: "NEW",
        className: "pro-btn1 pro-btn",
      },
      {
        id: 2,
        name: "PROMTED",
        className: "pro-btn2 pro-btn",
      },
    ],
  },
  {
    id: 2,
    image: "/images/featured2.jpg",
    title: "Samsung M32",
    desc: "Los Angels, CA · ",
    time: "12hrs ago",
    price: "$139.40",
    btnGroup: [
      {
        id: 1,
        name: "NEW",
        className: "pro-btn1 pro-btn",
      },
      {
        id: 2,
        name: "PROMTED",
        className: "pro-btn2 pro-btn",
      },
    ],
  },
  {
    id: 3,
    image: "/images/featured3.jpg",
    title: "Persian cat",
    desc: "Los Angels, CA · ",
    time: "12hrs ago",
    price: "$139.40",
    btnGroup: [
      {
        id: 1,
        name: "NEW",
        className: "pro-btn1 pro-btn",
      },
      {
        id: 2,
        name: "PROMTED",
        className: "pro-btn2 pro-btn",
      },
    ],
  },
  {
    id: 4,
    image: "/images/featured4.jpg",
    title: "Beats headphone",
    desc: "Los Angels, CA · ",
    time: "12hrs ago",
    price: "$139.40",
    btnGroup: [
      {
        id: 1,
        name: "NEW",
        className: "pro-btn1 pro-btn",
      },
      {
        id: 2,
        name: "PROMTED",
        className: "pro-btn2 pro-btn",
      },
    ],
  },
  {
    id: 5,
    image: "/images/featured5.jpg",
    title: "4 Bed 2 storey house",
    desc: "Los Angels, CA · ",
    time: "12hrs ago",
    price: "$139.40",
    btnGroup: [
      {
        id: 1,
        name: "NEW",
        className: "pro-btn1 pro-btn",
      },
      {
        id: 2,
        name: "PROMTED",
        className: "pro-btn2 pro-btn",
      },
    ],
  },
  {
    id: 6,
    image: "/images/featured6.jpg",
    title: "Apple smartwatch 6",
    desc: "Los Angels, CA · ",
    time: "12hrs ago",
    price: "$139.40",
    btnGroup: [
      {
        id: 1,
        name: "NEW",
        className: "pro-btn1 pro-btn",
      },
      {
        id: 2,
        name: "PROMTED",
        className: "pro-btn2 pro-btn",
      },
    ],
  },
  {
    id: 7,
    image: "/images/featured7.jpg",
    title: "Apple smartwatch 6",
    desc: "Los Angels, CA · ",
    time: "12hrs ago",
    price: "$139.40",
    btnGroup: [
      {
        id: 1,
        name: "NEW",
        className: "pro-btn1 pro-btn",
      },
      {
        id: 2,
        name: "PROMTED",
        className: "pro-btn2 pro-btn",
      },
    ],
  },
  {
    id: 8,
    image: "/images/featured8.jpg",
    title: "Apple smartwatch 6",
    desc: "Los Angels, CA · ",
    time: "12hrs ago",
    price: "$139.40",
    btnGroup: [
      {
        id: 1,
        name: "NEW",
        className: "pro-btn1 pro-btn",
      },
      {
        id: 2,
        name: "PROMTED",
        className: "pro-btn2 pro-btn",
      },
    ],
  },
];
export const priceData = [
  {
    id: 1,
    priceTitle: "Free",
    priceList: [
      { id: 1, icon: <MdDone />, desc: "Your ad will be promoted for 3 days" },
      { id: 2, icon: <MdDone />, desc: "Get upto 10x times more responses" },
      { id: 3, icon: <MdDone />, desc: "Your Ad will be featured for 1st day" },
    ],
    price: "$0",
    forTime: "/For Lifetime",
    btn: "Get Started",
  },
  {
    id: 2,
    priceTitle: "Standard",
    priceList: [
      { id: 1, icon: <MdDone />, desc: "Your ad will be promoted for 3 days" },
      { id: 2, icon: <MdDone />, desc: "Get upto 10x times more responses" },
      { id: 3, icon: <MdDone />, desc: "Your Ad will be featured for 1st day" },
    ],
    price: "$49",
    forTime: "/For 3 Days",
    btn: "Get Started",
  },
  {
    id: 3,
    priceTitle: "Premium",
    priceList: [
      { id: 1, icon: <MdDone />, desc: "Your ad will be promoted for 3 days" },
      { id: 2, icon: <MdDone />, desc: "Get upto 10x times more responses" },
      { id: 3, icon: <MdDone />, desc: "Your Ad will be featured for 1st day" },
    ],
    price: "$99",
    forTime: "/For 4 Days",
    btn: "Get Started",
  },
];
export const footerData = [
  {
    id: 1,
    title: "Categories",
    items: [
      { id: 1, name: "Electronics" },
      { id: 2, name: "Mobile" },
      { id: 3, name: "Vehicles" },
      { id: 4, name: "Appliances" },
      { id: 5, name: "Fashions" },
      { id: 6, name: "Education" },
      { id: 7, name: "Property" },
    ],
  },
  {
    id: 2,
    title: "About",
    items: [
      { id: 1, name: "About Us" },
      { id: 2, name: "Blog" },
      { id: 3, name: "Press" },
      { id: 4, name: "Jobs" },
      { id: 5, name: "In Press" },
      { id: 6, name: "Term & Conditions" },
      { id: 7, name: "Privacy Policy" },
    ],
  },
  {
    id: 3,
    title: "Help & Support",
    items: [
      { id: 1, name: "Contact" },
      { id: 2, name: "Faq" },
      { id: 3, name: "Saferty Informations" },
    ],
  },
];
