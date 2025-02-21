document.getElementById('fingerprintLoginButton').addEventListener('click', function() {
        const fingerprintToggle = document.getElementById('fingerprintToggle').checked;
        if (fingerprintToggle) {
            // Initialize the FingerprintJS library
            const fpPromise = FingerprintJS.load();
            fpPromise.then(fp => fp.get()).then(result => {
                const visitorId = result.visitorId;
                // Handle the fingerprint login logic here
                console.log(visitorId);
            });
        } else {
            alert('Fingerprint login is disabled. Please enable it using the switch.');
        }
    });