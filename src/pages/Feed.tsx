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

const Feed: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    // TODO: Fetch posts from followed users
    const fetchPosts = async () => {
      // Mock data for now
      const mockPosts: Post[] = [
        {
          id: 1,
          title: 'Amazing trip to Paris',
          content: 'I had a wonderful time exploring the city of lights...',
          image_url: 'https://source.unsplash.com/random/800x600/?paris',
          user: { id: 2, username: 'traveler123' },
        },
        {
          id: 2,
          title: 'Hiking in the Swiss Alps',
          content: 'The views were breathtaking and the air was so fresh...',
          image_url: 'https://source.unsplash.com/random/800x600/?swiss,alps',
          user: { id: 3, username: 'mountainlover' },
        },
      ];
      setPosts(mockPosts);
    };

    fetchPosts();
  }, []);

  if (!user) {
    return (
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Welcome to Travel Experience Journal</h2>
        <p>Please log in or register to see posts from travelers you follow.</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Your Travel Feed</h2>
      {posts.length === 0 ? (
        <p>No posts to show. Start following some travelers!</p>
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

export default Feed;