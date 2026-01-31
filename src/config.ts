import dotenv from 'dotenv';

dotenv.config();

export const CONFIG = {
  RPC_URL: process.env.RPC_URL || 'https://polygon-rpc.com',
  CTF: '0x4D9702597715E220f80a01414141414141414141',
  EXCHANGE_ADDRESSES: [
    '0x4bFb41d5B3570DeFd03C39a9A4D8dE6Bd8B8982E', // CTF Exchange
    '0xC5d563a36AE78145C45a50134d48a1215220f80a', // NegRisk Exchange
  ] as `0x${string}`[],
  NEG_RISK_ADAPTER: '0xd91E45416B3adccdAc6500288289437947178041',
  USDC_ADDRESS: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174', // USDC.e
  GAMMA_API: 'https://gamma-api.polymarket.com',
  START_BLOCK: 81190000n,
  UMA_ORACLE_ADDRESS: '0x6A9D222616C90FcA5754cd1333cFD9b7fb6a4F74',
  BATCH_SIZE: 100n,
  REORG_DELAY: 10n,
};

// src/config.ts
export const ALL_EVENTS_ABI = [
  'event OrderFilled(bytes32 indexed orderHash, address indexed maker, address indexed taker, uint256 makerAssetId, uint256 takerAssetId, uint256 makerAmountFilled, uint256 takerAmountFilled, uint256 fee)',
  'event OrdersMatched(bytes32,address,uint256,uint256,uint256,uint256)',
  'event ConditionPreparation(bytes32 indexed conditionId, address indexed oracle, bytes32 indexed questionId, uint256 outcomeSlotCount)',
  'event PositionSplit(address indexed stakeholder, address collateralToken, bytes32 indexed conditionId, uint256[] partition, uint256 amount)',
  'event PositionsMerge(address indexed stakeholder, address collateralToken, bytes32 indexed conditionId, uint256[] partition, uint256 amount)',
  'event PayoutRedemption(address indexed redeemer, address indexed collateralToken, bytes32 indexed conditionId, uint256[] indexSet, uint256 payout)',
  'event PositionsConverted(address indexed redeemer, bytes32 indexed conditionId, uint256 indexSet, uint256 amount)',
] as const;
