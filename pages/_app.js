import "../styles/globals.css";
import { LivepeerConfig } from "@livepeer/react";
import { useCreateAsset } from "@livepeer/react";
import LivePeerClient from "../livepeer";
import saveToIPFS from "../utils/saveToIPFS";

function MyApp({ Component, pageProps }) {
  return (
    <LivepeerConfig client={LivePeerClient}>
      <Component {...pageProps} />
    </LivepeerConfig>
  );
}

export default MyApp;
