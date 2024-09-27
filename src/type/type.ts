// Global Type --
interface image {
  src: string;
  alt: string;
}

interface link {
  label: string;
  url: string;
}

interface button {
  label: string;
  link: string;
  icon?: string;
}

// Navbar Type ---
export interface navtype {
  logo: image;
  links: link[];
  icons: image[];
}

// Hero Type -----
export interface herotype {
  btn: button;
  icons: image[];
}
