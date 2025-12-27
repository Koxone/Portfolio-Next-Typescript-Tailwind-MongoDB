'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Play, ArrowUpRight } from 'lucide-react';

function ProjectImage({ logoSrc, urlGit, id }) {
  const router = useRouter();

  return (
    <div className="relative h-72 overflow-hidden">
      {/* Imagen */}
      <Image
        src={logoSrc}
        alt="Project Image"
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        style={{ objectFit: 'cover' }}
        className="transition-transform duration-500 hover:scale-110"
      />

      {/* Contenedor del botón */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <button
          onClick={() => router.push(`/projects/${id}`)}
          className="flex cursor-pointer items-center gap-3 rounded-2xl border border-orange-400 bg-purple-900/90 px-8 py-4 shadow-lg transition-colors duration-200 group-hover:border-orange-300 hover:bg-purple-950/90"
        >
          <Play className="h-5 w-5 text-orange-400 transition-transform duration-200 group-hover:scale-110" />

          <span className="font-semibold text-gray-200">View Project</span>

          <ArrowUpRight className="h-5 w-5 text-orange-400 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>

        {/* View Code Button */}
        <a
          href={urlGit}
          target="_blank"
          className="flex items-center gap-2 rounded-xl border border-orange-400 bg-purple-900/90 px-4 py-2 shadow-md transition-colors duration-200 group-hover:border-orange-300 hover:bg-purple-950/90"
        >
          <Play className="h-5 w-5 text-orange-400 transition-transform duration-200 group-hover:scale-110" />

          <span className="text-sm font-medium text-gray-200">View Code</span>

          <ArrowUpRight className="h-5 w-5 text-orange-400 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>
      </div>
    </div>
  );
}

export default ProjectImage;
