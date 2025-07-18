
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.4.1
 * Query Engine version: a9055b89e58b4b5bfb59600785423b1db3d0e75d
 */
Prisma.prismaVersion = {
  client: "6.4.1",
  engine: "a9055b89e58b4b5bfb59600785423b1db3d0e75d"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.SectorScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.SubIndustryScalarFieldEnum = {
  id: 'id',
  name: 'name',
  sectorId: 'sectorId'
};

exports.Prisma.FinancialDataScalarFieldEnum = {
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

exports.Prisma.CompanyScalarFieldEnum = {
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

exports.Prisma.StockPriceScalarFieldEnum = {
  id: 'id',
  companyId: 'companyId',
  timestamp: 'timestamp',
  price: 'price',
  momentum: 'momentum'
};

exports.Prisma.NewsArticleScalarFieldEnum = {
  id: 'id',
  companyId: 'companyId',
  timestamp: 'timestamp',
  headline: 'headline',
  content: 'content',
  sentiment: 'sentiment',
  source: 'source',
  reaction: 'reaction'
};

exports.Prisma.IndexScalarFieldEnum = {
  id: 'id',
  name: 'name',
  tickerSymbol: 'tickerSymbol',
  description: 'description'
};

exports.Prisma.IndexPriceScalarFieldEnum = {
  id: 'id',
  indexId: 'indexId',
  timestamp: 'timestamp',
  price: 'price'
};

exports.Prisma.IndexCompanyScalarFieldEnum = {
  id: 'id',
  indexId: 'indexId',
  companyId: 'companyId',
  weight: 'weight'
};

exports.Prisma.CEOScalarFieldEnum = {
  id: 'id',
  name: 'name',
  imageUrl: 'imageUrl',
  personality: 'personality',
  bio: 'bio',
  companyId: 'companyId'
};

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  username: 'username',
  password: 'password',
  provider: 'provider',
  providerId: 'providerId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.WatchlistScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  companyId: 'companyId'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  Sector: 'Sector',
  SubIndustry: 'SubIndustry',
  FinancialData: 'FinancialData',
  Company: 'Company',
  StockPrice: 'StockPrice',
  NewsArticle: 'NewsArticle',
  Index: 'Index',
  IndexPrice: 'IndexPrice',
  IndexCompany: 'IndexCompany',
  CEO: 'CEO',
  User: 'User',
  Watchlist: 'Watchlist'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
