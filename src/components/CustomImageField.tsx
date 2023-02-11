import { ImageField, ImageFieldProps } from "react-admin";

export const CustomImageField = (props: ImageFieldProps) => {
  return <ImageField {...props} className="image-field" />;
};
