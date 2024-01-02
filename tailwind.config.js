/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        paleBlue: "hsl(225, 100%, 94%)",
        paleBlue2: "hsl(225, 100%, 96%)",
        brightBlue: "hsl(245, 75%, 52%)",
        brightBlue2: "hsl(245, 75%, 68%)",
        veryPaleBlue: "hsl(225, 100%, 98%)",
        desaturatedBlue: "hsl(224, 23%, 55%)",
        darkBlue: "hsl(223, 47%, 23%)",
      },
    },
  },
  plugins: [],
};
