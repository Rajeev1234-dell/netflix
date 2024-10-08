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

//Get single Movie

export type MovieData = {
  adult?: boolean;
  title?: string;
  poster_path?: string;
  backdrop_path?: string;
  overview?: string;
  tagline?: string;
  original_language?: string;
  runtime?: number;
  // Add other fields as necessary based on your API response
};

export interface castMember {
  profile_path: string | null;
  original_name: string;
}

export interface castDirector {
  id: string;
  cast: castMember[];
  profile_path: string;
  original_name: string;
}
