"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useAccount } from "wagmi";
import TokenHeader from "./TokenHeader";
import { TokenTabs } from "./TokenTabs";
import { AccountStatus } from "./AccountStatus";

export default function TokenInterface() {
  const account = useAccount();

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <TokenHeader />

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
}
