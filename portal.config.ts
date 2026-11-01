/**
 * The portal this build is for, picked by the PORTAL environment variable.
 * The portals themselves are in portals/; this file only chooses one, so the
 * rest of the code keeps importing `portal.config` as upstream does.
 */
import { pickPortal } from './portals';

// The browser bundle gets PORTAL from Vite's `define` (vite.config.ts);
// vite.config.ts and the scripts run in Node and read it from the environment.
declare const __PORTAL__: string | undefined;
const nodeEnv = (globalThis as { process?: { env: Record<string, string | undefined> } }).process?.env;

export default pickPortal(typeof __PORTAL__ === 'string' ? __PORTAL__ : nodeEnv?.PORTAL);
