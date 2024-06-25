export default function jsx(
  type: string | Function,
  config: Object,
  key: string
) {
  return {
    $$typeof
    type,
    config,
    key,
  };
}
