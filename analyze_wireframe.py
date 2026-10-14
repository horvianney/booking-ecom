import re, html

raw = open("wireframe-mobile.html", encoding="utf-8").read()
raw = raw.replace('\\"', '"').replace("\\'", "'").replace('\\n', '\n')
raw = re.sub(r'<style\b.*?</style>', ' ', raw, flags=re.S | re.I)
raw = re.sub(r'<img\b[^>]*>', '\n[IMG]\n', raw, flags=re.I)
raw = re.sub(r'<iframe\b[^>]*>', '\n[IFRAME/VIDEO]\n', raw, flags=re.I)
raw = re.sub(r'<video\b[^>]*>', '\n[VIDEO]\n', raw, flags=re.I)
text = html.unescape(re.sub(r'<[^>]+>', '\n', raw))
lines = [l.strip() for l in text.splitlines() if l.strip()]
out = []
for l in lines:
    if not out or out[-1] != l:
        out.append(l)
try:
    start = out.index("Unpacking...") + 1
except ValueError:
    start = 0
with open("wireframe-structure.txt", "w", encoding="utf-8") as f:
    f.write("\n".join(out[start:]))
print(f"OK {len(out) - start} lignes -> wireframe-structure.txt")
