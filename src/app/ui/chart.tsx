/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import * as React from "react";
import * as RechartsPrimitive from "recharts";

import { cn } from "./utils";

// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = { light: "", dark: ".dark" } as const;
type ThemeName = keyof typeof THEMES;

/* -----------------------------
   Config types
------------------------------*/

export type ChartConfigItem = {
  label?: React.ReactNode;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement> | any>;
} & (
  | { color: string; theme?: never }
  | { color?: never; theme: Record<ThemeName, string> }
  | { color?: never; theme?: never }
);

export type ChartConfig = Record<string, ChartConfigItem>;

/* -----------------------------
   Context
------------------------------*/

type ChartContextProps = {
  config: ChartConfig;
};

const ChartContext = React.createContext<ChartContextProps | undefined>(
  undefined
);

function useChart() {
  const context = React.useContext(ChartContext);
  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />");
  }
  return context;
}

/* -----------------------------
   Small runtime helpers
------------------------------*/

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

/* -----------------------------
   Types for Recharts payloads
   (small, conservative shapes)
------------------------------*/

type TooltipPayloadItem = {
  name?: string;
  dataKey?: string | number;
  value?: unknown;
  color?: string;
  payload?: Record<string, unknown>;
  // `fill` sometimes appears on payload
  fill?: string;
  [k: string]: unknown;
};

type LegendPayloadItem = {
  value?: unknown;
  dataKey?: string | number;
  color?: string;
  payload?: Record<string, unknown>;
  [k: string]: unknown;
};

/* -----------------------------
   ChartContainer
------------------------------*/

function ChartContainer({
  id,
  className,
  children,
  config,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  config: ChartConfig;
  children: React.ReactNode;
}) {
  const uniqueId = React.useId();
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-slot="chart"
        data-chart={chartId}
        className={cn(
          "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
          className
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>
          {children}
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
}

/* -----------------------------
   ChartStyle (CSS var generator)
------------------------------*/

const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(
    ([, cfg]) =>
      Boolean((cfg as ChartConfigItem).theme) ||
      Boolean((cfg as ChartConfigItem).color)
  );

  if (colorConfig.length === 0) return null;

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, itemConfig]) => {
    const cfg = itemConfig as ChartConfigItem;
    const color = cfg.theme?.[theme as ThemeName] ?? cfg.color;
    return color ? `  --color-${key}: ${color};` : null;
  })
  .filter(Boolean)
  .join("\n")}
}
`
          )
          .join("\n"),
      }}
    />
  );
};

/* -----------------------------
   Tooltip
------------------------------*/

const ChartTooltip = RechartsPrimitive.Tooltip;

function ChartTooltipContent({
  active,
  payload,
  className,
  indicator = "dot",
  hideLabel = false,
  hideIndicator = false,
  label,
  labelFormatter,
  labelClassName,
  formatter,
  color,
  nameKey,
  labelKey,
}: // Use conservative typing for DOM props and the Recharts tooltip shape:
React.HTMLAttributes<HTMLDivElement> & {
  // `active` and `payload` come from Recharts' TooltipProps; we type them conservatively:
  active?: boolean;
  payload?: TooltipPayloadItem[] | undefined;
  label?: string | number | undefined;
  labelFormatter?:
    | ((label: any, payload?: any[]) => React.ReactNode)
    | undefined;
  formatter?:
    | ((
        value: any,
        name?: string,
        props?: any,
        index?: number,
        payload?: Record<string, unknown>
      ) => React.ReactNode)
    | undefined;
  color?: string;
  nameKey?: string;
  labelKey?: string;
  hideLabel?: boolean;
  hideIndicator?: boolean;
  indicator?: "line" | "dot" | "dashed";
  labelClassName?: string;
}) {
  const { config } = useChart();

  const tooltipLabel = React.useMemo(() => {
    if (hideLabel || !payload?.length) return null;

    const [item] = payload;
    const key = `${labelKey ?? item?.dataKey ?? item?.name ?? "value"}`;
    const itemConfig = getPayloadConfigFromPayload(config, item, key);

    const value =
      !labelKey && typeof label === "string"
        ? config[label as keyof ChartConfig]?.label ?? label
        : itemConfig?.label;

    if (labelFormatter) {
      return (
        <div className={cn("font-medium", labelClassName)}>
          {labelFormatter(value, payload)}
        </div>
      );
    }

    if (!value) return null;

    return <div className={cn("font-medium", labelClassName)}>{value}</div>;
  }, [
    label,
    labelFormatter,
    payload,
    hideLabel,
    labelClassName,
    config,
    labelKey,
  ]);

  if (!active || !payload?.length) return null;

  const nestLabel = payload.length === 1 && indicator !== "dot";

  return (
    <div
      className={cn(
        "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
        className
      )}
    >
      {!nestLabel ? tooltipLabel : null}
      <div className="grid gap-1.5">
        {payload.map((item: TooltipPayloadItem, index: number) => {
          const key = `${
            nameKey ??
            (item.name as string | undefined) ??
            item.dataKey ??
            "value"
          }`;
          const itemConfig = getPayloadConfigFromPayload(config, item, key);
          const indicatorColor =
            color ??
            (isObject(item.payload) ? (item.payload as any).fill : undefined) ??
            item.color ??
            undefined;

          return (
            <div
              key={`${String(item.dataKey ?? item.name ?? index)}`}
              className={cn(
                "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                indicator === "dot" && "items-center"
              )}
            >
              {formatter && item?.value !== undefined && item.name ? (
                // keep pass-through behavior for custom formatter
                formatter(
                  item.value,
                  item.name as string,
                  item,
                  index,
                  item.payload
                )
              ) : (
                <>
                  {itemConfig?.icon ? (
                    <itemConfig.icon />
                  ) : (
                    !hideIndicator && (
                      <div
                        className={cn(
                          "shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]",
                          {
                            "h-2.5 w-2.5": indicator === "dot",
                            "w-1": indicator === "line",
                            "w-0 border-[1.5px] border-dashed bg-transparent":
                              indicator === "dashed",
                            "my-0.5": nestLabel && indicator === "dashed",
                          }
                        )}
                        style={
                          {
                            "--color-bg": indicatorColor,
                            "--color-border": indicatorColor,
                          } as React.CSSProperties
                        }
                      />
                    )
                  )}
                  <div
                    className={cn(
                      "flex flex-1 justify-between leading-none",
                      nestLabel ? "items-end" : "items-center"
                    )}
                  >
                    <div className="grid gap-1.5">
                      {nestLabel ? tooltipLabel : null}
                      <span className="text-muted-foreground">
                        {itemConfig?.label ?? item.name}
                      </span>
                    </div>
                    {item.value !== undefined && item.value !== null && (
                      // show numeric/text values using toLocaleString when available
                      <span className="font-mono font-medium tabular-nums text-foreground">
                        {typeof item.value === "number"
                          ? (item.value as number).toLocaleString()
                          : String(item.value)}
                      </span>
                    )}
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* -----------------------------
   Legend
------------------------------*/

const ChartLegend = RechartsPrimitive.Legend;

function ChartLegendContent({
  className,
  hideIcon = false,
  payload,
  verticalAlign = "bottom",
  nameKey,
}: React.HTMLAttributes<HTMLDivElement> & {
  hideIcon?: boolean;
  payload?: LegendPayloadItem[] | undefined;
  verticalAlign?: RechartsPrimitive.LegendProps["verticalAlign"];
  nameKey?: string;
}) {
  const { config } = useChart();

  if (!payload || payload.length === 0) return null;

  return (
    <div
      className={cn(
        "flex items-center justify-center gap-4",
        verticalAlign === "top" ? "pb-3" : "pt-3",
        className
      )}
    >
      {payload.map((item: LegendPayloadItem, idx: number) => {
        const key = `${nameKey ?? item.dataKey ?? "value"}`;
        const itemConfig = getPayloadConfigFromPayload(config, item, key);

        return (
          <div
            key={`${String(item.value ?? key)}-${idx}`}
            className={cn(
              "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"
            )}
          >
            {itemConfig?.icon && !hideIcon ? (
              <itemConfig.icon />
            ) : (
              <div
                className="h-2 w-2 shrink-0 rounded-[2px]"
                style={{
                  backgroundColor: item.color as string | undefined,
                }}
              />
            )}
            {itemConfig?.label}
          </div>
        );
      })}
    </div>
  );
}

/* -----------------------------
   getPayloadConfigFromPayload
   (safe access)
------------------------------*/

function getPayloadConfigFromPayload(
  config: ChartConfig,
  payload: unknown,
  key: string
): ChartConfigItem | undefined {
  if (!isObject(payload)) return undefined;

  // prefer direct values on the root payload, then payload.payload
  const rootValue = (payload as Record<string, unknown>)[key];
  const nested =
    "payload" in (payload as Record<string, unknown>) &&
    isObject((payload as Record<string, unknown>).payload)
      ? ((payload as Record<string, unknown>).payload as Record<
          string,
          unknown
        >)
      : undefined;

  const nestedValue = nested ? nested[key] : undefined;

  let configLabelKey = key;

  if (typeof rootValue === "string") {
    configLabelKey = rootValue;
  } else if (typeof nestedValue === "string") {
    configLabelKey = nestedValue;
  }

  return (configLabelKey in config ? config[configLabelKey] : config[key]) as
    | ChartConfigItem
    | undefined;
}

/* -----------------------------
   exports
------------------------------*/

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
};
