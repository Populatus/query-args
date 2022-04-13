const helperMap = initMap();
function initMap() {
  return new Map()
    .set(Boolean, parserBoolean)
    .set(Number, parserNumber)
    .set(String, parserString);
}
export function parse(options, key, args) {
  const type = options[key];
  const parserHandler = helperMap.get(type);
  return parserHandler(args, key);
}
function getFlagValue(args, key) {
  return args[args.indexOf(`-${key}`) + 1];
}
function parserBoolean(args, key) {
  return args.includes(`-${key}`);
}
function parserNumber(args, key) {
  return Number(getFlagValue(args, key));
}
function parserString(args, key) {
  return getFlagValue(args, key);
}
