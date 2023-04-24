import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/global.css";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
//import "../fontsource/inter";
//import "@fontsource/inter/500.css";
import ReactDOM from "react-dom/client";
// import { AxiosWrapper, ErrorBoundary } from "./libs/core";
// import { GloablThemeProvider } from "./libs/core/theme/GloabalThemeProvider";
//import { store } from "./store/app.store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Router>
    {/* <ErrorBoundary>
      <Provider store={store}>
        <GloablThemeProvider>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <AxiosWrapper> */}
            
              <App />
            {/* </AxiosWrapper>
          </LocalizationProvider>
        </GloablThemeProvider>
      </Provider>
    </ErrorBoundary> */}
  </Router>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
