node "$PWD/flutter-setup.js"
node "$PWD/build-gtk.js"
python3 "$PWD/sdk-install.py"
flutter config --android-sdk="/home/$USER/android-sdk"