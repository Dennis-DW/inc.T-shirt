import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets1/icons";
import {
  bigShirt1,
  bigShirt2,
  bigShirt3,
  customer1,
  customer2,
  shirt4,
  shirt5,
  shirt6,
  shirt7,
  thumbnailShirt1,
  thumbnailShirt2,
  thumbnailShirt3,
} from "../assets1/images";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#contact-us", label: "Contact Us" },
];

export const shirts = [
  {
    thumbnail: thumbnailShirt1,
    bigShirt: bigShirt1,
  },
  {
    thumbnail: thumbnailShirt2,
    bigShirt: bigShirt2,
  },
  {
    thumbnail: thumbnailShirt3,
    bigShirt: bigShirt3,
  },
];

export const statistics = [
  { value: "1k+", label: "Brands" },
  { value: "200+", label: "Shops" },
  { value: "150k+", label: "Customers" },
];

export const products = [
  {
    imgURL: shirt4,
    name: "inc T-Shirt-01",
    price: "ksh.1500",
  },
  {
    imgURL: shirt5,
    name: "inc T-Shirt-10",
    price: "ksh.2000",
  },
  {
    imgURL: shirt6,
    name: "inc T-Shirt-100",
    price: "ksh.2500",
  },
  {
    imgURL: shirt7,
    name: "inc T-Shirt-001",
    price: "ksh.1500",
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: shieldTick,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: support,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Morich Brown",
    rating: 4.5,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    imgURL: customer2,
    customerName: "Lota Mongeskar",
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Air Force 1", link: "/" },
      { name: "Air Max 1", link: "/" },
      { name: "Air Jordan 1", link: "/" },
      { name: "Air Force 2", link: "/" },
      { name: "Nike Waffle Racer", link: "/" },
      { name: "Nike Cortez", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@nike.com", link: "mailto:customer@nike.com" },
      { name: "+92554862354", link: "tel:+92554862354" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
