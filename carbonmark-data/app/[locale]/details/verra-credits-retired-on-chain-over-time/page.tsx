import { t } from "@lingui/macro";
import DetailPage from "components/pages/DetailPage";

export default function VerraCreditsRetiredOnChainOverTimePage() {
  return (
    <DetailPage
      pageTitle={t`On-Chain Verra Credits Retired Over Time`}
      chartTitle={t`On-Chain Verra Credits Retired Over Time`}
      chart={<></>}
      overview={t`Lorem Ipsum`}
    />
  );
}