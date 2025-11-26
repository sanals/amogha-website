import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

interface VideoPlayerModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title?: string;
}

const VideoPlayerModal: React.FC<VideoPlayerModalProps> = ({
  isOpen,
  onClose,
  videoUrl,
  title,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Check if URL is a local video file (MP4, WebM, etc.)
  const isLocalVideo = (url: string) => {
    return url.endsWith('.mp4') || url.endsWith('.webm') || url.endsWith('.ogg') || url.startsWith('/videos/');
  };

  // Parse YouTube or Vimeo video ID
  const getEmbedUrl = (url: string) => {
    try {
      if (url.includes('youtube.com') || url.includes('youtu.be')) {
        // Extract YouTube ID
        const youtubeRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
        const match = url.match(youtubeRegex);
        if (match && match[1]) {
          return `https://www.youtube.com/embed/${match[1]}?autoplay=1`;
        }
      } else if (url.includes('vimeo.com')) {
        // Extract Vimeo ID
        const vimeoRegex = /vimeo\.com\/(?:video\/)?(\d+)/;
        const match = url.match(vimeoRegex);
        if (match && match[1]) {
          return `https://player.vimeo.com/video/${match[1]}?autoplay=1`;
        }
      }
      // For direct mp4 urls or other formats
      return url;
    } catch (error) {
      console.error("Error parsing video URL:", error);
      return url;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
        >
          <motion.div
            ref={modalRef}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="bg-white dark:bg-neutral-darker rounded-lg shadow-xl w-full max-w-4xl"
          >
            <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
              {title && (
                <h3 className="text-lg font-medium text-neutral-darker dark:text-neutral-light">{title}</h3>
              )}
              <button
                onClick={onClose}
                className="p-2 rounded-full text-neutral-medium hover:text-neutral-darker dark:text-neutral-medium dark:hover:text-neutral-light hover:bg-neutral-light dark:hover:bg-neutral-dark transition-colors"
                aria-label="Close video"
              >
                <FaTimes />
              </button>
            </div>
            <div className="relative pt-[56.25%] w-full">
              {isLocalVideo(videoUrl) ? (
                <video
                  src={videoUrl}
                  className="absolute inset-0 w-full h-full"
                  controls
                  autoPlay
                  title={title || "Video testimonial"}
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <iframe
                  src={getEmbedUrl(videoUrl)}
                  className="absolute inset-0 w-full h-full"
                  title={title || "Video testimonial"}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoPlayerModal;