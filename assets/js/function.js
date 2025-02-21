function onLoadSkeleton() {
  const skeletonEl = document.getElementById('skeleton');
  const dataEl = document.getElementById('myBlog');
  setTimeout(() => {
    skeletonEl.style.display = 'none';
    dataEl.style.display = 'grid';
  }, 2500);
}