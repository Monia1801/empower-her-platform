
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Solutions from "./pages/Solutions";
import MentorConnect from "./pages/MentorConnect";
import EduGirls from "./pages/EduGirls";
import SafeHer from "./pages/SafeHer";
import InspirationHub from "./pages/InspirationHub";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/mentor-connect" element={<MentorConnect />} />
          <Route path="/edu-girls" element={<EduGirls />} />
          <Route path="/safe-her" element={<SafeHer />} />
          <Route path="/inspiration-hub" element={<InspirationHub />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
