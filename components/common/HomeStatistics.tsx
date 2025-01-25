"use client";

import React from 'react';
import CountUp from 'react-countup';
import ReusableBG from '../reusable/ReusableBG';

const stats = [
  { label: 'Years', value: 1 },
  { label: 'Challenges Completed', value: 500, suffix: '+' },
  { label: 'Users', value: 10000, suffix: '+' },
  { label: 'Countries', value: 6, suffix: '+' },
];

const formatNumber = (value: number) => {
  if (value >= 1000) return `${(value / 1000).toFixed(1)}k`;
  return value.toString();
};

const HomeStatistics: React.FC = () => {
  return (
    <section className="lg:py-16 md:p-14 p-5 lg:px-28">
      <ReusableBG className="lg:py-20 py-10 lg:px-24 px-5">
        <div className="flex flex-wrap lg:justify-between justify-center lg:gap-12 gap-5 w-full">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <h2 className="text-4xl font-bold text-white">
                <CountUp
                  end={stat.value}
                  duration={2.5}
                  suffix={stat.suffix || ''}
                  formattingFn={formatNumber}
                  className="inline-block"
                />
              </h2>
              <p className="text-lg text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </ReusableBG>
    </section>
  );
};

export default HomeStatistics;
