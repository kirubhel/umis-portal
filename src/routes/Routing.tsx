import { Suspense, lazy, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { LoadingPage } from "../core/pages";


const LoginPage = lazy(
    async () => await import("../features/auth/pages/LoginPage"),
);

const SignupPage = lazy (
    async () => await import("../features/auth/pages/SignupPage")
)


export const Routing = (): JSX.Element => {

    return (
        <Suspense fallback={<LoadingPage />}>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
            </Routes>
        </Suspense>)



}