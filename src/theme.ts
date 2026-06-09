// Single source of truth for the site palette and type.
export const c = {
  bg: '#FAF6EF',
  textPrimary: '#211B16',
  textBody: '#5C5249',
  textMuted: '#8A7E72',
  textFaint: '#A99E92',
  textLabel: '#8A7E72',

  accent: '#E8704F',
  accentHover: '#D9603F',
  accentBg: 'rgba(232, 112, 79, 0.08)',
  accentBgSoft: 'rgba(232, 112, 79, 0.05)',
  accentBorder: 'rgba(232, 112, 79, 0.30)',
  accentBorderSoft: 'rgba(232, 112, 79, 0.20)',
  accentGlow: 'rgba(232, 112, 79, 0.30)',
  accentIconBg: 'rgba(232, 112, 79, 0.12)',

  card: '#FFFFFF',
  cardHover: '#FFFDFB',
  surface: '#F2ECE2',
  codeBg: '#F4EEE5',

  border: 'rgba(33, 27, 22, 0.10)',
  borderSoft: 'rgba(33, 27, 22, 0.07)',
  borderHard: 'rgba(33, 27, 22, 0.16)',

  red: '#D64545',
  purple: '#9B7FE8',
} as const

export const font = {
  sans: 'Inter, system-ui, sans-serif',
  serif: '"Fraunces", Georgia, "Times New Roman", serif',
  mono: '"JetBrains Mono", ui-monospace, monospace',
} as const

export const SECTION_MAX = 1152
