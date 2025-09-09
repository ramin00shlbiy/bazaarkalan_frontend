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
    },
    {
        id: "bread-002",
        name: "نان سنگک",
        price: "250",
        image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        details: {
            title: "جزئیات نان سنگک",
            content: `
                <p>نان سنگک تازه و سنتی با طعمی بی‌نظیر. از ویژگی‌های این محصول:</p>
                <ul>
                    <li>تهیه شده از آرد کامل</li>
                    <li>فاقد هرگونه مواد نگهدارنده</li>
                    <li>حاوی سبوس گندم</li>
                    <li>تازه پخته شده روزانه</li>
                    <li>مصرف بهتر: همان روز تولید</li>
                </ul>
            `
        }
    },
    {
        id: "sweet-002",
        name: "باقلوا",
        price: "600",
        image: "https://images.unsplash.com/photo-1587145824012-3b6edfaba293?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        details: {
            title: "جزئیات باقلوای خانگی",
            content: `
                <p>باقلوا خانگی با طعمی اصیل و کیفیت بالا. از ویژگی‌های این محصول:</p>
                <ul>
                    <li>تهیه شده با بهترین پسته و بادام</li>
                    <li>فاقد روغن نباتی</li>
                    <li>شیرین شده با عسل طبیعی</li>
                    <li>بسته‌بندی شکیل و مناسب برای سوغات</li>
                    <li>ماندگاری: ۲۰ روز در دمای محیط</li>
                </ul>
            `
        }
    },
    {
        id: "tea-002",
        name: "چای سبز",
        price: "400",
        image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80",
        details: {
            title: "جزئیات چای سبز",
            content: `
                <p>چای سبز با کیفیت عالی و خواص درمانی. از ویژگی‌های این محصول:</p>
                <ul>
                    <li>مناسب برای کاهش وزن و سلامتی</li>
                    <li>عاری از هرگونه اسانس مصنوعی</li>
                    <li>حاوی آنتی اکسیدان‌های طبیعی</li>
                    <li>بسته‌بندی نفوذناپذیر برای حفظ عطر و طعم</li>
                    <li>وزن خالص: ۴۰۰ گرم</li>
                </ul>
            `
        }
    },
    {
        id: "cake-002",
        name: "کیک میوه‌ای",
        price: "550",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1089&q=80",
        details: {
            title: "جزئیات کیک میوه‌ای",
            content: `
                <p>کیک میوه‌ای تازه با میوه‌های طبیعی. از ویژگی‌های این محصول:</p>
                <ul>
                    <li>حاوی میوه‌های تازه و طبیعی</li>
                    <li>فاقد مواد نگهدارنده</li>
                    <li>مناسب برای مهمانی‌ها و مراسم</li>
                    <li>حجم: ۱.۲ کیلوگرم</li>
                    <li>ماندگاری: ۳ روز در یخچال</li>
                </ul>
            `
        }
    },
    {
        id: "sweet-003",
        name: "کلوچه",
        price: "350",
        image: "https://images.unsplash.com/photo-1555507036-ab794f24d6c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        details: {
            title: "جزئیات کلوچه خانگی",
            content: `
                <p>کلوچه خانگی با طعمی بی‌نظیر و بافت نرم. از ویژگی‌های این محصول:</p>
                <ul>
                    <li>تهیه شده با بهترین مواد اولیه</li>
                    <li>حاوی کشمش و گردو</li>
                    <li>فاقد روغن نباتی</li>
                    <li>بسته‌بندی مناسب</li>
                    <li>ماندگاری: ۲۵ روز در دمای محیط</li>
                </ul>
            `
        }
    },
    {
        id: "tea-003",
        name: "چای سیاه",
        price: "300",
        image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80",
        details: {
            title: "جزئیات چای سیاه",
            content: `
                <p>چای سیاه مرغوب با عطر و طعم بی‌نظیر. از ویژگی‌های این محصول:</p>
                <ul>
                    <li>برگ‌های درشت و مرغوب</li>
                    <li>عاری از هرگونه اسانس مصنوعی</li>
                    <li>مناسب برای مصرف روزانه</li>
                    <li>بسته‌بندی نفوذناپذیر برای حفظ عطر و طعم</li>
                    <li>وزن خالص: ۵۰۰ گرم</li>
                </ul>
            `
        }
    }
];
