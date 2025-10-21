import React, { useState, useEffect } from 'react';
import { ChevronDown, Plane, Home, Utensils, Car, Mountain, MapPin, Check, Sparkles, Heart, Globe } from 'lucide-react';
import logo from './assets/logo.png';
import bg1 from './assets/discoverbackground.jpg';
import bg2 from './assets/About.webp';
import car from './assets/car.jpg';
import food from './assets/food.jpg';
import bg3 from './assets/bg3.jpg'
import bg4 from './assets/bg4.webp'
import bg5 from './assets/bg5.jpg'
const GSELanding = () => {
    const [scrollY, setScrollY] = useState(0);
    const [aboutSectionTop, setAboutSectionTop] = useState(0);

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        dates: '',
        guests: '',
        carRental: false,
        dietary: '',
        notes: ''
    });
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);

        // Get the About section position
        const aboutSection = document.getElementById('about-section');
        if (aboutSection) {
            setAboutSectionTop(aboutSection.offsetTop);
        }

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    const handleSubmit = () => {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    return (
        <div className="bg-slate-900 text-white overflow-x-hidden">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
                <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
                    {/* Logo - Left */}
                    <div className="flex items-center">
                        <div className='h-12 w-52 '>
                            <img src={logo} alt="GSE Logo" className="h-full w-full object-contain object-left " />
                        </div>
                    </div>

                    {/* Book Now Button - Right */}
                    <a
                        href="#booking"
                        className="px-8 py-3 bg-slate-900 text-white font-semibold rounded-full hover:scale-105 transition-transform shadow-lg"
                    >
                        Book Now
                    </a>
                </div>
            </nav>
            {/* Hero Section - Add beach background image here */}
            <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-slate-900">
                {/* Image element as background */}
                <img
                    src={bg1} // 👈 replace this with your image path or URL
                    alt="Ghana background"
                    className="absolute inset-0 w-full h-full object-cover" // makes it fill the section
                />

                {/* Dark overlay for readability */}
                <div className="absolute inset-0 bg-black/60"></div>

                {/* Text content */}
                <div
                    className="relative z-10 max-w-5xl mt-28"
                    style={{
                        transform: `translateY(${scrollY * 0.2}px)`,
                        opacity: 1 - scrollY / 800,
                    }}
                >
                    <div className="flex items-center justify-center gap-2">
                        <img
                            src={logo}
                            alt="GSE Logo"
                            className="w-72 sm:w-80 md:w-96 h-auto"
                        />
                    </div>

                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight text-white">
                        <span className="bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 bg-clip-text text-transparent">
                            Discover Ghana,
                        </span>
                        <br />
                        <span className="text-white">the Signature Way</span>
                    </h1>

                    <p className="text-lg sm:text-xl md:text-2xl mb-10 text-gray-200 leading-relaxed max-w-3xl mx-auto drop-shadow-lg">
                        GSE brings you an unmatched travel experience — luxury, culture, and connection woven into one unforgettable journey.
                        From Accra's vibrant rhythm to the calm waves of Akosombo, every moment is designed to feel like home, yet nothing like you've known before.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href="#booking"
                            className="px-10 py-4 bg-white text-slate-900 font-bold text-lg sm:text-xl rounded-full hover:scale-110 transform transition-all duration-300 shadow-2xl flex items-center gap-2"
                        >
                            <Heart className="w-6 h-6" />
                            Start Your Journey
                        </a>
                    </div>

                    <div className="mt-16 animate-bounce">
                        <ChevronDown size={48} className="mx-auto text-white drop-shadow-lg" />
                    </div>
                </div>
            </section>




            {/* About Section */}
            <section id="about-section" className="relative py-32 bg-slate-900 overflow-hidden">
                {/* Static Background Image */}
                <div className="absolute inset-0 w-full h-full">
                    <div
                        className="w-full h-full bg-cover bg-center"
                        style={{
                            backgroundImage: `url(${bg2})`
                        }}
                    ></div>
                </div>

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/60"></div>

                {/* Content with Scroll-based Fade-in */}
<div className="relative z-10 max-w-6xl mx-auto px-6">
    <div
        className="text-center mb-12 transition-all duration-1000"
        style={{
            opacity: Math.min(1, Math.max(0, (scrollY - aboutSectionTop + 200) / 250)),
            transform: `translateY(${Math.max(0, 20 - (scrollY - aboutSectionTop + 200) / 15)}px)`
        }}
    >
        <Globe className="w-16 h-16 mx-auto mb-4 text-white" />
        <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 bg-clip-text text-transparent">
            About GSE
        </h2>
    </div>

    <div className="text-center space-y-8 text-xl text-gray-200 leading-relaxed">
        <p
            className="text-2xl md:text-3xl font-light italic text-white/90 transition-all duration-1000"
            style={{
                opacity: Math.min(1, Math.max(0, (scrollY - aboutSectionTop + 100) / 250)),
                transform: `translateY(${Math.max(0, 20 - (scrollY - aboutSectionTop + 100) / 15)}px)`
            }}
        >
            "We don't just show you Ghana — we invite you to feel it, taste it, and become part of its story."
        </p>

        <p
            className="text-xl max-w-4xl mx-auto transition-all duration-1000"
            style={{
                opacity: Math.min(1, Math.max(0, (scrollY - aboutSectionTop) / 250)),
                transform: `translateY(${Math.max(0, 20 - (scrollY - aboutSectionTop) / 15)}px)`
            }}
        >
            At Ghana Signature Edition (GSE), we go beyond travel. We design <span className="text-white font-semibold">cultural experiences</span> — combining luxury with authenticity, comfort with community, and taste with tradition.
        </p>

        <p
            className="text-white font-semibold transition-all duration-1000"
            style={{
                opacity: Math.min(1, Math.max(0, (scrollY - aboutSectionTop - 80) / 250)),
                transform: `translateY(${Math.max(0, 20 - (scrollY - aboutSectionTop - 80) / 15)}px)`
            }}
        >
            Every GSE package is fully handled: business-class flights, premium accommodations, curated tours, and private drivers.
        </p>

        <p
            className="text-2xl font-bold text-white transition-all duration-1000"
            style={{
                // shifted from -200 → -120 so it appears sooner
                opacity: Math.min(1, Math.max(0, (scrollY - aboutSectionTop - 120) / 250)),
                transform: `translateY(${Math.max(0, 20 - (scrollY - aboutSectionTop - 120) / 15)}px)`
            }}
        >
            All you have to do is arrive — we'll handle the rest.
        </p>
    </div>
</div>

            </section>


            {/* Package Section - Add cultural images as backgrounds */}
            <section className="relative py-32 bg-white overflow-hidden">
                {/* Parallax Image */}
                <div className="absolute inset-0 w-full h-full overflow-hidden -z-10">
                    <img
                        src="/images/ghana-beach.jpg" // Replace with your image
                        alt="Ghana Scenic View"
                        className="parallax-img w-full h-full object-cover transform will-change-transform opacity-30"
                        style={{
                            transform: "translateY(calc(var(--scroll, 0px) * 0.2))",
                        }}
                    />
                </div>

                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16 relative z-10">
                        <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 bg-clip-text text-transparent">
                            Signature Experience
                        </h2>
                        <p className="text-6xl font-bold text-gray-700">£3,500</p>
                        <p className="text-2xl text-gray-500 mt-2">
                            7 Days of Culture, Comfort & Discovery
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                        {[
                            { icon: <Plane size={32} />, title: "Business Class Flights", desc: "London ↔️ Accra" },
                            { icon: <Home size={32} />, title: "6 Nights Premium Stay", desc: "Luxury Airbnb Accommodation" },
                            { icon: <Utensils size={32} />, title: "Fine Dining", desc: "Shogun Restaurant Experience" },
                            { icon: "🍫", title: "Chocolate-Making Class", desc: "Craft your own bar with Ghana cocoa" },
                            { icon: <Mountain size={32} />, title: "Guided Tours", desc: "Mount Afadjato, Akosombo & Heritage Trail" },
                            { icon: <Car size={32} />, title: "Dedicated Driver", desc: "Full 7 Days of Private Transport" },
                            { icon: "🍽️", title: "Tailor-Made Cuisine", desc: "Authentic Ghanaian Menu" },
                            { icon: <MapPin size={32} />, title: "Airport Transfers", desc: "All Essentials Included" },
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="group relative bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100"
                            >
                                <div className="text-gray-800 mb-4 transform group-hover:scale-110 transition-transform">
                                    {typeof item.icon === "string" ? (
                                        <span className="text-4xl">{item.icon}</span>
                                    ) : (
                                        item.icon
                                    )}
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Car Rental Upgrade */}
            <section className="relative py-24 bg-slate-900 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src={car}
                        alt="Luxury Car"
                        className="w-full h-full object-cover"
                    />
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/70"></div>
                </div>

                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <div className="bg-white/5 backdrop-blur-sm p-12 rounded-3xl border border-white/10">
                        <Car size={64} className="mx-auto mb-6 text-white" />
                        <h2 className="text-4xl font-bold mb-6 text-white">Freedom on Your Terms</h2>
                        <p className="text-xl mb-4 leading-relaxed text-gray-300">
                            For travelers who prefer full independence, GSE offers an exclusive vehicle rental option for an additional <span className="font-bold text-2xl text-white">£700</span>.
                        </p>
                        <p className="text-lg text-gray-300">
                            Enjoy freedom of movement across Ghana with your own car — from standard comfort models to premium high-end vehicles. Your schedule is yours to create.
                        </p>
                    </div>
                </div>
            </section>


            {/* Cuisine Section - Add food images as backgrounds */}
            <section className="py-32 bg-slate-800 relative overflow-hidden">
                {/* Background image */}
                <div className="absolute inset-0 ">
                    <img
                        src={food}
                        alt="Traditional Ghanaian Food"
                        className="w-full h-full object-cover opacity-25"
                    />
                    {/* Overlay to darken for readability */}
                    <div className="absolute inset-0 bg-black-100/60"></div>
                </div>

                {/* Content */}
                <div className="max-w-6xl mx-auto px-6 relative z-10">
                    <h2 className="text-5xl font-bold text-center mb-6 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 bg-clip-text text-transparent">
                        The Signature Ghanaian Cuisine Menu
                    </h2>
                    <p className="text-center text-xl text-gray-300 mb-16 max-w-3xl mx-auto">
                        Food is at the heart of culture — and at GSE, we make sure you taste Ghana at its best.
                        Each meal is freshly prepared by local chefs, combining tradition and artistry.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            { emoji: "🍛", dish: "Jollof Rice & Grilled Chicken" },
                            { emoji: "🍲", dish: "Goat Light Soup with Fufu" },
                            { emoji: "🍽️", dish: "Waakye with Fried Plantain & Gari" },
                            { emoji: "🌶️", dish: "Banku with Tilapia & Shito" },
                            { emoji: "🥗", dish: "Kontomire Stew with Yam" },
                            { emoji: "🍬", dish: "Local Dessert: Bofrot or Sobolo pairing" },
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="flex items-center gap-4 bg-white/5 backdrop-blur-sm p-6 rounded-xl hover:bg-white/10 transition-all hover:scale-105 border border-white/10"
                            >
                                <span className="text-5xl">{item.emoji}</span>
                                <span className="text-xl font-semibold text-white">{item.dish}</span>
                            </div>
                        ))}
                    </div>

                    <p className="text-center text-gray-400 mt-8 text-lg">
                        Vegetarian, vegan, or mild-spice options available on request.
                    </p>
                </div>
            </section>

            {/* Itinerary - Add landmark images as backgrounds */}
            <section className="relative py-32 bg-slate-900 overflow-hidden">
                {/* Background image */}
                <div className="absolute inset-0 ">
                    <img
                        src={bg3} // import your image at the top e.g. import bg3 from "../assets/bg3.jpg";
                        alt="Ghana scenic background"
                        className="w-full h-full object-cover"
                    />
                    {/* Dark overlay for readability */}
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>

                <div className="max-w-5xl mx-auto px-6 relative z-10">
                    <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 bg-clip-text text-transparent">
                        7-Day Itinerary
                    </h2>

                    <div className="space-y-8">
                        {[
                            { day: 1, title: 'Arrival in Accra', desc: 'Private pickup and check-in to your luxury Airbnb. Welcome dinner at Shogun Restaurant.' },
                            { day: 2, title: 'Accra City & Culture Tour', desc: 'Explore Independence Square, Osu Castle, and Makola Market. Enjoy a Ghanaian lunch.' },
                            { day: 3, title: 'Chocolate-Making Experience', desc: "Hands-on workshop: roast, grind, and mold Ghana's world-famous cocoa into your own chocolate bar." },
                            { day: 4, title: 'Akosombo Adventure', desc: 'Boat cruise on the Volta River, visit the Akosombo Dam, and enjoy a sunset dinner by the lake.' },
                            { day: 5, title: 'Mount Afadjato Excursion', desc: "Morning hike and guided exploration of Ghana's highest peak, followed by a local waterfall visit." },
                            { day: 6, title: 'The Heritage Trail', desc: "Step back in time with a curated tour through Ghana's historical landmarks, castles, and forts." },
                            { day: 7, title: 'Leisure & Departure', desc: 'Relax, shop for local crafts, and enjoy one final traditional meal before your airport transfer.' },
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="group flex gap-6 bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition-all border border-white/10"
                            >
                                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-red-500 via-yellow-500 to-green-500 rounded-full flex items-center justify-center text-3xl font-bold text-white shadow-lg">
                                    {item.day}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-2 text-white">{item.title}</h3>
                                    <p className="text-gray-200 text-lg leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* Why Choose GSE */}
            <section className="relative py-32 bg-slate-800 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 ">
                    <img
                        src={bg4}
                        alt="Luxury Ghana travel background"
                        className="w-full h-full object-cover"
                    />
                    {/* Dark overlay for readability */}
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>

                <div className="max-w-6xl mx-auto px-6 relative z-10">
                    <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 bg-clip-text text-transparent">
                        Why Choose GSE
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            { icon: <Check size={32} />, title: 'Luxury, Seamlessly Delivered', desc: 'Every detail handled from flight to fork.' },
                            { icon: <Check size={32} />, title: 'Authentic Ghana, Expertly Curated', desc: 'Our local guides and chefs make it personal.' },
                            { icon: <Check size={32} />, title: 'Taste the Culture', desc: 'Every bite, view, and story connects you deeper.' },
                            { icon: <Check size={32} />, title: 'Your Comfort, Our Priority', desc: 'Private drivers, concierge support, and full itinerary management.' },
                            { icon: <Check size={32} />, title: 'Freedom Upgrade', desc: 'Drive your own route with our £700 car rental option.' },
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="flex gap-4 items-start group bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/20 transition-all"
                            >
                                <div className="text-white flex-shrink-0 group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                                    <p className="text-gray-300">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Booking Form */}
            <section id="booking" className="relative py-32 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 ">
                    <img
                        src={bg5} 
                        alt="Luxury travel booking background"
                        className="w-full h-full object-cover"
                    />
                    {/* Dark overlay for readability */}
                    <div className="absolute inset-0 bg-black/70"></div>
                </div>

                <div className="max-w-3xl mx-auto px-6 relative z-10">
                    <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 bg-clip-text text-transparent">
                        Reserve Your Signature Experience
                    </h2>
                    <p className="text-center text-xl text-gray-200 mb-12">
                        Fill in your details, and a GSE travel concierge will contact you within 24 hours to customize your trip.
                    </p>

                    {submitted ? (
                        <div className="bg-green-500/20 border-2 border-green-500 rounded-2xl p-12 text-center backdrop-blur-sm">
                            <div className="text-6xl mb-4">✅</div>
                            <h3 className="text-3xl font-bold mb-4 text-white">Thank you for choosing GSE!</h3>
                            <p className="text-xl text-gray-300">Your journey to Ghana's finest experiences begins soon.</p>
                        </div>
                    ) : (
                        <div className="space-y-6 bg-white/10 backdrop-blur-sm p-10 rounded-2xl border border-white/10">
                            <div>
                                <label className="block mb-2 font-semibold text-white">Full Name *</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-white focus:outline-none transition-colors text-white placeholder-gray-400"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block mb-2 font-semibold text-white">Email Address *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-white focus:outline-none transition-colors text-white placeholder-gray-400"
                                        placeholder="john@example.com"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 font-semibold text-white">Phone Number *</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-white focus:outline-none transition-colors text-white placeholder-gray-400"
                                        placeholder="+44 7700 900000"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block mb-2 font-semibold text-white">Preferred Travel Dates *</label>
                                    <input
                                        type="text"
                                        name="dates"
                                        value={formData.dates}
                                        onChange={handleChange}
                                        placeholder="e.g., June 2025"
                                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-white focus:outline-none transition-colors text-white placeholder-gray-400"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 font-semibold text-white">Number of Guests *</label>
                                    <input
                                        type="number"
                                        name="guests"
                                        value={formData.guests}
                                        onChange={handleChange}
                                        min="1"
                                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-white focus:outline-none transition-colors text-white placeholder-gray-400"
                                        placeholder="2"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="flex items-start gap-3 bg-white/10 p-4 rounded-lg border border-white/20 hover:bg-white/15 transition-colors cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="carRental"
                                    checked={formData.carRental}
                                    onChange={handleChange}
                                    className="w-5 h-5 mt-1 cursor-pointer accent-green-500"
                                    id="carRental"
                                />
                                <label htmlFor="carRental" className="font-semibold text-white cursor-pointer flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <Car className="w-5 h-5" />
                                        <span>Add Freedom Car Rental</span>
                                    </div>
                                    <span className="text-sm text-gray-400">+£700 - Drive your own route across Ghana</span>
                                </label>
                            </div>

                            <div>
                                <label className="block mb-2 font-semibold text-white">Dietary Preferences</label>
                                <input
                                    type="text"
                                    name="dietary"
                                    value={formData.dietary}
                                    onChange={handleChange}
                                    placeholder="Vegetarian, Vegan, Mild Spice, Allergies, etc."
                                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-white focus:outline-none transition-colors text-white placeholder-gray-400"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 font-semibold text-white">Additional Notes</label>
                                <textarea
                                    name="notes"
                                    value={formData.notes}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-white focus:outline-none transition-colors text-white placeholder-gray-400"
                                    placeholder="Any special requests or questions..."
                                ></textarea>
                            </div>

                            <button
                                onClick={handleSubmit}
                                className="w-full py-4 bg-white text-slate-900 font-bold text-xl rounded-full hover:scale-105 transform transition-all duration-300 shadow-2xl"
                            >
                                Submit Request
                            </button>
                        </div>
                    )}
                </div>
            </section>


            {/* Footer */}
            <footer className="py-12 bg-slate-950 text-center text-gray-400 border-t border-white/10">
                <p className="text-lg">🌍 Ghana Signature Edition — Experience Ghana. Curated to Perfection.</p>
                <p className="mt-2">© 2025 GSE. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default GSELanding;