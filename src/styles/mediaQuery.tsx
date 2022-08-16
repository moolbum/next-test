type BreakPointType = 'pc' | 'tablet' | 'phone';

export const breakpoints: Record<BreakPointType, number> = {
  pc: 1279,
  tablet: 767,
  phone: 375,
};

export const MediaQuery = {
  FROM_PC_TO_TABLET: `@media (max-width: ${breakpoints.pc}px)`,
  FROM_TABLET_TO_PHONE: `@media (max-width: ${breakpoints.tablet}px)`,
};
