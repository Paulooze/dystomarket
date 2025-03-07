
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Sector
 * 
 */
export type Sector = $Result.DefaultSelection<Prisma.$SectorPayload>
/**
 * Model SubIndustry
 * 
 */
export type SubIndustry = $Result.DefaultSelection<Prisma.$SubIndustryPayload>
/**
 * Model FinancialData
 * 
 */
export type FinancialData = $Result.DefaultSelection<Prisma.$FinancialDataPayload>
/**
 * Model Company
 * 
 */
export type Company = $Result.DefaultSelection<Prisma.$CompanyPayload>
/**
 * Model StockPrice
 * 
 */
export type StockPrice = $Result.DefaultSelection<Prisma.$StockPricePayload>
/**
 * Model NewsArticle
 * 
 */
export type NewsArticle = $Result.DefaultSelection<Prisma.$NewsArticlePayload>
/**
 * Model Index
 * 
 */
export type Index = $Result.DefaultSelection<Prisma.$IndexPayload>
/**
 * Model IndexPrice
 * 
 */
export type IndexPrice = $Result.DefaultSelection<Prisma.$IndexPricePayload>
/**
 * Model IndexCompany
 * 
 */
export type IndexCompany = $Result.DefaultSelection<Prisma.$IndexCompanyPayload>
/**
 * Model CEO
 * 
 */
export type CEO = $Result.DefaultSelection<Prisma.$CEOPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Sectors
 * const sectors = await prisma.sector.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Sectors
   * const sectors = await prisma.sector.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.sector`: Exposes CRUD operations for the **Sector** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sectors
    * const sectors = await prisma.sector.findMany()
    * ```
    */
  get sector(): Prisma.SectorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subIndustry`: Exposes CRUD operations for the **SubIndustry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubIndustries
    * const subIndustries = await prisma.subIndustry.findMany()
    * ```
    */
  get subIndustry(): Prisma.SubIndustryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.financialData`: Exposes CRUD operations for the **FinancialData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FinancialData
    * const financialData = await prisma.financialData.findMany()
    * ```
    */
  get financialData(): Prisma.FinancialDataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **Company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.company.findMany()
    * ```
    */
  get company(): Prisma.CompanyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stockPrice`: Exposes CRUD operations for the **StockPrice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StockPrices
    * const stockPrices = await prisma.stockPrice.findMany()
    * ```
    */
  get stockPrice(): Prisma.StockPriceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.newsArticle`: Exposes CRUD operations for the **NewsArticle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NewsArticles
    * const newsArticles = await prisma.newsArticle.findMany()
    * ```
    */
  get newsArticle(): Prisma.NewsArticleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.index`: Exposes CRUD operations for the **Index** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Indices
    * const indices = await prisma.index.findMany()
    * ```
    */
  get index(): Prisma.IndexDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.indexPrice`: Exposes CRUD operations for the **IndexPrice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IndexPrices
    * const indexPrices = await prisma.indexPrice.findMany()
    * ```
    */
  get indexPrice(): Prisma.IndexPriceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.indexCompany`: Exposes CRUD operations for the **IndexCompany** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IndexCompanies
    * const indexCompanies = await prisma.indexCompany.findMany()
    * ```
    */
  get indexCompany(): Prisma.IndexCompanyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cEO`: Exposes CRUD operations for the **CEO** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CEOS
    * const cEOS = await prisma.cEO.findMany()
    * ```
    */
  get cEO(): Prisma.CEODelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.4.1
   * Query Engine version: a9055b89e58b4b5bfb59600785423b1db3d0e75d
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Sector: 'Sector',
    SubIndustry: 'SubIndustry',
    FinancialData: 'FinancialData',
    Company: 'Company',
    StockPrice: 'StockPrice',
    NewsArticle: 'NewsArticle',
    Index: 'Index',
    IndexPrice: 'IndexPrice',
    IndexCompany: 'IndexCompany',
    CEO: 'CEO'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "sector" | "subIndustry" | "financialData" | "company" | "stockPrice" | "newsArticle" | "index" | "indexPrice" | "indexCompany" | "cEO"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Sector: {
        payload: Prisma.$SectorPayload<ExtArgs>
        fields: Prisma.SectorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SectorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SectorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectorPayload>
          }
          findFirst: {
            args: Prisma.SectorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SectorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectorPayload>
          }
          findMany: {
            args: Prisma.SectorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectorPayload>[]
          }
          create: {
            args: Prisma.SectorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectorPayload>
          }
          createMany: {
            args: Prisma.SectorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SectorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectorPayload>[]
          }
          delete: {
            args: Prisma.SectorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectorPayload>
          }
          update: {
            args: Prisma.SectorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectorPayload>
          }
          deleteMany: {
            args: Prisma.SectorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SectorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SectorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectorPayload>[]
          }
          upsert: {
            args: Prisma.SectorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectorPayload>
          }
          aggregate: {
            args: Prisma.SectorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSector>
          }
          groupBy: {
            args: Prisma.SectorGroupByArgs<ExtArgs>
            result: $Utils.Optional<SectorGroupByOutputType>[]
          }
          count: {
            args: Prisma.SectorCountArgs<ExtArgs>
            result: $Utils.Optional<SectorCountAggregateOutputType> | number
          }
        }
      }
      SubIndustry: {
        payload: Prisma.$SubIndustryPayload<ExtArgs>
        fields: Prisma.SubIndustryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubIndustryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubIndustryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubIndustryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubIndustryPayload>
          }
          findFirst: {
            args: Prisma.SubIndustryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubIndustryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubIndustryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubIndustryPayload>
          }
          findMany: {
            args: Prisma.SubIndustryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubIndustryPayload>[]
          }
          create: {
            args: Prisma.SubIndustryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubIndustryPayload>
          }
          createMany: {
            args: Prisma.SubIndustryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubIndustryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubIndustryPayload>[]
          }
          delete: {
            args: Prisma.SubIndustryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubIndustryPayload>
          }
          update: {
            args: Prisma.SubIndustryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubIndustryPayload>
          }
          deleteMany: {
            args: Prisma.SubIndustryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubIndustryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubIndustryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubIndustryPayload>[]
          }
          upsert: {
            args: Prisma.SubIndustryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubIndustryPayload>
          }
          aggregate: {
            args: Prisma.SubIndustryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubIndustry>
          }
          groupBy: {
            args: Prisma.SubIndustryGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubIndustryGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubIndustryCountArgs<ExtArgs>
            result: $Utils.Optional<SubIndustryCountAggregateOutputType> | number
          }
        }
      }
      FinancialData: {
        payload: Prisma.$FinancialDataPayload<ExtArgs>
        fields: Prisma.FinancialDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FinancialDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FinancialDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialDataPayload>
          }
          findFirst: {
            args: Prisma.FinancialDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FinancialDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialDataPayload>
          }
          findMany: {
            args: Prisma.FinancialDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialDataPayload>[]
          }
          create: {
            args: Prisma.FinancialDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialDataPayload>
          }
          createMany: {
            args: Prisma.FinancialDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FinancialDataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialDataPayload>[]
          }
          delete: {
            args: Prisma.FinancialDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialDataPayload>
          }
          update: {
            args: Prisma.FinancialDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialDataPayload>
          }
          deleteMany: {
            args: Prisma.FinancialDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FinancialDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FinancialDataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialDataPayload>[]
          }
          upsert: {
            args: Prisma.FinancialDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialDataPayload>
          }
          aggregate: {
            args: Prisma.FinancialDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFinancialData>
          }
          groupBy: {
            args: Prisma.FinancialDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<FinancialDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.FinancialDataCountArgs<ExtArgs>
            result: $Utils.Optional<FinancialDataCountAggregateOutputType> | number
          }
        }
      }
      Company: {
        payload: Prisma.$CompanyPayload<ExtArgs>
        fields: Prisma.CompanyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findFirst: {
            args: Prisma.CompanyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findMany: {
            args: Prisma.CompanyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          create: {
            args: Prisma.CompanyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          createMany: {
            args: Prisma.CompanyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          delete: {
            args: Prisma.CompanyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          update: {
            args: Prisma.CompanyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          deleteMany: {
            args: Prisma.CompanyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompanyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          upsert: {
            args: Prisma.CompanyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompany>
          }
          groupBy: {
            args: Prisma.CompanyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number
          }
        }
      }
      StockPrice: {
        payload: Prisma.$StockPricePayload<ExtArgs>
        fields: Prisma.StockPriceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StockPriceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPricePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StockPriceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPricePayload>
          }
          findFirst: {
            args: Prisma.StockPriceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPricePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StockPriceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPricePayload>
          }
          findMany: {
            args: Prisma.StockPriceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPricePayload>[]
          }
          create: {
            args: Prisma.StockPriceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPricePayload>
          }
          createMany: {
            args: Prisma.StockPriceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StockPriceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPricePayload>[]
          }
          delete: {
            args: Prisma.StockPriceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPricePayload>
          }
          update: {
            args: Prisma.StockPriceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPricePayload>
          }
          deleteMany: {
            args: Prisma.StockPriceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StockPriceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StockPriceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPricePayload>[]
          }
          upsert: {
            args: Prisma.StockPriceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPricePayload>
          }
          aggregate: {
            args: Prisma.StockPriceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStockPrice>
          }
          groupBy: {
            args: Prisma.StockPriceGroupByArgs<ExtArgs>
            result: $Utils.Optional<StockPriceGroupByOutputType>[]
          }
          count: {
            args: Prisma.StockPriceCountArgs<ExtArgs>
            result: $Utils.Optional<StockPriceCountAggregateOutputType> | number
          }
        }
      }
      NewsArticle: {
        payload: Prisma.$NewsArticlePayload<ExtArgs>
        fields: Prisma.NewsArticleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NewsArticleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NewsArticleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload>
          }
          findFirst: {
            args: Prisma.NewsArticleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NewsArticleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload>
          }
          findMany: {
            args: Prisma.NewsArticleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload>[]
          }
          create: {
            args: Prisma.NewsArticleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload>
          }
          createMany: {
            args: Prisma.NewsArticleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NewsArticleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload>[]
          }
          delete: {
            args: Prisma.NewsArticleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload>
          }
          update: {
            args: Prisma.NewsArticleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload>
          }
          deleteMany: {
            args: Prisma.NewsArticleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NewsArticleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NewsArticleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload>[]
          }
          upsert: {
            args: Prisma.NewsArticleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload>
          }
          aggregate: {
            args: Prisma.NewsArticleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNewsArticle>
          }
          groupBy: {
            args: Prisma.NewsArticleGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewsArticleGroupByOutputType>[]
          }
          count: {
            args: Prisma.NewsArticleCountArgs<ExtArgs>
            result: $Utils.Optional<NewsArticleCountAggregateOutputType> | number
          }
        }
      }
      Index: {
        payload: Prisma.$IndexPayload<ExtArgs>
        fields: Prisma.IndexFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IndexFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndexPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IndexFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndexPayload>
          }
          findFirst: {
            args: Prisma.IndexFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndexPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IndexFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndexPayload>
          }
          findMany: {
            args: Prisma.IndexFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndexPayload>[]
          }
          create: {
            args: Prisma.IndexCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndexPayload>
          }
          createMany: {
            args: Prisma.IndexCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IndexCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndexPayload>[]
          }
          delete: {
            args: Prisma.IndexDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndexPayload>
          }
          update: {
            args: Prisma.IndexUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndexPayload>
          }
          deleteMany: {
            args: Prisma.IndexDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IndexUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IndexUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndexPayload>[]
          }
          upsert: {
            args: Prisma.IndexUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndexPayload>
          }
          aggregate: {
            args: Prisma.IndexAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIndex>
          }
          groupBy: {
            args: Prisma.IndexGroupByArgs<ExtArgs>
            result: $Utils.Optional<IndexGroupByOutputType>[]
          }
          count: {
            args: Prisma.IndexCountArgs<ExtArgs>
            result: $Utils.Optional<IndexCountAggregateOutputType> | number
          }
        }
      }
      IndexPrice: {
        payload: Prisma.$IndexPricePayload<ExtArgs>
        fields: Prisma.IndexPriceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IndexPriceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndexPricePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IndexPriceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndexPricePayload>
          }
          findFirst: {
            args: Prisma.IndexPriceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndexPricePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IndexPriceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndexPricePayload>
          }
          findMany: {
            args: Prisma.IndexPriceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndexPricePayload>[]
          }
          create: {
            args: Prisma.IndexPriceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndexPricePayload>
          }
          createMany: {
            args: Prisma.IndexPriceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IndexPriceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndexPricePayload>[]
          }
          delete: {
            args: Prisma.IndexPriceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndexPricePayload>
          }
          update: {
            args: Prisma.IndexPriceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndexPricePayload>
          }
          deleteMany: {
            args: Prisma.IndexPriceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IndexPriceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IndexPriceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndexPricePayload>[]
          }
          upsert: {
            args: Prisma.IndexPriceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndexPricePayload>
          }
          aggregate: {
            args: Prisma.IndexPriceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIndexPrice>
          }
          groupBy: {
            args: Prisma.IndexPriceGroupByArgs<ExtArgs>
            result: $Utils.Optional<IndexPriceGroupByOutputType>[]
          }
          count: {
            args: Prisma.IndexPriceCountArgs<ExtArgs>
            result: $Utils.Optional<IndexPriceCountAggregateOutputType> | number
          }
        }
      }
      IndexCompany: {
        payload: Prisma.$IndexCompanyPayload<ExtArgs>
        fields: Prisma.IndexCompanyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IndexCompanyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndexCompanyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IndexCompanyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndexCompanyPayload>
          }
          findFirst: {
            args: Prisma.IndexCompanyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndexCompanyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IndexCompanyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndexCompanyPayload>
          }
          findMany: {
            args: Prisma.IndexCompanyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndexCompanyPayload>[]
          }
          create: {
            args: Prisma.IndexCompanyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndexCompanyPayload>
          }
          createMany: {
            args: Prisma.IndexCompanyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IndexCompanyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndexCompanyPayload>[]
          }
          delete: {
            args: Prisma.IndexCompanyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndexCompanyPayload>
          }
          update: {
            args: Prisma.IndexCompanyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndexCompanyPayload>
          }
          deleteMany: {
            args: Prisma.IndexCompanyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IndexCompanyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IndexCompanyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndexCompanyPayload>[]
          }
          upsert: {
            args: Prisma.IndexCompanyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndexCompanyPayload>
          }
          aggregate: {
            args: Prisma.IndexCompanyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIndexCompany>
          }
          groupBy: {
            args: Prisma.IndexCompanyGroupByArgs<ExtArgs>
            result: $Utils.Optional<IndexCompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.IndexCompanyCountArgs<ExtArgs>
            result: $Utils.Optional<IndexCompanyCountAggregateOutputType> | number
          }
        }
      }
      CEO: {
        payload: Prisma.$CEOPayload<ExtArgs>
        fields: Prisma.CEOFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CEOFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CEOPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CEOFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CEOPayload>
          }
          findFirst: {
            args: Prisma.CEOFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CEOPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CEOFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CEOPayload>
          }
          findMany: {
            args: Prisma.CEOFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CEOPayload>[]
          }
          create: {
            args: Prisma.CEOCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CEOPayload>
          }
          createMany: {
            args: Prisma.CEOCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CEOCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CEOPayload>[]
          }
          delete: {
            args: Prisma.CEODeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CEOPayload>
          }
          update: {
            args: Prisma.CEOUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CEOPayload>
          }
          deleteMany: {
            args: Prisma.CEODeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CEOUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CEOUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CEOPayload>[]
          }
          upsert: {
            args: Prisma.CEOUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CEOPayload>
          }
          aggregate: {
            args: Prisma.CEOAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCEO>
          }
          groupBy: {
            args: Prisma.CEOGroupByArgs<ExtArgs>
            result: $Utils.Optional<CEOGroupByOutputType>[]
          }
          count: {
            args: Prisma.CEOCountArgs<ExtArgs>
            result: $Utils.Optional<CEOCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    sector?: SectorOmit
    subIndustry?: SubIndustryOmit
    financialData?: FinancialDataOmit
    company?: CompanyOmit
    stockPrice?: StockPriceOmit
    newsArticle?: NewsArticleOmit
    index?: IndexOmit
    indexPrice?: IndexPriceOmit
    indexCompany?: IndexCompanyOmit
    cEO?: CEOOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type SectorCountOutputType
   */

  export type SectorCountOutputType = {
    companies: number
    subIndustries: number
  }

  export type SectorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    companies?: boolean | SectorCountOutputTypeCountCompaniesArgs
    subIndustries?: boolean | SectorCountOutputTypeCountSubIndustriesArgs
  }

  // Custom InputTypes
  /**
   * SectorCountOutputType without action
   */
  export type SectorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectorCountOutputType
     */
    select?: SectorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SectorCountOutputType without action
   */
  export type SectorCountOutputTypeCountCompaniesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
  }

  /**
   * SectorCountOutputType without action
   */
  export type SectorCountOutputTypeCountSubIndustriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubIndustryWhereInput
  }


  /**
   * Count Type SubIndustryCountOutputType
   */

  export type SubIndustryCountOutputType = {
    companies: number
  }

  export type SubIndustryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    companies?: boolean | SubIndustryCountOutputTypeCountCompaniesArgs
  }

  // Custom InputTypes
  /**
   * SubIndustryCountOutputType without action
   */
  export type SubIndustryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubIndustryCountOutputType
     */
    select?: SubIndustryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubIndustryCountOutputType without action
   */
  export type SubIndustryCountOutputTypeCountCompaniesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
  }


  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    stockPrices: number
    newsArticles: number
    indices: number
    financialData: number
  }

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stockPrices?: boolean | CompanyCountOutputTypeCountStockPricesArgs
    newsArticles?: boolean | CompanyCountOutputTypeCountNewsArticlesArgs
    indices?: boolean | CompanyCountOutputTypeCountIndicesArgs
    financialData?: boolean | CompanyCountOutputTypeCountFinancialDataArgs
  }

  // Custom InputTypes
  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountStockPricesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockPriceWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountNewsArticlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsArticleWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountIndicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IndexCompanyWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountFinancialDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FinancialDataWhereInput
  }


  /**
   * Count Type IndexCountOutputType
   */

  export type IndexCountOutputType = {
    indexPrices: number
    companies: number
  }

  export type IndexCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    indexPrices?: boolean | IndexCountOutputTypeCountIndexPricesArgs
    companies?: boolean | IndexCountOutputTypeCountCompaniesArgs
  }

  // Custom InputTypes
  /**
   * IndexCountOutputType without action
   */
  export type IndexCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexCountOutputType
     */
    select?: IndexCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * IndexCountOutputType without action
   */
  export type IndexCountOutputTypeCountIndexPricesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IndexPriceWhereInput
  }

  /**
   * IndexCountOutputType without action
   */
  export type IndexCountOutputTypeCountCompaniesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IndexCompanyWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Sector
   */

  export type AggregateSector = {
    _count: SectorCountAggregateOutputType | null
    _avg: SectorAvgAggregateOutputType | null
    _sum: SectorSumAggregateOutputType | null
    _min: SectorMinAggregateOutputType | null
    _max: SectorMaxAggregateOutputType | null
  }

  export type SectorAvgAggregateOutputType = {
    id: number | null
  }

  export type SectorSumAggregateOutputType = {
    id: number | null
  }

  export type SectorMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type SectorMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type SectorCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type SectorAvgAggregateInputType = {
    id?: true
  }

  export type SectorSumAggregateInputType = {
    id?: true
  }

  export type SectorMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type SectorMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type SectorCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type SectorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sector to aggregate.
     */
    where?: SectorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sectors to fetch.
     */
    orderBy?: SectorOrderByWithRelationInput | SectorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SectorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sectors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sectors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sectors
    **/
    _count?: true | SectorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SectorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SectorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SectorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SectorMaxAggregateInputType
  }

  export type GetSectorAggregateType<T extends SectorAggregateArgs> = {
        [P in keyof T & keyof AggregateSector]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSector[P]>
      : GetScalarType<T[P], AggregateSector[P]>
  }




  export type SectorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SectorWhereInput
    orderBy?: SectorOrderByWithAggregationInput | SectorOrderByWithAggregationInput[]
    by: SectorScalarFieldEnum[] | SectorScalarFieldEnum
    having?: SectorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SectorCountAggregateInputType | true
    _avg?: SectorAvgAggregateInputType
    _sum?: SectorSumAggregateInputType
    _min?: SectorMinAggregateInputType
    _max?: SectorMaxAggregateInputType
  }

  export type SectorGroupByOutputType = {
    id: number
    name: string
    _count: SectorCountAggregateOutputType | null
    _avg: SectorAvgAggregateOutputType | null
    _sum: SectorSumAggregateOutputType | null
    _min: SectorMinAggregateOutputType | null
    _max: SectorMaxAggregateOutputType | null
  }

  type GetSectorGroupByPayload<T extends SectorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SectorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SectorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SectorGroupByOutputType[P]>
            : GetScalarType<T[P], SectorGroupByOutputType[P]>
        }
      >
    >


  export type SectorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    companies?: boolean | Sector$companiesArgs<ExtArgs>
    subIndustries?: boolean | Sector$subIndustriesArgs<ExtArgs>
    _count?: boolean | SectorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sector"]>

  export type SectorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["sector"]>

  export type SectorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["sector"]>

  export type SectorSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type SectorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["sector"]>
  export type SectorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    companies?: boolean | Sector$companiesArgs<ExtArgs>
    subIndustries?: boolean | Sector$subIndustriesArgs<ExtArgs>
    _count?: boolean | SectorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SectorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SectorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SectorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sector"
    objects: {
      companies: Prisma.$CompanyPayload<ExtArgs>[]
      subIndustries: Prisma.$SubIndustryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["sector"]>
    composites: {}
  }

  type SectorGetPayload<S extends boolean | null | undefined | SectorDefaultArgs> = $Result.GetResult<Prisma.$SectorPayload, S>

  type SectorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SectorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SectorCountAggregateInputType | true
    }

  export interface SectorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sector'], meta: { name: 'Sector' } }
    /**
     * Find zero or one Sector that matches the filter.
     * @param {SectorFindUniqueArgs} args - Arguments to find a Sector
     * @example
     * // Get one Sector
     * const sector = await prisma.sector.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SectorFindUniqueArgs>(args: SelectSubset<T, SectorFindUniqueArgs<ExtArgs>>): Prisma__SectorClient<$Result.GetResult<Prisma.$SectorPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Sector that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SectorFindUniqueOrThrowArgs} args - Arguments to find a Sector
     * @example
     * // Get one Sector
     * const sector = await prisma.sector.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SectorFindUniqueOrThrowArgs>(args: SelectSubset<T, SectorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SectorClient<$Result.GetResult<Prisma.$SectorPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Sector that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectorFindFirstArgs} args - Arguments to find a Sector
     * @example
     * // Get one Sector
     * const sector = await prisma.sector.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SectorFindFirstArgs>(args?: SelectSubset<T, SectorFindFirstArgs<ExtArgs>>): Prisma__SectorClient<$Result.GetResult<Prisma.$SectorPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Sector that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectorFindFirstOrThrowArgs} args - Arguments to find a Sector
     * @example
     * // Get one Sector
     * const sector = await prisma.sector.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SectorFindFirstOrThrowArgs>(args?: SelectSubset<T, SectorFindFirstOrThrowArgs<ExtArgs>>): Prisma__SectorClient<$Result.GetResult<Prisma.$SectorPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Sectors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sectors
     * const sectors = await prisma.sector.findMany()
     * 
     * // Get first 10 Sectors
     * const sectors = await prisma.sector.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sectorWithIdOnly = await prisma.sector.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SectorFindManyArgs>(args?: SelectSubset<T, SectorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectorPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Sector.
     * @param {SectorCreateArgs} args - Arguments to create a Sector.
     * @example
     * // Create one Sector
     * const Sector = await prisma.sector.create({
     *   data: {
     *     // ... data to create a Sector
     *   }
     * })
     * 
     */
    create<T extends SectorCreateArgs>(args: SelectSubset<T, SectorCreateArgs<ExtArgs>>): Prisma__SectorClient<$Result.GetResult<Prisma.$SectorPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Sectors.
     * @param {SectorCreateManyArgs} args - Arguments to create many Sectors.
     * @example
     * // Create many Sectors
     * const sector = await prisma.sector.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SectorCreateManyArgs>(args?: SelectSubset<T, SectorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sectors and returns the data saved in the database.
     * @param {SectorCreateManyAndReturnArgs} args - Arguments to create many Sectors.
     * @example
     * // Create many Sectors
     * const sector = await prisma.sector.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sectors and only return the `id`
     * const sectorWithIdOnly = await prisma.sector.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SectorCreateManyAndReturnArgs>(args?: SelectSubset<T, SectorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectorPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Sector.
     * @param {SectorDeleteArgs} args - Arguments to delete one Sector.
     * @example
     * // Delete one Sector
     * const Sector = await prisma.sector.delete({
     *   where: {
     *     // ... filter to delete one Sector
     *   }
     * })
     * 
     */
    delete<T extends SectorDeleteArgs>(args: SelectSubset<T, SectorDeleteArgs<ExtArgs>>): Prisma__SectorClient<$Result.GetResult<Prisma.$SectorPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Sector.
     * @param {SectorUpdateArgs} args - Arguments to update one Sector.
     * @example
     * // Update one Sector
     * const sector = await prisma.sector.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SectorUpdateArgs>(args: SelectSubset<T, SectorUpdateArgs<ExtArgs>>): Prisma__SectorClient<$Result.GetResult<Prisma.$SectorPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Sectors.
     * @param {SectorDeleteManyArgs} args - Arguments to filter Sectors to delete.
     * @example
     * // Delete a few Sectors
     * const { count } = await prisma.sector.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SectorDeleteManyArgs>(args?: SelectSubset<T, SectorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sectors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sectors
     * const sector = await prisma.sector.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SectorUpdateManyArgs>(args: SelectSubset<T, SectorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sectors and returns the data updated in the database.
     * @param {SectorUpdateManyAndReturnArgs} args - Arguments to update many Sectors.
     * @example
     * // Update many Sectors
     * const sector = await prisma.sector.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sectors and only return the `id`
     * const sectorWithIdOnly = await prisma.sector.updateManyAndReturn({
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
    updateManyAndReturn<T extends SectorUpdateManyAndReturnArgs>(args: SelectSubset<T, SectorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectorPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Sector.
     * @param {SectorUpsertArgs} args - Arguments to update or create a Sector.
     * @example
     * // Update or create a Sector
     * const sector = await prisma.sector.upsert({
     *   create: {
     *     // ... data to create a Sector
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sector we want to update
     *   }
     * })
     */
    upsert<T extends SectorUpsertArgs>(args: SelectSubset<T, SectorUpsertArgs<ExtArgs>>): Prisma__SectorClient<$Result.GetResult<Prisma.$SectorPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Sectors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectorCountArgs} args - Arguments to filter Sectors to count.
     * @example
     * // Count the number of Sectors
     * const count = await prisma.sector.count({
     *   where: {
     *     // ... the filter for the Sectors we want to count
     *   }
     * })
    **/
    count<T extends SectorCountArgs>(
      args?: Subset<T, SectorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SectorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sector.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SectorAggregateArgs>(args: Subset<T, SectorAggregateArgs>): Prisma.PrismaPromise<GetSectorAggregateType<T>>

    /**
     * Group by Sector.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectorGroupByArgs} args - Group by arguments.
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
      T extends SectorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SectorGroupByArgs['orderBy'] }
        : { orderBy?: SectorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SectorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSectorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sector model
   */
  readonly fields: SectorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sector.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SectorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    companies<T extends Sector$companiesArgs<ExtArgs> = {}>(args?: Subset<T, Sector$companiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    subIndustries<T extends Sector$subIndustriesArgs<ExtArgs> = {}>(args?: Subset<T, Sector$subIndustriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubIndustryPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the Sector model
   */ 
  interface SectorFieldRefs {
    readonly id: FieldRef<"Sector", 'Int'>
    readonly name: FieldRef<"Sector", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Sector findUnique
   */
  export type SectorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sector
     */
    select?: SectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sector
     */
    omit?: SectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectorInclude<ExtArgs> | null
    /**
     * Filter, which Sector to fetch.
     */
    where: SectorWhereUniqueInput
  }

  /**
   * Sector findUniqueOrThrow
   */
  export type SectorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sector
     */
    select?: SectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sector
     */
    omit?: SectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectorInclude<ExtArgs> | null
    /**
     * Filter, which Sector to fetch.
     */
    where: SectorWhereUniqueInput
  }

  /**
   * Sector findFirst
   */
  export type SectorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sector
     */
    select?: SectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sector
     */
    omit?: SectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectorInclude<ExtArgs> | null
    /**
     * Filter, which Sector to fetch.
     */
    where?: SectorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sectors to fetch.
     */
    orderBy?: SectorOrderByWithRelationInput | SectorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sectors.
     */
    cursor?: SectorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sectors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sectors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sectors.
     */
    distinct?: SectorScalarFieldEnum | SectorScalarFieldEnum[]
  }

  /**
   * Sector findFirstOrThrow
   */
  export type SectorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sector
     */
    select?: SectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sector
     */
    omit?: SectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectorInclude<ExtArgs> | null
    /**
     * Filter, which Sector to fetch.
     */
    where?: SectorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sectors to fetch.
     */
    orderBy?: SectorOrderByWithRelationInput | SectorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sectors.
     */
    cursor?: SectorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sectors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sectors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sectors.
     */
    distinct?: SectorScalarFieldEnum | SectorScalarFieldEnum[]
  }

  /**
   * Sector findMany
   */
  export type SectorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sector
     */
    select?: SectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sector
     */
    omit?: SectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectorInclude<ExtArgs> | null
    /**
     * Filter, which Sectors to fetch.
     */
    where?: SectorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sectors to fetch.
     */
    orderBy?: SectorOrderByWithRelationInput | SectorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sectors.
     */
    cursor?: SectorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sectors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sectors.
     */
    skip?: number
    distinct?: SectorScalarFieldEnum | SectorScalarFieldEnum[]
  }

  /**
   * Sector create
   */
  export type SectorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sector
     */
    select?: SectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sector
     */
    omit?: SectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectorInclude<ExtArgs> | null
    /**
     * The data needed to create a Sector.
     */
    data: XOR<SectorCreateInput, SectorUncheckedCreateInput>
  }

  /**
   * Sector createMany
   */
  export type SectorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sectors.
     */
    data: SectorCreateManyInput | SectorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sector createManyAndReturn
   */
  export type SectorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sector
     */
    select?: SectorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sector
     */
    omit?: SectorOmit<ExtArgs> | null
    /**
     * The data used to create many Sectors.
     */
    data: SectorCreateManyInput | SectorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sector update
   */
  export type SectorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sector
     */
    select?: SectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sector
     */
    omit?: SectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectorInclude<ExtArgs> | null
    /**
     * The data needed to update a Sector.
     */
    data: XOR<SectorUpdateInput, SectorUncheckedUpdateInput>
    /**
     * Choose, which Sector to update.
     */
    where: SectorWhereUniqueInput
  }

  /**
   * Sector updateMany
   */
  export type SectorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sectors.
     */
    data: XOR<SectorUpdateManyMutationInput, SectorUncheckedUpdateManyInput>
    /**
     * Filter which Sectors to update
     */
    where?: SectorWhereInput
    /**
     * Limit how many Sectors to update.
     */
    limit?: number
  }

  /**
   * Sector updateManyAndReturn
   */
  export type SectorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sector
     */
    select?: SectorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sector
     */
    omit?: SectorOmit<ExtArgs> | null
    /**
     * The data used to update Sectors.
     */
    data: XOR<SectorUpdateManyMutationInput, SectorUncheckedUpdateManyInput>
    /**
     * Filter which Sectors to update
     */
    where?: SectorWhereInput
    /**
     * Limit how many Sectors to update.
     */
    limit?: number
  }

  /**
   * Sector upsert
   */
  export type SectorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sector
     */
    select?: SectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sector
     */
    omit?: SectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectorInclude<ExtArgs> | null
    /**
     * The filter to search for the Sector to update in case it exists.
     */
    where: SectorWhereUniqueInput
    /**
     * In case the Sector found by the `where` argument doesn't exist, create a new Sector with this data.
     */
    create: XOR<SectorCreateInput, SectorUncheckedCreateInput>
    /**
     * In case the Sector was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SectorUpdateInput, SectorUncheckedUpdateInput>
  }

  /**
   * Sector delete
   */
  export type SectorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sector
     */
    select?: SectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sector
     */
    omit?: SectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectorInclude<ExtArgs> | null
    /**
     * Filter which Sector to delete.
     */
    where: SectorWhereUniqueInput
  }

  /**
   * Sector deleteMany
   */
  export type SectorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sectors to delete
     */
    where?: SectorWhereInput
    /**
     * Limit how many Sectors to delete.
     */
    limit?: number
  }

  /**
   * Sector.companies
   */
  export type Sector$companiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    where?: CompanyWhereInput
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    cursor?: CompanyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Sector.subIndustries
   */
  export type Sector$subIndustriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubIndustry
     */
    select?: SubIndustrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubIndustry
     */
    omit?: SubIndustryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubIndustryInclude<ExtArgs> | null
    where?: SubIndustryWhereInput
    orderBy?: SubIndustryOrderByWithRelationInput | SubIndustryOrderByWithRelationInput[]
    cursor?: SubIndustryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubIndustryScalarFieldEnum | SubIndustryScalarFieldEnum[]
  }

  /**
   * Sector without action
   */
  export type SectorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sector
     */
    select?: SectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sector
     */
    omit?: SectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectorInclude<ExtArgs> | null
  }


  /**
   * Model SubIndustry
   */

  export type AggregateSubIndustry = {
    _count: SubIndustryCountAggregateOutputType | null
    _avg: SubIndustryAvgAggregateOutputType | null
    _sum: SubIndustrySumAggregateOutputType | null
    _min: SubIndustryMinAggregateOutputType | null
    _max: SubIndustryMaxAggregateOutputType | null
  }

  export type SubIndustryAvgAggregateOutputType = {
    id: number | null
    sectorId: number | null
  }

  export type SubIndustrySumAggregateOutputType = {
    id: number | null
    sectorId: number | null
  }

  export type SubIndustryMinAggregateOutputType = {
    id: number | null
    name: string | null
    sectorId: number | null
  }

  export type SubIndustryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    sectorId: number | null
  }

  export type SubIndustryCountAggregateOutputType = {
    id: number
    name: number
    sectorId: number
    _all: number
  }


  export type SubIndustryAvgAggregateInputType = {
    id?: true
    sectorId?: true
  }

  export type SubIndustrySumAggregateInputType = {
    id?: true
    sectorId?: true
  }

  export type SubIndustryMinAggregateInputType = {
    id?: true
    name?: true
    sectorId?: true
  }

  export type SubIndustryMaxAggregateInputType = {
    id?: true
    name?: true
    sectorId?: true
  }

  export type SubIndustryCountAggregateInputType = {
    id?: true
    name?: true
    sectorId?: true
    _all?: true
  }

  export type SubIndustryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubIndustry to aggregate.
     */
    where?: SubIndustryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubIndustries to fetch.
     */
    orderBy?: SubIndustryOrderByWithRelationInput | SubIndustryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubIndustryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubIndustries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubIndustries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubIndustries
    **/
    _count?: true | SubIndustryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubIndustryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubIndustrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubIndustryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubIndustryMaxAggregateInputType
  }

  export type GetSubIndustryAggregateType<T extends SubIndustryAggregateArgs> = {
        [P in keyof T & keyof AggregateSubIndustry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubIndustry[P]>
      : GetScalarType<T[P], AggregateSubIndustry[P]>
  }




  export type SubIndustryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubIndustryWhereInput
    orderBy?: SubIndustryOrderByWithAggregationInput | SubIndustryOrderByWithAggregationInput[]
    by: SubIndustryScalarFieldEnum[] | SubIndustryScalarFieldEnum
    having?: SubIndustryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubIndustryCountAggregateInputType | true
    _avg?: SubIndustryAvgAggregateInputType
    _sum?: SubIndustrySumAggregateInputType
    _min?: SubIndustryMinAggregateInputType
    _max?: SubIndustryMaxAggregateInputType
  }

  export type SubIndustryGroupByOutputType = {
    id: number
    name: string
    sectorId: number
    _count: SubIndustryCountAggregateOutputType | null
    _avg: SubIndustryAvgAggregateOutputType | null
    _sum: SubIndustrySumAggregateOutputType | null
    _min: SubIndustryMinAggregateOutputType | null
    _max: SubIndustryMaxAggregateOutputType | null
  }

  type GetSubIndustryGroupByPayload<T extends SubIndustryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubIndustryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubIndustryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubIndustryGroupByOutputType[P]>
            : GetScalarType<T[P], SubIndustryGroupByOutputType[P]>
        }
      >
    >


  export type SubIndustrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    sectorId?: boolean
    sector?: boolean | SectorDefaultArgs<ExtArgs>
    companies?: boolean | SubIndustry$companiesArgs<ExtArgs>
    _count?: boolean | SubIndustryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subIndustry"]>

  export type SubIndustrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    sectorId?: boolean
    sector?: boolean | SectorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subIndustry"]>

  export type SubIndustrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    sectorId?: boolean
    sector?: boolean | SectorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subIndustry"]>

  export type SubIndustrySelectScalar = {
    id?: boolean
    name?: boolean
    sectorId?: boolean
  }

  export type SubIndustryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "sectorId", ExtArgs["result"]["subIndustry"]>
  export type SubIndustryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sector?: boolean | SectorDefaultArgs<ExtArgs>
    companies?: boolean | SubIndustry$companiesArgs<ExtArgs>
    _count?: boolean | SubIndustryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubIndustryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sector?: boolean | SectorDefaultArgs<ExtArgs>
  }
  export type SubIndustryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sector?: boolean | SectorDefaultArgs<ExtArgs>
  }

  export type $SubIndustryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SubIndustry"
    objects: {
      sector: Prisma.$SectorPayload<ExtArgs>
      companies: Prisma.$CompanyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      sectorId: number
    }, ExtArgs["result"]["subIndustry"]>
    composites: {}
  }

  type SubIndustryGetPayload<S extends boolean | null | undefined | SubIndustryDefaultArgs> = $Result.GetResult<Prisma.$SubIndustryPayload, S>

  type SubIndustryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubIndustryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubIndustryCountAggregateInputType | true
    }

  export interface SubIndustryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubIndustry'], meta: { name: 'SubIndustry' } }
    /**
     * Find zero or one SubIndustry that matches the filter.
     * @param {SubIndustryFindUniqueArgs} args - Arguments to find a SubIndustry
     * @example
     * // Get one SubIndustry
     * const subIndustry = await prisma.subIndustry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubIndustryFindUniqueArgs>(args: SelectSubset<T, SubIndustryFindUniqueArgs<ExtArgs>>): Prisma__SubIndustryClient<$Result.GetResult<Prisma.$SubIndustryPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one SubIndustry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubIndustryFindUniqueOrThrowArgs} args - Arguments to find a SubIndustry
     * @example
     * // Get one SubIndustry
     * const subIndustry = await prisma.subIndustry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubIndustryFindUniqueOrThrowArgs>(args: SelectSubset<T, SubIndustryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubIndustryClient<$Result.GetResult<Prisma.$SubIndustryPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first SubIndustry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubIndustryFindFirstArgs} args - Arguments to find a SubIndustry
     * @example
     * // Get one SubIndustry
     * const subIndustry = await prisma.subIndustry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubIndustryFindFirstArgs>(args?: SelectSubset<T, SubIndustryFindFirstArgs<ExtArgs>>): Prisma__SubIndustryClient<$Result.GetResult<Prisma.$SubIndustryPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first SubIndustry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubIndustryFindFirstOrThrowArgs} args - Arguments to find a SubIndustry
     * @example
     * // Get one SubIndustry
     * const subIndustry = await prisma.subIndustry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubIndustryFindFirstOrThrowArgs>(args?: SelectSubset<T, SubIndustryFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubIndustryClient<$Result.GetResult<Prisma.$SubIndustryPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more SubIndustries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubIndustryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubIndustries
     * const subIndustries = await prisma.subIndustry.findMany()
     * 
     * // Get first 10 SubIndustries
     * const subIndustries = await prisma.subIndustry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subIndustryWithIdOnly = await prisma.subIndustry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubIndustryFindManyArgs>(args?: SelectSubset<T, SubIndustryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubIndustryPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a SubIndustry.
     * @param {SubIndustryCreateArgs} args - Arguments to create a SubIndustry.
     * @example
     * // Create one SubIndustry
     * const SubIndustry = await prisma.subIndustry.create({
     *   data: {
     *     // ... data to create a SubIndustry
     *   }
     * })
     * 
     */
    create<T extends SubIndustryCreateArgs>(args: SelectSubset<T, SubIndustryCreateArgs<ExtArgs>>): Prisma__SubIndustryClient<$Result.GetResult<Prisma.$SubIndustryPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many SubIndustries.
     * @param {SubIndustryCreateManyArgs} args - Arguments to create many SubIndustries.
     * @example
     * // Create many SubIndustries
     * const subIndustry = await prisma.subIndustry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubIndustryCreateManyArgs>(args?: SelectSubset<T, SubIndustryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SubIndustries and returns the data saved in the database.
     * @param {SubIndustryCreateManyAndReturnArgs} args - Arguments to create many SubIndustries.
     * @example
     * // Create many SubIndustries
     * const subIndustry = await prisma.subIndustry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SubIndustries and only return the `id`
     * const subIndustryWithIdOnly = await prisma.subIndustry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubIndustryCreateManyAndReturnArgs>(args?: SelectSubset<T, SubIndustryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubIndustryPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a SubIndustry.
     * @param {SubIndustryDeleteArgs} args - Arguments to delete one SubIndustry.
     * @example
     * // Delete one SubIndustry
     * const SubIndustry = await prisma.subIndustry.delete({
     *   where: {
     *     // ... filter to delete one SubIndustry
     *   }
     * })
     * 
     */
    delete<T extends SubIndustryDeleteArgs>(args: SelectSubset<T, SubIndustryDeleteArgs<ExtArgs>>): Prisma__SubIndustryClient<$Result.GetResult<Prisma.$SubIndustryPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one SubIndustry.
     * @param {SubIndustryUpdateArgs} args - Arguments to update one SubIndustry.
     * @example
     * // Update one SubIndustry
     * const subIndustry = await prisma.subIndustry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubIndustryUpdateArgs>(args: SelectSubset<T, SubIndustryUpdateArgs<ExtArgs>>): Prisma__SubIndustryClient<$Result.GetResult<Prisma.$SubIndustryPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more SubIndustries.
     * @param {SubIndustryDeleteManyArgs} args - Arguments to filter SubIndustries to delete.
     * @example
     * // Delete a few SubIndustries
     * const { count } = await prisma.subIndustry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubIndustryDeleteManyArgs>(args?: SelectSubset<T, SubIndustryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubIndustries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubIndustryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubIndustries
     * const subIndustry = await prisma.subIndustry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubIndustryUpdateManyArgs>(args: SelectSubset<T, SubIndustryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubIndustries and returns the data updated in the database.
     * @param {SubIndustryUpdateManyAndReturnArgs} args - Arguments to update many SubIndustries.
     * @example
     * // Update many SubIndustries
     * const subIndustry = await prisma.subIndustry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SubIndustries and only return the `id`
     * const subIndustryWithIdOnly = await prisma.subIndustry.updateManyAndReturn({
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
    updateManyAndReturn<T extends SubIndustryUpdateManyAndReturnArgs>(args: SelectSubset<T, SubIndustryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubIndustryPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one SubIndustry.
     * @param {SubIndustryUpsertArgs} args - Arguments to update or create a SubIndustry.
     * @example
     * // Update or create a SubIndustry
     * const subIndustry = await prisma.subIndustry.upsert({
     *   create: {
     *     // ... data to create a SubIndustry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubIndustry we want to update
     *   }
     * })
     */
    upsert<T extends SubIndustryUpsertArgs>(args: SelectSubset<T, SubIndustryUpsertArgs<ExtArgs>>): Prisma__SubIndustryClient<$Result.GetResult<Prisma.$SubIndustryPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of SubIndustries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubIndustryCountArgs} args - Arguments to filter SubIndustries to count.
     * @example
     * // Count the number of SubIndustries
     * const count = await prisma.subIndustry.count({
     *   where: {
     *     // ... the filter for the SubIndustries we want to count
     *   }
     * })
    **/
    count<T extends SubIndustryCountArgs>(
      args?: Subset<T, SubIndustryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubIndustryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubIndustry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubIndustryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubIndustryAggregateArgs>(args: Subset<T, SubIndustryAggregateArgs>): Prisma.PrismaPromise<GetSubIndustryAggregateType<T>>

    /**
     * Group by SubIndustry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubIndustryGroupByArgs} args - Group by arguments.
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
      T extends SubIndustryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubIndustryGroupByArgs['orderBy'] }
        : { orderBy?: SubIndustryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubIndustryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubIndustryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubIndustry model
   */
  readonly fields: SubIndustryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubIndustry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubIndustryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sector<T extends SectorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SectorDefaultArgs<ExtArgs>>): Prisma__SectorClient<$Result.GetResult<Prisma.$SectorPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    companies<T extends SubIndustry$companiesArgs<ExtArgs> = {}>(args?: Subset<T, SubIndustry$companiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the SubIndustry model
   */ 
  interface SubIndustryFieldRefs {
    readonly id: FieldRef<"SubIndustry", 'Int'>
    readonly name: FieldRef<"SubIndustry", 'String'>
    readonly sectorId: FieldRef<"SubIndustry", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SubIndustry findUnique
   */
  export type SubIndustryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubIndustry
     */
    select?: SubIndustrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubIndustry
     */
    omit?: SubIndustryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubIndustryInclude<ExtArgs> | null
    /**
     * Filter, which SubIndustry to fetch.
     */
    where: SubIndustryWhereUniqueInput
  }

  /**
   * SubIndustry findUniqueOrThrow
   */
  export type SubIndustryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubIndustry
     */
    select?: SubIndustrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubIndustry
     */
    omit?: SubIndustryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubIndustryInclude<ExtArgs> | null
    /**
     * Filter, which SubIndustry to fetch.
     */
    where: SubIndustryWhereUniqueInput
  }

  /**
   * SubIndustry findFirst
   */
  export type SubIndustryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubIndustry
     */
    select?: SubIndustrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubIndustry
     */
    omit?: SubIndustryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubIndustryInclude<ExtArgs> | null
    /**
     * Filter, which SubIndustry to fetch.
     */
    where?: SubIndustryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubIndustries to fetch.
     */
    orderBy?: SubIndustryOrderByWithRelationInput | SubIndustryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubIndustries.
     */
    cursor?: SubIndustryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubIndustries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubIndustries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubIndustries.
     */
    distinct?: SubIndustryScalarFieldEnum | SubIndustryScalarFieldEnum[]
  }

  /**
   * SubIndustry findFirstOrThrow
   */
  export type SubIndustryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubIndustry
     */
    select?: SubIndustrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubIndustry
     */
    omit?: SubIndustryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubIndustryInclude<ExtArgs> | null
    /**
     * Filter, which SubIndustry to fetch.
     */
    where?: SubIndustryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubIndustries to fetch.
     */
    orderBy?: SubIndustryOrderByWithRelationInput | SubIndustryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubIndustries.
     */
    cursor?: SubIndustryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubIndustries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubIndustries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubIndustries.
     */
    distinct?: SubIndustryScalarFieldEnum | SubIndustryScalarFieldEnum[]
  }

  /**
   * SubIndustry findMany
   */
  export type SubIndustryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubIndustry
     */
    select?: SubIndustrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubIndustry
     */
    omit?: SubIndustryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubIndustryInclude<ExtArgs> | null
    /**
     * Filter, which SubIndustries to fetch.
     */
    where?: SubIndustryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubIndustries to fetch.
     */
    orderBy?: SubIndustryOrderByWithRelationInput | SubIndustryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubIndustries.
     */
    cursor?: SubIndustryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubIndustries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubIndustries.
     */
    skip?: number
    distinct?: SubIndustryScalarFieldEnum | SubIndustryScalarFieldEnum[]
  }

  /**
   * SubIndustry create
   */
  export type SubIndustryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubIndustry
     */
    select?: SubIndustrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubIndustry
     */
    omit?: SubIndustryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubIndustryInclude<ExtArgs> | null
    /**
     * The data needed to create a SubIndustry.
     */
    data: XOR<SubIndustryCreateInput, SubIndustryUncheckedCreateInput>
  }

  /**
   * SubIndustry createMany
   */
  export type SubIndustryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubIndustries.
     */
    data: SubIndustryCreateManyInput | SubIndustryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubIndustry createManyAndReturn
   */
  export type SubIndustryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubIndustry
     */
    select?: SubIndustrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubIndustry
     */
    omit?: SubIndustryOmit<ExtArgs> | null
    /**
     * The data used to create many SubIndustries.
     */
    data: SubIndustryCreateManyInput | SubIndustryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubIndustryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubIndustry update
   */
  export type SubIndustryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubIndustry
     */
    select?: SubIndustrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubIndustry
     */
    omit?: SubIndustryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubIndustryInclude<ExtArgs> | null
    /**
     * The data needed to update a SubIndustry.
     */
    data: XOR<SubIndustryUpdateInput, SubIndustryUncheckedUpdateInput>
    /**
     * Choose, which SubIndustry to update.
     */
    where: SubIndustryWhereUniqueInput
  }

  /**
   * SubIndustry updateMany
   */
  export type SubIndustryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubIndustries.
     */
    data: XOR<SubIndustryUpdateManyMutationInput, SubIndustryUncheckedUpdateManyInput>
    /**
     * Filter which SubIndustries to update
     */
    where?: SubIndustryWhereInput
    /**
     * Limit how many SubIndustries to update.
     */
    limit?: number
  }

  /**
   * SubIndustry updateManyAndReturn
   */
  export type SubIndustryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubIndustry
     */
    select?: SubIndustrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubIndustry
     */
    omit?: SubIndustryOmit<ExtArgs> | null
    /**
     * The data used to update SubIndustries.
     */
    data: XOR<SubIndustryUpdateManyMutationInput, SubIndustryUncheckedUpdateManyInput>
    /**
     * Filter which SubIndustries to update
     */
    where?: SubIndustryWhereInput
    /**
     * Limit how many SubIndustries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubIndustryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubIndustry upsert
   */
  export type SubIndustryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubIndustry
     */
    select?: SubIndustrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubIndustry
     */
    omit?: SubIndustryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubIndustryInclude<ExtArgs> | null
    /**
     * The filter to search for the SubIndustry to update in case it exists.
     */
    where: SubIndustryWhereUniqueInput
    /**
     * In case the SubIndustry found by the `where` argument doesn't exist, create a new SubIndustry with this data.
     */
    create: XOR<SubIndustryCreateInput, SubIndustryUncheckedCreateInput>
    /**
     * In case the SubIndustry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubIndustryUpdateInput, SubIndustryUncheckedUpdateInput>
  }

  /**
   * SubIndustry delete
   */
  export type SubIndustryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubIndustry
     */
    select?: SubIndustrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubIndustry
     */
    omit?: SubIndustryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubIndustryInclude<ExtArgs> | null
    /**
     * Filter which SubIndustry to delete.
     */
    where: SubIndustryWhereUniqueInput
  }

  /**
   * SubIndustry deleteMany
   */
  export type SubIndustryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubIndustries to delete
     */
    where?: SubIndustryWhereInput
    /**
     * Limit how many SubIndustries to delete.
     */
    limit?: number
  }

  /**
   * SubIndustry.companies
   */
  export type SubIndustry$companiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    where?: CompanyWhereInput
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    cursor?: CompanyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * SubIndustry without action
   */
  export type SubIndustryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubIndustry
     */
    select?: SubIndustrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubIndustry
     */
    omit?: SubIndustryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubIndustryInclude<ExtArgs> | null
  }


  /**
   * Model FinancialData
   */

  export type AggregateFinancialData = {
    _count: FinancialDataCountAggregateOutputType | null
    _avg: FinancialDataAvgAggregateOutputType | null
    _sum: FinancialDataSumAggregateOutputType | null
    _min: FinancialDataMinAggregateOutputType | null
    _max: FinancialDataMaxAggregateOutputType | null
  }

  export type FinancialDataAvgAggregateOutputType = {
    id: number | null
    companyId: number | null
    year: number | null
    revenue: number | null
    netIncome: number | null
    grossProfit: number | null
    operatingProfit: number | null
    operatingExpenses: number | null
    costOfSales: number | null
  }

  export type FinancialDataSumAggregateOutputType = {
    id: number | null
    companyId: number | null
    year: number | null
    revenue: number | null
    netIncome: number | null
    grossProfit: number | null
    operatingProfit: number | null
    operatingExpenses: number | null
    costOfSales: number | null
  }

  export type FinancialDataMinAggregateOutputType = {
    id: number | null
    companyId: number | null
    year: number | null
    revenue: number | null
    netIncome: number | null
    grossProfit: number | null
    operatingProfit: number | null
    operatingExpenses: number | null
    costOfSales: number | null
  }

  export type FinancialDataMaxAggregateOutputType = {
    id: number | null
    companyId: number | null
    year: number | null
    revenue: number | null
    netIncome: number | null
    grossProfit: number | null
    operatingProfit: number | null
    operatingExpenses: number | null
    costOfSales: number | null
  }

  export type FinancialDataCountAggregateOutputType = {
    id: number
    companyId: number
    year: number
    revenue: number
    netIncome: number
    grossProfit: number
    operatingProfit: number
    operatingExpenses: number
    costOfSales: number
    _all: number
  }


  export type FinancialDataAvgAggregateInputType = {
    id?: true
    companyId?: true
    year?: true
    revenue?: true
    netIncome?: true
    grossProfit?: true
    operatingProfit?: true
    operatingExpenses?: true
    costOfSales?: true
  }

  export type FinancialDataSumAggregateInputType = {
    id?: true
    companyId?: true
    year?: true
    revenue?: true
    netIncome?: true
    grossProfit?: true
    operatingProfit?: true
    operatingExpenses?: true
    costOfSales?: true
  }

  export type FinancialDataMinAggregateInputType = {
    id?: true
    companyId?: true
    year?: true
    revenue?: true
    netIncome?: true
    grossProfit?: true
    operatingProfit?: true
    operatingExpenses?: true
    costOfSales?: true
  }

  export type FinancialDataMaxAggregateInputType = {
    id?: true
    companyId?: true
    year?: true
    revenue?: true
    netIncome?: true
    grossProfit?: true
    operatingProfit?: true
    operatingExpenses?: true
    costOfSales?: true
  }

  export type FinancialDataCountAggregateInputType = {
    id?: true
    companyId?: true
    year?: true
    revenue?: true
    netIncome?: true
    grossProfit?: true
    operatingProfit?: true
    operatingExpenses?: true
    costOfSales?: true
    _all?: true
  }

  export type FinancialDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FinancialData to aggregate.
     */
    where?: FinancialDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinancialData to fetch.
     */
    orderBy?: FinancialDataOrderByWithRelationInput | FinancialDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FinancialDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinancialData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinancialData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FinancialData
    **/
    _count?: true | FinancialDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FinancialDataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FinancialDataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FinancialDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FinancialDataMaxAggregateInputType
  }

  export type GetFinancialDataAggregateType<T extends FinancialDataAggregateArgs> = {
        [P in keyof T & keyof AggregateFinancialData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFinancialData[P]>
      : GetScalarType<T[P], AggregateFinancialData[P]>
  }




  export type FinancialDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FinancialDataWhereInput
    orderBy?: FinancialDataOrderByWithAggregationInput | FinancialDataOrderByWithAggregationInput[]
    by: FinancialDataScalarFieldEnum[] | FinancialDataScalarFieldEnum
    having?: FinancialDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FinancialDataCountAggregateInputType | true
    _avg?: FinancialDataAvgAggregateInputType
    _sum?: FinancialDataSumAggregateInputType
    _min?: FinancialDataMinAggregateInputType
    _max?: FinancialDataMaxAggregateInputType
  }

  export type FinancialDataGroupByOutputType = {
    id: number
    companyId: number
    year: number
    revenue: number | null
    netIncome: number | null
    grossProfit: number | null
    operatingProfit: number | null
    operatingExpenses: number | null
    costOfSales: number | null
    _count: FinancialDataCountAggregateOutputType | null
    _avg: FinancialDataAvgAggregateOutputType | null
    _sum: FinancialDataSumAggregateOutputType | null
    _min: FinancialDataMinAggregateOutputType | null
    _max: FinancialDataMaxAggregateOutputType | null
  }

  type GetFinancialDataGroupByPayload<T extends FinancialDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FinancialDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FinancialDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FinancialDataGroupByOutputType[P]>
            : GetScalarType<T[P], FinancialDataGroupByOutputType[P]>
        }
      >
    >


  export type FinancialDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    year?: boolean
    revenue?: boolean
    netIncome?: boolean
    grossProfit?: boolean
    operatingProfit?: boolean
    operatingExpenses?: boolean
    costOfSales?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["financialData"]>

  export type FinancialDataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    year?: boolean
    revenue?: boolean
    netIncome?: boolean
    grossProfit?: boolean
    operatingProfit?: boolean
    operatingExpenses?: boolean
    costOfSales?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["financialData"]>

  export type FinancialDataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    year?: boolean
    revenue?: boolean
    netIncome?: boolean
    grossProfit?: boolean
    operatingProfit?: boolean
    operatingExpenses?: boolean
    costOfSales?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["financialData"]>

  export type FinancialDataSelectScalar = {
    id?: boolean
    companyId?: boolean
    year?: boolean
    revenue?: boolean
    netIncome?: boolean
    grossProfit?: boolean
    operatingProfit?: boolean
    operatingExpenses?: boolean
    costOfSales?: boolean
  }

  export type FinancialDataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "companyId" | "year" | "revenue" | "netIncome" | "grossProfit" | "operatingProfit" | "operatingExpenses" | "costOfSales", ExtArgs["result"]["financialData"]>
  export type FinancialDataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type FinancialDataIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type FinancialDataIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }

  export type $FinancialDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FinancialData"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      companyId: number
      year: number
      revenue: number | null
      netIncome: number | null
      grossProfit: number | null
      operatingProfit: number | null
      operatingExpenses: number | null
      costOfSales: number | null
    }, ExtArgs["result"]["financialData"]>
    composites: {}
  }

  type FinancialDataGetPayload<S extends boolean | null | undefined | FinancialDataDefaultArgs> = $Result.GetResult<Prisma.$FinancialDataPayload, S>

  type FinancialDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FinancialDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FinancialDataCountAggregateInputType | true
    }

  export interface FinancialDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FinancialData'], meta: { name: 'FinancialData' } }
    /**
     * Find zero or one FinancialData that matches the filter.
     * @param {FinancialDataFindUniqueArgs} args - Arguments to find a FinancialData
     * @example
     * // Get one FinancialData
     * const financialData = await prisma.financialData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FinancialDataFindUniqueArgs>(args: SelectSubset<T, FinancialDataFindUniqueArgs<ExtArgs>>): Prisma__FinancialDataClient<$Result.GetResult<Prisma.$FinancialDataPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one FinancialData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FinancialDataFindUniqueOrThrowArgs} args - Arguments to find a FinancialData
     * @example
     * // Get one FinancialData
     * const financialData = await prisma.financialData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FinancialDataFindUniqueOrThrowArgs>(args: SelectSubset<T, FinancialDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FinancialDataClient<$Result.GetResult<Prisma.$FinancialDataPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first FinancialData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialDataFindFirstArgs} args - Arguments to find a FinancialData
     * @example
     * // Get one FinancialData
     * const financialData = await prisma.financialData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FinancialDataFindFirstArgs>(args?: SelectSubset<T, FinancialDataFindFirstArgs<ExtArgs>>): Prisma__FinancialDataClient<$Result.GetResult<Prisma.$FinancialDataPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first FinancialData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialDataFindFirstOrThrowArgs} args - Arguments to find a FinancialData
     * @example
     * // Get one FinancialData
     * const financialData = await prisma.financialData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FinancialDataFindFirstOrThrowArgs>(args?: SelectSubset<T, FinancialDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__FinancialDataClient<$Result.GetResult<Prisma.$FinancialDataPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more FinancialData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FinancialData
     * const financialData = await prisma.financialData.findMany()
     * 
     * // Get first 10 FinancialData
     * const financialData = await prisma.financialData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const financialDataWithIdOnly = await prisma.financialData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FinancialDataFindManyArgs>(args?: SelectSubset<T, FinancialDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancialDataPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a FinancialData.
     * @param {FinancialDataCreateArgs} args - Arguments to create a FinancialData.
     * @example
     * // Create one FinancialData
     * const FinancialData = await prisma.financialData.create({
     *   data: {
     *     // ... data to create a FinancialData
     *   }
     * })
     * 
     */
    create<T extends FinancialDataCreateArgs>(args: SelectSubset<T, FinancialDataCreateArgs<ExtArgs>>): Prisma__FinancialDataClient<$Result.GetResult<Prisma.$FinancialDataPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many FinancialData.
     * @param {FinancialDataCreateManyArgs} args - Arguments to create many FinancialData.
     * @example
     * // Create many FinancialData
     * const financialData = await prisma.financialData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FinancialDataCreateManyArgs>(args?: SelectSubset<T, FinancialDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FinancialData and returns the data saved in the database.
     * @param {FinancialDataCreateManyAndReturnArgs} args - Arguments to create many FinancialData.
     * @example
     * // Create many FinancialData
     * const financialData = await prisma.financialData.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FinancialData and only return the `id`
     * const financialDataWithIdOnly = await prisma.financialData.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FinancialDataCreateManyAndReturnArgs>(args?: SelectSubset<T, FinancialDataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancialDataPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a FinancialData.
     * @param {FinancialDataDeleteArgs} args - Arguments to delete one FinancialData.
     * @example
     * // Delete one FinancialData
     * const FinancialData = await prisma.financialData.delete({
     *   where: {
     *     // ... filter to delete one FinancialData
     *   }
     * })
     * 
     */
    delete<T extends FinancialDataDeleteArgs>(args: SelectSubset<T, FinancialDataDeleteArgs<ExtArgs>>): Prisma__FinancialDataClient<$Result.GetResult<Prisma.$FinancialDataPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one FinancialData.
     * @param {FinancialDataUpdateArgs} args - Arguments to update one FinancialData.
     * @example
     * // Update one FinancialData
     * const financialData = await prisma.financialData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FinancialDataUpdateArgs>(args: SelectSubset<T, FinancialDataUpdateArgs<ExtArgs>>): Prisma__FinancialDataClient<$Result.GetResult<Prisma.$FinancialDataPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more FinancialData.
     * @param {FinancialDataDeleteManyArgs} args - Arguments to filter FinancialData to delete.
     * @example
     * // Delete a few FinancialData
     * const { count } = await prisma.financialData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FinancialDataDeleteManyArgs>(args?: SelectSubset<T, FinancialDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FinancialData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FinancialData
     * const financialData = await prisma.financialData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FinancialDataUpdateManyArgs>(args: SelectSubset<T, FinancialDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FinancialData and returns the data updated in the database.
     * @param {FinancialDataUpdateManyAndReturnArgs} args - Arguments to update many FinancialData.
     * @example
     * // Update many FinancialData
     * const financialData = await prisma.financialData.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FinancialData and only return the `id`
     * const financialDataWithIdOnly = await prisma.financialData.updateManyAndReturn({
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
    updateManyAndReturn<T extends FinancialDataUpdateManyAndReturnArgs>(args: SelectSubset<T, FinancialDataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancialDataPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one FinancialData.
     * @param {FinancialDataUpsertArgs} args - Arguments to update or create a FinancialData.
     * @example
     * // Update or create a FinancialData
     * const financialData = await prisma.financialData.upsert({
     *   create: {
     *     // ... data to create a FinancialData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FinancialData we want to update
     *   }
     * })
     */
    upsert<T extends FinancialDataUpsertArgs>(args: SelectSubset<T, FinancialDataUpsertArgs<ExtArgs>>): Prisma__FinancialDataClient<$Result.GetResult<Prisma.$FinancialDataPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of FinancialData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialDataCountArgs} args - Arguments to filter FinancialData to count.
     * @example
     * // Count the number of FinancialData
     * const count = await prisma.financialData.count({
     *   where: {
     *     // ... the filter for the FinancialData we want to count
     *   }
     * })
    **/
    count<T extends FinancialDataCountArgs>(
      args?: Subset<T, FinancialDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FinancialDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FinancialData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FinancialDataAggregateArgs>(args: Subset<T, FinancialDataAggregateArgs>): Prisma.PrismaPromise<GetFinancialDataAggregateType<T>>

    /**
     * Group by FinancialData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialDataGroupByArgs} args - Group by arguments.
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
      T extends FinancialDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FinancialDataGroupByArgs['orderBy'] }
        : { orderBy?: FinancialDataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FinancialDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFinancialDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FinancialData model
   */
  readonly fields: FinancialDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FinancialData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FinancialDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the FinancialData model
   */ 
  interface FinancialDataFieldRefs {
    readonly id: FieldRef<"FinancialData", 'Int'>
    readonly companyId: FieldRef<"FinancialData", 'Int'>
    readonly year: FieldRef<"FinancialData", 'Int'>
    readonly revenue: FieldRef<"FinancialData", 'Float'>
    readonly netIncome: FieldRef<"FinancialData", 'Float'>
    readonly grossProfit: FieldRef<"FinancialData", 'Float'>
    readonly operatingProfit: FieldRef<"FinancialData", 'Float'>
    readonly operatingExpenses: FieldRef<"FinancialData", 'Float'>
    readonly costOfSales: FieldRef<"FinancialData", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * FinancialData findUnique
   */
  export type FinancialDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialData
     */
    select?: FinancialDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialData
     */
    omit?: FinancialDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialDataInclude<ExtArgs> | null
    /**
     * Filter, which FinancialData to fetch.
     */
    where: FinancialDataWhereUniqueInput
  }

  /**
   * FinancialData findUniqueOrThrow
   */
  export type FinancialDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialData
     */
    select?: FinancialDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialData
     */
    omit?: FinancialDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialDataInclude<ExtArgs> | null
    /**
     * Filter, which FinancialData to fetch.
     */
    where: FinancialDataWhereUniqueInput
  }

  /**
   * FinancialData findFirst
   */
  export type FinancialDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialData
     */
    select?: FinancialDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialData
     */
    omit?: FinancialDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialDataInclude<ExtArgs> | null
    /**
     * Filter, which FinancialData to fetch.
     */
    where?: FinancialDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinancialData to fetch.
     */
    orderBy?: FinancialDataOrderByWithRelationInput | FinancialDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FinancialData.
     */
    cursor?: FinancialDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinancialData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinancialData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FinancialData.
     */
    distinct?: FinancialDataScalarFieldEnum | FinancialDataScalarFieldEnum[]
  }

  /**
   * FinancialData findFirstOrThrow
   */
  export type FinancialDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialData
     */
    select?: FinancialDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialData
     */
    omit?: FinancialDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialDataInclude<ExtArgs> | null
    /**
     * Filter, which FinancialData to fetch.
     */
    where?: FinancialDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinancialData to fetch.
     */
    orderBy?: FinancialDataOrderByWithRelationInput | FinancialDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FinancialData.
     */
    cursor?: FinancialDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinancialData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinancialData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FinancialData.
     */
    distinct?: FinancialDataScalarFieldEnum | FinancialDataScalarFieldEnum[]
  }

  /**
   * FinancialData findMany
   */
  export type FinancialDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialData
     */
    select?: FinancialDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialData
     */
    omit?: FinancialDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialDataInclude<ExtArgs> | null
    /**
     * Filter, which FinancialData to fetch.
     */
    where?: FinancialDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinancialData to fetch.
     */
    orderBy?: FinancialDataOrderByWithRelationInput | FinancialDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FinancialData.
     */
    cursor?: FinancialDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinancialData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinancialData.
     */
    skip?: number
    distinct?: FinancialDataScalarFieldEnum | FinancialDataScalarFieldEnum[]
  }

  /**
   * FinancialData create
   */
  export type FinancialDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialData
     */
    select?: FinancialDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialData
     */
    omit?: FinancialDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialDataInclude<ExtArgs> | null
    /**
     * The data needed to create a FinancialData.
     */
    data: XOR<FinancialDataCreateInput, FinancialDataUncheckedCreateInput>
  }

  /**
   * FinancialData createMany
   */
  export type FinancialDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FinancialData.
     */
    data: FinancialDataCreateManyInput | FinancialDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FinancialData createManyAndReturn
   */
  export type FinancialDataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialData
     */
    select?: FinancialDataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialData
     */
    omit?: FinancialDataOmit<ExtArgs> | null
    /**
     * The data used to create many FinancialData.
     */
    data: FinancialDataCreateManyInput | FinancialDataCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialDataIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FinancialData update
   */
  export type FinancialDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialData
     */
    select?: FinancialDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialData
     */
    omit?: FinancialDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialDataInclude<ExtArgs> | null
    /**
     * The data needed to update a FinancialData.
     */
    data: XOR<FinancialDataUpdateInput, FinancialDataUncheckedUpdateInput>
    /**
     * Choose, which FinancialData to update.
     */
    where: FinancialDataWhereUniqueInput
  }

  /**
   * FinancialData updateMany
   */
  export type FinancialDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FinancialData.
     */
    data: XOR<FinancialDataUpdateManyMutationInput, FinancialDataUncheckedUpdateManyInput>
    /**
     * Filter which FinancialData to update
     */
    where?: FinancialDataWhereInput
    /**
     * Limit how many FinancialData to update.
     */
    limit?: number
  }

  /**
   * FinancialData updateManyAndReturn
   */
  export type FinancialDataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialData
     */
    select?: FinancialDataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialData
     */
    omit?: FinancialDataOmit<ExtArgs> | null
    /**
     * The data used to update FinancialData.
     */
    data: XOR<FinancialDataUpdateManyMutationInput, FinancialDataUncheckedUpdateManyInput>
    /**
     * Filter which FinancialData to update
     */
    where?: FinancialDataWhereInput
    /**
     * Limit how many FinancialData to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialDataIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FinancialData upsert
   */
  export type FinancialDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialData
     */
    select?: FinancialDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialData
     */
    omit?: FinancialDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialDataInclude<ExtArgs> | null
    /**
     * The filter to search for the FinancialData to update in case it exists.
     */
    where: FinancialDataWhereUniqueInput
    /**
     * In case the FinancialData found by the `where` argument doesn't exist, create a new FinancialData with this data.
     */
    create: XOR<FinancialDataCreateInput, FinancialDataUncheckedCreateInput>
    /**
     * In case the FinancialData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FinancialDataUpdateInput, FinancialDataUncheckedUpdateInput>
  }

  /**
   * FinancialData delete
   */
  export type FinancialDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialData
     */
    select?: FinancialDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialData
     */
    omit?: FinancialDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialDataInclude<ExtArgs> | null
    /**
     * Filter which FinancialData to delete.
     */
    where: FinancialDataWhereUniqueInput
  }

  /**
   * FinancialData deleteMany
   */
  export type FinancialDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FinancialData to delete
     */
    where?: FinancialDataWhereInput
    /**
     * Limit how many FinancialData to delete.
     */
    limit?: number
  }

  /**
   * FinancialData without action
   */
  export type FinancialDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialData
     */
    select?: FinancialDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialData
     */
    omit?: FinancialDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialDataInclude<ExtArgs> | null
  }


  /**
   * Model Company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  export type CompanyAvgAggregateOutputType = {
    id: number | null
    sectorId: number | null
    subIndustryId: number | null
    latestPrice: number | null
    sharesOutstanding: number | null
    valuation: number | null
    ceoId: number | null
    rivalCompanyId: number | null
  }

  export type CompanySumAggregateOutputType = {
    id: number | null
    sectorId: number | null
    subIndustryId: number | null
    latestPrice: number | null
    sharesOutstanding: number | null
    valuation: number | null
    ceoId: number | null
    rivalCompanyId: number | null
  }

  export type CompanyMinAggregateOutputType = {
    id: number | null
    name: string | null
    tickerSymbol: string | null
    description: string | null
    logoUrl: string | null
    sectorId: number | null
    subIndustryId: number | null
    latestPrice: number | null
    sharesOutstanding: number | null
    valuation: number | null
    ceoId: number | null
    rivalCompanyId: number | null
  }

  export type CompanyMaxAggregateOutputType = {
    id: number | null
    name: string | null
    tickerSymbol: string | null
    description: string | null
    logoUrl: string | null
    sectorId: number | null
    subIndustryId: number | null
    latestPrice: number | null
    sharesOutstanding: number | null
    valuation: number | null
    ceoId: number | null
    rivalCompanyId: number | null
  }

  export type CompanyCountAggregateOutputType = {
    id: number
    name: number
    tickerSymbol: number
    description: number
    logoUrl: number
    sectorId: number
    subIndustryId: number
    latestPrice: number
    sharesOutstanding: number
    valuation: number
    ceoId: number
    rivalCompanyId: number
    _all: number
  }


  export type CompanyAvgAggregateInputType = {
    id?: true
    sectorId?: true
    subIndustryId?: true
    latestPrice?: true
    sharesOutstanding?: true
    valuation?: true
    ceoId?: true
    rivalCompanyId?: true
  }

  export type CompanySumAggregateInputType = {
    id?: true
    sectorId?: true
    subIndustryId?: true
    latestPrice?: true
    sharesOutstanding?: true
    valuation?: true
    ceoId?: true
    rivalCompanyId?: true
  }

  export type CompanyMinAggregateInputType = {
    id?: true
    name?: true
    tickerSymbol?: true
    description?: true
    logoUrl?: true
    sectorId?: true
    subIndustryId?: true
    latestPrice?: true
    sharesOutstanding?: true
    valuation?: true
    ceoId?: true
    rivalCompanyId?: true
  }

  export type CompanyMaxAggregateInputType = {
    id?: true
    name?: true
    tickerSymbol?: true
    description?: true
    logoUrl?: true
    sectorId?: true
    subIndustryId?: true
    latestPrice?: true
    sharesOutstanding?: true
    valuation?: true
    ceoId?: true
    rivalCompanyId?: true
  }

  export type CompanyCountAggregateInputType = {
    id?: true
    name?: true
    tickerSymbol?: true
    description?: true
    logoUrl?: true
    sectorId?: true
    subIndustryId?: true
    latestPrice?: true
    sharesOutstanding?: true
    valuation?: true
    ceoId?: true
    rivalCompanyId?: true
    _all?: true
  }

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Company to aggregate.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Companies
    **/
    _count?: true | CompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompanyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompanySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyMaxAggregateInputType
  }

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>
  }




  export type CompanyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
    orderBy?: CompanyOrderByWithAggregationInput | CompanyOrderByWithAggregationInput[]
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum
    having?: CompanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCountAggregateInputType | true
    _avg?: CompanyAvgAggregateInputType
    _sum?: CompanySumAggregateInputType
    _min?: CompanyMinAggregateInputType
    _max?: CompanyMaxAggregateInputType
  }

  export type CompanyGroupByOutputType = {
    id: number
    name: string
    tickerSymbol: string
    description: string
    logoUrl: string | null
    sectorId: number
    subIndustryId: number
    latestPrice: number | null
    sharesOutstanding: number
    valuation: number | null
    ceoId: number | null
    rivalCompanyId: number | null
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  type GetCompanyGroupByPayload<T extends CompanyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
        }
      >
    >


  export type CompanySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    tickerSymbol?: boolean
    description?: boolean
    logoUrl?: boolean
    sectorId?: boolean
    subIndustryId?: boolean
    latestPrice?: boolean
    sharesOutstanding?: boolean
    valuation?: boolean
    ceoId?: boolean
    rivalCompanyId?: boolean
    sector?: boolean | SectorDefaultArgs<ExtArgs>
    subIndustry?: boolean | SubIndustryDefaultArgs<ExtArgs>
    ceo?: boolean | Company$ceoArgs<ExtArgs>
    stockPrices?: boolean | Company$stockPricesArgs<ExtArgs>
    newsArticles?: boolean | Company$newsArticlesArgs<ExtArgs>
    indices?: boolean | Company$indicesArgs<ExtArgs>
    financialData?: boolean | Company$financialDataArgs<ExtArgs>
    rivalCompany?: boolean | Company$rivalCompanyArgs<ExtArgs>
    rivalOf?: boolean | Company$rivalOfArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type CompanySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    tickerSymbol?: boolean
    description?: boolean
    logoUrl?: boolean
    sectorId?: boolean
    subIndustryId?: boolean
    latestPrice?: boolean
    sharesOutstanding?: boolean
    valuation?: boolean
    ceoId?: boolean
    rivalCompanyId?: boolean
    sector?: boolean | SectorDefaultArgs<ExtArgs>
    subIndustry?: boolean | SubIndustryDefaultArgs<ExtArgs>
    rivalCompany?: boolean | Company$rivalCompanyArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type CompanySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    tickerSymbol?: boolean
    description?: boolean
    logoUrl?: boolean
    sectorId?: boolean
    subIndustryId?: boolean
    latestPrice?: boolean
    sharesOutstanding?: boolean
    valuation?: boolean
    ceoId?: boolean
    rivalCompanyId?: boolean
    sector?: boolean | SectorDefaultArgs<ExtArgs>
    subIndustry?: boolean | SubIndustryDefaultArgs<ExtArgs>
    rivalCompany?: boolean | Company$rivalCompanyArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type CompanySelectScalar = {
    id?: boolean
    name?: boolean
    tickerSymbol?: boolean
    description?: boolean
    logoUrl?: boolean
    sectorId?: boolean
    subIndustryId?: boolean
    latestPrice?: boolean
    sharesOutstanding?: boolean
    valuation?: boolean
    ceoId?: boolean
    rivalCompanyId?: boolean
  }

  export type CompanyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "tickerSymbol" | "description" | "logoUrl" | "sectorId" | "subIndustryId" | "latestPrice" | "sharesOutstanding" | "valuation" | "ceoId" | "rivalCompanyId", ExtArgs["result"]["company"]>
  export type CompanyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sector?: boolean | SectorDefaultArgs<ExtArgs>
    subIndustry?: boolean | SubIndustryDefaultArgs<ExtArgs>
    ceo?: boolean | Company$ceoArgs<ExtArgs>
    stockPrices?: boolean | Company$stockPricesArgs<ExtArgs>
    newsArticles?: boolean | Company$newsArticlesArgs<ExtArgs>
    indices?: boolean | Company$indicesArgs<ExtArgs>
    financialData?: boolean | Company$financialDataArgs<ExtArgs>
    rivalCompany?: boolean | Company$rivalCompanyArgs<ExtArgs>
    rivalOf?: boolean | Company$rivalOfArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CompanyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sector?: boolean | SectorDefaultArgs<ExtArgs>
    subIndustry?: boolean | SubIndustryDefaultArgs<ExtArgs>
    rivalCompany?: boolean | Company$rivalCompanyArgs<ExtArgs>
  }
  export type CompanyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sector?: boolean | SectorDefaultArgs<ExtArgs>
    subIndustry?: boolean | SubIndustryDefaultArgs<ExtArgs>
    rivalCompany?: boolean | Company$rivalCompanyArgs<ExtArgs>
  }

  export type $CompanyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Company"
    objects: {
      sector: Prisma.$SectorPayload<ExtArgs>
      subIndustry: Prisma.$SubIndustryPayload<ExtArgs>
      ceo: Prisma.$CEOPayload<ExtArgs> | null
      stockPrices: Prisma.$StockPricePayload<ExtArgs>[]
      newsArticles: Prisma.$NewsArticlePayload<ExtArgs>[]
      indices: Prisma.$IndexCompanyPayload<ExtArgs>[]
      financialData: Prisma.$FinancialDataPayload<ExtArgs>[]
      rivalCompany: Prisma.$CompanyPayload<ExtArgs> | null
      rivalOf: Prisma.$CompanyPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      tickerSymbol: string
      description: string
      logoUrl: string | null
      sectorId: number
      subIndustryId: number
      latestPrice: number | null
      sharesOutstanding: number
      valuation: number | null
      ceoId: number | null
      rivalCompanyId: number | null
    }, ExtArgs["result"]["company"]>
    composites: {}
  }

  type CompanyGetPayload<S extends boolean | null | undefined | CompanyDefaultArgs> = $Result.GetResult<Prisma.$CompanyPayload, S>

  type CompanyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyCountAggregateInputType | true
    }

  export interface CompanyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Company'], meta: { name: 'Company' } }
    /**
     * Find zero or one Company that matches the filter.
     * @param {CompanyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyFindUniqueArgs>(args: SelectSubset<T, CompanyFindUniqueArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Company that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyFindFirstArgs>(args?: SelectSubset<T, CompanyFindFirstArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanyFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanyFindManyArgs>(args?: SelectSubset<T, CompanyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Company.
     * @param {CompanyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     * 
     */
    create<T extends CompanyCreateArgs>(args: SelectSubset<T, CompanyCreateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Companies.
     * @param {CompanyCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanyCreateManyArgs>(args?: SelectSubset<T, CompanyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Companies and returns the data saved in the database.
     * @param {CompanyCreateManyAndReturnArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompanyCreateManyAndReturnArgs>(args?: SelectSubset<T, CompanyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Company.
     * @param {CompanyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     * 
     */
    delete<T extends CompanyDeleteArgs>(args: SelectSubset<T, CompanyDeleteArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Company.
     * @param {CompanyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanyUpdateArgs>(args: SelectSubset<T, CompanyUpdateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Companies.
     * @param {CompanyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanyDeleteManyArgs>(args?: SelectSubset<T, CompanyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanyUpdateManyArgs>(args: SelectSubset<T, CompanyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies and returns the data updated in the database.
     * @param {CompanyUpdateManyAndReturnArgs} args - Arguments to update many Companies.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.updateManyAndReturn({
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
    updateManyAndReturn<T extends CompanyUpdateManyAndReturnArgs>(args: SelectSubset<T, CompanyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Company.
     * @param {CompanyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     */
    upsert<T extends CompanyUpsertArgs>(args: SelectSubset<T, CompanyUpsertArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends CompanyCountArgs>(
      args?: Subset<T, CompanyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompanyAggregateArgs>(args: Subset<T, CompanyAggregateArgs>): Prisma.PrismaPromise<GetCompanyAggregateType<T>>

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyGroupByArgs} args - Group by arguments.
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
      T extends CompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyGroupByArgs['orderBy'] }
        : { orderBy?: CompanyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Company model
   */
  readonly fields: CompanyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sector<T extends SectorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SectorDefaultArgs<ExtArgs>>): Prisma__SectorClient<$Result.GetResult<Prisma.$SectorPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    subIndustry<T extends SubIndustryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubIndustryDefaultArgs<ExtArgs>>): Prisma__SubIndustryClient<$Result.GetResult<Prisma.$SubIndustryPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    ceo<T extends Company$ceoArgs<ExtArgs> = {}>(args?: Subset<T, Company$ceoArgs<ExtArgs>>): Prisma__CEOClient<$Result.GetResult<Prisma.$CEOPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    stockPrices<T extends Company$stockPricesArgs<ExtArgs> = {}>(args?: Subset<T, Company$stockPricesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockPricePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    newsArticles<T extends Company$newsArticlesArgs<ExtArgs> = {}>(args?: Subset<T, Company$newsArticlesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    indices<T extends Company$indicesArgs<ExtArgs> = {}>(args?: Subset<T, Company$indicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IndexCompanyPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    financialData<T extends Company$financialDataArgs<ExtArgs> = {}>(args?: Subset<T, Company$financialDataArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancialDataPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    rivalCompany<T extends Company$rivalCompanyArgs<ExtArgs> = {}>(args?: Subset<T, Company$rivalCompanyArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    rivalOf<T extends Company$rivalOfArgs<ExtArgs> = {}>(args?: Subset<T, Company$rivalOfArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
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
   * Fields of the Company model
   */ 
  interface CompanyFieldRefs {
    readonly id: FieldRef<"Company", 'Int'>
    readonly name: FieldRef<"Company", 'String'>
    readonly tickerSymbol: FieldRef<"Company", 'String'>
    readonly description: FieldRef<"Company", 'String'>
    readonly logoUrl: FieldRef<"Company", 'String'>
    readonly sectorId: FieldRef<"Company", 'Int'>
    readonly subIndustryId: FieldRef<"Company", 'Int'>
    readonly latestPrice: FieldRef<"Company", 'Float'>
    readonly sharesOutstanding: FieldRef<"Company", 'Int'>
    readonly valuation: FieldRef<"Company", 'Float'>
    readonly ceoId: FieldRef<"Company", 'Int'>
    readonly rivalCompanyId: FieldRef<"Company", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Company findUnique
   */
  export type CompanyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findUniqueOrThrow
   */
  export type CompanyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findFirst
   */
  export type CompanyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findFirstOrThrow
   */
  export type CompanyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findMany
   */
  export type CompanyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company create
   */
  export type CompanyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to create a Company.
     */
    data: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
  }

  /**
   * Company createMany
   */
  export type CompanyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company createManyAndReturn
   */
  export type CompanyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Company update
   */
  export type CompanyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to update a Company.
     */
    data: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
    /**
     * Choose, which Company to update.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company updateMany
   */
  export type CompanyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company updateManyAndReturn
   */
  export type CompanyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Company upsert
   */
  export type CompanyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The filter to search for the Company to update in case it exists.
     */
    where: CompanyWhereUniqueInput
    /**
     * In case the Company found by the `where` argument doesn't exist, create a new Company with this data.
     */
    create: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
    /**
     * In case the Company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
  }

  /**
   * Company delete
   */
  export type CompanyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter which Company to delete.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company deleteMany
   */
  export type CompanyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Companies to delete
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to delete.
     */
    limit?: number
  }

  /**
   * Company.ceo
   */
  export type Company$ceoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CEO
     */
    select?: CEOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CEO
     */
    omit?: CEOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CEOInclude<ExtArgs> | null
    where?: CEOWhereInput
  }

  /**
   * Company.stockPrices
   */
  export type Company$stockPricesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockPrice
     */
    select?: StockPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockPrice
     */
    omit?: StockPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockPriceInclude<ExtArgs> | null
    where?: StockPriceWhereInput
    orderBy?: StockPriceOrderByWithRelationInput | StockPriceOrderByWithRelationInput[]
    cursor?: StockPriceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StockPriceScalarFieldEnum | StockPriceScalarFieldEnum[]
  }

  /**
   * Company.newsArticles
   */
  export type Company$newsArticlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleInclude<ExtArgs> | null
    where?: NewsArticleWhereInput
    orderBy?: NewsArticleOrderByWithRelationInput | NewsArticleOrderByWithRelationInput[]
    cursor?: NewsArticleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NewsArticleScalarFieldEnum | NewsArticleScalarFieldEnum[]
  }

  /**
   * Company.indices
   */
  export type Company$indicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexCompany
     */
    select?: IndexCompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndexCompany
     */
    omit?: IndexCompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndexCompanyInclude<ExtArgs> | null
    where?: IndexCompanyWhereInput
    orderBy?: IndexCompanyOrderByWithRelationInput | IndexCompanyOrderByWithRelationInput[]
    cursor?: IndexCompanyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IndexCompanyScalarFieldEnum | IndexCompanyScalarFieldEnum[]
  }

  /**
   * Company.financialData
   */
  export type Company$financialDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialData
     */
    select?: FinancialDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialData
     */
    omit?: FinancialDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialDataInclude<ExtArgs> | null
    where?: FinancialDataWhereInput
    orderBy?: FinancialDataOrderByWithRelationInput | FinancialDataOrderByWithRelationInput[]
    cursor?: FinancialDataWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FinancialDataScalarFieldEnum | FinancialDataScalarFieldEnum[]
  }

  /**
   * Company.rivalCompany
   */
  export type Company$rivalCompanyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    where?: CompanyWhereInput
  }

  /**
   * Company.rivalOf
   */
  export type Company$rivalOfArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    where?: CompanyWhereInput
  }

  /**
   * Company without action
   */
  export type CompanyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
  }


  /**
   * Model StockPrice
   */

  export type AggregateStockPrice = {
    _count: StockPriceCountAggregateOutputType | null
    _avg: StockPriceAvgAggregateOutputType | null
    _sum: StockPriceSumAggregateOutputType | null
    _min: StockPriceMinAggregateOutputType | null
    _max: StockPriceMaxAggregateOutputType | null
  }

  export type StockPriceAvgAggregateOutputType = {
    id: number | null
    companyId: number | null
    price: number | null
    momentum: number | null
  }

  export type StockPriceSumAggregateOutputType = {
    id: number | null
    companyId: number | null
    price: number | null
    momentum: number | null
  }

  export type StockPriceMinAggregateOutputType = {
    id: number | null
    companyId: number | null
    timestamp: Date | null
    price: number | null
    momentum: number | null
  }

  export type StockPriceMaxAggregateOutputType = {
    id: number | null
    companyId: number | null
    timestamp: Date | null
    price: number | null
    momentum: number | null
  }

  export type StockPriceCountAggregateOutputType = {
    id: number
    companyId: number
    timestamp: number
    price: number
    momentum: number
    _all: number
  }


  export type StockPriceAvgAggregateInputType = {
    id?: true
    companyId?: true
    price?: true
    momentum?: true
  }

  export type StockPriceSumAggregateInputType = {
    id?: true
    companyId?: true
    price?: true
    momentum?: true
  }

  export type StockPriceMinAggregateInputType = {
    id?: true
    companyId?: true
    timestamp?: true
    price?: true
    momentum?: true
  }

  export type StockPriceMaxAggregateInputType = {
    id?: true
    companyId?: true
    timestamp?: true
    price?: true
    momentum?: true
  }

  export type StockPriceCountAggregateInputType = {
    id?: true
    companyId?: true
    timestamp?: true
    price?: true
    momentum?: true
    _all?: true
  }

  export type StockPriceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockPrice to aggregate.
     */
    where?: StockPriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockPrices to fetch.
     */
    orderBy?: StockPriceOrderByWithRelationInput | StockPriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StockPriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockPrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockPrices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StockPrices
    **/
    _count?: true | StockPriceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StockPriceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StockPriceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StockPriceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StockPriceMaxAggregateInputType
  }

  export type GetStockPriceAggregateType<T extends StockPriceAggregateArgs> = {
        [P in keyof T & keyof AggregateStockPrice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStockPrice[P]>
      : GetScalarType<T[P], AggregateStockPrice[P]>
  }




  export type StockPriceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockPriceWhereInput
    orderBy?: StockPriceOrderByWithAggregationInput | StockPriceOrderByWithAggregationInput[]
    by: StockPriceScalarFieldEnum[] | StockPriceScalarFieldEnum
    having?: StockPriceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StockPriceCountAggregateInputType | true
    _avg?: StockPriceAvgAggregateInputType
    _sum?: StockPriceSumAggregateInputType
    _min?: StockPriceMinAggregateInputType
    _max?: StockPriceMaxAggregateInputType
  }

  export type StockPriceGroupByOutputType = {
    id: number
    companyId: number
    timestamp: Date
    price: number
    momentum: number
    _count: StockPriceCountAggregateOutputType | null
    _avg: StockPriceAvgAggregateOutputType | null
    _sum: StockPriceSumAggregateOutputType | null
    _min: StockPriceMinAggregateOutputType | null
    _max: StockPriceMaxAggregateOutputType | null
  }

  type GetStockPriceGroupByPayload<T extends StockPriceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StockPriceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StockPriceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StockPriceGroupByOutputType[P]>
            : GetScalarType<T[P], StockPriceGroupByOutputType[P]>
        }
      >
    >


  export type StockPriceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    timestamp?: boolean
    price?: boolean
    momentum?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stockPrice"]>

  export type StockPriceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    timestamp?: boolean
    price?: boolean
    momentum?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stockPrice"]>

  export type StockPriceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    timestamp?: boolean
    price?: boolean
    momentum?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stockPrice"]>

  export type StockPriceSelectScalar = {
    id?: boolean
    companyId?: boolean
    timestamp?: boolean
    price?: boolean
    momentum?: boolean
  }

  export type StockPriceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "companyId" | "timestamp" | "price" | "momentum", ExtArgs["result"]["stockPrice"]>
  export type StockPriceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type StockPriceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type StockPriceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }

  export type $StockPricePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StockPrice"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      companyId: number
      timestamp: Date
      price: number
      momentum: number
    }, ExtArgs["result"]["stockPrice"]>
    composites: {}
  }

  type StockPriceGetPayload<S extends boolean | null | undefined | StockPriceDefaultArgs> = $Result.GetResult<Prisma.$StockPricePayload, S>

  type StockPriceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StockPriceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StockPriceCountAggregateInputType | true
    }

  export interface StockPriceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StockPrice'], meta: { name: 'StockPrice' } }
    /**
     * Find zero or one StockPrice that matches the filter.
     * @param {StockPriceFindUniqueArgs} args - Arguments to find a StockPrice
     * @example
     * // Get one StockPrice
     * const stockPrice = await prisma.stockPrice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StockPriceFindUniqueArgs>(args: SelectSubset<T, StockPriceFindUniqueArgs<ExtArgs>>): Prisma__StockPriceClient<$Result.GetResult<Prisma.$StockPricePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one StockPrice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StockPriceFindUniqueOrThrowArgs} args - Arguments to find a StockPrice
     * @example
     * // Get one StockPrice
     * const stockPrice = await prisma.stockPrice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StockPriceFindUniqueOrThrowArgs>(args: SelectSubset<T, StockPriceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StockPriceClient<$Result.GetResult<Prisma.$StockPricePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first StockPrice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockPriceFindFirstArgs} args - Arguments to find a StockPrice
     * @example
     * // Get one StockPrice
     * const stockPrice = await prisma.stockPrice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StockPriceFindFirstArgs>(args?: SelectSubset<T, StockPriceFindFirstArgs<ExtArgs>>): Prisma__StockPriceClient<$Result.GetResult<Prisma.$StockPricePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first StockPrice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockPriceFindFirstOrThrowArgs} args - Arguments to find a StockPrice
     * @example
     * // Get one StockPrice
     * const stockPrice = await prisma.stockPrice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StockPriceFindFirstOrThrowArgs>(args?: SelectSubset<T, StockPriceFindFirstOrThrowArgs<ExtArgs>>): Prisma__StockPriceClient<$Result.GetResult<Prisma.$StockPricePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more StockPrices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockPriceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StockPrices
     * const stockPrices = await prisma.stockPrice.findMany()
     * 
     * // Get first 10 StockPrices
     * const stockPrices = await prisma.stockPrice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stockPriceWithIdOnly = await prisma.stockPrice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StockPriceFindManyArgs>(args?: SelectSubset<T, StockPriceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockPricePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a StockPrice.
     * @param {StockPriceCreateArgs} args - Arguments to create a StockPrice.
     * @example
     * // Create one StockPrice
     * const StockPrice = await prisma.stockPrice.create({
     *   data: {
     *     // ... data to create a StockPrice
     *   }
     * })
     * 
     */
    create<T extends StockPriceCreateArgs>(args: SelectSubset<T, StockPriceCreateArgs<ExtArgs>>): Prisma__StockPriceClient<$Result.GetResult<Prisma.$StockPricePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many StockPrices.
     * @param {StockPriceCreateManyArgs} args - Arguments to create many StockPrices.
     * @example
     * // Create many StockPrices
     * const stockPrice = await prisma.stockPrice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StockPriceCreateManyArgs>(args?: SelectSubset<T, StockPriceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StockPrices and returns the data saved in the database.
     * @param {StockPriceCreateManyAndReturnArgs} args - Arguments to create many StockPrices.
     * @example
     * // Create many StockPrices
     * const stockPrice = await prisma.stockPrice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StockPrices and only return the `id`
     * const stockPriceWithIdOnly = await prisma.stockPrice.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StockPriceCreateManyAndReturnArgs>(args?: SelectSubset<T, StockPriceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockPricePayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a StockPrice.
     * @param {StockPriceDeleteArgs} args - Arguments to delete one StockPrice.
     * @example
     * // Delete one StockPrice
     * const StockPrice = await prisma.stockPrice.delete({
     *   where: {
     *     // ... filter to delete one StockPrice
     *   }
     * })
     * 
     */
    delete<T extends StockPriceDeleteArgs>(args: SelectSubset<T, StockPriceDeleteArgs<ExtArgs>>): Prisma__StockPriceClient<$Result.GetResult<Prisma.$StockPricePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one StockPrice.
     * @param {StockPriceUpdateArgs} args - Arguments to update one StockPrice.
     * @example
     * // Update one StockPrice
     * const stockPrice = await prisma.stockPrice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StockPriceUpdateArgs>(args: SelectSubset<T, StockPriceUpdateArgs<ExtArgs>>): Prisma__StockPriceClient<$Result.GetResult<Prisma.$StockPricePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more StockPrices.
     * @param {StockPriceDeleteManyArgs} args - Arguments to filter StockPrices to delete.
     * @example
     * // Delete a few StockPrices
     * const { count } = await prisma.stockPrice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StockPriceDeleteManyArgs>(args?: SelectSubset<T, StockPriceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StockPrices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockPriceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StockPrices
     * const stockPrice = await prisma.stockPrice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StockPriceUpdateManyArgs>(args: SelectSubset<T, StockPriceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StockPrices and returns the data updated in the database.
     * @param {StockPriceUpdateManyAndReturnArgs} args - Arguments to update many StockPrices.
     * @example
     * // Update many StockPrices
     * const stockPrice = await prisma.stockPrice.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StockPrices and only return the `id`
     * const stockPriceWithIdOnly = await prisma.stockPrice.updateManyAndReturn({
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
    updateManyAndReturn<T extends StockPriceUpdateManyAndReturnArgs>(args: SelectSubset<T, StockPriceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockPricePayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one StockPrice.
     * @param {StockPriceUpsertArgs} args - Arguments to update or create a StockPrice.
     * @example
     * // Update or create a StockPrice
     * const stockPrice = await prisma.stockPrice.upsert({
     *   create: {
     *     // ... data to create a StockPrice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StockPrice we want to update
     *   }
     * })
     */
    upsert<T extends StockPriceUpsertArgs>(args: SelectSubset<T, StockPriceUpsertArgs<ExtArgs>>): Prisma__StockPriceClient<$Result.GetResult<Prisma.$StockPricePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of StockPrices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockPriceCountArgs} args - Arguments to filter StockPrices to count.
     * @example
     * // Count the number of StockPrices
     * const count = await prisma.stockPrice.count({
     *   where: {
     *     // ... the filter for the StockPrices we want to count
     *   }
     * })
    **/
    count<T extends StockPriceCountArgs>(
      args?: Subset<T, StockPriceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StockPriceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StockPrice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockPriceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StockPriceAggregateArgs>(args: Subset<T, StockPriceAggregateArgs>): Prisma.PrismaPromise<GetStockPriceAggregateType<T>>

    /**
     * Group by StockPrice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockPriceGroupByArgs} args - Group by arguments.
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
      T extends StockPriceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StockPriceGroupByArgs['orderBy'] }
        : { orderBy?: StockPriceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StockPriceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStockPriceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StockPrice model
   */
  readonly fields: StockPriceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StockPrice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StockPriceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the StockPrice model
   */ 
  interface StockPriceFieldRefs {
    readonly id: FieldRef<"StockPrice", 'Int'>
    readonly companyId: FieldRef<"StockPrice", 'Int'>
    readonly timestamp: FieldRef<"StockPrice", 'DateTime'>
    readonly price: FieldRef<"StockPrice", 'Float'>
    readonly momentum: FieldRef<"StockPrice", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * StockPrice findUnique
   */
  export type StockPriceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockPrice
     */
    select?: StockPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockPrice
     */
    omit?: StockPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockPriceInclude<ExtArgs> | null
    /**
     * Filter, which StockPrice to fetch.
     */
    where: StockPriceWhereUniqueInput
  }

  /**
   * StockPrice findUniqueOrThrow
   */
  export type StockPriceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockPrice
     */
    select?: StockPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockPrice
     */
    omit?: StockPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockPriceInclude<ExtArgs> | null
    /**
     * Filter, which StockPrice to fetch.
     */
    where: StockPriceWhereUniqueInput
  }

  /**
   * StockPrice findFirst
   */
  export type StockPriceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockPrice
     */
    select?: StockPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockPrice
     */
    omit?: StockPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockPriceInclude<ExtArgs> | null
    /**
     * Filter, which StockPrice to fetch.
     */
    where?: StockPriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockPrices to fetch.
     */
    orderBy?: StockPriceOrderByWithRelationInput | StockPriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockPrices.
     */
    cursor?: StockPriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockPrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockPrices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockPrices.
     */
    distinct?: StockPriceScalarFieldEnum | StockPriceScalarFieldEnum[]
  }

  /**
   * StockPrice findFirstOrThrow
   */
  export type StockPriceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockPrice
     */
    select?: StockPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockPrice
     */
    omit?: StockPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockPriceInclude<ExtArgs> | null
    /**
     * Filter, which StockPrice to fetch.
     */
    where?: StockPriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockPrices to fetch.
     */
    orderBy?: StockPriceOrderByWithRelationInput | StockPriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockPrices.
     */
    cursor?: StockPriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockPrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockPrices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockPrices.
     */
    distinct?: StockPriceScalarFieldEnum | StockPriceScalarFieldEnum[]
  }

  /**
   * StockPrice findMany
   */
  export type StockPriceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockPrice
     */
    select?: StockPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockPrice
     */
    omit?: StockPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockPriceInclude<ExtArgs> | null
    /**
     * Filter, which StockPrices to fetch.
     */
    where?: StockPriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockPrices to fetch.
     */
    orderBy?: StockPriceOrderByWithRelationInput | StockPriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StockPrices.
     */
    cursor?: StockPriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockPrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockPrices.
     */
    skip?: number
    distinct?: StockPriceScalarFieldEnum | StockPriceScalarFieldEnum[]
  }

  /**
   * StockPrice create
   */
  export type StockPriceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockPrice
     */
    select?: StockPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockPrice
     */
    omit?: StockPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockPriceInclude<ExtArgs> | null
    /**
     * The data needed to create a StockPrice.
     */
    data: XOR<StockPriceCreateInput, StockPriceUncheckedCreateInput>
  }

  /**
   * StockPrice createMany
   */
  export type StockPriceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StockPrices.
     */
    data: StockPriceCreateManyInput | StockPriceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StockPrice createManyAndReturn
   */
  export type StockPriceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockPrice
     */
    select?: StockPriceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StockPrice
     */
    omit?: StockPriceOmit<ExtArgs> | null
    /**
     * The data used to create many StockPrices.
     */
    data: StockPriceCreateManyInput | StockPriceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockPriceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StockPrice update
   */
  export type StockPriceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockPrice
     */
    select?: StockPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockPrice
     */
    omit?: StockPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockPriceInclude<ExtArgs> | null
    /**
     * The data needed to update a StockPrice.
     */
    data: XOR<StockPriceUpdateInput, StockPriceUncheckedUpdateInput>
    /**
     * Choose, which StockPrice to update.
     */
    where: StockPriceWhereUniqueInput
  }

  /**
   * StockPrice updateMany
   */
  export type StockPriceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StockPrices.
     */
    data: XOR<StockPriceUpdateManyMutationInput, StockPriceUncheckedUpdateManyInput>
    /**
     * Filter which StockPrices to update
     */
    where?: StockPriceWhereInput
    /**
     * Limit how many StockPrices to update.
     */
    limit?: number
  }

  /**
   * StockPrice updateManyAndReturn
   */
  export type StockPriceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockPrice
     */
    select?: StockPriceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StockPrice
     */
    omit?: StockPriceOmit<ExtArgs> | null
    /**
     * The data used to update StockPrices.
     */
    data: XOR<StockPriceUpdateManyMutationInput, StockPriceUncheckedUpdateManyInput>
    /**
     * Filter which StockPrices to update
     */
    where?: StockPriceWhereInput
    /**
     * Limit how many StockPrices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockPriceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StockPrice upsert
   */
  export type StockPriceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockPrice
     */
    select?: StockPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockPrice
     */
    omit?: StockPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockPriceInclude<ExtArgs> | null
    /**
     * The filter to search for the StockPrice to update in case it exists.
     */
    where: StockPriceWhereUniqueInput
    /**
     * In case the StockPrice found by the `where` argument doesn't exist, create a new StockPrice with this data.
     */
    create: XOR<StockPriceCreateInput, StockPriceUncheckedCreateInput>
    /**
     * In case the StockPrice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StockPriceUpdateInput, StockPriceUncheckedUpdateInput>
  }

  /**
   * StockPrice delete
   */
  export type StockPriceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockPrice
     */
    select?: StockPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockPrice
     */
    omit?: StockPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockPriceInclude<ExtArgs> | null
    /**
     * Filter which StockPrice to delete.
     */
    where: StockPriceWhereUniqueInput
  }

  /**
   * StockPrice deleteMany
   */
  export type StockPriceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockPrices to delete
     */
    where?: StockPriceWhereInput
    /**
     * Limit how many StockPrices to delete.
     */
    limit?: number
  }

  /**
   * StockPrice without action
   */
  export type StockPriceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockPrice
     */
    select?: StockPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockPrice
     */
    omit?: StockPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockPriceInclude<ExtArgs> | null
  }


  /**
   * Model NewsArticle
   */

  export type AggregateNewsArticle = {
    _count: NewsArticleCountAggregateOutputType | null
    _avg: NewsArticleAvgAggregateOutputType | null
    _sum: NewsArticleSumAggregateOutputType | null
    _min: NewsArticleMinAggregateOutputType | null
    _max: NewsArticleMaxAggregateOutputType | null
  }

  export type NewsArticleAvgAggregateOutputType = {
    id: number | null
    companyId: number | null
    sentiment: number | null
  }

  export type NewsArticleSumAggregateOutputType = {
    id: number | null
    companyId: number | null
    sentiment: number | null
  }

  export type NewsArticleMinAggregateOutputType = {
    id: number | null
    companyId: number | null
    timestamp: Date | null
    headline: string | null
    content: string | null
    sentiment: number | null
    source: string | null
    reaction: string | null
  }

  export type NewsArticleMaxAggregateOutputType = {
    id: number | null
    companyId: number | null
    timestamp: Date | null
    headline: string | null
    content: string | null
    sentiment: number | null
    source: string | null
    reaction: string | null
  }

  export type NewsArticleCountAggregateOutputType = {
    id: number
    companyId: number
    timestamp: number
    headline: number
    content: number
    sentiment: number
    source: number
    reaction: number
    _all: number
  }


  export type NewsArticleAvgAggregateInputType = {
    id?: true
    companyId?: true
    sentiment?: true
  }

  export type NewsArticleSumAggregateInputType = {
    id?: true
    companyId?: true
    sentiment?: true
  }

  export type NewsArticleMinAggregateInputType = {
    id?: true
    companyId?: true
    timestamp?: true
    headline?: true
    content?: true
    sentiment?: true
    source?: true
    reaction?: true
  }

  export type NewsArticleMaxAggregateInputType = {
    id?: true
    companyId?: true
    timestamp?: true
    headline?: true
    content?: true
    sentiment?: true
    source?: true
    reaction?: true
  }

  export type NewsArticleCountAggregateInputType = {
    id?: true
    companyId?: true
    timestamp?: true
    headline?: true
    content?: true
    sentiment?: true
    source?: true
    reaction?: true
    _all?: true
  }

  export type NewsArticleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsArticle to aggregate.
     */
    where?: NewsArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsArticles to fetch.
     */
    orderBy?: NewsArticleOrderByWithRelationInput | NewsArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NewsArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsArticles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NewsArticles
    **/
    _count?: true | NewsArticleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NewsArticleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NewsArticleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewsArticleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewsArticleMaxAggregateInputType
  }

  export type GetNewsArticleAggregateType<T extends NewsArticleAggregateArgs> = {
        [P in keyof T & keyof AggregateNewsArticle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNewsArticle[P]>
      : GetScalarType<T[P], AggregateNewsArticle[P]>
  }




  export type NewsArticleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsArticleWhereInput
    orderBy?: NewsArticleOrderByWithAggregationInput | NewsArticleOrderByWithAggregationInput[]
    by: NewsArticleScalarFieldEnum[] | NewsArticleScalarFieldEnum
    having?: NewsArticleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewsArticleCountAggregateInputType | true
    _avg?: NewsArticleAvgAggregateInputType
    _sum?: NewsArticleSumAggregateInputType
    _min?: NewsArticleMinAggregateInputType
    _max?: NewsArticleMaxAggregateInputType
  }

  export type NewsArticleGroupByOutputType = {
    id: number
    companyId: number
    timestamp: Date
    headline: string
    content: string
    sentiment: number | null
    source: string | null
    reaction: string | null
    _count: NewsArticleCountAggregateOutputType | null
    _avg: NewsArticleAvgAggregateOutputType | null
    _sum: NewsArticleSumAggregateOutputType | null
    _min: NewsArticleMinAggregateOutputType | null
    _max: NewsArticleMaxAggregateOutputType | null
  }

  type GetNewsArticleGroupByPayload<T extends NewsArticleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewsArticleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewsArticleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewsArticleGroupByOutputType[P]>
            : GetScalarType<T[P], NewsArticleGroupByOutputType[P]>
        }
      >
    >


  export type NewsArticleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    timestamp?: boolean
    headline?: boolean
    content?: boolean
    sentiment?: boolean
    source?: boolean
    reaction?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["newsArticle"]>

  export type NewsArticleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    timestamp?: boolean
    headline?: boolean
    content?: boolean
    sentiment?: boolean
    source?: boolean
    reaction?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["newsArticle"]>

  export type NewsArticleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    timestamp?: boolean
    headline?: boolean
    content?: boolean
    sentiment?: boolean
    source?: boolean
    reaction?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["newsArticle"]>

  export type NewsArticleSelectScalar = {
    id?: boolean
    companyId?: boolean
    timestamp?: boolean
    headline?: boolean
    content?: boolean
    sentiment?: boolean
    source?: boolean
    reaction?: boolean
  }

  export type NewsArticleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "companyId" | "timestamp" | "headline" | "content" | "sentiment" | "source" | "reaction", ExtArgs["result"]["newsArticle"]>
  export type NewsArticleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type NewsArticleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type NewsArticleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }

  export type $NewsArticlePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NewsArticle"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      companyId: number
      timestamp: Date
      headline: string
      content: string
      sentiment: number | null
      source: string | null
      reaction: string | null
    }, ExtArgs["result"]["newsArticle"]>
    composites: {}
  }

  type NewsArticleGetPayload<S extends boolean | null | undefined | NewsArticleDefaultArgs> = $Result.GetResult<Prisma.$NewsArticlePayload, S>

  type NewsArticleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NewsArticleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NewsArticleCountAggregateInputType | true
    }

  export interface NewsArticleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NewsArticle'], meta: { name: 'NewsArticle' } }
    /**
     * Find zero or one NewsArticle that matches the filter.
     * @param {NewsArticleFindUniqueArgs} args - Arguments to find a NewsArticle
     * @example
     * // Get one NewsArticle
     * const newsArticle = await prisma.newsArticle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NewsArticleFindUniqueArgs>(args: SelectSubset<T, NewsArticleFindUniqueArgs<ExtArgs>>): Prisma__NewsArticleClient<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one NewsArticle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NewsArticleFindUniqueOrThrowArgs} args - Arguments to find a NewsArticle
     * @example
     * // Get one NewsArticle
     * const newsArticle = await prisma.newsArticle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NewsArticleFindUniqueOrThrowArgs>(args: SelectSubset<T, NewsArticleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NewsArticleClient<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first NewsArticle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsArticleFindFirstArgs} args - Arguments to find a NewsArticle
     * @example
     * // Get one NewsArticle
     * const newsArticle = await prisma.newsArticle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NewsArticleFindFirstArgs>(args?: SelectSubset<T, NewsArticleFindFirstArgs<ExtArgs>>): Prisma__NewsArticleClient<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first NewsArticle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsArticleFindFirstOrThrowArgs} args - Arguments to find a NewsArticle
     * @example
     * // Get one NewsArticle
     * const newsArticle = await prisma.newsArticle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NewsArticleFindFirstOrThrowArgs>(args?: SelectSubset<T, NewsArticleFindFirstOrThrowArgs<ExtArgs>>): Prisma__NewsArticleClient<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more NewsArticles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsArticleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NewsArticles
     * const newsArticles = await prisma.newsArticle.findMany()
     * 
     * // Get first 10 NewsArticles
     * const newsArticles = await prisma.newsArticle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const newsArticleWithIdOnly = await prisma.newsArticle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NewsArticleFindManyArgs>(args?: SelectSubset<T, NewsArticleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a NewsArticle.
     * @param {NewsArticleCreateArgs} args - Arguments to create a NewsArticle.
     * @example
     * // Create one NewsArticle
     * const NewsArticle = await prisma.newsArticle.create({
     *   data: {
     *     // ... data to create a NewsArticle
     *   }
     * })
     * 
     */
    create<T extends NewsArticleCreateArgs>(args: SelectSubset<T, NewsArticleCreateArgs<ExtArgs>>): Prisma__NewsArticleClient<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many NewsArticles.
     * @param {NewsArticleCreateManyArgs} args - Arguments to create many NewsArticles.
     * @example
     * // Create many NewsArticles
     * const newsArticle = await prisma.newsArticle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NewsArticleCreateManyArgs>(args?: SelectSubset<T, NewsArticleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NewsArticles and returns the data saved in the database.
     * @param {NewsArticleCreateManyAndReturnArgs} args - Arguments to create many NewsArticles.
     * @example
     * // Create many NewsArticles
     * const newsArticle = await prisma.newsArticle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NewsArticles and only return the `id`
     * const newsArticleWithIdOnly = await prisma.newsArticle.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NewsArticleCreateManyAndReturnArgs>(args?: SelectSubset<T, NewsArticleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a NewsArticle.
     * @param {NewsArticleDeleteArgs} args - Arguments to delete one NewsArticle.
     * @example
     * // Delete one NewsArticle
     * const NewsArticle = await prisma.newsArticle.delete({
     *   where: {
     *     // ... filter to delete one NewsArticle
     *   }
     * })
     * 
     */
    delete<T extends NewsArticleDeleteArgs>(args: SelectSubset<T, NewsArticleDeleteArgs<ExtArgs>>): Prisma__NewsArticleClient<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one NewsArticle.
     * @param {NewsArticleUpdateArgs} args - Arguments to update one NewsArticle.
     * @example
     * // Update one NewsArticle
     * const newsArticle = await prisma.newsArticle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NewsArticleUpdateArgs>(args: SelectSubset<T, NewsArticleUpdateArgs<ExtArgs>>): Prisma__NewsArticleClient<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more NewsArticles.
     * @param {NewsArticleDeleteManyArgs} args - Arguments to filter NewsArticles to delete.
     * @example
     * // Delete a few NewsArticles
     * const { count } = await prisma.newsArticle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NewsArticleDeleteManyArgs>(args?: SelectSubset<T, NewsArticleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsArticles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsArticleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NewsArticles
     * const newsArticle = await prisma.newsArticle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NewsArticleUpdateManyArgs>(args: SelectSubset<T, NewsArticleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsArticles and returns the data updated in the database.
     * @param {NewsArticleUpdateManyAndReturnArgs} args - Arguments to update many NewsArticles.
     * @example
     * // Update many NewsArticles
     * const newsArticle = await prisma.newsArticle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NewsArticles and only return the `id`
     * const newsArticleWithIdOnly = await prisma.newsArticle.updateManyAndReturn({
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
    updateManyAndReturn<T extends NewsArticleUpdateManyAndReturnArgs>(args: SelectSubset<T, NewsArticleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one NewsArticle.
     * @param {NewsArticleUpsertArgs} args - Arguments to update or create a NewsArticle.
     * @example
     * // Update or create a NewsArticle
     * const newsArticle = await prisma.newsArticle.upsert({
     *   create: {
     *     // ... data to create a NewsArticle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NewsArticle we want to update
     *   }
     * })
     */
    upsert<T extends NewsArticleUpsertArgs>(args: SelectSubset<T, NewsArticleUpsertArgs<ExtArgs>>): Prisma__NewsArticleClient<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of NewsArticles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsArticleCountArgs} args - Arguments to filter NewsArticles to count.
     * @example
     * // Count the number of NewsArticles
     * const count = await prisma.newsArticle.count({
     *   where: {
     *     // ... the filter for the NewsArticles we want to count
     *   }
     * })
    **/
    count<T extends NewsArticleCountArgs>(
      args?: Subset<T, NewsArticleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewsArticleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NewsArticle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsArticleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NewsArticleAggregateArgs>(args: Subset<T, NewsArticleAggregateArgs>): Prisma.PrismaPromise<GetNewsArticleAggregateType<T>>

    /**
     * Group by NewsArticle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsArticleGroupByArgs} args - Group by arguments.
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
      T extends NewsArticleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewsArticleGroupByArgs['orderBy'] }
        : { orderBy?: NewsArticleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NewsArticleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewsArticleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NewsArticle model
   */
  readonly fields: NewsArticleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NewsArticle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NewsArticleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the NewsArticle model
   */ 
  interface NewsArticleFieldRefs {
    readonly id: FieldRef<"NewsArticle", 'Int'>
    readonly companyId: FieldRef<"NewsArticle", 'Int'>
    readonly timestamp: FieldRef<"NewsArticle", 'DateTime'>
    readonly headline: FieldRef<"NewsArticle", 'String'>
    readonly content: FieldRef<"NewsArticle", 'String'>
    readonly sentiment: FieldRef<"NewsArticle", 'Float'>
    readonly source: FieldRef<"NewsArticle", 'String'>
    readonly reaction: FieldRef<"NewsArticle", 'String'>
  }
    

  // Custom InputTypes
  /**
   * NewsArticle findUnique
   */
  export type NewsArticleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleInclude<ExtArgs> | null
    /**
     * Filter, which NewsArticle to fetch.
     */
    where: NewsArticleWhereUniqueInput
  }

  /**
   * NewsArticle findUniqueOrThrow
   */
  export type NewsArticleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleInclude<ExtArgs> | null
    /**
     * Filter, which NewsArticle to fetch.
     */
    where: NewsArticleWhereUniqueInput
  }

  /**
   * NewsArticle findFirst
   */
  export type NewsArticleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleInclude<ExtArgs> | null
    /**
     * Filter, which NewsArticle to fetch.
     */
    where?: NewsArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsArticles to fetch.
     */
    orderBy?: NewsArticleOrderByWithRelationInput | NewsArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsArticles.
     */
    cursor?: NewsArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsArticles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsArticles.
     */
    distinct?: NewsArticleScalarFieldEnum | NewsArticleScalarFieldEnum[]
  }

  /**
   * NewsArticle findFirstOrThrow
   */
  export type NewsArticleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleInclude<ExtArgs> | null
    /**
     * Filter, which NewsArticle to fetch.
     */
    where?: NewsArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsArticles to fetch.
     */
    orderBy?: NewsArticleOrderByWithRelationInput | NewsArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsArticles.
     */
    cursor?: NewsArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsArticles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsArticles.
     */
    distinct?: NewsArticleScalarFieldEnum | NewsArticleScalarFieldEnum[]
  }

  /**
   * NewsArticle findMany
   */
  export type NewsArticleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleInclude<ExtArgs> | null
    /**
     * Filter, which NewsArticles to fetch.
     */
    where?: NewsArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsArticles to fetch.
     */
    orderBy?: NewsArticleOrderByWithRelationInput | NewsArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NewsArticles.
     */
    cursor?: NewsArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsArticles.
     */
    skip?: number
    distinct?: NewsArticleScalarFieldEnum | NewsArticleScalarFieldEnum[]
  }

  /**
   * NewsArticle create
   */
  export type NewsArticleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleInclude<ExtArgs> | null
    /**
     * The data needed to create a NewsArticle.
     */
    data: XOR<NewsArticleCreateInput, NewsArticleUncheckedCreateInput>
  }

  /**
   * NewsArticle createMany
   */
  export type NewsArticleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NewsArticles.
     */
    data: NewsArticleCreateManyInput | NewsArticleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NewsArticle createManyAndReturn
   */
  export type NewsArticleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * The data used to create many NewsArticles.
     */
    data: NewsArticleCreateManyInput | NewsArticleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NewsArticle update
   */
  export type NewsArticleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleInclude<ExtArgs> | null
    /**
     * The data needed to update a NewsArticle.
     */
    data: XOR<NewsArticleUpdateInput, NewsArticleUncheckedUpdateInput>
    /**
     * Choose, which NewsArticle to update.
     */
    where: NewsArticleWhereUniqueInput
  }

  /**
   * NewsArticle updateMany
   */
  export type NewsArticleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NewsArticles.
     */
    data: XOR<NewsArticleUpdateManyMutationInput, NewsArticleUncheckedUpdateManyInput>
    /**
     * Filter which NewsArticles to update
     */
    where?: NewsArticleWhereInput
    /**
     * Limit how many NewsArticles to update.
     */
    limit?: number
  }

  /**
   * NewsArticle updateManyAndReturn
   */
  export type NewsArticleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * The data used to update NewsArticles.
     */
    data: XOR<NewsArticleUpdateManyMutationInput, NewsArticleUncheckedUpdateManyInput>
    /**
     * Filter which NewsArticles to update
     */
    where?: NewsArticleWhereInput
    /**
     * Limit how many NewsArticles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NewsArticle upsert
   */
  export type NewsArticleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleInclude<ExtArgs> | null
    /**
     * The filter to search for the NewsArticle to update in case it exists.
     */
    where: NewsArticleWhereUniqueInput
    /**
     * In case the NewsArticle found by the `where` argument doesn't exist, create a new NewsArticle with this data.
     */
    create: XOR<NewsArticleCreateInput, NewsArticleUncheckedCreateInput>
    /**
     * In case the NewsArticle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NewsArticleUpdateInput, NewsArticleUncheckedUpdateInput>
  }

  /**
   * NewsArticle delete
   */
  export type NewsArticleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleInclude<ExtArgs> | null
    /**
     * Filter which NewsArticle to delete.
     */
    where: NewsArticleWhereUniqueInput
  }

  /**
   * NewsArticle deleteMany
   */
  export type NewsArticleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsArticles to delete
     */
    where?: NewsArticleWhereInput
    /**
     * Limit how many NewsArticles to delete.
     */
    limit?: number
  }

  /**
   * NewsArticle without action
   */
  export type NewsArticleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleInclude<ExtArgs> | null
  }


  /**
   * Model Index
   */

  export type AggregateIndex = {
    _count: IndexCountAggregateOutputType | null
    _avg: IndexAvgAggregateOutputType | null
    _sum: IndexSumAggregateOutputType | null
    _min: IndexMinAggregateOutputType | null
    _max: IndexMaxAggregateOutputType | null
  }

  export type IndexAvgAggregateOutputType = {
    id: number | null
  }

  export type IndexSumAggregateOutputType = {
    id: number | null
  }

  export type IndexMinAggregateOutputType = {
    id: number | null
    name: string | null
    tickerSymbol: string | null
    description: string | null
  }

  export type IndexMaxAggregateOutputType = {
    id: number | null
    name: string | null
    tickerSymbol: string | null
    description: string | null
  }

  export type IndexCountAggregateOutputType = {
    id: number
    name: number
    tickerSymbol: number
    description: number
    _all: number
  }


  export type IndexAvgAggregateInputType = {
    id?: true
  }

  export type IndexSumAggregateInputType = {
    id?: true
  }

  export type IndexMinAggregateInputType = {
    id?: true
    name?: true
    tickerSymbol?: true
    description?: true
  }

  export type IndexMaxAggregateInputType = {
    id?: true
    name?: true
    tickerSymbol?: true
    description?: true
  }

  export type IndexCountAggregateInputType = {
    id?: true
    name?: true
    tickerSymbol?: true
    description?: true
    _all?: true
  }

  export type IndexAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Index to aggregate.
     */
    where?: IndexWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Indices to fetch.
     */
    orderBy?: IndexOrderByWithRelationInput | IndexOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IndexWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Indices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Indices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Indices
    **/
    _count?: true | IndexCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IndexAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IndexSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IndexMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IndexMaxAggregateInputType
  }

  export type GetIndexAggregateType<T extends IndexAggregateArgs> = {
        [P in keyof T & keyof AggregateIndex]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIndex[P]>
      : GetScalarType<T[P], AggregateIndex[P]>
  }




  export type IndexGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IndexWhereInput
    orderBy?: IndexOrderByWithAggregationInput | IndexOrderByWithAggregationInput[]
    by: IndexScalarFieldEnum[] | IndexScalarFieldEnum
    having?: IndexScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IndexCountAggregateInputType | true
    _avg?: IndexAvgAggregateInputType
    _sum?: IndexSumAggregateInputType
    _min?: IndexMinAggregateInputType
    _max?: IndexMaxAggregateInputType
  }

  export type IndexGroupByOutputType = {
    id: number
    name: string
    tickerSymbol: string
    description: string
    _count: IndexCountAggregateOutputType | null
    _avg: IndexAvgAggregateOutputType | null
    _sum: IndexSumAggregateOutputType | null
    _min: IndexMinAggregateOutputType | null
    _max: IndexMaxAggregateOutputType | null
  }

  type GetIndexGroupByPayload<T extends IndexGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IndexGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IndexGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IndexGroupByOutputType[P]>
            : GetScalarType<T[P], IndexGroupByOutputType[P]>
        }
      >
    >


  export type IndexSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    tickerSymbol?: boolean
    description?: boolean
    indexPrices?: boolean | Index$indexPricesArgs<ExtArgs>
    companies?: boolean | Index$companiesArgs<ExtArgs>
    _count?: boolean | IndexCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["index"]>

  export type IndexSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    tickerSymbol?: boolean
    description?: boolean
  }, ExtArgs["result"]["index"]>

  export type IndexSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    tickerSymbol?: boolean
    description?: boolean
  }, ExtArgs["result"]["index"]>

  export type IndexSelectScalar = {
    id?: boolean
    name?: boolean
    tickerSymbol?: boolean
    description?: boolean
  }

  export type IndexOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "tickerSymbol" | "description", ExtArgs["result"]["index"]>
  export type IndexInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    indexPrices?: boolean | Index$indexPricesArgs<ExtArgs>
    companies?: boolean | Index$companiesArgs<ExtArgs>
    _count?: boolean | IndexCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type IndexIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type IndexIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $IndexPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Index"
    objects: {
      indexPrices: Prisma.$IndexPricePayload<ExtArgs>[]
      companies: Prisma.$IndexCompanyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      tickerSymbol: string
      description: string
    }, ExtArgs["result"]["index"]>
    composites: {}
  }

  type IndexGetPayload<S extends boolean | null | undefined | IndexDefaultArgs> = $Result.GetResult<Prisma.$IndexPayload, S>

  type IndexCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IndexFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IndexCountAggregateInputType | true
    }

  export interface IndexDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Index'], meta: { name: 'Index' } }
    /**
     * Find zero or one Index that matches the filter.
     * @param {IndexFindUniqueArgs} args - Arguments to find a Index
     * @example
     * // Get one Index
     * const index = await prisma.index.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IndexFindUniqueArgs>(args: SelectSubset<T, IndexFindUniqueArgs<ExtArgs>>): Prisma__IndexClient<$Result.GetResult<Prisma.$IndexPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Index that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IndexFindUniqueOrThrowArgs} args - Arguments to find a Index
     * @example
     * // Get one Index
     * const index = await prisma.index.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IndexFindUniqueOrThrowArgs>(args: SelectSubset<T, IndexFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IndexClient<$Result.GetResult<Prisma.$IndexPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Index that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndexFindFirstArgs} args - Arguments to find a Index
     * @example
     * // Get one Index
     * const index = await prisma.index.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IndexFindFirstArgs>(args?: SelectSubset<T, IndexFindFirstArgs<ExtArgs>>): Prisma__IndexClient<$Result.GetResult<Prisma.$IndexPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Index that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndexFindFirstOrThrowArgs} args - Arguments to find a Index
     * @example
     * // Get one Index
     * const index = await prisma.index.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IndexFindFirstOrThrowArgs>(args?: SelectSubset<T, IndexFindFirstOrThrowArgs<ExtArgs>>): Prisma__IndexClient<$Result.GetResult<Prisma.$IndexPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Indices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndexFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Indices
     * const indices = await prisma.index.findMany()
     * 
     * // Get first 10 Indices
     * const indices = await prisma.index.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const indexWithIdOnly = await prisma.index.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IndexFindManyArgs>(args?: SelectSubset<T, IndexFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IndexPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Index.
     * @param {IndexCreateArgs} args - Arguments to create a Index.
     * @example
     * // Create one Index
     * const Index = await prisma.index.create({
     *   data: {
     *     // ... data to create a Index
     *   }
     * })
     * 
     */
    create<T extends IndexCreateArgs>(args: SelectSubset<T, IndexCreateArgs<ExtArgs>>): Prisma__IndexClient<$Result.GetResult<Prisma.$IndexPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Indices.
     * @param {IndexCreateManyArgs} args - Arguments to create many Indices.
     * @example
     * // Create many Indices
     * const index = await prisma.index.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IndexCreateManyArgs>(args?: SelectSubset<T, IndexCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Indices and returns the data saved in the database.
     * @param {IndexCreateManyAndReturnArgs} args - Arguments to create many Indices.
     * @example
     * // Create many Indices
     * const index = await prisma.index.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Indices and only return the `id`
     * const indexWithIdOnly = await prisma.index.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IndexCreateManyAndReturnArgs>(args?: SelectSubset<T, IndexCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IndexPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Index.
     * @param {IndexDeleteArgs} args - Arguments to delete one Index.
     * @example
     * // Delete one Index
     * const Index = await prisma.index.delete({
     *   where: {
     *     // ... filter to delete one Index
     *   }
     * })
     * 
     */
    delete<T extends IndexDeleteArgs>(args: SelectSubset<T, IndexDeleteArgs<ExtArgs>>): Prisma__IndexClient<$Result.GetResult<Prisma.$IndexPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Index.
     * @param {IndexUpdateArgs} args - Arguments to update one Index.
     * @example
     * // Update one Index
     * const index = await prisma.index.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IndexUpdateArgs>(args: SelectSubset<T, IndexUpdateArgs<ExtArgs>>): Prisma__IndexClient<$Result.GetResult<Prisma.$IndexPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Indices.
     * @param {IndexDeleteManyArgs} args - Arguments to filter Indices to delete.
     * @example
     * // Delete a few Indices
     * const { count } = await prisma.index.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IndexDeleteManyArgs>(args?: SelectSubset<T, IndexDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Indices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndexUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Indices
     * const index = await prisma.index.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IndexUpdateManyArgs>(args: SelectSubset<T, IndexUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Indices and returns the data updated in the database.
     * @param {IndexUpdateManyAndReturnArgs} args - Arguments to update many Indices.
     * @example
     * // Update many Indices
     * const index = await prisma.index.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Indices and only return the `id`
     * const indexWithIdOnly = await prisma.index.updateManyAndReturn({
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
    updateManyAndReturn<T extends IndexUpdateManyAndReturnArgs>(args: SelectSubset<T, IndexUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IndexPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Index.
     * @param {IndexUpsertArgs} args - Arguments to update or create a Index.
     * @example
     * // Update or create a Index
     * const index = await prisma.index.upsert({
     *   create: {
     *     // ... data to create a Index
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Index we want to update
     *   }
     * })
     */
    upsert<T extends IndexUpsertArgs>(args: SelectSubset<T, IndexUpsertArgs<ExtArgs>>): Prisma__IndexClient<$Result.GetResult<Prisma.$IndexPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Indices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndexCountArgs} args - Arguments to filter Indices to count.
     * @example
     * // Count the number of Indices
     * const count = await prisma.index.count({
     *   where: {
     *     // ... the filter for the Indices we want to count
     *   }
     * })
    **/
    count<T extends IndexCountArgs>(
      args?: Subset<T, IndexCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IndexCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Index.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndexAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IndexAggregateArgs>(args: Subset<T, IndexAggregateArgs>): Prisma.PrismaPromise<GetIndexAggregateType<T>>

    /**
     * Group by Index.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndexGroupByArgs} args - Group by arguments.
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
      T extends IndexGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IndexGroupByArgs['orderBy'] }
        : { orderBy?: IndexGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IndexGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIndexGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Index model
   */
  readonly fields: IndexFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Index.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IndexClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    indexPrices<T extends Index$indexPricesArgs<ExtArgs> = {}>(args?: Subset<T, Index$indexPricesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IndexPricePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    companies<T extends Index$companiesArgs<ExtArgs> = {}>(args?: Subset<T, Index$companiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IndexCompanyPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the Index model
   */ 
  interface IndexFieldRefs {
    readonly id: FieldRef<"Index", 'Int'>
    readonly name: FieldRef<"Index", 'String'>
    readonly tickerSymbol: FieldRef<"Index", 'String'>
    readonly description: FieldRef<"Index", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Index findUnique
   */
  export type IndexFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Index
     */
    select?: IndexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Index
     */
    omit?: IndexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndexInclude<ExtArgs> | null
    /**
     * Filter, which Index to fetch.
     */
    where: IndexWhereUniqueInput
  }

  /**
   * Index findUniqueOrThrow
   */
  export type IndexFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Index
     */
    select?: IndexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Index
     */
    omit?: IndexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndexInclude<ExtArgs> | null
    /**
     * Filter, which Index to fetch.
     */
    where: IndexWhereUniqueInput
  }

  /**
   * Index findFirst
   */
  export type IndexFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Index
     */
    select?: IndexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Index
     */
    omit?: IndexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndexInclude<ExtArgs> | null
    /**
     * Filter, which Index to fetch.
     */
    where?: IndexWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Indices to fetch.
     */
    orderBy?: IndexOrderByWithRelationInput | IndexOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Indices.
     */
    cursor?: IndexWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Indices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Indices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Indices.
     */
    distinct?: IndexScalarFieldEnum | IndexScalarFieldEnum[]
  }

  /**
   * Index findFirstOrThrow
   */
  export type IndexFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Index
     */
    select?: IndexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Index
     */
    omit?: IndexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndexInclude<ExtArgs> | null
    /**
     * Filter, which Index to fetch.
     */
    where?: IndexWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Indices to fetch.
     */
    orderBy?: IndexOrderByWithRelationInput | IndexOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Indices.
     */
    cursor?: IndexWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Indices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Indices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Indices.
     */
    distinct?: IndexScalarFieldEnum | IndexScalarFieldEnum[]
  }

  /**
   * Index findMany
   */
  export type IndexFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Index
     */
    select?: IndexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Index
     */
    omit?: IndexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndexInclude<ExtArgs> | null
    /**
     * Filter, which Indices to fetch.
     */
    where?: IndexWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Indices to fetch.
     */
    orderBy?: IndexOrderByWithRelationInput | IndexOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Indices.
     */
    cursor?: IndexWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Indices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Indices.
     */
    skip?: number
    distinct?: IndexScalarFieldEnum | IndexScalarFieldEnum[]
  }

  /**
   * Index create
   */
  export type IndexCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Index
     */
    select?: IndexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Index
     */
    omit?: IndexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndexInclude<ExtArgs> | null
    /**
     * The data needed to create a Index.
     */
    data: XOR<IndexCreateInput, IndexUncheckedCreateInput>
  }

  /**
   * Index createMany
   */
  export type IndexCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Indices.
     */
    data: IndexCreateManyInput | IndexCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Index createManyAndReturn
   */
  export type IndexCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Index
     */
    select?: IndexSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Index
     */
    omit?: IndexOmit<ExtArgs> | null
    /**
     * The data used to create many Indices.
     */
    data: IndexCreateManyInput | IndexCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Index update
   */
  export type IndexUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Index
     */
    select?: IndexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Index
     */
    omit?: IndexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndexInclude<ExtArgs> | null
    /**
     * The data needed to update a Index.
     */
    data: XOR<IndexUpdateInput, IndexUncheckedUpdateInput>
    /**
     * Choose, which Index to update.
     */
    where: IndexWhereUniqueInput
  }

  /**
   * Index updateMany
   */
  export type IndexUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Indices.
     */
    data: XOR<IndexUpdateManyMutationInput, IndexUncheckedUpdateManyInput>
    /**
     * Filter which Indices to update
     */
    where?: IndexWhereInput
    /**
     * Limit how many Indices to update.
     */
    limit?: number
  }

  /**
   * Index updateManyAndReturn
   */
  export type IndexUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Index
     */
    select?: IndexSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Index
     */
    omit?: IndexOmit<ExtArgs> | null
    /**
     * The data used to update Indices.
     */
    data: XOR<IndexUpdateManyMutationInput, IndexUncheckedUpdateManyInput>
    /**
     * Filter which Indices to update
     */
    where?: IndexWhereInput
    /**
     * Limit how many Indices to update.
     */
    limit?: number
  }

  /**
   * Index upsert
   */
  export type IndexUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Index
     */
    select?: IndexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Index
     */
    omit?: IndexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndexInclude<ExtArgs> | null
    /**
     * The filter to search for the Index to update in case it exists.
     */
    where: IndexWhereUniqueInput
    /**
     * In case the Index found by the `where` argument doesn't exist, create a new Index with this data.
     */
    create: XOR<IndexCreateInput, IndexUncheckedCreateInput>
    /**
     * In case the Index was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IndexUpdateInput, IndexUncheckedUpdateInput>
  }

  /**
   * Index delete
   */
  export type IndexDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Index
     */
    select?: IndexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Index
     */
    omit?: IndexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndexInclude<ExtArgs> | null
    /**
     * Filter which Index to delete.
     */
    where: IndexWhereUniqueInput
  }

  /**
   * Index deleteMany
   */
  export type IndexDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Indices to delete
     */
    where?: IndexWhereInput
    /**
     * Limit how many Indices to delete.
     */
    limit?: number
  }

  /**
   * Index.indexPrices
   */
  export type Index$indexPricesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexPrice
     */
    select?: IndexPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndexPrice
     */
    omit?: IndexPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndexPriceInclude<ExtArgs> | null
    where?: IndexPriceWhereInput
    orderBy?: IndexPriceOrderByWithRelationInput | IndexPriceOrderByWithRelationInput[]
    cursor?: IndexPriceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IndexPriceScalarFieldEnum | IndexPriceScalarFieldEnum[]
  }

  /**
   * Index.companies
   */
  export type Index$companiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexCompany
     */
    select?: IndexCompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndexCompany
     */
    omit?: IndexCompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndexCompanyInclude<ExtArgs> | null
    where?: IndexCompanyWhereInput
    orderBy?: IndexCompanyOrderByWithRelationInput | IndexCompanyOrderByWithRelationInput[]
    cursor?: IndexCompanyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IndexCompanyScalarFieldEnum | IndexCompanyScalarFieldEnum[]
  }

  /**
   * Index without action
   */
  export type IndexDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Index
     */
    select?: IndexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Index
     */
    omit?: IndexOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndexInclude<ExtArgs> | null
  }


  /**
   * Model IndexPrice
   */

  export type AggregateIndexPrice = {
    _count: IndexPriceCountAggregateOutputType | null
    _avg: IndexPriceAvgAggregateOutputType | null
    _sum: IndexPriceSumAggregateOutputType | null
    _min: IndexPriceMinAggregateOutputType | null
    _max: IndexPriceMaxAggregateOutputType | null
  }

  export type IndexPriceAvgAggregateOutputType = {
    id: number | null
    indexId: number | null
    price: number | null
  }

  export type IndexPriceSumAggregateOutputType = {
    id: number | null
    indexId: number | null
    price: number | null
  }

  export type IndexPriceMinAggregateOutputType = {
    id: number | null
    indexId: number | null
    timestamp: Date | null
    price: number | null
  }

  export type IndexPriceMaxAggregateOutputType = {
    id: number | null
    indexId: number | null
    timestamp: Date | null
    price: number | null
  }

  export type IndexPriceCountAggregateOutputType = {
    id: number
    indexId: number
    timestamp: number
    price: number
    _all: number
  }


  export type IndexPriceAvgAggregateInputType = {
    id?: true
    indexId?: true
    price?: true
  }

  export type IndexPriceSumAggregateInputType = {
    id?: true
    indexId?: true
    price?: true
  }

  export type IndexPriceMinAggregateInputType = {
    id?: true
    indexId?: true
    timestamp?: true
    price?: true
  }

  export type IndexPriceMaxAggregateInputType = {
    id?: true
    indexId?: true
    timestamp?: true
    price?: true
  }

  export type IndexPriceCountAggregateInputType = {
    id?: true
    indexId?: true
    timestamp?: true
    price?: true
    _all?: true
  }

  export type IndexPriceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IndexPrice to aggregate.
     */
    where?: IndexPriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IndexPrices to fetch.
     */
    orderBy?: IndexPriceOrderByWithRelationInput | IndexPriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IndexPriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IndexPrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IndexPrices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IndexPrices
    **/
    _count?: true | IndexPriceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IndexPriceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IndexPriceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IndexPriceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IndexPriceMaxAggregateInputType
  }

  export type GetIndexPriceAggregateType<T extends IndexPriceAggregateArgs> = {
        [P in keyof T & keyof AggregateIndexPrice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIndexPrice[P]>
      : GetScalarType<T[P], AggregateIndexPrice[P]>
  }




  export type IndexPriceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IndexPriceWhereInput
    orderBy?: IndexPriceOrderByWithAggregationInput | IndexPriceOrderByWithAggregationInput[]
    by: IndexPriceScalarFieldEnum[] | IndexPriceScalarFieldEnum
    having?: IndexPriceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IndexPriceCountAggregateInputType | true
    _avg?: IndexPriceAvgAggregateInputType
    _sum?: IndexPriceSumAggregateInputType
    _min?: IndexPriceMinAggregateInputType
    _max?: IndexPriceMaxAggregateInputType
  }

  export type IndexPriceGroupByOutputType = {
    id: number
    indexId: number
    timestamp: Date
    price: number
    _count: IndexPriceCountAggregateOutputType | null
    _avg: IndexPriceAvgAggregateOutputType | null
    _sum: IndexPriceSumAggregateOutputType | null
    _min: IndexPriceMinAggregateOutputType | null
    _max: IndexPriceMaxAggregateOutputType | null
  }

  type GetIndexPriceGroupByPayload<T extends IndexPriceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IndexPriceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IndexPriceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IndexPriceGroupByOutputType[P]>
            : GetScalarType<T[P], IndexPriceGroupByOutputType[P]>
        }
      >
    >


  export type IndexPriceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    indexId?: boolean
    timestamp?: boolean
    price?: boolean
    index?: boolean | IndexDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["indexPrice"]>

  export type IndexPriceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    indexId?: boolean
    timestamp?: boolean
    price?: boolean
    index?: boolean | IndexDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["indexPrice"]>

  export type IndexPriceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    indexId?: boolean
    timestamp?: boolean
    price?: boolean
    index?: boolean | IndexDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["indexPrice"]>

  export type IndexPriceSelectScalar = {
    id?: boolean
    indexId?: boolean
    timestamp?: boolean
    price?: boolean
  }

  export type IndexPriceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "indexId" | "timestamp" | "price", ExtArgs["result"]["indexPrice"]>
  export type IndexPriceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    index?: boolean | IndexDefaultArgs<ExtArgs>
  }
  export type IndexPriceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    index?: boolean | IndexDefaultArgs<ExtArgs>
  }
  export type IndexPriceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    index?: boolean | IndexDefaultArgs<ExtArgs>
  }

  export type $IndexPricePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IndexPrice"
    objects: {
      index: Prisma.$IndexPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      indexId: number
      timestamp: Date
      price: number
    }, ExtArgs["result"]["indexPrice"]>
    composites: {}
  }

  type IndexPriceGetPayload<S extends boolean | null | undefined | IndexPriceDefaultArgs> = $Result.GetResult<Prisma.$IndexPricePayload, S>

  type IndexPriceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IndexPriceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IndexPriceCountAggregateInputType | true
    }

  export interface IndexPriceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IndexPrice'], meta: { name: 'IndexPrice' } }
    /**
     * Find zero or one IndexPrice that matches the filter.
     * @param {IndexPriceFindUniqueArgs} args - Arguments to find a IndexPrice
     * @example
     * // Get one IndexPrice
     * const indexPrice = await prisma.indexPrice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IndexPriceFindUniqueArgs>(args: SelectSubset<T, IndexPriceFindUniqueArgs<ExtArgs>>): Prisma__IndexPriceClient<$Result.GetResult<Prisma.$IndexPricePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one IndexPrice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IndexPriceFindUniqueOrThrowArgs} args - Arguments to find a IndexPrice
     * @example
     * // Get one IndexPrice
     * const indexPrice = await prisma.indexPrice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IndexPriceFindUniqueOrThrowArgs>(args: SelectSubset<T, IndexPriceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IndexPriceClient<$Result.GetResult<Prisma.$IndexPricePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first IndexPrice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndexPriceFindFirstArgs} args - Arguments to find a IndexPrice
     * @example
     * // Get one IndexPrice
     * const indexPrice = await prisma.indexPrice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IndexPriceFindFirstArgs>(args?: SelectSubset<T, IndexPriceFindFirstArgs<ExtArgs>>): Prisma__IndexPriceClient<$Result.GetResult<Prisma.$IndexPricePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first IndexPrice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndexPriceFindFirstOrThrowArgs} args - Arguments to find a IndexPrice
     * @example
     * // Get one IndexPrice
     * const indexPrice = await prisma.indexPrice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IndexPriceFindFirstOrThrowArgs>(args?: SelectSubset<T, IndexPriceFindFirstOrThrowArgs<ExtArgs>>): Prisma__IndexPriceClient<$Result.GetResult<Prisma.$IndexPricePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more IndexPrices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndexPriceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IndexPrices
     * const indexPrices = await prisma.indexPrice.findMany()
     * 
     * // Get first 10 IndexPrices
     * const indexPrices = await prisma.indexPrice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const indexPriceWithIdOnly = await prisma.indexPrice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IndexPriceFindManyArgs>(args?: SelectSubset<T, IndexPriceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IndexPricePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a IndexPrice.
     * @param {IndexPriceCreateArgs} args - Arguments to create a IndexPrice.
     * @example
     * // Create one IndexPrice
     * const IndexPrice = await prisma.indexPrice.create({
     *   data: {
     *     // ... data to create a IndexPrice
     *   }
     * })
     * 
     */
    create<T extends IndexPriceCreateArgs>(args: SelectSubset<T, IndexPriceCreateArgs<ExtArgs>>): Prisma__IndexPriceClient<$Result.GetResult<Prisma.$IndexPricePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many IndexPrices.
     * @param {IndexPriceCreateManyArgs} args - Arguments to create many IndexPrices.
     * @example
     * // Create many IndexPrices
     * const indexPrice = await prisma.indexPrice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IndexPriceCreateManyArgs>(args?: SelectSubset<T, IndexPriceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IndexPrices and returns the data saved in the database.
     * @param {IndexPriceCreateManyAndReturnArgs} args - Arguments to create many IndexPrices.
     * @example
     * // Create many IndexPrices
     * const indexPrice = await prisma.indexPrice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IndexPrices and only return the `id`
     * const indexPriceWithIdOnly = await prisma.indexPrice.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IndexPriceCreateManyAndReturnArgs>(args?: SelectSubset<T, IndexPriceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IndexPricePayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a IndexPrice.
     * @param {IndexPriceDeleteArgs} args - Arguments to delete one IndexPrice.
     * @example
     * // Delete one IndexPrice
     * const IndexPrice = await prisma.indexPrice.delete({
     *   where: {
     *     // ... filter to delete one IndexPrice
     *   }
     * })
     * 
     */
    delete<T extends IndexPriceDeleteArgs>(args: SelectSubset<T, IndexPriceDeleteArgs<ExtArgs>>): Prisma__IndexPriceClient<$Result.GetResult<Prisma.$IndexPricePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one IndexPrice.
     * @param {IndexPriceUpdateArgs} args - Arguments to update one IndexPrice.
     * @example
     * // Update one IndexPrice
     * const indexPrice = await prisma.indexPrice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IndexPriceUpdateArgs>(args: SelectSubset<T, IndexPriceUpdateArgs<ExtArgs>>): Prisma__IndexPriceClient<$Result.GetResult<Prisma.$IndexPricePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more IndexPrices.
     * @param {IndexPriceDeleteManyArgs} args - Arguments to filter IndexPrices to delete.
     * @example
     * // Delete a few IndexPrices
     * const { count } = await prisma.indexPrice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IndexPriceDeleteManyArgs>(args?: SelectSubset<T, IndexPriceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IndexPrices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndexPriceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IndexPrices
     * const indexPrice = await prisma.indexPrice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IndexPriceUpdateManyArgs>(args: SelectSubset<T, IndexPriceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IndexPrices and returns the data updated in the database.
     * @param {IndexPriceUpdateManyAndReturnArgs} args - Arguments to update many IndexPrices.
     * @example
     * // Update many IndexPrices
     * const indexPrice = await prisma.indexPrice.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more IndexPrices and only return the `id`
     * const indexPriceWithIdOnly = await prisma.indexPrice.updateManyAndReturn({
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
    updateManyAndReturn<T extends IndexPriceUpdateManyAndReturnArgs>(args: SelectSubset<T, IndexPriceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IndexPricePayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one IndexPrice.
     * @param {IndexPriceUpsertArgs} args - Arguments to update or create a IndexPrice.
     * @example
     * // Update or create a IndexPrice
     * const indexPrice = await prisma.indexPrice.upsert({
     *   create: {
     *     // ... data to create a IndexPrice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IndexPrice we want to update
     *   }
     * })
     */
    upsert<T extends IndexPriceUpsertArgs>(args: SelectSubset<T, IndexPriceUpsertArgs<ExtArgs>>): Prisma__IndexPriceClient<$Result.GetResult<Prisma.$IndexPricePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of IndexPrices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndexPriceCountArgs} args - Arguments to filter IndexPrices to count.
     * @example
     * // Count the number of IndexPrices
     * const count = await prisma.indexPrice.count({
     *   where: {
     *     // ... the filter for the IndexPrices we want to count
     *   }
     * })
    **/
    count<T extends IndexPriceCountArgs>(
      args?: Subset<T, IndexPriceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IndexPriceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IndexPrice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndexPriceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IndexPriceAggregateArgs>(args: Subset<T, IndexPriceAggregateArgs>): Prisma.PrismaPromise<GetIndexPriceAggregateType<T>>

    /**
     * Group by IndexPrice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndexPriceGroupByArgs} args - Group by arguments.
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
      T extends IndexPriceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IndexPriceGroupByArgs['orderBy'] }
        : { orderBy?: IndexPriceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IndexPriceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIndexPriceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IndexPrice model
   */
  readonly fields: IndexPriceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IndexPrice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IndexPriceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    index<T extends IndexDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IndexDefaultArgs<ExtArgs>>): Prisma__IndexClient<$Result.GetResult<Prisma.$IndexPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the IndexPrice model
   */ 
  interface IndexPriceFieldRefs {
    readonly id: FieldRef<"IndexPrice", 'Int'>
    readonly indexId: FieldRef<"IndexPrice", 'Int'>
    readonly timestamp: FieldRef<"IndexPrice", 'DateTime'>
    readonly price: FieldRef<"IndexPrice", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * IndexPrice findUnique
   */
  export type IndexPriceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexPrice
     */
    select?: IndexPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndexPrice
     */
    omit?: IndexPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndexPriceInclude<ExtArgs> | null
    /**
     * Filter, which IndexPrice to fetch.
     */
    where: IndexPriceWhereUniqueInput
  }

  /**
   * IndexPrice findUniqueOrThrow
   */
  export type IndexPriceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexPrice
     */
    select?: IndexPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndexPrice
     */
    omit?: IndexPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndexPriceInclude<ExtArgs> | null
    /**
     * Filter, which IndexPrice to fetch.
     */
    where: IndexPriceWhereUniqueInput
  }

  /**
   * IndexPrice findFirst
   */
  export type IndexPriceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexPrice
     */
    select?: IndexPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndexPrice
     */
    omit?: IndexPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndexPriceInclude<ExtArgs> | null
    /**
     * Filter, which IndexPrice to fetch.
     */
    where?: IndexPriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IndexPrices to fetch.
     */
    orderBy?: IndexPriceOrderByWithRelationInput | IndexPriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IndexPrices.
     */
    cursor?: IndexPriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IndexPrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IndexPrices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IndexPrices.
     */
    distinct?: IndexPriceScalarFieldEnum | IndexPriceScalarFieldEnum[]
  }

  /**
   * IndexPrice findFirstOrThrow
   */
  export type IndexPriceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexPrice
     */
    select?: IndexPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndexPrice
     */
    omit?: IndexPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndexPriceInclude<ExtArgs> | null
    /**
     * Filter, which IndexPrice to fetch.
     */
    where?: IndexPriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IndexPrices to fetch.
     */
    orderBy?: IndexPriceOrderByWithRelationInput | IndexPriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IndexPrices.
     */
    cursor?: IndexPriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IndexPrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IndexPrices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IndexPrices.
     */
    distinct?: IndexPriceScalarFieldEnum | IndexPriceScalarFieldEnum[]
  }

  /**
   * IndexPrice findMany
   */
  export type IndexPriceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexPrice
     */
    select?: IndexPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndexPrice
     */
    omit?: IndexPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndexPriceInclude<ExtArgs> | null
    /**
     * Filter, which IndexPrices to fetch.
     */
    where?: IndexPriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IndexPrices to fetch.
     */
    orderBy?: IndexPriceOrderByWithRelationInput | IndexPriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IndexPrices.
     */
    cursor?: IndexPriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IndexPrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IndexPrices.
     */
    skip?: number
    distinct?: IndexPriceScalarFieldEnum | IndexPriceScalarFieldEnum[]
  }

  /**
   * IndexPrice create
   */
  export type IndexPriceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexPrice
     */
    select?: IndexPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndexPrice
     */
    omit?: IndexPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndexPriceInclude<ExtArgs> | null
    /**
     * The data needed to create a IndexPrice.
     */
    data: XOR<IndexPriceCreateInput, IndexPriceUncheckedCreateInput>
  }

  /**
   * IndexPrice createMany
   */
  export type IndexPriceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IndexPrices.
     */
    data: IndexPriceCreateManyInput | IndexPriceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IndexPrice createManyAndReturn
   */
  export type IndexPriceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexPrice
     */
    select?: IndexPriceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IndexPrice
     */
    omit?: IndexPriceOmit<ExtArgs> | null
    /**
     * The data used to create many IndexPrices.
     */
    data: IndexPriceCreateManyInput | IndexPriceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndexPriceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * IndexPrice update
   */
  export type IndexPriceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexPrice
     */
    select?: IndexPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndexPrice
     */
    omit?: IndexPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndexPriceInclude<ExtArgs> | null
    /**
     * The data needed to update a IndexPrice.
     */
    data: XOR<IndexPriceUpdateInput, IndexPriceUncheckedUpdateInput>
    /**
     * Choose, which IndexPrice to update.
     */
    where: IndexPriceWhereUniqueInput
  }

  /**
   * IndexPrice updateMany
   */
  export type IndexPriceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IndexPrices.
     */
    data: XOR<IndexPriceUpdateManyMutationInput, IndexPriceUncheckedUpdateManyInput>
    /**
     * Filter which IndexPrices to update
     */
    where?: IndexPriceWhereInput
    /**
     * Limit how many IndexPrices to update.
     */
    limit?: number
  }

  /**
   * IndexPrice updateManyAndReturn
   */
  export type IndexPriceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexPrice
     */
    select?: IndexPriceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IndexPrice
     */
    omit?: IndexPriceOmit<ExtArgs> | null
    /**
     * The data used to update IndexPrices.
     */
    data: XOR<IndexPriceUpdateManyMutationInput, IndexPriceUncheckedUpdateManyInput>
    /**
     * Filter which IndexPrices to update
     */
    where?: IndexPriceWhereInput
    /**
     * Limit how many IndexPrices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndexPriceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * IndexPrice upsert
   */
  export type IndexPriceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexPrice
     */
    select?: IndexPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndexPrice
     */
    omit?: IndexPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndexPriceInclude<ExtArgs> | null
    /**
     * The filter to search for the IndexPrice to update in case it exists.
     */
    where: IndexPriceWhereUniqueInput
    /**
     * In case the IndexPrice found by the `where` argument doesn't exist, create a new IndexPrice with this data.
     */
    create: XOR<IndexPriceCreateInput, IndexPriceUncheckedCreateInput>
    /**
     * In case the IndexPrice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IndexPriceUpdateInput, IndexPriceUncheckedUpdateInput>
  }

  /**
   * IndexPrice delete
   */
  export type IndexPriceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexPrice
     */
    select?: IndexPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndexPrice
     */
    omit?: IndexPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndexPriceInclude<ExtArgs> | null
    /**
     * Filter which IndexPrice to delete.
     */
    where: IndexPriceWhereUniqueInput
  }

  /**
   * IndexPrice deleteMany
   */
  export type IndexPriceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IndexPrices to delete
     */
    where?: IndexPriceWhereInput
    /**
     * Limit how many IndexPrices to delete.
     */
    limit?: number
  }

  /**
   * IndexPrice without action
   */
  export type IndexPriceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexPrice
     */
    select?: IndexPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndexPrice
     */
    omit?: IndexPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndexPriceInclude<ExtArgs> | null
  }


  /**
   * Model IndexCompany
   */

  export type AggregateIndexCompany = {
    _count: IndexCompanyCountAggregateOutputType | null
    _avg: IndexCompanyAvgAggregateOutputType | null
    _sum: IndexCompanySumAggregateOutputType | null
    _min: IndexCompanyMinAggregateOutputType | null
    _max: IndexCompanyMaxAggregateOutputType | null
  }

  export type IndexCompanyAvgAggregateOutputType = {
    id: number | null
    indexId: number | null
    companyId: number | null
    weight: number | null
  }

  export type IndexCompanySumAggregateOutputType = {
    id: number | null
    indexId: number | null
    companyId: number | null
    weight: number | null
  }

  export type IndexCompanyMinAggregateOutputType = {
    id: number | null
    indexId: number | null
    companyId: number | null
    weight: number | null
  }

  export type IndexCompanyMaxAggregateOutputType = {
    id: number | null
    indexId: number | null
    companyId: number | null
    weight: number | null
  }

  export type IndexCompanyCountAggregateOutputType = {
    id: number
    indexId: number
    companyId: number
    weight: number
    _all: number
  }


  export type IndexCompanyAvgAggregateInputType = {
    id?: true
    indexId?: true
    companyId?: true
    weight?: true
  }

  export type IndexCompanySumAggregateInputType = {
    id?: true
    indexId?: true
    companyId?: true
    weight?: true
  }

  export type IndexCompanyMinAggregateInputType = {
    id?: true
    indexId?: true
    companyId?: true
    weight?: true
  }

  export type IndexCompanyMaxAggregateInputType = {
    id?: true
    indexId?: true
    companyId?: true
    weight?: true
  }

  export type IndexCompanyCountAggregateInputType = {
    id?: true
    indexId?: true
    companyId?: true
    weight?: true
    _all?: true
  }

  export type IndexCompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IndexCompany to aggregate.
     */
    where?: IndexCompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IndexCompanies to fetch.
     */
    orderBy?: IndexCompanyOrderByWithRelationInput | IndexCompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IndexCompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IndexCompanies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IndexCompanies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IndexCompanies
    **/
    _count?: true | IndexCompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IndexCompanyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IndexCompanySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IndexCompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IndexCompanyMaxAggregateInputType
  }

  export type GetIndexCompanyAggregateType<T extends IndexCompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateIndexCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIndexCompany[P]>
      : GetScalarType<T[P], AggregateIndexCompany[P]>
  }




  export type IndexCompanyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IndexCompanyWhereInput
    orderBy?: IndexCompanyOrderByWithAggregationInput | IndexCompanyOrderByWithAggregationInput[]
    by: IndexCompanyScalarFieldEnum[] | IndexCompanyScalarFieldEnum
    having?: IndexCompanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IndexCompanyCountAggregateInputType | true
    _avg?: IndexCompanyAvgAggregateInputType
    _sum?: IndexCompanySumAggregateInputType
    _min?: IndexCompanyMinAggregateInputType
    _max?: IndexCompanyMaxAggregateInputType
  }

  export type IndexCompanyGroupByOutputType = {
    id: number
    indexId: number
    companyId: number
    weight: number
    _count: IndexCompanyCountAggregateOutputType | null
    _avg: IndexCompanyAvgAggregateOutputType | null
    _sum: IndexCompanySumAggregateOutputType | null
    _min: IndexCompanyMinAggregateOutputType | null
    _max: IndexCompanyMaxAggregateOutputType | null
  }

  type GetIndexCompanyGroupByPayload<T extends IndexCompanyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IndexCompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IndexCompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IndexCompanyGroupByOutputType[P]>
            : GetScalarType<T[P], IndexCompanyGroupByOutputType[P]>
        }
      >
    >


  export type IndexCompanySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    indexId?: boolean
    companyId?: boolean
    weight?: boolean
    index?: boolean | IndexDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["indexCompany"]>

  export type IndexCompanySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    indexId?: boolean
    companyId?: boolean
    weight?: boolean
    index?: boolean | IndexDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["indexCompany"]>

  export type IndexCompanySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    indexId?: boolean
    companyId?: boolean
    weight?: boolean
    index?: boolean | IndexDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["indexCompany"]>

  export type IndexCompanySelectScalar = {
    id?: boolean
    indexId?: boolean
    companyId?: boolean
    weight?: boolean
  }

  export type IndexCompanyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "indexId" | "companyId" | "weight", ExtArgs["result"]["indexCompany"]>
  export type IndexCompanyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    index?: boolean | IndexDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type IndexCompanyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    index?: boolean | IndexDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type IndexCompanyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    index?: boolean | IndexDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }

  export type $IndexCompanyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IndexCompany"
    objects: {
      index: Prisma.$IndexPayload<ExtArgs>
      company: Prisma.$CompanyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      indexId: number
      companyId: number
      weight: number
    }, ExtArgs["result"]["indexCompany"]>
    composites: {}
  }

  type IndexCompanyGetPayload<S extends boolean | null | undefined | IndexCompanyDefaultArgs> = $Result.GetResult<Prisma.$IndexCompanyPayload, S>

  type IndexCompanyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IndexCompanyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IndexCompanyCountAggregateInputType | true
    }

  export interface IndexCompanyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IndexCompany'], meta: { name: 'IndexCompany' } }
    /**
     * Find zero or one IndexCompany that matches the filter.
     * @param {IndexCompanyFindUniqueArgs} args - Arguments to find a IndexCompany
     * @example
     * // Get one IndexCompany
     * const indexCompany = await prisma.indexCompany.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IndexCompanyFindUniqueArgs>(args: SelectSubset<T, IndexCompanyFindUniqueArgs<ExtArgs>>): Prisma__IndexCompanyClient<$Result.GetResult<Prisma.$IndexCompanyPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one IndexCompany that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IndexCompanyFindUniqueOrThrowArgs} args - Arguments to find a IndexCompany
     * @example
     * // Get one IndexCompany
     * const indexCompany = await prisma.indexCompany.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IndexCompanyFindUniqueOrThrowArgs>(args: SelectSubset<T, IndexCompanyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IndexCompanyClient<$Result.GetResult<Prisma.$IndexCompanyPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first IndexCompany that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndexCompanyFindFirstArgs} args - Arguments to find a IndexCompany
     * @example
     * // Get one IndexCompany
     * const indexCompany = await prisma.indexCompany.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IndexCompanyFindFirstArgs>(args?: SelectSubset<T, IndexCompanyFindFirstArgs<ExtArgs>>): Prisma__IndexCompanyClient<$Result.GetResult<Prisma.$IndexCompanyPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first IndexCompany that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndexCompanyFindFirstOrThrowArgs} args - Arguments to find a IndexCompany
     * @example
     * // Get one IndexCompany
     * const indexCompany = await prisma.indexCompany.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IndexCompanyFindFirstOrThrowArgs>(args?: SelectSubset<T, IndexCompanyFindFirstOrThrowArgs<ExtArgs>>): Prisma__IndexCompanyClient<$Result.GetResult<Prisma.$IndexCompanyPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more IndexCompanies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndexCompanyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IndexCompanies
     * const indexCompanies = await prisma.indexCompany.findMany()
     * 
     * // Get first 10 IndexCompanies
     * const indexCompanies = await prisma.indexCompany.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const indexCompanyWithIdOnly = await prisma.indexCompany.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IndexCompanyFindManyArgs>(args?: SelectSubset<T, IndexCompanyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IndexCompanyPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a IndexCompany.
     * @param {IndexCompanyCreateArgs} args - Arguments to create a IndexCompany.
     * @example
     * // Create one IndexCompany
     * const IndexCompany = await prisma.indexCompany.create({
     *   data: {
     *     // ... data to create a IndexCompany
     *   }
     * })
     * 
     */
    create<T extends IndexCompanyCreateArgs>(args: SelectSubset<T, IndexCompanyCreateArgs<ExtArgs>>): Prisma__IndexCompanyClient<$Result.GetResult<Prisma.$IndexCompanyPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many IndexCompanies.
     * @param {IndexCompanyCreateManyArgs} args - Arguments to create many IndexCompanies.
     * @example
     * // Create many IndexCompanies
     * const indexCompany = await prisma.indexCompany.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IndexCompanyCreateManyArgs>(args?: SelectSubset<T, IndexCompanyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IndexCompanies and returns the data saved in the database.
     * @param {IndexCompanyCreateManyAndReturnArgs} args - Arguments to create many IndexCompanies.
     * @example
     * // Create many IndexCompanies
     * const indexCompany = await prisma.indexCompany.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IndexCompanies and only return the `id`
     * const indexCompanyWithIdOnly = await prisma.indexCompany.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IndexCompanyCreateManyAndReturnArgs>(args?: SelectSubset<T, IndexCompanyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IndexCompanyPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a IndexCompany.
     * @param {IndexCompanyDeleteArgs} args - Arguments to delete one IndexCompany.
     * @example
     * // Delete one IndexCompany
     * const IndexCompany = await prisma.indexCompany.delete({
     *   where: {
     *     // ... filter to delete one IndexCompany
     *   }
     * })
     * 
     */
    delete<T extends IndexCompanyDeleteArgs>(args: SelectSubset<T, IndexCompanyDeleteArgs<ExtArgs>>): Prisma__IndexCompanyClient<$Result.GetResult<Prisma.$IndexCompanyPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one IndexCompany.
     * @param {IndexCompanyUpdateArgs} args - Arguments to update one IndexCompany.
     * @example
     * // Update one IndexCompany
     * const indexCompany = await prisma.indexCompany.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IndexCompanyUpdateArgs>(args: SelectSubset<T, IndexCompanyUpdateArgs<ExtArgs>>): Prisma__IndexCompanyClient<$Result.GetResult<Prisma.$IndexCompanyPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more IndexCompanies.
     * @param {IndexCompanyDeleteManyArgs} args - Arguments to filter IndexCompanies to delete.
     * @example
     * // Delete a few IndexCompanies
     * const { count } = await prisma.indexCompany.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IndexCompanyDeleteManyArgs>(args?: SelectSubset<T, IndexCompanyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IndexCompanies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndexCompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IndexCompanies
     * const indexCompany = await prisma.indexCompany.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IndexCompanyUpdateManyArgs>(args: SelectSubset<T, IndexCompanyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IndexCompanies and returns the data updated in the database.
     * @param {IndexCompanyUpdateManyAndReturnArgs} args - Arguments to update many IndexCompanies.
     * @example
     * // Update many IndexCompanies
     * const indexCompany = await prisma.indexCompany.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more IndexCompanies and only return the `id`
     * const indexCompanyWithIdOnly = await prisma.indexCompany.updateManyAndReturn({
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
    updateManyAndReturn<T extends IndexCompanyUpdateManyAndReturnArgs>(args: SelectSubset<T, IndexCompanyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IndexCompanyPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one IndexCompany.
     * @param {IndexCompanyUpsertArgs} args - Arguments to update or create a IndexCompany.
     * @example
     * // Update or create a IndexCompany
     * const indexCompany = await prisma.indexCompany.upsert({
     *   create: {
     *     // ... data to create a IndexCompany
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IndexCompany we want to update
     *   }
     * })
     */
    upsert<T extends IndexCompanyUpsertArgs>(args: SelectSubset<T, IndexCompanyUpsertArgs<ExtArgs>>): Prisma__IndexCompanyClient<$Result.GetResult<Prisma.$IndexCompanyPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of IndexCompanies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndexCompanyCountArgs} args - Arguments to filter IndexCompanies to count.
     * @example
     * // Count the number of IndexCompanies
     * const count = await prisma.indexCompany.count({
     *   where: {
     *     // ... the filter for the IndexCompanies we want to count
     *   }
     * })
    **/
    count<T extends IndexCompanyCountArgs>(
      args?: Subset<T, IndexCompanyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IndexCompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IndexCompany.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndexCompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IndexCompanyAggregateArgs>(args: Subset<T, IndexCompanyAggregateArgs>): Prisma.PrismaPromise<GetIndexCompanyAggregateType<T>>

    /**
     * Group by IndexCompany.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndexCompanyGroupByArgs} args - Group by arguments.
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
      T extends IndexCompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IndexCompanyGroupByArgs['orderBy'] }
        : { orderBy?: IndexCompanyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IndexCompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIndexCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IndexCompany model
   */
  readonly fields: IndexCompanyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IndexCompany.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IndexCompanyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    index<T extends IndexDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IndexDefaultArgs<ExtArgs>>): Prisma__IndexClient<$Result.GetResult<Prisma.$IndexPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the IndexCompany model
   */ 
  interface IndexCompanyFieldRefs {
    readonly id: FieldRef<"IndexCompany", 'Int'>
    readonly indexId: FieldRef<"IndexCompany", 'Int'>
    readonly companyId: FieldRef<"IndexCompany", 'Int'>
    readonly weight: FieldRef<"IndexCompany", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * IndexCompany findUnique
   */
  export type IndexCompanyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexCompany
     */
    select?: IndexCompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndexCompany
     */
    omit?: IndexCompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndexCompanyInclude<ExtArgs> | null
    /**
     * Filter, which IndexCompany to fetch.
     */
    where: IndexCompanyWhereUniqueInput
  }

  /**
   * IndexCompany findUniqueOrThrow
   */
  export type IndexCompanyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexCompany
     */
    select?: IndexCompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndexCompany
     */
    omit?: IndexCompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndexCompanyInclude<ExtArgs> | null
    /**
     * Filter, which IndexCompany to fetch.
     */
    where: IndexCompanyWhereUniqueInput
  }

  /**
   * IndexCompany findFirst
   */
  export type IndexCompanyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexCompany
     */
    select?: IndexCompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndexCompany
     */
    omit?: IndexCompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndexCompanyInclude<ExtArgs> | null
    /**
     * Filter, which IndexCompany to fetch.
     */
    where?: IndexCompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IndexCompanies to fetch.
     */
    orderBy?: IndexCompanyOrderByWithRelationInput | IndexCompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IndexCompanies.
     */
    cursor?: IndexCompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IndexCompanies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IndexCompanies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IndexCompanies.
     */
    distinct?: IndexCompanyScalarFieldEnum | IndexCompanyScalarFieldEnum[]
  }

  /**
   * IndexCompany findFirstOrThrow
   */
  export type IndexCompanyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexCompany
     */
    select?: IndexCompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndexCompany
     */
    omit?: IndexCompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndexCompanyInclude<ExtArgs> | null
    /**
     * Filter, which IndexCompany to fetch.
     */
    where?: IndexCompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IndexCompanies to fetch.
     */
    orderBy?: IndexCompanyOrderByWithRelationInput | IndexCompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IndexCompanies.
     */
    cursor?: IndexCompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IndexCompanies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IndexCompanies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IndexCompanies.
     */
    distinct?: IndexCompanyScalarFieldEnum | IndexCompanyScalarFieldEnum[]
  }

  /**
   * IndexCompany findMany
   */
  export type IndexCompanyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexCompany
     */
    select?: IndexCompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndexCompany
     */
    omit?: IndexCompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndexCompanyInclude<ExtArgs> | null
    /**
     * Filter, which IndexCompanies to fetch.
     */
    where?: IndexCompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IndexCompanies to fetch.
     */
    orderBy?: IndexCompanyOrderByWithRelationInput | IndexCompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IndexCompanies.
     */
    cursor?: IndexCompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IndexCompanies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IndexCompanies.
     */
    skip?: number
    distinct?: IndexCompanyScalarFieldEnum | IndexCompanyScalarFieldEnum[]
  }

  /**
   * IndexCompany create
   */
  export type IndexCompanyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexCompany
     */
    select?: IndexCompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndexCompany
     */
    omit?: IndexCompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndexCompanyInclude<ExtArgs> | null
    /**
     * The data needed to create a IndexCompany.
     */
    data: XOR<IndexCompanyCreateInput, IndexCompanyUncheckedCreateInput>
  }

  /**
   * IndexCompany createMany
   */
  export type IndexCompanyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IndexCompanies.
     */
    data: IndexCompanyCreateManyInput | IndexCompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IndexCompany createManyAndReturn
   */
  export type IndexCompanyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexCompany
     */
    select?: IndexCompanySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IndexCompany
     */
    omit?: IndexCompanyOmit<ExtArgs> | null
    /**
     * The data used to create many IndexCompanies.
     */
    data: IndexCompanyCreateManyInput | IndexCompanyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndexCompanyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * IndexCompany update
   */
  export type IndexCompanyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexCompany
     */
    select?: IndexCompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndexCompany
     */
    omit?: IndexCompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndexCompanyInclude<ExtArgs> | null
    /**
     * The data needed to update a IndexCompany.
     */
    data: XOR<IndexCompanyUpdateInput, IndexCompanyUncheckedUpdateInput>
    /**
     * Choose, which IndexCompany to update.
     */
    where: IndexCompanyWhereUniqueInput
  }

  /**
   * IndexCompany updateMany
   */
  export type IndexCompanyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IndexCompanies.
     */
    data: XOR<IndexCompanyUpdateManyMutationInput, IndexCompanyUncheckedUpdateManyInput>
    /**
     * Filter which IndexCompanies to update
     */
    where?: IndexCompanyWhereInput
    /**
     * Limit how many IndexCompanies to update.
     */
    limit?: number
  }

  /**
   * IndexCompany updateManyAndReturn
   */
  export type IndexCompanyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexCompany
     */
    select?: IndexCompanySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IndexCompany
     */
    omit?: IndexCompanyOmit<ExtArgs> | null
    /**
     * The data used to update IndexCompanies.
     */
    data: XOR<IndexCompanyUpdateManyMutationInput, IndexCompanyUncheckedUpdateManyInput>
    /**
     * Filter which IndexCompanies to update
     */
    where?: IndexCompanyWhereInput
    /**
     * Limit how many IndexCompanies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndexCompanyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * IndexCompany upsert
   */
  export type IndexCompanyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexCompany
     */
    select?: IndexCompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndexCompany
     */
    omit?: IndexCompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndexCompanyInclude<ExtArgs> | null
    /**
     * The filter to search for the IndexCompany to update in case it exists.
     */
    where: IndexCompanyWhereUniqueInput
    /**
     * In case the IndexCompany found by the `where` argument doesn't exist, create a new IndexCompany with this data.
     */
    create: XOR<IndexCompanyCreateInput, IndexCompanyUncheckedCreateInput>
    /**
     * In case the IndexCompany was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IndexCompanyUpdateInput, IndexCompanyUncheckedUpdateInput>
  }

  /**
   * IndexCompany delete
   */
  export type IndexCompanyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexCompany
     */
    select?: IndexCompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndexCompany
     */
    omit?: IndexCompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndexCompanyInclude<ExtArgs> | null
    /**
     * Filter which IndexCompany to delete.
     */
    where: IndexCompanyWhereUniqueInput
  }

  /**
   * IndexCompany deleteMany
   */
  export type IndexCompanyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IndexCompanies to delete
     */
    where?: IndexCompanyWhereInput
    /**
     * Limit how many IndexCompanies to delete.
     */
    limit?: number
  }

  /**
   * IndexCompany without action
   */
  export type IndexCompanyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndexCompany
     */
    select?: IndexCompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndexCompany
     */
    omit?: IndexCompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndexCompanyInclude<ExtArgs> | null
  }


  /**
   * Model CEO
   */

  export type AggregateCEO = {
    _count: CEOCountAggregateOutputType | null
    _avg: CEOAvgAggregateOutputType | null
    _sum: CEOSumAggregateOutputType | null
    _min: CEOMinAggregateOutputType | null
    _max: CEOMaxAggregateOutputType | null
  }

  export type CEOAvgAggregateOutputType = {
    id: number | null
    companyId: number | null
  }

  export type CEOSumAggregateOutputType = {
    id: number | null
    companyId: number | null
  }

  export type CEOMinAggregateOutputType = {
    id: number | null
    name: string | null
    imageUrl: string | null
    personality: string | null
    bio: string | null
    companyId: number | null
  }

  export type CEOMaxAggregateOutputType = {
    id: number | null
    name: string | null
    imageUrl: string | null
    personality: string | null
    bio: string | null
    companyId: number | null
  }

  export type CEOCountAggregateOutputType = {
    id: number
    name: number
    imageUrl: number
    personality: number
    bio: number
    companyId: number
    _all: number
  }


  export type CEOAvgAggregateInputType = {
    id?: true
    companyId?: true
  }

  export type CEOSumAggregateInputType = {
    id?: true
    companyId?: true
  }

  export type CEOMinAggregateInputType = {
    id?: true
    name?: true
    imageUrl?: true
    personality?: true
    bio?: true
    companyId?: true
  }

  export type CEOMaxAggregateInputType = {
    id?: true
    name?: true
    imageUrl?: true
    personality?: true
    bio?: true
    companyId?: true
  }

  export type CEOCountAggregateInputType = {
    id?: true
    name?: true
    imageUrl?: true
    personality?: true
    bio?: true
    companyId?: true
    _all?: true
  }

  export type CEOAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CEO to aggregate.
     */
    where?: CEOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CEOS to fetch.
     */
    orderBy?: CEOOrderByWithRelationInput | CEOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CEOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CEOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CEOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CEOS
    **/
    _count?: true | CEOCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CEOAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CEOSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CEOMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CEOMaxAggregateInputType
  }

  export type GetCEOAggregateType<T extends CEOAggregateArgs> = {
        [P in keyof T & keyof AggregateCEO]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCEO[P]>
      : GetScalarType<T[P], AggregateCEO[P]>
  }




  export type CEOGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CEOWhereInput
    orderBy?: CEOOrderByWithAggregationInput | CEOOrderByWithAggregationInput[]
    by: CEOScalarFieldEnum[] | CEOScalarFieldEnum
    having?: CEOScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CEOCountAggregateInputType | true
    _avg?: CEOAvgAggregateInputType
    _sum?: CEOSumAggregateInputType
    _min?: CEOMinAggregateInputType
    _max?: CEOMaxAggregateInputType
  }

  export type CEOGroupByOutputType = {
    id: number
    name: string
    imageUrl: string | null
    personality: string | null
    bio: string | null
    companyId: number | null
    _count: CEOCountAggregateOutputType | null
    _avg: CEOAvgAggregateOutputType | null
    _sum: CEOSumAggregateOutputType | null
    _min: CEOMinAggregateOutputType | null
    _max: CEOMaxAggregateOutputType | null
  }

  type GetCEOGroupByPayload<T extends CEOGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CEOGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CEOGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CEOGroupByOutputType[P]>
            : GetScalarType<T[P], CEOGroupByOutputType[P]>
        }
      >
    >


  export type CEOSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    imageUrl?: boolean
    personality?: boolean
    bio?: boolean
    companyId?: boolean
    company?: boolean | CEO$companyArgs<ExtArgs>
  }, ExtArgs["result"]["cEO"]>

  export type CEOSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    imageUrl?: boolean
    personality?: boolean
    bio?: boolean
    companyId?: boolean
    company?: boolean | CEO$companyArgs<ExtArgs>
  }, ExtArgs["result"]["cEO"]>

  export type CEOSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    imageUrl?: boolean
    personality?: boolean
    bio?: boolean
    companyId?: boolean
    company?: boolean | CEO$companyArgs<ExtArgs>
  }, ExtArgs["result"]["cEO"]>

  export type CEOSelectScalar = {
    id?: boolean
    name?: boolean
    imageUrl?: boolean
    personality?: boolean
    bio?: boolean
    companyId?: boolean
  }

  export type CEOOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "imageUrl" | "personality" | "bio" | "companyId", ExtArgs["result"]["cEO"]>
  export type CEOInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CEO$companyArgs<ExtArgs>
  }
  export type CEOIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CEO$companyArgs<ExtArgs>
  }
  export type CEOIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CEO$companyArgs<ExtArgs>
  }

  export type $CEOPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CEO"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      imageUrl: string | null
      personality: string | null
      bio: string | null
      companyId: number | null
    }, ExtArgs["result"]["cEO"]>
    composites: {}
  }

  type CEOGetPayload<S extends boolean | null | undefined | CEODefaultArgs> = $Result.GetResult<Prisma.$CEOPayload, S>

  type CEOCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CEOFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CEOCountAggregateInputType | true
    }

  export interface CEODelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CEO'], meta: { name: 'CEO' } }
    /**
     * Find zero or one CEO that matches the filter.
     * @param {CEOFindUniqueArgs} args - Arguments to find a CEO
     * @example
     * // Get one CEO
     * const cEO = await prisma.cEO.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CEOFindUniqueArgs>(args: SelectSubset<T, CEOFindUniqueArgs<ExtArgs>>): Prisma__CEOClient<$Result.GetResult<Prisma.$CEOPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one CEO that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CEOFindUniqueOrThrowArgs} args - Arguments to find a CEO
     * @example
     * // Get one CEO
     * const cEO = await prisma.cEO.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CEOFindUniqueOrThrowArgs>(args: SelectSubset<T, CEOFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CEOClient<$Result.GetResult<Prisma.$CEOPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first CEO that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CEOFindFirstArgs} args - Arguments to find a CEO
     * @example
     * // Get one CEO
     * const cEO = await prisma.cEO.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CEOFindFirstArgs>(args?: SelectSubset<T, CEOFindFirstArgs<ExtArgs>>): Prisma__CEOClient<$Result.GetResult<Prisma.$CEOPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first CEO that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CEOFindFirstOrThrowArgs} args - Arguments to find a CEO
     * @example
     * // Get one CEO
     * const cEO = await prisma.cEO.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CEOFindFirstOrThrowArgs>(args?: SelectSubset<T, CEOFindFirstOrThrowArgs<ExtArgs>>): Prisma__CEOClient<$Result.GetResult<Prisma.$CEOPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more CEOS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CEOFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CEOS
     * const cEOS = await prisma.cEO.findMany()
     * 
     * // Get first 10 CEOS
     * const cEOS = await prisma.cEO.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cEOWithIdOnly = await prisma.cEO.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CEOFindManyArgs>(args?: SelectSubset<T, CEOFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CEOPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a CEO.
     * @param {CEOCreateArgs} args - Arguments to create a CEO.
     * @example
     * // Create one CEO
     * const CEO = await prisma.cEO.create({
     *   data: {
     *     // ... data to create a CEO
     *   }
     * })
     * 
     */
    create<T extends CEOCreateArgs>(args: SelectSubset<T, CEOCreateArgs<ExtArgs>>): Prisma__CEOClient<$Result.GetResult<Prisma.$CEOPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many CEOS.
     * @param {CEOCreateManyArgs} args - Arguments to create many CEOS.
     * @example
     * // Create many CEOS
     * const cEO = await prisma.cEO.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CEOCreateManyArgs>(args?: SelectSubset<T, CEOCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CEOS and returns the data saved in the database.
     * @param {CEOCreateManyAndReturnArgs} args - Arguments to create many CEOS.
     * @example
     * // Create many CEOS
     * const cEO = await prisma.cEO.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CEOS and only return the `id`
     * const cEOWithIdOnly = await prisma.cEO.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CEOCreateManyAndReturnArgs>(args?: SelectSubset<T, CEOCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CEOPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a CEO.
     * @param {CEODeleteArgs} args - Arguments to delete one CEO.
     * @example
     * // Delete one CEO
     * const CEO = await prisma.cEO.delete({
     *   where: {
     *     // ... filter to delete one CEO
     *   }
     * })
     * 
     */
    delete<T extends CEODeleteArgs>(args: SelectSubset<T, CEODeleteArgs<ExtArgs>>): Prisma__CEOClient<$Result.GetResult<Prisma.$CEOPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one CEO.
     * @param {CEOUpdateArgs} args - Arguments to update one CEO.
     * @example
     * // Update one CEO
     * const cEO = await prisma.cEO.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CEOUpdateArgs>(args: SelectSubset<T, CEOUpdateArgs<ExtArgs>>): Prisma__CEOClient<$Result.GetResult<Prisma.$CEOPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more CEOS.
     * @param {CEODeleteManyArgs} args - Arguments to filter CEOS to delete.
     * @example
     * // Delete a few CEOS
     * const { count } = await prisma.cEO.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CEODeleteManyArgs>(args?: SelectSubset<T, CEODeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CEOS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CEOUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CEOS
     * const cEO = await prisma.cEO.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CEOUpdateManyArgs>(args: SelectSubset<T, CEOUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CEOS and returns the data updated in the database.
     * @param {CEOUpdateManyAndReturnArgs} args - Arguments to update many CEOS.
     * @example
     * // Update many CEOS
     * const cEO = await prisma.cEO.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CEOS and only return the `id`
     * const cEOWithIdOnly = await prisma.cEO.updateManyAndReturn({
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
    updateManyAndReturn<T extends CEOUpdateManyAndReturnArgs>(args: SelectSubset<T, CEOUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CEOPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one CEO.
     * @param {CEOUpsertArgs} args - Arguments to update or create a CEO.
     * @example
     * // Update or create a CEO
     * const cEO = await prisma.cEO.upsert({
     *   create: {
     *     // ... data to create a CEO
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CEO we want to update
     *   }
     * })
     */
    upsert<T extends CEOUpsertArgs>(args: SelectSubset<T, CEOUpsertArgs<ExtArgs>>): Prisma__CEOClient<$Result.GetResult<Prisma.$CEOPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of CEOS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CEOCountArgs} args - Arguments to filter CEOS to count.
     * @example
     * // Count the number of CEOS
     * const count = await prisma.cEO.count({
     *   where: {
     *     // ... the filter for the CEOS we want to count
     *   }
     * })
    **/
    count<T extends CEOCountArgs>(
      args?: Subset<T, CEOCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CEOCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CEO.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CEOAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CEOAggregateArgs>(args: Subset<T, CEOAggregateArgs>): Prisma.PrismaPromise<GetCEOAggregateType<T>>

    /**
     * Group by CEO.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CEOGroupByArgs} args - Group by arguments.
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
      T extends CEOGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CEOGroupByArgs['orderBy'] }
        : { orderBy?: CEOGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CEOGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCEOGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CEO model
   */
  readonly fields: CEOFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CEO.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CEOClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CEO$companyArgs<ExtArgs> = {}>(args?: Subset<T, CEO$companyArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
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
   * Fields of the CEO model
   */ 
  interface CEOFieldRefs {
    readonly id: FieldRef<"CEO", 'Int'>
    readonly name: FieldRef<"CEO", 'String'>
    readonly imageUrl: FieldRef<"CEO", 'String'>
    readonly personality: FieldRef<"CEO", 'String'>
    readonly bio: FieldRef<"CEO", 'String'>
    readonly companyId: FieldRef<"CEO", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CEO findUnique
   */
  export type CEOFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CEO
     */
    select?: CEOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CEO
     */
    omit?: CEOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CEOInclude<ExtArgs> | null
    /**
     * Filter, which CEO to fetch.
     */
    where: CEOWhereUniqueInput
  }

  /**
   * CEO findUniqueOrThrow
   */
  export type CEOFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CEO
     */
    select?: CEOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CEO
     */
    omit?: CEOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CEOInclude<ExtArgs> | null
    /**
     * Filter, which CEO to fetch.
     */
    where: CEOWhereUniqueInput
  }

  /**
   * CEO findFirst
   */
  export type CEOFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CEO
     */
    select?: CEOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CEO
     */
    omit?: CEOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CEOInclude<ExtArgs> | null
    /**
     * Filter, which CEO to fetch.
     */
    where?: CEOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CEOS to fetch.
     */
    orderBy?: CEOOrderByWithRelationInput | CEOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CEOS.
     */
    cursor?: CEOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CEOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CEOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CEOS.
     */
    distinct?: CEOScalarFieldEnum | CEOScalarFieldEnum[]
  }

  /**
   * CEO findFirstOrThrow
   */
  export type CEOFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CEO
     */
    select?: CEOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CEO
     */
    omit?: CEOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CEOInclude<ExtArgs> | null
    /**
     * Filter, which CEO to fetch.
     */
    where?: CEOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CEOS to fetch.
     */
    orderBy?: CEOOrderByWithRelationInput | CEOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CEOS.
     */
    cursor?: CEOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CEOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CEOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CEOS.
     */
    distinct?: CEOScalarFieldEnum | CEOScalarFieldEnum[]
  }

  /**
   * CEO findMany
   */
  export type CEOFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CEO
     */
    select?: CEOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CEO
     */
    omit?: CEOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CEOInclude<ExtArgs> | null
    /**
     * Filter, which CEOS to fetch.
     */
    where?: CEOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CEOS to fetch.
     */
    orderBy?: CEOOrderByWithRelationInput | CEOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CEOS.
     */
    cursor?: CEOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CEOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CEOS.
     */
    skip?: number
    distinct?: CEOScalarFieldEnum | CEOScalarFieldEnum[]
  }

  /**
   * CEO create
   */
  export type CEOCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CEO
     */
    select?: CEOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CEO
     */
    omit?: CEOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CEOInclude<ExtArgs> | null
    /**
     * The data needed to create a CEO.
     */
    data: XOR<CEOCreateInput, CEOUncheckedCreateInput>
  }

  /**
   * CEO createMany
   */
  export type CEOCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CEOS.
     */
    data: CEOCreateManyInput | CEOCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CEO createManyAndReturn
   */
  export type CEOCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CEO
     */
    select?: CEOSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CEO
     */
    omit?: CEOOmit<ExtArgs> | null
    /**
     * The data used to create many CEOS.
     */
    data: CEOCreateManyInput | CEOCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CEOIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CEO update
   */
  export type CEOUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CEO
     */
    select?: CEOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CEO
     */
    omit?: CEOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CEOInclude<ExtArgs> | null
    /**
     * The data needed to update a CEO.
     */
    data: XOR<CEOUpdateInput, CEOUncheckedUpdateInput>
    /**
     * Choose, which CEO to update.
     */
    where: CEOWhereUniqueInput
  }

  /**
   * CEO updateMany
   */
  export type CEOUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CEOS.
     */
    data: XOR<CEOUpdateManyMutationInput, CEOUncheckedUpdateManyInput>
    /**
     * Filter which CEOS to update
     */
    where?: CEOWhereInput
    /**
     * Limit how many CEOS to update.
     */
    limit?: number
  }

  /**
   * CEO updateManyAndReturn
   */
  export type CEOUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CEO
     */
    select?: CEOSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CEO
     */
    omit?: CEOOmit<ExtArgs> | null
    /**
     * The data used to update CEOS.
     */
    data: XOR<CEOUpdateManyMutationInput, CEOUncheckedUpdateManyInput>
    /**
     * Filter which CEOS to update
     */
    where?: CEOWhereInput
    /**
     * Limit how many CEOS to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CEOIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CEO upsert
   */
  export type CEOUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CEO
     */
    select?: CEOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CEO
     */
    omit?: CEOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CEOInclude<ExtArgs> | null
    /**
     * The filter to search for the CEO to update in case it exists.
     */
    where: CEOWhereUniqueInput
    /**
     * In case the CEO found by the `where` argument doesn't exist, create a new CEO with this data.
     */
    create: XOR<CEOCreateInput, CEOUncheckedCreateInput>
    /**
     * In case the CEO was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CEOUpdateInput, CEOUncheckedUpdateInput>
  }

  /**
   * CEO delete
   */
  export type CEODeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CEO
     */
    select?: CEOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CEO
     */
    omit?: CEOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CEOInclude<ExtArgs> | null
    /**
     * Filter which CEO to delete.
     */
    where: CEOWhereUniqueInput
  }

  /**
   * CEO deleteMany
   */
  export type CEODeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CEOS to delete
     */
    where?: CEOWhereInput
    /**
     * Limit how many CEOS to delete.
     */
    limit?: number
  }

  /**
   * CEO.company
   */
  export type CEO$companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    where?: CompanyWhereInput
  }

  /**
   * CEO without action
   */
  export type CEODefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CEO
     */
    select?: CEOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CEO
     */
    omit?: CEOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CEOInclude<ExtArgs> | null
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


  export const SectorScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type SectorScalarFieldEnum = (typeof SectorScalarFieldEnum)[keyof typeof SectorScalarFieldEnum]


  export const SubIndustryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    sectorId: 'sectorId'
  };

  export type SubIndustryScalarFieldEnum = (typeof SubIndustryScalarFieldEnum)[keyof typeof SubIndustryScalarFieldEnum]


  export const FinancialDataScalarFieldEnum: {
    id: 'id',
    companyId: 'companyId',
    year: 'year',
    revenue: 'revenue',
    netIncome: 'netIncome',
    grossProfit: 'grossProfit',
    operatingProfit: 'operatingProfit',
    operatingExpenses: 'operatingExpenses',
    costOfSales: 'costOfSales'
  };

  export type FinancialDataScalarFieldEnum = (typeof FinancialDataScalarFieldEnum)[keyof typeof FinancialDataScalarFieldEnum]


  export const CompanyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    tickerSymbol: 'tickerSymbol',
    description: 'description',
    logoUrl: 'logoUrl',
    sectorId: 'sectorId',
    subIndustryId: 'subIndustryId',
    latestPrice: 'latestPrice',
    sharesOutstanding: 'sharesOutstanding',
    valuation: 'valuation',
    ceoId: 'ceoId',
    rivalCompanyId: 'rivalCompanyId'
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


  export const StockPriceScalarFieldEnum: {
    id: 'id',
    companyId: 'companyId',
    timestamp: 'timestamp',
    price: 'price',
    momentum: 'momentum'
  };

  export type StockPriceScalarFieldEnum = (typeof StockPriceScalarFieldEnum)[keyof typeof StockPriceScalarFieldEnum]


  export const NewsArticleScalarFieldEnum: {
    id: 'id',
    companyId: 'companyId',
    timestamp: 'timestamp',
    headline: 'headline',
    content: 'content',
    sentiment: 'sentiment',
    source: 'source',
    reaction: 'reaction'
  };

  export type NewsArticleScalarFieldEnum = (typeof NewsArticleScalarFieldEnum)[keyof typeof NewsArticleScalarFieldEnum]


  export const IndexScalarFieldEnum: {
    id: 'id',
    name: 'name',
    tickerSymbol: 'tickerSymbol',
    description: 'description'
  };

  export type IndexScalarFieldEnum = (typeof IndexScalarFieldEnum)[keyof typeof IndexScalarFieldEnum]


  export const IndexPriceScalarFieldEnum: {
    id: 'id',
    indexId: 'indexId',
    timestamp: 'timestamp',
    price: 'price'
  };

  export type IndexPriceScalarFieldEnum = (typeof IndexPriceScalarFieldEnum)[keyof typeof IndexPriceScalarFieldEnum]


  export const IndexCompanyScalarFieldEnum: {
    id: 'id',
    indexId: 'indexId',
    companyId: 'companyId',
    weight: 'weight'
  };

  export type IndexCompanyScalarFieldEnum = (typeof IndexCompanyScalarFieldEnum)[keyof typeof IndexCompanyScalarFieldEnum]


  export const CEOScalarFieldEnum: {
    id: 'id',
    name: 'name',
    imageUrl: 'imageUrl',
    personality: 'personality',
    bio: 'bio',
    companyId: 'companyId'
  };

  export type CEOScalarFieldEnum = (typeof CEOScalarFieldEnum)[keyof typeof CEOScalarFieldEnum]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    
  /**
   * Deep Input Types
   */


  export type SectorWhereInput = {
    AND?: SectorWhereInput | SectorWhereInput[]
    OR?: SectorWhereInput[]
    NOT?: SectorWhereInput | SectorWhereInput[]
    id?: IntFilter<"Sector"> | number
    name?: StringFilter<"Sector"> | string
    companies?: CompanyListRelationFilter
    subIndustries?: SubIndustryListRelationFilter
  }

  export type SectorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    companies?: CompanyOrderByRelationAggregateInput
    subIndustries?: SubIndustryOrderByRelationAggregateInput
  }

  export type SectorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: SectorWhereInput | SectorWhereInput[]
    OR?: SectorWhereInput[]
    NOT?: SectorWhereInput | SectorWhereInput[]
    companies?: CompanyListRelationFilter
    subIndustries?: SubIndustryListRelationFilter
  }, "id" | "name">

  export type SectorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: SectorCountOrderByAggregateInput
    _avg?: SectorAvgOrderByAggregateInput
    _max?: SectorMaxOrderByAggregateInput
    _min?: SectorMinOrderByAggregateInput
    _sum?: SectorSumOrderByAggregateInput
  }

  export type SectorScalarWhereWithAggregatesInput = {
    AND?: SectorScalarWhereWithAggregatesInput | SectorScalarWhereWithAggregatesInput[]
    OR?: SectorScalarWhereWithAggregatesInput[]
    NOT?: SectorScalarWhereWithAggregatesInput | SectorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Sector"> | number
    name?: StringWithAggregatesFilter<"Sector"> | string
  }

  export type SubIndustryWhereInput = {
    AND?: SubIndustryWhereInput | SubIndustryWhereInput[]
    OR?: SubIndustryWhereInput[]
    NOT?: SubIndustryWhereInput | SubIndustryWhereInput[]
    id?: IntFilter<"SubIndustry"> | number
    name?: StringFilter<"SubIndustry"> | string
    sectorId?: IntFilter<"SubIndustry"> | number
    sector?: XOR<SectorScalarRelationFilter, SectorWhereInput>
    companies?: CompanyListRelationFilter
  }

  export type SubIndustryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    sectorId?: SortOrder
    sector?: SectorOrderByWithRelationInput
    companies?: CompanyOrderByRelationAggregateInput
  }

  export type SubIndustryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: SubIndustryWhereInput | SubIndustryWhereInput[]
    OR?: SubIndustryWhereInput[]
    NOT?: SubIndustryWhereInput | SubIndustryWhereInput[]
    sectorId?: IntFilter<"SubIndustry"> | number
    sector?: XOR<SectorScalarRelationFilter, SectorWhereInput>
    companies?: CompanyListRelationFilter
  }, "id" | "name">

  export type SubIndustryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    sectorId?: SortOrder
    _count?: SubIndustryCountOrderByAggregateInput
    _avg?: SubIndustryAvgOrderByAggregateInput
    _max?: SubIndustryMaxOrderByAggregateInput
    _min?: SubIndustryMinOrderByAggregateInput
    _sum?: SubIndustrySumOrderByAggregateInput
  }

  export type SubIndustryScalarWhereWithAggregatesInput = {
    AND?: SubIndustryScalarWhereWithAggregatesInput | SubIndustryScalarWhereWithAggregatesInput[]
    OR?: SubIndustryScalarWhereWithAggregatesInput[]
    NOT?: SubIndustryScalarWhereWithAggregatesInput | SubIndustryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SubIndustry"> | number
    name?: StringWithAggregatesFilter<"SubIndustry"> | string
    sectorId?: IntWithAggregatesFilter<"SubIndustry"> | number
  }

  export type FinancialDataWhereInput = {
    AND?: FinancialDataWhereInput | FinancialDataWhereInput[]
    OR?: FinancialDataWhereInput[]
    NOT?: FinancialDataWhereInput | FinancialDataWhereInput[]
    id?: IntFilter<"FinancialData"> | number
    companyId?: IntFilter<"FinancialData"> | number
    year?: IntFilter<"FinancialData"> | number
    revenue?: FloatNullableFilter<"FinancialData"> | number | null
    netIncome?: FloatNullableFilter<"FinancialData"> | number | null
    grossProfit?: FloatNullableFilter<"FinancialData"> | number | null
    operatingProfit?: FloatNullableFilter<"FinancialData"> | number | null
    operatingExpenses?: FloatNullableFilter<"FinancialData"> | number | null
    costOfSales?: FloatNullableFilter<"FinancialData"> | number | null
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
  }

  export type FinancialDataOrderByWithRelationInput = {
    id?: SortOrder
    companyId?: SortOrder
    year?: SortOrder
    revenue?: SortOrderInput | SortOrder
    netIncome?: SortOrderInput | SortOrder
    grossProfit?: SortOrderInput | SortOrder
    operatingProfit?: SortOrderInput | SortOrder
    operatingExpenses?: SortOrderInput | SortOrder
    costOfSales?: SortOrderInput | SortOrder
    company?: CompanyOrderByWithRelationInput
  }

  export type FinancialDataWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FinancialDataWhereInput | FinancialDataWhereInput[]
    OR?: FinancialDataWhereInput[]
    NOT?: FinancialDataWhereInput | FinancialDataWhereInput[]
    companyId?: IntFilter<"FinancialData"> | number
    year?: IntFilter<"FinancialData"> | number
    revenue?: FloatNullableFilter<"FinancialData"> | number | null
    netIncome?: FloatNullableFilter<"FinancialData"> | number | null
    grossProfit?: FloatNullableFilter<"FinancialData"> | number | null
    operatingProfit?: FloatNullableFilter<"FinancialData"> | number | null
    operatingExpenses?: FloatNullableFilter<"FinancialData"> | number | null
    costOfSales?: FloatNullableFilter<"FinancialData"> | number | null
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
  }, "id">

  export type FinancialDataOrderByWithAggregationInput = {
    id?: SortOrder
    companyId?: SortOrder
    year?: SortOrder
    revenue?: SortOrderInput | SortOrder
    netIncome?: SortOrderInput | SortOrder
    grossProfit?: SortOrderInput | SortOrder
    operatingProfit?: SortOrderInput | SortOrder
    operatingExpenses?: SortOrderInput | SortOrder
    costOfSales?: SortOrderInput | SortOrder
    _count?: FinancialDataCountOrderByAggregateInput
    _avg?: FinancialDataAvgOrderByAggregateInput
    _max?: FinancialDataMaxOrderByAggregateInput
    _min?: FinancialDataMinOrderByAggregateInput
    _sum?: FinancialDataSumOrderByAggregateInput
  }

  export type FinancialDataScalarWhereWithAggregatesInput = {
    AND?: FinancialDataScalarWhereWithAggregatesInput | FinancialDataScalarWhereWithAggregatesInput[]
    OR?: FinancialDataScalarWhereWithAggregatesInput[]
    NOT?: FinancialDataScalarWhereWithAggregatesInput | FinancialDataScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FinancialData"> | number
    companyId?: IntWithAggregatesFilter<"FinancialData"> | number
    year?: IntWithAggregatesFilter<"FinancialData"> | number
    revenue?: FloatNullableWithAggregatesFilter<"FinancialData"> | number | null
    netIncome?: FloatNullableWithAggregatesFilter<"FinancialData"> | number | null
    grossProfit?: FloatNullableWithAggregatesFilter<"FinancialData"> | number | null
    operatingProfit?: FloatNullableWithAggregatesFilter<"FinancialData"> | number | null
    operatingExpenses?: FloatNullableWithAggregatesFilter<"FinancialData"> | number | null
    costOfSales?: FloatNullableWithAggregatesFilter<"FinancialData"> | number | null
  }

  export type CompanyWhereInput = {
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    id?: IntFilter<"Company"> | number
    name?: StringFilter<"Company"> | string
    tickerSymbol?: StringFilter<"Company"> | string
    description?: StringFilter<"Company"> | string
    logoUrl?: StringNullableFilter<"Company"> | string | null
    sectorId?: IntFilter<"Company"> | number
    subIndustryId?: IntFilter<"Company"> | number
    latestPrice?: FloatNullableFilter<"Company"> | number | null
    sharesOutstanding?: IntFilter<"Company"> | number
    valuation?: FloatNullableFilter<"Company"> | number | null
    ceoId?: IntNullableFilter<"Company"> | number | null
    rivalCompanyId?: IntNullableFilter<"Company"> | number | null
    sector?: XOR<SectorScalarRelationFilter, SectorWhereInput>
    subIndustry?: XOR<SubIndustryScalarRelationFilter, SubIndustryWhereInput>
    ceo?: XOR<CEONullableScalarRelationFilter, CEOWhereInput> | null
    stockPrices?: StockPriceListRelationFilter
    newsArticles?: NewsArticleListRelationFilter
    indices?: IndexCompanyListRelationFilter
    financialData?: FinancialDataListRelationFilter
    rivalCompany?: XOR<CompanyNullableScalarRelationFilter, CompanyWhereInput> | null
    rivalOf?: XOR<CompanyNullableScalarRelationFilter, CompanyWhereInput> | null
  }

  export type CompanyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    tickerSymbol?: SortOrder
    description?: SortOrder
    logoUrl?: SortOrderInput | SortOrder
    sectorId?: SortOrder
    subIndustryId?: SortOrder
    latestPrice?: SortOrderInput | SortOrder
    sharesOutstanding?: SortOrder
    valuation?: SortOrderInput | SortOrder
    ceoId?: SortOrderInput | SortOrder
    rivalCompanyId?: SortOrderInput | SortOrder
    sector?: SectorOrderByWithRelationInput
    subIndustry?: SubIndustryOrderByWithRelationInput
    ceo?: CEOOrderByWithRelationInput
    stockPrices?: StockPriceOrderByRelationAggregateInput
    newsArticles?: NewsArticleOrderByRelationAggregateInput
    indices?: IndexCompanyOrderByRelationAggregateInput
    financialData?: FinancialDataOrderByRelationAggregateInput
    rivalCompany?: CompanyOrderByWithRelationInput
    rivalOf?: CompanyOrderByWithRelationInput
  }

  export type CompanyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    tickerSymbol?: string
    rivalCompanyId?: number
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    description?: StringFilter<"Company"> | string
    logoUrl?: StringNullableFilter<"Company"> | string | null
    sectorId?: IntFilter<"Company"> | number
    subIndustryId?: IntFilter<"Company"> | number
    latestPrice?: FloatNullableFilter<"Company"> | number | null
    sharesOutstanding?: IntFilter<"Company"> | number
    valuation?: FloatNullableFilter<"Company"> | number | null
    ceoId?: IntNullableFilter<"Company"> | number | null
    sector?: XOR<SectorScalarRelationFilter, SectorWhereInput>
    subIndustry?: XOR<SubIndustryScalarRelationFilter, SubIndustryWhereInput>
    ceo?: XOR<CEONullableScalarRelationFilter, CEOWhereInput> | null
    stockPrices?: StockPriceListRelationFilter
    newsArticles?: NewsArticleListRelationFilter
    indices?: IndexCompanyListRelationFilter
    financialData?: FinancialDataListRelationFilter
    rivalCompany?: XOR<CompanyNullableScalarRelationFilter, CompanyWhereInput> | null
    rivalOf?: XOR<CompanyNullableScalarRelationFilter, CompanyWhereInput> | null
  }, "id" | "name" | "tickerSymbol" | "rivalCompanyId">

  export type CompanyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    tickerSymbol?: SortOrder
    description?: SortOrder
    logoUrl?: SortOrderInput | SortOrder
    sectorId?: SortOrder
    subIndustryId?: SortOrder
    latestPrice?: SortOrderInput | SortOrder
    sharesOutstanding?: SortOrder
    valuation?: SortOrderInput | SortOrder
    ceoId?: SortOrderInput | SortOrder
    rivalCompanyId?: SortOrderInput | SortOrder
    _count?: CompanyCountOrderByAggregateInput
    _avg?: CompanyAvgOrderByAggregateInput
    _max?: CompanyMaxOrderByAggregateInput
    _min?: CompanyMinOrderByAggregateInput
    _sum?: CompanySumOrderByAggregateInput
  }

  export type CompanyScalarWhereWithAggregatesInput = {
    AND?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    OR?: CompanyScalarWhereWithAggregatesInput[]
    NOT?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Company"> | number
    name?: StringWithAggregatesFilter<"Company"> | string
    tickerSymbol?: StringWithAggregatesFilter<"Company"> | string
    description?: StringWithAggregatesFilter<"Company"> | string
    logoUrl?: StringNullableWithAggregatesFilter<"Company"> | string | null
    sectorId?: IntWithAggregatesFilter<"Company"> | number
    subIndustryId?: IntWithAggregatesFilter<"Company"> | number
    latestPrice?: FloatNullableWithAggregatesFilter<"Company"> | number | null
    sharesOutstanding?: IntWithAggregatesFilter<"Company"> | number
    valuation?: FloatNullableWithAggregatesFilter<"Company"> | number | null
    ceoId?: IntNullableWithAggregatesFilter<"Company"> | number | null
    rivalCompanyId?: IntNullableWithAggregatesFilter<"Company"> | number | null
  }

  export type StockPriceWhereInput = {
    AND?: StockPriceWhereInput | StockPriceWhereInput[]
    OR?: StockPriceWhereInput[]
    NOT?: StockPriceWhereInput | StockPriceWhereInput[]
    id?: IntFilter<"StockPrice"> | number
    companyId?: IntFilter<"StockPrice"> | number
    timestamp?: DateTimeFilter<"StockPrice"> | Date | string
    price?: FloatFilter<"StockPrice"> | number
    momentum?: FloatFilter<"StockPrice"> | number
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
  }

  export type StockPriceOrderByWithRelationInput = {
    id?: SortOrder
    companyId?: SortOrder
    timestamp?: SortOrder
    price?: SortOrder
    momentum?: SortOrder
    company?: CompanyOrderByWithRelationInput
  }

  export type StockPriceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StockPriceWhereInput | StockPriceWhereInput[]
    OR?: StockPriceWhereInput[]
    NOT?: StockPriceWhereInput | StockPriceWhereInput[]
    companyId?: IntFilter<"StockPrice"> | number
    timestamp?: DateTimeFilter<"StockPrice"> | Date | string
    price?: FloatFilter<"StockPrice"> | number
    momentum?: FloatFilter<"StockPrice"> | number
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
  }, "id">

  export type StockPriceOrderByWithAggregationInput = {
    id?: SortOrder
    companyId?: SortOrder
    timestamp?: SortOrder
    price?: SortOrder
    momentum?: SortOrder
    _count?: StockPriceCountOrderByAggregateInput
    _avg?: StockPriceAvgOrderByAggregateInput
    _max?: StockPriceMaxOrderByAggregateInput
    _min?: StockPriceMinOrderByAggregateInput
    _sum?: StockPriceSumOrderByAggregateInput
  }

  export type StockPriceScalarWhereWithAggregatesInput = {
    AND?: StockPriceScalarWhereWithAggregatesInput | StockPriceScalarWhereWithAggregatesInput[]
    OR?: StockPriceScalarWhereWithAggregatesInput[]
    NOT?: StockPriceScalarWhereWithAggregatesInput | StockPriceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"StockPrice"> | number
    companyId?: IntWithAggregatesFilter<"StockPrice"> | number
    timestamp?: DateTimeWithAggregatesFilter<"StockPrice"> | Date | string
    price?: FloatWithAggregatesFilter<"StockPrice"> | number
    momentum?: FloatWithAggregatesFilter<"StockPrice"> | number
  }

  export type NewsArticleWhereInput = {
    AND?: NewsArticleWhereInput | NewsArticleWhereInput[]
    OR?: NewsArticleWhereInput[]
    NOT?: NewsArticleWhereInput | NewsArticleWhereInput[]
    id?: IntFilter<"NewsArticle"> | number
    companyId?: IntFilter<"NewsArticle"> | number
    timestamp?: DateTimeFilter<"NewsArticle"> | Date | string
    headline?: StringFilter<"NewsArticle"> | string
    content?: StringFilter<"NewsArticle"> | string
    sentiment?: FloatNullableFilter<"NewsArticle"> | number | null
    source?: StringNullableFilter<"NewsArticle"> | string | null
    reaction?: StringNullableFilter<"NewsArticle"> | string | null
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
  }

  export type NewsArticleOrderByWithRelationInput = {
    id?: SortOrder
    companyId?: SortOrder
    timestamp?: SortOrder
    headline?: SortOrder
    content?: SortOrder
    sentiment?: SortOrderInput | SortOrder
    source?: SortOrderInput | SortOrder
    reaction?: SortOrderInput | SortOrder
    company?: CompanyOrderByWithRelationInput
  }

  export type NewsArticleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NewsArticleWhereInput | NewsArticleWhereInput[]
    OR?: NewsArticleWhereInput[]
    NOT?: NewsArticleWhereInput | NewsArticleWhereInput[]
    companyId?: IntFilter<"NewsArticle"> | number
    timestamp?: DateTimeFilter<"NewsArticle"> | Date | string
    headline?: StringFilter<"NewsArticle"> | string
    content?: StringFilter<"NewsArticle"> | string
    sentiment?: FloatNullableFilter<"NewsArticle"> | number | null
    source?: StringNullableFilter<"NewsArticle"> | string | null
    reaction?: StringNullableFilter<"NewsArticle"> | string | null
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
  }, "id">

  export type NewsArticleOrderByWithAggregationInput = {
    id?: SortOrder
    companyId?: SortOrder
    timestamp?: SortOrder
    headline?: SortOrder
    content?: SortOrder
    sentiment?: SortOrderInput | SortOrder
    source?: SortOrderInput | SortOrder
    reaction?: SortOrderInput | SortOrder
    _count?: NewsArticleCountOrderByAggregateInput
    _avg?: NewsArticleAvgOrderByAggregateInput
    _max?: NewsArticleMaxOrderByAggregateInput
    _min?: NewsArticleMinOrderByAggregateInput
    _sum?: NewsArticleSumOrderByAggregateInput
  }

  export type NewsArticleScalarWhereWithAggregatesInput = {
    AND?: NewsArticleScalarWhereWithAggregatesInput | NewsArticleScalarWhereWithAggregatesInput[]
    OR?: NewsArticleScalarWhereWithAggregatesInput[]
    NOT?: NewsArticleScalarWhereWithAggregatesInput | NewsArticleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"NewsArticle"> | number
    companyId?: IntWithAggregatesFilter<"NewsArticle"> | number
    timestamp?: DateTimeWithAggregatesFilter<"NewsArticle"> | Date | string
    headline?: StringWithAggregatesFilter<"NewsArticle"> | string
    content?: StringWithAggregatesFilter<"NewsArticle"> | string
    sentiment?: FloatNullableWithAggregatesFilter<"NewsArticle"> | number | null
    source?: StringNullableWithAggregatesFilter<"NewsArticle"> | string | null
    reaction?: StringNullableWithAggregatesFilter<"NewsArticle"> | string | null
  }

  export type IndexWhereInput = {
    AND?: IndexWhereInput | IndexWhereInput[]
    OR?: IndexWhereInput[]
    NOT?: IndexWhereInput | IndexWhereInput[]
    id?: IntFilter<"Index"> | number
    name?: StringFilter<"Index"> | string
    tickerSymbol?: StringFilter<"Index"> | string
    description?: StringFilter<"Index"> | string
    indexPrices?: IndexPriceListRelationFilter
    companies?: IndexCompanyListRelationFilter
  }

  export type IndexOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    tickerSymbol?: SortOrder
    description?: SortOrder
    indexPrices?: IndexPriceOrderByRelationAggregateInput
    companies?: IndexCompanyOrderByRelationAggregateInput
  }

  export type IndexWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    tickerSymbol?: string
    AND?: IndexWhereInput | IndexWhereInput[]
    OR?: IndexWhereInput[]
    NOT?: IndexWhereInput | IndexWhereInput[]
    description?: StringFilter<"Index"> | string
    indexPrices?: IndexPriceListRelationFilter
    companies?: IndexCompanyListRelationFilter
  }, "id" | "name" | "tickerSymbol">

  export type IndexOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    tickerSymbol?: SortOrder
    description?: SortOrder
    _count?: IndexCountOrderByAggregateInput
    _avg?: IndexAvgOrderByAggregateInput
    _max?: IndexMaxOrderByAggregateInput
    _min?: IndexMinOrderByAggregateInput
    _sum?: IndexSumOrderByAggregateInput
  }

  export type IndexScalarWhereWithAggregatesInput = {
    AND?: IndexScalarWhereWithAggregatesInput | IndexScalarWhereWithAggregatesInput[]
    OR?: IndexScalarWhereWithAggregatesInput[]
    NOT?: IndexScalarWhereWithAggregatesInput | IndexScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Index"> | number
    name?: StringWithAggregatesFilter<"Index"> | string
    tickerSymbol?: StringWithAggregatesFilter<"Index"> | string
    description?: StringWithAggregatesFilter<"Index"> | string
  }

  export type IndexPriceWhereInput = {
    AND?: IndexPriceWhereInput | IndexPriceWhereInput[]
    OR?: IndexPriceWhereInput[]
    NOT?: IndexPriceWhereInput | IndexPriceWhereInput[]
    id?: IntFilter<"IndexPrice"> | number
    indexId?: IntFilter<"IndexPrice"> | number
    timestamp?: DateTimeFilter<"IndexPrice"> | Date | string
    price?: FloatFilter<"IndexPrice"> | number
    index?: XOR<IndexScalarRelationFilter, IndexWhereInput>
  }

  export type IndexPriceOrderByWithRelationInput = {
    id?: SortOrder
    indexId?: SortOrder
    timestamp?: SortOrder
    price?: SortOrder
    index?: IndexOrderByWithRelationInput
  }

  export type IndexPriceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: IndexPriceWhereInput | IndexPriceWhereInput[]
    OR?: IndexPriceWhereInput[]
    NOT?: IndexPriceWhereInput | IndexPriceWhereInput[]
    indexId?: IntFilter<"IndexPrice"> | number
    timestamp?: DateTimeFilter<"IndexPrice"> | Date | string
    price?: FloatFilter<"IndexPrice"> | number
    index?: XOR<IndexScalarRelationFilter, IndexWhereInput>
  }, "id">

  export type IndexPriceOrderByWithAggregationInput = {
    id?: SortOrder
    indexId?: SortOrder
    timestamp?: SortOrder
    price?: SortOrder
    _count?: IndexPriceCountOrderByAggregateInput
    _avg?: IndexPriceAvgOrderByAggregateInput
    _max?: IndexPriceMaxOrderByAggregateInput
    _min?: IndexPriceMinOrderByAggregateInput
    _sum?: IndexPriceSumOrderByAggregateInput
  }

  export type IndexPriceScalarWhereWithAggregatesInput = {
    AND?: IndexPriceScalarWhereWithAggregatesInput | IndexPriceScalarWhereWithAggregatesInput[]
    OR?: IndexPriceScalarWhereWithAggregatesInput[]
    NOT?: IndexPriceScalarWhereWithAggregatesInput | IndexPriceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"IndexPrice"> | number
    indexId?: IntWithAggregatesFilter<"IndexPrice"> | number
    timestamp?: DateTimeWithAggregatesFilter<"IndexPrice"> | Date | string
    price?: FloatWithAggregatesFilter<"IndexPrice"> | number
  }

  export type IndexCompanyWhereInput = {
    AND?: IndexCompanyWhereInput | IndexCompanyWhereInput[]
    OR?: IndexCompanyWhereInput[]
    NOT?: IndexCompanyWhereInput | IndexCompanyWhereInput[]
    id?: IntFilter<"IndexCompany"> | number
    indexId?: IntFilter<"IndexCompany"> | number
    companyId?: IntFilter<"IndexCompany"> | number
    weight?: FloatFilter<"IndexCompany"> | number
    index?: XOR<IndexScalarRelationFilter, IndexWhereInput>
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
  }

  export type IndexCompanyOrderByWithRelationInput = {
    id?: SortOrder
    indexId?: SortOrder
    companyId?: SortOrder
    weight?: SortOrder
    index?: IndexOrderByWithRelationInput
    company?: CompanyOrderByWithRelationInput
  }

  export type IndexCompanyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    indexId_companyId?: IndexCompanyIndexIdCompanyIdCompoundUniqueInput
    AND?: IndexCompanyWhereInput | IndexCompanyWhereInput[]
    OR?: IndexCompanyWhereInput[]
    NOT?: IndexCompanyWhereInput | IndexCompanyWhereInput[]
    indexId?: IntFilter<"IndexCompany"> | number
    companyId?: IntFilter<"IndexCompany"> | number
    weight?: FloatFilter<"IndexCompany"> | number
    index?: XOR<IndexScalarRelationFilter, IndexWhereInput>
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
  }, "id" | "indexId_companyId">

  export type IndexCompanyOrderByWithAggregationInput = {
    id?: SortOrder
    indexId?: SortOrder
    companyId?: SortOrder
    weight?: SortOrder
    _count?: IndexCompanyCountOrderByAggregateInput
    _avg?: IndexCompanyAvgOrderByAggregateInput
    _max?: IndexCompanyMaxOrderByAggregateInput
    _min?: IndexCompanyMinOrderByAggregateInput
    _sum?: IndexCompanySumOrderByAggregateInput
  }

  export type IndexCompanyScalarWhereWithAggregatesInput = {
    AND?: IndexCompanyScalarWhereWithAggregatesInput | IndexCompanyScalarWhereWithAggregatesInput[]
    OR?: IndexCompanyScalarWhereWithAggregatesInput[]
    NOT?: IndexCompanyScalarWhereWithAggregatesInput | IndexCompanyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"IndexCompany"> | number
    indexId?: IntWithAggregatesFilter<"IndexCompany"> | number
    companyId?: IntWithAggregatesFilter<"IndexCompany"> | number
    weight?: FloatWithAggregatesFilter<"IndexCompany"> | number
  }

  export type CEOWhereInput = {
    AND?: CEOWhereInput | CEOWhereInput[]
    OR?: CEOWhereInput[]
    NOT?: CEOWhereInput | CEOWhereInput[]
    id?: IntFilter<"CEO"> | number
    name?: StringFilter<"CEO"> | string
    imageUrl?: StringNullableFilter<"CEO"> | string | null
    personality?: StringNullableFilter<"CEO"> | string | null
    bio?: StringNullableFilter<"CEO"> | string | null
    companyId?: IntNullableFilter<"CEO"> | number | null
    company?: XOR<CompanyNullableScalarRelationFilter, CompanyWhereInput> | null
  }

  export type CEOOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    personality?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    companyId?: SortOrderInput | SortOrder
    company?: CompanyOrderByWithRelationInput
  }

  export type CEOWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    companyId?: number
    AND?: CEOWhereInput | CEOWhereInput[]
    OR?: CEOWhereInput[]
    NOT?: CEOWhereInput | CEOWhereInput[]
    imageUrl?: StringNullableFilter<"CEO"> | string | null
    personality?: StringNullableFilter<"CEO"> | string | null
    bio?: StringNullableFilter<"CEO"> | string | null
    company?: XOR<CompanyNullableScalarRelationFilter, CompanyWhereInput> | null
  }, "id" | "name" | "companyId">

  export type CEOOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    personality?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    companyId?: SortOrderInput | SortOrder
    _count?: CEOCountOrderByAggregateInput
    _avg?: CEOAvgOrderByAggregateInput
    _max?: CEOMaxOrderByAggregateInput
    _min?: CEOMinOrderByAggregateInput
    _sum?: CEOSumOrderByAggregateInput
  }

  export type CEOScalarWhereWithAggregatesInput = {
    AND?: CEOScalarWhereWithAggregatesInput | CEOScalarWhereWithAggregatesInput[]
    OR?: CEOScalarWhereWithAggregatesInput[]
    NOT?: CEOScalarWhereWithAggregatesInput | CEOScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CEO"> | number
    name?: StringWithAggregatesFilter<"CEO"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"CEO"> | string | null
    personality?: StringNullableWithAggregatesFilter<"CEO"> | string | null
    bio?: StringNullableWithAggregatesFilter<"CEO"> | string | null
    companyId?: IntNullableWithAggregatesFilter<"CEO"> | number | null
  }

  export type SectorCreateInput = {
    name: string
    companies?: CompanyCreateNestedManyWithoutSectorInput
    subIndustries?: SubIndustryCreateNestedManyWithoutSectorInput
  }

  export type SectorUncheckedCreateInput = {
    id?: number
    name: string
    companies?: CompanyUncheckedCreateNestedManyWithoutSectorInput
    subIndustries?: SubIndustryUncheckedCreateNestedManyWithoutSectorInput
  }

  export type SectorUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    companies?: CompanyUpdateManyWithoutSectorNestedInput
    subIndustries?: SubIndustryUpdateManyWithoutSectorNestedInput
  }

  export type SectorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    companies?: CompanyUncheckedUpdateManyWithoutSectorNestedInput
    subIndustries?: SubIndustryUncheckedUpdateManyWithoutSectorNestedInput
  }

  export type SectorCreateManyInput = {
    id?: number
    name: string
  }

  export type SectorUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SectorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SubIndustryCreateInput = {
    name: string
    sector: SectorCreateNestedOneWithoutSubIndustriesInput
    companies?: CompanyCreateNestedManyWithoutSubIndustryInput
  }

  export type SubIndustryUncheckedCreateInput = {
    id?: number
    name: string
    sectorId: number
    companies?: CompanyUncheckedCreateNestedManyWithoutSubIndustryInput
  }

  export type SubIndustryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    sector?: SectorUpdateOneRequiredWithoutSubIndustriesNestedInput
    companies?: CompanyUpdateManyWithoutSubIndustryNestedInput
  }

  export type SubIndustryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sectorId?: IntFieldUpdateOperationsInput | number
    companies?: CompanyUncheckedUpdateManyWithoutSubIndustryNestedInput
  }

  export type SubIndustryCreateManyInput = {
    id?: number
    name: string
    sectorId: number
  }

  export type SubIndustryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SubIndustryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sectorId?: IntFieldUpdateOperationsInput | number
  }

  export type FinancialDataCreateInput = {
    year: number
    revenue?: number | null
    netIncome?: number | null
    grossProfit?: number | null
    operatingProfit?: number | null
    operatingExpenses?: number | null
    costOfSales?: number | null
    company: CompanyCreateNestedOneWithoutFinancialDataInput
  }

  export type FinancialDataUncheckedCreateInput = {
    id?: number
    companyId: number
    year: number
    revenue?: number | null
    netIncome?: number | null
    grossProfit?: number | null
    operatingProfit?: number | null
    operatingExpenses?: number | null
    costOfSales?: number | null
  }

  export type FinancialDataUpdateInput = {
    year?: IntFieldUpdateOperationsInput | number
    revenue?: NullableFloatFieldUpdateOperationsInput | number | null
    netIncome?: NullableFloatFieldUpdateOperationsInput | number | null
    grossProfit?: NullableFloatFieldUpdateOperationsInput | number | null
    operatingProfit?: NullableFloatFieldUpdateOperationsInput | number | null
    operatingExpenses?: NullableFloatFieldUpdateOperationsInput | number | null
    costOfSales?: NullableFloatFieldUpdateOperationsInput | number | null
    company?: CompanyUpdateOneRequiredWithoutFinancialDataNestedInput
  }

  export type FinancialDataUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyId?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    revenue?: NullableFloatFieldUpdateOperationsInput | number | null
    netIncome?: NullableFloatFieldUpdateOperationsInput | number | null
    grossProfit?: NullableFloatFieldUpdateOperationsInput | number | null
    operatingProfit?: NullableFloatFieldUpdateOperationsInput | number | null
    operatingExpenses?: NullableFloatFieldUpdateOperationsInput | number | null
    costOfSales?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type FinancialDataCreateManyInput = {
    id?: number
    companyId: number
    year: number
    revenue?: number | null
    netIncome?: number | null
    grossProfit?: number | null
    operatingProfit?: number | null
    operatingExpenses?: number | null
    costOfSales?: number | null
  }

  export type FinancialDataUpdateManyMutationInput = {
    year?: IntFieldUpdateOperationsInput | number
    revenue?: NullableFloatFieldUpdateOperationsInput | number | null
    netIncome?: NullableFloatFieldUpdateOperationsInput | number | null
    grossProfit?: NullableFloatFieldUpdateOperationsInput | number | null
    operatingProfit?: NullableFloatFieldUpdateOperationsInput | number | null
    operatingExpenses?: NullableFloatFieldUpdateOperationsInput | number | null
    costOfSales?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type FinancialDataUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyId?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    revenue?: NullableFloatFieldUpdateOperationsInput | number | null
    netIncome?: NullableFloatFieldUpdateOperationsInput | number | null
    grossProfit?: NullableFloatFieldUpdateOperationsInput | number | null
    operatingProfit?: NullableFloatFieldUpdateOperationsInput | number | null
    operatingExpenses?: NullableFloatFieldUpdateOperationsInput | number | null
    costOfSales?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type CompanyCreateInput = {
    name: string
    tickerSymbol: string
    description: string
    logoUrl?: string | null
    latestPrice?: number | null
    sharesOutstanding?: number
    valuation?: number | null
    ceoId?: number | null
    sector: SectorCreateNestedOneWithoutCompaniesInput
    subIndustry: SubIndustryCreateNestedOneWithoutCompaniesInput
    ceo?: CEOCreateNestedOneWithoutCompanyInput
    stockPrices?: StockPriceCreateNestedManyWithoutCompanyInput
    newsArticles?: NewsArticleCreateNestedManyWithoutCompanyInput
    indices?: IndexCompanyCreateNestedManyWithoutCompanyInput
    financialData?: FinancialDataCreateNestedManyWithoutCompanyInput
    rivalCompany?: CompanyCreateNestedOneWithoutRivalOfInput
    rivalOf?: CompanyCreateNestedOneWithoutRivalCompanyInput
  }

  export type CompanyUncheckedCreateInput = {
    id?: number
    name: string
    tickerSymbol: string
    description: string
    logoUrl?: string | null
    sectorId: number
    subIndustryId: number
    latestPrice?: number | null
    sharesOutstanding?: number
    valuation?: number | null
    ceoId?: number | null
    rivalCompanyId?: number | null
    ceo?: CEOUncheckedCreateNestedOneWithoutCompanyInput
    stockPrices?: StockPriceUncheckedCreateNestedManyWithoutCompanyInput
    newsArticles?: NewsArticleUncheckedCreateNestedManyWithoutCompanyInput
    indices?: IndexCompanyUncheckedCreateNestedManyWithoutCompanyInput
    financialData?: FinancialDataUncheckedCreateNestedManyWithoutCompanyInput
    rivalOf?: CompanyUncheckedCreateNestedOneWithoutRivalCompanyInput
  }

  export type CompanyUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    tickerSymbol?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    latestPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    sharesOutstanding?: IntFieldUpdateOperationsInput | number
    valuation?: NullableFloatFieldUpdateOperationsInput | number | null
    ceoId?: NullableIntFieldUpdateOperationsInput | number | null
    sector?: SectorUpdateOneRequiredWithoutCompaniesNestedInput
    subIndustry?: SubIndustryUpdateOneRequiredWithoutCompaniesNestedInput
    ceo?: CEOUpdateOneWithoutCompanyNestedInput
    stockPrices?: StockPriceUpdateManyWithoutCompanyNestedInput
    newsArticles?: NewsArticleUpdateManyWithoutCompanyNestedInput
    indices?: IndexCompanyUpdateManyWithoutCompanyNestedInput
    financialData?: FinancialDataUpdateManyWithoutCompanyNestedInput
    rivalCompany?: CompanyUpdateOneWithoutRivalOfNestedInput
    rivalOf?: CompanyUpdateOneWithoutRivalCompanyNestedInput
  }

  export type CompanyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tickerSymbol?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sectorId?: IntFieldUpdateOperationsInput | number
    subIndustryId?: IntFieldUpdateOperationsInput | number
    latestPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    sharesOutstanding?: IntFieldUpdateOperationsInput | number
    valuation?: NullableFloatFieldUpdateOperationsInput | number | null
    ceoId?: NullableIntFieldUpdateOperationsInput | number | null
    rivalCompanyId?: NullableIntFieldUpdateOperationsInput | number | null
    ceo?: CEOUncheckedUpdateOneWithoutCompanyNestedInput
    stockPrices?: StockPriceUncheckedUpdateManyWithoutCompanyNestedInput
    newsArticles?: NewsArticleUncheckedUpdateManyWithoutCompanyNestedInput
    indices?: IndexCompanyUncheckedUpdateManyWithoutCompanyNestedInput
    financialData?: FinancialDataUncheckedUpdateManyWithoutCompanyNestedInput
    rivalOf?: CompanyUncheckedUpdateOneWithoutRivalCompanyNestedInput
  }

  export type CompanyCreateManyInput = {
    id?: number
    name: string
    tickerSymbol: string
    description: string
    logoUrl?: string | null
    sectorId: number
    subIndustryId: number
    latestPrice?: number | null
    sharesOutstanding?: number
    valuation?: number | null
    ceoId?: number | null
    rivalCompanyId?: number | null
  }

  export type CompanyUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    tickerSymbol?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    latestPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    sharesOutstanding?: IntFieldUpdateOperationsInput | number
    valuation?: NullableFloatFieldUpdateOperationsInput | number | null
    ceoId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CompanyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tickerSymbol?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sectorId?: IntFieldUpdateOperationsInput | number
    subIndustryId?: IntFieldUpdateOperationsInput | number
    latestPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    sharesOutstanding?: IntFieldUpdateOperationsInput | number
    valuation?: NullableFloatFieldUpdateOperationsInput | number | null
    ceoId?: NullableIntFieldUpdateOperationsInput | number | null
    rivalCompanyId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type StockPriceCreateInput = {
    timestamp?: Date | string
    price: number
    momentum?: number
    company: CompanyCreateNestedOneWithoutStockPricesInput
  }

  export type StockPriceUncheckedCreateInput = {
    id?: number
    companyId: number
    timestamp?: Date | string
    price: number
    momentum?: number
  }

  export type StockPriceUpdateInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    momentum?: FloatFieldUpdateOperationsInput | number
    company?: CompanyUpdateOneRequiredWithoutStockPricesNestedInput
  }

  export type StockPriceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyId?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    momentum?: FloatFieldUpdateOperationsInput | number
  }

  export type StockPriceCreateManyInput = {
    id?: number
    companyId: number
    timestamp?: Date | string
    price: number
    momentum?: number
  }

  export type StockPriceUpdateManyMutationInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    momentum?: FloatFieldUpdateOperationsInput | number
  }

  export type StockPriceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyId?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    momentum?: FloatFieldUpdateOperationsInput | number
  }

  export type NewsArticleCreateInput = {
    timestamp?: Date | string
    headline: string
    content: string
    sentiment?: number | null
    source?: string | null
    reaction?: string | null
    company: CompanyCreateNestedOneWithoutNewsArticlesInput
  }

  export type NewsArticleUncheckedCreateInput = {
    id?: number
    companyId: number
    timestamp?: Date | string
    headline: string
    content: string
    sentiment?: number | null
    source?: string | null
    reaction?: string | null
  }

  export type NewsArticleUpdateInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    headline?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sentiment?: NullableFloatFieldUpdateOperationsInput | number | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    reaction?: NullableStringFieldUpdateOperationsInput | string | null
    company?: CompanyUpdateOneRequiredWithoutNewsArticlesNestedInput
  }

  export type NewsArticleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyId?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    headline?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sentiment?: NullableFloatFieldUpdateOperationsInput | number | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    reaction?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NewsArticleCreateManyInput = {
    id?: number
    companyId: number
    timestamp?: Date | string
    headline: string
    content: string
    sentiment?: number | null
    source?: string | null
    reaction?: string | null
  }

  export type NewsArticleUpdateManyMutationInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    headline?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sentiment?: NullableFloatFieldUpdateOperationsInput | number | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    reaction?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NewsArticleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyId?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    headline?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sentiment?: NullableFloatFieldUpdateOperationsInput | number | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    reaction?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IndexCreateInput = {
    name: string
    tickerSymbol: string
    description: string
    indexPrices?: IndexPriceCreateNestedManyWithoutIndexInput
    companies?: IndexCompanyCreateNestedManyWithoutIndexInput
  }

  export type IndexUncheckedCreateInput = {
    id?: number
    name: string
    tickerSymbol: string
    description: string
    indexPrices?: IndexPriceUncheckedCreateNestedManyWithoutIndexInput
    companies?: IndexCompanyUncheckedCreateNestedManyWithoutIndexInput
  }

  export type IndexUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    tickerSymbol?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    indexPrices?: IndexPriceUpdateManyWithoutIndexNestedInput
    companies?: IndexCompanyUpdateManyWithoutIndexNestedInput
  }

  export type IndexUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tickerSymbol?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    indexPrices?: IndexPriceUncheckedUpdateManyWithoutIndexNestedInput
    companies?: IndexCompanyUncheckedUpdateManyWithoutIndexNestedInput
  }

  export type IndexCreateManyInput = {
    id?: number
    name: string
    tickerSymbol: string
    description: string
  }

  export type IndexUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    tickerSymbol?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type IndexUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tickerSymbol?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type IndexPriceCreateInput = {
    timestamp?: Date | string
    price: number
    index: IndexCreateNestedOneWithoutIndexPricesInput
  }

  export type IndexPriceUncheckedCreateInput = {
    id?: number
    indexId: number
    timestamp?: Date | string
    price: number
  }

  export type IndexPriceUpdateInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    index?: IndexUpdateOneRequiredWithoutIndexPricesNestedInput
  }

  export type IndexPriceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    indexId?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type IndexPriceCreateManyInput = {
    id?: number
    indexId: number
    timestamp?: Date | string
    price: number
  }

  export type IndexPriceUpdateManyMutationInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type IndexPriceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    indexId?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type IndexCompanyCreateInput = {
    weight: number
    index: IndexCreateNestedOneWithoutCompaniesInput
    company: CompanyCreateNestedOneWithoutIndicesInput
  }

  export type IndexCompanyUncheckedCreateInput = {
    id?: number
    indexId: number
    companyId: number
    weight: number
  }

  export type IndexCompanyUpdateInput = {
    weight?: FloatFieldUpdateOperationsInput | number
    index?: IndexUpdateOneRequiredWithoutCompaniesNestedInput
    company?: CompanyUpdateOneRequiredWithoutIndicesNestedInput
  }

  export type IndexCompanyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    indexId?: IntFieldUpdateOperationsInput | number
    companyId?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
  }

  export type IndexCompanyCreateManyInput = {
    id?: number
    indexId: number
    companyId: number
    weight: number
  }

  export type IndexCompanyUpdateManyMutationInput = {
    weight?: FloatFieldUpdateOperationsInput | number
  }

  export type IndexCompanyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    indexId?: IntFieldUpdateOperationsInput | number
    companyId?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
  }

  export type CEOCreateInput = {
    name: string
    imageUrl?: string | null
    personality?: string | null
    bio?: string | null
    company?: CompanyCreateNestedOneWithoutCeoInput
  }

  export type CEOUncheckedCreateInput = {
    id?: number
    name: string
    imageUrl?: string | null
    personality?: string | null
    bio?: string | null
    companyId?: number | null
  }

  export type CEOUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    personality?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    company?: CompanyUpdateOneWithoutCeoNestedInput
  }

  export type CEOUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    personality?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CEOCreateManyInput = {
    id?: number
    name: string
    imageUrl?: string | null
    personality?: string | null
    bio?: string | null
    companyId?: number | null
  }

  export type CEOUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    personality?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CEOUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    personality?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
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

  export type CompanyListRelationFilter = {
    every?: CompanyWhereInput
    some?: CompanyWhereInput
    none?: CompanyWhereInput
  }

  export type SubIndustryListRelationFilter = {
    every?: SubIndustryWhereInput
    some?: SubIndustryWhereInput
    none?: SubIndustryWhereInput
  }

  export type CompanyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubIndustryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SectorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SectorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SectorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SectorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SectorSumOrderByAggregateInput = {
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

  export type SectorScalarRelationFilter = {
    is?: SectorWhereInput
    isNot?: SectorWhereInput
  }

  export type SubIndustryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sectorId?: SortOrder
  }

  export type SubIndustryAvgOrderByAggregateInput = {
    id?: SortOrder
    sectorId?: SortOrder
  }

  export type SubIndustryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sectorId?: SortOrder
  }

  export type SubIndustryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sectorId?: SortOrder
  }

  export type SubIndustrySumOrderByAggregateInput = {
    id?: SortOrder
    sectorId?: SortOrder
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

  export type CompanyScalarRelationFilter = {
    is?: CompanyWhereInput
    isNot?: CompanyWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FinancialDataCountOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    year?: SortOrder
    revenue?: SortOrder
    netIncome?: SortOrder
    grossProfit?: SortOrder
    operatingProfit?: SortOrder
    operatingExpenses?: SortOrder
    costOfSales?: SortOrder
  }

  export type FinancialDataAvgOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    year?: SortOrder
    revenue?: SortOrder
    netIncome?: SortOrder
    grossProfit?: SortOrder
    operatingProfit?: SortOrder
    operatingExpenses?: SortOrder
    costOfSales?: SortOrder
  }

  export type FinancialDataMaxOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    year?: SortOrder
    revenue?: SortOrder
    netIncome?: SortOrder
    grossProfit?: SortOrder
    operatingProfit?: SortOrder
    operatingExpenses?: SortOrder
    costOfSales?: SortOrder
  }

  export type FinancialDataMinOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    year?: SortOrder
    revenue?: SortOrder
    netIncome?: SortOrder
    grossProfit?: SortOrder
    operatingProfit?: SortOrder
    operatingExpenses?: SortOrder
    costOfSales?: SortOrder
  }

  export type FinancialDataSumOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    year?: SortOrder
    revenue?: SortOrder
    netIncome?: SortOrder
    grossProfit?: SortOrder
    operatingProfit?: SortOrder
    operatingExpenses?: SortOrder
    costOfSales?: SortOrder
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

  export type SubIndustryScalarRelationFilter = {
    is?: SubIndustryWhereInput
    isNot?: SubIndustryWhereInput
  }

  export type CEONullableScalarRelationFilter = {
    is?: CEOWhereInput | null
    isNot?: CEOWhereInput | null
  }

  export type StockPriceListRelationFilter = {
    every?: StockPriceWhereInput
    some?: StockPriceWhereInput
    none?: StockPriceWhereInput
  }

  export type NewsArticleListRelationFilter = {
    every?: NewsArticleWhereInput
    some?: NewsArticleWhereInput
    none?: NewsArticleWhereInput
  }

  export type IndexCompanyListRelationFilter = {
    every?: IndexCompanyWhereInput
    some?: IndexCompanyWhereInput
    none?: IndexCompanyWhereInput
  }

  export type FinancialDataListRelationFilter = {
    every?: FinancialDataWhereInput
    some?: FinancialDataWhereInput
    none?: FinancialDataWhereInput
  }

  export type CompanyNullableScalarRelationFilter = {
    is?: CompanyWhereInput | null
    isNot?: CompanyWhereInput | null
  }

  export type StockPriceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NewsArticleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IndexCompanyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FinancialDataOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompanyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    tickerSymbol?: SortOrder
    description?: SortOrder
    logoUrl?: SortOrder
    sectorId?: SortOrder
    subIndustryId?: SortOrder
    latestPrice?: SortOrder
    sharesOutstanding?: SortOrder
    valuation?: SortOrder
    ceoId?: SortOrder
    rivalCompanyId?: SortOrder
  }

  export type CompanyAvgOrderByAggregateInput = {
    id?: SortOrder
    sectorId?: SortOrder
    subIndustryId?: SortOrder
    latestPrice?: SortOrder
    sharesOutstanding?: SortOrder
    valuation?: SortOrder
    ceoId?: SortOrder
    rivalCompanyId?: SortOrder
  }

  export type CompanyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    tickerSymbol?: SortOrder
    description?: SortOrder
    logoUrl?: SortOrder
    sectorId?: SortOrder
    subIndustryId?: SortOrder
    latestPrice?: SortOrder
    sharesOutstanding?: SortOrder
    valuation?: SortOrder
    ceoId?: SortOrder
    rivalCompanyId?: SortOrder
  }

  export type CompanyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    tickerSymbol?: SortOrder
    description?: SortOrder
    logoUrl?: SortOrder
    sectorId?: SortOrder
    subIndustryId?: SortOrder
    latestPrice?: SortOrder
    sharesOutstanding?: SortOrder
    valuation?: SortOrder
    ceoId?: SortOrder
    rivalCompanyId?: SortOrder
  }

  export type CompanySumOrderByAggregateInput = {
    id?: SortOrder
    sectorId?: SortOrder
    subIndustryId?: SortOrder
    latestPrice?: SortOrder
    sharesOutstanding?: SortOrder
    valuation?: SortOrder
    ceoId?: SortOrder
    rivalCompanyId?: SortOrder
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

  export type StockPriceCountOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    timestamp?: SortOrder
    price?: SortOrder
    momentum?: SortOrder
  }

  export type StockPriceAvgOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    price?: SortOrder
    momentum?: SortOrder
  }

  export type StockPriceMaxOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    timestamp?: SortOrder
    price?: SortOrder
    momentum?: SortOrder
  }

  export type StockPriceMinOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    timestamp?: SortOrder
    price?: SortOrder
    momentum?: SortOrder
  }

  export type StockPriceSumOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    price?: SortOrder
    momentum?: SortOrder
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

  export type NewsArticleCountOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    timestamp?: SortOrder
    headline?: SortOrder
    content?: SortOrder
    sentiment?: SortOrder
    source?: SortOrder
    reaction?: SortOrder
  }

  export type NewsArticleAvgOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    sentiment?: SortOrder
  }

  export type NewsArticleMaxOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    timestamp?: SortOrder
    headline?: SortOrder
    content?: SortOrder
    sentiment?: SortOrder
    source?: SortOrder
    reaction?: SortOrder
  }

  export type NewsArticleMinOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    timestamp?: SortOrder
    headline?: SortOrder
    content?: SortOrder
    sentiment?: SortOrder
    source?: SortOrder
    reaction?: SortOrder
  }

  export type NewsArticleSumOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    sentiment?: SortOrder
  }

  export type IndexPriceListRelationFilter = {
    every?: IndexPriceWhereInput
    some?: IndexPriceWhereInput
    none?: IndexPriceWhereInput
  }

  export type IndexPriceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IndexCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    tickerSymbol?: SortOrder
    description?: SortOrder
  }

  export type IndexAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IndexMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    tickerSymbol?: SortOrder
    description?: SortOrder
  }

  export type IndexMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    tickerSymbol?: SortOrder
    description?: SortOrder
  }

  export type IndexSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IndexScalarRelationFilter = {
    is?: IndexWhereInput
    isNot?: IndexWhereInput
  }

  export type IndexPriceCountOrderByAggregateInput = {
    id?: SortOrder
    indexId?: SortOrder
    timestamp?: SortOrder
    price?: SortOrder
  }

  export type IndexPriceAvgOrderByAggregateInput = {
    id?: SortOrder
    indexId?: SortOrder
    price?: SortOrder
  }

  export type IndexPriceMaxOrderByAggregateInput = {
    id?: SortOrder
    indexId?: SortOrder
    timestamp?: SortOrder
    price?: SortOrder
  }

  export type IndexPriceMinOrderByAggregateInput = {
    id?: SortOrder
    indexId?: SortOrder
    timestamp?: SortOrder
    price?: SortOrder
  }

  export type IndexPriceSumOrderByAggregateInput = {
    id?: SortOrder
    indexId?: SortOrder
    price?: SortOrder
  }

  export type IndexCompanyIndexIdCompanyIdCompoundUniqueInput = {
    indexId: number
    companyId: number
  }

  export type IndexCompanyCountOrderByAggregateInput = {
    id?: SortOrder
    indexId?: SortOrder
    companyId?: SortOrder
    weight?: SortOrder
  }

  export type IndexCompanyAvgOrderByAggregateInput = {
    id?: SortOrder
    indexId?: SortOrder
    companyId?: SortOrder
    weight?: SortOrder
  }

  export type IndexCompanyMaxOrderByAggregateInput = {
    id?: SortOrder
    indexId?: SortOrder
    companyId?: SortOrder
    weight?: SortOrder
  }

  export type IndexCompanyMinOrderByAggregateInput = {
    id?: SortOrder
    indexId?: SortOrder
    companyId?: SortOrder
    weight?: SortOrder
  }

  export type IndexCompanySumOrderByAggregateInput = {
    id?: SortOrder
    indexId?: SortOrder
    companyId?: SortOrder
    weight?: SortOrder
  }

  export type CEOCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    personality?: SortOrder
    bio?: SortOrder
    companyId?: SortOrder
  }

  export type CEOAvgOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
  }

  export type CEOMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    personality?: SortOrder
    bio?: SortOrder
    companyId?: SortOrder
  }

  export type CEOMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    personality?: SortOrder
    bio?: SortOrder
    companyId?: SortOrder
  }

  export type CEOSumOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
  }

  export type CompanyCreateNestedManyWithoutSectorInput = {
    create?: XOR<CompanyCreateWithoutSectorInput, CompanyUncheckedCreateWithoutSectorInput> | CompanyCreateWithoutSectorInput[] | CompanyUncheckedCreateWithoutSectorInput[]
    connectOrCreate?: CompanyCreateOrConnectWithoutSectorInput | CompanyCreateOrConnectWithoutSectorInput[]
    createMany?: CompanyCreateManySectorInputEnvelope
    connect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
  }

  export type SubIndustryCreateNestedManyWithoutSectorInput = {
    create?: XOR<SubIndustryCreateWithoutSectorInput, SubIndustryUncheckedCreateWithoutSectorInput> | SubIndustryCreateWithoutSectorInput[] | SubIndustryUncheckedCreateWithoutSectorInput[]
    connectOrCreate?: SubIndustryCreateOrConnectWithoutSectorInput | SubIndustryCreateOrConnectWithoutSectorInput[]
    createMany?: SubIndustryCreateManySectorInputEnvelope
    connect?: SubIndustryWhereUniqueInput | SubIndustryWhereUniqueInput[]
  }

  export type CompanyUncheckedCreateNestedManyWithoutSectorInput = {
    create?: XOR<CompanyCreateWithoutSectorInput, CompanyUncheckedCreateWithoutSectorInput> | CompanyCreateWithoutSectorInput[] | CompanyUncheckedCreateWithoutSectorInput[]
    connectOrCreate?: CompanyCreateOrConnectWithoutSectorInput | CompanyCreateOrConnectWithoutSectorInput[]
    createMany?: CompanyCreateManySectorInputEnvelope
    connect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
  }

  export type SubIndustryUncheckedCreateNestedManyWithoutSectorInput = {
    create?: XOR<SubIndustryCreateWithoutSectorInput, SubIndustryUncheckedCreateWithoutSectorInput> | SubIndustryCreateWithoutSectorInput[] | SubIndustryUncheckedCreateWithoutSectorInput[]
    connectOrCreate?: SubIndustryCreateOrConnectWithoutSectorInput | SubIndustryCreateOrConnectWithoutSectorInput[]
    createMany?: SubIndustryCreateManySectorInputEnvelope
    connect?: SubIndustryWhereUniqueInput | SubIndustryWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type CompanyUpdateManyWithoutSectorNestedInput = {
    create?: XOR<CompanyCreateWithoutSectorInput, CompanyUncheckedCreateWithoutSectorInput> | CompanyCreateWithoutSectorInput[] | CompanyUncheckedCreateWithoutSectorInput[]
    connectOrCreate?: CompanyCreateOrConnectWithoutSectorInput | CompanyCreateOrConnectWithoutSectorInput[]
    upsert?: CompanyUpsertWithWhereUniqueWithoutSectorInput | CompanyUpsertWithWhereUniqueWithoutSectorInput[]
    createMany?: CompanyCreateManySectorInputEnvelope
    set?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    disconnect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    delete?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    connect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    update?: CompanyUpdateWithWhereUniqueWithoutSectorInput | CompanyUpdateWithWhereUniqueWithoutSectorInput[]
    updateMany?: CompanyUpdateManyWithWhereWithoutSectorInput | CompanyUpdateManyWithWhereWithoutSectorInput[]
    deleteMany?: CompanyScalarWhereInput | CompanyScalarWhereInput[]
  }

  export type SubIndustryUpdateManyWithoutSectorNestedInput = {
    create?: XOR<SubIndustryCreateWithoutSectorInput, SubIndustryUncheckedCreateWithoutSectorInput> | SubIndustryCreateWithoutSectorInput[] | SubIndustryUncheckedCreateWithoutSectorInput[]
    connectOrCreate?: SubIndustryCreateOrConnectWithoutSectorInput | SubIndustryCreateOrConnectWithoutSectorInput[]
    upsert?: SubIndustryUpsertWithWhereUniqueWithoutSectorInput | SubIndustryUpsertWithWhereUniqueWithoutSectorInput[]
    createMany?: SubIndustryCreateManySectorInputEnvelope
    set?: SubIndustryWhereUniqueInput | SubIndustryWhereUniqueInput[]
    disconnect?: SubIndustryWhereUniqueInput | SubIndustryWhereUniqueInput[]
    delete?: SubIndustryWhereUniqueInput | SubIndustryWhereUniqueInput[]
    connect?: SubIndustryWhereUniqueInput | SubIndustryWhereUniqueInput[]
    update?: SubIndustryUpdateWithWhereUniqueWithoutSectorInput | SubIndustryUpdateWithWhereUniqueWithoutSectorInput[]
    updateMany?: SubIndustryUpdateManyWithWhereWithoutSectorInput | SubIndustryUpdateManyWithWhereWithoutSectorInput[]
    deleteMany?: SubIndustryScalarWhereInput | SubIndustryScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CompanyUncheckedUpdateManyWithoutSectorNestedInput = {
    create?: XOR<CompanyCreateWithoutSectorInput, CompanyUncheckedCreateWithoutSectorInput> | CompanyCreateWithoutSectorInput[] | CompanyUncheckedCreateWithoutSectorInput[]
    connectOrCreate?: CompanyCreateOrConnectWithoutSectorInput | CompanyCreateOrConnectWithoutSectorInput[]
    upsert?: CompanyUpsertWithWhereUniqueWithoutSectorInput | CompanyUpsertWithWhereUniqueWithoutSectorInput[]
    createMany?: CompanyCreateManySectorInputEnvelope
    set?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    disconnect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    delete?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    connect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    update?: CompanyUpdateWithWhereUniqueWithoutSectorInput | CompanyUpdateWithWhereUniqueWithoutSectorInput[]
    updateMany?: CompanyUpdateManyWithWhereWithoutSectorInput | CompanyUpdateManyWithWhereWithoutSectorInput[]
    deleteMany?: CompanyScalarWhereInput | CompanyScalarWhereInput[]
  }

  export type SubIndustryUncheckedUpdateManyWithoutSectorNestedInput = {
    create?: XOR<SubIndustryCreateWithoutSectorInput, SubIndustryUncheckedCreateWithoutSectorInput> | SubIndustryCreateWithoutSectorInput[] | SubIndustryUncheckedCreateWithoutSectorInput[]
    connectOrCreate?: SubIndustryCreateOrConnectWithoutSectorInput | SubIndustryCreateOrConnectWithoutSectorInput[]
    upsert?: SubIndustryUpsertWithWhereUniqueWithoutSectorInput | SubIndustryUpsertWithWhereUniqueWithoutSectorInput[]
    createMany?: SubIndustryCreateManySectorInputEnvelope
    set?: SubIndustryWhereUniqueInput | SubIndustryWhereUniqueInput[]
    disconnect?: SubIndustryWhereUniqueInput | SubIndustryWhereUniqueInput[]
    delete?: SubIndustryWhereUniqueInput | SubIndustryWhereUniqueInput[]
    connect?: SubIndustryWhereUniqueInput | SubIndustryWhereUniqueInput[]
    update?: SubIndustryUpdateWithWhereUniqueWithoutSectorInput | SubIndustryUpdateWithWhereUniqueWithoutSectorInput[]
    updateMany?: SubIndustryUpdateManyWithWhereWithoutSectorInput | SubIndustryUpdateManyWithWhereWithoutSectorInput[]
    deleteMany?: SubIndustryScalarWhereInput | SubIndustryScalarWhereInput[]
  }

  export type SectorCreateNestedOneWithoutSubIndustriesInput = {
    create?: XOR<SectorCreateWithoutSubIndustriesInput, SectorUncheckedCreateWithoutSubIndustriesInput>
    connectOrCreate?: SectorCreateOrConnectWithoutSubIndustriesInput
    connect?: SectorWhereUniqueInput
  }

  export type CompanyCreateNestedManyWithoutSubIndustryInput = {
    create?: XOR<CompanyCreateWithoutSubIndustryInput, CompanyUncheckedCreateWithoutSubIndustryInput> | CompanyCreateWithoutSubIndustryInput[] | CompanyUncheckedCreateWithoutSubIndustryInput[]
    connectOrCreate?: CompanyCreateOrConnectWithoutSubIndustryInput | CompanyCreateOrConnectWithoutSubIndustryInput[]
    createMany?: CompanyCreateManySubIndustryInputEnvelope
    connect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
  }

  export type CompanyUncheckedCreateNestedManyWithoutSubIndustryInput = {
    create?: XOR<CompanyCreateWithoutSubIndustryInput, CompanyUncheckedCreateWithoutSubIndustryInput> | CompanyCreateWithoutSubIndustryInput[] | CompanyUncheckedCreateWithoutSubIndustryInput[]
    connectOrCreate?: CompanyCreateOrConnectWithoutSubIndustryInput | CompanyCreateOrConnectWithoutSubIndustryInput[]
    createMany?: CompanyCreateManySubIndustryInputEnvelope
    connect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
  }

  export type SectorUpdateOneRequiredWithoutSubIndustriesNestedInput = {
    create?: XOR<SectorCreateWithoutSubIndustriesInput, SectorUncheckedCreateWithoutSubIndustriesInput>
    connectOrCreate?: SectorCreateOrConnectWithoutSubIndustriesInput
    upsert?: SectorUpsertWithoutSubIndustriesInput
    connect?: SectorWhereUniqueInput
    update?: XOR<XOR<SectorUpdateToOneWithWhereWithoutSubIndustriesInput, SectorUpdateWithoutSubIndustriesInput>, SectorUncheckedUpdateWithoutSubIndustriesInput>
  }

  export type CompanyUpdateManyWithoutSubIndustryNestedInput = {
    create?: XOR<CompanyCreateWithoutSubIndustryInput, CompanyUncheckedCreateWithoutSubIndustryInput> | CompanyCreateWithoutSubIndustryInput[] | CompanyUncheckedCreateWithoutSubIndustryInput[]
    connectOrCreate?: CompanyCreateOrConnectWithoutSubIndustryInput | CompanyCreateOrConnectWithoutSubIndustryInput[]
    upsert?: CompanyUpsertWithWhereUniqueWithoutSubIndustryInput | CompanyUpsertWithWhereUniqueWithoutSubIndustryInput[]
    createMany?: CompanyCreateManySubIndustryInputEnvelope
    set?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    disconnect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    delete?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    connect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    update?: CompanyUpdateWithWhereUniqueWithoutSubIndustryInput | CompanyUpdateWithWhereUniqueWithoutSubIndustryInput[]
    updateMany?: CompanyUpdateManyWithWhereWithoutSubIndustryInput | CompanyUpdateManyWithWhereWithoutSubIndustryInput[]
    deleteMany?: CompanyScalarWhereInput | CompanyScalarWhereInput[]
  }

  export type CompanyUncheckedUpdateManyWithoutSubIndustryNestedInput = {
    create?: XOR<CompanyCreateWithoutSubIndustryInput, CompanyUncheckedCreateWithoutSubIndustryInput> | CompanyCreateWithoutSubIndustryInput[] | CompanyUncheckedCreateWithoutSubIndustryInput[]
    connectOrCreate?: CompanyCreateOrConnectWithoutSubIndustryInput | CompanyCreateOrConnectWithoutSubIndustryInput[]
    upsert?: CompanyUpsertWithWhereUniqueWithoutSubIndustryInput | CompanyUpsertWithWhereUniqueWithoutSubIndustryInput[]
    createMany?: CompanyCreateManySubIndustryInputEnvelope
    set?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    disconnect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    delete?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    connect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    update?: CompanyUpdateWithWhereUniqueWithoutSubIndustryInput | CompanyUpdateWithWhereUniqueWithoutSubIndustryInput[]
    updateMany?: CompanyUpdateManyWithWhereWithoutSubIndustryInput | CompanyUpdateManyWithWhereWithoutSubIndustryInput[]
    deleteMany?: CompanyScalarWhereInput | CompanyScalarWhereInput[]
  }

  export type CompanyCreateNestedOneWithoutFinancialDataInput = {
    create?: XOR<CompanyCreateWithoutFinancialDataInput, CompanyUncheckedCreateWithoutFinancialDataInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutFinancialDataInput
    connect?: CompanyWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CompanyUpdateOneRequiredWithoutFinancialDataNestedInput = {
    create?: XOR<CompanyCreateWithoutFinancialDataInput, CompanyUncheckedCreateWithoutFinancialDataInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutFinancialDataInput
    upsert?: CompanyUpsertWithoutFinancialDataInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutFinancialDataInput, CompanyUpdateWithoutFinancialDataInput>, CompanyUncheckedUpdateWithoutFinancialDataInput>
  }

  export type SectorCreateNestedOneWithoutCompaniesInput = {
    create?: XOR<SectorCreateWithoutCompaniesInput, SectorUncheckedCreateWithoutCompaniesInput>
    connectOrCreate?: SectorCreateOrConnectWithoutCompaniesInput
    connect?: SectorWhereUniqueInput
  }

  export type SubIndustryCreateNestedOneWithoutCompaniesInput = {
    create?: XOR<SubIndustryCreateWithoutCompaniesInput, SubIndustryUncheckedCreateWithoutCompaniesInput>
    connectOrCreate?: SubIndustryCreateOrConnectWithoutCompaniesInput
    connect?: SubIndustryWhereUniqueInput
  }

  export type CEOCreateNestedOneWithoutCompanyInput = {
    create?: XOR<CEOCreateWithoutCompanyInput, CEOUncheckedCreateWithoutCompanyInput>
    connectOrCreate?: CEOCreateOrConnectWithoutCompanyInput
    connect?: CEOWhereUniqueInput
  }

  export type StockPriceCreateNestedManyWithoutCompanyInput = {
    create?: XOR<StockPriceCreateWithoutCompanyInput, StockPriceUncheckedCreateWithoutCompanyInput> | StockPriceCreateWithoutCompanyInput[] | StockPriceUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: StockPriceCreateOrConnectWithoutCompanyInput | StockPriceCreateOrConnectWithoutCompanyInput[]
    createMany?: StockPriceCreateManyCompanyInputEnvelope
    connect?: StockPriceWhereUniqueInput | StockPriceWhereUniqueInput[]
  }

  export type NewsArticleCreateNestedManyWithoutCompanyInput = {
    create?: XOR<NewsArticleCreateWithoutCompanyInput, NewsArticleUncheckedCreateWithoutCompanyInput> | NewsArticleCreateWithoutCompanyInput[] | NewsArticleUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: NewsArticleCreateOrConnectWithoutCompanyInput | NewsArticleCreateOrConnectWithoutCompanyInput[]
    createMany?: NewsArticleCreateManyCompanyInputEnvelope
    connect?: NewsArticleWhereUniqueInput | NewsArticleWhereUniqueInput[]
  }

  export type IndexCompanyCreateNestedManyWithoutCompanyInput = {
    create?: XOR<IndexCompanyCreateWithoutCompanyInput, IndexCompanyUncheckedCreateWithoutCompanyInput> | IndexCompanyCreateWithoutCompanyInput[] | IndexCompanyUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: IndexCompanyCreateOrConnectWithoutCompanyInput | IndexCompanyCreateOrConnectWithoutCompanyInput[]
    createMany?: IndexCompanyCreateManyCompanyInputEnvelope
    connect?: IndexCompanyWhereUniqueInput | IndexCompanyWhereUniqueInput[]
  }

  export type FinancialDataCreateNestedManyWithoutCompanyInput = {
    create?: XOR<FinancialDataCreateWithoutCompanyInput, FinancialDataUncheckedCreateWithoutCompanyInput> | FinancialDataCreateWithoutCompanyInput[] | FinancialDataUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: FinancialDataCreateOrConnectWithoutCompanyInput | FinancialDataCreateOrConnectWithoutCompanyInput[]
    createMany?: FinancialDataCreateManyCompanyInputEnvelope
    connect?: FinancialDataWhereUniqueInput | FinancialDataWhereUniqueInput[]
  }

  export type CompanyCreateNestedOneWithoutRivalOfInput = {
    create?: XOR<CompanyCreateWithoutRivalOfInput, CompanyUncheckedCreateWithoutRivalOfInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutRivalOfInput
    connect?: CompanyWhereUniqueInput
  }

  export type CompanyCreateNestedOneWithoutRivalCompanyInput = {
    create?: XOR<CompanyCreateWithoutRivalCompanyInput, CompanyUncheckedCreateWithoutRivalCompanyInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutRivalCompanyInput
    connect?: CompanyWhereUniqueInput
  }

  export type CEOUncheckedCreateNestedOneWithoutCompanyInput = {
    create?: XOR<CEOCreateWithoutCompanyInput, CEOUncheckedCreateWithoutCompanyInput>
    connectOrCreate?: CEOCreateOrConnectWithoutCompanyInput
    connect?: CEOWhereUniqueInput
  }

  export type StockPriceUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<StockPriceCreateWithoutCompanyInput, StockPriceUncheckedCreateWithoutCompanyInput> | StockPriceCreateWithoutCompanyInput[] | StockPriceUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: StockPriceCreateOrConnectWithoutCompanyInput | StockPriceCreateOrConnectWithoutCompanyInput[]
    createMany?: StockPriceCreateManyCompanyInputEnvelope
    connect?: StockPriceWhereUniqueInput | StockPriceWhereUniqueInput[]
  }

  export type NewsArticleUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<NewsArticleCreateWithoutCompanyInput, NewsArticleUncheckedCreateWithoutCompanyInput> | NewsArticleCreateWithoutCompanyInput[] | NewsArticleUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: NewsArticleCreateOrConnectWithoutCompanyInput | NewsArticleCreateOrConnectWithoutCompanyInput[]
    createMany?: NewsArticleCreateManyCompanyInputEnvelope
    connect?: NewsArticleWhereUniqueInput | NewsArticleWhereUniqueInput[]
  }

  export type IndexCompanyUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<IndexCompanyCreateWithoutCompanyInput, IndexCompanyUncheckedCreateWithoutCompanyInput> | IndexCompanyCreateWithoutCompanyInput[] | IndexCompanyUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: IndexCompanyCreateOrConnectWithoutCompanyInput | IndexCompanyCreateOrConnectWithoutCompanyInput[]
    createMany?: IndexCompanyCreateManyCompanyInputEnvelope
    connect?: IndexCompanyWhereUniqueInput | IndexCompanyWhereUniqueInput[]
  }

  export type FinancialDataUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<FinancialDataCreateWithoutCompanyInput, FinancialDataUncheckedCreateWithoutCompanyInput> | FinancialDataCreateWithoutCompanyInput[] | FinancialDataUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: FinancialDataCreateOrConnectWithoutCompanyInput | FinancialDataCreateOrConnectWithoutCompanyInput[]
    createMany?: FinancialDataCreateManyCompanyInputEnvelope
    connect?: FinancialDataWhereUniqueInput | FinancialDataWhereUniqueInput[]
  }

  export type CompanyUncheckedCreateNestedOneWithoutRivalCompanyInput = {
    create?: XOR<CompanyCreateWithoutRivalCompanyInput, CompanyUncheckedCreateWithoutRivalCompanyInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutRivalCompanyInput
    connect?: CompanyWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SectorUpdateOneRequiredWithoutCompaniesNestedInput = {
    create?: XOR<SectorCreateWithoutCompaniesInput, SectorUncheckedCreateWithoutCompaniesInput>
    connectOrCreate?: SectorCreateOrConnectWithoutCompaniesInput
    upsert?: SectorUpsertWithoutCompaniesInput
    connect?: SectorWhereUniqueInput
    update?: XOR<XOR<SectorUpdateToOneWithWhereWithoutCompaniesInput, SectorUpdateWithoutCompaniesInput>, SectorUncheckedUpdateWithoutCompaniesInput>
  }

  export type SubIndustryUpdateOneRequiredWithoutCompaniesNestedInput = {
    create?: XOR<SubIndustryCreateWithoutCompaniesInput, SubIndustryUncheckedCreateWithoutCompaniesInput>
    connectOrCreate?: SubIndustryCreateOrConnectWithoutCompaniesInput
    upsert?: SubIndustryUpsertWithoutCompaniesInput
    connect?: SubIndustryWhereUniqueInput
    update?: XOR<XOR<SubIndustryUpdateToOneWithWhereWithoutCompaniesInput, SubIndustryUpdateWithoutCompaniesInput>, SubIndustryUncheckedUpdateWithoutCompaniesInput>
  }

  export type CEOUpdateOneWithoutCompanyNestedInput = {
    create?: XOR<CEOCreateWithoutCompanyInput, CEOUncheckedCreateWithoutCompanyInput>
    connectOrCreate?: CEOCreateOrConnectWithoutCompanyInput
    upsert?: CEOUpsertWithoutCompanyInput
    disconnect?: CEOWhereInput | boolean
    delete?: CEOWhereInput | boolean
    connect?: CEOWhereUniqueInput
    update?: XOR<XOR<CEOUpdateToOneWithWhereWithoutCompanyInput, CEOUpdateWithoutCompanyInput>, CEOUncheckedUpdateWithoutCompanyInput>
  }

  export type StockPriceUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<StockPriceCreateWithoutCompanyInput, StockPriceUncheckedCreateWithoutCompanyInput> | StockPriceCreateWithoutCompanyInput[] | StockPriceUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: StockPriceCreateOrConnectWithoutCompanyInput | StockPriceCreateOrConnectWithoutCompanyInput[]
    upsert?: StockPriceUpsertWithWhereUniqueWithoutCompanyInput | StockPriceUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: StockPriceCreateManyCompanyInputEnvelope
    set?: StockPriceWhereUniqueInput | StockPriceWhereUniqueInput[]
    disconnect?: StockPriceWhereUniqueInput | StockPriceWhereUniqueInput[]
    delete?: StockPriceWhereUniqueInput | StockPriceWhereUniqueInput[]
    connect?: StockPriceWhereUniqueInput | StockPriceWhereUniqueInput[]
    update?: StockPriceUpdateWithWhereUniqueWithoutCompanyInput | StockPriceUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: StockPriceUpdateManyWithWhereWithoutCompanyInput | StockPriceUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: StockPriceScalarWhereInput | StockPriceScalarWhereInput[]
  }

  export type NewsArticleUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<NewsArticleCreateWithoutCompanyInput, NewsArticleUncheckedCreateWithoutCompanyInput> | NewsArticleCreateWithoutCompanyInput[] | NewsArticleUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: NewsArticleCreateOrConnectWithoutCompanyInput | NewsArticleCreateOrConnectWithoutCompanyInput[]
    upsert?: NewsArticleUpsertWithWhereUniqueWithoutCompanyInput | NewsArticleUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: NewsArticleCreateManyCompanyInputEnvelope
    set?: NewsArticleWhereUniqueInput | NewsArticleWhereUniqueInput[]
    disconnect?: NewsArticleWhereUniqueInput | NewsArticleWhereUniqueInput[]
    delete?: NewsArticleWhereUniqueInput | NewsArticleWhereUniqueInput[]
    connect?: NewsArticleWhereUniqueInput | NewsArticleWhereUniqueInput[]
    update?: NewsArticleUpdateWithWhereUniqueWithoutCompanyInput | NewsArticleUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: NewsArticleUpdateManyWithWhereWithoutCompanyInput | NewsArticleUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: NewsArticleScalarWhereInput | NewsArticleScalarWhereInput[]
  }

  export type IndexCompanyUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<IndexCompanyCreateWithoutCompanyInput, IndexCompanyUncheckedCreateWithoutCompanyInput> | IndexCompanyCreateWithoutCompanyInput[] | IndexCompanyUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: IndexCompanyCreateOrConnectWithoutCompanyInput | IndexCompanyCreateOrConnectWithoutCompanyInput[]
    upsert?: IndexCompanyUpsertWithWhereUniqueWithoutCompanyInput | IndexCompanyUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: IndexCompanyCreateManyCompanyInputEnvelope
    set?: IndexCompanyWhereUniqueInput | IndexCompanyWhereUniqueInput[]
    disconnect?: IndexCompanyWhereUniqueInput | IndexCompanyWhereUniqueInput[]
    delete?: IndexCompanyWhereUniqueInput | IndexCompanyWhereUniqueInput[]
    connect?: IndexCompanyWhereUniqueInput | IndexCompanyWhereUniqueInput[]
    update?: IndexCompanyUpdateWithWhereUniqueWithoutCompanyInput | IndexCompanyUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: IndexCompanyUpdateManyWithWhereWithoutCompanyInput | IndexCompanyUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: IndexCompanyScalarWhereInput | IndexCompanyScalarWhereInput[]
  }

  export type FinancialDataUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<FinancialDataCreateWithoutCompanyInput, FinancialDataUncheckedCreateWithoutCompanyInput> | FinancialDataCreateWithoutCompanyInput[] | FinancialDataUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: FinancialDataCreateOrConnectWithoutCompanyInput | FinancialDataCreateOrConnectWithoutCompanyInput[]
    upsert?: FinancialDataUpsertWithWhereUniqueWithoutCompanyInput | FinancialDataUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: FinancialDataCreateManyCompanyInputEnvelope
    set?: FinancialDataWhereUniqueInput | FinancialDataWhereUniqueInput[]
    disconnect?: FinancialDataWhereUniqueInput | FinancialDataWhereUniqueInput[]
    delete?: FinancialDataWhereUniqueInput | FinancialDataWhereUniqueInput[]
    connect?: FinancialDataWhereUniqueInput | FinancialDataWhereUniqueInput[]
    update?: FinancialDataUpdateWithWhereUniqueWithoutCompanyInput | FinancialDataUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: FinancialDataUpdateManyWithWhereWithoutCompanyInput | FinancialDataUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: FinancialDataScalarWhereInput | FinancialDataScalarWhereInput[]
  }

  export type CompanyUpdateOneWithoutRivalOfNestedInput = {
    create?: XOR<CompanyCreateWithoutRivalOfInput, CompanyUncheckedCreateWithoutRivalOfInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutRivalOfInput
    upsert?: CompanyUpsertWithoutRivalOfInput
    disconnect?: CompanyWhereInput | boolean
    delete?: CompanyWhereInput | boolean
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutRivalOfInput, CompanyUpdateWithoutRivalOfInput>, CompanyUncheckedUpdateWithoutRivalOfInput>
  }

  export type CompanyUpdateOneWithoutRivalCompanyNestedInput = {
    create?: XOR<CompanyCreateWithoutRivalCompanyInput, CompanyUncheckedCreateWithoutRivalCompanyInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutRivalCompanyInput
    upsert?: CompanyUpsertWithoutRivalCompanyInput
    disconnect?: CompanyWhereInput | boolean
    delete?: CompanyWhereInput | boolean
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutRivalCompanyInput, CompanyUpdateWithoutRivalCompanyInput>, CompanyUncheckedUpdateWithoutRivalCompanyInput>
  }

  export type CEOUncheckedUpdateOneWithoutCompanyNestedInput = {
    create?: XOR<CEOCreateWithoutCompanyInput, CEOUncheckedCreateWithoutCompanyInput>
    connectOrCreate?: CEOCreateOrConnectWithoutCompanyInput
    upsert?: CEOUpsertWithoutCompanyInput
    disconnect?: CEOWhereInput | boolean
    delete?: CEOWhereInput | boolean
    connect?: CEOWhereUniqueInput
    update?: XOR<XOR<CEOUpdateToOneWithWhereWithoutCompanyInput, CEOUpdateWithoutCompanyInput>, CEOUncheckedUpdateWithoutCompanyInput>
  }

  export type StockPriceUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<StockPriceCreateWithoutCompanyInput, StockPriceUncheckedCreateWithoutCompanyInput> | StockPriceCreateWithoutCompanyInput[] | StockPriceUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: StockPriceCreateOrConnectWithoutCompanyInput | StockPriceCreateOrConnectWithoutCompanyInput[]
    upsert?: StockPriceUpsertWithWhereUniqueWithoutCompanyInput | StockPriceUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: StockPriceCreateManyCompanyInputEnvelope
    set?: StockPriceWhereUniqueInput | StockPriceWhereUniqueInput[]
    disconnect?: StockPriceWhereUniqueInput | StockPriceWhereUniqueInput[]
    delete?: StockPriceWhereUniqueInput | StockPriceWhereUniqueInput[]
    connect?: StockPriceWhereUniqueInput | StockPriceWhereUniqueInput[]
    update?: StockPriceUpdateWithWhereUniqueWithoutCompanyInput | StockPriceUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: StockPriceUpdateManyWithWhereWithoutCompanyInput | StockPriceUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: StockPriceScalarWhereInput | StockPriceScalarWhereInput[]
  }

  export type NewsArticleUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<NewsArticleCreateWithoutCompanyInput, NewsArticleUncheckedCreateWithoutCompanyInput> | NewsArticleCreateWithoutCompanyInput[] | NewsArticleUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: NewsArticleCreateOrConnectWithoutCompanyInput | NewsArticleCreateOrConnectWithoutCompanyInput[]
    upsert?: NewsArticleUpsertWithWhereUniqueWithoutCompanyInput | NewsArticleUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: NewsArticleCreateManyCompanyInputEnvelope
    set?: NewsArticleWhereUniqueInput | NewsArticleWhereUniqueInput[]
    disconnect?: NewsArticleWhereUniqueInput | NewsArticleWhereUniqueInput[]
    delete?: NewsArticleWhereUniqueInput | NewsArticleWhereUniqueInput[]
    connect?: NewsArticleWhereUniqueInput | NewsArticleWhereUniqueInput[]
    update?: NewsArticleUpdateWithWhereUniqueWithoutCompanyInput | NewsArticleUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: NewsArticleUpdateManyWithWhereWithoutCompanyInput | NewsArticleUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: NewsArticleScalarWhereInput | NewsArticleScalarWhereInput[]
  }

  export type IndexCompanyUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<IndexCompanyCreateWithoutCompanyInput, IndexCompanyUncheckedCreateWithoutCompanyInput> | IndexCompanyCreateWithoutCompanyInput[] | IndexCompanyUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: IndexCompanyCreateOrConnectWithoutCompanyInput | IndexCompanyCreateOrConnectWithoutCompanyInput[]
    upsert?: IndexCompanyUpsertWithWhereUniqueWithoutCompanyInput | IndexCompanyUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: IndexCompanyCreateManyCompanyInputEnvelope
    set?: IndexCompanyWhereUniqueInput | IndexCompanyWhereUniqueInput[]
    disconnect?: IndexCompanyWhereUniqueInput | IndexCompanyWhereUniqueInput[]
    delete?: IndexCompanyWhereUniqueInput | IndexCompanyWhereUniqueInput[]
    connect?: IndexCompanyWhereUniqueInput | IndexCompanyWhereUniqueInput[]
    update?: IndexCompanyUpdateWithWhereUniqueWithoutCompanyInput | IndexCompanyUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: IndexCompanyUpdateManyWithWhereWithoutCompanyInput | IndexCompanyUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: IndexCompanyScalarWhereInput | IndexCompanyScalarWhereInput[]
  }

  export type FinancialDataUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<FinancialDataCreateWithoutCompanyInput, FinancialDataUncheckedCreateWithoutCompanyInput> | FinancialDataCreateWithoutCompanyInput[] | FinancialDataUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: FinancialDataCreateOrConnectWithoutCompanyInput | FinancialDataCreateOrConnectWithoutCompanyInput[]
    upsert?: FinancialDataUpsertWithWhereUniqueWithoutCompanyInput | FinancialDataUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: FinancialDataCreateManyCompanyInputEnvelope
    set?: FinancialDataWhereUniqueInput | FinancialDataWhereUniqueInput[]
    disconnect?: FinancialDataWhereUniqueInput | FinancialDataWhereUniqueInput[]
    delete?: FinancialDataWhereUniqueInput | FinancialDataWhereUniqueInput[]
    connect?: FinancialDataWhereUniqueInput | FinancialDataWhereUniqueInput[]
    update?: FinancialDataUpdateWithWhereUniqueWithoutCompanyInput | FinancialDataUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: FinancialDataUpdateManyWithWhereWithoutCompanyInput | FinancialDataUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: FinancialDataScalarWhereInput | FinancialDataScalarWhereInput[]
  }

  export type CompanyUncheckedUpdateOneWithoutRivalCompanyNestedInput = {
    create?: XOR<CompanyCreateWithoutRivalCompanyInput, CompanyUncheckedCreateWithoutRivalCompanyInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutRivalCompanyInput
    upsert?: CompanyUpsertWithoutRivalCompanyInput
    disconnect?: CompanyWhereInput | boolean
    delete?: CompanyWhereInput | boolean
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutRivalCompanyInput, CompanyUpdateWithoutRivalCompanyInput>, CompanyUncheckedUpdateWithoutRivalCompanyInput>
  }

  export type CompanyCreateNestedOneWithoutStockPricesInput = {
    create?: XOR<CompanyCreateWithoutStockPricesInput, CompanyUncheckedCreateWithoutStockPricesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutStockPricesInput
    connect?: CompanyWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CompanyUpdateOneRequiredWithoutStockPricesNestedInput = {
    create?: XOR<CompanyCreateWithoutStockPricesInput, CompanyUncheckedCreateWithoutStockPricesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutStockPricesInput
    upsert?: CompanyUpsertWithoutStockPricesInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutStockPricesInput, CompanyUpdateWithoutStockPricesInput>, CompanyUncheckedUpdateWithoutStockPricesInput>
  }

  export type CompanyCreateNestedOneWithoutNewsArticlesInput = {
    create?: XOR<CompanyCreateWithoutNewsArticlesInput, CompanyUncheckedCreateWithoutNewsArticlesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutNewsArticlesInput
    connect?: CompanyWhereUniqueInput
  }

  export type CompanyUpdateOneRequiredWithoutNewsArticlesNestedInput = {
    create?: XOR<CompanyCreateWithoutNewsArticlesInput, CompanyUncheckedCreateWithoutNewsArticlesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutNewsArticlesInput
    upsert?: CompanyUpsertWithoutNewsArticlesInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutNewsArticlesInput, CompanyUpdateWithoutNewsArticlesInput>, CompanyUncheckedUpdateWithoutNewsArticlesInput>
  }

  export type IndexPriceCreateNestedManyWithoutIndexInput = {
    create?: XOR<IndexPriceCreateWithoutIndexInput, IndexPriceUncheckedCreateWithoutIndexInput> | IndexPriceCreateWithoutIndexInput[] | IndexPriceUncheckedCreateWithoutIndexInput[]
    connectOrCreate?: IndexPriceCreateOrConnectWithoutIndexInput | IndexPriceCreateOrConnectWithoutIndexInput[]
    createMany?: IndexPriceCreateManyIndexInputEnvelope
    connect?: IndexPriceWhereUniqueInput | IndexPriceWhereUniqueInput[]
  }

  export type IndexCompanyCreateNestedManyWithoutIndexInput = {
    create?: XOR<IndexCompanyCreateWithoutIndexInput, IndexCompanyUncheckedCreateWithoutIndexInput> | IndexCompanyCreateWithoutIndexInput[] | IndexCompanyUncheckedCreateWithoutIndexInput[]
    connectOrCreate?: IndexCompanyCreateOrConnectWithoutIndexInput | IndexCompanyCreateOrConnectWithoutIndexInput[]
    createMany?: IndexCompanyCreateManyIndexInputEnvelope
    connect?: IndexCompanyWhereUniqueInput | IndexCompanyWhereUniqueInput[]
  }

  export type IndexPriceUncheckedCreateNestedManyWithoutIndexInput = {
    create?: XOR<IndexPriceCreateWithoutIndexInput, IndexPriceUncheckedCreateWithoutIndexInput> | IndexPriceCreateWithoutIndexInput[] | IndexPriceUncheckedCreateWithoutIndexInput[]
    connectOrCreate?: IndexPriceCreateOrConnectWithoutIndexInput | IndexPriceCreateOrConnectWithoutIndexInput[]
    createMany?: IndexPriceCreateManyIndexInputEnvelope
    connect?: IndexPriceWhereUniqueInput | IndexPriceWhereUniqueInput[]
  }

  export type IndexCompanyUncheckedCreateNestedManyWithoutIndexInput = {
    create?: XOR<IndexCompanyCreateWithoutIndexInput, IndexCompanyUncheckedCreateWithoutIndexInput> | IndexCompanyCreateWithoutIndexInput[] | IndexCompanyUncheckedCreateWithoutIndexInput[]
    connectOrCreate?: IndexCompanyCreateOrConnectWithoutIndexInput | IndexCompanyCreateOrConnectWithoutIndexInput[]
    createMany?: IndexCompanyCreateManyIndexInputEnvelope
    connect?: IndexCompanyWhereUniqueInput | IndexCompanyWhereUniqueInput[]
  }

  export type IndexPriceUpdateManyWithoutIndexNestedInput = {
    create?: XOR<IndexPriceCreateWithoutIndexInput, IndexPriceUncheckedCreateWithoutIndexInput> | IndexPriceCreateWithoutIndexInput[] | IndexPriceUncheckedCreateWithoutIndexInput[]
    connectOrCreate?: IndexPriceCreateOrConnectWithoutIndexInput | IndexPriceCreateOrConnectWithoutIndexInput[]
    upsert?: IndexPriceUpsertWithWhereUniqueWithoutIndexInput | IndexPriceUpsertWithWhereUniqueWithoutIndexInput[]
    createMany?: IndexPriceCreateManyIndexInputEnvelope
    set?: IndexPriceWhereUniqueInput | IndexPriceWhereUniqueInput[]
    disconnect?: IndexPriceWhereUniqueInput | IndexPriceWhereUniqueInput[]
    delete?: IndexPriceWhereUniqueInput | IndexPriceWhereUniqueInput[]
    connect?: IndexPriceWhereUniqueInput | IndexPriceWhereUniqueInput[]
    update?: IndexPriceUpdateWithWhereUniqueWithoutIndexInput | IndexPriceUpdateWithWhereUniqueWithoutIndexInput[]
    updateMany?: IndexPriceUpdateManyWithWhereWithoutIndexInput | IndexPriceUpdateManyWithWhereWithoutIndexInput[]
    deleteMany?: IndexPriceScalarWhereInput | IndexPriceScalarWhereInput[]
  }

  export type IndexCompanyUpdateManyWithoutIndexNestedInput = {
    create?: XOR<IndexCompanyCreateWithoutIndexInput, IndexCompanyUncheckedCreateWithoutIndexInput> | IndexCompanyCreateWithoutIndexInput[] | IndexCompanyUncheckedCreateWithoutIndexInput[]
    connectOrCreate?: IndexCompanyCreateOrConnectWithoutIndexInput | IndexCompanyCreateOrConnectWithoutIndexInput[]
    upsert?: IndexCompanyUpsertWithWhereUniqueWithoutIndexInput | IndexCompanyUpsertWithWhereUniqueWithoutIndexInput[]
    createMany?: IndexCompanyCreateManyIndexInputEnvelope
    set?: IndexCompanyWhereUniqueInput | IndexCompanyWhereUniqueInput[]
    disconnect?: IndexCompanyWhereUniqueInput | IndexCompanyWhereUniqueInput[]
    delete?: IndexCompanyWhereUniqueInput | IndexCompanyWhereUniqueInput[]
    connect?: IndexCompanyWhereUniqueInput | IndexCompanyWhereUniqueInput[]
    update?: IndexCompanyUpdateWithWhereUniqueWithoutIndexInput | IndexCompanyUpdateWithWhereUniqueWithoutIndexInput[]
    updateMany?: IndexCompanyUpdateManyWithWhereWithoutIndexInput | IndexCompanyUpdateManyWithWhereWithoutIndexInput[]
    deleteMany?: IndexCompanyScalarWhereInput | IndexCompanyScalarWhereInput[]
  }

  export type IndexPriceUncheckedUpdateManyWithoutIndexNestedInput = {
    create?: XOR<IndexPriceCreateWithoutIndexInput, IndexPriceUncheckedCreateWithoutIndexInput> | IndexPriceCreateWithoutIndexInput[] | IndexPriceUncheckedCreateWithoutIndexInput[]
    connectOrCreate?: IndexPriceCreateOrConnectWithoutIndexInput | IndexPriceCreateOrConnectWithoutIndexInput[]
    upsert?: IndexPriceUpsertWithWhereUniqueWithoutIndexInput | IndexPriceUpsertWithWhereUniqueWithoutIndexInput[]
    createMany?: IndexPriceCreateManyIndexInputEnvelope
    set?: IndexPriceWhereUniqueInput | IndexPriceWhereUniqueInput[]
    disconnect?: IndexPriceWhereUniqueInput | IndexPriceWhereUniqueInput[]
    delete?: IndexPriceWhereUniqueInput | IndexPriceWhereUniqueInput[]
    connect?: IndexPriceWhereUniqueInput | IndexPriceWhereUniqueInput[]
    update?: IndexPriceUpdateWithWhereUniqueWithoutIndexInput | IndexPriceUpdateWithWhereUniqueWithoutIndexInput[]
    updateMany?: IndexPriceUpdateManyWithWhereWithoutIndexInput | IndexPriceUpdateManyWithWhereWithoutIndexInput[]
    deleteMany?: IndexPriceScalarWhereInput | IndexPriceScalarWhereInput[]
  }

  export type IndexCompanyUncheckedUpdateManyWithoutIndexNestedInput = {
    create?: XOR<IndexCompanyCreateWithoutIndexInput, IndexCompanyUncheckedCreateWithoutIndexInput> | IndexCompanyCreateWithoutIndexInput[] | IndexCompanyUncheckedCreateWithoutIndexInput[]
    connectOrCreate?: IndexCompanyCreateOrConnectWithoutIndexInput | IndexCompanyCreateOrConnectWithoutIndexInput[]
    upsert?: IndexCompanyUpsertWithWhereUniqueWithoutIndexInput | IndexCompanyUpsertWithWhereUniqueWithoutIndexInput[]
    createMany?: IndexCompanyCreateManyIndexInputEnvelope
    set?: IndexCompanyWhereUniqueInput | IndexCompanyWhereUniqueInput[]
    disconnect?: IndexCompanyWhereUniqueInput | IndexCompanyWhereUniqueInput[]
    delete?: IndexCompanyWhereUniqueInput | IndexCompanyWhereUniqueInput[]
    connect?: IndexCompanyWhereUniqueInput | IndexCompanyWhereUniqueInput[]
    update?: IndexCompanyUpdateWithWhereUniqueWithoutIndexInput | IndexCompanyUpdateWithWhereUniqueWithoutIndexInput[]
    updateMany?: IndexCompanyUpdateManyWithWhereWithoutIndexInput | IndexCompanyUpdateManyWithWhereWithoutIndexInput[]
    deleteMany?: IndexCompanyScalarWhereInput | IndexCompanyScalarWhereInput[]
  }

  export type IndexCreateNestedOneWithoutIndexPricesInput = {
    create?: XOR<IndexCreateWithoutIndexPricesInput, IndexUncheckedCreateWithoutIndexPricesInput>
    connectOrCreate?: IndexCreateOrConnectWithoutIndexPricesInput
    connect?: IndexWhereUniqueInput
  }

  export type IndexUpdateOneRequiredWithoutIndexPricesNestedInput = {
    create?: XOR<IndexCreateWithoutIndexPricesInput, IndexUncheckedCreateWithoutIndexPricesInput>
    connectOrCreate?: IndexCreateOrConnectWithoutIndexPricesInput
    upsert?: IndexUpsertWithoutIndexPricesInput
    connect?: IndexWhereUniqueInput
    update?: XOR<XOR<IndexUpdateToOneWithWhereWithoutIndexPricesInput, IndexUpdateWithoutIndexPricesInput>, IndexUncheckedUpdateWithoutIndexPricesInput>
  }

  export type IndexCreateNestedOneWithoutCompaniesInput = {
    create?: XOR<IndexCreateWithoutCompaniesInput, IndexUncheckedCreateWithoutCompaniesInput>
    connectOrCreate?: IndexCreateOrConnectWithoutCompaniesInput
    connect?: IndexWhereUniqueInput
  }

  export type CompanyCreateNestedOneWithoutIndicesInput = {
    create?: XOR<CompanyCreateWithoutIndicesInput, CompanyUncheckedCreateWithoutIndicesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutIndicesInput
    connect?: CompanyWhereUniqueInput
  }

  export type IndexUpdateOneRequiredWithoutCompaniesNestedInput = {
    create?: XOR<IndexCreateWithoutCompaniesInput, IndexUncheckedCreateWithoutCompaniesInput>
    connectOrCreate?: IndexCreateOrConnectWithoutCompaniesInput
    upsert?: IndexUpsertWithoutCompaniesInput
    connect?: IndexWhereUniqueInput
    update?: XOR<XOR<IndexUpdateToOneWithWhereWithoutCompaniesInput, IndexUpdateWithoutCompaniesInput>, IndexUncheckedUpdateWithoutCompaniesInput>
  }

  export type CompanyUpdateOneRequiredWithoutIndicesNestedInput = {
    create?: XOR<CompanyCreateWithoutIndicesInput, CompanyUncheckedCreateWithoutIndicesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutIndicesInput
    upsert?: CompanyUpsertWithoutIndicesInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutIndicesInput, CompanyUpdateWithoutIndicesInput>, CompanyUncheckedUpdateWithoutIndicesInput>
  }

  export type CompanyCreateNestedOneWithoutCeoInput = {
    create?: XOR<CompanyCreateWithoutCeoInput, CompanyUncheckedCreateWithoutCeoInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutCeoInput
    connect?: CompanyWhereUniqueInput
  }

  export type CompanyUpdateOneWithoutCeoNestedInput = {
    create?: XOR<CompanyCreateWithoutCeoInput, CompanyUncheckedCreateWithoutCeoInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutCeoInput
    upsert?: CompanyUpsertWithoutCeoInput
    disconnect?: CompanyWhereInput | boolean
    delete?: CompanyWhereInput | boolean
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutCeoInput, CompanyUpdateWithoutCeoInput>, CompanyUncheckedUpdateWithoutCeoInput>
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

  export type CompanyCreateWithoutSectorInput = {
    name: string
    tickerSymbol: string
    description: string
    logoUrl?: string | null
    latestPrice?: number | null
    sharesOutstanding?: number
    valuation?: number | null
    ceoId?: number | null
    subIndustry: SubIndustryCreateNestedOneWithoutCompaniesInput
    ceo?: CEOCreateNestedOneWithoutCompanyInput
    stockPrices?: StockPriceCreateNestedManyWithoutCompanyInput
    newsArticles?: NewsArticleCreateNestedManyWithoutCompanyInput
    indices?: IndexCompanyCreateNestedManyWithoutCompanyInput
    financialData?: FinancialDataCreateNestedManyWithoutCompanyInput
    rivalCompany?: CompanyCreateNestedOneWithoutRivalOfInput
    rivalOf?: CompanyCreateNestedOneWithoutRivalCompanyInput
  }

  export type CompanyUncheckedCreateWithoutSectorInput = {
    id?: number
    name: string
    tickerSymbol: string
    description: string
    logoUrl?: string | null
    subIndustryId: number
    latestPrice?: number | null
    sharesOutstanding?: number
    valuation?: number | null
    ceoId?: number | null
    rivalCompanyId?: number | null
    ceo?: CEOUncheckedCreateNestedOneWithoutCompanyInput
    stockPrices?: StockPriceUncheckedCreateNestedManyWithoutCompanyInput
    newsArticles?: NewsArticleUncheckedCreateNestedManyWithoutCompanyInput
    indices?: IndexCompanyUncheckedCreateNestedManyWithoutCompanyInput
    financialData?: FinancialDataUncheckedCreateNestedManyWithoutCompanyInput
    rivalOf?: CompanyUncheckedCreateNestedOneWithoutRivalCompanyInput
  }

  export type CompanyCreateOrConnectWithoutSectorInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutSectorInput, CompanyUncheckedCreateWithoutSectorInput>
  }

  export type CompanyCreateManySectorInputEnvelope = {
    data: CompanyCreateManySectorInput | CompanyCreateManySectorInput[]
    skipDuplicates?: boolean
  }

  export type SubIndustryCreateWithoutSectorInput = {
    name: string
    companies?: CompanyCreateNestedManyWithoutSubIndustryInput
  }

  export type SubIndustryUncheckedCreateWithoutSectorInput = {
    id?: number
    name: string
    companies?: CompanyUncheckedCreateNestedManyWithoutSubIndustryInput
  }

  export type SubIndustryCreateOrConnectWithoutSectorInput = {
    where: SubIndustryWhereUniqueInput
    create: XOR<SubIndustryCreateWithoutSectorInput, SubIndustryUncheckedCreateWithoutSectorInput>
  }

  export type SubIndustryCreateManySectorInputEnvelope = {
    data: SubIndustryCreateManySectorInput | SubIndustryCreateManySectorInput[]
    skipDuplicates?: boolean
  }

  export type CompanyUpsertWithWhereUniqueWithoutSectorInput = {
    where: CompanyWhereUniqueInput
    update: XOR<CompanyUpdateWithoutSectorInput, CompanyUncheckedUpdateWithoutSectorInput>
    create: XOR<CompanyCreateWithoutSectorInput, CompanyUncheckedCreateWithoutSectorInput>
  }

  export type CompanyUpdateWithWhereUniqueWithoutSectorInput = {
    where: CompanyWhereUniqueInput
    data: XOR<CompanyUpdateWithoutSectorInput, CompanyUncheckedUpdateWithoutSectorInput>
  }

  export type CompanyUpdateManyWithWhereWithoutSectorInput = {
    where: CompanyScalarWhereInput
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyWithoutSectorInput>
  }

  export type CompanyScalarWhereInput = {
    AND?: CompanyScalarWhereInput | CompanyScalarWhereInput[]
    OR?: CompanyScalarWhereInput[]
    NOT?: CompanyScalarWhereInput | CompanyScalarWhereInput[]
    id?: IntFilter<"Company"> | number
    name?: StringFilter<"Company"> | string
    tickerSymbol?: StringFilter<"Company"> | string
    description?: StringFilter<"Company"> | string
    logoUrl?: StringNullableFilter<"Company"> | string | null
    sectorId?: IntFilter<"Company"> | number
    subIndustryId?: IntFilter<"Company"> | number
    latestPrice?: FloatNullableFilter<"Company"> | number | null
    sharesOutstanding?: IntFilter<"Company"> | number
    valuation?: FloatNullableFilter<"Company"> | number | null
    ceoId?: IntNullableFilter<"Company"> | number | null
    rivalCompanyId?: IntNullableFilter<"Company"> | number | null
  }

  export type SubIndustryUpsertWithWhereUniqueWithoutSectorInput = {
    where: SubIndustryWhereUniqueInput
    update: XOR<SubIndustryUpdateWithoutSectorInput, SubIndustryUncheckedUpdateWithoutSectorInput>
    create: XOR<SubIndustryCreateWithoutSectorInput, SubIndustryUncheckedCreateWithoutSectorInput>
  }

  export type SubIndustryUpdateWithWhereUniqueWithoutSectorInput = {
    where: SubIndustryWhereUniqueInput
    data: XOR<SubIndustryUpdateWithoutSectorInput, SubIndustryUncheckedUpdateWithoutSectorInput>
  }

  export type SubIndustryUpdateManyWithWhereWithoutSectorInput = {
    where: SubIndustryScalarWhereInput
    data: XOR<SubIndustryUpdateManyMutationInput, SubIndustryUncheckedUpdateManyWithoutSectorInput>
  }

  export type SubIndustryScalarWhereInput = {
    AND?: SubIndustryScalarWhereInput | SubIndustryScalarWhereInput[]
    OR?: SubIndustryScalarWhereInput[]
    NOT?: SubIndustryScalarWhereInput | SubIndustryScalarWhereInput[]
    id?: IntFilter<"SubIndustry"> | number
    name?: StringFilter<"SubIndustry"> | string
    sectorId?: IntFilter<"SubIndustry"> | number
  }

  export type SectorCreateWithoutSubIndustriesInput = {
    name: string
    companies?: CompanyCreateNestedManyWithoutSectorInput
  }

  export type SectorUncheckedCreateWithoutSubIndustriesInput = {
    id?: number
    name: string
    companies?: CompanyUncheckedCreateNestedManyWithoutSectorInput
  }

  export type SectorCreateOrConnectWithoutSubIndustriesInput = {
    where: SectorWhereUniqueInput
    create: XOR<SectorCreateWithoutSubIndustriesInput, SectorUncheckedCreateWithoutSubIndustriesInput>
  }

  export type CompanyCreateWithoutSubIndustryInput = {
    name: string
    tickerSymbol: string
    description: string
    logoUrl?: string | null
    latestPrice?: number | null
    sharesOutstanding?: number
    valuation?: number | null
    ceoId?: number | null
    sector: SectorCreateNestedOneWithoutCompaniesInput
    ceo?: CEOCreateNestedOneWithoutCompanyInput
    stockPrices?: StockPriceCreateNestedManyWithoutCompanyInput
    newsArticles?: NewsArticleCreateNestedManyWithoutCompanyInput
    indices?: IndexCompanyCreateNestedManyWithoutCompanyInput
    financialData?: FinancialDataCreateNestedManyWithoutCompanyInput
    rivalCompany?: CompanyCreateNestedOneWithoutRivalOfInput
    rivalOf?: CompanyCreateNestedOneWithoutRivalCompanyInput
  }

  export type CompanyUncheckedCreateWithoutSubIndustryInput = {
    id?: number
    name: string
    tickerSymbol: string
    description: string
    logoUrl?: string | null
    sectorId: number
    latestPrice?: number | null
    sharesOutstanding?: number
    valuation?: number | null
    ceoId?: number | null
    rivalCompanyId?: number | null
    ceo?: CEOUncheckedCreateNestedOneWithoutCompanyInput
    stockPrices?: StockPriceUncheckedCreateNestedManyWithoutCompanyInput
    newsArticles?: NewsArticleUncheckedCreateNestedManyWithoutCompanyInput
    indices?: IndexCompanyUncheckedCreateNestedManyWithoutCompanyInput
    financialData?: FinancialDataUncheckedCreateNestedManyWithoutCompanyInput
    rivalOf?: CompanyUncheckedCreateNestedOneWithoutRivalCompanyInput
  }

  export type CompanyCreateOrConnectWithoutSubIndustryInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutSubIndustryInput, CompanyUncheckedCreateWithoutSubIndustryInput>
  }

  export type CompanyCreateManySubIndustryInputEnvelope = {
    data: CompanyCreateManySubIndustryInput | CompanyCreateManySubIndustryInput[]
    skipDuplicates?: boolean
  }

  export type SectorUpsertWithoutSubIndustriesInput = {
    update: XOR<SectorUpdateWithoutSubIndustriesInput, SectorUncheckedUpdateWithoutSubIndustriesInput>
    create: XOR<SectorCreateWithoutSubIndustriesInput, SectorUncheckedCreateWithoutSubIndustriesInput>
    where?: SectorWhereInput
  }

  export type SectorUpdateToOneWithWhereWithoutSubIndustriesInput = {
    where?: SectorWhereInput
    data: XOR<SectorUpdateWithoutSubIndustriesInput, SectorUncheckedUpdateWithoutSubIndustriesInput>
  }

  export type SectorUpdateWithoutSubIndustriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    companies?: CompanyUpdateManyWithoutSectorNestedInput
  }

  export type SectorUncheckedUpdateWithoutSubIndustriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    companies?: CompanyUncheckedUpdateManyWithoutSectorNestedInput
  }

  export type CompanyUpsertWithWhereUniqueWithoutSubIndustryInput = {
    where: CompanyWhereUniqueInput
    update: XOR<CompanyUpdateWithoutSubIndustryInput, CompanyUncheckedUpdateWithoutSubIndustryInput>
    create: XOR<CompanyCreateWithoutSubIndustryInput, CompanyUncheckedCreateWithoutSubIndustryInput>
  }

  export type CompanyUpdateWithWhereUniqueWithoutSubIndustryInput = {
    where: CompanyWhereUniqueInput
    data: XOR<CompanyUpdateWithoutSubIndustryInput, CompanyUncheckedUpdateWithoutSubIndustryInput>
  }

  export type CompanyUpdateManyWithWhereWithoutSubIndustryInput = {
    where: CompanyScalarWhereInput
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyWithoutSubIndustryInput>
  }

  export type CompanyCreateWithoutFinancialDataInput = {
    name: string
    tickerSymbol: string
    description: string
    logoUrl?: string | null
    latestPrice?: number | null
    sharesOutstanding?: number
    valuation?: number | null
    ceoId?: number | null
    sector: SectorCreateNestedOneWithoutCompaniesInput
    subIndustry: SubIndustryCreateNestedOneWithoutCompaniesInput
    ceo?: CEOCreateNestedOneWithoutCompanyInput
    stockPrices?: StockPriceCreateNestedManyWithoutCompanyInput
    newsArticles?: NewsArticleCreateNestedManyWithoutCompanyInput
    indices?: IndexCompanyCreateNestedManyWithoutCompanyInput
    rivalCompany?: CompanyCreateNestedOneWithoutRivalOfInput
    rivalOf?: CompanyCreateNestedOneWithoutRivalCompanyInput
  }

  export type CompanyUncheckedCreateWithoutFinancialDataInput = {
    id?: number
    name: string
    tickerSymbol: string
    description: string
    logoUrl?: string | null
    sectorId: number
    subIndustryId: number
    latestPrice?: number | null
    sharesOutstanding?: number
    valuation?: number | null
    ceoId?: number | null
    rivalCompanyId?: number | null
    ceo?: CEOUncheckedCreateNestedOneWithoutCompanyInput
    stockPrices?: StockPriceUncheckedCreateNestedManyWithoutCompanyInput
    newsArticles?: NewsArticleUncheckedCreateNestedManyWithoutCompanyInput
    indices?: IndexCompanyUncheckedCreateNestedManyWithoutCompanyInput
    rivalOf?: CompanyUncheckedCreateNestedOneWithoutRivalCompanyInput
  }

  export type CompanyCreateOrConnectWithoutFinancialDataInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutFinancialDataInput, CompanyUncheckedCreateWithoutFinancialDataInput>
  }

  export type CompanyUpsertWithoutFinancialDataInput = {
    update: XOR<CompanyUpdateWithoutFinancialDataInput, CompanyUncheckedUpdateWithoutFinancialDataInput>
    create: XOR<CompanyCreateWithoutFinancialDataInput, CompanyUncheckedCreateWithoutFinancialDataInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutFinancialDataInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutFinancialDataInput, CompanyUncheckedUpdateWithoutFinancialDataInput>
  }

  export type CompanyUpdateWithoutFinancialDataInput = {
    name?: StringFieldUpdateOperationsInput | string
    tickerSymbol?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    latestPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    sharesOutstanding?: IntFieldUpdateOperationsInput | number
    valuation?: NullableFloatFieldUpdateOperationsInput | number | null
    ceoId?: NullableIntFieldUpdateOperationsInput | number | null
    sector?: SectorUpdateOneRequiredWithoutCompaniesNestedInput
    subIndustry?: SubIndustryUpdateOneRequiredWithoutCompaniesNestedInput
    ceo?: CEOUpdateOneWithoutCompanyNestedInput
    stockPrices?: StockPriceUpdateManyWithoutCompanyNestedInput
    newsArticles?: NewsArticleUpdateManyWithoutCompanyNestedInput
    indices?: IndexCompanyUpdateManyWithoutCompanyNestedInput
    rivalCompany?: CompanyUpdateOneWithoutRivalOfNestedInput
    rivalOf?: CompanyUpdateOneWithoutRivalCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutFinancialDataInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tickerSymbol?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sectorId?: IntFieldUpdateOperationsInput | number
    subIndustryId?: IntFieldUpdateOperationsInput | number
    latestPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    sharesOutstanding?: IntFieldUpdateOperationsInput | number
    valuation?: NullableFloatFieldUpdateOperationsInput | number | null
    ceoId?: NullableIntFieldUpdateOperationsInput | number | null
    rivalCompanyId?: NullableIntFieldUpdateOperationsInput | number | null
    ceo?: CEOUncheckedUpdateOneWithoutCompanyNestedInput
    stockPrices?: StockPriceUncheckedUpdateManyWithoutCompanyNestedInput
    newsArticles?: NewsArticleUncheckedUpdateManyWithoutCompanyNestedInput
    indices?: IndexCompanyUncheckedUpdateManyWithoutCompanyNestedInput
    rivalOf?: CompanyUncheckedUpdateOneWithoutRivalCompanyNestedInput
  }

  export type SectorCreateWithoutCompaniesInput = {
    name: string
    subIndustries?: SubIndustryCreateNestedManyWithoutSectorInput
  }

  export type SectorUncheckedCreateWithoutCompaniesInput = {
    id?: number
    name: string
    subIndustries?: SubIndustryUncheckedCreateNestedManyWithoutSectorInput
  }

  export type SectorCreateOrConnectWithoutCompaniesInput = {
    where: SectorWhereUniqueInput
    create: XOR<SectorCreateWithoutCompaniesInput, SectorUncheckedCreateWithoutCompaniesInput>
  }

  export type SubIndustryCreateWithoutCompaniesInput = {
    name: string
    sector: SectorCreateNestedOneWithoutSubIndustriesInput
  }

  export type SubIndustryUncheckedCreateWithoutCompaniesInput = {
    id?: number
    name: string
    sectorId: number
  }

  export type SubIndustryCreateOrConnectWithoutCompaniesInput = {
    where: SubIndustryWhereUniqueInput
    create: XOR<SubIndustryCreateWithoutCompaniesInput, SubIndustryUncheckedCreateWithoutCompaniesInput>
  }

  export type CEOCreateWithoutCompanyInput = {
    name: string
    imageUrl?: string | null
    personality?: string | null
    bio?: string | null
  }

  export type CEOUncheckedCreateWithoutCompanyInput = {
    id?: number
    name: string
    imageUrl?: string | null
    personality?: string | null
    bio?: string | null
  }

  export type CEOCreateOrConnectWithoutCompanyInput = {
    where: CEOWhereUniqueInput
    create: XOR<CEOCreateWithoutCompanyInput, CEOUncheckedCreateWithoutCompanyInput>
  }

  export type StockPriceCreateWithoutCompanyInput = {
    timestamp?: Date | string
    price: number
    momentum?: number
  }

  export type StockPriceUncheckedCreateWithoutCompanyInput = {
    id?: number
    timestamp?: Date | string
    price: number
    momentum?: number
  }

  export type StockPriceCreateOrConnectWithoutCompanyInput = {
    where: StockPriceWhereUniqueInput
    create: XOR<StockPriceCreateWithoutCompanyInput, StockPriceUncheckedCreateWithoutCompanyInput>
  }

  export type StockPriceCreateManyCompanyInputEnvelope = {
    data: StockPriceCreateManyCompanyInput | StockPriceCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type NewsArticleCreateWithoutCompanyInput = {
    timestamp?: Date | string
    headline: string
    content: string
    sentiment?: number | null
    source?: string | null
    reaction?: string | null
  }

  export type NewsArticleUncheckedCreateWithoutCompanyInput = {
    id?: number
    timestamp?: Date | string
    headline: string
    content: string
    sentiment?: number | null
    source?: string | null
    reaction?: string | null
  }

  export type NewsArticleCreateOrConnectWithoutCompanyInput = {
    where: NewsArticleWhereUniqueInput
    create: XOR<NewsArticleCreateWithoutCompanyInput, NewsArticleUncheckedCreateWithoutCompanyInput>
  }

  export type NewsArticleCreateManyCompanyInputEnvelope = {
    data: NewsArticleCreateManyCompanyInput | NewsArticleCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type IndexCompanyCreateWithoutCompanyInput = {
    weight: number
    index: IndexCreateNestedOneWithoutCompaniesInput
  }

  export type IndexCompanyUncheckedCreateWithoutCompanyInput = {
    id?: number
    indexId: number
    weight: number
  }

  export type IndexCompanyCreateOrConnectWithoutCompanyInput = {
    where: IndexCompanyWhereUniqueInput
    create: XOR<IndexCompanyCreateWithoutCompanyInput, IndexCompanyUncheckedCreateWithoutCompanyInput>
  }

  export type IndexCompanyCreateManyCompanyInputEnvelope = {
    data: IndexCompanyCreateManyCompanyInput | IndexCompanyCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type FinancialDataCreateWithoutCompanyInput = {
    year: number
    revenue?: number | null
    netIncome?: number | null
    grossProfit?: number | null
    operatingProfit?: number | null
    operatingExpenses?: number | null
    costOfSales?: number | null
  }

  export type FinancialDataUncheckedCreateWithoutCompanyInput = {
    id?: number
    year: number
    revenue?: number | null
    netIncome?: number | null
    grossProfit?: number | null
    operatingProfit?: number | null
    operatingExpenses?: number | null
    costOfSales?: number | null
  }

  export type FinancialDataCreateOrConnectWithoutCompanyInput = {
    where: FinancialDataWhereUniqueInput
    create: XOR<FinancialDataCreateWithoutCompanyInput, FinancialDataUncheckedCreateWithoutCompanyInput>
  }

  export type FinancialDataCreateManyCompanyInputEnvelope = {
    data: FinancialDataCreateManyCompanyInput | FinancialDataCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type CompanyCreateWithoutRivalOfInput = {
    name: string
    tickerSymbol: string
    description: string
    logoUrl?: string | null
    latestPrice?: number | null
    sharesOutstanding?: number
    valuation?: number | null
    ceoId?: number | null
    sector: SectorCreateNestedOneWithoutCompaniesInput
    subIndustry: SubIndustryCreateNestedOneWithoutCompaniesInput
    ceo?: CEOCreateNestedOneWithoutCompanyInput
    stockPrices?: StockPriceCreateNestedManyWithoutCompanyInput
    newsArticles?: NewsArticleCreateNestedManyWithoutCompanyInput
    indices?: IndexCompanyCreateNestedManyWithoutCompanyInput
    financialData?: FinancialDataCreateNestedManyWithoutCompanyInput
    rivalCompany?: CompanyCreateNestedOneWithoutRivalOfInput
  }

  export type CompanyUncheckedCreateWithoutRivalOfInput = {
    id?: number
    name: string
    tickerSymbol: string
    description: string
    logoUrl?: string | null
    sectorId: number
    subIndustryId: number
    latestPrice?: number | null
    sharesOutstanding?: number
    valuation?: number | null
    ceoId?: number | null
    rivalCompanyId?: number | null
    ceo?: CEOUncheckedCreateNestedOneWithoutCompanyInput
    stockPrices?: StockPriceUncheckedCreateNestedManyWithoutCompanyInput
    newsArticles?: NewsArticleUncheckedCreateNestedManyWithoutCompanyInput
    indices?: IndexCompanyUncheckedCreateNestedManyWithoutCompanyInput
    financialData?: FinancialDataUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutRivalOfInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutRivalOfInput, CompanyUncheckedCreateWithoutRivalOfInput>
  }

  export type CompanyCreateWithoutRivalCompanyInput = {
    name: string
    tickerSymbol: string
    description: string
    logoUrl?: string | null
    latestPrice?: number | null
    sharesOutstanding?: number
    valuation?: number | null
    ceoId?: number | null
    sector: SectorCreateNestedOneWithoutCompaniesInput
    subIndustry: SubIndustryCreateNestedOneWithoutCompaniesInput
    ceo?: CEOCreateNestedOneWithoutCompanyInput
    stockPrices?: StockPriceCreateNestedManyWithoutCompanyInput
    newsArticles?: NewsArticleCreateNestedManyWithoutCompanyInput
    indices?: IndexCompanyCreateNestedManyWithoutCompanyInput
    financialData?: FinancialDataCreateNestedManyWithoutCompanyInput
    rivalOf?: CompanyCreateNestedOneWithoutRivalCompanyInput
  }

  export type CompanyUncheckedCreateWithoutRivalCompanyInput = {
    id?: number
    name: string
    tickerSymbol: string
    description: string
    logoUrl?: string | null
    sectorId: number
    subIndustryId: number
    latestPrice?: number | null
    sharesOutstanding?: number
    valuation?: number | null
    ceoId?: number | null
    ceo?: CEOUncheckedCreateNestedOneWithoutCompanyInput
    stockPrices?: StockPriceUncheckedCreateNestedManyWithoutCompanyInput
    newsArticles?: NewsArticleUncheckedCreateNestedManyWithoutCompanyInput
    indices?: IndexCompanyUncheckedCreateNestedManyWithoutCompanyInput
    financialData?: FinancialDataUncheckedCreateNestedManyWithoutCompanyInput
    rivalOf?: CompanyUncheckedCreateNestedOneWithoutRivalCompanyInput
  }

  export type CompanyCreateOrConnectWithoutRivalCompanyInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutRivalCompanyInput, CompanyUncheckedCreateWithoutRivalCompanyInput>
  }

  export type SectorUpsertWithoutCompaniesInput = {
    update: XOR<SectorUpdateWithoutCompaniesInput, SectorUncheckedUpdateWithoutCompaniesInput>
    create: XOR<SectorCreateWithoutCompaniesInput, SectorUncheckedCreateWithoutCompaniesInput>
    where?: SectorWhereInput
  }

  export type SectorUpdateToOneWithWhereWithoutCompaniesInput = {
    where?: SectorWhereInput
    data: XOR<SectorUpdateWithoutCompaniesInput, SectorUncheckedUpdateWithoutCompaniesInput>
  }

  export type SectorUpdateWithoutCompaniesInput = {
    name?: StringFieldUpdateOperationsInput | string
    subIndustries?: SubIndustryUpdateManyWithoutSectorNestedInput
  }

  export type SectorUncheckedUpdateWithoutCompaniesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    subIndustries?: SubIndustryUncheckedUpdateManyWithoutSectorNestedInput
  }

  export type SubIndustryUpsertWithoutCompaniesInput = {
    update: XOR<SubIndustryUpdateWithoutCompaniesInput, SubIndustryUncheckedUpdateWithoutCompaniesInput>
    create: XOR<SubIndustryCreateWithoutCompaniesInput, SubIndustryUncheckedCreateWithoutCompaniesInput>
    where?: SubIndustryWhereInput
  }

  export type SubIndustryUpdateToOneWithWhereWithoutCompaniesInput = {
    where?: SubIndustryWhereInput
    data: XOR<SubIndustryUpdateWithoutCompaniesInput, SubIndustryUncheckedUpdateWithoutCompaniesInput>
  }

  export type SubIndustryUpdateWithoutCompaniesInput = {
    name?: StringFieldUpdateOperationsInput | string
    sector?: SectorUpdateOneRequiredWithoutSubIndustriesNestedInput
  }

  export type SubIndustryUncheckedUpdateWithoutCompaniesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sectorId?: IntFieldUpdateOperationsInput | number
  }

  export type CEOUpsertWithoutCompanyInput = {
    update: XOR<CEOUpdateWithoutCompanyInput, CEOUncheckedUpdateWithoutCompanyInput>
    create: XOR<CEOCreateWithoutCompanyInput, CEOUncheckedCreateWithoutCompanyInput>
    where?: CEOWhereInput
  }

  export type CEOUpdateToOneWithWhereWithoutCompanyInput = {
    where?: CEOWhereInput
    data: XOR<CEOUpdateWithoutCompanyInput, CEOUncheckedUpdateWithoutCompanyInput>
  }

  export type CEOUpdateWithoutCompanyInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    personality?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CEOUncheckedUpdateWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    personality?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StockPriceUpsertWithWhereUniqueWithoutCompanyInput = {
    where: StockPriceWhereUniqueInput
    update: XOR<StockPriceUpdateWithoutCompanyInput, StockPriceUncheckedUpdateWithoutCompanyInput>
    create: XOR<StockPriceCreateWithoutCompanyInput, StockPriceUncheckedCreateWithoutCompanyInput>
  }

  export type StockPriceUpdateWithWhereUniqueWithoutCompanyInput = {
    where: StockPriceWhereUniqueInput
    data: XOR<StockPriceUpdateWithoutCompanyInput, StockPriceUncheckedUpdateWithoutCompanyInput>
  }

  export type StockPriceUpdateManyWithWhereWithoutCompanyInput = {
    where: StockPriceScalarWhereInput
    data: XOR<StockPriceUpdateManyMutationInput, StockPriceUncheckedUpdateManyWithoutCompanyInput>
  }

  export type StockPriceScalarWhereInput = {
    AND?: StockPriceScalarWhereInput | StockPriceScalarWhereInput[]
    OR?: StockPriceScalarWhereInput[]
    NOT?: StockPriceScalarWhereInput | StockPriceScalarWhereInput[]
    id?: IntFilter<"StockPrice"> | number
    companyId?: IntFilter<"StockPrice"> | number
    timestamp?: DateTimeFilter<"StockPrice"> | Date | string
    price?: FloatFilter<"StockPrice"> | number
    momentum?: FloatFilter<"StockPrice"> | number
  }

  export type NewsArticleUpsertWithWhereUniqueWithoutCompanyInput = {
    where: NewsArticleWhereUniqueInput
    update: XOR<NewsArticleUpdateWithoutCompanyInput, NewsArticleUncheckedUpdateWithoutCompanyInput>
    create: XOR<NewsArticleCreateWithoutCompanyInput, NewsArticleUncheckedCreateWithoutCompanyInput>
  }

  export type NewsArticleUpdateWithWhereUniqueWithoutCompanyInput = {
    where: NewsArticleWhereUniqueInput
    data: XOR<NewsArticleUpdateWithoutCompanyInput, NewsArticleUncheckedUpdateWithoutCompanyInput>
  }

  export type NewsArticleUpdateManyWithWhereWithoutCompanyInput = {
    where: NewsArticleScalarWhereInput
    data: XOR<NewsArticleUpdateManyMutationInput, NewsArticleUncheckedUpdateManyWithoutCompanyInput>
  }

  export type NewsArticleScalarWhereInput = {
    AND?: NewsArticleScalarWhereInput | NewsArticleScalarWhereInput[]
    OR?: NewsArticleScalarWhereInput[]
    NOT?: NewsArticleScalarWhereInput | NewsArticleScalarWhereInput[]
    id?: IntFilter<"NewsArticle"> | number
    companyId?: IntFilter<"NewsArticle"> | number
    timestamp?: DateTimeFilter<"NewsArticle"> | Date | string
    headline?: StringFilter<"NewsArticle"> | string
    content?: StringFilter<"NewsArticle"> | string
    sentiment?: FloatNullableFilter<"NewsArticle"> | number | null
    source?: StringNullableFilter<"NewsArticle"> | string | null
    reaction?: StringNullableFilter<"NewsArticle"> | string | null
  }

  export type IndexCompanyUpsertWithWhereUniqueWithoutCompanyInput = {
    where: IndexCompanyWhereUniqueInput
    update: XOR<IndexCompanyUpdateWithoutCompanyInput, IndexCompanyUncheckedUpdateWithoutCompanyInput>
    create: XOR<IndexCompanyCreateWithoutCompanyInput, IndexCompanyUncheckedCreateWithoutCompanyInput>
  }

  export type IndexCompanyUpdateWithWhereUniqueWithoutCompanyInput = {
    where: IndexCompanyWhereUniqueInput
    data: XOR<IndexCompanyUpdateWithoutCompanyInput, IndexCompanyUncheckedUpdateWithoutCompanyInput>
  }

  export type IndexCompanyUpdateManyWithWhereWithoutCompanyInput = {
    where: IndexCompanyScalarWhereInput
    data: XOR<IndexCompanyUpdateManyMutationInput, IndexCompanyUncheckedUpdateManyWithoutCompanyInput>
  }

  export type IndexCompanyScalarWhereInput = {
    AND?: IndexCompanyScalarWhereInput | IndexCompanyScalarWhereInput[]
    OR?: IndexCompanyScalarWhereInput[]
    NOT?: IndexCompanyScalarWhereInput | IndexCompanyScalarWhereInput[]
    id?: IntFilter<"IndexCompany"> | number
    indexId?: IntFilter<"IndexCompany"> | number
    companyId?: IntFilter<"IndexCompany"> | number
    weight?: FloatFilter<"IndexCompany"> | number
  }

  export type FinancialDataUpsertWithWhereUniqueWithoutCompanyInput = {
    where: FinancialDataWhereUniqueInput
    update: XOR<FinancialDataUpdateWithoutCompanyInput, FinancialDataUncheckedUpdateWithoutCompanyInput>
    create: XOR<FinancialDataCreateWithoutCompanyInput, FinancialDataUncheckedCreateWithoutCompanyInput>
  }

  export type FinancialDataUpdateWithWhereUniqueWithoutCompanyInput = {
    where: FinancialDataWhereUniqueInput
    data: XOR<FinancialDataUpdateWithoutCompanyInput, FinancialDataUncheckedUpdateWithoutCompanyInput>
  }

  export type FinancialDataUpdateManyWithWhereWithoutCompanyInput = {
    where: FinancialDataScalarWhereInput
    data: XOR<FinancialDataUpdateManyMutationInput, FinancialDataUncheckedUpdateManyWithoutCompanyInput>
  }

  export type FinancialDataScalarWhereInput = {
    AND?: FinancialDataScalarWhereInput | FinancialDataScalarWhereInput[]
    OR?: FinancialDataScalarWhereInput[]
    NOT?: FinancialDataScalarWhereInput | FinancialDataScalarWhereInput[]
    id?: IntFilter<"FinancialData"> | number
    companyId?: IntFilter<"FinancialData"> | number
    year?: IntFilter<"FinancialData"> | number
    revenue?: FloatNullableFilter<"FinancialData"> | number | null
    netIncome?: FloatNullableFilter<"FinancialData"> | number | null
    grossProfit?: FloatNullableFilter<"FinancialData"> | number | null
    operatingProfit?: FloatNullableFilter<"FinancialData"> | number | null
    operatingExpenses?: FloatNullableFilter<"FinancialData"> | number | null
    costOfSales?: FloatNullableFilter<"FinancialData"> | number | null
  }

  export type CompanyUpsertWithoutRivalOfInput = {
    update: XOR<CompanyUpdateWithoutRivalOfInput, CompanyUncheckedUpdateWithoutRivalOfInput>
    create: XOR<CompanyCreateWithoutRivalOfInput, CompanyUncheckedCreateWithoutRivalOfInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutRivalOfInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutRivalOfInput, CompanyUncheckedUpdateWithoutRivalOfInput>
  }

  export type CompanyUpdateWithoutRivalOfInput = {
    name?: StringFieldUpdateOperationsInput | string
    tickerSymbol?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    latestPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    sharesOutstanding?: IntFieldUpdateOperationsInput | number
    valuation?: NullableFloatFieldUpdateOperationsInput | number | null
    ceoId?: NullableIntFieldUpdateOperationsInput | number | null
    sector?: SectorUpdateOneRequiredWithoutCompaniesNestedInput
    subIndustry?: SubIndustryUpdateOneRequiredWithoutCompaniesNestedInput
    ceo?: CEOUpdateOneWithoutCompanyNestedInput
    stockPrices?: StockPriceUpdateManyWithoutCompanyNestedInput
    newsArticles?: NewsArticleUpdateManyWithoutCompanyNestedInput
    indices?: IndexCompanyUpdateManyWithoutCompanyNestedInput
    financialData?: FinancialDataUpdateManyWithoutCompanyNestedInput
    rivalCompany?: CompanyUpdateOneWithoutRivalOfNestedInput
  }

  export type CompanyUncheckedUpdateWithoutRivalOfInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tickerSymbol?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sectorId?: IntFieldUpdateOperationsInput | number
    subIndustryId?: IntFieldUpdateOperationsInput | number
    latestPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    sharesOutstanding?: IntFieldUpdateOperationsInput | number
    valuation?: NullableFloatFieldUpdateOperationsInput | number | null
    ceoId?: NullableIntFieldUpdateOperationsInput | number | null
    rivalCompanyId?: NullableIntFieldUpdateOperationsInput | number | null
    ceo?: CEOUncheckedUpdateOneWithoutCompanyNestedInput
    stockPrices?: StockPriceUncheckedUpdateManyWithoutCompanyNestedInput
    newsArticles?: NewsArticleUncheckedUpdateManyWithoutCompanyNestedInput
    indices?: IndexCompanyUncheckedUpdateManyWithoutCompanyNestedInput
    financialData?: FinancialDataUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUpsertWithoutRivalCompanyInput = {
    update: XOR<CompanyUpdateWithoutRivalCompanyInput, CompanyUncheckedUpdateWithoutRivalCompanyInput>
    create: XOR<CompanyCreateWithoutRivalCompanyInput, CompanyUncheckedCreateWithoutRivalCompanyInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutRivalCompanyInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutRivalCompanyInput, CompanyUncheckedUpdateWithoutRivalCompanyInput>
  }

  export type CompanyUpdateWithoutRivalCompanyInput = {
    name?: StringFieldUpdateOperationsInput | string
    tickerSymbol?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    latestPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    sharesOutstanding?: IntFieldUpdateOperationsInput | number
    valuation?: NullableFloatFieldUpdateOperationsInput | number | null
    ceoId?: NullableIntFieldUpdateOperationsInput | number | null
    sector?: SectorUpdateOneRequiredWithoutCompaniesNestedInput
    subIndustry?: SubIndustryUpdateOneRequiredWithoutCompaniesNestedInput
    ceo?: CEOUpdateOneWithoutCompanyNestedInput
    stockPrices?: StockPriceUpdateManyWithoutCompanyNestedInput
    newsArticles?: NewsArticleUpdateManyWithoutCompanyNestedInput
    indices?: IndexCompanyUpdateManyWithoutCompanyNestedInput
    financialData?: FinancialDataUpdateManyWithoutCompanyNestedInput
    rivalOf?: CompanyUpdateOneWithoutRivalCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutRivalCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tickerSymbol?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sectorId?: IntFieldUpdateOperationsInput | number
    subIndustryId?: IntFieldUpdateOperationsInput | number
    latestPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    sharesOutstanding?: IntFieldUpdateOperationsInput | number
    valuation?: NullableFloatFieldUpdateOperationsInput | number | null
    ceoId?: NullableIntFieldUpdateOperationsInput | number | null
    ceo?: CEOUncheckedUpdateOneWithoutCompanyNestedInput
    stockPrices?: StockPriceUncheckedUpdateManyWithoutCompanyNestedInput
    newsArticles?: NewsArticleUncheckedUpdateManyWithoutCompanyNestedInput
    indices?: IndexCompanyUncheckedUpdateManyWithoutCompanyNestedInput
    financialData?: FinancialDataUncheckedUpdateManyWithoutCompanyNestedInput
    rivalOf?: CompanyUncheckedUpdateOneWithoutRivalCompanyNestedInput
  }

  export type CompanyCreateWithoutStockPricesInput = {
    name: string
    tickerSymbol: string
    description: string
    logoUrl?: string | null
    latestPrice?: number | null
    sharesOutstanding?: number
    valuation?: number | null
    ceoId?: number | null
    sector: SectorCreateNestedOneWithoutCompaniesInput
    subIndustry: SubIndustryCreateNestedOneWithoutCompaniesInput
    ceo?: CEOCreateNestedOneWithoutCompanyInput
    newsArticles?: NewsArticleCreateNestedManyWithoutCompanyInput
    indices?: IndexCompanyCreateNestedManyWithoutCompanyInput
    financialData?: FinancialDataCreateNestedManyWithoutCompanyInput
    rivalCompany?: CompanyCreateNestedOneWithoutRivalOfInput
    rivalOf?: CompanyCreateNestedOneWithoutRivalCompanyInput
  }

  export type CompanyUncheckedCreateWithoutStockPricesInput = {
    id?: number
    name: string
    tickerSymbol: string
    description: string
    logoUrl?: string | null
    sectorId: number
    subIndustryId: number
    latestPrice?: number | null
    sharesOutstanding?: number
    valuation?: number | null
    ceoId?: number | null
    rivalCompanyId?: number | null
    ceo?: CEOUncheckedCreateNestedOneWithoutCompanyInput
    newsArticles?: NewsArticleUncheckedCreateNestedManyWithoutCompanyInput
    indices?: IndexCompanyUncheckedCreateNestedManyWithoutCompanyInput
    financialData?: FinancialDataUncheckedCreateNestedManyWithoutCompanyInput
    rivalOf?: CompanyUncheckedCreateNestedOneWithoutRivalCompanyInput
  }

  export type CompanyCreateOrConnectWithoutStockPricesInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutStockPricesInput, CompanyUncheckedCreateWithoutStockPricesInput>
  }

  export type CompanyUpsertWithoutStockPricesInput = {
    update: XOR<CompanyUpdateWithoutStockPricesInput, CompanyUncheckedUpdateWithoutStockPricesInput>
    create: XOR<CompanyCreateWithoutStockPricesInput, CompanyUncheckedCreateWithoutStockPricesInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutStockPricesInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutStockPricesInput, CompanyUncheckedUpdateWithoutStockPricesInput>
  }

  export type CompanyUpdateWithoutStockPricesInput = {
    name?: StringFieldUpdateOperationsInput | string
    tickerSymbol?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    latestPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    sharesOutstanding?: IntFieldUpdateOperationsInput | number
    valuation?: NullableFloatFieldUpdateOperationsInput | number | null
    ceoId?: NullableIntFieldUpdateOperationsInput | number | null
    sector?: SectorUpdateOneRequiredWithoutCompaniesNestedInput
    subIndustry?: SubIndustryUpdateOneRequiredWithoutCompaniesNestedInput
    ceo?: CEOUpdateOneWithoutCompanyNestedInput
    newsArticles?: NewsArticleUpdateManyWithoutCompanyNestedInput
    indices?: IndexCompanyUpdateManyWithoutCompanyNestedInput
    financialData?: FinancialDataUpdateManyWithoutCompanyNestedInput
    rivalCompany?: CompanyUpdateOneWithoutRivalOfNestedInput
    rivalOf?: CompanyUpdateOneWithoutRivalCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutStockPricesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tickerSymbol?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sectorId?: IntFieldUpdateOperationsInput | number
    subIndustryId?: IntFieldUpdateOperationsInput | number
    latestPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    sharesOutstanding?: IntFieldUpdateOperationsInput | number
    valuation?: NullableFloatFieldUpdateOperationsInput | number | null
    ceoId?: NullableIntFieldUpdateOperationsInput | number | null
    rivalCompanyId?: NullableIntFieldUpdateOperationsInput | number | null
    ceo?: CEOUncheckedUpdateOneWithoutCompanyNestedInput
    newsArticles?: NewsArticleUncheckedUpdateManyWithoutCompanyNestedInput
    indices?: IndexCompanyUncheckedUpdateManyWithoutCompanyNestedInput
    financialData?: FinancialDataUncheckedUpdateManyWithoutCompanyNestedInput
    rivalOf?: CompanyUncheckedUpdateOneWithoutRivalCompanyNestedInput
  }

  export type CompanyCreateWithoutNewsArticlesInput = {
    name: string
    tickerSymbol: string
    description: string
    logoUrl?: string | null
    latestPrice?: number | null
    sharesOutstanding?: number
    valuation?: number | null
    ceoId?: number | null
    sector: SectorCreateNestedOneWithoutCompaniesInput
    subIndustry: SubIndustryCreateNestedOneWithoutCompaniesInput
    ceo?: CEOCreateNestedOneWithoutCompanyInput
    stockPrices?: StockPriceCreateNestedManyWithoutCompanyInput
    indices?: IndexCompanyCreateNestedManyWithoutCompanyInput
    financialData?: FinancialDataCreateNestedManyWithoutCompanyInput
    rivalCompany?: CompanyCreateNestedOneWithoutRivalOfInput
    rivalOf?: CompanyCreateNestedOneWithoutRivalCompanyInput
  }

  export type CompanyUncheckedCreateWithoutNewsArticlesInput = {
    id?: number
    name: string
    tickerSymbol: string
    description: string
    logoUrl?: string | null
    sectorId: number
    subIndustryId: number
    latestPrice?: number | null
    sharesOutstanding?: number
    valuation?: number | null
    ceoId?: number | null
    rivalCompanyId?: number | null
    ceo?: CEOUncheckedCreateNestedOneWithoutCompanyInput
    stockPrices?: StockPriceUncheckedCreateNestedManyWithoutCompanyInput
    indices?: IndexCompanyUncheckedCreateNestedManyWithoutCompanyInput
    financialData?: FinancialDataUncheckedCreateNestedManyWithoutCompanyInput
    rivalOf?: CompanyUncheckedCreateNestedOneWithoutRivalCompanyInput
  }

  export type CompanyCreateOrConnectWithoutNewsArticlesInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutNewsArticlesInput, CompanyUncheckedCreateWithoutNewsArticlesInput>
  }

  export type CompanyUpsertWithoutNewsArticlesInput = {
    update: XOR<CompanyUpdateWithoutNewsArticlesInput, CompanyUncheckedUpdateWithoutNewsArticlesInput>
    create: XOR<CompanyCreateWithoutNewsArticlesInput, CompanyUncheckedCreateWithoutNewsArticlesInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutNewsArticlesInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutNewsArticlesInput, CompanyUncheckedUpdateWithoutNewsArticlesInput>
  }

  export type CompanyUpdateWithoutNewsArticlesInput = {
    name?: StringFieldUpdateOperationsInput | string
    tickerSymbol?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    latestPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    sharesOutstanding?: IntFieldUpdateOperationsInput | number
    valuation?: NullableFloatFieldUpdateOperationsInput | number | null
    ceoId?: NullableIntFieldUpdateOperationsInput | number | null
    sector?: SectorUpdateOneRequiredWithoutCompaniesNestedInput
    subIndustry?: SubIndustryUpdateOneRequiredWithoutCompaniesNestedInput
    ceo?: CEOUpdateOneWithoutCompanyNestedInput
    stockPrices?: StockPriceUpdateManyWithoutCompanyNestedInput
    indices?: IndexCompanyUpdateManyWithoutCompanyNestedInput
    financialData?: FinancialDataUpdateManyWithoutCompanyNestedInput
    rivalCompany?: CompanyUpdateOneWithoutRivalOfNestedInput
    rivalOf?: CompanyUpdateOneWithoutRivalCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutNewsArticlesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tickerSymbol?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sectorId?: IntFieldUpdateOperationsInput | number
    subIndustryId?: IntFieldUpdateOperationsInput | number
    latestPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    sharesOutstanding?: IntFieldUpdateOperationsInput | number
    valuation?: NullableFloatFieldUpdateOperationsInput | number | null
    ceoId?: NullableIntFieldUpdateOperationsInput | number | null
    rivalCompanyId?: NullableIntFieldUpdateOperationsInput | number | null
    ceo?: CEOUncheckedUpdateOneWithoutCompanyNestedInput
    stockPrices?: StockPriceUncheckedUpdateManyWithoutCompanyNestedInput
    indices?: IndexCompanyUncheckedUpdateManyWithoutCompanyNestedInput
    financialData?: FinancialDataUncheckedUpdateManyWithoutCompanyNestedInput
    rivalOf?: CompanyUncheckedUpdateOneWithoutRivalCompanyNestedInput
  }

  export type IndexPriceCreateWithoutIndexInput = {
    timestamp?: Date | string
    price: number
  }

  export type IndexPriceUncheckedCreateWithoutIndexInput = {
    id?: number
    timestamp?: Date | string
    price: number
  }

  export type IndexPriceCreateOrConnectWithoutIndexInput = {
    where: IndexPriceWhereUniqueInput
    create: XOR<IndexPriceCreateWithoutIndexInput, IndexPriceUncheckedCreateWithoutIndexInput>
  }

  export type IndexPriceCreateManyIndexInputEnvelope = {
    data: IndexPriceCreateManyIndexInput | IndexPriceCreateManyIndexInput[]
    skipDuplicates?: boolean
  }

  export type IndexCompanyCreateWithoutIndexInput = {
    weight: number
    company: CompanyCreateNestedOneWithoutIndicesInput
  }

  export type IndexCompanyUncheckedCreateWithoutIndexInput = {
    id?: number
    companyId: number
    weight: number
  }

  export type IndexCompanyCreateOrConnectWithoutIndexInput = {
    where: IndexCompanyWhereUniqueInput
    create: XOR<IndexCompanyCreateWithoutIndexInput, IndexCompanyUncheckedCreateWithoutIndexInput>
  }

  export type IndexCompanyCreateManyIndexInputEnvelope = {
    data: IndexCompanyCreateManyIndexInput | IndexCompanyCreateManyIndexInput[]
    skipDuplicates?: boolean
  }

  export type IndexPriceUpsertWithWhereUniqueWithoutIndexInput = {
    where: IndexPriceWhereUniqueInput
    update: XOR<IndexPriceUpdateWithoutIndexInput, IndexPriceUncheckedUpdateWithoutIndexInput>
    create: XOR<IndexPriceCreateWithoutIndexInput, IndexPriceUncheckedCreateWithoutIndexInput>
  }

  export type IndexPriceUpdateWithWhereUniqueWithoutIndexInput = {
    where: IndexPriceWhereUniqueInput
    data: XOR<IndexPriceUpdateWithoutIndexInput, IndexPriceUncheckedUpdateWithoutIndexInput>
  }

  export type IndexPriceUpdateManyWithWhereWithoutIndexInput = {
    where: IndexPriceScalarWhereInput
    data: XOR<IndexPriceUpdateManyMutationInput, IndexPriceUncheckedUpdateManyWithoutIndexInput>
  }

  export type IndexPriceScalarWhereInput = {
    AND?: IndexPriceScalarWhereInput | IndexPriceScalarWhereInput[]
    OR?: IndexPriceScalarWhereInput[]
    NOT?: IndexPriceScalarWhereInput | IndexPriceScalarWhereInput[]
    id?: IntFilter<"IndexPrice"> | number
    indexId?: IntFilter<"IndexPrice"> | number
    timestamp?: DateTimeFilter<"IndexPrice"> | Date | string
    price?: FloatFilter<"IndexPrice"> | number
  }

  export type IndexCompanyUpsertWithWhereUniqueWithoutIndexInput = {
    where: IndexCompanyWhereUniqueInput
    update: XOR<IndexCompanyUpdateWithoutIndexInput, IndexCompanyUncheckedUpdateWithoutIndexInput>
    create: XOR<IndexCompanyCreateWithoutIndexInput, IndexCompanyUncheckedCreateWithoutIndexInput>
  }

  export type IndexCompanyUpdateWithWhereUniqueWithoutIndexInput = {
    where: IndexCompanyWhereUniqueInput
    data: XOR<IndexCompanyUpdateWithoutIndexInput, IndexCompanyUncheckedUpdateWithoutIndexInput>
  }

  export type IndexCompanyUpdateManyWithWhereWithoutIndexInput = {
    where: IndexCompanyScalarWhereInput
    data: XOR<IndexCompanyUpdateManyMutationInput, IndexCompanyUncheckedUpdateManyWithoutIndexInput>
  }

  export type IndexCreateWithoutIndexPricesInput = {
    name: string
    tickerSymbol: string
    description: string
    companies?: IndexCompanyCreateNestedManyWithoutIndexInput
  }

  export type IndexUncheckedCreateWithoutIndexPricesInput = {
    id?: number
    name: string
    tickerSymbol: string
    description: string
    companies?: IndexCompanyUncheckedCreateNestedManyWithoutIndexInput
  }

  export type IndexCreateOrConnectWithoutIndexPricesInput = {
    where: IndexWhereUniqueInput
    create: XOR<IndexCreateWithoutIndexPricesInput, IndexUncheckedCreateWithoutIndexPricesInput>
  }

  export type IndexUpsertWithoutIndexPricesInput = {
    update: XOR<IndexUpdateWithoutIndexPricesInput, IndexUncheckedUpdateWithoutIndexPricesInput>
    create: XOR<IndexCreateWithoutIndexPricesInput, IndexUncheckedCreateWithoutIndexPricesInput>
    where?: IndexWhereInput
  }

  export type IndexUpdateToOneWithWhereWithoutIndexPricesInput = {
    where?: IndexWhereInput
    data: XOR<IndexUpdateWithoutIndexPricesInput, IndexUncheckedUpdateWithoutIndexPricesInput>
  }

  export type IndexUpdateWithoutIndexPricesInput = {
    name?: StringFieldUpdateOperationsInput | string
    tickerSymbol?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    companies?: IndexCompanyUpdateManyWithoutIndexNestedInput
  }

  export type IndexUncheckedUpdateWithoutIndexPricesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tickerSymbol?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    companies?: IndexCompanyUncheckedUpdateManyWithoutIndexNestedInput
  }

  export type IndexCreateWithoutCompaniesInput = {
    name: string
    tickerSymbol: string
    description: string
    indexPrices?: IndexPriceCreateNestedManyWithoutIndexInput
  }

  export type IndexUncheckedCreateWithoutCompaniesInput = {
    id?: number
    name: string
    tickerSymbol: string
    description: string
    indexPrices?: IndexPriceUncheckedCreateNestedManyWithoutIndexInput
  }

  export type IndexCreateOrConnectWithoutCompaniesInput = {
    where: IndexWhereUniqueInput
    create: XOR<IndexCreateWithoutCompaniesInput, IndexUncheckedCreateWithoutCompaniesInput>
  }

  export type CompanyCreateWithoutIndicesInput = {
    name: string
    tickerSymbol: string
    description: string
    logoUrl?: string | null
    latestPrice?: number | null
    sharesOutstanding?: number
    valuation?: number | null
    ceoId?: number | null
    sector: SectorCreateNestedOneWithoutCompaniesInput
    subIndustry: SubIndustryCreateNestedOneWithoutCompaniesInput
    ceo?: CEOCreateNestedOneWithoutCompanyInput
    stockPrices?: StockPriceCreateNestedManyWithoutCompanyInput
    newsArticles?: NewsArticleCreateNestedManyWithoutCompanyInput
    financialData?: FinancialDataCreateNestedManyWithoutCompanyInput
    rivalCompany?: CompanyCreateNestedOneWithoutRivalOfInput
    rivalOf?: CompanyCreateNestedOneWithoutRivalCompanyInput
  }

  export type CompanyUncheckedCreateWithoutIndicesInput = {
    id?: number
    name: string
    tickerSymbol: string
    description: string
    logoUrl?: string | null
    sectorId: number
    subIndustryId: number
    latestPrice?: number | null
    sharesOutstanding?: number
    valuation?: number | null
    ceoId?: number | null
    rivalCompanyId?: number | null
    ceo?: CEOUncheckedCreateNestedOneWithoutCompanyInput
    stockPrices?: StockPriceUncheckedCreateNestedManyWithoutCompanyInput
    newsArticles?: NewsArticleUncheckedCreateNestedManyWithoutCompanyInput
    financialData?: FinancialDataUncheckedCreateNestedManyWithoutCompanyInput
    rivalOf?: CompanyUncheckedCreateNestedOneWithoutRivalCompanyInput
  }

  export type CompanyCreateOrConnectWithoutIndicesInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutIndicesInput, CompanyUncheckedCreateWithoutIndicesInput>
  }

  export type IndexUpsertWithoutCompaniesInput = {
    update: XOR<IndexUpdateWithoutCompaniesInput, IndexUncheckedUpdateWithoutCompaniesInput>
    create: XOR<IndexCreateWithoutCompaniesInput, IndexUncheckedCreateWithoutCompaniesInput>
    where?: IndexWhereInput
  }

  export type IndexUpdateToOneWithWhereWithoutCompaniesInput = {
    where?: IndexWhereInput
    data: XOR<IndexUpdateWithoutCompaniesInput, IndexUncheckedUpdateWithoutCompaniesInput>
  }

  export type IndexUpdateWithoutCompaniesInput = {
    name?: StringFieldUpdateOperationsInput | string
    tickerSymbol?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    indexPrices?: IndexPriceUpdateManyWithoutIndexNestedInput
  }

  export type IndexUncheckedUpdateWithoutCompaniesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tickerSymbol?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    indexPrices?: IndexPriceUncheckedUpdateManyWithoutIndexNestedInput
  }

  export type CompanyUpsertWithoutIndicesInput = {
    update: XOR<CompanyUpdateWithoutIndicesInput, CompanyUncheckedUpdateWithoutIndicesInput>
    create: XOR<CompanyCreateWithoutIndicesInput, CompanyUncheckedCreateWithoutIndicesInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutIndicesInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutIndicesInput, CompanyUncheckedUpdateWithoutIndicesInput>
  }

  export type CompanyUpdateWithoutIndicesInput = {
    name?: StringFieldUpdateOperationsInput | string
    tickerSymbol?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    latestPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    sharesOutstanding?: IntFieldUpdateOperationsInput | number
    valuation?: NullableFloatFieldUpdateOperationsInput | number | null
    ceoId?: NullableIntFieldUpdateOperationsInput | number | null
    sector?: SectorUpdateOneRequiredWithoutCompaniesNestedInput
    subIndustry?: SubIndustryUpdateOneRequiredWithoutCompaniesNestedInput
    ceo?: CEOUpdateOneWithoutCompanyNestedInput
    stockPrices?: StockPriceUpdateManyWithoutCompanyNestedInput
    newsArticles?: NewsArticleUpdateManyWithoutCompanyNestedInput
    financialData?: FinancialDataUpdateManyWithoutCompanyNestedInput
    rivalCompany?: CompanyUpdateOneWithoutRivalOfNestedInput
    rivalOf?: CompanyUpdateOneWithoutRivalCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutIndicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tickerSymbol?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sectorId?: IntFieldUpdateOperationsInput | number
    subIndustryId?: IntFieldUpdateOperationsInput | number
    latestPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    sharesOutstanding?: IntFieldUpdateOperationsInput | number
    valuation?: NullableFloatFieldUpdateOperationsInput | number | null
    ceoId?: NullableIntFieldUpdateOperationsInput | number | null
    rivalCompanyId?: NullableIntFieldUpdateOperationsInput | number | null
    ceo?: CEOUncheckedUpdateOneWithoutCompanyNestedInput
    stockPrices?: StockPriceUncheckedUpdateManyWithoutCompanyNestedInput
    newsArticles?: NewsArticleUncheckedUpdateManyWithoutCompanyNestedInput
    financialData?: FinancialDataUncheckedUpdateManyWithoutCompanyNestedInput
    rivalOf?: CompanyUncheckedUpdateOneWithoutRivalCompanyNestedInput
  }

  export type CompanyCreateWithoutCeoInput = {
    name: string
    tickerSymbol: string
    description: string
    logoUrl?: string | null
    latestPrice?: number | null
    sharesOutstanding?: number
    valuation?: number | null
    ceoId?: number | null
    sector: SectorCreateNestedOneWithoutCompaniesInput
    subIndustry: SubIndustryCreateNestedOneWithoutCompaniesInput
    stockPrices?: StockPriceCreateNestedManyWithoutCompanyInput
    newsArticles?: NewsArticleCreateNestedManyWithoutCompanyInput
    indices?: IndexCompanyCreateNestedManyWithoutCompanyInput
    financialData?: FinancialDataCreateNestedManyWithoutCompanyInput
    rivalCompany?: CompanyCreateNestedOneWithoutRivalOfInput
    rivalOf?: CompanyCreateNestedOneWithoutRivalCompanyInput
  }

  export type CompanyUncheckedCreateWithoutCeoInput = {
    id?: number
    name: string
    tickerSymbol: string
    description: string
    logoUrl?: string | null
    sectorId: number
    subIndustryId: number
    latestPrice?: number | null
    sharesOutstanding?: number
    valuation?: number | null
    ceoId?: number | null
    rivalCompanyId?: number | null
    stockPrices?: StockPriceUncheckedCreateNestedManyWithoutCompanyInput
    newsArticles?: NewsArticleUncheckedCreateNestedManyWithoutCompanyInput
    indices?: IndexCompanyUncheckedCreateNestedManyWithoutCompanyInput
    financialData?: FinancialDataUncheckedCreateNestedManyWithoutCompanyInput
    rivalOf?: CompanyUncheckedCreateNestedOneWithoutRivalCompanyInput
  }

  export type CompanyCreateOrConnectWithoutCeoInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutCeoInput, CompanyUncheckedCreateWithoutCeoInput>
  }

  export type CompanyUpsertWithoutCeoInput = {
    update: XOR<CompanyUpdateWithoutCeoInput, CompanyUncheckedUpdateWithoutCeoInput>
    create: XOR<CompanyCreateWithoutCeoInput, CompanyUncheckedCreateWithoutCeoInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutCeoInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutCeoInput, CompanyUncheckedUpdateWithoutCeoInput>
  }

  export type CompanyUpdateWithoutCeoInput = {
    name?: StringFieldUpdateOperationsInput | string
    tickerSymbol?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    latestPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    sharesOutstanding?: IntFieldUpdateOperationsInput | number
    valuation?: NullableFloatFieldUpdateOperationsInput | number | null
    ceoId?: NullableIntFieldUpdateOperationsInput | number | null
    sector?: SectorUpdateOneRequiredWithoutCompaniesNestedInput
    subIndustry?: SubIndustryUpdateOneRequiredWithoutCompaniesNestedInput
    stockPrices?: StockPriceUpdateManyWithoutCompanyNestedInput
    newsArticles?: NewsArticleUpdateManyWithoutCompanyNestedInput
    indices?: IndexCompanyUpdateManyWithoutCompanyNestedInput
    financialData?: FinancialDataUpdateManyWithoutCompanyNestedInput
    rivalCompany?: CompanyUpdateOneWithoutRivalOfNestedInput
    rivalOf?: CompanyUpdateOneWithoutRivalCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutCeoInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tickerSymbol?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sectorId?: IntFieldUpdateOperationsInput | number
    subIndustryId?: IntFieldUpdateOperationsInput | number
    latestPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    sharesOutstanding?: IntFieldUpdateOperationsInput | number
    valuation?: NullableFloatFieldUpdateOperationsInput | number | null
    ceoId?: NullableIntFieldUpdateOperationsInput | number | null
    rivalCompanyId?: NullableIntFieldUpdateOperationsInput | number | null
    stockPrices?: StockPriceUncheckedUpdateManyWithoutCompanyNestedInput
    newsArticles?: NewsArticleUncheckedUpdateManyWithoutCompanyNestedInput
    indices?: IndexCompanyUncheckedUpdateManyWithoutCompanyNestedInput
    financialData?: FinancialDataUncheckedUpdateManyWithoutCompanyNestedInput
    rivalOf?: CompanyUncheckedUpdateOneWithoutRivalCompanyNestedInput
  }

  export type CompanyCreateManySectorInput = {
    id?: number
    name: string
    tickerSymbol: string
    description: string
    logoUrl?: string | null
    subIndustryId: number
    latestPrice?: number | null
    sharesOutstanding?: number
    valuation?: number | null
    ceoId?: number | null
    rivalCompanyId?: number | null
  }

  export type SubIndustryCreateManySectorInput = {
    id?: number
    name: string
  }

  export type CompanyUpdateWithoutSectorInput = {
    name?: StringFieldUpdateOperationsInput | string
    tickerSymbol?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    latestPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    sharesOutstanding?: IntFieldUpdateOperationsInput | number
    valuation?: NullableFloatFieldUpdateOperationsInput | number | null
    ceoId?: NullableIntFieldUpdateOperationsInput | number | null
    subIndustry?: SubIndustryUpdateOneRequiredWithoutCompaniesNestedInput
    ceo?: CEOUpdateOneWithoutCompanyNestedInput
    stockPrices?: StockPriceUpdateManyWithoutCompanyNestedInput
    newsArticles?: NewsArticleUpdateManyWithoutCompanyNestedInput
    indices?: IndexCompanyUpdateManyWithoutCompanyNestedInput
    financialData?: FinancialDataUpdateManyWithoutCompanyNestedInput
    rivalCompany?: CompanyUpdateOneWithoutRivalOfNestedInput
    rivalOf?: CompanyUpdateOneWithoutRivalCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutSectorInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tickerSymbol?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    subIndustryId?: IntFieldUpdateOperationsInput | number
    latestPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    sharesOutstanding?: IntFieldUpdateOperationsInput | number
    valuation?: NullableFloatFieldUpdateOperationsInput | number | null
    ceoId?: NullableIntFieldUpdateOperationsInput | number | null
    rivalCompanyId?: NullableIntFieldUpdateOperationsInput | number | null
    ceo?: CEOUncheckedUpdateOneWithoutCompanyNestedInput
    stockPrices?: StockPriceUncheckedUpdateManyWithoutCompanyNestedInput
    newsArticles?: NewsArticleUncheckedUpdateManyWithoutCompanyNestedInput
    indices?: IndexCompanyUncheckedUpdateManyWithoutCompanyNestedInput
    financialData?: FinancialDataUncheckedUpdateManyWithoutCompanyNestedInput
    rivalOf?: CompanyUncheckedUpdateOneWithoutRivalCompanyNestedInput
  }

  export type CompanyUncheckedUpdateManyWithoutSectorInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tickerSymbol?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    subIndustryId?: IntFieldUpdateOperationsInput | number
    latestPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    sharesOutstanding?: IntFieldUpdateOperationsInput | number
    valuation?: NullableFloatFieldUpdateOperationsInput | number | null
    ceoId?: NullableIntFieldUpdateOperationsInput | number | null
    rivalCompanyId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SubIndustryUpdateWithoutSectorInput = {
    name?: StringFieldUpdateOperationsInput | string
    companies?: CompanyUpdateManyWithoutSubIndustryNestedInput
  }

  export type SubIndustryUncheckedUpdateWithoutSectorInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    companies?: CompanyUncheckedUpdateManyWithoutSubIndustryNestedInput
  }

  export type SubIndustryUncheckedUpdateManyWithoutSectorInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CompanyCreateManySubIndustryInput = {
    id?: number
    name: string
    tickerSymbol: string
    description: string
    logoUrl?: string | null
    sectorId: number
    latestPrice?: number | null
    sharesOutstanding?: number
    valuation?: number | null
    ceoId?: number | null
    rivalCompanyId?: number | null
  }

  export type CompanyUpdateWithoutSubIndustryInput = {
    name?: StringFieldUpdateOperationsInput | string
    tickerSymbol?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    latestPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    sharesOutstanding?: IntFieldUpdateOperationsInput | number
    valuation?: NullableFloatFieldUpdateOperationsInput | number | null
    ceoId?: NullableIntFieldUpdateOperationsInput | number | null
    sector?: SectorUpdateOneRequiredWithoutCompaniesNestedInput
    ceo?: CEOUpdateOneWithoutCompanyNestedInput
    stockPrices?: StockPriceUpdateManyWithoutCompanyNestedInput
    newsArticles?: NewsArticleUpdateManyWithoutCompanyNestedInput
    indices?: IndexCompanyUpdateManyWithoutCompanyNestedInput
    financialData?: FinancialDataUpdateManyWithoutCompanyNestedInput
    rivalCompany?: CompanyUpdateOneWithoutRivalOfNestedInput
    rivalOf?: CompanyUpdateOneWithoutRivalCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutSubIndustryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tickerSymbol?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sectorId?: IntFieldUpdateOperationsInput | number
    latestPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    sharesOutstanding?: IntFieldUpdateOperationsInput | number
    valuation?: NullableFloatFieldUpdateOperationsInput | number | null
    ceoId?: NullableIntFieldUpdateOperationsInput | number | null
    rivalCompanyId?: NullableIntFieldUpdateOperationsInput | number | null
    ceo?: CEOUncheckedUpdateOneWithoutCompanyNestedInput
    stockPrices?: StockPriceUncheckedUpdateManyWithoutCompanyNestedInput
    newsArticles?: NewsArticleUncheckedUpdateManyWithoutCompanyNestedInput
    indices?: IndexCompanyUncheckedUpdateManyWithoutCompanyNestedInput
    financialData?: FinancialDataUncheckedUpdateManyWithoutCompanyNestedInput
    rivalOf?: CompanyUncheckedUpdateOneWithoutRivalCompanyNestedInput
  }

  export type CompanyUncheckedUpdateManyWithoutSubIndustryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tickerSymbol?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sectorId?: IntFieldUpdateOperationsInput | number
    latestPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    sharesOutstanding?: IntFieldUpdateOperationsInput | number
    valuation?: NullableFloatFieldUpdateOperationsInput | number | null
    ceoId?: NullableIntFieldUpdateOperationsInput | number | null
    rivalCompanyId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type StockPriceCreateManyCompanyInput = {
    id?: number
    timestamp?: Date | string
    price: number
    momentum?: number
  }

  export type NewsArticleCreateManyCompanyInput = {
    id?: number
    timestamp?: Date | string
    headline: string
    content: string
    sentiment?: number | null
    source?: string | null
    reaction?: string | null
  }

  export type IndexCompanyCreateManyCompanyInput = {
    id?: number
    indexId: number
    weight: number
  }

  export type FinancialDataCreateManyCompanyInput = {
    id?: number
    year: number
    revenue?: number | null
    netIncome?: number | null
    grossProfit?: number | null
    operatingProfit?: number | null
    operatingExpenses?: number | null
    costOfSales?: number | null
  }

  export type StockPriceUpdateWithoutCompanyInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    momentum?: FloatFieldUpdateOperationsInput | number
  }

  export type StockPriceUncheckedUpdateWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    momentum?: FloatFieldUpdateOperationsInput | number
  }

  export type StockPriceUncheckedUpdateManyWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    momentum?: FloatFieldUpdateOperationsInput | number
  }

  export type NewsArticleUpdateWithoutCompanyInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    headline?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sentiment?: NullableFloatFieldUpdateOperationsInput | number | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    reaction?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NewsArticleUncheckedUpdateWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    headline?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sentiment?: NullableFloatFieldUpdateOperationsInput | number | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    reaction?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NewsArticleUncheckedUpdateManyWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    headline?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sentiment?: NullableFloatFieldUpdateOperationsInput | number | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    reaction?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IndexCompanyUpdateWithoutCompanyInput = {
    weight?: FloatFieldUpdateOperationsInput | number
    index?: IndexUpdateOneRequiredWithoutCompaniesNestedInput
  }

  export type IndexCompanyUncheckedUpdateWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    indexId?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
  }

  export type IndexCompanyUncheckedUpdateManyWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    indexId?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
  }

  export type FinancialDataUpdateWithoutCompanyInput = {
    year?: IntFieldUpdateOperationsInput | number
    revenue?: NullableFloatFieldUpdateOperationsInput | number | null
    netIncome?: NullableFloatFieldUpdateOperationsInput | number | null
    grossProfit?: NullableFloatFieldUpdateOperationsInput | number | null
    operatingProfit?: NullableFloatFieldUpdateOperationsInput | number | null
    operatingExpenses?: NullableFloatFieldUpdateOperationsInput | number | null
    costOfSales?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type FinancialDataUncheckedUpdateWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    revenue?: NullableFloatFieldUpdateOperationsInput | number | null
    netIncome?: NullableFloatFieldUpdateOperationsInput | number | null
    grossProfit?: NullableFloatFieldUpdateOperationsInput | number | null
    operatingProfit?: NullableFloatFieldUpdateOperationsInput | number | null
    operatingExpenses?: NullableFloatFieldUpdateOperationsInput | number | null
    costOfSales?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type FinancialDataUncheckedUpdateManyWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    revenue?: NullableFloatFieldUpdateOperationsInput | number | null
    netIncome?: NullableFloatFieldUpdateOperationsInput | number | null
    grossProfit?: NullableFloatFieldUpdateOperationsInput | number | null
    operatingProfit?: NullableFloatFieldUpdateOperationsInput | number | null
    operatingExpenses?: NullableFloatFieldUpdateOperationsInput | number | null
    costOfSales?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type IndexPriceCreateManyIndexInput = {
    id?: number
    timestamp?: Date | string
    price: number
  }

  export type IndexCompanyCreateManyIndexInput = {
    id?: number
    companyId: number
    weight: number
  }

  export type IndexPriceUpdateWithoutIndexInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type IndexPriceUncheckedUpdateWithoutIndexInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type IndexPriceUncheckedUpdateManyWithoutIndexInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type IndexCompanyUpdateWithoutIndexInput = {
    weight?: FloatFieldUpdateOperationsInput | number
    company?: CompanyUpdateOneRequiredWithoutIndicesNestedInput
  }

  export type IndexCompanyUncheckedUpdateWithoutIndexInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyId?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
  }

  export type IndexCompanyUncheckedUpdateManyWithoutIndexInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyId?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
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