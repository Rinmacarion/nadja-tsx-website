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
                    // Deterministic pseudo-random number generator (mulberry32)
                    function mulberry32(seed: number) {
                        return function() {
                            let t = seed += 0x6D2B79F5;
                            t = Math.imul(t ^ t >>> 15, t | 1);
                            t ^= t + Math.imul(t ^ t >>> 7, t | 61);
                            return ((t ^ t >>> 14) >>> 0) / 4294967296;
                        }
                    }

                    // Simple hash function for a string
                    function hashString(str: string) {
                        let hash = 0;
                        for (let i = 0; i < str.length; i++) {
                            hash = ((hash << 5) - hash) + str.charCodeAt(i);
                            hash |= 0; // Convert to 32bit integer
                        }
                        return hash;
                    }

                    // Deterministically randomize date for each comment (static)
                    const randomizedDates = React.useMemo(() => {
                        const start = new Date('2024-06-01T00:00:00');
                        const end = new Date();
                        const startTime = start.getTime();
                        const endTime = end.getTime();
                        return comments.map((comment) => {
                            // If the date is already in ISO format (from a user), use it as is
                            const isUserComment = comment.date && /^\d{4}-\d{2}-\d{2}T/.test(comment.date);
                            if (isUserComment) return new Date(comment.date);
                            // Use author+text as seed for deterministic random
                            const seed = hashString(comment.author + comment.text);
                            const rand = mulberry32(seed)();
                            const randomTime = startTime + rand * (endTime - startTime);
                            return new Date(randomTime);
                        });
                    }, [comments]);
                    />
                </div>
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
                >
                    Post Comment
                </button>
            </form>
                                            {randomizedDates[index].toLocaleString()}
    );
};

export default CommentSection;