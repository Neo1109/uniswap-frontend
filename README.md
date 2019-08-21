# Uniswap.ch Frontend

This is an open source interface for Uniswap - a protocol for decentralized exchange of Ethereum tokens. The original frontend is hosted under [uniswap.exchange](https://uniswap.exchange/) while this fork is hosted under [uniswap.ch](http://uniswap.ch/).

- Website: [uniswap.io](https://uniswap.io/)
- Docs: [docs.uniswap.io](https://docs.uniswap.io/)
- Twitter: [@UniswapExchange](https://twitter.com/UniswapExchange)
- Reddit: [/r/Uniswap](https://www.reddit.com/r/UniSwap/)
- Whitepaper: [Link](https://hackmd.io/C-DvwDSfSxuh-Gd4WKE_ig)

## To Start Development

### Install Dependencies

```bash
yarn
```

### Configure Environment

Rename `.env.local.example` to `.env.local` and fill in the appropriate variables.

### Run

```bash
yarn start
```

To run on a testnet, simply update the `.env.local` file appropriately.

## Contributions

**Please open all pull requests against the `development` branch.** CI checks will run against all PRs. To ensure that your changes will pass, run `yarn check:all` before pushing. If this command fails, you can try to automatically fix problems with `yarn fix:all`, or do it manually.
