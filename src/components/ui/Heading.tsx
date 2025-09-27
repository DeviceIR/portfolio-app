import { ReactNode, ElementType } from "react";

interface HeadingProps {
  children: ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({
  children,
  as = "h1",
  className,
}) => {
  const Tag: ElementType = as;

  const defaultClasses: Record<string, string> = {
    h1: "text-3xl font-bold ",
    h2: "text-2xl font-semibold ",
    h3: "text-xl font-semibold ",
    h4: "text-lg font-medium ",
    h5: "text-base font-medium ",
    h6: "text-sm font-medium ",
  };

  return (
    <Tag className={`${defaultClasses[as]} ${className ?? ""}`}>{children}</Tag>
  );
};

export default Heading;
