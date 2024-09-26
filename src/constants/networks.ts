import { SupportedChainId } from 'constants/chains';

// Definindo o ID da rede VITRA
const SUPPORTED_CHAIN_ID_VITRA = 350;

const INFURA_KEY = process.env.REACT_APP_INFURA_KEY;
if (typeof INFURA_KEY === 'undefined') {
  throw new Error(`REACT_APP_INFURA_KEY must be a defined environment variable`);
}

const QUICKNODE_RPC_URL = process.env.REACT_APP_BNB_RPC_URL;
if (typeof QUICKNODE_RPC_URL === 'undefined') {
  throw new Error(`REACT_APP_BNB_RPC_URL must be a defined environment variable`);
}

/**
 * Fallback JSON-RPC endpoints.
 */
export const FALLBACK_URLS = {
  [SupportedChainId.MAINNET]: [
    // "Safe" URLs
    'https://api.mycryptoapi.com/eth',
    'https://cloudflare-eth.com',
    // "Fallback" URLs
    'https://rpc.ankr.com/eth',
    'https://eth-mainnet.public.blastapi.io',
  ],
  [SupportedChainId.GOERLI]: [
    'https://rpc.goerli.mudit.blog/',
    'https://rpc.ankr.com/eth_goerli',
  ],
  [SupportedChainId.SEPOLIA]: [
    'https://rpc.sepolia.dev/',
    'https://rpc.sepolia.org/',
    'https://rpc2.sepolia.org/',
    'https://rpc.sepolia.online/',
    'https://www.sepoliarpc.space/',
    'https://rpc-sepolia.rockx.com/',
    'https://rpc.bordel.wtf/sepolia',
  ],
  [SupportedChainId.POLYGON]: [
    'https://polygon-rpc.com/',
    'https://rpc-mainnet.matic.network',
    'https://matic-mainnet.chainstacklabs.com',
    'https://rpc-mainnet.maticvigil.com',
    'https://rpc-mainnet.matic.quiknode.pro',
    'https://matic-mainnet-full-rpc.bwarelabs.com',
  ],
  [SupportedChainId.POLYGON_MUMBAI]: [
    'https://matic-mumbai.chainstacklabs.com',
    'https://rpc-mumbai.maticvigil.com',
    'https://matic-testnet-archive-rpc.bwarelabs.com',
  ],
  [SupportedChainId.ARBITRUM_ONE]: [
    'https://arb1.arbitrum.io/rpc',
    'https://arbitrum.public-rpc.com',
  ],
  [SupportedChainId.ARBITRUM_GOERLI]: [
    'https://goerli-rollup.arbitrum.io/rpc',
  ],
  [SupportedChainId.OPTIMISM]: [
    'https://mainnet.optimism.io/',
    'https://rpc.ankr.com/optimism',
  ],
  [SupportedChainId.OPTIMISM_GOERLI]: [
    'https://goerli.optimism.io',
  ],
  [SupportedChainId.CELO]: [
    `https://forno.celo.org`,
  ],
  [SupportedChainId.CELO_ALFAJORES]: [
    `https://alfajores-forno.celo-testnet.org`,
  ],
  [SUPPORTED_CHAIN_ID_VITRA]: [
    'https://vitrachain-rpc.com', // URL principal da VITRA
    // Adicione outras URLs de fallback, se necessário
  ],
};

/**
 * Known JSON-RPC endpoints.
 */
export const RPC_URLS = {
  [SupportedChainId.MAINNET]: [
    `https://mainnet.infura.io/v3/${INFURA_KEY}`,
    ...FALLBACK_URLS[SupportedChainId.MAINNET],
  ],
  [SupportedChainId.GOERLI]: [`https://goerli.infura.io/v3/${INFURA_KEY}`, ...FALLBACK_URLS[SupportedChainId.GOERLI]],
  [SupportedChainId.SEPOLIA]: [
    `https://sepolia.infura.io/v3/${INFURA_KEY}`,
    ...FALLBACK_URLS[SupportedChainId.SEPOLIA],
  ],
  [SupportedChainId.OPTIMISM]: [
    `https://optimism-mainnet.infura.io/v3/${INFURA_KEY}`,
    ...FALLBACK_URLS[SupportedChainId.OPTIMISM],
  ],
  [SupportedChainId.OPTIMISM_GOERLI]: [
    `https://optimism-goerli.infura.io/v3/${INFURA_KEY}`,
    ...FALLBACK_URLS[SupportedChainId.OPTIMISM_GOERLI],
  ],
  [SupportedChainId.ARBITRUM_ONE]: [
    `https://arbitrum-mainnet.infura.io/v3/${INFURA_KEY}`,
    ...FALLBACK_URLS[SupportedChainId.ARBITRUM_ONE],
  ],
  [SupportedChainId.ARBITRUM_GOERLI]: [
    `https://arbitrum-goerli.infura.io/v3/${INFURA_KEY}`,
    ...FALLBACK_URLS[SupportedChainId.ARBITRUM_GOERLI],
  ],
  [SupportedChainId.POLYGON]: [
    `https://polygon-mainnet.infura.io/v3/${INFURA_KEY}`,
    ...FALLBACK_URLS[SupportedChainId.POLYGON],
  ],
  [SupportedChainId.POLYGON_MUMBAI]: [
    `https://polygon-mumbai.infura.io/v3/${INFURA_KEY}`,
    ...FALLBACK_URLS[SupportedChainId.POLYGON_MUMBAI],
  ],
  [SupportedChainId.CELO]: FALLBACK_URLS[SupportedChainId.CELO],
  [SupportedChainId.CELO_ALFAJORES]: FALLBACK_URLS[SupportedChainId.CELO_ALFAJORES],
  [SUPPORTED_CHAIN_ID_VITRA]: [
    'https://vitrachain-rpc.com', // URL RPC da VITRA
    ...FALLBACK_URLS[SUPPORTED_CHAIN_ID_VITRA],
  ],
};
