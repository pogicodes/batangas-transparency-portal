/**
 * Every portal this fork builds. The PORTAL environment variable picks one
 * (`PORTAL=taal npm run build`); without it the build is Batangas. To add a
 * portal, write portals/<key>.config.ts (`npm run setup -- --out=portals/<key>.config.ts`)
 * and list it here.
 */
import type { PortalConfig } from '../src/config';
import batangas from './batangas.config';
import taal from './taal.config';

export const DEFAULT_PORTAL = 'batangas';

export const portals: Record<string, PortalConfig> = { batangas, taal };

/** The portal for `key`, or the default when it is empty. Fails loudly on an unknown key. */
export function pickPortal(key: string | undefined): PortalConfig {
  const name = key?.trim() || DEFAULT_PORTAL;
  const portal = portals[name];
  if (!portal) throw new Error(`PORTAL="${name}" is not a portal. Known: ${Object.keys(portals).join(', ')} (portals/index.ts).`);
  return portal;
}
