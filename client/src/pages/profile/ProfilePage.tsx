import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-white font-sans selection:bg-blue-500/30 p-6 md:p-12 relative overflow-hidden">
      {/* Background Effects (чтобы сохранить стилистику) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-[#020617]/50 to-[#020617]" />
        <div className="absolute top-[10%] left-[20%] w-[30%] h-[30%] bg-blue-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[40%] h-[40%] bg-indigo-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header / Navigation */}
        <header className="flex items-center justify-between border-b border-white/10 pb-6 mb-8">
          <h1 className="text-2xl font-bold tracking-tight uppercase">
            I N T E R L I N K
          </h1>
          <Link
            href="/login"
            className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10"
          >
            <ArrowLeft className="w-4 h-4" />
            Sign Out
          </Link>
        </header>

        {/* Main Content Area */}
        <main>
          <div className="backdrop-blur-xl bg-slate-900/40 border border-white/10 rounded-3xl p-8 shadow-2xl">
            <h2 className="text-3xl font-semibold mb-2">Welcome back!</h2>
            <p className="text-slate-400 mb-8">
              Your device has been successfully verified.
            </p>

            {/* Заглушки для будущего контента */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="h-48 rounded-2xl border border-white/5 bg-white/5 p-6 flex flex-col justify-center items-center text-center">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center mb-4">
                  👤
                </div>
                <h3 className="font-medium text-lg">Personal Info</h3>
                <p className="text-sm text-slate-500 mt-1">
                  Manage your personal data
                </p>
              </div>

              <div className="h-48 rounded-2xl border border-white/5 bg-white/5 p-6 flex flex-col justify-center items-center text-center">
                <div className="w-12 h-12 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center mb-4">
                  🛡️
                </div>
                <h3 className="font-medium text-lg">Security Settings</h3>
                <p className="text-sm text-slate-500 mt-1">
                  Update your password and 2FA
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
