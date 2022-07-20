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
        bump: {
          "0%": {
            transform: "scale(1)",
          },
          "10%": {
            transform: "scale(0.9)",
          },
          "30%": {
            transform: "scale(1.1)",
          },
          "5%": {
            transform: "scale(1.15)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
      },

      animation: {
        topdownnotification: "popover 1s ease-in-out ",
        bumpit: "bump 300ms ease-in-out",
        spinner: " skcubemove 1.8s infinite ease-in-out",
      },
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    styled: true,
    themes: ["corporate", "black", "retro"],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
};
