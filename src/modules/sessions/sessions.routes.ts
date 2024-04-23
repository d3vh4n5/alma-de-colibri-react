import { lazy } from "react";

const SignInSide = lazy(()=> import ('./components/SignInSide'))

export const SESSION_ROUTES = [
    { name: 'Login',    path: "login",    component: SignInSide  },
]