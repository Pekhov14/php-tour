/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    // "./src/**/*.{js,ts,jsx,tsx}",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#007BFF",
        secondary: "#F9FAFB",
        darkBg: "#1E293B",
        darkText: "#E2E8F0",
        contentLight: "#111827",
        contentDark: "#CBD5E1",
      },
    },
  },
  plugins: [],
}

