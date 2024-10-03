// Global Type --
interface image {
  src: string;
  alt: string;
}

interface link {
  label: string;
  url: string;
}

// interface button {
//   label: string;
//   link: string;
//   icon?: string;
// }

// Navbar Type ---
export interface navtype {
  logo: image;
  links: link[];
  icons: image[];
}

// Hero Type -----
export interface herotype {
  // btn?: button;
  original_title?: string;
  overview?: string;
  backdrop_path?: string;
}

export interface abc {
  icons?: image[] | undefined;
}

//Trial Type --------
export interface trialtype {
  bgImage: string;
  title: string;
  desc: string;
  btn: link;
}

//footer type -------

interface icons {
  img: string;
  link: string;
}

interface footerlinks {
  title: string;
  links: link[];
}
export interface footertype {
  options_links: footerlinks[];
  social_icons: icons[];
  copy_right: string;
  policies: link[];
  connect: string;
}
