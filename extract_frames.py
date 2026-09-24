import os
import json
import cv2
from PIL import Image

def main():
    video_path = 'portfolio3dscrollerAdvance/assets/videos/clip1_spin.mp4'
    frames_dir = 'portfolio3dscrollerAdvance/frames'
    images_dir = 'portfolio3dscrollerAdvance/assets/images'
    os.makedirs(frames_dir, exist_ok=True)
    os.makedirs(images_dir, exist_ok=True)
    
    cap = cv2.VideoCapture(video_path)
    count = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    print(f"Extracting {count} frames from {video_path}...")
    
    idx = 0
    saved = 0
    while cap.isOpened():
        ret, frame = cap.read()
        if not ret:
            break
        
        # Resize to 1280x720
        frame_resized = cv2.resize(frame, (1280, 720), interpolation=cv2.INTER_AREA)
        rgb = cv2.cvtColor(frame_resized, cv2.COLOR_BGR2RGB)
        im = Image.fromarray(rgb)
        
        if idx == 0:
            im.save(os.path.join(images_dir, 'hero.jpg'), "JPEG", quality=90)
            
        fname = f"frame_{idx + 1:04d}.webp"
        im.save(os.path.join(frames_dir, fname), "WEBP", quality=80, method=4)
        saved += 1
        idx += 1
        if idx % 30 == 0 or idx == count:
            print(f"Saved {idx}/{count} frames...")
            
    cap.release()
    
    manifest = {
        "count": saved,
        "pattern": "frames/frame_%04d.webp",
        "active_clips": 1,
        "status": "Awaiting Clip 2 and Clip 3"
    }
    with open(os.path.join(frames_dir, 'manifest.json'), 'w') as f:
        json.dump(manifest, f, indent=2)
        
    print(f"Done! {saved} frames extracted into {frames_dir}.")

if __name__ == "__main__":
    main()
