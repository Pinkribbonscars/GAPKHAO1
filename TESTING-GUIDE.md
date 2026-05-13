# GAPKHAO Testing Guide - Street Food & Explore Integration

## Overview
This guide covers testing the Street Food → Explore page integration and language switching functionality.

---

## Pre-Testing Checklist

✅ **40 Restaurants Total**
- 4 original locations (IDs 1-4)
- 36 new locations from Street Food page (IDs 5-40)
- All locations have GPS coordinates, ratings, hours, addresses, transport info, phone numbers, and 4 images each

✅ **No Filters**
- Filter tabs removed from Explore page
- All 40 restaurants visible in search and cards

✅ **Code Implementation**
- `goToExplore()` function in street-food.js ✅
- sessionStorage passing in explore-new.js ✅
- Auto-selection logic implemented ✅
- Translation keys added ✅
- Category tabs fixed ✅

---

## Test 1: Street Food Page Navigation

### Test 1.1: Page Load
**Steps:**
1. Open `street-food.html` in browser
2. Verify page loads without errors
3. Check console for any JavaScript errors

**Expected Results:**
- Page loads successfully
- No console errors
- Food grid displays with 9 main dishes visible
- Category tabs visible at top

---

### Test 1.2: Category Switching
**Steps:**
1. Click "ของหวาน" (Desserts) tab
2. Verify food grid updates
3. Click "ของกินเล่น" (Snacks) tab
4. Verify food grid updates
5. Click "อาหารเส้น" (Noodles) tab
6. Verify food grid updates

**Expected Results:**
- Each category displays correct number of items
- Smooth fade transition between categories
- All food cards display correctly

---

### Test 1.3: Food Card Click
**Steps:**
1. Click on any food card (e.g., "โกโก้ข้าวมันไก่ประตูน้ำ")
2. Verify location modal opens
3. Check modal displays:
   - Restaurant name (Thai)
   - English name
   - Location
   - Description
   - Rating
   - Price
   - Hours
   - Phone number
   - GPS coordinates

**Expected Results:**
- Modal opens smoothly
- All information displays correctly
- Modal has close button (✕)

---

### Test 1.4: Explore Button Click
**Steps:**
1. Click on any food card to open modal
2. Scroll down in modal to see buttons
3. Click "ดูในหน้า Explore →" button
4. Wait for page redirect

**Expected Results:**
- Button is visible and clickable
- Page redirects to explore.html
- No errors in console
- Explore page loads

---

## Test 2: Explore Page Auto-Selection

### Test 2.1: Auto-Selection from Street Food
**Steps:**
1. From Street Food page, click food card
2. Click "ดูในหน้า Explore →" button
3. Wait for Explore page to load (2-3 seconds)
4. Observe the location cards and detail panel

**Expected Results:**
- Explore page loads
- Correct restaurant is auto-selected
- Detail panel shows restaurant information
- Map pans to restaurant location
- Restaurant card is highlighted in sidebar

**Example Test Cases:**
- Street Food: "โกโก้ข้าวมันไก่ประตูน้ำ" (13.7501, 100.5413)
  → Explore: Should select location ID 5
  
- Street Food: "เจริญแสงสีลม" (13.7237, 100.5173)
  → Explore: Should select location ID 6

---

### Test 2.2: Direct Explore Page Load
**Steps:**
1. Open explore.html directly (not from Street Food)
2. Wait for page to load
3. Observe which restaurant is selected

**Expected Results:**
- Page loads successfully
- First restaurant (ก๋วยจั๊บนายเอ็ก) is selected by default
- Detail panel shows first restaurant info
- No errors in console

---

## Test 3: Search Functionality

### Test 3.1: Search by Thai Name
**Steps:**
1. Open Explore page
2. Click search box
3. Type "ก๋วยจั๊บ" (Rolled Noodles)
4. Observe results

**Expected Results:**
- Search filters results in real-time
- Shows all restaurants with "ก๋วยจั๊บ" in name
- Results: ก๋วยจั๊บนายเอ็ก, ก้วยจั๊บมีสเตอร์โอ

---

### Test 3.2: Search by English Name
**Steps:**
1. Open Explore page
2. Click search box
3. Type "Pad Thai"
4. Observe results

**Expected Results:**
- Search works with English names
- Shows matching restaurants
- Results: ทิพย์สมัย ผัดไทยประตูผี

---

### Test 3.3: Search by Area
**Steps:**
1. Open Explore page
2. Click search box
3. Type "เยาวราช" (Yaowarat)
4. Observe results

**Expected Results:**
- Search works with area names
- Shows all restaurants in Yaowarat area
- Multiple results displayed

---

### Test 3.4: Search Clear
**Steps:**
1. Type search query
2. Clear search box
3. Observe results

**Expected Results:**
- All 40 restaurants visible again
- Search resets properly

---

## Test 4: Language Switching

### Test 4.1: Thai to Chinese on Street Food Page
**Steps:**
1. Open street-food.html
2. Verify text is in Thai (default)
3. Click "中文" button in top right
4. Observe all text changes

**Expected Results:**
- Hero section text changes to Chinese
- Category tabs change to Chinese:
  - "อาหารจานหลัก" → "主菜"
  - "ของหวาน" → "甜点"
  - "ของกินเล่น" → "小吃"
  - "อาหารเส้น" → "面食"
- Food card titles change to Chinese
- All labels translate

---

### Test 4.2: Chinese to Thai on Street Food Page
**Steps:**
1. On Street Food page with Chinese selected
2. Click "ไทย" button
3. Observe all text changes back to Thai

**Expected Results:**
- All text reverts to Thai
- Category tabs show Thai text
- Food cards show Thai names

---

### Test 4.3: Language Switching on Explore Page
**Steps:**
1. Open Explore page
2. Click "中文" button
3. Observe changes:
   - Search placeholder: "ค้นหาสถานที่..." → "搜索地点..."
   - Restaurant titles change to Chinese
   - Detail panel text changes to Chinese
   - All buttons and labels translate

**Expected Results:**
- All text translates correctly
- Search placeholder updates
- Restaurant names show Chinese versions
- No broken translations

---

### Test 4.4: Language Persistence
**Steps:**
1. Open Street Food page
2. Switch to Chinese
3. Click food card
4. Click "ดูในหน้า Explore →"
5. Observe Explore page language

**Expected Results:**
- Explore page loads in Chinese
- Language preference persists across pages
- All text is in Chinese

---

## Test 5: Location Card Interaction

### Test 5.1: Click Location Card
**Steps:**
1. Open Explore page
2. Click on any location card in sidebar
3. Observe detail panel

**Expected Results:**
- Detail panel updates with restaurant info
- Map pans to restaurant location
- Card is highlighted
- All information displays correctly

---

### Test 5.2: View All Details
**Steps:**
1. Click location card
2. Scroll through detail panel
3. Verify all sections visible:
   - Restaurant name and rating
   - Address
   - Transport options
   - Phone number
   - Images carousel
   - "Start Walking" button

**Expected Results:**
- All sections display properly
- Images load correctly
- Text is readable
- No layout issues

---

## Test 6: Map Functionality

### Test 6.1: Map Loads
**Steps:**
1. Open Explore page
2. Wait for map to load
3. Observe map display

**Expected Results:**
- Map displays Bangkok area
- Map is interactive (can zoom/pan)
- No map errors in console

---

### Test 6.2: Map Markers
**Steps:**
1. Open Explore page
2. Observe map markers
3. Click on different location cards
4. Observe map pans to new location

**Expected Results:**
- Markers appear for all 40 restaurants
- Map pans smoothly when selecting new location
- Active marker is highlighted

---

## Test 7: Responsive Design

### Test 7.1: Desktop View
**Steps:**
1. Open pages on desktop (1920x1080)
2. Verify layout
3. Test all interactions

**Expected Results:**
- Layout looks good
- All elements properly positioned
- No overflow or layout issues

---

### Test 7.2: Tablet View
**Steps:**
1. Open pages on tablet (768x1024)
2. Verify layout adapts
3. Test touch interactions

**Expected Results:**
- Layout adapts to tablet size
- Touch interactions work
- No horizontal scrolling

---

### Test 7.3: Mobile View
**Steps:**
1. Open pages on mobile (375x667)
2. Verify layout adapts
3. Test touch interactions

**Expected Results:**
- Layout adapts to mobile size
- Sidebar and map stack properly
- Touch interactions work
- No horizontal scrolling

---

## Test 8: Error Handling

### Test 8.1: Console Errors
**Steps:**
1. Open browser developer tools (F12)
2. Go to Console tab
3. Open Street Food page
4. Check for errors
5. Open Explore page
6. Check for errors
7. Test all interactions

**Expected Results:**
- No JavaScript errors
- No 404 errors for resources
- No warnings about missing translations

---

### Test 8.2: Network Errors
**Steps:**
1. Open Network tab in developer tools
2. Reload pages
3. Check all requests

**Expected Results:**
- All resources load successfully
- No failed requests
- Images load properly

---

## Test 9: Data Verification

### Test 9.1: Location Count
**Steps:**
1. Open Explore page
2. Count visible location cards
3. Check JavaScript console

**Expected Results:**
- Exactly 40 location cards visible
- locationsData array has 40 entries
- All coordinates are valid

---

### Test 9.2: Coordinate Matching
**Steps:**
1. Test several Street Food → Explore transitions
2. Verify correct restaurants are selected

**Test Cases:**
- ID 5: 13.7501, 100.5413 ✅
- ID 6: 13.7237, 100.5173 ✅
- ID 10: 13.7593, 100.4984 ✅
- ID 20: 13.7258, 100.4925 ✅
- ID 40: 13.7410, 100.5094 ✅

**Expected Results:**
- All coordinates match correctly
- Auto-selection works for all locations

---

## Test 10: Performance

### Test 10.1: Page Load Time
**Steps:**
1. Open Network tab
2. Reload Street Food page
3. Note load time
4. Reload Explore page
5. Note load time

**Expected Results:**
- Street Food page loads in < 3 seconds
- Explore page loads in < 3 seconds
- Images load progressively

---

### Test 10.2: Interaction Responsiveness
**Steps:**
1. Click category tabs rapidly
2. Type in search box
3. Click location cards
4. Switch languages

**Expected Results:**
- All interactions respond immediately
- No lag or delays
- Smooth animations

---

## Quick Test Checklist

Use this for quick verification:

- [ ] Street Food page loads
- [ ] Food cards display correctly
- [ ] Category tabs work
- [ ] Location modal opens
- [ ] "ดูในหน้า Explore" button works
- [ ] Explore page loads
- [ ] Restaurant auto-selects
- [ ] Search works (Thai, English, Area)
- [ ] Language switching works (Thai ↔ Chinese)
- [ ] Category tabs translate
- [ ] Map displays
- [ ] Location cards clickable
- [ ] Detail panel shows info
- [ ] No console errors
- [ ] Responsive on mobile/tablet
- [ ] All 40 restaurants visible
- [ ] Coordinate matching works

---

## Troubleshooting

### Issue: Restaurant not auto-selecting
**Solution:**
1. Check browser console for errors
2. Verify sessionStorage is enabled
3. Check coordinate tolerance (0.0001 degrees)
4. Verify GPS coordinates match exactly

### Issue: Language not switching
**Solution:**
1. Check if `data-translate` attributes are present
2. Verify translation keys exist in language-switcher-cn.js
3. Check browser console for errors
4. Clear browser cache and reload

### Issue: Search not working
**Solution:**
1. Check search input has correct ID
2. Verify search function is called
3. Check console for JavaScript errors
4. Verify location data has searchable fields

### Issue: Map not displaying
**Solution:**
1. Check Leaflet library is loaded
2. Verify map container has correct ID
3. Check browser console for errors
4. Verify coordinates are valid

---

## Success Criteria

✅ All tests pass
✅ No console errors
✅ All 40 restaurants visible
✅ Street Food → Explore navigation works
✅ Auto-selection works correctly
✅ Language switching works
✅ Search functionality works
✅ Responsive design works
✅ Performance is acceptable
✅ Ready for production

---

## Sign-Off

**Tested By:** [Your Name]
**Date:** [Date]
**Status:** ✅ READY FOR PRODUCTION

---

**Last Updated:** May 13, 2026
**Version:** 1.0
