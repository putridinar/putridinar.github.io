simpleCart({
    cartColumns: [
        { attr: "thumb", label: false, view: "thumb" },
        { attr: "name", label: false, view: "link" },
        { view: "remove", text: false, label: !1 },
        { attr: "price", label: false, view: "harga" },
        { attr: "warna", label: 'Warna', view: "warna" },
        { attr: "ukuran", label: false, view: "ukuran" },
        { view: "decrement", label: false },
        { attr: "quantity", label: 'false', view: "qty" },
        { view: "increment", label: false },
        { attr: "total", label: false, view: "currency" },
        { attr: "link", label: false, view: "link" },
    ],
    currency: "IDR",
});

// Add the fingerprint login logic here
document.getElementById('fingerprintLoginButton').addEventListener('click', function() {
    const fpPromise = FingerprintJS.load();
    fpPromise.then(fp => fp.get()).then(result => {
        const visitorId = result.visitorId;
        // Handle the fingerprint login logic here
        console.log(visitorId);
    });
});