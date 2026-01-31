
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Market
 * 
 */
export type Market = $Result.DefaultSelection<Prisma.$MarketPayload>
/**
 * Model Trade
 * 
 */
export type Trade = $Result.DefaultSelection<Prisma.$TradePayload>
/**
 * Model SyncState
 * 
 */
export type SyncState = $Result.DefaultSelection<Prisma.$SyncStatePayload>
/**
 * Model PositionActivity
 * 
 */
export type PositionActivity = $Result.DefaultSelection<Prisma.$PositionActivityPayload>
/**
 * Model Redemption
 * 
 */
export type Redemption = $Result.DefaultSelection<Prisma.$RedemptionPayload>
/**
 * Model PositionConversion
 * 
 */
export type PositionConversion = $Result.DefaultSelection<Prisma.$PositionConversionPayload>
/**
 * Model MarketIntelligence
 * 
 */
export type MarketIntelligence = $Result.DefaultSelection<Prisma.$MarketIntelligencePayload>
/**
 * Model TradeInsight
 * 
 */
export type TradeInsight = $Result.DefaultSelection<Prisma.$TradeInsightPayload>
/**
 * Model TraderProfile
 * 
 */
export type TraderProfile = $Result.DefaultSelection<Prisma.$TraderProfilePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Markets
 * const markets = await prisma.market.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Markets
   * const markets = await prisma.market.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.market`: Exposes CRUD operations for the **Market** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Markets
    * const markets = await prisma.market.findMany()
    * ```
    */
  get market(): Prisma.MarketDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trade`: Exposes CRUD operations for the **Trade** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Trades
    * const trades = await prisma.trade.findMany()
    * ```
    */
  get trade(): Prisma.TradeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.syncState`: Exposes CRUD operations for the **SyncState** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SyncStates
    * const syncStates = await prisma.syncState.findMany()
    * ```
    */
  get syncState(): Prisma.SyncStateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.positionActivity`: Exposes CRUD operations for the **PositionActivity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PositionActivities
    * const positionActivities = await prisma.positionActivity.findMany()
    * ```
    */
  get positionActivity(): Prisma.PositionActivityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.redemption`: Exposes CRUD operations for the **Redemption** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Redemptions
    * const redemptions = await prisma.redemption.findMany()
    * ```
    */
  get redemption(): Prisma.RedemptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.positionConversion`: Exposes CRUD operations for the **PositionConversion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PositionConversions
    * const positionConversions = await prisma.positionConversion.findMany()
    * ```
    */
  get positionConversion(): Prisma.PositionConversionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.marketIntelligence`: Exposes CRUD operations for the **MarketIntelligence** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MarketIntelligences
    * const marketIntelligences = await prisma.marketIntelligence.findMany()
    * ```
    */
  get marketIntelligence(): Prisma.MarketIntelligenceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tradeInsight`: Exposes CRUD operations for the **TradeInsight** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TradeInsights
    * const tradeInsights = await prisma.tradeInsight.findMany()
    * ```
    */
  get tradeInsight(): Prisma.TradeInsightDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.traderProfile`: Exposes CRUD operations for the **TraderProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TraderProfiles
    * const traderProfiles = await prisma.traderProfile.findMany()
    * ```
    */
  get traderProfile(): Prisma.TraderProfileDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.3.0
   * Query Engine version: 9d6ad21cbbceab97458517b147a6a09ff43aa735
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Market: 'Market',
    Trade: 'Trade',
    SyncState: 'SyncState',
    PositionActivity: 'PositionActivity',
    Redemption: 'Redemption',
    PositionConversion: 'PositionConversion',
    MarketIntelligence: 'MarketIntelligence',
    TradeInsight: 'TradeInsight',
    TraderProfile: 'TraderProfile'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "market" | "trade" | "syncState" | "positionActivity" | "redemption" | "positionConversion" | "marketIntelligence" | "tradeInsight" | "traderProfile"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Market: {
        payload: Prisma.$MarketPayload<ExtArgs>
        fields: Prisma.MarketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MarketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MarketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload>
          }
          findFirst: {
            args: Prisma.MarketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MarketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload>
          }
          findMany: {
            args: Prisma.MarketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload>[]
          }
          create: {
            args: Prisma.MarketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload>
          }
          createMany: {
            args: Prisma.MarketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MarketCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload>[]
          }
          delete: {
            args: Prisma.MarketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload>
          }
          update: {
            args: Prisma.MarketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload>
          }
          deleteMany: {
            args: Prisma.MarketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MarketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MarketUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload>[]
          }
          upsert: {
            args: Prisma.MarketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload>
          }
          aggregate: {
            args: Prisma.MarketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMarket>
          }
          groupBy: {
            args: Prisma.MarketGroupByArgs<ExtArgs>
            result: $Utils.Optional<MarketGroupByOutputType>[]
          }
          count: {
            args: Prisma.MarketCountArgs<ExtArgs>
            result: $Utils.Optional<MarketCountAggregateOutputType> | number
          }
        }
      }
      Trade: {
        payload: Prisma.$TradePayload<ExtArgs>
        fields: Prisma.TradeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TradeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TradeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>
          }
          findFirst: {
            args: Prisma.TradeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TradeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>
          }
          findMany: {
            args: Prisma.TradeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>[]
          }
          create: {
            args: Prisma.TradeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>
          }
          createMany: {
            args: Prisma.TradeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TradeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>[]
          }
          delete: {
            args: Prisma.TradeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>
          }
          update: {
            args: Prisma.TradeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>
          }
          deleteMany: {
            args: Prisma.TradeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TradeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TradeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>[]
          }
          upsert: {
            args: Prisma.TradeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>
          }
          aggregate: {
            args: Prisma.TradeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrade>
          }
          groupBy: {
            args: Prisma.TradeGroupByArgs<ExtArgs>
            result: $Utils.Optional<TradeGroupByOutputType>[]
          }
          count: {
            args: Prisma.TradeCountArgs<ExtArgs>
            result: $Utils.Optional<TradeCountAggregateOutputType> | number
          }
        }
      }
      SyncState: {
        payload: Prisma.$SyncStatePayload<ExtArgs>
        fields: Prisma.SyncStateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SyncStateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncStatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SyncStateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncStatePayload>
          }
          findFirst: {
            args: Prisma.SyncStateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncStatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SyncStateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncStatePayload>
          }
          findMany: {
            args: Prisma.SyncStateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncStatePayload>[]
          }
          create: {
            args: Prisma.SyncStateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncStatePayload>
          }
          createMany: {
            args: Prisma.SyncStateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SyncStateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncStatePayload>[]
          }
          delete: {
            args: Prisma.SyncStateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncStatePayload>
          }
          update: {
            args: Prisma.SyncStateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncStatePayload>
          }
          deleteMany: {
            args: Prisma.SyncStateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SyncStateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SyncStateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncStatePayload>[]
          }
          upsert: {
            args: Prisma.SyncStateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncStatePayload>
          }
          aggregate: {
            args: Prisma.SyncStateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSyncState>
          }
          groupBy: {
            args: Prisma.SyncStateGroupByArgs<ExtArgs>
            result: $Utils.Optional<SyncStateGroupByOutputType>[]
          }
          count: {
            args: Prisma.SyncStateCountArgs<ExtArgs>
            result: $Utils.Optional<SyncStateCountAggregateOutputType> | number
          }
        }
      }
      PositionActivity: {
        payload: Prisma.$PositionActivityPayload<ExtArgs>
        fields: Prisma.PositionActivityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PositionActivityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionActivityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PositionActivityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionActivityPayload>
          }
          findFirst: {
            args: Prisma.PositionActivityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionActivityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PositionActivityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionActivityPayload>
          }
          findMany: {
            args: Prisma.PositionActivityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionActivityPayload>[]
          }
          create: {
            args: Prisma.PositionActivityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionActivityPayload>
          }
          createMany: {
            args: Prisma.PositionActivityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PositionActivityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionActivityPayload>[]
          }
          delete: {
            args: Prisma.PositionActivityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionActivityPayload>
          }
          update: {
            args: Prisma.PositionActivityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionActivityPayload>
          }
          deleteMany: {
            args: Prisma.PositionActivityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PositionActivityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PositionActivityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionActivityPayload>[]
          }
          upsert: {
            args: Prisma.PositionActivityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionActivityPayload>
          }
          aggregate: {
            args: Prisma.PositionActivityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePositionActivity>
          }
          groupBy: {
            args: Prisma.PositionActivityGroupByArgs<ExtArgs>
            result: $Utils.Optional<PositionActivityGroupByOutputType>[]
          }
          count: {
            args: Prisma.PositionActivityCountArgs<ExtArgs>
            result: $Utils.Optional<PositionActivityCountAggregateOutputType> | number
          }
        }
      }
      Redemption: {
        payload: Prisma.$RedemptionPayload<ExtArgs>
        fields: Prisma.RedemptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RedemptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RedemptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RedemptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RedemptionPayload>
          }
          findFirst: {
            args: Prisma.RedemptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RedemptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RedemptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RedemptionPayload>
          }
          findMany: {
            args: Prisma.RedemptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RedemptionPayload>[]
          }
          create: {
            args: Prisma.RedemptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RedemptionPayload>
          }
          createMany: {
            args: Prisma.RedemptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RedemptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RedemptionPayload>[]
          }
          delete: {
            args: Prisma.RedemptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RedemptionPayload>
          }
          update: {
            args: Prisma.RedemptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RedemptionPayload>
          }
          deleteMany: {
            args: Prisma.RedemptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RedemptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RedemptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RedemptionPayload>[]
          }
          upsert: {
            args: Prisma.RedemptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RedemptionPayload>
          }
          aggregate: {
            args: Prisma.RedemptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRedemption>
          }
          groupBy: {
            args: Prisma.RedemptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<RedemptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.RedemptionCountArgs<ExtArgs>
            result: $Utils.Optional<RedemptionCountAggregateOutputType> | number
          }
        }
      }
      PositionConversion: {
        payload: Prisma.$PositionConversionPayload<ExtArgs>
        fields: Prisma.PositionConversionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PositionConversionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionConversionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PositionConversionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionConversionPayload>
          }
          findFirst: {
            args: Prisma.PositionConversionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionConversionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PositionConversionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionConversionPayload>
          }
          findMany: {
            args: Prisma.PositionConversionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionConversionPayload>[]
          }
          create: {
            args: Prisma.PositionConversionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionConversionPayload>
          }
          createMany: {
            args: Prisma.PositionConversionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PositionConversionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionConversionPayload>[]
          }
          delete: {
            args: Prisma.PositionConversionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionConversionPayload>
          }
          update: {
            args: Prisma.PositionConversionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionConversionPayload>
          }
          deleteMany: {
            args: Prisma.PositionConversionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PositionConversionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PositionConversionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionConversionPayload>[]
          }
          upsert: {
            args: Prisma.PositionConversionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionConversionPayload>
          }
          aggregate: {
            args: Prisma.PositionConversionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePositionConversion>
          }
          groupBy: {
            args: Prisma.PositionConversionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PositionConversionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PositionConversionCountArgs<ExtArgs>
            result: $Utils.Optional<PositionConversionCountAggregateOutputType> | number
          }
        }
      }
      MarketIntelligence: {
        payload: Prisma.$MarketIntelligencePayload<ExtArgs>
        fields: Prisma.MarketIntelligenceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MarketIntelligenceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketIntelligencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MarketIntelligenceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketIntelligencePayload>
          }
          findFirst: {
            args: Prisma.MarketIntelligenceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketIntelligencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MarketIntelligenceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketIntelligencePayload>
          }
          findMany: {
            args: Prisma.MarketIntelligenceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketIntelligencePayload>[]
          }
          create: {
            args: Prisma.MarketIntelligenceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketIntelligencePayload>
          }
          createMany: {
            args: Prisma.MarketIntelligenceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MarketIntelligenceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketIntelligencePayload>[]
          }
          delete: {
            args: Prisma.MarketIntelligenceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketIntelligencePayload>
          }
          update: {
            args: Prisma.MarketIntelligenceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketIntelligencePayload>
          }
          deleteMany: {
            args: Prisma.MarketIntelligenceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MarketIntelligenceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MarketIntelligenceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketIntelligencePayload>[]
          }
          upsert: {
            args: Prisma.MarketIntelligenceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketIntelligencePayload>
          }
          aggregate: {
            args: Prisma.MarketIntelligenceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMarketIntelligence>
          }
          groupBy: {
            args: Prisma.MarketIntelligenceGroupByArgs<ExtArgs>
            result: $Utils.Optional<MarketIntelligenceGroupByOutputType>[]
          }
          count: {
            args: Prisma.MarketIntelligenceCountArgs<ExtArgs>
            result: $Utils.Optional<MarketIntelligenceCountAggregateOutputType> | number
          }
        }
      }
      TradeInsight: {
        payload: Prisma.$TradeInsightPayload<ExtArgs>
        fields: Prisma.TradeInsightFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TradeInsightFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradeInsightPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TradeInsightFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradeInsightPayload>
          }
          findFirst: {
            args: Prisma.TradeInsightFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradeInsightPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TradeInsightFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradeInsightPayload>
          }
          findMany: {
            args: Prisma.TradeInsightFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradeInsightPayload>[]
          }
          create: {
            args: Prisma.TradeInsightCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradeInsightPayload>
          }
          createMany: {
            args: Prisma.TradeInsightCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TradeInsightCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradeInsightPayload>[]
          }
          delete: {
            args: Prisma.TradeInsightDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradeInsightPayload>
          }
          update: {
            args: Prisma.TradeInsightUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradeInsightPayload>
          }
          deleteMany: {
            args: Prisma.TradeInsightDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TradeInsightUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TradeInsightUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradeInsightPayload>[]
          }
          upsert: {
            args: Prisma.TradeInsightUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradeInsightPayload>
          }
          aggregate: {
            args: Prisma.TradeInsightAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTradeInsight>
          }
          groupBy: {
            args: Prisma.TradeInsightGroupByArgs<ExtArgs>
            result: $Utils.Optional<TradeInsightGroupByOutputType>[]
          }
          count: {
            args: Prisma.TradeInsightCountArgs<ExtArgs>
            result: $Utils.Optional<TradeInsightCountAggregateOutputType> | number
          }
        }
      }
      TraderProfile: {
        payload: Prisma.$TraderProfilePayload<ExtArgs>
        fields: Prisma.TraderProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TraderProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TraderProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TraderProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TraderProfilePayload>
          }
          findFirst: {
            args: Prisma.TraderProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TraderProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TraderProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TraderProfilePayload>
          }
          findMany: {
            args: Prisma.TraderProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TraderProfilePayload>[]
          }
          create: {
            args: Prisma.TraderProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TraderProfilePayload>
          }
          createMany: {
            args: Prisma.TraderProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TraderProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TraderProfilePayload>[]
          }
          delete: {
            args: Prisma.TraderProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TraderProfilePayload>
          }
          update: {
            args: Prisma.TraderProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TraderProfilePayload>
          }
          deleteMany: {
            args: Prisma.TraderProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TraderProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TraderProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TraderProfilePayload>[]
          }
          upsert: {
            args: Prisma.TraderProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TraderProfilePayload>
          }
          aggregate: {
            args: Prisma.TraderProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTraderProfile>
          }
          groupBy: {
            args: Prisma.TraderProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<TraderProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.TraderProfileCountArgs<ExtArgs>
            result: $Utils.Optional<TraderProfileCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    market?: MarketOmit
    trade?: TradeOmit
    syncState?: SyncStateOmit
    positionActivity?: PositionActivityOmit
    redemption?: RedemptionOmit
    positionConversion?: PositionConversionOmit
    marketIntelligence?: MarketIntelligenceOmit
    tradeInsight?: TradeInsightOmit
    traderProfile?: TraderProfileOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type MarketCountOutputType
   */

  export type MarketCountOutputType = {
    trades: number
    positionActivities: number
    redemptions: number
  }

  export type MarketCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trades?: boolean | MarketCountOutputTypeCountTradesArgs
    positionActivities?: boolean | MarketCountOutputTypeCountPositionActivitiesArgs
    redemptions?: boolean | MarketCountOutputTypeCountRedemptionsArgs
  }

  // Custom InputTypes
  /**
   * MarketCountOutputType without action
   */
  export type MarketCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketCountOutputType
     */
    select?: MarketCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MarketCountOutputType without action
   */
  export type MarketCountOutputTypeCountTradesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TradeWhereInput
  }

  /**
   * MarketCountOutputType without action
   */
  export type MarketCountOutputTypeCountPositionActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PositionActivityWhereInput
  }

  /**
   * MarketCountOutputType without action
   */
  export type MarketCountOutputTypeCountRedemptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RedemptionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Market
   */

  export type AggregateMarket = {
    _count: MarketCountAggregateOutputType | null
    _avg: MarketAvgAggregateOutputType | null
    _sum: MarketSumAggregateOutputType | null
    _min: MarketMinAggregateOutputType | null
    _max: MarketMaxAggregateOutputType | null
  }

  export type MarketAvgAggregateOutputType = {
    id: number | null
    outcomeCount: number | null
  }

  export type MarketSumAggregateOutputType = {
    id: number | null
    outcomeCount: number | null
  }

  export type MarketMinAggregateOutputType = {
    id: number | null
    slug: string | null
    conditionId: string | null
    questionId: string | null
    oracle: string | null
    outcomeCount: number | null
    enableNegRisk: boolean | null
    yesTokenId: string | null
    noTokenId: string | null
    collateralToken: string | null
    title: string | null
    status: string | null
    createdAt: Date | null
    resolvedAt: Date | null
  }

  export type MarketMaxAggregateOutputType = {
    id: number | null
    slug: string | null
    conditionId: string | null
    questionId: string | null
    oracle: string | null
    outcomeCount: number | null
    enableNegRisk: boolean | null
    yesTokenId: string | null
    noTokenId: string | null
    collateralToken: string | null
    title: string | null
    status: string | null
    createdAt: Date | null
    resolvedAt: Date | null
  }

  export type MarketCountAggregateOutputType = {
    id: number
    slug: number
    conditionId: number
    questionId: number
    oracle: number
    outcomeCount: number
    enableNegRisk: number
    yesTokenId: number
    noTokenId: number
    collateralToken: number
    title: number
    status: number
    createdAt: number
    resolvedAt: number
    _all: number
  }


  export type MarketAvgAggregateInputType = {
    id?: true
    outcomeCount?: true
  }

  export type MarketSumAggregateInputType = {
    id?: true
    outcomeCount?: true
  }

  export type MarketMinAggregateInputType = {
    id?: true
    slug?: true
    conditionId?: true
    questionId?: true
    oracle?: true
    outcomeCount?: true
    enableNegRisk?: true
    yesTokenId?: true
    noTokenId?: true
    collateralToken?: true
    title?: true
    status?: true
    createdAt?: true
    resolvedAt?: true
  }

  export type MarketMaxAggregateInputType = {
    id?: true
    slug?: true
    conditionId?: true
    questionId?: true
    oracle?: true
    outcomeCount?: true
    enableNegRisk?: true
    yesTokenId?: true
    noTokenId?: true
    collateralToken?: true
    title?: true
    status?: true
    createdAt?: true
    resolvedAt?: true
  }

  export type MarketCountAggregateInputType = {
    id?: true
    slug?: true
    conditionId?: true
    questionId?: true
    oracle?: true
    outcomeCount?: true
    enableNegRisk?: true
    yesTokenId?: true
    noTokenId?: true
    collateralToken?: true
    title?: true
    status?: true
    createdAt?: true
    resolvedAt?: true
    _all?: true
  }

  export type MarketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Market to aggregate.
     */
    where?: MarketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Markets to fetch.
     */
    orderBy?: MarketOrderByWithRelationInput | MarketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MarketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Markets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Markets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Markets
    **/
    _count?: true | MarketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MarketAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MarketSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MarketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MarketMaxAggregateInputType
  }

  export type GetMarketAggregateType<T extends MarketAggregateArgs> = {
        [P in keyof T & keyof AggregateMarket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMarket[P]>
      : GetScalarType<T[P], AggregateMarket[P]>
  }




  export type MarketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarketWhereInput
    orderBy?: MarketOrderByWithAggregationInput | MarketOrderByWithAggregationInput[]
    by: MarketScalarFieldEnum[] | MarketScalarFieldEnum
    having?: MarketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MarketCountAggregateInputType | true
    _avg?: MarketAvgAggregateInputType
    _sum?: MarketSumAggregateInputType
    _min?: MarketMinAggregateInputType
    _max?: MarketMaxAggregateInputType
  }

  export type MarketGroupByOutputType = {
    id: number
    slug: string | null
    conditionId: string
    questionId: string
    oracle: string
    outcomeCount: number
    enableNegRisk: boolean
    yesTokenId: string
    noTokenId: string
    collateralToken: string
    title: string | null
    status: string
    createdAt: Date
    resolvedAt: Date | null
    _count: MarketCountAggregateOutputType | null
    _avg: MarketAvgAggregateOutputType | null
    _sum: MarketSumAggregateOutputType | null
    _min: MarketMinAggregateOutputType | null
    _max: MarketMaxAggregateOutputType | null
  }

  type GetMarketGroupByPayload<T extends MarketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MarketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MarketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MarketGroupByOutputType[P]>
            : GetScalarType<T[P], MarketGroupByOutputType[P]>
        }
      >
    >


  export type MarketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    conditionId?: boolean
    questionId?: boolean
    oracle?: boolean
    outcomeCount?: boolean
    enableNegRisk?: boolean
    yesTokenId?: boolean
    noTokenId?: boolean
    collateralToken?: boolean
    title?: boolean
    status?: boolean
    createdAt?: boolean
    resolvedAt?: boolean
    trades?: boolean | Market$tradesArgs<ExtArgs>
    positionActivities?: boolean | Market$positionActivitiesArgs<ExtArgs>
    redemptions?: boolean | Market$redemptionsArgs<ExtArgs>
    intelligence?: boolean | Market$intelligenceArgs<ExtArgs>
    _count?: boolean | MarketCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["market"]>

  export type MarketSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    conditionId?: boolean
    questionId?: boolean
    oracle?: boolean
    outcomeCount?: boolean
    enableNegRisk?: boolean
    yesTokenId?: boolean
    noTokenId?: boolean
    collateralToken?: boolean
    title?: boolean
    status?: boolean
    createdAt?: boolean
    resolvedAt?: boolean
  }, ExtArgs["result"]["market"]>

  export type MarketSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    conditionId?: boolean
    questionId?: boolean
    oracle?: boolean
    outcomeCount?: boolean
    enableNegRisk?: boolean
    yesTokenId?: boolean
    noTokenId?: boolean
    collateralToken?: boolean
    title?: boolean
    status?: boolean
    createdAt?: boolean
    resolvedAt?: boolean
  }, ExtArgs["result"]["market"]>

  export type MarketSelectScalar = {
    id?: boolean
    slug?: boolean
    conditionId?: boolean
    questionId?: boolean
    oracle?: boolean
    outcomeCount?: boolean
    enableNegRisk?: boolean
    yesTokenId?: boolean
    noTokenId?: boolean
    collateralToken?: boolean
    title?: boolean
    status?: boolean
    createdAt?: boolean
    resolvedAt?: boolean
  }

  export type MarketOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "conditionId" | "questionId" | "oracle" | "outcomeCount" | "enableNegRisk" | "yesTokenId" | "noTokenId" | "collateralToken" | "title" | "status" | "createdAt" | "resolvedAt", ExtArgs["result"]["market"]>
  export type MarketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trades?: boolean | Market$tradesArgs<ExtArgs>
    positionActivities?: boolean | Market$positionActivitiesArgs<ExtArgs>
    redemptions?: boolean | Market$redemptionsArgs<ExtArgs>
    intelligence?: boolean | Market$intelligenceArgs<ExtArgs>
    _count?: boolean | MarketCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MarketIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MarketIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MarketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Market"
    objects: {
      trades: Prisma.$TradePayload<ExtArgs>[]
      positionActivities: Prisma.$PositionActivityPayload<ExtArgs>[]
      redemptions: Prisma.$RedemptionPayload<ExtArgs>[]
      intelligence: Prisma.$MarketIntelligencePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      slug: string | null
      conditionId: string
      questionId: string
      oracle: string
      outcomeCount: number
      enableNegRisk: boolean
      yesTokenId: string
      noTokenId: string
      collateralToken: string
      title: string | null
      status: string
      createdAt: Date
      resolvedAt: Date | null
    }, ExtArgs["result"]["market"]>
    composites: {}
  }

  type MarketGetPayload<S extends boolean | null | undefined | MarketDefaultArgs> = $Result.GetResult<Prisma.$MarketPayload, S>

  type MarketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MarketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MarketCountAggregateInputType | true
    }

  export interface MarketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Market'], meta: { name: 'Market' } }
    /**
     * Find zero or one Market that matches the filter.
     * @param {MarketFindUniqueArgs} args - Arguments to find a Market
     * @example
     * // Get one Market
     * const market = await prisma.market.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MarketFindUniqueArgs>(args: SelectSubset<T, MarketFindUniqueArgs<ExtArgs>>): Prisma__MarketClient<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Market that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MarketFindUniqueOrThrowArgs} args - Arguments to find a Market
     * @example
     * // Get one Market
     * const market = await prisma.market.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MarketFindUniqueOrThrowArgs>(args: SelectSubset<T, MarketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MarketClient<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Market that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketFindFirstArgs} args - Arguments to find a Market
     * @example
     * // Get one Market
     * const market = await prisma.market.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MarketFindFirstArgs>(args?: SelectSubset<T, MarketFindFirstArgs<ExtArgs>>): Prisma__MarketClient<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Market that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketFindFirstOrThrowArgs} args - Arguments to find a Market
     * @example
     * // Get one Market
     * const market = await prisma.market.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MarketFindFirstOrThrowArgs>(args?: SelectSubset<T, MarketFindFirstOrThrowArgs<ExtArgs>>): Prisma__MarketClient<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Markets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Markets
     * const markets = await prisma.market.findMany()
     * 
     * // Get first 10 Markets
     * const markets = await prisma.market.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const marketWithIdOnly = await prisma.market.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MarketFindManyArgs>(args?: SelectSubset<T, MarketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Market.
     * @param {MarketCreateArgs} args - Arguments to create a Market.
     * @example
     * // Create one Market
     * const Market = await prisma.market.create({
     *   data: {
     *     // ... data to create a Market
     *   }
     * })
     * 
     */
    create<T extends MarketCreateArgs>(args: SelectSubset<T, MarketCreateArgs<ExtArgs>>): Prisma__MarketClient<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Markets.
     * @param {MarketCreateManyArgs} args - Arguments to create many Markets.
     * @example
     * // Create many Markets
     * const market = await prisma.market.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MarketCreateManyArgs>(args?: SelectSubset<T, MarketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Markets and returns the data saved in the database.
     * @param {MarketCreateManyAndReturnArgs} args - Arguments to create many Markets.
     * @example
     * // Create many Markets
     * const market = await prisma.market.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Markets and only return the `id`
     * const marketWithIdOnly = await prisma.market.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MarketCreateManyAndReturnArgs>(args?: SelectSubset<T, MarketCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Market.
     * @param {MarketDeleteArgs} args - Arguments to delete one Market.
     * @example
     * // Delete one Market
     * const Market = await prisma.market.delete({
     *   where: {
     *     // ... filter to delete one Market
     *   }
     * })
     * 
     */
    delete<T extends MarketDeleteArgs>(args: SelectSubset<T, MarketDeleteArgs<ExtArgs>>): Prisma__MarketClient<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Market.
     * @param {MarketUpdateArgs} args - Arguments to update one Market.
     * @example
     * // Update one Market
     * const market = await prisma.market.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MarketUpdateArgs>(args: SelectSubset<T, MarketUpdateArgs<ExtArgs>>): Prisma__MarketClient<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Markets.
     * @param {MarketDeleteManyArgs} args - Arguments to filter Markets to delete.
     * @example
     * // Delete a few Markets
     * const { count } = await prisma.market.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MarketDeleteManyArgs>(args?: SelectSubset<T, MarketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Markets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Markets
     * const market = await prisma.market.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MarketUpdateManyArgs>(args: SelectSubset<T, MarketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Markets and returns the data updated in the database.
     * @param {MarketUpdateManyAndReturnArgs} args - Arguments to update many Markets.
     * @example
     * // Update many Markets
     * const market = await prisma.market.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Markets and only return the `id`
     * const marketWithIdOnly = await prisma.market.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MarketUpdateManyAndReturnArgs>(args: SelectSubset<T, MarketUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Market.
     * @param {MarketUpsertArgs} args - Arguments to update or create a Market.
     * @example
     * // Update or create a Market
     * const market = await prisma.market.upsert({
     *   create: {
     *     // ... data to create a Market
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Market we want to update
     *   }
     * })
     */
    upsert<T extends MarketUpsertArgs>(args: SelectSubset<T, MarketUpsertArgs<ExtArgs>>): Prisma__MarketClient<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Markets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketCountArgs} args - Arguments to filter Markets to count.
     * @example
     * // Count the number of Markets
     * const count = await prisma.market.count({
     *   where: {
     *     // ... the filter for the Markets we want to count
     *   }
     * })
    **/
    count<T extends MarketCountArgs>(
      args?: Subset<T, MarketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MarketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Market.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MarketAggregateArgs>(args: Subset<T, MarketAggregateArgs>): Prisma.PrismaPromise<GetMarketAggregateType<T>>

    /**
     * Group by Market.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MarketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MarketGroupByArgs['orderBy'] }
        : { orderBy?: MarketGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MarketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMarketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Market model
   */
  readonly fields: MarketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Market.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MarketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trades<T extends Market$tradesArgs<ExtArgs> = {}>(args?: Subset<T, Market$tradesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    positionActivities<T extends Market$positionActivitiesArgs<ExtArgs> = {}>(args?: Subset<T, Market$positionActivitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PositionActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    redemptions<T extends Market$redemptionsArgs<ExtArgs> = {}>(args?: Subset<T, Market$redemptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RedemptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    intelligence<T extends Market$intelligenceArgs<ExtArgs> = {}>(args?: Subset<T, Market$intelligenceArgs<ExtArgs>>): Prisma__MarketIntelligenceClient<$Result.GetResult<Prisma.$MarketIntelligencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Market model
   */
  interface MarketFieldRefs {
    readonly id: FieldRef<"Market", 'Int'>
    readonly slug: FieldRef<"Market", 'String'>
    readonly conditionId: FieldRef<"Market", 'String'>
    readonly questionId: FieldRef<"Market", 'String'>
    readonly oracle: FieldRef<"Market", 'String'>
    readonly outcomeCount: FieldRef<"Market", 'Int'>
    readonly enableNegRisk: FieldRef<"Market", 'Boolean'>
    readonly yesTokenId: FieldRef<"Market", 'String'>
    readonly noTokenId: FieldRef<"Market", 'String'>
    readonly collateralToken: FieldRef<"Market", 'String'>
    readonly title: FieldRef<"Market", 'String'>
    readonly status: FieldRef<"Market", 'String'>
    readonly createdAt: FieldRef<"Market", 'DateTime'>
    readonly resolvedAt: FieldRef<"Market", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Market findUnique
   */
  export type MarketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
    /**
     * Filter, which Market to fetch.
     */
    where: MarketWhereUniqueInput
  }

  /**
   * Market findUniqueOrThrow
   */
  export type MarketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
    /**
     * Filter, which Market to fetch.
     */
    where: MarketWhereUniqueInput
  }

  /**
   * Market findFirst
   */
  export type MarketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
    /**
     * Filter, which Market to fetch.
     */
    where?: MarketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Markets to fetch.
     */
    orderBy?: MarketOrderByWithRelationInput | MarketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Markets.
     */
    cursor?: MarketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Markets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Markets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Markets.
     */
    distinct?: MarketScalarFieldEnum | MarketScalarFieldEnum[]
  }

  /**
   * Market findFirstOrThrow
   */
  export type MarketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
    /**
     * Filter, which Market to fetch.
     */
    where?: MarketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Markets to fetch.
     */
    orderBy?: MarketOrderByWithRelationInput | MarketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Markets.
     */
    cursor?: MarketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Markets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Markets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Markets.
     */
    distinct?: MarketScalarFieldEnum | MarketScalarFieldEnum[]
  }

  /**
   * Market findMany
   */
  export type MarketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
    /**
     * Filter, which Markets to fetch.
     */
    where?: MarketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Markets to fetch.
     */
    orderBy?: MarketOrderByWithRelationInput | MarketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Markets.
     */
    cursor?: MarketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Markets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Markets.
     */
    skip?: number
    distinct?: MarketScalarFieldEnum | MarketScalarFieldEnum[]
  }

  /**
   * Market create
   */
  export type MarketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
    /**
     * The data needed to create a Market.
     */
    data: XOR<MarketCreateInput, MarketUncheckedCreateInput>
  }

  /**
   * Market createMany
   */
  export type MarketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Markets.
     */
    data: MarketCreateManyInput | MarketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Market createManyAndReturn
   */
  export type MarketCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * The data used to create many Markets.
     */
    data: MarketCreateManyInput | MarketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Market update
   */
  export type MarketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
    /**
     * The data needed to update a Market.
     */
    data: XOR<MarketUpdateInput, MarketUncheckedUpdateInput>
    /**
     * Choose, which Market to update.
     */
    where: MarketWhereUniqueInput
  }

  /**
   * Market updateMany
   */
  export type MarketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Markets.
     */
    data: XOR<MarketUpdateManyMutationInput, MarketUncheckedUpdateManyInput>
    /**
     * Filter which Markets to update
     */
    where?: MarketWhereInput
    /**
     * Limit how many Markets to update.
     */
    limit?: number
  }

  /**
   * Market updateManyAndReturn
   */
  export type MarketUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * The data used to update Markets.
     */
    data: XOR<MarketUpdateManyMutationInput, MarketUncheckedUpdateManyInput>
    /**
     * Filter which Markets to update
     */
    where?: MarketWhereInput
    /**
     * Limit how many Markets to update.
     */
    limit?: number
  }

  /**
   * Market upsert
   */
  export type MarketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
    /**
     * The filter to search for the Market to update in case it exists.
     */
    where: MarketWhereUniqueInput
    /**
     * In case the Market found by the `where` argument doesn't exist, create a new Market with this data.
     */
    create: XOR<MarketCreateInput, MarketUncheckedCreateInput>
    /**
     * In case the Market was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MarketUpdateInput, MarketUncheckedUpdateInput>
  }

  /**
   * Market delete
   */
  export type MarketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
    /**
     * Filter which Market to delete.
     */
    where: MarketWhereUniqueInput
  }

  /**
   * Market deleteMany
   */
  export type MarketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Markets to delete
     */
    where?: MarketWhereInput
    /**
     * Limit how many Markets to delete.
     */
    limit?: number
  }

  /**
   * Market.trades
   */
  export type Market$tradesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    where?: TradeWhereInput
    orderBy?: TradeOrderByWithRelationInput | TradeOrderByWithRelationInput[]
    cursor?: TradeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TradeScalarFieldEnum | TradeScalarFieldEnum[]
  }

  /**
   * Market.positionActivities
   */
  export type Market$positionActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PositionActivity
     */
    select?: PositionActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PositionActivity
     */
    omit?: PositionActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionActivityInclude<ExtArgs> | null
    where?: PositionActivityWhereInput
    orderBy?: PositionActivityOrderByWithRelationInput | PositionActivityOrderByWithRelationInput[]
    cursor?: PositionActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PositionActivityScalarFieldEnum | PositionActivityScalarFieldEnum[]
  }

  /**
   * Market.redemptions
   */
  export type Market$redemptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Redemption
     */
    select?: RedemptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Redemption
     */
    omit?: RedemptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RedemptionInclude<ExtArgs> | null
    where?: RedemptionWhereInput
    orderBy?: RedemptionOrderByWithRelationInput | RedemptionOrderByWithRelationInput[]
    cursor?: RedemptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RedemptionScalarFieldEnum | RedemptionScalarFieldEnum[]
  }

  /**
   * Market.intelligence
   */
  export type Market$intelligenceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketIntelligence
     */
    select?: MarketIntelligenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketIntelligence
     */
    omit?: MarketIntelligenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketIntelligenceInclude<ExtArgs> | null
    where?: MarketIntelligenceWhereInput
  }

  /**
   * Market without action
   */
  export type MarketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
  }


  /**
   * Model Trade
   */

  export type AggregateTrade = {
    _count: TradeCountAggregateOutputType | null
    _avg: TradeAvgAggregateOutputType | null
    _sum: TradeSumAggregateOutputType | null
    _min: TradeMinAggregateOutputType | null
    _max: TradeMaxAggregateOutputType | null
  }

  export type TradeAvgAggregateOutputType = {
    logIndex: number | null
    marketId: number | null
    price: Decimal | null
    size: Decimal | null
  }

  export type TradeSumAggregateOutputType = {
    logIndex: number | null
    marketId: number | null
    price: Decimal | null
    size: Decimal | null
  }

  export type TradeMinAggregateOutputType = {
    txHash: string | null
    logIndex: number | null
    marketId: number | null
    tokenId: string | null
    outcome: string | null
    side: string | null
    price: Decimal | null
    size: Decimal | null
    maker: string | null
    taker: string | null
    timestamp: Date | null
  }

  export type TradeMaxAggregateOutputType = {
    txHash: string | null
    logIndex: number | null
    marketId: number | null
    tokenId: string | null
    outcome: string | null
    side: string | null
    price: Decimal | null
    size: Decimal | null
    maker: string | null
    taker: string | null
    timestamp: Date | null
  }

  export type TradeCountAggregateOutputType = {
    txHash: number
    logIndex: number
    marketId: number
    tokenId: number
    outcome: number
    side: number
    price: number
    size: number
    maker: number
    taker: number
    timestamp: number
    _all: number
  }


  export type TradeAvgAggregateInputType = {
    logIndex?: true
    marketId?: true
    price?: true
    size?: true
  }

  export type TradeSumAggregateInputType = {
    logIndex?: true
    marketId?: true
    price?: true
    size?: true
  }

  export type TradeMinAggregateInputType = {
    txHash?: true
    logIndex?: true
    marketId?: true
    tokenId?: true
    outcome?: true
    side?: true
    price?: true
    size?: true
    maker?: true
    taker?: true
    timestamp?: true
  }

  export type TradeMaxAggregateInputType = {
    txHash?: true
    logIndex?: true
    marketId?: true
    tokenId?: true
    outcome?: true
    side?: true
    price?: true
    size?: true
    maker?: true
    taker?: true
    timestamp?: true
  }

  export type TradeCountAggregateInputType = {
    txHash?: true
    logIndex?: true
    marketId?: true
    tokenId?: true
    outcome?: true
    side?: true
    price?: true
    size?: true
    maker?: true
    taker?: true
    timestamp?: true
    _all?: true
  }

  export type TradeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trade to aggregate.
     */
    where?: TradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trades to fetch.
     */
    orderBy?: TradeOrderByWithRelationInput | TradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Trades
    **/
    _count?: true | TradeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TradeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TradeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TradeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TradeMaxAggregateInputType
  }

  export type GetTradeAggregateType<T extends TradeAggregateArgs> = {
        [P in keyof T & keyof AggregateTrade]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrade[P]>
      : GetScalarType<T[P], AggregateTrade[P]>
  }




  export type TradeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TradeWhereInput
    orderBy?: TradeOrderByWithAggregationInput | TradeOrderByWithAggregationInput[]
    by: TradeScalarFieldEnum[] | TradeScalarFieldEnum
    having?: TradeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TradeCountAggregateInputType | true
    _avg?: TradeAvgAggregateInputType
    _sum?: TradeSumAggregateInputType
    _min?: TradeMinAggregateInputType
    _max?: TradeMaxAggregateInputType
  }

  export type TradeGroupByOutputType = {
    txHash: string
    logIndex: number
    marketId: number
    tokenId: string
    outcome: string | null
    side: string
    price: Decimal
    size: Decimal
    maker: string
    taker: string
    timestamp: Date
    _count: TradeCountAggregateOutputType | null
    _avg: TradeAvgAggregateOutputType | null
    _sum: TradeSumAggregateOutputType | null
    _min: TradeMinAggregateOutputType | null
    _max: TradeMaxAggregateOutputType | null
  }

  type GetTradeGroupByPayload<T extends TradeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TradeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TradeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TradeGroupByOutputType[P]>
            : GetScalarType<T[P], TradeGroupByOutputType[P]>
        }
      >
    >


  export type TradeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    txHash?: boolean
    logIndex?: boolean
    marketId?: boolean
    tokenId?: boolean
    outcome?: boolean
    side?: boolean
    price?: boolean
    size?: boolean
    maker?: boolean
    taker?: boolean
    timestamp?: boolean
    market?: boolean | MarketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trade"]>

  export type TradeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    txHash?: boolean
    logIndex?: boolean
    marketId?: boolean
    tokenId?: boolean
    outcome?: boolean
    side?: boolean
    price?: boolean
    size?: boolean
    maker?: boolean
    taker?: boolean
    timestamp?: boolean
    market?: boolean | MarketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trade"]>

  export type TradeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    txHash?: boolean
    logIndex?: boolean
    marketId?: boolean
    tokenId?: boolean
    outcome?: boolean
    side?: boolean
    price?: boolean
    size?: boolean
    maker?: boolean
    taker?: boolean
    timestamp?: boolean
    market?: boolean | MarketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trade"]>

  export type TradeSelectScalar = {
    txHash?: boolean
    logIndex?: boolean
    marketId?: boolean
    tokenId?: boolean
    outcome?: boolean
    side?: boolean
    price?: boolean
    size?: boolean
    maker?: boolean
    taker?: boolean
    timestamp?: boolean
  }

  export type TradeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"txHash" | "logIndex" | "marketId" | "tokenId" | "outcome" | "side" | "price" | "size" | "maker" | "taker" | "timestamp", ExtArgs["result"]["trade"]>
  export type TradeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    market?: boolean | MarketDefaultArgs<ExtArgs>
  }
  export type TradeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    market?: boolean | MarketDefaultArgs<ExtArgs>
  }
  export type TradeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    market?: boolean | MarketDefaultArgs<ExtArgs>
  }

  export type $TradePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Trade"
    objects: {
      market: Prisma.$MarketPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      txHash: string
      logIndex: number
      marketId: number
      tokenId: string
      outcome: string | null
      side: string
      price: Prisma.Decimal
      size: Prisma.Decimal
      maker: string
      taker: string
      timestamp: Date
    }, ExtArgs["result"]["trade"]>
    composites: {}
  }

  type TradeGetPayload<S extends boolean | null | undefined | TradeDefaultArgs> = $Result.GetResult<Prisma.$TradePayload, S>

  type TradeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TradeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TradeCountAggregateInputType | true
    }

  export interface TradeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Trade'], meta: { name: 'Trade' } }
    /**
     * Find zero or one Trade that matches the filter.
     * @param {TradeFindUniqueArgs} args - Arguments to find a Trade
     * @example
     * // Get one Trade
     * const trade = await prisma.trade.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TradeFindUniqueArgs>(args: SelectSubset<T, TradeFindUniqueArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Trade that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TradeFindUniqueOrThrowArgs} args - Arguments to find a Trade
     * @example
     * // Get one Trade
     * const trade = await prisma.trade.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TradeFindUniqueOrThrowArgs>(args: SelectSubset<T, TradeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trade that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeFindFirstArgs} args - Arguments to find a Trade
     * @example
     * // Get one Trade
     * const trade = await prisma.trade.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TradeFindFirstArgs>(args?: SelectSubset<T, TradeFindFirstArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trade that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeFindFirstOrThrowArgs} args - Arguments to find a Trade
     * @example
     * // Get one Trade
     * const trade = await prisma.trade.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TradeFindFirstOrThrowArgs>(args?: SelectSubset<T, TradeFindFirstOrThrowArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Trades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trades
     * const trades = await prisma.trade.findMany()
     * 
     * // Get first 10 Trades
     * const trades = await prisma.trade.findMany({ take: 10 })
     * 
     * // Only select the `txHash`
     * const tradeWithTxHashOnly = await prisma.trade.findMany({ select: { txHash: true } })
     * 
     */
    findMany<T extends TradeFindManyArgs>(args?: SelectSubset<T, TradeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Trade.
     * @param {TradeCreateArgs} args - Arguments to create a Trade.
     * @example
     * // Create one Trade
     * const Trade = await prisma.trade.create({
     *   data: {
     *     // ... data to create a Trade
     *   }
     * })
     * 
     */
    create<T extends TradeCreateArgs>(args: SelectSubset<T, TradeCreateArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Trades.
     * @param {TradeCreateManyArgs} args - Arguments to create many Trades.
     * @example
     * // Create many Trades
     * const trade = await prisma.trade.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TradeCreateManyArgs>(args?: SelectSubset<T, TradeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Trades and returns the data saved in the database.
     * @param {TradeCreateManyAndReturnArgs} args - Arguments to create many Trades.
     * @example
     * // Create many Trades
     * const trade = await prisma.trade.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Trades and only return the `txHash`
     * const tradeWithTxHashOnly = await prisma.trade.createManyAndReturn({
     *   select: { txHash: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TradeCreateManyAndReturnArgs>(args?: SelectSubset<T, TradeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Trade.
     * @param {TradeDeleteArgs} args - Arguments to delete one Trade.
     * @example
     * // Delete one Trade
     * const Trade = await prisma.trade.delete({
     *   where: {
     *     // ... filter to delete one Trade
     *   }
     * })
     * 
     */
    delete<T extends TradeDeleteArgs>(args: SelectSubset<T, TradeDeleteArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Trade.
     * @param {TradeUpdateArgs} args - Arguments to update one Trade.
     * @example
     * // Update one Trade
     * const trade = await prisma.trade.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TradeUpdateArgs>(args: SelectSubset<T, TradeUpdateArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Trades.
     * @param {TradeDeleteManyArgs} args - Arguments to filter Trades to delete.
     * @example
     * // Delete a few Trades
     * const { count } = await prisma.trade.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TradeDeleteManyArgs>(args?: SelectSubset<T, TradeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trades
     * const trade = await prisma.trade.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TradeUpdateManyArgs>(args: SelectSubset<T, TradeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trades and returns the data updated in the database.
     * @param {TradeUpdateManyAndReturnArgs} args - Arguments to update many Trades.
     * @example
     * // Update many Trades
     * const trade = await prisma.trade.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Trades and only return the `txHash`
     * const tradeWithTxHashOnly = await prisma.trade.updateManyAndReturn({
     *   select: { txHash: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TradeUpdateManyAndReturnArgs>(args: SelectSubset<T, TradeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Trade.
     * @param {TradeUpsertArgs} args - Arguments to update or create a Trade.
     * @example
     * // Update or create a Trade
     * const trade = await prisma.trade.upsert({
     *   create: {
     *     // ... data to create a Trade
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trade we want to update
     *   }
     * })
     */
    upsert<T extends TradeUpsertArgs>(args: SelectSubset<T, TradeUpsertArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Trades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeCountArgs} args - Arguments to filter Trades to count.
     * @example
     * // Count the number of Trades
     * const count = await prisma.trade.count({
     *   where: {
     *     // ... the filter for the Trades we want to count
     *   }
     * })
    **/
    count<T extends TradeCountArgs>(
      args?: Subset<T, TradeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TradeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TradeAggregateArgs>(args: Subset<T, TradeAggregateArgs>): Prisma.PrismaPromise<GetTradeAggregateType<T>>

    /**
     * Group by Trade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TradeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TradeGroupByArgs['orderBy'] }
        : { orderBy?: TradeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TradeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTradeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Trade model
   */
  readonly fields: TradeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Trade.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TradeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    market<T extends MarketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MarketDefaultArgs<ExtArgs>>): Prisma__MarketClient<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Trade model
   */
  interface TradeFieldRefs {
    readonly txHash: FieldRef<"Trade", 'String'>
    readonly logIndex: FieldRef<"Trade", 'Int'>
    readonly marketId: FieldRef<"Trade", 'Int'>
    readonly tokenId: FieldRef<"Trade", 'String'>
    readonly outcome: FieldRef<"Trade", 'String'>
    readonly side: FieldRef<"Trade", 'String'>
    readonly price: FieldRef<"Trade", 'Decimal'>
    readonly size: FieldRef<"Trade", 'Decimal'>
    readonly maker: FieldRef<"Trade", 'String'>
    readonly taker: FieldRef<"Trade", 'String'>
    readonly timestamp: FieldRef<"Trade", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Trade findUnique
   */
  export type TradeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * Filter, which Trade to fetch.
     */
    where: TradeWhereUniqueInput
  }

  /**
   * Trade findUniqueOrThrow
   */
  export type TradeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * Filter, which Trade to fetch.
     */
    where: TradeWhereUniqueInput
  }

  /**
   * Trade findFirst
   */
  export type TradeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * Filter, which Trade to fetch.
     */
    where?: TradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trades to fetch.
     */
    orderBy?: TradeOrderByWithRelationInput | TradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trades.
     */
    cursor?: TradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trades.
     */
    distinct?: TradeScalarFieldEnum | TradeScalarFieldEnum[]
  }

  /**
   * Trade findFirstOrThrow
   */
  export type TradeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * Filter, which Trade to fetch.
     */
    where?: TradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trades to fetch.
     */
    orderBy?: TradeOrderByWithRelationInput | TradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trades.
     */
    cursor?: TradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trades.
     */
    distinct?: TradeScalarFieldEnum | TradeScalarFieldEnum[]
  }

  /**
   * Trade findMany
   */
  export type TradeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * Filter, which Trades to fetch.
     */
    where?: TradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trades to fetch.
     */
    orderBy?: TradeOrderByWithRelationInput | TradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Trades.
     */
    cursor?: TradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trades.
     */
    skip?: number
    distinct?: TradeScalarFieldEnum | TradeScalarFieldEnum[]
  }

  /**
   * Trade create
   */
  export type TradeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * The data needed to create a Trade.
     */
    data: XOR<TradeCreateInput, TradeUncheckedCreateInput>
  }

  /**
   * Trade createMany
   */
  export type TradeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Trades.
     */
    data: TradeCreateManyInput | TradeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Trade createManyAndReturn
   */
  export type TradeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * The data used to create many Trades.
     */
    data: TradeCreateManyInput | TradeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Trade update
   */
  export type TradeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * The data needed to update a Trade.
     */
    data: XOR<TradeUpdateInput, TradeUncheckedUpdateInput>
    /**
     * Choose, which Trade to update.
     */
    where: TradeWhereUniqueInput
  }

  /**
   * Trade updateMany
   */
  export type TradeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Trades.
     */
    data: XOR<TradeUpdateManyMutationInput, TradeUncheckedUpdateManyInput>
    /**
     * Filter which Trades to update
     */
    where?: TradeWhereInput
    /**
     * Limit how many Trades to update.
     */
    limit?: number
  }

  /**
   * Trade updateManyAndReturn
   */
  export type TradeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * The data used to update Trades.
     */
    data: XOR<TradeUpdateManyMutationInput, TradeUncheckedUpdateManyInput>
    /**
     * Filter which Trades to update
     */
    where?: TradeWhereInput
    /**
     * Limit how many Trades to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Trade upsert
   */
  export type TradeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * The filter to search for the Trade to update in case it exists.
     */
    where: TradeWhereUniqueInput
    /**
     * In case the Trade found by the `where` argument doesn't exist, create a new Trade with this data.
     */
    create: XOR<TradeCreateInput, TradeUncheckedCreateInput>
    /**
     * In case the Trade was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TradeUpdateInput, TradeUncheckedUpdateInput>
  }

  /**
   * Trade delete
   */
  export type TradeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * Filter which Trade to delete.
     */
    where: TradeWhereUniqueInput
  }

  /**
   * Trade deleteMany
   */
  export type TradeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trades to delete
     */
    where?: TradeWhereInput
    /**
     * Limit how many Trades to delete.
     */
    limit?: number
  }

  /**
   * Trade without action
   */
  export type TradeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
  }


  /**
   * Model SyncState
   */

  export type AggregateSyncState = {
    _count: SyncStateCountAggregateOutputType | null
    _avg: SyncStateAvgAggregateOutputType | null
    _sum: SyncStateSumAggregateOutputType | null
    _min: SyncStateMinAggregateOutputType | null
    _max: SyncStateMaxAggregateOutputType | null
  }

  export type SyncStateAvgAggregateOutputType = {
    lastBlock: number | null
  }

  export type SyncStateSumAggregateOutputType = {
    lastBlock: bigint | null
  }

  export type SyncStateMinAggregateOutputType = {
    key: string | null
    lastBlock: bigint | null
    updatedAt: Date | null
  }

  export type SyncStateMaxAggregateOutputType = {
    key: string | null
    lastBlock: bigint | null
    updatedAt: Date | null
  }

  export type SyncStateCountAggregateOutputType = {
    key: number
    lastBlock: number
    updatedAt: number
    _all: number
  }


  export type SyncStateAvgAggregateInputType = {
    lastBlock?: true
  }

  export type SyncStateSumAggregateInputType = {
    lastBlock?: true
  }

  export type SyncStateMinAggregateInputType = {
    key?: true
    lastBlock?: true
    updatedAt?: true
  }

  export type SyncStateMaxAggregateInputType = {
    key?: true
    lastBlock?: true
    updatedAt?: true
  }

  export type SyncStateCountAggregateInputType = {
    key?: true
    lastBlock?: true
    updatedAt?: true
    _all?: true
  }

  export type SyncStateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SyncState to aggregate.
     */
    where?: SyncStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SyncStates to fetch.
     */
    orderBy?: SyncStateOrderByWithRelationInput | SyncStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SyncStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SyncStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SyncStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SyncStates
    **/
    _count?: true | SyncStateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SyncStateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SyncStateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SyncStateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SyncStateMaxAggregateInputType
  }

  export type GetSyncStateAggregateType<T extends SyncStateAggregateArgs> = {
        [P in keyof T & keyof AggregateSyncState]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSyncState[P]>
      : GetScalarType<T[P], AggregateSyncState[P]>
  }




  export type SyncStateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SyncStateWhereInput
    orderBy?: SyncStateOrderByWithAggregationInput | SyncStateOrderByWithAggregationInput[]
    by: SyncStateScalarFieldEnum[] | SyncStateScalarFieldEnum
    having?: SyncStateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SyncStateCountAggregateInputType | true
    _avg?: SyncStateAvgAggregateInputType
    _sum?: SyncStateSumAggregateInputType
    _min?: SyncStateMinAggregateInputType
    _max?: SyncStateMaxAggregateInputType
  }

  export type SyncStateGroupByOutputType = {
    key: string
    lastBlock: bigint
    updatedAt: Date
    _count: SyncStateCountAggregateOutputType | null
    _avg: SyncStateAvgAggregateOutputType | null
    _sum: SyncStateSumAggregateOutputType | null
    _min: SyncStateMinAggregateOutputType | null
    _max: SyncStateMaxAggregateOutputType | null
  }

  type GetSyncStateGroupByPayload<T extends SyncStateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SyncStateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SyncStateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SyncStateGroupByOutputType[P]>
            : GetScalarType<T[P], SyncStateGroupByOutputType[P]>
        }
      >
    >


  export type SyncStateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    lastBlock?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["syncState"]>

  export type SyncStateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    lastBlock?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["syncState"]>

  export type SyncStateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    lastBlock?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["syncState"]>

  export type SyncStateSelectScalar = {
    key?: boolean
    lastBlock?: boolean
    updatedAt?: boolean
  }

  export type SyncStateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"key" | "lastBlock" | "updatedAt", ExtArgs["result"]["syncState"]>

  export type $SyncStatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SyncState"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      key: string
      lastBlock: bigint
      updatedAt: Date
    }, ExtArgs["result"]["syncState"]>
    composites: {}
  }

  type SyncStateGetPayload<S extends boolean | null | undefined | SyncStateDefaultArgs> = $Result.GetResult<Prisma.$SyncStatePayload, S>

  type SyncStateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SyncStateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SyncStateCountAggregateInputType | true
    }

  export interface SyncStateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SyncState'], meta: { name: 'SyncState' } }
    /**
     * Find zero or one SyncState that matches the filter.
     * @param {SyncStateFindUniqueArgs} args - Arguments to find a SyncState
     * @example
     * // Get one SyncState
     * const syncState = await prisma.syncState.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SyncStateFindUniqueArgs>(args: SelectSubset<T, SyncStateFindUniqueArgs<ExtArgs>>): Prisma__SyncStateClient<$Result.GetResult<Prisma.$SyncStatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SyncState that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SyncStateFindUniqueOrThrowArgs} args - Arguments to find a SyncState
     * @example
     * // Get one SyncState
     * const syncState = await prisma.syncState.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SyncStateFindUniqueOrThrowArgs>(args: SelectSubset<T, SyncStateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SyncStateClient<$Result.GetResult<Prisma.$SyncStatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SyncState that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncStateFindFirstArgs} args - Arguments to find a SyncState
     * @example
     * // Get one SyncState
     * const syncState = await prisma.syncState.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SyncStateFindFirstArgs>(args?: SelectSubset<T, SyncStateFindFirstArgs<ExtArgs>>): Prisma__SyncStateClient<$Result.GetResult<Prisma.$SyncStatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SyncState that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncStateFindFirstOrThrowArgs} args - Arguments to find a SyncState
     * @example
     * // Get one SyncState
     * const syncState = await prisma.syncState.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SyncStateFindFirstOrThrowArgs>(args?: SelectSubset<T, SyncStateFindFirstOrThrowArgs<ExtArgs>>): Prisma__SyncStateClient<$Result.GetResult<Prisma.$SyncStatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SyncStates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncStateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SyncStates
     * const syncStates = await prisma.syncState.findMany()
     * 
     * // Get first 10 SyncStates
     * const syncStates = await prisma.syncState.findMany({ take: 10 })
     * 
     * // Only select the `key`
     * const syncStateWithKeyOnly = await prisma.syncState.findMany({ select: { key: true } })
     * 
     */
    findMany<T extends SyncStateFindManyArgs>(args?: SelectSubset<T, SyncStateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SyncStatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SyncState.
     * @param {SyncStateCreateArgs} args - Arguments to create a SyncState.
     * @example
     * // Create one SyncState
     * const SyncState = await prisma.syncState.create({
     *   data: {
     *     // ... data to create a SyncState
     *   }
     * })
     * 
     */
    create<T extends SyncStateCreateArgs>(args: SelectSubset<T, SyncStateCreateArgs<ExtArgs>>): Prisma__SyncStateClient<$Result.GetResult<Prisma.$SyncStatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SyncStates.
     * @param {SyncStateCreateManyArgs} args - Arguments to create many SyncStates.
     * @example
     * // Create many SyncStates
     * const syncState = await prisma.syncState.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SyncStateCreateManyArgs>(args?: SelectSubset<T, SyncStateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SyncStates and returns the data saved in the database.
     * @param {SyncStateCreateManyAndReturnArgs} args - Arguments to create many SyncStates.
     * @example
     * // Create many SyncStates
     * const syncState = await prisma.syncState.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SyncStates and only return the `key`
     * const syncStateWithKeyOnly = await prisma.syncState.createManyAndReturn({
     *   select: { key: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SyncStateCreateManyAndReturnArgs>(args?: SelectSubset<T, SyncStateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SyncStatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SyncState.
     * @param {SyncStateDeleteArgs} args - Arguments to delete one SyncState.
     * @example
     * // Delete one SyncState
     * const SyncState = await prisma.syncState.delete({
     *   where: {
     *     // ... filter to delete one SyncState
     *   }
     * })
     * 
     */
    delete<T extends SyncStateDeleteArgs>(args: SelectSubset<T, SyncStateDeleteArgs<ExtArgs>>): Prisma__SyncStateClient<$Result.GetResult<Prisma.$SyncStatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SyncState.
     * @param {SyncStateUpdateArgs} args - Arguments to update one SyncState.
     * @example
     * // Update one SyncState
     * const syncState = await prisma.syncState.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SyncStateUpdateArgs>(args: SelectSubset<T, SyncStateUpdateArgs<ExtArgs>>): Prisma__SyncStateClient<$Result.GetResult<Prisma.$SyncStatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SyncStates.
     * @param {SyncStateDeleteManyArgs} args - Arguments to filter SyncStates to delete.
     * @example
     * // Delete a few SyncStates
     * const { count } = await prisma.syncState.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SyncStateDeleteManyArgs>(args?: SelectSubset<T, SyncStateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SyncStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncStateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SyncStates
     * const syncState = await prisma.syncState.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SyncStateUpdateManyArgs>(args: SelectSubset<T, SyncStateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SyncStates and returns the data updated in the database.
     * @param {SyncStateUpdateManyAndReturnArgs} args - Arguments to update many SyncStates.
     * @example
     * // Update many SyncStates
     * const syncState = await prisma.syncState.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SyncStates and only return the `key`
     * const syncStateWithKeyOnly = await prisma.syncState.updateManyAndReturn({
     *   select: { key: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SyncStateUpdateManyAndReturnArgs>(args: SelectSubset<T, SyncStateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SyncStatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SyncState.
     * @param {SyncStateUpsertArgs} args - Arguments to update or create a SyncState.
     * @example
     * // Update or create a SyncState
     * const syncState = await prisma.syncState.upsert({
     *   create: {
     *     // ... data to create a SyncState
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SyncState we want to update
     *   }
     * })
     */
    upsert<T extends SyncStateUpsertArgs>(args: SelectSubset<T, SyncStateUpsertArgs<ExtArgs>>): Prisma__SyncStateClient<$Result.GetResult<Prisma.$SyncStatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SyncStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncStateCountArgs} args - Arguments to filter SyncStates to count.
     * @example
     * // Count the number of SyncStates
     * const count = await prisma.syncState.count({
     *   where: {
     *     // ... the filter for the SyncStates we want to count
     *   }
     * })
    **/
    count<T extends SyncStateCountArgs>(
      args?: Subset<T, SyncStateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SyncStateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SyncState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncStateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SyncStateAggregateArgs>(args: Subset<T, SyncStateAggregateArgs>): Prisma.PrismaPromise<GetSyncStateAggregateType<T>>

    /**
     * Group by SyncState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncStateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SyncStateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SyncStateGroupByArgs['orderBy'] }
        : { orderBy?: SyncStateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SyncStateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSyncStateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SyncState model
   */
  readonly fields: SyncStateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SyncState.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SyncStateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SyncState model
   */
  interface SyncStateFieldRefs {
    readonly key: FieldRef<"SyncState", 'String'>
    readonly lastBlock: FieldRef<"SyncState", 'BigInt'>
    readonly updatedAt: FieldRef<"SyncState", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SyncState findUnique
   */
  export type SyncStateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncState
     */
    select?: SyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncState
     */
    omit?: SyncStateOmit<ExtArgs> | null
    /**
     * Filter, which SyncState to fetch.
     */
    where: SyncStateWhereUniqueInput
  }

  /**
   * SyncState findUniqueOrThrow
   */
  export type SyncStateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncState
     */
    select?: SyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncState
     */
    omit?: SyncStateOmit<ExtArgs> | null
    /**
     * Filter, which SyncState to fetch.
     */
    where: SyncStateWhereUniqueInput
  }

  /**
   * SyncState findFirst
   */
  export type SyncStateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncState
     */
    select?: SyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncState
     */
    omit?: SyncStateOmit<ExtArgs> | null
    /**
     * Filter, which SyncState to fetch.
     */
    where?: SyncStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SyncStates to fetch.
     */
    orderBy?: SyncStateOrderByWithRelationInput | SyncStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SyncStates.
     */
    cursor?: SyncStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SyncStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SyncStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SyncStates.
     */
    distinct?: SyncStateScalarFieldEnum | SyncStateScalarFieldEnum[]
  }

  /**
   * SyncState findFirstOrThrow
   */
  export type SyncStateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncState
     */
    select?: SyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncState
     */
    omit?: SyncStateOmit<ExtArgs> | null
    /**
     * Filter, which SyncState to fetch.
     */
    where?: SyncStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SyncStates to fetch.
     */
    orderBy?: SyncStateOrderByWithRelationInput | SyncStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SyncStates.
     */
    cursor?: SyncStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SyncStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SyncStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SyncStates.
     */
    distinct?: SyncStateScalarFieldEnum | SyncStateScalarFieldEnum[]
  }

  /**
   * SyncState findMany
   */
  export type SyncStateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncState
     */
    select?: SyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncState
     */
    omit?: SyncStateOmit<ExtArgs> | null
    /**
     * Filter, which SyncStates to fetch.
     */
    where?: SyncStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SyncStates to fetch.
     */
    orderBy?: SyncStateOrderByWithRelationInput | SyncStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SyncStates.
     */
    cursor?: SyncStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SyncStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SyncStates.
     */
    skip?: number
    distinct?: SyncStateScalarFieldEnum | SyncStateScalarFieldEnum[]
  }

  /**
   * SyncState create
   */
  export type SyncStateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncState
     */
    select?: SyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncState
     */
    omit?: SyncStateOmit<ExtArgs> | null
    /**
     * The data needed to create a SyncState.
     */
    data: XOR<SyncStateCreateInput, SyncStateUncheckedCreateInput>
  }

  /**
   * SyncState createMany
   */
  export type SyncStateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SyncStates.
     */
    data: SyncStateCreateManyInput | SyncStateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SyncState createManyAndReturn
   */
  export type SyncStateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncState
     */
    select?: SyncStateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SyncState
     */
    omit?: SyncStateOmit<ExtArgs> | null
    /**
     * The data used to create many SyncStates.
     */
    data: SyncStateCreateManyInput | SyncStateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SyncState update
   */
  export type SyncStateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncState
     */
    select?: SyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncState
     */
    omit?: SyncStateOmit<ExtArgs> | null
    /**
     * The data needed to update a SyncState.
     */
    data: XOR<SyncStateUpdateInput, SyncStateUncheckedUpdateInput>
    /**
     * Choose, which SyncState to update.
     */
    where: SyncStateWhereUniqueInput
  }

  /**
   * SyncState updateMany
   */
  export type SyncStateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SyncStates.
     */
    data: XOR<SyncStateUpdateManyMutationInput, SyncStateUncheckedUpdateManyInput>
    /**
     * Filter which SyncStates to update
     */
    where?: SyncStateWhereInput
    /**
     * Limit how many SyncStates to update.
     */
    limit?: number
  }

  /**
   * SyncState updateManyAndReturn
   */
  export type SyncStateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncState
     */
    select?: SyncStateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SyncState
     */
    omit?: SyncStateOmit<ExtArgs> | null
    /**
     * The data used to update SyncStates.
     */
    data: XOR<SyncStateUpdateManyMutationInput, SyncStateUncheckedUpdateManyInput>
    /**
     * Filter which SyncStates to update
     */
    where?: SyncStateWhereInput
    /**
     * Limit how many SyncStates to update.
     */
    limit?: number
  }

  /**
   * SyncState upsert
   */
  export type SyncStateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncState
     */
    select?: SyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncState
     */
    omit?: SyncStateOmit<ExtArgs> | null
    /**
     * The filter to search for the SyncState to update in case it exists.
     */
    where: SyncStateWhereUniqueInput
    /**
     * In case the SyncState found by the `where` argument doesn't exist, create a new SyncState with this data.
     */
    create: XOR<SyncStateCreateInput, SyncStateUncheckedCreateInput>
    /**
     * In case the SyncState was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SyncStateUpdateInput, SyncStateUncheckedUpdateInput>
  }

  /**
   * SyncState delete
   */
  export type SyncStateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncState
     */
    select?: SyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncState
     */
    omit?: SyncStateOmit<ExtArgs> | null
    /**
     * Filter which SyncState to delete.
     */
    where: SyncStateWhereUniqueInput
  }

  /**
   * SyncState deleteMany
   */
  export type SyncStateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SyncStates to delete
     */
    where?: SyncStateWhereInput
    /**
     * Limit how many SyncStates to delete.
     */
    limit?: number
  }

  /**
   * SyncState without action
   */
  export type SyncStateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncState
     */
    select?: SyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncState
     */
    omit?: SyncStateOmit<ExtArgs> | null
  }


  /**
   * Model PositionActivity
   */

  export type AggregatePositionActivity = {
    _count: PositionActivityCountAggregateOutputType | null
    _avg: PositionActivityAvgAggregateOutputType | null
    _sum: PositionActivitySumAggregateOutputType | null
    _min: PositionActivityMinAggregateOutputType | null
    _max: PositionActivityMaxAggregateOutputType | null
  }

  export type PositionActivityAvgAggregateOutputType = {
    logIndex: number | null
    marketId: number | null
    amount: Decimal | null
  }

  export type PositionActivitySumAggregateOutputType = {
    logIndex: number | null
    marketId: number | null
    amount: Decimal | null
  }

  export type PositionActivityMinAggregateOutputType = {
    id: string | null
    txHash: string | null
    logIndex: number | null
    marketId: number | null
    user: string | null
    type: string | null
    amount: Decimal | null
    timestamp: Date | null
  }

  export type PositionActivityMaxAggregateOutputType = {
    id: string | null
    txHash: string | null
    logIndex: number | null
    marketId: number | null
    user: string | null
    type: string | null
    amount: Decimal | null
    timestamp: Date | null
  }

  export type PositionActivityCountAggregateOutputType = {
    id: number
    txHash: number
    logIndex: number
    marketId: number
    user: number
    type: number
    amount: number
    timestamp: number
    _all: number
  }


  export type PositionActivityAvgAggregateInputType = {
    logIndex?: true
    marketId?: true
    amount?: true
  }

  export type PositionActivitySumAggregateInputType = {
    logIndex?: true
    marketId?: true
    amount?: true
  }

  export type PositionActivityMinAggregateInputType = {
    id?: true
    txHash?: true
    logIndex?: true
    marketId?: true
    user?: true
    type?: true
    amount?: true
    timestamp?: true
  }

  export type PositionActivityMaxAggregateInputType = {
    id?: true
    txHash?: true
    logIndex?: true
    marketId?: true
    user?: true
    type?: true
    amount?: true
    timestamp?: true
  }

  export type PositionActivityCountAggregateInputType = {
    id?: true
    txHash?: true
    logIndex?: true
    marketId?: true
    user?: true
    type?: true
    amount?: true
    timestamp?: true
    _all?: true
  }

  export type PositionActivityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PositionActivity to aggregate.
     */
    where?: PositionActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PositionActivities to fetch.
     */
    orderBy?: PositionActivityOrderByWithRelationInput | PositionActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PositionActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PositionActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PositionActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PositionActivities
    **/
    _count?: true | PositionActivityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PositionActivityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PositionActivitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PositionActivityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PositionActivityMaxAggregateInputType
  }

  export type GetPositionActivityAggregateType<T extends PositionActivityAggregateArgs> = {
        [P in keyof T & keyof AggregatePositionActivity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePositionActivity[P]>
      : GetScalarType<T[P], AggregatePositionActivity[P]>
  }




  export type PositionActivityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PositionActivityWhereInput
    orderBy?: PositionActivityOrderByWithAggregationInput | PositionActivityOrderByWithAggregationInput[]
    by: PositionActivityScalarFieldEnum[] | PositionActivityScalarFieldEnum
    having?: PositionActivityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PositionActivityCountAggregateInputType | true
    _avg?: PositionActivityAvgAggregateInputType
    _sum?: PositionActivitySumAggregateInputType
    _min?: PositionActivityMinAggregateInputType
    _max?: PositionActivityMaxAggregateInputType
  }

  export type PositionActivityGroupByOutputType = {
    id: string
    txHash: string
    logIndex: number
    marketId: number
    user: string
    type: string
    amount: Decimal
    timestamp: Date
    _count: PositionActivityCountAggregateOutputType | null
    _avg: PositionActivityAvgAggregateOutputType | null
    _sum: PositionActivitySumAggregateOutputType | null
    _min: PositionActivityMinAggregateOutputType | null
    _max: PositionActivityMaxAggregateOutputType | null
  }

  type GetPositionActivityGroupByPayload<T extends PositionActivityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PositionActivityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PositionActivityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PositionActivityGroupByOutputType[P]>
            : GetScalarType<T[P], PositionActivityGroupByOutputType[P]>
        }
      >
    >


  export type PositionActivitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    txHash?: boolean
    logIndex?: boolean
    marketId?: boolean
    user?: boolean
    type?: boolean
    amount?: boolean
    timestamp?: boolean
    market?: boolean | MarketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["positionActivity"]>

  export type PositionActivitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    txHash?: boolean
    logIndex?: boolean
    marketId?: boolean
    user?: boolean
    type?: boolean
    amount?: boolean
    timestamp?: boolean
    market?: boolean | MarketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["positionActivity"]>

  export type PositionActivitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    txHash?: boolean
    logIndex?: boolean
    marketId?: boolean
    user?: boolean
    type?: boolean
    amount?: boolean
    timestamp?: boolean
    market?: boolean | MarketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["positionActivity"]>

  export type PositionActivitySelectScalar = {
    id?: boolean
    txHash?: boolean
    logIndex?: boolean
    marketId?: boolean
    user?: boolean
    type?: boolean
    amount?: boolean
    timestamp?: boolean
  }

  export type PositionActivityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "txHash" | "logIndex" | "marketId" | "user" | "type" | "amount" | "timestamp", ExtArgs["result"]["positionActivity"]>
  export type PositionActivityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    market?: boolean | MarketDefaultArgs<ExtArgs>
  }
  export type PositionActivityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    market?: boolean | MarketDefaultArgs<ExtArgs>
  }
  export type PositionActivityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    market?: boolean | MarketDefaultArgs<ExtArgs>
  }

  export type $PositionActivityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PositionActivity"
    objects: {
      market: Prisma.$MarketPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      txHash: string
      logIndex: number
      marketId: number
      user: string
      type: string
      amount: Prisma.Decimal
      timestamp: Date
    }, ExtArgs["result"]["positionActivity"]>
    composites: {}
  }

  type PositionActivityGetPayload<S extends boolean | null | undefined | PositionActivityDefaultArgs> = $Result.GetResult<Prisma.$PositionActivityPayload, S>

  type PositionActivityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PositionActivityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PositionActivityCountAggregateInputType | true
    }

  export interface PositionActivityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PositionActivity'], meta: { name: 'PositionActivity' } }
    /**
     * Find zero or one PositionActivity that matches the filter.
     * @param {PositionActivityFindUniqueArgs} args - Arguments to find a PositionActivity
     * @example
     * // Get one PositionActivity
     * const positionActivity = await prisma.positionActivity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PositionActivityFindUniqueArgs>(args: SelectSubset<T, PositionActivityFindUniqueArgs<ExtArgs>>): Prisma__PositionActivityClient<$Result.GetResult<Prisma.$PositionActivityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PositionActivity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PositionActivityFindUniqueOrThrowArgs} args - Arguments to find a PositionActivity
     * @example
     * // Get one PositionActivity
     * const positionActivity = await prisma.positionActivity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PositionActivityFindUniqueOrThrowArgs>(args: SelectSubset<T, PositionActivityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PositionActivityClient<$Result.GetResult<Prisma.$PositionActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PositionActivity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionActivityFindFirstArgs} args - Arguments to find a PositionActivity
     * @example
     * // Get one PositionActivity
     * const positionActivity = await prisma.positionActivity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PositionActivityFindFirstArgs>(args?: SelectSubset<T, PositionActivityFindFirstArgs<ExtArgs>>): Prisma__PositionActivityClient<$Result.GetResult<Prisma.$PositionActivityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PositionActivity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionActivityFindFirstOrThrowArgs} args - Arguments to find a PositionActivity
     * @example
     * // Get one PositionActivity
     * const positionActivity = await prisma.positionActivity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PositionActivityFindFirstOrThrowArgs>(args?: SelectSubset<T, PositionActivityFindFirstOrThrowArgs<ExtArgs>>): Prisma__PositionActivityClient<$Result.GetResult<Prisma.$PositionActivityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PositionActivities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionActivityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PositionActivities
     * const positionActivities = await prisma.positionActivity.findMany()
     * 
     * // Get first 10 PositionActivities
     * const positionActivities = await prisma.positionActivity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const positionActivityWithIdOnly = await prisma.positionActivity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PositionActivityFindManyArgs>(args?: SelectSubset<T, PositionActivityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PositionActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PositionActivity.
     * @param {PositionActivityCreateArgs} args - Arguments to create a PositionActivity.
     * @example
     * // Create one PositionActivity
     * const PositionActivity = await prisma.positionActivity.create({
     *   data: {
     *     // ... data to create a PositionActivity
     *   }
     * })
     * 
     */
    create<T extends PositionActivityCreateArgs>(args: SelectSubset<T, PositionActivityCreateArgs<ExtArgs>>): Prisma__PositionActivityClient<$Result.GetResult<Prisma.$PositionActivityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PositionActivities.
     * @param {PositionActivityCreateManyArgs} args - Arguments to create many PositionActivities.
     * @example
     * // Create many PositionActivities
     * const positionActivity = await prisma.positionActivity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PositionActivityCreateManyArgs>(args?: SelectSubset<T, PositionActivityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PositionActivities and returns the data saved in the database.
     * @param {PositionActivityCreateManyAndReturnArgs} args - Arguments to create many PositionActivities.
     * @example
     * // Create many PositionActivities
     * const positionActivity = await prisma.positionActivity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PositionActivities and only return the `id`
     * const positionActivityWithIdOnly = await prisma.positionActivity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PositionActivityCreateManyAndReturnArgs>(args?: SelectSubset<T, PositionActivityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PositionActivityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PositionActivity.
     * @param {PositionActivityDeleteArgs} args - Arguments to delete one PositionActivity.
     * @example
     * // Delete one PositionActivity
     * const PositionActivity = await prisma.positionActivity.delete({
     *   where: {
     *     // ... filter to delete one PositionActivity
     *   }
     * })
     * 
     */
    delete<T extends PositionActivityDeleteArgs>(args: SelectSubset<T, PositionActivityDeleteArgs<ExtArgs>>): Prisma__PositionActivityClient<$Result.GetResult<Prisma.$PositionActivityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PositionActivity.
     * @param {PositionActivityUpdateArgs} args - Arguments to update one PositionActivity.
     * @example
     * // Update one PositionActivity
     * const positionActivity = await prisma.positionActivity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PositionActivityUpdateArgs>(args: SelectSubset<T, PositionActivityUpdateArgs<ExtArgs>>): Prisma__PositionActivityClient<$Result.GetResult<Prisma.$PositionActivityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PositionActivities.
     * @param {PositionActivityDeleteManyArgs} args - Arguments to filter PositionActivities to delete.
     * @example
     * // Delete a few PositionActivities
     * const { count } = await prisma.positionActivity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PositionActivityDeleteManyArgs>(args?: SelectSubset<T, PositionActivityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PositionActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PositionActivities
     * const positionActivity = await prisma.positionActivity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PositionActivityUpdateManyArgs>(args: SelectSubset<T, PositionActivityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PositionActivities and returns the data updated in the database.
     * @param {PositionActivityUpdateManyAndReturnArgs} args - Arguments to update many PositionActivities.
     * @example
     * // Update many PositionActivities
     * const positionActivity = await prisma.positionActivity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PositionActivities and only return the `id`
     * const positionActivityWithIdOnly = await prisma.positionActivity.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PositionActivityUpdateManyAndReturnArgs>(args: SelectSubset<T, PositionActivityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PositionActivityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PositionActivity.
     * @param {PositionActivityUpsertArgs} args - Arguments to update or create a PositionActivity.
     * @example
     * // Update or create a PositionActivity
     * const positionActivity = await prisma.positionActivity.upsert({
     *   create: {
     *     // ... data to create a PositionActivity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PositionActivity we want to update
     *   }
     * })
     */
    upsert<T extends PositionActivityUpsertArgs>(args: SelectSubset<T, PositionActivityUpsertArgs<ExtArgs>>): Prisma__PositionActivityClient<$Result.GetResult<Prisma.$PositionActivityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PositionActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionActivityCountArgs} args - Arguments to filter PositionActivities to count.
     * @example
     * // Count the number of PositionActivities
     * const count = await prisma.positionActivity.count({
     *   where: {
     *     // ... the filter for the PositionActivities we want to count
     *   }
     * })
    **/
    count<T extends PositionActivityCountArgs>(
      args?: Subset<T, PositionActivityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PositionActivityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PositionActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PositionActivityAggregateArgs>(args: Subset<T, PositionActivityAggregateArgs>): Prisma.PrismaPromise<GetPositionActivityAggregateType<T>>

    /**
     * Group by PositionActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionActivityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PositionActivityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PositionActivityGroupByArgs['orderBy'] }
        : { orderBy?: PositionActivityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PositionActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPositionActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PositionActivity model
   */
  readonly fields: PositionActivityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PositionActivity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PositionActivityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    market<T extends MarketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MarketDefaultArgs<ExtArgs>>): Prisma__MarketClient<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PositionActivity model
   */
  interface PositionActivityFieldRefs {
    readonly id: FieldRef<"PositionActivity", 'String'>
    readonly txHash: FieldRef<"PositionActivity", 'String'>
    readonly logIndex: FieldRef<"PositionActivity", 'Int'>
    readonly marketId: FieldRef<"PositionActivity", 'Int'>
    readonly user: FieldRef<"PositionActivity", 'String'>
    readonly type: FieldRef<"PositionActivity", 'String'>
    readonly amount: FieldRef<"PositionActivity", 'Decimal'>
    readonly timestamp: FieldRef<"PositionActivity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PositionActivity findUnique
   */
  export type PositionActivityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PositionActivity
     */
    select?: PositionActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PositionActivity
     */
    omit?: PositionActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionActivityInclude<ExtArgs> | null
    /**
     * Filter, which PositionActivity to fetch.
     */
    where: PositionActivityWhereUniqueInput
  }

  /**
   * PositionActivity findUniqueOrThrow
   */
  export type PositionActivityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PositionActivity
     */
    select?: PositionActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PositionActivity
     */
    omit?: PositionActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionActivityInclude<ExtArgs> | null
    /**
     * Filter, which PositionActivity to fetch.
     */
    where: PositionActivityWhereUniqueInput
  }

  /**
   * PositionActivity findFirst
   */
  export type PositionActivityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PositionActivity
     */
    select?: PositionActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PositionActivity
     */
    omit?: PositionActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionActivityInclude<ExtArgs> | null
    /**
     * Filter, which PositionActivity to fetch.
     */
    where?: PositionActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PositionActivities to fetch.
     */
    orderBy?: PositionActivityOrderByWithRelationInput | PositionActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PositionActivities.
     */
    cursor?: PositionActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PositionActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PositionActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PositionActivities.
     */
    distinct?: PositionActivityScalarFieldEnum | PositionActivityScalarFieldEnum[]
  }

  /**
   * PositionActivity findFirstOrThrow
   */
  export type PositionActivityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PositionActivity
     */
    select?: PositionActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PositionActivity
     */
    omit?: PositionActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionActivityInclude<ExtArgs> | null
    /**
     * Filter, which PositionActivity to fetch.
     */
    where?: PositionActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PositionActivities to fetch.
     */
    orderBy?: PositionActivityOrderByWithRelationInput | PositionActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PositionActivities.
     */
    cursor?: PositionActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PositionActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PositionActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PositionActivities.
     */
    distinct?: PositionActivityScalarFieldEnum | PositionActivityScalarFieldEnum[]
  }

  /**
   * PositionActivity findMany
   */
  export type PositionActivityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PositionActivity
     */
    select?: PositionActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PositionActivity
     */
    omit?: PositionActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionActivityInclude<ExtArgs> | null
    /**
     * Filter, which PositionActivities to fetch.
     */
    where?: PositionActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PositionActivities to fetch.
     */
    orderBy?: PositionActivityOrderByWithRelationInput | PositionActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PositionActivities.
     */
    cursor?: PositionActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PositionActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PositionActivities.
     */
    skip?: number
    distinct?: PositionActivityScalarFieldEnum | PositionActivityScalarFieldEnum[]
  }

  /**
   * PositionActivity create
   */
  export type PositionActivityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PositionActivity
     */
    select?: PositionActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PositionActivity
     */
    omit?: PositionActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionActivityInclude<ExtArgs> | null
    /**
     * The data needed to create a PositionActivity.
     */
    data: XOR<PositionActivityCreateInput, PositionActivityUncheckedCreateInput>
  }

  /**
   * PositionActivity createMany
   */
  export type PositionActivityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PositionActivities.
     */
    data: PositionActivityCreateManyInput | PositionActivityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PositionActivity createManyAndReturn
   */
  export type PositionActivityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PositionActivity
     */
    select?: PositionActivitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PositionActivity
     */
    omit?: PositionActivityOmit<ExtArgs> | null
    /**
     * The data used to create many PositionActivities.
     */
    data: PositionActivityCreateManyInput | PositionActivityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionActivityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PositionActivity update
   */
  export type PositionActivityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PositionActivity
     */
    select?: PositionActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PositionActivity
     */
    omit?: PositionActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionActivityInclude<ExtArgs> | null
    /**
     * The data needed to update a PositionActivity.
     */
    data: XOR<PositionActivityUpdateInput, PositionActivityUncheckedUpdateInput>
    /**
     * Choose, which PositionActivity to update.
     */
    where: PositionActivityWhereUniqueInput
  }

  /**
   * PositionActivity updateMany
   */
  export type PositionActivityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PositionActivities.
     */
    data: XOR<PositionActivityUpdateManyMutationInput, PositionActivityUncheckedUpdateManyInput>
    /**
     * Filter which PositionActivities to update
     */
    where?: PositionActivityWhereInput
    /**
     * Limit how many PositionActivities to update.
     */
    limit?: number
  }

  /**
   * PositionActivity updateManyAndReturn
   */
  export type PositionActivityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PositionActivity
     */
    select?: PositionActivitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PositionActivity
     */
    omit?: PositionActivityOmit<ExtArgs> | null
    /**
     * The data used to update PositionActivities.
     */
    data: XOR<PositionActivityUpdateManyMutationInput, PositionActivityUncheckedUpdateManyInput>
    /**
     * Filter which PositionActivities to update
     */
    where?: PositionActivityWhereInput
    /**
     * Limit how many PositionActivities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionActivityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PositionActivity upsert
   */
  export type PositionActivityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PositionActivity
     */
    select?: PositionActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PositionActivity
     */
    omit?: PositionActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionActivityInclude<ExtArgs> | null
    /**
     * The filter to search for the PositionActivity to update in case it exists.
     */
    where: PositionActivityWhereUniqueInput
    /**
     * In case the PositionActivity found by the `where` argument doesn't exist, create a new PositionActivity with this data.
     */
    create: XOR<PositionActivityCreateInput, PositionActivityUncheckedCreateInput>
    /**
     * In case the PositionActivity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PositionActivityUpdateInput, PositionActivityUncheckedUpdateInput>
  }

  /**
   * PositionActivity delete
   */
  export type PositionActivityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PositionActivity
     */
    select?: PositionActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PositionActivity
     */
    omit?: PositionActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionActivityInclude<ExtArgs> | null
    /**
     * Filter which PositionActivity to delete.
     */
    where: PositionActivityWhereUniqueInput
  }

  /**
   * PositionActivity deleteMany
   */
  export type PositionActivityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PositionActivities to delete
     */
    where?: PositionActivityWhereInput
    /**
     * Limit how many PositionActivities to delete.
     */
    limit?: number
  }

  /**
   * PositionActivity without action
   */
  export type PositionActivityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PositionActivity
     */
    select?: PositionActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PositionActivity
     */
    omit?: PositionActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionActivityInclude<ExtArgs> | null
  }


  /**
   * Model Redemption
   */

  export type AggregateRedemption = {
    _count: RedemptionCountAggregateOutputType | null
    _avg: RedemptionAvgAggregateOutputType | null
    _sum: RedemptionSumAggregateOutputType | null
    _min: RedemptionMinAggregateOutputType | null
    _max: RedemptionMaxAggregateOutputType | null
  }

  export type RedemptionAvgAggregateOutputType = {
    logIndex: number | null
    marketId: number | null
    payout: Decimal | null
  }

  export type RedemptionSumAggregateOutputType = {
    logIndex: number | null
    marketId: number | null
    payout: Decimal | null
  }

  export type RedemptionMinAggregateOutputType = {
    id: string | null
    txHash: string | null
    logIndex: number | null
    marketId: number | null
    user: string | null
    payout: Decimal | null
    timestamp: Date | null
  }

  export type RedemptionMaxAggregateOutputType = {
    id: string | null
    txHash: string | null
    logIndex: number | null
    marketId: number | null
    user: string | null
    payout: Decimal | null
    timestamp: Date | null
  }

  export type RedemptionCountAggregateOutputType = {
    id: number
    txHash: number
    logIndex: number
    marketId: number
    user: number
    payout: number
    timestamp: number
    _all: number
  }


  export type RedemptionAvgAggregateInputType = {
    logIndex?: true
    marketId?: true
    payout?: true
  }

  export type RedemptionSumAggregateInputType = {
    logIndex?: true
    marketId?: true
    payout?: true
  }

  export type RedemptionMinAggregateInputType = {
    id?: true
    txHash?: true
    logIndex?: true
    marketId?: true
    user?: true
    payout?: true
    timestamp?: true
  }

  export type RedemptionMaxAggregateInputType = {
    id?: true
    txHash?: true
    logIndex?: true
    marketId?: true
    user?: true
    payout?: true
    timestamp?: true
  }

  export type RedemptionCountAggregateInputType = {
    id?: true
    txHash?: true
    logIndex?: true
    marketId?: true
    user?: true
    payout?: true
    timestamp?: true
    _all?: true
  }

  export type RedemptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Redemption to aggregate.
     */
    where?: RedemptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Redemptions to fetch.
     */
    orderBy?: RedemptionOrderByWithRelationInput | RedemptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RedemptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Redemptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Redemptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Redemptions
    **/
    _count?: true | RedemptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RedemptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RedemptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RedemptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RedemptionMaxAggregateInputType
  }

  export type GetRedemptionAggregateType<T extends RedemptionAggregateArgs> = {
        [P in keyof T & keyof AggregateRedemption]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRedemption[P]>
      : GetScalarType<T[P], AggregateRedemption[P]>
  }




  export type RedemptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RedemptionWhereInput
    orderBy?: RedemptionOrderByWithAggregationInput | RedemptionOrderByWithAggregationInput[]
    by: RedemptionScalarFieldEnum[] | RedemptionScalarFieldEnum
    having?: RedemptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RedemptionCountAggregateInputType | true
    _avg?: RedemptionAvgAggregateInputType
    _sum?: RedemptionSumAggregateInputType
    _min?: RedemptionMinAggregateInputType
    _max?: RedemptionMaxAggregateInputType
  }

  export type RedemptionGroupByOutputType = {
    id: string
    txHash: string
    logIndex: number
    marketId: number
    user: string
    payout: Decimal
    timestamp: Date
    _count: RedemptionCountAggregateOutputType | null
    _avg: RedemptionAvgAggregateOutputType | null
    _sum: RedemptionSumAggregateOutputType | null
    _min: RedemptionMinAggregateOutputType | null
    _max: RedemptionMaxAggregateOutputType | null
  }

  type GetRedemptionGroupByPayload<T extends RedemptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RedemptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RedemptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RedemptionGroupByOutputType[P]>
            : GetScalarType<T[P], RedemptionGroupByOutputType[P]>
        }
      >
    >


  export type RedemptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    txHash?: boolean
    logIndex?: boolean
    marketId?: boolean
    user?: boolean
    payout?: boolean
    timestamp?: boolean
    market?: boolean | MarketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["redemption"]>

  export type RedemptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    txHash?: boolean
    logIndex?: boolean
    marketId?: boolean
    user?: boolean
    payout?: boolean
    timestamp?: boolean
    market?: boolean | MarketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["redemption"]>

  export type RedemptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    txHash?: boolean
    logIndex?: boolean
    marketId?: boolean
    user?: boolean
    payout?: boolean
    timestamp?: boolean
    market?: boolean | MarketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["redemption"]>

  export type RedemptionSelectScalar = {
    id?: boolean
    txHash?: boolean
    logIndex?: boolean
    marketId?: boolean
    user?: boolean
    payout?: boolean
    timestamp?: boolean
  }

  export type RedemptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "txHash" | "logIndex" | "marketId" | "user" | "payout" | "timestamp", ExtArgs["result"]["redemption"]>
  export type RedemptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    market?: boolean | MarketDefaultArgs<ExtArgs>
  }
  export type RedemptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    market?: boolean | MarketDefaultArgs<ExtArgs>
  }
  export type RedemptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    market?: boolean | MarketDefaultArgs<ExtArgs>
  }

  export type $RedemptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Redemption"
    objects: {
      market: Prisma.$MarketPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      txHash: string
      logIndex: number
      marketId: number
      user: string
      payout: Prisma.Decimal
      timestamp: Date
    }, ExtArgs["result"]["redemption"]>
    composites: {}
  }

  type RedemptionGetPayload<S extends boolean | null | undefined | RedemptionDefaultArgs> = $Result.GetResult<Prisma.$RedemptionPayload, S>

  type RedemptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RedemptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RedemptionCountAggregateInputType | true
    }

  export interface RedemptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Redemption'], meta: { name: 'Redemption' } }
    /**
     * Find zero or one Redemption that matches the filter.
     * @param {RedemptionFindUniqueArgs} args - Arguments to find a Redemption
     * @example
     * // Get one Redemption
     * const redemption = await prisma.redemption.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RedemptionFindUniqueArgs>(args: SelectSubset<T, RedemptionFindUniqueArgs<ExtArgs>>): Prisma__RedemptionClient<$Result.GetResult<Prisma.$RedemptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Redemption that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RedemptionFindUniqueOrThrowArgs} args - Arguments to find a Redemption
     * @example
     * // Get one Redemption
     * const redemption = await prisma.redemption.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RedemptionFindUniqueOrThrowArgs>(args: SelectSubset<T, RedemptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RedemptionClient<$Result.GetResult<Prisma.$RedemptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Redemption that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RedemptionFindFirstArgs} args - Arguments to find a Redemption
     * @example
     * // Get one Redemption
     * const redemption = await prisma.redemption.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RedemptionFindFirstArgs>(args?: SelectSubset<T, RedemptionFindFirstArgs<ExtArgs>>): Prisma__RedemptionClient<$Result.GetResult<Prisma.$RedemptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Redemption that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RedemptionFindFirstOrThrowArgs} args - Arguments to find a Redemption
     * @example
     * // Get one Redemption
     * const redemption = await prisma.redemption.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RedemptionFindFirstOrThrowArgs>(args?: SelectSubset<T, RedemptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__RedemptionClient<$Result.GetResult<Prisma.$RedemptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Redemptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RedemptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Redemptions
     * const redemptions = await prisma.redemption.findMany()
     * 
     * // Get first 10 Redemptions
     * const redemptions = await prisma.redemption.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const redemptionWithIdOnly = await prisma.redemption.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RedemptionFindManyArgs>(args?: SelectSubset<T, RedemptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RedemptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Redemption.
     * @param {RedemptionCreateArgs} args - Arguments to create a Redemption.
     * @example
     * // Create one Redemption
     * const Redemption = await prisma.redemption.create({
     *   data: {
     *     // ... data to create a Redemption
     *   }
     * })
     * 
     */
    create<T extends RedemptionCreateArgs>(args: SelectSubset<T, RedemptionCreateArgs<ExtArgs>>): Prisma__RedemptionClient<$Result.GetResult<Prisma.$RedemptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Redemptions.
     * @param {RedemptionCreateManyArgs} args - Arguments to create many Redemptions.
     * @example
     * // Create many Redemptions
     * const redemption = await prisma.redemption.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RedemptionCreateManyArgs>(args?: SelectSubset<T, RedemptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Redemptions and returns the data saved in the database.
     * @param {RedemptionCreateManyAndReturnArgs} args - Arguments to create many Redemptions.
     * @example
     * // Create many Redemptions
     * const redemption = await prisma.redemption.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Redemptions and only return the `id`
     * const redemptionWithIdOnly = await prisma.redemption.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RedemptionCreateManyAndReturnArgs>(args?: SelectSubset<T, RedemptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RedemptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Redemption.
     * @param {RedemptionDeleteArgs} args - Arguments to delete one Redemption.
     * @example
     * // Delete one Redemption
     * const Redemption = await prisma.redemption.delete({
     *   where: {
     *     // ... filter to delete one Redemption
     *   }
     * })
     * 
     */
    delete<T extends RedemptionDeleteArgs>(args: SelectSubset<T, RedemptionDeleteArgs<ExtArgs>>): Prisma__RedemptionClient<$Result.GetResult<Prisma.$RedemptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Redemption.
     * @param {RedemptionUpdateArgs} args - Arguments to update one Redemption.
     * @example
     * // Update one Redemption
     * const redemption = await prisma.redemption.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RedemptionUpdateArgs>(args: SelectSubset<T, RedemptionUpdateArgs<ExtArgs>>): Prisma__RedemptionClient<$Result.GetResult<Prisma.$RedemptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Redemptions.
     * @param {RedemptionDeleteManyArgs} args - Arguments to filter Redemptions to delete.
     * @example
     * // Delete a few Redemptions
     * const { count } = await prisma.redemption.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RedemptionDeleteManyArgs>(args?: SelectSubset<T, RedemptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Redemptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RedemptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Redemptions
     * const redemption = await prisma.redemption.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RedemptionUpdateManyArgs>(args: SelectSubset<T, RedemptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Redemptions and returns the data updated in the database.
     * @param {RedemptionUpdateManyAndReturnArgs} args - Arguments to update many Redemptions.
     * @example
     * // Update many Redemptions
     * const redemption = await prisma.redemption.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Redemptions and only return the `id`
     * const redemptionWithIdOnly = await prisma.redemption.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RedemptionUpdateManyAndReturnArgs>(args: SelectSubset<T, RedemptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RedemptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Redemption.
     * @param {RedemptionUpsertArgs} args - Arguments to update or create a Redemption.
     * @example
     * // Update or create a Redemption
     * const redemption = await prisma.redemption.upsert({
     *   create: {
     *     // ... data to create a Redemption
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Redemption we want to update
     *   }
     * })
     */
    upsert<T extends RedemptionUpsertArgs>(args: SelectSubset<T, RedemptionUpsertArgs<ExtArgs>>): Prisma__RedemptionClient<$Result.GetResult<Prisma.$RedemptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Redemptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RedemptionCountArgs} args - Arguments to filter Redemptions to count.
     * @example
     * // Count the number of Redemptions
     * const count = await prisma.redemption.count({
     *   where: {
     *     // ... the filter for the Redemptions we want to count
     *   }
     * })
    **/
    count<T extends RedemptionCountArgs>(
      args?: Subset<T, RedemptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RedemptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Redemption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RedemptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RedemptionAggregateArgs>(args: Subset<T, RedemptionAggregateArgs>): Prisma.PrismaPromise<GetRedemptionAggregateType<T>>

    /**
     * Group by Redemption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RedemptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RedemptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RedemptionGroupByArgs['orderBy'] }
        : { orderBy?: RedemptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RedemptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRedemptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Redemption model
   */
  readonly fields: RedemptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Redemption.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RedemptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    market<T extends MarketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MarketDefaultArgs<ExtArgs>>): Prisma__MarketClient<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Redemption model
   */
  interface RedemptionFieldRefs {
    readonly id: FieldRef<"Redemption", 'String'>
    readonly txHash: FieldRef<"Redemption", 'String'>
    readonly logIndex: FieldRef<"Redemption", 'Int'>
    readonly marketId: FieldRef<"Redemption", 'Int'>
    readonly user: FieldRef<"Redemption", 'String'>
    readonly payout: FieldRef<"Redemption", 'Decimal'>
    readonly timestamp: FieldRef<"Redemption", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Redemption findUnique
   */
  export type RedemptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Redemption
     */
    select?: RedemptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Redemption
     */
    omit?: RedemptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RedemptionInclude<ExtArgs> | null
    /**
     * Filter, which Redemption to fetch.
     */
    where: RedemptionWhereUniqueInput
  }

  /**
   * Redemption findUniqueOrThrow
   */
  export type RedemptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Redemption
     */
    select?: RedemptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Redemption
     */
    omit?: RedemptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RedemptionInclude<ExtArgs> | null
    /**
     * Filter, which Redemption to fetch.
     */
    where: RedemptionWhereUniqueInput
  }

  /**
   * Redemption findFirst
   */
  export type RedemptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Redemption
     */
    select?: RedemptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Redemption
     */
    omit?: RedemptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RedemptionInclude<ExtArgs> | null
    /**
     * Filter, which Redemption to fetch.
     */
    where?: RedemptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Redemptions to fetch.
     */
    orderBy?: RedemptionOrderByWithRelationInput | RedemptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Redemptions.
     */
    cursor?: RedemptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Redemptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Redemptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Redemptions.
     */
    distinct?: RedemptionScalarFieldEnum | RedemptionScalarFieldEnum[]
  }

  /**
   * Redemption findFirstOrThrow
   */
  export type RedemptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Redemption
     */
    select?: RedemptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Redemption
     */
    omit?: RedemptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RedemptionInclude<ExtArgs> | null
    /**
     * Filter, which Redemption to fetch.
     */
    where?: RedemptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Redemptions to fetch.
     */
    orderBy?: RedemptionOrderByWithRelationInput | RedemptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Redemptions.
     */
    cursor?: RedemptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Redemptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Redemptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Redemptions.
     */
    distinct?: RedemptionScalarFieldEnum | RedemptionScalarFieldEnum[]
  }

  /**
   * Redemption findMany
   */
  export type RedemptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Redemption
     */
    select?: RedemptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Redemption
     */
    omit?: RedemptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RedemptionInclude<ExtArgs> | null
    /**
     * Filter, which Redemptions to fetch.
     */
    where?: RedemptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Redemptions to fetch.
     */
    orderBy?: RedemptionOrderByWithRelationInput | RedemptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Redemptions.
     */
    cursor?: RedemptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Redemptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Redemptions.
     */
    skip?: number
    distinct?: RedemptionScalarFieldEnum | RedemptionScalarFieldEnum[]
  }

  /**
   * Redemption create
   */
  export type RedemptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Redemption
     */
    select?: RedemptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Redemption
     */
    omit?: RedemptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RedemptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Redemption.
     */
    data: XOR<RedemptionCreateInput, RedemptionUncheckedCreateInput>
  }

  /**
   * Redemption createMany
   */
  export type RedemptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Redemptions.
     */
    data: RedemptionCreateManyInput | RedemptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Redemption createManyAndReturn
   */
  export type RedemptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Redemption
     */
    select?: RedemptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Redemption
     */
    omit?: RedemptionOmit<ExtArgs> | null
    /**
     * The data used to create many Redemptions.
     */
    data: RedemptionCreateManyInput | RedemptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RedemptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Redemption update
   */
  export type RedemptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Redemption
     */
    select?: RedemptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Redemption
     */
    omit?: RedemptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RedemptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Redemption.
     */
    data: XOR<RedemptionUpdateInput, RedemptionUncheckedUpdateInput>
    /**
     * Choose, which Redemption to update.
     */
    where: RedemptionWhereUniqueInput
  }

  /**
   * Redemption updateMany
   */
  export type RedemptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Redemptions.
     */
    data: XOR<RedemptionUpdateManyMutationInput, RedemptionUncheckedUpdateManyInput>
    /**
     * Filter which Redemptions to update
     */
    where?: RedemptionWhereInput
    /**
     * Limit how many Redemptions to update.
     */
    limit?: number
  }

  /**
   * Redemption updateManyAndReturn
   */
  export type RedemptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Redemption
     */
    select?: RedemptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Redemption
     */
    omit?: RedemptionOmit<ExtArgs> | null
    /**
     * The data used to update Redemptions.
     */
    data: XOR<RedemptionUpdateManyMutationInput, RedemptionUncheckedUpdateManyInput>
    /**
     * Filter which Redemptions to update
     */
    where?: RedemptionWhereInput
    /**
     * Limit how many Redemptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RedemptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Redemption upsert
   */
  export type RedemptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Redemption
     */
    select?: RedemptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Redemption
     */
    omit?: RedemptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RedemptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Redemption to update in case it exists.
     */
    where: RedemptionWhereUniqueInput
    /**
     * In case the Redemption found by the `where` argument doesn't exist, create a new Redemption with this data.
     */
    create: XOR<RedemptionCreateInput, RedemptionUncheckedCreateInput>
    /**
     * In case the Redemption was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RedemptionUpdateInput, RedemptionUncheckedUpdateInput>
  }

  /**
   * Redemption delete
   */
  export type RedemptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Redemption
     */
    select?: RedemptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Redemption
     */
    omit?: RedemptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RedemptionInclude<ExtArgs> | null
    /**
     * Filter which Redemption to delete.
     */
    where: RedemptionWhereUniqueInput
  }

  /**
   * Redemption deleteMany
   */
  export type RedemptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Redemptions to delete
     */
    where?: RedemptionWhereInput
    /**
     * Limit how many Redemptions to delete.
     */
    limit?: number
  }

  /**
   * Redemption without action
   */
  export type RedemptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Redemption
     */
    select?: RedemptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Redemption
     */
    omit?: RedemptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RedemptionInclude<ExtArgs> | null
  }


  /**
   * Model PositionConversion
   */

  export type AggregatePositionConversion = {
    _count: PositionConversionCountAggregateOutputType | null
    _avg: PositionConversionAvgAggregateOutputType | null
    _sum: PositionConversionSumAggregateOutputType | null
    _min: PositionConversionMinAggregateOutputType | null
    _max: PositionConversionMaxAggregateOutputType | null
  }

  export type PositionConversionAvgAggregateOutputType = {
    logIndex: number | null
    fromMarketId: number | null
    toMarketId: number | null
    amount: Decimal | null
  }

  export type PositionConversionSumAggregateOutputType = {
    logIndex: number | null
    fromMarketId: number | null
    toMarketId: number | null
    amount: Decimal | null
  }

  export type PositionConversionMinAggregateOutputType = {
    id: string | null
    txHash: string | null
    logIndex: number | null
    user: string | null
    fromMarketId: number | null
    toMarketId: number | null
    amount: Decimal | null
    timestamp: Date | null
  }

  export type PositionConversionMaxAggregateOutputType = {
    id: string | null
    txHash: string | null
    logIndex: number | null
    user: string | null
    fromMarketId: number | null
    toMarketId: number | null
    amount: Decimal | null
    timestamp: Date | null
  }

  export type PositionConversionCountAggregateOutputType = {
    id: number
    txHash: number
    logIndex: number
    user: number
    fromMarketId: number
    toMarketId: number
    amount: number
    timestamp: number
    _all: number
  }


  export type PositionConversionAvgAggregateInputType = {
    logIndex?: true
    fromMarketId?: true
    toMarketId?: true
    amount?: true
  }

  export type PositionConversionSumAggregateInputType = {
    logIndex?: true
    fromMarketId?: true
    toMarketId?: true
    amount?: true
  }

  export type PositionConversionMinAggregateInputType = {
    id?: true
    txHash?: true
    logIndex?: true
    user?: true
    fromMarketId?: true
    toMarketId?: true
    amount?: true
    timestamp?: true
  }

  export type PositionConversionMaxAggregateInputType = {
    id?: true
    txHash?: true
    logIndex?: true
    user?: true
    fromMarketId?: true
    toMarketId?: true
    amount?: true
    timestamp?: true
  }

  export type PositionConversionCountAggregateInputType = {
    id?: true
    txHash?: true
    logIndex?: true
    user?: true
    fromMarketId?: true
    toMarketId?: true
    amount?: true
    timestamp?: true
    _all?: true
  }

  export type PositionConversionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PositionConversion to aggregate.
     */
    where?: PositionConversionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PositionConversions to fetch.
     */
    orderBy?: PositionConversionOrderByWithRelationInput | PositionConversionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PositionConversionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PositionConversions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PositionConversions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PositionConversions
    **/
    _count?: true | PositionConversionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PositionConversionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PositionConversionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PositionConversionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PositionConversionMaxAggregateInputType
  }

  export type GetPositionConversionAggregateType<T extends PositionConversionAggregateArgs> = {
        [P in keyof T & keyof AggregatePositionConversion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePositionConversion[P]>
      : GetScalarType<T[P], AggregatePositionConversion[P]>
  }




  export type PositionConversionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PositionConversionWhereInput
    orderBy?: PositionConversionOrderByWithAggregationInput | PositionConversionOrderByWithAggregationInput[]
    by: PositionConversionScalarFieldEnum[] | PositionConversionScalarFieldEnum
    having?: PositionConversionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PositionConversionCountAggregateInputType | true
    _avg?: PositionConversionAvgAggregateInputType
    _sum?: PositionConversionSumAggregateInputType
    _min?: PositionConversionMinAggregateInputType
    _max?: PositionConversionMaxAggregateInputType
  }

  export type PositionConversionGroupByOutputType = {
    id: string
    txHash: string
    logIndex: number
    user: string
    fromMarketId: number
    toMarketId: number
    amount: Decimal
    timestamp: Date
    _count: PositionConversionCountAggregateOutputType | null
    _avg: PositionConversionAvgAggregateOutputType | null
    _sum: PositionConversionSumAggregateOutputType | null
    _min: PositionConversionMinAggregateOutputType | null
    _max: PositionConversionMaxAggregateOutputType | null
  }

  type GetPositionConversionGroupByPayload<T extends PositionConversionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PositionConversionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PositionConversionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PositionConversionGroupByOutputType[P]>
            : GetScalarType<T[P], PositionConversionGroupByOutputType[P]>
        }
      >
    >


  export type PositionConversionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    txHash?: boolean
    logIndex?: boolean
    user?: boolean
    fromMarketId?: boolean
    toMarketId?: boolean
    amount?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["positionConversion"]>

  export type PositionConversionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    txHash?: boolean
    logIndex?: boolean
    user?: boolean
    fromMarketId?: boolean
    toMarketId?: boolean
    amount?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["positionConversion"]>

  export type PositionConversionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    txHash?: boolean
    logIndex?: boolean
    user?: boolean
    fromMarketId?: boolean
    toMarketId?: boolean
    amount?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["positionConversion"]>

  export type PositionConversionSelectScalar = {
    id?: boolean
    txHash?: boolean
    logIndex?: boolean
    user?: boolean
    fromMarketId?: boolean
    toMarketId?: boolean
    amount?: boolean
    timestamp?: boolean
  }

  export type PositionConversionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "txHash" | "logIndex" | "user" | "fromMarketId" | "toMarketId" | "amount" | "timestamp", ExtArgs["result"]["positionConversion"]>

  export type $PositionConversionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PositionConversion"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      txHash: string
      logIndex: number
      user: string
      fromMarketId: number
      toMarketId: number
      amount: Prisma.Decimal
      timestamp: Date
    }, ExtArgs["result"]["positionConversion"]>
    composites: {}
  }

  type PositionConversionGetPayload<S extends boolean | null | undefined | PositionConversionDefaultArgs> = $Result.GetResult<Prisma.$PositionConversionPayload, S>

  type PositionConversionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PositionConversionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PositionConversionCountAggregateInputType | true
    }

  export interface PositionConversionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PositionConversion'], meta: { name: 'PositionConversion' } }
    /**
     * Find zero or one PositionConversion that matches the filter.
     * @param {PositionConversionFindUniqueArgs} args - Arguments to find a PositionConversion
     * @example
     * // Get one PositionConversion
     * const positionConversion = await prisma.positionConversion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PositionConversionFindUniqueArgs>(args: SelectSubset<T, PositionConversionFindUniqueArgs<ExtArgs>>): Prisma__PositionConversionClient<$Result.GetResult<Prisma.$PositionConversionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PositionConversion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PositionConversionFindUniqueOrThrowArgs} args - Arguments to find a PositionConversion
     * @example
     * // Get one PositionConversion
     * const positionConversion = await prisma.positionConversion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PositionConversionFindUniqueOrThrowArgs>(args: SelectSubset<T, PositionConversionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PositionConversionClient<$Result.GetResult<Prisma.$PositionConversionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PositionConversion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionConversionFindFirstArgs} args - Arguments to find a PositionConversion
     * @example
     * // Get one PositionConversion
     * const positionConversion = await prisma.positionConversion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PositionConversionFindFirstArgs>(args?: SelectSubset<T, PositionConversionFindFirstArgs<ExtArgs>>): Prisma__PositionConversionClient<$Result.GetResult<Prisma.$PositionConversionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PositionConversion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionConversionFindFirstOrThrowArgs} args - Arguments to find a PositionConversion
     * @example
     * // Get one PositionConversion
     * const positionConversion = await prisma.positionConversion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PositionConversionFindFirstOrThrowArgs>(args?: SelectSubset<T, PositionConversionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PositionConversionClient<$Result.GetResult<Prisma.$PositionConversionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PositionConversions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionConversionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PositionConversions
     * const positionConversions = await prisma.positionConversion.findMany()
     * 
     * // Get first 10 PositionConversions
     * const positionConversions = await prisma.positionConversion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const positionConversionWithIdOnly = await prisma.positionConversion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PositionConversionFindManyArgs>(args?: SelectSubset<T, PositionConversionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PositionConversionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PositionConversion.
     * @param {PositionConversionCreateArgs} args - Arguments to create a PositionConversion.
     * @example
     * // Create one PositionConversion
     * const PositionConversion = await prisma.positionConversion.create({
     *   data: {
     *     // ... data to create a PositionConversion
     *   }
     * })
     * 
     */
    create<T extends PositionConversionCreateArgs>(args: SelectSubset<T, PositionConversionCreateArgs<ExtArgs>>): Prisma__PositionConversionClient<$Result.GetResult<Prisma.$PositionConversionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PositionConversions.
     * @param {PositionConversionCreateManyArgs} args - Arguments to create many PositionConversions.
     * @example
     * // Create many PositionConversions
     * const positionConversion = await prisma.positionConversion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PositionConversionCreateManyArgs>(args?: SelectSubset<T, PositionConversionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PositionConversions and returns the data saved in the database.
     * @param {PositionConversionCreateManyAndReturnArgs} args - Arguments to create many PositionConversions.
     * @example
     * // Create many PositionConversions
     * const positionConversion = await prisma.positionConversion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PositionConversions and only return the `id`
     * const positionConversionWithIdOnly = await prisma.positionConversion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PositionConversionCreateManyAndReturnArgs>(args?: SelectSubset<T, PositionConversionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PositionConversionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PositionConversion.
     * @param {PositionConversionDeleteArgs} args - Arguments to delete one PositionConversion.
     * @example
     * // Delete one PositionConversion
     * const PositionConversion = await prisma.positionConversion.delete({
     *   where: {
     *     // ... filter to delete one PositionConversion
     *   }
     * })
     * 
     */
    delete<T extends PositionConversionDeleteArgs>(args: SelectSubset<T, PositionConversionDeleteArgs<ExtArgs>>): Prisma__PositionConversionClient<$Result.GetResult<Prisma.$PositionConversionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PositionConversion.
     * @param {PositionConversionUpdateArgs} args - Arguments to update one PositionConversion.
     * @example
     * // Update one PositionConversion
     * const positionConversion = await prisma.positionConversion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PositionConversionUpdateArgs>(args: SelectSubset<T, PositionConversionUpdateArgs<ExtArgs>>): Prisma__PositionConversionClient<$Result.GetResult<Prisma.$PositionConversionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PositionConversions.
     * @param {PositionConversionDeleteManyArgs} args - Arguments to filter PositionConversions to delete.
     * @example
     * // Delete a few PositionConversions
     * const { count } = await prisma.positionConversion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PositionConversionDeleteManyArgs>(args?: SelectSubset<T, PositionConversionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PositionConversions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionConversionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PositionConversions
     * const positionConversion = await prisma.positionConversion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PositionConversionUpdateManyArgs>(args: SelectSubset<T, PositionConversionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PositionConversions and returns the data updated in the database.
     * @param {PositionConversionUpdateManyAndReturnArgs} args - Arguments to update many PositionConversions.
     * @example
     * // Update many PositionConversions
     * const positionConversion = await prisma.positionConversion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PositionConversions and only return the `id`
     * const positionConversionWithIdOnly = await prisma.positionConversion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PositionConversionUpdateManyAndReturnArgs>(args: SelectSubset<T, PositionConversionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PositionConversionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PositionConversion.
     * @param {PositionConversionUpsertArgs} args - Arguments to update or create a PositionConversion.
     * @example
     * // Update or create a PositionConversion
     * const positionConversion = await prisma.positionConversion.upsert({
     *   create: {
     *     // ... data to create a PositionConversion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PositionConversion we want to update
     *   }
     * })
     */
    upsert<T extends PositionConversionUpsertArgs>(args: SelectSubset<T, PositionConversionUpsertArgs<ExtArgs>>): Prisma__PositionConversionClient<$Result.GetResult<Prisma.$PositionConversionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PositionConversions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionConversionCountArgs} args - Arguments to filter PositionConversions to count.
     * @example
     * // Count the number of PositionConversions
     * const count = await prisma.positionConversion.count({
     *   where: {
     *     // ... the filter for the PositionConversions we want to count
     *   }
     * })
    **/
    count<T extends PositionConversionCountArgs>(
      args?: Subset<T, PositionConversionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PositionConversionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PositionConversion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionConversionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PositionConversionAggregateArgs>(args: Subset<T, PositionConversionAggregateArgs>): Prisma.PrismaPromise<GetPositionConversionAggregateType<T>>

    /**
     * Group by PositionConversion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionConversionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PositionConversionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PositionConversionGroupByArgs['orderBy'] }
        : { orderBy?: PositionConversionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PositionConversionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPositionConversionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PositionConversion model
   */
  readonly fields: PositionConversionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PositionConversion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PositionConversionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PositionConversion model
   */
  interface PositionConversionFieldRefs {
    readonly id: FieldRef<"PositionConversion", 'String'>
    readonly txHash: FieldRef<"PositionConversion", 'String'>
    readonly logIndex: FieldRef<"PositionConversion", 'Int'>
    readonly user: FieldRef<"PositionConversion", 'String'>
    readonly fromMarketId: FieldRef<"PositionConversion", 'Int'>
    readonly toMarketId: FieldRef<"PositionConversion", 'Int'>
    readonly amount: FieldRef<"PositionConversion", 'Decimal'>
    readonly timestamp: FieldRef<"PositionConversion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PositionConversion findUnique
   */
  export type PositionConversionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PositionConversion
     */
    select?: PositionConversionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PositionConversion
     */
    omit?: PositionConversionOmit<ExtArgs> | null
    /**
     * Filter, which PositionConversion to fetch.
     */
    where: PositionConversionWhereUniqueInput
  }

  /**
   * PositionConversion findUniqueOrThrow
   */
  export type PositionConversionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PositionConversion
     */
    select?: PositionConversionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PositionConversion
     */
    omit?: PositionConversionOmit<ExtArgs> | null
    /**
     * Filter, which PositionConversion to fetch.
     */
    where: PositionConversionWhereUniqueInput
  }

  /**
   * PositionConversion findFirst
   */
  export type PositionConversionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PositionConversion
     */
    select?: PositionConversionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PositionConversion
     */
    omit?: PositionConversionOmit<ExtArgs> | null
    /**
     * Filter, which PositionConversion to fetch.
     */
    where?: PositionConversionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PositionConversions to fetch.
     */
    orderBy?: PositionConversionOrderByWithRelationInput | PositionConversionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PositionConversions.
     */
    cursor?: PositionConversionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PositionConversions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PositionConversions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PositionConversions.
     */
    distinct?: PositionConversionScalarFieldEnum | PositionConversionScalarFieldEnum[]
  }

  /**
   * PositionConversion findFirstOrThrow
   */
  export type PositionConversionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PositionConversion
     */
    select?: PositionConversionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PositionConversion
     */
    omit?: PositionConversionOmit<ExtArgs> | null
    /**
     * Filter, which PositionConversion to fetch.
     */
    where?: PositionConversionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PositionConversions to fetch.
     */
    orderBy?: PositionConversionOrderByWithRelationInput | PositionConversionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PositionConversions.
     */
    cursor?: PositionConversionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PositionConversions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PositionConversions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PositionConversions.
     */
    distinct?: PositionConversionScalarFieldEnum | PositionConversionScalarFieldEnum[]
  }

  /**
   * PositionConversion findMany
   */
  export type PositionConversionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PositionConversion
     */
    select?: PositionConversionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PositionConversion
     */
    omit?: PositionConversionOmit<ExtArgs> | null
    /**
     * Filter, which PositionConversions to fetch.
     */
    where?: PositionConversionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PositionConversions to fetch.
     */
    orderBy?: PositionConversionOrderByWithRelationInput | PositionConversionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PositionConversions.
     */
    cursor?: PositionConversionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PositionConversions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PositionConversions.
     */
    skip?: number
    distinct?: PositionConversionScalarFieldEnum | PositionConversionScalarFieldEnum[]
  }

  /**
   * PositionConversion create
   */
  export type PositionConversionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PositionConversion
     */
    select?: PositionConversionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PositionConversion
     */
    omit?: PositionConversionOmit<ExtArgs> | null
    /**
     * The data needed to create a PositionConversion.
     */
    data: XOR<PositionConversionCreateInput, PositionConversionUncheckedCreateInput>
  }

  /**
   * PositionConversion createMany
   */
  export type PositionConversionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PositionConversions.
     */
    data: PositionConversionCreateManyInput | PositionConversionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PositionConversion createManyAndReturn
   */
  export type PositionConversionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PositionConversion
     */
    select?: PositionConversionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PositionConversion
     */
    omit?: PositionConversionOmit<ExtArgs> | null
    /**
     * The data used to create many PositionConversions.
     */
    data: PositionConversionCreateManyInput | PositionConversionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PositionConversion update
   */
  export type PositionConversionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PositionConversion
     */
    select?: PositionConversionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PositionConversion
     */
    omit?: PositionConversionOmit<ExtArgs> | null
    /**
     * The data needed to update a PositionConversion.
     */
    data: XOR<PositionConversionUpdateInput, PositionConversionUncheckedUpdateInput>
    /**
     * Choose, which PositionConversion to update.
     */
    where: PositionConversionWhereUniqueInput
  }

  /**
   * PositionConversion updateMany
   */
  export type PositionConversionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PositionConversions.
     */
    data: XOR<PositionConversionUpdateManyMutationInput, PositionConversionUncheckedUpdateManyInput>
    /**
     * Filter which PositionConversions to update
     */
    where?: PositionConversionWhereInput
    /**
     * Limit how many PositionConversions to update.
     */
    limit?: number
  }

  /**
   * PositionConversion updateManyAndReturn
   */
  export type PositionConversionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PositionConversion
     */
    select?: PositionConversionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PositionConversion
     */
    omit?: PositionConversionOmit<ExtArgs> | null
    /**
     * The data used to update PositionConversions.
     */
    data: XOR<PositionConversionUpdateManyMutationInput, PositionConversionUncheckedUpdateManyInput>
    /**
     * Filter which PositionConversions to update
     */
    where?: PositionConversionWhereInput
    /**
     * Limit how many PositionConversions to update.
     */
    limit?: number
  }

  /**
   * PositionConversion upsert
   */
  export type PositionConversionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PositionConversion
     */
    select?: PositionConversionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PositionConversion
     */
    omit?: PositionConversionOmit<ExtArgs> | null
    /**
     * The filter to search for the PositionConversion to update in case it exists.
     */
    where: PositionConversionWhereUniqueInput
    /**
     * In case the PositionConversion found by the `where` argument doesn't exist, create a new PositionConversion with this data.
     */
    create: XOR<PositionConversionCreateInput, PositionConversionUncheckedCreateInput>
    /**
     * In case the PositionConversion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PositionConversionUpdateInput, PositionConversionUncheckedUpdateInput>
  }

  /**
   * PositionConversion delete
   */
  export type PositionConversionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PositionConversion
     */
    select?: PositionConversionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PositionConversion
     */
    omit?: PositionConversionOmit<ExtArgs> | null
    /**
     * Filter which PositionConversion to delete.
     */
    where: PositionConversionWhereUniqueInput
  }

  /**
   * PositionConversion deleteMany
   */
  export type PositionConversionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PositionConversions to delete
     */
    where?: PositionConversionWhereInput
    /**
     * Limit how many PositionConversions to delete.
     */
    limit?: number
  }

  /**
   * PositionConversion without action
   */
  export type PositionConversionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PositionConversion
     */
    select?: PositionConversionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PositionConversion
     */
    omit?: PositionConversionOmit<ExtArgs> | null
  }


  /**
   * Model MarketIntelligence
   */

  export type AggregateMarketIntelligence = {
    _count: MarketIntelligenceCountAggregateOutputType | null
    _avg: MarketIntelligenceAvgAggregateOutputType | null
    _sum: MarketIntelligenceSumAggregateOutputType | null
    _min: MarketIntelligenceMinAggregateOutputType | null
    _max: MarketIntelligenceMaxAggregateOutputType | null
  }

  export type MarketIntelligenceAvgAggregateOutputType = {
    id: number | null
    marketId: number | null
    aiProbability: number | null
    riskScore: number | null
  }

  export type MarketIntelligenceSumAggregateOutputType = {
    id: number | null
    marketId: number | null
    aiProbability: number | null
    riskScore: number | null
  }

  export type MarketIntelligenceMinAggregateOutputType = {
    id: number | null
    marketId: number | null
    narrative: string | null
    aiProbability: number | null
    riskScore: number | null
    sentiment: string | null
    updatedAt: Date | null
  }

  export type MarketIntelligenceMaxAggregateOutputType = {
    id: number | null
    marketId: number | null
    narrative: string | null
    aiProbability: number | null
    riskScore: number | null
    sentiment: string | null
    updatedAt: Date | null
  }

  export type MarketIntelligenceCountAggregateOutputType = {
    id: number
    marketId: number
    narrative: number
    aiProbability: number
    riskScore: number
    sentiment: number
    updatedAt: number
    _all: number
  }


  export type MarketIntelligenceAvgAggregateInputType = {
    id?: true
    marketId?: true
    aiProbability?: true
    riskScore?: true
  }

  export type MarketIntelligenceSumAggregateInputType = {
    id?: true
    marketId?: true
    aiProbability?: true
    riskScore?: true
  }

  export type MarketIntelligenceMinAggregateInputType = {
    id?: true
    marketId?: true
    narrative?: true
    aiProbability?: true
    riskScore?: true
    sentiment?: true
    updatedAt?: true
  }

  export type MarketIntelligenceMaxAggregateInputType = {
    id?: true
    marketId?: true
    narrative?: true
    aiProbability?: true
    riskScore?: true
    sentiment?: true
    updatedAt?: true
  }

  export type MarketIntelligenceCountAggregateInputType = {
    id?: true
    marketId?: true
    narrative?: true
    aiProbability?: true
    riskScore?: true
    sentiment?: true
    updatedAt?: true
    _all?: true
  }

  export type MarketIntelligenceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MarketIntelligence to aggregate.
     */
    where?: MarketIntelligenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketIntelligences to fetch.
     */
    orderBy?: MarketIntelligenceOrderByWithRelationInput | MarketIntelligenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MarketIntelligenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketIntelligences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketIntelligences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MarketIntelligences
    **/
    _count?: true | MarketIntelligenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MarketIntelligenceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MarketIntelligenceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MarketIntelligenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MarketIntelligenceMaxAggregateInputType
  }

  export type GetMarketIntelligenceAggregateType<T extends MarketIntelligenceAggregateArgs> = {
        [P in keyof T & keyof AggregateMarketIntelligence]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMarketIntelligence[P]>
      : GetScalarType<T[P], AggregateMarketIntelligence[P]>
  }




  export type MarketIntelligenceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarketIntelligenceWhereInput
    orderBy?: MarketIntelligenceOrderByWithAggregationInput | MarketIntelligenceOrderByWithAggregationInput[]
    by: MarketIntelligenceScalarFieldEnum[] | MarketIntelligenceScalarFieldEnum
    having?: MarketIntelligenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MarketIntelligenceCountAggregateInputType | true
    _avg?: MarketIntelligenceAvgAggregateInputType
    _sum?: MarketIntelligenceSumAggregateInputType
    _min?: MarketIntelligenceMinAggregateInputType
    _max?: MarketIntelligenceMaxAggregateInputType
  }

  export type MarketIntelligenceGroupByOutputType = {
    id: number
    marketId: number
    narrative: string
    aiProbability: number | null
    riskScore: number
    sentiment: string | null
    updatedAt: Date
    _count: MarketIntelligenceCountAggregateOutputType | null
    _avg: MarketIntelligenceAvgAggregateOutputType | null
    _sum: MarketIntelligenceSumAggregateOutputType | null
    _min: MarketIntelligenceMinAggregateOutputType | null
    _max: MarketIntelligenceMaxAggregateOutputType | null
  }

  type GetMarketIntelligenceGroupByPayload<T extends MarketIntelligenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MarketIntelligenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MarketIntelligenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MarketIntelligenceGroupByOutputType[P]>
            : GetScalarType<T[P], MarketIntelligenceGroupByOutputType[P]>
        }
      >
    >


  export type MarketIntelligenceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    marketId?: boolean
    narrative?: boolean
    aiProbability?: boolean
    riskScore?: boolean
    sentiment?: boolean
    updatedAt?: boolean
    market?: boolean | MarketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["marketIntelligence"]>

  export type MarketIntelligenceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    marketId?: boolean
    narrative?: boolean
    aiProbability?: boolean
    riskScore?: boolean
    sentiment?: boolean
    updatedAt?: boolean
    market?: boolean | MarketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["marketIntelligence"]>

  export type MarketIntelligenceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    marketId?: boolean
    narrative?: boolean
    aiProbability?: boolean
    riskScore?: boolean
    sentiment?: boolean
    updatedAt?: boolean
    market?: boolean | MarketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["marketIntelligence"]>

  export type MarketIntelligenceSelectScalar = {
    id?: boolean
    marketId?: boolean
    narrative?: boolean
    aiProbability?: boolean
    riskScore?: boolean
    sentiment?: boolean
    updatedAt?: boolean
  }

  export type MarketIntelligenceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "marketId" | "narrative" | "aiProbability" | "riskScore" | "sentiment" | "updatedAt", ExtArgs["result"]["marketIntelligence"]>
  export type MarketIntelligenceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    market?: boolean | MarketDefaultArgs<ExtArgs>
  }
  export type MarketIntelligenceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    market?: boolean | MarketDefaultArgs<ExtArgs>
  }
  export type MarketIntelligenceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    market?: boolean | MarketDefaultArgs<ExtArgs>
  }

  export type $MarketIntelligencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MarketIntelligence"
    objects: {
      market: Prisma.$MarketPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      marketId: number
      narrative: string
      aiProbability: number | null
      riskScore: number
      sentiment: string | null
      updatedAt: Date
    }, ExtArgs["result"]["marketIntelligence"]>
    composites: {}
  }

  type MarketIntelligenceGetPayload<S extends boolean | null | undefined | MarketIntelligenceDefaultArgs> = $Result.GetResult<Prisma.$MarketIntelligencePayload, S>

  type MarketIntelligenceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MarketIntelligenceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MarketIntelligenceCountAggregateInputType | true
    }

  export interface MarketIntelligenceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MarketIntelligence'], meta: { name: 'MarketIntelligence' } }
    /**
     * Find zero or one MarketIntelligence that matches the filter.
     * @param {MarketIntelligenceFindUniqueArgs} args - Arguments to find a MarketIntelligence
     * @example
     * // Get one MarketIntelligence
     * const marketIntelligence = await prisma.marketIntelligence.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MarketIntelligenceFindUniqueArgs>(args: SelectSubset<T, MarketIntelligenceFindUniqueArgs<ExtArgs>>): Prisma__MarketIntelligenceClient<$Result.GetResult<Prisma.$MarketIntelligencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MarketIntelligence that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MarketIntelligenceFindUniqueOrThrowArgs} args - Arguments to find a MarketIntelligence
     * @example
     * // Get one MarketIntelligence
     * const marketIntelligence = await prisma.marketIntelligence.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MarketIntelligenceFindUniqueOrThrowArgs>(args: SelectSubset<T, MarketIntelligenceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MarketIntelligenceClient<$Result.GetResult<Prisma.$MarketIntelligencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MarketIntelligence that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketIntelligenceFindFirstArgs} args - Arguments to find a MarketIntelligence
     * @example
     * // Get one MarketIntelligence
     * const marketIntelligence = await prisma.marketIntelligence.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MarketIntelligenceFindFirstArgs>(args?: SelectSubset<T, MarketIntelligenceFindFirstArgs<ExtArgs>>): Prisma__MarketIntelligenceClient<$Result.GetResult<Prisma.$MarketIntelligencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MarketIntelligence that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketIntelligenceFindFirstOrThrowArgs} args - Arguments to find a MarketIntelligence
     * @example
     * // Get one MarketIntelligence
     * const marketIntelligence = await prisma.marketIntelligence.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MarketIntelligenceFindFirstOrThrowArgs>(args?: SelectSubset<T, MarketIntelligenceFindFirstOrThrowArgs<ExtArgs>>): Prisma__MarketIntelligenceClient<$Result.GetResult<Prisma.$MarketIntelligencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MarketIntelligences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketIntelligenceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MarketIntelligences
     * const marketIntelligences = await prisma.marketIntelligence.findMany()
     * 
     * // Get first 10 MarketIntelligences
     * const marketIntelligences = await prisma.marketIntelligence.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const marketIntelligenceWithIdOnly = await prisma.marketIntelligence.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MarketIntelligenceFindManyArgs>(args?: SelectSubset<T, MarketIntelligenceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketIntelligencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MarketIntelligence.
     * @param {MarketIntelligenceCreateArgs} args - Arguments to create a MarketIntelligence.
     * @example
     * // Create one MarketIntelligence
     * const MarketIntelligence = await prisma.marketIntelligence.create({
     *   data: {
     *     // ... data to create a MarketIntelligence
     *   }
     * })
     * 
     */
    create<T extends MarketIntelligenceCreateArgs>(args: SelectSubset<T, MarketIntelligenceCreateArgs<ExtArgs>>): Prisma__MarketIntelligenceClient<$Result.GetResult<Prisma.$MarketIntelligencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MarketIntelligences.
     * @param {MarketIntelligenceCreateManyArgs} args - Arguments to create many MarketIntelligences.
     * @example
     * // Create many MarketIntelligences
     * const marketIntelligence = await prisma.marketIntelligence.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MarketIntelligenceCreateManyArgs>(args?: SelectSubset<T, MarketIntelligenceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MarketIntelligences and returns the data saved in the database.
     * @param {MarketIntelligenceCreateManyAndReturnArgs} args - Arguments to create many MarketIntelligences.
     * @example
     * // Create many MarketIntelligences
     * const marketIntelligence = await prisma.marketIntelligence.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MarketIntelligences and only return the `id`
     * const marketIntelligenceWithIdOnly = await prisma.marketIntelligence.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MarketIntelligenceCreateManyAndReturnArgs>(args?: SelectSubset<T, MarketIntelligenceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketIntelligencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MarketIntelligence.
     * @param {MarketIntelligenceDeleteArgs} args - Arguments to delete one MarketIntelligence.
     * @example
     * // Delete one MarketIntelligence
     * const MarketIntelligence = await prisma.marketIntelligence.delete({
     *   where: {
     *     // ... filter to delete one MarketIntelligence
     *   }
     * })
     * 
     */
    delete<T extends MarketIntelligenceDeleteArgs>(args: SelectSubset<T, MarketIntelligenceDeleteArgs<ExtArgs>>): Prisma__MarketIntelligenceClient<$Result.GetResult<Prisma.$MarketIntelligencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MarketIntelligence.
     * @param {MarketIntelligenceUpdateArgs} args - Arguments to update one MarketIntelligence.
     * @example
     * // Update one MarketIntelligence
     * const marketIntelligence = await prisma.marketIntelligence.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MarketIntelligenceUpdateArgs>(args: SelectSubset<T, MarketIntelligenceUpdateArgs<ExtArgs>>): Prisma__MarketIntelligenceClient<$Result.GetResult<Prisma.$MarketIntelligencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MarketIntelligences.
     * @param {MarketIntelligenceDeleteManyArgs} args - Arguments to filter MarketIntelligences to delete.
     * @example
     * // Delete a few MarketIntelligences
     * const { count } = await prisma.marketIntelligence.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MarketIntelligenceDeleteManyArgs>(args?: SelectSubset<T, MarketIntelligenceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MarketIntelligences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketIntelligenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MarketIntelligences
     * const marketIntelligence = await prisma.marketIntelligence.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MarketIntelligenceUpdateManyArgs>(args: SelectSubset<T, MarketIntelligenceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MarketIntelligences and returns the data updated in the database.
     * @param {MarketIntelligenceUpdateManyAndReturnArgs} args - Arguments to update many MarketIntelligences.
     * @example
     * // Update many MarketIntelligences
     * const marketIntelligence = await prisma.marketIntelligence.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MarketIntelligences and only return the `id`
     * const marketIntelligenceWithIdOnly = await prisma.marketIntelligence.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MarketIntelligenceUpdateManyAndReturnArgs>(args: SelectSubset<T, MarketIntelligenceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketIntelligencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MarketIntelligence.
     * @param {MarketIntelligenceUpsertArgs} args - Arguments to update or create a MarketIntelligence.
     * @example
     * // Update or create a MarketIntelligence
     * const marketIntelligence = await prisma.marketIntelligence.upsert({
     *   create: {
     *     // ... data to create a MarketIntelligence
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MarketIntelligence we want to update
     *   }
     * })
     */
    upsert<T extends MarketIntelligenceUpsertArgs>(args: SelectSubset<T, MarketIntelligenceUpsertArgs<ExtArgs>>): Prisma__MarketIntelligenceClient<$Result.GetResult<Prisma.$MarketIntelligencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MarketIntelligences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketIntelligenceCountArgs} args - Arguments to filter MarketIntelligences to count.
     * @example
     * // Count the number of MarketIntelligences
     * const count = await prisma.marketIntelligence.count({
     *   where: {
     *     // ... the filter for the MarketIntelligences we want to count
     *   }
     * })
    **/
    count<T extends MarketIntelligenceCountArgs>(
      args?: Subset<T, MarketIntelligenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MarketIntelligenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MarketIntelligence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketIntelligenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MarketIntelligenceAggregateArgs>(args: Subset<T, MarketIntelligenceAggregateArgs>): Prisma.PrismaPromise<GetMarketIntelligenceAggregateType<T>>

    /**
     * Group by MarketIntelligence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketIntelligenceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MarketIntelligenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MarketIntelligenceGroupByArgs['orderBy'] }
        : { orderBy?: MarketIntelligenceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MarketIntelligenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMarketIntelligenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MarketIntelligence model
   */
  readonly fields: MarketIntelligenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MarketIntelligence.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MarketIntelligenceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    market<T extends MarketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MarketDefaultArgs<ExtArgs>>): Prisma__MarketClient<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MarketIntelligence model
   */
  interface MarketIntelligenceFieldRefs {
    readonly id: FieldRef<"MarketIntelligence", 'Int'>
    readonly marketId: FieldRef<"MarketIntelligence", 'Int'>
    readonly narrative: FieldRef<"MarketIntelligence", 'String'>
    readonly aiProbability: FieldRef<"MarketIntelligence", 'Float'>
    readonly riskScore: FieldRef<"MarketIntelligence", 'Int'>
    readonly sentiment: FieldRef<"MarketIntelligence", 'String'>
    readonly updatedAt: FieldRef<"MarketIntelligence", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MarketIntelligence findUnique
   */
  export type MarketIntelligenceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketIntelligence
     */
    select?: MarketIntelligenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketIntelligence
     */
    omit?: MarketIntelligenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketIntelligenceInclude<ExtArgs> | null
    /**
     * Filter, which MarketIntelligence to fetch.
     */
    where: MarketIntelligenceWhereUniqueInput
  }

  /**
   * MarketIntelligence findUniqueOrThrow
   */
  export type MarketIntelligenceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketIntelligence
     */
    select?: MarketIntelligenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketIntelligence
     */
    omit?: MarketIntelligenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketIntelligenceInclude<ExtArgs> | null
    /**
     * Filter, which MarketIntelligence to fetch.
     */
    where: MarketIntelligenceWhereUniqueInput
  }

  /**
   * MarketIntelligence findFirst
   */
  export type MarketIntelligenceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketIntelligence
     */
    select?: MarketIntelligenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketIntelligence
     */
    omit?: MarketIntelligenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketIntelligenceInclude<ExtArgs> | null
    /**
     * Filter, which MarketIntelligence to fetch.
     */
    where?: MarketIntelligenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketIntelligences to fetch.
     */
    orderBy?: MarketIntelligenceOrderByWithRelationInput | MarketIntelligenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MarketIntelligences.
     */
    cursor?: MarketIntelligenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketIntelligences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketIntelligences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MarketIntelligences.
     */
    distinct?: MarketIntelligenceScalarFieldEnum | MarketIntelligenceScalarFieldEnum[]
  }

  /**
   * MarketIntelligence findFirstOrThrow
   */
  export type MarketIntelligenceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketIntelligence
     */
    select?: MarketIntelligenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketIntelligence
     */
    omit?: MarketIntelligenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketIntelligenceInclude<ExtArgs> | null
    /**
     * Filter, which MarketIntelligence to fetch.
     */
    where?: MarketIntelligenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketIntelligences to fetch.
     */
    orderBy?: MarketIntelligenceOrderByWithRelationInput | MarketIntelligenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MarketIntelligences.
     */
    cursor?: MarketIntelligenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketIntelligences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketIntelligences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MarketIntelligences.
     */
    distinct?: MarketIntelligenceScalarFieldEnum | MarketIntelligenceScalarFieldEnum[]
  }

  /**
   * MarketIntelligence findMany
   */
  export type MarketIntelligenceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketIntelligence
     */
    select?: MarketIntelligenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketIntelligence
     */
    omit?: MarketIntelligenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketIntelligenceInclude<ExtArgs> | null
    /**
     * Filter, which MarketIntelligences to fetch.
     */
    where?: MarketIntelligenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketIntelligences to fetch.
     */
    orderBy?: MarketIntelligenceOrderByWithRelationInput | MarketIntelligenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MarketIntelligences.
     */
    cursor?: MarketIntelligenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketIntelligences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketIntelligences.
     */
    skip?: number
    distinct?: MarketIntelligenceScalarFieldEnum | MarketIntelligenceScalarFieldEnum[]
  }

  /**
   * MarketIntelligence create
   */
  export type MarketIntelligenceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketIntelligence
     */
    select?: MarketIntelligenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketIntelligence
     */
    omit?: MarketIntelligenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketIntelligenceInclude<ExtArgs> | null
    /**
     * The data needed to create a MarketIntelligence.
     */
    data: XOR<MarketIntelligenceCreateInput, MarketIntelligenceUncheckedCreateInput>
  }

  /**
   * MarketIntelligence createMany
   */
  export type MarketIntelligenceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MarketIntelligences.
     */
    data: MarketIntelligenceCreateManyInput | MarketIntelligenceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MarketIntelligence createManyAndReturn
   */
  export type MarketIntelligenceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketIntelligence
     */
    select?: MarketIntelligenceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MarketIntelligence
     */
    omit?: MarketIntelligenceOmit<ExtArgs> | null
    /**
     * The data used to create many MarketIntelligences.
     */
    data: MarketIntelligenceCreateManyInput | MarketIntelligenceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketIntelligenceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MarketIntelligence update
   */
  export type MarketIntelligenceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketIntelligence
     */
    select?: MarketIntelligenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketIntelligence
     */
    omit?: MarketIntelligenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketIntelligenceInclude<ExtArgs> | null
    /**
     * The data needed to update a MarketIntelligence.
     */
    data: XOR<MarketIntelligenceUpdateInput, MarketIntelligenceUncheckedUpdateInput>
    /**
     * Choose, which MarketIntelligence to update.
     */
    where: MarketIntelligenceWhereUniqueInput
  }

  /**
   * MarketIntelligence updateMany
   */
  export type MarketIntelligenceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MarketIntelligences.
     */
    data: XOR<MarketIntelligenceUpdateManyMutationInput, MarketIntelligenceUncheckedUpdateManyInput>
    /**
     * Filter which MarketIntelligences to update
     */
    where?: MarketIntelligenceWhereInput
    /**
     * Limit how many MarketIntelligences to update.
     */
    limit?: number
  }

  /**
   * MarketIntelligence updateManyAndReturn
   */
  export type MarketIntelligenceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketIntelligence
     */
    select?: MarketIntelligenceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MarketIntelligence
     */
    omit?: MarketIntelligenceOmit<ExtArgs> | null
    /**
     * The data used to update MarketIntelligences.
     */
    data: XOR<MarketIntelligenceUpdateManyMutationInput, MarketIntelligenceUncheckedUpdateManyInput>
    /**
     * Filter which MarketIntelligences to update
     */
    where?: MarketIntelligenceWhereInput
    /**
     * Limit how many MarketIntelligences to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketIntelligenceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MarketIntelligence upsert
   */
  export type MarketIntelligenceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketIntelligence
     */
    select?: MarketIntelligenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketIntelligence
     */
    omit?: MarketIntelligenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketIntelligenceInclude<ExtArgs> | null
    /**
     * The filter to search for the MarketIntelligence to update in case it exists.
     */
    where: MarketIntelligenceWhereUniqueInput
    /**
     * In case the MarketIntelligence found by the `where` argument doesn't exist, create a new MarketIntelligence with this data.
     */
    create: XOR<MarketIntelligenceCreateInput, MarketIntelligenceUncheckedCreateInput>
    /**
     * In case the MarketIntelligence was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MarketIntelligenceUpdateInput, MarketIntelligenceUncheckedUpdateInput>
  }

  /**
   * MarketIntelligence delete
   */
  export type MarketIntelligenceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketIntelligence
     */
    select?: MarketIntelligenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketIntelligence
     */
    omit?: MarketIntelligenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketIntelligenceInclude<ExtArgs> | null
    /**
     * Filter which MarketIntelligence to delete.
     */
    where: MarketIntelligenceWhereUniqueInput
  }

  /**
   * MarketIntelligence deleteMany
   */
  export type MarketIntelligenceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MarketIntelligences to delete
     */
    where?: MarketIntelligenceWhereInput
    /**
     * Limit how many MarketIntelligences to delete.
     */
    limit?: number
  }

  /**
   * MarketIntelligence without action
   */
  export type MarketIntelligenceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketIntelligence
     */
    select?: MarketIntelligenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketIntelligence
     */
    omit?: MarketIntelligenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketIntelligenceInclude<ExtArgs> | null
  }


  /**
   * Model TradeInsight
   */

  export type AggregateTradeInsight = {
    _count: TradeInsightCountAggregateOutputType | null
    _avg: TradeInsightAvgAggregateOutputType | null
    _sum: TradeInsightSumAggregateOutputType | null
    _min: TradeInsightMinAggregateOutputType | null
    _max: TradeInsightMaxAggregateOutputType | null
  }

  export type TradeInsightAvgAggregateOutputType = {
    marketId: number | null
  }

  export type TradeInsightSumAggregateOutputType = {
    marketId: number | null
  }

  export type TradeInsightMinAggregateOutputType = {
    txHash: string | null
    marketId: number | null
    commentary: string | null
    impact: string | null
    createdAt: Date | null
  }

  export type TradeInsightMaxAggregateOutputType = {
    txHash: string | null
    marketId: number | null
    commentary: string | null
    impact: string | null
    createdAt: Date | null
  }

  export type TradeInsightCountAggregateOutputType = {
    txHash: number
    marketId: number
    commentary: number
    impact: number
    createdAt: number
    _all: number
  }


  export type TradeInsightAvgAggregateInputType = {
    marketId?: true
  }

  export type TradeInsightSumAggregateInputType = {
    marketId?: true
  }

  export type TradeInsightMinAggregateInputType = {
    txHash?: true
    marketId?: true
    commentary?: true
    impact?: true
    createdAt?: true
  }

  export type TradeInsightMaxAggregateInputType = {
    txHash?: true
    marketId?: true
    commentary?: true
    impact?: true
    createdAt?: true
  }

  export type TradeInsightCountAggregateInputType = {
    txHash?: true
    marketId?: true
    commentary?: true
    impact?: true
    createdAt?: true
    _all?: true
  }

  export type TradeInsightAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TradeInsight to aggregate.
     */
    where?: TradeInsightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TradeInsights to fetch.
     */
    orderBy?: TradeInsightOrderByWithRelationInput | TradeInsightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TradeInsightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TradeInsights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TradeInsights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TradeInsights
    **/
    _count?: true | TradeInsightCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TradeInsightAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TradeInsightSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TradeInsightMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TradeInsightMaxAggregateInputType
  }

  export type GetTradeInsightAggregateType<T extends TradeInsightAggregateArgs> = {
        [P in keyof T & keyof AggregateTradeInsight]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTradeInsight[P]>
      : GetScalarType<T[P], AggregateTradeInsight[P]>
  }




  export type TradeInsightGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TradeInsightWhereInput
    orderBy?: TradeInsightOrderByWithAggregationInput | TradeInsightOrderByWithAggregationInput[]
    by: TradeInsightScalarFieldEnum[] | TradeInsightScalarFieldEnum
    having?: TradeInsightScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TradeInsightCountAggregateInputType | true
    _avg?: TradeInsightAvgAggregateInputType
    _sum?: TradeInsightSumAggregateInputType
    _min?: TradeInsightMinAggregateInputType
    _max?: TradeInsightMaxAggregateInputType
  }

  export type TradeInsightGroupByOutputType = {
    txHash: string
    marketId: number
    commentary: string
    impact: string
    createdAt: Date
    _count: TradeInsightCountAggregateOutputType | null
    _avg: TradeInsightAvgAggregateOutputType | null
    _sum: TradeInsightSumAggregateOutputType | null
    _min: TradeInsightMinAggregateOutputType | null
    _max: TradeInsightMaxAggregateOutputType | null
  }

  type GetTradeInsightGroupByPayload<T extends TradeInsightGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TradeInsightGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TradeInsightGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TradeInsightGroupByOutputType[P]>
            : GetScalarType<T[P], TradeInsightGroupByOutputType[P]>
        }
      >
    >


  export type TradeInsightSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    txHash?: boolean
    marketId?: boolean
    commentary?: boolean
    impact?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["tradeInsight"]>

  export type TradeInsightSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    txHash?: boolean
    marketId?: boolean
    commentary?: boolean
    impact?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["tradeInsight"]>

  export type TradeInsightSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    txHash?: boolean
    marketId?: boolean
    commentary?: boolean
    impact?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["tradeInsight"]>

  export type TradeInsightSelectScalar = {
    txHash?: boolean
    marketId?: boolean
    commentary?: boolean
    impact?: boolean
    createdAt?: boolean
  }

  export type TradeInsightOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"txHash" | "marketId" | "commentary" | "impact" | "createdAt", ExtArgs["result"]["tradeInsight"]>

  export type $TradeInsightPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TradeInsight"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      txHash: string
      marketId: number
      commentary: string
      impact: string
      createdAt: Date
    }, ExtArgs["result"]["tradeInsight"]>
    composites: {}
  }

  type TradeInsightGetPayload<S extends boolean | null | undefined | TradeInsightDefaultArgs> = $Result.GetResult<Prisma.$TradeInsightPayload, S>

  type TradeInsightCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TradeInsightFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TradeInsightCountAggregateInputType | true
    }

  export interface TradeInsightDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TradeInsight'], meta: { name: 'TradeInsight' } }
    /**
     * Find zero or one TradeInsight that matches the filter.
     * @param {TradeInsightFindUniqueArgs} args - Arguments to find a TradeInsight
     * @example
     * // Get one TradeInsight
     * const tradeInsight = await prisma.tradeInsight.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TradeInsightFindUniqueArgs>(args: SelectSubset<T, TradeInsightFindUniqueArgs<ExtArgs>>): Prisma__TradeInsightClient<$Result.GetResult<Prisma.$TradeInsightPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TradeInsight that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TradeInsightFindUniqueOrThrowArgs} args - Arguments to find a TradeInsight
     * @example
     * // Get one TradeInsight
     * const tradeInsight = await prisma.tradeInsight.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TradeInsightFindUniqueOrThrowArgs>(args: SelectSubset<T, TradeInsightFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TradeInsightClient<$Result.GetResult<Prisma.$TradeInsightPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TradeInsight that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeInsightFindFirstArgs} args - Arguments to find a TradeInsight
     * @example
     * // Get one TradeInsight
     * const tradeInsight = await prisma.tradeInsight.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TradeInsightFindFirstArgs>(args?: SelectSubset<T, TradeInsightFindFirstArgs<ExtArgs>>): Prisma__TradeInsightClient<$Result.GetResult<Prisma.$TradeInsightPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TradeInsight that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeInsightFindFirstOrThrowArgs} args - Arguments to find a TradeInsight
     * @example
     * // Get one TradeInsight
     * const tradeInsight = await prisma.tradeInsight.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TradeInsightFindFirstOrThrowArgs>(args?: SelectSubset<T, TradeInsightFindFirstOrThrowArgs<ExtArgs>>): Prisma__TradeInsightClient<$Result.GetResult<Prisma.$TradeInsightPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TradeInsights that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeInsightFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TradeInsights
     * const tradeInsights = await prisma.tradeInsight.findMany()
     * 
     * // Get first 10 TradeInsights
     * const tradeInsights = await prisma.tradeInsight.findMany({ take: 10 })
     * 
     * // Only select the `txHash`
     * const tradeInsightWithTxHashOnly = await prisma.tradeInsight.findMany({ select: { txHash: true } })
     * 
     */
    findMany<T extends TradeInsightFindManyArgs>(args?: SelectSubset<T, TradeInsightFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TradeInsightPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TradeInsight.
     * @param {TradeInsightCreateArgs} args - Arguments to create a TradeInsight.
     * @example
     * // Create one TradeInsight
     * const TradeInsight = await prisma.tradeInsight.create({
     *   data: {
     *     // ... data to create a TradeInsight
     *   }
     * })
     * 
     */
    create<T extends TradeInsightCreateArgs>(args: SelectSubset<T, TradeInsightCreateArgs<ExtArgs>>): Prisma__TradeInsightClient<$Result.GetResult<Prisma.$TradeInsightPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TradeInsights.
     * @param {TradeInsightCreateManyArgs} args - Arguments to create many TradeInsights.
     * @example
     * // Create many TradeInsights
     * const tradeInsight = await prisma.tradeInsight.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TradeInsightCreateManyArgs>(args?: SelectSubset<T, TradeInsightCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TradeInsights and returns the data saved in the database.
     * @param {TradeInsightCreateManyAndReturnArgs} args - Arguments to create many TradeInsights.
     * @example
     * // Create many TradeInsights
     * const tradeInsight = await prisma.tradeInsight.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TradeInsights and only return the `txHash`
     * const tradeInsightWithTxHashOnly = await prisma.tradeInsight.createManyAndReturn({
     *   select: { txHash: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TradeInsightCreateManyAndReturnArgs>(args?: SelectSubset<T, TradeInsightCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TradeInsightPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TradeInsight.
     * @param {TradeInsightDeleteArgs} args - Arguments to delete one TradeInsight.
     * @example
     * // Delete one TradeInsight
     * const TradeInsight = await prisma.tradeInsight.delete({
     *   where: {
     *     // ... filter to delete one TradeInsight
     *   }
     * })
     * 
     */
    delete<T extends TradeInsightDeleteArgs>(args: SelectSubset<T, TradeInsightDeleteArgs<ExtArgs>>): Prisma__TradeInsightClient<$Result.GetResult<Prisma.$TradeInsightPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TradeInsight.
     * @param {TradeInsightUpdateArgs} args - Arguments to update one TradeInsight.
     * @example
     * // Update one TradeInsight
     * const tradeInsight = await prisma.tradeInsight.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TradeInsightUpdateArgs>(args: SelectSubset<T, TradeInsightUpdateArgs<ExtArgs>>): Prisma__TradeInsightClient<$Result.GetResult<Prisma.$TradeInsightPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TradeInsights.
     * @param {TradeInsightDeleteManyArgs} args - Arguments to filter TradeInsights to delete.
     * @example
     * // Delete a few TradeInsights
     * const { count } = await prisma.tradeInsight.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TradeInsightDeleteManyArgs>(args?: SelectSubset<T, TradeInsightDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TradeInsights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeInsightUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TradeInsights
     * const tradeInsight = await prisma.tradeInsight.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TradeInsightUpdateManyArgs>(args: SelectSubset<T, TradeInsightUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TradeInsights and returns the data updated in the database.
     * @param {TradeInsightUpdateManyAndReturnArgs} args - Arguments to update many TradeInsights.
     * @example
     * // Update many TradeInsights
     * const tradeInsight = await prisma.tradeInsight.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TradeInsights and only return the `txHash`
     * const tradeInsightWithTxHashOnly = await prisma.tradeInsight.updateManyAndReturn({
     *   select: { txHash: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TradeInsightUpdateManyAndReturnArgs>(args: SelectSubset<T, TradeInsightUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TradeInsightPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TradeInsight.
     * @param {TradeInsightUpsertArgs} args - Arguments to update or create a TradeInsight.
     * @example
     * // Update or create a TradeInsight
     * const tradeInsight = await prisma.tradeInsight.upsert({
     *   create: {
     *     // ... data to create a TradeInsight
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TradeInsight we want to update
     *   }
     * })
     */
    upsert<T extends TradeInsightUpsertArgs>(args: SelectSubset<T, TradeInsightUpsertArgs<ExtArgs>>): Prisma__TradeInsightClient<$Result.GetResult<Prisma.$TradeInsightPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TradeInsights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeInsightCountArgs} args - Arguments to filter TradeInsights to count.
     * @example
     * // Count the number of TradeInsights
     * const count = await prisma.tradeInsight.count({
     *   where: {
     *     // ... the filter for the TradeInsights we want to count
     *   }
     * })
    **/
    count<T extends TradeInsightCountArgs>(
      args?: Subset<T, TradeInsightCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TradeInsightCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TradeInsight.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeInsightAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TradeInsightAggregateArgs>(args: Subset<T, TradeInsightAggregateArgs>): Prisma.PrismaPromise<GetTradeInsightAggregateType<T>>

    /**
     * Group by TradeInsight.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeInsightGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TradeInsightGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TradeInsightGroupByArgs['orderBy'] }
        : { orderBy?: TradeInsightGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TradeInsightGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTradeInsightGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TradeInsight model
   */
  readonly fields: TradeInsightFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TradeInsight.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TradeInsightClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TradeInsight model
   */
  interface TradeInsightFieldRefs {
    readonly txHash: FieldRef<"TradeInsight", 'String'>
    readonly marketId: FieldRef<"TradeInsight", 'Int'>
    readonly commentary: FieldRef<"TradeInsight", 'String'>
    readonly impact: FieldRef<"TradeInsight", 'String'>
    readonly createdAt: FieldRef<"TradeInsight", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TradeInsight findUnique
   */
  export type TradeInsightFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradeInsight
     */
    select?: TradeInsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradeInsight
     */
    omit?: TradeInsightOmit<ExtArgs> | null
    /**
     * Filter, which TradeInsight to fetch.
     */
    where: TradeInsightWhereUniqueInput
  }

  /**
   * TradeInsight findUniqueOrThrow
   */
  export type TradeInsightFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradeInsight
     */
    select?: TradeInsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradeInsight
     */
    omit?: TradeInsightOmit<ExtArgs> | null
    /**
     * Filter, which TradeInsight to fetch.
     */
    where: TradeInsightWhereUniqueInput
  }

  /**
   * TradeInsight findFirst
   */
  export type TradeInsightFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradeInsight
     */
    select?: TradeInsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradeInsight
     */
    omit?: TradeInsightOmit<ExtArgs> | null
    /**
     * Filter, which TradeInsight to fetch.
     */
    where?: TradeInsightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TradeInsights to fetch.
     */
    orderBy?: TradeInsightOrderByWithRelationInput | TradeInsightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TradeInsights.
     */
    cursor?: TradeInsightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TradeInsights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TradeInsights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TradeInsights.
     */
    distinct?: TradeInsightScalarFieldEnum | TradeInsightScalarFieldEnum[]
  }

  /**
   * TradeInsight findFirstOrThrow
   */
  export type TradeInsightFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradeInsight
     */
    select?: TradeInsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradeInsight
     */
    omit?: TradeInsightOmit<ExtArgs> | null
    /**
     * Filter, which TradeInsight to fetch.
     */
    where?: TradeInsightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TradeInsights to fetch.
     */
    orderBy?: TradeInsightOrderByWithRelationInput | TradeInsightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TradeInsights.
     */
    cursor?: TradeInsightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TradeInsights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TradeInsights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TradeInsights.
     */
    distinct?: TradeInsightScalarFieldEnum | TradeInsightScalarFieldEnum[]
  }

  /**
   * TradeInsight findMany
   */
  export type TradeInsightFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradeInsight
     */
    select?: TradeInsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradeInsight
     */
    omit?: TradeInsightOmit<ExtArgs> | null
    /**
     * Filter, which TradeInsights to fetch.
     */
    where?: TradeInsightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TradeInsights to fetch.
     */
    orderBy?: TradeInsightOrderByWithRelationInput | TradeInsightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TradeInsights.
     */
    cursor?: TradeInsightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TradeInsights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TradeInsights.
     */
    skip?: number
    distinct?: TradeInsightScalarFieldEnum | TradeInsightScalarFieldEnum[]
  }

  /**
   * TradeInsight create
   */
  export type TradeInsightCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradeInsight
     */
    select?: TradeInsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradeInsight
     */
    omit?: TradeInsightOmit<ExtArgs> | null
    /**
     * The data needed to create a TradeInsight.
     */
    data: XOR<TradeInsightCreateInput, TradeInsightUncheckedCreateInput>
  }

  /**
   * TradeInsight createMany
   */
  export type TradeInsightCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TradeInsights.
     */
    data: TradeInsightCreateManyInput | TradeInsightCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TradeInsight createManyAndReturn
   */
  export type TradeInsightCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradeInsight
     */
    select?: TradeInsightSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TradeInsight
     */
    omit?: TradeInsightOmit<ExtArgs> | null
    /**
     * The data used to create many TradeInsights.
     */
    data: TradeInsightCreateManyInput | TradeInsightCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TradeInsight update
   */
  export type TradeInsightUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradeInsight
     */
    select?: TradeInsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradeInsight
     */
    omit?: TradeInsightOmit<ExtArgs> | null
    /**
     * The data needed to update a TradeInsight.
     */
    data: XOR<TradeInsightUpdateInput, TradeInsightUncheckedUpdateInput>
    /**
     * Choose, which TradeInsight to update.
     */
    where: TradeInsightWhereUniqueInput
  }

  /**
   * TradeInsight updateMany
   */
  export type TradeInsightUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TradeInsights.
     */
    data: XOR<TradeInsightUpdateManyMutationInput, TradeInsightUncheckedUpdateManyInput>
    /**
     * Filter which TradeInsights to update
     */
    where?: TradeInsightWhereInput
    /**
     * Limit how many TradeInsights to update.
     */
    limit?: number
  }

  /**
   * TradeInsight updateManyAndReturn
   */
  export type TradeInsightUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradeInsight
     */
    select?: TradeInsightSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TradeInsight
     */
    omit?: TradeInsightOmit<ExtArgs> | null
    /**
     * The data used to update TradeInsights.
     */
    data: XOR<TradeInsightUpdateManyMutationInput, TradeInsightUncheckedUpdateManyInput>
    /**
     * Filter which TradeInsights to update
     */
    where?: TradeInsightWhereInput
    /**
     * Limit how many TradeInsights to update.
     */
    limit?: number
  }

  /**
   * TradeInsight upsert
   */
  export type TradeInsightUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradeInsight
     */
    select?: TradeInsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradeInsight
     */
    omit?: TradeInsightOmit<ExtArgs> | null
    /**
     * The filter to search for the TradeInsight to update in case it exists.
     */
    where: TradeInsightWhereUniqueInput
    /**
     * In case the TradeInsight found by the `where` argument doesn't exist, create a new TradeInsight with this data.
     */
    create: XOR<TradeInsightCreateInput, TradeInsightUncheckedCreateInput>
    /**
     * In case the TradeInsight was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TradeInsightUpdateInput, TradeInsightUncheckedUpdateInput>
  }

  /**
   * TradeInsight delete
   */
  export type TradeInsightDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradeInsight
     */
    select?: TradeInsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradeInsight
     */
    omit?: TradeInsightOmit<ExtArgs> | null
    /**
     * Filter which TradeInsight to delete.
     */
    where: TradeInsightWhereUniqueInput
  }

  /**
   * TradeInsight deleteMany
   */
  export type TradeInsightDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TradeInsights to delete
     */
    where?: TradeInsightWhereInput
    /**
     * Limit how many TradeInsights to delete.
     */
    limit?: number
  }

  /**
   * TradeInsight without action
   */
  export type TradeInsightDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradeInsight
     */
    select?: TradeInsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradeInsight
     */
    omit?: TradeInsightOmit<ExtArgs> | null
  }


  /**
   * Model TraderProfile
   */

  export type AggregateTraderProfile = {
    _count: TraderProfileCountAggregateOutputType | null
    _avg: TraderProfileAvgAggregateOutputType | null
    _sum: TraderProfileSumAggregateOutputType | null
    _min: TraderProfileMinAggregateOutputType | null
    _max: TraderProfileMaxAggregateOutputType | null
  }

  export type TraderProfileAvgAggregateOutputType = {
    winRate: number | null
    totalVolume: Decimal | null
  }

  export type TraderProfileSumAggregateOutputType = {
    winRate: number | null
    totalVolume: Decimal | null
  }

  export type TraderProfileMinAggregateOutputType = {
    address: string | null
    aiPersona: string | null
    winRate: number | null
    totalVolume: Decimal | null
    lastSeen: Date | null
  }

  export type TraderProfileMaxAggregateOutputType = {
    address: string | null
    aiPersona: string | null
    winRate: number | null
    totalVolume: Decimal | null
    lastSeen: Date | null
  }

  export type TraderProfileCountAggregateOutputType = {
    address: number
    tags: number
    aiPersona: number
    winRate: number
    totalVolume: number
    lastSeen: number
    _all: number
  }


  export type TraderProfileAvgAggregateInputType = {
    winRate?: true
    totalVolume?: true
  }

  export type TraderProfileSumAggregateInputType = {
    winRate?: true
    totalVolume?: true
  }

  export type TraderProfileMinAggregateInputType = {
    address?: true
    aiPersona?: true
    winRate?: true
    totalVolume?: true
    lastSeen?: true
  }

  export type TraderProfileMaxAggregateInputType = {
    address?: true
    aiPersona?: true
    winRate?: true
    totalVolume?: true
    lastSeen?: true
  }

  export type TraderProfileCountAggregateInputType = {
    address?: true
    tags?: true
    aiPersona?: true
    winRate?: true
    totalVolume?: true
    lastSeen?: true
    _all?: true
  }

  export type TraderProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TraderProfile to aggregate.
     */
    where?: TraderProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TraderProfiles to fetch.
     */
    orderBy?: TraderProfileOrderByWithRelationInput | TraderProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TraderProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TraderProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TraderProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TraderProfiles
    **/
    _count?: true | TraderProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TraderProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TraderProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TraderProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TraderProfileMaxAggregateInputType
  }

  export type GetTraderProfileAggregateType<T extends TraderProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateTraderProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTraderProfile[P]>
      : GetScalarType<T[P], AggregateTraderProfile[P]>
  }




  export type TraderProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TraderProfileWhereInput
    orderBy?: TraderProfileOrderByWithAggregationInput | TraderProfileOrderByWithAggregationInput[]
    by: TraderProfileScalarFieldEnum[] | TraderProfileScalarFieldEnum
    having?: TraderProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TraderProfileCountAggregateInputType | true
    _avg?: TraderProfileAvgAggregateInputType
    _sum?: TraderProfileSumAggregateInputType
    _min?: TraderProfileMinAggregateInputType
    _max?: TraderProfileMaxAggregateInputType
  }

  export type TraderProfileGroupByOutputType = {
    address: string
    tags: string[]
    aiPersona: string | null
    winRate: number | null
    totalVolume: Decimal
    lastSeen: Date
    _count: TraderProfileCountAggregateOutputType | null
    _avg: TraderProfileAvgAggregateOutputType | null
    _sum: TraderProfileSumAggregateOutputType | null
    _min: TraderProfileMinAggregateOutputType | null
    _max: TraderProfileMaxAggregateOutputType | null
  }

  type GetTraderProfileGroupByPayload<T extends TraderProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TraderProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TraderProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TraderProfileGroupByOutputType[P]>
            : GetScalarType<T[P], TraderProfileGroupByOutputType[P]>
        }
      >
    >


  export type TraderProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    address?: boolean
    tags?: boolean
    aiPersona?: boolean
    winRate?: boolean
    totalVolume?: boolean
    lastSeen?: boolean
  }, ExtArgs["result"]["traderProfile"]>

  export type TraderProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    address?: boolean
    tags?: boolean
    aiPersona?: boolean
    winRate?: boolean
    totalVolume?: boolean
    lastSeen?: boolean
  }, ExtArgs["result"]["traderProfile"]>

  export type TraderProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    address?: boolean
    tags?: boolean
    aiPersona?: boolean
    winRate?: boolean
    totalVolume?: boolean
    lastSeen?: boolean
  }, ExtArgs["result"]["traderProfile"]>

  export type TraderProfileSelectScalar = {
    address?: boolean
    tags?: boolean
    aiPersona?: boolean
    winRate?: boolean
    totalVolume?: boolean
    lastSeen?: boolean
  }

  export type TraderProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"address" | "tags" | "aiPersona" | "winRate" | "totalVolume" | "lastSeen", ExtArgs["result"]["traderProfile"]>

  export type $TraderProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TraderProfile"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      address: string
      tags: string[]
      aiPersona: string | null
      winRate: number | null
      totalVolume: Prisma.Decimal
      lastSeen: Date
    }, ExtArgs["result"]["traderProfile"]>
    composites: {}
  }

  type TraderProfileGetPayload<S extends boolean | null | undefined | TraderProfileDefaultArgs> = $Result.GetResult<Prisma.$TraderProfilePayload, S>

  type TraderProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TraderProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TraderProfileCountAggregateInputType | true
    }

  export interface TraderProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TraderProfile'], meta: { name: 'TraderProfile' } }
    /**
     * Find zero or one TraderProfile that matches the filter.
     * @param {TraderProfileFindUniqueArgs} args - Arguments to find a TraderProfile
     * @example
     * // Get one TraderProfile
     * const traderProfile = await prisma.traderProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TraderProfileFindUniqueArgs>(args: SelectSubset<T, TraderProfileFindUniqueArgs<ExtArgs>>): Prisma__TraderProfileClient<$Result.GetResult<Prisma.$TraderProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TraderProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TraderProfileFindUniqueOrThrowArgs} args - Arguments to find a TraderProfile
     * @example
     * // Get one TraderProfile
     * const traderProfile = await prisma.traderProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TraderProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, TraderProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TraderProfileClient<$Result.GetResult<Prisma.$TraderProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TraderProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TraderProfileFindFirstArgs} args - Arguments to find a TraderProfile
     * @example
     * // Get one TraderProfile
     * const traderProfile = await prisma.traderProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TraderProfileFindFirstArgs>(args?: SelectSubset<T, TraderProfileFindFirstArgs<ExtArgs>>): Prisma__TraderProfileClient<$Result.GetResult<Prisma.$TraderProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TraderProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TraderProfileFindFirstOrThrowArgs} args - Arguments to find a TraderProfile
     * @example
     * // Get one TraderProfile
     * const traderProfile = await prisma.traderProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TraderProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, TraderProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__TraderProfileClient<$Result.GetResult<Prisma.$TraderProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TraderProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TraderProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TraderProfiles
     * const traderProfiles = await prisma.traderProfile.findMany()
     * 
     * // Get first 10 TraderProfiles
     * const traderProfiles = await prisma.traderProfile.findMany({ take: 10 })
     * 
     * // Only select the `address`
     * const traderProfileWithAddressOnly = await prisma.traderProfile.findMany({ select: { address: true } })
     * 
     */
    findMany<T extends TraderProfileFindManyArgs>(args?: SelectSubset<T, TraderProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TraderProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TraderProfile.
     * @param {TraderProfileCreateArgs} args - Arguments to create a TraderProfile.
     * @example
     * // Create one TraderProfile
     * const TraderProfile = await prisma.traderProfile.create({
     *   data: {
     *     // ... data to create a TraderProfile
     *   }
     * })
     * 
     */
    create<T extends TraderProfileCreateArgs>(args: SelectSubset<T, TraderProfileCreateArgs<ExtArgs>>): Prisma__TraderProfileClient<$Result.GetResult<Prisma.$TraderProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TraderProfiles.
     * @param {TraderProfileCreateManyArgs} args - Arguments to create many TraderProfiles.
     * @example
     * // Create many TraderProfiles
     * const traderProfile = await prisma.traderProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TraderProfileCreateManyArgs>(args?: SelectSubset<T, TraderProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TraderProfiles and returns the data saved in the database.
     * @param {TraderProfileCreateManyAndReturnArgs} args - Arguments to create many TraderProfiles.
     * @example
     * // Create many TraderProfiles
     * const traderProfile = await prisma.traderProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TraderProfiles and only return the `address`
     * const traderProfileWithAddressOnly = await prisma.traderProfile.createManyAndReturn({
     *   select: { address: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TraderProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, TraderProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TraderProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TraderProfile.
     * @param {TraderProfileDeleteArgs} args - Arguments to delete one TraderProfile.
     * @example
     * // Delete one TraderProfile
     * const TraderProfile = await prisma.traderProfile.delete({
     *   where: {
     *     // ... filter to delete one TraderProfile
     *   }
     * })
     * 
     */
    delete<T extends TraderProfileDeleteArgs>(args: SelectSubset<T, TraderProfileDeleteArgs<ExtArgs>>): Prisma__TraderProfileClient<$Result.GetResult<Prisma.$TraderProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TraderProfile.
     * @param {TraderProfileUpdateArgs} args - Arguments to update one TraderProfile.
     * @example
     * // Update one TraderProfile
     * const traderProfile = await prisma.traderProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TraderProfileUpdateArgs>(args: SelectSubset<T, TraderProfileUpdateArgs<ExtArgs>>): Prisma__TraderProfileClient<$Result.GetResult<Prisma.$TraderProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TraderProfiles.
     * @param {TraderProfileDeleteManyArgs} args - Arguments to filter TraderProfiles to delete.
     * @example
     * // Delete a few TraderProfiles
     * const { count } = await prisma.traderProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TraderProfileDeleteManyArgs>(args?: SelectSubset<T, TraderProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TraderProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TraderProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TraderProfiles
     * const traderProfile = await prisma.traderProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TraderProfileUpdateManyArgs>(args: SelectSubset<T, TraderProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TraderProfiles and returns the data updated in the database.
     * @param {TraderProfileUpdateManyAndReturnArgs} args - Arguments to update many TraderProfiles.
     * @example
     * // Update many TraderProfiles
     * const traderProfile = await prisma.traderProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TraderProfiles and only return the `address`
     * const traderProfileWithAddressOnly = await prisma.traderProfile.updateManyAndReturn({
     *   select: { address: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TraderProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, TraderProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TraderProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TraderProfile.
     * @param {TraderProfileUpsertArgs} args - Arguments to update or create a TraderProfile.
     * @example
     * // Update or create a TraderProfile
     * const traderProfile = await prisma.traderProfile.upsert({
     *   create: {
     *     // ... data to create a TraderProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TraderProfile we want to update
     *   }
     * })
     */
    upsert<T extends TraderProfileUpsertArgs>(args: SelectSubset<T, TraderProfileUpsertArgs<ExtArgs>>): Prisma__TraderProfileClient<$Result.GetResult<Prisma.$TraderProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TraderProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TraderProfileCountArgs} args - Arguments to filter TraderProfiles to count.
     * @example
     * // Count the number of TraderProfiles
     * const count = await prisma.traderProfile.count({
     *   where: {
     *     // ... the filter for the TraderProfiles we want to count
     *   }
     * })
    **/
    count<T extends TraderProfileCountArgs>(
      args?: Subset<T, TraderProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TraderProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TraderProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TraderProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TraderProfileAggregateArgs>(args: Subset<T, TraderProfileAggregateArgs>): Prisma.PrismaPromise<GetTraderProfileAggregateType<T>>

    /**
     * Group by TraderProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TraderProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TraderProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TraderProfileGroupByArgs['orderBy'] }
        : { orderBy?: TraderProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TraderProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTraderProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TraderProfile model
   */
  readonly fields: TraderProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TraderProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TraderProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TraderProfile model
   */
  interface TraderProfileFieldRefs {
    readonly address: FieldRef<"TraderProfile", 'String'>
    readonly tags: FieldRef<"TraderProfile", 'String[]'>
    readonly aiPersona: FieldRef<"TraderProfile", 'String'>
    readonly winRate: FieldRef<"TraderProfile", 'Float'>
    readonly totalVolume: FieldRef<"TraderProfile", 'Decimal'>
    readonly lastSeen: FieldRef<"TraderProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TraderProfile findUnique
   */
  export type TraderProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TraderProfile
     */
    select?: TraderProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TraderProfile
     */
    omit?: TraderProfileOmit<ExtArgs> | null
    /**
     * Filter, which TraderProfile to fetch.
     */
    where: TraderProfileWhereUniqueInput
  }

  /**
   * TraderProfile findUniqueOrThrow
   */
  export type TraderProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TraderProfile
     */
    select?: TraderProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TraderProfile
     */
    omit?: TraderProfileOmit<ExtArgs> | null
    /**
     * Filter, which TraderProfile to fetch.
     */
    where: TraderProfileWhereUniqueInput
  }

  /**
   * TraderProfile findFirst
   */
  export type TraderProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TraderProfile
     */
    select?: TraderProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TraderProfile
     */
    omit?: TraderProfileOmit<ExtArgs> | null
    /**
     * Filter, which TraderProfile to fetch.
     */
    where?: TraderProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TraderProfiles to fetch.
     */
    orderBy?: TraderProfileOrderByWithRelationInput | TraderProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TraderProfiles.
     */
    cursor?: TraderProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TraderProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TraderProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TraderProfiles.
     */
    distinct?: TraderProfileScalarFieldEnum | TraderProfileScalarFieldEnum[]
  }

  /**
   * TraderProfile findFirstOrThrow
   */
  export type TraderProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TraderProfile
     */
    select?: TraderProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TraderProfile
     */
    omit?: TraderProfileOmit<ExtArgs> | null
    /**
     * Filter, which TraderProfile to fetch.
     */
    where?: TraderProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TraderProfiles to fetch.
     */
    orderBy?: TraderProfileOrderByWithRelationInput | TraderProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TraderProfiles.
     */
    cursor?: TraderProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TraderProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TraderProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TraderProfiles.
     */
    distinct?: TraderProfileScalarFieldEnum | TraderProfileScalarFieldEnum[]
  }

  /**
   * TraderProfile findMany
   */
  export type TraderProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TraderProfile
     */
    select?: TraderProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TraderProfile
     */
    omit?: TraderProfileOmit<ExtArgs> | null
    /**
     * Filter, which TraderProfiles to fetch.
     */
    where?: TraderProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TraderProfiles to fetch.
     */
    orderBy?: TraderProfileOrderByWithRelationInput | TraderProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TraderProfiles.
     */
    cursor?: TraderProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TraderProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TraderProfiles.
     */
    skip?: number
    distinct?: TraderProfileScalarFieldEnum | TraderProfileScalarFieldEnum[]
  }

  /**
   * TraderProfile create
   */
  export type TraderProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TraderProfile
     */
    select?: TraderProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TraderProfile
     */
    omit?: TraderProfileOmit<ExtArgs> | null
    /**
     * The data needed to create a TraderProfile.
     */
    data: XOR<TraderProfileCreateInput, TraderProfileUncheckedCreateInput>
  }

  /**
   * TraderProfile createMany
   */
  export type TraderProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TraderProfiles.
     */
    data: TraderProfileCreateManyInput | TraderProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TraderProfile createManyAndReturn
   */
  export type TraderProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TraderProfile
     */
    select?: TraderProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TraderProfile
     */
    omit?: TraderProfileOmit<ExtArgs> | null
    /**
     * The data used to create many TraderProfiles.
     */
    data: TraderProfileCreateManyInput | TraderProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TraderProfile update
   */
  export type TraderProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TraderProfile
     */
    select?: TraderProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TraderProfile
     */
    omit?: TraderProfileOmit<ExtArgs> | null
    /**
     * The data needed to update a TraderProfile.
     */
    data: XOR<TraderProfileUpdateInput, TraderProfileUncheckedUpdateInput>
    /**
     * Choose, which TraderProfile to update.
     */
    where: TraderProfileWhereUniqueInput
  }

  /**
   * TraderProfile updateMany
   */
  export type TraderProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TraderProfiles.
     */
    data: XOR<TraderProfileUpdateManyMutationInput, TraderProfileUncheckedUpdateManyInput>
    /**
     * Filter which TraderProfiles to update
     */
    where?: TraderProfileWhereInput
    /**
     * Limit how many TraderProfiles to update.
     */
    limit?: number
  }

  /**
   * TraderProfile updateManyAndReturn
   */
  export type TraderProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TraderProfile
     */
    select?: TraderProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TraderProfile
     */
    omit?: TraderProfileOmit<ExtArgs> | null
    /**
     * The data used to update TraderProfiles.
     */
    data: XOR<TraderProfileUpdateManyMutationInput, TraderProfileUncheckedUpdateManyInput>
    /**
     * Filter which TraderProfiles to update
     */
    where?: TraderProfileWhereInput
    /**
     * Limit how many TraderProfiles to update.
     */
    limit?: number
  }

  /**
   * TraderProfile upsert
   */
  export type TraderProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TraderProfile
     */
    select?: TraderProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TraderProfile
     */
    omit?: TraderProfileOmit<ExtArgs> | null
    /**
     * The filter to search for the TraderProfile to update in case it exists.
     */
    where: TraderProfileWhereUniqueInput
    /**
     * In case the TraderProfile found by the `where` argument doesn't exist, create a new TraderProfile with this data.
     */
    create: XOR<TraderProfileCreateInput, TraderProfileUncheckedCreateInput>
    /**
     * In case the TraderProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TraderProfileUpdateInput, TraderProfileUncheckedUpdateInput>
  }

  /**
   * TraderProfile delete
   */
  export type TraderProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TraderProfile
     */
    select?: TraderProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TraderProfile
     */
    omit?: TraderProfileOmit<ExtArgs> | null
    /**
     * Filter which TraderProfile to delete.
     */
    where: TraderProfileWhereUniqueInput
  }

  /**
   * TraderProfile deleteMany
   */
  export type TraderProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TraderProfiles to delete
     */
    where?: TraderProfileWhereInput
    /**
     * Limit how many TraderProfiles to delete.
     */
    limit?: number
  }

  /**
   * TraderProfile without action
   */
  export type TraderProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TraderProfile
     */
    select?: TraderProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TraderProfile
     */
    omit?: TraderProfileOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const MarketScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    conditionId: 'conditionId',
    questionId: 'questionId',
    oracle: 'oracle',
    outcomeCount: 'outcomeCount',
    enableNegRisk: 'enableNegRisk',
    yesTokenId: 'yesTokenId',
    noTokenId: 'noTokenId',
    collateralToken: 'collateralToken',
    title: 'title',
    status: 'status',
    createdAt: 'createdAt',
    resolvedAt: 'resolvedAt'
  };

  export type MarketScalarFieldEnum = (typeof MarketScalarFieldEnum)[keyof typeof MarketScalarFieldEnum]


  export const TradeScalarFieldEnum: {
    txHash: 'txHash',
    logIndex: 'logIndex',
    marketId: 'marketId',
    tokenId: 'tokenId',
    outcome: 'outcome',
    side: 'side',
    price: 'price',
    size: 'size',
    maker: 'maker',
    taker: 'taker',
    timestamp: 'timestamp'
  };

  export type TradeScalarFieldEnum = (typeof TradeScalarFieldEnum)[keyof typeof TradeScalarFieldEnum]


  export const SyncStateScalarFieldEnum: {
    key: 'key',
    lastBlock: 'lastBlock',
    updatedAt: 'updatedAt'
  };

  export type SyncStateScalarFieldEnum = (typeof SyncStateScalarFieldEnum)[keyof typeof SyncStateScalarFieldEnum]


  export const PositionActivityScalarFieldEnum: {
    id: 'id',
    txHash: 'txHash',
    logIndex: 'logIndex',
    marketId: 'marketId',
    user: 'user',
    type: 'type',
    amount: 'amount',
    timestamp: 'timestamp'
  };

  export type PositionActivityScalarFieldEnum = (typeof PositionActivityScalarFieldEnum)[keyof typeof PositionActivityScalarFieldEnum]


  export const RedemptionScalarFieldEnum: {
    id: 'id',
    txHash: 'txHash',
    logIndex: 'logIndex',
    marketId: 'marketId',
    user: 'user',
    payout: 'payout',
    timestamp: 'timestamp'
  };

  export type RedemptionScalarFieldEnum = (typeof RedemptionScalarFieldEnum)[keyof typeof RedemptionScalarFieldEnum]


  export const PositionConversionScalarFieldEnum: {
    id: 'id',
    txHash: 'txHash',
    logIndex: 'logIndex',
    user: 'user',
    fromMarketId: 'fromMarketId',
    toMarketId: 'toMarketId',
    amount: 'amount',
    timestamp: 'timestamp'
  };

  export type PositionConversionScalarFieldEnum = (typeof PositionConversionScalarFieldEnum)[keyof typeof PositionConversionScalarFieldEnum]


  export const MarketIntelligenceScalarFieldEnum: {
    id: 'id',
    marketId: 'marketId',
    narrative: 'narrative',
    aiProbability: 'aiProbability',
    riskScore: 'riskScore',
    sentiment: 'sentiment',
    updatedAt: 'updatedAt'
  };

  export type MarketIntelligenceScalarFieldEnum = (typeof MarketIntelligenceScalarFieldEnum)[keyof typeof MarketIntelligenceScalarFieldEnum]


  export const TradeInsightScalarFieldEnum: {
    txHash: 'txHash',
    marketId: 'marketId',
    commentary: 'commentary',
    impact: 'impact',
    createdAt: 'createdAt'
  };

  export type TradeInsightScalarFieldEnum = (typeof TradeInsightScalarFieldEnum)[keyof typeof TradeInsightScalarFieldEnum]


  export const TraderProfileScalarFieldEnum: {
    address: 'address',
    tags: 'tags',
    aiPersona: 'aiPersona',
    winRate: 'winRate',
    totalVolume: 'totalVolume',
    lastSeen: 'lastSeen'
  };

  export type TraderProfileScalarFieldEnum = (typeof TraderProfileScalarFieldEnum)[keyof typeof TraderProfileScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type MarketWhereInput = {
    AND?: MarketWhereInput | MarketWhereInput[]
    OR?: MarketWhereInput[]
    NOT?: MarketWhereInput | MarketWhereInput[]
    id?: IntFilter<"Market"> | number
    slug?: StringNullableFilter<"Market"> | string | null
    conditionId?: StringFilter<"Market"> | string
    questionId?: StringFilter<"Market"> | string
    oracle?: StringFilter<"Market"> | string
    outcomeCount?: IntFilter<"Market"> | number
    enableNegRisk?: BoolFilter<"Market"> | boolean
    yesTokenId?: StringFilter<"Market"> | string
    noTokenId?: StringFilter<"Market"> | string
    collateralToken?: StringFilter<"Market"> | string
    title?: StringNullableFilter<"Market"> | string | null
    status?: StringFilter<"Market"> | string
    createdAt?: DateTimeFilter<"Market"> | Date | string
    resolvedAt?: DateTimeNullableFilter<"Market"> | Date | string | null
    trades?: TradeListRelationFilter
    positionActivities?: PositionActivityListRelationFilter
    redemptions?: RedemptionListRelationFilter
    intelligence?: XOR<MarketIntelligenceNullableScalarRelationFilter, MarketIntelligenceWhereInput> | null
  }

  export type MarketOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrderInput | SortOrder
    conditionId?: SortOrder
    questionId?: SortOrder
    oracle?: SortOrder
    outcomeCount?: SortOrder
    enableNegRisk?: SortOrder
    yesTokenId?: SortOrder
    noTokenId?: SortOrder
    collateralToken?: SortOrder
    title?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    resolvedAt?: SortOrderInput | SortOrder
    trades?: TradeOrderByRelationAggregateInput
    positionActivities?: PositionActivityOrderByRelationAggregateInput
    redemptions?: RedemptionOrderByRelationAggregateInput
    intelligence?: MarketIntelligenceOrderByWithRelationInput
  }

  export type MarketWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    conditionId?: string
    yesTokenId?: string
    noTokenId?: string
    AND?: MarketWhereInput | MarketWhereInput[]
    OR?: MarketWhereInput[]
    NOT?: MarketWhereInput | MarketWhereInput[]
    questionId?: StringFilter<"Market"> | string
    oracle?: StringFilter<"Market"> | string
    outcomeCount?: IntFilter<"Market"> | number
    enableNegRisk?: BoolFilter<"Market"> | boolean
    collateralToken?: StringFilter<"Market"> | string
    title?: StringNullableFilter<"Market"> | string | null
    status?: StringFilter<"Market"> | string
    createdAt?: DateTimeFilter<"Market"> | Date | string
    resolvedAt?: DateTimeNullableFilter<"Market"> | Date | string | null
    trades?: TradeListRelationFilter
    positionActivities?: PositionActivityListRelationFilter
    redemptions?: RedemptionListRelationFilter
    intelligence?: XOR<MarketIntelligenceNullableScalarRelationFilter, MarketIntelligenceWhereInput> | null
  }, "id" | "slug" | "conditionId" | "yesTokenId" | "noTokenId">

  export type MarketOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrderInput | SortOrder
    conditionId?: SortOrder
    questionId?: SortOrder
    oracle?: SortOrder
    outcomeCount?: SortOrder
    enableNegRisk?: SortOrder
    yesTokenId?: SortOrder
    noTokenId?: SortOrder
    collateralToken?: SortOrder
    title?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    resolvedAt?: SortOrderInput | SortOrder
    _count?: MarketCountOrderByAggregateInput
    _avg?: MarketAvgOrderByAggregateInput
    _max?: MarketMaxOrderByAggregateInput
    _min?: MarketMinOrderByAggregateInput
    _sum?: MarketSumOrderByAggregateInput
  }

  export type MarketScalarWhereWithAggregatesInput = {
    AND?: MarketScalarWhereWithAggregatesInput | MarketScalarWhereWithAggregatesInput[]
    OR?: MarketScalarWhereWithAggregatesInput[]
    NOT?: MarketScalarWhereWithAggregatesInput | MarketScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Market"> | number
    slug?: StringNullableWithAggregatesFilter<"Market"> | string | null
    conditionId?: StringWithAggregatesFilter<"Market"> | string
    questionId?: StringWithAggregatesFilter<"Market"> | string
    oracle?: StringWithAggregatesFilter<"Market"> | string
    outcomeCount?: IntWithAggregatesFilter<"Market"> | number
    enableNegRisk?: BoolWithAggregatesFilter<"Market"> | boolean
    yesTokenId?: StringWithAggregatesFilter<"Market"> | string
    noTokenId?: StringWithAggregatesFilter<"Market"> | string
    collateralToken?: StringWithAggregatesFilter<"Market"> | string
    title?: StringNullableWithAggregatesFilter<"Market"> | string | null
    status?: StringWithAggregatesFilter<"Market"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Market"> | Date | string
    resolvedAt?: DateTimeNullableWithAggregatesFilter<"Market"> | Date | string | null
  }

  export type TradeWhereInput = {
    AND?: TradeWhereInput | TradeWhereInput[]
    OR?: TradeWhereInput[]
    NOT?: TradeWhereInput | TradeWhereInput[]
    txHash?: StringFilter<"Trade"> | string
    logIndex?: IntFilter<"Trade"> | number
    marketId?: IntFilter<"Trade"> | number
    tokenId?: StringFilter<"Trade"> | string
    outcome?: StringNullableFilter<"Trade"> | string | null
    side?: StringFilter<"Trade"> | string
    price?: DecimalFilter<"Trade"> | Decimal | DecimalJsLike | number | string
    size?: DecimalFilter<"Trade"> | Decimal | DecimalJsLike | number | string
    maker?: StringFilter<"Trade"> | string
    taker?: StringFilter<"Trade"> | string
    timestamp?: DateTimeFilter<"Trade"> | Date | string
    market?: XOR<MarketScalarRelationFilter, MarketWhereInput>
  }

  export type TradeOrderByWithRelationInput = {
    txHash?: SortOrder
    logIndex?: SortOrder
    marketId?: SortOrder
    tokenId?: SortOrder
    outcome?: SortOrderInput | SortOrder
    side?: SortOrder
    price?: SortOrder
    size?: SortOrder
    maker?: SortOrder
    taker?: SortOrder
    timestamp?: SortOrder
    market?: MarketOrderByWithRelationInput
  }

  export type TradeWhereUniqueInput = Prisma.AtLeast<{
    txHash_logIndex?: TradeTxHashLogIndexCompoundUniqueInput
    AND?: TradeWhereInput | TradeWhereInput[]
    OR?: TradeWhereInput[]
    NOT?: TradeWhereInput | TradeWhereInput[]
    txHash?: StringFilter<"Trade"> | string
    logIndex?: IntFilter<"Trade"> | number
    marketId?: IntFilter<"Trade"> | number
    tokenId?: StringFilter<"Trade"> | string
    outcome?: StringNullableFilter<"Trade"> | string | null
    side?: StringFilter<"Trade"> | string
    price?: DecimalFilter<"Trade"> | Decimal | DecimalJsLike | number | string
    size?: DecimalFilter<"Trade"> | Decimal | DecimalJsLike | number | string
    maker?: StringFilter<"Trade"> | string
    taker?: StringFilter<"Trade"> | string
    timestamp?: DateTimeFilter<"Trade"> | Date | string
    market?: XOR<MarketScalarRelationFilter, MarketWhereInput>
  }, "txHash_logIndex">

  export type TradeOrderByWithAggregationInput = {
    txHash?: SortOrder
    logIndex?: SortOrder
    marketId?: SortOrder
    tokenId?: SortOrder
    outcome?: SortOrderInput | SortOrder
    side?: SortOrder
    price?: SortOrder
    size?: SortOrder
    maker?: SortOrder
    taker?: SortOrder
    timestamp?: SortOrder
    _count?: TradeCountOrderByAggregateInput
    _avg?: TradeAvgOrderByAggregateInput
    _max?: TradeMaxOrderByAggregateInput
    _min?: TradeMinOrderByAggregateInput
    _sum?: TradeSumOrderByAggregateInput
  }

  export type TradeScalarWhereWithAggregatesInput = {
    AND?: TradeScalarWhereWithAggregatesInput | TradeScalarWhereWithAggregatesInput[]
    OR?: TradeScalarWhereWithAggregatesInput[]
    NOT?: TradeScalarWhereWithAggregatesInput | TradeScalarWhereWithAggregatesInput[]
    txHash?: StringWithAggregatesFilter<"Trade"> | string
    logIndex?: IntWithAggregatesFilter<"Trade"> | number
    marketId?: IntWithAggregatesFilter<"Trade"> | number
    tokenId?: StringWithAggregatesFilter<"Trade"> | string
    outcome?: StringNullableWithAggregatesFilter<"Trade"> | string | null
    side?: StringWithAggregatesFilter<"Trade"> | string
    price?: DecimalWithAggregatesFilter<"Trade"> | Decimal | DecimalJsLike | number | string
    size?: DecimalWithAggregatesFilter<"Trade"> | Decimal | DecimalJsLike | number | string
    maker?: StringWithAggregatesFilter<"Trade"> | string
    taker?: StringWithAggregatesFilter<"Trade"> | string
    timestamp?: DateTimeWithAggregatesFilter<"Trade"> | Date | string
  }

  export type SyncStateWhereInput = {
    AND?: SyncStateWhereInput | SyncStateWhereInput[]
    OR?: SyncStateWhereInput[]
    NOT?: SyncStateWhereInput | SyncStateWhereInput[]
    key?: StringFilter<"SyncState"> | string
    lastBlock?: BigIntFilter<"SyncState"> | bigint | number
    updatedAt?: DateTimeFilter<"SyncState"> | Date | string
  }

  export type SyncStateOrderByWithRelationInput = {
    key?: SortOrder
    lastBlock?: SortOrder
    updatedAt?: SortOrder
  }

  export type SyncStateWhereUniqueInput = Prisma.AtLeast<{
    key?: string
    AND?: SyncStateWhereInput | SyncStateWhereInput[]
    OR?: SyncStateWhereInput[]
    NOT?: SyncStateWhereInput | SyncStateWhereInput[]
    lastBlock?: BigIntFilter<"SyncState"> | bigint | number
    updatedAt?: DateTimeFilter<"SyncState"> | Date | string
  }, "key">

  export type SyncStateOrderByWithAggregationInput = {
    key?: SortOrder
    lastBlock?: SortOrder
    updatedAt?: SortOrder
    _count?: SyncStateCountOrderByAggregateInput
    _avg?: SyncStateAvgOrderByAggregateInput
    _max?: SyncStateMaxOrderByAggregateInput
    _min?: SyncStateMinOrderByAggregateInput
    _sum?: SyncStateSumOrderByAggregateInput
  }

  export type SyncStateScalarWhereWithAggregatesInput = {
    AND?: SyncStateScalarWhereWithAggregatesInput | SyncStateScalarWhereWithAggregatesInput[]
    OR?: SyncStateScalarWhereWithAggregatesInput[]
    NOT?: SyncStateScalarWhereWithAggregatesInput | SyncStateScalarWhereWithAggregatesInput[]
    key?: StringWithAggregatesFilter<"SyncState"> | string
    lastBlock?: BigIntWithAggregatesFilter<"SyncState"> | bigint | number
    updatedAt?: DateTimeWithAggregatesFilter<"SyncState"> | Date | string
  }

  export type PositionActivityWhereInput = {
    AND?: PositionActivityWhereInput | PositionActivityWhereInput[]
    OR?: PositionActivityWhereInput[]
    NOT?: PositionActivityWhereInput | PositionActivityWhereInput[]
    id?: StringFilter<"PositionActivity"> | string
    txHash?: StringFilter<"PositionActivity"> | string
    logIndex?: IntFilter<"PositionActivity"> | number
    marketId?: IntFilter<"PositionActivity"> | number
    user?: StringFilter<"PositionActivity"> | string
    type?: StringFilter<"PositionActivity"> | string
    amount?: DecimalFilter<"PositionActivity"> | Decimal | DecimalJsLike | number | string
    timestamp?: DateTimeFilter<"PositionActivity"> | Date | string
    market?: XOR<MarketScalarRelationFilter, MarketWhereInput>
  }

  export type PositionActivityOrderByWithRelationInput = {
    id?: SortOrder
    txHash?: SortOrder
    logIndex?: SortOrder
    marketId?: SortOrder
    user?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    timestamp?: SortOrder
    market?: MarketOrderByWithRelationInput
  }

  export type PositionActivityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    txHash_logIndex?: PositionActivityTxHashLogIndexCompoundUniqueInput
    AND?: PositionActivityWhereInput | PositionActivityWhereInput[]
    OR?: PositionActivityWhereInput[]
    NOT?: PositionActivityWhereInput | PositionActivityWhereInput[]
    txHash?: StringFilter<"PositionActivity"> | string
    logIndex?: IntFilter<"PositionActivity"> | number
    marketId?: IntFilter<"PositionActivity"> | number
    user?: StringFilter<"PositionActivity"> | string
    type?: StringFilter<"PositionActivity"> | string
    amount?: DecimalFilter<"PositionActivity"> | Decimal | DecimalJsLike | number | string
    timestamp?: DateTimeFilter<"PositionActivity"> | Date | string
    market?: XOR<MarketScalarRelationFilter, MarketWhereInput>
  }, "id" | "txHash_logIndex">

  export type PositionActivityOrderByWithAggregationInput = {
    id?: SortOrder
    txHash?: SortOrder
    logIndex?: SortOrder
    marketId?: SortOrder
    user?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    timestamp?: SortOrder
    _count?: PositionActivityCountOrderByAggregateInput
    _avg?: PositionActivityAvgOrderByAggregateInput
    _max?: PositionActivityMaxOrderByAggregateInput
    _min?: PositionActivityMinOrderByAggregateInput
    _sum?: PositionActivitySumOrderByAggregateInput
  }

  export type PositionActivityScalarWhereWithAggregatesInput = {
    AND?: PositionActivityScalarWhereWithAggregatesInput | PositionActivityScalarWhereWithAggregatesInput[]
    OR?: PositionActivityScalarWhereWithAggregatesInput[]
    NOT?: PositionActivityScalarWhereWithAggregatesInput | PositionActivityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PositionActivity"> | string
    txHash?: StringWithAggregatesFilter<"PositionActivity"> | string
    logIndex?: IntWithAggregatesFilter<"PositionActivity"> | number
    marketId?: IntWithAggregatesFilter<"PositionActivity"> | number
    user?: StringWithAggregatesFilter<"PositionActivity"> | string
    type?: StringWithAggregatesFilter<"PositionActivity"> | string
    amount?: DecimalWithAggregatesFilter<"PositionActivity"> | Decimal | DecimalJsLike | number | string
    timestamp?: DateTimeWithAggregatesFilter<"PositionActivity"> | Date | string
  }

  export type RedemptionWhereInput = {
    AND?: RedemptionWhereInput | RedemptionWhereInput[]
    OR?: RedemptionWhereInput[]
    NOT?: RedemptionWhereInput | RedemptionWhereInput[]
    id?: StringFilter<"Redemption"> | string
    txHash?: StringFilter<"Redemption"> | string
    logIndex?: IntFilter<"Redemption"> | number
    marketId?: IntFilter<"Redemption"> | number
    user?: StringFilter<"Redemption"> | string
    payout?: DecimalFilter<"Redemption"> | Decimal | DecimalJsLike | number | string
    timestamp?: DateTimeFilter<"Redemption"> | Date | string
    market?: XOR<MarketScalarRelationFilter, MarketWhereInput>
  }

  export type RedemptionOrderByWithRelationInput = {
    id?: SortOrder
    txHash?: SortOrder
    logIndex?: SortOrder
    marketId?: SortOrder
    user?: SortOrder
    payout?: SortOrder
    timestamp?: SortOrder
    market?: MarketOrderByWithRelationInput
  }

  export type RedemptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    txHash_logIndex?: RedemptionTxHashLogIndexCompoundUniqueInput
    AND?: RedemptionWhereInput | RedemptionWhereInput[]
    OR?: RedemptionWhereInput[]
    NOT?: RedemptionWhereInput | RedemptionWhereInput[]
    txHash?: StringFilter<"Redemption"> | string
    logIndex?: IntFilter<"Redemption"> | number
    marketId?: IntFilter<"Redemption"> | number
    user?: StringFilter<"Redemption"> | string
    payout?: DecimalFilter<"Redemption"> | Decimal | DecimalJsLike | number | string
    timestamp?: DateTimeFilter<"Redemption"> | Date | string
    market?: XOR<MarketScalarRelationFilter, MarketWhereInput>
  }, "id" | "txHash_logIndex">

  export type RedemptionOrderByWithAggregationInput = {
    id?: SortOrder
    txHash?: SortOrder
    logIndex?: SortOrder
    marketId?: SortOrder
    user?: SortOrder
    payout?: SortOrder
    timestamp?: SortOrder
    _count?: RedemptionCountOrderByAggregateInput
    _avg?: RedemptionAvgOrderByAggregateInput
    _max?: RedemptionMaxOrderByAggregateInput
    _min?: RedemptionMinOrderByAggregateInput
    _sum?: RedemptionSumOrderByAggregateInput
  }

  export type RedemptionScalarWhereWithAggregatesInput = {
    AND?: RedemptionScalarWhereWithAggregatesInput | RedemptionScalarWhereWithAggregatesInput[]
    OR?: RedemptionScalarWhereWithAggregatesInput[]
    NOT?: RedemptionScalarWhereWithAggregatesInput | RedemptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Redemption"> | string
    txHash?: StringWithAggregatesFilter<"Redemption"> | string
    logIndex?: IntWithAggregatesFilter<"Redemption"> | number
    marketId?: IntWithAggregatesFilter<"Redemption"> | number
    user?: StringWithAggregatesFilter<"Redemption"> | string
    payout?: DecimalWithAggregatesFilter<"Redemption"> | Decimal | DecimalJsLike | number | string
    timestamp?: DateTimeWithAggregatesFilter<"Redemption"> | Date | string
  }

  export type PositionConversionWhereInput = {
    AND?: PositionConversionWhereInput | PositionConversionWhereInput[]
    OR?: PositionConversionWhereInput[]
    NOT?: PositionConversionWhereInput | PositionConversionWhereInput[]
    id?: StringFilter<"PositionConversion"> | string
    txHash?: StringFilter<"PositionConversion"> | string
    logIndex?: IntFilter<"PositionConversion"> | number
    user?: StringFilter<"PositionConversion"> | string
    fromMarketId?: IntFilter<"PositionConversion"> | number
    toMarketId?: IntFilter<"PositionConversion"> | number
    amount?: DecimalFilter<"PositionConversion"> | Decimal | DecimalJsLike | number | string
    timestamp?: DateTimeFilter<"PositionConversion"> | Date | string
  }

  export type PositionConversionOrderByWithRelationInput = {
    id?: SortOrder
    txHash?: SortOrder
    logIndex?: SortOrder
    user?: SortOrder
    fromMarketId?: SortOrder
    toMarketId?: SortOrder
    amount?: SortOrder
    timestamp?: SortOrder
  }

  export type PositionConversionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    txHash_logIndex?: PositionConversionTxHashLogIndexCompoundUniqueInput
    AND?: PositionConversionWhereInput | PositionConversionWhereInput[]
    OR?: PositionConversionWhereInput[]
    NOT?: PositionConversionWhereInput | PositionConversionWhereInput[]
    txHash?: StringFilter<"PositionConversion"> | string
    logIndex?: IntFilter<"PositionConversion"> | number
    user?: StringFilter<"PositionConversion"> | string
    fromMarketId?: IntFilter<"PositionConversion"> | number
    toMarketId?: IntFilter<"PositionConversion"> | number
    amount?: DecimalFilter<"PositionConversion"> | Decimal | DecimalJsLike | number | string
    timestamp?: DateTimeFilter<"PositionConversion"> | Date | string
  }, "id" | "txHash_logIndex">

  export type PositionConversionOrderByWithAggregationInput = {
    id?: SortOrder
    txHash?: SortOrder
    logIndex?: SortOrder
    user?: SortOrder
    fromMarketId?: SortOrder
    toMarketId?: SortOrder
    amount?: SortOrder
    timestamp?: SortOrder
    _count?: PositionConversionCountOrderByAggregateInput
    _avg?: PositionConversionAvgOrderByAggregateInput
    _max?: PositionConversionMaxOrderByAggregateInput
    _min?: PositionConversionMinOrderByAggregateInput
    _sum?: PositionConversionSumOrderByAggregateInput
  }

  export type PositionConversionScalarWhereWithAggregatesInput = {
    AND?: PositionConversionScalarWhereWithAggregatesInput | PositionConversionScalarWhereWithAggregatesInput[]
    OR?: PositionConversionScalarWhereWithAggregatesInput[]
    NOT?: PositionConversionScalarWhereWithAggregatesInput | PositionConversionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PositionConversion"> | string
    txHash?: StringWithAggregatesFilter<"PositionConversion"> | string
    logIndex?: IntWithAggregatesFilter<"PositionConversion"> | number
    user?: StringWithAggregatesFilter<"PositionConversion"> | string
    fromMarketId?: IntWithAggregatesFilter<"PositionConversion"> | number
    toMarketId?: IntWithAggregatesFilter<"PositionConversion"> | number
    amount?: DecimalWithAggregatesFilter<"PositionConversion"> | Decimal | DecimalJsLike | number | string
    timestamp?: DateTimeWithAggregatesFilter<"PositionConversion"> | Date | string
  }

  export type MarketIntelligenceWhereInput = {
    AND?: MarketIntelligenceWhereInput | MarketIntelligenceWhereInput[]
    OR?: MarketIntelligenceWhereInput[]
    NOT?: MarketIntelligenceWhereInput | MarketIntelligenceWhereInput[]
    id?: IntFilter<"MarketIntelligence"> | number
    marketId?: IntFilter<"MarketIntelligence"> | number
    narrative?: StringFilter<"MarketIntelligence"> | string
    aiProbability?: FloatNullableFilter<"MarketIntelligence"> | number | null
    riskScore?: IntFilter<"MarketIntelligence"> | number
    sentiment?: StringNullableFilter<"MarketIntelligence"> | string | null
    updatedAt?: DateTimeFilter<"MarketIntelligence"> | Date | string
    market?: XOR<MarketScalarRelationFilter, MarketWhereInput>
  }

  export type MarketIntelligenceOrderByWithRelationInput = {
    id?: SortOrder
    marketId?: SortOrder
    narrative?: SortOrder
    aiProbability?: SortOrderInput | SortOrder
    riskScore?: SortOrder
    sentiment?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    market?: MarketOrderByWithRelationInput
  }

  export type MarketIntelligenceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    marketId?: number
    AND?: MarketIntelligenceWhereInput | MarketIntelligenceWhereInput[]
    OR?: MarketIntelligenceWhereInput[]
    NOT?: MarketIntelligenceWhereInput | MarketIntelligenceWhereInput[]
    narrative?: StringFilter<"MarketIntelligence"> | string
    aiProbability?: FloatNullableFilter<"MarketIntelligence"> | number | null
    riskScore?: IntFilter<"MarketIntelligence"> | number
    sentiment?: StringNullableFilter<"MarketIntelligence"> | string | null
    updatedAt?: DateTimeFilter<"MarketIntelligence"> | Date | string
    market?: XOR<MarketScalarRelationFilter, MarketWhereInput>
  }, "id" | "marketId">

  export type MarketIntelligenceOrderByWithAggregationInput = {
    id?: SortOrder
    marketId?: SortOrder
    narrative?: SortOrder
    aiProbability?: SortOrderInput | SortOrder
    riskScore?: SortOrder
    sentiment?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    _count?: MarketIntelligenceCountOrderByAggregateInput
    _avg?: MarketIntelligenceAvgOrderByAggregateInput
    _max?: MarketIntelligenceMaxOrderByAggregateInput
    _min?: MarketIntelligenceMinOrderByAggregateInput
    _sum?: MarketIntelligenceSumOrderByAggregateInput
  }

  export type MarketIntelligenceScalarWhereWithAggregatesInput = {
    AND?: MarketIntelligenceScalarWhereWithAggregatesInput | MarketIntelligenceScalarWhereWithAggregatesInput[]
    OR?: MarketIntelligenceScalarWhereWithAggregatesInput[]
    NOT?: MarketIntelligenceScalarWhereWithAggregatesInput | MarketIntelligenceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MarketIntelligence"> | number
    marketId?: IntWithAggregatesFilter<"MarketIntelligence"> | number
    narrative?: StringWithAggregatesFilter<"MarketIntelligence"> | string
    aiProbability?: FloatNullableWithAggregatesFilter<"MarketIntelligence"> | number | null
    riskScore?: IntWithAggregatesFilter<"MarketIntelligence"> | number
    sentiment?: StringNullableWithAggregatesFilter<"MarketIntelligence"> | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"MarketIntelligence"> | Date | string
  }

  export type TradeInsightWhereInput = {
    AND?: TradeInsightWhereInput | TradeInsightWhereInput[]
    OR?: TradeInsightWhereInput[]
    NOT?: TradeInsightWhereInput | TradeInsightWhereInput[]
    txHash?: StringFilter<"TradeInsight"> | string
    marketId?: IntFilter<"TradeInsight"> | number
    commentary?: StringFilter<"TradeInsight"> | string
    impact?: StringFilter<"TradeInsight"> | string
    createdAt?: DateTimeFilter<"TradeInsight"> | Date | string
  }

  export type TradeInsightOrderByWithRelationInput = {
    txHash?: SortOrder
    marketId?: SortOrder
    commentary?: SortOrder
    impact?: SortOrder
    createdAt?: SortOrder
  }

  export type TradeInsightWhereUniqueInput = Prisma.AtLeast<{
    txHash?: string
    AND?: TradeInsightWhereInput | TradeInsightWhereInput[]
    OR?: TradeInsightWhereInput[]
    NOT?: TradeInsightWhereInput | TradeInsightWhereInput[]
    marketId?: IntFilter<"TradeInsight"> | number
    commentary?: StringFilter<"TradeInsight"> | string
    impact?: StringFilter<"TradeInsight"> | string
    createdAt?: DateTimeFilter<"TradeInsight"> | Date | string
  }, "txHash">

  export type TradeInsightOrderByWithAggregationInput = {
    txHash?: SortOrder
    marketId?: SortOrder
    commentary?: SortOrder
    impact?: SortOrder
    createdAt?: SortOrder
    _count?: TradeInsightCountOrderByAggregateInput
    _avg?: TradeInsightAvgOrderByAggregateInput
    _max?: TradeInsightMaxOrderByAggregateInput
    _min?: TradeInsightMinOrderByAggregateInput
    _sum?: TradeInsightSumOrderByAggregateInput
  }

  export type TradeInsightScalarWhereWithAggregatesInput = {
    AND?: TradeInsightScalarWhereWithAggregatesInput | TradeInsightScalarWhereWithAggregatesInput[]
    OR?: TradeInsightScalarWhereWithAggregatesInput[]
    NOT?: TradeInsightScalarWhereWithAggregatesInput | TradeInsightScalarWhereWithAggregatesInput[]
    txHash?: StringWithAggregatesFilter<"TradeInsight"> | string
    marketId?: IntWithAggregatesFilter<"TradeInsight"> | number
    commentary?: StringWithAggregatesFilter<"TradeInsight"> | string
    impact?: StringWithAggregatesFilter<"TradeInsight"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TradeInsight"> | Date | string
  }

  export type TraderProfileWhereInput = {
    AND?: TraderProfileWhereInput | TraderProfileWhereInput[]
    OR?: TraderProfileWhereInput[]
    NOT?: TraderProfileWhereInput | TraderProfileWhereInput[]
    address?: StringFilter<"TraderProfile"> | string
    tags?: StringNullableListFilter<"TraderProfile">
    aiPersona?: StringNullableFilter<"TraderProfile"> | string | null
    winRate?: FloatNullableFilter<"TraderProfile"> | number | null
    totalVolume?: DecimalFilter<"TraderProfile"> | Decimal | DecimalJsLike | number | string
    lastSeen?: DateTimeFilter<"TraderProfile"> | Date | string
  }

  export type TraderProfileOrderByWithRelationInput = {
    address?: SortOrder
    tags?: SortOrder
    aiPersona?: SortOrderInput | SortOrder
    winRate?: SortOrderInput | SortOrder
    totalVolume?: SortOrder
    lastSeen?: SortOrder
  }

  export type TraderProfileWhereUniqueInput = Prisma.AtLeast<{
    address?: string
    AND?: TraderProfileWhereInput | TraderProfileWhereInput[]
    OR?: TraderProfileWhereInput[]
    NOT?: TraderProfileWhereInput | TraderProfileWhereInput[]
    tags?: StringNullableListFilter<"TraderProfile">
    aiPersona?: StringNullableFilter<"TraderProfile"> | string | null
    winRate?: FloatNullableFilter<"TraderProfile"> | number | null
    totalVolume?: DecimalFilter<"TraderProfile"> | Decimal | DecimalJsLike | number | string
    lastSeen?: DateTimeFilter<"TraderProfile"> | Date | string
  }, "address">

  export type TraderProfileOrderByWithAggregationInput = {
    address?: SortOrder
    tags?: SortOrder
    aiPersona?: SortOrderInput | SortOrder
    winRate?: SortOrderInput | SortOrder
    totalVolume?: SortOrder
    lastSeen?: SortOrder
    _count?: TraderProfileCountOrderByAggregateInput
    _avg?: TraderProfileAvgOrderByAggregateInput
    _max?: TraderProfileMaxOrderByAggregateInput
    _min?: TraderProfileMinOrderByAggregateInput
    _sum?: TraderProfileSumOrderByAggregateInput
  }

  export type TraderProfileScalarWhereWithAggregatesInput = {
    AND?: TraderProfileScalarWhereWithAggregatesInput | TraderProfileScalarWhereWithAggregatesInput[]
    OR?: TraderProfileScalarWhereWithAggregatesInput[]
    NOT?: TraderProfileScalarWhereWithAggregatesInput | TraderProfileScalarWhereWithAggregatesInput[]
    address?: StringWithAggregatesFilter<"TraderProfile"> | string
    tags?: StringNullableListFilter<"TraderProfile">
    aiPersona?: StringNullableWithAggregatesFilter<"TraderProfile"> | string | null
    winRate?: FloatNullableWithAggregatesFilter<"TraderProfile"> | number | null
    totalVolume?: DecimalWithAggregatesFilter<"TraderProfile"> | Decimal | DecimalJsLike | number | string
    lastSeen?: DateTimeWithAggregatesFilter<"TraderProfile"> | Date | string
  }

  export type MarketCreateInput = {
    slug?: string | null
    conditionId: string
    questionId: string
    oracle: string
    outcomeCount: number
    enableNegRisk?: boolean
    yesTokenId: string
    noTokenId: string
    collateralToken: string
    title?: string | null
    status?: string
    createdAt: Date | string
    resolvedAt?: Date | string | null
    trades?: TradeCreateNestedManyWithoutMarketInput
    positionActivities?: PositionActivityCreateNestedManyWithoutMarketInput
    redemptions?: RedemptionCreateNestedManyWithoutMarketInput
    intelligence?: MarketIntelligenceCreateNestedOneWithoutMarketInput
  }

  export type MarketUncheckedCreateInput = {
    id?: number
    slug?: string | null
    conditionId: string
    questionId: string
    oracle: string
    outcomeCount: number
    enableNegRisk?: boolean
    yesTokenId: string
    noTokenId: string
    collateralToken: string
    title?: string | null
    status?: string
    createdAt: Date | string
    resolvedAt?: Date | string | null
    trades?: TradeUncheckedCreateNestedManyWithoutMarketInput
    positionActivities?: PositionActivityUncheckedCreateNestedManyWithoutMarketInput
    redemptions?: RedemptionUncheckedCreateNestedManyWithoutMarketInput
    intelligence?: MarketIntelligenceUncheckedCreateNestedOneWithoutMarketInput
  }

  export type MarketUpdateInput = {
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    conditionId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    oracle?: StringFieldUpdateOperationsInput | string
    outcomeCount?: IntFieldUpdateOperationsInput | number
    enableNegRisk?: BoolFieldUpdateOperationsInput | boolean
    yesTokenId?: StringFieldUpdateOperationsInput | string
    noTokenId?: StringFieldUpdateOperationsInput | string
    collateralToken?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trades?: TradeUpdateManyWithoutMarketNestedInput
    positionActivities?: PositionActivityUpdateManyWithoutMarketNestedInput
    redemptions?: RedemptionUpdateManyWithoutMarketNestedInput
    intelligence?: MarketIntelligenceUpdateOneWithoutMarketNestedInput
  }

  export type MarketUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    conditionId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    oracle?: StringFieldUpdateOperationsInput | string
    outcomeCount?: IntFieldUpdateOperationsInput | number
    enableNegRisk?: BoolFieldUpdateOperationsInput | boolean
    yesTokenId?: StringFieldUpdateOperationsInput | string
    noTokenId?: StringFieldUpdateOperationsInput | string
    collateralToken?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trades?: TradeUncheckedUpdateManyWithoutMarketNestedInput
    positionActivities?: PositionActivityUncheckedUpdateManyWithoutMarketNestedInput
    redemptions?: RedemptionUncheckedUpdateManyWithoutMarketNestedInput
    intelligence?: MarketIntelligenceUncheckedUpdateOneWithoutMarketNestedInput
  }

  export type MarketCreateManyInput = {
    id?: number
    slug?: string | null
    conditionId: string
    questionId: string
    oracle: string
    outcomeCount: number
    enableNegRisk?: boolean
    yesTokenId: string
    noTokenId: string
    collateralToken: string
    title?: string | null
    status?: string
    createdAt: Date | string
    resolvedAt?: Date | string | null
  }

  export type MarketUpdateManyMutationInput = {
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    conditionId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    oracle?: StringFieldUpdateOperationsInput | string
    outcomeCount?: IntFieldUpdateOperationsInput | number
    enableNegRisk?: BoolFieldUpdateOperationsInput | boolean
    yesTokenId?: StringFieldUpdateOperationsInput | string
    noTokenId?: StringFieldUpdateOperationsInput | string
    collateralToken?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MarketUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    conditionId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    oracle?: StringFieldUpdateOperationsInput | string
    outcomeCount?: IntFieldUpdateOperationsInput | number
    enableNegRisk?: BoolFieldUpdateOperationsInput | boolean
    yesTokenId?: StringFieldUpdateOperationsInput | string
    noTokenId?: StringFieldUpdateOperationsInput | string
    collateralToken?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TradeCreateInput = {
    txHash: string
    logIndex: number
    tokenId: string
    outcome?: string | null
    side: string
    price: Decimal | DecimalJsLike | number | string
    size: Decimal | DecimalJsLike | number | string
    maker: string
    taker: string
    timestamp: Date | string
    market: MarketCreateNestedOneWithoutTradesInput
  }

  export type TradeUncheckedCreateInput = {
    txHash: string
    logIndex: number
    marketId: number
    tokenId: string
    outcome?: string | null
    side: string
    price: Decimal | DecimalJsLike | number | string
    size: Decimal | DecimalJsLike | number | string
    maker: string
    taker: string
    timestamp: Date | string
  }

  export type TradeUpdateInput = {
    txHash?: StringFieldUpdateOperationsInput | string
    logIndex?: IntFieldUpdateOperationsInput | number
    tokenId?: StringFieldUpdateOperationsInput | string
    outcome?: NullableStringFieldUpdateOperationsInput | string | null
    side?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    size?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maker?: StringFieldUpdateOperationsInput | string
    taker?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    market?: MarketUpdateOneRequiredWithoutTradesNestedInput
  }

  export type TradeUncheckedUpdateInput = {
    txHash?: StringFieldUpdateOperationsInput | string
    logIndex?: IntFieldUpdateOperationsInput | number
    marketId?: IntFieldUpdateOperationsInput | number
    tokenId?: StringFieldUpdateOperationsInput | string
    outcome?: NullableStringFieldUpdateOperationsInput | string | null
    side?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    size?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maker?: StringFieldUpdateOperationsInput | string
    taker?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TradeCreateManyInput = {
    txHash: string
    logIndex: number
    marketId: number
    tokenId: string
    outcome?: string | null
    side: string
    price: Decimal | DecimalJsLike | number | string
    size: Decimal | DecimalJsLike | number | string
    maker: string
    taker: string
    timestamp: Date | string
  }

  export type TradeUpdateManyMutationInput = {
    txHash?: StringFieldUpdateOperationsInput | string
    logIndex?: IntFieldUpdateOperationsInput | number
    tokenId?: StringFieldUpdateOperationsInput | string
    outcome?: NullableStringFieldUpdateOperationsInput | string | null
    side?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    size?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maker?: StringFieldUpdateOperationsInput | string
    taker?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TradeUncheckedUpdateManyInput = {
    txHash?: StringFieldUpdateOperationsInput | string
    logIndex?: IntFieldUpdateOperationsInput | number
    marketId?: IntFieldUpdateOperationsInput | number
    tokenId?: StringFieldUpdateOperationsInput | string
    outcome?: NullableStringFieldUpdateOperationsInput | string | null
    side?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    size?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maker?: StringFieldUpdateOperationsInput | string
    taker?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SyncStateCreateInput = {
    key: string
    lastBlock: bigint | number
    updatedAt?: Date | string
  }

  export type SyncStateUncheckedCreateInput = {
    key: string
    lastBlock: bigint | number
    updatedAt?: Date | string
  }

  export type SyncStateUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    lastBlock?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SyncStateUncheckedUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    lastBlock?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SyncStateCreateManyInput = {
    key: string
    lastBlock: bigint | number
    updatedAt?: Date | string
  }

  export type SyncStateUpdateManyMutationInput = {
    key?: StringFieldUpdateOperationsInput | string
    lastBlock?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SyncStateUncheckedUpdateManyInput = {
    key?: StringFieldUpdateOperationsInput | string
    lastBlock?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PositionActivityCreateInput = {
    id?: string
    txHash: string
    logIndex: number
    user: string
    type: string
    amount: Decimal | DecimalJsLike | number | string
    timestamp: Date | string
    market: MarketCreateNestedOneWithoutPositionActivitiesInput
  }

  export type PositionActivityUncheckedCreateInput = {
    id?: string
    txHash: string
    logIndex: number
    marketId: number
    user: string
    type: string
    amount: Decimal | DecimalJsLike | number | string
    timestamp: Date | string
  }

  export type PositionActivityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    txHash?: StringFieldUpdateOperationsInput | string
    logIndex?: IntFieldUpdateOperationsInput | number
    user?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    market?: MarketUpdateOneRequiredWithoutPositionActivitiesNestedInput
  }

  export type PositionActivityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    txHash?: StringFieldUpdateOperationsInput | string
    logIndex?: IntFieldUpdateOperationsInput | number
    marketId?: IntFieldUpdateOperationsInput | number
    user?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PositionActivityCreateManyInput = {
    id?: string
    txHash: string
    logIndex: number
    marketId: number
    user: string
    type: string
    amount: Decimal | DecimalJsLike | number | string
    timestamp: Date | string
  }

  export type PositionActivityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    txHash?: StringFieldUpdateOperationsInput | string
    logIndex?: IntFieldUpdateOperationsInput | number
    user?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PositionActivityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    txHash?: StringFieldUpdateOperationsInput | string
    logIndex?: IntFieldUpdateOperationsInput | number
    marketId?: IntFieldUpdateOperationsInput | number
    user?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RedemptionCreateInput = {
    id?: string
    txHash: string
    logIndex: number
    user: string
    payout: Decimal | DecimalJsLike | number | string
    timestamp: Date | string
    market: MarketCreateNestedOneWithoutRedemptionsInput
  }

  export type RedemptionUncheckedCreateInput = {
    id?: string
    txHash: string
    logIndex: number
    marketId: number
    user: string
    payout: Decimal | DecimalJsLike | number | string
    timestamp: Date | string
  }

  export type RedemptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    txHash?: StringFieldUpdateOperationsInput | string
    logIndex?: IntFieldUpdateOperationsInput | number
    user?: StringFieldUpdateOperationsInput | string
    payout?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    market?: MarketUpdateOneRequiredWithoutRedemptionsNestedInput
  }

  export type RedemptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    txHash?: StringFieldUpdateOperationsInput | string
    logIndex?: IntFieldUpdateOperationsInput | number
    marketId?: IntFieldUpdateOperationsInput | number
    user?: StringFieldUpdateOperationsInput | string
    payout?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RedemptionCreateManyInput = {
    id?: string
    txHash: string
    logIndex: number
    marketId: number
    user: string
    payout: Decimal | DecimalJsLike | number | string
    timestamp: Date | string
  }

  export type RedemptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    txHash?: StringFieldUpdateOperationsInput | string
    logIndex?: IntFieldUpdateOperationsInput | number
    user?: StringFieldUpdateOperationsInput | string
    payout?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RedemptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    txHash?: StringFieldUpdateOperationsInput | string
    logIndex?: IntFieldUpdateOperationsInput | number
    marketId?: IntFieldUpdateOperationsInput | number
    user?: StringFieldUpdateOperationsInput | string
    payout?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PositionConversionCreateInput = {
    id?: string
    txHash: string
    logIndex: number
    user: string
    fromMarketId: number
    toMarketId: number
    amount: Decimal | DecimalJsLike | number | string
    timestamp: Date | string
  }

  export type PositionConversionUncheckedCreateInput = {
    id?: string
    txHash: string
    logIndex: number
    user: string
    fromMarketId: number
    toMarketId: number
    amount: Decimal | DecimalJsLike | number | string
    timestamp: Date | string
  }

  export type PositionConversionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    txHash?: StringFieldUpdateOperationsInput | string
    logIndex?: IntFieldUpdateOperationsInput | number
    user?: StringFieldUpdateOperationsInput | string
    fromMarketId?: IntFieldUpdateOperationsInput | number
    toMarketId?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PositionConversionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    txHash?: StringFieldUpdateOperationsInput | string
    logIndex?: IntFieldUpdateOperationsInput | number
    user?: StringFieldUpdateOperationsInput | string
    fromMarketId?: IntFieldUpdateOperationsInput | number
    toMarketId?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PositionConversionCreateManyInput = {
    id?: string
    txHash: string
    logIndex: number
    user: string
    fromMarketId: number
    toMarketId: number
    amount: Decimal | DecimalJsLike | number | string
    timestamp: Date | string
  }

  export type PositionConversionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    txHash?: StringFieldUpdateOperationsInput | string
    logIndex?: IntFieldUpdateOperationsInput | number
    user?: StringFieldUpdateOperationsInput | string
    fromMarketId?: IntFieldUpdateOperationsInput | number
    toMarketId?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PositionConversionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    txHash?: StringFieldUpdateOperationsInput | string
    logIndex?: IntFieldUpdateOperationsInput | number
    user?: StringFieldUpdateOperationsInput | string
    fromMarketId?: IntFieldUpdateOperationsInput | number
    toMarketId?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketIntelligenceCreateInput = {
    narrative: string
    aiProbability?: number | null
    riskScore: number
    sentiment?: string | null
    updatedAt?: Date | string
    market: MarketCreateNestedOneWithoutIntelligenceInput
  }

  export type MarketIntelligenceUncheckedCreateInput = {
    id?: number
    marketId: number
    narrative: string
    aiProbability?: number | null
    riskScore: number
    sentiment?: string | null
    updatedAt?: Date | string
  }

  export type MarketIntelligenceUpdateInput = {
    narrative?: StringFieldUpdateOperationsInput | string
    aiProbability?: NullableFloatFieldUpdateOperationsInput | number | null
    riskScore?: IntFieldUpdateOperationsInput | number
    sentiment?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    market?: MarketUpdateOneRequiredWithoutIntelligenceNestedInput
  }

  export type MarketIntelligenceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    marketId?: IntFieldUpdateOperationsInput | number
    narrative?: StringFieldUpdateOperationsInput | string
    aiProbability?: NullableFloatFieldUpdateOperationsInput | number | null
    riskScore?: IntFieldUpdateOperationsInput | number
    sentiment?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketIntelligenceCreateManyInput = {
    id?: number
    marketId: number
    narrative: string
    aiProbability?: number | null
    riskScore: number
    sentiment?: string | null
    updatedAt?: Date | string
  }

  export type MarketIntelligenceUpdateManyMutationInput = {
    narrative?: StringFieldUpdateOperationsInput | string
    aiProbability?: NullableFloatFieldUpdateOperationsInput | number | null
    riskScore?: IntFieldUpdateOperationsInput | number
    sentiment?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketIntelligenceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    marketId?: IntFieldUpdateOperationsInput | number
    narrative?: StringFieldUpdateOperationsInput | string
    aiProbability?: NullableFloatFieldUpdateOperationsInput | number | null
    riskScore?: IntFieldUpdateOperationsInput | number
    sentiment?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TradeInsightCreateInput = {
    txHash: string
    marketId: number
    commentary: string
    impact: string
    createdAt?: Date | string
  }

  export type TradeInsightUncheckedCreateInput = {
    txHash: string
    marketId: number
    commentary: string
    impact: string
    createdAt?: Date | string
  }

  export type TradeInsightUpdateInput = {
    txHash?: StringFieldUpdateOperationsInput | string
    marketId?: IntFieldUpdateOperationsInput | number
    commentary?: StringFieldUpdateOperationsInput | string
    impact?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TradeInsightUncheckedUpdateInput = {
    txHash?: StringFieldUpdateOperationsInput | string
    marketId?: IntFieldUpdateOperationsInput | number
    commentary?: StringFieldUpdateOperationsInput | string
    impact?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TradeInsightCreateManyInput = {
    txHash: string
    marketId: number
    commentary: string
    impact: string
    createdAt?: Date | string
  }

  export type TradeInsightUpdateManyMutationInput = {
    txHash?: StringFieldUpdateOperationsInput | string
    marketId?: IntFieldUpdateOperationsInput | number
    commentary?: StringFieldUpdateOperationsInput | string
    impact?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TradeInsightUncheckedUpdateManyInput = {
    txHash?: StringFieldUpdateOperationsInput | string
    marketId?: IntFieldUpdateOperationsInput | number
    commentary?: StringFieldUpdateOperationsInput | string
    impact?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TraderProfileCreateInput = {
    address: string
    tags?: TraderProfileCreatetagsInput | string[]
    aiPersona?: string | null
    winRate?: number | null
    totalVolume: Decimal | DecimalJsLike | number | string
    lastSeen?: Date | string
  }

  export type TraderProfileUncheckedCreateInput = {
    address: string
    tags?: TraderProfileCreatetagsInput | string[]
    aiPersona?: string | null
    winRate?: number | null
    totalVolume: Decimal | DecimalJsLike | number | string
    lastSeen?: Date | string
  }

  export type TraderProfileUpdateInput = {
    address?: StringFieldUpdateOperationsInput | string
    tags?: TraderProfileUpdatetagsInput | string[]
    aiPersona?: NullableStringFieldUpdateOperationsInput | string | null
    winRate?: NullableFloatFieldUpdateOperationsInput | number | null
    totalVolume?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TraderProfileUncheckedUpdateInput = {
    address?: StringFieldUpdateOperationsInput | string
    tags?: TraderProfileUpdatetagsInput | string[]
    aiPersona?: NullableStringFieldUpdateOperationsInput | string | null
    winRate?: NullableFloatFieldUpdateOperationsInput | number | null
    totalVolume?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TraderProfileCreateManyInput = {
    address: string
    tags?: TraderProfileCreatetagsInput | string[]
    aiPersona?: string | null
    winRate?: number | null
    totalVolume: Decimal | DecimalJsLike | number | string
    lastSeen?: Date | string
  }

  export type TraderProfileUpdateManyMutationInput = {
    address?: StringFieldUpdateOperationsInput | string
    tags?: TraderProfileUpdatetagsInput | string[]
    aiPersona?: NullableStringFieldUpdateOperationsInput | string | null
    winRate?: NullableFloatFieldUpdateOperationsInput | number | null
    totalVolume?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TraderProfileUncheckedUpdateManyInput = {
    address?: StringFieldUpdateOperationsInput | string
    tags?: TraderProfileUpdatetagsInput | string[]
    aiPersona?: NullableStringFieldUpdateOperationsInput | string | null
    winRate?: NullableFloatFieldUpdateOperationsInput | number | null
    totalVolume?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type TradeListRelationFilter = {
    every?: TradeWhereInput
    some?: TradeWhereInput
    none?: TradeWhereInput
  }

  export type PositionActivityListRelationFilter = {
    every?: PositionActivityWhereInput
    some?: PositionActivityWhereInput
    none?: PositionActivityWhereInput
  }

  export type RedemptionListRelationFilter = {
    every?: RedemptionWhereInput
    some?: RedemptionWhereInput
    none?: RedemptionWhereInput
  }

  export type MarketIntelligenceNullableScalarRelationFilter = {
    is?: MarketIntelligenceWhereInput | null
    isNot?: MarketIntelligenceWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TradeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PositionActivityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RedemptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MarketCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    conditionId?: SortOrder
    questionId?: SortOrder
    oracle?: SortOrder
    outcomeCount?: SortOrder
    enableNegRisk?: SortOrder
    yesTokenId?: SortOrder
    noTokenId?: SortOrder
    collateralToken?: SortOrder
    title?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    resolvedAt?: SortOrder
  }

  export type MarketAvgOrderByAggregateInput = {
    id?: SortOrder
    outcomeCount?: SortOrder
  }

  export type MarketMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    conditionId?: SortOrder
    questionId?: SortOrder
    oracle?: SortOrder
    outcomeCount?: SortOrder
    enableNegRisk?: SortOrder
    yesTokenId?: SortOrder
    noTokenId?: SortOrder
    collateralToken?: SortOrder
    title?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    resolvedAt?: SortOrder
  }

  export type MarketMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    conditionId?: SortOrder
    questionId?: SortOrder
    oracle?: SortOrder
    outcomeCount?: SortOrder
    enableNegRisk?: SortOrder
    yesTokenId?: SortOrder
    noTokenId?: SortOrder
    collateralToken?: SortOrder
    title?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    resolvedAt?: SortOrder
  }

  export type MarketSumOrderByAggregateInput = {
    id?: SortOrder
    outcomeCount?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type MarketScalarRelationFilter = {
    is?: MarketWhereInput
    isNot?: MarketWhereInput
  }

  export type TradeTxHashLogIndexCompoundUniqueInput = {
    txHash: string
    logIndex: number
  }

  export type TradeCountOrderByAggregateInput = {
    txHash?: SortOrder
    logIndex?: SortOrder
    marketId?: SortOrder
    tokenId?: SortOrder
    outcome?: SortOrder
    side?: SortOrder
    price?: SortOrder
    size?: SortOrder
    maker?: SortOrder
    taker?: SortOrder
    timestamp?: SortOrder
  }

  export type TradeAvgOrderByAggregateInput = {
    logIndex?: SortOrder
    marketId?: SortOrder
    price?: SortOrder
    size?: SortOrder
  }

  export type TradeMaxOrderByAggregateInput = {
    txHash?: SortOrder
    logIndex?: SortOrder
    marketId?: SortOrder
    tokenId?: SortOrder
    outcome?: SortOrder
    side?: SortOrder
    price?: SortOrder
    size?: SortOrder
    maker?: SortOrder
    taker?: SortOrder
    timestamp?: SortOrder
  }

  export type TradeMinOrderByAggregateInput = {
    txHash?: SortOrder
    logIndex?: SortOrder
    marketId?: SortOrder
    tokenId?: SortOrder
    outcome?: SortOrder
    side?: SortOrder
    price?: SortOrder
    size?: SortOrder
    maker?: SortOrder
    taker?: SortOrder
    timestamp?: SortOrder
  }

  export type TradeSumOrderByAggregateInput = {
    logIndex?: SortOrder
    marketId?: SortOrder
    price?: SortOrder
    size?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type SyncStateCountOrderByAggregateInput = {
    key?: SortOrder
    lastBlock?: SortOrder
    updatedAt?: SortOrder
  }

  export type SyncStateAvgOrderByAggregateInput = {
    lastBlock?: SortOrder
  }

  export type SyncStateMaxOrderByAggregateInput = {
    key?: SortOrder
    lastBlock?: SortOrder
    updatedAt?: SortOrder
  }

  export type SyncStateMinOrderByAggregateInput = {
    key?: SortOrder
    lastBlock?: SortOrder
    updatedAt?: SortOrder
  }

  export type SyncStateSumOrderByAggregateInput = {
    lastBlock?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type PositionActivityTxHashLogIndexCompoundUniqueInput = {
    txHash: string
    logIndex: number
  }

  export type PositionActivityCountOrderByAggregateInput = {
    id?: SortOrder
    txHash?: SortOrder
    logIndex?: SortOrder
    marketId?: SortOrder
    user?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    timestamp?: SortOrder
  }

  export type PositionActivityAvgOrderByAggregateInput = {
    logIndex?: SortOrder
    marketId?: SortOrder
    amount?: SortOrder
  }

  export type PositionActivityMaxOrderByAggregateInput = {
    id?: SortOrder
    txHash?: SortOrder
    logIndex?: SortOrder
    marketId?: SortOrder
    user?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    timestamp?: SortOrder
  }

  export type PositionActivityMinOrderByAggregateInput = {
    id?: SortOrder
    txHash?: SortOrder
    logIndex?: SortOrder
    marketId?: SortOrder
    user?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    timestamp?: SortOrder
  }

  export type PositionActivitySumOrderByAggregateInput = {
    logIndex?: SortOrder
    marketId?: SortOrder
    amount?: SortOrder
  }

  export type RedemptionTxHashLogIndexCompoundUniqueInput = {
    txHash: string
    logIndex: number
  }

  export type RedemptionCountOrderByAggregateInput = {
    id?: SortOrder
    txHash?: SortOrder
    logIndex?: SortOrder
    marketId?: SortOrder
    user?: SortOrder
    payout?: SortOrder
    timestamp?: SortOrder
  }

  export type RedemptionAvgOrderByAggregateInput = {
    logIndex?: SortOrder
    marketId?: SortOrder
    payout?: SortOrder
  }

  export type RedemptionMaxOrderByAggregateInput = {
    id?: SortOrder
    txHash?: SortOrder
    logIndex?: SortOrder
    marketId?: SortOrder
    user?: SortOrder
    payout?: SortOrder
    timestamp?: SortOrder
  }

  export type RedemptionMinOrderByAggregateInput = {
    id?: SortOrder
    txHash?: SortOrder
    logIndex?: SortOrder
    marketId?: SortOrder
    user?: SortOrder
    payout?: SortOrder
    timestamp?: SortOrder
  }

  export type RedemptionSumOrderByAggregateInput = {
    logIndex?: SortOrder
    marketId?: SortOrder
    payout?: SortOrder
  }

  export type PositionConversionTxHashLogIndexCompoundUniqueInput = {
    txHash: string
    logIndex: number
  }

  export type PositionConversionCountOrderByAggregateInput = {
    id?: SortOrder
    txHash?: SortOrder
    logIndex?: SortOrder
    user?: SortOrder
    fromMarketId?: SortOrder
    toMarketId?: SortOrder
    amount?: SortOrder
    timestamp?: SortOrder
  }

  export type PositionConversionAvgOrderByAggregateInput = {
    logIndex?: SortOrder
    fromMarketId?: SortOrder
    toMarketId?: SortOrder
    amount?: SortOrder
  }

  export type PositionConversionMaxOrderByAggregateInput = {
    id?: SortOrder
    txHash?: SortOrder
    logIndex?: SortOrder
    user?: SortOrder
    fromMarketId?: SortOrder
    toMarketId?: SortOrder
    amount?: SortOrder
    timestamp?: SortOrder
  }

  export type PositionConversionMinOrderByAggregateInput = {
    id?: SortOrder
    txHash?: SortOrder
    logIndex?: SortOrder
    user?: SortOrder
    fromMarketId?: SortOrder
    toMarketId?: SortOrder
    amount?: SortOrder
    timestamp?: SortOrder
  }

  export type PositionConversionSumOrderByAggregateInput = {
    logIndex?: SortOrder
    fromMarketId?: SortOrder
    toMarketId?: SortOrder
    amount?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type MarketIntelligenceCountOrderByAggregateInput = {
    id?: SortOrder
    marketId?: SortOrder
    narrative?: SortOrder
    aiProbability?: SortOrder
    riskScore?: SortOrder
    sentiment?: SortOrder
    updatedAt?: SortOrder
  }

  export type MarketIntelligenceAvgOrderByAggregateInput = {
    id?: SortOrder
    marketId?: SortOrder
    aiProbability?: SortOrder
    riskScore?: SortOrder
  }

  export type MarketIntelligenceMaxOrderByAggregateInput = {
    id?: SortOrder
    marketId?: SortOrder
    narrative?: SortOrder
    aiProbability?: SortOrder
    riskScore?: SortOrder
    sentiment?: SortOrder
    updatedAt?: SortOrder
  }

  export type MarketIntelligenceMinOrderByAggregateInput = {
    id?: SortOrder
    marketId?: SortOrder
    narrative?: SortOrder
    aiProbability?: SortOrder
    riskScore?: SortOrder
    sentiment?: SortOrder
    updatedAt?: SortOrder
  }

  export type MarketIntelligenceSumOrderByAggregateInput = {
    id?: SortOrder
    marketId?: SortOrder
    aiProbability?: SortOrder
    riskScore?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type TradeInsightCountOrderByAggregateInput = {
    txHash?: SortOrder
    marketId?: SortOrder
    commentary?: SortOrder
    impact?: SortOrder
    createdAt?: SortOrder
  }

  export type TradeInsightAvgOrderByAggregateInput = {
    marketId?: SortOrder
  }

  export type TradeInsightMaxOrderByAggregateInput = {
    txHash?: SortOrder
    marketId?: SortOrder
    commentary?: SortOrder
    impact?: SortOrder
    createdAt?: SortOrder
  }

  export type TradeInsightMinOrderByAggregateInput = {
    txHash?: SortOrder
    marketId?: SortOrder
    commentary?: SortOrder
    impact?: SortOrder
    createdAt?: SortOrder
  }

  export type TradeInsightSumOrderByAggregateInput = {
    marketId?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type TraderProfileCountOrderByAggregateInput = {
    address?: SortOrder
    tags?: SortOrder
    aiPersona?: SortOrder
    winRate?: SortOrder
    totalVolume?: SortOrder
    lastSeen?: SortOrder
  }

  export type TraderProfileAvgOrderByAggregateInput = {
    winRate?: SortOrder
    totalVolume?: SortOrder
  }

  export type TraderProfileMaxOrderByAggregateInput = {
    address?: SortOrder
    aiPersona?: SortOrder
    winRate?: SortOrder
    totalVolume?: SortOrder
    lastSeen?: SortOrder
  }

  export type TraderProfileMinOrderByAggregateInput = {
    address?: SortOrder
    aiPersona?: SortOrder
    winRate?: SortOrder
    totalVolume?: SortOrder
    lastSeen?: SortOrder
  }

  export type TraderProfileSumOrderByAggregateInput = {
    winRate?: SortOrder
    totalVolume?: SortOrder
  }

  export type TradeCreateNestedManyWithoutMarketInput = {
    create?: XOR<TradeCreateWithoutMarketInput, TradeUncheckedCreateWithoutMarketInput> | TradeCreateWithoutMarketInput[] | TradeUncheckedCreateWithoutMarketInput[]
    connectOrCreate?: TradeCreateOrConnectWithoutMarketInput | TradeCreateOrConnectWithoutMarketInput[]
    createMany?: TradeCreateManyMarketInputEnvelope
    connect?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
  }

  export type PositionActivityCreateNestedManyWithoutMarketInput = {
    create?: XOR<PositionActivityCreateWithoutMarketInput, PositionActivityUncheckedCreateWithoutMarketInput> | PositionActivityCreateWithoutMarketInput[] | PositionActivityUncheckedCreateWithoutMarketInput[]
    connectOrCreate?: PositionActivityCreateOrConnectWithoutMarketInput | PositionActivityCreateOrConnectWithoutMarketInput[]
    createMany?: PositionActivityCreateManyMarketInputEnvelope
    connect?: PositionActivityWhereUniqueInput | PositionActivityWhereUniqueInput[]
  }

  export type RedemptionCreateNestedManyWithoutMarketInput = {
    create?: XOR<RedemptionCreateWithoutMarketInput, RedemptionUncheckedCreateWithoutMarketInput> | RedemptionCreateWithoutMarketInput[] | RedemptionUncheckedCreateWithoutMarketInput[]
    connectOrCreate?: RedemptionCreateOrConnectWithoutMarketInput | RedemptionCreateOrConnectWithoutMarketInput[]
    createMany?: RedemptionCreateManyMarketInputEnvelope
    connect?: RedemptionWhereUniqueInput | RedemptionWhereUniqueInput[]
  }

  export type MarketIntelligenceCreateNestedOneWithoutMarketInput = {
    create?: XOR<MarketIntelligenceCreateWithoutMarketInput, MarketIntelligenceUncheckedCreateWithoutMarketInput>
    connectOrCreate?: MarketIntelligenceCreateOrConnectWithoutMarketInput
    connect?: MarketIntelligenceWhereUniqueInput
  }

  export type TradeUncheckedCreateNestedManyWithoutMarketInput = {
    create?: XOR<TradeCreateWithoutMarketInput, TradeUncheckedCreateWithoutMarketInput> | TradeCreateWithoutMarketInput[] | TradeUncheckedCreateWithoutMarketInput[]
    connectOrCreate?: TradeCreateOrConnectWithoutMarketInput | TradeCreateOrConnectWithoutMarketInput[]
    createMany?: TradeCreateManyMarketInputEnvelope
    connect?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
  }

  export type PositionActivityUncheckedCreateNestedManyWithoutMarketInput = {
    create?: XOR<PositionActivityCreateWithoutMarketInput, PositionActivityUncheckedCreateWithoutMarketInput> | PositionActivityCreateWithoutMarketInput[] | PositionActivityUncheckedCreateWithoutMarketInput[]
    connectOrCreate?: PositionActivityCreateOrConnectWithoutMarketInput | PositionActivityCreateOrConnectWithoutMarketInput[]
    createMany?: PositionActivityCreateManyMarketInputEnvelope
    connect?: PositionActivityWhereUniqueInput | PositionActivityWhereUniqueInput[]
  }

  export type RedemptionUncheckedCreateNestedManyWithoutMarketInput = {
    create?: XOR<RedemptionCreateWithoutMarketInput, RedemptionUncheckedCreateWithoutMarketInput> | RedemptionCreateWithoutMarketInput[] | RedemptionUncheckedCreateWithoutMarketInput[]
    connectOrCreate?: RedemptionCreateOrConnectWithoutMarketInput | RedemptionCreateOrConnectWithoutMarketInput[]
    createMany?: RedemptionCreateManyMarketInputEnvelope
    connect?: RedemptionWhereUniqueInput | RedemptionWhereUniqueInput[]
  }

  export type MarketIntelligenceUncheckedCreateNestedOneWithoutMarketInput = {
    create?: XOR<MarketIntelligenceCreateWithoutMarketInput, MarketIntelligenceUncheckedCreateWithoutMarketInput>
    connectOrCreate?: MarketIntelligenceCreateOrConnectWithoutMarketInput
    connect?: MarketIntelligenceWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type TradeUpdateManyWithoutMarketNestedInput = {
    create?: XOR<TradeCreateWithoutMarketInput, TradeUncheckedCreateWithoutMarketInput> | TradeCreateWithoutMarketInput[] | TradeUncheckedCreateWithoutMarketInput[]
    connectOrCreate?: TradeCreateOrConnectWithoutMarketInput | TradeCreateOrConnectWithoutMarketInput[]
    upsert?: TradeUpsertWithWhereUniqueWithoutMarketInput | TradeUpsertWithWhereUniqueWithoutMarketInput[]
    createMany?: TradeCreateManyMarketInputEnvelope
    set?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    disconnect?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    delete?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    connect?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    update?: TradeUpdateWithWhereUniqueWithoutMarketInput | TradeUpdateWithWhereUniqueWithoutMarketInput[]
    updateMany?: TradeUpdateManyWithWhereWithoutMarketInput | TradeUpdateManyWithWhereWithoutMarketInput[]
    deleteMany?: TradeScalarWhereInput | TradeScalarWhereInput[]
  }

  export type PositionActivityUpdateManyWithoutMarketNestedInput = {
    create?: XOR<PositionActivityCreateWithoutMarketInput, PositionActivityUncheckedCreateWithoutMarketInput> | PositionActivityCreateWithoutMarketInput[] | PositionActivityUncheckedCreateWithoutMarketInput[]
    connectOrCreate?: PositionActivityCreateOrConnectWithoutMarketInput | PositionActivityCreateOrConnectWithoutMarketInput[]
    upsert?: PositionActivityUpsertWithWhereUniqueWithoutMarketInput | PositionActivityUpsertWithWhereUniqueWithoutMarketInput[]
    createMany?: PositionActivityCreateManyMarketInputEnvelope
    set?: PositionActivityWhereUniqueInput | PositionActivityWhereUniqueInput[]
    disconnect?: PositionActivityWhereUniqueInput | PositionActivityWhereUniqueInput[]
    delete?: PositionActivityWhereUniqueInput | PositionActivityWhereUniqueInput[]
    connect?: PositionActivityWhereUniqueInput | PositionActivityWhereUniqueInput[]
    update?: PositionActivityUpdateWithWhereUniqueWithoutMarketInput | PositionActivityUpdateWithWhereUniqueWithoutMarketInput[]
    updateMany?: PositionActivityUpdateManyWithWhereWithoutMarketInput | PositionActivityUpdateManyWithWhereWithoutMarketInput[]
    deleteMany?: PositionActivityScalarWhereInput | PositionActivityScalarWhereInput[]
  }

  export type RedemptionUpdateManyWithoutMarketNestedInput = {
    create?: XOR<RedemptionCreateWithoutMarketInput, RedemptionUncheckedCreateWithoutMarketInput> | RedemptionCreateWithoutMarketInput[] | RedemptionUncheckedCreateWithoutMarketInput[]
    connectOrCreate?: RedemptionCreateOrConnectWithoutMarketInput | RedemptionCreateOrConnectWithoutMarketInput[]
    upsert?: RedemptionUpsertWithWhereUniqueWithoutMarketInput | RedemptionUpsertWithWhereUniqueWithoutMarketInput[]
    createMany?: RedemptionCreateManyMarketInputEnvelope
    set?: RedemptionWhereUniqueInput | RedemptionWhereUniqueInput[]
    disconnect?: RedemptionWhereUniqueInput | RedemptionWhereUniqueInput[]
    delete?: RedemptionWhereUniqueInput | RedemptionWhereUniqueInput[]
    connect?: RedemptionWhereUniqueInput | RedemptionWhereUniqueInput[]
    update?: RedemptionUpdateWithWhereUniqueWithoutMarketInput | RedemptionUpdateWithWhereUniqueWithoutMarketInput[]
    updateMany?: RedemptionUpdateManyWithWhereWithoutMarketInput | RedemptionUpdateManyWithWhereWithoutMarketInput[]
    deleteMany?: RedemptionScalarWhereInput | RedemptionScalarWhereInput[]
  }

  export type MarketIntelligenceUpdateOneWithoutMarketNestedInput = {
    create?: XOR<MarketIntelligenceCreateWithoutMarketInput, MarketIntelligenceUncheckedCreateWithoutMarketInput>
    connectOrCreate?: MarketIntelligenceCreateOrConnectWithoutMarketInput
    upsert?: MarketIntelligenceUpsertWithoutMarketInput
    disconnect?: MarketIntelligenceWhereInput | boolean
    delete?: MarketIntelligenceWhereInput | boolean
    connect?: MarketIntelligenceWhereUniqueInput
    update?: XOR<XOR<MarketIntelligenceUpdateToOneWithWhereWithoutMarketInput, MarketIntelligenceUpdateWithoutMarketInput>, MarketIntelligenceUncheckedUpdateWithoutMarketInput>
  }

  export type TradeUncheckedUpdateManyWithoutMarketNestedInput = {
    create?: XOR<TradeCreateWithoutMarketInput, TradeUncheckedCreateWithoutMarketInput> | TradeCreateWithoutMarketInput[] | TradeUncheckedCreateWithoutMarketInput[]
    connectOrCreate?: TradeCreateOrConnectWithoutMarketInput | TradeCreateOrConnectWithoutMarketInput[]
    upsert?: TradeUpsertWithWhereUniqueWithoutMarketInput | TradeUpsertWithWhereUniqueWithoutMarketInput[]
    createMany?: TradeCreateManyMarketInputEnvelope
    set?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    disconnect?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    delete?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    connect?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    update?: TradeUpdateWithWhereUniqueWithoutMarketInput | TradeUpdateWithWhereUniqueWithoutMarketInput[]
    updateMany?: TradeUpdateManyWithWhereWithoutMarketInput | TradeUpdateManyWithWhereWithoutMarketInput[]
    deleteMany?: TradeScalarWhereInput | TradeScalarWhereInput[]
  }

  export type PositionActivityUncheckedUpdateManyWithoutMarketNestedInput = {
    create?: XOR<PositionActivityCreateWithoutMarketInput, PositionActivityUncheckedCreateWithoutMarketInput> | PositionActivityCreateWithoutMarketInput[] | PositionActivityUncheckedCreateWithoutMarketInput[]
    connectOrCreate?: PositionActivityCreateOrConnectWithoutMarketInput | PositionActivityCreateOrConnectWithoutMarketInput[]
    upsert?: PositionActivityUpsertWithWhereUniqueWithoutMarketInput | PositionActivityUpsertWithWhereUniqueWithoutMarketInput[]
    createMany?: PositionActivityCreateManyMarketInputEnvelope
    set?: PositionActivityWhereUniqueInput | PositionActivityWhereUniqueInput[]
    disconnect?: PositionActivityWhereUniqueInput | PositionActivityWhereUniqueInput[]
    delete?: PositionActivityWhereUniqueInput | PositionActivityWhereUniqueInput[]
    connect?: PositionActivityWhereUniqueInput | PositionActivityWhereUniqueInput[]
    update?: PositionActivityUpdateWithWhereUniqueWithoutMarketInput | PositionActivityUpdateWithWhereUniqueWithoutMarketInput[]
    updateMany?: PositionActivityUpdateManyWithWhereWithoutMarketInput | PositionActivityUpdateManyWithWhereWithoutMarketInput[]
    deleteMany?: PositionActivityScalarWhereInput | PositionActivityScalarWhereInput[]
  }

  export type RedemptionUncheckedUpdateManyWithoutMarketNestedInput = {
    create?: XOR<RedemptionCreateWithoutMarketInput, RedemptionUncheckedCreateWithoutMarketInput> | RedemptionCreateWithoutMarketInput[] | RedemptionUncheckedCreateWithoutMarketInput[]
    connectOrCreate?: RedemptionCreateOrConnectWithoutMarketInput | RedemptionCreateOrConnectWithoutMarketInput[]
    upsert?: RedemptionUpsertWithWhereUniqueWithoutMarketInput | RedemptionUpsertWithWhereUniqueWithoutMarketInput[]
    createMany?: RedemptionCreateManyMarketInputEnvelope
    set?: RedemptionWhereUniqueInput | RedemptionWhereUniqueInput[]
    disconnect?: RedemptionWhereUniqueInput | RedemptionWhereUniqueInput[]
    delete?: RedemptionWhereUniqueInput | RedemptionWhereUniqueInput[]
    connect?: RedemptionWhereUniqueInput | RedemptionWhereUniqueInput[]
    update?: RedemptionUpdateWithWhereUniqueWithoutMarketInput | RedemptionUpdateWithWhereUniqueWithoutMarketInput[]
    updateMany?: RedemptionUpdateManyWithWhereWithoutMarketInput | RedemptionUpdateManyWithWhereWithoutMarketInput[]
    deleteMany?: RedemptionScalarWhereInput | RedemptionScalarWhereInput[]
  }

  export type MarketIntelligenceUncheckedUpdateOneWithoutMarketNestedInput = {
    create?: XOR<MarketIntelligenceCreateWithoutMarketInput, MarketIntelligenceUncheckedCreateWithoutMarketInput>
    connectOrCreate?: MarketIntelligenceCreateOrConnectWithoutMarketInput
    upsert?: MarketIntelligenceUpsertWithoutMarketInput
    disconnect?: MarketIntelligenceWhereInput | boolean
    delete?: MarketIntelligenceWhereInput | boolean
    connect?: MarketIntelligenceWhereUniqueInput
    update?: XOR<XOR<MarketIntelligenceUpdateToOneWithWhereWithoutMarketInput, MarketIntelligenceUpdateWithoutMarketInput>, MarketIntelligenceUncheckedUpdateWithoutMarketInput>
  }

  export type MarketCreateNestedOneWithoutTradesInput = {
    create?: XOR<MarketCreateWithoutTradesInput, MarketUncheckedCreateWithoutTradesInput>
    connectOrCreate?: MarketCreateOrConnectWithoutTradesInput
    connect?: MarketWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type MarketUpdateOneRequiredWithoutTradesNestedInput = {
    create?: XOR<MarketCreateWithoutTradesInput, MarketUncheckedCreateWithoutTradesInput>
    connectOrCreate?: MarketCreateOrConnectWithoutTradesInput
    upsert?: MarketUpsertWithoutTradesInput
    connect?: MarketWhereUniqueInput
    update?: XOR<XOR<MarketUpdateToOneWithWhereWithoutTradesInput, MarketUpdateWithoutTradesInput>, MarketUncheckedUpdateWithoutTradesInput>
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type MarketCreateNestedOneWithoutPositionActivitiesInput = {
    create?: XOR<MarketCreateWithoutPositionActivitiesInput, MarketUncheckedCreateWithoutPositionActivitiesInput>
    connectOrCreate?: MarketCreateOrConnectWithoutPositionActivitiesInput
    connect?: MarketWhereUniqueInput
  }

  export type MarketUpdateOneRequiredWithoutPositionActivitiesNestedInput = {
    create?: XOR<MarketCreateWithoutPositionActivitiesInput, MarketUncheckedCreateWithoutPositionActivitiesInput>
    connectOrCreate?: MarketCreateOrConnectWithoutPositionActivitiesInput
    upsert?: MarketUpsertWithoutPositionActivitiesInput
    connect?: MarketWhereUniqueInput
    update?: XOR<XOR<MarketUpdateToOneWithWhereWithoutPositionActivitiesInput, MarketUpdateWithoutPositionActivitiesInput>, MarketUncheckedUpdateWithoutPositionActivitiesInput>
  }

  export type MarketCreateNestedOneWithoutRedemptionsInput = {
    create?: XOR<MarketCreateWithoutRedemptionsInput, MarketUncheckedCreateWithoutRedemptionsInput>
    connectOrCreate?: MarketCreateOrConnectWithoutRedemptionsInput
    connect?: MarketWhereUniqueInput
  }

  export type MarketUpdateOneRequiredWithoutRedemptionsNestedInput = {
    create?: XOR<MarketCreateWithoutRedemptionsInput, MarketUncheckedCreateWithoutRedemptionsInput>
    connectOrCreate?: MarketCreateOrConnectWithoutRedemptionsInput
    upsert?: MarketUpsertWithoutRedemptionsInput
    connect?: MarketWhereUniqueInput
    update?: XOR<XOR<MarketUpdateToOneWithWhereWithoutRedemptionsInput, MarketUpdateWithoutRedemptionsInput>, MarketUncheckedUpdateWithoutRedemptionsInput>
  }

  export type MarketCreateNestedOneWithoutIntelligenceInput = {
    create?: XOR<MarketCreateWithoutIntelligenceInput, MarketUncheckedCreateWithoutIntelligenceInput>
    connectOrCreate?: MarketCreateOrConnectWithoutIntelligenceInput
    connect?: MarketWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MarketUpdateOneRequiredWithoutIntelligenceNestedInput = {
    create?: XOR<MarketCreateWithoutIntelligenceInput, MarketUncheckedCreateWithoutIntelligenceInput>
    connectOrCreate?: MarketCreateOrConnectWithoutIntelligenceInput
    upsert?: MarketUpsertWithoutIntelligenceInput
    connect?: MarketWhereUniqueInput
    update?: XOR<XOR<MarketUpdateToOneWithWhereWithoutIntelligenceInput, MarketUpdateWithoutIntelligenceInput>, MarketUncheckedUpdateWithoutIntelligenceInput>
  }

  export type TraderProfileCreatetagsInput = {
    set: string[]
  }

  export type TraderProfileUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type TradeCreateWithoutMarketInput = {
    txHash: string
    logIndex: number
    tokenId: string
    outcome?: string | null
    side: string
    price: Decimal | DecimalJsLike | number | string
    size: Decimal | DecimalJsLike | number | string
    maker: string
    taker: string
    timestamp: Date | string
  }

  export type TradeUncheckedCreateWithoutMarketInput = {
    txHash: string
    logIndex: number
    tokenId: string
    outcome?: string | null
    side: string
    price: Decimal | DecimalJsLike | number | string
    size: Decimal | DecimalJsLike | number | string
    maker: string
    taker: string
    timestamp: Date | string
  }

  export type TradeCreateOrConnectWithoutMarketInput = {
    where: TradeWhereUniqueInput
    create: XOR<TradeCreateWithoutMarketInput, TradeUncheckedCreateWithoutMarketInput>
  }

  export type TradeCreateManyMarketInputEnvelope = {
    data: TradeCreateManyMarketInput | TradeCreateManyMarketInput[]
    skipDuplicates?: boolean
  }

  export type PositionActivityCreateWithoutMarketInput = {
    id?: string
    txHash: string
    logIndex: number
    user: string
    type: string
    amount: Decimal | DecimalJsLike | number | string
    timestamp: Date | string
  }

  export type PositionActivityUncheckedCreateWithoutMarketInput = {
    id?: string
    txHash: string
    logIndex: number
    user: string
    type: string
    amount: Decimal | DecimalJsLike | number | string
    timestamp: Date | string
  }

  export type PositionActivityCreateOrConnectWithoutMarketInput = {
    where: PositionActivityWhereUniqueInput
    create: XOR<PositionActivityCreateWithoutMarketInput, PositionActivityUncheckedCreateWithoutMarketInput>
  }

  export type PositionActivityCreateManyMarketInputEnvelope = {
    data: PositionActivityCreateManyMarketInput | PositionActivityCreateManyMarketInput[]
    skipDuplicates?: boolean
  }

  export type RedemptionCreateWithoutMarketInput = {
    id?: string
    txHash: string
    logIndex: number
    user: string
    payout: Decimal | DecimalJsLike | number | string
    timestamp: Date | string
  }

  export type RedemptionUncheckedCreateWithoutMarketInput = {
    id?: string
    txHash: string
    logIndex: number
    user: string
    payout: Decimal | DecimalJsLike | number | string
    timestamp: Date | string
  }

  export type RedemptionCreateOrConnectWithoutMarketInput = {
    where: RedemptionWhereUniqueInput
    create: XOR<RedemptionCreateWithoutMarketInput, RedemptionUncheckedCreateWithoutMarketInput>
  }

  export type RedemptionCreateManyMarketInputEnvelope = {
    data: RedemptionCreateManyMarketInput | RedemptionCreateManyMarketInput[]
    skipDuplicates?: boolean
  }

  export type MarketIntelligenceCreateWithoutMarketInput = {
    narrative: string
    aiProbability?: number | null
    riskScore: number
    sentiment?: string | null
    updatedAt?: Date | string
  }

  export type MarketIntelligenceUncheckedCreateWithoutMarketInput = {
    id?: number
    narrative: string
    aiProbability?: number | null
    riskScore: number
    sentiment?: string | null
    updatedAt?: Date | string
  }

  export type MarketIntelligenceCreateOrConnectWithoutMarketInput = {
    where: MarketIntelligenceWhereUniqueInput
    create: XOR<MarketIntelligenceCreateWithoutMarketInput, MarketIntelligenceUncheckedCreateWithoutMarketInput>
  }

  export type TradeUpsertWithWhereUniqueWithoutMarketInput = {
    where: TradeWhereUniqueInput
    update: XOR<TradeUpdateWithoutMarketInput, TradeUncheckedUpdateWithoutMarketInput>
    create: XOR<TradeCreateWithoutMarketInput, TradeUncheckedCreateWithoutMarketInput>
  }

  export type TradeUpdateWithWhereUniqueWithoutMarketInput = {
    where: TradeWhereUniqueInput
    data: XOR<TradeUpdateWithoutMarketInput, TradeUncheckedUpdateWithoutMarketInput>
  }

  export type TradeUpdateManyWithWhereWithoutMarketInput = {
    where: TradeScalarWhereInput
    data: XOR<TradeUpdateManyMutationInput, TradeUncheckedUpdateManyWithoutMarketInput>
  }

  export type TradeScalarWhereInput = {
    AND?: TradeScalarWhereInput | TradeScalarWhereInput[]
    OR?: TradeScalarWhereInput[]
    NOT?: TradeScalarWhereInput | TradeScalarWhereInput[]
    txHash?: StringFilter<"Trade"> | string
    logIndex?: IntFilter<"Trade"> | number
    marketId?: IntFilter<"Trade"> | number
    tokenId?: StringFilter<"Trade"> | string
    outcome?: StringNullableFilter<"Trade"> | string | null
    side?: StringFilter<"Trade"> | string
    price?: DecimalFilter<"Trade"> | Decimal | DecimalJsLike | number | string
    size?: DecimalFilter<"Trade"> | Decimal | DecimalJsLike | number | string
    maker?: StringFilter<"Trade"> | string
    taker?: StringFilter<"Trade"> | string
    timestamp?: DateTimeFilter<"Trade"> | Date | string
  }

  export type PositionActivityUpsertWithWhereUniqueWithoutMarketInput = {
    where: PositionActivityWhereUniqueInput
    update: XOR<PositionActivityUpdateWithoutMarketInput, PositionActivityUncheckedUpdateWithoutMarketInput>
    create: XOR<PositionActivityCreateWithoutMarketInput, PositionActivityUncheckedCreateWithoutMarketInput>
  }

  export type PositionActivityUpdateWithWhereUniqueWithoutMarketInput = {
    where: PositionActivityWhereUniqueInput
    data: XOR<PositionActivityUpdateWithoutMarketInput, PositionActivityUncheckedUpdateWithoutMarketInput>
  }

  export type PositionActivityUpdateManyWithWhereWithoutMarketInput = {
    where: PositionActivityScalarWhereInput
    data: XOR<PositionActivityUpdateManyMutationInput, PositionActivityUncheckedUpdateManyWithoutMarketInput>
  }

  export type PositionActivityScalarWhereInput = {
    AND?: PositionActivityScalarWhereInput | PositionActivityScalarWhereInput[]
    OR?: PositionActivityScalarWhereInput[]
    NOT?: PositionActivityScalarWhereInput | PositionActivityScalarWhereInput[]
    id?: StringFilter<"PositionActivity"> | string
    txHash?: StringFilter<"PositionActivity"> | string
    logIndex?: IntFilter<"PositionActivity"> | number
    marketId?: IntFilter<"PositionActivity"> | number
    user?: StringFilter<"PositionActivity"> | string
    type?: StringFilter<"PositionActivity"> | string
    amount?: DecimalFilter<"PositionActivity"> | Decimal | DecimalJsLike | number | string
    timestamp?: DateTimeFilter<"PositionActivity"> | Date | string
  }

  export type RedemptionUpsertWithWhereUniqueWithoutMarketInput = {
    where: RedemptionWhereUniqueInput
    update: XOR<RedemptionUpdateWithoutMarketInput, RedemptionUncheckedUpdateWithoutMarketInput>
    create: XOR<RedemptionCreateWithoutMarketInput, RedemptionUncheckedCreateWithoutMarketInput>
  }

  export type RedemptionUpdateWithWhereUniqueWithoutMarketInput = {
    where: RedemptionWhereUniqueInput
    data: XOR<RedemptionUpdateWithoutMarketInput, RedemptionUncheckedUpdateWithoutMarketInput>
  }

  export type RedemptionUpdateManyWithWhereWithoutMarketInput = {
    where: RedemptionScalarWhereInput
    data: XOR<RedemptionUpdateManyMutationInput, RedemptionUncheckedUpdateManyWithoutMarketInput>
  }

  export type RedemptionScalarWhereInput = {
    AND?: RedemptionScalarWhereInput | RedemptionScalarWhereInput[]
    OR?: RedemptionScalarWhereInput[]
    NOT?: RedemptionScalarWhereInput | RedemptionScalarWhereInput[]
    id?: StringFilter<"Redemption"> | string
    txHash?: StringFilter<"Redemption"> | string
    logIndex?: IntFilter<"Redemption"> | number
    marketId?: IntFilter<"Redemption"> | number
    user?: StringFilter<"Redemption"> | string
    payout?: DecimalFilter<"Redemption"> | Decimal | DecimalJsLike | number | string
    timestamp?: DateTimeFilter<"Redemption"> | Date | string
  }

  export type MarketIntelligenceUpsertWithoutMarketInput = {
    update: XOR<MarketIntelligenceUpdateWithoutMarketInput, MarketIntelligenceUncheckedUpdateWithoutMarketInput>
    create: XOR<MarketIntelligenceCreateWithoutMarketInput, MarketIntelligenceUncheckedCreateWithoutMarketInput>
    where?: MarketIntelligenceWhereInput
  }

  export type MarketIntelligenceUpdateToOneWithWhereWithoutMarketInput = {
    where?: MarketIntelligenceWhereInput
    data: XOR<MarketIntelligenceUpdateWithoutMarketInput, MarketIntelligenceUncheckedUpdateWithoutMarketInput>
  }

  export type MarketIntelligenceUpdateWithoutMarketInput = {
    narrative?: StringFieldUpdateOperationsInput | string
    aiProbability?: NullableFloatFieldUpdateOperationsInput | number | null
    riskScore?: IntFieldUpdateOperationsInput | number
    sentiment?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketIntelligenceUncheckedUpdateWithoutMarketInput = {
    id?: IntFieldUpdateOperationsInput | number
    narrative?: StringFieldUpdateOperationsInput | string
    aiProbability?: NullableFloatFieldUpdateOperationsInput | number | null
    riskScore?: IntFieldUpdateOperationsInput | number
    sentiment?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketCreateWithoutTradesInput = {
    slug?: string | null
    conditionId: string
    questionId: string
    oracle: string
    outcomeCount: number
    enableNegRisk?: boolean
    yesTokenId: string
    noTokenId: string
    collateralToken: string
    title?: string | null
    status?: string
    createdAt: Date | string
    resolvedAt?: Date | string | null
    positionActivities?: PositionActivityCreateNestedManyWithoutMarketInput
    redemptions?: RedemptionCreateNestedManyWithoutMarketInput
    intelligence?: MarketIntelligenceCreateNestedOneWithoutMarketInput
  }

  export type MarketUncheckedCreateWithoutTradesInput = {
    id?: number
    slug?: string | null
    conditionId: string
    questionId: string
    oracle: string
    outcomeCount: number
    enableNegRisk?: boolean
    yesTokenId: string
    noTokenId: string
    collateralToken: string
    title?: string | null
    status?: string
    createdAt: Date | string
    resolvedAt?: Date | string | null
    positionActivities?: PositionActivityUncheckedCreateNestedManyWithoutMarketInput
    redemptions?: RedemptionUncheckedCreateNestedManyWithoutMarketInput
    intelligence?: MarketIntelligenceUncheckedCreateNestedOneWithoutMarketInput
  }

  export type MarketCreateOrConnectWithoutTradesInput = {
    where: MarketWhereUniqueInput
    create: XOR<MarketCreateWithoutTradesInput, MarketUncheckedCreateWithoutTradesInput>
  }

  export type MarketUpsertWithoutTradesInput = {
    update: XOR<MarketUpdateWithoutTradesInput, MarketUncheckedUpdateWithoutTradesInput>
    create: XOR<MarketCreateWithoutTradesInput, MarketUncheckedCreateWithoutTradesInput>
    where?: MarketWhereInput
  }

  export type MarketUpdateToOneWithWhereWithoutTradesInput = {
    where?: MarketWhereInput
    data: XOR<MarketUpdateWithoutTradesInput, MarketUncheckedUpdateWithoutTradesInput>
  }

  export type MarketUpdateWithoutTradesInput = {
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    conditionId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    oracle?: StringFieldUpdateOperationsInput | string
    outcomeCount?: IntFieldUpdateOperationsInput | number
    enableNegRisk?: BoolFieldUpdateOperationsInput | boolean
    yesTokenId?: StringFieldUpdateOperationsInput | string
    noTokenId?: StringFieldUpdateOperationsInput | string
    collateralToken?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    positionActivities?: PositionActivityUpdateManyWithoutMarketNestedInput
    redemptions?: RedemptionUpdateManyWithoutMarketNestedInput
    intelligence?: MarketIntelligenceUpdateOneWithoutMarketNestedInput
  }

  export type MarketUncheckedUpdateWithoutTradesInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    conditionId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    oracle?: StringFieldUpdateOperationsInput | string
    outcomeCount?: IntFieldUpdateOperationsInput | number
    enableNegRisk?: BoolFieldUpdateOperationsInput | boolean
    yesTokenId?: StringFieldUpdateOperationsInput | string
    noTokenId?: StringFieldUpdateOperationsInput | string
    collateralToken?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    positionActivities?: PositionActivityUncheckedUpdateManyWithoutMarketNestedInput
    redemptions?: RedemptionUncheckedUpdateManyWithoutMarketNestedInput
    intelligence?: MarketIntelligenceUncheckedUpdateOneWithoutMarketNestedInput
  }

  export type MarketCreateWithoutPositionActivitiesInput = {
    slug?: string | null
    conditionId: string
    questionId: string
    oracle: string
    outcomeCount: number
    enableNegRisk?: boolean
    yesTokenId: string
    noTokenId: string
    collateralToken: string
    title?: string | null
    status?: string
    createdAt: Date | string
    resolvedAt?: Date | string | null
    trades?: TradeCreateNestedManyWithoutMarketInput
    redemptions?: RedemptionCreateNestedManyWithoutMarketInput
    intelligence?: MarketIntelligenceCreateNestedOneWithoutMarketInput
  }

  export type MarketUncheckedCreateWithoutPositionActivitiesInput = {
    id?: number
    slug?: string | null
    conditionId: string
    questionId: string
    oracle: string
    outcomeCount: number
    enableNegRisk?: boolean
    yesTokenId: string
    noTokenId: string
    collateralToken: string
    title?: string | null
    status?: string
    createdAt: Date | string
    resolvedAt?: Date | string | null
    trades?: TradeUncheckedCreateNestedManyWithoutMarketInput
    redemptions?: RedemptionUncheckedCreateNestedManyWithoutMarketInput
    intelligence?: MarketIntelligenceUncheckedCreateNestedOneWithoutMarketInput
  }

  export type MarketCreateOrConnectWithoutPositionActivitiesInput = {
    where: MarketWhereUniqueInput
    create: XOR<MarketCreateWithoutPositionActivitiesInput, MarketUncheckedCreateWithoutPositionActivitiesInput>
  }

  export type MarketUpsertWithoutPositionActivitiesInput = {
    update: XOR<MarketUpdateWithoutPositionActivitiesInput, MarketUncheckedUpdateWithoutPositionActivitiesInput>
    create: XOR<MarketCreateWithoutPositionActivitiesInput, MarketUncheckedCreateWithoutPositionActivitiesInput>
    where?: MarketWhereInput
  }

  export type MarketUpdateToOneWithWhereWithoutPositionActivitiesInput = {
    where?: MarketWhereInput
    data: XOR<MarketUpdateWithoutPositionActivitiesInput, MarketUncheckedUpdateWithoutPositionActivitiesInput>
  }

  export type MarketUpdateWithoutPositionActivitiesInput = {
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    conditionId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    oracle?: StringFieldUpdateOperationsInput | string
    outcomeCount?: IntFieldUpdateOperationsInput | number
    enableNegRisk?: BoolFieldUpdateOperationsInput | boolean
    yesTokenId?: StringFieldUpdateOperationsInput | string
    noTokenId?: StringFieldUpdateOperationsInput | string
    collateralToken?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trades?: TradeUpdateManyWithoutMarketNestedInput
    redemptions?: RedemptionUpdateManyWithoutMarketNestedInput
    intelligence?: MarketIntelligenceUpdateOneWithoutMarketNestedInput
  }

  export type MarketUncheckedUpdateWithoutPositionActivitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    conditionId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    oracle?: StringFieldUpdateOperationsInput | string
    outcomeCount?: IntFieldUpdateOperationsInput | number
    enableNegRisk?: BoolFieldUpdateOperationsInput | boolean
    yesTokenId?: StringFieldUpdateOperationsInput | string
    noTokenId?: StringFieldUpdateOperationsInput | string
    collateralToken?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trades?: TradeUncheckedUpdateManyWithoutMarketNestedInput
    redemptions?: RedemptionUncheckedUpdateManyWithoutMarketNestedInput
    intelligence?: MarketIntelligenceUncheckedUpdateOneWithoutMarketNestedInput
  }

  export type MarketCreateWithoutRedemptionsInput = {
    slug?: string | null
    conditionId: string
    questionId: string
    oracle: string
    outcomeCount: number
    enableNegRisk?: boolean
    yesTokenId: string
    noTokenId: string
    collateralToken: string
    title?: string | null
    status?: string
    createdAt: Date | string
    resolvedAt?: Date | string | null
    trades?: TradeCreateNestedManyWithoutMarketInput
    positionActivities?: PositionActivityCreateNestedManyWithoutMarketInput
    intelligence?: MarketIntelligenceCreateNestedOneWithoutMarketInput
  }

  export type MarketUncheckedCreateWithoutRedemptionsInput = {
    id?: number
    slug?: string | null
    conditionId: string
    questionId: string
    oracle: string
    outcomeCount: number
    enableNegRisk?: boolean
    yesTokenId: string
    noTokenId: string
    collateralToken: string
    title?: string | null
    status?: string
    createdAt: Date | string
    resolvedAt?: Date | string | null
    trades?: TradeUncheckedCreateNestedManyWithoutMarketInput
    positionActivities?: PositionActivityUncheckedCreateNestedManyWithoutMarketInput
    intelligence?: MarketIntelligenceUncheckedCreateNestedOneWithoutMarketInput
  }

  export type MarketCreateOrConnectWithoutRedemptionsInput = {
    where: MarketWhereUniqueInput
    create: XOR<MarketCreateWithoutRedemptionsInput, MarketUncheckedCreateWithoutRedemptionsInput>
  }

  export type MarketUpsertWithoutRedemptionsInput = {
    update: XOR<MarketUpdateWithoutRedemptionsInput, MarketUncheckedUpdateWithoutRedemptionsInput>
    create: XOR<MarketCreateWithoutRedemptionsInput, MarketUncheckedCreateWithoutRedemptionsInput>
    where?: MarketWhereInput
  }

  export type MarketUpdateToOneWithWhereWithoutRedemptionsInput = {
    where?: MarketWhereInput
    data: XOR<MarketUpdateWithoutRedemptionsInput, MarketUncheckedUpdateWithoutRedemptionsInput>
  }

  export type MarketUpdateWithoutRedemptionsInput = {
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    conditionId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    oracle?: StringFieldUpdateOperationsInput | string
    outcomeCount?: IntFieldUpdateOperationsInput | number
    enableNegRisk?: BoolFieldUpdateOperationsInput | boolean
    yesTokenId?: StringFieldUpdateOperationsInput | string
    noTokenId?: StringFieldUpdateOperationsInput | string
    collateralToken?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trades?: TradeUpdateManyWithoutMarketNestedInput
    positionActivities?: PositionActivityUpdateManyWithoutMarketNestedInput
    intelligence?: MarketIntelligenceUpdateOneWithoutMarketNestedInput
  }

  export type MarketUncheckedUpdateWithoutRedemptionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    conditionId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    oracle?: StringFieldUpdateOperationsInput | string
    outcomeCount?: IntFieldUpdateOperationsInput | number
    enableNegRisk?: BoolFieldUpdateOperationsInput | boolean
    yesTokenId?: StringFieldUpdateOperationsInput | string
    noTokenId?: StringFieldUpdateOperationsInput | string
    collateralToken?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trades?: TradeUncheckedUpdateManyWithoutMarketNestedInput
    positionActivities?: PositionActivityUncheckedUpdateManyWithoutMarketNestedInput
    intelligence?: MarketIntelligenceUncheckedUpdateOneWithoutMarketNestedInput
  }

  export type MarketCreateWithoutIntelligenceInput = {
    slug?: string | null
    conditionId: string
    questionId: string
    oracle: string
    outcomeCount: number
    enableNegRisk?: boolean
    yesTokenId: string
    noTokenId: string
    collateralToken: string
    title?: string | null
    status?: string
    createdAt: Date | string
    resolvedAt?: Date | string | null
    trades?: TradeCreateNestedManyWithoutMarketInput
    positionActivities?: PositionActivityCreateNestedManyWithoutMarketInput
    redemptions?: RedemptionCreateNestedManyWithoutMarketInput
  }

  export type MarketUncheckedCreateWithoutIntelligenceInput = {
    id?: number
    slug?: string | null
    conditionId: string
    questionId: string
    oracle: string
    outcomeCount: number
    enableNegRisk?: boolean
    yesTokenId: string
    noTokenId: string
    collateralToken: string
    title?: string | null
    status?: string
    createdAt: Date | string
    resolvedAt?: Date | string | null
    trades?: TradeUncheckedCreateNestedManyWithoutMarketInput
    positionActivities?: PositionActivityUncheckedCreateNestedManyWithoutMarketInput
    redemptions?: RedemptionUncheckedCreateNestedManyWithoutMarketInput
  }

  export type MarketCreateOrConnectWithoutIntelligenceInput = {
    where: MarketWhereUniqueInput
    create: XOR<MarketCreateWithoutIntelligenceInput, MarketUncheckedCreateWithoutIntelligenceInput>
  }

  export type MarketUpsertWithoutIntelligenceInput = {
    update: XOR<MarketUpdateWithoutIntelligenceInput, MarketUncheckedUpdateWithoutIntelligenceInput>
    create: XOR<MarketCreateWithoutIntelligenceInput, MarketUncheckedCreateWithoutIntelligenceInput>
    where?: MarketWhereInput
  }

  export type MarketUpdateToOneWithWhereWithoutIntelligenceInput = {
    where?: MarketWhereInput
    data: XOR<MarketUpdateWithoutIntelligenceInput, MarketUncheckedUpdateWithoutIntelligenceInput>
  }

  export type MarketUpdateWithoutIntelligenceInput = {
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    conditionId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    oracle?: StringFieldUpdateOperationsInput | string
    outcomeCount?: IntFieldUpdateOperationsInput | number
    enableNegRisk?: BoolFieldUpdateOperationsInput | boolean
    yesTokenId?: StringFieldUpdateOperationsInput | string
    noTokenId?: StringFieldUpdateOperationsInput | string
    collateralToken?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trades?: TradeUpdateManyWithoutMarketNestedInput
    positionActivities?: PositionActivityUpdateManyWithoutMarketNestedInput
    redemptions?: RedemptionUpdateManyWithoutMarketNestedInput
  }

  export type MarketUncheckedUpdateWithoutIntelligenceInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    conditionId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    oracle?: StringFieldUpdateOperationsInput | string
    outcomeCount?: IntFieldUpdateOperationsInput | number
    enableNegRisk?: BoolFieldUpdateOperationsInput | boolean
    yesTokenId?: StringFieldUpdateOperationsInput | string
    noTokenId?: StringFieldUpdateOperationsInput | string
    collateralToken?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trades?: TradeUncheckedUpdateManyWithoutMarketNestedInput
    positionActivities?: PositionActivityUncheckedUpdateManyWithoutMarketNestedInput
    redemptions?: RedemptionUncheckedUpdateManyWithoutMarketNestedInput
  }

  export type TradeCreateManyMarketInput = {
    txHash: string
    logIndex: number
    tokenId: string
    outcome?: string | null
    side: string
    price: Decimal | DecimalJsLike | number | string
    size: Decimal | DecimalJsLike | number | string
    maker: string
    taker: string
    timestamp: Date | string
  }

  export type PositionActivityCreateManyMarketInput = {
    id?: string
    txHash: string
    logIndex: number
    user: string
    type: string
    amount: Decimal | DecimalJsLike | number | string
    timestamp: Date | string
  }

  export type RedemptionCreateManyMarketInput = {
    id?: string
    txHash: string
    logIndex: number
    user: string
    payout: Decimal | DecimalJsLike | number | string
    timestamp: Date | string
  }

  export type TradeUpdateWithoutMarketInput = {
    txHash?: StringFieldUpdateOperationsInput | string
    logIndex?: IntFieldUpdateOperationsInput | number
    tokenId?: StringFieldUpdateOperationsInput | string
    outcome?: NullableStringFieldUpdateOperationsInput | string | null
    side?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    size?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maker?: StringFieldUpdateOperationsInput | string
    taker?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TradeUncheckedUpdateWithoutMarketInput = {
    txHash?: StringFieldUpdateOperationsInput | string
    logIndex?: IntFieldUpdateOperationsInput | number
    tokenId?: StringFieldUpdateOperationsInput | string
    outcome?: NullableStringFieldUpdateOperationsInput | string | null
    side?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    size?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maker?: StringFieldUpdateOperationsInput | string
    taker?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TradeUncheckedUpdateManyWithoutMarketInput = {
    txHash?: StringFieldUpdateOperationsInput | string
    logIndex?: IntFieldUpdateOperationsInput | number
    tokenId?: StringFieldUpdateOperationsInput | string
    outcome?: NullableStringFieldUpdateOperationsInput | string | null
    side?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    size?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maker?: StringFieldUpdateOperationsInput | string
    taker?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PositionActivityUpdateWithoutMarketInput = {
    id?: StringFieldUpdateOperationsInput | string
    txHash?: StringFieldUpdateOperationsInput | string
    logIndex?: IntFieldUpdateOperationsInput | number
    user?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PositionActivityUncheckedUpdateWithoutMarketInput = {
    id?: StringFieldUpdateOperationsInput | string
    txHash?: StringFieldUpdateOperationsInput | string
    logIndex?: IntFieldUpdateOperationsInput | number
    user?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PositionActivityUncheckedUpdateManyWithoutMarketInput = {
    id?: StringFieldUpdateOperationsInput | string
    txHash?: StringFieldUpdateOperationsInput | string
    logIndex?: IntFieldUpdateOperationsInput | number
    user?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RedemptionUpdateWithoutMarketInput = {
    id?: StringFieldUpdateOperationsInput | string
    txHash?: StringFieldUpdateOperationsInput | string
    logIndex?: IntFieldUpdateOperationsInput | number
    user?: StringFieldUpdateOperationsInput | string
    payout?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RedemptionUncheckedUpdateWithoutMarketInput = {
    id?: StringFieldUpdateOperationsInput | string
    txHash?: StringFieldUpdateOperationsInput | string
    logIndex?: IntFieldUpdateOperationsInput | number
    user?: StringFieldUpdateOperationsInput | string
    payout?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RedemptionUncheckedUpdateManyWithoutMarketInput = {
    id?: StringFieldUpdateOperationsInput | string
    txHash?: StringFieldUpdateOperationsInput | string
    logIndex?: IntFieldUpdateOperationsInput | number
    user?: StringFieldUpdateOperationsInput | string
    payout?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}