import { Injectable } from '@angular/core';
import { LoadingController, ToastController, AlertController, IonicApp, Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { SocialSharing } from '@ionic-native/social-sharing';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { appIntro } from './config';

@Injectable()
export class SharedProvider {
  private _loading;
  private _toastMsg;
  constructor(private _ionicApp: IonicApp, private camera: Camera, private _loadingCtrl: LoadingController, private _toastCtrl: ToastController, private _storage: Storage, private _alert: AlertController, private _socialSharing: SocialSharing, public _photoViewer: PhotoViewer, public event: Events) { }
  //Loader Start 
  public Loader = {
    show: (template?) => {
      this._loading = this._loadingCtrl.create({
        content: template || 'Please wait...'
      });
      this._loading.present();
    },
    hide: () => {
      this._loading.dismiss();
    },
    prompt: (template?, timer?) => {
      this.Loader.show(template);
      setTimeout(() => {
        this.Loader.hide();
      }, timer || 3000);
    },
    closeIfActive: () => {
      let activePortal = this._ionicApp._loadingPortal.getActive();
      if (activePortal) {
        activePortal.dismiss();
        return;
      }
    }
  }
  public Toast = {
    show: (text: string, duration?, position?, closeButton?, btnText?) => {
      this._toastMsg = this._toastCtrl.create({
        message: text,
        duration: duration || closeButton ? null : 3000,
        position: position || 'top',
        showCloseButton: closeButton || false,
        closeButtonText: btnText || 'OK'
      });
      this._toastMsg.present();
    },
    hide() {
      this._toastMsg.dismiss();
    }
  }
  public LS = {
    get: (key: string) => {
      return this._storage.get(key);
    },
    set: (key: string, value) => {
      return this._storage.set(key, JSON.stringify(value));
    },
    remove: (key: string) => {
      return this._storage.remove(key);
    }
  }
  public Alert = {
    confirm: (msg?, title?) => {
      return new Promise((resolve, reject) => {
        let alert = this._alert.create({
          title: title || 'Confirm',
          message: msg || 'Do you want continue?',
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              handler: () => {
                reject(false);
              }
            },
            {
              text: 'Ok',
              handler: () => {
                resolve(true);
              }
            }
          ]
        });
        alert.present();
      });

    },
    alert: (msg, title?) => {
      let alert = this._alert.create({
        title: title || 'Alert',
        subTitle: msg,
        buttons: ['Dismiss']
      });

      alert.present();
    }
  }
  public async checkIntro(component) {
    let isIntroduced = await this.LS.get('intro');
    isIntroduced = JSON.parse(isIntroduced); 
    if (!isIntroduced[component]) {
      isIntroduced[component] = true;
      this.LS.set('intro', isIntroduced);
      if (component == 'entity') {
          return true;
      }
      this.event.publish('app:intro', appIntro[component]);
      console.log(isIntroduced);
    } 
  }
  public SocialSharing = {
    shareVia: (message, subject, file?, url?) => {
      this._socialSharing.share(message, subject, file || null, url || null).then(() => {
        return true;
      }).catch(() => {
        return false;
      });
    }
  }
  public imageViewer = {
    show: (url, title, share?) => {
      this._photoViewer.show(url, title, { share: share || true });
    }
  }
  public uploadMedia = {
    image: (source?) => {
      let sourceType
      if (source == 1) {
        sourceType = this.camera.PictureSourceType.CAMERA;
      } else {
        sourceType = this.camera.PictureSourceType.PHOTOLIBRARY;
      }
      const options: CameraOptions = {
        quality: 20,
        targetWidth: 600,
        targetHeight: 600,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.PNG,
        mediaType: this.camera.MediaType.PICTURE,
        sourceType: sourceType,
        allowEdit: true
      }
      return this.camera.getPicture(options);
    }
  }



}
