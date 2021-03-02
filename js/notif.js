    const button = document.querySelector(
'ion-dot');
    button.addEventListener('click', handleButtonClick);

    async function handleButtonClick() {
      const alert = await alertController.create({
        header: 'Hi, Selamat Datang',
        message: '<div style="text-align: justify;><b>Base on Theme JekyllNow, Build With Ionic Framework, Masih Dalam Tahap Perbaikan</b></div>',
        buttons: ['OK']
      });

      await alert.present();
    }
