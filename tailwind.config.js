const colors = require('tailwindcss/colors')


module.exports = {
	content: [
		"./templates/**/*.{twig,html}",
		"./src/**/*.js",
		"./config/formie.php",
	],

	corePlugins: {
		container: false,
	},

	safelist: [
		'!border-orange',
		'bg-orange-200'
	],

	theme: {
		screens: {
			xs: "414px",
			sm: "640px",
			md: "768px",
			mdw: "830px",
			lg: "1024px",
			lgw: "1120px",
			xl: "1280px",
			xxl: "1440px",
			xsDown: { max: "413px" },
			smDown: { max: "639px" },
			mdDown: { max: "767px" },
			lgDown: { max: "1023px" },
			xlDown: { max: "1279px" },
			xxlDown: { max: "1439px" },
			limitedHeight: { 'raw': '(max-height: 801px) and (min-width: 1024px)' },
			limitedHeightFurther: { 'raw': '(max-height: 720px) and (min-width: 1024px)' },
		},

		fontFamily: {
			display: ["halyard-display", "sans-serif"],
			text: ["halyard-text", "sans-serif"],
		},

		fontSize: {
			xs: [
				"14px",
				{
					lineHeight: "24px",
				},
			],
			sm: [
				"16px",
				{
					lineHeight: "26px",
				},
			],
			base: [
				"18px",
				{
					lineHeight: "28px",
				},
			],
			lg: [
				"20px",
				{
					lineHeight: "28px",
				},
			],
			xl: [
				"21px",
				{
					lineHeight: "30px",
				},
			],
			"2xl": [
				"22px",
				{
					lineHeight: "30px",
				},
			],
			"3xl": [
				"24px",
				{
					lineHeight: "30px",
				},
			],
			"4xl": [
				"26px",
				{
					lineHeight: "34px",
				},
			],
			"5xl": [
				"34px",
				{
					lineHeight: "46px",
				},
			],
			"6xl": [
				"40px",
				{
					lineHeight: "52px",
				},
			],
			"7xl": [
				"44px",
				{
					lineHeight: "54px",
				},
			],
			"8xl": [
				"60px",
				{
					lineHeight: "64px",
				},
			],
			"9xl": [
				"70px",
				{
					lineHeight: "76px",
				},
			],
		},

		boxShadow: {
			"3xl": "0 0 100px black",
			"2xl": "0px 25px 50px -12px rgba(0,0,0,0.25)",
			xl: "0px 20px 25px -5px rgba(0,0,0,0.1)",
			lg: "0px 10px 15px -3px rgba(0,0,0,0.1)",
			md: "0px 2px 4px -2px rgba(0,0,0,0.5)",
			DEFAULT: "0px 1px 3px 0px rgba(0,0,0,0.1)",
			sm: "0px 1px 2px 0px rgba(0,0,0,0.08)",
		},

		borderRadius: {
			none: "0",
			xs: "0.0625rem",
			sm: "0.125rem",
			default: "0.1875rem",
			lg: "0.25rem",
			xl: "0.3125rem",
			"2xl": "0.375rem",
			"3xl": "0.4375rem",
			full: "9999px",
		},

		borderWidth: {
			DEFAULT: "1px",
			0: "0",
			2: "2px",
			3: "3px",
			4: "4px",
			5: "5px",
			6: "6px",
			8: "8px",
		},

		extend: {
			colors: {
				transparent: "transparent",
				current: "currentColor",
				white: "#ffffff",
				black: "#000000",
				success: "#32CD32",
				error: "#E34234",
				orange: {
					50: "#fff8eb",
					100: "#ffedc6",
					200: "#ffd888",
					300: "#ffb83a",
					400: "#ff9737",
					500: "#ff7d17",
					DEFAULT: "#ff7d17",
					600: "#f05d06",
					700: "#b73d06",
					800: "#942e0c",
					900: "#7a270d",
					950: "#461102",
				},
				grey: {
					50: "#f8f8f8",
					100: "#f0f0f0",
					200: "#e4e4e4",
					300: "#dadada",
					400: "#b3b3b3",
					800: '#5a5a5a',
					DEFAULT: "#b3b3b3",
					500: "#9a9a9a",
					600: "#818181",
					700: "#6a6a6a",
					800: "#5a5a5a",
					900: "#404040",
					950: "#1f1f1f",
				},
				blue: {
					DEFAULT: "#1e2a78",
				},
			},

			spacing: {
				"header-height": "var(--header-height)",
				"header-height-mobile": "var(--header-height-mobile)",
				"header-height-tablet": "var(--header-height-tablet)",
				'1': '0.0625rem',   
				'2': '0.125rem',      
				'4': '0.25rem',       
				'6': '0.375rem',    
				'8': '0.5rem',        
				'10': '0.625rem',  
				'12': '0.75rem',     
				'14': '0.875rem',    
				'16': '1rem',        
				'18': '1.125rem',    
				'20': '1.25rem',    
				'22': '1.375rem',    
				'24': '1.5rem',       
				'28': '1.75rem',      
				'32': '2rem',       
				'36': '2.25rem',    
				'40': '2.5rem',      
				'44': '2.75rem',     
				'48': '3rem',
				'52': '3.125rem',      
				'56': '3.5rem',   
				'64': '4rem',         
				'80': '5rem',        
				'96': '6rem',     
				'128': '8rem',    
				'144': '9rem',     
				'160': '10rem',    
				'176': '11rem',     
				'192': '12rem',     
				'206': '12.875rem',  
				'208': '13rem',  
				'224': '14rem',    
				'240': '15rem',       
				'256': '16rem',       
				'288': '18rem',       
				'320': '20rem',       
				'384': '24rem',   
			},
			content: {
				'link': 'url("/public/assets/images/svg/chevron-down.svg")',
				},
		},
	},
};
