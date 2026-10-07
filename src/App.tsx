import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { PageTransition } from "@/components/layout/PageTransition";
import { HomePage } from "@/pages/HomePage";
import { ServicePage } from "@/pages/ServicePage";
import { EquipePage } from "@/pages/EquipePage";
import { EstruturaPage } from "@/pages/EstruturaPage";
import { ContatoPage } from "@/pages/ContatoPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { useEffect } from "react";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const location = useLocation();

  return (
    <Layout>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransition>
                <HomePage />
              </PageTransition>
            }
          />
          <Route
            path="/servicos/:slug"
            element={
              <PageTransition>
                <ServicePage />
              </PageTransition>
            }
          />
          <Route
            path="/equipe"
            element={
              <PageTransition>
                <EquipePage />
              </PageTransition>
            }
          />
          <Route
            path="/estrutura"
            element={
              <PageTransition>
                <EstruturaPage />
              </PageTransition>
            }
          />
          <Route
            path="/contato"
            element={
              <PageTransition>
                <ContatoPage />
              </PageTransition>
            }
          />
          <Route
            path="*"
            element={
              <PageTransition>
                <NotFoundPage />
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
}
