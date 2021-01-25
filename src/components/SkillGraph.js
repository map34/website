import uniqueId from 'lodash/uniqueId';
import React from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer
} from 'recharts';

const FULL_MARK = 100;

const backEndData = [
  { subject: 'Distributed Systems', A: 80, fullMark: FULL_MARK },
  { subject: 'Python', A: 100, fullMark: FULL_MARK },
  { subject: 'C/C++', A: 86, fullMark: FULL_MARK },
  { subject: 'Ruby', A: 99, fullMark: FULL_MARK },
  { subject: 'AWS', A: 80, fullMark: FULL_MARK },
  { subject: 'Databases', A: 70, fullMark: FULL_MARK},
  { subject: 'Go', A: 86, fullMark: FULL_MARK },
  { subject: 'Java', A: 70, fullMark: FULL_MARK },
  { subject: 'Kafka', A: 86, fullMark: FULL_MARK }
];

const frontEndData = [
  { subject: 'Javascript', A: 100, fullMark: FULL_MARK },
  { subject: 'React', A: 100, fullMark: FULL_MARK },
  { subject: 'Redux', A: 90, fullMark: FULL_MARK },
  { subject: 'SASS', A: 60, fullMark: FULL_MARK },
  { subject: 'Typescript', A: 70, fullMark: FULL_MARK },
  { subject: 'Ember.js', A: 80, fullMark: FULL_MARK},
  { subject: 'Electron', A: 80, fullMark: FULL_MARK },
  { subject: 'D3.js', A: 60, fullMark: FULL_MARK },
  { subject: 'Webpack', A: 70, fullMark: FULL_MARK }
];

export const responsiveWidthFactory = (width) => {
  if (width <= 600) {
    return {
      outerRadius: '60%',
      minWidth: width * 0.8
    };
  } else if (width > 600 && width <= 1200) {
    return {
      outerRadius: '80%',
      minWidth: width * 0.8
    };
  }
  return {
    outerRadius: '90%',
    minWidth: width * 0.5
  };
};

export const SkillGraph = (props) => {
  let data = backEndData;
  let fill = '#8884d8';

  if (props.skill === 'frontend') {
    data = frontEndData;
    fill = '#F0A6CA';
  }
  return (<ResponsiveContainer aspect={1}>
    <RadarChart
      key={props.timeout ? uniqueId : -1}
      cx="50%"
      cy="50%"
      outerRadius={`${responsiveWidthFactory(props.width).outerRadius}`}
      data={data}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" tick={{ fill: '#fff' }} />
      <PolarRadiusAxis tick={false} axisLine={false} />
      <Radar
        dataKey="A"
        stroke={fill}
        fill={fill}
        fillOpacity={0.6}
      />
    </RadarChart>
  </ResponsiveContainer>);
};
