import React, { useMemo } from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const TechItem = ({ icon }) => {
  return (
    <div className='w-28 h-28'>
      <BallCanvas icon={icon} />
    </div>
  );
};

const Tech = () => {
  const memoizedTechItems = useMemo(() => {
    return technologies.map((technology) => (
      <TechItem key={technology.name} icon={technology.icon} />
    ));
  }, []);

  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {memoizedTechItems}
    </div>
  );
};

export default SectionWrapper(Tech, "");
