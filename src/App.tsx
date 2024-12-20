import { Authenticated, type I18nProvider, Refine } from "@refinedev/core";
import dataProvider from "@refinedev/simple-rest";

import routerProvider, {
  CatchAllNavigate,
  NavigateToResource,
} from "@refinedev/react-router-v6";
import { Outlet, Route, Routes } from "react-router-dom";

import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import {
  AuthPage,
  ErrorComponent,
  RefineSnackbarProvider,
  ThemedLayoutV2,
  useNotificationProvider,
} from "@refinedev/mui";

import { useTranslation } from "react-i18next";

import { authProvider } from "./authProvider";
import { Header } from "./components/header";
import { ColorModeContextProvider } from "./context/color-mode";

import { CategoryCreate } from "./pages/categories/create";
import { CategoryList } from "./pages/categories/list";
import { CategoryShow } from "./pages/categories/show";
import { CategoryEdit } from "./pages/categories/edit";

import { ProductCreate } from "./pages/products/create";
import { ProductEdit } from "./pages/products/edit";
import { ProductList } from "./pages/products/list";
import { ProductShow } from "./pages/products/show";

function App() {
  const { t, i18n } = useTranslation();

  const i18nProvider: I18nProvider = {
    translate: (key, params) => t(key, params).toString(),
    changeLocale: (lang: string | undefined) => i18n.changeLanguage(lang),
    getLocale: () => i18n.language,
  };

  return (
    <ColorModeContextProvider>
      <CssBaseline />
      <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />
      <RefineSnackbarProvider>
        <Refine
          dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
          notificationProvider={useNotificationProvider}
          routerProvider={routerProvider}
          authProvider={authProvider}
          i18nProvider={i18nProvider}
          resources={[
            {
              name: "products",
              list: "/products",
              create: "/products/new",
              edit: "/products/:id/edit",
              show: "/products/:id",
            },
            {
              name: "categories",
              list: "/categories",
              create: "/categories/new",
              edit: "/categories/:id/edit",
              show: "/categories/:id",
              meta: {
                canDelete: true,
              },
            },
          ]}
        >
          <Routes>
            <Route
              element={
                <Authenticated
                  key="authenticated-inner"
                  fallback={<CatchAllNavigate to="/login" />}
                >
                  <ThemedLayoutV2 Header={() => <Header sticky />}>
                    <Outlet />
                  </ThemedLayoutV2>
                </Authenticated>
              }
            >
              <Route
                index
                element={<NavigateToResource resource="products" />}
              />
              <Route path="/products">
                <Route index element={<ProductList />} />
                <Route path="new" element={<ProductCreate />} />
                <Route path=":id" element={<ProductShow />} />
                <Route path=":id/edit" element={<ProductEdit />} />
              </Route>
              <Route path="/categories">
                <Route index element={<CategoryList />} />
                <Route path="new" element={<CategoryCreate />} />
                <Route path=":id" element={<CategoryShow />} />
                <Route path=":id/edit" element={<CategoryEdit />} />
              </Route>
              <Route path="*" element={<ErrorComponent />} />
            </Route>
            <Route
              element={
                <Authenticated
                  key="authenticated-outer"
                  fallback={<Outlet />}
                >
                  <NavigateToResource />
                </Authenticated>
              }
            >
              <Route
                path="/login"
                element={
                  <AuthPage
                    type="login"
                    formProps={{
                      defaultValues: {
                        email: "demo@refine.dev",
                        password: "demodemo",
                      },
                    }}
                  />
                }
              />
              <Route
                path="/register"
                element={<AuthPage type="register" />}
              />
              <Route
                path="/forgot-password"
                element={<AuthPage type="forgotPassword" />}
              />
              <Route
                path="/update-password"
                element={<AuthPage type="updatePassword" />}
              />
            </Route>
          </Routes>
        </Refine>
      </RefineSnackbarProvider>
    </ColorModeContextProvider>
  );
}

export default App;