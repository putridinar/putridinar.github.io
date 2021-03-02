    const button = document.querySelector(
'ion-dot');
    button.addEventListener('click', handleButtonClick);

    async function handleButtonClick() {
      const alert = await alertController.create({
        header: 'Hi, Selamat Datang',
        message: '<b><center>Base on Theme JekyllNow, Build With Ionic Framework, Masih Dalam Tahap Perbaikan</center></b>',
        buttons: ['OK']
      });

      await alert.present();
    }
