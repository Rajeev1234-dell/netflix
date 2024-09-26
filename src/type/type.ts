// Global Type --
interface image {
  src: string;
  alt: string;
}

interface link {
  label: string;
  url: string;
}

// Navbar Type ---
export interface navtype {
  logo: image;
  links: link[];
  icons: image[];
}
