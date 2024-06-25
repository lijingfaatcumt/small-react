export default function jsx(
  type: string | Function,
  config: {
    ref?: Function;
    key?: string;
  },
  ...children: string 
) {
  const { ref, key, ...restConfig } = config ?? {};
  return {
    $$typeof: Symbol.for("react.element"),
    type,
    props: {
      ...restConfig,
      children: children.length <= 1 ? children[0] : children,
    },
    key,
    ref,
    _mark: "ljf",
  };
}
