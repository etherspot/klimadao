/** Adhere to JSONSchema spec by using a URI */
export const COMMON_SCHEMA_URI = "http://api.carbonmark.com/schemas";

const GRAPH_API_ROOT = "https://api.thegraph.com/subgraphs/name";
const GRAPH_API_ROOT_ID = "https://api.thegraph.com/subgraphs/id";

const POLYGON_URLS = {
  marketplace: `${GRAPH_API_ROOT_ID}/QmQZZSTzdP1JzyfvcZwJTZ6CCNXCBmhirc2AyCh4VDzPFV`,
  assets: `${GRAPH_API_ROOT}/cujowolf/klima-refi-current-holdings`,
  offsets: `${GRAPH_API_ROOT}/klimadao/polygon-bridged-carbon`,
  tokens: `${GRAPH_API_ROOT}/klimadao/klimadao-pairs`,
  digitalCarbon: `${GRAPH_API_ROOT}/klimadao/polygon-digital-carbon`,
};

// For now these are the same, marketplace will be updated once it has been released to polygon
const MUMBAI_URLS = POLYGON_URLS;

/** Graph URLS */
/** Note: the keys of the below objects are used when selecting gql files for type generation */
export const GRAPH_URLS = {
  polygon: POLYGON_URLS,
  mumbai: MUMBAI_URLS,
};

/** Sanity URLS */
export const SANITY_URLS = {
  carbonProjects:
    "https://l6of5nwi.apicdn.sanity.io/v1/graphql/production/default",
};

export const TOKEN_ADDRESSES = {
  development: {
    LP_UBO_POOL: "0x5400a05b8b45eaf9105315b4f2e31f806ab706de",
    LP_NBO_POOL: "0xd838290e877e0188a4a44700463419ed96c16107",
    LP_NTC_POOL: "0xdb995f975f1bfc3b2157495c47e4efb31196b2ca",
    LP_BTC_POOL: "0x9803c7ae526049210a1725f7487af26fe2c24614",
    UBO_POOL: "0x2B3eCb0991AF0498ECE9135bcD04013d7993110c",
    NBO_POOL: "0x6BCa3B77C1909Ce1a4Ba1A20d1103bDe8d222E48",
    NTC_POOL: "0xd838290e877e0188a4a44700463419ed96c16107",
    BTC_POOL: "0x2f800db0fdb5223b3c3f354886d907a671414a7f",
  },
  production: {
    LP_UBO_POOL: "0x5400a05b8b45eaf9105315b4f2e31f806ab706de",
    LP_NBO_POOL: "0x251ca6a70cbd93ccd7039b6b708d4cb9683c266c",
    LP_NTC_POOL: "0xdb995f975f1bfc3b2157495c47e4efb31196b2ca",
    LP_BTC_POOL: "0x9803c7ae526049210a1725f7487af26fe2c24614",
    UBO_POOL: "0x2B3eCb0991AF0498ECE9135bcD04013d7993110c",
    NBO_POOL: "0x6BCa3B77C1909Ce1a4Ba1A20d1103bDe8d222E48",
    NTC_POOL: "0xd838290e877e0188a4a44700463419ed96c16107",
    BTC_POOL: "0x2f800db0fdb5223b3c3f354886d907a671414a7f",
  },
};

export const RPC_URLS = {
  polygonTestnetRpc: "https://rpc-mumbai.maticvigil.com",
};
