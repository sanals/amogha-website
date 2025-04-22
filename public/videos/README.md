# AMOGHA The Ayur Hub - Video Assets

This directory contains all video assets for the AMOGHA website. Please follow these guidelines for adding and managing videos.

## Development Note

Empty directories have been created for video content using the `scripts/download-sample-images.js` script:
- `/testimonials` - For patient testimonial videos
- `/treatments` - For treatment demonstration videos

**For development purposes:** You can add your own sample MP4 files, or use YouTube embeds in the application code instead of hosting videos directly.

## Directory Structure

```
/videos
├── testimonials/    # Video testimonials from patients
└── treatments/      # Videos showcasing treatment procedures
```

## Video Guidelines

### General Requirements

- **File formats**: Use `.mp4` (H.264) as primary format for broad compatibility
- **Resolution**: 1080p (1920×1080) maximum
- **Duration**: 
  - Testimonials: 30-90 seconds
  - Treatments: 1-3 minutes
- **File size**: Keep under 10MB when possible, use compression
- **Naming convention**: Use kebab-case (e.g., `panchakarma-treatment.mp4`)

### Specific Guidelines

#### Testimonial Videos
- Include patient name and treatment in filename
- Ensure patient has signed release form
- Maintain consistent branding elements
- Include subtitles in the video if possible

#### Treatment Videos
- Professional lighting and stable camera
- Brief explanations of the treatment procedure
- Show actual treatment when appropriate
- Consider adding AMOGHA watermark

## Best Practices

1. **Video hosting**: Consider using YouTube or Vimeo for large videos and embedding them
2. **Thumbnails**: Create custom thumbnails for videos (store in `/images/testimonials/` or `/images/treatments/`)
3. **Fallback**: Provide a fallback image for users who can't play videos
4. **Autoplay**: Disable autoplay for large videos
5. **Compression**: Use tools like Handbrake to optimize videos
6. **Subtitles**: Consider adding .vtt subtitle files for accessibility

## Adding New Videos

1. Choose the appropriate directory based on video content
2. Compress and optimize before adding
3. Create appropriate thumbnail images
4. If file is large (>10MB), consider hosting externally
5. Test playback on multiple devices 