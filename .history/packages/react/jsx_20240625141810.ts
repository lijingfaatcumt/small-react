export default function jsx(
  type: string | Function,
  config: {
    ref?: Function;
    key?: string;
  },
  ...children: string[]
) {
  console.log(type, config, children);
  const { ref, key, ...restConfig } = config ?? {};
  return {
    $$typeof: Symbol.for("react.element"),
    type,
    props: {
      ...restConfig,
      children: children.length ===,
    },
    key,
    ref,
    _mark: "ljf",
  };
}
