---
title: City Digital Twin — Catalunya
summary: An interactive model of Catalonia that computes housing, urban form,
  economic, mobility and research indicators for every census section, so places
  can be read and compared at the scale a decision needs.
category: urban-analytics
context: Aretian
role: Urban planner & GIS analyst
skills:
  - Cross-team coordination
  - Public-sector stakeholders
  - Client requirements to product
  - Territorial-scale GIS
  - Large cadastral datasets
  - Mobility data
  - Data quality & validation
draft: false
location: Catalonia, Spain
url: https://cdt.cat
stack:
  - Python (pandas, GeoPandas, Shapely)
  - QGIS
  - PostGIS
  - GDAL/OGR
  - Cadastral data (INSPIRE / GML)
  - OGC WFS/WMS
tags:
  - Digital twins
  - Geospatial
  - Public sector
cover: ./01-landing.jpg
images:
  - src: ./02-what-it-is.jpg
    caption: What CDT is — five themes and the model in numbers
  - src: ./03-the-model.jpg
    caption: The model — five data layers stacked over a 500 × 500 m extract of the Eixample, Barcelona
  - src: ./04-housing-per-parcel.jpg
    caption: Housing per parcel — a parcel's area, land use, rent and price, and its section's housing score against all 5,142 sections
---

## What it is

City Digital Twin is an interactive model of Catalonia built by Aretian Urban Analytics and Design, with support from the Torras Family Foundation and Barcelona Global. For every census section it computes indicators on housing, urban form, economics, mobility and research, so that any place can be read, compared and understood at the scale a decision requires.

## In numbers

- **5,143** census sections, the finest administrative grain in Catalonia
- **100+** indicators per section: morphometrics, INE economics, mobility, housing
- **2.9 million** cadastral parcels, with land use, value and allocation
- **1.9 million** building footprints, with heights and classification

## A layered model

The twin stacks five layers on the same ground:

- **Economic development:** business density, from firm locations
- **Innovation & research:** institutions, linked as a network
- **Mobility & logistics:** the street network, with flows
- **Housing & standard of living:** parcels by cadastral area, rent, price and a housing score
- **Urban design:** building masses with real heights

Each parcel carries its own area and land qualification, while rent, price and score come from its census section and are read against the distribution of all other sections, so every number arrives with its context.

## What I did

- Coordinated the developers, product design and data teams, turning client needs into CDT content and features.
- Guided the development team on how data should be structured, served and used in the platform, always from the end user's point of view.
- Led the design of the data structure behind the twin, for both the urban and the mobility datasets.
- Built and led the parcel-level dataset for the whole of Catalonia, cross-referenced with the Catalan Government's urban planning classification layers.
- Set the data cleaning and validation process so every indicator rests on consistent data.

## Impact

The twin supports public-sector stakeholders across Catalonia, including the Barcelona Metropolitan Area (AMB), INCASÒL and the Generalitat de Catalunya, giving them a shared, parcel-level view of the territory to inform planning and housing decisions.
