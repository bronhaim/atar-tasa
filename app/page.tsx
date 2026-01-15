"use client";

import Image from "next/image";
import { Heart, Users, BookOpen, MessageCircle, Star, Mail, Phone, MapPin, Send, Sparkles } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("תודה! נחזור אליך בהקדם.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-beige-light">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-beige-dark/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="text-2xl font-semibold text-text-primary tracking-tight">עטר תעסה</div>
            <div className="hidden md:flex gap-10">
              <a href="#about" className="text-text-secondary hover:text-soft-green transition-colors text-sm font-medium">אודות</a>
              <a href="#services" className="text-text-secondary hover:text-soft-green transition-colors text-sm font-medium">שירותים</a>
              <a href="#testimonials" className="text-text-secondary hover:text-soft-green transition-colors text-sm font-medium">המלצות</a>
              <a href="#contact" className="text-text-secondary hover:text-soft-green transition-colors text-sm font-medium">צור קשר</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-text-primary mb-8 leading-[1.1] tracking-tight">
                עטר תעסה
                <br />
                <span className="font-semibold text-soft-green">מדריכת הורים וגננת</span>
              </h1>
              <p className="text-xl text-text-secondary mb-4 leading-relaxed font-light">
                שפה של חיבור בבית
              </p>
              <p className="text-lg text-text-secondary mb-10 leading-relaxed">
                מה שעובד בגן - יכול לעבוד גם בבית.
                <br />
                מתרגמת את השפה של הגן לתוך החיים בבית.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-soft-green text-white rounded-full font-medium hover:bg-soft-green-dark transition-all shadow-sm hover:shadow-md"
                >
                  <MessageCircle className="ml-2 w-5 h-5" />
                  קבעו פגישת ייעוץ
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-soft-green border-2 border-soft-green rounded-full font-medium hover:bg-soft-green/5 transition-all"
                >
                  <BookOpen className="ml-2 w-5 h-5" />
                  למידע נוסף
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-lg aspect-[4/5] max-w-lg mx-auto">
                <Image
                  src="/atar-hero.jpg"
                  alt="עטר תעסה - מדריכת הורים וגננת"
                  width={600}
                  height={750}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-light text-text-primary mb-6 tracking-tight">אודות עטר</h2>
            <div className="w-20 h-0.5 bg-soft-green mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 md:order-1">
              <div className="relative w-64 h-64 mx-auto md:mx-0">
                <div className="absolute inset-0 bg-light-green rounded-full"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden shadow-lg">
                  <Image
                    src="/atar-about.jpg"
                    alt="עטר תעסה"
                    width={256}
                    height={256}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <p className="text-lg text-text-secondary leading-relaxed font-light">
                שלום, אני עטר תעסה, מדריכת הורים וגננת עם ניסיון של שנים.
                אני מאמינה שכל משפחה יכולה ליצור סביבה חמה, תומכת ומעצימה עבור ילדיה.
              </p>
              <p className="text-lg text-text-secondary leading-relaxed font-light">
                הגישה שלי מבוססת על הקשבה, אמפתיה וכלים מעשיים המותאמים לצרכים הייחודיים של כל משפחה.
                אני כאן כדי ללוות אתכם בדרך ליצירת קשרים משמעותיים ולחיזוק הביטחון העצמי שלכם כהורים.
              </p>
              <div className="flex items-center gap-6 mt-10">
                <div className="flex-1 bg-light-blue rounded-2xl p-6 text-center">
                  <div className="text-4xl font-light text-soft-green mb-2">10+</div>
                  <div className="text-text-secondary text-sm">שנות ניסיון</div>
                </div>
                <div className="flex-1 bg-light-pink rounded-2xl p-6 text-center">
                  <div className="text-4xl font-light text-clay mb-2">500+</div>
                  <div className="text-text-secondary text-sm">משפחות</div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 bg-light-green rounded-3xl p-10 shadow-sm max-w-4xl mx-auto">
            <h3 className="text-2xl font-medium text-text-primary mb-8">הגישה שלי</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="bg-white/60 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Heart className="w-5 h-5 text-soft-green" strokeWidth={2} />
                </div>
                <span className="text-text-secondary font-light text-lg">הקשבה פעילה וסבלנות</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-white/60 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Heart className="w-5 h-5 text-soft-green" strokeWidth={2} />
                </div>
                <span className="text-text-secondary font-light text-lg">כלים מעשיים ויישומיים</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-white/60 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Heart className="w-5 h-5 text-soft-green" strokeWidth={2} />
                </div>
                <span className="text-text-secondary font-light text-lg">התאמה אישית לכל משפחה</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-white/60 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Heart className="w-5 h-5 text-soft-green" strokeWidth={2} />
                </div>
                <span className="text-text-secondary font-light text-lg">תמיכה וליווי לאורך הדרך</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-beige-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-light text-text-primary mb-6 tracking-tight">השירותים שלי</h2>
            <div className="w-20 h-0.5 bg-soft-green mx-auto"></div>
            <p className="text-lg text-text-secondary mt-8 max-w-2xl mx-auto font-light">
              אני מציעה מגוון שירותים המותאמים לצרכים שלכם
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Consultation Service */}
            <div className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-light-green w-20 h-20 rounded-2xl flex items-center justify-center mb-8">
                <MessageCircle className="w-10 h-10 text-soft-green" strokeWidth={1.5} />
              </div>
              <h3 className="text-3xl font-medium text-text-primary mb-5">ייעוץ אישי</h3>
              <p className="text-text-secondary mb-8 leading-relaxed font-light text-lg">
                פגישות ייעוץ אישיות המותאמות לצרכים הספציפיים של המשפחה שלכם.
                נעמיק בסוגיות שמטרידות אתכם ונבנה יחד כלים מעשיים להתמודדות.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-soft-green text-xl mt-0.5">✓</span>
                  <span className="text-text-secondary font-light">פגישות אישיות או זום</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-soft-green text-xl mt-0.5">✓</span>
                  <span className="text-text-secondary font-light">תוכנית עבודה מותאמת אישית</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-soft-green text-xl mt-0.5">✓</span>
                  <span className="text-text-secondary font-light">ליווי ותמיכה בין הפגישות</span>
                </li>
              </ul>
              <a
                href="#contact"
                className="inline-block px-8 py-4 bg-soft-green text-white rounded-full font-medium hover:bg-soft-green-dark transition-all shadow-sm hover:shadow-md"
              >
                קבעו פגישה
              </a>
            </div>

            {/* Workshops Service */}
            <div className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-light-pink w-20 h-20 rounded-2xl flex items-center justify-center mb-8">
                <Users className="w-10 h-10 text-clay" strokeWidth={1.5} />
              </div>
              <h3 className="text-3xl font-medium text-text-primary mb-5">סדנאות קבוצתיות</h3>
              <p className="text-text-secondary mb-8 leading-relaxed font-light text-lg">
                סדנאות מעשיות בקבוצות קטנות, המאפשרות למידה משותפת וחיזוק הקשר עם הורים אחרים.
                כל סדנה מתמקדת בנושא ספציפי ומספקת כלים יישומיים.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-clay text-xl mt-0.5">✓</span>
                  <span className="text-text-secondary font-light">קבוצות קטנות ואינטימיות</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-clay text-xl mt-0.5">✓</span>
                  <span className="text-text-secondary font-light">נושאים מגוונים ומעשיים</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-clay text-xl mt-0.5">✓</span>
                  <span className="text-text-secondary font-light">חומרי עזר ומעקב</span>
                </li>
              </ul>
              <a
                href="#contact"
                className="inline-block px-8 py-4 bg-clay text-white rounded-full font-medium hover:bg-clay-dark transition-all shadow-sm hover:shadow-md"
              >
                הרשמה לסדנה
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-light text-text-primary mb-6 tracking-tight">מה אומרים עליי</h2>
            <div className="w-20 h-0.5 bg-soft-green mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "שרה כהן",
                text: "עטר שינתה את החיים שלנו. הכלים שלמדנו עזרו לנו ליצור תקשורת טובה יותר עם הילדים. מומלצת בחום!",
                rating: 5,
                bgColor: "bg-light-pink",
                image: "/testimonial-1.jpg",
              },
              {
                name: "דוד לוי",
                text: "הסדנה הייתה מעולה! קיבלנו כלים מעשיים שאפשרו לנו להתמודד טוב יותר עם אתגרי ההורות. תודה רבה!",
                rating: 5,
                bgColor: "bg-light-blue",
                image: "/testimonial-2.jpg",
              },
              {
                name: "מיכל רוזן",
                text: "עטר היא מאמנת מקצועית וסבלנית. היא עזרה לנו להבין את הילדים שלנו טוב יותר ולבנות קשר חזק יותר.",
                rating: 5,
                bgColor: "bg-light-green",
                image: "/testimonial-3.jpg",
              },
            ].map((testimonial, index) => (
              <div key={index} className={`${testimonial.bgColor} rounded-3xl p-8 shadow-sm`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-text-primary mb-1">{testimonial.name}</div>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-clay fill-clay" strokeWidth={1.5} />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-text-secondary leading-relaxed font-light text-lg">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-beige-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-light text-text-primary mb-6 tracking-tight">צרו קשר</h2>
            <div className="w-20 h-0.5 bg-soft-green mx-auto"></div>
            <p className="text-lg text-text-secondary mt-8 font-light">
              אני כאן כדי לעזור לכם. מלאו את הטופס ונחזור אליכם בהקדם
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-medium text-text-primary mb-8">פרטי התקשרות</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-light-green w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-soft-green" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="font-medium text-text-primary mb-1">טלפון</div>
                    <a href="tel:+972501234567" className="text-text-secondary hover:text-soft-green transition-colors font-light">
                      050-123-4567
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-light-pink w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-clay" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="font-medium text-text-primary mb-1">אימייל</div>
                    <a href="mailto:atar@example.com" className="text-text-secondary hover:text-clay transition-colors font-light">
                      atar@example.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-light-blue w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-soft-green" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="font-medium text-text-primary mb-1">מיקום</div>
                    <div className="text-text-secondary font-light">פגישות אישיות וזום</div>
                  </div>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-10 shadow-sm">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-text-primary font-medium mb-3">
                    שם מלא
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 border border-beige-dark rounded-2xl focus:outline-none focus:ring-2 focus:ring-soft-green/30 focus:border-soft-green transition-all font-light"
                    placeholder="הכנס שם מלא"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-text-primary font-medium mb-3">
                    אימייל
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 border border-beige-dark rounded-2xl focus:outline-none focus:ring-2 focus:ring-soft-green/30 focus:border-soft-green transition-all font-light"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-text-primary font-medium mb-3">
                    טלפון
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-5 py-4 border border-beige-dark rounded-2xl focus:outline-none focus:ring-2 focus:ring-soft-green/30 focus:border-soft-green transition-all font-light"
                    placeholder="050-123-4567"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-text-primary font-medium mb-3">
                    הודעה
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-5 py-4 border border-beige-dark rounded-2xl focus:outline-none focus:ring-2 focus:ring-soft-green/30 focus:border-soft-green transition-all resize-none font-light"
                    placeholder="כתבו כאן את ההודעה שלכם..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-soft-green text-white py-4 rounded-full font-medium hover:bg-soft-green-dark transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
                >
                  <Send className="w-5 h-5" />
                  שלח הודעה
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-beige-dark/30 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-text-secondary">
            <div className="text-2xl font-medium text-text-primary mb-3">עטר תעסה</div>
            <p className="font-light">מדריכת הורים מקצועית | © {new Date().getFullYear()} כל הזכויות שמורות</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
