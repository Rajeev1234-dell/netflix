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
interface navtype {
  logo: image;
  links: link[];
  icons: image;
}
