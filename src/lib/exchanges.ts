import exchangesRaw from './exchanges.json';
import { Exchange } from '../types/exchange'; // ✅ adjust path as needed

export const exchangesObj = exchangesRaw as Record<string, Exchange>;
