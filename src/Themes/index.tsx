import {
	ThemeProvider as StyledComponentsThemeProvider,
	createGlobalStyle,
	css,
} from 'styled-components';
import 'antd/dist/antd.min.css';
import '@assets/template/css/nucleo-icons.css';
import '@assets/template/css/nucleo-svg.css';
import '@assets/template/css/soft-design-system-pro.css';

import colors from './colors';
import { fontSize, fontWeight } from './fonts';

export const MEDIA_WIDTHS: any = {
	upToExtraSmall: 500,
	upToSmall: 720,
	upToMedium: 960,
	upToLarge: 1280,
};

const mediaWidthTemplates = Object.keys(MEDIA_WIDTHS).reduce(
	(accumulator: any, size: any) => {
		accumulator[size] = (a: any, b: any, c: any) => css`
			@media (max-width: ${MEDIA_WIDTHS[size]}px) {
				${css(a, b, c)}
			}
		`;
		return accumulator;
	},
	{}
);
const input = {
	input_small: '380px',
	input_medium: '512px',
	input_large: '810px',
};

const theme = () => ({
	...colors,
	...fontSize,
	...fontWeight,
	grids: {
		sx: 8,
		sm: 16,
		md: 24,
		lg: 32,
	},
	// font size for text
	size_16: '16px',
	size_17: '17px',
	size_18: '18px',
	size_14: '14px',
	size_13: '13px',
	size_12: '12px',

	...input,
	// media queries
	mediaWidth: mediaWidthTemplates,
});

export default function ThemeProvider({ children }: any) {
	return (
		<StyledComponentsThemeProvider theme={theme()}>
			{children}
		</StyledComponentsThemeProvider>
	);
}

export const ThemedGlobalStyle = createGlobalStyle`
  
`;
