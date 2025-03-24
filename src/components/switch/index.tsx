import { Switch as AntSwitch } from "antd";
import { SWITCH_PROPS_TYPES } from "../types";



const Switch = ({ isToggle, onChange, size = "default" }: SWITCH_PROPS_TYPES) => (
    <AntSwitch size={size} className="h-5" checked={isToggle} onChange={onChange} />
);

export default Switch;
