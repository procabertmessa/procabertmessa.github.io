---
title: Catalonia parcel-level real estate dataset
summary: One GeoPackage covering every parcel in Catalonia, enriched with zoning, building use and business activity so developers can screen opportunities parcel by parcel.
context: Aretian
year: '2026'
order: 1
featured: true
tags: [Geospatial, Real estate, Data pipelines]
stack: [Python, GeoPandas, pyogrio, Catastro INSPIRE (CP/BU, GML), MUC zoning, GeoPackage (EPSG:25831)]
---

## What it is

A region-wide dataset that answers a simple question for real estate clients: for any parcel in Catalonia, what is there today, and what could be there?

## What I did

- Built a **five-phase Python pipeline** that produces a single GeoPackage for all of Catalonia.
- Integrated **Catastro INSPIRE parcels and buildings** with the **MUC zoning classification**, building use and business-activity data.
- Flagged business activity on each parcel using **spatial joins with distance thresholds**.
- Shaped the output so developers can compare **current activity against developable activity**, parcel by parcel.
