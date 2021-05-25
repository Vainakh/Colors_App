import sizes from './sizes';
import backgroundImage from './Wavey-Fingerprint.svg'

export default {
  "@global": {
    ".fade-exit": {
      opacity: 1
    },
    ".fade-exit-active": {
      opacity: 0,
      transition: 'opacity 500ms ease-out'
    }
  },
  root: {
    backgroundColor: "black",
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: '#0b7',
    overflow: 'scroll',
    backgroundImage: `url(${backgroundImage})`,
    /* background by SVGBackgrounds.com */
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
    [sizes.down('xl')] : {
      width: '80%'
    }
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    color: "white",
    alignItems: "center",
    "& a": {
      color: "white",
      textDecoration: "none"
    }
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "2.5rem",
    [sizes.down('sm')]: {
      gridTemplateColumns: "repeat(2, 50%)"
    },
    [sizes.down('xs')]: {
      gridTemplateColumns: "repeat(1, 100%)",
      gridGap: "1rem"
    }
  },
  heading: {
    fontSize: '2rem'
  },

}