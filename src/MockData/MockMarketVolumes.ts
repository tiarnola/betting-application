interface MarketVolume {
    double_stake_volume: number;
    market_id: string;
    volume: number;
}

const MockMarketVolumes: MarketVolume[] = [
    {
        double_stake_volume: 20000,
        market_id: "128939",
        volume: 123534,
    },
    {
        double_stake_volume: 20000,
        market_id: "130000",
        volume: 133534,
    },
    {
        double_stake_volume: 30000,
        market_id: "128940",
        volume: 223355,
    },
    {
        double_stake_volume: 16000,
        market_id: "128941",
        volume: 334466,
    },
    {
        double_stake_volume: 16000,
        market_id: "130001",
        volume: 445500,
    },
    {
        double_stake_volume: 22000,
        market_id: "130002",
        volume: 556677,
    },
    {
        double_stake_volume: 12000,
        market_id: "130003",
        volume: 667788,
    },
    {
        double_stake_volume: 14000,
        market_id: "130004",
        volume: 778899,
    },
    {
        double_stake_volume: 18000,
        market_id: "130005",
        volume: 889911,
    },
    {
        double_stake_volume: 16000,
        market_id: "128950",
        volume: 50000,
    },
    {
        double_stake_volume: 20000,
        market_id: "130006",
        volume: 911123,
    },
    {
        double_stake_volume: 30000,
        market_id: "130007",
        volume: 112233,
    },
    {
        double_stake_volume: 16000,
        market_id: "130008",
        volume: 50000,
    },
    {
        double_stake_volume: 20000,
        market_id: "130009",
        volume: 911123,
    },
    {
        double_stake_volume: 30000,
        market_id: "130010",
        volume: 112233,
    },
    {
        double_stake_volume: 10000,
        market_id: "128942",
        volume: 45000,
    },
    {
        double_stake_volume: 6000,
        market_id: "128943",
        volume: 27000,
    },
    {
        double_stake_volume: 14000,
        market_id: "128944",
        volume: 14000,
    },
    {
        double_stake_volume: 8000,
        market_id: "128945",
        volume: 8000,
    },
    {
        double_stake_volume: 10000,
        market_id: "128946",
        volume: 10000,
    },
    {
        double_stake_volume: 12000,
        market_id: "128947",
        volume: 12000,
    },
    {
        double_stake_volume: 14000,
        market_id: "130014",
        volume: 14000,
    },
    {
        double_stake_volume: 8000,
        market_id: "130015",
        volume: 8000,
    },
    {
        double_stake_volume: 6000,
        market_id: "130016",
        volume: 6000,
    },
    {
        double_stake_volume: 7000,
        market_id: "130017",
        volume: 7000,
    },
    {
        double_stake_volume: 12000,
        market_id: "128960",
        volume: 12000,
    },
    {
        double_stake_volume: 7000,
        market_id: "128961",
        volume: 7000,
    },
    {
        double_stake_volume: 10000,
        market_id: "128962",
        volume: 10000,
    },
    {
        double_stake_volume: 11000,
        market_id: "128963",
        volume: 11000,
    },
];

export type { MarketVolume };
export { MockMarketVolumes };
