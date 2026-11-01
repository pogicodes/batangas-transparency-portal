/**
 * This portal's configuration: the only file a fork needs to edit.
 * What each field means: src/config.ts. Check it against the live API with
 * `npm run check`.
 *
 * The Province of Batangas. Its four DPWH district engineering offices bring
 * in every DPWH line listed under them (the 2nd and 4th DEOs each serve two
 * legislative districts, so they are shown whole); the place name brings in
 * lines from all four programs whose title names Batangas.
 */
import { defineConfig } from './src/config';

export default defineConfig({
  id: 'batangas-province',
  kind: 'province',
  name: 'Province of Batangas',
  shortName: 'Batangas',
  siteUrl: 'https://batangas-transparency-portal.vercel.app',
  operator: { name: 'PogiCodes', url: 'https://github.com/pogicodes/batangas-transparency-portal' },
  scope: {
    offices: [
      'Batangas 1st District Engineering Office',
      'Batangas 2nd District Engineering Office',
      'Batangas 3rd District Engineering Office',
      'Batangas 4th District Engineering Office',
    ],
    places: [{ label: 'Batangas', region: 'IV-A' }],
    districts: [
      'leg:batangas:1st',
      'leg:batangas:2nd',
      'leg:batangas:3rd',
      'leg:batangas:4th',
      'leg:batangas:5th',
      'leg:batangas:6th',
    ],
    exclude: [
      { key: 'dpwh:house-reading:443', reason: 'Cavite–Batangas Road segment built by a Cavite district engineering office; the road is in Cavite.' },
      { key: 'dpwh:house-reading:391', reason: 'Cavite–Batangas Road segment built by a Cavite district engineering office; the road is in Cavite.' },
      { key: 'dpwh:house-reading:954', reason: 'Cavite–Batangas Road segment built by a Cavite district engineering office; the road is in Cavite.' },
      { key: 'dpwh:stage:16348', reason: 'Cavite–Batangas Road segment built by a Cavite district engineering office; the road is in Cavite.' },
      { key: 'dpwh:stage:16347', reason: 'Cavite–Batangas Road segment built by a Cavite district engineering office; the road is in Cavite.' },
      { key: 'dpwh:house-reading:432', reason: 'Tagaytay–Batangas via Tuy Road segment built by the Cavite 2nd District Engineering Office; the segment is in Cavite.' },
      { key: 'dpwh:house-reading:434', reason: 'Tagaytay–Batangas via Tuy Road segment built by the Cavite 2nd District Engineering Office; the segment is in Cavite.' },
      { key: 'dpwh:house-reading:433', reason: 'Tagaytay–Batangas via Tuy Road segment built by the Cavite 2nd District Engineering Office; the segment is in Cavite.' },
      { key: 'dpwh:house-reading:953', reason: 'Tagaytay–Batangas via Tuy Road segment built by the Cavite 2nd District Engineering Office; the segment is in Cavite.' },
    ],
  },
  reporting: { enabled: false },
});
