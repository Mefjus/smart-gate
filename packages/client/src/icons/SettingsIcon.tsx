import React, { forwardRef, memo, Ref, SVGProps } from 'react';

const SettingsIcon = (props: SVGProps<SVGSVGElement>, svgRef?: Ref<SVGSVGElement>) => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={svgRef}
    {...props}
  >
    <path
      d="M14.2512 24H9.74924C9.16808 24 8.66524 23.6076 8.54087 23.0568L8.03749 20.796C7.36596 20.5105 6.72922 20.1535 6.13898 19.7316L3.86696 20.4336C3.31287 20.605 2.71052 20.3788 2.41989 19.89L0.163946 16.1088C-0.123504 15.6198 -0.0244719 15.003 0.40265 14.622L2.16511 13.062C2.08496 12.3553 2.08496 11.6423 2.16511 10.9356L0.40265 9.3792C-0.025101 8.99804 -0.124173 8.38046 0.163946 7.8912L2.41494 4.1076C2.70558 3.61884 3.30792 3.39256 3.86201 3.564L6.13404 4.266C6.43589 4.04899 6.75013 3.84867 7.07525 3.666C7.38735 3.49523 7.70854 3.34062 8.03749 3.2028L8.54211 0.9444C8.66587 0.393563 9.16817 0.000593271 9.74924 0H14.2512C14.8323 0.000593271 15.3346 0.393563 15.4584 0.9444L15.9679 3.204C16.3152 3.35222 16.6534 3.5197 16.9809 3.7056C17.2867 3.87693 17.5824 4.06483 17.8664 4.2684L20.1397 3.5664C20.6934 3.3956 21.295 3.62179 21.5855 4.11L23.8365 7.8936C24.124 8.38258 24.0249 8.99942 23.5978 9.3804L21.8354 10.9404C21.9155 11.6471 21.9155 12.3601 21.8354 13.0668L23.5978 14.6268C24.0249 15.0078 24.124 15.6246 23.8365 16.1136L21.5855 19.8972C21.295 20.3854 20.6934 20.6116 20.1397 20.4408L17.8664 19.7388C17.5788 19.9444 17.2799 20.1346 16.971 20.3088C16.6467 20.4911 16.3123 20.6557 15.9692 20.802L15.4584 23.0568C15.3341 23.6072 14.8319 23.9995 14.2512 24ZM11.9953 7.2C9.263 7.2 7.04804 9.34903 7.04804 12C7.04804 14.651 9.263 16.8 11.9953 16.8C14.7276 16.8 16.9425 14.651 16.9425 12C16.9425 9.34903 14.7276 7.2 11.9953 7.2Z"
      fill="currentColor"
    />
  </svg>
);

export default memo(forwardRef(SettingsIcon));
