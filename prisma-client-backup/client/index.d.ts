
/**
 * Client
**/

import * as runtime from '@prisma/client/runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Pilot
 * 
 */
export type Pilot = $Result.DefaultSelection<Prisma.$PilotPayload>
/**
 * Model SenioritySnapshot
 * 
 */
export type SenioritySnapshot = $Result.DefaultSelection<Prisma.$SenioritySnapshotPayload>
/**
 * Model DataImport
 * 
 */
export type DataImport = $Result.DefaultSelection<Prisma.$DataImportPayload>
/**
 * Model PayScale
 * 
 */
export type PayScale = $Result.DefaultSelection<Prisma.$PayScalePayload>
/**
 * Model Aircraft
 * 
 */
export type Aircraft = $Result.DefaultSelection<Prisma.$AircraftPayload>
/**
 * Model PayRate
 * 
 */
export type PayRate = $Result.DefaultSelection<Prisma.$PayRatePayload>
/**
 * Model Contract
 * 
 */
export type Contract = $Result.DefaultSelection<Prisma.$ContractPayload>
/**
 * Model ContractItem
 * 
 */
export type ContractItem = $Result.DefaultSelection<Prisma.$ContractItemPayload>
/**
 * Model ContractChange
 * 
 */
export type ContractChange = $Result.DefaultSelection<Prisma.$ContractChangePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pilot`: Exposes CRUD operations for the **Pilot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pilots
    * const pilots = await prisma.pilot.findMany()
    * ```
    */
  get pilot(): Prisma.PilotDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.senioritySnapshot`: Exposes CRUD operations for the **SenioritySnapshot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SenioritySnapshots
    * const senioritySnapshots = await prisma.senioritySnapshot.findMany()
    * ```
    */
  get senioritySnapshot(): Prisma.SenioritySnapshotDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dataImport`: Exposes CRUD operations for the **DataImport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DataImports
    * const dataImports = await prisma.dataImport.findMany()
    * ```
    */
  get dataImport(): Prisma.DataImportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payScale`: Exposes CRUD operations for the **PayScale** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PayScales
    * const payScales = await prisma.payScale.findMany()
    * ```
    */
  get payScale(): Prisma.PayScaleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aircraft`: Exposes CRUD operations for the **Aircraft** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Aircraft
    * const aircraft = await prisma.aircraft.findMany()
    * ```
    */
  get aircraft(): Prisma.AircraftDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payRate`: Exposes CRUD operations for the **PayRate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PayRates
    * const payRates = await prisma.payRate.findMany()
    * ```
    */
  get payRate(): Prisma.PayRateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contract`: Exposes CRUD operations for the **Contract** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contracts
    * const contracts = await prisma.contract.findMany()
    * ```
    */
  get contract(): Prisma.ContractDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contractItem`: Exposes CRUD operations for the **ContractItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContractItems
    * const contractItems = await prisma.contractItem.findMany()
    * ```
    */
  get contractItem(): Prisma.ContractItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contractChange`: Exposes CRUD operations for the **ContractChange** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContractChanges
    * const contractChanges = await prisma.contractChange.findMany()
    * ```
    */
  get contractChange(): Prisma.ContractChangeDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.14.0
   * Query Engine version: 717184b7b35ea05dfa71a3236b7af656013e1e49
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    User: 'User',
    Pilot: 'Pilot',
    SenioritySnapshot: 'SenioritySnapshot',
    DataImport: 'DataImport',
    PayScale: 'PayScale',
    Aircraft: 'Aircraft',
    PayRate: 'PayRate',
    Contract: 'Contract',
    ContractItem: 'ContractItem',
    ContractChange: 'ContractChange'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "pilot" | "senioritySnapshot" | "dataImport" | "payScale" | "aircraft" | "payRate" | "contract" | "contractItem" | "contractChange"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Pilot: {
        payload: Prisma.$PilotPayload<ExtArgs>
        fields: Prisma.PilotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PilotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PilotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PilotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PilotPayload>
          }
          findFirst: {
            args: Prisma.PilotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PilotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PilotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PilotPayload>
          }
          findMany: {
            args: Prisma.PilotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PilotPayload>[]
          }
          create: {
            args: Prisma.PilotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PilotPayload>
          }
          createMany: {
            args: Prisma.PilotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PilotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PilotPayload>[]
          }
          delete: {
            args: Prisma.PilotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PilotPayload>
          }
          update: {
            args: Prisma.PilotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PilotPayload>
          }
          deleteMany: {
            args: Prisma.PilotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PilotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PilotUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PilotPayload>[]
          }
          upsert: {
            args: Prisma.PilotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PilotPayload>
          }
          aggregate: {
            args: Prisma.PilotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePilot>
          }
          groupBy: {
            args: Prisma.PilotGroupByArgs<ExtArgs>
            result: $Utils.Optional<PilotGroupByOutputType>[]
          }
          count: {
            args: Prisma.PilotCountArgs<ExtArgs>
            result: $Utils.Optional<PilotCountAggregateOutputType> | number
          }
        }
      }
      SenioritySnapshot: {
        payload: Prisma.$SenioritySnapshotPayload<ExtArgs>
        fields: Prisma.SenioritySnapshotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SenioritySnapshotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SenioritySnapshotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SenioritySnapshotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SenioritySnapshotPayload>
          }
          findFirst: {
            args: Prisma.SenioritySnapshotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SenioritySnapshotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SenioritySnapshotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SenioritySnapshotPayload>
          }
          findMany: {
            args: Prisma.SenioritySnapshotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SenioritySnapshotPayload>[]
          }
          create: {
            args: Prisma.SenioritySnapshotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SenioritySnapshotPayload>
          }
          createMany: {
            args: Prisma.SenioritySnapshotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SenioritySnapshotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SenioritySnapshotPayload>[]
          }
          delete: {
            args: Prisma.SenioritySnapshotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SenioritySnapshotPayload>
          }
          update: {
            args: Prisma.SenioritySnapshotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SenioritySnapshotPayload>
          }
          deleteMany: {
            args: Prisma.SenioritySnapshotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SenioritySnapshotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SenioritySnapshotUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SenioritySnapshotPayload>[]
          }
          upsert: {
            args: Prisma.SenioritySnapshotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SenioritySnapshotPayload>
          }
          aggregate: {
            args: Prisma.SenioritySnapshotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSenioritySnapshot>
          }
          groupBy: {
            args: Prisma.SenioritySnapshotGroupByArgs<ExtArgs>
            result: $Utils.Optional<SenioritySnapshotGroupByOutputType>[]
          }
          count: {
            args: Prisma.SenioritySnapshotCountArgs<ExtArgs>
            result: $Utils.Optional<SenioritySnapshotCountAggregateOutputType> | number
          }
        }
      }
      DataImport: {
        payload: Prisma.$DataImportPayload<ExtArgs>
        fields: Prisma.DataImportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DataImportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataImportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DataImportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataImportPayload>
          }
          findFirst: {
            args: Prisma.DataImportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataImportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DataImportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataImportPayload>
          }
          findMany: {
            args: Prisma.DataImportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataImportPayload>[]
          }
          create: {
            args: Prisma.DataImportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataImportPayload>
          }
          createMany: {
            args: Prisma.DataImportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DataImportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataImportPayload>[]
          }
          delete: {
            args: Prisma.DataImportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataImportPayload>
          }
          update: {
            args: Prisma.DataImportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataImportPayload>
          }
          deleteMany: {
            args: Prisma.DataImportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DataImportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DataImportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataImportPayload>[]
          }
          upsert: {
            args: Prisma.DataImportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataImportPayload>
          }
          aggregate: {
            args: Prisma.DataImportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDataImport>
          }
          groupBy: {
            args: Prisma.DataImportGroupByArgs<ExtArgs>
            result: $Utils.Optional<DataImportGroupByOutputType>[]
          }
          count: {
            args: Prisma.DataImportCountArgs<ExtArgs>
            result: $Utils.Optional<DataImportCountAggregateOutputType> | number
          }
        }
      }
      PayScale: {
        payload: Prisma.$PayScalePayload<ExtArgs>
        fields: Prisma.PayScaleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PayScaleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayScalePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PayScaleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayScalePayload>
          }
          findFirst: {
            args: Prisma.PayScaleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayScalePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PayScaleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayScalePayload>
          }
          findMany: {
            args: Prisma.PayScaleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayScalePayload>[]
          }
          create: {
            args: Prisma.PayScaleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayScalePayload>
          }
          createMany: {
            args: Prisma.PayScaleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PayScaleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayScalePayload>[]
          }
          delete: {
            args: Prisma.PayScaleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayScalePayload>
          }
          update: {
            args: Prisma.PayScaleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayScalePayload>
          }
          deleteMany: {
            args: Prisma.PayScaleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PayScaleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PayScaleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayScalePayload>[]
          }
          upsert: {
            args: Prisma.PayScaleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayScalePayload>
          }
          aggregate: {
            args: Prisma.PayScaleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayScale>
          }
          groupBy: {
            args: Prisma.PayScaleGroupByArgs<ExtArgs>
            result: $Utils.Optional<PayScaleGroupByOutputType>[]
          }
          count: {
            args: Prisma.PayScaleCountArgs<ExtArgs>
            result: $Utils.Optional<PayScaleCountAggregateOutputType> | number
          }
        }
      }
      Aircraft: {
        payload: Prisma.$AircraftPayload<ExtArgs>
        fields: Prisma.AircraftFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AircraftFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AircraftPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AircraftFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AircraftPayload>
          }
          findFirst: {
            args: Prisma.AircraftFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AircraftPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AircraftFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AircraftPayload>
          }
          findMany: {
            args: Prisma.AircraftFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AircraftPayload>[]
          }
          create: {
            args: Prisma.AircraftCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AircraftPayload>
          }
          createMany: {
            args: Prisma.AircraftCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AircraftCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AircraftPayload>[]
          }
          delete: {
            args: Prisma.AircraftDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AircraftPayload>
          }
          update: {
            args: Prisma.AircraftUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AircraftPayload>
          }
          deleteMany: {
            args: Prisma.AircraftDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AircraftUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AircraftUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AircraftPayload>[]
          }
          upsert: {
            args: Prisma.AircraftUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AircraftPayload>
          }
          aggregate: {
            args: Prisma.AircraftAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAircraft>
          }
          groupBy: {
            args: Prisma.AircraftGroupByArgs<ExtArgs>
            result: $Utils.Optional<AircraftGroupByOutputType>[]
          }
          count: {
            args: Prisma.AircraftCountArgs<ExtArgs>
            result: $Utils.Optional<AircraftCountAggregateOutputType> | number
          }
        }
      }
      PayRate: {
        payload: Prisma.$PayRatePayload<ExtArgs>
        fields: Prisma.PayRateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PayRateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayRatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PayRateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayRatePayload>
          }
          findFirst: {
            args: Prisma.PayRateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayRatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PayRateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayRatePayload>
          }
          findMany: {
            args: Prisma.PayRateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayRatePayload>[]
          }
          create: {
            args: Prisma.PayRateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayRatePayload>
          }
          createMany: {
            args: Prisma.PayRateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PayRateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayRatePayload>[]
          }
          delete: {
            args: Prisma.PayRateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayRatePayload>
          }
          update: {
            args: Prisma.PayRateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayRatePayload>
          }
          deleteMany: {
            args: Prisma.PayRateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PayRateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PayRateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayRatePayload>[]
          }
          upsert: {
            args: Prisma.PayRateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayRatePayload>
          }
          aggregate: {
            args: Prisma.PayRateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayRate>
          }
          groupBy: {
            args: Prisma.PayRateGroupByArgs<ExtArgs>
            result: $Utils.Optional<PayRateGroupByOutputType>[]
          }
          count: {
            args: Prisma.PayRateCountArgs<ExtArgs>
            result: $Utils.Optional<PayRateCountAggregateOutputType> | number
          }
        }
      }
      Contract: {
        payload: Prisma.$ContractPayload<ExtArgs>
        fields: Prisma.ContractFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContractFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContractFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          findFirst: {
            args: Prisma.ContractFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContractFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          findMany: {
            args: Prisma.ContractFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>[]
          }
          create: {
            args: Prisma.ContractCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          createMany: {
            args: Prisma.ContractCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContractCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>[]
          }
          delete: {
            args: Prisma.ContractDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          update: {
            args: Prisma.ContractUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          deleteMany: {
            args: Prisma.ContractDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContractUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContractUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>[]
          }
          upsert: {
            args: Prisma.ContractUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          aggregate: {
            args: Prisma.ContractAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContract>
          }
          groupBy: {
            args: Prisma.ContractGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContractGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContractCountArgs<ExtArgs>
            result: $Utils.Optional<ContractCountAggregateOutputType> | number
          }
        }
      }
      ContractItem: {
        payload: Prisma.$ContractItemPayload<ExtArgs>
        fields: Prisma.ContractItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContractItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContractItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractItemPayload>
          }
          findFirst: {
            args: Prisma.ContractItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContractItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractItemPayload>
          }
          findMany: {
            args: Prisma.ContractItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractItemPayload>[]
          }
          create: {
            args: Prisma.ContractItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractItemPayload>
          }
          createMany: {
            args: Prisma.ContractItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContractItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractItemPayload>[]
          }
          delete: {
            args: Prisma.ContractItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractItemPayload>
          }
          update: {
            args: Prisma.ContractItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractItemPayload>
          }
          deleteMany: {
            args: Prisma.ContractItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContractItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContractItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractItemPayload>[]
          }
          upsert: {
            args: Prisma.ContractItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractItemPayload>
          }
          aggregate: {
            args: Prisma.ContractItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContractItem>
          }
          groupBy: {
            args: Prisma.ContractItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContractItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContractItemCountArgs<ExtArgs>
            result: $Utils.Optional<ContractItemCountAggregateOutputType> | number
          }
        }
      }
      ContractChange: {
        payload: Prisma.$ContractChangePayload<ExtArgs>
        fields: Prisma.ContractChangeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContractChangeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractChangePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContractChangeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractChangePayload>
          }
          findFirst: {
            args: Prisma.ContractChangeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractChangePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContractChangeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractChangePayload>
          }
          findMany: {
            args: Prisma.ContractChangeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractChangePayload>[]
          }
          create: {
            args: Prisma.ContractChangeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractChangePayload>
          }
          createMany: {
            args: Prisma.ContractChangeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContractChangeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractChangePayload>[]
          }
          delete: {
            args: Prisma.ContractChangeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractChangePayload>
          }
          update: {
            args: Prisma.ContractChangeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractChangePayload>
          }
          deleteMany: {
            args: Prisma.ContractChangeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContractChangeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContractChangeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractChangePayload>[]
          }
          upsert: {
            args: Prisma.ContractChangeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractChangePayload>
          }
          aggregate: {
            args: Prisma.ContractChangeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContractChange>
          }
          groupBy: {
            args: Prisma.ContractChangeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContractChangeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContractChangeCountArgs<ExtArgs>
            result: $Utils.Optional<ContractChangeCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    pilot?: PilotOmit
    senioritySnapshot?: SenioritySnapshotOmit
    dataImport?: DataImportOmit
    payScale?: PayScaleOmit
    aircraft?: AircraftOmit
    payRate?: PayRateOmit
    contract?: ContractOmit
    contractItem?: ContractItemOmit
    contractChange?: ContractChangeOmit
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
   * Count Type PilotCountOutputType
   */

  export type PilotCountOutputType = {
    senioritySnapshots: number
  }

  export type PilotCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    senioritySnapshots?: boolean | PilotCountOutputTypeCountSenioritySnapshotsArgs
  }

  // Custom InputTypes
  /**
   * PilotCountOutputType without action
   */
  export type PilotCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PilotCountOutputType
     */
    select?: PilotCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PilotCountOutputType without action
   */
  export type PilotCountOutputTypeCountSenioritySnapshotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SenioritySnapshotWhereInput
  }


  /**
   * Count Type PayScaleCountOutputType
   */

  export type PayScaleCountOutputType = {
    payRates: number
  }

  export type PayScaleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payRates?: boolean | PayScaleCountOutputTypeCountPayRatesArgs
  }

  // Custom InputTypes
  /**
   * PayScaleCountOutputType without action
   */
  export type PayScaleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayScaleCountOutputType
     */
    select?: PayScaleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PayScaleCountOutputType without action
   */
  export type PayScaleCountOutputTypeCountPayRatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayRateWhereInput
  }


  /**
   * Count Type AircraftCountOutputType
   */

  export type AircraftCountOutputType = {
    payRates: number
  }

  export type AircraftCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payRates?: boolean | AircraftCountOutputTypeCountPayRatesArgs
  }

  // Custom InputTypes
  /**
   * AircraftCountOutputType without action
   */
  export type AircraftCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AircraftCountOutputType
     */
    select?: AircraftCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AircraftCountOutputType without action
   */
  export type AircraftCountOutputTypeCountPayRatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayRateWhereInput
  }


  /**
   * Count Type ContractCountOutputType
   */

  export type ContractCountOutputType = {
    nextVersions: number
    payScales: number
    contractItems: number
    changeLog: number
  }

  export type ContractCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    nextVersions?: boolean | ContractCountOutputTypeCountNextVersionsArgs
    payScales?: boolean | ContractCountOutputTypeCountPayScalesArgs
    contractItems?: boolean | ContractCountOutputTypeCountContractItemsArgs
    changeLog?: boolean | ContractCountOutputTypeCountChangeLogArgs
  }

  // Custom InputTypes
  /**
   * ContractCountOutputType without action
   */
  export type ContractCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractCountOutputType
     */
    select?: ContractCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ContractCountOutputType without action
   */
  export type ContractCountOutputTypeCountNextVersionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContractWhereInput
  }

  /**
   * ContractCountOutputType without action
   */
  export type ContractCountOutputTypeCountPayScalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayScaleWhereInput
  }

  /**
   * ContractCountOutputType without action
   */
  export type ContractCountOutputTypeCountContractItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContractItemWhereInput
  }

  /**
   * ContractCountOutputType without action
   */
  export type ContractCountOutputTypeCountChangeLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContractChangeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    firebaseUid: string | null
    email: string | null
    emailVerified: boolean | null
    displayName: string | null
    employeeId: string | null
    firstName: string | null
    lastName: string | null
    registrationDate: Date | null
    lastLoginDate: Date | null
    isActive: boolean | null
    accountType: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    firebaseUid: string | null
    email: string | null
    emailVerified: boolean | null
    displayName: string | null
    employeeId: string | null
    firstName: string | null
    lastName: string | null
    registrationDate: Date | null
    lastLoginDate: Date | null
    isActive: boolean | null
    accountType: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firebaseUid: number
    email: number
    emailVerified: number
    displayName: number
    employeeId: number
    firstName: number
    lastName: number
    registrationDate: number
    lastLoginDate: number
    isActive: number
    accountType: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    firebaseUid?: true
    email?: true
    emailVerified?: true
    displayName?: true
    employeeId?: true
    firstName?: true
    lastName?: true
    registrationDate?: true
    lastLoginDate?: true
    isActive?: true
    accountType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firebaseUid?: true
    email?: true
    emailVerified?: true
    displayName?: true
    employeeId?: true
    firstName?: true
    lastName?: true
    registrationDate?: true
    lastLoginDate?: true
    isActive?: true
    accountType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firebaseUid?: true
    email?: true
    emailVerified?: true
    displayName?: true
    employeeId?: true
    firstName?: true
    lastName?: true
    registrationDate?: true
    lastLoginDate?: true
    isActive?: true
    accountType?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    firebaseUid: string
    email: string
    emailVerified: boolean
    displayName: string | null
    employeeId: string
    firstName: string | null
    lastName: string | null
    registrationDate: Date
    lastLoginDate: Date | null
    isActive: boolean
    accountType: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firebaseUid?: boolean
    email?: boolean
    emailVerified?: boolean
    displayName?: boolean
    employeeId?: boolean
    firstName?: boolean
    lastName?: boolean
    registrationDate?: boolean
    lastLoginDate?: boolean
    isActive?: boolean
    accountType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pilot?: boolean | User$pilotArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firebaseUid?: boolean
    email?: boolean
    emailVerified?: boolean
    displayName?: boolean
    employeeId?: boolean
    firstName?: boolean
    lastName?: boolean
    registrationDate?: boolean
    lastLoginDate?: boolean
    isActive?: boolean
    accountType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pilot?: boolean | User$pilotArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firebaseUid?: boolean
    email?: boolean
    emailVerified?: boolean
    displayName?: boolean
    employeeId?: boolean
    firstName?: boolean
    lastName?: boolean
    registrationDate?: boolean
    lastLoginDate?: boolean
    isActive?: boolean
    accountType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pilot?: boolean | User$pilotArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    firebaseUid?: boolean
    email?: boolean
    emailVerified?: boolean
    displayName?: boolean
    employeeId?: boolean
    firstName?: boolean
    lastName?: boolean
    registrationDate?: boolean
    lastLoginDate?: boolean
    isActive?: boolean
    accountType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firebaseUid" | "email" | "emailVerified" | "displayName" | "employeeId" | "firstName" | "lastName" | "registrationDate" | "lastLoginDate" | "isActive" | "accountType" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pilot?: boolean | User$pilotArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pilot?: boolean | User$pilotArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pilot?: boolean | User$pilotArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      pilot: Prisma.$PilotPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firebaseUid: string
      email: string
      emailVerified: boolean
      displayName: string | null
      employeeId: string
      firstName: string | null
      lastName: string | null
      registrationDate: Date
      lastLoginDate: Date | null
      isActive: boolean
      accountType: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pilot<T extends User$pilotArgs<ExtArgs> = {}>(args?: Subset<T, User$pilotArgs<ExtArgs>>): Prisma__PilotClient<$Result.GetResult<Prisma.$PilotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly firebaseUid: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly displayName: FieldRef<"User", 'String'>
    readonly employeeId: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly registrationDate: FieldRef<"User", 'DateTime'>
    readonly lastLoginDate: FieldRef<"User", 'DateTime'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly accountType: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.pilot
   */
  export type User$pilotArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pilot
     */
    select?: PilotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pilot
     */
    omit?: PilotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PilotInclude<ExtArgs> | null
    where?: PilotWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Pilot
   */

  export type AggregatePilot = {
    _count: PilotCountAggregateOutputType | null
    _avg: PilotAvgAggregateOutputType | null
    _sum: PilotSumAggregateOutputType | null
    _min: PilotMinAggregateOutputType | null
    _max: PilotMaxAggregateOutputType | null
  }

  export type PilotAvgAggregateOutputType = {
    id: number | null
  }

  export type PilotSumAggregateOutputType = {
    id: number | null
  }

  export type PilotMinAggregateOutputType = {
    id: number | null
    empNumber: string | null
    name: string | null
    pilotHireDate: Date | null
    scheduledRetireDate: Date | null
    isRetired: boolean | null
    lastSeenDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PilotMaxAggregateOutputType = {
    id: number | null
    empNumber: string | null
    name: string | null
    pilotHireDate: Date | null
    scheduledRetireDate: Date | null
    isRetired: boolean | null
    lastSeenDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PilotCountAggregateOutputType = {
    id: number
    empNumber: number
    name: number
    pilotHireDate: number
    scheduledRetireDate: number
    isRetired: number
    lastSeenDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PilotAvgAggregateInputType = {
    id?: true
  }

  export type PilotSumAggregateInputType = {
    id?: true
  }

  export type PilotMinAggregateInputType = {
    id?: true
    empNumber?: true
    name?: true
    pilotHireDate?: true
    scheduledRetireDate?: true
    isRetired?: true
    lastSeenDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PilotMaxAggregateInputType = {
    id?: true
    empNumber?: true
    name?: true
    pilotHireDate?: true
    scheduledRetireDate?: true
    isRetired?: true
    lastSeenDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PilotCountAggregateInputType = {
    id?: true
    empNumber?: true
    name?: true
    pilotHireDate?: true
    scheduledRetireDate?: true
    isRetired?: true
    lastSeenDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PilotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pilot to aggregate.
     */
    where?: PilotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pilots to fetch.
     */
    orderBy?: PilotOrderByWithRelationInput | PilotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PilotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pilots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pilots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pilots
    **/
    _count?: true | PilotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PilotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PilotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PilotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PilotMaxAggregateInputType
  }

  export type GetPilotAggregateType<T extends PilotAggregateArgs> = {
        [P in keyof T & keyof AggregatePilot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePilot[P]>
      : GetScalarType<T[P], AggregatePilot[P]>
  }




  export type PilotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PilotWhereInput
    orderBy?: PilotOrderByWithAggregationInput | PilotOrderByWithAggregationInput[]
    by: PilotScalarFieldEnum[] | PilotScalarFieldEnum
    having?: PilotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PilotCountAggregateInputType | true
    _avg?: PilotAvgAggregateInputType
    _sum?: PilotSumAggregateInputType
    _min?: PilotMinAggregateInputType
    _max?: PilotMaxAggregateInputType
  }

  export type PilotGroupByOutputType = {
    id: number
    empNumber: string
    name: string
    pilotHireDate: Date | null
    scheduledRetireDate: Date | null
    isRetired: boolean
    lastSeenDate: Date | null
    createdAt: Date
    updatedAt: Date
    _count: PilotCountAggregateOutputType | null
    _avg: PilotAvgAggregateOutputType | null
    _sum: PilotSumAggregateOutputType | null
    _min: PilotMinAggregateOutputType | null
    _max: PilotMaxAggregateOutputType | null
  }

  type GetPilotGroupByPayload<T extends PilotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PilotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PilotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PilotGroupByOutputType[P]>
            : GetScalarType<T[P], PilotGroupByOutputType[P]>
        }
      >
    >


  export type PilotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    empNumber?: boolean
    name?: boolean
    pilotHireDate?: boolean
    scheduledRetireDate?: boolean
    isRetired?: boolean
    lastSeenDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    senioritySnapshots?: boolean | Pilot$senioritySnapshotsArgs<ExtArgs>
    user?: boolean | Pilot$userArgs<ExtArgs>
    _count?: boolean | PilotCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pilot"]>

  export type PilotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    empNumber?: boolean
    name?: boolean
    pilotHireDate?: boolean
    scheduledRetireDate?: boolean
    isRetired?: boolean
    lastSeenDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["pilot"]>

  export type PilotSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    empNumber?: boolean
    name?: boolean
    pilotHireDate?: boolean
    scheduledRetireDate?: boolean
    isRetired?: boolean
    lastSeenDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["pilot"]>

  export type PilotSelectScalar = {
    id?: boolean
    empNumber?: boolean
    name?: boolean
    pilotHireDate?: boolean
    scheduledRetireDate?: boolean
    isRetired?: boolean
    lastSeenDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PilotOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "empNumber" | "name" | "pilotHireDate" | "scheduledRetireDate" | "isRetired" | "lastSeenDate" | "createdAt" | "updatedAt", ExtArgs["result"]["pilot"]>
  export type PilotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    senioritySnapshots?: boolean | Pilot$senioritySnapshotsArgs<ExtArgs>
    user?: boolean | Pilot$userArgs<ExtArgs>
    _count?: boolean | PilotCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PilotIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PilotIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PilotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pilot"
    objects: {
      senioritySnapshots: Prisma.$SenioritySnapshotPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      empNumber: string
      name: string
      pilotHireDate: Date | null
      scheduledRetireDate: Date | null
      isRetired: boolean
      lastSeenDate: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["pilot"]>
    composites: {}
  }

  type PilotGetPayload<S extends boolean | null | undefined | PilotDefaultArgs> = $Result.GetResult<Prisma.$PilotPayload, S>

  type PilotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PilotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PilotCountAggregateInputType | true
    }

  export interface PilotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pilot'], meta: { name: 'Pilot' } }
    /**
     * Find zero or one Pilot that matches the filter.
     * @param {PilotFindUniqueArgs} args - Arguments to find a Pilot
     * @example
     * // Get one Pilot
     * const pilot = await prisma.pilot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PilotFindUniqueArgs>(args: SelectSubset<T, PilotFindUniqueArgs<ExtArgs>>): Prisma__PilotClient<$Result.GetResult<Prisma.$PilotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pilot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PilotFindUniqueOrThrowArgs} args - Arguments to find a Pilot
     * @example
     * // Get one Pilot
     * const pilot = await prisma.pilot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PilotFindUniqueOrThrowArgs>(args: SelectSubset<T, PilotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PilotClient<$Result.GetResult<Prisma.$PilotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pilot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PilotFindFirstArgs} args - Arguments to find a Pilot
     * @example
     * // Get one Pilot
     * const pilot = await prisma.pilot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PilotFindFirstArgs>(args?: SelectSubset<T, PilotFindFirstArgs<ExtArgs>>): Prisma__PilotClient<$Result.GetResult<Prisma.$PilotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pilot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PilotFindFirstOrThrowArgs} args - Arguments to find a Pilot
     * @example
     * // Get one Pilot
     * const pilot = await prisma.pilot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PilotFindFirstOrThrowArgs>(args?: SelectSubset<T, PilotFindFirstOrThrowArgs<ExtArgs>>): Prisma__PilotClient<$Result.GetResult<Prisma.$PilotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pilots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PilotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pilots
     * const pilots = await prisma.pilot.findMany()
     * 
     * // Get first 10 Pilots
     * const pilots = await prisma.pilot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pilotWithIdOnly = await prisma.pilot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PilotFindManyArgs>(args?: SelectSubset<T, PilotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PilotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pilot.
     * @param {PilotCreateArgs} args - Arguments to create a Pilot.
     * @example
     * // Create one Pilot
     * const Pilot = await prisma.pilot.create({
     *   data: {
     *     // ... data to create a Pilot
     *   }
     * })
     * 
     */
    create<T extends PilotCreateArgs>(args: SelectSubset<T, PilotCreateArgs<ExtArgs>>): Prisma__PilotClient<$Result.GetResult<Prisma.$PilotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pilots.
     * @param {PilotCreateManyArgs} args - Arguments to create many Pilots.
     * @example
     * // Create many Pilots
     * const pilot = await prisma.pilot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PilotCreateManyArgs>(args?: SelectSubset<T, PilotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pilots and returns the data saved in the database.
     * @param {PilotCreateManyAndReturnArgs} args - Arguments to create many Pilots.
     * @example
     * // Create many Pilots
     * const pilot = await prisma.pilot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pilots and only return the `id`
     * const pilotWithIdOnly = await prisma.pilot.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PilotCreateManyAndReturnArgs>(args?: SelectSubset<T, PilotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PilotPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pilot.
     * @param {PilotDeleteArgs} args - Arguments to delete one Pilot.
     * @example
     * // Delete one Pilot
     * const Pilot = await prisma.pilot.delete({
     *   where: {
     *     // ... filter to delete one Pilot
     *   }
     * })
     * 
     */
    delete<T extends PilotDeleteArgs>(args: SelectSubset<T, PilotDeleteArgs<ExtArgs>>): Prisma__PilotClient<$Result.GetResult<Prisma.$PilotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pilot.
     * @param {PilotUpdateArgs} args - Arguments to update one Pilot.
     * @example
     * // Update one Pilot
     * const pilot = await prisma.pilot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PilotUpdateArgs>(args: SelectSubset<T, PilotUpdateArgs<ExtArgs>>): Prisma__PilotClient<$Result.GetResult<Prisma.$PilotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pilots.
     * @param {PilotDeleteManyArgs} args - Arguments to filter Pilots to delete.
     * @example
     * // Delete a few Pilots
     * const { count } = await prisma.pilot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PilotDeleteManyArgs>(args?: SelectSubset<T, PilotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pilots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PilotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pilots
     * const pilot = await prisma.pilot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PilotUpdateManyArgs>(args: SelectSubset<T, PilotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pilots and returns the data updated in the database.
     * @param {PilotUpdateManyAndReturnArgs} args - Arguments to update many Pilots.
     * @example
     * // Update many Pilots
     * const pilot = await prisma.pilot.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pilots and only return the `id`
     * const pilotWithIdOnly = await prisma.pilot.updateManyAndReturn({
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
    updateManyAndReturn<T extends PilotUpdateManyAndReturnArgs>(args: SelectSubset<T, PilotUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PilotPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pilot.
     * @param {PilotUpsertArgs} args - Arguments to update or create a Pilot.
     * @example
     * // Update or create a Pilot
     * const pilot = await prisma.pilot.upsert({
     *   create: {
     *     // ... data to create a Pilot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pilot we want to update
     *   }
     * })
     */
    upsert<T extends PilotUpsertArgs>(args: SelectSubset<T, PilotUpsertArgs<ExtArgs>>): Prisma__PilotClient<$Result.GetResult<Prisma.$PilotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pilots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PilotCountArgs} args - Arguments to filter Pilots to count.
     * @example
     * // Count the number of Pilots
     * const count = await prisma.pilot.count({
     *   where: {
     *     // ... the filter for the Pilots we want to count
     *   }
     * })
    **/
    count<T extends PilotCountArgs>(
      args?: Subset<T, PilotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PilotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pilot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PilotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PilotAggregateArgs>(args: Subset<T, PilotAggregateArgs>): Prisma.PrismaPromise<GetPilotAggregateType<T>>

    /**
     * Group by Pilot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PilotGroupByArgs} args - Group by arguments.
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
      T extends PilotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PilotGroupByArgs['orderBy'] }
        : { orderBy?: PilotGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PilotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPilotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pilot model
   */
  readonly fields: PilotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pilot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PilotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    senioritySnapshots<T extends Pilot$senioritySnapshotsArgs<ExtArgs> = {}>(args?: Subset<T, Pilot$senioritySnapshotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SenioritySnapshotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends Pilot$userArgs<ExtArgs> = {}>(args?: Subset<T, Pilot$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Pilot model
   */
  interface PilotFieldRefs {
    readonly id: FieldRef<"Pilot", 'Int'>
    readonly empNumber: FieldRef<"Pilot", 'String'>
    readonly name: FieldRef<"Pilot", 'String'>
    readonly pilotHireDate: FieldRef<"Pilot", 'DateTime'>
    readonly scheduledRetireDate: FieldRef<"Pilot", 'DateTime'>
    readonly isRetired: FieldRef<"Pilot", 'Boolean'>
    readonly lastSeenDate: FieldRef<"Pilot", 'DateTime'>
    readonly createdAt: FieldRef<"Pilot", 'DateTime'>
    readonly updatedAt: FieldRef<"Pilot", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pilot findUnique
   */
  export type PilotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pilot
     */
    select?: PilotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pilot
     */
    omit?: PilotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PilotInclude<ExtArgs> | null
    /**
     * Filter, which Pilot to fetch.
     */
    where: PilotWhereUniqueInput
  }

  /**
   * Pilot findUniqueOrThrow
   */
  export type PilotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pilot
     */
    select?: PilotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pilot
     */
    omit?: PilotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PilotInclude<ExtArgs> | null
    /**
     * Filter, which Pilot to fetch.
     */
    where: PilotWhereUniqueInput
  }

  /**
   * Pilot findFirst
   */
  export type PilotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pilot
     */
    select?: PilotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pilot
     */
    omit?: PilotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PilotInclude<ExtArgs> | null
    /**
     * Filter, which Pilot to fetch.
     */
    where?: PilotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pilots to fetch.
     */
    orderBy?: PilotOrderByWithRelationInput | PilotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pilots.
     */
    cursor?: PilotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pilots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pilots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pilots.
     */
    distinct?: PilotScalarFieldEnum | PilotScalarFieldEnum[]
  }

  /**
   * Pilot findFirstOrThrow
   */
  export type PilotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pilot
     */
    select?: PilotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pilot
     */
    omit?: PilotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PilotInclude<ExtArgs> | null
    /**
     * Filter, which Pilot to fetch.
     */
    where?: PilotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pilots to fetch.
     */
    orderBy?: PilotOrderByWithRelationInput | PilotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pilots.
     */
    cursor?: PilotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pilots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pilots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pilots.
     */
    distinct?: PilotScalarFieldEnum | PilotScalarFieldEnum[]
  }

  /**
   * Pilot findMany
   */
  export type PilotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pilot
     */
    select?: PilotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pilot
     */
    omit?: PilotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PilotInclude<ExtArgs> | null
    /**
     * Filter, which Pilots to fetch.
     */
    where?: PilotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pilots to fetch.
     */
    orderBy?: PilotOrderByWithRelationInput | PilotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pilots.
     */
    cursor?: PilotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pilots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pilots.
     */
    skip?: number
    distinct?: PilotScalarFieldEnum | PilotScalarFieldEnum[]
  }

  /**
   * Pilot create
   */
  export type PilotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pilot
     */
    select?: PilotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pilot
     */
    omit?: PilotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PilotInclude<ExtArgs> | null
    /**
     * The data needed to create a Pilot.
     */
    data: XOR<PilotCreateInput, PilotUncheckedCreateInput>
  }

  /**
   * Pilot createMany
   */
  export type PilotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pilots.
     */
    data: PilotCreateManyInput | PilotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pilot createManyAndReturn
   */
  export type PilotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pilot
     */
    select?: PilotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pilot
     */
    omit?: PilotOmit<ExtArgs> | null
    /**
     * The data used to create many Pilots.
     */
    data: PilotCreateManyInput | PilotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pilot update
   */
  export type PilotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pilot
     */
    select?: PilotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pilot
     */
    omit?: PilotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PilotInclude<ExtArgs> | null
    /**
     * The data needed to update a Pilot.
     */
    data: XOR<PilotUpdateInput, PilotUncheckedUpdateInput>
    /**
     * Choose, which Pilot to update.
     */
    where: PilotWhereUniqueInput
  }

  /**
   * Pilot updateMany
   */
  export type PilotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pilots.
     */
    data: XOR<PilotUpdateManyMutationInput, PilotUncheckedUpdateManyInput>
    /**
     * Filter which Pilots to update
     */
    where?: PilotWhereInput
    /**
     * Limit how many Pilots to update.
     */
    limit?: number
  }

  /**
   * Pilot updateManyAndReturn
   */
  export type PilotUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pilot
     */
    select?: PilotSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pilot
     */
    omit?: PilotOmit<ExtArgs> | null
    /**
     * The data used to update Pilots.
     */
    data: XOR<PilotUpdateManyMutationInput, PilotUncheckedUpdateManyInput>
    /**
     * Filter which Pilots to update
     */
    where?: PilotWhereInput
    /**
     * Limit how many Pilots to update.
     */
    limit?: number
  }

  /**
   * Pilot upsert
   */
  export type PilotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pilot
     */
    select?: PilotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pilot
     */
    omit?: PilotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PilotInclude<ExtArgs> | null
    /**
     * The filter to search for the Pilot to update in case it exists.
     */
    where: PilotWhereUniqueInput
    /**
     * In case the Pilot found by the `where` argument doesn't exist, create a new Pilot with this data.
     */
    create: XOR<PilotCreateInput, PilotUncheckedCreateInput>
    /**
     * In case the Pilot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PilotUpdateInput, PilotUncheckedUpdateInput>
  }

  /**
   * Pilot delete
   */
  export type PilotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pilot
     */
    select?: PilotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pilot
     */
    omit?: PilotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PilotInclude<ExtArgs> | null
    /**
     * Filter which Pilot to delete.
     */
    where: PilotWhereUniqueInput
  }

  /**
   * Pilot deleteMany
   */
  export type PilotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pilots to delete
     */
    where?: PilotWhereInput
    /**
     * Limit how many Pilots to delete.
     */
    limit?: number
  }

  /**
   * Pilot.senioritySnapshots
   */
  export type Pilot$senioritySnapshotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SenioritySnapshot
     */
    select?: SenioritySnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SenioritySnapshot
     */
    omit?: SenioritySnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SenioritySnapshotInclude<ExtArgs> | null
    where?: SenioritySnapshotWhereInput
    orderBy?: SenioritySnapshotOrderByWithRelationInput | SenioritySnapshotOrderByWithRelationInput[]
    cursor?: SenioritySnapshotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SenioritySnapshotScalarFieldEnum | SenioritySnapshotScalarFieldEnum[]
  }

  /**
   * Pilot.user
   */
  export type Pilot$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Pilot without action
   */
  export type PilotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pilot
     */
    select?: PilotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pilot
     */
    omit?: PilotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PilotInclude<ExtArgs> | null
  }


  /**
   * Model SenioritySnapshot
   */

  export type AggregateSenioritySnapshot = {
    _count: SenioritySnapshotCountAggregateOutputType | null
    _avg: SenioritySnapshotAvgAggregateOutputType | null
    _sum: SenioritySnapshotSumAggregateOutputType | null
    _min: SenioritySnapshotMinAggregateOutputType | null
    _max: SenioritySnapshotMaxAggregateOutputType | null
  }

  export type SenioritySnapshotAvgAggregateOutputType = {
    id: number | null
    seniorityNumber: number | null
    pilotId: number | null
  }

  export type SenioritySnapshotSumAggregateOutputType = {
    id: number | null
    seniorityNumber: number | null
    pilotId: number | null
  }

  export type SenioritySnapshotMinAggregateOutputType = {
    id: number | null
    seniorityNumber: number | null
    category: string | null
    reportDate: Date | null
    baseCode: string | null
    fleetCode: string | null
    positionCode: string | null
    baseCity: string | null
    fleetName: string | null
    positionName: string | null
    isPlaceholder: boolean | null
    pilotId: number | null
    createdAt: Date | null
  }

  export type SenioritySnapshotMaxAggregateOutputType = {
    id: number | null
    seniorityNumber: number | null
    category: string | null
    reportDate: Date | null
    baseCode: string | null
    fleetCode: string | null
    positionCode: string | null
    baseCity: string | null
    fleetName: string | null
    positionName: string | null
    isPlaceholder: boolean | null
    pilotId: number | null
    createdAt: Date | null
  }

  export type SenioritySnapshotCountAggregateOutputType = {
    id: number
    seniorityNumber: number
    category: number
    reportDate: number
    baseCode: number
    fleetCode: number
    positionCode: number
    baseCity: number
    fleetName: number
    positionName: number
    isPlaceholder: number
    pilotId: number
    createdAt: number
    _all: number
  }


  export type SenioritySnapshotAvgAggregateInputType = {
    id?: true
    seniorityNumber?: true
    pilotId?: true
  }

  export type SenioritySnapshotSumAggregateInputType = {
    id?: true
    seniorityNumber?: true
    pilotId?: true
  }

  export type SenioritySnapshotMinAggregateInputType = {
    id?: true
    seniorityNumber?: true
    category?: true
    reportDate?: true
    baseCode?: true
    fleetCode?: true
    positionCode?: true
    baseCity?: true
    fleetName?: true
    positionName?: true
    isPlaceholder?: true
    pilotId?: true
    createdAt?: true
  }

  export type SenioritySnapshotMaxAggregateInputType = {
    id?: true
    seniorityNumber?: true
    category?: true
    reportDate?: true
    baseCode?: true
    fleetCode?: true
    positionCode?: true
    baseCity?: true
    fleetName?: true
    positionName?: true
    isPlaceholder?: true
    pilotId?: true
    createdAt?: true
  }

  export type SenioritySnapshotCountAggregateInputType = {
    id?: true
    seniorityNumber?: true
    category?: true
    reportDate?: true
    baseCode?: true
    fleetCode?: true
    positionCode?: true
    baseCity?: true
    fleetName?: true
    positionName?: true
    isPlaceholder?: true
    pilotId?: true
    createdAt?: true
    _all?: true
  }

  export type SenioritySnapshotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SenioritySnapshot to aggregate.
     */
    where?: SenioritySnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SenioritySnapshots to fetch.
     */
    orderBy?: SenioritySnapshotOrderByWithRelationInput | SenioritySnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SenioritySnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SenioritySnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SenioritySnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SenioritySnapshots
    **/
    _count?: true | SenioritySnapshotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SenioritySnapshotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SenioritySnapshotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SenioritySnapshotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SenioritySnapshotMaxAggregateInputType
  }

  export type GetSenioritySnapshotAggregateType<T extends SenioritySnapshotAggregateArgs> = {
        [P in keyof T & keyof AggregateSenioritySnapshot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSenioritySnapshot[P]>
      : GetScalarType<T[P], AggregateSenioritySnapshot[P]>
  }




  export type SenioritySnapshotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SenioritySnapshotWhereInput
    orderBy?: SenioritySnapshotOrderByWithAggregationInput | SenioritySnapshotOrderByWithAggregationInput[]
    by: SenioritySnapshotScalarFieldEnum[] | SenioritySnapshotScalarFieldEnum
    having?: SenioritySnapshotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SenioritySnapshotCountAggregateInputType | true
    _avg?: SenioritySnapshotAvgAggregateInputType
    _sum?: SenioritySnapshotSumAggregateInputType
    _min?: SenioritySnapshotMinAggregateInputType
    _max?: SenioritySnapshotMaxAggregateInputType
  }

  export type SenioritySnapshotGroupByOutputType = {
    id: number
    seniorityNumber: number
    category: string
    reportDate: Date
    baseCode: string
    fleetCode: string
    positionCode: string
    baseCity: string
    fleetName: string
    positionName: string
    isPlaceholder: boolean
    pilotId: number
    createdAt: Date
    _count: SenioritySnapshotCountAggregateOutputType | null
    _avg: SenioritySnapshotAvgAggregateOutputType | null
    _sum: SenioritySnapshotSumAggregateOutputType | null
    _min: SenioritySnapshotMinAggregateOutputType | null
    _max: SenioritySnapshotMaxAggregateOutputType | null
  }

  type GetSenioritySnapshotGroupByPayload<T extends SenioritySnapshotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SenioritySnapshotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SenioritySnapshotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SenioritySnapshotGroupByOutputType[P]>
            : GetScalarType<T[P], SenioritySnapshotGroupByOutputType[P]>
        }
      >
    >


  export type SenioritySnapshotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    seniorityNumber?: boolean
    category?: boolean
    reportDate?: boolean
    baseCode?: boolean
    fleetCode?: boolean
    positionCode?: boolean
    baseCity?: boolean
    fleetName?: boolean
    positionName?: boolean
    isPlaceholder?: boolean
    pilotId?: boolean
    createdAt?: boolean
    pilot?: boolean | PilotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["senioritySnapshot"]>

  export type SenioritySnapshotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    seniorityNumber?: boolean
    category?: boolean
    reportDate?: boolean
    baseCode?: boolean
    fleetCode?: boolean
    positionCode?: boolean
    baseCity?: boolean
    fleetName?: boolean
    positionName?: boolean
    isPlaceholder?: boolean
    pilotId?: boolean
    createdAt?: boolean
    pilot?: boolean | PilotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["senioritySnapshot"]>

  export type SenioritySnapshotSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    seniorityNumber?: boolean
    category?: boolean
    reportDate?: boolean
    baseCode?: boolean
    fleetCode?: boolean
    positionCode?: boolean
    baseCity?: boolean
    fleetName?: boolean
    positionName?: boolean
    isPlaceholder?: boolean
    pilotId?: boolean
    createdAt?: boolean
    pilot?: boolean | PilotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["senioritySnapshot"]>

  export type SenioritySnapshotSelectScalar = {
    id?: boolean
    seniorityNumber?: boolean
    category?: boolean
    reportDate?: boolean
    baseCode?: boolean
    fleetCode?: boolean
    positionCode?: boolean
    baseCity?: boolean
    fleetName?: boolean
    positionName?: boolean
    isPlaceholder?: boolean
    pilotId?: boolean
    createdAt?: boolean
  }

  export type SenioritySnapshotOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "seniorityNumber" | "category" | "reportDate" | "baseCode" | "fleetCode" | "positionCode" | "baseCity" | "fleetName" | "positionName" | "isPlaceholder" | "pilotId" | "createdAt", ExtArgs["result"]["senioritySnapshot"]>
  export type SenioritySnapshotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pilot?: boolean | PilotDefaultArgs<ExtArgs>
  }
  export type SenioritySnapshotIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pilot?: boolean | PilotDefaultArgs<ExtArgs>
  }
  export type SenioritySnapshotIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pilot?: boolean | PilotDefaultArgs<ExtArgs>
  }

  export type $SenioritySnapshotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SenioritySnapshot"
    objects: {
      pilot: Prisma.$PilotPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      seniorityNumber: number
      category: string
      reportDate: Date
      baseCode: string
      fleetCode: string
      positionCode: string
      baseCity: string
      fleetName: string
      positionName: string
      isPlaceholder: boolean
      pilotId: number
      createdAt: Date
    }, ExtArgs["result"]["senioritySnapshot"]>
    composites: {}
  }

  type SenioritySnapshotGetPayload<S extends boolean | null | undefined | SenioritySnapshotDefaultArgs> = $Result.GetResult<Prisma.$SenioritySnapshotPayload, S>

  type SenioritySnapshotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SenioritySnapshotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SenioritySnapshotCountAggregateInputType | true
    }

  export interface SenioritySnapshotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SenioritySnapshot'], meta: { name: 'SenioritySnapshot' } }
    /**
     * Find zero or one SenioritySnapshot that matches the filter.
     * @param {SenioritySnapshotFindUniqueArgs} args - Arguments to find a SenioritySnapshot
     * @example
     * // Get one SenioritySnapshot
     * const senioritySnapshot = await prisma.senioritySnapshot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SenioritySnapshotFindUniqueArgs>(args: SelectSubset<T, SenioritySnapshotFindUniqueArgs<ExtArgs>>): Prisma__SenioritySnapshotClient<$Result.GetResult<Prisma.$SenioritySnapshotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SenioritySnapshot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SenioritySnapshotFindUniqueOrThrowArgs} args - Arguments to find a SenioritySnapshot
     * @example
     * // Get one SenioritySnapshot
     * const senioritySnapshot = await prisma.senioritySnapshot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SenioritySnapshotFindUniqueOrThrowArgs>(args: SelectSubset<T, SenioritySnapshotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SenioritySnapshotClient<$Result.GetResult<Prisma.$SenioritySnapshotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SenioritySnapshot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SenioritySnapshotFindFirstArgs} args - Arguments to find a SenioritySnapshot
     * @example
     * // Get one SenioritySnapshot
     * const senioritySnapshot = await prisma.senioritySnapshot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SenioritySnapshotFindFirstArgs>(args?: SelectSubset<T, SenioritySnapshotFindFirstArgs<ExtArgs>>): Prisma__SenioritySnapshotClient<$Result.GetResult<Prisma.$SenioritySnapshotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SenioritySnapshot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SenioritySnapshotFindFirstOrThrowArgs} args - Arguments to find a SenioritySnapshot
     * @example
     * // Get one SenioritySnapshot
     * const senioritySnapshot = await prisma.senioritySnapshot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SenioritySnapshotFindFirstOrThrowArgs>(args?: SelectSubset<T, SenioritySnapshotFindFirstOrThrowArgs<ExtArgs>>): Prisma__SenioritySnapshotClient<$Result.GetResult<Prisma.$SenioritySnapshotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SenioritySnapshots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SenioritySnapshotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SenioritySnapshots
     * const senioritySnapshots = await prisma.senioritySnapshot.findMany()
     * 
     * // Get first 10 SenioritySnapshots
     * const senioritySnapshots = await prisma.senioritySnapshot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const senioritySnapshotWithIdOnly = await prisma.senioritySnapshot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SenioritySnapshotFindManyArgs>(args?: SelectSubset<T, SenioritySnapshotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SenioritySnapshotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SenioritySnapshot.
     * @param {SenioritySnapshotCreateArgs} args - Arguments to create a SenioritySnapshot.
     * @example
     * // Create one SenioritySnapshot
     * const SenioritySnapshot = await prisma.senioritySnapshot.create({
     *   data: {
     *     // ... data to create a SenioritySnapshot
     *   }
     * })
     * 
     */
    create<T extends SenioritySnapshotCreateArgs>(args: SelectSubset<T, SenioritySnapshotCreateArgs<ExtArgs>>): Prisma__SenioritySnapshotClient<$Result.GetResult<Prisma.$SenioritySnapshotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SenioritySnapshots.
     * @param {SenioritySnapshotCreateManyArgs} args - Arguments to create many SenioritySnapshots.
     * @example
     * // Create many SenioritySnapshots
     * const senioritySnapshot = await prisma.senioritySnapshot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SenioritySnapshotCreateManyArgs>(args?: SelectSubset<T, SenioritySnapshotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SenioritySnapshots and returns the data saved in the database.
     * @param {SenioritySnapshotCreateManyAndReturnArgs} args - Arguments to create many SenioritySnapshots.
     * @example
     * // Create many SenioritySnapshots
     * const senioritySnapshot = await prisma.senioritySnapshot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SenioritySnapshots and only return the `id`
     * const senioritySnapshotWithIdOnly = await prisma.senioritySnapshot.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SenioritySnapshotCreateManyAndReturnArgs>(args?: SelectSubset<T, SenioritySnapshotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SenioritySnapshotPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SenioritySnapshot.
     * @param {SenioritySnapshotDeleteArgs} args - Arguments to delete one SenioritySnapshot.
     * @example
     * // Delete one SenioritySnapshot
     * const SenioritySnapshot = await prisma.senioritySnapshot.delete({
     *   where: {
     *     // ... filter to delete one SenioritySnapshot
     *   }
     * })
     * 
     */
    delete<T extends SenioritySnapshotDeleteArgs>(args: SelectSubset<T, SenioritySnapshotDeleteArgs<ExtArgs>>): Prisma__SenioritySnapshotClient<$Result.GetResult<Prisma.$SenioritySnapshotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SenioritySnapshot.
     * @param {SenioritySnapshotUpdateArgs} args - Arguments to update one SenioritySnapshot.
     * @example
     * // Update one SenioritySnapshot
     * const senioritySnapshot = await prisma.senioritySnapshot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SenioritySnapshotUpdateArgs>(args: SelectSubset<T, SenioritySnapshotUpdateArgs<ExtArgs>>): Prisma__SenioritySnapshotClient<$Result.GetResult<Prisma.$SenioritySnapshotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SenioritySnapshots.
     * @param {SenioritySnapshotDeleteManyArgs} args - Arguments to filter SenioritySnapshots to delete.
     * @example
     * // Delete a few SenioritySnapshots
     * const { count } = await prisma.senioritySnapshot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SenioritySnapshotDeleteManyArgs>(args?: SelectSubset<T, SenioritySnapshotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SenioritySnapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SenioritySnapshotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SenioritySnapshots
     * const senioritySnapshot = await prisma.senioritySnapshot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SenioritySnapshotUpdateManyArgs>(args: SelectSubset<T, SenioritySnapshotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SenioritySnapshots and returns the data updated in the database.
     * @param {SenioritySnapshotUpdateManyAndReturnArgs} args - Arguments to update many SenioritySnapshots.
     * @example
     * // Update many SenioritySnapshots
     * const senioritySnapshot = await prisma.senioritySnapshot.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SenioritySnapshots and only return the `id`
     * const senioritySnapshotWithIdOnly = await prisma.senioritySnapshot.updateManyAndReturn({
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
    updateManyAndReturn<T extends SenioritySnapshotUpdateManyAndReturnArgs>(args: SelectSubset<T, SenioritySnapshotUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SenioritySnapshotPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SenioritySnapshot.
     * @param {SenioritySnapshotUpsertArgs} args - Arguments to update or create a SenioritySnapshot.
     * @example
     * // Update or create a SenioritySnapshot
     * const senioritySnapshot = await prisma.senioritySnapshot.upsert({
     *   create: {
     *     // ... data to create a SenioritySnapshot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SenioritySnapshot we want to update
     *   }
     * })
     */
    upsert<T extends SenioritySnapshotUpsertArgs>(args: SelectSubset<T, SenioritySnapshotUpsertArgs<ExtArgs>>): Prisma__SenioritySnapshotClient<$Result.GetResult<Prisma.$SenioritySnapshotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SenioritySnapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SenioritySnapshotCountArgs} args - Arguments to filter SenioritySnapshots to count.
     * @example
     * // Count the number of SenioritySnapshots
     * const count = await prisma.senioritySnapshot.count({
     *   where: {
     *     // ... the filter for the SenioritySnapshots we want to count
     *   }
     * })
    **/
    count<T extends SenioritySnapshotCountArgs>(
      args?: Subset<T, SenioritySnapshotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SenioritySnapshotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SenioritySnapshot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SenioritySnapshotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SenioritySnapshotAggregateArgs>(args: Subset<T, SenioritySnapshotAggregateArgs>): Prisma.PrismaPromise<GetSenioritySnapshotAggregateType<T>>

    /**
     * Group by SenioritySnapshot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SenioritySnapshotGroupByArgs} args - Group by arguments.
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
      T extends SenioritySnapshotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SenioritySnapshotGroupByArgs['orderBy'] }
        : { orderBy?: SenioritySnapshotGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SenioritySnapshotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSenioritySnapshotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SenioritySnapshot model
   */
  readonly fields: SenioritySnapshotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SenioritySnapshot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SenioritySnapshotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pilot<T extends PilotDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PilotDefaultArgs<ExtArgs>>): Prisma__PilotClient<$Result.GetResult<Prisma.$PilotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SenioritySnapshot model
   */
  interface SenioritySnapshotFieldRefs {
    readonly id: FieldRef<"SenioritySnapshot", 'Int'>
    readonly seniorityNumber: FieldRef<"SenioritySnapshot", 'Int'>
    readonly category: FieldRef<"SenioritySnapshot", 'String'>
    readonly reportDate: FieldRef<"SenioritySnapshot", 'DateTime'>
    readonly baseCode: FieldRef<"SenioritySnapshot", 'String'>
    readonly fleetCode: FieldRef<"SenioritySnapshot", 'String'>
    readonly positionCode: FieldRef<"SenioritySnapshot", 'String'>
    readonly baseCity: FieldRef<"SenioritySnapshot", 'String'>
    readonly fleetName: FieldRef<"SenioritySnapshot", 'String'>
    readonly positionName: FieldRef<"SenioritySnapshot", 'String'>
    readonly isPlaceholder: FieldRef<"SenioritySnapshot", 'Boolean'>
    readonly pilotId: FieldRef<"SenioritySnapshot", 'Int'>
    readonly createdAt: FieldRef<"SenioritySnapshot", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SenioritySnapshot findUnique
   */
  export type SenioritySnapshotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SenioritySnapshot
     */
    select?: SenioritySnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SenioritySnapshot
     */
    omit?: SenioritySnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SenioritySnapshotInclude<ExtArgs> | null
    /**
     * Filter, which SenioritySnapshot to fetch.
     */
    where: SenioritySnapshotWhereUniqueInput
  }

  /**
   * SenioritySnapshot findUniqueOrThrow
   */
  export type SenioritySnapshotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SenioritySnapshot
     */
    select?: SenioritySnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SenioritySnapshot
     */
    omit?: SenioritySnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SenioritySnapshotInclude<ExtArgs> | null
    /**
     * Filter, which SenioritySnapshot to fetch.
     */
    where: SenioritySnapshotWhereUniqueInput
  }

  /**
   * SenioritySnapshot findFirst
   */
  export type SenioritySnapshotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SenioritySnapshot
     */
    select?: SenioritySnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SenioritySnapshot
     */
    omit?: SenioritySnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SenioritySnapshotInclude<ExtArgs> | null
    /**
     * Filter, which SenioritySnapshot to fetch.
     */
    where?: SenioritySnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SenioritySnapshots to fetch.
     */
    orderBy?: SenioritySnapshotOrderByWithRelationInput | SenioritySnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SenioritySnapshots.
     */
    cursor?: SenioritySnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SenioritySnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SenioritySnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SenioritySnapshots.
     */
    distinct?: SenioritySnapshotScalarFieldEnum | SenioritySnapshotScalarFieldEnum[]
  }

  /**
   * SenioritySnapshot findFirstOrThrow
   */
  export type SenioritySnapshotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SenioritySnapshot
     */
    select?: SenioritySnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SenioritySnapshot
     */
    omit?: SenioritySnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SenioritySnapshotInclude<ExtArgs> | null
    /**
     * Filter, which SenioritySnapshot to fetch.
     */
    where?: SenioritySnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SenioritySnapshots to fetch.
     */
    orderBy?: SenioritySnapshotOrderByWithRelationInput | SenioritySnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SenioritySnapshots.
     */
    cursor?: SenioritySnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SenioritySnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SenioritySnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SenioritySnapshots.
     */
    distinct?: SenioritySnapshotScalarFieldEnum | SenioritySnapshotScalarFieldEnum[]
  }

  /**
   * SenioritySnapshot findMany
   */
  export type SenioritySnapshotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SenioritySnapshot
     */
    select?: SenioritySnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SenioritySnapshot
     */
    omit?: SenioritySnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SenioritySnapshotInclude<ExtArgs> | null
    /**
     * Filter, which SenioritySnapshots to fetch.
     */
    where?: SenioritySnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SenioritySnapshots to fetch.
     */
    orderBy?: SenioritySnapshotOrderByWithRelationInput | SenioritySnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SenioritySnapshots.
     */
    cursor?: SenioritySnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SenioritySnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SenioritySnapshots.
     */
    skip?: number
    distinct?: SenioritySnapshotScalarFieldEnum | SenioritySnapshotScalarFieldEnum[]
  }

  /**
   * SenioritySnapshot create
   */
  export type SenioritySnapshotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SenioritySnapshot
     */
    select?: SenioritySnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SenioritySnapshot
     */
    omit?: SenioritySnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SenioritySnapshotInclude<ExtArgs> | null
    /**
     * The data needed to create a SenioritySnapshot.
     */
    data: XOR<SenioritySnapshotCreateInput, SenioritySnapshotUncheckedCreateInput>
  }

  /**
   * SenioritySnapshot createMany
   */
  export type SenioritySnapshotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SenioritySnapshots.
     */
    data: SenioritySnapshotCreateManyInput | SenioritySnapshotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SenioritySnapshot createManyAndReturn
   */
  export type SenioritySnapshotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SenioritySnapshot
     */
    select?: SenioritySnapshotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SenioritySnapshot
     */
    omit?: SenioritySnapshotOmit<ExtArgs> | null
    /**
     * The data used to create many SenioritySnapshots.
     */
    data: SenioritySnapshotCreateManyInput | SenioritySnapshotCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SenioritySnapshotIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SenioritySnapshot update
   */
  export type SenioritySnapshotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SenioritySnapshot
     */
    select?: SenioritySnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SenioritySnapshot
     */
    omit?: SenioritySnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SenioritySnapshotInclude<ExtArgs> | null
    /**
     * The data needed to update a SenioritySnapshot.
     */
    data: XOR<SenioritySnapshotUpdateInput, SenioritySnapshotUncheckedUpdateInput>
    /**
     * Choose, which SenioritySnapshot to update.
     */
    where: SenioritySnapshotWhereUniqueInput
  }

  /**
   * SenioritySnapshot updateMany
   */
  export type SenioritySnapshotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SenioritySnapshots.
     */
    data: XOR<SenioritySnapshotUpdateManyMutationInput, SenioritySnapshotUncheckedUpdateManyInput>
    /**
     * Filter which SenioritySnapshots to update
     */
    where?: SenioritySnapshotWhereInput
    /**
     * Limit how many SenioritySnapshots to update.
     */
    limit?: number
  }

  /**
   * SenioritySnapshot updateManyAndReturn
   */
  export type SenioritySnapshotUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SenioritySnapshot
     */
    select?: SenioritySnapshotSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SenioritySnapshot
     */
    omit?: SenioritySnapshotOmit<ExtArgs> | null
    /**
     * The data used to update SenioritySnapshots.
     */
    data: XOR<SenioritySnapshotUpdateManyMutationInput, SenioritySnapshotUncheckedUpdateManyInput>
    /**
     * Filter which SenioritySnapshots to update
     */
    where?: SenioritySnapshotWhereInput
    /**
     * Limit how many SenioritySnapshots to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SenioritySnapshotIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SenioritySnapshot upsert
   */
  export type SenioritySnapshotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SenioritySnapshot
     */
    select?: SenioritySnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SenioritySnapshot
     */
    omit?: SenioritySnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SenioritySnapshotInclude<ExtArgs> | null
    /**
     * The filter to search for the SenioritySnapshot to update in case it exists.
     */
    where: SenioritySnapshotWhereUniqueInput
    /**
     * In case the SenioritySnapshot found by the `where` argument doesn't exist, create a new SenioritySnapshot with this data.
     */
    create: XOR<SenioritySnapshotCreateInput, SenioritySnapshotUncheckedCreateInput>
    /**
     * In case the SenioritySnapshot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SenioritySnapshotUpdateInput, SenioritySnapshotUncheckedUpdateInput>
  }

  /**
   * SenioritySnapshot delete
   */
  export type SenioritySnapshotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SenioritySnapshot
     */
    select?: SenioritySnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SenioritySnapshot
     */
    omit?: SenioritySnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SenioritySnapshotInclude<ExtArgs> | null
    /**
     * Filter which SenioritySnapshot to delete.
     */
    where: SenioritySnapshotWhereUniqueInput
  }

  /**
   * SenioritySnapshot deleteMany
   */
  export type SenioritySnapshotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SenioritySnapshots to delete
     */
    where?: SenioritySnapshotWhereInput
    /**
     * Limit how many SenioritySnapshots to delete.
     */
    limit?: number
  }

  /**
   * SenioritySnapshot without action
   */
  export type SenioritySnapshotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SenioritySnapshot
     */
    select?: SenioritySnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SenioritySnapshot
     */
    omit?: SenioritySnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SenioritySnapshotInclude<ExtArgs> | null
  }


  /**
   * Model DataImport
   */

  export type AggregateDataImport = {
    _count: DataImportCountAggregateOutputType | null
    _avg: DataImportAvgAggregateOutputType | null
    _sum: DataImportSumAggregateOutputType | null
    _min: DataImportMinAggregateOutputType | null
    _max: DataImportMaxAggregateOutputType | null
  }

  export type DataImportAvgAggregateOutputType = {
    id: number | null
    recordCount: number | null
  }

  export type DataImportSumAggregateOutputType = {
    id: number | null
    recordCount: number | null
  }

  export type DataImportMinAggregateOutputType = {
    id: number | null
    filename: string | null
    fileType: string | null
    reportDate: Date | null
    recordCount: number | null
    importedAt: Date | null
  }

  export type DataImportMaxAggregateOutputType = {
    id: number | null
    filename: string | null
    fileType: string | null
    reportDate: Date | null
    recordCount: number | null
    importedAt: Date | null
  }

  export type DataImportCountAggregateOutputType = {
    id: number
    filename: number
    fileType: number
    reportDate: number
    recordCount: number
    importedAt: number
    _all: number
  }


  export type DataImportAvgAggregateInputType = {
    id?: true
    recordCount?: true
  }

  export type DataImportSumAggregateInputType = {
    id?: true
    recordCount?: true
  }

  export type DataImportMinAggregateInputType = {
    id?: true
    filename?: true
    fileType?: true
    reportDate?: true
    recordCount?: true
    importedAt?: true
  }

  export type DataImportMaxAggregateInputType = {
    id?: true
    filename?: true
    fileType?: true
    reportDate?: true
    recordCount?: true
    importedAt?: true
  }

  export type DataImportCountAggregateInputType = {
    id?: true
    filename?: true
    fileType?: true
    reportDate?: true
    recordCount?: true
    importedAt?: true
    _all?: true
  }

  export type DataImportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DataImport to aggregate.
     */
    where?: DataImportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataImports to fetch.
     */
    orderBy?: DataImportOrderByWithRelationInput | DataImportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DataImportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataImports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataImports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DataImports
    **/
    _count?: true | DataImportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DataImportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DataImportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DataImportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DataImportMaxAggregateInputType
  }

  export type GetDataImportAggregateType<T extends DataImportAggregateArgs> = {
        [P in keyof T & keyof AggregateDataImport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDataImport[P]>
      : GetScalarType<T[P], AggregateDataImport[P]>
  }




  export type DataImportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DataImportWhereInput
    orderBy?: DataImportOrderByWithAggregationInput | DataImportOrderByWithAggregationInput[]
    by: DataImportScalarFieldEnum[] | DataImportScalarFieldEnum
    having?: DataImportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DataImportCountAggregateInputType | true
    _avg?: DataImportAvgAggregateInputType
    _sum?: DataImportSumAggregateInputType
    _min?: DataImportMinAggregateInputType
    _max?: DataImportMaxAggregateInputType
  }

  export type DataImportGroupByOutputType = {
    id: number
    filename: string
    fileType: string
    reportDate: Date
    recordCount: number
    importedAt: Date
    _count: DataImportCountAggregateOutputType | null
    _avg: DataImportAvgAggregateOutputType | null
    _sum: DataImportSumAggregateOutputType | null
    _min: DataImportMinAggregateOutputType | null
    _max: DataImportMaxAggregateOutputType | null
  }

  type GetDataImportGroupByPayload<T extends DataImportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DataImportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DataImportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DataImportGroupByOutputType[P]>
            : GetScalarType<T[P], DataImportGroupByOutputType[P]>
        }
      >
    >


  export type DataImportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    filename?: boolean
    fileType?: boolean
    reportDate?: boolean
    recordCount?: boolean
    importedAt?: boolean
  }, ExtArgs["result"]["dataImport"]>

  export type DataImportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    filename?: boolean
    fileType?: boolean
    reportDate?: boolean
    recordCount?: boolean
    importedAt?: boolean
  }, ExtArgs["result"]["dataImport"]>

  export type DataImportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    filename?: boolean
    fileType?: boolean
    reportDate?: boolean
    recordCount?: boolean
    importedAt?: boolean
  }, ExtArgs["result"]["dataImport"]>

  export type DataImportSelectScalar = {
    id?: boolean
    filename?: boolean
    fileType?: boolean
    reportDate?: boolean
    recordCount?: boolean
    importedAt?: boolean
  }

  export type DataImportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "filename" | "fileType" | "reportDate" | "recordCount" | "importedAt", ExtArgs["result"]["dataImport"]>

  export type $DataImportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DataImport"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      filename: string
      fileType: string
      reportDate: Date
      recordCount: number
      importedAt: Date
    }, ExtArgs["result"]["dataImport"]>
    composites: {}
  }

  type DataImportGetPayload<S extends boolean | null | undefined | DataImportDefaultArgs> = $Result.GetResult<Prisma.$DataImportPayload, S>

  type DataImportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DataImportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DataImportCountAggregateInputType | true
    }

  export interface DataImportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DataImport'], meta: { name: 'DataImport' } }
    /**
     * Find zero or one DataImport that matches the filter.
     * @param {DataImportFindUniqueArgs} args - Arguments to find a DataImport
     * @example
     * // Get one DataImport
     * const dataImport = await prisma.dataImport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DataImportFindUniqueArgs>(args: SelectSubset<T, DataImportFindUniqueArgs<ExtArgs>>): Prisma__DataImportClient<$Result.GetResult<Prisma.$DataImportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DataImport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DataImportFindUniqueOrThrowArgs} args - Arguments to find a DataImport
     * @example
     * // Get one DataImport
     * const dataImport = await prisma.dataImport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DataImportFindUniqueOrThrowArgs>(args: SelectSubset<T, DataImportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DataImportClient<$Result.GetResult<Prisma.$DataImportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DataImport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataImportFindFirstArgs} args - Arguments to find a DataImport
     * @example
     * // Get one DataImport
     * const dataImport = await prisma.dataImport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DataImportFindFirstArgs>(args?: SelectSubset<T, DataImportFindFirstArgs<ExtArgs>>): Prisma__DataImportClient<$Result.GetResult<Prisma.$DataImportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DataImport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataImportFindFirstOrThrowArgs} args - Arguments to find a DataImport
     * @example
     * // Get one DataImport
     * const dataImport = await prisma.dataImport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DataImportFindFirstOrThrowArgs>(args?: SelectSubset<T, DataImportFindFirstOrThrowArgs<ExtArgs>>): Prisma__DataImportClient<$Result.GetResult<Prisma.$DataImportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DataImports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataImportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DataImports
     * const dataImports = await prisma.dataImport.findMany()
     * 
     * // Get first 10 DataImports
     * const dataImports = await prisma.dataImport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dataImportWithIdOnly = await prisma.dataImport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DataImportFindManyArgs>(args?: SelectSubset<T, DataImportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DataImportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DataImport.
     * @param {DataImportCreateArgs} args - Arguments to create a DataImport.
     * @example
     * // Create one DataImport
     * const DataImport = await prisma.dataImport.create({
     *   data: {
     *     // ... data to create a DataImport
     *   }
     * })
     * 
     */
    create<T extends DataImportCreateArgs>(args: SelectSubset<T, DataImportCreateArgs<ExtArgs>>): Prisma__DataImportClient<$Result.GetResult<Prisma.$DataImportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DataImports.
     * @param {DataImportCreateManyArgs} args - Arguments to create many DataImports.
     * @example
     * // Create many DataImports
     * const dataImport = await prisma.dataImport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DataImportCreateManyArgs>(args?: SelectSubset<T, DataImportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DataImports and returns the data saved in the database.
     * @param {DataImportCreateManyAndReturnArgs} args - Arguments to create many DataImports.
     * @example
     * // Create many DataImports
     * const dataImport = await prisma.dataImport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DataImports and only return the `id`
     * const dataImportWithIdOnly = await prisma.dataImport.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DataImportCreateManyAndReturnArgs>(args?: SelectSubset<T, DataImportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DataImportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DataImport.
     * @param {DataImportDeleteArgs} args - Arguments to delete one DataImport.
     * @example
     * // Delete one DataImport
     * const DataImport = await prisma.dataImport.delete({
     *   where: {
     *     // ... filter to delete one DataImport
     *   }
     * })
     * 
     */
    delete<T extends DataImportDeleteArgs>(args: SelectSubset<T, DataImportDeleteArgs<ExtArgs>>): Prisma__DataImportClient<$Result.GetResult<Prisma.$DataImportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DataImport.
     * @param {DataImportUpdateArgs} args - Arguments to update one DataImport.
     * @example
     * // Update one DataImport
     * const dataImport = await prisma.dataImport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DataImportUpdateArgs>(args: SelectSubset<T, DataImportUpdateArgs<ExtArgs>>): Prisma__DataImportClient<$Result.GetResult<Prisma.$DataImportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DataImports.
     * @param {DataImportDeleteManyArgs} args - Arguments to filter DataImports to delete.
     * @example
     * // Delete a few DataImports
     * const { count } = await prisma.dataImport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DataImportDeleteManyArgs>(args?: SelectSubset<T, DataImportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DataImports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataImportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DataImports
     * const dataImport = await prisma.dataImport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DataImportUpdateManyArgs>(args: SelectSubset<T, DataImportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DataImports and returns the data updated in the database.
     * @param {DataImportUpdateManyAndReturnArgs} args - Arguments to update many DataImports.
     * @example
     * // Update many DataImports
     * const dataImport = await prisma.dataImport.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DataImports and only return the `id`
     * const dataImportWithIdOnly = await prisma.dataImport.updateManyAndReturn({
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
    updateManyAndReturn<T extends DataImportUpdateManyAndReturnArgs>(args: SelectSubset<T, DataImportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DataImportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DataImport.
     * @param {DataImportUpsertArgs} args - Arguments to update or create a DataImport.
     * @example
     * // Update or create a DataImport
     * const dataImport = await prisma.dataImport.upsert({
     *   create: {
     *     // ... data to create a DataImport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DataImport we want to update
     *   }
     * })
     */
    upsert<T extends DataImportUpsertArgs>(args: SelectSubset<T, DataImportUpsertArgs<ExtArgs>>): Prisma__DataImportClient<$Result.GetResult<Prisma.$DataImportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DataImports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataImportCountArgs} args - Arguments to filter DataImports to count.
     * @example
     * // Count the number of DataImports
     * const count = await prisma.dataImport.count({
     *   where: {
     *     // ... the filter for the DataImports we want to count
     *   }
     * })
    **/
    count<T extends DataImportCountArgs>(
      args?: Subset<T, DataImportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DataImportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DataImport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataImportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DataImportAggregateArgs>(args: Subset<T, DataImportAggregateArgs>): Prisma.PrismaPromise<GetDataImportAggregateType<T>>

    /**
     * Group by DataImport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataImportGroupByArgs} args - Group by arguments.
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
      T extends DataImportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DataImportGroupByArgs['orderBy'] }
        : { orderBy?: DataImportGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DataImportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDataImportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DataImport model
   */
  readonly fields: DataImportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DataImport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DataImportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the DataImport model
   */
  interface DataImportFieldRefs {
    readonly id: FieldRef<"DataImport", 'Int'>
    readonly filename: FieldRef<"DataImport", 'String'>
    readonly fileType: FieldRef<"DataImport", 'String'>
    readonly reportDate: FieldRef<"DataImport", 'DateTime'>
    readonly recordCount: FieldRef<"DataImport", 'Int'>
    readonly importedAt: FieldRef<"DataImport", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DataImport findUnique
   */
  export type DataImportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataImport
     */
    select?: DataImportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataImport
     */
    omit?: DataImportOmit<ExtArgs> | null
    /**
     * Filter, which DataImport to fetch.
     */
    where: DataImportWhereUniqueInput
  }

  /**
   * DataImport findUniqueOrThrow
   */
  export type DataImportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataImport
     */
    select?: DataImportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataImport
     */
    omit?: DataImportOmit<ExtArgs> | null
    /**
     * Filter, which DataImport to fetch.
     */
    where: DataImportWhereUniqueInput
  }

  /**
   * DataImport findFirst
   */
  export type DataImportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataImport
     */
    select?: DataImportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataImport
     */
    omit?: DataImportOmit<ExtArgs> | null
    /**
     * Filter, which DataImport to fetch.
     */
    where?: DataImportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataImports to fetch.
     */
    orderBy?: DataImportOrderByWithRelationInput | DataImportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DataImports.
     */
    cursor?: DataImportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataImports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataImports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DataImports.
     */
    distinct?: DataImportScalarFieldEnum | DataImportScalarFieldEnum[]
  }

  /**
   * DataImport findFirstOrThrow
   */
  export type DataImportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataImport
     */
    select?: DataImportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataImport
     */
    omit?: DataImportOmit<ExtArgs> | null
    /**
     * Filter, which DataImport to fetch.
     */
    where?: DataImportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataImports to fetch.
     */
    orderBy?: DataImportOrderByWithRelationInput | DataImportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DataImports.
     */
    cursor?: DataImportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataImports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataImports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DataImports.
     */
    distinct?: DataImportScalarFieldEnum | DataImportScalarFieldEnum[]
  }

  /**
   * DataImport findMany
   */
  export type DataImportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataImport
     */
    select?: DataImportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataImport
     */
    omit?: DataImportOmit<ExtArgs> | null
    /**
     * Filter, which DataImports to fetch.
     */
    where?: DataImportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataImports to fetch.
     */
    orderBy?: DataImportOrderByWithRelationInput | DataImportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DataImports.
     */
    cursor?: DataImportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataImports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataImports.
     */
    skip?: number
    distinct?: DataImportScalarFieldEnum | DataImportScalarFieldEnum[]
  }

  /**
   * DataImport create
   */
  export type DataImportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataImport
     */
    select?: DataImportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataImport
     */
    omit?: DataImportOmit<ExtArgs> | null
    /**
     * The data needed to create a DataImport.
     */
    data: XOR<DataImportCreateInput, DataImportUncheckedCreateInput>
  }

  /**
   * DataImport createMany
   */
  export type DataImportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DataImports.
     */
    data: DataImportCreateManyInput | DataImportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DataImport createManyAndReturn
   */
  export type DataImportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataImport
     */
    select?: DataImportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DataImport
     */
    omit?: DataImportOmit<ExtArgs> | null
    /**
     * The data used to create many DataImports.
     */
    data: DataImportCreateManyInput | DataImportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DataImport update
   */
  export type DataImportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataImport
     */
    select?: DataImportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataImport
     */
    omit?: DataImportOmit<ExtArgs> | null
    /**
     * The data needed to update a DataImport.
     */
    data: XOR<DataImportUpdateInput, DataImportUncheckedUpdateInput>
    /**
     * Choose, which DataImport to update.
     */
    where: DataImportWhereUniqueInput
  }

  /**
   * DataImport updateMany
   */
  export type DataImportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DataImports.
     */
    data: XOR<DataImportUpdateManyMutationInput, DataImportUncheckedUpdateManyInput>
    /**
     * Filter which DataImports to update
     */
    where?: DataImportWhereInput
    /**
     * Limit how many DataImports to update.
     */
    limit?: number
  }

  /**
   * DataImport updateManyAndReturn
   */
  export type DataImportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataImport
     */
    select?: DataImportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DataImport
     */
    omit?: DataImportOmit<ExtArgs> | null
    /**
     * The data used to update DataImports.
     */
    data: XOR<DataImportUpdateManyMutationInput, DataImportUncheckedUpdateManyInput>
    /**
     * Filter which DataImports to update
     */
    where?: DataImportWhereInput
    /**
     * Limit how many DataImports to update.
     */
    limit?: number
  }

  /**
   * DataImport upsert
   */
  export type DataImportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataImport
     */
    select?: DataImportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataImport
     */
    omit?: DataImportOmit<ExtArgs> | null
    /**
     * The filter to search for the DataImport to update in case it exists.
     */
    where: DataImportWhereUniqueInput
    /**
     * In case the DataImport found by the `where` argument doesn't exist, create a new DataImport with this data.
     */
    create: XOR<DataImportCreateInput, DataImportUncheckedCreateInput>
    /**
     * In case the DataImport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DataImportUpdateInput, DataImportUncheckedUpdateInput>
  }

  /**
   * DataImport delete
   */
  export type DataImportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataImport
     */
    select?: DataImportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataImport
     */
    omit?: DataImportOmit<ExtArgs> | null
    /**
     * Filter which DataImport to delete.
     */
    where: DataImportWhereUniqueInput
  }

  /**
   * DataImport deleteMany
   */
  export type DataImportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DataImports to delete
     */
    where?: DataImportWhereInput
    /**
     * Limit how many DataImports to delete.
     */
    limit?: number
  }

  /**
   * DataImport without action
   */
  export type DataImportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataImport
     */
    select?: DataImportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataImport
     */
    omit?: DataImportOmit<ExtArgs> | null
  }


  /**
   * Model PayScale
   */

  export type AggregatePayScale = {
    _count: PayScaleCountAggregateOutputType | null
    _avg: PayScaleAvgAggregateOutputType | null
    _sum: PayScaleSumAggregateOutputType | null
    _min: PayScaleMinAggregateOutputType | null
    _max: PayScaleMaxAggregateOutputType | null
  }

  export type PayScaleAvgAggregateOutputType = {
    id: number | null
    contractId: number | null
  }

  export type PayScaleSumAggregateOutputType = {
    id: number | null
    contractId: number | null
  }

  export type PayScaleMinAggregateOutputType = {
    id: number | null
    effectiveDate: Date | null
    expirationDate: Date | null
    contractVersion: string | null
    isActive: boolean | null
    createdAt: Date | null
    contractId: number | null
  }

  export type PayScaleMaxAggregateOutputType = {
    id: number | null
    effectiveDate: Date | null
    expirationDate: Date | null
    contractVersion: string | null
    isActive: boolean | null
    createdAt: Date | null
    contractId: number | null
  }

  export type PayScaleCountAggregateOutputType = {
    id: number
    effectiveDate: number
    expirationDate: number
    contractVersion: number
    isActive: number
    createdAt: number
    contractId: number
    _all: number
  }


  export type PayScaleAvgAggregateInputType = {
    id?: true
    contractId?: true
  }

  export type PayScaleSumAggregateInputType = {
    id?: true
    contractId?: true
  }

  export type PayScaleMinAggregateInputType = {
    id?: true
    effectiveDate?: true
    expirationDate?: true
    contractVersion?: true
    isActive?: true
    createdAt?: true
    contractId?: true
  }

  export type PayScaleMaxAggregateInputType = {
    id?: true
    effectiveDate?: true
    expirationDate?: true
    contractVersion?: true
    isActive?: true
    createdAt?: true
    contractId?: true
  }

  export type PayScaleCountAggregateInputType = {
    id?: true
    effectiveDate?: true
    expirationDate?: true
    contractVersion?: true
    isActive?: true
    createdAt?: true
    contractId?: true
    _all?: true
  }

  export type PayScaleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PayScale to aggregate.
     */
    where?: PayScaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayScales to fetch.
     */
    orderBy?: PayScaleOrderByWithRelationInput | PayScaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PayScaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayScales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayScales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PayScales
    **/
    _count?: true | PayScaleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PayScaleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PayScaleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PayScaleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PayScaleMaxAggregateInputType
  }

  export type GetPayScaleAggregateType<T extends PayScaleAggregateArgs> = {
        [P in keyof T & keyof AggregatePayScale]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayScale[P]>
      : GetScalarType<T[P], AggregatePayScale[P]>
  }




  export type PayScaleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayScaleWhereInput
    orderBy?: PayScaleOrderByWithAggregationInput | PayScaleOrderByWithAggregationInput[]
    by: PayScaleScalarFieldEnum[] | PayScaleScalarFieldEnum
    having?: PayScaleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PayScaleCountAggregateInputType | true
    _avg?: PayScaleAvgAggregateInputType
    _sum?: PayScaleSumAggregateInputType
    _min?: PayScaleMinAggregateInputType
    _max?: PayScaleMaxAggregateInputType
  }

  export type PayScaleGroupByOutputType = {
    id: number
    effectiveDate: Date
    expirationDate: Date | null
    contractVersion: string
    isActive: boolean
    createdAt: Date
    contractId: number | null
    _count: PayScaleCountAggregateOutputType | null
    _avg: PayScaleAvgAggregateOutputType | null
    _sum: PayScaleSumAggregateOutputType | null
    _min: PayScaleMinAggregateOutputType | null
    _max: PayScaleMaxAggregateOutputType | null
  }

  type GetPayScaleGroupByPayload<T extends PayScaleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PayScaleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PayScaleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PayScaleGroupByOutputType[P]>
            : GetScalarType<T[P], PayScaleGroupByOutputType[P]>
        }
      >
    >


  export type PayScaleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    effectiveDate?: boolean
    expirationDate?: boolean
    contractVersion?: boolean
    isActive?: boolean
    createdAt?: boolean
    contractId?: boolean
    payRates?: boolean | PayScale$payRatesArgs<ExtArgs>
    contract?: boolean | PayScale$contractArgs<ExtArgs>
    _count?: boolean | PayScaleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payScale"]>

  export type PayScaleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    effectiveDate?: boolean
    expirationDate?: boolean
    contractVersion?: boolean
    isActive?: boolean
    createdAt?: boolean
    contractId?: boolean
    contract?: boolean | PayScale$contractArgs<ExtArgs>
  }, ExtArgs["result"]["payScale"]>

  export type PayScaleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    effectiveDate?: boolean
    expirationDate?: boolean
    contractVersion?: boolean
    isActive?: boolean
    createdAt?: boolean
    contractId?: boolean
    contract?: boolean | PayScale$contractArgs<ExtArgs>
  }, ExtArgs["result"]["payScale"]>

  export type PayScaleSelectScalar = {
    id?: boolean
    effectiveDate?: boolean
    expirationDate?: boolean
    contractVersion?: boolean
    isActive?: boolean
    createdAt?: boolean
    contractId?: boolean
  }

  export type PayScaleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "effectiveDate" | "expirationDate" | "contractVersion" | "isActive" | "createdAt" | "contractId", ExtArgs["result"]["payScale"]>
  export type PayScaleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payRates?: boolean | PayScale$payRatesArgs<ExtArgs>
    contract?: boolean | PayScale$contractArgs<ExtArgs>
    _count?: boolean | PayScaleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PayScaleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contract?: boolean | PayScale$contractArgs<ExtArgs>
  }
  export type PayScaleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contract?: boolean | PayScale$contractArgs<ExtArgs>
  }

  export type $PayScalePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PayScale"
    objects: {
      payRates: Prisma.$PayRatePayload<ExtArgs>[]
      contract: Prisma.$ContractPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      effectiveDate: Date
      expirationDate: Date | null
      contractVersion: string
      isActive: boolean
      createdAt: Date
      contractId: number | null
    }, ExtArgs["result"]["payScale"]>
    composites: {}
  }

  type PayScaleGetPayload<S extends boolean | null | undefined | PayScaleDefaultArgs> = $Result.GetResult<Prisma.$PayScalePayload, S>

  type PayScaleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PayScaleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PayScaleCountAggregateInputType | true
    }

  export interface PayScaleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PayScale'], meta: { name: 'PayScale' } }
    /**
     * Find zero or one PayScale that matches the filter.
     * @param {PayScaleFindUniqueArgs} args - Arguments to find a PayScale
     * @example
     * // Get one PayScale
     * const payScale = await prisma.payScale.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PayScaleFindUniqueArgs>(args: SelectSubset<T, PayScaleFindUniqueArgs<ExtArgs>>): Prisma__PayScaleClient<$Result.GetResult<Prisma.$PayScalePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PayScale that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PayScaleFindUniqueOrThrowArgs} args - Arguments to find a PayScale
     * @example
     * // Get one PayScale
     * const payScale = await prisma.payScale.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PayScaleFindUniqueOrThrowArgs>(args: SelectSubset<T, PayScaleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PayScaleClient<$Result.GetResult<Prisma.$PayScalePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PayScale that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayScaleFindFirstArgs} args - Arguments to find a PayScale
     * @example
     * // Get one PayScale
     * const payScale = await prisma.payScale.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PayScaleFindFirstArgs>(args?: SelectSubset<T, PayScaleFindFirstArgs<ExtArgs>>): Prisma__PayScaleClient<$Result.GetResult<Prisma.$PayScalePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PayScale that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayScaleFindFirstOrThrowArgs} args - Arguments to find a PayScale
     * @example
     * // Get one PayScale
     * const payScale = await prisma.payScale.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PayScaleFindFirstOrThrowArgs>(args?: SelectSubset<T, PayScaleFindFirstOrThrowArgs<ExtArgs>>): Prisma__PayScaleClient<$Result.GetResult<Prisma.$PayScalePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PayScales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayScaleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PayScales
     * const payScales = await prisma.payScale.findMany()
     * 
     * // Get first 10 PayScales
     * const payScales = await prisma.payScale.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const payScaleWithIdOnly = await prisma.payScale.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PayScaleFindManyArgs>(args?: SelectSubset<T, PayScaleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayScalePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PayScale.
     * @param {PayScaleCreateArgs} args - Arguments to create a PayScale.
     * @example
     * // Create one PayScale
     * const PayScale = await prisma.payScale.create({
     *   data: {
     *     // ... data to create a PayScale
     *   }
     * })
     * 
     */
    create<T extends PayScaleCreateArgs>(args: SelectSubset<T, PayScaleCreateArgs<ExtArgs>>): Prisma__PayScaleClient<$Result.GetResult<Prisma.$PayScalePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PayScales.
     * @param {PayScaleCreateManyArgs} args - Arguments to create many PayScales.
     * @example
     * // Create many PayScales
     * const payScale = await prisma.payScale.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PayScaleCreateManyArgs>(args?: SelectSubset<T, PayScaleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PayScales and returns the data saved in the database.
     * @param {PayScaleCreateManyAndReturnArgs} args - Arguments to create many PayScales.
     * @example
     * // Create many PayScales
     * const payScale = await prisma.payScale.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PayScales and only return the `id`
     * const payScaleWithIdOnly = await prisma.payScale.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PayScaleCreateManyAndReturnArgs>(args?: SelectSubset<T, PayScaleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayScalePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PayScale.
     * @param {PayScaleDeleteArgs} args - Arguments to delete one PayScale.
     * @example
     * // Delete one PayScale
     * const PayScale = await prisma.payScale.delete({
     *   where: {
     *     // ... filter to delete one PayScale
     *   }
     * })
     * 
     */
    delete<T extends PayScaleDeleteArgs>(args: SelectSubset<T, PayScaleDeleteArgs<ExtArgs>>): Prisma__PayScaleClient<$Result.GetResult<Prisma.$PayScalePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PayScale.
     * @param {PayScaleUpdateArgs} args - Arguments to update one PayScale.
     * @example
     * // Update one PayScale
     * const payScale = await prisma.payScale.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PayScaleUpdateArgs>(args: SelectSubset<T, PayScaleUpdateArgs<ExtArgs>>): Prisma__PayScaleClient<$Result.GetResult<Prisma.$PayScalePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PayScales.
     * @param {PayScaleDeleteManyArgs} args - Arguments to filter PayScales to delete.
     * @example
     * // Delete a few PayScales
     * const { count } = await prisma.payScale.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PayScaleDeleteManyArgs>(args?: SelectSubset<T, PayScaleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PayScales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayScaleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PayScales
     * const payScale = await prisma.payScale.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PayScaleUpdateManyArgs>(args: SelectSubset<T, PayScaleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PayScales and returns the data updated in the database.
     * @param {PayScaleUpdateManyAndReturnArgs} args - Arguments to update many PayScales.
     * @example
     * // Update many PayScales
     * const payScale = await prisma.payScale.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PayScales and only return the `id`
     * const payScaleWithIdOnly = await prisma.payScale.updateManyAndReturn({
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
    updateManyAndReturn<T extends PayScaleUpdateManyAndReturnArgs>(args: SelectSubset<T, PayScaleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayScalePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PayScale.
     * @param {PayScaleUpsertArgs} args - Arguments to update or create a PayScale.
     * @example
     * // Update or create a PayScale
     * const payScale = await prisma.payScale.upsert({
     *   create: {
     *     // ... data to create a PayScale
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PayScale we want to update
     *   }
     * })
     */
    upsert<T extends PayScaleUpsertArgs>(args: SelectSubset<T, PayScaleUpsertArgs<ExtArgs>>): Prisma__PayScaleClient<$Result.GetResult<Prisma.$PayScalePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PayScales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayScaleCountArgs} args - Arguments to filter PayScales to count.
     * @example
     * // Count the number of PayScales
     * const count = await prisma.payScale.count({
     *   where: {
     *     // ... the filter for the PayScales we want to count
     *   }
     * })
    **/
    count<T extends PayScaleCountArgs>(
      args?: Subset<T, PayScaleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PayScaleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PayScale.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayScaleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PayScaleAggregateArgs>(args: Subset<T, PayScaleAggregateArgs>): Prisma.PrismaPromise<GetPayScaleAggregateType<T>>

    /**
     * Group by PayScale.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayScaleGroupByArgs} args - Group by arguments.
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
      T extends PayScaleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PayScaleGroupByArgs['orderBy'] }
        : { orderBy?: PayScaleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PayScaleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPayScaleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PayScale model
   */
  readonly fields: PayScaleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PayScale.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PayScaleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    payRates<T extends PayScale$payRatesArgs<ExtArgs> = {}>(args?: Subset<T, PayScale$payRatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayRatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contract<T extends PayScale$contractArgs<ExtArgs> = {}>(args?: Subset<T, PayScale$contractArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PayScale model
   */
  interface PayScaleFieldRefs {
    readonly id: FieldRef<"PayScale", 'Int'>
    readonly effectiveDate: FieldRef<"PayScale", 'DateTime'>
    readonly expirationDate: FieldRef<"PayScale", 'DateTime'>
    readonly contractVersion: FieldRef<"PayScale", 'String'>
    readonly isActive: FieldRef<"PayScale", 'Boolean'>
    readonly createdAt: FieldRef<"PayScale", 'DateTime'>
    readonly contractId: FieldRef<"PayScale", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PayScale findUnique
   */
  export type PayScaleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayScale
     */
    select?: PayScaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayScale
     */
    omit?: PayScaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayScaleInclude<ExtArgs> | null
    /**
     * Filter, which PayScale to fetch.
     */
    where: PayScaleWhereUniqueInput
  }

  /**
   * PayScale findUniqueOrThrow
   */
  export type PayScaleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayScale
     */
    select?: PayScaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayScale
     */
    omit?: PayScaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayScaleInclude<ExtArgs> | null
    /**
     * Filter, which PayScale to fetch.
     */
    where: PayScaleWhereUniqueInput
  }

  /**
   * PayScale findFirst
   */
  export type PayScaleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayScale
     */
    select?: PayScaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayScale
     */
    omit?: PayScaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayScaleInclude<ExtArgs> | null
    /**
     * Filter, which PayScale to fetch.
     */
    where?: PayScaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayScales to fetch.
     */
    orderBy?: PayScaleOrderByWithRelationInput | PayScaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PayScales.
     */
    cursor?: PayScaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayScales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayScales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PayScales.
     */
    distinct?: PayScaleScalarFieldEnum | PayScaleScalarFieldEnum[]
  }

  /**
   * PayScale findFirstOrThrow
   */
  export type PayScaleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayScale
     */
    select?: PayScaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayScale
     */
    omit?: PayScaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayScaleInclude<ExtArgs> | null
    /**
     * Filter, which PayScale to fetch.
     */
    where?: PayScaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayScales to fetch.
     */
    orderBy?: PayScaleOrderByWithRelationInput | PayScaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PayScales.
     */
    cursor?: PayScaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayScales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayScales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PayScales.
     */
    distinct?: PayScaleScalarFieldEnum | PayScaleScalarFieldEnum[]
  }

  /**
   * PayScale findMany
   */
  export type PayScaleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayScale
     */
    select?: PayScaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayScale
     */
    omit?: PayScaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayScaleInclude<ExtArgs> | null
    /**
     * Filter, which PayScales to fetch.
     */
    where?: PayScaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayScales to fetch.
     */
    orderBy?: PayScaleOrderByWithRelationInput | PayScaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PayScales.
     */
    cursor?: PayScaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayScales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayScales.
     */
    skip?: number
    distinct?: PayScaleScalarFieldEnum | PayScaleScalarFieldEnum[]
  }

  /**
   * PayScale create
   */
  export type PayScaleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayScale
     */
    select?: PayScaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayScale
     */
    omit?: PayScaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayScaleInclude<ExtArgs> | null
    /**
     * The data needed to create a PayScale.
     */
    data: XOR<PayScaleCreateInput, PayScaleUncheckedCreateInput>
  }

  /**
   * PayScale createMany
   */
  export type PayScaleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PayScales.
     */
    data: PayScaleCreateManyInput | PayScaleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PayScale createManyAndReturn
   */
  export type PayScaleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayScale
     */
    select?: PayScaleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PayScale
     */
    omit?: PayScaleOmit<ExtArgs> | null
    /**
     * The data used to create many PayScales.
     */
    data: PayScaleCreateManyInput | PayScaleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayScaleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PayScale update
   */
  export type PayScaleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayScale
     */
    select?: PayScaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayScale
     */
    omit?: PayScaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayScaleInclude<ExtArgs> | null
    /**
     * The data needed to update a PayScale.
     */
    data: XOR<PayScaleUpdateInput, PayScaleUncheckedUpdateInput>
    /**
     * Choose, which PayScale to update.
     */
    where: PayScaleWhereUniqueInput
  }

  /**
   * PayScale updateMany
   */
  export type PayScaleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PayScales.
     */
    data: XOR<PayScaleUpdateManyMutationInput, PayScaleUncheckedUpdateManyInput>
    /**
     * Filter which PayScales to update
     */
    where?: PayScaleWhereInput
    /**
     * Limit how many PayScales to update.
     */
    limit?: number
  }

  /**
   * PayScale updateManyAndReturn
   */
  export type PayScaleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayScale
     */
    select?: PayScaleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PayScale
     */
    omit?: PayScaleOmit<ExtArgs> | null
    /**
     * The data used to update PayScales.
     */
    data: XOR<PayScaleUpdateManyMutationInput, PayScaleUncheckedUpdateManyInput>
    /**
     * Filter which PayScales to update
     */
    where?: PayScaleWhereInput
    /**
     * Limit how many PayScales to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayScaleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PayScale upsert
   */
  export type PayScaleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayScale
     */
    select?: PayScaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayScale
     */
    omit?: PayScaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayScaleInclude<ExtArgs> | null
    /**
     * The filter to search for the PayScale to update in case it exists.
     */
    where: PayScaleWhereUniqueInput
    /**
     * In case the PayScale found by the `where` argument doesn't exist, create a new PayScale with this data.
     */
    create: XOR<PayScaleCreateInput, PayScaleUncheckedCreateInput>
    /**
     * In case the PayScale was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PayScaleUpdateInput, PayScaleUncheckedUpdateInput>
  }

  /**
   * PayScale delete
   */
  export type PayScaleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayScale
     */
    select?: PayScaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayScale
     */
    omit?: PayScaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayScaleInclude<ExtArgs> | null
    /**
     * Filter which PayScale to delete.
     */
    where: PayScaleWhereUniqueInput
  }

  /**
   * PayScale deleteMany
   */
  export type PayScaleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PayScales to delete
     */
    where?: PayScaleWhereInput
    /**
     * Limit how many PayScales to delete.
     */
    limit?: number
  }

  /**
   * PayScale.payRates
   */
  export type PayScale$payRatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayRate
     */
    select?: PayRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayRate
     */
    omit?: PayRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayRateInclude<ExtArgs> | null
    where?: PayRateWhereInput
    orderBy?: PayRateOrderByWithRelationInput | PayRateOrderByWithRelationInput[]
    cursor?: PayRateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PayRateScalarFieldEnum | PayRateScalarFieldEnum[]
  }

  /**
   * PayScale.contract
   */
  export type PayScale$contractArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    where?: ContractWhereInput
  }

  /**
   * PayScale without action
   */
  export type PayScaleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayScale
     */
    select?: PayScaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayScale
     */
    omit?: PayScaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayScaleInclude<ExtArgs> | null
  }


  /**
   * Model Aircraft
   */

  export type AggregateAircraft = {
    _count: AircraftCountAggregateOutputType | null
    _avg: AircraftAvgAggregateOutputType | null
    _sum: AircraftSumAggregateOutputType | null
    _min: AircraftMinAggregateOutputType | null
    _max: AircraftMaxAggregateOutputType | null
  }

  export type AircraftAvgAggregateOutputType = {
    id: number | null
  }

  export type AircraftSumAggregateOutputType = {
    id: number | null
  }

  export type AircraftMinAggregateOutputType = {
    id: number | null
    aircraftCode: string | null
    aircraftName: string | null
    aircraftType: string | null
    payCategory: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type AircraftMaxAggregateOutputType = {
    id: number | null
    aircraftCode: string | null
    aircraftName: string | null
    aircraftType: string | null
    payCategory: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type AircraftCountAggregateOutputType = {
    id: number
    aircraftCode: number
    aircraftName: number
    aircraftType: number
    payCategory: number
    isActive: number
    createdAt: number
    _all: number
  }


  export type AircraftAvgAggregateInputType = {
    id?: true
  }

  export type AircraftSumAggregateInputType = {
    id?: true
  }

  export type AircraftMinAggregateInputType = {
    id?: true
    aircraftCode?: true
    aircraftName?: true
    aircraftType?: true
    payCategory?: true
    isActive?: true
    createdAt?: true
  }

  export type AircraftMaxAggregateInputType = {
    id?: true
    aircraftCode?: true
    aircraftName?: true
    aircraftType?: true
    payCategory?: true
    isActive?: true
    createdAt?: true
  }

  export type AircraftCountAggregateInputType = {
    id?: true
    aircraftCode?: true
    aircraftName?: true
    aircraftType?: true
    payCategory?: true
    isActive?: true
    createdAt?: true
    _all?: true
  }

  export type AircraftAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Aircraft to aggregate.
     */
    where?: AircraftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Aircraft to fetch.
     */
    orderBy?: AircraftOrderByWithRelationInput | AircraftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AircraftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Aircraft from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Aircraft.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Aircraft
    **/
    _count?: true | AircraftCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AircraftAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AircraftSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AircraftMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AircraftMaxAggregateInputType
  }

  export type GetAircraftAggregateType<T extends AircraftAggregateArgs> = {
        [P in keyof T & keyof AggregateAircraft]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAircraft[P]>
      : GetScalarType<T[P], AggregateAircraft[P]>
  }




  export type AircraftGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AircraftWhereInput
    orderBy?: AircraftOrderByWithAggregationInput | AircraftOrderByWithAggregationInput[]
    by: AircraftScalarFieldEnum[] | AircraftScalarFieldEnum
    having?: AircraftScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AircraftCountAggregateInputType | true
    _avg?: AircraftAvgAggregateInputType
    _sum?: AircraftSumAggregateInputType
    _min?: AircraftMinAggregateInputType
    _max?: AircraftMaxAggregateInputType
  }

  export type AircraftGroupByOutputType = {
    id: number
    aircraftCode: string
    aircraftName: string
    aircraftType: string
    payCategory: string
    isActive: boolean
    createdAt: Date
    _count: AircraftCountAggregateOutputType | null
    _avg: AircraftAvgAggregateOutputType | null
    _sum: AircraftSumAggregateOutputType | null
    _min: AircraftMinAggregateOutputType | null
    _max: AircraftMaxAggregateOutputType | null
  }

  type GetAircraftGroupByPayload<T extends AircraftGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AircraftGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AircraftGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AircraftGroupByOutputType[P]>
            : GetScalarType<T[P], AircraftGroupByOutputType[P]>
        }
      >
    >


  export type AircraftSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    aircraftCode?: boolean
    aircraftName?: boolean
    aircraftType?: boolean
    payCategory?: boolean
    isActive?: boolean
    createdAt?: boolean
    payRates?: boolean | Aircraft$payRatesArgs<ExtArgs>
    _count?: boolean | AircraftCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aircraft"]>

  export type AircraftSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    aircraftCode?: boolean
    aircraftName?: boolean
    aircraftType?: boolean
    payCategory?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["aircraft"]>

  export type AircraftSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    aircraftCode?: boolean
    aircraftName?: boolean
    aircraftType?: boolean
    payCategory?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["aircraft"]>

  export type AircraftSelectScalar = {
    id?: boolean
    aircraftCode?: boolean
    aircraftName?: boolean
    aircraftType?: boolean
    payCategory?: boolean
    isActive?: boolean
    createdAt?: boolean
  }

  export type AircraftOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "aircraftCode" | "aircraftName" | "aircraftType" | "payCategory" | "isActive" | "createdAt", ExtArgs["result"]["aircraft"]>
  export type AircraftInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payRates?: boolean | Aircraft$payRatesArgs<ExtArgs>
    _count?: boolean | AircraftCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AircraftIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AircraftIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AircraftPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Aircraft"
    objects: {
      payRates: Prisma.$PayRatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      aircraftCode: string
      aircraftName: string
      aircraftType: string
      payCategory: string
      isActive: boolean
      createdAt: Date
    }, ExtArgs["result"]["aircraft"]>
    composites: {}
  }

  type AircraftGetPayload<S extends boolean | null | undefined | AircraftDefaultArgs> = $Result.GetResult<Prisma.$AircraftPayload, S>

  type AircraftCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AircraftFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AircraftCountAggregateInputType | true
    }

  export interface AircraftDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Aircraft'], meta: { name: 'Aircraft' } }
    /**
     * Find zero or one Aircraft that matches the filter.
     * @param {AircraftFindUniqueArgs} args - Arguments to find a Aircraft
     * @example
     * // Get one Aircraft
     * const aircraft = await prisma.aircraft.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AircraftFindUniqueArgs>(args: SelectSubset<T, AircraftFindUniqueArgs<ExtArgs>>): Prisma__AircraftClient<$Result.GetResult<Prisma.$AircraftPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Aircraft that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AircraftFindUniqueOrThrowArgs} args - Arguments to find a Aircraft
     * @example
     * // Get one Aircraft
     * const aircraft = await prisma.aircraft.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AircraftFindUniqueOrThrowArgs>(args: SelectSubset<T, AircraftFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AircraftClient<$Result.GetResult<Prisma.$AircraftPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Aircraft that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AircraftFindFirstArgs} args - Arguments to find a Aircraft
     * @example
     * // Get one Aircraft
     * const aircraft = await prisma.aircraft.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AircraftFindFirstArgs>(args?: SelectSubset<T, AircraftFindFirstArgs<ExtArgs>>): Prisma__AircraftClient<$Result.GetResult<Prisma.$AircraftPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Aircraft that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AircraftFindFirstOrThrowArgs} args - Arguments to find a Aircraft
     * @example
     * // Get one Aircraft
     * const aircraft = await prisma.aircraft.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AircraftFindFirstOrThrowArgs>(args?: SelectSubset<T, AircraftFindFirstOrThrowArgs<ExtArgs>>): Prisma__AircraftClient<$Result.GetResult<Prisma.$AircraftPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Aircraft that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AircraftFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Aircraft
     * const aircraft = await prisma.aircraft.findMany()
     * 
     * // Get first 10 Aircraft
     * const aircraft = await prisma.aircraft.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aircraftWithIdOnly = await prisma.aircraft.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AircraftFindManyArgs>(args?: SelectSubset<T, AircraftFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AircraftPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Aircraft.
     * @param {AircraftCreateArgs} args - Arguments to create a Aircraft.
     * @example
     * // Create one Aircraft
     * const Aircraft = await prisma.aircraft.create({
     *   data: {
     *     // ... data to create a Aircraft
     *   }
     * })
     * 
     */
    create<T extends AircraftCreateArgs>(args: SelectSubset<T, AircraftCreateArgs<ExtArgs>>): Prisma__AircraftClient<$Result.GetResult<Prisma.$AircraftPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Aircraft.
     * @param {AircraftCreateManyArgs} args - Arguments to create many Aircraft.
     * @example
     * // Create many Aircraft
     * const aircraft = await prisma.aircraft.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AircraftCreateManyArgs>(args?: SelectSubset<T, AircraftCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Aircraft and returns the data saved in the database.
     * @param {AircraftCreateManyAndReturnArgs} args - Arguments to create many Aircraft.
     * @example
     * // Create many Aircraft
     * const aircraft = await prisma.aircraft.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Aircraft and only return the `id`
     * const aircraftWithIdOnly = await prisma.aircraft.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AircraftCreateManyAndReturnArgs>(args?: SelectSubset<T, AircraftCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AircraftPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Aircraft.
     * @param {AircraftDeleteArgs} args - Arguments to delete one Aircraft.
     * @example
     * // Delete one Aircraft
     * const Aircraft = await prisma.aircraft.delete({
     *   where: {
     *     // ... filter to delete one Aircraft
     *   }
     * })
     * 
     */
    delete<T extends AircraftDeleteArgs>(args: SelectSubset<T, AircraftDeleteArgs<ExtArgs>>): Prisma__AircraftClient<$Result.GetResult<Prisma.$AircraftPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Aircraft.
     * @param {AircraftUpdateArgs} args - Arguments to update one Aircraft.
     * @example
     * // Update one Aircraft
     * const aircraft = await prisma.aircraft.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AircraftUpdateArgs>(args: SelectSubset<T, AircraftUpdateArgs<ExtArgs>>): Prisma__AircraftClient<$Result.GetResult<Prisma.$AircraftPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Aircraft.
     * @param {AircraftDeleteManyArgs} args - Arguments to filter Aircraft to delete.
     * @example
     * // Delete a few Aircraft
     * const { count } = await prisma.aircraft.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AircraftDeleteManyArgs>(args?: SelectSubset<T, AircraftDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Aircraft.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AircraftUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Aircraft
     * const aircraft = await prisma.aircraft.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AircraftUpdateManyArgs>(args: SelectSubset<T, AircraftUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Aircraft and returns the data updated in the database.
     * @param {AircraftUpdateManyAndReturnArgs} args - Arguments to update many Aircraft.
     * @example
     * // Update many Aircraft
     * const aircraft = await prisma.aircraft.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Aircraft and only return the `id`
     * const aircraftWithIdOnly = await prisma.aircraft.updateManyAndReturn({
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
    updateManyAndReturn<T extends AircraftUpdateManyAndReturnArgs>(args: SelectSubset<T, AircraftUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AircraftPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Aircraft.
     * @param {AircraftUpsertArgs} args - Arguments to update or create a Aircraft.
     * @example
     * // Update or create a Aircraft
     * const aircraft = await prisma.aircraft.upsert({
     *   create: {
     *     // ... data to create a Aircraft
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Aircraft we want to update
     *   }
     * })
     */
    upsert<T extends AircraftUpsertArgs>(args: SelectSubset<T, AircraftUpsertArgs<ExtArgs>>): Prisma__AircraftClient<$Result.GetResult<Prisma.$AircraftPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Aircraft.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AircraftCountArgs} args - Arguments to filter Aircraft to count.
     * @example
     * // Count the number of Aircraft
     * const count = await prisma.aircraft.count({
     *   where: {
     *     // ... the filter for the Aircraft we want to count
     *   }
     * })
    **/
    count<T extends AircraftCountArgs>(
      args?: Subset<T, AircraftCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AircraftCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Aircraft.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AircraftAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AircraftAggregateArgs>(args: Subset<T, AircraftAggregateArgs>): Prisma.PrismaPromise<GetAircraftAggregateType<T>>

    /**
     * Group by Aircraft.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AircraftGroupByArgs} args - Group by arguments.
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
      T extends AircraftGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AircraftGroupByArgs['orderBy'] }
        : { orderBy?: AircraftGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AircraftGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAircraftGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Aircraft model
   */
  readonly fields: AircraftFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Aircraft.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AircraftClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    payRates<T extends Aircraft$payRatesArgs<ExtArgs> = {}>(args?: Subset<T, Aircraft$payRatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayRatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Aircraft model
   */
  interface AircraftFieldRefs {
    readonly id: FieldRef<"Aircraft", 'Int'>
    readonly aircraftCode: FieldRef<"Aircraft", 'String'>
    readonly aircraftName: FieldRef<"Aircraft", 'String'>
    readonly aircraftType: FieldRef<"Aircraft", 'String'>
    readonly payCategory: FieldRef<"Aircraft", 'String'>
    readonly isActive: FieldRef<"Aircraft", 'Boolean'>
    readonly createdAt: FieldRef<"Aircraft", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Aircraft findUnique
   */
  export type AircraftFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aircraft
     */
    select?: AircraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aircraft
     */
    omit?: AircraftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AircraftInclude<ExtArgs> | null
    /**
     * Filter, which Aircraft to fetch.
     */
    where: AircraftWhereUniqueInput
  }

  /**
   * Aircraft findUniqueOrThrow
   */
  export type AircraftFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aircraft
     */
    select?: AircraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aircraft
     */
    omit?: AircraftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AircraftInclude<ExtArgs> | null
    /**
     * Filter, which Aircraft to fetch.
     */
    where: AircraftWhereUniqueInput
  }

  /**
   * Aircraft findFirst
   */
  export type AircraftFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aircraft
     */
    select?: AircraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aircraft
     */
    omit?: AircraftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AircraftInclude<ExtArgs> | null
    /**
     * Filter, which Aircraft to fetch.
     */
    where?: AircraftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Aircraft to fetch.
     */
    orderBy?: AircraftOrderByWithRelationInput | AircraftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Aircraft.
     */
    cursor?: AircraftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Aircraft from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Aircraft.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Aircraft.
     */
    distinct?: AircraftScalarFieldEnum | AircraftScalarFieldEnum[]
  }

  /**
   * Aircraft findFirstOrThrow
   */
  export type AircraftFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aircraft
     */
    select?: AircraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aircraft
     */
    omit?: AircraftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AircraftInclude<ExtArgs> | null
    /**
     * Filter, which Aircraft to fetch.
     */
    where?: AircraftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Aircraft to fetch.
     */
    orderBy?: AircraftOrderByWithRelationInput | AircraftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Aircraft.
     */
    cursor?: AircraftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Aircraft from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Aircraft.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Aircraft.
     */
    distinct?: AircraftScalarFieldEnum | AircraftScalarFieldEnum[]
  }

  /**
   * Aircraft findMany
   */
  export type AircraftFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aircraft
     */
    select?: AircraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aircraft
     */
    omit?: AircraftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AircraftInclude<ExtArgs> | null
    /**
     * Filter, which Aircraft to fetch.
     */
    where?: AircraftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Aircraft to fetch.
     */
    orderBy?: AircraftOrderByWithRelationInput | AircraftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Aircraft.
     */
    cursor?: AircraftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Aircraft from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Aircraft.
     */
    skip?: number
    distinct?: AircraftScalarFieldEnum | AircraftScalarFieldEnum[]
  }

  /**
   * Aircraft create
   */
  export type AircraftCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aircraft
     */
    select?: AircraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aircraft
     */
    omit?: AircraftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AircraftInclude<ExtArgs> | null
    /**
     * The data needed to create a Aircraft.
     */
    data: XOR<AircraftCreateInput, AircraftUncheckedCreateInput>
  }

  /**
   * Aircraft createMany
   */
  export type AircraftCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Aircraft.
     */
    data: AircraftCreateManyInput | AircraftCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Aircraft createManyAndReturn
   */
  export type AircraftCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aircraft
     */
    select?: AircraftSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Aircraft
     */
    omit?: AircraftOmit<ExtArgs> | null
    /**
     * The data used to create many Aircraft.
     */
    data: AircraftCreateManyInput | AircraftCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Aircraft update
   */
  export type AircraftUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aircraft
     */
    select?: AircraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aircraft
     */
    omit?: AircraftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AircraftInclude<ExtArgs> | null
    /**
     * The data needed to update a Aircraft.
     */
    data: XOR<AircraftUpdateInput, AircraftUncheckedUpdateInput>
    /**
     * Choose, which Aircraft to update.
     */
    where: AircraftWhereUniqueInput
  }

  /**
   * Aircraft updateMany
   */
  export type AircraftUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Aircraft.
     */
    data: XOR<AircraftUpdateManyMutationInput, AircraftUncheckedUpdateManyInput>
    /**
     * Filter which Aircraft to update
     */
    where?: AircraftWhereInput
    /**
     * Limit how many Aircraft to update.
     */
    limit?: number
  }

  /**
   * Aircraft updateManyAndReturn
   */
  export type AircraftUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aircraft
     */
    select?: AircraftSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Aircraft
     */
    omit?: AircraftOmit<ExtArgs> | null
    /**
     * The data used to update Aircraft.
     */
    data: XOR<AircraftUpdateManyMutationInput, AircraftUncheckedUpdateManyInput>
    /**
     * Filter which Aircraft to update
     */
    where?: AircraftWhereInput
    /**
     * Limit how many Aircraft to update.
     */
    limit?: number
  }

  /**
   * Aircraft upsert
   */
  export type AircraftUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aircraft
     */
    select?: AircraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aircraft
     */
    omit?: AircraftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AircraftInclude<ExtArgs> | null
    /**
     * The filter to search for the Aircraft to update in case it exists.
     */
    where: AircraftWhereUniqueInput
    /**
     * In case the Aircraft found by the `where` argument doesn't exist, create a new Aircraft with this data.
     */
    create: XOR<AircraftCreateInput, AircraftUncheckedCreateInput>
    /**
     * In case the Aircraft was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AircraftUpdateInput, AircraftUncheckedUpdateInput>
  }

  /**
   * Aircraft delete
   */
  export type AircraftDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aircraft
     */
    select?: AircraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aircraft
     */
    omit?: AircraftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AircraftInclude<ExtArgs> | null
    /**
     * Filter which Aircraft to delete.
     */
    where: AircraftWhereUniqueInput
  }

  /**
   * Aircraft deleteMany
   */
  export type AircraftDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Aircraft to delete
     */
    where?: AircraftWhereInput
    /**
     * Limit how many Aircraft to delete.
     */
    limit?: number
  }

  /**
   * Aircraft.payRates
   */
  export type Aircraft$payRatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayRate
     */
    select?: PayRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayRate
     */
    omit?: PayRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayRateInclude<ExtArgs> | null
    where?: PayRateWhereInput
    orderBy?: PayRateOrderByWithRelationInput | PayRateOrderByWithRelationInput[]
    cursor?: PayRateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PayRateScalarFieldEnum | PayRateScalarFieldEnum[]
  }

  /**
   * Aircraft without action
   */
  export type AircraftDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aircraft
     */
    select?: AircraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aircraft
     */
    omit?: AircraftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AircraftInclude<ExtArgs> | null
  }


  /**
   * Model PayRate
   */

  export type AggregatePayRate = {
    _count: PayRateCountAggregateOutputType | null
    _avg: PayRateAvgAggregateOutputType | null
    _sum: PayRateSumAggregateOutputType | null
    _min: PayRateMinAggregateOutputType | null
    _max: PayRateMaxAggregateOutputType | null
  }

  export type PayRateAvgAggregateOutputType = {
    id: number | null
    aircraftId: number | null
    payScaleId: number | null
    yearOfService: number | null
    hourlyRate: number | null
  }

  export type PayRateSumAggregateOutputType = {
    id: number | null
    aircraftId: number | null
    payScaleId: number | null
    yearOfService: number | null
    hourlyRate: number | null
  }

  export type PayRateMinAggregateOutputType = {
    id: number | null
    aircraftId: number | null
    payScaleId: number | null
    position: string | null
    yearOfService: number | null
    hourlyRate: number | null
    createdAt: Date | null
  }

  export type PayRateMaxAggregateOutputType = {
    id: number | null
    aircraftId: number | null
    payScaleId: number | null
    position: string | null
    yearOfService: number | null
    hourlyRate: number | null
    createdAt: Date | null
  }

  export type PayRateCountAggregateOutputType = {
    id: number
    aircraftId: number
    payScaleId: number
    position: number
    yearOfService: number
    hourlyRate: number
    createdAt: number
    _all: number
  }


  export type PayRateAvgAggregateInputType = {
    id?: true
    aircraftId?: true
    payScaleId?: true
    yearOfService?: true
    hourlyRate?: true
  }

  export type PayRateSumAggregateInputType = {
    id?: true
    aircraftId?: true
    payScaleId?: true
    yearOfService?: true
    hourlyRate?: true
  }

  export type PayRateMinAggregateInputType = {
    id?: true
    aircraftId?: true
    payScaleId?: true
    position?: true
    yearOfService?: true
    hourlyRate?: true
    createdAt?: true
  }

  export type PayRateMaxAggregateInputType = {
    id?: true
    aircraftId?: true
    payScaleId?: true
    position?: true
    yearOfService?: true
    hourlyRate?: true
    createdAt?: true
  }

  export type PayRateCountAggregateInputType = {
    id?: true
    aircraftId?: true
    payScaleId?: true
    position?: true
    yearOfService?: true
    hourlyRate?: true
    createdAt?: true
    _all?: true
  }

  export type PayRateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PayRate to aggregate.
     */
    where?: PayRateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayRates to fetch.
     */
    orderBy?: PayRateOrderByWithRelationInput | PayRateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PayRateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayRates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayRates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PayRates
    **/
    _count?: true | PayRateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PayRateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PayRateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PayRateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PayRateMaxAggregateInputType
  }

  export type GetPayRateAggregateType<T extends PayRateAggregateArgs> = {
        [P in keyof T & keyof AggregatePayRate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayRate[P]>
      : GetScalarType<T[P], AggregatePayRate[P]>
  }




  export type PayRateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayRateWhereInput
    orderBy?: PayRateOrderByWithAggregationInput | PayRateOrderByWithAggregationInput[]
    by: PayRateScalarFieldEnum[] | PayRateScalarFieldEnum
    having?: PayRateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PayRateCountAggregateInputType | true
    _avg?: PayRateAvgAggregateInputType
    _sum?: PayRateSumAggregateInputType
    _min?: PayRateMinAggregateInputType
    _max?: PayRateMaxAggregateInputType
  }

  export type PayRateGroupByOutputType = {
    id: number
    aircraftId: number
    payScaleId: number
    position: string
    yearOfService: number
    hourlyRate: number
    createdAt: Date
    _count: PayRateCountAggregateOutputType | null
    _avg: PayRateAvgAggregateOutputType | null
    _sum: PayRateSumAggregateOutputType | null
    _min: PayRateMinAggregateOutputType | null
    _max: PayRateMaxAggregateOutputType | null
  }

  type GetPayRateGroupByPayload<T extends PayRateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PayRateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PayRateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PayRateGroupByOutputType[P]>
            : GetScalarType<T[P], PayRateGroupByOutputType[P]>
        }
      >
    >


  export type PayRateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    aircraftId?: boolean
    payScaleId?: boolean
    position?: boolean
    yearOfService?: boolean
    hourlyRate?: boolean
    createdAt?: boolean
    aircraft?: boolean | AircraftDefaultArgs<ExtArgs>
    payScale?: boolean | PayScaleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payRate"]>

  export type PayRateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    aircraftId?: boolean
    payScaleId?: boolean
    position?: boolean
    yearOfService?: boolean
    hourlyRate?: boolean
    createdAt?: boolean
    aircraft?: boolean | AircraftDefaultArgs<ExtArgs>
    payScale?: boolean | PayScaleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payRate"]>

  export type PayRateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    aircraftId?: boolean
    payScaleId?: boolean
    position?: boolean
    yearOfService?: boolean
    hourlyRate?: boolean
    createdAt?: boolean
    aircraft?: boolean | AircraftDefaultArgs<ExtArgs>
    payScale?: boolean | PayScaleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payRate"]>

  export type PayRateSelectScalar = {
    id?: boolean
    aircraftId?: boolean
    payScaleId?: boolean
    position?: boolean
    yearOfService?: boolean
    hourlyRate?: boolean
    createdAt?: boolean
  }

  export type PayRateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "aircraftId" | "payScaleId" | "position" | "yearOfService" | "hourlyRate" | "createdAt", ExtArgs["result"]["payRate"]>
  export type PayRateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aircraft?: boolean | AircraftDefaultArgs<ExtArgs>
    payScale?: boolean | PayScaleDefaultArgs<ExtArgs>
  }
  export type PayRateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aircraft?: boolean | AircraftDefaultArgs<ExtArgs>
    payScale?: boolean | PayScaleDefaultArgs<ExtArgs>
  }
  export type PayRateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aircraft?: boolean | AircraftDefaultArgs<ExtArgs>
    payScale?: boolean | PayScaleDefaultArgs<ExtArgs>
  }

  export type $PayRatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PayRate"
    objects: {
      aircraft: Prisma.$AircraftPayload<ExtArgs>
      payScale: Prisma.$PayScalePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      aircraftId: number
      payScaleId: number
      position: string
      yearOfService: number
      hourlyRate: number
      createdAt: Date
    }, ExtArgs["result"]["payRate"]>
    composites: {}
  }

  type PayRateGetPayload<S extends boolean | null | undefined | PayRateDefaultArgs> = $Result.GetResult<Prisma.$PayRatePayload, S>

  type PayRateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PayRateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PayRateCountAggregateInputType | true
    }

  export interface PayRateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PayRate'], meta: { name: 'PayRate' } }
    /**
     * Find zero or one PayRate that matches the filter.
     * @param {PayRateFindUniqueArgs} args - Arguments to find a PayRate
     * @example
     * // Get one PayRate
     * const payRate = await prisma.payRate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PayRateFindUniqueArgs>(args: SelectSubset<T, PayRateFindUniqueArgs<ExtArgs>>): Prisma__PayRateClient<$Result.GetResult<Prisma.$PayRatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PayRate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PayRateFindUniqueOrThrowArgs} args - Arguments to find a PayRate
     * @example
     * // Get one PayRate
     * const payRate = await prisma.payRate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PayRateFindUniqueOrThrowArgs>(args: SelectSubset<T, PayRateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PayRateClient<$Result.GetResult<Prisma.$PayRatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PayRate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayRateFindFirstArgs} args - Arguments to find a PayRate
     * @example
     * // Get one PayRate
     * const payRate = await prisma.payRate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PayRateFindFirstArgs>(args?: SelectSubset<T, PayRateFindFirstArgs<ExtArgs>>): Prisma__PayRateClient<$Result.GetResult<Prisma.$PayRatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PayRate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayRateFindFirstOrThrowArgs} args - Arguments to find a PayRate
     * @example
     * // Get one PayRate
     * const payRate = await prisma.payRate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PayRateFindFirstOrThrowArgs>(args?: SelectSubset<T, PayRateFindFirstOrThrowArgs<ExtArgs>>): Prisma__PayRateClient<$Result.GetResult<Prisma.$PayRatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PayRates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayRateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PayRates
     * const payRates = await prisma.payRate.findMany()
     * 
     * // Get first 10 PayRates
     * const payRates = await prisma.payRate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const payRateWithIdOnly = await prisma.payRate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PayRateFindManyArgs>(args?: SelectSubset<T, PayRateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayRatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PayRate.
     * @param {PayRateCreateArgs} args - Arguments to create a PayRate.
     * @example
     * // Create one PayRate
     * const PayRate = await prisma.payRate.create({
     *   data: {
     *     // ... data to create a PayRate
     *   }
     * })
     * 
     */
    create<T extends PayRateCreateArgs>(args: SelectSubset<T, PayRateCreateArgs<ExtArgs>>): Prisma__PayRateClient<$Result.GetResult<Prisma.$PayRatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PayRates.
     * @param {PayRateCreateManyArgs} args - Arguments to create many PayRates.
     * @example
     * // Create many PayRates
     * const payRate = await prisma.payRate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PayRateCreateManyArgs>(args?: SelectSubset<T, PayRateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PayRates and returns the data saved in the database.
     * @param {PayRateCreateManyAndReturnArgs} args - Arguments to create many PayRates.
     * @example
     * // Create many PayRates
     * const payRate = await prisma.payRate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PayRates and only return the `id`
     * const payRateWithIdOnly = await prisma.payRate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PayRateCreateManyAndReturnArgs>(args?: SelectSubset<T, PayRateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayRatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PayRate.
     * @param {PayRateDeleteArgs} args - Arguments to delete one PayRate.
     * @example
     * // Delete one PayRate
     * const PayRate = await prisma.payRate.delete({
     *   where: {
     *     // ... filter to delete one PayRate
     *   }
     * })
     * 
     */
    delete<T extends PayRateDeleteArgs>(args: SelectSubset<T, PayRateDeleteArgs<ExtArgs>>): Prisma__PayRateClient<$Result.GetResult<Prisma.$PayRatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PayRate.
     * @param {PayRateUpdateArgs} args - Arguments to update one PayRate.
     * @example
     * // Update one PayRate
     * const payRate = await prisma.payRate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PayRateUpdateArgs>(args: SelectSubset<T, PayRateUpdateArgs<ExtArgs>>): Prisma__PayRateClient<$Result.GetResult<Prisma.$PayRatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PayRates.
     * @param {PayRateDeleteManyArgs} args - Arguments to filter PayRates to delete.
     * @example
     * // Delete a few PayRates
     * const { count } = await prisma.payRate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PayRateDeleteManyArgs>(args?: SelectSubset<T, PayRateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PayRates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayRateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PayRates
     * const payRate = await prisma.payRate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PayRateUpdateManyArgs>(args: SelectSubset<T, PayRateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PayRates and returns the data updated in the database.
     * @param {PayRateUpdateManyAndReturnArgs} args - Arguments to update many PayRates.
     * @example
     * // Update many PayRates
     * const payRate = await prisma.payRate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PayRates and only return the `id`
     * const payRateWithIdOnly = await prisma.payRate.updateManyAndReturn({
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
    updateManyAndReturn<T extends PayRateUpdateManyAndReturnArgs>(args: SelectSubset<T, PayRateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayRatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PayRate.
     * @param {PayRateUpsertArgs} args - Arguments to update or create a PayRate.
     * @example
     * // Update or create a PayRate
     * const payRate = await prisma.payRate.upsert({
     *   create: {
     *     // ... data to create a PayRate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PayRate we want to update
     *   }
     * })
     */
    upsert<T extends PayRateUpsertArgs>(args: SelectSubset<T, PayRateUpsertArgs<ExtArgs>>): Prisma__PayRateClient<$Result.GetResult<Prisma.$PayRatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PayRates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayRateCountArgs} args - Arguments to filter PayRates to count.
     * @example
     * // Count the number of PayRates
     * const count = await prisma.payRate.count({
     *   where: {
     *     // ... the filter for the PayRates we want to count
     *   }
     * })
    **/
    count<T extends PayRateCountArgs>(
      args?: Subset<T, PayRateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PayRateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PayRate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayRateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PayRateAggregateArgs>(args: Subset<T, PayRateAggregateArgs>): Prisma.PrismaPromise<GetPayRateAggregateType<T>>

    /**
     * Group by PayRate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayRateGroupByArgs} args - Group by arguments.
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
      T extends PayRateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PayRateGroupByArgs['orderBy'] }
        : { orderBy?: PayRateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PayRateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPayRateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PayRate model
   */
  readonly fields: PayRateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PayRate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PayRateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    aircraft<T extends AircraftDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AircraftDefaultArgs<ExtArgs>>): Prisma__AircraftClient<$Result.GetResult<Prisma.$AircraftPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    payScale<T extends PayScaleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PayScaleDefaultArgs<ExtArgs>>): Prisma__PayScaleClient<$Result.GetResult<Prisma.$PayScalePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PayRate model
   */
  interface PayRateFieldRefs {
    readonly id: FieldRef<"PayRate", 'Int'>
    readonly aircraftId: FieldRef<"PayRate", 'Int'>
    readonly payScaleId: FieldRef<"PayRate", 'Int'>
    readonly position: FieldRef<"PayRate", 'String'>
    readonly yearOfService: FieldRef<"PayRate", 'Int'>
    readonly hourlyRate: FieldRef<"PayRate", 'Float'>
    readonly createdAt: FieldRef<"PayRate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PayRate findUnique
   */
  export type PayRateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayRate
     */
    select?: PayRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayRate
     */
    omit?: PayRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayRateInclude<ExtArgs> | null
    /**
     * Filter, which PayRate to fetch.
     */
    where: PayRateWhereUniqueInput
  }

  /**
   * PayRate findUniqueOrThrow
   */
  export type PayRateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayRate
     */
    select?: PayRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayRate
     */
    omit?: PayRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayRateInclude<ExtArgs> | null
    /**
     * Filter, which PayRate to fetch.
     */
    where: PayRateWhereUniqueInput
  }

  /**
   * PayRate findFirst
   */
  export type PayRateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayRate
     */
    select?: PayRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayRate
     */
    omit?: PayRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayRateInclude<ExtArgs> | null
    /**
     * Filter, which PayRate to fetch.
     */
    where?: PayRateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayRates to fetch.
     */
    orderBy?: PayRateOrderByWithRelationInput | PayRateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PayRates.
     */
    cursor?: PayRateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayRates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayRates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PayRates.
     */
    distinct?: PayRateScalarFieldEnum | PayRateScalarFieldEnum[]
  }

  /**
   * PayRate findFirstOrThrow
   */
  export type PayRateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayRate
     */
    select?: PayRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayRate
     */
    omit?: PayRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayRateInclude<ExtArgs> | null
    /**
     * Filter, which PayRate to fetch.
     */
    where?: PayRateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayRates to fetch.
     */
    orderBy?: PayRateOrderByWithRelationInput | PayRateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PayRates.
     */
    cursor?: PayRateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayRates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayRates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PayRates.
     */
    distinct?: PayRateScalarFieldEnum | PayRateScalarFieldEnum[]
  }

  /**
   * PayRate findMany
   */
  export type PayRateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayRate
     */
    select?: PayRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayRate
     */
    omit?: PayRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayRateInclude<ExtArgs> | null
    /**
     * Filter, which PayRates to fetch.
     */
    where?: PayRateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayRates to fetch.
     */
    orderBy?: PayRateOrderByWithRelationInput | PayRateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PayRates.
     */
    cursor?: PayRateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayRates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayRates.
     */
    skip?: number
    distinct?: PayRateScalarFieldEnum | PayRateScalarFieldEnum[]
  }

  /**
   * PayRate create
   */
  export type PayRateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayRate
     */
    select?: PayRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayRate
     */
    omit?: PayRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayRateInclude<ExtArgs> | null
    /**
     * The data needed to create a PayRate.
     */
    data: XOR<PayRateCreateInput, PayRateUncheckedCreateInput>
  }

  /**
   * PayRate createMany
   */
  export type PayRateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PayRates.
     */
    data: PayRateCreateManyInput | PayRateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PayRate createManyAndReturn
   */
  export type PayRateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayRate
     */
    select?: PayRateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PayRate
     */
    omit?: PayRateOmit<ExtArgs> | null
    /**
     * The data used to create many PayRates.
     */
    data: PayRateCreateManyInput | PayRateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayRateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PayRate update
   */
  export type PayRateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayRate
     */
    select?: PayRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayRate
     */
    omit?: PayRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayRateInclude<ExtArgs> | null
    /**
     * The data needed to update a PayRate.
     */
    data: XOR<PayRateUpdateInput, PayRateUncheckedUpdateInput>
    /**
     * Choose, which PayRate to update.
     */
    where: PayRateWhereUniqueInput
  }

  /**
   * PayRate updateMany
   */
  export type PayRateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PayRates.
     */
    data: XOR<PayRateUpdateManyMutationInput, PayRateUncheckedUpdateManyInput>
    /**
     * Filter which PayRates to update
     */
    where?: PayRateWhereInput
    /**
     * Limit how many PayRates to update.
     */
    limit?: number
  }

  /**
   * PayRate updateManyAndReturn
   */
  export type PayRateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayRate
     */
    select?: PayRateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PayRate
     */
    omit?: PayRateOmit<ExtArgs> | null
    /**
     * The data used to update PayRates.
     */
    data: XOR<PayRateUpdateManyMutationInput, PayRateUncheckedUpdateManyInput>
    /**
     * Filter which PayRates to update
     */
    where?: PayRateWhereInput
    /**
     * Limit how many PayRates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayRateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PayRate upsert
   */
  export type PayRateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayRate
     */
    select?: PayRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayRate
     */
    omit?: PayRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayRateInclude<ExtArgs> | null
    /**
     * The filter to search for the PayRate to update in case it exists.
     */
    where: PayRateWhereUniqueInput
    /**
     * In case the PayRate found by the `where` argument doesn't exist, create a new PayRate with this data.
     */
    create: XOR<PayRateCreateInput, PayRateUncheckedCreateInput>
    /**
     * In case the PayRate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PayRateUpdateInput, PayRateUncheckedUpdateInput>
  }

  /**
   * PayRate delete
   */
  export type PayRateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayRate
     */
    select?: PayRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayRate
     */
    omit?: PayRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayRateInclude<ExtArgs> | null
    /**
     * Filter which PayRate to delete.
     */
    where: PayRateWhereUniqueInput
  }

  /**
   * PayRate deleteMany
   */
  export type PayRateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PayRates to delete
     */
    where?: PayRateWhereInput
    /**
     * Limit how many PayRates to delete.
     */
    limit?: number
  }

  /**
   * PayRate without action
   */
  export type PayRateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayRate
     */
    select?: PayRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayRate
     */
    omit?: PayRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayRateInclude<ExtArgs> | null
  }


  /**
   * Model Contract
   */

  export type AggregateContract = {
    _count: ContractCountAggregateOutputType | null
    _avg: ContractAvgAggregateOutputType | null
    _sum: ContractSumAggregateOutputType | null
    _min: ContractMinAggregateOutputType | null
    _max: ContractMaxAggregateOutputType | null
  }

  export type ContractAvgAggregateOutputType = {
    id: number | null
    versionNumber: number | null
    previousVersionId: number | null
  }

  export type ContractSumAggregateOutputType = {
    id: number | null
    versionNumber: number | null
    previousVersionId: number | null
  }

  export type ContractMinAggregateOutputType = {
    id: number | null
    contractId: string | null
    version: string | null
    versionNumber: number | null
    contractType: string | null
    effectiveDate: Date | null
    expirationDate: Date | null
    ratificationDate: Date | null
    previousVersionId: number | null
    title: string | null
    description: string | null
    pdfFilePath: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContractMaxAggregateOutputType = {
    id: number | null
    contractId: string | null
    version: string | null
    versionNumber: number | null
    contractType: string | null
    effectiveDate: Date | null
    expirationDate: Date | null
    ratificationDate: Date | null
    previousVersionId: number | null
    title: string | null
    description: string | null
    pdfFilePath: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContractCountAggregateOutputType = {
    id: number
    contractId: number
    version: number
    versionNumber: number
    contractType: number
    effectiveDate: number
    expirationDate: number
    ratificationDate: number
    previousVersionId: number
    title: number
    description: number
    pdfFilePath: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContractAvgAggregateInputType = {
    id?: true
    versionNumber?: true
    previousVersionId?: true
  }

  export type ContractSumAggregateInputType = {
    id?: true
    versionNumber?: true
    previousVersionId?: true
  }

  export type ContractMinAggregateInputType = {
    id?: true
    contractId?: true
    version?: true
    versionNumber?: true
    contractType?: true
    effectiveDate?: true
    expirationDate?: true
    ratificationDate?: true
    previousVersionId?: true
    title?: true
    description?: true
    pdfFilePath?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContractMaxAggregateInputType = {
    id?: true
    contractId?: true
    version?: true
    versionNumber?: true
    contractType?: true
    effectiveDate?: true
    expirationDate?: true
    ratificationDate?: true
    previousVersionId?: true
    title?: true
    description?: true
    pdfFilePath?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContractCountAggregateInputType = {
    id?: true
    contractId?: true
    version?: true
    versionNumber?: true
    contractType?: true
    effectiveDate?: true
    expirationDate?: true
    ratificationDate?: true
    previousVersionId?: true
    title?: true
    description?: true
    pdfFilePath?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContractAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contract to aggregate.
     */
    where?: ContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contracts
    **/
    _count?: true | ContractCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContractAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContractSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContractMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContractMaxAggregateInputType
  }

  export type GetContractAggregateType<T extends ContractAggregateArgs> = {
        [P in keyof T & keyof AggregateContract]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContract[P]>
      : GetScalarType<T[P], AggregateContract[P]>
  }




  export type ContractGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContractWhereInput
    orderBy?: ContractOrderByWithAggregationInput | ContractOrderByWithAggregationInput[]
    by: ContractScalarFieldEnum[] | ContractScalarFieldEnum
    having?: ContractScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContractCountAggregateInputType | true
    _avg?: ContractAvgAggregateInputType
    _sum?: ContractSumAggregateInputType
    _min?: ContractMinAggregateInputType
    _max?: ContractMaxAggregateInputType
  }

  export type ContractGroupByOutputType = {
    id: number
    contractId: string
    version: string
    versionNumber: number
    contractType: string
    effectiveDate: Date
    expirationDate: Date | null
    ratificationDate: Date | null
    previousVersionId: number | null
    title: string
    description: string | null
    pdfFilePath: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: ContractCountAggregateOutputType | null
    _avg: ContractAvgAggregateOutputType | null
    _sum: ContractSumAggregateOutputType | null
    _min: ContractMinAggregateOutputType | null
    _max: ContractMaxAggregateOutputType | null
  }

  type GetContractGroupByPayload<T extends ContractGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContractGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContractGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContractGroupByOutputType[P]>
            : GetScalarType<T[P], ContractGroupByOutputType[P]>
        }
      >
    >


  export type ContractSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contractId?: boolean
    version?: boolean
    versionNumber?: boolean
    contractType?: boolean
    effectiveDate?: boolean
    expirationDate?: boolean
    ratificationDate?: boolean
    previousVersionId?: boolean
    title?: boolean
    description?: boolean
    pdfFilePath?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    previousVersion?: boolean | Contract$previousVersionArgs<ExtArgs>
    nextVersions?: boolean | Contract$nextVersionsArgs<ExtArgs>
    payScales?: boolean | Contract$payScalesArgs<ExtArgs>
    contractItems?: boolean | Contract$contractItemsArgs<ExtArgs>
    changeLog?: boolean | Contract$changeLogArgs<ExtArgs>
    _count?: boolean | ContractCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contract"]>

  export type ContractSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contractId?: boolean
    version?: boolean
    versionNumber?: boolean
    contractType?: boolean
    effectiveDate?: boolean
    expirationDate?: boolean
    ratificationDate?: boolean
    previousVersionId?: boolean
    title?: boolean
    description?: boolean
    pdfFilePath?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    previousVersion?: boolean | Contract$previousVersionArgs<ExtArgs>
  }, ExtArgs["result"]["contract"]>

  export type ContractSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contractId?: boolean
    version?: boolean
    versionNumber?: boolean
    contractType?: boolean
    effectiveDate?: boolean
    expirationDate?: boolean
    ratificationDate?: boolean
    previousVersionId?: boolean
    title?: boolean
    description?: boolean
    pdfFilePath?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    previousVersion?: boolean | Contract$previousVersionArgs<ExtArgs>
  }, ExtArgs["result"]["contract"]>

  export type ContractSelectScalar = {
    id?: boolean
    contractId?: boolean
    version?: boolean
    versionNumber?: boolean
    contractType?: boolean
    effectiveDate?: boolean
    expirationDate?: boolean
    ratificationDate?: boolean
    previousVersionId?: boolean
    title?: boolean
    description?: boolean
    pdfFilePath?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ContractOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "contractId" | "version" | "versionNumber" | "contractType" | "effectiveDate" | "expirationDate" | "ratificationDate" | "previousVersionId" | "title" | "description" | "pdfFilePath" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["contract"]>
  export type ContractInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    previousVersion?: boolean | Contract$previousVersionArgs<ExtArgs>
    nextVersions?: boolean | Contract$nextVersionsArgs<ExtArgs>
    payScales?: boolean | Contract$payScalesArgs<ExtArgs>
    contractItems?: boolean | Contract$contractItemsArgs<ExtArgs>
    changeLog?: boolean | Contract$changeLogArgs<ExtArgs>
    _count?: boolean | ContractCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ContractIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    previousVersion?: boolean | Contract$previousVersionArgs<ExtArgs>
  }
  export type ContractIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    previousVersion?: boolean | Contract$previousVersionArgs<ExtArgs>
  }

  export type $ContractPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contract"
    objects: {
      previousVersion: Prisma.$ContractPayload<ExtArgs> | null
      nextVersions: Prisma.$ContractPayload<ExtArgs>[]
      payScales: Prisma.$PayScalePayload<ExtArgs>[]
      contractItems: Prisma.$ContractItemPayload<ExtArgs>[]
      changeLog: Prisma.$ContractChangePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      contractId: string
      version: string
      versionNumber: number
      contractType: string
      effectiveDate: Date
      expirationDate: Date | null
      ratificationDate: Date | null
      previousVersionId: number | null
      title: string
      description: string | null
      pdfFilePath: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["contract"]>
    composites: {}
  }

  type ContractGetPayload<S extends boolean | null | undefined | ContractDefaultArgs> = $Result.GetResult<Prisma.$ContractPayload, S>

  type ContractCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContractFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContractCountAggregateInputType | true
    }

  export interface ContractDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contract'], meta: { name: 'Contract' } }
    /**
     * Find zero or one Contract that matches the filter.
     * @param {ContractFindUniqueArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContractFindUniqueArgs>(args: SelectSubset<T, ContractFindUniqueArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contract that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContractFindUniqueOrThrowArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContractFindUniqueOrThrowArgs>(args: SelectSubset<T, ContractFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contract that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractFindFirstArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContractFindFirstArgs>(args?: SelectSubset<T, ContractFindFirstArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contract that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractFindFirstOrThrowArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContractFindFirstOrThrowArgs>(args?: SelectSubset<T, ContractFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contracts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contracts
     * const contracts = await prisma.contract.findMany()
     * 
     * // Get first 10 Contracts
     * const contracts = await prisma.contract.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contractWithIdOnly = await prisma.contract.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContractFindManyArgs>(args?: SelectSubset<T, ContractFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contract.
     * @param {ContractCreateArgs} args - Arguments to create a Contract.
     * @example
     * // Create one Contract
     * const Contract = await prisma.contract.create({
     *   data: {
     *     // ... data to create a Contract
     *   }
     * })
     * 
     */
    create<T extends ContractCreateArgs>(args: SelectSubset<T, ContractCreateArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contracts.
     * @param {ContractCreateManyArgs} args - Arguments to create many Contracts.
     * @example
     * // Create many Contracts
     * const contract = await prisma.contract.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContractCreateManyArgs>(args?: SelectSubset<T, ContractCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contracts and returns the data saved in the database.
     * @param {ContractCreateManyAndReturnArgs} args - Arguments to create many Contracts.
     * @example
     * // Create many Contracts
     * const contract = await prisma.contract.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contracts and only return the `id`
     * const contractWithIdOnly = await prisma.contract.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContractCreateManyAndReturnArgs>(args?: SelectSubset<T, ContractCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Contract.
     * @param {ContractDeleteArgs} args - Arguments to delete one Contract.
     * @example
     * // Delete one Contract
     * const Contract = await prisma.contract.delete({
     *   where: {
     *     // ... filter to delete one Contract
     *   }
     * })
     * 
     */
    delete<T extends ContractDeleteArgs>(args: SelectSubset<T, ContractDeleteArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contract.
     * @param {ContractUpdateArgs} args - Arguments to update one Contract.
     * @example
     * // Update one Contract
     * const contract = await prisma.contract.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContractUpdateArgs>(args: SelectSubset<T, ContractUpdateArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contracts.
     * @param {ContractDeleteManyArgs} args - Arguments to filter Contracts to delete.
     * @example
     * // Delete a few Contracts
     * const { count } = await prisma.contract.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContractDeleteManyArgs>(args?: SelectSubset<T, ContractDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contracts
     * const contract = await prisma.contract.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContractUpdateManyArgs>(args: SelectSubset<T, ContractUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contracts and returns the data updated in the database.
     * @param {ContractUpdateManyAndReturnArgs} args - Arguments to update many Contracts.
     * @example
     * // Update many Contracts
     * const contract = await prisma.contract.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contracts and only return the `id`
     * const contractWithIdOnly = await prisma.contract.updateManyAndReturn({
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
    updateManyAndReturn<T extends ContractUpdateManyAndReturnArgs>(args: SelectSubset<T, ContractUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Contract.
     * @param {ContractUpsertArgs} args - Arguments to update or create a Contract.
     * @example
     * // Update or create a Contract
     * const contract = await prisma.contract.upsert({
     *   create: {
     *     // ... data to create a Contract
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contract we want to update
     *   }
     * })
     */
    upsert<T extends ContractUpsertArgs>(args: SelectSubset<T, ContractUpsertArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractCountArgs} args - Arguments to filter Contracts to count.
     * @example
     * // Count the number of Contracts
     * const count = await prisma.contract.count({
     *   where: {
     *     // ... the filter for the Contracts we want to count
     *   }
     * })
    **/
    count<T extends ContractCountArgs>(
      args?: Subset<T, ContractCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContractCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contract.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContractAggregateArgs>(args: Subset<T, ContractAggregateArgs>): Prisma.PrismaPromise<GetContractAggregateType<T>>

    /**
     * Group by Contract.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractGroupByArgs} args - Group by arguments.
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
      T extends ContractGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContractGroupByArgs['orderBy'] }
        : { orderBy?: ContractGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContractGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContractGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contract model
   */
  readonly fields: ContractFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contract.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContractClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    previousVersion<T extends Contract$previousVersionArgs<ExtArgs> = {}>(args?: Subset<T, Contract$previousVersionArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    nextVersions<T extends Contract$nextVersionsArgs<ExtArgs> = {}>(args?: Subset<T, Contract$nextVersionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payScales<T extends Contract$payScalesArgs<ExtArgs> = {}>(args?: Subset<T, Contract$payScalesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayScalePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contractItems<T extends Contract$contractItemsArgs<ExtArgs> = {}>(args?: Subset<T, Contract$contractItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    changeLog<T extends Contract$changeLogArgs<ExtArgs> = {}>(args?: Subset<T, Contract$changeLogArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractChangePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Contract model
   */
  interface ContractFieldRefs {
    readonly id: FieldRef<"Contract", 'Int'>
    readonly contractId: FieldRef<"Contract", 'String'>
    readonly version: FieldRef<"Contract", 'String'>
    readonly versionNumber: FieldRef<"Contract", 'Int'>
    readonly contractType: FieldRef<"Contract", 'String'>
    readonly effectiveDate: FieldRef<"Contract", 'DateTime'>
    readonly expirationDate: FieldRef<"Contract", 'DateTime'>
    readonly ratificationDate: FieldRef<"Contract", 'DateTime'>
    readonly previousVersionId: FieldRef<"Contract", 'Int'>
    readonly title: FieldRef<"Contract", 'String'>
    readonly description: FieldRef<"Contract", 'String'>
    readonly pdfFilePath: FieldRef<"Contract", 'String'>
    readonly isActive: FieldRef<"Contract", 'Boolean'>
    readonly createdAt: FieldRef<"Contract", 'DateTime'>
    readonly updatedAt: FieldRef<"Contract", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Contract findUnique
   */
  export type ContractFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contract to fetch.
     */
    where: ContractWhereUniqueInput
  }

  /**
   * Contract findUniqueOrThrow
   */
  export type ContractFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contract to fetch.
     */
    where: ContractWhereUniqueInput
  }

  /**
   * Contract findFirst
   */
  export type ContractFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contract to fetch.
     */
    where?: ContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contracts.
     */
    cursor?: ContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contracts.
     */
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }

  /**
   * Contract findFirstOrThrow
   */
  export type ContractFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contract to fetch.
     */
    where?: ContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contracts.
     */
    cursor?: ContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contracts.
     */
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }

  /**
   * Contract findMany
   */
  export type ContractFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contracts to fetch.
     */
    where?: ContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contracts.
     */
    cursor?: ContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }

  /**
   * Contract create
   */
  export type ContractCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * The data needed to create a Contract.
     */
    data: XOR<ContractCreateInput, ContractUncheckedCreateInput>
  }

  /**
   * Contract createMany
   */
  export type ContractCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contracts.
     */
    data: ContractCreateManyInput | ContractCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contract createManyAndReturn
   */
  export type ContractCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * The data used to create many Contracts.
     */
    data: ContractCreateManyInput | ContractCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contract update
   */
  export type ContractUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * The data needed to update a Contract.
     */
    data: XOR<ContractUpdateInput, ContractUncheckedUpdateInput>
    /**
     * Choose, which Contract to update.
     */
    where: ContractWhereUniqueInput
  }

  /**
   * Contract updateMany
   */
  export type ContractUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contracts.
     */
    data: XOR<ContractUpdateManyMutationInput, ContractUncheckedUpdateManyInput>
    /**
     * Filter which Contracts to update
     */
    where?: ContractWhereInput
    /**
     * Limit how many Contracts to update.
     */
    limit?: number
  }

  /**
   * Contract updateManyAndReturn
   */
  export type ContractUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * The data used to update Contracts.
     */
    data: XOR<ContractUpdateManyMutationInput, ContractUncheckedUpdateManyInput>
    /**
     * Filter which Contracts to update
     */
    where?: ContractWhereInput
    /**
     * Limit how many Contracts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contract upsert
   */
  export type ContractUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * The filter to search for the Contract to update in case it exists.
     */
    where: ContractWhereUniqueInput
    /**
     * In case the Contract found by the `where` argument doesn't exist, create a new Contract with this data.
     */
    create: XOR<ContractCreateInput, ContractUncheckedCreateInput>
    /**
     * In case the Contract was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContractUpdateInput, ContractUncheckedUpdateInput>
  }

  /**
   * Contract delete
   */
  export type ContractDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter which Contract to delete.
     */
    where: ContractWhereUniqueInput
  }

  /**
   * Contract deleteMany
   */
  export type ContractDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contracts to delete
     */
    where?: ContractWhereInput
    /**
     * Limit how many Contracts to delete.
     */
    limit?: number
  }

  /**
   * Contract.previousVersion
   */
  export type Contract$previousVersionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    where?: ContractWhereInput
  }

  /**
   * Contract.nextVersions
   */
  export type Contract$nextVersionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    where?: ContractWhereInput
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    cursor?: ContractWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }

  /**
   * Contract.payScales
   */
  export type Contract$payScalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayScale
     */
    select?: PayScaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayScale
     */
    omit?: PayScaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayScaleInclude<ExtArgs> | null
    where?: PayScaleWhereInput
    orderBy?: PayScaleOrderByWithRelationInput | PayScaleOrderByWithRelationInput[]
    cursor?: PayScaleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PayScaleScalarFieldEnum | PayScaleScalarFieldEnum[]
  }

  /**
   * Contract.contractItems
   */
  export type Contract$contractItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractItem
     */
    select?: ContractItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractItem
     */
    omit?: ContractItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractItemInclude<ExtArgs> | null
    where?: ContractItemWhereInput
    orderBy?: ContractItemOrderByWithRelationInput | ContractItemOrderByWithRelationInput[]
    cursor?: ContractItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContractItemScalarFieldEnum | ContractItemScalarFieldEnum[]
  }

  /**
   * Contract.changeLog
   */
  export type Contract$changeLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractChange
     */
    select?: ContractChangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractChange
     */
    omit?: ContractChangeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractChangeInclude<ExtArgs> | null
    where?: ContractChangeWhereInput
    orderBy?: ContractChangeOrderByWithRelationInput | ContractChangeOrderByWithRelationInput[]
    cursor?: ContractChangeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContractChangeScalarFieldEnum | ContractChangeScalarFieldEnum[]
  }

  /**
   * Contract without action
   */
  export type ContractDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
  }


  /**
   * Model ContractItem
   */

  export type AggregateContractItem = {
    _count: ContractItemCountAggregateOutputType | null
    _avg: ContractItemAvgAggregateOutputType | null
    _sum: ContractItemSumAggregateOutputType | null
    _min: ContractItemMinAggregateOutputType | null
    _max: ContractItemMaxAggregateOutputType | null
  }

  export type ContractItemAvgAggregateOutputType = {
    id: number | null
    contractId: number | null
    pageNumber: number | null
  }

  export type ContractItemSumAggregateOutputType = {
    id: number | null
    contractId: number | null
    pageNumber: number | null
  }

  export type ContractItemMinAggregateOutputType = {
    id: number | null
    contractId: number | null
    itemId: string | null
    sectionNumber: string | null
    title: string | null
    category: string | null
    subcategory: string | null
    content: string | null
    structuredData: string | null
    summary: string | null
    isNew: boolean | null
    isModified: boolean | null
    isDeleted: boolean | null
    pageNumber: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContractItemMaxAggregateOutputType = {
    id: number | null
    contractId: number | null
    itemId: string | null
    sectionNumber: string | null
    title: string | null
    category: string | null
    subcategory: string | null
    content: string | null
    structuredData: string | null
    summary: string | null
    isNew: boolean | null
    isModified: boolean | null
    isDeleted: boolean | null
    pageNumber: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContractItemCountAggregateOutputType = {
    id: number
    contractId: number
    itemId: number
    sectionNumber: number
    title: number
    category: number
    subcategory: number
    content: number
    structuredData: number
    summary: number
    isNew: number
    isModified: number
    isDeleted: number
    pageNumber: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContractItemAvgAggregateInputType = {
    id?: true
    contractId?: true
    pageNumber?: true
  }

  export type ContractItemSumAggregateInputType = {
    id?: true
    contractId?: true
    pageNumber?: true
  }

  export type ContractItemMinAggregateInputType = {
    id?: true
    contractId?: true
    itemId?: true
    sectionNumber?: true
    title?: true
    category?: true
    subcategory?: true
    content?: true
    structuredData?: true
    summary?: true
    isNew?: true
    isModified?: true
    isDeleted?: true
    pageNumber?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContractItemMaxAggregateInputType = {
    id?: true
    contractId?: true
    itemId?: true
    sectionNumber?: true
    title?: true
    category?: true
    subcategory?: true
    content?: true
    structuredData?: true
    summary?: true
    isNew?: true
    isModified?: true
    isDeleted?: true
    pageNumber?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContractItemCountAggregateInputType = {
    id?: true
    contractId?: true
    itemId?: true
    sectionNumber?: true
    title?: true
    category?: true
    subcategory?: true
    content?: true
    structuredData?: true
    summary?: true
    isNew?: true
    isModified?: true
    isDeleted?: true
    pageNumber?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContractItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContractItem to aggregate.
     */
    where?: ContractItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContractItems to fetch.
     */
    orderBy?: ContractItemOrderByWithRelationInput | ContractItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContractItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContractItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContractItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContractItems
    **/
    _count?: true | ContractItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContractItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContractItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContractItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContractItemMaxAggregateInputType
  }

  export type GetContractItemAggregateType<T extends ContractItemAggregateArgs> = {
        [P in keyof T & keyof AggregateContractItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContractItem[P]>
      : GetScalarType<T[P], AggregateContractItem[P]>
  }




  export type ContractItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContractItemWhereInput
    orderBy?: ContractItemOrderByWithAggregationInput | ContractItemOrderByWithAggregationInput[]
    by: ContractItemScalarFieldEnum[] | ContractItemScalarFieldEnum
    having?: ContractItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContractItemCountAggregateInputType | true
    _avg?: ContractItemAvgAggregateInputType
    _sum?: ContractItemSumAggregateInputType
    _min?: ContractItemMinAggregateInputType
    _max?: ContractItemMaxAggregateInputType
  }

  export type ContractItemGroupByOutputType = {
    id: number
    contractId: number
    itemId: string
    sectionNumber: string
    title: string
    category: string
    subcategory: string | null
    content: string
    structuredData: string | null
    summary: string | null
    isNew: boolean
    isModified: boolean
    isDeleted: boolean
    pageNumber: number | null
    createdAt: Date
    updatedAt: Date
    _count: ContractItemCountAggregateOutputType | null
    _avg: ContractItemAvgAggregateOutputType | null
    _sum: ContractItemSumAggregateOutputType | null
    _min: ContractItemMinAggregateOutputType | null
    _max: ContractItemMaxAggregateOutputType | null
  }

  type GetContractItemGroupByPayload<T extends ContractItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContractItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContractItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContractItemGroupByOutputType[P]>
            : GetScalarType<T[P], ContractItemGroupByOutputType[P]>
        }
      >
    >


  export type ContractItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contractId?: boolean
    itemId?: boolean
    sectionNumber?: boolean
    title?: boolean
    category?: boolean
    subcategory?: boolean
    content?: boolean
    structuredData?: boolean
    summary?: boolean
    isNew?: boolean
    isModified?: boolean
    isDeleted?: boolean
    pageNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    contract?: boolean | ContractDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contractItem"]>

  export type ContractItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contractId?: boolean
    itemId?: boolean
    sectionNumber?: boolean
    title?: boolean
    category?: boolean
    subcategory?: boolean
    content?: boolean
    structuredData?: boolean
    summary?: boolean
    isNew?: boolean
    isModified?: boolean
    isDeleted?: boolean
    pageNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    contract?: boolean | ContractDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contractItem"]>

  export type ContractItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contractId?: boolean
    itemId?: boolean
    sectionNumber?: boolean
    title?: boolean
    category?: boolean
    subcategory?: boolean
    content?: boolean
    structuredData?: boolean
    summary?: boolean
    isNew?: boolean
    isModified?: boolean
    isDeleted?: boolean
    pageNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    contract?: boolean | ContractDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contractItem"]>

  export type ContractItemSelectScalar = {
    id?: boolean
    contractId?: boolean
    itemId?: boolean
    sectionNumber?: boolean
    title?: boolean
    category?: boolean
    subcategory?: boolean
    content?: boolean
    structuredData?: boolean
    summary?: boolean
    isNew?: boolean
    isModified?: boolean
    isDeleted?: boolean
    pageNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ContractItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "contractId" | "itemId" | "sectionNumber" | "title" | "category" | "subcategory" | "content" | "structuredData" | "summary" | "isNew" | "isModified" | "isDeleted" | "pageNumber" | "createdAt" | "updatedAt", ExtArgs["result"]["contractItem"]>
  export type ContractItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contract?: boolean | ContractDefaultArgs<ExtArgs>
  }
  export type ContractItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contract?: boolean | ContractDefaultArgs<ExtArgs>
  }
  export type ContractItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contract?: boolean | ContractDefaultArgs<ExtArgs>
  }

  export type $ContractItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContractItem"
    objects: {
      contract: Prisma.$ContractPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      contractId: number
      itemId: string
      sectionNumber: string
      title: string
      category: string
      subcategory: string | null
      content: string
      structuredData: string | null
      summary: string | null
      isNew: boolean
      isModified: boolean
      isDeleted: boolean
      pageNumber: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["contractItem"]>
    composites: {}
  }

  type ContractItemGetPayload<S extends boolean | null | undefined | ContractItemDefaultArgs> = $Result.GetResult<Prisma.$ContractItemPayload, S>

  type ContractItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContractItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContractItemCountAggregateInputType | true
    }

  export interface ContractItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContractItem'], meta: { name: 'ContractItem' } }
    /**
     * Find zero or one ContractItem that matches the filter.
     * @param {ContractItemFindUniqueArgs} args - Arguments to find a ContractItem
     * @example
     * // Get one ContractItem
     * const contractItem = await prisma.contractItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContractItemFindUniqueArgs>(args: SelectSubset<T, ContractItemFindUniqueArgs<ExtArgs>>): Prisma__ContractItemClient<$Result.GetResult<Prisma.$ContractItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContractItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContractItemFindUniqueOrThrowArgs} args - Arguments to find a ContractItem
     * @example
     * // Get one ContractItem
     * const contractItem = await prisma.contractItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContractItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ContractItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContractItemClient<$Result.GetResult<Prisma.$ContractItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContractItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractItemFindFirstArgs} args - Arguments to find a ContractItem
     * @example
     * // Get one ContractItem
     * const contractItem = await prisma.contractItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContractItemFindFirstArgs>(args?: SelectSubset<T, ContractItemFindFirstArgs<ExtArgs>>): Prisma__ContractItemClient<$Result.GetResult<Prisma.$ContractItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContractItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractItemFindFirstOrThrowArgs} args - Arguments to find a ContractItem
     * @example
     * // Get one ContractItem
     * const contractItem = await prisma.contractItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContractItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ContractItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContractItemClient<$Result.GetResult<Prisma.$ContractItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContractItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContractItems
     * const contractItems = await prisma.contractItem.findMany()
     * 
     * // Get first 10 ContractItems
     * const contractItems = await prisma.contractItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contractItemWithIdOnly = await prisma.contractItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContractItemFindManyArgs>(args?: SelectSubset<T, ContractItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContractItem.
     * @param {ContractItemCreateArgs} args - Arguments to create a ContractItem.
     * @example
     * // Create one ContractItem
     * const ContractItem = await prisma.contractItem.create({
     *   data: {
     *     // ... data to create a ContractItem
     *   }
     * })
     * 
     */
    create<T extends ContractItemCreateArgs>(args: SelectSubset<T, ContractItemCreateArgs<ExtArgs>>): Prisma__ContractItemClient<$Result.GetResult<Prisma.$ContractItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContractItems.
     * @param {ContractItemCreateManyArgs} args - Arguments to create many ContractItems.
     * @example
     * // Create many ContractItems
     * const contractItem = await prisma.contractItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContractItemCreateManyArgs>(args?: SelectSubset<T, ContractItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContractItems and returns the data saved in the database.
     * @param {ContractItemCreateManyAndReturnArgs} args - Arguments to create many ContractItems.
     * @example
     * // Create many ContractItems
     * const contractItem = await prisma.contractItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContractItems and only return the `id`
     * const contractItemWithIdOnly = await prisma.contractItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContractItemCreateManyAndReturnArgs>(args?: SelectSubset<T, ContractItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContractItem.
     * @param {ContractItemDeleteArgs} args - Arguments to delete one ContractItem.
     * @example
     * // Delete one ContractItem
     * const ContractItem = await prisma.contractItem.delete({
     *   where: {
     *     // ... filter to delete one ContractItem
     *   }
     * })
     * 
     */
    delete<T extends ContractItemDeleteArgs>(args: SelectSubset<T, ContractItemDeleteArgs<ExtArgs>>): Prisma__ContractItemClient<$Result.GetResult<Prisma.$ContractItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContractItem.
     * @param {ContractItemUpdateArgs} args - Arguments to update one ContractItem.
     * @example
     * // Update one ContractItem
     * const contractItem = await prisma.contractItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContractItemUpdateArgs>(args: SelectSubset<T, ContractItemUpdateArgs<ExtArgs>>): Prisma__ContractItemClient<$Result.GetResult<Prisma.$ContractItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContractItems.
     * @param {ContractItemDeleteManyArgs} args - Arguments to filter ContractItems to delete.
     * @example
     * // Delete a few ContractItems
     * const { count } = await prisma.contractItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContractItemDeleteManyArgs>(args?: SelectSubset<T, ContractItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContractItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContractItems
     * const contractItem = await prisma.contractItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContractItemUpdateManyArgs>(args: SelectSubset<T, ContractItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContractItems and returns the data updated in the database.
     * @param {ContractItemUpdateManyAndReturnArgs} args - Arguments to update many ContractItems.
     * @example
     * // Update many ContractItems
     * const contractItem = await prisma.contractItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContractItems and only return the `id`
     * const contractItemWithIdOnly = await prisma.contractItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends ContractItemUpdateManyAndReturnArgs>(args: SelectSubset<T, ContractItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContractItem.
     * @param {ContractItemUpsertArgs} args - Arguments to update or create a ContractItem.
     * @example
     * // Update or create a ContractItem
     * const contractItem = await prisma.contractItem.upsert({
     *   create: {
     *     // ... data to create a ContractItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContractItem we want to update
     *   }
     * })
     */
    upsert<T extends ContractItemUpsertArgs>(args: SelectSubset<T, ContractItemUpsertArgs<ExtArgs>>): Prisma__ContractItemClient<$Result.GetResult<Prisma.$ContractItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContractItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractItemCountArgs} args - Arguments to filter ContractItems to count.
     * @example
     * // Count the number of ContractItems
     * const count = await prisma.contractItem.count({
     *   where: {
     *     // ... the filter for the ContractItems we want to count
     *   }
     * })
    **/
    count<T extends ContractItemCountArgs>(
      args?: Subset<T, ContractItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContractItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContractItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContractItemAggregateArgs>(args: Subset<T, ContractItemAggregateArgs>): Prisma.PrismaPromise<GetContractItemAggregateType<T>>

    /**
     * Group by ContractItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractItemGroupByArgs} args - Group by arguments.
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
      T extends ContractItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContractItemGroupByArgs['orderBy'] }
        : { orderBy?: ContractItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContractItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContractItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContractItem model
   */
  readonly fields: ContractItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContractItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContractItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contract<T extends ContractDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContractDefaultArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ContractItem model
   */
  interface ContractItemFieldRefs {
    readonly id: FieldRef<"ContractItem", 'Int'>
    readonly contractId: FieldRef<"ContractItem", 'Int'>
    readonly itemId: FieldRef<"ContractItem", 'String'>
    readonly sectionNumber: FieldRef<"ContractItem", 'String'>
    readonly title: FieldRef<"ContractItem", 'String'>
    readonly category: FieldRef<"ContractItem", 'String'>
    readonly subcategory: FieldRef<"ContractItem", 'String'>
    readonly content: FieldRef<"ContractItem", 'String'>
    readonly structuredData: FieldRef<"ContractItem", 'String'>
    readonly summary: FieldRef<"ContractItem", 'String'>
    readonly isNew: FieldRef<"ContractItem", 'Boolean'>
    readonly isModified: FieldRef<"ContractItem", 'Boolean'>
    readonly isDeleted: FieldRef<"ContractItem", 'Boolean'>
    readonly pageNumber: FieldRef<"ContractItem", 'Int'>
    readonly createdAt: FieldRef<"ContractItem", 'DateTime'>
    readonly updatedAt: FieldRef<"ContractItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ContractItem findUnique
   */
  export type ContractItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractItem
     */
    select?: ContractItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractItem
     */
    omit?: ContractItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractItemInclude<ExtArgs> | null
    /**
     * Filter, which ContractItem to fetch.
     */
    where: ContractItemWhereUniqueInput
  }

  /**
   * ContractItem findUniqueOrThrow
   */
  export type ContractItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractItem
     */
    select?: ContractItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractItem
     */
    omit?: ContractItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractItemInclude<ExtArgs> | null
    /**
     * Filter, which ContractItem to fetch.
     */
    where: ContractItemWhereUniqueInput
  }

  /**
   * ContractItem findFirst
   */
  export type ContractItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractItem
     */
    select?: ContractItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractItem
     */
    omit?: ContractItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractItemInclude<ExtArgs> | null
    /**
     * Filter, which ContractItem to fetch.
     */
    where?: ContractItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContractItems to fetch.
     */
    orderBy?: ContractItemOrderByWithRelationInput | ContractItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContractItems.
     */
    cursor?: ContractItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContractItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContractItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContractItems.
     */
    distinct?: ContractItemScalarFieldEnum | ContractItemScalarFieldEnum[]
  }

  /**
   * ContractItem findFirstOrThrow
   */
  export type ContractItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractItem
     */
    select?: ContractItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractItem
     */
    omit?: ContractItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractItemInclude<ExtArgs> | null
    /**
     * Filter, which ContractItem to fetch.
     */
    where?: ContractItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContractItems to fetch.
     */
    orderBy?: ContractItemOrderByWithRelationInput | ContractItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContractItems.
     */
    cursor?: ContractItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContractItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContractItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContractItems.
     */
    distinct?: ContractItemScalarFieldEnum | ContractItemScalarFieldEnum[]
  }

  /**
   * ContractItem findMany
   */
  export type ContractItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractItem
     */
    select?: ContractItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractItem
     */
    omit?: ContractItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractItemInclude<ExtArgs> | null
    /**
     * Filter, which ContractItems to fetch.
     */
    where?: ContractItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContractItems to fetch.
     */
    orderBy?: ContractItemOrderByWithRelationInput | ContractItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContractItems.
     */
    cursor?: ContractItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContractItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContractItems.
     */
    skip?: number
    distinct?: ContractItemScalarFieldEnum | ContractItemScalarFieldEnum[]
  }

  /**
   * ContractItem create
   */
  export type ContractItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractItem
     */
    select?: ContractItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractItem
     */
    omit?: ContractItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractItemInclude<ExtArgs> | null
    /**
     * The data needed to create a ContractItem.
     */
    data: XOR<ContractItemCreateInput, ContractItemUncheckedCreateInput>
  }

  /**
   * ContractItem createMany
   */
  export type ContractItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContractItems.
     */
    data: ContractItemCreateManyInput | ContractItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContractItem createManyAndReturn
   */
  export type ContractItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractItem
     */
    select?: ContractItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContractItem
     */
    omit?: ContractItemOmit<ExtArgs> | null
    /**
     * The data used to create many ContractItems.
     */
    data: ContractItemCreateManyInput | ContractItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContractItem update
   */
  export type ContractItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractItem
     */
    select?: ContractItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractItem
     */
    omit?: ContractItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractItemInclude<ExtArgs> | null
    /**
     * The data needed to update a ContractItem.
     */
    data: XOR<ContractItemUpdateInput, ContractItemUncheckedUpdateInput>
    /**
     * Choose, which ContractItem to update.
     */
    where: ContractItemWhereUniqueInput
  }

  /**
   * ContractItem updateMany
   */
  export type ContractItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContractItems.
     */
    data: XOR<ContractItemUpdateManyMutationInput, ContractItemUncheckedUpdateManyInput>
    /**
     * Filter which ContractItems to update
     */
    where?: ContractItemWhereInput
    /**
     * Limit how many ContractItems to update.
     */
    limit?: number
  }

  /**
   * ContractItem updateManyAndReturn
   */
  export type ContractItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractItem
     */
    select?: ContractItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContractItem
     */
    omit?: ContractItemOmit<ExtArgs> | null
    /**
     * The data used to update ContractItems.
     */
    data: XOR<ContractItemUpdateManyMutationInput, ContractItemUncheckedUpdateManyInput>
    /**
     * Filter which ContractItems to update
     */
    where?: ContractItemWhereInput
    /**
     * Limit how many ContractItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContractItem upsert
   */
  export type ContractItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractItem
     */
    select?: ContractItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractItem
     */
    omit?: ContractItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractItemInclude<ExtArgs> | null
    /**
     * The filter to search for the ContractItem to update in case it exists.
     */
    where: ContractItemWhereUniqueInput
    /**
     * In case the ContractItem found by the `where` argument doesn't exist, create a new ContractItem with this data.
     */
    create: XOR<ContractItemCreateInput, ContractItemUncheckedCreateInput>
    /**
     * In case the ContractItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContractItemUpdateInput, ContractItemUncheckedUpdateInput>
  }

  /**
   * ContractItem delete
   */
  export type ContractItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractItem
     */
    select?: ContractItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractItem
     */
    omit?: ContractItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractItemInclude<ExtArgs> | null
    /**
     * Filter which ContractItem to delete.
     */
    where: ContractItemWhereUniqueInput
  }

  /**
   * ContractItem deleteMany
   */
  export type ContractItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContractItems to delete
     */
    where?: ContractItemWhereInput
    /**
     * Limit how many ContractItems to delete.
     */
    limit?: number
  }

  /**
   * ContractItem without action
   */
  export type ContractItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractItem
     */
    select?: ContractItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractItem
     */
    omit?: ContractItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractItemInclude<ExtArgs> | null
  }


  /**
   * Model ContractChange
   */

  export type AggregateContractChange = {
    _count: ContractChangeCountAggregateOutputType | null
    _avg: ContractChangeAvgAggregateOutputType | null
    _sum: ContractChangeSumAggregateOutputType | null
    _min: ContractChangeMinAggregateOutputType | null
    _max: ContractChangeMaxAggregateOutputType | null
  }

  export type ContractChangeAvgAggregateOutputType = {
    id: number | null
    contractId: number | null
    impactAmount: number | null
  }

  export type ContractChangeSumAggregateOutputType = {
    id: number | null
    contractId: number | null
    impactAmount: number | null
  }

  export type ContractChangeMinAggregateOutputType = {
    id: number | null
    contractId: number | null
    changeType: string | null
    itemId: string | null
    category: string | null
    subcategory: string | null
    changeDescription: string | null
    oldValue: string | null
    newValue: string | null
    impact: string | null
    impactAmount: number | null
    impactUnit: string | null
    analysisNotes: string | null
    createdAt: Date | null
  }

  export type ContractChangeMaxAggregateOutputType = {
    id: number | null
    contractId: number | null
    changeType: string | null
    itemId: string | null
    category: string | null
    subcategory: string | null
    changeDescription: string | null
    oldValue: string | null
    newValue: string | null
    impact: string | null
    impactAmount: number | null
    impactUnit: string | null
    analysisNotes: string | null
    createdAt: Date | null
  }

  export type ContractChangeCountAggregateOutputType = {
    id: number
    contractId: number
    changeType: number
    itemId: number
    category: number
    subcategory: number
    changeDescription: number
    oldValue: number
    newValue: number
    impact: number
    impactAmount: number
    impactUnit: number
    analysisNotes: number
    createdAt: number
    _all: number
  }


  export type ContractChangeAvgAggregateInputType = {
    id?: true
    contractId?: true
    impactAmount?: true
  }

  export type ContractChangeSumAggregateInputType = {
    id?: true
    contractId?: true
    impactAmount?: true
  }

  export type ContractChangeMinAggregateInputType = {
    id?: true
    contractId?: true
    changeType?: true
    itemId?: true
    category?: true
    subcategory?: true
    changeDescription?: true
    oldValue?: true
    newValue?: true
    impact?: true
    impactAmount?: true
    impactUnit?: true
    analysisNotes?: true
    createdAt?: true
  }

  export type ContractChangeMaxAggregateInputType = {
    id?: true
    contractId?: true
    changeType?: true
    itemId?: true
    category?: true
    subcategory?: true
    changeDescription?: true
    oldValue?: true
    newValue?: true
    impact?: true
    impactAmount?: true
    impactUnit?: true
    analysisNotes?: true
    createdAt?: true
  }

  export type ContractChangeCountAggregateInputType = {
    id?: true
    contractId?: true
    changeType?: true
    itemId?: true
    category?: true
    subcategory?: true
    changeDescription?: true
    oldValue?: true
    newValue?: true
    impact?: true
    impactAmount?: true
    impactUnit?: true
    analysisNotes?: true
    createdAt?: true
    _all?: true
  }

  export type ContractChangeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContractChange to aggregate.
     */
    where?: ContractChangeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContractChanges to fetch.
     */
    orderBy?: ContractChangeOrderByWithRelationInput | ContractChangeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContractChangeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContractChanges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContractChanges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContractChanges
    **/
    _count?: true | ContractChangeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContractChangeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContractChangeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContractChangeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContractChangeMaxAggregateInputType
  }

  export type GetContractChangeAggregateType<T extends ContractChangeAggregateArgs> = {
        [P in keyof T & keyof AggregateContractChange]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContractChange[P]>
      : GetScalarType<T[P], AggregateContractChange[P]>
  }




  export type ContractChangeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContractChangeWhereInput
    orderBy?: ContractChangeOrderByWithAggregationInput | ContractChangeOrderByWithAggregationInput[]
    by: ContractChangeScalarFieldEnum[] | ContractChangeScalarFieldEnum
    having?: ContractChangeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContractChangeCountAggregateInputType | true
    _avg?: ContractChangeAvgAggregateInputType
    _sum?: ContractChangeSumAggregateInputType
    _min?: ContractChangeMinAggregateInputType
    _max?: ContractChangeMaxAggregateInputType
  }

  export type ContractChangeGroupByOutputType = {
    id: number
    contractId: number
    changeType: string
    itemId: string
    category: string
    subcategory: string | null
    changeDescription: string
    oldValue: string | null
    newValue: string | null
    impact: string | null
    impactAmount: number | null
    impactUnit: string | null
    analysisNotes: string | null
    createdAt: Date
    _count: ContractChangeCountAggregateOutputType | null
    _avg: ContractChangeAvgAggregateOutputType | null
    _sum: ContractChangeSumAggregateOutputType | null
    _min: ContractChangeMinAggregateOutputType | null
    _max: ContractChangeMaxAggregateOutputType | null
  }

  type GetContractChangeGroupByPayload<T extends ContractChangeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContractChangeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContractChangeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContractChangeGroupByOutputType[P]>
            : GetScalarType<T[P], ContractChangeGroupByOutputType[P]>
        }
      >
    >


  export type ContractChangeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contractId?: boolean
    changeType?: boolean
    itemId?: boolean
    category?: boolean
    subcategory?: boolean
    changeDescription?: boolean
    oldValue?: boolean
    newValue?: boolean
    impact?: boolean
    impactAmount?: boolean
    impactUnit?: boolean
    analysisNotes?: boolean
    createdAt?: boolean
    contract?: boolean | ContractDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contractChange"]>

  export type ContractChangeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contractId?: boolean
    changeType?: boolean
    itemId?: boolean
    category?: boolean
    subcategory?: boolean
    changeDescription?: boolean
    oldValue?: boolean
    newValue?: boolean
    impact?: boolean
    impactAmount?: boolean
    impactUnit?: boolean
    analysisNotes?: boolean
    createdAt?: boolean
    contract?: boolean | ContractDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contractChange"]>

  export type ContractChangeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contractId?: boolean
    changeType?: boolean
    itemId?: boolean
    category?: boolean
    subcategory?: boolean
    changeDescription?: boolean
    oldValue?: boolean
    newValue?: boolean
    impact?: boolean
    impactAmount?: boolean
    impactUnit?: boolean
    analysisNotes?: boolean
    createdAt?: boolean
    contract?: boolean | ContractDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contractChange"]>

  export type ContractChangeSelectScalar = {
    id?: boolean
    contractId?: boolean
    changeType?: boolean
    itemId?: boolean
    category?: boolean
    subcategory?: boolean
    changeDescription?: boolean
    oldValue?: boolean
    newValue?: boolean
    impact?: boolean
    impactAmount?: boolean
    impactUnit?: boolean
    analysisNotes?: boolean
    createdAt?: boolean
  }

  export type ContractChangeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "contractId" | "changeType" | "itemId" | "category" | "subcategory" | "changeDescription" | "oldValue" | "newValue" | "impact" | "impactAmount" | "impactUnit" | "analysisNotes" | "createdAt", ExtArgs["result"]["contractChange"]>
  export type ContractChangeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contract?: boolean | ContractDefaultArgs<ExtArgs>
  }
  export type ContractChangeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contract?: boolean | ContractDefaultArgs<ExtArgs>
  }
  export type ContractChangeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contract?: boolean | ContractDefaultArgs<ExtArgs>
  }

  export type $ContractChangePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContractChange"
    objects: {
      contract: Prisma.$ContractPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      contractId: number
      changeType: string
      itemId: string
      category: string
      subcategory: string | null
      changeDescription: string
      oldValue: string | null
      newValue: string | null
      impact: string | null
      impactAmount: number | null
      impactUnit: string | null
      analysisNotes: string | null
      createdAt: Date
    }, ExtArgs["result"]["contractChange"]>
    composites: {}
  }

  type ContractChangeGetPayload<S extends boolean | null | undefined | ContractChangeDefaultArgs> = $Result.GetResult<Prisma.$ContractChangePayload, S>

  type ContractChangeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContractChangeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContractChangeCountAggregateInputType | true
    }

  export interface ContractChangeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContractChange'], meta: { name: 'ContractChange' } }
    /**
     * Find zero or one ContractChange that matches the filter.
     * @param {ContractChangeFindUniqueArgs} args - Arguments to find a ContractChange
     * @example
     * // Get one ContractChange
     * const contractChange = await prisma.contractChange.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContractChangeFindUniqueArgs>(args: SelectSubset<T, ContractChangeFindUniqueArgs<ExtArgs>>): Prisma__ContractChangeClient<$Result.GetResult<Prisma.$ContractChangePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContractChange that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContractChangeFindUniqueOrThrowArgs} args - Arguments to find a ContractChange
     * @example
     * // Get one ContractChange
     * const contractChange = await prisma.contractChange.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContractChangeFindUniqueOrThrowArgs>(args: SelectSubset<T, ContractChangeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContractChangeClient<$Result.GetResult<Prisma.$ContractChangePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContractChange that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractChangeFindFirstArgs} args - Arguments to find a ContractChange
     * @example
     * // Get one ContractChange
     * const contractChange = await prisma.contractChange.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContractChangeFindFirstArgs>(args?: SelectSubset<T, ContractChangeFindFirstArgs<ExtArgs>>): Prisma__ContractChangeClient<$Result.GetResult<Prisma.$ContractChangePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContractChange that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractChangeFindFirstOrThrowArgs} args - Arguments to find a ContractChange
     * @example
     * // Get one ContractChange
     * const contractChange = await prisma.contractChange.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContractChangeFindFirstOrThrowArgs>(args?: SelectSubset<T, ContractChangeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContractChangeClient<$Result.GetResult<Prisma.$ContractChangePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContractChanges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractChangeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContractChanges
     * const contractChanges = await prisma.contractChange.findMany()
     * 
     * // Get first 10 ContractChanges
     * const contractChanges = await prisma.contractChange.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contractChangeWithIdOnly = await prisma.contractChange.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContractChangeFindManyArgs>(args?: SelectSubset<T, ContractChangeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractChangePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContractChange.
     * @param {ContractChangeCreateArgs} args - Arguments to create a ContractChange.
     * @example
     * // Create one ContractChange
     * const ContractChange = await prisma.contractChange.create({
     *   data: {
     *     // ... data to create a ContractChange
     *   }
     * })
     * 
     */
    create<T extends ContractChangeCreateArgs>(args: SelectSubset<T, ContractChangeCreateArgs<ExtArgs>>): Prisma__ContractChangeClient<$Result.GetResult<Prisma.$ContractChangePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContractChanges.
     * @param {ContractChangeCreateManyArgs} args - Arguments to create many ContractChanges.
     * @example
     * // Create many ContractChanges
     * const contractChange = await prisma.contractChange.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContractChangeCreateManyArgs>(args?: SelectSubset<T, ContractChangeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContractChanges and returns the data saved in the database.
     * @param {ContractChangeCreateManyAndReturnArgs} args - Arguments to create many ContractChanges.
     * @example
     * // Create many ContractChanges
     * const contractChange = await prisma.contractChange.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContractChanges and only return the `id`
     * const contractChangeWithIdOnly = await prisma.contractChange.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContractChangeCreateManyAndReturnArgs>(args?: SelectSubset<T, ContractChangeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractChangePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContractChange.
     * @param {ContractChangeDeleteArgs} args - Arguments to delete one ContractChange.
     * @example
     * // Delete one ContractChange
     * const ContractChange = await prisma.contractChange.delete({
     *   where: {
     *     // ... filter to delete one ContractChange
     *   }
     * })
     * 
     */
    delete<T extends ContractChangeDeleteArgs>(args: SelectSubset<T, ContractChangeDeleteArgs<ExtArgs>>): Prisma__ContractChangeClient<$Result.GetResult<Prisma.$ContractChangePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContractChange.
     * @param {ContractChangeUpdateArgs} args - Arguments to update one ContractChange.
     * @example
     * // Update one ContractChange
     * const contractChange = await prisma.contractChange.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContractChangeUpdateArgs>(args: SelectSubset<T, ContractChangeUpdateArgs<ExtArgs>>): Prisma__ContractChangeClient<$Result.GetResult<Prisma.$ContractChangePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContractChanges.
     * @param {ContractChangeDeleteManyArgs} args - Arguments to filter ContractChanges to delete.
     * @example
     * // Delete a few ContractChanges
     * const { count } = await prisma.contractChange.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContractChangeDeleteManyArgs>(args?: SelectSubset<T, ContractChangeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContractChanges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractChangeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContractChanges
     * const contractChange = await prisma.contractChange.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContractChangeUpdateManyArgs>(args: SelectSubset<T, ContractChangeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContractChanges and returns the data updated in the database.
     * @param {ContractChangeUpdateManyAndReturnArgs} args - Arguments to update many ContractChanges.
     * @example
     * // Update many ContractChanges
     * const contractChange = await prisma.contractChange.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContractChanges and only return the `id`
     * const contractChangeWithIdOnly = await prisma.contractChange.updateManyAndReturn({
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
    updateManyAndReturn<T extends ContractChangeUpdateManyAndReturnArgs>(args: SelectSubset<T, ContractChangeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractChangePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContractChange.
     * @param {ContractChangeUpsertArgs} args - Arguments to update or create a ContractChange.
     * @example
     * // Update or create a ContractChange
     * const contractChange = await prisma.contractChange.upsert({
     *   create: {
     *     // ... data to create a ContractChange
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContractChange we want to update
     *   }
     * })
     */
    upsert<T extends ContractChangeUpsertArgs>(args: SelectSubset<T, ContractChangeUpsertArgs<ExtArgs>>): Prisma__ContractChangeClient<$Result.GetResult<Prisma.$ContractChangePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContractChanges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractChangeCountArgs} args - Arguments to filter ContractChanges to count.
     * @example
     * // Count the number of ContractChanges
     * const count = await prisma.contractChange.count({
     *   where: {
     *     // ... the filter for the ContractChanges we want to count
     *   }
     * })
    **/
    count<T extends ContractChangeCountArgs>(
      args?: Subset<T, ContractChangeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContractChangeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContractChange.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractChangeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContractChangeAggregateArgs>(args: Subset<T, ContractChangeAggregateArgs>): Prisma.PrismaPromise<GetContractChangeAggregateType<T>>

    /**
     * Group by ContractChange.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractChangeGroupByArgs} args - Group by arguments.
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
      T extends ContractChangeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContractChangeGroupByArgs['orderBy'] }
        : { orderBy?: ContractChangeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContractChangeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContractChangeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContractChange model
   */
  readonly fields: ContractChangeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContractChange.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContractChangeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contract<T extends ContractDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContractDefaultArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ContractChange model
   */
  interface ContractChangeFieldRefs {
    readonly id: FieldRef<"ContractChange", 'Int'>
    readonly contractId: FieldRef<"ContractChange", 'Int'>
    readonly changeType: FieldRef<"ContractChange", 'String'>
    readonly itemId: FieldRef<"ContractChange", 'String'>
    readonly category: FieldRef<"ContractChange", 'String'>
    readonly subcategory: FieldRef<"ContractChange", 'String'>
    readonly changeDescription: FieldRef<"ContractChange", 'String'>
    readonly oldValue: FieldRef<"ContractChange", 'String'>
    readonly newValue: FieldRef<"ContractChange", 'String'>
    readonly impact: FieldRef<"ContractChange", 'String'>
    readonly impactAmount: FieldRef<"ContractChange", 'Float'>
    readonly impactUnit: FieldRef<"ContractChange", 'String'>
    readonly analysisNotes: FieldRef<"ContractChange", 'String'>
    readonly createdAt: FieldRef<"ContractChange", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ContractChange findUnique
   */
  export type ContractChangeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractChange
     */
    select?: ContractChangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractChange
     */
    omit?: ContractChangeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractChangeInclude<ExtArgs> | null
    /**
     * Filter, which ContractChange to fetch.
     */
    where: ContractChangeWhereUniqueInput
  }

  /**
   * ContractChange findUniqueOrThrow
   */
  export type ContractChangeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractChange
     */
    select?: ContractChangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractChange
     */
    omit?: ContractChangeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractChangeInclude<ExtArgs> | null
    /**
     * Filter, which ContractChange to fetch.
     */
    where: ContractChangeWhereUniqueInput
  }

  /**
   * ContractChange findFirst
   */
  export type ContractChangeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractChange
     */
    select?: ContractChangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractChange
     */
    omit?: ContractChangeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractChangeInclude<ExtArgs> | null
    /**
     * Filter, which ContractChange to fetch.
     */
    where?: ContractChangeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContractChanges to fetch.
     */
    orderBy?: ContractChangeOrderByWithRelationInput | ContractChangeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContractChanges.
     */
    cursor?: ContractChangeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContractChanges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContractChanges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContractChanges.
     */
    distinct?: ContractChangeScalarFieldEnum | ContractChangeScalarFieldEnum[]
  }

  /**
   * ContractChange findFirstOrThrow
   */
  export type ContractChangeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractChange
     */
    select?: ContractChangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractChange
     */
    omit?: ContractChangeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractChangeInclude<ExtArgs> | null
    /**
     * Filter, which ContractChange to fetch.
     */
    where?: ContractChangeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContractChanges to fetch.
     */
    orderBy?: ContractChangeOrderByWithRelationInput | ContractChangeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContractChanges.
     */
    cursor?: ContractChangeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContractChanges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContractChanges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContractChanges.
     */
    distinct?: ContractChangeScalarFieldEnum | ContractChangeScalarFieldEnum[]
  }

  /**
   * ContractChange findMany
   */
  export type ContractChangeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractChange
     */
    select?: ContractChangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractChange
     */
    omit?: ContractChangeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractChangeInclude<ExtArgs> | null
    /**
     * Filter, which ContractChanges to fetch.
     */
    where?: ContractChangeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContractChanges to fetch.
     */
    orderBy?: ContractChangeOrderByWithRelationInput | ContractChangeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContractChanges.
     */
    cursor?: ContractChangeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContractChanges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContractChanges.
     */
    skip?: number
    distinct?: ContractChangeScalarFieldEnum | ContractChangeScalarFieldEnum[]
  }

  /**
   * ContractChange create
   */
  export type ContractChangeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractChange
     */
    select?: ContractChangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractChange
     */
    omit?: ContractChangeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractChangeInclude<ExtArgs> | null
    /**
     * The data needed to create a ContractChange.
     */
    data: XOR<ContractChangeCreateInput, ContractChangeUncheckedCreateInput>
  }

  /**
   * ContractChange createMany
   */
  export type ContractChangeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContractChanges.
     */
    data: ContractChangeCreateManyInput | ContractChangeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContractChange createManyAndReturn
   */
  export type ContractChangeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractChange
     */
    select?: ContractChangeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContractChange
     */
    omit?: ContractChangeOmit<ExtArgs> | null
    /**
     * The data used to create many ContractChanges.
     */
    data: ContractChangeCreateManyInput | ContractChangeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractChangeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContractChange update
   */
  export type ContractChangeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractChange
     */
    select?: ContractChangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractChange
     */
    omit?: ContractChangeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractChangeInclude<ExtArgs> | null
    /**
     * The data needed to update a ContractChange.
     */
    data: XOR<ContractChangeUpdateInput, ContractChangeUncheckedUpdateInput>
    /**
     * Choose, which ContractChange to update.
     */
    where: ContractChangeWhereUniqueInput
  }

  /**
   * ContractChange updateMany
   */
  export type ContractChangeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContractChanges.
     */
    data: XOR<ContractChangeUpdateManyMutationInput, ContractChangeUncheckedUpdateManyInput>
    /**
     * Filter which ContractChanges to update
     */
    where?: ContractChangeWhereInput
    /**
     * Limit how many ContractChanges to update.
     */
    limit?: number
  }

  /**
   * ContractChange updateManyAndReturn
   */
  export type ContractChangeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractChange
     */
    select?: ContractChangeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContractChange
     */
    omit?: ContractChangeOmit<ExtArgs> | null
    /**
     * The data used to update ContractChanges.
     */
    data: XOR<ContractChangeUpdateManyMutationInput, ContractChangeUncheckedUpdateManyInput>
    /**
     * Filter which ContractChanges to update
     */
    where?: ContractChangeWhereInput
    /**
     * Limit how many ContractChanges to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractChangeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContractChange upsert
   */
  export type ContractChangeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractChange
     */
    select?: ContractChangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractChange
     */
    omit?: ContractChangeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractChangeInclude<ExtArgs> | null
    /**
     * The filter to search for the ContractChange to update in case it exists.
     */
    where: ContractChangeWhereUniqueInput
    /**
     * In case the ContractChange found by the `where` argument doesn't exist, create a new ContractChange with this data.
     */
    create: XOR<ContractChangeCreateInput, ContractChangeUncheckedCreateInput>
    /**
     * In case the ContractChange was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContractChangeUpdateInput, ContractChangeUncheckedUpdateInput>
  }

  /**
   * ContractChange delete
   */
  export type ContractChangeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractChange
     */
    select?: ContractChangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractChange
     */
    omit?: ContractChangeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractChangeInclude<ExtArgs> | null
    /**
     * Filter which ContractChange to delete.
     */
    where: ContractChangeWhereUniqueInput
  }

  /**
   * ContractChange deleteMany
   */
  export type ContractChangeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContractChanges to delete
     */
    where?: ContractChangeWhereInput
    /**
     * Limit how many ContractChanges to delete.
     */
    limit?: number
  }

  /**
   * ContractChange without action
   */
  export type ContractChangeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractChange
     */
    select?: ContractChangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractChange
     */
    omit?: ContractChangeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractChangeInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    firebaseUid: 'firebaseUid',
    email: 'email',
    emailVerified: 'emailVerified',
    displayName: 'displayName',
    employeeId: 'employeeId',
    firstName: 'firstName',
    lastName: 'lastName',
    registrationDate: 'registrationDate',
    lastLoginDate: 'lastLoginDate',
    isActive: 'isActive',
    accountType: 'accountType',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PilotScalarFieldEnum: {
    id: 'id',
    empNumber: 'empNumber',
    name: 'name',
    pilotHireDate: 'pilotHireDate',
    scheduledRetireDate: 'scheduledRetireDate',
    isRetired: 'isRetired',
    lastSeenDate: 'lastSeenDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PilotScalarFieldEnum = (typeof PilotScalarFieldEnum)[keyof typeof PilotScalarFieldEnum]


  export const SenioritySnapshotScalarFieldEnum: {
    id: 'id',
    seniorityNumber: 'seniorityNumber',
    category: 'category',
    reportDate: 'reportDate',
    baseCode: 'baseCode',
    fleetCode: 'fleetCode',
    positionCode: 'positionCode',
    baseCity: 'baseCity',
    fleetName: 'fleetName',
    positionName: 'positionName',
    isPlaceholder: 'isPlaceholder',
    pilotId: 'pilotId',
    createdAt: 'createdAt'
  };

  export type SenioritySnapshotScalarFieldEnum = (typeof SenioritySnapshotScalarFieldEnum)[keyof typeof SenioritySnapshotScalarFieldEnum]


  export const DataImportScalarFieldEnum: {
    id: 'id',
    filename: 'filename',
    fileType: 'fileType',
    reportDate: 'reportDate',
    recordCount: 'recordCount',
    importedAt: 'importedAt'
  };

  export type DataImportScalarFieldEnum = (typeof DataImportScalarFieldEnum)[keyof typeof DataImportScalarFieldEnum]


  export const PayScaleScalarFieldEnum: {
    id: 'id',
    effectiveDate: 'effectiveDate',
    expirationDate: 'expirationDate',
    contractVersion: 'contractVersion',
    isActive: 'isActive',
    createdAt: 'createdAt',
    contractId: 'contractId'
  };

  export type PayScaleScalarFieldEnum = (typeof PayScaleScalarFieldEnum)[keyof typeof PayScaleScalarFieldEnum]


  export const AircraftScalarFieldEnum: {
    id: 'id',
    aircraftCode: 'aircraftCode',
    aircraftName: 'aircraftName',
    aircraftType: 'aircraftType',
    payCategory: 'payCategory',
    isActive: 'isActive',
    createdAt: 'createdAt'
  };

  export type AircraftScalarFieldEnum = (typeof AircraftScalarFieldEnum)[keyof typeof AircraftScalarFieldEnum]


  export const PayRateScalarFieldEnum: {
    id: 'id',
    aircraftId: 'aircraftId',
    payScaleId: 'payScaleId',
    position: 'position',
    yearOfService: 'yearOfService',
    hourlyRate: 'hourlyRate',
    createdAt: 'createdAt'
  };

  export type PayRateScalarFieldEnum = (typeof PayRateScalarFieldEnum)[keyof typeof PayRateScalarFieldEnum]


  export const ContractScalarFieldEnum: {
    id: 'id',
    contractId: 'contractId',
    version: 'version',
    versionNumber: 'versionNumber',
    contractType: 'contractType',
    effectiveDate: 'effectiveDate',
    expirationDate: 'expirationDate',
    ratificationDate: 'ratificationDate',
    previousVersionId: 'previousVersionId',
    title: 'title',
    description: 'description',
    pdfFilePath: 'pdfFilePath',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContractScalarFieldEnum = (typeof ContractScalarFieldEnum)[keyof typeof ContractScalarFieldEnum]


  export const ContractItemScalarFieldEnum: {
    id: 'id',
    contractId: 'contractId',
    itemId: 'itemId',
    sectionNumber: 'sectionNumber',
    title: 'title',
    category: 'category',
    subcategory: 'subcategory',
    content: 'content',
    structuredData: 'structuredData',
    summary: 'summary',
    isNew: 'isNew',
    isModified: 'isModified',
    isDeleted: 'isDeleted',
    pageNumber: 'pageNumber',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContractItemScalarFieldEnum = (typeof ContractItemScalarFieldEnum)[keyof typeof ContractItemScalarFieldEnum]


  export const ContractChangeScalarFieldEnum: {
    id: 'id',
    contractId: 'contractId',
    changeType: 'changeType',
    itemId: 'itemId',
    category: 'category',
    subcategory: 'subcategory',
    changeDescription: 'changeDescription',
    oldValue: 'oldValue',
    newValue: 'newValue',
    impact: 'impact',
    impactAmount: 'impactAmount',
    impactUnit: 'impactUnit',
    analysisNotes: 'analysisNotes',
    createdAt: 'createdAt'
  };

  export type ContractChangeScalarFieldEnum = (typeof ContractChangeScalarFieldEnum)[keyof typeof ContractChangeScalarFieldEnum]


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    firebaseUid?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    displayName?: StringNullableFilter<"User"> | string | null
    employeeId?: StringFilter<"User"> | string
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    registrationDate?: DateTimeFilter<"User"> | Date | string
    lastLoginDate?: DateTimeNullableFilter<"User"> | Date | string | null
    isActive?: BoolFilter<"User"> | boolean
    accountType?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    pilot?: XOR<PilotNullableScalarRelationFilter, PilotWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firebaseUid?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    displayName?: SortOrderInput | SortOrder
    employeeId?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    registrationDate?: SortOrder
    lastLoginDate?: SortOrderInput | SortOrder
    isActive?: SortOrder
    accountType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pilot?: PilotOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    firebaseUid?: string
    email?: string
    employeeId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    emailVerified?: BoolFilter<"User"> | boolean
    displayName?: StringNullableFilter<"User"> | string | null
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    registrationDate?: DateTimeFilter<"User"> | Date | string
    lastLoginDate?: DateTimeNullableFilter<"User"> | Date | string | null
    isActive?: BoolFilter<"User"> | boolean
    accountType?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    pilot?: XOR<PilotNullableScalarRelationFilter, PilotWhereInput> | null
  }, "id" | "firebaseUid" | "email" | "employeeId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firebaseUid?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    displayName?: SortOrderInput | SortOrder
    employeeId?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    registrationDate?: SortOrder
    lastLoginDate?: SortOrderInput | SortOrder
    isActive?: SortOrder
    accountType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    firebaseUid?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    displayName?: StringNullableWithAggregatesFilter<"User"> | string | null
    employeeId?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"User"> | string | null
    registrationDate?: DateTimeWithAggregatesFilter<"User"> | Date | string
    lastLoginDate?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    accountType?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PilotWhereInput = {
    AND?: PilotWhereInput | PilotWhereInput[]
    OR?: PilotWhereInput[]
    NOT?: PilotWhereInput | PilotWhereInput[]
    id?: IntFilter<"Pilot"> | number
    empNumber?: StringFilter<"Pilot"> | string
    name?: StringFilter<"Pilot"> | string
    pilotHireDate?: DateTimeNullableFilter<"Pilot"> | Date | string | null
    scheduledRetireDate?: DateTimeNullableFilter<"Pilot"> | Date | string | null
    isRetired?: BoolFilter<"Pilot"> | boolean
    lastSeenDate?: DateTimeNullableFilter<"Pilot"> | Date | string | null
    createdAt?: DateTimeFilter<"Pilot"> | Date | string
    updatedAt?: DateTimeFilter<"Pilot"> | Date | string
    senioritySnapshots?: SenioritySnapshotListRelationFilter
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type PilotOrderByWithRelationInput = {
    id?: SortOrder
    empNumber?: SortOrder
    name?: SortOrder
    pilotHireDate?: SortOrderInput | SortOrder
    scheduledRetireDate?: SortOrderInput | SortOrder
    isRetired?: SortOrder
    lastSeenDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    senioritySnapshots?: SenioritySnapshotOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type PilotWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    empNumber?: string
    AND?: PilotWhereInput | PilotWhereInput[]
    OR?: PilotWhereInput[]
    NOT?: PilotWhereInput | PilotWhereInput[]
    name?: StringFilter<"Pilot"> | string
    pilotHireDate?: DateTimeNullableFilter<"Pilot"> | Date | string | null
    scheduledRetireDate?: DateTimeNullableFilter<"Pilot"> | Date | string | null
    isRetired?: BoolFilter<"Pilot"> | boolean
    lastSeenDate?: DateTimeNullableFilter<"Pilot"> | Date | string | null
    createdAt?: DateTimeFilter<"Pilot"> | Date | string
    updatedAt?: DateTimeFilter<"Pilot"> | Date | string
    senioritySnapshots?: SenioritySnapshotListRelationFilter
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id" | "empNumber">

  export type PilotOrderByWithAggregationInput = {
    id?: SortOrder
    empNumber?: SortOrder
    name?: SortOrder
    pilotHireDate?: SortOrderInput | SortOrder
    scheduledRetireDate?: SortOrderInput | SortOrder
    isRetired?: SortOrder
    lastSeenDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PilotCountOrderByAggregateInput
    _avg?: PilotAvgOrderByAggregateInput
    _max?: PilotMaxOrderByAggregateInput
    _min?: PilotMinOrderByAggregateInput
    _sum?: PilotSumOrderByAggregateInput
  }

  export type PilotScalarWhereWithAggregatesInput = {
    AND?: PilotScalarWhereWithAggregatesInput | PilotScalarWhereWithAggregatesInput[]
    OR?: PilotScalarWhereWithAggregatesInput[]
    NOT?: PilotScalarWhereWithAggregatesInput | PilotScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pilot"> | number
    empNumber?: StringWithAggregatesFilter<"Pilot"> | string
    name?: StringWithAggregatesFilter<"Pilot"> | string
    pilotHireDate?: DateTimeNullableWithAggregatesFilter<"Pilot"> | Date | string | null
    scheduledRetireDate?: DateTimeNullableWithAggregatesFilter<"Pilot"> | Date | string | null
    isRetired?: BoolWithAggregatesFilter<"Pilot"> | boolean
    lastSeenDate?: DateTimeNullableWithAggregatesFilter<"Pilot"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Pilot"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Pilot"> | Date | string
  }

  export type SenioritySnapshotWhereInput = {
    AND?: SenioritySnapshotWhereInput | SenioritySnapshotWhereInput[]
    OR?: SenioritySnapshotWhereInput[]
    NOT?: SenioritySnapshotWhereInput | SenioritySnapshotWhereInput[]
    id?: IntFilter<"SenioritySnapshot"> | number
    seniorityNumber?: IntFilter<"SenioritySnapshot"> | number
    category?: StringFilter<"SenioritySnapshot"> | string
    reportDate?: DateTimeFilter<"SenioritySnapshot"> | Date | string
    baseCode?: StringFilter<"SenioritySnapshot"> | string
    fleetCode?: StringFilter<"SenioritySnapshot"> | string
    positionCode?: StringFilter<"SenioritySnapshot"> | string
    baseCity?: StringFilter<"SenioritySnapshot"> | string
    fleetName?: StringFilter<"SenioritySnapshot"> | string
    positionName?: StringFilter<"SenioritySnapshot"> | string
    isPlaceholder?: BoolFilter<"SenioritySnapshot"> | boolean
    pilotId?: IntFilter<"SenioritySnapshot"> | number
    createdAt?: DateTimeFilter<"SenioritySnapshot"> | Date | string
    pilot?: XOR<PilotScalarRelationFilter, PilotWhereInput>
  }

  export type SenioritySnapshotOrderByWithRelationInput = {
    id?: SortOrder
    seniorityNumber?: SortOrder
    category?: SortOrder
    reportDate?: SortOrder
    baseCode?: SortOrder
    fleetCode?: SortOrder
    positionCode?: SortOrder
    baseCity?: SortOrder
    fleetName?: SortOrder
    positionName?: SortOrder
    isPlaceholder?: SortOrder
    pilotId?: SortOrder
    createdAt?: SortOrder
    pilot?: PilotOrderByWithRelationInput
  }

  export type SenioritySnapshotWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    pilotId_reportDate?: SenioritySnapshotPilotIdReportDateCompoundUniqueInput
    AND?: SenioritySnapshotWhereInput | SenioritySnapshotWhereInput[]
    OR?: SenioritySnapshotWhereInput[]
    NOT?: SenioritySnapshotWhereInput | SenioritySnapshotWhereInput[]
    seniorityNumber?: IntFilter<"SenioritySnapshot"> | number
    category?: StringFilter<"SenioritySnapshot"> | string
    reportDate?: DateTimeFilter<"SenioritySnapshot"> | Date | string
    baseCode?: StringFilter<"SenioritySnapshot"> | string
    fleetCode?: StringFilter<"SenioritySnapshot"> | string
    positionCode?: StringFilter<"SenioritySnapshot"> | string
    baseCity?: StringFilter<"SenioritySnapshot"> | string
    fleetName?: StringFilter<"SenioritySnapshot"> | string
    positionName?: StringFilter<"SenioritySnapshot"> | string
    isPlaceholder?: BoolFilter<"SenioritySnapshot"> | boolean
    pilotId?: IntFilter<"SenioritySnapshot"> | number
    createdAt?: DateTimeFilter<"SenioritySnapshot"> | Date | string
    pilot?: XOR<PilotScalarRelationFilter, PilotWhereInput>
  }, "id" | "pilotId_reportDate">

  export type SenioritySnapshotOrderByWithAggregationInput = {
    id?: SortOrder
    seniorityNumber?: SortOrder
    category?: SortOrder
    reportDate?: SortOrder
    baseCode?: SortOrder
    fleetCode?: SortOrder
    positionCode?: SortOrder
    baseCity?: SortOrder
    fleetName?: SortOrder
    positionName?: SortOrder
    isPlaceholder?: SortOrder
    pilotId?: SortOrder
    createdAt?: SortOrder
    _count?: SenioritySnapshotCountOrderByAggregateInput
    _avg?: SenioritySnapshotAvgOrderByAggregateInput
    _max?: SenioritySnapshotMaxOrderByAggregateInput
    _min?: SenioritySnapshotMinOrderByAggregateInput
    _sum?: SenioritySnapshotSumOrderByAggregateInput
  }

  export type SenioritySnapshotScalarWhereWithAggregatesInput = {
    AND?: SenioritySnapshotScalarWhereWithAggregatesInput | SenioritySnapshotScalarWhereWithAggregatesInput[]
    OR?: SenioritySnapshotScalarWhereWithAggregatesInput[]
    NOT?: SenioritySnapshotScalarWhereWithAggregatesInput | SenioritySnapshotScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SenioritySnapshot"> | number
    seniorityNumber?: IntWithAggregatesFilter<"SenioritySnapshot"> | number
    category?: StringWithAggregatesFilter<"SenioritySnapshot"> | string
    reportDate?: DateTimeWithAggregatesFilter<"SenioritySnapshot"> | Date | string
    baseCode?: StringWithAggregatesFilter<"SenioritySnapshot"> | string
    fleetCode?: StringWithAggregatesFilter<"SenioritySnapshot"> | string
    positionCode?: StringWithAggregatesFilter<"SenioritySnapshot"> | string
    baseCity?: StringWithAggregatesFilter<"SenioritySnapshot"> | string
    fleetName?: StringWithAggregatesFilter<"SenioritySnapshot"> | string
    positionName?: StringWithAggregatesFilter<"SenioritySnapshot"> | string
    isPlaceholder?: BoolWithAggregatesFilter<"SenioritySnapshot"> | boolean
    pilotId?: IntWithAggregatesFilter<"SenioritySnapshot"> | number
    createdAt?: DateTimeWithAggregatesFilter<"SenioritySnapshot"> | Date | string
  }

  export type DataImportWhereInput = {
    AND?: DataImportWhereInput | DataImportWhereInput[]
    OR?: DataImportWhereInput[]
    NOT?: DataImportWhereInput | DataImportWhereInput[]
    id?: IntFilter<"DataImport"> | number
    filename?: StringFilter<"DataImport"> | string
    fileType?: StringFilter<"DataImport"> | string
    reportDate?: DateTimeFilter<"DataImport"> | Date | string
    recordCount?: IntFilter<"DataImport"> | number
    importedAt?: DateTimeFilter<"DataImport"> | Date | string
  }

  export type DataImportOrderByWithRelationInput = {
    id?: SortOrder
    filename?: SortOrder
    fileType?: SortOrder
    reportDate?: SortOrder
    recordCount?: SortOrder
    importedAt?: SortOrder
  }

  export type DataImportWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DataImportWhereInput | DataImportWhereInput[]
    OR?: DataImportWhereInput[]
    NOT?: DataImportWhereInput | DataImportWhereInput[]
    filename?: StringFilter<"DataImport"> | string
    fileType?: StringFilter<"DataImport"> | string
    reportDate?: DateTimeFilter<"DataImport"> | Date | string
    recordCount?: IntFilter<"DataImport"> | number
    importedAt?: DateTimeFilter<"DataImport"> | Date | string
  }, "id">

  export type DataImportOrderByWithAggregationInput = {
    id?: SortOrder
    filename?: SortOrder
    fileType?: SortOrder
    reportDate?: SortOrder
    recordCount?: SortOrder
    importedAt?: SortOrder
    _count?: DataImportCountOrderByAggregateInput
    _avg?: DataImportAvgOrderByAggregateInput
    _max?: DataImportMaxOrderByAggregateInput
    _min?: DataImportMinOrderByAggregateInput
    _sum?: DataImportSumOrderByAggregateInput
  }

  export type DataImportScalarWhereWithAggregatesInput = {
    AND?: DataImportScalarWhereWithAggregatesInput | DataImportScalarWhereWithAggregatesInput[]
    OR?: DataImportScalarWhereWithAggregatesInput[]
    NOT?: DataImportScalarWhereWithAggregatesInput | DataImportScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DataImport"> | number
    filename?: StringWithAggregatesFilter<"DataImport"> | string
    fileType?: StringWithAggregatesFilter<"DataImport"> | string
    reportDate?: DateTimeWithAggregatesFilter<"DataImport"> | Date | string
    recordCount?: IntWithAggregatesFilter<"DataImport"> | number
    importedAt?: DateTimeWithAggregatesFilter<"DataImport"> | Date | string
  }

  export type PayScaleWhereInput = {
    AND?: PayScaleWhereInput | PayScaleWhereInput[]
    OR?: PayScaleWhereInput[]
    NOT?: PayScaleWhereInput | PayScaleWhereInput[]
    id?: IntFilter<"PayScale"> | number
    effectiveDate?: DateTimeFilter<"PayScale"> | Date | string
    expirationDate?: DateTimeNullableFilter<"PayScale"> | Date | string | null
    contractVersion?: StringFilter<"PayScale"> | string
    isActive?: BoolFilter<"PayScale"> | boolean
    createdAt?: DateTimeFilter<"PayScale"> | Date | string
    contractId?: IntNullableFilter<"PayScale"> | number | null
    payRates?: PayRateListRelationFilter
    contract?: XOR<ContractNullableScalarRelationFilter, ContractWhereInput> | null
  }

  export type PayScaleOrderByWithRelationInput = {
    id?: SortOrder
    effectiveDate?: SortOrder
    expirationDate?: SortOrderInput | SortOrder
    contractVersion?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    contractId?: SortOrderInput | SortOrder
    payRates?: PayRateOrderByRelationAggregateInput
    contract?: ContractOrderByWithRelationInput
  }

  export type PayScaleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PayScaleWhereInput | PayScaleWhereInput[]
    OR?: PayScaleWhereInput[]
    NOT?: PayScaleWhereInput | PayScaleWhereInput[]
    effectiveDate?: DateTimeFilter<"PayScale"> | Date | string
    expirationDate?: DateTimeNullableFilter<"PayScale"> | Date | string | null
    contractVersion?: StringFilter<"PayScale"> | string
    isActive?: BoolFilter<"PayScale"> | boolean
    createdAt?: DateTimeFilter<"PayScale"> | Date | string
    contractId?: IntNullableFilter<"PayScale"> | number | null
    payRates?: PayRateListRelationFilter
    contract?: XOR<ContractNullableScalarRelationFilter, ContractWhereInput> | null
  }, "id">

  export type PayScaleOrderByWithAggregationInput = {
    id?: SortOrder
    effectiveDate?: SortOrder
    expirationDate?: SortOrderInput | SortOrder
    contractVersion?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    contractId?: SortOrderInput | SortOrder
    _count?: PayScaleCountOrderByAggregateInput
    _avg?: PayScaleAvgOrderByAggregateInput
    _max?: PayScaleMaxOrderByAggregateInput
    _min?: PayScaleMinOrderByAggregateInput
    _sum?: PayScaleSumOrderByAggregateInput
  }

  export type PayScaleScalarWhereWithAggregatesInput = {
    AND?: PayScaleScalarWhereWithAggregatesInput | PayScaleScalarWhereWithAggregatesInput[]
    OR?: PayScaleScalarWhereWithAggregatesInput[]
    NOT?: PayScaleScalarWhereWithAggregatesInput | PayScaleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PayScale"> | number
    effectiveDate?: DateTimeWithAggregatesFilter<"PayScale"> | Date | string
    expirationDate?: DateTimeNullableWithAggregatesFilter<"PayScale"> | Date | string | null
    contractVersion?: StringWithAggregatesFilter<"PayScale"> | string
    isActive?: BoolWithAggregatesFilter<"PayScale"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"PayScale"> | Date | string
    contractId?: IntNullableWithAggregatesFilter<"PayScale"> | number | null
  }

  export type AircraftWhereInput = {
    AND?: AircraftWhereInput | AircraftWhereInput[]
    OR?: AircraftWhereInput[]
    NOT?: AircraftWhereInput | AircraftWhereInput[]
    id?: IntFilter<"Aircraft"> | number
    aircraftCode?: StringFilter<"Aircraft"> | string
    aircraftName?: StringFilter<"Aircraft"> | string
    aircraftType?: StringFilter<"Aircraft"> | string
    payCategory?: StringFilter<"Aircraft"> | string
    isActive?: BoolFilter<"Aircraft"> | boolean
    createdAt?: DateTimeFilter<"Aircraft"> | Date | string
    payRates?: PayRateListRelationFilter
  }

  export type AircraftOrderByWithRelationInput = {
    id?: SortOrder
    aircraftCode?: SortOrder
    aircraftName?: SortOrder
    aircraftType?: SortOrder
    payCategory?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    payRates?: PayRateOrderByRelationAggregateInput
  }

  export type AircraftWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    aircraftCode?: string
    AND?: AircraftWhereInput | AircraftWhereInput[]
    OR?: AircraftWhereInput[]
    NOT?: AircraftWhereInput | AircraftWhereInput[]
    aircraftName?: StringFilter<"Aircraft"> | string
    aircraftType?: StringFilter<"Aircraft"> | string
    payCategory?: StringFilter<"Aircraft"> | string
    isActive?: BoolFilter<"Aircraft"> | boolean
    createdAt?: DateTimeFilter<"Aircraft"> | Date | string
    payRates?: PayRateListRelationFilter
  }, "id" | "aircraftCode">

  export type AircraftOrderByWithAggregationInput = {
    id?: SortOrder
    aircraftCode?: SortOrder
    aircraftName?: SortOrder
    aircraftType?: SortOrder
    payCategory?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    _count?: AircraftCountOrderByAggregateInput
    _avg?: AircraftAvgOrderByAggregateInput
    _max?: AircraftMaxOrderByAggregateInput
    _min?: AircraftMinOrderByAggregateInput
    _sum?: AircraftSumOrderByAggregateInput
  }

  export type AircraftScalarWhereWithAggregatesInput = {
    AND?: AircraftScalarWhereWithAggregatesInput | AircraftScalarWhereWithAggregatesInput[]
    OR?: AircraftScalarWhereWithAggregatesInput[]
    NOT?: AircraftScalarWhereWithAggregatesInput | AircraftScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Aircraft"> | number
    aircraftCode?: StringWithAggregatesFilter<"Aircraft"> | string
    aircraftName?: StringWithAggregatesFilter<"Aircraft"> | string
    aircraftType?: StringWithAggregatesFilter<"Aircraft"> | string
    payCategory?: StringWithAggregatesFilter<"Aircraft"> | string
    isActive?: BoolWithAggregatesFilter<"Aircraft"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Aircraft"> | Date | string
  }

  export type PayRateWhereInput = {
    AND?: PayRateWhereInput | PayRateWhereInput[]
    OR?: PayRateWhereInput[]
    NOT?: PayRateWhereInput | PayRateWhereInput[]
    id?: IntFilter<"PayRate"> | number
    aircraftId?: IntFilter<"PayRate"> | number
    payScaleId?: IntFilter<"PayRate"> | number
    position?: StringFilter<"PayRate"> | string
    yearOfService?: IntFilter<"PayRate"> | number
    hourlyRate?: FloatFilter<"PayRate"> | number
    createdAt?: DateTimeFilter<"PayRate"> | Date | string
    aircraft?: XOR<AircraftScalarRelationFilter, AircraftWhereInput>
    payScale?: XOR<PayScaleScalarRelationFilter, PayScaleWhereInput>
  }

  export type PayRateOrderByWithRelationInput = {
    id?: SortOrder
    aircraftId?: SortOrder
    payScaleId?: SortOrder
    position?: SortOrder
    yearOfService?: SortOrder
    hourlyRate?: SortOrder
    createdAt?: SortOrder
    aircraft?: AircraftOrderByWithRelationInput
    payScale?: PayScaleOrderByWithRelationInput
  }

  export type PayRateWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    aircraftId_payScaleId_position_yearOfService?: PayRateAircraftIdPayScaleIdPositionYearOfServiceCompoundUniqueInput
    AND?: PayRateWhereInput | PayRateWhereInput[]
    OR?: PayRateWhereInput[]
    NOT?: PayRateWhereInput | PayRateWhereInput[]
    aircraftId?: IntFilter<"PayRate"> | number
    payScaleId?: IntFilter<"PayRate"> | number
    position?: StringFilter<"PayRate"> | string
    yearOfService?: IntFilter<"PayRate"> | number
    hourlyRate?: FloatFilter<"PayRate"> | number
    createdAt?: DateTimeFilter<"PayRate"> | Date | string
    aircraft?: XOR<AircraftScalarRelationFilter, AircraftWhereInput>
    payScale?: XOR<PayScaleScalarRelationFilter, PayScaleWhereInput>
  }, "id" | "aircraftId_payScaleId_position_yearOfService">

  export type PayRateOrderByWithAggregationInput = {
    id?: SortOrder
    aircraftId?: SortOrder
    payScaleId?: SortOrder
    position?: SortOrder
    yearOfService?: SortOrder
    hourlyRate?: SortOrder
    createdAt?: SortOrder
    _count?: PayRateCountOrderByAggregateInput
    _avg?: PayRateAvgOrderByAggregateInput
    _max?: PayRateMaxOrderByAggregateInput
    _min?: PayRateMinOrderByAggregateInput
    _sum?: PayRateSumOrderByAggregateInput
  }

  export type PayRateScalarWhereWithAggregatesInput = {
    AND?: PayRateScalarWhereWithAggregatesInput | PayRateScalarWhereWithAggregatesInput[]
    OR?: PayRateScalarWhereWithAggregatesInput[]
    NOT?: PayRateScalarWhereWithAggregatesInput | PayRateScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PayRate"> | number
    aircraftId?: IntWithAggregatesFilter<"PayRate"> | number
    payScaleId?: IntWithAggregatesFilter<"PayRate"> | number
    position?: StringWithAggregatesFilter<"PayRate"> | string
    yearOfService?: IntWithAggregatesFilter<"PayRate"> | number
    hourlyRate?: FloatWithAggregatesFilter<"PayRate"> | number
    createdAt?: DateTimeWithAggregatesFilter<"PayRate"> | Date | string
  }

  export type ContractWhereInput = {
    AND?: ContractWhereInput | ContractWhereInput[]
    OR?: ContractWhereInput[]
    NOT?: ContractWhereInput | ContractWhereInput[]
    id?: IntFilter<"Contract"> | number
    contractId?: StringFilter<"Contract"> | string
    version?: StringFilter<"Contract"> | string
    versionNumber?: IntFilter<"Contract"> | number
    contractType?: StringFilter<"Contract"> | string
    effectiveDate?: DateTimeFilter<"Contract"> | Date | string
    expirationDate?: DateTimeNullableFilter<"Contract"> | Date | string | null
    ratificationDate?: DateTimeNullableFilter<"Contract"> | Date | string | null
    previousVersionId?: IntNullableFilter<"Contract"> | number | null
    title?: StringFilter<"Contract"> | string
    description?: StringNullableFilter<"Contract"> | string | null
    pdfFilePath?: StringNullableFilter<"Contract"> | string | null
    isActive?: BoolFilter<"Contract"> | boolean
    createdAt?: DateTimeFilter<"Contract"> | Date | string
    updatedAt?: DateTimeFilter<"Contract"> | Date | string
    previousVersion?: XOR<ContractNullableScalarRelationFilter, ContractWhereInput> | null
    nextVersions?: ContractListRelationFilter
    payScales?: PayScaleListRelationFilter
    contractItems?: ContractItemListRelationFilter
    changeLog?: ContractChangeListRelationFilter
  }

  export type ContractOrderByWithRelationInput = {
    id?: SortOrder
    contractId?: SortOrder
    version?: SortOrder
    versionNumber?: SortOrder
    contractType?: SortOrder
    effectiveDate?: SortOrder
    expirationDate?: SortOrderInput | SortOrder
    ratificationDate?: SortOrderInput | SortOrder
    previousVersionId?: SortOrderInput | SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    pdfFilePath?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    previousVersion?: ContractOrderByWithRelationInput
    nextVersions?: ContractOrderByRelationAggregateInput
    payScales?: PayScaleOrderByRelationAggregateInput
    contractItems?: ContractItemOrderByRelationAggregateInput
    changeLog?: ContractChangeOrderByRelationAggregateInput
  }

  export type ContractWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    contractId_version?: ContractContractIdVersionCompoundUniqueInput
    AND?: ContractWhereInput | ContractWhereInput[]
    OR?: ContractWhereInput[]
    NOT?: ContractWhereInput | ContractWhereInput[]
    contractId?: StringFilter<"Contract"> | string
    version?: StringFilter<"Contract"> | string
    versionNumber?: IntFilter<"Contract"> | number
    contractType?: StringFilter<"Contract"> | string
    effectiveDate?: DateTimeFilter<"Contract"> | Date | string
    expirationDate?: DateTimeNullableFilter<"Contract"> | Date | string | null
    ratificationDate?: DateTimeNullableFilter<"Contract"> | Date | string | null
    previousVersionId?: IntNullableFilter<"Contract"> | number | null
    title?: StringFilter<"Contract"> | string
    description?: StringNullableFilter<"Contract"> | string | null
    pdfFilePath?: StringNullableFilter<"Contract"> | string | null
    isActive?: BoolFilter<"Contract"> | boolean
    createdAt?: DateTimeFilter<"Contract"> | Date | string
    updatedAt?: DateTimeFilter<"Contract"> | Date | string
    previousVersion?: XOR<ContractNullableScalarRelationFilter, ContractWhereInput> | null
    nextVersions?: ContractListRelationFilter
    payScales?: PayScaleListRelationFilter
    contractItems?: ContractItemListRelationFilter
    changeLog?: ContractChangeListRelationFilter
  }, "id" | "contractId_version">

  export type ContractOrderByWithAggregationInput = {
    id?: SortOrder
    contractId?: SortOrder
    version?: SortOrder
    versionNumber?: SortOrder
    contractType?: SortOrder
    effectiveDate?: SortOrder
    expirationDate?: SortOrderInput | SortOrder
    ratificationDate?: SortOrderInput | SortOrder
    previousVersionId?: SortOrderInput | SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    pdfFilePath?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ContractCountOrderByAggregateInput
    _avg?: ContractAvgOrderByAggregateInput
    _max?: ContractMaxOrderByAggregateInput
    _min?: ContractMinOrderByAggregateInput
    _sum?: ContractSumOrderByAggregateInput
  }

  export type ContractScalarWhereWithAggregatesInput = {
    AND?: ContractScalarWhereWithAggregatesInput | ContractScalarWhereWithAggregatesInput[]
    OR?: ContractScalarWhereWithAggregatesInput[]
    NOT?: ContractScalarWhereWithAggregatesInput | ContractScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Contract"> | number
    contractId?: StringWithAggregatesFilter<"Contract"> | string
    version?: StringWithAggregatesFilter<"Contract"> | string
    versionNumber?: IntWithAggregatesFilter<"Contract"> | number
    contractType?: StringWithAggregatesFilter<"Contract"> | string
    effectiveDate?: DateTimeWithAggregatesFilter<"Contract"> | Date | string
    expirationDate?: DateTimeNullableWithAggregatesFilter<"Contract"> | Date | string | null
    ratificationDate?: DateTimeNullableWithAggregatesFilter<"Contract"> | Date | string | null
    previousVersionId?: IntNullableWithAggregatesFilter<"Contract"> | number | null
    title?: StringWithAggregatesFilter<"Contract"> | string
    description?: StringNullableWithAggregatesFilter<"Contract"> | string | null
    pdfFilePath?: StringNullableWithAggregatesFilter<"Contract"> | string | null
    isActive?: BoolWithAggregatesFilter<"Contract"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Contract"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Contract"> | Date | string
  }

  export type ContractItemWhereInput = {
    AND?: ContractItemWhereInput | ContractItemWhereInput[]
    OR?: ContractItemWhereInput[]
    NOT?: ContractItemWhereInput | ContractItemWhereInput[]
    id?: IntFilter<"ContractItem"> | number
    contractId?: IntFilter<"ContractItem"> | number
    itemId?: StringFilter<"ContractItem"> | string
    sectionNumber?: StringFilter<"ContractItem"> | string
    title?: StringFilter<"ContractItem"> | string
    category?: StringFilter<"ContractItem"> | string
    subcategory?: StringNullableFilter<"ContractItem"> | string | null
    content?: StringFilter<"ContractItem"> | string
    structuredData?: StringNullableFilter<"ContractItem"> | string | null
    summary?: StringNullableFilter<"ContractItem"> | string | null
    isNew?: BoolFilter<"ContractItem"> | boolean
    isModified?: BoolFilter<"ContractItem"> | boolean
    isDeleted?: BoolFilter<"ContractItem"> | boolean
    pageNumber?: IntNullableFilter<"ContractItem"> | number | null
    createdAt?: DateTimeFilter<"ContractItem"> | Date | string
    updatedAt?: DateTimeFilter<"ContractItem"> | Date | string
    contract?: XOR<ContractScalarRelationFilter, ContractWhereInput>
  }

  export type ContractItemOrderByWithRelationInput = {
    id?: SortOrder
    contractId?: SortOrder
    itemId?: SortOrder
    sectionNumber?: SortOrder
    title?: SortOrder
    category?: SortOrder
    subcategory?: SortOrderInput | SortOrder
    content?: SortOrder
    structuredData?: SortOrderInput | SortOrder
    summary?: SortOrderInput | SortOrder
    isNew?: SortOrder
    isModified?: SortOrder
    isDeleted?: SortOrder
    pageNumber?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    contract?: ContractOrderByWithRelationInput
  }

  export type ContractItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    contractId_itemId?: ContractItemContractIdItemIdCompoundUniqueInput
    AND?: ContractItemWhereInput | ContractItemWhereInput[]
    OR?: ContractItemWhereInput[]
    NOT?: ContractItemWhereInput | ContractItemWhereInput[]
    contractId?: IntFilter<"ContractItem"> | number
    itemId?: StringFilter<"ContractItem"> | string
    sectionNumber?: StringFilter<"ContractItem"> | string
    title?: StringFilter<"ContractItem"> | string
    category?: StringFilter<"ContractItem"> | string
    subcategory?: StringNullableFilter<"ContractItem"> | string | null
    content?: StringFilter<"ContractItem"> | string
    structuredData?: StringNullableFilter<"ContractItem"> | string | null
    summary?: StringNullableFilter<"ContractItem"> | string | null
    isNew?: BoolFilter<"ContractItem"> | boolean
    isModified?: BoolFilter<"ContractItem"> | boolean
    isDeleted?: BoolFilter<"ContractItem"> | boolean
    pageNumber?: IntNullableFilter<"ContractItem"> | number | null
    createdAt?: DateTimeFilter<"ContractItem"> | Date | string
    updatedAt?: DateTimeFilter<"ContractItem"> | Date | string
    contract?: XOR<ContractScalarRelationFilter, ContractWhereInput>
  }, "id" | "contractId_itemId">

  export type ContractItemOrderByWithAggregationInput = {
    id?: SortOrder
    contractId?: SortOrder
    itemId?: SortOrder
    sectionNumber?: SortOrder
    title?: SortOrder
    category?: SortOrder
    subcategory?: SortOrderInput | SortOrder
    content?: SortOrder
    structuredData?: SortOrderInput | SortOrder
    summary?: SortOrderInput | SortOrder
    isNew?: SortOrder
    isModified?: SortOrder
    isDeleted?: SortOrder
    pageNumber?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ContractItemCountOrderByAggregateInput
    _avg?: ContractItemAvgOrderByAggregateInput
    _max?: ContractItemMaxOrderByAggregateInput
    _min?: ContractItemMinOrderByAggregateInput
    _sum?: ContractItemSumOrderByAggregateInput
  }

  export type ContractItemScalarWhereWithAggregatesInput = {
    AND?: ContractItemScalarWhereWithAggregatesInput | ContractItemScalarWhereWithAggregatesInput[]
    OR?: ContractItemScalarWhereWithAggregatesInput[]
    NOT?: ContractItemScalarWhereWithAggregatesInput | ContractItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ContractItem"> | number
    contractId?: IntWithAggregatesFilter<"ContractItem"> | number
    itemId?: StringWithAggregatesFilter<"ContractItem"> | string
    sectionNumber?: StringWithAggregatesFilter<"ContractItem"> | string
    title?: StringWithAggregatesFilter<"ContractItem"> | string
    category?: StringWithAggregatesFilter<"ContractItem"> | string
    subcategory?: StringNullableWithAggregatesFilter<"ContractItem"> | string | null
    content?: StringWithAggregatesFilter<"ContractItem"> | string
    structuredData?: StringNullableWithAggregatesFilter<"ContractItem"> | string | null
    summary?: StringNullableWithAggregatesFilter<"ContractItem"> | string | null
    isNew?: BoolWithAggregatesFilter<"ContractItem"> | boolean
    isModified?: BoolWithAggregatesFilter<"ContractItem"> | boolean
    isDeleted?: BoolWithAggregatesFilter<"ContractItem"> | boolean
    pageNumber?: IntNullableWithAggregatesFilter<"ContractItem"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"ContractItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ContractItem"> | Date | string
  }

  export type ContractChangeWhereInput = {
    AND?: ContractChangeWhereInput | ContractChangeWhereInput[]
    OR?: ContractChangeWhereInput[]
    NOT?: ContractChangeWhereInput | ContractChangeWhereInput[]
    id?: IntFilter<"ContractChange"> | number
    contractId?: IntFilter<"ContractChange"> | number
    changeType?: StringFilter<"ContractChange"> | string
    itemId?: StringFilter<"ContractChange"> | string
    category?: StringFilter<"ContractChange"> | string
    subcategory?: StringNullableFilter<"ContractChange"> | string | null
    changeDescription?: StringFilter<"ContractChange"> | string
    oldValue?: StringNullableFilter<"ContractChange"> | string | null
    newValue?: StringNullableFilter<"ContractChange"> | string | null
    impact?: StringNullableFilter<"ContractChange"> | string | null
    impactAmount?: FloatNullableFilter<"ContractChange"> | number | null
    impactUnit?: StringNullableFilter<"ContractChange"> | string | null
    analysisNotes?: StringNullableFilter<"ContractChange"> | string | null
    createdAt?: DateTimeFilter<"ContractChange"> | Date | string
    contract?: XOR<ContractScalarRelationFilter, ContractWhereInput>
  }

  export type ContractChangeOrderByWithRelationInput = {
    id?: SortOrder
    contractId?: SortOrder
    changeType?: SortOrder
    itemId?: SortOrder
    category?: SortOrder
    subcategory?: SortOrderInput | SortOrder
    changeDescription?: SortOrder
    oldValue?: SortOrderInput | SortOrder
    newValue?: SortOrderInput | SortOrder
    impact?: SortOrderInput | SortOrder
    impactAmount?: SortOrderInput | SortOrder
    impactUnit?: SortOrderInput | SortOrder
    analysisNotes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    contract?: ContractOrderByWithRelationInput
  }

  export type ContractChangeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ContractChangeWhereInput | ContractChangeWhereInput[]
    OR?: ContractChangeWhereInput[]
    NOT?: ContractChangeWhereInput | ContractChangeWhereInput[]
    contractId?: IntFilter<"ContractChange"> | number
    changeType?: StringFilter<"ContractChange"> | string
    itemId?: StringFilter<"ContractChange"> | string
    category?: StringFilter<"ContractChange"> | string
    subcategory?: StringNullableFilter<"ContractChange"> | string | null
    changeDescription?: StringFilter<"ContractChange"> | string
    oldValue?: StringNullableFilter<"ContractChange"> | string | null
    newValue?: StringNullableFilter<"ContractChange"> | string | null
    impact?: StringNullableFilter<"ContractChange"> | string | null
    impactAmount?: FloatNullableFilter<"ContractChange"> | number | null
    impactUnit?: StringNullableFilter<"ContractChange"> | string | null
    analysisNotes?: StringNullableFilter<"ContractChange"> | string | null
    createdAt?: DateTimeFilter<"ContractChange"> | Date | string
    contract?: XOR<ContractScalarRelationFilter, ContractWhereInput>
  }, "id">

  export type ContractChangeOrderByWithAggregationInput = {
    id?: SortOrder
    contractId?: SortOrder
    changeType?: SortOrder
    itemId?: SortOrder
    category?: SortOrder
    subcategory?: SortOrderInput | SortOrder
    changeDescription?: SortOrder
    oldValue?: SortOrderInput | SortOrder
    newValue?: SortOrderInput | SortOrder
    impact?: SortOrderInput | SortOrder
    impactAmount?: SortOrderInput | SortOrder
    impactUnit?: SortOrderInput | SortOrder
    analysisNotes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ContractChangeCountOrderByAggregateInput
    _avg?: ContractChangeAvgOrderByAggregateInput
    _max?: ContractChangeMaxOrderByAggregateInput
    _min?: ContractChangeMinOrderByAggregateInput
    _sum?: ContractChangeSumOrderByAggregateInput
  }

  export type ContractChangeScalarWhereWithAggregatesInput = {
    AND?: ContractChangeScalarWhereWithAggregatesInput | ContractChangeScalarWhereWithAggregatesInput[]
    OR?: ContractChangeScalarWhereWithAggregatesInput[]
    NOT?: ContractChangeScalarWhereWithAggregatesInput | ContractChangeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ContractChange"> | number
    contractId?: IntWithAggregatesFilter<"ContractChange"> | number
    changeType?: StringWithAggregatesFilter<"ContractChange"> | string
    itemId?: StringWithAggregatesFilter<"ContractChange"> | string
    category?: StringWithAggregatesFilter<"ContractChange"> | string
    subcategory?: StringNullableWithAggregatesFilter<"ContractChange"> | string | null
    changeDescription?: StringWithAggregatesFilter<"ContractChange"> | string
    oldValue?: StringNullableWithAggregatesFilter<"ContractChange"> | string | null
    newValue?: StringNullableWithAggregatesFilter<"ContractChange"> | string | null
    impact?: StringNullableWithAggregatesFilter<"ContractChange"> | string | null
    impactAmount?: FloatNullableWithAggregatesFilter<"ContractChange"> | number | null
    impactUnit?: StringNullableWithAggregatesFilter<"ContractChange"> | string | null
    analysisNotes?: StringNullableWithAggregatesFilter<"ContractChange"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ContractChange"> | Date | string
  }

  export type UserCreateInput = {
    firebaseUid: string
    email: string
    emailVerified?: boolean
    displayName?: string | null
    firstName?: string | null
    lastName?: string | null
    registrationDate?: Date | string
    lastLoginDate?: Date | string | null
    isActive?: boolean
    accountType?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pilot?: PilotCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    firebaseUid: string
    email: string
    emailVerified?: boolean
    displayName?: string | null
    employeeId: string
    firstName?: string | null
    lastName?: string | null
    registrationDate?: Date | string
    lastLoginDate?: Date | string | null
    isActive?: boolean
    accountType?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    firebaseUid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    registrationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    accountType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pilot?: PilotUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firebaseUid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    employeeId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    registrationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    accountType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: number
    firebaseUid: string
    email: string
    emailVerified?: boolean
    displayName?: string | null
    employeeId: string
    firstName?: string | null
    lastName?: string | null
    registrationDate?: Date | string
    lastLoginDate?: Date | string | null
    isActive?: boolean
    accountType?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    firebaseUid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    registrationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    accountType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firebaseUid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    employeeId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    registrationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    accountType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PilotCreateInput = {
    empNumber: string
    name: string
    pilotHireDate?: Date | string | null
    scheduledRetireDate?: Date | string | null
    isRetired?: boolean
    lastSeenDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    senioritySnapshots?: SenioritySnapshotCreateNestedManyWithoutPilotInput
    user?: UserCreateNestedOneWithoutPilotInput
  }

  export type PilotUncheckedCreateInput = {
    id?: number
    empNumber: string
    name: string
    pilotHireDate?: Date | string | null
    scheduledRetireDate?: Date | string | null
    isRetired?: boolean
    lastSeenDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    senioritySnapshots?: SenioritySnapshotUncheckedCreateNestedManyWithoutPilotInput
    user?: UserUncheckedCreateNestedOneWithoutPilotInput
  }

  export type PilotUpdateInput = {
    empNumber?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pilotHireDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduledRetireDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isRetired?: BoolFieldUpdateOperationsInput | boolean
    lastSeenDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senioritySnapshots?: SenioritySnapshotUpdateManyWithoutPilotNestedInput
    user?: UserUpdateOneWithoutPilotNestedInput
  }

  export type PilotUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    empNumber?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pilotHireDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduledRetireDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isRetired?: BoolFieldUpdateOperationsInput | boolean
    lastSeenDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senioritySnapshots?: SenioritySnapshotUncheckedUpdateManyWithoutPilotNestedInput
    user?: UserUncheckedUpdateOneWithoutPilotNestedInput
  }

  export type PilotCreateManyInput = {
    id?: number
    empNumber: string
    name: string
    pilotHireDate?: Date | string | null
    scheduledRetireDate?: Date | string | null
    isRetired?: boolean
    lastSeenDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PilotUpdateManyMutationInput = {
    empNumber?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pilotHireDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduledRetireDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isRetired?: BoolFieldUpdateOperationsInput | boolean
    lastSeenDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PilotUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    empNumber?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pilotHireDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduledRetireDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isRetired?: BoolFieldUpdateOperationsInput | boolean
    lastSeenDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SenioritySnapshotCreateInput = {
    seniorityNumber: number
    category: string
    reportDate: Date | string
    baseCode: string
    fleetCode: string
    positionCode: string
    baseCity: string
    fleetName: string
    positionName: string
    isPlaceholder?: boolean
    createdAt?: Date | string
    pilot: PilotCreateNestedOneWithoutSenioritySnapshotsInput
  }

  export type SenioritySnapshotUncheckedCreateInput = {
    id?: number
    seniorityNumber: number
    category: string
    reportDate: Date | string
    baseCode: string
    fleetCode: string
    positionCode: string
    baseCity: string
    fleetName: string
    positionName: string
    isPlaceholder?: boolean
    pilotId: number
    createdAt?: Date | string
  }

  export type SenioritySnapshotUpdateInput = {
    seniorityNumber?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    reportDate?: DateTimeFieldUpdateOperationsInput | Date | string
    baseCode?: StringFieldUpdateOperationsInput | string
    fleetCode?: StringFieldUpdateOperationsInput | string
    positionCode?: StringFieldUpdateOperationsInput | string
    baseCity?: StringFieldUpdateOperationsInput | string
    fleetName?: StringFieldUpdateOperationsInput | string
    positionName?: StringFieldUpdateOperationsInput | string
    isPlaceholder?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pilot?: PilotUpdateOneRequiredWithoutSenioritySnapshotsNestedInput
  }

  export type SenioritySnapshotUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    seniorityNumber?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    reportDate?: DateTimeFieldUpdateOperationsInput | Date | string
    baseCode?: StringFieldUpdateOperationsInput | string
    fleetCode?: StringFieldUpdateOperationsInput | string
    positionCode?: StringFieldUpdateOperationsInput | string
    baseCity?: StringFieldUpdateOperationsInput | string
    fleetName?: StringFieldUpdateOperationsInput | string
    positionName?: StringFieldUpdateOperationsInput | string
    isPlaceholder?: BoolFieldUpdateOperationsInput | boolean
    pilotId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SenioritySnapshotCreateManyInput = {
    id?: number
    seniorityNumber: number
    category: string
    reportDate: Date | string
    baseCode: string
    fleetCode: string
    positionCode: string
    baseCity: string
    fleetName: string
    positionName: string
    isPlaceholder?: boolean
    pilotId: number
    createdAt?: Date | string
  }

  export type SenioritySnapshotUpdateManyMutationInput = {
    seniorityNumber?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    reportDate?: DateTimeFieldUpdateOperationsInput | Date | string
    baseCode?: StringFieldUpdateOperationsInput | string
    fleetCode?: StringFieldUpdateOperationsInput | string
    positionCode?: StringFieldUpdateOperationsInput | string
    baseCity?: StringFieldUpdateOperationsInput | string
    fleetName?: StringFieldUpdateOperationsInput | string
    positionName?: StringFieldUpdateOperationsInput | string
    isPlaceholder?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SenioritySnapshotUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    seniorityNumber?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    reportDate?: DateTimeFieldUpdateOperationsInput | Date | string
    baseCode?: StringFieldUpdateOperationsInput | string
    fleetCode?: StringFieldUpdateOperationsInput | string
    positionCode?: StringFieldUpdateOperationsInput | string
    baseCity?: StringFieldUpdateOperationsInput | string
    fleetName?: StringFieldUpdateOperationsInput | string
    positionName?: StringFieldUpdateOperationsInput | string
    isPlaceholder?: BoolFieldUpdateOperationsInput | boolean
    pilotId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DataImportCreateInput = {
    filename: string
    fileType: string
    reportDate: Date | string
    recordCount: number
    importedAt?: Date | string
  }

  export type DataImportUncheckedCreateInput = {
    id?: number
    filename: string
    fileType: string
    reportDate: Date | string
    recordCount: number
    importedAt?: Date | string
  }

  export type DataImportUpdateInput = {
    filename?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    reportDate?: DateTimeFieldUpdateOperationsInput | Date | string
    recordCount?: IntFieldUpdateOperationsInput | number
    importedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DataImportUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    reportDate?: DateTimeFieldUpdateOperationsInput | Date | string
    recordCount?: IntFieldUpdateOperationsInput | number
    importedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DataImportCreateManyInput = {
    id?: number
    filename: string
    fileType: string
    reportDate: Date | string
    recordCount: number
    importedAt?: Date | string
  }

  export type DataImportUpdateManyMutationInput = {
    filename?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    reportDate?: DateTimeFieldUpdateOperationsInput | Date | string
    recordCount?: IntFieldUpdateOperationsInput | number
    importedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DataImportUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    reportDate?: DateTimeFieldUpdateOperationsInput | Date | string
    recordCount?: IntFieldUpdateOperationsInput | number
    importedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayScaleCreateInput = {
    effectiveDate: Date | string
    expirationDate?: Date | string | null
    contractVersion: string
    isActive?: boolean
    createdAt?: Date | string
    payRates?: PayRateCreateNestedManyWithoutPayScaleInput
    contract?: ContractCreateNestedOneWithoutPayScalesInput
  }

  export type PayScaleUncheckedCreateInput = {
    id?: number
    effectiveDate: Date | string
    expirationDate?: Date | string | null
    contractVersion: string
    isActive?: boolean
    createdAt?: Date | string
    contractId?: number | null
    payRates?: PayRateUncheckedCreateNestedManyWithoutPayScaleInput
  }

  export type PayScaleUpdateInput = {
    effectiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contractVersion?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payRates?: PayRateUpdateManyWithoutPayScaleNestedInput
    contract?: ContractUpdateOneWithoutPayScalesNestedInput
  }

  export type PayScaleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    effectiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contractVersion?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contractId?: NullableIntFieldUpdateOperationsInput | number | null
    payRates?: PayRateUncheckedUpdateManyWithoutPayScaleNestedInput
  }

  export type PayScaleCreateManyInput = {
    id?: number
    effectiveDate: Date | string
    expirationDate?: Date | string | null
    contractVersion: string
    isActive?: boolean
    createdAt?: Date | string
    contractId?: number | null
  }

  export type PayScaleUpdateManyMutationInput = {
    effectiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contractVersion?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayScaleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    effectiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contractVersion?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contractId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AircraftCreateInput = {
    aircraftCode: string
    aircraftName: string
    aircraftType: string
    payCategory: string
    isActive?: boolean
    createdAt?: Date | string
    payRates?: PayRateCreateNestedManyWithoutAircraftInput
  }

  export type AircraftUncheckedCreateInput = {
    id?: number
    aircraftCode: string
    aircraftName: string
    aircraftType: string
    payCategory: string
    isActive?: boolean
    createdAt?: Date | string
    payRates?: PayRateUncheckedCreateNestedManyWithoutAircraftInput
  }

  export type AircraftUpdateInput = {
    aircraftCode?: StringFieldUpdateOperationsInput | string
    aircraftName?: StringFieldUpdateOperationsInput | string
    aircraftType?: StringFieldUpdateOperationsInput | string
    payCategory?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payRates?: PayRateUpdateManyWithoutAircraftNestedInput
  }

  export type AircraftUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    aircraftCode?: StringFieldUpdateOperationsInput | string
    aircraftName?: StringFieldUpdateOperationsInput | string
    aircraftType?: StringFieldUpdateOperationsInput | string
    payCategory?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payRates?: PayRateUncheckedUpdateManyWithoutAircraftNestedInput
  }

  export type AircraftCreateManyInput = {
    id?: number
    aircraftCode: string
    aircraftName: string
    aircraftType: string
    payCategory: string
    isActive?: boolean
    createdAt?: Date | string
  }

  export type AircraftUpdateManyMutationInput = {
    aircraftCode?: StringFieldUpdateOperationsInput | string
    aircraftName?: StringFieldUpdateOperationsInput | string
    aircraftType?: StringFieldUpdateOperationsInput | string
    payCategory?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AircraftUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    aircraftCode?: StringFieldUpdateOperationsInput | string
    aircraftName?: StringFieldUpdateOperationsInput | string
    aircraftType?: StringFieldUpdateOperationsInput | string
    payCategory?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayRateCreateInput = {
    position: string
    yearOfService: number
    hourlyRate: number
    createdAt?: Date | string
    aircraft: AircraftCreateNestedOneWithoutPayRatesInput
    payScale: PayScaleCreateNestedOneWithoutPayRatesInput
  }

  export type PayRateUncheckedCreateInput = {
    id?: number
    aircraftId: number
    payScaleId: number
    position: string
    yearOfService: number
    hourlyRate: number
    createdAt?: Date | string
  }

  export type PayRateUpdateInput = {
    position?: StringFieldUpdateOperationsInput | string
    yearOfService?: IntFieldUpdateOperationsInput | number
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aircraft?: AircraftUpdateOneRequiredWithoutPayRatesNestedInput
    payScale?: PayScaleUpdateOneRequiredWithoutPayRatesNestedInput
  }

  export type PayRateUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    aircraftId?: IntFieldUpdateOperationsInput | number
    payScaleId?: IntFieldUpdateOperationsInput | number
    position?: StringFieldUpdateOperationsInput | string
    yearOfService?: IntFieldUpdateOperationsInput | number
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayRateCreateManyInput = {
    id?: number
    aircraftId: number
    payScaleId: number
    position: string
    yearOfService: number
    hourlyRate: number
    createdAt?: Date | string
  }

  export type PayRateUpdateManyMutationInput = {
    position?: StringFieldUpdateOperationsInput | string
    yearOfService?: IntFieldUpdateOperationsInput | number
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayRateUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    aircraftId?: IntFieldUpdateOperationsInput | number
    payScaleId?: IntFieldUpdateOperationsInput | number
    position?: StringFieldUpdateOperationsInput | string
    yearOfService?: IntFieldUpdateOperationsInput | number
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractCreateInput = {
    contractId: string
    version: string
    versionNumber: number
    contractType: string
    effectiveDate: Date | string
    expirationDate?: Date | string | null
    ratificationDate?: Date | string | null
    title: string
    description?: string | null
    pdfFilePath?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    previousVersion?: ContractCreateNestedOneWithoutNextVersionsInput
    nextVersions?: ContractCreateNestedManyWithoutPreviousVersionInput
    payScales?: PayScaleCreateNestedManyWithoutContractInput
    contractItems?: ContractItemCreateNestedManyWithoutContractInput
    changeLog?: ContractChangeCreateNestedManyWithoutContractInput
  }

  export type ContractUncheckedCreateInput = {
    id?: number
    contractId: string
    version: string
    versionNumber: number
    contractType: string
    effectiveDate: Date | string
    expirationDate?: Date | string | null
    ratificationDate?: Date | string | null
    previousVersionId?: number | null
    title: string
    description?: string | null
    pdfFilePath?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    nextVersions?: ContractUncheckedCreateNestedManyWithoutPreviousVersionInput
    payScales?: PayScaleUncheckedCreateNestedManyWithoutContractInput
    contractItems?: ContractItemUncheckedCreateNestedManyWithoutContractInput
    changeLog?: ContractChangeUncheckedCreateNestedManyWithoutContractInput
  }

  export type ContractUpdateInput = {
    contractId?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    versionNumber?: IntFieldUpdateOperationsInput | number
    contractType?: StringFieldUpdateOperationsInput | string
    effectiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ratificationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pdfFilePath?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    previousVersion?: ContractUpdateOneWithoutNextVersionsNestedInput
    nextVersions?: ContractUpdateManyWithoutPreviousVersionNestedInput
    payScales?: PayScaleUpdateManyWithoutContractNestedInput
    contractItems?: ContractItemUpdateManyWithoutContractNestedInput
    changeLog?: ContractChangeUpdateManyWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    contractId?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    versionNumber?: IntFieldUpdateOperationsInput | number
    contractType?: StringFieldUpdateOperationsInput | string
    effectiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ratificationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    previousVersionId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pdfFilePath?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nextVersions?: ContractUncheckedUpdateManyWithoutPreviousVersionNestedInput
    payScales?: PayScaleUncheckedUpdateManyWithoutContractNestedInput
    contractItems?: ContractItemUncheckedUpdateManyWithoutContractNestedInput
    changeLog?: ContractChangeUncheckedUpdateManyWithoutContractNestedInput
  }

  export type ContractCreateManyInput = {
    id?: number
    contractId: string
    version: string
    versionNumber: number
    contractType: string
    effectiveDate: Date | string
    expirationDate?: Date | string | null
    ratificationDate?: Date | string | null
    previousVersionId?: number | null
    title: string
    description?: string | null
    pdfFilePath?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContractUpdateManyMutationInput = {
    contractId?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    versionNumber?: IntFieldUpdateOperationsInput | number
    contractType?: StringFieldUpdateOperationsInput | string
    effectiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ratificationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pdfFilePath?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    contractId?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    versionNumber?: IntFieldUpdateOperationsInput | number
    contractType?: StringFieldUpdateOperationsInput | string
    effectiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ratificationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    previousVersionId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pdfFilePath?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractItemCreateInput = {
    itemId: string
    sectionNumber: string
    title: string
    category: string
    subcategory?: string | null
    content: string
    structuredData?: string | null
    summary?: string | null
    isNew?: boolean
    isModified?: boolean
    isDeleted?: boolean
    pageNumber?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contract: ContractCreateNestedOneWithoutContractItemsInput
  }

  export type ContractItemUncheckedCreateInput = {
    id?: number
    contractId: number
    itemId: string
    sectionNumber: string
    title: string
    category: string
    subcategory?: string | null
    content: string
    structuredData?: string | null
    summary?: string | null
    isNew?: boolean
    isModified?: boolean
    isDeleted?: boolean
    pageNumber?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContractItemUpdateInput = {
    itemId?: StringFieldUpdateOperationsInput | string
    sectionNumber?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    subcategory?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    structuredData?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    isNew?: BoolFieldUpdateOperationsInput | boolean
    isModified?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    pageNumber?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contract?: ContractUpdateOneRequiredWithoutContractItemsNestedInput
  }

  export type ContractItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    contractId?: IntFieldUpdateOperationsInput | number
    itemId?: StringFieldUpdateOperationsInput | string
    sectionNumber?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    subcategory?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    structuredData?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    isNew?: BoolFieldUpdateOperationsInput | boolean
    isModified?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    pageNumber?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractItemCreateManyInput = {
    id?: number
    contractId: number
    itemId: string
    sectionNumber: string
    title: string
    category: string
    subcategory?: string | null
    content: string
    structuredData?: string | null
    summary?: string | null
    isNew?: boolean
    isModified?: boolean
    isDeleted?: boolean
    pageNumber?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContractItemUpdateManyMutationInput = {
    itemId?: StringFieldUpdateOperationsInput | string
    sectionNumber?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    subcategory?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    structuredData?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    isNew?: BoolFieldUpdateOperationsInput | boolean
    isModified?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    pageNumber?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    contractId?: IntFieldUpdateOperationsInput | number
    itemId?: StringFieldUpdateOperationsInput | string
    sectionNumber?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    subcategory?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    structuredData?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    isNew?: BoolFieldUpdateOperationsInput | boolean
    isModified?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    pageNumber?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractChangeCreateInput = {
    changeType: string
    itemId: string
    category: string
    subcategory?: string | null
    changeDescription: string
    oldValue?: string | null
    newValue?: string | null
    impact?: string | null
    impactAmount?: number | null
    impactUnit?: string | null
    analysisNotes?: string | null
    createdAt?: Date | string
    contract: ContractCreateNestedOneWithoutChangeLogInput
  }

  export type ContractChangeUncheckedCreateInput = {
    id?: number
    contractId: number
    changeType: string
    itemId: string
    category: string
    subcategory?: string | null
    changeDescription: string
    oldValue?: string | null
    newValue?: string | null
    impact?: string | null
    impactAmount?: number | null
    impactUnit?: string | null
    analysisNotes?: string | null
    createdAt?: Date | string
  }

  export type ContractChangeUpdateInput = {
    changeType?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    subcategory?: NullableStringFieldUpdateOperationsInput | string | null
    changeDescription?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    impact?: NullableStringFieldUpdateOperationsInput | string | null
    impactAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    impactUnit?: NullableStringFieldUpdateOperationsInput | string | null
    analysisNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contract?: ContractUpdateOneRequiredWithoutChangeLogNestedInput
  }

  export type ContractChangeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    contractId?: IntFieldUpdateOperationsInput | number
    changeType?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    subcategory?: NullableStringFieldUpdateOperationsInput | string | null
    changeDescription?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    impact?: NullableStringFieldUpdateOperationsInput | string | null
    impactAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    impactUnit?: NullableStringFieldUpdateOperationsInput | string | null
    analysisNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractChangeCreateManyInput = {
    id?: number
    contractId: number
    changeType: string
    itemId: string
    category: string
    subcategory?: string | null
    changeDescription: string
    oldValue?: string | null
    newValue?: string | null
    impact?: string | null
    impactAmount?: number | null
    impactUnit?: string | null
    analysisNotes?: string | null
    createdAt?: Date | string
  }

  export type ContractChangeUpdateManyMutationInput = {
    changeType?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    subcategory?: NullableStringFieldUpdateOperationsInput | string | null
    changeDescription?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    impact?: NullableStringFieldUpdateOperationsInput | string | null
    impactAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    impactUnit?: NullableStringFieldUpdateOperationsInput | string | null
    analysisNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractChangeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    contractId?: IntFieldUpdateOperationsInput | number
    changeType?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    subcategory?: NullableStringFieldUpdateOperationsInput | string | null
    changeDescription?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    impact?: NullableStringFieldUpdateOperationsInput | string | null
    impactAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    impactUnit?: NullableStringFieldUpdateOperationsInput | string | null
    analysisNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type PilotNullableScalarRelationFilter = {
    is?: PilotWhereInput | null
    isNot?: PilotWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firebaseUid?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    displayName?: SortOrder
    employeeId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    registrationDate?: SortOrder
    lastLoginDate?: SortOrder
    isActive?: SortOrder
    accountType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firebaseUid?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    displayName?: SortOrder
    employeeId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    registrationDate?: SortOrder
    lastLoginDate?: SortOrder
    isActive?: SortOrder
    accountType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firebaseUid?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    displayName?: SortOrder
    employeeId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    registrationDate?: SortOrder
    lastLoginDate?: SortOrder
    isActive?: SortOrder
    accountType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type SenioritySnapshotListRelationFilter = {
    every?: SenioritySnapshotWhereInput
    some?: SenioritySnapshotWhereInput
    none?: SenioritySnapshotWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type SenioritySnapshotOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PilotCountOrderByAggregateInput = {
    id?: SortOrder
    empNumber?: SortOrder
    name?: SortOrder
    pilotHireDate?: SortOrder
    scheduledRetireDate?: SortOrder
    isRetired?: SortOrder
    lastSeenDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PilotAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PilotMaxOrderByAggregateInput = {
    id?: SortOrder
    empNumber?: SortOrder
    name?: SortOrder
    pilotHireDate?: SortOrder
    scheduledRetireDate?: SortOrder
    isRetired?: SortOrder
    lastSeenDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PilotMinOrderByAggregateInput = {
    id?: SortOrder
    empNumber?: SortOrder
    name?: SortOrder
    pilotHireDate?: SortOrder
    scheduledRetireDate?: SortOrder
    isRetired?: SortOrder
    lastSeenDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PilotSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PilotScalarRelationFilter = {
    is?: PilotWhereInput
    isNot?: PilotWhereInput
  }

  export type SenioritySnapshotPilotIdReportDateCompoundUniqueInput = {
    pilotId: number
    reportDate: Date | string
  }

  export type SenioritySnapshotCountOrderByAggregateInput = {
    id?: SortOrder
    seniorityNumber?: SortOrder
    category?: SortOrder
    reportDate?: SortOrder
    baseCode?: SortOrder
    fleetCode?: SortOrder
    positionCode?: SortOrder
    baseCity?: SortOrder
    fleetName?: SortOrder
    positionName?: SortOrder
    isPlaceholder?: SortOrder
    pilotId?: SortOrder
    createdAt?: SortOrder
  }

  export type SenioritySnapshotAvgOrderByAggregateInput = {
    id?: SortOrder
    seniorityNumber?: SortOrder
    pilotId?: SortOrder
  }

  export type SenioritySnapshotMaxOrderByAggregateInput = {
    id?: SortOrder
    seniorityNumber?: SortOrder
    category?: SortOrder
    reportDate?: SortOrder
    baseCode?: SortOrder
    fleetCode?: SortOrder
    positionCode?: SortOrder
    baseCity?: SortOrder
    fleetName?: SortOrder
    positionName?: SortOrder
    isPlaceholder?: SortOrder
    pilotId?: SortOrder
    createdAt?: SortOrder
  }

  export type SenioritySnapshotMinOrderByAggregateInput = {
    id?: SortOrder
    seniorityNumber?: SortOrder
    category?: SortOrder
    reportDate?: SortOrder
    baseCode?: SortOrder
    fleetCode?: SortOrder
    positionCode?: SortOrder
    baseCity?: SortOrder
    fleetName?: SortOrder
    positionName?: SortOrder
    isPlaceholder?: SortOrder
    pilotId?: SortOrder
    createdAt?: SortOrder
  }

  export type SenioritySnapshotSumOrderByAggregateInput = {
    id?: SortOrder
    seniorityNumber?: SortOrder
    pilotId?: SortOrder
  }

  export type DataImportCountOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    fileType?: SortOrder
    reportDate?: SortOrder
    recordCount?: SortOrder
    importedAt?: SortOrder
  }

  export type DataImportAvgOrderByAggregateInput = {
    id?: SortOrder
    recordCount?: SortOrder
  }

  export type DataImportMaxOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    fileType?: SortOrder
    reportDate?: SortOrder
    recordCount?: SortOrder
    importedAt?: SortOrder
  }

  export type DataImportMinOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    fileType?: SortOrder
    reportDate?: SortOrder
    recordCount?: SortOrder
    importedAt?: SortOrder
  }

  export type DataImportSumOrderByAggregateInput = {
    id?: SortOrder
    recordCount?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type PayRateListRelationFilter = {
    every?: PayRateWhereInput
    some?: PayRateWhereInput
    none?: PayRateWhereInput
  }

  export type ContractNullableScalarRelationFilter = {
    is?: ContractWhereInput | null
    isNot?: ContractWhereInput | null
  }

  export type PayRateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PayScaleCountOrderByAggregateInput = {
    id?: SortOrder
    effectiveDate?: SortOrder
    expirationDate?: SortOrder
    contractVersion?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    contractId?: SortOrder
  }

  export type PayScaleAvgOrderByAggregateInput = {
    id?: SortOrder
    contractId?: SortOrder
  }

  export type PayScaleMaxOrderByAggregateInput = {
    id?: SortOrder
    effectiveDate?: SortOrder
    expirationDate?: SortOrder
    contractVersion?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    contractId?: SortOrder
  }

  export type PayScaleMinOrderByAggregateInput = {
    id?: SortOrder
    effectiveDate?: SortOrder
    expirationDate?: SortOrder
    contractVersion?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    contractId?: SortOrder
  }

  export type PayScaleSumOrderByAggregateInput = {
    id?: SortOrder
    contractId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type AircraftCountOrderByAggregateInput = {
    id?: SortOrder
    aircraftCode?: SortOrder
    aircraftName?: SortOrder
    aircraftType?: SortOrder
    payCategory?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type AircraftAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AircraftMaxOrderByAggregateInput = {
    id?: SortOrder
    aircraftCode?: SortOrder
    aircraftName?: SortOrder
    aircraftType?: SortOrder
    payCategory?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type AircraftMinOrderByAggregateInput = {
    id?: SortOrder
    aircraftCode?: SortOrder
    aircraftName?: SortOrder
    aircraftType?: SortOrder
    payCategory?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type AircraftSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type AircraftScalarRelationFilter = {
    is?: AircraftWhereInput
    isNot?: AircraftWhereInput
  }

  export type PayScaleScalarRelationFilter = {
    is?: PayScaleWhereInput
    isNot?: PayScaleWhereInput
  }

  export type PayRateAircraftIdPayScaleIdPositionYearOfServiceCompoundUniqueInput = {
    aircraftId: number
    payScaleId: number
    position: string
    yearOfService: number
  }

  export type PayRateCountOrderByAggregateInput = {
    id?: SortOrder
    aircraftId?: SortOrder
    payScaleId?: SortOrder
    position?: SortOrder
    yearOfService?: SortOrder
    hourlyRate?: SortOrder
    createdAt?: SortOrder
  }

  export type PayRateAvgOrderByAggregateInput = {
    id?: SortOrder
    aircraftId?: SortOrder
    payScaleId?: SortOrder
    yearOfService?: SortOrder
    hourlyRate?: SortOrder
  }

  export type PayRateMaxOrderByAggregateInput = {
    id?: SortOrder
    aircraftId?: SortOrder
    payScaleId?: SortOrder
    position?: SortOrder
    yearOfService?: SortOrder
    hourlyRate?: SortOrder
    createdAt?: SortOrder
  }

  export type PayRateMinOrderByAggregateInput = {
    id?: SortOrder
    aircraftId?: SortOrder
    payScaleId?: SortOrder
    position?: SortOrder
    yearOfService?: SortOrder
    hourlyRate?: SortOrder
    createdAt?: SortOrder
  }

  export type PayRateSumOrderByAggregateInput = {
    id?: SortOrder
    aircraftId?: SortOrder
    payScaleId?: SortOrder
    yearOfService?: SortOrder
    hourlyRate?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ContractListRelationFilter = {
    every?: ContractWhereInput
    some?: ContractWhereInput
    none?: ContractWhereInput
  }

  export type PayScaleListRelationFilter = {
    every?: PayScaleWhereInput
    some?: PayScaleWhereInput
    none?: PayScaleWhereInput
  }

  export type ContractItemListRelationFilter = {
    every?: ContractItemWhereInput
    some?: ContractItemWhereInput
    none?: ContractItemWhereInput
  }

  export type ContractChangeListRelationFilter = {
    every?: ContractChangeWhereInput
    some?: ContractChangeWhereInput
    none?: ContractChangeWhereInput
  }

  export type ContractOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PayScaleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContractItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContractChangeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContractContractIdVersionCompoundUniqueInput = {
    contractId: string
    version: string
  }

  export type ContractCountOrderByAggregateInput = {
    id?: SortOrder
    contractId?: SortOrder
    version?: SortOrder
    versionNumber?: SortOrder
    contractType?: SortOrder
    effectiveDate?: SortOrder
    expirationDate?: SortOrder
    ratificationDate?: SortOrder
    previousVersionId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    pdfFilePath?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContractAvgOrderByAggregateInput = {
    id?: SortOrder
    versionNumber?: SortOrder
    previousVersionId?: SortOrder
  }

  export type ContractMaxOrderByAggregateInput = {
    id?: SortOrder
    contractId?: SortOrder
    version?: SortOrder
    versionNumber?: SortOrder
    contractType?: SortOrder
    effectiveDate?: SortOrder
    expirationDate?: SortOrder
    ratificationDate?: SortOrder
    previousVersionId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    pdfFilePath?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContractMinOrderByAggregateInput = {
    id?: SortOrder
    contractId?: SortOrder
    version?: SortOrder
    versionNumber?: SortOrder
    contractType?: SortOrder
    effectiveDate?: SortOrder
    expirationDate?: SortOrder
    ratificationDate?: SortOrder
    previousVersionId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    pdfFilePath?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContractSumOrderByAggregateInput = {
    id?: SortOrder
    versionNumber?: SortOrder
    previousVersionId?: SortOrder
  }

  export type ContractScalarRelationFilter = {
    is?: ContractWhereInput
    isNot?: ContractWhereInput
  }

  export type ContractItemContractIdItemIdCompoundUniqueInput = {
    contractId: number
    itemId: string
  }

  export type ContractItemCountOrderByAggregateInput = {
    id?: SortOrder
    contractId?: SortOrder
    itemId?: SortOrder
    sectionNumber?: SortOrder
    title?: SortOrder
    category?: SortOrder
    subcategory?: SortOrder
    content?: SortOrder
    structuredData?: SortOrder
    summary?: SortOrder
    isNew?: SortOrder
    isModified?: SortOrder
    isDeleted?: SortOrder
    pageNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContractItemAvgOrderByAggregateInput = {
    id?: SortOrder
    contractId?: SortOrder
    pageNumber?: SortOrder
  }

  export type ContractItemMaxOrderByAggregateInput = {
    id?: SortOrder
    contractId?: SortOrder
    itemId?: SortOrder
    sectionNumber?: SortOrder
    title?: SortOrder
    category?: SortOrder
    subcategory?: SortOrder
    content?: SortOrder
    structuredData?: SortOrder
    summary?: SortOrder
    isNew?: SortOrder
    isModified?: SortOrder
    isDeleted?: SortOrder
    pageNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContractItemMinOrderByAggregateInput = {
    id?: SortOrder
    contractId?: SortOrder
    itemId?: SortOrder
    sectionNumber?: SortOrder
    title?: SortOrder
    category?: SortOrder
    subcategory?: SortOrder
    content?: SortOrder
    structuredData?: SortOrder
    summary?: SortOrder
    isNew?: SortOrder
    isModified?: SortOrder
    isDeleted?: SortOrder
    pageNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContractItemSumOrderByAggregateInput = {
    id?: SortOrder
    contractId?: SortOrder
    pageNumber?: SortOrder
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

  export type ContractChangeCountOrderByAggregateInput = {
    id?: SortOrder
    contractId?: SortOrder
    changeType?: SortOrder
    itemId?: SortOrder
    category?: SortOrder
    subcategory?: SortOrder
    changeDescription?: SortOrder
    oldValue?: SortOrder
    newValue?: SortOrder
    impact?: SortOrder
    impactAmount?: SortOrder
    impactUnit?: SortOrder
    analysisNotes?: SortOrder
    createdAt?: SortOrder
  }

  export type ContractChangeAvgOrderByAggregateInput = {
    id?: SortOrder
    contractId?: SortOrder
    impactAmount?: SortOrder
  }

  export type ContractChangeMaxOrderByAggregateInput = {
    id?: SortOrder
    contractId?: SortOrder
    changeType?: SortOrder
    itemId?: SortOrder
    category?: SortOrder
    subcategory?: SortOrder
    changeDescription?: SortOrder
    oldValue?: SortOrder
    newValue?: SortOrder
    impact?: SortOrder
    impactAmount?: SortOrder
    impactUnit?: SortOrder
    analysisNotes?: SortOrder
    createdAt?: SortOrder
  }

  export type ContractChangeMinOrderByAggregateInput = {
    id?: SortOrder
    contractId?: SortOrder
    changeType?: SortOrder
    itemId?: SortOrder
    category?: SortOrder
    subcategory?: SortOrder
    changeDescription?: SortOrder
    oldValue?: SortOrder
    newValue?: SortOrder
    impact?: SortOrder
    impactAmount?: SortOrder
    impactUnit?: SortOrder
    analysisNotes?: SortOrder
    createdAt?: SortOrder
  }

  export type ContractChangeSumOrderByAggregateInput = {
    id?: SortOrder
    contractId?: SortOrder
    impactAmount?: SortOrder
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

  export type PilotCreateNestedOneWithoutUserInput = {
    create?: XOR<PilotCreateWithoutUserInput, PilotUncheckedCreateWithoutUserInput>
    connectOrCreate?: PilotCreateOrConnectWithoutUserInput
    connect?: PilotWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type PilotUpdateOneWithoutUserNestedInput = {
    create?: XOR<PilotCreateWithoutUserInput, PilotUncheckedCreateWithoutUserInput>
    connectOrCreate?: PilotCreateOrConnectWithoutUserInput
    upsert?: PilotUpsertWithoutUserInput
    disconnect?: PilotWhereInput | boolean
    delete?: PilotWhereInput | boolean
    connect?: PilotWhereUniqueInput
    update?: XOR<XOR<PilotUpdateToOneWithWhereWithoutUserInput, PilotUpdateWithoutUserInput>, PilotUncheckedUpdateWithoutUserInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SenioritySnapshotCreateNestedManyWithoutPilotInput = {
    create?: XOR<SenioritySnapshotCreateWithoutPilotInput, SenioritySnapshotUncheckedCreateWithoutPilotInput> | SenioritySnapshotCreateWithoutPilotInput[] | SenioritySnapshotUncheckedCreateWithoutPilotInput[]
    connectOrCreate?: SenioritySnapshotCreateOrConnectWithoutPilotInput | SenioritySnapshotCreateOrConnectWithoutPilotInput[]
    createMany?: SenioritySnapshotCreateManyPilotInputEnvelope
    connect?: SenioritySnapshotWhereUniqueInput | SenioritySnapshotWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutPilotInput = {
    create?: XOR<UserCreateWithoutPilotInput, UserUncheckedCreateWithoutPilotInput>
    connectOrCreate?: UserCreateOrConnectWithoutPilotInput
    connect?: UserWhereUniqueInput
  }

  export type SenioritySnapshotUncheckedCreateNestedManyWithoutPilotInput = {
    create?: XOR<SenioritySnapshotCreateWithoutPilotInput, SenioritySnapshotUncheckedCreateWithoutPilotInput> | SenioritySnapshotCreateWithoutPilotInput[] | SenioritySnapshotUncheckedCreateWithoutPilotInput[]
    connectOrCreate?: SenioritySnapshotCreateOrConnectWithoutPilotInput | SenioritySnapshotCreateOrConnectWithoutPilotInput[]
    createMany?: SenioritySnapshotCreateManyPilotInputEnvelope
    connect?: SenioritySnapshotWhereUniqueInput | SenioritySnapshotWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedOneWithoutPilotInput = {
    create?: XOR<UserCreateWithoutPilotInput, UserUncheckedCreateWithoutPilotInput>
    connectOrCreate?: UserCreateOrConnectWithoutPilotInput
    connect?: UserWhereUniqueInput
  }

  export type SenioritySnapshotUpdateManyWithoutPilotNestedInput = {
    create?: XOR<SenioritySnapshotCreateWithoutPilotInput, SenioritySnapshotUncheckedCreateWithoutPilotInput> | SenioritySnapshotCreateWithoutPilotInput[] | SenioritySnapshotUncheckedCreateWithoutPilotInput[]
    connectOrCreate?: SenioritySnapshotCreateOrConnectWithoutPilotInput | SenioritySnapshotCreateOrConnectWithoutPilotInput[]
    upsert?: SenioritySnapshotUpsertWithWhereUniqueWithoutPilotInput | SenioritySnapshotUpsertWithWhereUniqueWithoutPilotInput[]
    createMany?: SenioritySnapshotCreateManyPilotInputEnvelope
    set?: SenioritySnapshotWhereUniqueInput | SenioritySnapshotWhereUniqueInput[]
    disconnect?: SenioritySnapshotWhereUniqueInput | SenioritySnapshotWhereUniqueInput[]
    delete?: SenioritySnapshotWhereUniqueInput | SenioritySnapshotWhereUniqueInput[]
    connect?: SenioritySnapshotWhereUniqueInput | SenioritySnapshotWhereUniqueInput[]
    update?: SenioritySnapshotUpdateWithWhereUniqueWithoutPilotInput | SenioritySnapshotUpdateWithWhereUniqueWithoutPilotInput[]
    updateMany?: SenioritySnapshotUpdateManyWithWhereWithoutPilotInput | SenioritySnapshotUpdateManyWithWhereWithoutPilotInput[]
    deleteMany?: SenioritySnapshotScalarWhereInput | SenioritySnapshotScalarWhereInput[]
  }

  export type UserUpdateOneWithoutPilotNestedInput = {
    create?: XOR<UserCreateWithoutPilotInput, UserUncheckedCreateWithoutPilotInput>
    connectOrCreate?: UserCreateOrConnectWithoutPilotInput
    upsert?: UserUpsertWithoutPilotInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPilotInput, UserUpdateWithoutPilotInput>, UserUncheckedUpdateWithoutPilotInput>
  }

  export type SenioritySnapshotUncheckedUpdateManyWithoutPilotNestedInput = {
    create?: XOR<SenioritySnapshotCreateWithoutPilotInput, SenioritySnapshotUncheckedCreateWithoutPilotInput> | SenioritySnapshotCreateWithoutPilotInput[] | SenioritySnapshotUncheckedCreateWithoutPilotInput[]
    connectOrCreate?: SenioritySnapshotCreateOrConnectWithoutPilotInput | SenioritySnapshotCreateOrConnectWithoutPilotInput[]
    upsert?: SenioritySnapshotUpsertWithWhereUniqueWithoutPilotInput | SenioritySnapshotUpsertWithWhereUniqueWithoutPilotInput[]
    createMany?: SenioritySnapshotCreateManyPilotInputEnvelope
    set?: SenioritySnapshotWhereUniqueInput | SenioritySnapshotWhereUniqueInput[]
    disconnect?: SenioritySnapshotWhereUniqueInput | SenioritySnapshotWhereUniqueInput[]
    delete?: SenioritySnapshotWhereUniqueInput | SenioritySnapshotWhereUniqueInput[]
    connect?: SenioritySnapshotWhereUniqueInput | SenioritySnapshotWhereUniqueInput[]
    update?: SenioritySnapshotUpdateWithWhereUniqueWithoutPilotInput | SenioritySnapshotUpdateWithWhereUniqueWithoutPilotInput[]
    updateMany?: SenioritySnapshotUpdateManyWithWhereWithoutPilotInput | SenioritySnapshotUpdateManyWithWhereWithoutPilotInput[]
    deleteMany?: SenioritySnapshotScalarWhereInput | SenioritySnapshotScalarWhereInput[]
  }

  export type UserUncheckedUpdateOneWithoutPilotNestedInput = {
    create?: XOR<UserCreateWithoutPilotInput, UserUncheckedCreateWithoutPilotInput>
    connectOrCreate?: UserCreateOrConnectWithoutPilotInput
    upsert?: UserUpsertWithoutPilotInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPilotInput, UserUpdateWithoutPilotInput>, UserUncheckedUpdateWithoutPilotInput>
  }

  export type PilotCreateNestedOneWithoutSenioritySnapshotsInput = {
    create?: XOR<PilotCreateWithoutSenioritySnapshotsInput, PilotUncheckedCreateWithoutSenioritySnapshotsInput>
    connectOrCreate?: PilotCreateOrConnectWithoutSenioritySnapshotsInput
    connect?: PilotWhereUniqueInput
  }

  export type PilotUpdateOneRequiredWithoutSenioritySnapshotsNestedInput = {
    create?: XOR<PilotCreateWithoutSenioritySnapshotsInput, PilotUncheckedCreateWithoutSenioritySnapshotsInput>
    connectOrCreate?: PilotCreateOrConnectWithoutSenioritySnapshotsInput
    upsert?: PilotUpsertWithoutSenioritySnapshotsInput
    connect?: PilotWhereUniqueInput
    update?: XOR<XOR<PilotUpdateToOneWithWhereWithoutSenioritySnapshotsInput, PilotUpdateWithoutSenioritySnapshotsInput>, PilotUncheckedUpdateWithoutSenioritySnapshotsInput>
  }

  export type PayRateCreateNestedManyWithoutPayScaleInput = {
    create?: XOR<PayRateCreateWithoutPayScaleInput, PayRateUncheckedCreateWithoutPayScaleInput> | PayRateCreateWithoutPayScaleInput[] | PayRateUncheckedCreateWithoutPayScaleInput[]
    connectOrCreate?: PayRateCreateOrConnectWithoutPayScaleInput | PayRateCreateOrConnectWithoutPayScaleInput[]
    createMany?: PayRateCreateManyPayScaleInputEnvelope
    connect?: PayRateWhereUniqueInput | PayRateWhereUniqueInput[]
  }

  export type ContractCreateNestedOneWithoutPayScalesInput = {
    create?: XOR<ContractCreateWithoutPayScalesInput, ContractUncheckedCreateWithoutPayScalesInput>
    connectOrCreate?: ContractCreateOrConnectWithoutPayScalesInput
    connect?: ContractWhereUniqueInput
  }

  export type PayRateUncheckedCreateNestedManyWithoutPayScaleInput = {
    create?: XOR<PayRateCreateWithoutPayScaleInput, PayRateUncheckedCreateWithoutPayScaleInput> | PayRateCreateWithoutPayScaleInput[] | PayRateUncheckedCreateWithoutPayScaleInput[]
    connectOrCreate?: PayRateCreateOrConnectWithoutPayScaleInput | PayRateCreateOrConnectWithoutPayScaleInput[]
    createMany?: PayRateCreateManyPayScaleInputEnvelope
    connect?: PayRateWhereUniqueInput | PayRateWhereUniqueInput[]
  }

  export type PayRateUpdateManyWithoutPayScaleNestedInput = {
    create?: XOR<PayRateCreateWithoutPayScaleInput, PayRateUncheckedCreateWithoutPayScaleInput> | PayRateCreateWithoutPayScaleInput[] | PayRateUncheckedCreateWithoutPayScaleInput[]
    connectOrCreate?: PayRateCreateOrConnectWithoutPayScaleInput | PayRateCreateOrConnectWithoutPayScaleInput[]
    upsert?: PayRateUpsertWithWhereUniqueWithoutPayScaleInput | PayRateUpsertWithWhereUniqueWithoutPayScaleInput[]
    createMany?: PayRateCreateManyPayScaleInputEnvelope
    set?: PayRateWhereUniqueInput | PayRateWhereUniqueInput[]
    disconnect?: PayRateWhereUniqueInput | PayRateWhereUniqueInput[]
    delete?: PayRateWhereUniqueInput | PayRateWhereUniqueInput[]
    connect?: PayRateWhereUniqueInput | PayRateWhereUniqueInput[]
    update?: PayRateUpdateWithWhereUniqueWithoutPayScaleInput | PayRateUpdateWithWhereUniqueWithoutPayScaleInput[]
    updateMany?: PayRateUpdateManyWithWhereWithoutPayScaleInput | PayRateUpdateManyWithWhereWithoutPayScaleInput[]
    deleteMany?: PayRateScalarWhereInput | PayRateScalarWhereInput[]
  }

  export type ContractUpdateOneWithoutPayScalesNestedInput = {
    create?: XOR<ContractCreateWithoutPayScalesInput, ContractUncheckedCreateWithoutPayScalesInput>
    connectOrCreate?: ContractCreateOrConnectWithoutPayScalesInput
    upsert?: ContractUpsertWithoutPayScalesInput
    disconnect?: ContractWhereInput | boolean
    delete?: ContractWhereInput | boolean
    connect?: ContractWhereUniqueInput
    update?: XOR<XOR<ContractUpdateToOneWithWhereWithoutPayScalesInput, ContractUpdateWithoutPayScalesInput>, ContractUncheckedUpdateWithoutPayScalesInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PayRateUncheckedUpdateManyWithoutPayScaleNestedInput = {
    create?: XOR<PayRateCreateWithoutPayScaleInput, PayRateUncheckedCreateWithoutPayScaleInput> | PayRateCreateWithoutPayScaleInput[] | PayRateUncheckedCreateWithoutPayScaleInput[]
    connectOrCreate?: PayRateCreateOrConnectWithoutPayScaleInput | PayRateCreateOrConnectWithoutPayScaleInput[]
    upsert?: PayRateUpsertWithWhereUniqueWithoutPayScaleInput | PayRateUpsertWithWhereUniqueWithoutPayScaleInput[]
    createMany?: PayRateCreateManyPayScaleInputEnvelope
    set?: PayRateWhereUniqueInput | PayRateWhereUniqueInput[]
    disconnect?: PayRateWhereUniqueInput | PayRateWhereUniqueInput[]
    delete?: PayRateWhereUniqueInput | PayRateWhereUniqueInput[]
    connect?: PayRateWhereUniqueInput | PayRateWhereUniqueInput[]
    update?: PayRateUpdateWithWhereUniqueWithoutPayScaleInput | PayRateUpdateWithWhereUniqueWithoutPayScaleInput[]
    updateMany?: PayRateUpdateManyWithWhereWithoutPayScaleInput | PayRateUpdateManyWithWhereWithoutPayScaleInput[]
    deleteMany?: PayRateScalarWhereInput | PayRateScalarWhereInput[]
  }

  export type PayRateCreateNestedManyWithoutAircraftInput = {
    create?: XOR<PayRateCreateWithoutAircraftInput, PayRateUncheckedCreateWithoutAircraftInput> | PayRateCreateWithoutAircraftInput[] | PayRateUncheckedCreateWithoutAircraftInput[]
    connectOrCreate?: PayRateCreateOrConnectWithoutAircraftInput | PayRateCreateOrConnectWithoutAircraftInput[]
    createMany?: PayRateCreateManyAircraftInputEnvelope
    connect?: PayRateWhereUniqueInput | PayRateWhereUniqueInput[]
  }

  export type PayRateUncheckedCreateNestedManyWithoutAircraftInput = {
    create?: XOR<PayRateCreateWithoutAircraftInput, PayRateUncheckedCreateWithoutAircraftInput> | PayRateCreateWithoutAircraftInput[] | PayRateUncheckedCreateWithoutAircraftInput[]
    connectOrCreate?: PayRateCreateOrConnectWithoutAircraftInput | PayRateCreateOrConnectWithoutAircraftInput[]
    createMany?: PayRateCreateManyAircraftInputEnvelope
    connect?: PayRateWhereUniqueInput | PayRateWhereUniqueInput[]
  }

  export type PayRateUpdateManyWithoutAircraftNestedInput = {
    create?: XOR<PayRateCreateWithoutAircraftInput, PayRateUncheckedCreateWithoutAircraftInput> | PayRateCreateWithoutAircraftInput[] | PayRateUncheckedCreateWithoutAircraftInput[]
    connectOrCreate?: PayRateCreateOrConnectWithoutAircraftInput | PayRateCreateOrConnectWithoutAircraftInput[]
    upsert?: PayRateUpsertWithWhereUniqueWithoutAircraftInput | PayRateUpsertWithWhereUniqueWithoutAircraftInput[]
    createMany?: PayRateCreateManyAircraftInputEnvelope
    set?: PayRateWhereUniqueInput | PayRateWhereUniqueInput[]
    disconnect?: PayRateWhereUniqueInput | PayRateWhereUniqueInput[]
    delete?: PayRateWhereUniqueInput | PayRateWhereUniqueInput[]
    connect?: PayRateWhereUniqueInput | PayRateWhereUniqueInput[]
    update?: PayRateUpdateWithWhereUniqueWithoutAircraftInput | PayRateUpdateWithWhereUniqueWithoutAircraftInput[]
    updateMany?: PayRateUpdateManyWithWhereWithoutAircraftInput | PayRateUpdateManyWithWhereWithoutAircraftInput[]
    deleteMany?: PayRateScalarWhereInput | PayRateScalarWhereInput[]
  }

  export type PayRateUncheckedUpdateManyWithoutAircraftNestedInput = {
    create?: XOR<PayRateCreateWithoutAircraftInput, PayRateUncheckedCreateWithoutAircraftInput> | PayRateCreateWithoutAircraftInput[] | PayRateUncheckedCreateWithoutAircraftInput[]
    connectOrCreate?: PayRateCreateOrConnectWithoutAircraftInput | PayRateCreateOrConnectWithoutAircraftInput[]
    upsert?: PayRateUpsertWithWhereUniqueWithoutAircraftInput | PayRateUpsertWithWhereUniqueWithoutAircraftInput[]
    createMany?: PayRateCreateManyAircraftInputEnvelope
    set?: PayRateWhereUniqueInput | PayRateWhereUniqueInput[]
    disconnect?: PayRateWhereUniqueInput | PayRateWhereUniqueInput[]
    delete?: PayRateWhereUniqueInput | PayRateWhereUniqueInput[]
    connect?: PayRateWhereUniqueInput | PayRateWhereUniqueInput[]
    update?: PayRateUpdateWithWhereUniqueWithoutAircraftInput | PayRateUpdateWithWhereUniqueWithoutAircraftInput[]
    updateMany?: PayRateUpdateManyWithWhereWithoutAircraftInput | PayRateUpdateManyWithWhereWithoutAircraftInput[]
    deleteMany?: PayRateScalarWhereInput | PayRateScalarWhereInput[]
  }

  export type AircraftCreateNestedOneWithoutPayRatesInput = {
    create?: XOR<AircraftCreateWithoutPayRatesInput, AircraftUncheckedCreateWithoutPayRatesInput>
    connectOrCreate?: AircraftCreateOrConnectWithoutPayRatesInput
    connect?: AircraftWhereUniqueInput
  }

  export type PayScaleCreateNestedOneWithoutPayRatesInput = {
    create?: XOR<PayScaleCreateWithoutPayRatesInput, PayScaleUncheckedCreateWithoutPayRatesInput>
    connectOrCreate?: PayScaleCreateOrConnectWithoutPayRatesInput
    connect?: PayScaleWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AircraftUpdateOneRequiredWithoutPayRatesNestedInput = {
    create?: XOR<AircraftCreateWithoutPayRatesInput, AircraftUncheckedCreateWithoutPayRatesInput>
    connectOrCreate?: AircraftCreateOrConnectWithoutPayRatesInput
    upsert?: AircraftUpsertWithoutPayRatesInput
    connect?: AircraftWhereUniqueInput
    update?: XOR<XOR<AircraftUpdateToOneWithWhereWithoutPayRatesInput, AircraftUpdateWithoutPayRatesInput>, AircraftUncheckedUpdateWithoutPayRatesInput>
  }

  export type PayScaleUpdateOneRequiredWithoutPayRatesNestedInput = {
    create?: XOR<PayScaleCreateWithoutPayRatesInput, PayScaleUncheckedCreateWithoutPayRatesInput>
    connectOrCreate?: PayScaleCreateOrConnectWithoutPayRatesInput
    upsert?: PayScaleUpsertWithoutPayRatesInput
    connect?: PayScaleWhereUniqueInput
    update?: XOR<XOR<PayScaleUpdateToOneWithWhereWithoutPayRatesInput, PayScaleUpdateWithoutPayRatesInput>, PayScaleUncheckedUpdateWithoutPayRatesInput>
  }

  export type ContractCreateNestedOneWithoutNextVersionsInput = {
    create?: XOR<ContractCreateWithoutNextVersionsInput, ContractUncheckedCreateWithoutNextVersionsInput>
    connectOrCreate?: ContractCreateOrConnectWithoutNextVersionsInput
    connect?: ContractWhereUniqueInput
  }

  export type ContractCreateNestedManyWithoutPreviousVersionInput = {
    create?: XOR<ContractCreateWithoutPreviousVersionInput, ContractUncheckedCreateWithoutPreviousVersionInput> | ContractCreateWithoutPreviousVersionInput[] | ContractUncheckedCreateWithoutPreviousVersionInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutPreviousVersionInput | ContractCreateOrConnectWithoutPreviousVersionInput[]
    createMany?: ContractCreateManyPreviousVersionInputEnvelope
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
  }

  export type PayScaleCreateNestedManyWithoutContractInput = {
    create?: XOR<PayScaleCreateWithoutContractInput, PayScaleUncheckedCreateWithoutContractInput> | PayScaleCreateWithoutContractInput[] | PayScaleUncheckedCreateWithoutContractInput[]
    connectOrCreate?: PayScaleCreateOrConnectWithoutContractInput | PayScaleCreateOrConnectWithoutContractInput[]
    createMany?: PayScaleCreateManyContractInputEnvelope
    connect?: PayScaleWhereUniqueInput | PayScaleWhereUniqueInput[]
  }

  export type ContractItemCreateNestedManyWithoutContractInput = {
    create?: XOR<ContractItemCreateWithoutContractInput, ContractItemUncheckedCreateWithoutContractInput> | ContractItemCreateWithoutContractInput[] | ContractItemUncheckedCreateWithoutContractInput[]
    connectOrCreate?: ContractItemCreateOrConnectWithoutContractInput | ContractItemCreateOrConnectWithoutContractInput[]
    createMany?: ContractItemCreateManyContractInputEnvelope
    connect?: ContractItemWhereUniqueInput | ContractItemWhereUniqueInput[]
  }

  export type ContractChangeCreateNestedManyWithoutContractInput = {
    create?: XOR<ContractChangeCreateWithoutContractInput, ContractChangeUncheckedCreateWithoutContractInput> | ContractChangeCreateWithoutContractInput[] | ContractChangeUncheckedCreateWithoutContractInput[]
    connectOrCreate?: ContractChangeCreateOrConnectWithoutContractInput | ContractChangeCreateOrConnectWithoutContractInput[]
    createMany?: ContractChangeCreateManyContractInputEnvelope
    connect?: ContractChangeWhereUniqueInput | ContractChangeWhereUniqueInput[]
  }

  export type ContractUncheckedCreateNestedManyWithoutPreviousVersionInput = {
    create?: XOR<ContractCreateWithoutPreviousVersionInput, ContractUncheckedCreateWithoutPreviousVersionInput> | ContractCreateWithoutPreviousVersionInput[] | ContractUncheckedCreateWithoutPreviousVersionInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutPreviousVersionInput | ContractCreateOrConnectWithoutPreviousVersionInput[]
    createMany?: ContractCreateManyPreviousVersionInputEnvelope
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
  }

  export type PayScaleUncheckedCreateNestedManyWithoutContractInput = {
    create?: XOR<PayScaleCreateWithoutContractInput, PayScaleUncheckedCreateWithoutContractInput> | PayScaleCreateWithoutContractInput[] | PayScaleUncheckedCreateWithoutContractInput[]
    connectOrCreate?: PayScaleCreateOrConnectWithoutContractInput | PayScaleCreateOrConnectWithoutContractInput[]
    createMany?: PayScaleCreateManyContractInputEnvelope
    connect?: PayScaleWhereUniqueInput | PayScaleWhereUniqueInput[]
  }

  export type ContractItemUncheckedCreateNestedManyWithoutContractInput = {
    create?: XOR<ContractItemCreateWithoutContractInput, ContractItemUncheckedCreateWithoutContractInput> | ContractItemCreateWithoutContractInput[] | ContractItemUncheckedCreateWithoutContractInput[]
    connectOrCreate?: ContractItemCreateOrConnectWithoutContractInput | ContractItemCreateOrConnectWithoutContractInput[]
    createMany?: ContractItemCreateManyContractInputEnvelope
    connect?: ContractItemWhereUniqueInput | ContractItemWhereUniqueInput[]
  }

  export type ContractChangeUncheckedCreateNestedManyWithoutContractInput = {
    create?: XOR<ContractChangeCreateWithoutContractInput, ContractChangeUncheckedCreateWithoutContractInput> | ContractChangeCreateWithoutContractInput[] | ContractChangeUncheckedCreateWithoutContractInput[]
    connectOrCreate?: ContractChangeCreateOrConnectWithoutContractInput | ContractChangeCreateOrConnectWithoutContractInput[]
    createMany?: ContractChangeCreateManyContractInputEnvelope
    connect?: ContractChangeWhereUniqueInput | ContractChangeWhereUniqueInput[]
  }

  export type ContractUpdateOneWithoutNextVersionsNestedInput = {
    create?: XOR<ContractCreateWithoutNextVersionsInput, ContractUncheckedCreateWithoutNextVersionsInput>
    connectOrCreate?: ContractCreateOrConnectWithoutNextVersionsInput
    upsert?: ContractUpsertWithoutNextVersionsInput
    disconnect?: ContractWhereInput | boolean
    delete?: ContractWhereInput | boolean
    connect?: ContractWhereUniqueInput
    update?: XOR<XOR<ContractUpdateToOneWithWhereWithoutNextVersionsInput, ContractUpdateWithoutNextVersionsInput>, ContractUncheckedUpdateWithoutNextVersionsInput>
  }

  export type ContractUpdateManyWithoutPreviousVersionNestedInput = {
    create?: XOR<ContractCreateWithoutPreviousVersionInput, ContractUncheckedCreateWithoutPreviousVersionInput> | ContractCreateWithoutPreviousVersionInput[] | ContractUncheckedCreateWithoutPreviousVersionInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutPreviousVersionInput | ContractCreateOrConnectWithoutPreviousVersionInput[]
    upsert?: ContractUpsertWithWhereUniqueWithoutPreviousVersionInput | ContractUpsertWithWhereUniqueWithoutPreviousVersionInput[]
    createMany?: ContractCreateManyPreviousVersionInputEnvelope
    set?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    disconnect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    delete?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    update?: ContractUpdateWithWhereUniqueWithoutPreviousVersionInput | ContractUpdateWithWhereUniqueWithoutPreviousVersionInput[]
    updateMany?: ContractUpdateManyWithWhereWithoutPreviousVersionInput | ContractUpdateManyWithWhereWithoutPreviousVersionInput[]
    deleteMany?: ContractScalarWhereInput | ContractScalarWhereInput[]
  }

  export type PayScaleUpdateManyWithoutContractNestedInput = {
    create?: XOR<PayScaleCreateWithoutContractInput, PayScaleUncheckedCreateWithoutContractInput> | PayScaleCreateWithoutContractInput[] | PayScaleUncheckedCreateWithoutContractInput[]
    connectOrCreate?: PayScaleCreateOrConnectWithoutContractInput | PayScaleCreateOrConnectWithoutContractInput[]
    upsert?: PayScaleUpsertWithWhereUniqueWithoutContractInput | PayScaleUpsertWithWhereUniqueWithoutContractInput[]
    createMany?: PayScaleCreateManyContractInputEnvelope
    set?: PayScaleWhereUniqueInput | PayScaleWhereUniqueInput[]
    disconnect?: PayScaleWhereUniqueInput | PayScaleWhereUniqueInput[]
    delete?: PayScaleWhereUniqueInput | PayScaleWhereUniqueInput[]
    connect?: PayScaleWhereUniqueInput | PayScaleWhereUniqueInput[]
    update?: PayScaleUpdateWithWhereUniqueWithoutContractInput | PayScaleUpdateWithWhereUniqueWithoutContractInput[]
    updateMany?: PayScaleUpdateManyWithWhereWithoutContractInput | PayScaleUpdateManyWithWhereWithoutContractInput[]
    deleteMany?: PayScaleScalarWhereInput | PayScaleScalarWhereInput[]
  }

  export type ContractItemUpdateManyWithoutContractNestedInput = {
    create?: XOR<ContractItemCreateWithoutContractInput, ContractItemUncheckedCreateWithoutContractInput> | ContractItemCreateWithoutContractInput[] | ContractItemUncheckedCreateWithoutContractInput[]
    connectOrCreate?: ContractItemCreateOrConnectWithoutContractInput | ContractItemCreateOrConnectWithoutContractInput[]
    upsert?: ContractItemUpsertWithWhereUniqueWithoutContractInput | ContractItemUpsertWithWhereUniqueWithoutContractInput[]
    createMany?: ContractItemCreateManyContractInputEnvelope
    set?: ContractItemWhereUniqueInput | ContractItemWhereUniqueInput[]
    disconnect?: ContractItemWhereUniqueInput | ContractItemWhereUniqueInput[]
    delete?: ContractItemWhereUniqueInput | ContractItemWhereUniqueInput[]
    connect?: ContractItemWhereUniqueInput | ContractItemWhereUniqueInput[]
    update?: ContractItemUpdateWithWhereUniqueWithoutContractInput | ContractItemUpdateWithWhereUniqueWithoutContractInput[]
    updateMany?: ContractItemUpdateManyWithWhereWithoutContractInput | ContractItemUpdateManyWithWhereWithoutContractInput[]
    deleteMany?: ContractItemScalarWhereInput | ContractItemScalarWhereInput[]
  }

  export type ContractChangeUpdateManyWithoutContractNestedInput = {
    create?: XOR<ContractChangeCreateWithoutContractInput, ContractChangeUncheckedCreateWithoutContractInput> | ContractChangeCreateWithoutContractInput[] | ContractChangeUncheckedCreateWithoutContractInput[]
    connectOrCreate?: ContractChangeCreateOrConnectWithoutContractInput | ContractChangeCreateOrConnectWithoutContractInput[]
    upsert?: ContractChangeUpsertWithWhereUniqueWithoutContractInput | ContractChangeUpsertWithWhereUniqueWithoutContractInput[]
    createMany?: ContractChangeCreateManyContractInputEnvelope
    set?: ContractChangeWhereUniqueInput | ContractChangeWhereUniqueInput[]
    disconnect?: ContractChangeWhereUniqueInput | ContractChangeWhereUniqueInput[]
    delete?: ContractChangeWhereUniqueInput | ContractChangeWhereUniqueInput[]
    connect?: ContractChangeWhereUniqueInput | ContractChangeWhereUniqueInput[]
    update?: ContractChangeUpdateWithWhereUniqueWithoutContractInput | ContractChangeUpdateWithWhereUniqueWithoutContractInput[]
    updateMany?: ContractChangeUpdateManyWithWhereWithoutContractInput | ContractChangeUpdateManyWithWhereWithoutContractInput[]
    deleteMany?: ContractChangeScalarWhereInput | ContractChangeScalarWhereInput[]
  }

  export type ContractUncheckedUpdateManyWithoutPreviousVersionNestedInput = {
    create?: XOR<ContractCreateWithoutPreviousVersionInput, ContractUncheckedCreateWithoutPreviousVersionInput> | ContractCreateWithoutPreviousVersionInput[] | ContractUncheckedCreateWithoutPreviousVersionInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutPreviousVersionInput | ContractCreateOrConnectWithoutPreviousVersionInput[]
    upsert?: ContractUpsertWithWhereUniqueWithoutPreviousVersionInput | ContractUpsertWithWhereUniqueWithoutPreviousVersionInput[]
    createMany?: ContractCreateManyPreviousVersionInputEnvelope
    set?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    disconnect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    delete?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    update?: ContractUpdateWithWhereUniqueWithoutPreviousVersionInput | ContractUpdateWithWhereUniqueWithoutPreviousVersionInput[]
    updateMany?: ContractUpdateManyWithWhereWithoutPreviousVersionInput | ContractUpdateManyWithWhereWithoutPreviousVersionInput[]
    deleteMany?: ContractScalarWhereInput | ContractScalarWhereInput[]
  }

  export type PayScaleUncheckedUpdateManyWithoutContractNestedInput = {
    create?: XOR<PayScaleCreateWithoutContractInput, PayScaleUncheckedCreateWithoutContractInput> | PayScaleCreateWithoutContractInput[] | PayScaleUncheckedCreateWithoutContractInput[]
    connectOrCreate?: PayScaleCreateOrConnectWithoutContractInput | PayScaleCreateOrConnectWithoutContractInput[]
    upsert?: PayScaleUpsertWithWhereUniqueWithoutContractInput | PayScaleUpsertWithWhereUniqueWithoutContractInput[]
    createMany?: PayScaleCreateManyContractInputEnvelope
    set?: PayScaleWhereUniqueInput | PayScaleWhereUniqueInput[]
    disconnect?: PayScaleWhereUniqueInput | PayScaleWhereUniqueInput[]
    delete?: PayScaleWhereUniqueInput | PayScaleWhereUniqueInput[]
    connect?: PayScaleWhereUniqueInput | PayScaleWhereUniqueInput[]
    update?: PayScaleUpdateWithWhereUniqueWithoutContractInput | PayScaleUpdateWithWhereUniqueWithoutContractInput[]
    updateMany?: PayScaleUpdateManyWithWhereWithoutContractInput | PayScaleUpdateManyWithWhereWithoutContractInput[]
    deleteMany?: PayScaleScalarWhereInput | PayScaleScalarWhereInput[]
  }

  export type ContractItemUncheckedUpdateManyWithoutContractNestedInput = {
    create?: XOR<ContractItemCreateWithoutContractInput, ContractItemUncheckedCreateWithoutContractInput> | ContractItemCreateWithoutContractInput[] | ContractItemUncheckedCreateWithoutContractInput[]
    connectOrCreate?: ContractItemCreateOrConnectWithoutContractInput | ContractItemCreateOrConnectWithoutContractInput[]
    upsert?: ContractItemUpsertWithWhereUniqueWithoutContractInput | ContractItemUpsertWithWhereUniqueWithoutContractInput[]
    createMany?: ContractItemCreateManyContractInputEnvelope
    set?: ContractItemWhereUniqueInput | ContractItemWhereUniqueInput[]
    disconnect?: ContractItemWhereUniqueInput | ContractItemWhereUniqueInput[]
    delete?: ContractItemWhereUniqueInput | ContractItemWhereUniqueInput[]
    connect?: ContractItemWhereUniqueInput | ContractItemWhereUniqueInput[]
    update?: ContractItemUpdateWithWhereUniqueWithoutContractInput | ContractItemUpdateWithWhereUniqueWithoutContractInput[]
    updateMany?: ContractItemUpdateManyWithWhereWithoutContractInput | ContractItemUpdateManyWithWhereWithoutContractInput[]
    deleteMany?: ContractItemScalarWhereInput | ContractItemScalarWhereInput[]
  }

  export type ContractChangeUncheckedUpdateManyWithoutContractNestedInput = {
    create?: XOR<ContractChangeCreateWithoutContractInput, ContractChangeUncheckedCreateWithoutContractInput> | ContractChangeCreateWithoutContractInput[] | ContractChangeUncheckedCreateWithoutContractInput[]
    connectOrCreate?: ContractChangeCreateOrConnectWithoutContractInput | ContractChangeCreateOrConnectWithoutContractInput[]
    upsert?: ContractChangeUpsertWithWhereUniqueWithoutContractInput | ContractChangeUpsertWithWhereUniqueWithoutContractInput[]
    createMany?: ContractChangeCreateManyContractInputEnvelope
    set?: ContractChangeWhereUniqueInput | ContractChangeWhereUniqueInput[]
    disconnect?: ContractChangeWhereUniqueInput | ContractChangeWhereUniqueInput[]
    delete?: ContractChangeWhereUniqueInput | ContractChangeWhereUniqueInput[]
    connect?: ContractChangeWhereUniqueInput | ContractChangeWhereUniqueInput[]
    update?: ContractChangeUpdateWithWhereUniqueWithoutContractInput | ContractChangeUpdateWithWhereUniqueWithoutContractInput[]
    updateMany?: ContractChangeUpdateManyWithWhereWithoutContractInput | ContractChangeUpdateManyWithWhereWithoutContractInput[]
    deleteMany?: ContractChangeScalarWhereInput | ContractChangeScalarWhereInput[]
  }

  export type ContractCreateNestedOneWithoutContractItemsInput = {
    create?: XOR<ContractCreateWithoutContractItemsInput, ContractUncheckedCreateWithoutContractItemsInput>
    connectOrCreate?: ContractCreateOrConnectWithoutContractItemsInput
    connect?: ContractWhereUniqueInput
  }

  export type ContractUpdateOneRequiredWithoutContractItemsNestedInput = {
    create?: XOR<ContractCreateWithoutContractItemsInput, ContractUncheckedCreateWithoutContractItemsInput>
    connectOrCreate?: ContractCreateOrConnectWithoutContractItemsInput
    upsert?: ContractUpsertWithoutContractItemsInput
    connect?: ContractWhereUniqueInput
    update?: XOR<XOR<ContractUpdateToOneWithWhereWithoutContractItemsInput, ContractUpdateWithoutContractItemsInput>, ContractUncheckedUpdateWithoutContractItemsInput>
  }

  export type ContractCreateNestedOneWithoutChangeLogInput = {
    create?: XOR<ContractCreateWithoutChangeLogInput, ContractUncheckedCreateWithoutChangeLogInput>
    connectOrCreate?: ContractCreateOrConnectWithoutChangeLogInput
    connect?: ContractWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ContractUpdateOneRequiredWithoutChangeLogNestedInput = {
    create?: XOR<ContractCreateWithoutChangeLogInput, ContractUncheckedCreateWithoutChangeLogInput>
    connectOrCreate?: ContractCreateOrConnectWithoutChangeLogInput
    upsert?: ContractUpsertWithoutChangeLogInput
    connect?: ContractWhereUniqueInput
    update?: XOR<XOR<ContractUpdateToOneWithWhereWithoutChangeLogInput, ContractUpdateWithoutChangeLogInput>, ContractUncheckedUpdateWithoutChangeLogInput>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type PilotCreateWithoutUserInput = {
    empNumber: string
    name: string
    pilotHireDate?: Date | string | null
    scheduledRetireDate?: Date | string | null
    isRetired?: boolean
    lastSeenDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    senioritySnapshots?: SenioritySnapshotCreateNestedManyWithoutPilotInput
  }

  export type PilotUncheckedCreateWithoutUserInput = {
    id?: number
    empNumber: string
    name: string
    pilotHireDate?: Date | string | null
    scheduledRetireDate?: Date | string | null
    isRetired?: boolean
    lastSeenDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    senioritySnapshots?: SenioritySnapshotUncheckedCreateNestedManyWithoutPilotInput
  }

  export type PilotCreateOrConnectWithoutUserInput = {
    where: PilotWhereUniqueInput
    create: XOR<PilotCreateWithoutUserInput, PilotUncheckedCreateWithoutUserInput>
  }

  export type PilotUpsertWithoutUserInput = {
    update: XOR<PilotUpdateWithoutUserInput, PilotUncheckedUpdateWithoutUserInput>
    create: XOR<PilotCreateWithoutUserInput, PilotUncheckedCreateWithoutUserInput>
    where?: PilotWhereInput
  }

  export type PilotUpdateToOneWithWhereWithoutUserInput = {
    where?: PilotWhereInput
    data: XOR<PilotUpdateWithoutUserInput, PilotUncheckedUpdateWithoutUserInput>
  }

  export type PilotUpdateWithoutUserInput = {
    empNumber?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pilotHireDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduledRetireDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isRetired?: BoolFieldUpdateOperationsInput | boolean
    lastSeenDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senioritySnapshots?: SenioritySnapshotUpdateManyWithoutPilotNestedInput
  }

  export type PilotUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    empNumber?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pilotHireDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduledRetireDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isRetired?: BoolFieldUpdateOperationsInput | boolean
    lastSeenDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senioritySnapshots?: SenioritySnapshotUncheckedUpdateManyWithoutPilotNestedInput
  }

  export type SenioritySnapshotCreateWithoutPilotInput = {
    seniorityNumber: number
    category: string
    reportDate: Date | string
    baseCode: string
    fleetCode: string
    positionCode: string
    baseCity: string
    fleetName: string
    positionName: string
    isPlaceholder?: boolean
    createdAt?: Date | string
  }

  export type SenioritySnapshotUncheckedCreateWithoutPilotInput = {
    id?: number
    seniorityNumber: number
    category: string
    reportDate: Date | string
    baseCode: string
    fleetCode: string
    positionCode: string
    baseCity: string
    fleetName: string
    positionName: string
    isPlaceholder?: boolean
    createdAt?: Date | string
  }

  export type SenioritySnapshotCreateOrConnectWithoutPilotInput = {
    where: SenioritySnapshotWhereUniqueInput
    create: XOR<SenioritySnapshotCreateWithoutPilotInput, SenioritySnapshotUncheckedCreateWithoutPilotInput>
  }

  export type SenioritySnapshotCreateManyPilotInputEnvelope = {
    data: SenioritySnapshotCreateManyPilotInput | SenioritySnapshotCreateManyPilotInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutPilotInput = {
    firebaseUid: string
    email: string
    emailVerified?: boolean
    displayName?: string | null
    firstName?: string | null
    lastName?: string | null
    registrationDate?: Date | string
    lastLoginDate?: Date | string | null
    isActive?: boolean
    accountType?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutPilotInput = {
    id?: number
    firebaseUid: string
    email: string
    emailVerified?: boolean
    displayName?: string | null
    firstName?: string | null
    lastName?: string | null
    registrationDate?: Date | string
    lastLoginDate?: Date | string | null
    isActive?: boolean
    accountType?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutPilotInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPilotInput, UserUncheckedCreateWithoutPilotInput>
  }

  export type SenioritySnapshotUpsertWithWhereUniqueWithoutPilotInput = {
    where: SenioritySnapshotWhereUniqueInput
    update: XOR<SenioritySnapshotUpdateWithoutPilotInput, SenioritySnapshotUncheckedUpdateWithoutPilotInput>
    create: XOR<SenioritySnapshotCreateWithoutPilotInput, SenioritySnapshotUncheckedCreateWithoutPilotInput>
  }

  export type SenioritySnapshotUpdateWithWhereUniqueWithoutPilotInput = {
    where: SenioritySnapshotWhereUniqueInput
    data: XOR<SenioritySnapshotUpdateWithoutPilotInput, SenioritySnapshotUncheckedUpdateWithoutPilotInput>
  }

  export type SenioritySnapshotUpdateManyWithWhereWithoutPilotInput = {
    where: SenioritySnapshotScalarWhereInput
    data: XOR<SenioritySnapshotUpdateManyMutationInput, SenioritySnapshotUncheckedUpdateManyWithoutPilotInput>
  }

  export type SenioritySnapshotScalarWhereInput = {
    AND?: SenioritySnapshotScalarWhereInput | SenioritySnapshotScalarWhereInput[]
    OR?: SenioritySnapshotScalarWhereInput[]
    NOT?: SenioritySnapshotScalarWhereInput | SenioritySnapshotScalarWhereInput[]
    id?: IntFilter<"SenioritySnapshot"> | number
    seniorityNumber?: IntFilter<"SenioritySnapshot"> | number
    category?: StringFilter<"SenioritySnapshot"> | string
    reportDate?: DateTimeFilter<"SenioritySnapshot"> | Date | string
    baseCode?: StringFilter<"SenioritySnapshot"> | string
    fleetCode?: StringFilter<"SenioritySnapshot"> | string
    positionCode?: StringFilter<"SenioritySnapshot"> | string
    baseCity?: StringFilter<"SenioritySnapshot"> | string
    fleetName?: StringFilter<"SenioritySnapshot"> | string
    positionName?: StringFilter<"SenioritySnapshot"> | string
    isPlaceholder?: BoolFilter<"SenioritySnapshot"> | boolean
    pilotId?: IntFilter<"SenioritySnapshot"> | number
    createdAt?: DateTimeFilter<"SenioritySnapshot"> | Date | string
  }

  export type UserUpsertWithoutPilotInput = {
    update: XOR<UserUpdateWithoutPilotInput, UserUncheckedUpdateWithoutPilotInput>
    create: XOR<UserCreateWithoutPilotInput, UserUncheckedCreateWithoutPilotInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPilotInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPilotInput, UserUncheckedUpdateWithoutPilotInput>
  }

  export type UserUpdateWithoutPilotInput = {
    firebaseUid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    registrationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    accountType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutPilotInput = {
    id?: IntFieldUpdateOperationsInput | number
    firebaseUid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    registrationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    accountType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PilotCreateWithoutSenioritySnapshotsInput = {
    empNumber: string
    name: string
    pilotHireDate?: Date | string | null
    scheduledRetireDate?: Date | string | null
    isRetired?: boolean
    lastSeenDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutPilotInput
  }

  export type PilotUncheckedCreateWithoutSenioritySnapshotsInput = {
    id?: number
    empNumber: string
    name: string
    pilotHireDate?: Date | string | null
    scheduledRetireDate?: Date | string | null
    isRetired?: boolean
    lastSeenDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserUncheckedCreateNestedOneWithoutPilotInput
  }

  export type PilotCreateOrConnectWithoutSenioritySnapshotsInput = {
    where: PilotWhereUniqueInput
    create: XOR<PilotCreateWithoutSenioritySnapshotsInput, PilotUncheckedCreateWithoutSenioritySnapshotsInput>
  }

  export type PilotUpsertWithoutSenioritySnapshotsInput = {
    update: XOR<PilotUpdateWithoutSenioritySnapshotsInput, PilotUncheckedUpdateWithoutSenioritySnapshotsInput>
    create: XOR<PilotCreateWithoutSenioritySnapshotsInput, PilotUncheckedCreateWithoutSenioritySnapshotsInput>
    where?: PilotWhereInput
  }

  export type PilotUpdateToOneWithWhereWithoutSenioritySnapshotsInput = {
    where?: PilotWhereInput
    data: XOR<PilotUpdateWithoutSenioritySnapshotsInput, PilotUncheckedUpdateWithoutSenioritySnapshotsInput>
  }

  export type PilotUpdateWithoutSenioritySnapshotsInput = {
    empNumber?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pilotHireDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduledRetireDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isRetired?: BoolFieldUpdateOperationsInput | boolean
    lastSeenDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutPilotNestedInput
  }

  export type PilotUncheckedUpdateWithoutSenioritySnapshotsInput = {
    id?: IntFieldUpdateOperationsInput | number
    empNumber?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pilotHireDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduledRetireDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isRetired?: BoolFieldUpdateOperationsInput | boolean
    lastSeenDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUncheckedUpdateOneWithoutPilotNestedInput
  }

  export type PayRateCreateWithoutPayScaleInput = {
    position: string
    yearOfService: number
    hourlyRate: number
    createdAt?: Date | string
    aircraft: AircraftCreateNestedOneWithoutPayRatesInput
  }

  export type PayRateUncheckedCreateWithoutPayScaleInput = {
    id?: number
    aircraftId: number
    position: string
    yearOfService: number
    hourlyRate: number
    createdAt?: Date | string
  }

  export type PayRateCreateOrConnectWithoutPayScaleInput = {
    where: PayRateWhereUniqueInput
    create: XOR<PayRateCreateWithoutPayScaleInput, PayRateUncheckedCreateWithoutPayScaleInput>
  }

  export type PayRateCreateManyPayScaleInputEnvelope = {
    data: PayRateCreateManyPayScaleInput | PayRateCreateManyPayScaleInput[]
    skipDuplicates?: boolean
  }

  export type ContractCreateWithoutPayScalesInput = {
    contractId: string
    version: string
    versionNumber: number
    contractType: string
    effectiveDate: Date | string
    expirationDate?: Date | string | null
    ratificationDate?: Date | string | null
    title: string
    description?: string | null
    pdfFilePath?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    previousVersion?: ContractCreateNestedOneWithoutNextVersionsInput
    nextVersions?: ContractCreateNestedManyWithoutPreviousVersionInput
    contractItems?: ContractItemCreateNestedManyWithoutContractInput
    changeLog?: ContractChangeCreateNestedManyWithoutContractInput
  }

  export type ContractUncheckedCreateWithoutPayScalesInput = {
    id?: number
    contractId: string
    version: string
    versionNumber: number
    contractType: string
    effectiveDate: Date | string
    expirationDate?: Date | string | null
    ratificationDate?: Date | string | null
    previousVersionId?: number | null
    title: string
    description?: string | null
    pdfFilePath?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    nextVersions?: ContractUncheckedCreateNestedManyWithoutPreviousVersionInput
    contractItems?: ContractItemUncheckedCreateNestedManyWithoutContractInput
    changeLog?: ContractChangeUncheckedCreateNestedManyWithoutContractInput
  }

  export type ContractCreateOrConnectWithoutPayScalesInput = {
    where: ContractWhereUniqueInput
    create: XOR<ContractCreateWithoutPayScalesInput, ContractUncheckedCreateWithoutPayScalesInput>
  }

  export type PayRateUpsertWithWhereUniqueWithoutPayScaleInput = {
    where: PayRateWhereUniqueInput
    update: XOR<PayRateUpdateWithoutPayScaleInput, PayRateUncheckedUpdateWithoutPayScaleInput>
    create: XOR<PayRateCreateWithoutPayScaleInput, PayRateUncheckedCreateWithoutPayScaleInput>
  }

  export type PayRateUpdateWithWhereUniqueWithoutPayScaleInput = {
    where: PayRateWhereUniqueInput
    data: XOR<PayRateUpdateWithoutPayScaleInput, PayRateUncheckedUpdateWithoutPayScaleInput>
  }

  export type PayRateUpdateManyWithWhereWithoutPayScaleInput = {
    where: PayRateScalarWhereInput
    data: XOR<PayRateUpdateManyMutationInput, PayRateUncheckedUpdateManyWithoutPayScaleInput>
  }

  export type PayRateScalarWhereInput = {
    AND?: PayRateScalarWhereInput | PayRateScalarWhereInput[]
    OR?: PayRateScalarWhereInput[]
    NOT?: PayRateScalarWhereInput | PayRateScalarWhereInput[]
    id?: IntFilter<"PayRate"> | number
    aircraftId?: IntFilter<"PayRate"> | number
    payScaleId?: IntFilter<"PayRate"> | number
    position?: StringFilter<"PayRate"> | string
    yearOfService?: IntFilter<"PayRate"> | number
    hourlyRate?: FloatFilter<"PayRate"> | number
    createdAt?: DateTimeFilter<"PayRate"> | Date | string
  }

  export type ContractUpsertWithoutPayScalesInput = {
    update: XOR<ContractUpdateWithoutPayScalesInput, ContractUncheckedUpdateWithoutPayScalesInput>
    create: XOR<ContractCreateWithoutPayScalesInput, ContractUncheckedCreateWithoutPayScalesInput>
    where?: ContractWhereInput
  }

  export type ContractUpdateToOneWithWhereWithoutPayScalesInput = {
    where?: ContractWhereInput
    data: XOR<ContractUpdateWithoutPayScalesInput, ContractUncheckedUpdateWithoutPayScalesInput>
  }

  export type ContractUpdateWithoutPayScalesInput = {
    contractId?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    versionNumber?: IntFieldUpdateOperationsInput | number
    contractType?: StringFieldUpdateOperationsInput | string
    effectiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ratificationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pdfFilePath?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    previousVersion?: ContractUpdateOneWithoutNextVersionsNestedInput
    nextVersions?: ContractUpdateManyWithoutPreviousVersionNestedInput
    contractItems?: ContractItemUpdateManyWithoutContractNestedInput
    changeLog?: ContractChangeUpdateManyWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateWithoutPayScalesInput = {
    id?: IntFieldUpdateOperationsInput | number
    contractId?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    versionNumber?: IntFieldUpdateOperationsInput | number
    contractType?: StringFieldUpdateOperationsInput | string
    effectiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ratificationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    previousVersionId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pdfFilePath?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nextVersions?: ContractUncheckedUpdateManyWithoutPreviousVersionNestedInput
    contractItems?: ContractItemUncheckedUpdateManyWithoutContractNestedInput
    changeLog?: ContractChangeUncheckedUpdateManyWithoutContractNestedInput
  }

  export type PayRateCreateWithoutAircraftInput = {
    position: string
    yearOfService: number
    hourlyRate: number
    createdAt?: Date | string
    payScale: PayScaleCreateNestedOneWithoutPayRatesInput
  }

  export type PayRateUncheckedCreateWithoutAircraftInput = {
    id?: number
    payScaleId: number
    position: string
    yearOfService: number
    hourlyRate: number
    createdAt?: Date | string
  }

  export type PayRateCreateOrConnectWithoutAircraftInput = {
    where: PayRateWhereUniqueInput
    create: XOR<PayRateCreateWithoutAircraftInput, PayRateUncheckedCreateWithoutAircraftInput>
  }

  export type PayRateCreateManyAircraftInputEnvelope = {
    data: PayRateCreateManyAircraftInput | PayRateCreateManyAircraftInput[]
    skipDuplicates?: boolean
  }

  export type PayRateUpsertWithWhereUniqueWithoutAircraftInput = {
    where: PayRateWhereUniqueInput
    update: XOR<PayRateUpdateWithoutAircraftInput, PayRateUncheckedUpdateWithoutAircraftInput>
    create: XOR<PayRateCreateWithoutAircraftInput, PayRateUncheckedCreateWithoutAircraftInput>
  }

  export type PayRateUpdateWithWhereUniqueWithoutAircraftInput = {
    where: PayRateWhereUniqueInput
    data: XOR<PayRateUpdateWithoutAircraftInput, PayRateUncheckedUpdateWithoutAircraftInput>
  }

  export type PayRateUpdateManyWithWhereWithoutAircraftInput = {
    where: PayRateScalarWhereInput
    data: XOR<PayRateUpdateManyMutationInput, PayRateUncheckedUpdateManyWithoutAircraftInput>
  }

  export type AircraftCreateWithoutPayRatesInput = {
    aircraftCode: string
    aircraftName: string
    aircraftType: string
    payCategory: string
    isActive?: boolean
    createdAt?: Date | string
  }

  export type AircraftUncheckedCreateWithoutPayRatesInput = {
    id?: number
    aircraftCode: string
    aircraftName: string
    aircraftType: string
    payCategory: string
    isActive?: boolean
    createdAt?: Date | string
  }

  export type AircraftCreateOrConnectWithoutPayRatesInput = {
    where: AircraftWhereUniqueInput
    create: XOR<AircraftCreateWithoutPayRatesInput, AircraftUncheckedCreateWithoutPayRatesInput>
  }

  export type PayScaleCreateWithoutPayRatesInput = {
    effectiveDate: Date | string
    expirationDate?: Date | string | null
    contractVersion: string
    isActive?: boolean
    createdAt?: Date | string
    contract?: ContractCreateNestedOneWithoutPayScalesInput
  }

  export type PayScaleUncheckedCreateWithoutPayRatesInput = {
    id?: number
    effectiveDate: Date | string
    expirationDate?: Date | string | null
    contractVersion: string
    isActive?: boolean
    createdAt?: Date | string
    contractId?: number | null
  }

  export type PayScaleCreateOrConnectWithoutPayRatesInput = {
    where: PayScaleWhereUniqueInput
    create: XOR<PayScaleCreateWithoutPayRatesInput, PayScaleUncheckedCreateWithoutPayRatesInput>
  }

  export type AircraftUpsertWithoutPayRatesInput = {
    update: XOR<AircraftUpdateWithoutPayRatesInput, AircraftUncheckedUpdateWithoutPayRatesInput>
    create: XOR<AircraftCreateWithoutPayRatesInput, AircraftUncheckedCreateWithoutPayRatesInput>
    where?: AircraftWhereInput
  }

  export type AircraftUpdateToOneWithWhereWithoutPayRatesInput = {
    where?: AircraftWhereInput
    data: XOR<AircraftUpdateWithoutPayRatesInput, AircraftUncheckedUpdateWithoutPayRatesInput>
  }

  export type AircraftUpdateWithoutPayRatesInput = {
    aircraftCode?: StringFieldUpdateOperationsInput | string
    aircraftName?: StringFieldUpdateOperationsInput | string
    aircraftType?: StringFieldUpdateOperationsInput | string
    payCategory?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AircraftUncheckedUpdateWithoutPayRatesInput = {
    id?: IntFieldUpdateOperationsInput | number
    aircraftCode?: StringFieldUpdateOperationsInput | string
    aircraftName?: StringFieldUpdateOperationsInput | string
    aircraftType?: StringFieldUpdateOperationsInput | string
    payCategory?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayScaleUpsertWithoutPayRatesInput = {
    update: XOR<PayScaleUpdateWithoutPayRatesInput, PayScaleUncheckedUpdateWithoutPayRatesInput>
    create: XOR<PayScaleCreateWithoutPayRatesInput, PayScaleUncheckedCreateWithoutPayRatesInput>
    where?: PayScaleWhereInput
  }

  export type PayScaleUpdateToOneWithWhereWithoutPayRatesInput = {
    where?: PayScaleWhereInput
    data: XOR<PayScaleUpdateWithoutPayRatesInput, PayScaleUncheckedUpdateWithoutPayRatesInput>
  }

  export type PayScaleUpdateWithoutPayRatesInput = {
    effectiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contractVersion?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contract?: ContractUpdateOneWithoutPayScalesNestedInput
  }

  export type PayScaleUncheckedUpdateWithoutPayRatesInput = {
    id?: IntFieldUpdateOperationsInput | number
    effectiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contractVersion?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contractId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ContractCreateWithoutNextVersionsInput = {
    contractId: string
    version: string
    versionNumber: number
    contractType: string
    effectiveDate: Date | string
    expirationDate?: Date | string | null
    ratificationDate?: Date | string | null
    title: string
    description?: string | null
    pdfFilePath?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    previousVersion?: ContractCreateNestedOneWithoutNextVersionsInput
    payScales?: PayScaleCreateNestedManyWithoutContractInput
    contractItems?: ContractItemCreateNestedManyWithoutContractInput
    changeLog?: ContractChangeCreateNestedManyWithoutContractInput
  }

  export type ContractUncheckedCreateWithoutNextVersionsInput = {
    id?: number
    contractId: string
    version: string
    versionNumber: number
    contractType: string
    effectiveDate: Date | string
    expirationDate?: Date | string | null
    ratificationDate?: Date | string | null
    previousVersionId?: number | null
    title: string
    description?: string | null
    pdfFilePath?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    payScales?: PayScaleUncheckedCreateNestedManyWithoutContractInput
    contractItems?: ContractItemUncheckedCreateNestedManyWithoutContractInput
    changeLog?: ContractChangeUncheckedCreateNestedManyWithoutContractInput
  }

  export type ContractCreateOrConnectWithoutNextVersionsInput = {
    where: ContractWhereUniqueInput
    create: XOR<ContractCreateWithoutNextVersionsInput, ContractUncheckedCreateWithoutNextVersionsInput>
  }

  export type ContractCreateWithoutPreviousVersionInput = {
    contractId: string
    version: string
    versionNumber: number
    contractType: string
    effectiveDate: Date | string
    expirationDate?: Date | string | null
    ratificationDate?: Date | string | null
    title: string
    description?: string | null
    pdfFilePath?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    nextVersions?: ContractCreateNestedManyWithoutPreviousVersionInput
    payScales?: PayScaleCreateNestedManyWithoutContractInput
    contractItems?: ContractItemCreateNestedManyWithoutContractInput
    changeLog?: ContractChangeCreateNestedManyWithoutContractInput
  }

  export type ContractUncheckedCreateWithoutPreviousVersionInput = {
    id?: number
    contractId: string
    version: string
    versionNumber: number
    contractType: string
    effectiveDate: Date | string
    expirationDate?: Date | string | null
    ratificationDate?: Date | string | null
    title: string
    description?: string | null
    pdfFilePath?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    nextVersions?: ContractUncheckedCreateNestedManyWithoutPreviousVersionInput
    payScales?: PayScaleUncheckedCreateNestedManyWithoutContractInput
    contractItems?: ContractItemUncheckedCreateNestedManyWithoutContractInput
    changeLog?: ContractChangeUncheckedCreateNestedManyWithoutContractInput
  }

  export type ContractCreateOrConnectWithoutPreviousVersionInput = {
    where: ContractWhereUniqueInput
    create: XOR<ContractCreateWithoutPreviousVersionInput, ContractUncheckedCreateWithoutPreviousVersionInput>
  }

  export type ContractCreateManyPreviousVersionInputEnvelope = {
    data: ContractCreateManyPreviousVersionInput | ContractCreateManyPreviousVersionInput[]
    skipDuplicates?: boolean
  }

  export type PayScaleCreateWithoutContractInput = {
    effectiveDate: Date | string
    expirationDate?: Date | string | null
    contractVersion: string
    isActive?: boolean
    createdAt?: Date | string
    payRates?: PayRateCreateNestedManyWithoutPayScaleInput
  }

  export type PayScaleUncheckedCreateWithoutContractInput = {
    id?: number
    effectiveDate: Date | string
    expirationDate?: Date | string | null
    contractVersion: string
    isActive?: boolean
    createdAt?: Date | string
    payRates?: PayRateUncheckedCreateNestedManyWithoutPayScaleInput
  }

  export type PayScaleCreateOrConnectWithoutContractInput = {
    where: PayScaleWhereUniqueInput
    create: XOR<PayScaleCreateWithoutContractInput, PayScaleUncheckedCreateWithoutContractInput>
  }

  export type PayScaleCreateManyContractInputEnvelope = {
    data: PayScaleCreateManyContractInput | PayScaleCreateManyContractInput[]
    skipDuplicates?: boolean
  }

  export type ContractItemCreateWithoutContractInput = {
    itemId: string
    sectionNumber: string
    title: string
    category: string
    subcategory?: string | null
    content: string
    structuredData?: string | null
    summary?: string | null
    isNew?: boolean
    isModified?: boolean
    isDeleted?: boolean
    pageNumber?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContractItemUncheckedCreateWithoutContractInput = {
    id?: number
    itemId: string
    sectionNumber: string
    title: string
    category: string
    subcategory?: string | null
    content: string
    structuredData?: string | null
    summary?: string | null
    isNew?: boolean
    isModified?: boolean
    isDeleted?: boolean
    pageNumber?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContractItemCreateOrConnectWithoutContractInput = {
    where: ContractItemWhereUniqueInput
    create: XOR<ContractItemCreateWithoutContractInput, ContractItemUncheckedCreateWithoutContractInput>
  }

  export type ContractItemCreateManyContractInputEnvelope = {
    data: ContractItemCreateManyContractInput | ContractItemCreateManyContractInput[]
    skipDuplicates?: boolean
  }

  export type ContractChangeCreateWithoutContractInput = {
    changeType: string
    itemId: string
    category: string
    subcategory?: string | null
    changeDescription: string
    oldValue?: string | null
    newValue?: string | null
    impact?: string | null
    impactAmount?: number | null
    impactUnit?: string | null
    analysisNotes?: string | null
    createdAt?: Date | string
  }

  export type ContractChangeUncheckedCreateWithoutContractInput = {
    id?: number
    changeType: string
    itemId: string
    category: string
    subcategory?: string | null
    changeDescription: string
    oldValue?: string | null
    newValue?: string | null
    impact?: string | null
    impactAmount?: number | null
    impactUnit?: string | null
    analysisNotes?: string | null
    createdAt?: Date | string
  }

  export type ContractChangeCreateOrConnectWithoutContractInput = {
    where: ContractChangeWhereUniqueInput
    create: XOR<ContractChangeCreateWithoutContractInput, ContractChangeUncheckedCreateWithoutContractInput>
  }

  export type ContractChangeCreateManyContractInputEnvelope = {
    data: ContractChangeCreateManyContractInput | ContractChangeCreateManyContractInput[]
    skipDuplicates?: boolean
  }

  export type ContractUpsertWithoutNextVersionsInput = {
    update: XOR<ContractUpdateWithoutNextVersionsInput, ContractUncheckedUpdateWithoutNextVersionsInput>
    create: XOR<ContractCreateWithoutNextVersionsInput, ContractUncheckedCreateWithoutNextVersionsInput>
    where?: ContractWhereInput
  }

  export type ContractUpdateToOneWithWhereWithoutNextVersionsInput = {
    where?: ContractWhereInput
    data: XOR<ContractUpdateWithoutNextVersionsInput, ContractUncheckedUpdateWithoutNextVersionsInput>
  }

  export type ContractUpdateWithoutNextVersionsInput = {
    contractId?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    versionNumber?: IntFieldUpdateOperationsInput | number
    contractType?: StringFieldUpdateOperationsInput | string
    effectiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ratificationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pdfFilePath?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    previousVersion?: ContractUpdateOneWithoutNextVersionsNestedInput
    payScales?: PayScaleUpdateManyWithoutContractNestedInput
    contractItems?: ContractItemUpdateManyWithoutContractNestedInput
    changeLog?: ContractChangeUpdateManyWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateWithoutNextVersionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    contractId?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    versionNumber?: IntFieldUpdateOperationsInput | number
    contractType?: StringFieldUpdateOperationsInput | string
    effectiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ratificationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    previousVersionId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pdfFilePath?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payScales?: PayScaleUncheckedUpdateManyWithoutContractNestedInput
    contractItems?: ContractItemUncheckedUpdateManyWithoutContractNestedInput
    changeLog?: ContractChangeUncheckedUpdateManyWithoutContractNestedInput
  }

  export type ContractUpsertWithWhereUniqueWithoutPreviousVersionInput = {
    where: ContractWhereUniqueInput
    update: XOR<ContractUpdateWithoutPreviousVersionInput, ContractUncheckedUpdateWithoutPreviousVersionInput>
    create: XOR<ContractCreateWithoutPreviousVersionInput, ContractUncheckedCreateWithoutPreviousVersionInput>
  }

  export type ContractUpdateWithWhereUniqueWithoutPreviousVersionInput = {
    where: ContractWhereUniqueInput
    data: XOR<ContractUpdateWithoutPreviousVersionInput, ContractUncheckedUpdateWithoutPreviousVersionInput>
  }

  export type ContractUpdateManyWithWhereWithoutPreviousVersionInput = {
    where: ContractScalarWhereInput
    data: XOR<ContractUpdateManyMutationInput, ContractUncheckedUpdateManyWithoutPreviousVersionInput>
  }

  export type ContractScalarWhereInput = {
    AND?: ContractScalarWhereInput | ContractScalarWhereInput[]
    OR?: ContractScalarWhereInput[]
    NOT?: ContractScalarWhereInput | ContractScalarWhereInput[]
    id?: IntFilter<"Contract"> | number
    contractId?: StringFilter<"Contract"> | string
    version?: StringFilter<"Contract"> | string
    versionNumber?: IntFilter<"Contract"> | number
    contractType?: StringFilter<"Contract"> | string
    effectiveDate?: DateTimeFilter<"Contract"> | Date | string
    expirationDate?: DateTimeNullableFilter<"Contract"> | Date | string | null
    ratificationDate?: DateTimeNullableFilter<"Contract"> | Date | string | null
    previousVersionId?: IntNullableFilter<"Contract"> | number | null
    title?: StringFilter<"Contract"> | string
    description?: StringNullableFilter<"Contract"> | string | null
    pdfFilePath?: StringNullableFilter<"Contract"> | string | null
    isActive?: BoolFilter<"Contract"> | boolean
    createdAt?: DateTimeFilter<"Contract"> | Date | string
    updatedAt?: DateTimeFilter<"Contract"> | Date | string
  }

  export type PayScaleUpsertWithWhereUniqueWithoutContractInput = {
    where: PayScaleWhereUniqueInput
    update: XOR<PayScaleUpdateWithoutContractInput, PayScaleUncheckedUpdateWithoutContractInput>
    create: XOR<PayScaleCreateWithoutContractInput, PayScaleUncheckedCreateWithoutContractInput>
  }

  export type PayScaleUpdateWithWhereUniqueWithoutContractInput = {
    where: PayScaleWhereUniqueInput
    data: XOR<PayScaleUpdateWithoutContractInput, PayScaleUncheckedUpdateWithoutContractInput>
  }

  export type PayScaleUpdateManyWithWhereWithoutContractInput = {
    where: PayScaleScalarWhereInput
    data: XOR<PayScaleUpdateManyMutationInput, PayScaleUncheckedUpdateManyWithoutContractInput>
  }

  export type PayScaleScalarWhereInput = {
    AND?: PayScaleScalarWhereInput | PayScaleScalarWhereInput[]
    OR?: PayScaleScalarWhereInput[]
    NOT?: PayScaleScalarWhereInput | PayScaleScalarWhereInput[]
    id?: IntFilter<"PayScale"> | number
    effectiveDate?: DateTimeFilter<"PayScale"> | Date | string
    expirationDate?: DateTimeNullableFilter<"PayScale"> | Date | string | null
    contractVersion?: StringFilter<"PayScale"> | string
    isActive?: BoolFilter<"PayScale"> | boolean
    createdAt?: DateTimeFilter<"PayScale"> | Date | string
    contractId?: IntNullableFilter<"PayScale"> | number | null
  }

  export type ContractItemUpsertWithWhereUniqueWithoutContractInput = {
    where: ContractItemWhereUniqueInput
    update: XOR<ContractItemUpdateWithoutContractInput, ContractItemUncheckedUpdateWithoutContractInput>
    create: XOR<ContractItemCreateWithoutContractInput, ContractItemUncheckedCreateWithoutContractInput>
  }

  export type ContractItemUpdateWithWhereUniqueWithoutContractInput = {
    where: ContractItemWhereUniqueInput
    data: XOR<ContractItemUpdateWithoutContractInput, ContractItemUncheckedUpdateWithoutContractInput>
  }

  export type ContractItemUpdateManyWithWhereWithoutContractInput = {
    where: ContractItemScalarWhereInput
    data: XOR<ContractItemUpdateManyMutationInput, ContractItemUncheckedUpdateManyWithoutContractInput>
  }

  export type ContractItemScalarWhereInput = {
    AND?: ContractItemScalarWhereInput | ContractItemScalarWhereInput[]
    OR?: ContractItemScalarWhereInput[]
    NOT?: ContractItemScalarWhereInput | ContractItemScalarWhereInput[]
    id?: IntFilter<"ContractItem"> | number
    contractId?: IntFilter<"ContractItem"> | number
    itemId?: StringFilter<"ContractItem"> | string
    sectionNumber?: StringFilter<"ContractItem"> | string
    title?: StringFilter<"ContractItem"> | string
    category?: StringFilter<"ContractItem"> | string
    subcategory?: StringNullableFilter<"ContractItem"> | string | null
    content?: StringFilter<"ContractItem"> | string
    structuredData?: StringNullableFilter<"ContractItem"> | string | null
    summary?: StringNullableFilter<"ContractItem"> | string | null
    isNew?: BoolFilter<"ContractItem"> | boolean
    isModified?: BoolFilter<"ContractItem"> | boolean
    isDeleted?: BoolFilter<"ContractItem"> | boolean
    pageNumber?: IntNullableFilter<"ContractItem"> | number | null
    createdAt?: DateTimeFilter<"ContractItem"> | Date | string
    updatedAt?: DateTimeFilter<"ContractItem"> | Date | string
  }

  export type ContractChangeUpsertWithWhereUniqueWithoutContractInput = {
    where: ContractChangeWhereUniqueInput
    update: XOR<ContractChangeUpdateWithoutContractInput, ContractChangeUncheckedUpdateWithoutContractInput>
    create: XOR<ContractChangeCreateWithoutContractInput, ContractChangeUncheckedCreateWithoutContractInput>
  }

  export type ContractChangeUpdateWithWhereUniqueWithoutContractInput = {
    where: ContractChangeWhereUniqueInput
    data: XOR<ContractChangeUpdateWithoutContractInput, ContractChangeUncheckedUpdateWithoutContractInput>
  }

  export type ContractChangeUpdateManyWithWhereWithoutContractInput = {
    where: ContractChangeScalarWhereInput
    data: XOR<ContractChangeUpdateManyMutationInput, ContractChangeUncheckedUpdateManyWithoutContractInput>
  }

  export type ContractChangeScalarWhereInput = {
    AND?: ContractChangeScalarWhereInput | ContractChangeScalarWhereInput[]
    OR?: ContractChangeScalarWhereInput[]
    NOT?: ContractChangeScalarWhereInput | ContractChangeScalarWhereInput[]
    id?: IntFilter<"ContractChange"> | number
    contractId?: IntFilter<"ContractChange"> | number
    changeType?: StringFilter<"ContractChange"> | string
    itemId?: StringFilter<"ContractChange"> | string
    category?: StringFilter<"ContractChange"> | string
    subcategory?: StringNullableFilter<"ContractChange"> | string | null
    changeDescription?: StringFilter<"ContractChange"> | string
    oldValue?: StringNullableFilter<"ContractChange"> | string | null
    newValue?: StringNullableFilter<"ContractChange"> | string | null
    impact?: StringNullableFilter<"ContractChange"> | string | null
    impactAmount?: FloatNullableFilter<"ContractChange"> | number | null
    impactUnit?: StringNullableFilter<"ContractChange"> | string | null
    analysisNotes?: StringNullableFilter<"ContractChange"> | string | null
    createdAt?: DateTimeFilter<"ContractChange"> | Date | string
  }

  export type ContractCreateWithoutContractItemsInput = {
    contractId: string
    version: string
    versionNumber: number
    contractType: string
    effectiveDate: Date | string
    expirationDate?: Date | string | null
    ratificationDate?: Date | string | null
    title: string
    description?: string | null
    pdfFilePath?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    previousVersion?: ContractCreateNestedOneWithoutNextVersionsInput
    nextVersions?: ContractCreateNestedManyWithoutPreviousVersionInput
    payScales?: PayScaleCreateNestedManyWithoutContractInput
    changeLog?: ContractChangeCreateNestedManyWithoutContractInput
  }

  export type ContractUncheckedCreateWithoutContractItemsInput = {
    id?: number
    contractId: string
    version: string
    versionNumber: number
    contractType: string
    effectiveDate: Date | string
    expirationDate?: Date | string | null
    ratificationDate?: Date | string | null
    previousVersionId?: number | null
    title: string
    description?: string | null
    pdfFilePath?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    nextVersions?: ContractUncheckedCreateNestedManyWithoutPreviousVersionInput
    payScales?: PayScaleUncheckedCreateNestedManyWithoutContractInput
    changeLog?: ContractChangeUncheckedCreateNestedManyWithoutContractInput
  }

  export type ContractCreateOrConnectWithoutContractItemsInput = {
    where: ContractWhereUniqueInput
    create: XOR<ContractCreateWithoutContractItemsInput, ContractUncheckedCreateWithoutContractItemsInput>
  }

  export type ContractUpsertWithoutContractItemsInput = {
    update: XOR<ContractUpdateWithoutContractItemsInput, ContractUncheckedUpdateWithoutContractItemsInput>
    create: XOR<ContractCreateWithoutContractItemsInput, ContractUncheckedCreateWithoutContractItemsInput>
    where?: ContractWhereInput
  }

  export type ContractUpdateToOneWithWhereWithoutContractItemsInput = {
    where?: ContractWhereInput
    data: XOR<ContractUpdateWithoutContractItemsInput, ContractUncheckedUpdateWithoutContractItemsInput>
  }

  export type ContractUpdateWithoutContractItemsInput = {
    contractId?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    versionNumber?: IntFieldUpdateOperationsInput | number
    contractType?: StringFieldUpdateOperationsInput | string
    effectiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ratificationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pdfFilePath?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    previousVersion?: ContractUpdateOneWithoutNextVersionsNestedInput
    nextVersions?: ContractUpdateManyWithoutPreviousVersionNestedInput
    payScales?: PayScaleUpdateManyWithoutContractNestedInput
    changeLog?: ContractChangeUpdateManyWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateWithoutContractItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    contractId?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    versionNumber?: IntFieldUpdateOperationsInput | number
    contractType?: StringFieldUpdateOperationsInput | string
    effectiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ratificationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    previousVersionId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pdfFilePath?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nextVersions?: ContractUncheckedUpdateManyWithoutPreviousVersionNestedInput
    payScales?: PayScaleUncheckedUpdateManyWithoutContractNestedInput
    changeLog?: ContractChangeUncheckedUpdateManyWithoutContractNestedInput
  }

  export type ContractCreateWithoutChangeLogInput = {
    contractId: string
    version: string
    versionNumber: number
    contractType: string
    effectiveDate: Date | string
    expirationDate?: Date | string | null
    ratificationDate?: Date | string | null
    title: string
    description?: string | null
    pdfFilePath?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    previousVersion?: ContractCreateNestedOneWithoutNextVersionsInput
    nextVersions?: ContractCreateNestedManyWithoutPreviousVersionInput
    payScales?: PayScaleCreateNestedManyWithoutContractInput
    contractItems?: ContractItemCreateNestedManyWithoutContractInput
  }

  export type ContractUncheckedCreateWithoutChangeLogInput = {
    id?: number
    contractId: string
    version: string
    versionNumber: number
    contractType: string
    effectiveDate: Date | string
    expirationDate?: Date | string | null
    ratificationDate?: Date | string | null
    previousVersionId?: number | null
    title: string
    description?: string | null
    pdfFilePath?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    nextVersions?: ContractUncheckedCreateNestedManyWithoutPreviousVersionInput
    payScales?: PayScaleUncheckedCreateNestedManyWithoutContractInput
    contractItems?: ContractItemUncheckedCreateNestedManyWithoutContractInput
  }

  export type ContractCreateOrConnectWithoutChangeLogInput = {
    where: ContractWhereUniqueInput
    create: XOR<ContractCreateWithoutChangeLogInput, ContractUncheckedCreateWithoutChangeLogInput>
  }

  export type ContractUpsertWithoutChangeLogInput = {
    update: XOR<ContractUpdateWithoutChangeLogInput, ContractUncheckedUpdateWithoutChangeLogInput>
    create: XOR<ContractCreateWithoutChangeLogInput, ContractUncheckedCreateWithoutChangeLogInput>
    where?: ContractWhereInput
  }

  export type ContractUpdateToOneWithWhereWithoutChangeLogInput = {
    where?: ContractWhereInput
    data: XOR<ContractUpdateWithoutChangeLogInput, ContractUncheckedUpdateWithoutChangeLogInput>
  }

  export type ContractUpdateWithoutChangeLogInput = {
    contractId?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    versionNumber?: IntFieldUpdateOperationsInput | number
    contractType?: StringFieldUpdateOperationsInput | string
    effectiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ratificationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pdfFilePath?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    previousVersion?: ContractUpdateOneWithoutNextVersionsNestedInput
    nextVersions?: ContractUpdateManyWithoutPreviousVersionNestedInput
    payScales?: PayScaleUpdateManyWithoutContractNestedInput
    contractItems?: ContractItemUpdateManyWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateWithoutChangeLogInput = {
    id?: IntFieldUpdateOperationsInput | number
    contractId?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    versionNumber?: IntFieldUpdateOperationsInput | number
    contractType?: StringFieldUpdateOperationsInput | string
    effectiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ratificationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    previousVersionId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pdfFilePath?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nextVersions?: ContractUncheckedUpdateManyWithoutPreviousVersionNestedInput
    payScales?: PayScaleUncheckedUpdateManyWithoutContractNestedInput
    contractItems?: ContractItemUncheckedUpdateManyWithoutContractNestedInput
  }

  export type SenioritySnapshotCreateManyPilotInput = {
    id?: number
    seniorityNumber: number
    category: string
    reportDate: Date | string
    baseCode: string
    fleetCode: string
    positionCode: string
    baseCity: string
    fleetName: string
    positionName: string
    isPlaceholder?: boolean
    createdAt?: Date | string
  }

  export type SenioritySnapshotUpdateWithoutPilotInput = {
    seniorityNumber?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    reportDate?: DateTimeFieldUpdateOperationsInput | Date | string
    baseCode?: StringFieldUpdateOperationsInput | string
    fleetCode?: StringFieldUpdateOperationsInput | string
    positionCode?: StringFieldUpdateOperationsInput | string
    baseCity?: StringFieldUpdateOperationsInput | string
    fleetName?: StringFieldUpdateOperationsInput | string
    positionName?: StringFieldUpdateOperationsInput | string
    isPlaceholder?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SenioritySnapshotUncheckedUpdateWithoutPilotInput = {
    id?: IntFieldUpdateOperationsInput | number
    seniorityNumber?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    reportDate?: DateTimeFieldUpdateOperationsInput | Date | string
    baseCode?: StringFieldUpdateOperationsInput | string
    fleetCode?: StringFieldUpdateOperationsInput | string
    positionCode?: StringFieldUpdateOperationsInput | string
    baseCity?: StringFieldUpdateOperationsInput | string
    fleetName?: StringFieldUpdateOperationsInput | string
    positionName?: StringFieldUpdateOperationsInput | string
    isPlaceholder?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SenioritySnapshotUncheckedUpdateManyWithoutPilotInput = {
    id?: IntFieldUpdateOperationsInput | number
    seniorityNumber?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    reportDate?: DateTimeFieldUpdateOperationsInput | Date | string
    baseCode?: StringFieldUpdateOperationsInput | string
    fleetCode?: StringFieldUpdateOperationsInput | string
    positionCode?: StringFieldUpdateOperationsInput | string
    baseCity?: StringFieldUpdateOperationsInput | string
    fleetName?: StringFieldUpdateOperationsInput | string
    positionName?: StringFieldUpdateOperationsInput | string
    isPlaceholder?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayRateCreateManyPayScaleInput = {
    id?: number
    aircraftId: number
    position: string
    yearOfService: number
    hourlyRate: number
    createdAt?: Date | string
  }

  export type PayRateUpdateWithoutPayScaleInput = {
    position?: StringFieldUpdateOperationsInput | string
    yearOfService?: IntFieldUpdateOperationsInput | number
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aircraft?: AircraftUpdateOneRequiredWithoutPayRatesNestedInput
  }

  export type PayRateUncheckedUpdateWithoutPayScaleInput = {
    id?: IntFieldUpdateOperationsInput | number
    aircraftId?: IntFieldUpdateOperationsInput | number
    position?: StringFieldUpdateOperationsInput | string
    yearOfService?: IntFieldUpdateOperationsInput | number
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayRateUncheckedUpdateManyWithoutPayScaleInput = {
    id?: IntFieldUpdateOperationsInput | number
    aircraftId?: IntFieldUpdateOperationsInput | number
    position?: StringFieldUpdateOperationsInput | string
    yearOfService?: IntFieldUpdateOperationsInput | number
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayRateCreateManyAircraftInput = {
    id?: number
    payScaleId: number
    position: string
    yearOfService: number
    hourlyRate: number
    createdAt?: Date | string
  }

  export type PayRateUpdateWithoutAircraftInput = {
    position?: StringFieldUpdateOperationsInput | string
    yearOfService?: IntFieldUpdateOperationsInput | number
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payScale?: PayScaleUpdateOneRequiredWithoutPayRatesNestedInput
  }

  export type PayRateUncheckedUpdateWithoutAircraftInput = {
    id?: IntFieldUpdateOperationsInput | number
    payScaleId?: IntFieldUpdateOperationsInput | number
    position?: StringFieldUpdateOperationsInput | string
    yearOfService?: IntFieldUpdateOperationsInput | number
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayRateUncheckedUpdateManyWithoutAircraftInput = {
    id?: IntFieldUpdateOperationsInput | number
    payScaleId?: IntFieldUpdateOperationsInput | number
    position?: StringFieldUpdateOperationsInput | string
    yearOfService?: IntFieldUpdateOperationsInput | number
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractCreateManyPreviousVersionInput = {
    id?: number
    contractId: string
    version: string
    versionNumber: number
    contractType: string
    effectiveDate: Date | string
    expirationDate?: Date | string | null
    ratificationDate?: Date | string | null
    title: string
    description?: string | null
    pdfFilePath?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PayScaleCreateManyContractInput = {
    id?: number
    effectiveDate: Date | string
    expirationDate?: Date | string | null
    contractVersion: string
    isActive?: boolean
    createdAt?: Date | string
  }

  export type ContractItemCreateManyContractInput = {
    id?: number
    itemId: string
    sectionNumber: string
    title: string
    category: string
    subcategory?: string | null
    content: string
    structuredData?: string | null
    summary?: string | null
    isNew?: boolean
    isModified?: boolean
    isDeleted?: boolean
    pageNumber?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContractChangeCreateManyContractInput = {
    id?: number
    changeType: string
    itemId: string
    category: string
    subcategory?: string | null
    changeDescription: string
    oldValue?: string | null
    newValue?: string | null
    impact?: string | null
    impactAmount?: number | null
    impactUnit?: string | null
    analysisNotes?: string | null
    createdAt?: Date | string
  }

  export type ContractUpdateWithoutPreviousVersionInput = {
    contractId?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    versionNumber?: IntFieldUpdateOperationsInput | number
    contractType?: StringFieldUpdateOperationsInput | string
    effectiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ratificationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pdfFilePath?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nextVersions?: ContractUpdateManyWithoutPreviousVersionNestedInput
    payScales?: PayScaleUpdateManyWithoutContractNestedInput
    contractItems?: ContractItemUpdateManyWithoutContractNestedInput
    changeLog?: ContractChangeUpdateManyWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateWithoutPreviousVersionInput = {
    id?: IntFieldUpdateOperationsInput | number
    contractId?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    versionNumber?: IntFieldUpdateOperationsInput | number
    contractType?: StringFieldUpdateOperationsInput | string
    effectiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ratificationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pdfFilePath?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nextVersions?: ContractUncheckedUpdateManyWithoutPreviousVersionNestedInput
    payScales?: PayScaleUncheckedUpdateManyWithoutContractNestedInput
    contractItems?: ContractItemUncheckedUpdateManyWithoutContractNestedInput
    changeLog?: ContractChangeUncheckedUpdateManyWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateManyWithoutPreviousVersionInput = {
    id?: IntFieldUpdateOperationsInput | number
    contractId?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    versionNumber?: IntFieldUpdateOperationsInput | number
    contractType?: StringFieldUpdateOperationsInput | string
    effectiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ratificationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pdfFilePath?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayScaleUpdateWithoutContractInput = {
    effectiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contractVersion?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payRates?: PayRateUpdateManyWithoutPayScaleNestedInput
  }

  export type PayScaleUncheckedUpdateWithoutContractInput = {
    id?: IntFieldUpdateOperationsInput | number
    effectiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contractVersion?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payRates?: PayRateUncheckedUpdateManyWithoutPayScaleNestedInput
  }

  export type PayScaleUncheckedUpdateManyWithoutContractInput = {
    id?: IntFieldUpdateOperationsInput | number
    effectiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contractVersion?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractItemUpdateWithoutContractInput = {
    itemId?: StringFieldUpdateOperationsInput | string
    sectionNumber?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    subcategory?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    structuredData?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    isNew?: BoolFieldUpdateOperationsInput | boolean
    isModified?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    pageNumber?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractItemUncheckedUpdateWithoutContractInput = {
    id?: IntFieldUpdateOperationsInput | number
    itemId?: StringFieldUpdateOperationsInput | string
    sectionNumber?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    subcategory?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    structuredData?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    isNew?: BoolFieldUpdateOperationsInput | boolean
    isModified?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    pageNumber?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractItemUncheckedUpdateManyWithoutContractInput = {
    id?: IntFieldUpdateOperationsInput | number
    itemId?: StringFieldUpdateOperationsInput | string
    sectionNumber?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    subcategory?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    structuredData?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    isNew?: BoolFieldUpdateOperationsInput | boolean
    isModified?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    pageNumber?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractChangeUpdateWithoutContractInput = {
    changeType?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    subcategory?: NullableStringFieldUpdateOperationsInput | string | null
    changeDescription?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    impact?: NullableStringFieldUpdateOperationsInput | string | null
    impactAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    impactUnit?: NullableStringFieldUpdateOperationsInput | string | null
    analysisNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractChangeUncheckedUpdateWithoutContractInput = {
    id?: IntFieldUpdateOperationsInput | number
    changeType?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    subcategory?: NullableStringFieldUpdateOperationsInput | string | null
    changeDescription?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    impact?: NullableStringFieldUpdateOperationsInput | string | null
    impactAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    impactUnit?: NullableStringFieldUpdateOperationsInput | string | null
    analysisNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractChangeUncheckedUpdateManyWithoutContractInput = {
    id?: IntFieldUpdateOperationsInput | number
    changeType?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    subcategory?: NullableStringFieldUpdateOperationsInput | string | null
    changeDescription?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    impact?: NullableStringFieldUpdateOperationsInput | string | null
    impactAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    impactUnit?: NullableStringFieldUpdateOperationsInput | string | null
    analysisNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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