import { createReactClient } from "@livepeer/react";
import { studioProvider } from "livepeer/providers/studio";

const LivePeerClient = createReactClient({
  provider: studioProvider({ apiKey: "001e3d83-f605-451d-82c0-a51c3fe2018e" }),
});

export default LivePeerClient;
