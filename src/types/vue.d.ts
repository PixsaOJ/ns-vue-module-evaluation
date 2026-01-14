import { IBackend } from '../backend/backend';

declare global {
  var backend: IBackend;
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $backend: IBackend;
  }
}