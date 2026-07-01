import type { SidebarSection, SidebarTab } from '../types';
import { games } from './gamesCatalog';

const allTags = Array.from(
  new Set(
    games.flatMap((game) => [...game.tags])
  )
);

const allEngines = Array.from(
  new Set(
    games.flatMap((game => [game.engine]))
  )
);

const tagTabs: SidebarTab[] = allTags.map((tag) => ({
  key: tag,
  label: tag,
  icon: '◉',
}));

const engineTabs: SidebarTab[] = allEngines.map((engine) => ({
  key: engine,
  label: engine,
  icon: '◉'
}));

export const portfolioSidebarSections: SidebarSection[] = [
  {
    label: 'Scene Explorer',
    sidebarTabs: [
      {
        key: 'all',
        label: 'All Projects',
        icon: '◉',
      },
    ],
  },
  {
    label: "Filter By Engine",
    sidebarTabs: engineTabs,
  },
  {
    label: 'Filter By Tag',
    sidebarTabs: tagTabs,
  },
];