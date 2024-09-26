import { deepCopy } from '@ethersproject/properties'
import { StaticJsonRpcProvider } from '@ethersproject/providers'
import { isPlain } from '@reduxjs/toolkit'
import { SupportedChainId } from 'constants/chains'

// Definições de cadeia
const AVERAGE_L1_BLOCK_TIME = 15; // Por exemplo, defina o tempo médio de bloco
const CHAIN_IDS_TO_NAMES = {
  [350]: 'VITRA', // Adicione a rede VITRA aqui
  // outras cadeias...
};

const RPC_URLS = {
  [350]: ['https://vitrachain-rpc.com'], // URL RPC da VITRA
  // outras cadeias...
};

class AppJsonRpcProvider extends StaticJsonRpcProvider {
  private _blockCache = new Map<string, Promise<any>>()
  get blockCache() {
    if (!this._blockCache.size) {
      this.once('block', () => this._blockCache.clear())
    }
    return this._blockCache
  }

  constructor(chainId: SupportedChainId) {
    super(RPC_URLS[chainId][0], { chainId, name: CHAIN_IDS_TO_NAMES[chainId] })
    this.pollingInterval = AVERAGE_L1_BLOCK_TIME
  }

  send(method: string, params: Array<any>): Promise<any> {
    if (method !== 'eth_call') return super.send(method, params)
    if (!isPlain(params)) return super.send(method, params)

    const key = `call:${JSON.stringify(params)}`
    const cached = this.blockCache.get(key)
    if (cached) {
      this.emit('debug', {
        action: 'request',
        request: deepCopy({ method, params, id: 'cache' }),
        provider: this,
      })
      return cached
    }

    const result = super.send(method, params)
    this.blockCache.set(key, result)
    return result
  }
}

export const RPC_PROVIDERS: { [key in SupportedChainId]: StaticJsonRpcProvider } = {
  [SupportedChainId.MAINNET]: new AppJsonRpcProvider(SupportedChainId.MAINNET),
  [SupportedChainId.GOERLI]: new AppJsonRpcProvider(SupportedChainId.GOERLI),
  [SupportedChainId.SEPOLIA]: new AppJsonRpcProvider(SupportedChainId.SEPOLIA),
  [SupportedChainId.OPTIMISM]: new AppJsonRpcProvider(SupportedChainId.OPTIMISM),
  [SupportedChainId.OPTIMISM_GOERLI]: new AppJsonRpcProvider(SupportedChainId.OPTIMISM_GOERLI),
  [SupportedChainId.ARBITRUM_ONE]: new AppJsonRpcProvider(SupportedChainId.ARBITRUM_ONE),
  [SupportedChainId.ARBITRUM_GOERLI]: new AppJsonRpcProvider(SupportedChainId.ARBITRUM_GOERLI),
  [SupportedChainId.POLYGON]: new AppJsonRpcProvider(SupportedChainId.POLYGON),
  [SupportedChainId.POLYGON_MUMBAI]: new AppJsonRpcProvider(SupportedChainId.POLYGON_MUMBAI),
  [SupportedChainId.CELO]: new AppJsonRpcProvider(SupportedChainId.CELO),
  [SupportedChainId.CELO_ALFAJORES]: new AppJsonRpcProvider(SupportedChainId.CELO_ALFAJORES),
  [SupportedChainId.BNB]: new AppJsonRpcProvider(SupportedChainId.BNB),
  [350]: new AppJsonRpcProvider(350), // Adiciona o provedor da VITRA
}
