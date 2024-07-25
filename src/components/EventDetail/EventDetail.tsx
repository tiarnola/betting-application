import "./EventDetail.css";
import { useState } from "react";
import { Event } from "../../MockData/MockEvents";
import { Market } from "../../MockData/MockMarkets";
import { MarketContract } from "../../MockData/MockMarketContracts";
import { MarketVolume } from "../../MockData/MockMarketVolumes";
import downArrow from "../../assets/down-arrow-svgrepo-com.svg";
import upArrow from "../../assets/up-arrow-svgrepo-com.svg";

interface EventDetailProps {
  event: Event;
  markets: Market[];
  findMarketVolumesByMarketId: (marketId: string) => MarketVolume | undefined;
  findMarketContractsByMarketId: (marketId: string) => MarketContract[];
}

const EventDetail = ({
  event,
  markets,
  findMarketVolumesByMarketId,
  findMarketContractsByMarketId,
}: EventDetailProps) => {
  const [expandedMarketId, setExpandedMarketId] = useState<string | null>(null);

  const totalVolume = markets.reduce((total, market) => {
    const marketVolume = findMarketVolumesByMarketId(market.id)?.volume || 0;
    return total + marketVolume;
  }, 0);

  const toggleContracts = (marketId: string) => {
    if (expandedMarketId === marketId) {
      setExpandedMarketId(null);
    } else {
      setExpandedMarketId(marketId);
    }
  };

  const isExpanded = (marketId: string) => expandedMarketId === marketId;

  return (
    <div className="event-page-content">
      <div className="event-info-block">
        <div className="event-info-content">
          <div className="event-block">
            <div className="event-title">
              <p>{event.name}</p>
              <p>
                {new Date(event.start_datetime).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                })}
              </p>
            </div>

            <div className="prices-section">
              <p>{markets.length} Markets Available</p>
              <p className="traded">
                Traded: <span className="volume-value">£{totalVolume}</span>
              </p>
            </div>
          </div>
          <div className="markets-list">
            {markets.map((market) => (
              <div
                key={market.id}
                className="market-tile"
                onClick={() => toggleContracts(market.id)}
              >
                <div className="market-top-section">
                  <p className="market-main-info">{market.name}</p>
                  <p className="arrow">
                    {isExpanded(market.id) ? (
                      <img src={upArrow} className="arrow" alt="up-arrow" />
                    ) : (
                      <img src={downArrow} className="arrow" alt="down-arrow" />
                    )}
                  </p>
                </div>
                <div>
                  {findMarketVolumesByMarketId(market.id) && (
                    <p className="market-traded">
                      Traded:
                      <span className="volume-value">
                        £{findMarketVolumesByMarketId(market.id)!.volume}
                      </span>
                    </p>
                  )}
                </div>
                {isExpanded(market.id) && (
                  <div className="contracts-section">
                    {findMarketContractsByMarketId(market.id).length > 0 ? (
                      findMarketContractsByMarketId(market.id).map(
                        (contract) => (
                          <div className="contracts" key={contract.id}>
                            <div>{contract.name}</div>
                            <div className="contract-price">6.5</div>
                          </div>
                        )
                      )
                    ) : (
                      <div className="contracts">
                        No contracts currently available for market
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
