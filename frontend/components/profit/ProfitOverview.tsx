"use client";

import {
  CircleDollarSign,
  Wallet,
  TrendingUp,
  Banknote,
} from "lucide-react";

type Props = {
  financial: any;
};

function money(value: number) {
  return `₹${Number(value || 0).toLocaleString("en-IN")}`;
}

export default function ProfitOverview({
  financial,
}: Props) {

  const cards = [
    {
      title: "Expected Revenue",
      value: financial.expected_revenue,
      icon: CircleDollarSign,
      description: "Estimated total revenue",
    },
    {
      title: "Cultivation Cost",
      value: financial.cultivation_cost,
      icon: Wallet,
      description: "Total farming cost",
    },
    {
      title: "Estimated Profit",
      value: financial.estimated_profit,
      icon: TrendingUp,
      description: "Revenue minus cost",
    },
    {
      title: "Profit / Acre",
      value: financial.profit_per_acre,
      icon: Banknote,
      description: "Estimated profit per acre",
    },
  ];

  return (
    <section>

      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-green-300">
          Financial Overview
        </p>

        <h2 className="mt-2 text-3xl font-bold text-white">
          Your Farm Economics
        </h2>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

        {cards.map((card) => {

          const Icon = card.icon;

          return (
            <div
              key={card.title}
              className="rounded-[26px] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-green-400/20"
            >

              <div className="flex items-center justify-between">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.06]">
                  <Icon
                    size={21}
                    className="text-green-400"
                  />
                </div>

              </div>

              <p className="mt-5 text-sm text-white/45">
                {card.title}
              </p>

              <p className="mt-2 text-2xl font-black text-white">
                {money(card.value)}
              </p>

              <p className="mt-2 text-xs text-white/35">
                {card.description}
              </p>

            </div>
          );
        })}

      </div>
    </section>
  );
}