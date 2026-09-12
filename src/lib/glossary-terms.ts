export type GlossaryCategory = 'Hardware' | 'Slicer' | 'Calibration' | 'Defect' | 'Material';

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
    term: 'Cold pull',
    def: "A technique for clearing a nozzle clog by heating the hot end, then cooling it slightly before pulling the filament straight out, carrying trapped debris with it.",
    link: '/print-quality/nozzle-clogs/',
    category: 'Hardware',
  },
  {
    term: 'Direct drive extruder',
    def: 'An extruder layout where the drive motor sits right on top of the hot end. Needs less retraction distance than Bowden and generally handles flexible filaments like TPU better.',
    link: '/calibration/retraction-tuning/',
    category: 'Hardware',
  },
  {
    term: "Elephant's foot",
    def: 'The base of a print bulging outward wider than the walls above it, caused by the weight of the part squishing still-soft first layers before they fully cool.',
    link: '/print-quality/elephants-foot/',
    category: 'Defect',
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
    term: 'Heat creep',
    def: 'Heat traveling further up the hot end than intended, softening filament above the melt zone. A common cause of intermittent clogs and grinding, usually from inadequate heat-break fan airflow.',
    link: '/print-quality/nozzle-clogs/',
    category: 'Hardware',
  },
  {
    term: 'Layer height',
    def: 'The thickness of each individual printed layer, set in the slicer. Smaller values give finer detail and less visible staircasing at the cost of print time.',
    link: '/print-quality/layer-lines/',
    category: 'Slicer',
  },
  {
    term: 'Nozzle clog',
    def: "A physical obstruction restricting or blocking extrusion, caused by heat creep, debris, or degraded filament residue — not fixable by adjusting flow rate or temperature.",
    link: '/print-quality/nozzle-clogs/',
    category: 'Defect',
  },
  {
    term: 'Over-extrusion',
    def: 'The printer pushing out more plastic than commanded, showing up as blobs, rough bumpy surfaces, or dimensions larger than modeled.',
    link: '/print-quality/under-extrusion-vs-over-extrusion/',
    category: 'Defect',
  },
  {
    term: 'Linear advance (pressure advance)',
    def: "A firmware feature that adjusts extrusion pressure dynamically as print speed changes, reducing blobbing at corners. A refinement calibrated after E-steps and flow rate, not a replacement for either.",
    link: '/calibration/',
    category: 'Calibration',
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
  {
    term: 'ASA',
    def: 'A filament chemically similar to ABS but with noticeably better UV resistance, making it the better choice for parts that spend time outdoors.',
    link: '/materials/abs-asa-guide/',
    category: 'Material',
  },
  {
    term: 'TPU',
    def: 'A flexible filament that needs slower print speeds, minimal retraction, and preferably a direct-drive extruder to feed reliably.',
    link: '/materials/tpu-guide/',
    category: 'Material',
  },
];
