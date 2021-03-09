    const button = document.querySelector(
'ion-dot');
    button.addEventListener('click', handleButtonClick);

    async function handleButtonClick() {
      const alert = await alertController.create({
        header: 'Hi, Selamat Datang',
        message: '<center><b>Base on Theme JekyllNow, Build With Ionic Framework, Masih Dalam Tahap Perbaikan</b></center>',
        buttons: ['OK']
      });

      await alert.present();
    }
