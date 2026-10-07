"use client"
import { useEffect, useRef, useState } from "react";

export default function Kamera() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [photoUrl, setPhotoUrl] = useState(null);
  const [photoUrlArray, setPhotoUrlArray] = useState([]);
  const [hasPermission, setHasPermission] = useState(false);

  const startCamera = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment"} });

    if (videoRef.current) {
      videoRef.current.srcObject = stream;
      setHasPermission(true);
    }
  };

    // Fungsi untuk mengambil jepretan foto
    const takePhoto = () => {
        if (!videoRef.current || !canvasRef.current) return;

        const video = videoRef.current;
        const canvas = canvasRef.current;

        // Setel ukuran canvas sama dengan resolusi video asli
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        const ctx = canvas.getContext('2d');

        // Terapkan filter di level Canvas sebelum menggambar gambar
        // Ini memastikan foto yang disimpan benar-benar memiliki filter, bukan sekadar efek visual di layar
        ctx.filter = "contrast(1.2) sepia(0.3) saturate(0.8)";

        // Menggambar frame video saat ini ke dalam canvas
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

        // Mengambil hasil akhir dari canvas menjadi URL gambar (Data URL)
        const dataUrl = canvas.toDataURL('image/jpeg', 0.8);
        setPhotoUrl(dataUrl);
        setPhotoUrlArray([...photoUrlArray, dataUrl]);

        // TODO: Simpan 'dataUrl' ke IndexedDB secara offline, lalu upload ke server
    };

  useEffect(() => {
    startCamera();

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const tracks = videoRef.current.srcObject.getTracks();
        tracks.forEach(track => track.stop());
      }
    }
  }, []);

  return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: '#222', minHeight: '100vh', padding: '20px' }}>

          {/* Tampilan Live Kamera dengan Filter CSS */}
          <div style={{ position: 'relative', width: '100%', maxWidth: '400px', overflow: 'hidden', borderRadius: '12px' }}>
              <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  style={{
                      width: '100%',
                      height: 'auto',
                      /* Menerapkan filter CSS secara live (hanya pratinjau visual) */
                      filter: 'contrast(1.2) sepia(0.3) saturate(0.8)'
                  }}
              />
          </div>

          <button
              onClick={takePhoto}
              disabled={!hasPermission}
              style={{ marginTop: '20px', padding: '15px 30px', borderRadius: '50px', background: '#ff4b4b', color: '#fff', border: 'none', fontSize: '18px', fontWeight: 'bold' }}
          >
              📸 Jepret!
          </button>

          {/* Tersembunyi: Canvas digunakan hanya untuk proses penyimpanan gambar */}
          <canvas ref={canvasRef} style={{ display: 'none' }} />

          {/* Menampilkan Pratinjau Hasil Foto */}
          {photoUrlArray.length > 0 && (
              <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
                  {photoUrlArray.map((url, index) => (
                      <li key={index} style={{ marginBottom: '10px' }}>
                          <img src={url} alt={`Pratinjau ${index}`} style={{ width: '100%', maxWidth: '300px', borderRadius: '8px' }} />
                      </li>
                  ))}
              </ul>
          )}
      </div>
  );
};
