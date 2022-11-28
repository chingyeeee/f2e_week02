const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  tabletH: "992px",
  laptop: "1024px",
  laptopL: "1200px",
  desktop: "1400px",
};

const sizeMax = {
  mobileS: "319px",
  mobileM: "374px",
  mobileL: "424px",
  tablet: "767px",
  tabletH: "991px",
  laptop: "1023px",
  laptopL: "1199px",
  desktop: "1399px",
};

export const devices = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  tabletH: `(min-width: ${size.tabletH})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
};

export const devicesMax = {
  mobileS: `(max-width: ${sizeMax.mobileS})`,
  mobileM: `(max-width: ${sizeMax.mobileM})`,
  mobileL: `(max-width: ${sizeMax.mobileL})`,
  tablet: `(max-width: ${sizeMax.tablet})`,
  tabletH: `(max-width: ${sizeMax.tabletH})`,
  laptop: `(max-width: ${sizeMax.laptop})`,
  laptopL: `(max-width: ${sizeMax.laptopL})`,
  desktop: `(max-width: ${sizeMax.desktop})`,
};
