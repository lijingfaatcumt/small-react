type ReactElement = {
  $$typeof: Symbol;
  type: string | Function;
  props: {
    children: ReactNode | ReactNode[];
  };
  key: string | undefined;
  ref: Function | undefined;
  _mark: "ljf";
};
type ReactNode = string | number | boolean | ReactElement;

export default function jsx(
  type: string | Function,
  config: {
    ref?: Function;
    key?: string;
  } | null,
  ...children: ReactNode[]
): ReactElement {
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
