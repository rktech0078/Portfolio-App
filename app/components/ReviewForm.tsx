'use client';
import { useState } from 'react';

type Review = {
  name: string;
  message: string;
};

export default function ReviewForm({
  onReviewAdded,
}: {
  onReviewAdded: (review: Review) => void;
}) {
  const [form, setForm] = useState<Review>({ name: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/submitReview', {
        method: 'POST',
        body: JSON.stringify(form),
      });

      const result = await res.json();

      if (result.success) {
        setStatus('success');
        setForm({ name: '', message: '' });
        onReviewAdded(result.data as Review);
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }

    setTimeout(() => setStatus('idle'), 2000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-4 bg-white/30 backdrop-blur rounded-xl shadow-md"
    >
      <input
        type="text"
        placeholder="Your Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="w-full px-4 py-2 border rounded"
        required
        disabled={status === 'loading'}
      />
      <textarea
        placeholder="Your Review"
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        className="w-full px-4 py-2 border rounded"
        required
        disabled={status === 'loading'}
      ></textarea>
      <button
        type="submit"
        className="bg-yellow-400 hover:bg-yellow-500 px-6 py-2 rounded text-white disabled:opacity-50"
        disabled={status === 'loading'}
      >
        {status === 'loading' ? 'Submitting...' : 'Submit'}
      </button>
      {status === 'success' && <p className="text-green-600">Review submitted!</p>}
      {status === 'error' && <p className="text-red-600">Something went wrong.</p>}
    </form>
  );
}
