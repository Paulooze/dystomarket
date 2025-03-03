"use client";
import { formatCurrency } from "@/lib/formatters";
import { FinancialData } from "@prisma/client";
import { JSX } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import {
  ChartContainer,
  ChartLegend,
  ChartTooltip,
  ChartTooltipContent,
} from "./ui/chart";

type Props = {
  data: FinancialData[];
};

const LEGEND_MAP = {
  totalRevenue: "Total Revenue",
  operatingProfit: "Net Profit",
};

export default function ChangeChart({ data }: Props): JSX.Element {
  const formattedData = data.map((d) => ({
    ...d,
    totalRevenue: (d.grossProfit ?? 0) + (d.costOfSales ?? 0),
  }));
  return (
    <ResponsiveContainer width="50%">
      <ChartContainer
        config={{
          history: {
            label: "History",
            color: "var(--color-blue-500)",
          },
        }}
      >
        <BarChart data={formattedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis
            tickFormatter={(tick) =>
              formatCurrency(tick, { maximumFractionDigits: 2 })
            }
            tickLine={false}
            axisLine={false}
          />
          <ChartLegend
            formatter={(value) => {
              return LEGEND_MAP[value as keyof typeof LEGEND_MAP];
            }}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="dashed" />}
          />
          <Bar dataKey="totalRevenue" fill="var(--color-blue-700)" />
          <Bar dataKey="operatingProfit" fill="var(--color-green-700)" />
        </BarChart>
      </ChartContainer>
    </ResponsiveContainer>
  );
}
