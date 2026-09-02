export type GlossaryCategory = 'Hardware' | 'Slicer' | 'Calibration' | 'Defect';

export interface GlossaryTerm {
  term: string;
  def: string;
  link: string;
  category: GlossaryCategory;
}

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    term: 'Bowden extruder',
    def: "An extruder layout where the drive motor is mounted away from the hot end, pushing filament through a length of PTFE tube. Needs more retraction distance than direct drive because of the extra compressible length.",
    link: '/calibration/retraction-tuning/',
    category: 'Hardware',
  },
  {
    term: 'Brim',
    def: 'A single-layer flat border printed around the base of a part, connected to it, that increases surface area anchoring the print to the bed without adding a full raft.',
    link: '/print-quality/warping/',
    category: 'Slicer',
  },
  {
    term: 'Direct drive extruder',
    def: 'An extruder layout where the drive motor sits right on top of the hot end. Needs less retraction distance than Bowden and generally handles flexible filaments like TPU better.',
    link: '/calibration/retraction-tuning/',
    category: 'Hardware',
  },
  {
    term: 'Draft shield',
    def: 'A thin printed wall around a model, separate from it, that blocks direct airflow to reduce warping without disabling cooling everywhere else.',
    link: '/print-quality/warping/',
    category: 'Slicer',
  },
  {
    term: 'E-steps',
    def: 'The firmware value that converts a commanded filament move (in millimeters) into stepper motor steps. Wrong E-steps scales every extrusion command by the same error.',
    link: '/calibration/e-steps/',
    category: 'Calibration',
  },
  {
    term: 'Flow rate (extrusion multiplier)',
    def: "A percentage that scales commanded extrusion volume, tuned per filament to correct for nozzle wear, real filament diameter, and other effects E-steps can't catch.",
    link: '/calibration/flow-rate/',
    category: 'Calibration',
  },
  {
    term: 'Layer height',
    def: 'The thickness of each individual printed layer, set in the slicer. Smaller values give finer detail and less visible staircasing at the cost of print time.',
    link: '/print-quality/layer-lines/',
    category: 'Slicer',
  },
  {
    term: 'Over-extrusion',
    def: 'The printer pushing out more plastic than commanded, showing up as blobs, rough bumpy surfaces, or dimensions larger than modeled.',
    link: '/print-quality/under-extrusion-vs-over-extrusion/',
    category: 'Defect',
  },
  {
    term: 'Retraction',
    def: 'The extruder briefly pulling filament backward before a travel move, and pushing it forward again before the next extrusion, to reduce oozing and stringing.',
    link: '/calibration/retraction-tuning/',
    category: 'Calibration',
  },
  {
    term: 'Ringing / ghosting',
    def: 'Regular, repeating surface banding caused by the frame or gantry flexing slightly on direction changes, addressed mechanically or with input shaping rather than temperature or cooling settings.',
    link: '/print-quality/layer-lines/',
    category: 'Defect',
  },
  {
    term: 'Stringing',
    def: 'Thin strands of plastic left between separate points of a print where the nozzle traveled without printing, caused by filament oozing during that travel move.',
    link: '/print-quality/stringing/',
    category: 'Defect',
  },
  {
    term: 'Under-extrusion',
    def: 'The printer pushing out less plastic than commanded, showing up as gaps, thin walls, or visible holes in top surfaces.',
    link: '/print-quality/under-extrusion-vs-over-extrusion/',
    category: 'Defect',
  },
  {
    term: 'Warping',
    def: 'A part lifting or curling off the bed, usually starting at corners, caused by the outer plastic cooling and shrinking faster than the warmer plastic underneath.',
    link: '/print-quality/warping/',
    category: 'Defect',
  },
  {
    term: 'Z-offset',
    def: 'The precise distance between the nozzle tip and the bed at the start of a print, set separately from mesh bed leveling, which only corrects relative variation across the bed.',
    link: '/calibration/bed-leveling/',
    category: 'Calibration',
  },
];
