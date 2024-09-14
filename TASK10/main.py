import os
import re
import cv2
import numpy as np
from PIL import Image, ImageDraw

base_path = '/home/pardhivjr/Desktop/TASK10/Operation-Pixel-Merge/assets'

files = os.listdir(base_path)
sorted_files = sorted(files, key=lambda x: int(re.search(r'\d+', x).group()))

dot_coordinates = []
dot_colors = []

for file in sorted_files:
    img_path = os.path.join(base_path, file)
    img = cv2.imread(img_path)
    
    if img is None:
        print(f"Error loading image {img_path}")
        continue
    
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    _, thresh = cv2.threshold(gray, 0, 255, cv2.THRESH_BINARY_INV + cv2.THRESH_OTSU)
    contours, _ = cv2.findContours(thresh, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)
    
    for contour in contours:
        M = cv2.moments(contour)
        
        if M['m00'] != 0:
            cx = int(M['m10'] / M['m00'])
            cy = int(M['m01'] / M['m00'])
            dot_color = img[cy, cx].tolist()
            
            dot_coordinates.append((cx, cy))
            dot_colors.append(dot_color)
        else:
            continue

print("Dot coordinates:", dot_coordinates)
print("Dot colors:", dot_colors)

output_img = Image.new('RGB', (512, 512), (255, 255, 255))

if len(dot_coordinates) < 2:
    print("Not enough dots to draw lines.")
else:
    for i in range(len(dot_coordinates) - 1):
        cx1, cy1 = dot_coordinates[i]
        dot_color = tuple(dot_colors[i])

        next_image_path = os.path.join(base_path, sorted_files[i + 1])
        next_img = np.array(Image.open(next_image_path))
        
        if not np.all(next_img == 255):
            cx2, cy2 = dot_coordinates[i + 1]
            
            draw = ImageDraw.Draw(output_img)
            print(f"Drawing line from ({cx1}, {cy1}) to ({cx2}, {cy2}) with color {dot_color}")
            draw.line((cx1, cy1, cx2, cy2), fill=dot_color, width=2)

output_img.save('output.png')
output_img.show()
