import type { SidebarSection } from '../types';

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
    label: 'Filter By Tag',
    sidebarTabs: [
      {
        key: 'unity',
        label: 'Unity',
        icon: '◉',
      },
      {
        key: 'godot',
        label: 'Godot',
        icon: '◉',
      },
      {
        key: 'csharp',
        label: 'C#',
        icon: '◉',
      },
      {
        key: '2d',
        label: '2D',
        icon: '◉',
      },
      {
        key: '3d',
        label: '3D',
        icon: '◉',
      },
    ],
  },
];
