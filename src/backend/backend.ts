import { isAndroid } from '@nativescript/core';
import { BackendAndroid } from './BackendAndroid';
import { BackendIOS } from './BackendIOS';
import { IBackend } from '../types/backend';

export { IBackend };
export const backend: IBackend = isAndroid ? new BackendAndroid() : new BackendIOS();
