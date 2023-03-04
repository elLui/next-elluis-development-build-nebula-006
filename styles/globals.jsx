import { createGlobalStyle } from "styled-components";


//.example {
//  font-family: "objektiv-variable", sans-serif;
//  font-variation-settings: 'wght' 400;
//}


//font-family: "louvette-banner", serif;
//font-weight: 400;
//font-style: normal;
//
//font-family: "louvette-banner", serif;
//font-weight: 400;
//font-style: italic;
//
//font-family: "louvette-banner", serif;
//font-weight: 700;
//font-style: normal;
//@import url("https://use.typekit.net/ptz3vfb.css");
//@import url("https://use.typekit.net/ptz3vfb.css");



const GlobalStyle = createGlobalStyle`
  /**
   * @source https://fonts.adobe.com/fonts/objektiv-variable
   */



  :root {
    --color-primary: #c69963;
    --color-primary-dark: #B28451;
    --color-secondary: #101d2c;
    --color-grey-light-1: #f9f7f6;
    --color-grey-light-2: #aaa;
    --color-grey-dark-1: #54483A;
    --color-grey-dark-2: #6D5D4B;
    // FONT VARIABLES
    --font-primary: 'Nunito', sans-serif;
    --font-display: 'Josefin Sans', sans-serif;
    // RESPONSIVE BREAKPOINTS
    --bp-largest: 75em; // 1200px
    --bp-large: 62.5em; // 1000px
    --bp-medium: 50em; // 800px;
    --bp-small: 37.5em; // 600px;
  }

  // variables
  body {

    --color-grey-50: hsl(265, 55%, 96%);
    --color-grey-100: hsl(265, 19%, 88%);
    --color-grey-200: hsl(265, 7%, 70%);
    --color-grey-300: hsl(265, 6%, 66%);
    --color-grey-400: hsl(265, 4%, 57%);
    --color-grey-500: hsl(265, 3%, 53%);
    --color-grey-600: hsl(265, 4%, 42%);
    --color-grey-700: hsl(265, 4%, 31%);
    --color-grey-800: hsl(276, 5%, 20%);
    --color-grey-900: hsl(280, 5%, 13%);

    --color-primary-50: #c8b3ce;
    --color-primary-100: #a07aaa;
    --color-primary-200: #884c97;
    --color-primary-300: #843897;
    --color-primary-400: #732392;
    --color-primary-500: #5a097a;
    --color-primary-600: #480264;
    --color-primary-700: #3d0264;

    --color-success-100: #a2f0bc;
    --color-success-500: #12bd4b;

    --color-error-100: #f1acc9;
    --color-error-500: #a10c4a;


    // colors
    --color-primary: #0e3fbe;
    --color-primary-dark: #0c1b68;
    --color-secondary: #e36e2d;
    --color-secondary-dark: #923809;
    --color-grey-light-1: #f9f7f6;
    --color-grey-light-2: #8c92a5;
    --color-grey-dark-1: #716a66;
    --color-grey-dark-2: #3f3d39;


    // sizes
    --size-0: 0;
    --size-1: 0.25rem;
    --size-2: 0.5rem;
    --size-3: 0.75rem;
    --size-4: 1rem;
    --size-5: 1.25rem;
    --size-6: 1.5rem;
    --size-8: 2rem;
    --size-16: 4rem;
    --size-20: 5rem;
    --size-40: 10rem;

    --default-size-0: 0;

    // breakpoints
    --bp-xsmall: 30em; //  480px
    --bp-small: 37.5em; //  600px
    --bp-medium: 50em; //  800px
    --bp-large: 62.5em; // 1000px
    --bp-xlarge: 75em; // 1200px


    --primary-font: "objektiv-variable", sans-serif;

    --primary-display-font: "louvette-banner", serif;
    //font-family: "louvette-banner", serif;
    font-weight: 400;
    font-style: normal;


  }


  *, *::before, *::after {
    box-sizing: border-box;
  }

  html,
  body {

    padding: 0;
    margin: 0;
    font-family: "objektiv-variable", apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

    //  font-family: "objektiv-variable", sans-serif;
      font-variation-settings: 'wght' 400;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: "louvette-banner", serif;
  }

  ul {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }


`

export default GlobalStyle