
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['DM Sans', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				purple: {
					DEFAULT: '#7A5FFF',
					50: '#F5F2FF',
					100: '#E5DEFF',
					200: '#C7B9FF',
					300: '#A894FF',
					400: '#8A6FFF',
					500: '#7A5FFF',
					600: '#5A37FF',
					700: '#3A0FFF',
					800: '#1D00E6',
					900: '#1600B3',
				},
				teal: {
					DEFAULT: '#00D1B2',
					50: '#E0FFF9',
					100: '#B3FFF1',
					200: '#80FFE6',
					300: '#4DFFDC',
					400: '#1AFFD1',
					500: '#00D1B2',
					600: '#00A08A',
					700: '#006F61',
					800: '#003E37',
					900: '#000D0C',
				},
				coral: {
					DEFAULT: '#FF6B6B',
					50: '#FFF0F0',
					100: '#FFE0E0',
					200: '#FFC2C2',
					300: '#FFA3A3',
					400: '#FF8585',
					500: '#FF6B6B',
					600: '#FF3D3D',
					700: '#FF0F0F',
					800: '#E10000',
					900: '#B30000',
				},
				dark: {
					DEFAULT: '#121212',
					50: '#383838',
					100: '#333333',
					200: '#2E2E2E',
					300: '#292929',
					400: '#242424',
					500: '#1F1F1F',
					600: '#1A1A1A',
					700: '#151515',
					800: '#121212',
					900: '#0A0A0A',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				'2xl': '1rem',
			},
			letterSpacing: {
				tighter: '-0.05em',
				tight: '-0.025em',
				normal: '0',
				wide: '0.025em',
				wider: '0.05em',
				widest: '0.1em',
				custom: '-0.02em',
			},
			lineHeight: {
				tighter: '1.2',
				tight: '1.4',
				normal: '1.5',
				relaxed: '1.625',
				loose: '2',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'gradient-shift': {
					'0%, 100%': { 
						backgroundPosition: '0% 50%' 
					},
					'50%': { 
						backgroundPosition: '100% 50%' 
					},
				},
				'float': {
					'0%, 100%': { 
						transform: 'translateY(0)' 
					},
					'50%': { 
						transform: 'translateY(-10px)' 
					},
				},
				'pulse-slow': {
					'0%, 100%': {
						opacity: 1
					},
					'50%': {
						opacity: 0.8
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'gradient-shift': 'gradient-shift 6s ease infinite',
				'float': 'float 5s ease-in-out infinite',
				'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
			},
			boxShadow: {
				glow: '0 0 20px rgba(122, 95, 255, 0.4)',
				'glow-teal': '0 0 20px rgba(0, 209, 178, 0.4)',
				'glow-coral': '0 0 20px rgba(255, 107, 107, 0.4)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
