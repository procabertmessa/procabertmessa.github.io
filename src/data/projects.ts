// Project order and home-page selection. Edit this file to reorder projects.
// Each name is a folder in src/content/projects/.

// Order on the Projects page (within each category). Move a line up or down to reorder.
// Projects not listed here still appear, after the listed ones.
export const projectOrder = [
  // Pablo's priority list (2026-10-20)
  'city-digital-twin',
  'sant-boi-urban-development',
  'apartment-muntaner',
  'culinary-center',
  'social-housing',
  'winery',
  // Others, still being prepared
  'maap-lab',
  'civic-facility',
  'catalonia-parcel-dataset',
  'flood-risk-climate-resilience',
  'hedonic-housing-model',
  'western-cape-innovation',
  'harvard-mit-innovation-pipeline',
  'eu-urban-initiative-bid',
];

// Shown on the home page, in this order. Drafts are skipped automatically.
export const featuredProjects = [
  'city-digital-twin',
  'culinary-center',
  'social-housing',
  'winery',
  // Fallbacks while the ones above are still drafts; the home shows the first 4 published.
  'catalonia-parcel-dataset',
  'flood-risk-climate-resilience',
  'western-cape-innovation',
];
