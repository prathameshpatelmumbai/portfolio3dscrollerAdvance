import os
import json
import cv2
import numpy as np
from PIL import Image

def extract_and_crossfade():
    clip1_path = 'portfolio3dscrollerAdvance/assets/videos/clip1_spin.mp4'
    clip2_path = 'portfolio3dscrollerAdvance/assets/videos/clip2_seedance.mp4'
    frames_dir = 'portfolio3dscrollerAdvance/frames'
    images_dir = 'portfolio3dscrollerAdvance/assets/images'
    os.makedirs(frames_dir, exist_ok=True)
    os.makedirs(images_dir, exist_ok=True)

    target_w, target_h = 1280, 720

    print("Opening Clip 1:", clip1_path)
    cap1 = cv2.VideoCapture(clip1_path)
    c1_frames = []
    while cap1.isOpened():
        ret, frame = cap1.read()
        if not ret:
            break
        # Resize to target 16:9
        resized = cv2.resize(frame, (target_w, target_h), interpolation=cv2.INTER_AREA)
        c1_frames.append(resized)
    cap1.release()
    print(f"Loaded {len(c1_frames)} frames from Clip 1")

    print("Opening Clip 2:", clip2_path)
    cap2 = cv2.VideoCapture(clip2_path)
    c2_frames = []
    while cap2.isOpened():
        ret, frame = cap2.read()
        if not ret:
            break
        # Resize to target 16:9 (from 854x480 to 1280x720)
        resized = cv2.resize(frame, (target_w, target_h), interpolation=cv2.INTER_LANCZOS4)
        c2_frames.append(resized)
    cap2.release()
    print(f"Loaded {len(c2_frames)} frames from Clip 2")

    if not c1_frames or not c2_frames:
        print("Error: Could not load frames from one or both clips!")
        return

    # Splicing configuration
    # 16-frame cross-fade transition
    TRANSITION_FRAMES = 16
    
    # Clip 1 prefix (before transition)
    c1_pure_count = len(c1_frames) - TRANSITION_FRAMES
    master_frames = []

    # 1. Pure Clip 1 frames
    for i in range(c1_pure_count):
        master_frames.append(c1_frames[i])

    # 2. Cross-fade frames between Clip 1 end and Clip 2 start
    print(f"Cross-fading {TRANSITION_FRAMES} frames...")
    for t in range(TRANSITION_FRAMES):
        alpha = (t + 1) / float(TRANSITION_FRAMES + 1)
        f1 = c1_frames[c1_pure_count + t]
        f2 = c2_frames[t]
        blended = cv2.addWeighted(f1, 1.0 - alpha, f2, alpha, 0.0)
        master_frames.append(blended)

    # 3. Clip 2 frames (from transition onwards)
    # Clip 2 has 241 frames. To keep scrubbing responsive, we can include all remaining frames
    for j in range(TRANSITION_FRAMES, len(c2_frames)):
        master_frames.append(c2_frames[j])

    total_frames = len(master_frames)
    print(f"Master sequence has {total_frames} total frames.")

    # Save to WebP
    print("Writing WebP frames...")
    for idx, frame_bgr in enumerate(master_frames):
        rgb = cv2.cvtColor(frame_bgr, cv2.COLOR_BGR2RGB)
        im = Image.fromarray(rgb)

        if idx == 0:
            im.save(os.path.join(images_dir, 'hero.jpg'), "JPEG", quality=92)

        fname = f"frame_{idx + 1:04d}.webp"
        im.save(os.path.join(frames_dir, fname), "WEBP", quality=82, method=4)

        if (idx + 1) % 50 == 0 or (idx + 1) == total_frames:
            print(f"Exported {idx + 1}/{total_frames} frames...")

    # Manifest metadata
    clip1_fraction = c1_pure_count / float(total_frames)
    transition_fraction = (c1_pure_count + TRANSITION_FRAMES) / float(total_frames)

    manifest = {
        "count": total_frames,
        "pattern": "frames/frame_%04d.webp",
        "active_clips": 2,
        "clip1_end_frame": c1_pure_count,
        "clip2_start_frame": c1_pure_count + TRANSITION_FRAMES,
        "clip1_fraction": round(clip1_fraction, 4),
        "transition_fraction": round(transition_fraction, 4),
        "status": "Clips 1 and 2 active. Ready for Clip 3."
    }

    with open(os.path.join(frames_dir, 'manifest.json'), 'w') as f:
        json.dump(manifest, f, indent=2)

    print(f"Done! Manifest generated with {total_frames} frames.")

if __name__ == "__main__":
    extract_and_crossfade()
