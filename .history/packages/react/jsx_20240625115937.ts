export default function jsx(
  type: string | Function,
  config: Object,
  key: string
) {
  return {
    $$ty
    type,
    config,
    key,
  };
}
