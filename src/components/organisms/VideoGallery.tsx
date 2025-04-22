import React, { useState } from 'react';
import { motion } from 'framer-motion';
import VideoItem from '../molecules/VideoItem';
import VideoPlayerModal from '../molecules/VideoPlayerModal';

export interface GalleryVideo {
  id: string;
  thumbnailUrl: string;
  videoUrl: string;
  title: string;
  description?: string;
  duration?: string;
  category?: string;
}

interface VideoGalleryProps {
  videos: GalleryVideo[];
  title?: string;
  description?: string;
  className?: string;
}

export const VideoGallery: React.FC<VideoGalleryProps> = ({
  videos,
  title = 'Our Video Gallery',
  description = 'Watch videos showcasing our clinic, treatments, and patient testimonials',
  className = '',
}) => {
  const [videoPlayerOpen, setVideoPlayerOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState<GalleryVideo | null>(null);

  const handleVideoClick = (id: string) => {
    const video = videos.find(v => v.id === id);
    if (video) {
      setCurrentVideo(video);
      setVideoPlayerOpen(true);
    }
  };

  const closeVideoPlayer = () => {
    setVideoPlayerOpen(false);
  };

  return (
    <section className={`py-12 ${className}`}>
      <div className="container mx-auto px-4">
        {(title || description) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            {title && (
              <h2 className="text-3xl md:text-4xl font-serif text-neutral-darker dark:text-neutral-light mb-4">
                <span className="text-primary dark:text-primary-light">{title.split(' ')[0]}</span>
                <span> {title.split(' ').slice(1).join(' ')}</span>
              </h2>
            )}
            {description && (
              <p className="text-neutral-dark dark:text-neutral-medium">
                {description}
              </p>
            )}
          </motion.div>
        )}

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {videos.map((video) => (
            <VideoItem
              key={video.id}
              id={video.id}
              thumbnailUrl={video.thumbnailUrl}
              title={video.title}
              description={video.description}
              duration={video.duration}
              videoUrl={video.videoUrl}
              onClick={handleVideoClick}
              className=""
            />
          ))}
        </div>

        {/* Video Player Modal */}
        {currentVideo && (
          <VideoPlayerModal
            isOpen={videoPlayerOpen}
            onClose={closeVideoPlayer}
            videoUrl={currentVideo.videoUrl}
            title={currentVideo.title}
          />
        )}
      </div>
    </section>
  );
};

export default VideoGallery; 