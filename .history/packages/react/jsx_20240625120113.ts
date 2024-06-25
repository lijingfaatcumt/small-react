export default function jsx(
  type: string | Function,
  config: Object,
  key: string
) {
  const {ref, ...restConfig} = c
  ;
  return {
    $$typeof: Symbol.for("react.element"),
    type,
    config,
    key,
    _mark: "ljf",
  };
}
