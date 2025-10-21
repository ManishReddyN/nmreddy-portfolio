import { IconBaseProps } from "react-icons";
import { ComponentType } from "react";

import * as Io5Icons from "react-icons/io5";
import * as Fa6Icons from "react-icons/fa6";
import * as BsIcons from "react-icons/bs";
import * as MdIcons from "react-icons/md";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import * as CgIcons from "react-icons/cg";
import * as CiIcons from "react-icons/ci";
import * as DiIcons from "react-icons/di";
import * as FcIcons from "react-icons/fc";
import * as FiIcons from "react-icons/fi";
import * as GiIcons from "react-icons/gi";
import * as GoIcons from "react-icons/go";
import * as GrIcons from "react-icons/gr";
import * as HiIcons from "react-icons/hi";
import * as ImIcons from "react-icons/im";
import * as LuIcons from "react-icons/lu";
import * as RiIcons from "react-icons/ri";
import * as SiIcons from "react-icons/si";
import * as SlIcons from "react-icons/sl";
import * as TbIcons from "react-icons/tb";
import * as TiIcons from "react-icons/ti";
import * as VscIcons from "react-icons/vsc";
import * as WiIcons from "react-icons/wi";
import * as PiIcons from "react-icons/pi";

const iconModules = {
  io: Io5Icons,
  fa: Fa6Icons,
  bs: BsIcons,
  md: MdIcons,
  ai: AiIcons,
  bi: BiIcons,
  cg: CgIcons,
  ci: CiIcons,
  di: DiIcons,
  fc: FcIcons,
  fi: FiIcons,
  gi: GiIcons,
  go: GoIcons,
  gr: GrIcons,
  hi: HiIcons,
  im: ImIcons,
  lu: LuIcons,
  ri: RiIcons,
  si: SiIcons,
  sl: SlIcons,
  tb: TbIcons,
  ti: TiIcons,
  vsc: VscIcons,
  wi: WiIcons,
  pi: PiIcons,
};

export type DynamicIconType = ComponentType<IconBaseProps>;
export const getDynamicIcon = (iconName: string): DynamicIconType => {
  const prefixMatch = iconName.match(
    /^(Io|Gr|Bi|Si|Fa|Cg|Di|Fc|Fi|Gi|Go|Hi|Im|Lu|Ri|Sl|Tb|Ti|Vsc|Wi|Bs|Md|Ai|Pi)/
  );
  const prefix = prefixMatch?.[0]?.toLowerCase() || "io";

  const iconModule =
    iconModules[prefix as keyof typeof iconModules] || Io5Icons;

  const IconComponent = iconModule[iconName as keyof typeof iconModule];
  if (!IconComponent) {
    console.warn(
      `Icon "${iconName}" not found in module for prefix "${prefix}"`
    );
    return (
      Io5Icons.IoHelp ||
      (Object.values(Io5Icons)[0] as ComponentType<IconBaseProps>)
    );
  }

  return IconComponent as ComponentType<IconBaseProps>;
};
