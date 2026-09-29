import Image from 'next/image';

import avatar1 from '@/public/insurer.jpeg'
import avatar2 from '@/public/insurer.jpeg'
import avatar3 from '@/public/insurer.jpeg'

export default function Trust() {
  const reviews = [
    {
      quote: "Hervorragende Beratung, ehrlich und auf den Punkt gebracht. Endlich verstehe ich meine Polizzen.",
      name: "Andreas M., Graz",
      avatar: avatar1,
    },
    {
      quote: "Die Schadensabwicklung war dank Fairsicherlich absolut reibungslos. Sehr zu empfehlen!",
      name: "Sarah L., Vienna",
      avatar: avatar2,
    },
    {
      quote: "Unabhängigkeit, die man spürt. Hier geht es wirklich um die beste Lösung für den Kunden.",
      name: "Dr. Peter S.",
      avatar: avatar3,
    },
  ];

  return (
    <section id="Trust" className="w-full bg-[#f8fafc] py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="font-serif tracking-[0.25em] uppercase text-xs sm:text-sm text-slate-500 font-medium">
            Was meine Kunden sagen
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200/80 rounded-2xl p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
            >
              <div>
                {/* 5 gelbe Sterne */}
                <div className="flex justify-center gap-1 mb-6 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Zitat-Text */}
                <p className="text-slate-700 text-center text-sm sm:text-base leading-relaxed italic mb-8">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </div>

              {/* Kunden-Profil (Bild & Name) */}
              <div className="flex flex-col items-center pt-4 border-t border-slate-100">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mb-3 bg-slate-200 shadow-inner">
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="font-semibold text-sm text-[#0a1b35]">
                  {review.name}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}