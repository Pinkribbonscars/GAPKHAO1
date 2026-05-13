# Testing Instructions - Street Food Page

## Problem
The Street Food page is still showing 9 items instead of 3.

## Solution Applied
I've updated the code to ensure the configuration loads before the page renders.

## How to Test

### Step 1: Clear Browser Cache
**This is CRITICAL!** Your browser is caching the old JavaScript.

**Windows:**
- Press `Ctrl + Shift + Delete`
- Select "Cached images and files"
- Click "Clear data"

**Or use Hard Refresh:**
- Press `Ctrl + F5` (Windows)
- Or `Ctrl + Shift + R` (Windows)

### Step 2: Open Browser Console
1. Open `street-food.html` in your browser
2. Press `F12` to open Developer Tools
3. Click on the "Console" tab

### Step 3: Check Console Messages
You should see these messages:
```
✅ Loaded street food config: 3 items per category
✅ Config loaded, initializing with 3 items per category
```

If you see:
```
⏳ Waiting for config...
```
Then the config file is not loading properly.

### Step 4: Verify Configuration File
Open `config/street-food-config.json` and verify it looks like this:

```json
{
  "itemsPerCategory": 3,
  "linkToExplore": true,
  "categories": {
    "main": [
      "khao-man-gai",
      "charoen-saeng",
      "prajak-ped"
    ],
    "dessert": [
      "ka-pai",
      "bua-loy",
      "khanom-buang"
    ],
    "snack": [
      "moo-ping",
      "look-chin",
      "guay-jub-stereo"
    ],
    "noodle": [
      "thip-samai",
      "toy-tuay",
      "yen-ta-fo"
    ]
  }
}
```

### Step 5: Check Network Tab
1. In Developer Tools, click "Network" tab
2. Refresh the page (F5)
3. Look for `street-food-config.json` in the list
4. Click on it
5. Check the "Response" tab - it should show the JSON above

If you see a 404 error, the config file path is wrong.

## Troubleshooting

### Issue: Still showing 9 items

**Solution 1: Force Clear Cache**
```
1. Close ALL browser tabs
2. Clear browser cache completely
3. Restart browser
4. Open street-food.html
```

**Solution 2: Check File Paths**
Make sure these files exist:
- `config/street-food-config.json`
- `js/config-loader.js`
- `js/street-food.js`

**Solution 3: Check Console for Errors**
Open F12 console and look for red error messages.
Common errors:
- `Failed to fetch` - config file not found
- `Unexpected token` - JSON syntax error
- `streetFoodConfig is not defined` - config not loading

### Issue: Config file not loading

**Check 1: File Location**
The config file must be at:
```
GAPKHAO1/
  config/
    street-food-config.json  ← Here!
```

**Check 2: JSON Syntax**
Validate your JSON at: https://jsonlint.com/
Copy the contents of `street-food-config.json` and paste it there.

**Check 3: Server Path**
If you're using a local server, make sure it's serving from the GAPKHAO1 folder.

### Issue: Console shows "Waiting for config..."

This means config-loader.js is running but can't find the config file.

**Fix:**
1. Check that `config/street-food-config.json` exists
2. Check browser Network tab for 404 errors
3. Verify the file path in config-loader.js

## Manual Test

If automatic loading isn't working, you can test manually:

1. Open `street-food.html`
2. Open Console (F12)
3. Type this command:
```javascript
window.streetFoodConfig = {
  itemsPerCategory: 3,
  linkToExplore: true,
  categories: {
    main: ["khao-man-gai", "charoen-saeng", "prajak-ped"],
    dessert: ["ka-pai", "bua-loy", "khanom-buang"],
    snack: ["moo-ping", "look-chin", "guay-jub-stereo"],
    noodle: ["thip-samai", "toy-tuay", "yen-ta-fo"]
  }
};
```
4. Press Enter
5. Refresh the page (F5)

If this works, the problem is with loading the config file.

## Expected Result

After clearing cache and refreshing:

**อาหารจานหลัก (Main):**
- โกโก้ข้าวมันไก่ประตูน้ำ
- ข้าวขาหมูสีมรกต
- ประจักษ์เป็ดย่าง
(Only 3 items)

**ของหวาน (Dessert):**
- ก พาย
- บัวลอยเทคูเก้า
- ขนมเบื้องไทยขาวัง
(Only 3 items)

**ของกินเล่น (Snack):**
- หมูปิ้งเจี๊ยบวัน
- ลูกชิ้นแพร่งนรา
- ขนมเบื้องไทยโบราณ
(Only 3 items)

**อาหารเส้น (Noodle):**
- ทิพย์สมัย ผัดไทยประตูผี
- ต้อยถ้วยเคี้ยมเอื้อ
- นายอ้วนเย็นตาโฟนะเค็ง
(Only 3 items)

## Still Not Working?

If you've tried everything above and it's still showing 9 items:

1. Take a screenshot of the browser console (F12)
2. Take a screenshot of the Network tab showing the config file
3. Check if there are any red error messages

The most common issue is **browser caching**. Make sure to:
- Clear cache completely
- Use Ctrl+F5 (hard refresh)
- Try in a different browser (Chrome, Firefox, Edge)
- Try in Incognito/Private mode

## Quick Fix: Disable Cache in DevTools

1. Open DevTools (F12)
2. Go to "Network" tab
3. Check the box "Disable cache"
4. Keep DevTools open
5. Refresh the page

This ensures the browser always loads fresh files while DevTools is open.

---

**Need Help?**
Check the console messages - they will tell you exactly what's happening!
