function onLoadSkeleton() {
  const skeletonEl = document.getElementById('skeleton');
  const dataEl = document.getElementById('myBlog');
  setTimeout(() => {
    skeletonEl.style.display = 'none';
    dataEl.style.display = 'grid';
  }, 2500);
}

{$ if page.url='/admin/login/' $}
// Add the fingerprint login logic here
document.getElementById('fingerprintLoginButton').addEventListener('click', function() {
    const fpPromise = FingerprintJS.load();
    fpPromise.then(fp => fp.get()).then(result => {
        const visitorId = result.visitorId;
        // Handle the fingerprint login logic here
        console.log(visitorId);
    });
});
{$ endif $}