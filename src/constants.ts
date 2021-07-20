export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'

export const baseURL = 'https://bridgeapi.anyswap.exchange'
// export const baseURL = 'http://localhost:8107'

export const chainToChainUrl = baseURL + '/v2/allserverinfo'
export const toChainUrl = baseURL + '/v2/bridgeChain'
export const dislineUrl = baseURL + '/v2/disline'
export const swapinStatusUrl = baseURL + '/v2/getHashStatus'
export const swapoutStatusUrl = baseURL + '/v2/getWithdrawHashStatus'

export const timeout = 1000 * 60 * 30

export const LOCAL_DATA_LABEL = 'ANYSWAP-BRIDGE-SDK-V1-'

export const specSymbol = ['BTC', 'LTC', 'BLOCK']

export enum ChainId {
  MAINNET = 1,
  BNBMAIN = 56,
  OKTMAIN = 66,
  XDAIMAIN = 100,
  HTMAIN = 128,
  MATICMAIN = 137,
  FTMMAIN = 250,
  FSNMAIN = 32659,
  AVAXMAIN = 43114,
  BTC = 'BTC',
  LTC = 'LTC',
  BLOCK = 'BLOCK',
  TRX = 'TRX',
  RINKEBY = 4,
  BNBTEST = 97,
  HTTEST = 256,
  FSNTEST = 46688,
}

export enum Status {
  Success = 'Success',
  Pending = 'Pending',
  Error = 'Error',
  Failure = 'Failure',
  Confirming = 'Confirming',
  Minting = 'Minting',
  Timeout = 'Timeout',
}

export const networks = {
  [ChainId.MAINNET]: 'https://ethmainnet.anyswap.exchange',
  [ChainId.BNBMAIN]: 'https://bsc-dataseed1.ninicoin.io/',
  [ChainId.OKTMAIN]: 'https://exchainrpc.okex.org',
  [ChainId.XDAIMAIN]: 'https://rpc.xdaichain.com',
  [ChainId.HTMAIN]: 'https://http-mainnet.hecochain.com',
  [ChainId.MATICMAIN]: 'https://rpc-mainnet.maticvigil.com',
  [ChainId.FTMMAIN]: 'https://rpcapi.fantom.network',
  [ChainId.FSNMAIN]: 'https://mainnet.anyswap.exchange',
  [ChainId.AVAXMAIN]: 'https://api.avax.network/ext/bc/C/rpc',
  [ChainId.BTC]: '',
  [ChainId.LTC]: '',
  [ChainId.BLOCK]: '',
  [ChainId.TRX]: '',
  [ChainId.RINKEBY]: 'https://rinkeby.infura.io/v3/0e40cfd5e7a64b2d9aea8427e4bd52a0',
  [ChainId.BNBTEST]: 'https://data-seed-prebsc-1-s1.binance.org:8545',
  [ChainId.HTTEST]: 'https://http-testnet.hecochain.com',
  [ChainId.FSNTEST]: 'https://testnet.fsn.dev/api',
}
