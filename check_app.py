import os
import json
import re

app_dir = 'app'

# 1. Referenced files check
with open(os.path.join(app_dir, 'index.html'), 'r') as f:
    html = f.read()

# Find href/src references
refs = re.findall(r'(?:src|href)=["\']([^"\']+)["\']', html)
for ref in refs:
    if ref.startswith(('http://', 'https://', '//', 'data:')): continue
    # Assume local references are paths like js/main.js
    if not os.path.exists(os.path.join(app_dir, ref)):
        print(f"FAIL: {ref} not found")
        exit(1)
    print(f"PASS: {ref} exists")

# 2. No http/https check
for root, dirs, files in os.walk(app_dir):
    for file in files:
        if file.endswith(('.html', '.css', '.js', '.mjs')):
            with open(os.path.join(root, file), 'r') as f:
                content = f.read()
                if 'http://' in content or 'https://' in content:
                    print(f"FAIL: http/https found in {file}")
                    exit(1)
            print(f"PASS: No http/https in {file}")

# 3. Trophies check
with open(os.path.join(app_dir, 'data', 'trophies.json'), 'r') as f:
    data = json.load(f)
    if len(data['trophies']) != 55:
        print("FAIL: 55 trophies expected")
        exit(1)
    print("PASS: trophies.json parsed and holds 55 trophies")

print("CHECK DONE")
