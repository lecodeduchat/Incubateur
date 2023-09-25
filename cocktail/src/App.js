import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PublicRouter from "@/pages/Public/PublicRouter";
import AdminRouter from "@/pages/Admin/AdminRouter";
import AuthRouter from "@/pages/Auth/AuthRouter";
import AuthGuard from "@/_helpers/AuthGuard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* On doit lui préciser après le slashe qu'il y aura d'autres routes en ajoutant une étoile(*) */}
          {/* On définit deux points d'entrée un public et un admin */}
          <Route path="/*" element={<PublicRouter />} />
          <Route path="/admin/*" element={
            <AuthGuard>
              <AdminRouter />
            </AuthGuard>
          } />
          <Route path="/auth/*" element={<AuthRouter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
