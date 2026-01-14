ns build android --release -env.sourceMap --log error \
--key-store-path demo.keystore \
--key-store-password demodemo \
--key-store-alias demodemo \
--key-store-alias-password demodemo \
--apk \
--copy-to dist/build.apk
