"use client";

import type { ToolItem } from "@/lib/tools";
import { resolveCalculatorKind } from "@/lib/calculatorKind";
import { CalculatorImplementation } from "@/components/calculators/CalculatorImplementation";

export function CalculatorRouter({ tool }: { tool: ToolItem }) {
  const kind = resolveCalculatorKind(tool);
  return <CalculatorImplementation kind={kind} tool={tool} />;
}
