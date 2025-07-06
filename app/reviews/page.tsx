'use client';
import { useEffect, useState } from 'react';
import { client } from '../../sanity/lib/sanity';
import axios from 'axios';
import { Loader2, Star, Edit3, Trash2, MessageCircle, User, Calendar, TrendingUp } from 'lucide-react';

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

interface StarRatingProps {
  rating: number;
  interactive?: boolean;
  size?: string;
  onRate?: (rating: number) => void;
}

export default function ReviewsPage(): JSX.Element {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [form, setForm] = useState<ReviewForm>({ name: '', message: '', rating: 5 });
  const [editingId, setEditingId] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [deleteLoadingId, setDeleteLoadingId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [currentUserName, setCurrentUserName] = useState<string>('');

  const fetchReviews = async (): Promise<void> => {
    try {
      const data: Review[] = await client.fetch(`*[_type == "review"] | order(_createdAt desc)`);
      setReviews(data);
    } catch (err) {
      console.error('Error fetching reviews:', err);
    }
  };

  useEffect(() => {
    fetchReviews();
    // Get current user name from localStorage or session
    const savedUserName = localStorage.getItem('currentUserName');
    if (savedUserName) {
      setCurrentUserName(savedUserName);
    }
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
        // Save user name for future reference
        localStorage.setItem('currentUserName', form.name);
        setCurrentUserName(form.name);
      }

      setForm({ name: '', message: '', rating: 5 });
      setShowForm(false);
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
    setShowForm(true);
  };

  const canUserModify = (reviewName: string): boolean => {
    // User can modify if they are the author or if no currentUserName is set (first time user)
    return !currentUserName || currentUserName === reviewName;
  };

  const getAverageRating = (): string => {
    if (reviews.length === 0) return '0';
    return (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1);
  };

  const getRatingDistribution = (): Record<number, number> => {
    const distribution: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    reviews.forEach(r => {
      if (r.rating >= 1 && r.rating <= 5) {
        distribution[r.rating]++;
      }
    });
    return distribution;
  };

  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const StarRating: React.FC<StarRatingProps> = ({ rating, interactive = false, size = 'text-xl', onRate }) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((num) => (
          <Star
            key={num}
            size={size === 'text-xl' ? 20 : 16}
            onClick={() => interactive && onRate && onRate(num)}
            className={`${
              interactive ? 'cursor-pointer hover:scale-110' : ''
            } transition-all duration-200 ${
              rating >= num 
                ? 'text-yellow-400 fill-yellow-400' 
                : 'text-gray-400'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
      <div className="max-w-6xl mx-auto mb-24 mt-10">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-4">
            <MessageCircle className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
            Customer Reviews
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover what our clients say about their experience working with us
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center">
            <div className="text-4xl font-bold text-white mb-2">{reviews.length}</div>
            <div className="text-gray-300">Total Reviews</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-4xl font-bold text-white">{getAverageRating()}</span>
              <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
            </div>
            <div className="text-gray-300">Average Rating</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center">
            <div className="text-4xl font-bold text-white mb-2">
              {reviews.length > 0 ? Math.round((reviews.filter(r => r.rating >= 4).length / reviews.length) * 100) : 0}%
            </div>
            <div className="text-gray-300">Satisfaction Rate</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Review Form Section */}
          <div className="lg:col-span-1">
            <div className="sticky top-6">
              <button
                onClick={() => setShowForm(!showForm)}
                className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold py-4 px-6 rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-105 mb-6"
              >
                {showForm ? 'Hide Form' : 'Write a Review'}
              </button>

              {showForm && (
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20 space-y-4">
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    <Edit3 className="w-6 h-6" />
                    {editingId ? 'Edit Review' : 'New Review'}
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          placeholder="Your Name"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/20 text-white placeholder-gray-400 border border-white/30 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/50 focus:outline-none transition-all duration-200"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Review</label>
                      <textarea
                        placeholder="Share your experience..."
                        className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-gray-400 border border-white/30 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/50 focus:outline-none transition-all duration-200 resize-none"
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Rating</label>
                      <StarRating
                        rating={form.rating}
                        interactive={true}
                        onRate={(rating: number) => setForm({ ...form, rating })}
                      />
                    </div>

                    <button
                      onClick={handleSubmit}
                      disabled={loading || !form.name || !form.message}
                      className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 disabled:from-gray-500 disabled:to-gray-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 disabled:scale-100 flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <Loader2 className="animate-spin w-5 h-5" />
                      ) : (
                        <>
                          {editingId ? 'Update Review' : 'Submit Review'}
                          <TrendingUp className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Reviews List Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-white">All Reviews</h2>
              <div className="text-gray-300">
                {reviews.length} review{reviews.length !== 1 ? 's' : ''}
              </div>
            </div>

            <div className="space-y-6">
              {reviews.map((r: Review, index: number) => (
                <div
                  key={r._id}
                  className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-lg">
                          {r.name.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">{r.name}</h3>
                        <div className="flex items-center gap-2 text-sm text-gray-300">
                          <Calendar className="w-4 h-4" />
                          {formatDate(r._createdAt || r.createdAt || new Date().toISOString())}
                        </div>
                      </div>
                    </div>
                    <StarRating rating={r.rating} />
                  </div>

                  <p className="text-gray-200 mb-4 leading-relaxed">{r.message}</p>

                  <div className="flex gap-3">
                    {canUserModify(r.name) && (
                      <button
                        className="px-4 py-2 rounded-xl bg-white/20 hover:bg-white/30 border border-white/30 text-white font-medium transition-all duration-200 flex items-center gap-2 hover:scale-105"
                        onClick={() => handleEdit(r)}
                      >
                        <Edit3 className="w-4 h-4" />
                        Edit
                      </button>
                    )}
                    {canUserModify(r.name) && (
                      <button
                        className="px-4 py-2 rounded-xl bg-red-500/80 hover:bg-red-500 text-white font-medium transition-all duration-200 flex items-center gap-2 hover:scale-105"
                        onClick={() => handleDelete(r._id)}
                        disabled={deleteLoadingId === r._id}
                      >
                        {deleteLoadingId === r._id ? (
                          <Loader2 className="animate-spin w-4 h-4" />
                        ) : (
                          <>
                            <Trash2 className="w-4 h-4" />
                            Delete
                          </>
                        )}
                      </button>
                    )}
                    {!canUserModify(r.name) && (
                      <div className="px-4 py-2 rounded-xl bg-gray-600/50 text-gray-400 text-sm">
                        Only author can modify this review
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {reviews.length === 0 && (
              <div className="text-center py-12">
                <MessageCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-300 mb-2">No reviews yet</h3>
                <p className="text-gray-400">Be the first to share your experience!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}