// What each project is about. A project can have several; they show as tags and filter the Projects page.
export const disciplines = [
  { id: 'data', label: 'Data' },
  { id: 'urbanism', label: 'Urbanism' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'landscape', label: 'Landscape' },
] as const;

export type Discipline = (typeof disciplines)[number]['id'];
export const disciplineLabel = (id: string) => disciplines.find((d) => d.id === id)?.label ?? id;
