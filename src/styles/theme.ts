"use client";

import { createSystem, defaultConfig } from "@chakra-ui/react";

const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        primary: {
          50: { value: "#e3f2fd" },
          100: { value: "#bbdefb" },
          200: { value: "#90caf9" },
          300: { value: "#64b5f6" },
          400: { value: "#42a5f5" },
          500: { value: "#2196f3" },
          600: { value: "#1e88e5" },
          700: { value: "#1976d2" },
          800: { value: "#1565c0" },
          900: { value: "#0d47a1" },
        },
        gray: {
          50: { value: "#fafafa" },
          100: { value: "#f5f5f5" },
          200: { value: "#eeeeee" },
          300: { value: "#e0e0e0" },
          400: { value: "#bdbdbd" },
          500: { value: "#9e9e9e" },
          600: { value: "#757575" },
          700: { value: "#616161" },
          800: { value: "#424242" },
          900: { value: "#212121" },
        },
      },
      fonts: {
        body: { value: "'Figtree', sans-serif" },
        heading: { value: "'Figtree', sans-serif" },
      },
      fontSizes: {
        xs: { value: "0.75rem" },
        sm: { value: "0.875rem" },
        md: { value: "1rem" },
        lg: { value: "1.125rem" },
        xl: { value: "1.25rem" },
        "2xl": { value: "1.5rem" },
        "3xl": { value: "1.875rem" },
        "4xl": { value: "2.25rem" },
        "5xl": { value: "3rem" },
        "6xl": { value: "3.75rem" },
      },
      fontWeights: {
        normal: { value: "400" },
        medium: { value: "500" },
        semibold: { value: "600" },
        bold: { value: "700" },
      },
      lineHeights: {
        none: { value: "1" },
        tight: { value: "1.25" },
        snug: { value: "1.375" },
        normal: { value: "1.5" },
        relaxed: { value: "1.625" },
        loose: { value: "2" },
      },
      spacing: {
        1: { value: "0.25rem" },
        2: { value: "0.5rem" },
        3: { value: "0.75rem" },
        4: { value: "1rem" },
        5: { value: "1.25rem" },
        6: { value: "1.5rem" },
        8: { value: "2rem" },
        10: { value: "2.5rem" },
        12: { value: "3rem" },
        16: { value: "4rem" },
        20: { value: "5rem" },
      },
      radii: {
        none: { value: "0" },
        sm: { value: "0.125rem" },
        base: { value: "0.25rem" },
        md: { value: "0.375rem" },
        lg: { value: "0.5rem" },
        xl: { value: "0.75rem" },
        "2xl": { value: "1rem" },
        "3xl": { value: "1.5rem" },
        full: { value: "9999px" },
      },
    },
    semanticTokens: {
      colors: {
        bg: {
          DEFAULT: {
            value: { base: "{colors.white}", _dark: "{colors.gray.800}" },
          },
          card: {
            value: { base: "{colors.white}", _dark: "{colors.gray.700}" },
          },
        },
        background: {
          card: {
            value: { base: "{colors.gray.50}", _dark: "{colors.gray.800}" },
          },
          subtle: {
            value: { base: "{colors.gray.100}", _dark: "{colors.gray.900}" },
          },
          input: {
            value: { base: "{colors.gray.50}", _dark: "{colors.gray.700}" },
          },
          hover: {
            value: { base: "{colors.gray.200}", _dark: "{colors.gray.600}" },
          },
          muted: {
            value: { base: "{colors.gray.200}", _dark: "{colors.gray.900}" },
          },
        },
        text: {
          primary: {
            value: { base: "{colors.gray.800}", _dark: "{colors.gray.100}" },
          },
          secondary: {
            value: { base: "{colors.gray.600}", _dark: "{colors.gray.300}" },
          },
          inverse: {
            value: { base: "{colors.white}", _dark: "{colors.gray.900}" },
          },
        },
        border: {
          DEFAULT: {
            value: { base: "{colors.gray.200}", _dark: "{colors.gray.600}" },
          },
          subtle: {
            value: { base: "{colors.gray.300}", _dark: "{colors.gray.700}" },
          },
          hover: {
            value: {
              base: "{colors.primary.500}",
              _dark: "{colors.primary.400}",
            },
          },
        },
        blue: {
          primary: {
            value: {
              base: "{colors.primary.500}",
              _dark: "{colors.primary.400}",
            },
          },
          hover: {
            value: {
              base: "{colors.primary.600}",
              _dark: "{colors.primary.300}",
            },
          },
        },
        overlay: {
          dark: {
            value: { base: "rgba(0,0,0,0.4)", _dark: "rgba(0,0,0,0.7)" },
          },
        },
        light: {
          card: { value: "{colors.gray.50}" },
          border: { value: "{colors.gray.200}" },
          text: {
            primary: { value: "{colors.gray.900}" },
            secondary: { value: "{colors.gray.600}" },
          },
        },
      },
    },
  },
});

export default system;
