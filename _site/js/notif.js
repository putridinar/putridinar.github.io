    const icon = document.querySelector(
'ion-dot');
    icon.addEventListener('click', handleButtonClick);

    async function handleButtonClick() {
      const alert = await alertController.create({
        header: 'Hi, Selamat Datang',
        message: '<center><b>Base on Theme JekyllNow, Build With Ionic Framework, Masih Dalam Tahap Perbaikan</b></center>',
        buttons: ['OK']
      });

      await alert.present();
    }
