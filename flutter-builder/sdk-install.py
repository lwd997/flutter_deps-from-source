import os, shutil, sys, subprocess, time
# from distutils.dir_util import copy_tree

src_dir = '/home/' + os.getlogin() + '/flutter-src'
sdk_path = '/home/' + os.getlogin() + '/android-sdk' 
emulator_xml = '''
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
'''

platforms_xml = '''
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
'''
build_tools_xml = '''
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
'''


#add playstore apis ;)

# def spinning_cursor():
#     while True:
#         for cursor in '|/-\\':
#             yield cursor

# spinner = spinning_cursor()

# # def spin():
# #     for _ in range(50):
# #         sys.stdout.write(next(spinner))
# #         sys.stdout.flush()
# #         time.sleep(0.1)
# #         sys.stdout.write('\b')

if len(sys.argv):
    for arg in sys.argv:
        if '--sdk-path' in arg:
            sdk_path = arg.split('=')[1]
        elif '--src-dir' in arg:
            src_dir = arg.split('=')[1]
        


if not os.path.exists(sdk_path):
    os.makedirs(sdk_path)

# build-tools

for filename in os.listdir(sdk_path):
    file_path = os.path.join(sdk_path, filename)
    try:
        if os.path.isfile(file_path) or os.path.islink(file_path):
            os.unlink(file_path)
        elif os.path.isdir(file_path):
            shutil.rmtree(file_path)
    except Exception as e:
        print('Failed to delete %s. Reason: %s' % (file_path, e))

# build-tools
print('creating build-tools')

# copy_tree(src_dir + '/build-tools_r33-linux', sdk_path + '/build-tools')
os.system(f'cp -r {src_dir}/build-tools_r33-linux {sdk_path}/build-tools')
os.rename(sdk_path + '/build-tools/android-13', sdk_path + '/build-tools/30.0.3')
with open(sdk_path + '/build-tools/30.0.3/package.xml', 'w') as file:
    file.write(build_tools_xml)

print('build-tools done ✓')


# platforms
print('creating platforms')

# copy_tree(src_dir + '/platform-33_r02', sdk_path + '/platforms')
os.system(f'cp -r {src_dir}/platform-33_r02 {sdk_path}/platforms')
os.rename(sdk_path + '/platforms/android-13', sdk_path + '/platforms/android-31')
with open(sdk_path + '/platforms/android-31/package.xml', 'w') as file:
    file.write(platforms_xml)
print('platforms done ✓')

# cmdline-tools
print('creating cmdline-tools')

# copy_tree(src_dir + '/commandlinetools-linux-9123335_latest', sdk_path + '/cmdline-tools')
os.system(f'cp -r {src_dir}/commandlinetools-linux-9123335_latest {sdk_path}/cmdline-tools')

os.rename(sdk_path + '/cmdline-tools/cmdline-tools', sdk_path + '/cmdline-tools/latest')
print('cmdline-tools done ✓')

# platform-tools
print('creating platform-tools')

# copy_tree(src_dir + '/platform-tools_r33.0.1-linux/platform-tools', sdk_path + '/platform-tools')
os.system(f'cp -r {src_dir}/platform-tools_r33.0.1-linux/platform-tools {sdk_path}/platform-tools')

print('platform-tools done ✓')


#emulator 
print('creating emulator')
# os.makedirs(sdk_path + '/emulator')
# copy_tree(src_dir + '/emulator-linux_x64-9189900/emulator', sdk_path + '/emulator')
os.system(f'cp -r {src_dir}/emulator-linux_x64-9189900/emulator {sdk_path}/emulator')

with open(sdk_path + '/emulator/package.xml', 'w') as file:
    file.write(emulator_xml)
print('emulator done ✓')

#licenses
print('creating licenses')
licenses_path = sdk_path + '/licenses'

os.makedirs(licenses_path)
with open(licenses_path + '/android-sdk-license', 'w') as file:
    file.write('24333f8a63b6825ea9c5514f83c2829b004d1fee')

with open(licenses_path + '/android-sdk-arm-dbt-license', 'w') as file:
    file.write('859f317696f67ef3d7f30a50a5560e7834b43903')

with open(licenses_path + '/android-googletv-license', 'w') as file:
    file.write('601085b94cd77f0b54ff86406957099ebe79c4d6')


with open(licenses_path + '/android-sdk-preview-license', 'w') as file:
    file.write('84831b9409646a918e30573bab4c9c91346d8abd')

with open(licenses_path + '/google-gdk-license', 'w') as file:
    file.write('33b6a2b64607f11b759f320ef9dff4ae5c47d97a')

with open(licenses_path + '/mips-android-sysimage-license', 'w') as file:
    file.write('e9acab5b5fbb560a72cfaecce8946896ff6aab9d')

print('licenses done ✓')

# system images
print('creating system-images')

os.makedirs(sdk_path + '/system-images/android-33')
os.makedirs(sdk_path + '/system-images/android-31')

#if os.path.exists(sdk_path + '/x86_64-33_r06(1)'): 
#    os.rename(src_dir + '/x86_64-33_r06(1)', src_dir + '/google_apis')

# copy_tree(src_dir + '/x86_64-31_r03', sdk_path + '/system-images/android-33/google_apis')
# copy_tree(src_dir + '/x86_64-31_r03', sdk_path + '/system-images/android-31/default')
# copy_tree(src_dir + '/x86_64-33_r06', sdk_path + '/system-images/android-33/google_apis_playstore')

os.system(f'cp -r {src_dir}/x86_64-31_r03 {sdk_path}/system-images/android-31/default')
os.system(f'cp -r {src_dir}/x86_64-33_r06 {sdk_path}/system-images/android-33/google_apis_playstore')
os.system(f'cp -r "{src_dir}/x86_64-33_r06(1)" {sdk_path}/system-images/android-33/google_apis')

# optimization ;)
# bash_string = 'tee '+ src_dir + '/x86_64-31_r03' + ' ' + sdk_path + '/system-images/android-33/google_apis' + ' < '+ sdk_path + '/system-images/android-31/default' +' >/dev/null'
# print(bash_string)
# copy_multiple = subprocess.run([bash_string])
# copy_multiple.wait()

print('system-images done ✓')
#sdk-tools
print('creating sdk-tools')
# copy_tree(src_dir + '/sdk-tools-linux-4333796', sdk_path + '/sdk-tools')
os.system(f'cp -r {src_dir}/sdk-tools-linux-4333796/tools {sdk_path}/tools')
print('sdk-tools done ✓')


#patcher
print('creating patcher')
# copy_tree(src_dir + '/sdk-tools-linux-4333796', sdk_path + '/sdk-tools')
os.makedirs(sdk_path + '/patcher')
os.system(f'cp -r {src_dir}/3534162-studio.sdk-patcher/sdk-patcher {sdk_path}/patcher/v4')


print('sdk-tools done ✓')

print('all done ✓✓✓')


