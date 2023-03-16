import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: (
    <>
      <svg
        width="86"
        height="45"
        viewBox="0 0 86 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.190685"
          d="M0 34.5405V10.4627L20.5248 0L40.7887 10.7027V34.4212L20.1486 45L0 34.5405Z"
          fill="#8A8388"
        />
        <path
          d="M43.7004 11.313C46.9121 11.313 49.6442 12.439 51.8969 14.6911C54.1941 16.9431 55.3427 19.6478 55.3427 22.8051C55.3427 25.2559 54.6179 27.4748 53.1682 29.4619L55.3427 31.5815L52.566 34.2972L50.4249 32.1776L50.2922 32.2688C48.2977 33.6211 46.1004 34.2972 43.7004 34.2972C43.21 34.2972 42.7307 34.271 42.2627 34.2185L42.2628 30.3344C42.7262 30.4151 43.2054 30.4555 43.7004 30.4555C45.8192 30.4555 47.6369 29.7158 49.1536 28.2365C50.6702 26.7131 51.4285 24.9026 51.4285 22.8051C51.4285 20.7076 50.6702 18.9082 49.1536 17.4068C47.6369 15.9054 45.8192 15.1547 43.7004 15.1547C41.5816 15.1547 39.7527 15.9054 38.2138 17.4068C36.7195 18.9082 35.9723 20.7076 35.9723 22.8051C35.9723 24.1227 36.2672 25.3271 36.8568 26.4181L36.857 32.0936C36.3882 31.7438 35.9372 31.3523 35.504 30.9191C33.229 28.6892 32.0916 25.9845 32.0916 22.8051C32.0916 19.6478 33.229 16.9431 35.504 14.6911C37.7343 12.439 40.4664 11.313 43.7004 11.313Z"
          fill="white"
          stroke="white"
          stroke-width="3"
        />
        <path
          d="M21.1045 34.2972C22.1081 34.2972 23.0783 34.1758 24.0151 33.9329C24.9518 33.6901 25.8328 33.3423 26.658 32.8897C27.4832 32.4371 28.2471 31.8906 28.9497 31.2503C29.6522 30.61 30.2711 29.9035 30.8064 29.1307V20.9174H21.1045V24.726H26.9256V27.8722C26.1896 28.6892 25.3254 29.3239 24.3329 29.7766C23.3404 30.2292 22.2642 30.4555 21.1045 30.4555C18.9857 30.4555 17.1568 29.7158 15.6179 28.2365C14.1235 26.7131 13.3764 24.9026 13.3764 22.8051C13.3764 20.7076 14.1235 18.9082 15.6179 17.4068C17.1568 15.9054 18.9857 15.1547 21.1045 15.1547C23.2456 15.1547 25.0633 15.9054 26.5576 17.4068L29.3344 14.6911C28.2638 13.6313 27.026 12.8033 25.6209 12.2072C24.2158 11.6111 22.7103 11.313 21.1045 11.313C17.8928 11.313 15.1606 12.439 12.908 14.6911C10.6331 16.9431 9.49561 19.6478 9.49561 22.8051C9.49561 25.9845 10.6331 28.6892 12.908 30.9191C15.1606 33.1712 17.8928 34.2972 21.1045 34.2972Z"
          fill="white"
          stroke="white"
          stroke-width="3"
        />
        <path
          d="M64.1635 34.2974C65.1975 34.2974 66.1619 34.0387 67.0567 33.5215L66.6777 30.2031C65.9957 30.3462 65.5657 30.4177 65.3878 30.4177C64.7986 30.4177 64.3503 30.2389 64.0431 29.8812C63.7358 29.5235 63.6625 28.9044 63.823 28.0239L65.0059 21.5358H67.5074L68.1876 17.8047H65.6861L66.592 12.8354L61.8155 13.3307L60.9999 17.8047H58.4983L57.8181 21.5358H60.3196L59.0164 28.6843C58.7154 30.3352 59.0255 31.6834 59.9467 32.729C60.8679 33.7746 62.2735 34.2974 64.1635 34.2974ZM74.3308 41.2312C76.3481 41.1432 78.2208 40.3232 79.9491 38.7714C81.6773 37.2195 82.7521 35.2879 83.1735 32.9767L85.9425 17.7882H81.273L79.3046 28.5852C78.3641 29.7188 77.3987 30.3187 76.4083 30.3847C75.2914 30.3517 74.5102 30.0325 74.0646 29.4272C73.6191 28.8218 73.4967 27.9689 73.6973 26.8683L75.3527 17.7882H70.6832L68.8171 28.0239C68.5161 29.6748 68.8062 31.1331 69.6872 32.3988C70.5682 33.6645 72.065 34.2974 74.1774 34.2974C75.7228 34.2974 77.176 33.7966 78.5371 32.7951L78.3836 33.637C78.1428 34.9578 77.6431 35.9758 76.8845 36.6912C76.1259 37.4066 75.024 37.7643 73.5787 37.7643C72.4091 37.6543 71.2475 37.104 70.094 36.1134L67.4745 38.5898C69.0435 40.3508 70.9894 41.2643 73.3121 41.3303L74.3308 41.2312Z"
          fill="white"
        />
      </svg>
    </>
  ),
  project: {
    link: "https://github.com/gqty-dev/gqty",
  },
  chat: {
    link: "https://discord.gg/5aku972dk9",
  },
  docsRepositoryBase: "https://github.com/shuding/nextra-docs-template",
  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{" "}
        <a href="https://gqty.dev" target="_blank">
          GQty
        </a>
        .
      </span>
    ),
  },
};

export default config;
