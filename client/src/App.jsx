// import { createBrowserRouter, RouterProvider, } from "react-router-dom";
// import HomePage from "./pages/home/HomePage";
// import LoginPage from "./pages/LoginPage";
// import SignUpPage from "./pages/SignUpPage";
// import WatchPage from "./pages/WatchPage";
// import { Toaster } from "react-hot-toast";
// import { useAuthStore } from "./store/authUser";
// import { useEffect } from "react";
// import { Loader } from "lucide-react";
// import SearchPage from "./pages/SearchPage";
// import SearchHistoryPage from "./pages/SearchHistoryPage";
// import NotFoundPage from "./pages/404";
// import ProtectedRoute from "./components/ProtectedRoute";
// import AppLayout from "./layouts/AppLayout";

// import './App.css'


// let router = createBrowserRouter([
//   {
//     path: "/login",
//     element: <ProtectedRoute> <LoginPage /></ProtectedRoute>,

//   },
//   {
//     path: "/signup",
//     element: <ProtectedRoute>
//       <SignUpPage />
//     </ProtectedRoute>,

//   },
//   {
//     path: '/',
//     element: <AppLayout />,
//     ChildrenL: [
//       {
//         path: "",
//         element: <HomePage />,

//       },

//       {
//         path: "/watch/:id",
//         element: <ProtectedRoute>
//           <WatchPage />
//         </ProtectedRoute>,

//       },
//       {
//         path: "/search",
//         element: <ProtectedRoute>
//           <SearchPage />
//         </ProtectedRoute>,
//       },
//       {
//         path: "/history",
//         element: <ProtectedRoute>
//           <SearchHistoryPage />
//         </ProtectedRoute>
//       },
//     ]
//   },

//   {
//     path: "/*",
//     element: <NotFoundPage />,
//     protected: false,
//   },
// ]);

// function App() {
//   const { isCheckingAuth, authCheck } = useAuthStore();

//   useEffect(() => {
//     authCheck();
//   }, [authCheck]);

//   if (isCheckingAuth) {
//     return (
//       <div className='h-screen'>
//         <div className='flex justify-center items-center bg-black h-full'>
//           <Loader className='animate-spin text-red-600 size-10' />
//         </div>
//       </div>
//     );
//   }

//   return (
//     <>
//       <RouterProvider router={router} />
//       <Toaster />
//     </>
//   );
// }

// export default App;






import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import WatchPage from "./pages/WatchPage";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./store/authUser";
import { useEffect } from "react";
import { Loader } from "lucide-react";
import SearchPage from "./pages/SearchPage";
import SearchHistoryPage from "./pages/SearchHistoryPage";
import NotFoundPage from "./pages/404";
import ProtectedRoute from "./components/ProtectedRoute";
import AppLayout from "./layouts/AppLayout";

import './App.css';
import RedirectIfAuthenticated from "./components/RedirectIfAutehenticated";

// Create router with routes configuration
let router = createBrowserRouter([
  {
    path: "/login",
    element: <RedirectIfAuthenticated> <LoginPage /></RedirectIfAuthenticated>, // Redirects if user is logged in
  },
  {
    path: "/signup",
    element: <RedirectIfAuthenticated><SignUpPage /></RedirectIfAuthenticated>,// Redirects if user is logged in
  },
  {
    path: '/',
    element: <AppLayout />, // Wrap app routes inside AppLayout
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "/watch/:id",
        element: <ProtectedRoute><WatchPage /></ProtectedRoute>, // Protected route for WatchPage
      },
      {
        path: "/search",
        element: <ProtectedRoute><SearchPage /></ProtectedRoute>, // Protected route for SearchPage
      },
      {
        path: "/history",
        element: <ProtectedRoute><SearchHistoryPage /></ProtectedRoute>, // Protected route for SearchHistoryPage
      },
    ],
  },
  {
    path: "/*",
    element: <NotFoundPage />, // Handles 404 for undefined routes
  },
]);

function App() {
  const { isCheckingAuth, authCheck } = useAuthStore();

  useEffect(() => {
    authCheck(); // Check authentication status
  }, [authCheck]);

  // Show loader while checking authentication
  if (isCheckingAuth) {
    return (
      <div className='h-screen'>
        <div className='flex justify-center items-center bg-black h-full'>
          <Loader className='animate-spin text-red-600 size-10' />
        </div>
      </div>
    );
  }

  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
}

export default App;
