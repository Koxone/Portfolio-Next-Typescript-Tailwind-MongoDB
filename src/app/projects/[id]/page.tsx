'use client';

import { useParams } from 'next/navigation';
import { useTranslation } from 'react-i18next';

import OverviewCard from '@/components/sections/projects/components/overview-card/OverviewCard';
import FeaturesGrid from '@/components/sections/projects/components/features/FeaturesGrid';
import ProjectSidebar from '@/components/sections/projects/components/sidebar/ProjectSidebar';

import ProjectHeader from '@/components/nav/ProjectHeader';
import ProjectHeroSection from '@/components/sections/projects/components/hero-section/ProjectHeroSection';

// Local Data
import data from '@/data/data.json';

export default function ProjectPage() {
  const { id } = useParams();
  const { t } = useTranslation();

  const project = Object.values(data.projects).find((p) => p.id === id);

  if (!project) {
    return <h1 className="mt-20 text-center text-2xl text-white">Proyecto no encontrado</h1>;
  }

  return (
    <div className="min-h-screen">
      <ProjectHeader />

      <ProjectHeroSection
        tags={project.tags}
        date={t(project.date)}
        titleKey={t(project.titleKey)}
        descriptionKey={t(project.descriptionKey)}
        technologies={project.technologies.length}
        status={t(project.status)}
        demo={project.url}
        code={project.urlGit}
        alt={project.titleKey}
        src={project.videoSrc}
        gallery={t('gallery')}
        slideshow={t('openGallery')}
        teamSize={project.teamSize}
        srcSlide={project.src}
        imgNumber={project.imgNumber}
      />

      <main className="container mx-auto max-w-300 space-y-16 px-6 py-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="space-y-12 lg:col-span-2">
            {/* Sidebar */}
            <ProjectSidebar
              technologies={project.technologies}
              url={project.url}
              urlGit={project.urlGit}
            />

            {/* Overview */}
            <OverviewCard overview={t(project.overview)} tOverview={t('tOverview')} />

            {/* Features */}
            <FeaturesGrid
              tFeatures={t(project.features)}
              projectFeatures={t(project.projectFeatures, {
                returnObjects: true,
              })}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
