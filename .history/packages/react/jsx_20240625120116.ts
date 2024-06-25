export default function jsx(
  type: string | Function,
  config: Object,
  key: string
) {
  const {ref, ...restConfig} = config;
  return {
    $$typeof: Symbol.for("react.element"),
    type,
    config,
    key,
    _mark: "ljf",
  };
}
