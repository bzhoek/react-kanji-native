#!/bin/bash -e

sourceIconName="icon.svg"
targetFolder="ios/kanjinative"

# Ensure we're running in location of script.
#cd "`dirname $0`"

# Check imagemagick is installed
# http://stackoverflow.com/questions/592620/check-if-a-program-exists-from-a-bash-script
command -v convert >/dev/null 2>&1 || { echo >&2 "I require imagemagick but it's not installed.  Aborting."; exit 1; }

iconPath="${targetFolder}/Images.xcassets/AppIcon.appiconset"

mkdir -p "$iconPath"

# clean it out
rm -rf $iconPath/*.png

# iPhone and iPad iOS7+ Sizes
rsvg-convert $sourceIconName -w 1024 -h 1024 -o $iconPath/appicon-1024.png
rsvg-convert $sourceIconName -w 120  -h 120  -o $iconPath/appicon-60@2x.png
rsvg-convert $sourceIconName -w 180  -h 180  -o $iconPath/appicon-60@3x.png
rsvg-convert $sourceIconName -w 76   -h 76   -o $iconPath/appicon-76.png
rsvg-convert $sourceIconName -w 152  -h 152  -o $iconPath/appicon-76@2x.png
rsvg-convert $sourceIconName -w 167  -h 167  -o $iconPath/appicon-83@2x.png
rsvg-convert $sourceIconName -w 40   -h 40   -o $iconPath/appicon-Small-40.png
rsvg-convert $sourceIconName -w 80   -h 80   -o $iconPath/appicon-Small-40@2x.png
rsvg-convert $sourceIconName -w 120  -h 120  -o $iconPath/appicon-Small-40@3x.png
rsvg-convert $sourceIconName -w 20   -h 20   -o $iconPath/appicon-Tiny.png
rsvg-convert $sourceIconName -w 40   -h 40   -o $iconPath/appicon-Tiny@2x.png
rsvg-convert $sourceIconName -w 60   -h 60   -o $iconPath/appicon-Tiny@3x.png
rsvg-convert $sourceIconName -w 29   -h 29   -o $iconPath/appicon-Small.png
rsvg-convert $sourceIconName -w 58   -h 58   -o $iconPath/appicon-Small@2x.png
rsvg-convert $sourceIconName -w 87   -h 87   -o $iconPath/appicon-Small@3x.png

cat > "$iconPath/Contents.json" << EOF
{
  "images" : [
    {
      "idiom" : "iphone",
      "scale" : "2x",
      "size" : "20x20",
      "filename" : "appicon-Tiny@2x.png"
    },
    {
      "idiom" : "iphone",
      "scale" : "3x",
      "size" : "20x20",
      "filename" : "appicon-Tiny@3x.png"
    },
    {
      "idiom" : "iphone",
      "scale" : "2x",
      "size" : "60x60"
	   ,"filename" : "appicon-60@2x.png"
    },
    {
      "idiom" : "iphone",
      "scale" : "3x",
      "size" : "60x60"
       ,"filename" : "appicon-60@3x.png"
    },
    {
      "idiom" : "ipad",
      "scale" : "1x",
      "size" : "76x76"
      ,"filename" : "appicon-76.png"
    },
    {
      "idiom" : "ipad",
      "scale" : "2x",
      "size" : "76x76"
      ,"filename" : "appicon-76@2x.png"
    },
    {
      "idiom" : "iphone",
      "scale" : "1x",
      "size" : "29x29"
      ,"filename" : "appicon-Small.png"
    },
    {
      "idiom" : "iphone",
      "scale" : "2x",
      "size" : "29x29"
      ,"filename" : "appicon-Small@2x.png"
    },
    {
      "idiom" : "iphone",
      "scale" : "3x",
      "size" : "29x29"
      ,"filename" : "appicon-Small@3x.png"
    },
    {
      "idiom" : "iphone",
      "scale" : "2x",
      "size" : "40x40"
      ,"filename" : "appicon-Small-40@2x.png"
    },
    {
      "idiom" : "iphone",
      "scale" : "3x",
      "size" : "40x40"
      ,"filename" : "appicon-Small-40@3x.png"
    },
    {
      "idiom" : "ipad",
      "scale" : "1x",
      "size" : "20x20",
      "filename" : "appicon-Tiny.png"
    },
    {
      "idiom" : "ipad",
      "scale" : "2x",
      "size" : "20x20",
      "filename" : "appicon-Tiny@2x.png"
    },
    {
      "idiom" : "ipad",
      "scale" : "1x",
      "size" : "40x40"
      ,"filename" : "appicon-Small-40.png"
    },
    {
      "idiom" : "ipad",
      "scale" : "2x",
      "size" : "40x40"
      ,"filename" : "appicon-Small-40@2x.png"
    },
    {
      "idiom" : "ipad",
      "scale" : "1x",
      "size" : "29x29"
      ,"filename" : "appicon-Small.png"
    },
    {
      "idiom" : "ipad",
      "scale" : "2x",
      "size" : "29x29"
      ,"filename" : "appicon-Small@2x.png"
    },
    {
      "idiom" : "ipad",
      "size" : "83.5x83.5",
      "filename" : "appicon-83@2x.png",
      "scale" : "2x"
    },
    {
      "idiom" : "ios-marketing",
      "size" : "1024x1024",
      "filename" : "appicon-1024.png",
      "scale" : "1x"
    }

  ],
  "info" : {
    "version" : 1,
    "author" : "xcode"
  },
  "properties" : {
    "pre-rendered" : true
  }
}
EOF
