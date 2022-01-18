import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

function createGradient(color1, color2) {
  return `radial-gradient( ${color1}, ${color2})`;
}

const typeColor={
	bug:"#040707",
	dark:"#705949",
	dragon:"#7039f7",
	electric:"#f6d132",
	fairy:"#feaec9",
	fighting:"#be2e25",
	fire:"#ef7e2e",
	flying:"#a890f0",
	ghost:"#705798",
	grass:"#78c84f",
	ground:"#e3c061",
	ice:"#98d8d8",
	normal:"#a8a67d",
	poison:"#9b459e",
	psychic:"#f45887",
	rock:"#b8a139",
	steel:"#b8b8d0",
	water:"#698ff4"
  }

const bgType = {
	bug: "#dcedc8",
	dark: "#bdbdbd",
	dragon: "#c5cae9", 
	electric: "#ffff8d",
	fairy : "#fce4ec",
	fighting: "#ff8a80",
	fire: "#ffccbc",
	flying: "#8c9eff",
	ghost: "#d1c4e9",
	grass: "#b9f6ca",
	ground: "#ffe0b2",
	ice: "#b2ebf2",
	normal: "#eeeeee",
	poison: "#e1bee7",
	psychic: "#ff80ab",
	rock: "#d7ccc8",
	steel: "#cfd8dc",
	water: "#bbdefb"
	// bug: createGradient("#ffffff","#dcedc8"),
	// dark: createGradient("#ffffff","#bdbdbd"),
	// dragon: createGradient("#ffffff","#c5cae9"), 
	// electric: createGradient("#ffffff","#ffff8d"),
	// fairy : createGradient("#ffffff","#fce4ec"),
	// fighting: createGradient("#ffffff","#ff8a80"),
	// fire: createGradient("#ffffff","#ffccbc"),
	// flying: createGradient("#ffffff","#8c9eff"),
	// ghost: createGradient("#ffffff","#d1c4e9"),
	// grass: createGradient("#ffffff","#c8e6c9"),
	// ground: createGradient("#ffffff","#ffe0b2"),
	// ice: createGradient("#ffffff","#b2ebf2"),
	// normal: createGradient("#ffffff","#eeeeee"),
	// poison: createGradient("#ffffff","#e1bee7"),
	// psychic: createGradient("#ffffff","#ff80ab"),
	// rock: createGradient("#ffffff","#d7ccc8"),
	// steel: createGradient("#ffffff","#cfd8dc"),
	// water: createGradient("#ffffff","#bbdefb")

}
const greyColor = {

    "50":"#fafafa",
    "100":"#f5f5f5",
    "200":"#eeeeee",
    "300":"#e0e0e0",
    "400":  "#bdbdbd",
    "500":  "#9e9e9e",
    // 500
    // #9e9e9e
    // 600
    // #757575
    // 700
    // #616161
    // 800
    // #424242
    // 900
    // #21212
    }
        


const LocalPalette = {
    common: { black: '#101012', white: '#fff' },
    primary: '#ffffff' ,
    secondary: '#cc0000',
    type: {...typeColor},
    typeBg:{...bgType},
    grey: {...greyColor}
    // gradients: GRADIENTS,
    // chart: CHART_COLORS,
    // divider: GREY[500_24],
    // text: { primary: GREY[800], secondary: GREY[600], disabled: GREY[500] },
    // background: { paper: '#fff', default: '#fff', neutral: GREY[200] },
    // action: {
    //   active: GREY[600],
    //   hover: GREY[500_8],
    //   selected: GREY[500_16],
    //   disabled: GREY[500_80],
    //   disabledBackground: GREY[500_24],
    //   focus: GREY[500_24],
    //   hoverOpacity: 0.08,
    //   disabledOpacity: 0.48
    // }
  };

  export default LocalPalette;