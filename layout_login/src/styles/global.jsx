import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        font-family: arial,sans-serif;
    }

    body {
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        background-color: green;
    }

`

export default Global;