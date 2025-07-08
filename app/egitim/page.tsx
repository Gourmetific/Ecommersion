"use client";

import { useState } from "react";
import YouTube from "react-youtube";

const videos = {
  CJ: [
    { title: "How To Fulfill Orders on CJ", id: "nSUicl6Kuhc" },
    { title: "How To Combine Order on CJ", id: "OVTjty7Qxn0" },
    { title: "How To Split Order on CJ", id: "8W3SPgibzc0" },
  ],
  DSERS: [
    { title: "How To Fulfill US Orders from Dsers", id: "11lsRv90848" },
    { title: "How To Fulfill EU Orders from Dsers", id: "Z608PYqRL_8" },
  ],
  EPROLO: [
    { title: "How To Fulfill US Orders from EPROLO", id: "OCxq5bEEuqw" },
  ],
};

const pdfUrl = "/instruction.pdf";

export default function Egitim() {
  const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState<keyof typeof videos>("CJ");
  const [selectedVideo, setSelectedVideo] = useState("");
  const [selectedPdf, setSelectedPdf] = useState("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = (e.target as HTMLFormElement).username.value;
    const password = (e.target as HTMLFormElement).password.value;

    if (username === "ecommersion" && password === "egitim") {
      setAuthenticated(true);
      setError("");
    } else {
      setError("Yanlış kullanıcı adı veya şifre");
    }
  };

  if (!authenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <form
          onSubmit={handleLogin}
          className="bg-white p-8 rounded-lg shadow-lg"
        >
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
            Giriş Yap
          </h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <input
            type="text"
            name="username"
            placeholder="Kullanıcı Adı"
            className="border p-3 mb-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            name="password"
            placeholder="Şifre"
            className="border p-3 mb-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white p-3 w-full rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Giriş Yap
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <aside className="w-1/4 bg-white p-6 border-r border-gray-200 shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Categories</h2>
        <ul>
          {Object.keys(videos).map((category) => (
            <li key={category} className="mb-4">
              <button
                onClick={() =>
                  setSelectedCategory(category as keyof typeof videos)
                }
                className={`text-lg font-semibold ${
                  selectedCategory === category
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-500"
                }`}
              >
                {category}
              </button>
              <ul className="ml-4 mt-2">
                {videos[category as keyof typeof videos].map((video) => (
                  <li key={video.id} className="mb-2">
                    <button
                      onClick={() => setSelectedVideo(video.id)}
                      className="text-sm text-gray-600 hover:text-blue-500"
                    >
                      {video.title}
                    </button>
                  </li>
                ))}
              </ul>
            </li>
          ))}
          <li className="mb-4">
            <button
              onClick={() => setSelectedPdf(pdfUrl)}
              className="text-lg font-semibold text-gray-700 hover:text-blue-500"
            >
              Summary
            </button>
          </li>
        </ul>
      </aside>
      <main className="w-3/4 p-8 flex flex-col items-center justify-center">
        {selectedVideo ? (
          <div className="w-full max-w-4xl">
            <YouTube
              videoId={selectedVideo}
              opts={{
                height: "500",
                width: "100%",
                playerVars: {
                  modestbranding: 1,
                  rel: 0,
                  showinfo: 0,
                },
              }}
            />
            <p className="mt-4 text-gray-600 text-center">
              You can ask any question to us via slack.
            </p>
          </div>
        ) : selectedPdf ? (
          <div className="w-full max-w-4xl">
            <iframe
              src={selectedPdf}
              className="w-full h-500"
              title="PDF Viewer"
            />
          </div>
        ) : (
          <p className="text-gray-500 text-lg">Bir video veya PDF seçin</p>
        )}
      </main>
    </div>
  );
}
