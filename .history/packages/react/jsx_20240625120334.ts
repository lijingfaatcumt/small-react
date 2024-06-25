export default function jsx(
  type: string | Function,
  config: Object & {
    ref?: (dom) => void;
  },
  key: string
) {
  const { ref, ...restConfig } = config;
  return {
    $$typeof: Symbol.for("react.element"),
    type,
    config: restConfig,
    key,
    ref,
    _mark: "ljf",
  };
}
