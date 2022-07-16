import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --white: #ffffff;
        --purple-300: #8284FA;
        --purple-500: #5e60ce;
        --blue-300: #4ea8de;
        --blue-500: #1e6f9f;

        --gray-100: #f2f2f2;
        --gray-200: #d9d9d9;
        --gray-300: #808080;
        --gray-400: #333333;
        --gray-500: #262626;
        --gray-600: #1a1a1a;
        --gray-700: #0d0d0d;

        -red-500: #e25858;
    }

    :focus {
        outline: transparent;
        box-shadow: 0 0 0 2px var(--purple-500);
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 87.5%;
    }

    body {
        background-color: var(--gray-600);
        color: var(--gray-300);
        -webkit-font-smoothing: antialiased;
    }
    
    body, input, textarea, button {
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
    
`;

export default GlobalStyle;
