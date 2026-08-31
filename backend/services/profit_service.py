from typing import Any, Dict, List, Optional


def _to_float(value: Any, default: float = 0.0) -> float:
    """
    Safely convert API values such as strings like '2450'
    into numbers.
    """
    try:
        if value is None:
            return default

        if isinstance(value, str):
            value = value.replace(",", "").strip()

        return float(value)

    except (ValueError, TypeError):
        return default


def calculate_profit(
    market_records: List[Dict[str, Any]],
    area_acres: float,
    yield_per_acre: float,
    cultivation_cost: float,
) -> Optional[Dict[str, Any]]:

    if not market_records:
        return None

    area_acres = _to_float(area_acres)
    yield_per_acre = _to_float(yield_per_acre)
    cultivation_cost = _to_float(cultivation_cost)

    if area_acres <= 0:
        raise ValueError("Area must be greater than 0.")

    if yield_per_acre <= 0:
        raise ValueError("Yield must be greater than 0.")

    if cultivation_cost < 0:
        raise ValueError("Cultivation cost cannot be negative.")

    # ---------------------------------------------------------
    # Convert market prices to numbers
    # ---------------------------------------------------------

    markets = []

    for record in market_records:

        modal_price = _to_float(
            record.get("modal_price")
        )

        min_price = _to_float(
            record.get("min_price")
        )

        max_price = _to_float(
            record.get("max_price")
        )

        if modal_price <= 0:
            continue

        markets.append(
            {
                "commodity": record.get(
                    "commodity",
                    ""
                ),

                "market": record.get(
                    "market",
                    ""
                ),

                "district": record.get(
                    "district",
                    ""
                ),

                "state": record.get(
                    "state",
                    ""
                ),

                "arrival_date": record.get(
                    "arrival_date",
                    ""
                ),

                "min_price": min_price,

                "modal_price": modal_price,

                "max_price": max_price,
            }
        )

    if not markets:
        return None

    # ---------------------------------------------------------
    # Use latest/first available modal price
    # ---------------------------------------------------------

    primary_market = markets[0]

    live_modal_price = primary_market["modal_price"]

    # ---------------------------------------------------------
    # Farm calculations
    # ---------------------------------------------------------

    total_yield = area_acres * yield_per_acre

    expected_revenue = total_yield * live_modal_price

    estimated_profit = expected_revenue - cultivation_cost

    profit_per_acre = estimated_profit / area_acres

    # ---------------------------------------------------------
    # Revenue / Cost / Profit chart data
    # ---------------------------------------------------------

    financial_breakdown = [
        {
            "name": "Revenue",
            "value": round(expected_revenue, 2),
        },
        {
            "name": "Cultivation Cost",
            "value": round(cultivation_cost, 2),
        },
        {
            "name": "Profit",
            "value": round(estimated_profit, 2),
        },
    ]

    # ---------------------------------------------------------
    # Market comparison chart
    # ---------------------------------------------------------

    market_comparison = []

    for market in markets:

        market_comparison.append(
            {
                "market": market["market"],
                "min_price": market["min_price"],
                "modal_price": market["modal_price"],
                "max_price": market["max_price"],
            }
        )

    # ---------------------------------------------------------
    # Price range
    # ---------------------------------------------------------

    minimum_price = min(
        market["min_price"]
        for market in markets
    )

    maximum_price = max(
        market["max_price"]
        for market in markets
    )

    return {
        "live_market": {
            "commodity": primary_market["commodity"],
            "market": primary_market["market"],
            "district": primary_market["district"],
            "state": primary_market["state"],
            "arrival_date": primary_market["arrival_date"],
            "min_price": primary_market["min_price"],
            "modal_price": primary_market["modal_price"],
            "max_price": primary_market["max_price"],
            "unit": "Quintal",
        },

        "farm": {
            "area_acres": area_acres,
            "yield_per_acre": yield_per_acre,
            "total_yield": round(total_yield, 2),
        },

        "financial": {
            "market_price": live_modal_price,
            "expected_revenue": round(
                expected_revenue,
                2
            ),
            "cultivation_cost": round(
                cultivation_cost,
                2
            ),
            "estimated_profit": round(
                estimated_profit,
                2
            ),
            "profit_per_acre": round(
                profit_per_acre,
                2
            ),
        },

        "price_range": {
            "minimum": round(
                minimum_price,
                2
            ),
            "maximum": round(
                maximum_price,
                2
            ),
        },

        "financial_breakdown": financial_breakdown,

        "market_comparison": market_comparison,

        "markets_found": len(markets),
    }