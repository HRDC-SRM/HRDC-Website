# Loading Animation Setup Guide

## Overview
This project now includes a video loading animation that displays when the website first loads.

## How to Add Your Video

1. **Place your video file** in the `public/` directory
   - Recommended filename: `loading.mp4`
   - Supported formats: MP4, WebM, OGV
   - Recommended resolution: 1920x1080 or higher
   - Recommended duration: 3-5 seconds

2. **Video Requirements**:
   - Keep file size reasonable (under 10MB for better performance)
   - Use MP4 format for best browser compatibility
   - Ensure the video loops seamlessly
   - Consider using a video that represents your brand/theme

3. **Customization Options**:
   - You can change the video path in `_app.tsx`
   - Adjust loading duration in the `LoadingAnimation` component
   - Modify the loading text overlay in `LoadingAnimation.tsx`

## Current Configuration

- **Loading Duration**: 3 seconds
- **Video Path**: `/loading.mp4`
- **Fallback**: Spinning loader with text if video fails to load
- **Z-Index**: 50 (appears above all other content)

## Example Video Ideas

- Animated logo reveal
- Code typing animation
- Geometric patterns
- Brand colors in motion
- Abstract loading sequences

## Performance Tips

- Compress your video to reduce file size
- Use a short duration (3-5 seconds max)
- Consider providing multiple formats for different browsers
- Test on various devices and connection speeds

## Troubleshooting

If the video doesn't play:
1. Check that the file path is correct
2. Ensure the video format is supported
3. Check browser console for errors
4. The fallback spinner will show if video fails to load
