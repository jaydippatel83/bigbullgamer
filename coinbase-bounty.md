**Coinbase Wallet:** Integrated Coinbase connects non custodial wallet for users.

## Coinbase Wallet Implementation: 

```javascript
 walletlink: {
    package: CoinbaseWalletSDK, // Required
    options: {
      appName: "Studentdesk", // Required
      infuraId: process.env.REACT_APP_INFURA_KEY, // Required unless you provide a JSON RPC url; see `rpc` below
    },
  },

```

