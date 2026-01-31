import { encodePacked, keccak256, pad, zeroHash } from 'viem';
import { CONFIG } from './config';

export function calTokenId(conditionId: `0x${string}`): {
  yesTokenId: string;
  noTokenId: string;
} {
  // 固定 usdc
  const collateralToken = CONFIG.USDC_ADDRESS as `0x${string}`;
  // byte32(0)

  const parentCollectionId = zeroHash;
  const collectionId_yes = keccak256(
    encodePacked(
      ['bytes32', 'bytes32', 'uint256'],
      [parentCollectionId, conditionId as `0x${string}`, 1n]
    )
  ) as `0x${string}`;

  const collectionId_no = keccak256(
    encodePacked(
      ['bytes32', 'bytes32', 'uint256'],
      [parentCollectionId, conditionId as `0x${string}`, 2n]
    )
  ) as `0x${string}`;

  const yesTokenId = keccak256(
    encodePacked(['address', 'bytes32'], [collateralToken, collectionId_yes])
  ) as `0x${string}`;

  const noTokenId = keccak256(
    encodePacked(['address', 'bytes32'], [collateralToken, collectionId_no])
  ) as `0x${string}`;

  return {
    yesTokenId: BigInt(yesTokenId).toString(),
    noTokenId: BigInt(noTokenId).toString(),
  };
}

export function serialize(data: any): any {
  return JSON.parse(
    JSON.stringify(data, (key, value) => {
      // 处理 BigInt (例如 blockNumber)
      if (typeof value === 'bigint') {
        return value.toString();
      }
      // 处理 Decimal (例如 price, size)
      // Prisma 的 Decimal 往往是一个对象，我们需要它的字符串或数值表现形式
      if (typeof value === 'object' && value !== null && 'toFixed' in value) {
        return value.toString(); // 或者 Number(value) 如果你确定精度允许
      }
      return value;
    })
  );
}
