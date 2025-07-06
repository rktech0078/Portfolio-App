'use client';

export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-white/20">
      <div className="w-16 h-16 rounded-full border-4 border-yellow-400 border-t-transparent animate-spin shadow-xl" />
    </div>
  );
}
