import React, { forwardRef, memo, Ref, SVGProps } from 'react';

const DetailedKeyIcon = (props: SVGProps<SVGSVGElement>, svgRef?: Ref<SVGSVGElement>) => (
  <svg
    width="59"
    height="28"
    viewBox="0 0 59 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={svgRef}
    {...props}
  >
    <path
      d="M35.199 20.1759L35.3332 9.03242L6.33323 8.89816L0.69434 14.4028L6.33323 20.1759H8.34711L10.2267 18.1621L12.6434 19.6389L15.3286 17.088L18.2823 19.6389L20.8332 17.625L23.1156 19.6389L25.5323 17.625L28.7545 20.1759H35.199Z"
      fill="#3ED598"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M31.3054 14C31.3054 6.43678 37.4367 0.305567 44.9999 0.305567C52.5631 0.305567 58.6943 6.43678 58.6943 14C58.6943 21.5632 52.5631 27.6945 44.9999 27.6945C37.4367 27.6945 31.3054 21.5632 31.3054 14ZM45.5369 14.2685C45.5369 12.1923 47.22 10.5093 49.2962 10.5093C51.3724 10.5093 53.0554 12.1923 53.0554 14.2685C53.0554 16.3447 51.3724 18.0278 49.2962 18.0278C47.22 18.0278 45.5369 16.3447 45.5369 14.2685Z"
      fill="#3ED598"
    />
    <path
      d="M6.33316 20.1759L0.694267 14.4028L31.3054 14.4028C31.4306 16.6851 31.8926 18.2276 32.7822 20.1759H28.7545L25.5322 17.625L23.1156 19.6389L20.8332 17.625L18.2822 19.6389L15.3285 17.0879L12.6433 19.6389L10.2267 18.162L8.48131 20.1759H6.33316Z"
      fill="#257D69"
      fillOpacity="0.4"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M43.6572 14.2685C43.6572 11.3026 46.0616 8.89818 49.0276 8.89818C51.9936 8.89818 54.3979 11.3026 54.3979 14.2685C54.3979 17.2345 51.9936 19.6389 49.0276 19.6389C46.0616 19.6389 43.6572 17.2345 43.6572 14.2685ZM45.5369 14.2685C45.5369 12.1924 47.2199 10.5093 49.2961 10.5093C51.3723 10.5093 53.0554 12.1924 53.0554 14.2685C53.0554 16.3447 51.3723 18.0278 49.2961 18.0278C47.2199 18.0278 45.5369 16.3447 45.5369 14.2685Z"
      fill="#257D69"
      fillOpacity="0.4"
    />
    <path
      d="M45.2683 1.6481C38.4465 1.6481 32.9164 7.17822 32.9164 14C32.9164 20.8217 38.4465 26.3518 45.2683 26.3518C52.09 26.3518 57.6201 20.8217 57.6201 14C57.6201 7.17822 52.09 1.6481 45.2683 1.6481ZM45.2683 25.4021C38.9711 25.4021 33.8662 20.2972 33.8662 14C33.8662 7.70275 38.9711 2.59785 45.2683 2.59785C51.5655 2.59785 56.6704 7.70275 56.6704 14C56.6704 20.2972 51.5655 25.4021 45.2683 25.4021Z"
      fill="#257D69"
      fillOpacity="0.4"
    />
  </svg>
);

export default memo(forwardRef(DetailedKeyIcon));
