module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        popover: {
          "0%": { transform: " translateY(-2rem)", opacity: " 0%" },
          "50%": { transform: "translateY(-1rem)", opacity: "50%" },
          "100%": { transform: "translateY(0)", opacity: "100%" },
        },
        skcubemove: {
          "25%": {
            transform: " translateX(42px) rotate(-90deg) scale(0.5)",
          },
          "50%": {
            transform: " translateX(42px) translateY(42px) rotate(-180deg)",
          },
          "75%": {
            transform:
              " translateX(0px) translateY(42px) rotate(-270deg) scale(0.5)",
          },
          "100%": {
            transform: " rotate(-360deg)",
          },
        },
      },

      animation: {
        topdownnotification: "popover 1s ease-in-out ",
        spinner: " skcubemove 1.8s infinite ease-in-out",
      },
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    styled: true,
    themes: ["corporate", "black"],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
};
