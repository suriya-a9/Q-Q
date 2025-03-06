declare module 'react-lazyload' {
    import * as React from 'react';
  
    interface LazyLoadProps {
      height?: number | string;
      offset?: number | number[];
      once?: boolean;
      overflow?: boolean;
      resize?: boolean;
      scroll?: boolean;
      children?: React.ReactNode;
      placeholder?: React.ReactNode;
      debounce?: boolean | number;
      throttle?: number;
      scrollContainer?: string | HTMLElement;
      unmountIfInvisible?: boolean;
    }
  
    export default class LazyLoad extends React.Component<LazyLoadProps, any> {}
  }
  