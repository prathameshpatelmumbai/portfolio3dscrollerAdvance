import shutil
import os

def sync():
    src_root = 'portfolio3dscrollerAdvance'
    dst_root = r'c:\Users\91797\Desktop\Prathamesh Projects Part1\portfolio3dscrollerAdvance'
    os.makedirs(dst_root, exist_ok=True)

    for f in ['index.html', 'style.css', 'main.js', 'model-viewer.js']:
        shutil.copy2(os.path.join(src_root, f), os.path.join(dst_root, f))

    os.makedirs(os.path.join(dst_root, 'assets', 'videos'), exist_ok=True)
    clip2_src = os.path.join(src_root, 'assets', 'videos', 'clip2_seedance.mp4')
    if os.path.exists(clip2_src):
        shutil.copy2(clip2_src, os.path.join(dst_root, 'assets', 'videos', 'clip2_seedance.mp4'))

    os.makedirs(os.path.join(dst_root, 'frames'), exist_ok=True)
    shutil.copy2(os.path.join(src_root, 'frames', 'manifest.json'), os.path.join(dst_root, 'frames', 'manifest.json'))

    frames = [f for f in os.listdir(os.path.join(src_root, 'frames')) if f.endswith('.webp')]
    for f in frames:
        shutil.copy2(os.path.join(src_root, 'frames', f), os.path.join(dst_root, 'frames', f))

    print(f"Sync complete! Copied {len(frames)} frames and all updated source files.")

if __name__ == '__main__':
    sync()
