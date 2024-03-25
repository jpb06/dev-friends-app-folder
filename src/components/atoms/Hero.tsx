import Image from 'next/image';
import type { PropsWithChildren } from 'react';

export const Hero = ({ children }: PropsWithChildren) => (
  <div className="hero min-h-screen bg-gradient-to-tr from-indigo-950 to-purple-950">
    <div className="hero-content text-center">
      <div className="max-w-3xl rounded-2xl bg-gradient-to-tr from-sky-950 via-cyan-950 to-slate-800">
        <Image
          alt="header"
          src="/img/hero-header.png"
          width={800}
          height={292}
          className="rounded-t-2xl"
          priority
        />
        <div className="px-2 py-5">{children}</div>
      </div>
    </div>
  </div>
);
