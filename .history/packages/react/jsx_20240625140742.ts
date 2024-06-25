export default function jsx(
  type: string | Function,
  config: {
    ref?: Function;
  },
  key: string
) {
  console.log(arguments, "arguments");
  const { ref, ...restConfig } = config ;
  return {
    $$typeof: Symbol.for("react.element"),
    type,
    config: restConfig,
    key,
    ref,
    _mark: "ljf",
  };
}
