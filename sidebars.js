/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  web3apiSidebar: [
    {
      type: "html",
      value: "Web3 Data API",
      defaultStyle: true,
    },
    {
      type: "autogenerated",
      dirName: "01-web3-data-api",
    },
    {
      type: "html",
      value: "<hr style='margin: 1rem 0 1rem 0;'/>",
      defaultStyle: true,
    },
    {
      type: "html",
      value: "API Reference",
      defaultStyle: true,
    },
    {
      type: "doc",
      label: "Overview",
      id: "reference/web3-data-api/overview",
    },
    {
      type: "html",
      value: "<header style='font-weight: 600; font-size: 14px'>EVM</header>",
      defaultStyle: true,
    },
    {
      type: "autogenerated",
      dirName: "reference/web3-data-api/evm-api",
    },
    {
      type: "html",
      value: "<header style='font-weight: 600; font-size: 14px'>Aptos</header>",
      defaultStyle: true,
    },
    {
      type: "autogenerated",
      dirName: "reference/web3-data-api/aptos-api",
    },
    {
      type: "html",
      value:
        "<header style='font-weight: 600; font-size: 14px'>Solana</header>",
      defaultStyle: true,
    },
    {
      type: "autogenerated",
      dirName: "reference/web3-data-api/solana-api",
    },
  ],
  streamsSidebar: [
    {
      type: "html",
      value: "Streams API",
      defaultStyle: true,
    },
    {
      type: "autogenerated",
      dirName: "02-streams-api",
    },
    {
      type: "html",
      value: "<hr style='margin: 1rem 0 1rem 0;'/>",
      defaultStyle: true,
    },
    {
      type: "html",
      value: "API Reference",
      defaultStyle: true,
    },
    {
      type: "autogenerated",
      dirName: "reference/streams-api",
    },
  ],
  authenticationSidebar: [
    {
      type: "html",
      value: "Authentication API",
      defaultStyle: true,
    },
    {
      type: "autogenerated",
      dirName: "03-authentication-api",
    },
    {
      type: "html",
      value: "<hr style='margin: 1rem 0 1rem 0;'/>",
      defaultStyle: true,
    },
    {
      type: "html",
      value: "API Reference",
      defaultStyle: true,
    },
    {
      type: "autogenerated",
      dirName: "reference/authentication-api",
    },
  ],
  exampledappsSidebar: [
    {
      type: "autogenerated",
      dirName: "04-example-dapps",
    },
  ],
  developerToolsSidebar:[
    {
      type: "html",
      value: "Developer tools",
      defaultStyle: true,
    },
    {
      type: "autogenerated",
      dirName: "05-developer-tools",
    },
  ]
};

module.exports = sidebars;
