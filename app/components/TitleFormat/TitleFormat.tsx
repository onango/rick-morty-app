import { FC } from "react";

interface TitleFormatProps {
  title: String;
  subtitle: String;
  type: "small" | "full";
}

const TitleFormat: FC<TitleFormatProps> = ({
  type = "small",
  title,
  subtitle,
}) => {
  const titleTextSizeName = {
    title: {
      small: "sm:text-xl md:text-xs lg:text-xs",
      full: "text-xl md:text-xl lg:text-xl",
    },
    subtitle: {
      small: "sm:text-xl md:text-xs lg:text-xs text-gray-800",
      full: "text-xl md:text-xl lg:text-xl text-gray-800",
    },
  };

  return (
    <div className="flex flex-col sm:my-2 md:my-1 ">
      <p
        className={`${titleTextSizeName.title[type]} font-semibold text-lg text-black`}
      >
        {title}
      </p>
      <p className={`${titleTextSizeName.subtitle[type]}`}>{subtitle}</p>
    </div>
  );
};
export default TitleFormat;
