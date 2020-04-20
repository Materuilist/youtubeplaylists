import React, { PureComponent } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';

export default ({data})=>{
    return (
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 0, right: 0, left: 0, bottom: 0,
        }}
      >
        <XAxis dataKey="x" stroke="#65ebeb"/>
        <YAxis hide type="number" allowDataOverflow={true} />
        <Tooltip />
        <Area type="monotone" dataKey="y" stroke="#65ebeb" fill="#65ebeb" />
      </AreaChart>
    );
}
