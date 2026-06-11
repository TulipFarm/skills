---
name: forecast
version: 1.0.0
description: Build a forward-looking forecast from historical data by modeling trend, seasonality, and growth assumptions — returning period-by-period projections with confidence ranges and clearly stated assumptions so stakeholders can stress-test the numbers.
---

# Forecasting

A forecast is a quantified view of the future based on what has happened and what
is expected to change. Good forecasts are explicit about their assumptions —
the numbers are only as trustworthy as the logic behind them.

## When to use

Use this skill to project revenue, costs, headcount, traffic, usage, or any
metric that has historical data and a planning horizon. Common triggers: annual
planning, investor updates, capacity planning, pipeline forecasting, and
resource allocation decisions.

## How to forecast

1. **Gather and validate historical data.** At minimum you need the past 12 months;
   24+ months is better for seasonality. Validate the data before using it — see
   validate-data. Note any anomalies (COVID dip, one-time spikes) that should be
   excluded from trend estimation.

2. **Choose the right model for the data.** Match the method to the data's
   characteristics:
   - **Simple trend line** — steady historical growth, no seasonality.
   - **Moving average or exponential smoothing** — stable trend, low-noise
     short-range forecast.
   - **Multiplicative seasonal decomposition** — clear recurring seasonal patterns.
   - **Driver-based model** — when the metric is downstream of a controllable
     input (e.g., revenue = leads × conversion × ACV). Prefer this when drivers
     are better understood than the historical trend.
   Document which model you chose and why.

3. **Estimate trend.** Fit the trend to the non-anomalous historical period. State
   the growth rate per period (%, absolute, or CAGR) and where it comes from.
   If the historical trend cannot continue (market saturation, known headwinds),
   apply a judgment adjustment and say so.

4. **Account for seasonality.** If there is a seasonal pattern, compute seasonal
   indices from at least two prior years and apply them to each projected period.
   State the index for each period.

5. **Apply growth assumptions.** Layer in plan-period assumptions: pricing changes,
   new products, headcount additions, pipeline coverage. Each assumption must be
   named and quantified separately.

6. **Build the base case and scenarios.** Produce three scenarios:
   - **Base case:** most likely path given current trajectory and assumptions.
   - **Upside:** realistic optimistic case (name what has to be true).
   - **Downside:** realistic pessimistic case or identified risk scenario.
   Confidence ranges (e.g., P10/P50/P90) are preferred over point estimates alone.

7. **State the key risks.** Name the two or three assumptions that, if wrong, would
   most change the forecast. Quantify the sensitivity where possible.

## Output format

```
Forecast: <metric / entity>
Period: <start> → <end> | Prepared: <date>
Model: <method used>

## Assumptions
- Trend: <growth rate and basis>
- Seasonality: <yes/no — index source>
- <Driver or plan assumption 1>: <value and rationale>
- ...

## Projections

| Period | Base case | Upside | Downside |
|--------|-----------|--------|----------|
| <Q1>   | <value>   | <+X%>  | <-X%>    |
| ...    | ...       | ...    | ...      |

Full-year total: Base <X> | Upside <X> | Downside <X>

## Key risks and sensitivities
1. <Assumption>: if wrong by X%, forecast changes by Y%
2. ...

## What would invalidate this forecast
- <leading indicator or tripwire to watch>
```
