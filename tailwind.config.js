/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: "200px",
      },
      colors: {
        black: "#111111",
        blackText: "#0e0e0d",
        grayText: "#585858",
        whiteText: "#dadada",
        bgColor: "#fffffe",
        btnColor: "#5c4ff8",
        bg2: "#111111",
        original1: "#837af9",
        original2: "#aaa5fa",
        original3: "#d1d0fb",
        original4: "#f8f4fc",
        lightgreen: "#32CD32",
        lightgreen1: "#66d966",
        lightgreen2: "#99e599",
        lightgreen3: "#ccefcc",
        lightgreen4: "#e6f9e6",
        softRed: "#e63946",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".scrollbar-hide": {
          /* Hide scrollbar for modern browsers */
          "-ms-overflow-style": "none" /* Internet Explorer 10+ */,
          "scrollbar-width": "none" /* Firefox */,
        },
        ".scrollbar-hide::-webkit-scrollbar": {
          display: "none" /* Safari and Chrome */,
        },
      };

      addUtilities(newUtilities, ["responsive"]);
    },
  ],
};
