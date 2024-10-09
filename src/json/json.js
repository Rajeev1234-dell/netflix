// Navbar json --------
export const navbar = {
  logo: { src: "/images/icons/Logo.svg", alt: "logo" },
  links: [
    { label: "Home", url: "/" },
    { label: "Movies & Shows", url: "/" },
    { label: "Support", url: "/" },
    { label: "Subscriptions", url: "/" },
  ],
  icons: [
    { src: "/images/icons/search.svg", alt: "search" },
    // { src: "/images/icons/notification.svg", alt: "notification" },
  ],
};

// HeroSection json -------
export const hero = {
  // btn: {
  //   label: "Play Now",
  //   link: "/",
  //   icon: "/images/icons/play.svg",
  // },
  icons: [
    { src: "/images/icons/Icon (1).svg", alt: "notification" },
    { src: "/images/icons/Icon.svg", alt: "notification" },
    { src: "/images/icons/Vector.svg", alt: "notification" },
  ],
};

// trial Section ---------
export const trial = {
  bgImage: "/images/movies/Background.jpg",
  title: "Start your free trial today!",
  desc: "This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe.",
  btn: {
    label: "Start a free Trial",
    url: "/",
  },
};

//footer Section -------
export const footer = {
  options_links: [
    {
      title: "Home",
      links: [
        { label: "categories", url: "/" },
        { label: "Devices", url: "/" },
        { label: "Pricing", url: "/" },
        { label: "FAQ", url: "/" },
      ],
    },
    {
      title: "Movies",
      links: [
        { label: "Gernes", url: "/" },
        { label: "Trending", url: "/" },
        { label: "New Release", url: "/" },
        { label: "Popular", url: "/" },
      ],
    },
    {
      title: "Shows",
      links: [
        { label: "Gernes", url: "/" },
        { label: "Trending", url: "/" },
        { label: "New Release", url: "/" },
        { label: "Popular", url: "/" },
      ],
    },
    {
      title: "Support",
      links: [{ label: "Contact Us", url: "/" }],
    },
    {
      title: "Subscription",
      links: [
        { label: "categories", url: "/" },
        { label: "Devices", url: "/" },
        { label: "Pricing", url: "/" },
        { label: "FAQ", url: "/" },
      ],
    },
  ],
  connect: "Connect With Us",
  social_icons: [
    { img: "/images/icons/facebook.jpg", link: "/" },
    { img: "/images/icons/twitter.jpg", link: "/" },
    { img: "/images/icons/linkedin.jpg", link: "/" },
  ],
  copy_right: "@2023 streamvib, All Rights Reserved",
  policies: [
    {
      label: "Terms of Use",
      url: "/",
    },
    {
      label: "Privacy Policy",
      url: "/",
    },
    {
      label: "Cookie Policy",
      url: "/",
    },
  ],
};
