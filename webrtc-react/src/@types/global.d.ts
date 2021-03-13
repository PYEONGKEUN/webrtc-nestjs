/* eslint-disable @typescript-eslint/no-explicit-any */
/** Global definitions for developement **/

declare module '*.css' {
	const styles: any;
	export = styles;
}

declare module '*.gif' {
	const src: string;
	export default src;
}

declare module '*.jpg' {
	const src: string;
	export default src;
}

declare module '*.jpeg' {
	const src: string;
	export default src;
}

declare module '*.png' {
	const src: string;
	export default src;
}


declare module "*.scss" {
	const content: { [className: string]: string };
	export = content;
  }
  
  declare module "*.less" {
	const content: { [className: string]: string };
	export = content;
  }
  
  declare module "*.svg" {
	import React = require("react");
	const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
	export default ReactComponent;
  }
  
  declare const IS_PROD: boolean;
  declare const IS_DEV: boolean;
  declare const IS_DEV_SERVER: boolean;
  