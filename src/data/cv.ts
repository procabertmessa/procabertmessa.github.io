// Single source for CV facts used across the site.
// Taken from the Europe CV (Oct 2026). Edit here and every page updates.

export const person = {
  name: 'Pablo Rocabert Messa',
  shortName: 'Pablo Rocabert',
  headline: 'Architect & Urban Design Manager',
  focus: ['Geospatial analytics', 'City digital twins', 'Urban planning', 'Architecture'],
  location: 'Barcelona, Spain',
  email: 'procabert.au@gmail.com',
  linkedin: 'https://www.linkedin.com/in/pablorocabertm',
  status: 'EU citizen · Eligible to work across the EU/EEA · Open to relocation and hybrid roles',
  intro:
    'Architect and urban designer using data for better design decisions. Data shows what a place needs, and design turns it into a place people love. I work where the two meet, from buildings to cities to territories.',
  profile: [
    'I am an architect and urban designer using data for better design decisions. Experience across architecture, real estate investment analysis and urban analytics, most recently coordinating city digital twin projects at Aretian.',
    'My work sits between the drawing board and the dataset. I turn cadastral, zoning, socio-economic and climate data into parcel-level evidence and design proposals for city councils, public administrations and real estate clients.',
    'Day to day that means Python and GIS data pipelines, statistical modelling, LLM-assisted data classification and computational design, backed by a Master’s in Data Analytics & AI.',
  ],
  cv: {
    en: '/cv/Pablo_Rocabert_CV_EN.pdf',
    es: '/cv/Pablo_Rocabert_CV_ES.pdf',
  },
};

export const stats = [
  { value: '8', label: 'years across architecture, real estate and urban analytics' },
  { value: '2+', label: 'years building city digital twins' },
  { value: '3', label: 'countries of project work: Spain, South Africa, USA' },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: 'Geospatial & data',
    items: ['Python (pandas, GeoPandas, Shapely, NumPy, scikit-learn, Rasterio)', 'QGIS', 'ArcGIS Pro', 'PostGIS', 'GDAL/OGR', 'GeoPackage', 'INSPIRE / GML', 'OGC WFS/WMS', 'OpenStreetMap / Overpass API', 'Folium'],
  },
  {
    group: 'Analytics & AI',
    items: ['ETL data pipelines', 'Data cleaning & QA', 'Regression and hedonic price modelling', 'KPI frameworks', 'LLM-assisted classification (Anthropic API)', 'Data visualisation (maps, Sankey diagrams)'],
  },
  {
    group: 'Urban planning',
    items: ['Urban & territorial planning', 'Land use & zoning analysis', 'Cadastral analysis', 'Housing', 'Mobility & accessibility', 'Climate resilience (flood, heat, SUDS)', 'Digital twins'],
  },
  {
    group: 'Design & delivery',
    items: ['Rhino', 'Grasshopper', 'AutoCAD', 'Revit', 'SketchUp', '3ds Max', 'V-Ray', 'Unity', 'Excel investment models', 'Project & team coordination', 'Stakeholder reports and presentations'],
  },
];

export type Job = {
  org: string;
  location: string;
  about?: string;
  roles: { title: string; dates: string }[];
  bullets: string[];
};

export const experience: Job[] = [
  {
    org: 'Aretian Urban Analytics and Design',
    location: 'Barcelona, Spain',
    about: 'Urban analytics and city-science consultancy (Barcelona · Cambridge, MA) building city digital twins for public- and private-sector clients.',
    roles: [
      { title: 'Senior Urban Designer & Data Scientist', dates: 'Aug 2025 – Present' },
      { title: 'Urban Designer & Data Scientist', dates: 'Aug 2024 – Jul 2025' },
    ],
    bullets: [
      'Build Python and QGIS data pipelines (extraction, cleaning, spatial joins, QA) to analyse housing, land use, mobility and economic activity at parcel and metropolitan scale.',
      'Contribute to the City Digital Twin of the Barcelona Metropolitan Region, linking each parcel to what can be built and how much, to identify development and transformation opportunities.',
      'Lead analytical workstreams end to end, from data sourcing and modelling to client-ready maps, reports and presentations for city councils, public bodies and private clients in Spain and South Africa.',
      'Develop urban design proposals in Rhino/Grasshopper grounded in territorial analysis, and coordinate architecture and data teams on scope, timelines and deliverables.',
      'Promoted to Senior in August 2025, one year after joining.',
    ],
  },
  {
    org: 'Turull Sorensen Arquitectura',
    location: 'Barcelona, Spain',
    roles: [{ title: 'Architect', dates: 'Mar 2022 – Jul 2024' }],
    bullets: [
      'Delivered basic and construction-stage design projects for residential and commercial refurbishments and new builds: design definition, construction details and drawings.',
      'Reviewed zoning and building regulations and wrote technical reports defining project conditions and compliance.',
      'Coordinated technical documentation with public authorities, developers, consultants and contractors through permitting and construction.',
    ],
  },
  {
    org: 'Busquets Gálvez',
    location: 'Barcelona, Spain',
    roles: [{ title: 'Real Estate Analyst', dates: 'Oct 2018 – Mar 2022' }],
    bullets: [
      'Built Excel investment models (costs, revenues, returns) and analysed planning and cadastral conditions to support acquisition and development decisions.',
      'Valued a hotel and a residential building in Porto (Portugal) and supported office-market analysis in Barcelona’s 22@ innovation district.',
    ],
  },
  {
    org: 'Jorge Vidal Studio',
    location: 'Barcelona, Spain',
    roles: [{ title: 'Architecture Intern', dates: 'May 2018 – Oct 2018' }],
    bullets: ['Supported design and documentation with 3D models, visualisations and parametric design studies.'],
  },
];

export const education = [
  { title: 'Master’s in Data Analytics & AI', school: 'Nuclio Digital School, Barcelona', dates: 'Nov 2025 – May 2026', note: 'Python, data analysis, artificial intelligence' },
  { title: 'Master’s in Architecture and Urbanism', school: 'La Salle – Universitat Ramon Llull, Barcelona', dates: '2023 – 2024' },
  { title: 'Bachelor’s Degree in Architecture', school: 'Universitat Politècnica de Catalunya (UPC), Barcelona', dates: '2014 – 2023' },
];

export const languages = [
  { name: 'Spanish', code: 'ES', level: 'Native' },
  { name: 'Catalan', code: 'CA', level: 'Native' },
  { name: 'English', code: 'EN', level: 'Professional working proficiency' },
  { name: 'French', code: 'FR', level: 'Basic' },
];
