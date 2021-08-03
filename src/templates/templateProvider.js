import { createContext } from "react";

// UI Component
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

const TemplateContext = createContext(null);

const TemplateProvider = ({ children }) => {
  const theme = createTheme({
    overrides: {
      MuiDialog: {
        paperWidthSm: {
          maxWidth: "unset",
          maxHeight: "unset",
        },
      },
      MuiDialogContent: {
        root: {
          padding: 0,
          "&:first-child": {
            paddingTop: 0,
          },
        },
      },
      MuiTableCell: {
        root: {
          borderBottom: "none",
        },
      },
    },
  });

  return (
    <TemplateContext.Provider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </TemplateContext.Provider>
  );
};

export default TemplateProvider;
