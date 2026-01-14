import { IBackend } from '../types/backend';

export class BackendAndroid implements IBackend {
  restart() {
    console.log('[BackendAndroid] Restart');
  }
}
