export default function jsx(
  type: string | Function,
  config: Object,
  key: string
) {
  return {
    $$typeof: Symbol.for("react.element"),
    type,
    config,
    key,
  };
}
