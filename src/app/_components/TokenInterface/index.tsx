"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useAccount } from "wagmi";
import TokenHeader from "./TokenHeader";
import { TokenTabs } from "./TokenTabs";
import { AccountStatus } from "./AccountStatus";
import Dogegif from "@/assets/dog-unscreen.gif";
import Image from "next/image";

const TokenInterface = () => {
  const account = useAccount();
  const [showDogs, setShowDogs] = useState(false);

  // Modified TokenHeader to handle dog visibility
  const ModifiedTokenHeader = () => {
    const originalHeader = <TokenHeader />;

    // Clone the original header and inject our handler
    return React.cloneElement(originalHeader, {
      onConnectClick: () => setShowDogs(true),
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 relative">
      {/* Top Left Dog */}
      {showDogs && (
        <Image
          className="absolute top-10 left-10 size-40"
          src={Dogegif.src}
          alt="gif"
        />
      )}

      {/* Top Right Dog */}
      {showDogs && (
        <Image
          className="absolute top-10 right-10 size-40"
          src={Dogegif.src}
          alt="gif"
        />
      )}

      {/* Bottom Left Dog */}
      {showDogs && (
        <Image
          className="absolute bottom-10 left-10 size-40"
          src={Dogegif.src}
          alt="gif"
        />
      )}

      {/* Bottom Right Dog */}
      {showDogs && (
        <img
          className="absolute bottom-10 right-10 size-40"
          src={Dogegif.src}
          alt="gif"
        />
      )}

      <div className="max-w-4xl mx-auto space-y-6">
        <ModifiedTokenHeader />
        {account.status === "connected" ? (
          <TokenTabs />
        ) : (
          <Card>
            <CardContent className="py-8">
              <div className="text-center text-gray-500">
                Please connect your wallet to interact with the token
              </div>
            </CardContent>
          </Card>
        )}
        <AccountStatus />
      </div>
    </div>
  );
};

export default TokenInterface;
