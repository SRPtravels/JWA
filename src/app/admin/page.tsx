"use client";

import { useState, useEffect } from "react";
import { Trash2, Plus, RefreshCw, AlertCircle } from "lucide-react";

export default function AdminPage() {
    const [videos, setVideos] = useState<string[]>([]);
    const [newUrl, setNewUrl] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [successMsg, setSuccessMsg] = useState("");

    // Fetch videos on mount
    const fetchVideos = async () => {
        setLoading(true);
        setError("");
        try {
            const res = await fetch("https://jayalakshmiwateragency.vercel.app/api/videos", {
                cache: 'no-store',
                headers: {
                    'Cache-Control': 'no-cache',
                    'Pragma': 'no-cache'
                }
            });
            if (!res.ok) throw new Error("Failed to fetch videos");
            const data = await res.json();
            setVideos(data.videos || []);
        } catch (err) {
            setError("Could not load videos. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchVideos();
    }, []);

    // Format YouTube URL to an embed URL if needed
    const formatYouTubeUrl = (url: string) => {
        try {
            // If it's already an embed URL, return it
            if (url.includes("youtube.com/embed/")) return url;

            let videoId = "";
            if (url.includes("youtu.be/")) {
                videoId = url.split("youtu.be/")[1]?.split("?")[0];
            } else if (url.includes("youtube.com/watch")) {
                const urlParams = new URLSearchParams(new URL(url).search);
                videoId = urlParams.get("v") || "";
            }

            if (videoId) {
                return `https://www.youtube.com/embed/${videoId}`;
            }
            return url;
        } catch (e) {
            return url;
        }
    };

    const handleAddVideo = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newUrl) return;

        setError("");
        setSuccessMsg("");

        const formattedUrl = formatYouTubeUrl(newUrl);

        try {
            const res = await fetch("https://jayalakshmiwateragency.vercel.app/api/videos", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ url: formattedUrl }),
            });

            if (!res.ok) throw new Error("Failed to add video");

            const data = await res.json();
            setVideos(data.videos);
            setNewUrl("");
            setSuccessMsg("Video added successfully!");
            setTimeout(() => setSuccessMsg(""), 3000);
        } catch (err) {
            setError("Failed to add video. Please ensure the URL is correct.");
        }
    };

    const handleDeleteVideo = async (urlToDelete: string) => {
        setError("");
        setSuccessMsg("");

        try {
            const res = await fetch("https://jayalakshmiwateragency.vercel.app/api/videos", {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ url: urlToDelete }),
            });

            if (!res.ok) throw new Error("Failed to delete video");

            const data = await res.json();
            setVideos(data.videos);
            setSuccessMsg("Video removed successfully!");
            setTimeout(() => setSuccessMsg(""), 3000);
        } catch (err) {
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
                    <button
                        onClick={fetchVideos}
                        className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors shadow-sm"
                    >
                        <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                        Refresh Feed
                    </button>
                </div>

                {error && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                        <span className="text-red-800">{error}</span>
                    </div>
                )}

                {successMsg && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-green-500 text-white flex items-center justify-center shrink-0 mt-0.5">✓</div>
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
