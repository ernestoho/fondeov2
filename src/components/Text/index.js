import React from "react";
const variantClasses = {
  h1: "font-medium sm:text-[28px] md:text-[30px] text-[32px]",
  h2: "font-medium sm:text-[24px] md:text-[26px] text-[28px]",
  h3: "font-medium sm:text-[20px] md:text-[22px] text-[24px]",
  h4: "font-bold sm:text-[16.56px] md:text-[18.56px] text-[20.56px]",
  h5: "font-medium text-[20px]",
  h6: "text-[18px]",
  body1: "text-[16px]",
  body2: "text-[14px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
