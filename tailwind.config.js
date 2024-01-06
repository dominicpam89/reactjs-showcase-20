const withOpacity = (variableName) => {
	return ({ opacityValue }) => {
		if (opacityValue !== undefined) {
			return `rgba(var(${variableName}), ${opacityValue})`
		} else return `rgb(var(${variableName}))`
	}
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
				primary: {
					main: {
						color: withOpacity("--color-primary-main"),
						contrast: withOpacity("--color-primary-main-contrast"),
					},
					dark: {
						color: withOpacity("--color-primary-dark"),
						contrast: withOpacity("--color-primary-dark-contrast"),
					},
					light: {
						color: withOpacity("--color-primary-light"),
						contrast: withOpacity("--color-primary-light-contrast"),
					},
				},
				secondary: {
					main: {
						color: withOpacity("--color-secondary-main"),
						contrast: withOpacity("--color-secondary-main-contrast"),
					},
					dark: {
						color: withOpacity("--color-secondary-dark"),
						contrast: withOpacity("--color-secondary-dark-contrast"),
					},
					light: {
						color: withOpacity("--color-secondary-light"),
						contrast: withOpacity("--color-secondary-light-contrast"),
					},
				},
				info: {
					main: {
						color: withOpacity("--color-info-main"),
						contrast: withOpacity("--color-info-main-contrast"),
					},
					dark: {
						color: withOpacity("--color-info-dark"),
						contrast: withOpacity("--color-info-dark-contrast"),
					},
					light: {
						color: withOpacity("--color-info-light"),
						contrast: withOpacity("--color-info-light-contrast"),
					},
				},
				danger: {
					main: {
						color: withOpacity("--color-danger-main"),
						contrast: withOpacity("--color-danger-main-contrast"),
					},
					dark: {
						color: withOpacity("--color-danger-dark"),
						contrast: withOpacity("--color-danger-dark-contrast"),
					},
					light: {
						color: withOpacity("--color-danger-light"),
						contrast: withOpacity("--color-danger-light-contrast"),
					},
				},
				warning: {
					main: {
						color: withOpacity("--color-warning-main"),
						contrast: withOpacity("--color-warning-main-contrast"),
					},
					dark: {
						color: withOpacity("--color-warning-dark"),
						contrast: withOpacity("--color-warning-dark-contrast"),
					},
					light: {
						color: withOpacity("--color-warning-light"),
						contrast: withOpacity("--color-warning-light-contrast"),
					},
				},
				success: {
					main: {
						color: withOpacity("--color-success-main"),
						contrast: withOpacity("--color-success-main-contrast"),
					},
					dark: {
						color: withOpacity("--color-success-dark"),
						contrast: withOpacity("--color-success-dark-contrast"),
					},
					light: {
						color: withOpacity("--color-success-light"),
						contrast: withOpacity("--color-success-light-contrast"),
					},
				},
				neutral: {
					"50": withOpacity("--color-neutral-50"),
					"100": withOpacity("--color-neutral-100"),
					"200": withOpacity("--color-neutral-200"),
					"300": withOpacity("--color-neutral-300"),
					"400": withOpacity("--color-neutral-400"),
					"500": withOpacity("--color-neutral-500"),
					"600": withOpacity("--color-neutral-600"),
					"700": withOpacity("--color-neutral-700"),
					"800": withOpacity("--color-neutral-800"),
					"900": withOpacity("--color-neutral-900"),
					"950": withOpacity("--color-neutral-950")
				},
			},
			fontSize:{
				xxs: "0.65rem",
			},
			fontFamily:{
				heading: "var(--font-heading)",
				paragraph: "var(--font-paragraph)"
			}    
    },
  },
  plugins: [],
}

