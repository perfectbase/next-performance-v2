import { useSession } from "next-auth/react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router";
import { AppContextProvider } from "./_components/app-context-provider";
import NotFound from "./_components/not-found";
import Shell from "./_components/shell";
import AdminPage from "./_routes/admin";
import CardsPage from "./_routes/cards";
import DetailPage from "./_routes/detail";
import HomePage from "./_routes/home";
import SignInPage from "./_routes/signin";
import TablePage from "./_routes/table";

// Protected routes that require authentication
function ProtectedRoutes() {
  const navigate = useNavigate();
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      navigate("/signin");
    },
  });

  if (!session) {
    return null;
  }

  return (
    <AppContextProvider session={session}>
      <Shell>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cards" element={<CardsPage />} />
          <Route path="/cards/:id" element={<DetailPage />} />
          <Route path="/table" element={<TablePage />} />
          <Route path="/table/:id" element={<DetailPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Shell>
    </AppContextProvider>
  );
}

export default function ReactRouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/*" element={<ProtectedRoutes />} />
      </Routes>
    </BrowserRouter>
  );
}
