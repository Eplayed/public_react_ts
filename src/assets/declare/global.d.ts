declare module "*.module.scss";
declare module "*.png";

declare interface PageProps {
  [propsName: string]: any;
}

declare interface ResponseData<T = any> {
  code: string;
  data: T;
  message: string;
}
