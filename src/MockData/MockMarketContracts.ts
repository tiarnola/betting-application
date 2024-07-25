interface ContractType {
  name: string;
  param?: string;
}

interface ContractInfo {
  color_primary: string;
  color_secondary: string;
  primary?: boolean;
}

interface MarketContract {
  competitor_id: number;
  contract_type: ContractType;
  created: string;
  display_order: number;
  hidden: boolean;
  id: string;
  info: ContractInfo;
  market_id: string;
  modified: string;
  name: string;
  outcome_timestamp: string;
  reduction_factor: string;
  slug: string;
  state_or_outcome: string;
}

const mockMarketContracts: MarketContract[] = [
  {
    competitor_id: 254245,
    contract_type: { name: "HOME" },
    created: "2022-01-01T00:00:00.000Z",
    display_order: 1,
    hidden: false,
    id: "1001",
    info: { color_primary: "#FF0000", color_secondary: "#00FF00" },
    market_id: "128939",
    modified: "2022-01-01T00:00:00.000Z",
    name: "Man Utd",
    outcome_timestamp: "2022-01-01T00:00:00.000Z",
    reduction_factor: "0.1",
    slug: "man-utd",
    state_or_outcome: "live",
  },
  {
    competitor_id: 0,
    contract_type: { name: "DRAW" },
    created: "2022-01-01T00:00:00.000Z",
    display_order: 2,
    hidden: false,
    id: "1003",
    info: { color_primary: "#808080", color_secondary: "#FFFFFF" },
    market_id: "128939",
    modified: "2022-01-01T00:00:00.000Z",
    name: "Draw",
    outcome_timestamp: "2022-01-01T00:00:00.000Z",
    reduction_factor: "0.3",
    slug: "draw",
    state_or_outcome: "live",
  },
  {
    competitor_id: 4565452,
    contract_type: { name: "AWAY" },
    created: "2022-01-01T00:00:00.000Z",
    display_order: 3,
    hidden: false,
    id: "1002",
    info: { color_primary: "#0000FF", color_secondary: "#FFFF00" },
    market_id: "128939",
    modified: "2022-01-01T00:00:00.000Z",
    name: "Chelsea",
    outcome_timestamp: "2022-01-01T00:00:00.000Z",
    reduction_factor: "0.2",
    slug: "chelsea",
    state_or_outcome: "live",
  },
  {
    competitor_id: 254245,
    contract_type: { name: "HOME" },
    created: "2022-01-01T00:00:00.000Z",
    display_order: 4,
    hidden: false,
    id: "1004",
    info: { color_primary: "#FF0000", color_secondary: "#00FF00" },
    market_id: "130002",
    modified: "2022-01-01T00:00:00.000Z",
    name: "Liverpool",
    outcome_timestamp: "2022-01-01T00:00:00.000Z",
    reduction_factor: "0.1",
    slug: "liverpool",
    state_or_outcome: "live",
  },
  {
    competitor_id: 0,
    contract_type: { name: "DRAW" },
    created: "2022-01-01T00:00:00.000Z",
    display_order: 5,
    hidden: false,
    id: "1006",
    info: { color_primary: "#808080", color_secondary: "#FFFFFF" },
    market_id: "130002",
    modified: "2022-01-01T00:00:00.000Z",
    name: "Draw",
    outcome_timestamp: "2022-01-01T00:00:00.000Z",
    reduction_factor: "0.3",
    slug: "draw",
    state_or_outcome: "live",
  },
  {
    competitor_id: 4565452,
    contract_type: { name: "AWAY" },
    created: "2022-01-01T00:00:00.000Z",
    display_order: 6,
    hidden: false,
    id: "1005",
    info: { color_primary: "#0000FF", color_secondary: "#FFFF00" },
    market_id: "130002",
    modified: "2022-01-01T00:00:00.000Z",
    name: "Arsenal",
    outcome_timestamp: "2022-01-01T00:00:00.000Z",
    reduction_factor: "0.2",
    slug: "arsenal",
    state_or_outcome: "live",
  },
  {
    competitor_id: 254245,
    contract_type: { name: "HOME" },
    created: "2022-01-01T00:00:00.000Z",
    display_order: 7,
    hidden: false,
    id: "1007",
    info: { color_primary: "#FF0000", color_secondary: "#00FF00" },
    market_id: "130005",
    modified: "2022-01-01T00:00:00.000Z",
    name: "Barcelona",
    outcome_timestamp: "2022-01-01T00:00:00.000Z",
    reduction_factor: "0.1",
    slug: "barcelona",
    state_or_outcome: "live",
  },
  {
    competitor_id: 0,
    contract_type: { name: "DRAW" },
    created: "2022-01-01T00:00:00.000Z",
    display_order: 8,
    hidden: false,
    id: "1009",
    info: { color_primary: "#808080", color_secondary: "#FFFFFF" },
    market_id: "130005",
    modified: "2022-01-01T00:00:00.000Z",
    name: "Draw",
    outcome_timestamp: "2022-01-01T00:00:00.000Z",
    reduction_factor: "0.3",
    slug: "draw",
    state_or_outcome: "live",
  },
  {
    competitor_id: 4565452,
    contract_type: { name: "AWAY" },
    created: "2022-01-01T00:00:00.000Z",
    display_order: 9,
    hidden: false,
    id: "1008",
    info: { color_primary: "#0000FF", color_secondary: "#FFFF00" },
    market_id: "130005",
    modified: "2022-01-01T00:00:00.000Z",
    name: "Real Madrid",
    outcome_timestamp: "2022-01-01T00:00:00.000Z",
    reduction_factor: "0.2",
    slug: "real-madrid",
    state_or_outcome: "live",
  },
];

export type { MarketContract };
export { mockMarketContracts };
