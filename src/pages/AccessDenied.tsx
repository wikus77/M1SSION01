import React from "react";
import { Link } from "react-router-dom";

export default function AccessDenied() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)] text-center">
      <h1 className="text-5xl font-bold text-red-500 mb-4">Accesso Negato</h1>
      <p className="text-lg text-gray-400 mb-8">Non hai i permessi per accedere a questa pagina.</p>
      <Link to="/home" className="px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-all">
        Torna alla Home
      </Link>
    </div>
  );
}
