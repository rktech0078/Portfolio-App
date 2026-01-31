'use client';
import { useEffect, useState } from 'react';
import { client } from '../../sanity/lib/sanity';
import axios from 'axios';
import { Loader2, Star, Edit3, Trash2, Quote, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Review {
  _id: string;
  name: string;
  message: string;
  rating: number;
  _createdAt?: string;
  createdAt?: string;
}

interface ReviewForm {
  name: string;
  message: string;
  rating: number;
}

// Removing unused StarRatingProps and component if not used

export default function ReviewsPage(): JSX.Element {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [form, setForm] = useState<ReviewForm>({ name: '', message: '', rating: 5 });
  const [editingId, setEditingId] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [deleteLoadingId, setDeleteLoadingId] = useState<string | null>(null);
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const [currentUserName, setCurrentUserName] = useState<string>('');

  const fetchReviews = async (): Promise<void> => {
    try {
      const data: Review[] = await client.fetch(`* [_type == "review"] | order(_createdAt desc)`);
      setReviews(data);
    } catch (err) {
      console.error('Error fetching reviews:', err);
    }
  };

  useEffect(() => {
    fetchReviews();
    const savedUserName = localStorage.getItem('currentUserName');
    if (savedUserName) setCurrentUserName(savedUserName);
  }, []);

  const handleSubmit = async (): Promise<void> => {
    if (!form.name || !form.message || !form.rating) return;
    setLoading(true);

    try {
      if (editingId) {
        await axios.patch(`/api/review/${editingId}`, form);
        setEditingId(null);
      } else {
        await axios.post('/api/review', form);
        localStorage.setItem('currentUserName', form.name);
        setCurrentUserName(form.name);
      }

      setForm({ name: '', message: '', rating: 5 });
      setIsFormOpen(false);
      fetchReviews();
    } catch (err) {
      console.error('Error submitting review:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string): Promise<void> => {
    setDeleteLoadingId(id);
    try {
      await axios.delete(`/api/review/${id}`);
      fetchReviews();
    } catch (err) {
      console.error('Error deleting review:', err);
    } finally {
      setDeleteLoadingId(null);
    }
  };

  const handleEdit = (r: Review): void => {
    setForm({ name: r.name, message: r.message, rating: r.rating });
    setEditingId(r._id);
    setIsFormOpen(true);
  };

  const canUserModify = (reviewName: string): boolean => {
    return !currentUserName || currentUserName === reviewName;
  };

  const getAverageRating = (): string => {
    if (reviews.length === 0) return '0';
    return (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1);
  };

  // Removed unused StarRating component

  // Masonry Layout Logic for 2 columns
  const leftColumnReviews = reviews.filter((_, i) => i % 2 === 0);
  const rightColumnReviews = reviews.filter((_, i) => i % 2 !== 0);

  return (
    <div className="min-h-screen bg-background relative selection:bg-yellow-500/30">

      {/* Sophisticated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-amber-600">Stories</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Voices of those I&apos;ve collaborated with. Real experiences, transparent feedback.
            </p>
          </motion.div>

          {/* ... */}
          {/* ... rest of the code is largely same, just fixing specific errors ... */}

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex gap-4 items-center"
          >
            <div className="text-right hidden md:block">
              <div className="text-3xl font-bold">{getAverageRating()}</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsFormOpen(true)}
              className="bg-foreground text-background px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all flex items-center gap-2 group"
            >
              <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform" />
              Write Review
            </motion.button>
          </motion.div>
        </div>

        {/* Reviews Grid - Masonry */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Left Column */}
          <div className="space-y-8">
            {leftColumnReviews.map((review, idx) => (
              <ReviewCard
                key={review._id}
                review={review}
                idx={idx}
                canModify={canUserModify(review.name)}
                onEdit={() => handleEdit(review)}
                onDelete={() => handleDelete(review._id)}
                isDeleting={deleteLoadingId === review._id}
              />
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-8 md:mt-20">
            {rightColumnReviews.map((review, idx) => (
              <ReviewCard
                key={review._id}
                review={review}
                idx={idx}
                canModify={canUserModify(review.name)}
                onEdit={() => handleEdit(review)}
                onDelete={() => handleDelete(review._id)}
                isDeleting={deleteLoadingId === review._id}
              />
            ))}
          </div>

        </div>

        {reviews.length === 0 && (
          <div className="text-center py-32 opacity-50">
            <div className="text-2xl font-medium mb-2">No reviews yet</div>
            <p>Be the first to leave your feedback.</p>
          </div>
        )}

      </div>

      {/* Review Modal Form */}
      <AnimatePresence>
        {isFormOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            onClick={() => setIsFormOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card w-full max-w-lg rounded-3xl border border-border/40 shadow-2xl p-8 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-500 to-amber-600" />

              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                {editingId ? 'Edit Review' : 'New Review'}
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2 block">Your Name</label>
                  <input
                    className="w-full bg-secondary/50 border border-transparent focus:border-yellow-500/50 focus:bg-background rounded-xl px-4 py-3 outline-none transition-all font-medium"
                    placeholder="e.g. Alex Chen"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2 block">Rating</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        onClick={() => setForm({ ...form, rating: star })}
                        className="p-1 hover:scale-110 transition-transform"
                      >
                        <Star
                          className={`w-8 h-8 ${star <= form.rating ? 'fill-yellow-500 text-yellow-500' : 'text-muted-foreground/30'}`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2 block">Feedback</label>
                  <textarea
                    className="w-full bg-secondary/50 border border-transparent focus:border-yellow-500/50 focus:bg-background rounded-xl px-4 py-3 outline-none transition-all font-medium min-h-[150px] resize-none"
                    placeholder="Share your experience working with me..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    onClick={() => setIsFormOpen(false)}
                    className="flex-1 py-4 rounded-xl font-bold bg-secondary hover:bg-secondary/80 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSubmit}
                    disabled={loading || !form.name || !form.message}
                    className="flex-1 py-4 rounded-xl font-bold bg-yellow-500 hover:bg-yellow-400 text-black shadow-lg hover:shadow-yellow-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                  >
                    {loading ? <Loader2 className="animate-spin" /> : (editingId ? 'Update' : 'Post Review')}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface ReviewCardProps {
  review: Review;
  idx: number;
  canModify: boolean;
  onEdit: () => void;
  onDelete: () => void;
  isDeleting: boolean;
}

function ReviewCard({ review, idx, canModify, onEdit, onDelete, isDeleting }: ReviewCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.1, duration: 0.5 }}
      className="group relative p-8 rounded-3xl bg-secondary/20 hover:bg-secondary/30 border border-white/5 hover:border-white/10 transition-all duration-300 backdrop-blur-sm"
    >
      {/* Quote Icon Background */}
      <Quote className="absolute top-8 right-8 w-12 h-12 text-foreground/5 pointer-events-none" />

      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-500 to-amber-600 flex items-center justify-center text-xl font-bold text-white shadow-lg">
            {review.name.charAt(0).toUpperCase()}
          </div>
          <div>
            <h3 className="font-bold text-lg leading-tight">{review.name}</h3>
            <div className="flex text-yellow-500 gap-0.5 mt-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className={`w-3.5 h-3.5 ${i < review.rating ? 'fill-current' : 'text-muted-foreground/30'}`} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <p className="text-muted-foreground leading-relaxed text-lg mb-6">
        &quot;{review.message}&quot;
      </p>

      <div className="flex justify-between items-end border-t border-white/5 pt-6">
        <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground/50">
          {new Date(review._createdAt || review.createdAt || Date.now()).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
        </span>

        {canModify && (
          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
            <button onClick={onEdit} className="p-2 hover:bg-background rounded-full transition-colors text-muted-foreground hover:text-foreground">
              <Edit3 className="w-4 h-4" />
            </button>
            <button onClick={onDelete} disabled={isDeleting} className="p-2 hover:bg-red-500/10 rounded-full transition-colors text-muted-foreground hover:text-red-500">
              {isDeleting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4" />}
            </button>
          </div>
        )}
      </div>
    </motion.div>
  )
}
