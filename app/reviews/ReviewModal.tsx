"use client";

import { useState } from "react";
import { client } from '../../sanity/lib/sanity';

export const ReviewModal = () => {
  const [form, setForm] = useState({ name: "", message: "", rating: 5 });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    await client.create({
      _type: "review",
      ...form,
    });
    window.location.reload(); // simple reload
  };

  return (
    <div className="bg-white p-4 rounded shadow space-y-2">
      <h2 className="text-lg font-bold">Leave a Review</h2>
      <input
        placeholder="Your Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="border p-2 w-full"
      />
      <textarea
        placeholder="Message"
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        className="border p-2 w-full"
      />
      <input
        type="number"
        placeholder="Rating (1-5)"
        value={form.rating}
        onChange={(e) => setForm({ ...form, rating: Number(e.target.value) })}
        className="border p-2 w-full"
        min={1}
        max={5}
      />
      <button
        onClick={handleSubmit}
        className="bg-black text-white px-4 py-2"
        disabled={loading}
      >
        {loading ? "Submitting..." : "Submit Review"}
      </button>
    </div>
  );
};
