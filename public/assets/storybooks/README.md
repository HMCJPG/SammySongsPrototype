# Storybook PDFs Directory

This folder is designed to hold your storybook PDFs for testing locally.

**IMPORTANT NOTE ON FILE SIZES (45MB+):**
Because these PDF units are extremely large (e.g., 45MB+), we have explicitly added an exclusion rule to `.gitignore` to prevent any `*.pdf` files in this folder from accidentally being committed to GitHub.

If you commit a 45MB file to git, it will bloat your repository size and potentially get rejected by GitHub. 

## S3 Infrastructure Ready!
As discussed, these extra-heavy files should absolutely stream directly from AWS S3 in production. You can use the exact same S3 setup we built for the videos:
1. Go to `http://localhost:3000/test-upload` in your local running app.
2. Upload your 45MB PDF straight to your bucket.
3. Replace the local links (e.g., `/assets/storybooks/my-story.pdf`) with your high-speed S3 URL!
