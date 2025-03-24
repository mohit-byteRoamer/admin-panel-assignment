import React from 'react';
import { Switch as AntSwitch } from 'antd';


const Switch = ({ isToggle, onChange, size = "default" }) => <AntSwitch  size={size} className='h-5' checked={isToggle} onChange={onChange} />;

export default Switch;