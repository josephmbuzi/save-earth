/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        jungle: {
          900: "#002114",
          700: "#006C4B",
          500: "#5DDDA7",
          300: "#7BFAC2",
          100: "#BEFFDC",
        },
        sandstorm: {
          900: "#201C00",
          700: "#6B5F00",
          500: "#DDC731",
          300: "#FBE44D",
          100: "#FFF2AD",
        },
        redish: {
          900: "#410002",
          700: "#BA1A1A",
          500: "#FFDAD6",
        },
        navy: {
          900: "#001D35",
          700: "#0062A0",
          500: "#9CCAFF",
          300: "#DOE4FF",
        },
        surface: {
          900: "#FAFDFF",
          800: "#EDF5F6",
        },
        stroke: {
          900: "#DBDDDC",
          800: "#EDEFEE",
        },

        dark: {
          900: "#222628",
          800: "#57605B",
          700: "#FFFFFF",
        }
      },
      fontFamily: {
        manrope: ["Manrope_400Regular"],
        "manrope-medium": ["Manrope_500Medium"],
        "manrope-semibold": ["Manrope_600SemiBold"],
        "manrope-bold": ["Manrope_700Bold"],
      },
    },
  },
  plugins: [],
}

