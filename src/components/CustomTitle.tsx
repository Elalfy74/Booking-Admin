type CustomTitleProps = {
  title: string;
  value: string;
};

export const CustomTitle = ({ title, value }: CustomTitleProps) => {
  return (
    <span>
      {title} {value ? `"${value}"` : ""}
    </span>
  );
};
