vite build

# get size of dist/index.css in kb
size=$(du -k "dist/index.css" | cut -f1)
size="$size kb"
echo "index.css size: $size"

# replace <i>*</i> in Readme.md with <i>size</i>
sed -i '' "s/<i>.*<\/i>/<i>$size<\/i>/g" Readme.md