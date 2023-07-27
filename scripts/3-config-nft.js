import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
  try {
    const editionDrop = await sdk.getContract(process.env.NFT_CONTRACT_ADDRESS, "edition-drop");
    await editionDrop.createBatch([
      {
        name: "Gold NFT 1",
        description: "GOLD NFT to access DAO`",
        image: readFileSync("scripts/assets/gold.jpeg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();