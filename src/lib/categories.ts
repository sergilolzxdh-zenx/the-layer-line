export type CategorySlug = 'print-quality' | 'calibration' | 'materials';

export const CATEGORIES: Record<
  CategorySlug,
  { title: string; short: string; description: string }
> = {
  'print-quality': {
    title: 'Print Quality Troubleshooting',
    short: 'Print Quality',
    description:
      'Diagnose and fix the defects that show up on the part itself — stringing, warping, visible layer lines, weak first layers, and extrusion problems.',
  },
  calibration: {
    title: '3D Printer Calibration',
    short: 'Calibration',
    description:
      'The measurements and tuning passes that make everything else work — steps per mm, flow rate, retraction, and a level bed.',
  },
  materials: {
    title: 'Filament & Materials',
    short: 'Materials',
    description:
      'What PLA, PETG, ABS and ASA actually do differently at the nozzle, and how to choose and set up for each one.',
  },
};

export const CATEGORY_ORDER: CategorySlug[] = ['print-quality', 'calibration', 'materials'];
