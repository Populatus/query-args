import { parse } from "./parse.js";
export function parseArgs(args, options) {
  const keys = Object.keys(options);
  return keys.reduce((result, key) => {
    result[key] = parse(options, key, args);
    return result;
  }, {});
}
