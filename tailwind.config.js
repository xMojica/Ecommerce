module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "var(--primaryColor)",
                secondary: "var(--secondaryColor)",
                tertiary: "var(--tertiaryColor)",
            },
        },
    },
    plugins: [require("tailwindcss-textshadow")],
};
