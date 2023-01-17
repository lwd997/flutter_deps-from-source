const fs = require('fs')
const process = require('process')
const config = require('./config')
const {runBash, terminate, moveFolder} = require('./tools')


config.gtkPath = config.home + '/gtk'
config.src = config.home + '/flutter-src'


for (const arg of process.argv) {
    if (arg.includes('--src=')) config.src = arg.split('=')[1]
    else if (arg.includes('--prefix=')) config.gtkPath = arg.split('=')[1]
    else if (arg.includes('--add-path=')) config.addToPath = +arg.split('=')[1]
}


const installPrimaryBins = async () => {
    try {
        await moveFolder('ninja-linux', 'ninja-linux', config.home)
        await moveFolder('clang+llvm-15.0.6-x86_64-linux-gnu-ubuntu-18.04', 'clang', config.home)
        await moveFolder('cmake-3.25.1-linux-x86_64', 'cmake', config.home)

    } catch (e) {
        console.log(e);
        terminate('Не удалось установить')
    }
}

const installPKGConfig = async () => await runBash([`cd ${config.src}/pkg-config-0.29/ && ./configure --prefix=${config.gtkPath} --with-internal-glib --disable-compile-warnings && make && make install`])

const installXLibs = async () =>
    await runBash([
        `cd ${config.src}/xproto-7.0.31/  && ./configure --prefix=${config.gtkPath} && make && make install`,
        `cd ${config.src}/xextproto-7.3.0/  && ./configure --prefix=${config.gtkPath} && make && make install`,
        `cd ${config.src}/xtrans-1.4.0/  && ./configure --prefix=${config.gtkPath} && make && make install`,
        `cd ${config.src}/xcb-proto-1.14/  && ./configure --prefix=${config.gtkPath} && make && make install`,
        `cd ${config.src}/libXau-1.0.11/  && ./configure --prefix=${config.gtkPath} && make && make install`,
        `cd ${config.src}/libxcb-1.14/  && ./configure --prefix=${config.gtkPath} && make && make install`,
        `cd ${config.src}/kbproto-1.0.7/  && ./configure --prefix=${config.gtkPath} && make && make install`,
        `cd ${config.src}/inputproto-2.3.2/  && ./configure --prefix=${config.gtkPath} && make && make install`,
        `cd ${config.src}/util-macros-1.17.1  && ./configure --prefix=${config.gtkPath} && make && make install`,

        `cd ${config.src}/libX11-1.8/  && ./configure --prefix=${config.gtkPath} && make && make install`,
        `cd ${config.src}/libXext-1.1.2/  && ./configure --prefix=${config.gtkPath} && make && make install`,
        `cd ${config.src}/renderproto-0.11/  && ./configure --prefix=${config.gtkPath} && make && make install`,
        `cd ${config.src}/libXrender-0.9.7/  && ./configure --prefix=${config.gtkPath} && make && make install`,
        `cd ${config.src}/libXi-1.3.2/  && ./configure --prefix=${config.gtkPath} && make && make install`,
        `cd ${config.src}/xinput-1.5.4/  && ./configure --prefix=${config.gtkPath} && make && make install`,
    ])


const installGlib = async () =>
    await runBash([
        `cd ${config.src}/zlib-1.2.11/  && ./configure --prefix=${config.gtkPath} && make && make install`,
        `cd ${config.src}/m4-1.4.19/  && ./configure --prefix=${config.gtkPath} && make && make install`,
        `cd ${config.src}/pcre2-10.40/  && ./configure --prefix=${config.gtkPath} && make && make install`,
        `cd ${config.src}/libffi-3.4.4/  && ./configure --prefix=${config.gtkPath} && make && make install`,
        `cd ${config.src}/pcre-8.13/  && ./configure --prefix=${config.gtkPath} && make && make install`,
        `cd ${config.src}/libpng-1.6.37/ && ./configure CPPFLAGS="-I${config.gtkPath}/include" LDFLAGS="-L${config.gtkPath}/lib" --prefix=${config.gtkPath} && make && make install`,
        `cd ${config.src}/jpegsrc.v9d/jpeg-9d/  && ./configure --prefix=${config.gtkPath} && make && make install`,
        `cd ${config.src}/tiff-4.0.9/  && ./configure CPPFLAGS="-I${config.gtkPath}/include -I/home/user/libjpeg_BUILD/include" LDFLAGS="-L/home/user/zlib_BUILD/lib -L${config.gtkPath}/lib" --prefix=${config.gtkPath} && make && make install`,
        `cd ${config.src}/expat-2.5.0/  && ./configure --prefix=${config.gtkPath} && make && make install`,
        `cd ${config.src}/re2c-1.0.1/  && ./configure --prefix=${config.gtkPath} && make && make install`,
        `cd ${config.src}/gperf-3.1/  && ./configure --prefix=${config.gtkPath} && make && make install`,
        `cd ${config.src}/bison-3.2.3/  && ./configure --prefix=${config.gtkPath} && make && make install`,
        `cd ${config.src}/flex-2.6.1/  && ./configure --prefix=${config.gtkPath} && make && make install`,
        `cd ${config.src}/glib-2.56.2/  && ./configure --prefix=${config.gtkPath} --enable-libmount=no --with-pcre=internal && make && make install`,
    ])

const installPango = async () =>
    await runBash([
        `cd ${config.src}/freetype-2.11.1/  && ./configure --prefix=${config.gtkPath} && make && make install`,
        `cd ${config.src}/pixman-0.42.2/  && ./configure --prefix=${config.gtkPath} && make && make install`,
        // `cd ${config.src}/cairo-1.10.2/  && CPPFLAGS="-I${config.gtkPath}/include" LDFLAGS="-L${config.gtkPath}/lib" ./configure --prefix=${config.gtkPath}  --enable-xlib --enable-xlib-xcb  --enable-xcb`,
        `cd ${config.src}/harfbuzz-5.3.1/  && ./configure --prefix=${config.gtkPath} && make && make install`,
        `cd ${config.src}/fontconfig-2.12.6/  && ./configure --prefix=${config.gtkPath} && make && make install`,
        `cd ${config.src}/cairo-1.10.2/  && CPPFLAGS="-I${config.gtkPath}/include" LDFLAGS="-L${config.gtkPath}/lib" ./configure --prefix=${config.gtkPath}  --enable-xlib --enable-xlib-xcb --enable-xcb && make && make install`, //для связки каиро с фритайпом
        `cd ${config.src}/pango-1.30.1/  && ./configure --prefix=${config.gtkPath} && make && make install`,
    ])

const installGDK = async () => await runBash([`cd ${config.src}/gdk-pixbuf-2.23.5/  && ./configure  CPPFLAGS="-I${config.gtkPath}/include" LDFLAGS="-L${config.gtkPath}/lib" --prefix=${config.gtkPath} && make && make install`])

const installAtk = async () => await runBash([`cd ${config.src}/atk-2.9.4/  && ./configure --prefix=${config.gtkPath} && make && make install`])

const installGTK = async () => {

    await runBash([`cd ${config.src}/gtk+-3.3.2/  && ./configure --prefix=${config.gtkPath} --x-includes=${config.gtkPath}/include --x-libraries=${config.gtkPath}/lib`])

    await fs.readFile(`${config.src}/gtk+-3.3.2/demos/gtk-demo/geninclude.pl`, async (err, content) => {
        if (err) terminate(err)

        await fs.writeFile(
            `${config.src}/gtk+-3.3.2/demos/gtk-demo/geninclude.pl`,
            `${content.toString().replace(/defined/g, '')}`,
            (err) => {
                if (err) terminate(err)
            }
        )
    })
    await fs.readFile(`${config.src}/gtk+-3.3.2/demos/gtk-demo/geninclude.pl.in`, async (err, content) => {
        if (err) terminate(err)

        await fs.writeFile(
            `${config.src}/gtk+-3.3.2/demos/gtk-demo/geninclude.pl.in`,
            `${content.toString().replace(/defined/g, '')}`,
            (err) => {
                if (err) terminate(err)
            }
        )
    })
    await runBash([`cd ${config.src}/gtk+-3.3.2/ make && make install`])
}
const buildGtk = async () => {
    // await installPrimaryBins()
    // await installPKGConfig()
    // await installXLibs()
    // await installGlib()
    // await installPango()
    await installGDK()
    await installAtk()
    await installGTK()
}

buildGtk()