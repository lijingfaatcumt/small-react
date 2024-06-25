type ReactElement = {
  $$typeof: Symbol.for("react.element"),
  type: string | Function;
  props: {
    children: ReactNode;
    [key: string]: any;
  };
  key: string | null;
  ref: Function | null;
}
type ReactNode = string | number | boolean | ReactElement;

export default function jsx(
  type: string | Function,
  config: {
    ref?: Function;
    key?: string;
  } | null,
  ...children: ReactNode[]
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
