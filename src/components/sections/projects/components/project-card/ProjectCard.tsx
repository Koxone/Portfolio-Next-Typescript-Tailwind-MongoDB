'use client';

import ProjectImage from './components/ProjectImage';
import CardHeader from './components/CardHeader';
import ProjectText from './components/ProjectText';
import Technologies from './components/Technologies';
import Activity from './components/Activity';
import { useTranslation } from 'react-i18next';

// Local Data
import data from '@/data/data.json';

export default function ProjectCard({ projectKey }) {
  const { t } = useTranslation();
  const project = data.projects[projectKey];

  if (!project) return null;

  return (
    <div className="group relative w-full lg:max-w-108">
      <div className="relative h-full scale-95 cursor-pointer overflow-hidden rounded-xl border border-orange-400/50 backdrop-blur-xl hover:scale-100 hover:border-orange-400 hover:shadow-[0_0_30px_rgba(251,146,60,0.3)]">
        <span className="animate-spark absolute z-20 hidden h-2 w-2 rounded-full opacity-100 group-hover:block hover:bg-orange-400"></span>

        <div className="absolute inset-0 bg-linear-to-br via-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

        {/* Image Section */}
        <ProjectImage logoSrc={project.logoSrc} urlGit={project.urlGit} id={project.id} />

        {/* Card Content */}
        <div className="space-y-6 p-6 text-white">
          {/* Header */}
          <CardHeader date={t(project.date)} tags={project.tags} />

          {/* Project Text */}
          <ProjectText title={t(project.titleKey)} description={t(project.descriptionKey)} />

          {/* Technologies */}
          <Technologies technologies={project.technologies} />

          {/* Activity */}
          <Activity active={project.active} updated={t(project.updated)} />
        </div>
      </div>
    </div>
  );
}
