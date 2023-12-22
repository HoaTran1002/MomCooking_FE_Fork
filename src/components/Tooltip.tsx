// import React from 'react'
interface ITooltip {
  children: JSX.Element;
  position?: "top" | "bottom" | "left" | "right";
}
const Tooltip = ({ children }: ITooltip): JSX.Element => {
  return (
    <div className="relative group">
      {children}
      <div className="absolute hidden group-hover:block top-full mt-2 bg-black inline-block -left-14 text-white text-xs rounded py-1 px-4">
        <span>Tooltip center sadsad sada asd</span>
      </div>
    </div>
  );
};
export default Tooltip;
