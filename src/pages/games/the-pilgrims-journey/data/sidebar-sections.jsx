export const sidebarSections = 
[
    {
    label: 'Scene Explorer',
    sidebarTabs: [
      { key: 'home', label: 'Home', icon: '◉' },
      {
        key: 'mechanics',
        label: 'Game Mechanics',
        icon: '◉',
        children: [
          { key: 'mechanics-tiles',   label: 'Tile System',   icon: '◈' },
          { key: 'mechanics-attacks', label: 'Hero Attacks',  icon: '◈' },
          { key: 'mechanics-enemies', label: 'Enemy AI',      icon: '◈' },
        ]
      },
      { key: 'systems', label: 'Game Systems', icon: '◉' },
    ]
  },
]