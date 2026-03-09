import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white pt-[84px] pb-[19px] border-t border-[#F5F5F5] shrink-0">
      <div className="w-full max-w-[1920px] mx-auto px-4 md:px-12 lg:px-[160px] relative">
        <div className="flex flex-col md:flex-row justify-between items-start mb-0">
          
          {/* Columns Container */}
          <div className="flex flex-col md:flex-row gap-8 lg:gap-[60px] w-full md:w-auto">
            {/* Column 1 - NAVIGATION */}
            <div className="w-full md:w-[240px]">
              <h3 
                className="text-gray-400 text-[11px] font-medium tracking-[0.1em] uppercase mb-[24px]"
                style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif' }}
              >
                NAVIGATION
              </h3>
              <ul className="space-y-[24px]">
                <li><Link href="/" className="text-[13px] font-normal text-black hover:text-gray-500 transition-colors">Home</Link></li>
                <li><Link href="/catalog" className="text-[13px] font-normal text-black hover:text-gray-500 transition-colors">Catalog</Link></li>
                <li><Link href="/popular" className="text-[13px] font-normal text-black hover:text-gray-500 transition-colors">Popular</Link></li>
                <li><Link href="/about" className="text-[13px] font-normal text-black hover:text-gray-500 transition-colors">About us</Link></li>
              </ul>
            </div>

            {/* Column 2 - CONTACTS */}
            <div className="w-full md:w-[240px]">
              <h3 
                className="text-gray-400 text-[11px] font-medium tracking-[0.1em] uppercase mb-[24px]"
                style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif' }}
              >
                CONTACTS
              </h3>
              <ul className="space-y-[24px]">
                <li><a href="tel:+383457895" className="text-[13px] font-normal text-black hover:text-gray-500 transition-colors">+38 (345) 78 95</a></li>
                <li><a href="mailto:info@hoops.com.ua" className="text-[13px] font-normal text-black hover:text-gray-500 transition-colors underline underline-offset-4 decoration-black/20 hover:decoration-black">info@hoops.com.ua</a></li>
                <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[13px] font-normal text-black hover:text-gray-500 transition-colors">Instagram</a></li>
              </ul>
            </div>

            {/* Column 3 - LEGAL */}
            <div className="w-full md:w-[240px]">
              <h3 
                className="text-gray-400 text-[11px] font-medium tracking-[0.1em] uppercase mb-[24px]"
                style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif' }}
              >
                LEGAL
              </h3>
              <ul className="space-y-[24px]">
                <li><Link href="/public-offer" className="text-[13px] font-normal text-black hover:text-gray-500 transition-colors">Public Offer</Link></li>
                <li><Link href="/privacy" className="text-[13px] font-normal text-black hover:text-gray-500 transition-colors">Privacy Policy</Link></li>
                <li><Link href="/shipping" className="text-[13px] font-normal text-black hover:text-gray-500 transition-colors">Shipping & Payment</Link></li>
              </ul>
            </div>
          </div>

          {/* Payment Methods - Exact Figma: 1187.6px from left, 460px from right */}
          <div className="mt-8 md:mt-0 md:absolute md:left-[1027.6px] md:right-[300px] top-0 flex justify-center">
            <Image 
              src="/pay.png" 
              alt="Payment Methods" 
              width={272}
              height={39}
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-[40px] border-t border-[#F5F5F5]">
          <p 
            className="text-[11px] font-light tracking-[0.1em] text-black uppercase"
            style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif' }}
          >
            © 2026 ESTER WUGMAN
          </p>
        </div>
      </div>
    </footer>
  );
}
