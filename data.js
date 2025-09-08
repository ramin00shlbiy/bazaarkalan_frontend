// داده‌های دسته‌بندی‌ها با شناسه منحصر به فرد
const categories = [
    { id: 520, name: "نوشیدنی" },
    { id: 580, name: "کیک" },
    { id: 530, name: "کلچه" }
];

// داده‌های محصولات
const allProducts = [
    {
        id: "cake-001",
        name: "کیک ککویی",
        price: "500",
        categoryId: 580, // شناسه دسته‌بندی کیک
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwa90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1089&q=80",
        details: {
            title: "جزئیات کیک ککویی",
            content: `
                <p>این کیک ککویی با بهترین مواد اولیه و بدون هیچ گونه مواد نگهدارنده تهیه شده است. از ویژگی‌های این محصول:</p>
                <ul>
                    <li>حاوی ککو مرغوب بلژیکی</li>
                    <li>فاقد مواد نگهدارنده</li>
                    <li>مناسب برای افراد دیابتی (نسخه بدون قند)</li>
                    <li>حجم: ۱ کیلوگرم</li>
                    <li>ماندگاری: ۵ روز در یخچال</li>
                </ul>
            `
        }
    },
    {
        id: "bread-001",
        name: "کلچه با طعم قهوه",
        price: "300",
        categoryId: 530, // شناسه دسته‌بندی کلچه
        image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
        details: {
            title: "جزئیات کلچه با طعم قهوه",
            content: `
                <p>کلچه با طعم قهوه تازه پخته شده با روش سنتی و مواد اولیه مرغوب. از ویژگی‌های این محصول:</p>
                <ul>
                    <li>تهیه شده از آرد ستاره</li>
                    <li>فاقد هرگونه قند شیرین</li>
                    <li>حاوی شیر تازه</li>
                    <li>تازه پخته شده روزانه</li>
                    <li>مصرف بهتر: همان روز تولید</li>
                </ul>
            `
        }
    },
    {
        id: "sweet-001",
        name: "کیک خامه خوشک",
        price: "400",
        categoryId: 580, // شناسه دسته‌بندی کیک
        image: "https://images.unsplash.com/photo-1612203985729-70726954388c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80",
        details: {
            title: "جزئیات کیک خامه خشک",
            content: `
                <p>کیک خامه سنتی با طعمی بی‌نظیر و کیفیت بالا. از ویژگی‌های این محصول:</p>
                <ul>
                    <li>انواع مختلف: بادامی، نارگیلی، پستهای</li>
                    <li>تهیه شده با بهترین مواد اولیه</li>
                    <li>فاقد روغن نباتی</li>
                    <li>بسته‌بندی شکیل و مناسب برای سوغات</li>
                    <li>ماندگاری: ۳۰ روز در دمای محیط</li>
                </ul>
            `
        }
    },
    {
        id: "tea-001",
        name: "چای مخصوص",
        price: "350",
        categoryId: 520, // شناسه دسته‌بندی نوشیدنی
        image: "https://images.unsplash.com/photo-1563822245302-272c9e0e71e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        details: {
            title: "جزئیات چای مخصوص",
            content: `
                <p>چای مخصوص با ترکیبی منحصر به فرد من از بهترین برگ‌های چای و گیاهان معطر. از ویژگی‌های این محصول:</p>
                <ul>
                    <li>ترکیبی من از چای سیاه مرغوب و گیاهان معطر</li>
                    <li>عاری از هرگونه اسانس مصنوعی</li>
                    <li>مناسب برای مصرف روزانه</li>
                    <li>بسته‌بندی نفوذناپذیر برای حفظ عطر و طعم</li>
                    <li>وزن خالص: ۴۵۰ گرام</li>
                </ul>
            `
        }
    }
];
