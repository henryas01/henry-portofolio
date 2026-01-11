import React, { ReactNode } from "react";

export const isEmpty = (obj: Record<string, unknown>): boolean => {
  return Object.keys(obj).length === 0;
};

/**
 * Function to parse a translation string, replacing placeholders and HTML-like tags
 * with dynamic components or text.
 *
 * @param {string} translation - The translation string to parse.
 * @param {Record<string, string>} variables - Dynamic variables for placeholders.
 * @param {Record<string, ReactNode | React.FC<{ children: ReactNode }>>} components - Custom components for tags.
 * @returns {ReactNode} - The parsed React elements, including components and text.
 */
export const parseTranslation = (
  translation: string,
  variables: Record<string, string>,
  components: Record<string, ReactNode | React.FC<{ children: ReactNode }>>
): ReactNode => {
  // Regex to match HTML-like tags, e.g., <Text>{{name}}</Text>
  const regex = /<([a-zA-Z]+)>(.*?)<\/\1>/g;

  const parts: ReactNode[] = [];
  let lastIndex = 0;

  // Find and replace all HTML-like tags with components
  for (const match of translation.matchAll(regex)) {
    // Push the text before the current match
    if (match.index > lastIndex) {
      parts.push(translation.slice(lastIndex, match.index));
    }

    const tagName = match[1]; // e.g., "Text"
    const innerText = match[2]; // e.g., "{{name}}"

    // Replace placeholder inside the tag (e.g., {{name}}) with actual value from `variables`
    const variableMatch = innerText.match(/{{(.*?)}}/);
    const component = components[tagName];

    if (component) {
      // If we have a custom component for this tag, render it
      if (React.isValidElement(component)) {
        // If the component is provided as a JSX element
        parts.push(
          React.cloneElement(
            component as React.ReactElement,
            {
              key: `${tagName}-${match.index}`,
            },
            variables[variableMatch?.[1]?.trim() ?? ""] || innerText
          )
        );
      } else {
        // If the component is provided as a component constructor
        const Component = component as React.FC<{ children: ReactNode }>;
        parts.push(
          <Component key={`${tagName}-${match.index}`}>
            {variables[variableMatch?.[1]?.trim() ?? ""] || innerText}
          </Component>
        );
      }
    } else {
      // If we don't have a custom component for this tag, render it as plain text
      parts.push(innerText);
    }

    // Update last index for the next part
    lastIndex = match.index + match[0].length;
  }

  // Add any remaining text after the last match
  if (lastIndex < translation.length) {
    parts.push(translation.slice(lastIndex));
  }

  return <>{parts}</>;
};
