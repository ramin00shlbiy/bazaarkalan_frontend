// داده‌های محصولات
const allProducts = [
    {
        id: "cake-001",
        name: "کیک شکلاتی",
        price: "500",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1089&q=80",
        details: {
            title: "جزئیات کیک شکلاتی",
            content: `
                <p>این کیک شکلاتی با بهترین مواد اولیه و بدون هیچ گونه مواد نگهدارنده تهیه شده است. از ویژگی‌های این محصول:</p>
                <ul>
                    <li>حاوی شکلات مرغوب بلژیکی</li>
                    <li>فاقد مواد نگهدارنده</li>
                    <li>مناسب برای افراد دیابتی (نسخه بدون قند)</li>
                    <li>حجم: ۱ کیلوگرم</li>
                    <li>ماندگاری: ۵ روز در یخچال</li>
                </ul>
            `
                    id: "tea-001",
        name: "چای مخصوص",
        price: "350",
        image: "https://images.unsplash.com/photo-1563822245302-272c9e0e71e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        details: {
            title: "جزئیات چای مخصوص",
            content: `
                <p>چای مخصوص با ترکیبی منحصر به فرد از برگ‌های چای مرغوب و گیاهان معطر. از ویژگی‌های این محصول:</p>
                <ul>
                    <li>ترکیبی از چای سیاه مرغوب و گیاهان معطر</li>
                    <li>عاری از هرگونه اسانس مصنوعی</li>
                    <li>مناسب برای مصرف روزانه</li>
                    <li>بسته‌بندی نفوذناپذیر برای حفظ عطر و طعم</li>
                    <li>وزن خالص: ۴۵۰ گرم</li>
                </ul>
            `
        }
    },
    {
        id: "bread-001",
        name: "نان شیرمال",
        price: "300",
        image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
        details: {
            title: "جزئیات نان شیرمال",
            content: `
                <p>نان شیرمال تازه پخته شده با روش سنتی و مواد اولیه مرغوب. از ویژگی‌های این محصول:</p>
                <ul>
                    <li>تهیه شده از آرد ستاره</li>
                    <li>فاقد هرگونه جوش شیرین</li>
                    <li>حاوی شیر تازه</li>
                    <li>تازه پخته شده روزانه</li>
                    <li>مصرف بهتر: همان روز تولید</li>
                </ul>
            `
        id: "tea-001",
        name: "چای مخصوص",
        price: "350",
        image: "https://images.unsplash.com/photo-1563822245302-272c9e0e71e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        details: {
            title: "جزئیات چای مخصوص",
            content: `
                <p>چای مخصوص با ترکیبی منحصر به فرد از برگ‌های چای مرغوب و گیاهان معطر. از ویژگی‌های این محصول:</p>
                <ul>
                    <li>ترکیبی از چای سیاه مرغوب و گیاهان معطر</li>
                    <li>عاری از هرگونه اسانس مصنوعی</li>
                    <li>مناسب برای مصرف روزانه</li>
                    <li>بسته‌بندی نفوذناپذیر برای حفظ عطر و طعم</li>
                    <li>وزن خالص: ۴۵۰ گرم</li>
                </ul>
            `
        }
    },
    {
        id: "sweet-001",
        name: "شیرینی خشک",
        price: "400",
        image: "https://images.unsplash.com/photo-1612203985729-70726954388c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80",
        details: {
            title: "جزئیات شیرینی خشک",
            content: `
                <p>شیرینی خشک سنتی با طعمی بی‌نظیر و کیفیت بالا. از ویژگی‌های این محصول:</p>
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
        image: "https://images.unsplash.com/photo-1563822245302-272c9e0e71e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        details: {
            title: "جزئیات چای مخصوص",
            content: `
                <p>چای مخصوص با ترکیبی منحصر به فرد از برگ‌های چای مرغوب و گیاهان معطر. از ویژگی‌های این محصول:</p>
                <ul>
                    <li>ترکیبی از چای سیاه مرغوب و گیاهان معطر</li>
                    <li>عاری از هرگونه اسانس مصنوعی</li>
                    <li>مناسب برای مصرف روزانه</li>
                    <li>بسته‌بندی نفوذناپذیر برای حفظ عطر و طعم</li>
                    <li>وزن خالص: ۴۵۰ گرم</li>
                </ul>
            `
        }
    }
];
