import { IBackend } from '../types/backend';

export class BackendIOS implements IBackend {
  restart() {
    console.log('[BackendIOS] Restart');
  }
}
