
## [Flutter](https://storage.googleapis.com/flutter_infra_release/releases/stable/linux/flutter_linux_3.3.10-stable.tar.xz)

[vscode dart](https://github.com/Dart-Code/Dart-Code/releases/download/v3.56.0/dart-code-3.56.0.vsix)
[vscode flutter](https://github.com/Dart-Code/Flutter/releases/download/v3.56.0/flutter-3.56.0.vsix)


## Android SDK 

[java](https://download.java.net/java/GA/jdk11/9/GPL/openjdk-11.0.2_linux-x64_bin.tar.gz)
[gradle](https://downloads.gradle-dn.com/distributions/gradle-7.4-all.zip)

[platform-tools](https://dl.google.com/android/repository/platform-tools_r33.0.1-linux.zip)
[build-tools](https://dl.google.com/android/repository/build-tools_r33-linux.zip)
[system-images](https://dl.google.com/android/repository/sys-img/android/x86_64-31_r03.zip)
[system-images palystore](https://dl.google.com/android/repository/sys-img/google_apis_playstore/x86_64-33_r06.zip)
[system-images apis](https://dl.google.com/android/repository/sys-img/google_apis/x86_64-33_r06.zip)
[emulator](https://r2---sn-gvnuxaxjvh-v8cs.gvt1.com/edgedl/android/repository/emulator-linux_x64-9189900.zip?cms_redirect=yes&mh=6J&mip=212.20.19.75&mm=28&mn=sn-gvnuxaxjvh-v8cs&ms=nvh&mt=1672301258&mv=u&mvi=2&pcm2cms=yes&pl=24&rmhost=r8---sn-gvnuxaxjvh-v8cs.gvt1.com&shardbypass=sd&smhost=r1---sn-gvnuxaxjvh-v8c6.gvt1.com)
[platform](https://dl.google.com/android/repository/platform-31_r01.zip)
[sdk-tools](https://dl.google.com/android/repository/sdk-tools-linux-4333796.zip)
[commandline-tools](https://dl.google.com/android/repository/commandlinetools-linux-9123335_latest.zip)

### структура:
> 1. папка build-tools > 30.0.3
> build-tools_r33-linux переименовать в build-tools
> внутри этой папки android-13 переименовать в 30.0.3 и добавить туда лицензию

> 2. папка platforms > android-31
> platform-33_r02 переименовать в platforms
> внутри этой папки android-13 переименовать в android-33

> 3. папка cmdline-tools > latest
> commandline-tools-linux-{цифры}_latest переименовать в cmdline-tools
> внутри этой папки cmdline-tools переименовать в latest

> 4. папка platform-tools 
> из папки platform-tools_r33.0.1-linux достать platform-tools в корень папки с sdk
> удалить пустую папку platform-tools_r33.0.1-linux

> 5. папка system-images 
> создать папку system-images, а в ней android-33
> в android-33 переместить 86_64-33_r06(1) и переименовать в google_apis 
> в android-33 переместить 86_64-33_r06 и переименовать в google_apis_playstore 
> в system-images создать android-31, переместить туда 86_64-31_r03 и переименовать в default 

> 6. папка sdk-tools
>  sdk-tools-linux-4333796 переименовать в sdk-tools

> 7. папка sdk-tools
>  из sdk-tools скопировать tools в корень сдк

> 8. папка emulator
>  из emulator-linux-6885378 достать в корень sdk emulator а emulator-linux удалить
>  создать файл package.xml и вставить туда:

Для эмулятора
```xml
<ns2:repository xmlns:ns2="http://schemas.android.com/repository/android/common/02" xmlns:ns3="http://schemas.android.com/repository/android/common/01" xmlns:ns4="http://schemas.android.com/repository/android/generic/01" xmlns:ns5="http://schemas.android.com/repository/android/generic/02" xmlns:ns6="http://schemas.android.com/sdk/android/repo/addon2/01" xmlns:ns7="http://schemas.android.com/sdk/android/repo/addon2/02" xmlns:ns8="http://schemas.android.com/sdk/android/repo/addon2/03" xmlns:ns9="http://schemas.android.com/sdk/android/repo/repository2/01" xmlns:ns10="http://schemas.android.com/sdk/android/repo/repository2/02" xmlns:ns11="http://schemas.android.com/sdk/android/repo/repository2/03" xmlns:ns12="http://schemas.android.com/sdk/android/repo/sys-img2/03" xmlns:ns13="http://schemas.android.com/sdk/android/repo/sys-img2/02" xmlns:ns14="http://schemas.android.com/sdk/android/repo/sys-img2/01">
<license id="android-sdk-license" type="text">Terms and Conditions </license>
<localPackage path="emulator" obsolete="false">
<type-details xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="ns5:genericDetailsType"/>
<revision>
<major>31</major>
<minor>3</minor>
<micro>14</micro>
</revision>
<display-name>Android Emulator</display-name>
<uses-license ref="android-sdk-license"/>
<dependencies/>
</localPackage>
</ns2:repository>
```

Для build-tools
```xml
<ns2:repository xmlns:ns2="http://schemas.android.com/repository/android/common/02" xmlns:ns3="http://schemas.android.com/repository/android/common/01" xmlns:ns4="http://schemas.android.com/repository/android/generic/01" xmlns:ns5="http://schemas.android.com/repository/android/generic/02" xmlns:ns6="http://schemas.android.com/sdk/android/repo/addon2/01" xmlns:ns7="http://schemas.android.com/sdk/android/repo/addon2/02" xmlns:ns8="http://schemas.android.com/sdk/android/repo/addon2/03" xmlns:ns9="http://schemas.android.com/sdk/android/repo/repository2/01" xmlns:ns10="http://schemas.android.com/sdk/android/repo/repository2/02" xmlns:ns11="http://schemas.android.com/sdk/android/repo/repository2/03" xmlns:ns12="http://schemas.android.com/sdk/android/repo/sys-img2/03" xmlns:ns13="http://schemas.android.com/sdk/android/repo/sys-img2/02" xmlns:ns14="http://schemas.android.com/sdk/android/repo/sys-img2/01">
<license id="android-sdk-license" type="text">Terms and Conditions</license>
<localPackage path="build-tools;30.0.3" obsolete="false">
<type-details xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="ns5:genericDetailsType"/>
<revision>
<major>30</major>
<minor>0</minor>
<micro>3</micro>
</revision>
<display-name>Android SDK Build-Tools 30.0.3</display-name>
<uses-license ref="android-sdk-license"/>
<dependencies>
<dependency path="tools"/>
</dependencies>
</localPackage>
</ns2:repository>
```

Для platforms
```xml
<ns2:repository xmlns:ns2="http://schemas.android.com/repository/android/common/02" xmlns:ns3="http://schemas.android.com/repository/android/common/01" xmlns:ns4="http://schemas.android.com/repository/android/generic/01" xmlns:ns5="http://schemas.android.com/repository/android/generic/02" xmlns:ns6="http://schemas.android.com/sdk/android/repo/addon2/01" xmlns:ns7="http://schemas.android.com/sdk/android/repo/addon2/02" xmlns:ns8="http://schemas.android.com/sdk/android/repo/addon2/03" xmlns:ns9="http://schemas.android.com/sdk/android/repo/repository2/01" xmlns:ns10="http://schemas.android.com/sdk/android/repo/repository2/02" xmlns:ns11="http://schemas.android.com/sdk/android/repo/repository2/03" xmlns:ns12="http://schemas.android.com/sdk/android/repo/sys-img2/03" xmlns:ns13="http://schemas.android.com/sdk/android/repo/sys-img2/02" xmlns:ns14="http://schemas.android.com/sdk/android/repo/sys-img2/01">
<license id="android-sdk-license" type="text">Terms and Conditions</license>
<localPackage path="platforms;android-31" obsolete="false">
<type-details xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="ns11:platformDetailsType">
<api-level>31</api-level>
<codename/>
<base-extension>true</base-extension>
<layoutlib api="15"/>
</type-details>
<revision>
<major>1</major>
</revision>
<display-name>Android SDK Platform 31</display-name>
<uses-license ref="android-sdk-license"/>
</localPackage>
</ns2:repository>
```

> 9. папка licenses
> создать папку licenses
> в этой папке создать файлы ниже 

### лицензии:
1. `android-sdk-license` 24333f8a63b6825ea9c5514f83c2829b004d1fee
2. `android-sdk-arm-dbt-license` 859f317696f67ef3d7f30a50a5560e7834b43903
3. `android-googletv-license` 601085b94cd77f0b54ff86406957099ebe79c4d6
4. `android-sdk-preview-license` 84831b9409646a918e30573bab4c9c91346d8abd
5. `google-gdk-license` 33b6a2b64607f11b759f320ef9dff4ae5c47d97a
6. `mips-android-sysimage-license` e9acab5b5fbb560a72cfaecce8946896ff6aab9d

### эмуятор:
```sh
    sudo groupadd -r kvm
    sudo gpasswd -a $USER kvm
    sudo chown $USER /dev/kvm
```

> 10. папка patcher
> создать папку patcher
> из 3534162-studio.sdk-patcher скопировать в patcher папку sdk-patcher и переменовать в v4


<!-- ./sdkmanager --sdk_root=/home/rle/sdk_setup "build-tools;33.0.0"
./sdkmanager --sdk_root=/home/rle/sdk_setup "platforms;android-33" -->

<!-- ./sdkmanager --sdk_root=/home/rle/sdk_setup "system-images;android-27;google_apis_playstore;x86" -->

---------------


## ninja, cmake, clang, pkg-config

> [clang](https://github.com/llvm/llvm-project/releases/download/llvmorg-15.0.6/clang+llvm-15.0.6-x86_64-linux-gnu-ubuntu-18.04.tar.xz) 
> [cmake](https://github.com/Kitware/CMake/releases/download/v3.25.1/cmake-3.25.1-linux-x86_64.tar.gz)
> [ninja](https://github.com/ninja-build/ninja/releases/download/v1.11.1/ninja-linux.zip)

в `.bashrc` путь до bin 
```sh
    export PATH="$PATH:/home/user/clang/bin"
    export PATH="$PATH:/home/user/cmake/bin"
    export PATH="$PATH:/home/user/ninja-linux"
```

> [pgk-config](https://pkgconfig.freedesktop.org/releases/pkg-config-0.29.tar.gz) билд
>
> `./configure --prefix=/home/user/PKG_BUILD --with-internal-glib --disable-compile-warnings`
> без параметра disable compile warnings выдается ошибка
> `make` и `make install` запустить через sudo, если ошибка


```sh
    cd compile-from
    ./configure --prefix=/home/user/compile-to
    make
    make install 
    # после нужно добавить в .bashrc пути к bin и .pc файлам
```


## x libs

[xproto](https://www.x.org/archive/individual/proto/xproto-7.0.31.tar.gz)
[xextproto](https://www.x.org/archive/individual/proto/xextproto-7.3.0.tar.gz)
[xtrans](https://www.x.org/releases/individual/lib/xtrans-1.4.0.tar.gz)
[xcb-proto](https://xorg.freedesktop.org/archive/individual/proto/xcb-proto-1.14.tar.gz)
[xau](https://xorg.freedesktop.org/archive/individual/lib/libXau-1.0.11.tar.xz)
[xcb](https://xorg.freedesktop.org/archive/individual/lib/libxcb-1.14.tar.gz)
[kbproto](https://www.x.org/archive/individual/proto/kbproto-1.0.7.tar.gz)
[inputproto](https://www.x.org/archive/individual/proto/inputproto-2.3.2.tar.gz)

[xorg-macros](https://xorg.freedesktop.org/archive/individual/util/util-macros-1.17.1.tar.gz)

[x11](https://www.x.org/archive/individual/lib/libX11-1.8.tar.xz)


[xext](https://xorg.freedesktop.org/archive/individual/lib/libXext-1.1.2.tar.gz)
[renderproto](https://xorg.freedesktop.org/archive/individual/proto/renderproto-0.11.tar.gz)
[xrender](https://xorg.freedesktop.org/archive/individual/lib/libXrender-0.9.7.tar.gz)
[xi](https://xorg.freedesktop.org/archive/individual/lib/libXi-1.3.2.tar.gz)
[xinput](https://xorg.freedesktop.org/archive/individual/app/xinput-1.5.4.tar.gz)




## dependencies

[zlib](http://zlib.net/fossils/zlib-1.2.11.tar.gz) | https://sourceforge.net/projects/libpng/files/zlib/1.2.11/zlib-1.2.11.tar.xz/download


[m4](http://ftp.gnu.org/gnu/m4/m4-1.4.19.tar.xz)

[pcre2](https://github.com/PCRE2Project/pcre2/releases/download/pcre2-10.40/pcre2-10.40.tar.bz2)

[libffi](https://github.com/libffi/libffi/releases/download/v3.4.4/libffi-3.4.4.tar.gz)
```sh
    export PKG_CONFIG_PATH="$PKG_CONFIG_PATH:/home/user/libffi_BUILD/lib/pkgconfig"
    export LIBFFI_CFLAGS="-I/home/user/libffi_BUILD/include"
    export LIBFFI_LIBS="-L/home/user/libffi_BUILD/lib -lffi"
```

[pcre](https://sourceforge.net/projects/pcre/files/pcre/8.13/pcre-8.13.tar.gz)


[libpng](https://sourceforge.net/projects/libpng/files/libpng16/1.6.37/libpng-1.6.37.tar.xz)

```sh
    CPPFLAGS="-I/home/user/zlib_BUILD/include" LDFLAGS="-L/home/user/zlib_BUILD/lib" ./configure --prefix=/home/user/libpng_BUILD
```

[libjpeg](http://www.ijg.org/files/jpegsrc.v9d.tar.gz)

[tiff](https://download.osgeo.org/libtiff/tiff-4.0.9.tar.gz)
```sh
 CPPFLAGS="-I/home/user/zlib_BUILD/include -I/home/user/libjpeg_BUILD/include" LDFLAGS="-L/home/user/zlib_BUILD/lib -L/home/user/libjpeg_BUILD/lib" ./configure --prefix=/home/user/tiff_BUILD
```


[expat](https://github.com/libexpat/libexpat/releases/download/R_2_5_0/expat-2.5.0.tar.xz)

[re2c](https://sourceforge.net/projects/re2c/files/1.0.1/re2c-1.0.1.tar.gz/download)

[gperf](http://ftp.gnu.org/pub/gnu/gperf/gperf-3.1.tar.gz)

[bison](http://ftp.gnu.org/gnu/bison/bison-3.2.3.tar.gz) | http://mirror.truenetwork.ru/gnu/bison/bison-3.8.tar.xz 

[flex](https://github.com/westes/flex/releases/download/v2.6.1/flex-2.6.1.tar.gz)


## gtk dependencies

[glib](https://download.gnome.org/sources/glib/2.56/glib-2.56.2.tar.xz)
```sh
./configure --prefix=/home/user/glib_BUILD --enable-libmount=no --with-pcre=internal
```

[freetype2](https://sourceforge.net/projects/freetype/files/freetype2/2.11.1/freetype-2.11.1.tar.xz) ?? rebuild after harfbuzz

[pixman](https://www.cairographics.org/releases/pixman-0.42.2.tar.gz)


[cairo](https://www.cairographics.org/releases/cairo-1.10.2.tar.gz)

```sh
    CPPFLAGS="-I/home/user/zlib_BUILD/include" LDFLAGS="-L/home/user/zlib_BUILD/lib" ./configure --prefix=/home/user/cairo_BUILD  --enable-xlib --enable-xlib-xcb  --enable-xcb
```
или
```sh
    CPPFLAGS="-I/home/user/zlib_BUILD/include -I/home/user/x11" LDFLAGS="-L/home/user/zlib_BUILD/lib" ./configure --prefix=/home/user/cairo_BUILD  --enable-xlib-xcb  --enable-xcb
```

[harfbuzz](https://github.com/harfbuzz/harfbuzz/releases/download/5.3.1/harfbuzz-5.3.1.tar.xz)
[fontconfig](https://www.freedesktop.org/software/fontconfig/release/fontconfig-2.12.6.tar.gz) перед каиро

cairo опять сбилдить


[pango](https://ftp.fau.de/gnome/sources/pango/1.30/pango-1.30.1.tar.xz)

```sh
CPPFLAGS="-I/home/user/cairo_BUILD/include/cairo" LDFLAGS="-L/home/user/cairo_BUILD/lib" ./configure --prefix=/home/user/pango_BUILD
```

[gdk-pixbuff](https://ftp.acc.umu.se/pub/GNOME/sources/gdk-pixbuf/2.23/gdk-pixbuf-2.23.5.tar.xz)
```sh
CPPFLAGS="-I/home/user/tiff_BUILD/include -I/home/user/libjpeg_BUILD/include" LDFLAGS="-L/home/user/tiff_BUILD/lib -L/home/user/libjpeg_BUILD/lib" ./configure --prefix=/home/user/gdk-pixbuf_BUILD
```


[atk](https://download.gnome.org/sources/atk/2.9/atk-2.9.4.tar.xz)


[gtk](https://laotzu.ftp.acc.umu.se/pub/GNOME/sources/gtk+/3.3/gtk+-3.3.2.tar.xz)

```sh 
./configure --prefix=/home/user/gtk_BUILD --x-includes=/home/user/x11_BUILD/include --x-libraries=/home/user/lib
```
> в папке gtk-demo в файле `geninclude.pl` и `geninclude.pl.in`  
> удалить defined (перед make && make install)

---------------


<!-- [meson](https://github.com/mesonbuild/meson/releases/download/0.61.0/meson-0.61.0.tar.gz)

```sh
    cd meson
    python3 ./meson.py /home/user/build-from /home/user/build-to
    cd build-to
    ninja
    ninja install
``` -->
---------------


## Работа с флаттером оффлайн

### Билд без сети

> создаем папку .gradle в домашней папке
> в нее копируем папку caches
> создаем папку wrapper, в ней dists, в ней gradle-7.4-all, в ней aadb4xli5jkdsnukm30eibyiu
> в последнюю перемещаем архив gradle-7.4-all.zip

> в проекте flutter заходим в android/gradlew
> в последней строке в конце дописываем --offline

запустить одну из команд
```sh
flutter build apk
flutter build web
```

### Создание проекта

```sh
flutter create -a java --offline
```
 
### Эмуляторы

Создать новый
```sh
flutter emulators --create --name emulator_name
```

Запустить существующий
```sh
flutter emulators --launch emulator_name
```

Список
```sh
flutter emulators 
```

### Расширения дял vscode

> переходим в расширения, жмем не три точки и выбираем `install from VSIX...`
> Сначала ставим dart, потом flutter


> еще в системе должны быть:
> g++(gcc)
> make

---------------


```sh
# если собрать скриптом prebuild.js
export PATH="$PATH:/home/userrle/gtk/bin"
export PATH="$PATH:/home/userrle/java/bin"
export PATH="$PATH:/home/userrle/flutter/bin"
export PATH="$PATH:/home/userrle/ninja-linux"
export PATH="$PATH:/home/userrle/clang/bin"
export PATH="$PATH:/home/userrle/cmake/bin"
export PKG_CONFIG_PATH="$PKG_CONFIG_PATH:/home/user/gtk/lib/pkgconfig"
export PKG_CONFIG_PATH="$PKG_CONFIG_PATH:/home/user/gtk/share/pkgconfig"
export LD_LIBRARY_PATH="$LD_LIBRARY_PATH:/home/user/gtk/lib"
export LIBFFI_CFLAGS="-I/home/user/gtk/include"
export LIBFFI_LIBS="-L/home/user/gtk/lib -lffi"
```



---------------

## flutter-builder

1. Все архивы распаковать в одну папку под названием flutter-src
2. Запустить prebuild.js, после открыть новый терминал
3. Запустить `bash ./runall.sh`, если нравятся стандартные пути.
<br>
Если нужны другие пути, то вызвать скрипты напрямую:

1. `--prefix=/path` для пути установки
2. `--src=/path`для папки с распакованными архивами
<br>
Чтобы поставить at-spi2 и зависимости `node build-gtk.js --newLibs` 



<!-- ---------------

dbus /configure --prefix=/home/user/gtk LDFLAGS='-L/home/user/gtk/lib' CFLAGS='-I/home/user/gtk/include'
intltools c с патчем https://github.com/maximeh/buildroot/blob/master/package/intltool/0001-perl-5.26-compatibility.patch
renderproto (x libs)
libxtst (x libs)
at-spi2-core
as-spi2-atk ./configure --prefix=/home/user/gtk --x-includes=/home/user/gtk/include --x-libraries=/home/user/gtk/lib -->



