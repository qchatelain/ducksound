import { Component } from "@angular/core";
import {
  App,
  Alert,
  AlertController,
  IonicPage,
  NavController
} from "ionic-angular";
import { ProfileProvider } from "../../providers/profile/profile";
import { AuthProvider } from "../../providers/auth/auth";

@IonicPage()
@Component({
  selector: "page-profile",
  templateUrl: "profile.html"
})
export class ProfilePage {
  public userProfile: any;

  constructor(
      public app: App, 
      public navCtrl: NavController,
      public alertCtrl: AlertController,
      public authProvider: AuthProvider,
      public profileProvider: ProfileProvider
  ) {}

  ionViewDidLoad() {
    this.profileProvider.getUserProfile().on("value", userProfileSnapshot => {
      this.userProfile = userProfileSnapshot.val();
    });
  }

  logOut(): void {
    this.authProvider.logoutUser().then(() => {
      this.app.getRootNav().setRoot("LoginPage");
    });
  }

  updateName(): void {
    const alert: Alert = this.alertCtrl.create({
      message: "Votre pseudo",
      inputs: [
        {
          name: "userName",
          placeholder: "Votre pseudo",
          value: this.userProfile.userName
        }
      ],
      buttons: [
        { text: "Annuler" },
        {
          text: "Enregistrer",
          handler: data => {
            this.profileProvider.updateName(data.userName);
          }
        }
      ]
    });
    alert.present();
  }

  updateEmail(): void {
    let alert: Alert = this.alertCtrl.create({
      inputs: [{ name: 'newEmail', placeholder: 'Votre nouvel email' },
        { name: 'password', placeholder: 'Votre mot de passe', type: 'password' }],
      buttons: [
        { text: 'Annuler' },
        { text: 'Enregistrer',
          handler: data => {
            this.profileProvider
                .updateEmail(data.newEmail, data.password);
          }}]
    });
    alert.present();
  }

  updatePassword(): void {
    let alert: Alert = this.alertCtrl.create({
      inputs: [
        { name: 'newPassword', placeholder: 'Votre nouveau mot de passe', type: 'password' },
        { name: 'oldPassword', placeholder: 'Votre ancien mot de passe', type: 'password' }],
      buttons: [
        { text: 'Annuler' },
        { text: 'Enregistrer',
          handler: data => {
            this.profileProvider.updatePassword(
                data.newPassword,
                data.oldPassword
            );
          }
        }
      ]
    });
    alert.present();
  }

  deleteUser(): void {
    let alert: Alert = this.alertCtrl.create({
      inputs: [
        { name: 'password', placeholder: 'Votre mot de passe', type: 'password' }
      ],
      buttons: [
        { text: 'Annuler' },
        { text: 'Supprimer',
          handler: data => {
            this.profileProvider.deleteUser(
                data.password
            );
          }
        }
      ]
    });
    alert.present();
  }
}