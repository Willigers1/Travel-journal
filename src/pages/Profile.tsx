import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import PostCard from '../components/PostCard';

interface Post {
  id: number;
  title: string;
  content: string;
  image_url: string;
  user: {
    id: number;
    username: string;
  };
}

const Profile: React.FC = () => {
  const { user } = useAuth();
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    // TODO: Fetch user's posts from backend
    const fetchUserPosts = async () => {
      // Mock data for now
      const mockPosts: Post[] = [
        {
          id: 1,
          title: 'My trip to Tokyo',
          content: 'Exploring the bustling streets of Tokyo was an unforgettable experience...',
          image_url: 'https://source.unsplash.com/random/800x600/?tokyo',
          user: { id: user?.id || 0, username: user?.username || '' },
        },
        {
          id: 2,
          title: 'Beach paradise in Bali',
          content: 'The crystal clear waters and white sandy beaches of Bali were simply breathtaking...',
          image_url: 'https://source.unsplash.com/random/800x600/?bali,beach',
          user: { id: user?.id || 0, username: user?.username || '' },
        },
      ];
      setPosts(mockPosts);
    };

    if (user) {
      fetchUserPosts();
    }
  }, [user]);

  if (!user) {
    return <div>Please log in to view your profile.</div>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Your Profile</h2>
      <div className="mb-6">
        <p className="text-lg"><strong>Username:</strong> {user.username}</p>
        <p className="text-lg"><strong>Email:</strong> {user.email}</p>
      </div>
      <h3 className="text-xl font-semibold mb-4">Your Posts</h3>
      {posts.length === 0 ? (
        <p>You haven't created any posts yet.</p>
      ) : (
        <div className="space-y-6">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Profile;