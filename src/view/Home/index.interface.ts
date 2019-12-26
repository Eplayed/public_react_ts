export interface State {
    // name: string;
    // age: number;
    // value: string;
    // userInfo: UserInfo;
    [propName: string]: any;
  }
  
  export interface UserInfo {
    address: string;
    gender: string;
    nickName: string;
  }
  
  export interface PageProps {
    [propName: string]: any;
  }
  