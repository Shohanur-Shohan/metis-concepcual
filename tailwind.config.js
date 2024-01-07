/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/aboutComponent/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/companyComponent/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/productComponent/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/featuresComponent/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/dashboardComponent/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/admin/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/sidebar/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        md: "2rem",
        lg: "2rem",
        xl: "2rem",
        "2xl": "4rem",
      },
    },

    screens: {
      xs: "380px",
      // => @media (min-width: 380px) { ... }
      
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  important: true,
  plugins: [
    require("daisyui"),
  ],
}
