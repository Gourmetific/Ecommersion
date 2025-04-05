import { useState } from "react";
import YouTube from "react-youtube";

const videos = {
  CJ: [
    { title: "CJ Video 1", id: "video_id_1" },
    { title: "CJ Video 2", id: "video_id_2" },
  ],
  DSERS: [
    { title: "DSERS Video 1", id: "video_id_3" },
    { title: "DSERS Video 2", id: "video_id_4" },
  ],
  EPROLO: [
    { title: "EPROLO Video 1", id: "video_id_5" },
    { title: "EPROLO Video 2", id: "video_id_6" },
  ],
};

export default function Egitim() {
  const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("CJ");
  const [selectedVideo, setSelectedVideo] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    if (username === "ecommersion" && password === "egitim") {
      setAuthenticated(true);
      setError("");
    } else {
      setError("Yanlış kullanıcı adı veya şifre");
    }
  };

  if (!authenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow-md">
          <h2 className="text-2xl mb-4">Giriş Yap</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <input
            type="text"
            name="username"
            placeholder="Kullanıcı Adı"
            className="border p-2 mb-4 w-full"
          />
          <input
            type="password"
            name="password"
            placeholder="Şifre"
            className="border p-2 mb-4 w-full"
          />
          <button type="submit" className="bg-blue-500 text-white p-2 w-full">
            Giriş Yap
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="flex">
      <aside className="w-1/4 bg-gray-100 p-4">
        <ul>
          {Object.keys(videos).map((category) => (
            <li key={category}>
              <button
                onClick={() => setSelectedCategory(category)}
                className="text-blue-500"
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </aside>
      <main className="w-3/4 p-4">
        <h1 className="text-2xl mb-4">{selectedCategory} Videoları</h1>
        <ul>
          {videos[selectedCategory].map((video) => (
            <li key={video.id}>
              <button
                onClick={() => setSelectedVideo(video.id)}
                className="text-blue-500"
              >
                {video.title}
              </button>
            </li>
          ))}
        </ul>
        {selectedVideo && (
          <div className="mt-8">
            <YouTube videoId={selectedVideo} />
          </div>
        )}
      </main>
    </div>
  );
}
