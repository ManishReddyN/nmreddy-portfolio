import dynamic from "next/dynamic";
import { IconBaseProps, IconType } from "react-icons";
import { ComponentType } from "react";

export type DynamicIconType = ComponentType<IconBaseProps>;
export const getDynamicIcon = (iconName: string): DynamicIconType => {
  let lib = iconName
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .split(" ")[0]
    .toLocaleLowerCase();
  if (lib == "io") {
    lib = "io5";
  }
  if (lib == "fa") {
    lib = "fa6";
  }
  return dynamic(
    () =>
      import(`react-icons/${lib}/index.js`).then((mod) => ({
        default: mod[iconName] as IconType,
      })),
    {
      ssr: false,
    }
  );
};
