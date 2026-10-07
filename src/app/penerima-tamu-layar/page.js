"use client"
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function LayarPenerimaTamu() {
  const channelRef = useRef(null);
  const [guestName, setGuestName] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const channel = new BroadcastChannel("tamu-channel");
    channelRef.current = channel;

    channel.onmessage = (event) => {
      const { type, guest_name, timestamp } = event.data;
      if (type === "tamu-scan-success") {
        setGuestName(guest_name);
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 4000);
      }
    }

    return () => {
      channel.close();
    }
  })

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main
          className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
            className="dark:invert h-5 w-[100px]"
            src="/next.svg"
            alt="Next.js logo"
            width={100}
            height={20}
            priority
        />
      </main>
      <div className="relative w-full h-screen bg-gray-900 overflow-hidden flex items-center justify-center">
        <h1 className="absolute top-10 text-gray-500 text-xl">Layar Proyektor Utama</h1>

        {/* Objek Animasi menggunakan Tailwind CSS untuk transisi */}
        <div
            className={`absolute px-10 py-6 bg-gradient-to-r from-yellow-400 to-yellow-200 text-gray-900 text-4xl font-bold rounded-2xl shadow-[0_0_40px_rgba(250,204,21,0.6)] transition-all duration-1000 ease-in-out ${
                isAnimating
                    ? 'left-1/2 -translate-x-1/2 opacity-100 scale-100' // Posisi di tengah layar (masuk)
                    : '-left-full -translate-x-full opacity-0 scale-50' // Posisi tersembunyi di kiri (keluar/reset)
            }`}
        >
          Selamat Datang, <br /> {guestName}!
        </div>
      </div>
    </div>
  );
}
