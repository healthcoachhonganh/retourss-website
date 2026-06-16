import { Outlet, Navigate } from "react-router-dom";
import { Header, Footer } from "./components/ui";
import HomePage from "./pages/HomePage";
import VeRetourPage from "./pages/VeRetourPage";
import NhipHoiPhucPage from "./pages/NhipHoiPhucPage";
import CauChuyenPage from "./pages/CauChuyenPage";
import ChungToiPage from "./pages/ChungToiPage";
import VeHongAnhPage from "./pages/VeHongAnhPage";
import GocChiaSePage from "./pages/GocChiaSePage";
import ThamGiaPage from "./pages/ThamGiaPage";
import BatDauPage from "./pages/BatDauPage";
import AssessmentPage from "./pages/AssessmentPage";
import AudioPage from "./pages/AudioPage";

export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "ve-retour", element: <VeRetourPage /> },
      { path: "nhip-hoi-phuc", element: <NhipHoiPhucPage /> },
      { path: "cau-chuyen-hoi-phuc", element: <CauChuyenPage /> },
      { path: "chung-toi-dong-hanh-cung-ai", element: <ChungToiPage /> },
      { path: "ve-hong-anh", element: <VeHongAnhPage /> },
      { path: "goc-chia-se", element: <GocChiaSePage /> },
      { path: "tham-gia-retour", element: <ThamGiaPage /> },
      { path: "bat-dau-tai-day", element: <BatDauPage /> },
      { path: "bat-dau-tai-day/danh-gia-muc-do-hoi-phuc", element: <AssessmentPage /> },
      { path: "bat-dau-tai-day/audio-thu-gian-mien-phi", element: <AudioPage /> },
      { path: "hanh-trinh-hoi-phuc", element: <Navigate to="/nhip-hoi-phuc" replace /> },
      { path: "phuong-phap-hoi-phuc", element: <Navigate to="/nhip-hoi-phuc" replace /> },
    ]
  }
];

export function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
