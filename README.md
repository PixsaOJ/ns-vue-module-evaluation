# NativeScript Vue + Pinia Release Build Crash

## Issue

Pinia 3.x causes `Module evaluation promise rejected` crash in NativeScript Vue release builds on Android.

**Error:**
```
java.lang.RuntimeException: Unable to create application com.tns.NativeScriptApplication: 
com.tns.NativeScriptException: Error: Module evaluation promise rejected: 
/data/data/org.nativescript.myAwesomeApp/files/app/bundle.mjs
```

## Environment

- NativeScript: 9.0.x
- nativescript-vue: 3.0.2
- pinia: 3.0.4
- vue: 3.5.26
- @nativescript/webpack: 5.0.24
- Node: 22+

## Reproduction Steps

1. Clone this repo
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Build and install release APK:
   ```bash
   pnpm testprod
   ```
4. Observe crash in logcat

## Key Findings

- **Debug builds work fine**
- **Release builds crash immediately on app start**
- Removing pinia import makes the app work in release
- Both pinia 2.x and 3.x exhibit this issue
- The crash happens during module evaluation, before any app code runs

## Minimal app.ts that crashes

```typescript
import { createApp } from 'nativescript-vue';
import Home from './components/Home.vue';
import { createPinia } from 'pinia';

const pinia = createPinia();
const app = createApp(Home);
app.use(pinia);
app.start();
```

## Workaround (none found yet)

Tried:
- Pinia 2.x and 3.x - both crash
- Vue override to force single version - still crashes
- Stubbing @vue/devtools-api - still crashes
- Different webpack versions - still crashes

## Files

- `demo.keystore` - Keystore for signing (password: `demodemo`)
- `build-apk.sh` - Build script for release APK
