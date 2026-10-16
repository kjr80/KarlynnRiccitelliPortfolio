// Maps a project/more-work slug to its stamp thumbnail image.
// Placeholder abstract graphics live in src/assets/stamps/<slug>.jpg —
// replace those files with real screenshots of your work (same filename)
// and every stamp that references that slug picks up the new image
// automatically, no code changes needed.
const modules = import.meta.glob("../assets/stamps/*.jpg", { eager: true, import: "default" });

export const stampImages = Object.fromEntries(
  Object.entries(modules).map(([path, url]) => {
    const slug = path.split("/").pop().replace(/\.jpg$/, "");
    return [slug, url];
  }),
);
