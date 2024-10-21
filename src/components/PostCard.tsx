import React from 'react';
import { MapPin } from 'lucide-react';

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

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={post.image_url} alt={post.title} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
        <p className="text-gray-600 mb-4">{post.content}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500 flex items-center">
            <MapPin size={16} className="mr-1" /> Location tag
          </span>
          <span className="text-sm text-gray-500">By {post.user.username}</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;