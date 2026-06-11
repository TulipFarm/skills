---
name: cash-flow
version: 1.0.0
description: Track cash in versus out and build a short rolling cash-flow forecast, returning the current cash position, a forward forecast by period, and flagged risks like runway, shortfalls, and timing gaps.
---

# Cash Flow

Profit is an opinion; cash is a fact. Track what actually lands and leaves the bank, then
project it forward far enough to see trouble before it arrives.

## When to use

Use this skill when asked to track cash in and out, project a runway, build a short
rolling forecast, or answer "will we make payroll / cover that bill". This is the
forward-looking liquidity view — distinct from the historical cash-flow statement and
from day-to-day bookkeeping.

## How to forecast

1. **Anchor on today's real cash.** Start from the current bank balance across all
   accounts, net of anything already spent but not yet cleared. Guesses here poison the
   whole forecast.
2. **Lay out a rolling timeline by week or month.** Thirteen weeks is the standard
   horizon for spotting a squeeze; pick the granularity that matches how fast cash moves
   in the business.
3. **List inflows by expected timing, not invoice date.** Receivables land when customers
   actually pay — apply realistic collection lag, not the due date. Separate committed
   cash from hoped-for cash.
4. **List outflows the same way.** Payroll, rent, loan payments, taxes, and payables on
   their real due dates. Don't forget periodic hits (quarterly tax, annual renewals) that
   don't show up every month.
5. **Roll the balance forward and find the low points.** Each period's closing cash is the
   next period's opening cash. The lowest projected balance is what matters, not the
   ending one.

## Flagging risk

- **Runway:** if cash trends down, state how many weeks or months until it hits zero at
  the current burn.
- **Shortfall:** call out any period where projected cash goes negative, with the amount
  and date.
- **Timing gap:** flag when a large payable is due before the receivables that would cover
  it — the classic profitable-business cash crunch.
- State your collection and payment assumptions plainly; a forecast is only as honest as
  its assumptions. This is planning guidance, not professional financial advice.
