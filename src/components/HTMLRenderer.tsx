import parse, { domToReact, HTMLReactParserOptions, DOMNode } from 'html-react-parser';
import React from 'react';

interface Props {
  html?: string;
  components?: Record<string, React.ComponentType<unknown>>;
  componentOverrides?: Record<
    string,
    (originalComponent: React.ComponentType<unknown>) => React.ComponentType<unknown>
  >;
}

interface Replace {
  name: string;
  attribs: Record<string, string>;
  children: DOMNode[];
}

const HTMLRenderer = ({ html = '', components = {} }: Props) => {
  const resolvedComponents = Object.keys(components).reduce(
    (acc, key) => {
      const Comp = components[key] ?? ((props) => React.createElement(key, props));

      acc[key] = Comp;

      return acc;
    },
    { ...components }
  );

  const parserOptions = {
    replace: ({ name, attribs, children: nodes }: Replace) => {
      const children = nodes
        ? domToReact(nodes, {
            ...(parserOptions as HTMLReactParserOptions),
          })
        : null;

      const Component = resolvedComponents[name];

      if (!Component) return;

      const element = React.createElement(Component, { ...attribs }, children);

      // eslint-disable-next-line consistent-return
      return element;
    },
  } as HTMLReactParserOptions;

  return parse(html, parserOptions) as JSX.Element;
};

export default HTMLRenderer;
