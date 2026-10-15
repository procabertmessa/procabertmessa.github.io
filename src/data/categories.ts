// Project categories, in the order they appear on the Projects page.
export const categories = [
  { id: 'urban-analytics', label: 'Urban analytics & digital twins' },
  { id: 'urban-design', label: 'Urban design & planning' },
  { id: 'architecture', label: 'Architecture' },
] as const;

export const categoryLabel = (id: string) => categories.find((c) => c.id === id)?.label ?? id;
