import { useState } from 'react';

function SidebarTab({ label, icon, active, onClick, children, isExpanded, onToggle, currentFilter }) {
  const hasChildren = children && children.length > 0;

  return (
    <div>
      <button
        className={active ? 'sidebar-item active' : 'sidebar-item'}
        onClick={hasChildren ? onToggle : onClick}
        style={{ justifyContent: 'space-between' }}
      >
        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span className="icon">{icon}</span>
          {label}
        </span>
        {hasChildren && (
          <span style={{ fontSize: '9px', opacity: 0.5 }}>
            {isExpanded ? '▼' : '▶'}
          </span>
        )}
      </button>

      {hasChildren && isExpanded && (
        <div style={{ paddingLeft: '16px' }}>
          {children.map(child => (
            <SidebarTab
              key={child.key}
              label={child.label}
              icon={child.icon}
              active={currentFilter === child.key}
              onClick={() => onClick(child.key)}
              currentFilter={currentFilter}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function SidebarSection({ label, sidebarTabs, onFilter, currentFilter }) {
  const [expanded, setExpanded] = useState({});

  const toggleExpanded = (key) => {
    setExpanded(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="sidebar-section">
      <div className="sidebar-label">{label}</div>
      {sidebarTabs.map(tab => (
        <SidebarTab
          key={tab.key}
          label={tab.label}
          icon={tab.icon}
          active={currentFilter === tab.key}
          onClick={onFilter}           // pass the key up
          children={tab.children}
          isExpanded={!!expanded[tab.key]}
          onToggle={() => toggleExpanded(tab.key)}
        />
      ))}
    </div>
  );
}

function LeftSidebar({ onFilter, currentFilter, sideBarSections }) {
    return (
        <div className="sidebar">
            {sideBarSections.map((section) => (
                <SidebarSection
                    label={section.label}
                    sidebarTabs={section.sidebarTabs}
                    currentFilter={currentFilter}
                    onFilter={onFilter}
                />
            ))}
        </div>
    );
}

export default LeftSidebar;