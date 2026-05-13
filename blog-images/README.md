# Blog Images Folder

This folder is for storing images for blog posts.

## Usage

Place your blog post images in this folder and reference them in the blog data.

## Image Guidelines

### Recommended Specifications:
- **Format**: JPG or PNG
- **Dimensions**: 800x600px or 1200x800px (landscape)
- **File Size**: Under 500KB for optimal loading
- **Quality**: 80-90% compression

### Naming Convention:
Use descriptive names that match your blog content:
- `yaowarat-street-food.jpg`
- `talad-noi-market.jpg`
- `bangkok-night-scene.jpg`
- `street-art-mural.jpg`

### Example Usage in Code:
```javascript
{
  id: 'my-blog-post',
  title: 'My Blog Title',
  image: 'blog-images/yaowarat-street-food.jpg',
  // ... rest of blog data
}
```

## Current Blog Posts

The following blog posts are available and can use custom images:

1. **yaowarat-10-must-try** - 10 Street Food ที่ต้องลองก่อนตายที่เยาวราช
2. **songwad-talad-noi** - ทรงวาด-ตลาดน้อย: ย่านประวัติศาสตร์ที่ไม่เคยหลับ
3. **street-art-alleys** - Street Art ในตรอกเล็กๆ: ศิลปะที่ซ่อนตัวอยู่
4. **bantat-thong-nightlife** - บรรทัดทอง: แหล่งรวมตัวของคนนอนดึก
5. **talad-phlu-legend** - ตลาดพลู: ตำนานความอร่อยแห่งฝั่งธนบุรี
6. **bang-rak-breakfast** - บางรัก: ศึกมื้อเช้าและเป็ดย่างในตำนาน
7. **yotsae-sukiyaki** - ถนนยศเส: สุกี้กระทะร้อนและไอติมหม้อไฟ
8. **nang-loeng-traditional** - ตลาดนางเลิ้ง: อาหารไทยโบราณที่หาทานยาก
9. **khao-san-rambutri** - ข้าวสาร & รามบุตรี: มากกว่าแค่ที่ปาร์ตี้
10. **or-tor-kor-premium** - ตลาด อ.ต.ก.: สตรีทฟู้ดระดับพรีเมียม

## Tips

- Use high-quality images that represent the blog content
- Ensure images are properly compressed for web
- Consider using images that show food, locations, or atmosphere
- Make sure you have rights to use the images

---

**Note**: Currently, blog posts use Unsplash placeholder images. Replace them with your own images by:
1. Adding your image to this folder
2. Updating the `image` property in `js/stories-blog.js`
