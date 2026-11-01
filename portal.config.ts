/**
 * The Municipality of Taal, Batangas: the taal branch's portal, deployed to
 * taal.betterbatangas.org. main is the Province of Batangas.
 * What each field means: src/config.ts. Check it against the live API with
 * `npm run check`.
 *
 * Taal has no DPWH office of its own (the Batangas 1st District Engineering
 * Office serves it), so lines come in only when their title names Taal. That
 * also catches Taal Lake and Taal Volcano projects in other towns, which are
 * excluded in taal.exclusions.ts.
 */
import { defineConfig } from './src/config';
import { taalExclusions } from './taal.exclusions';

export default defineConfig({
  id: 'taal-batangas',
  kind: 'municipality',
  name: 'Municipality of Taal, Batangas',
  shortName: 'Taal',
  siteUrl: 'https://taal.betterbatangas.org',
  operator: { name: 'PogiCodes', url: 'https://github.com/pogicodes/batangas-transparency-portal' },
  scope: {
    places: [{ label: 'Taal', region: 'IV-A' }],
    districts: ['leg:batangas:1st'],
    exclude: taalExclusions,
  },
  reporting: { enabled: false },
});
