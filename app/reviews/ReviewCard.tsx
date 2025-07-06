"use client";

import { useState } from "react";
import { client } from "../../sanity/lib/sanity";

type Review = {
  _id: string;
  name: string;
  message: string;
  rating: number;
};

export const ReviewCard = ({ review }: { review: Review }) => {
  const [edit, setEdit] = useState(false);
  const [form, setForm] = useState({ ...review });

  const handleDelete = async () => {
    await client.delete(review._id);
    window.location.reload();
  };

  const handleUpdate = async () => {
    await client
      .patch(review._id)
      .set({ name: form.name, message: form.message, rating: form.rating })
      .commit();
    window.location.reload();
  };

  return (
    <div className="border p-4 rounded shadow">
      {edit ? (
        <>
          <input
            className="border p-1 w-full"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <textarea
            className="border p-1 w-full"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
          <input
            type="number"
            className="border p-1 w-full"
            value={form.rating}
            onChange={(e) =>
              setForm({ ...form, rating: Number(e.target.value) })
            }
          />
          <div className="flex space-x-2 mt-2">
            <button onClick={handleUpdate} className="bg-green-600 px-2 py-1 text-white">Save</button>
            <button onClick={() => setEdit(false)} className="bg-gray-400 px-2 py-1 text-white">Cancel</button>
          </div>
        </>
      ) : (
        <>
          <div className="font-bold">{review.name}</div>
          <div className="text-yellow-500">{"⭐".repeat(review.rating)}</div>
          <div>{review.message}</div>
          <div className="flex space-x-2 mt-2">
            <button onClick={() => setEdit(true)} className="bg-blue-600 px-2 py-1 text-white">Edit</button>
            <button onClick={handleDelete} className="bg-red-600 px-2 py-1 text-white">Delete</button>
          </div>
        </>
      )}
    </div>
  );
};
