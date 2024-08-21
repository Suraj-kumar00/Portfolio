/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},// for style
    // An autoprefixer ensures that any browser that use if it has any set of prefix that need to be add in CSS rules that those are properly added, so auto prefixer is very important.
    autoprefixer: {},
  },
};

export default config;
