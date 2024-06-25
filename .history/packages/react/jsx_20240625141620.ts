export default function jsx(
  type: string | Function,
  config: {
    ref?: Function;
    key?: string;
  },
  children: string
) {
  console.log(type, config, key1);
  const { ref, key, ...restConfig } = config ?? {};
  return {
    $$typeof: Symbol.for("react.element"),
    type,
    props: {
      ...restConfig,
      children: 
    },
    key,
    ref,
    _mark: "ljf",
  };
}
