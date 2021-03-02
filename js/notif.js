    const button = document.querySelector(
'ion-dot');
    button.addEventListener('click', handleButtonClick);

    async function handleButtonClick() {
      const alert = await alertController.create({
        header: 'Hi, Selamat Datang',
        message: '<b><div style="text-align:justify;">Base on Theme JekyllNow, Build With Ionic Framework, Masih Dalam Tahap Perbaikan</div></b>',
        buttons: ['OK']
      });

      await alert.present();
    }
