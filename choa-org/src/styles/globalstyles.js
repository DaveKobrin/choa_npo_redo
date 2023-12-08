import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
      color: rgb(var(--foreground-rgb));
      background: linear-gradient(
          to bottom,
          transparent,
          rgb(var(--background-end-rgb))
        )
        rgb(var(--background-start-rgb));
      }
`;

export const PageColors = {
    NAVBAR_GREEN        : "#00A94F",
    MEDIUM_GRAY         : "#5a5a5a",
    BACKGROUND_WHITE    : "#f5f5f5",
    BACKGROUND_DK_BLUE  : "#011626",
    BRIGHT_GREEN        : "#06aa52",
    BUTTON_GREEN        : "#27935a",
    BUTTON_DK_GREEN     : "#247f4f",
    BUTTON_YELLOW       : "#f6b221",
    BUTTON_DK_YELLOW    : "#d0961f",
    TEXT_WHITE          : "#ffffff",
    TEXT_BLACK          : "#25272c",
    TRUE_BLACK          : "#000000",
    BROWN               : "#2a1c15",
    WINE                : "#BD2F92",
    LT_BLUE             : "#0081C6",
    BLACK_TRANS_25      : "#0000003f"

}

export const DeviceSize = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet : '768px',
    laptopS: '1280px',
    laptopL: '1440px',
    desktop: '1920px'
}

export const Device = {
    mobileS: `(min-width: ${DeviceSize.mobileS})`,
    mobileM: `(min-width: ${DeviceSize.mobileM})`,
    mobileL: `(min-width: ${DeviceSize.mobileL})`,
    tablet : `(min-width: ${DeviceSize.tablet })`,
    laptopS: `(min-width: ${DeviceSize.laptopS})`,
    laptopL: `(min-width: ${DeviceSize.laptopL})`,
    desktop: `(min-width: ${DeviceSize.desktop})`
}

export default GlobalStyle;