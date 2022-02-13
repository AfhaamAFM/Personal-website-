module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  
  theme: {
    extend: {

screens:{

  sm:"640px",
  md:"768px",
  lg:"1024px",
  xl:"1280px"
},
colors :{
transparent:"transparent",
black: "#000",
white: "#fff",
primary: "#618930",
secondary: {
  1: "#222629",
  2: "#81BA30"
},
},
textColor: {
  primary: "#D1D1D1",
  secondary: "#81BA30",
  textcolor: {
    1: "#618930",
    2: "#6F6F6F",
    3: "#000000",
    4: "#EF4444",
    5: "#10B981",
  },
}
    },
  },
  plugins: [],
}