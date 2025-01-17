import DailyCarbonSupplyByProtocolCard from "components/cards/offVsOnChain/DailyCarbonSupplyByProtocolCard";
import DailyVerraCreditsCard from "components/cards/offVsOnChain/DailyVerraCreditsCard";
import VerraCreditsByBridgeAndVintageCard from "components/cards/offVsOnChain/VerraCreditsByBridgeAndVintageCard";
import VerraCreditsDistributionOfProjectsCard from "components/cards/offVsOnChain/VerraCreditsDistributionOfProjectsCard";
import VerraCreditsOriginCard from "components/cards/offVsOnChain/VerraCreditsOriginCard";

import { Status } from "lib/charts/types";
import layout from "theme/layout.module.scss";

/**
 * A UI layout component to position Off vs On chain page content
 */
export default function OffVsOnChainTab(props: { status: Status }) {
  return (
    <>
      <div className={layout.cardRow}>
        <DailyVerraCreditsCard {...props} className={layout.zIndexFive} />
        <DailyCarbonSupplyByProtocolCard
          {...props}
          className={layout.zIndexFive}
        />
      </div>
      <div className={layout.cardRow}>
        <VerraCreditsByBridgeAndVintageCard
          {...props}
          className={layout.zIndexFour}
        />
        <VerraCreditsDistributionOfProjectsCard
          {...props}
          className={layout.xIndexThree}
        />
      </div>
      <div className={layout.cardRow}>
        <VerraCreditsOriginCard {...props} className={layout.zIndexTwo} />
      </div>
    </>
  );
}
