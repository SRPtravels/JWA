"use client";

import { useState, useEffect } from "react";
import { Trash2, Plus, RefreshCw, AlertCircle, Lock, Eye, EyeOff, LogOut } from "lucide-react";

// ─── Login / Forgot Password Screen ───────────────────────────────────────────
function LoginScreen({ onLogin }: { onLogin: () => void }) {
    const [view, setView] = useState<"login" | "forgot">("login");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [newPassword, setNewPassword] = useState("");

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);
        try {
            const res = await fetch("/api/admin/auth", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ password }),
            });
            const data = await res.json();
            if (data.success) {
                sessionStorage.setItem("admin_auth", "true");
                onLogin();
            } else {
                setError("Incorrect password. Please try again.");
            }
        } catch {
            setError("Could not connect. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleForgotPassword = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);
        try {
            const res = await fetch("/api/admin/forgot-password", { method: "POST" });
            const data = await res.json();
            if (data.success) {
                setNewPassword(data.newPassword);
            } else {
                setError("Could not reset password. Please try again.");
            }
        } catch {
            setError("Could not connect. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 w-full max-w-md p-8">
                <div className="flex flex-col items-center mb-8">
                    <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center mb-4">
                        <Lock className="w-7 h-7 text-white" />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900">
                        {view === "login" ? "Admin Login" : "Reset Password"}
                    </h1>
                    <p className="text-gray-500 text-sm mt-1">
                        {view === "login" ? "Enter your password to access the dashboard" : "A new password will be generated for you"}
                    </p>
                </div>

                {error && (
                    <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
                        <span className="text-red-700 text-sm">{error}</span>
                    </div>
                )}

                {view === "login" ? (
                    <form onSubmit={handleLogin} className="flex flex-col gap-4">
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter password"
                                required
                                className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all text-gray-900"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
                                tabIndex={-1}
                            >
                                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-3 bg-black hover:bg-gray-800 text-white font-semibold rounded-xl transition-colors disabled:opacity-60"
                        >
                            {loading ? "Checking..." : "Login"}
                        </button>
                        <button
                            type="button"
                            onClick={() => { setView("forgot"); setError(""); setNewPassword(""); }}
                            className="text-sm text-gray-500 hover:text-black transition-colors text-center"
                        >
                            Forgot Password?
                        </button>
                    </form>
                ) : (
                    <div className="flex flex-col gap-4">
                        {newPassword ? (
                            <div className="p-4 bg-green-50 border border-green-200 rounded-xl text-center">
                                <p className="text-green-700 text-sm font-medium mb-2">Your new password is:</p>
                                <p className="text-2xl font-bold text-green-900 tracking-widest font-mono">{newPassword}</p>
                                <p className="text-green-600 text-xs mt-2">Save this password somewhere safe!</p>
                            </div>
                        ) : (
                            <form onSubmit={handleForgotPassword}>
                                <p className="text-gray-600 text-sm mb-4 text-center">
                                    Click below to generate a new password. Your current password will be replaced.
                                </p>
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full py-3 bg-black hover:bg-gray-800 text-white font-semibold rounded-xl transition-colors disabled:opacity-60"
                                >
                                    {loading ? "Generating..." : "Generate New Password"}
                                </button>
                            </form>
                        )}
                        <button
                            type="button"
                            onClick={() => { setView("login"); setError(""); setNewPassword(""); }}
                            className="text-sm text-gray-500 hover:text-black transition-colors text-center"
                        >
                            ← Back to Login
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

// ─── Admin Dashboard ───────────────────────────────────────────────────────────
function AdminDashboard({ onLogout }: { onLogout: () => void }) {
    const [videos, setVideos] = useState<string[]>([]);
    const [newUrl, setNewUrl] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [successMsg, setSuccessMsg] = useState("");

    const fetchVideos = async () => {
        setLoading(true);
        setError("");
        try {
            const res = await fetch("/api/videos", {
                cache: 'no-store',
                headers: { 'Cache-Control': 'no-cache', 'Pragma': 'no-cache' }
            });
            if (!res.ok) throw new Error("Failed to fetch videos");
            const data = await res.json();
            setVideos(data.videos || []);
        } catch {
            setError("Could not load videos. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { fetchVideos(); }, []);

    const formatYouTubeUrl = (url: string) => {
        try {
            if (url.includes("youtube.com/embed/")) return url;
            let videoId = "";
            if (url.includes("youtu.be/")) {
                videoId = url.split("youtu.be/")[1]?.split("?")[0];
            } else if (url.includes("youtube.com/watch")) {
                const urlParams = new URLSearchParams(new URL(url).search);
                videoId = urlParams.get("v") || "";
            }
            if (videoId) return `https://www.youtube.com/embed/${videoId}`;
            return url;
        } catch {
            return url;
        }
    };

    const handleAddVideo = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newUrl) return;
        setError(""); setSuccessMsg("");
        const formattedUrl = formatYouTubeUrl(newUrl);
        try {
            const res = await fetch("/api/videos", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ url: formattedUrl }),
            });
            if (!res.ok) throw new Error();
            const data = await res.json();
            setVideos(data.videos);
            setNewUrl("");
            setSuccessMsg("Video added successfully!");
            setTimeout(() => setSuccessMsg(""), 3000);
        } catch {
            setError("Failed to add video. Please ensure the URL is correct.");
        }
    };

    const handleDeleteVideo = async (urlToDelete: string) => {
        setError(""); setSuccessMsg("");
        try {
            const res = await fetch("/api/videos", {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ url: urlToDelete }),
            });
            if (!res.ok) throw new Error();
            const data = await res.json();
            setVideos(data.videos);
            setSuccessMsg("Video removed successfully!");
            setTimeout(() => setSuccessMsg(""), 3000);
        } catch {
            setError("Failed to remove video.");
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 pt-32 pb-24">
            <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
                        <p className="text-gray-500 mt-1">Manage the Live Operations video feed.</p>
                    </div>
                    <div className="flex gap-3">
                        <button
                            onClick={fetchVideos}
                            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors shadow-sm"
                        >
                            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                            Refresh
                        </button>
                        <button
                            onClick={onLogout}
                            className="flex items-center gap-2 px-4 py-2 bg-black border border-black rounded-lg text-sm font-medium text-white hover:bg-gray-800 transition-colors shadow-sm"
                        >
                            <LogOut className="w-4 h-4" />
                            Logout
                        </button>
                    </div>
                </div>

                {error && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                        <span className="text-red-800">{error}</span>
                    </div>
                )}
                {successMsg && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-green-500 text-white flex items-center justify-center shrink-0 mt-0.5 text-xs">✓</div>
                        <span className="text-green-800">{successMsg}</span>
                    </div>
                )}

                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mb-8">
                    <div className="p-6 border-b border-gray-100 bg-gray-50/50">
                        <h2 className="text-lg font-semibold text-gray-900 mb-4">Add New YouTube Video</h2>
                        <form onSubmit={handleAddVideo} className="flex flex-col sm:flex-row gap-4">
                            <input
                                type="url"
                                required
                                value={newUrl}
                                onChange={(e) => setNewUrl(e.target.value)}
                                placeholder="Paste YouTube link here..."
                                className="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                            />
                            <button
                                type="submit"
                                className="px-6 py-3 bg-black hover:bg-gray-800 text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 shadow-md w-full sm:w-auto"
                            >
                                <Plus className="w-5 h-5" />
                                Add Video
                            </button>
                        </form>
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                    <div className="px-6 py-5 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                        <h2 className="text-lg font-semibold text-gray-900">Active Video Feed</h2>
                        <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full">
                            {videos.length} Total
                        </span>
                    </div>
                    <div className="p-6">
                        {loading ? (
                            <div className="py-12 flex justify-center">
                                <RefreshCw className="w-8 h-8 text-blue-500 animate-spin" />
                            </div>
                        ) : videos.length === 0 ? (
                            <div className="text-center py-12">
                                <p className="text-gray-500 mb-2">No videos currently in the feed.</p>
                                <p className="text-sm text-gray-400">Add a YouTube link above to get started.</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {videos.map((url, idx) => (
                                    <div key={idx} className="group relative border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                        <div className="aspect-video w-full bg-gray-100">
                                            <iframe
                                                src={url}
                                                className="w-full h-full"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            />
                                        </div>
                                        <div className="p-4 bg-white flex justify-between items-center">
                                            <span className="text-xs text-gray-500 truncate max-w-[80%]">{url}</span>
                                            <button
                                                onClick={() => handleDeleteVideo(url)}
                                                className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                                                title="Remove Video"
                                            >
                                                <Trash2 className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

// ─── Main Page ─────────────────────────────────────────────────────────────────
export default function AdminPage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        // Check if already authenticated in this browser session
        const auth = sessionStorage.getItem("admin_auth");
        if (auth === "true") setIsLoggedIn(true);
        setChecked(true);
    }, []);

    const handleLogout = () => {
        sessionStorage.removeItem("admin_auth");
        setIsLoggedIn(false);
    };

    if (!checked) return null; // Avoid flash

    return isLoggedIn
        ? <AdminDashboard onLogout={handleLogout} />
        : <LoginScreen onLogin={() => setIsLoggedIn(true)} />;
}
