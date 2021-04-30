require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nasty flee spot warrior ridge remain mixture grace fork supply struggle'; 
let testAccounts = [
"0x42b140a257f67952f03111e8230e098fb91a5eb6a42d04e09b4853d1bc73f8f1",
"0x85146069646e849bd334c414d3567d29d6508a434ec3db5c3a966b497c9db2e3",
"0x5ce3d4ba162e7fccc4d78c73abe7324361781acf0d261d5f6b639f7655f11e73",
"0x042d1ac80d7da42cf8670aa6dd2f768f9709447313aabcb7a7a0ad2b7ac46774",
"0xf12641bda451b66785069c0299a24d63789337175a3ca180182e406279090e59",
"0xbc53e94419c0be9a426bd1330b7b683e21f32b2bca55a371aaef157cbc0964e8",
"0xb0a0ceb4a05ef9c01bc98f1cb1e05c7bc786160853dd822937c8c136996d65a2",
"0x48a17a293aabe6e6eea5bcd865cb1e4141c67fb127878c9f803ad1e7b7a53d6e",
"0x1dc129df4bf5f3c2ad3f4ff9011ea3b67394caed4eaf7fcc2eac605d4206daf6",
"0xc42c9f2a3fb340e86be82b013feb40f75a7a99963fdf8d11d6e6a7313d259d0e"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
