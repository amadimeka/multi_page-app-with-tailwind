/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html,css}"],
  theme: {
    extend: {
      colors: {
        main: "#E7816B",
        second: "#47019d",
        three: "#e00256",
      },
      backgroundColor: {
        main: "#E7816B",
        second: "#47019d",
        three: "#e00256",
      },
      // backgroundImage: {
      //   'web_design': "url('src/images/image/web_design_bgh.jpg')",
      //   'graphic_design': "url('/images/image/graphic_design1.png')",
      //   'app_design': "url('/images/image/app_design_bgh.jpg')",
      // },
    },
  },
  plugins: [],
};
// import web_design from "../images/image/web_design_bgh.jpg";
// import graphic_design from "../images/image/graphic_design1.png";
// import app_design from "../images/image/app_design_bgh.jpg";