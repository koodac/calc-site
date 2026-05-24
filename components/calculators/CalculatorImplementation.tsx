"use client";

import type { CalculatorKind } from "@/lib/calculatorKind";
import type { ToolItem } from "@/lib/tools";
import { renderCalculatorBody } from "@/components/calculators/impl/Registry";

export function CalculatorImplementation({
  kind,
  tool,
}: {
  kind: CalculatorKind;
  tool: ToolItem;
}) {
  return <>{renderCalculatorBody(kind, tool)}</>;
}
