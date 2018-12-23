import { Component } from '@angular/core';
import { Alert, AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidator } from '../../validators/email';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the ResetPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reset-password',
  templateUrl: 'reset-password.html',
})
export class ResetPasswordPage {

  public resetPasswordForm: FormGroup;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public authProvider: AuthProvider, formBuilder: FormBuilder, public navParams: NavParams) {
    this.resetPasswordForm = formBuilder.group({
      email: [
        "",
        Validators.compose([Validators.required, EmailValidator.isValid])
      ]
    });
  }

  resetPassword(): void {
    if (!this.resetPasswordForm.valid) {
      console.log(
          `Form invalide, valeur actuelle: ${this.resetPasswordForm.value}`
      );
    } else {
      const email: string = this.resetPasswordForm.value.email;
      this.authProvider.resetPassword(email).then(
          user => {
            const alert: Alert = this.alertCtrl.create({
              message: "Un lien a été envoyé à ton email.",
              buttons: [
                {
                  text: "Ok",
                  role: "cancel",
                  handler: () => {
                    this.navCtrl.pop();
                  }
                }
              ]
            });
            alert.present();
          },
          error => {
            const errorAlert = this.alertCtrl.create({
              message: error.message,
              buttons: [{ text: "Ok", role: "cancel" }]
            });
            errorAlert.present();
          }
      );
    }
  }
}
