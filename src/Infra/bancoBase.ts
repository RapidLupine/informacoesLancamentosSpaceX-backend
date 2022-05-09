import { ServiceAccount } from 'firebase-admin';
import admin = require('firebase-admin');
import serviceAccount = require('../../enviroment/firebaseKey.json');

export abstract class BancoBase {
  private _app: admin.app.App;
  protected database: admin.database.Database;

  constructor() {
    this._app = admin.initializeApp({
      credential: admin.credential.cert(serviceAccount as ServiceAccount),
      databaseURL:
        'https://informacoeslancamentosspacex-default-rtdb.firebaseio.com',
    });

    this.database = this._app.database(
      'https://informacoeslancamentosspacex-default-rtdb.firebaseio.com/',
    );
  }
}
