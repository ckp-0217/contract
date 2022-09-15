require("@nomicfoundation/hardhat-toolbox");
require('hardhat-abi-exporter');
require('@primitivefi/hardhat-dodoc');


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.5.16" ,
  abiExporter: {
    path: './abi',
    runOnCompile: true,
    clear: true,
    flat: false,
    spacing: 2,
    pretty: true,
  }, 
  dodoc: {
    runOnCompile: false,
    debugMode: false,
    // More options...
    outputDir:'./dos'
  },

};
