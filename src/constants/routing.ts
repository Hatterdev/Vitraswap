// a list of tokens by chain
import { Currency, Token } from "@uniswap/sdk-core";
import { SupportedChainId } from "constants/chains";

// Importar tokens da rede VITRA
import {
  VITRA_TOKEN,
  USDC_VITRA,
  DAI_VITRA,
  WETH_VITRA,
  // Adicione outros tokens conforme necessário
} from "./tokens";

type ChainTokenList = {
  readonly [chainId: number]: Token[];
};

type ChainCurrencyList = {
  readonly [chainId: number]: Currency[];
};

const WRAPPED_NATIVE_CURRENCIES_ONLY: ChainTokenList = Object.fromEntries(
  Object.entries(WRAPPED_NATIVE_CURRENCY)
    .map(([key, value]) => [key, [value]])
    .filter(Boolean)
);

// Construa a lista de bases para a rede VITRA
export const BASES_TO_CHECK_TRADES_AGAINST: ChainTokenList = {
  ...WRAPPED_NATIVE_CURRENCIES_ONLY,
  [SupportedChainId.VITRA]: [
    ...WRAPPED_NATIVE_CURRENCIES_ONLY[SupportedChainId.VITRA],
    VITRA_TOKEN,
    USDC_VITRA,
    DAI_VITRA,
    WETH_VITRA,
  ],
  // Adicione outros chains conforme necessário
};

// Listas adicionais e configurações específicas para VITRA
export const ADDITIONAL_BASES: {
  [chainId: number]: { [tokenAddress: string]: Token[] };
} = {
  [SupportedChainId.VITRA]: {
    // Adicione pares específicos de tokens para a rede VITRA
    [VITRA_TOKEN.address]: [USDC_VITRA],
  },
};

// Define as moedas comuns para a rede VITRA
export const COMMON_BASES: ChainCurrencyList = {
  [SupportedChainId.VITRA]: [
    nativeOnChain(SupportedChainId.VITRA),
    VITRA_TOKEN,
    USDC_VITRA,
    DAI_VITRA,
    WETH_VITRA,
  ],
};

// Usar as bases de liquidez para a rede VITRA
export const BASES_TO_TRACK_LIQUIDITY_FOR: ChainTokenList = {
  ...WRAPPED_NATIVE_CURRENCIES_ONLY,
  [SupportedChainId.VITRA]: [
    ...WRAPPED_NATIVE_CURRENCIES_ONLY[SupportedChainId.VITRA],
    VITRA_TOKEN,
    USDC_VITRA,
    DAI_VITRA,
  ],
};

export const PINNED_PAIRS: { readonly [chainId: number]: [Token, Token][] } = {
  [SupportedChainId.VITRA]: [
    [
      new Token(
        SupportedChainId.VITRA,
        VITRA_TOKEN.address,
        18,
        "VITRA",
        "VITRA Token"
      ),
      new Token(
        SupportedChainId.VITRA,
        USDC_VITRA.address,
        6,
        "USDC",
        "USD Coin"
      ),
    ],
    [DAI_VITRA, USDC_VITRA],
  ],
};

// Certifique-se de substituir SupportedChainId.VITRA pelo valor real correspondente ao ID da rede VITRA.
