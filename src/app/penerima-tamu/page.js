"use client"
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function PenerimaTamu() {
  const channelRef = useRef(null);
  const [status, setStatus] = useState("idle");
  const [guestName, setGuestName] = useState('');

  useEffect(() => {
    const channel = new BroadcastChannel("tamu-channel");
    channelRef.current = channel;

    return () => {
      channel.close();
    };
  }, [])

  const handleScanSuccess = (e) => {
    e.preventDefault();

    if (!guestName.trim()) {
      setStatus('Nama tamu tidak boleh kosong!');
      setTimeout(() => setStatus(''), 1000);
      return;
    }

    if (channelRef.current) {
      channelRef.current.postMessage({
        type: "tamu-scan-success",
        guest_name: guestName,
        timestamp: Date.now(),
      });

      setStatus('Berhasil mengumumkan!');
      setGuestName('')
      setTimeout(() => setStatus(''), 3000);
    }
  };

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
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <form onSubmit={handleScanSuccess} className="flex flex-col items-center gap-4 w-full max-w-sm">
          <input type="text"
                 value={guestName}
                 onChange={(e) => setGuestName(e.target.value)}
                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                 autoComplete="off"
                 required/>
          <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Announce
          </button>
          </form>
          { status && <p className="mt-4 text-green-600 font-medium">{status}</p>}
        </div>
      </main>
    </div>
  );
}
