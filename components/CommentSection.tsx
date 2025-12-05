import React, { useState } from 'react';
import { BlogPost } from '../types';

interface CommentSectionProps {
    postId: string;
    comments: BlogPost['comments'];
    onCommentSubmit: (postId: string, comment: { author: string; text: string; date: string }) => void;
}

const CommentSection: React.FC<CommentSectionProps> = ({ postId, comments, onCommentSubmit }) => {
    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (author && text) {
            const newComment = {
                author,
                text,
                date: new Date().toISOString(),
            };
            onCommentSubmit(postId, newComment);
            setAuthor('');
            setText('');
        }
    };

    return (
        <div className="mt-8">
            <h3 className="text-2xl font-bold mb-4">Comments</h3>
            <div className="space-y-4 mb-6">
                {comments.map((comment, index) => (
                    <div key={index} className="p-4 border rounded-lg bg-gray-50">
                        <p className="font-bold">{comment.author}</p>
                        <p className="text-sm text-gray-500 mb-1">
                            {new Date(comment.date).toLocaleString()}
                        </p>
                        <p>{comment.text}</p>
                    </div>
                ))}
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="author" className="block text-sm font-medium text-gray-700">
                        Name
                    </label>
                    <input
                        type="text"
                        id="author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
                        Comment
                    </label>
                    <textarea
                        id="comment"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        rows={4}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
                >
                    Post Comment
                </button>
            </form>
        </div>
    );
};

export default CommentSection;