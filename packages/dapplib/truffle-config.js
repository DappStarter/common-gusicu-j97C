require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi forget tell tissue recipe still honey gloom praise army gaze'; 
let testAccounts = [
"0x909dc638f47a7c1a0edd61d15c6934c4ad04ef70ccfcb6697da47d8e0fe84472",
"0x6b124cd03ed9d2067ea9b404fd33f3d8053aa8d5c4923e63d7b58b0a37e69d81",
"0x4a8cabcbfcb23ce6acffdd08171703e5a6eb040b5421baf72300c326797c1ad0",
"0xb841310b2ede0523ff0d2e6d6391d174a2e17ac726f1289064ce7eef2c48402b",
"0x537cbe0fd53c1ddb6f5d30328ac9f0ea393a36a6e841579b552e9a86f32de2db",
"0x28d3c9fcc527a6d9dd150aab37ae78b5c6b3063d4b6cc4ec02ae7408800813cd",
"0xb38f30433dea4593a402ef5755aa5f8120bbb6017d2ed9a4c74751f525ec5b7d",
"0x6010f6c995aac9a6437594d1e25afbc6156e3aefa53c8121244bd9950a16fca8",
"0xf2ad2f1a9d9f5337e4ae4cd7ce7c4affba0301366e43672fcc6f0ae2f9b89c82",
"0xedaa1637fad6e8cad85b95909c62881db42fce6c85f7f47509607644cb857307"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


