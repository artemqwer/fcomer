import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white shrink-0 border-[#F5F5F5] pt-[40px] md:pt-[44px] pb-[19px] md:h-[224px] flex flex-col justify-between">
      {/* Absolute top border that enforces the Figma structure without messing up internal text padding */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-[#F5F5F5]"></div>
      
      <div className="w-full max-w-[1920px] mx-auto px-4 md:px-12 lg:px-[160px] relative h-full flex flex-col justify-between">
        <div className="flex flex-col md:flex-row justify-between items-start mb-0 md:mb-0">
          
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
        <div className="text-center md:absolute w-full left-0 md:top-[204px] pt-[19px] pb-[19px] mt-auto md:p-0 border-t border-[#F5F5F5] md:border-t-0">
          <p 
            className="text-[11px] font-light tracking-[0.1em] text-black uppercase leading-none"
            style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif' }}
          >
            © 2026 ESTER WUGMAN
          </p>
        </div>
      </div>
    </footer>
  );
}
