// import {
//   createTheme,
//   ThemeProvider,
//   responsiveFontSizes,
// } from "@material-ui/core/styles";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import colors, { ColorPalette } from "./colors";
// import FontList, { CommonFonts } from "./fonts/fonts";

// // Create a theme instance.
// let theme = createTheme({
//   overrides: {
//     MuiCssBaseline: {
//       "@global": {
//         html: {
//           backgroundColor: colors.white,
//           padding: 0,
//           margin: 0,
//         },
//         "@font-face": FontList,
//       },
//     },
//   },
//   palette: ColorPalette,
//   shape: {
//     borderRadius: 20,
//   },
//   typography: {
//     fontFamily: CommonFonts,
//   },
// });

// theme = responsiveFontSizes(theme);

// const ApplicationTheme = ({ children }) => {
//   return (
//     <>
//       <ThemeProvider theme={theme}>
//         <CssBaseline />
//         {children}
//       </ThemeProvider>
//     </>
//   );
// };

// export default ApplicationTheme;
