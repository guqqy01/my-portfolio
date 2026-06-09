import { useMemo, useState } from 'react';
import type { GamePageSection, GamePageSidebarSection, TopbarTab } from '../../types';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import { gamePageSections } from './pilgrimsJourneyNavigation';

const flattenPageSections = (tabs: GamePageSection[]): GamePageSection[] =>
  tabs.flatMap((tab) => [tab, ...(tab.children ? flattenPageSections(tab.children) : [])]);

const collectSectionTabs = (sections: GamePageSidebarSection[]) =>
  sections.flatMap((section) => flattenPageSections(section.sections));

function PilgrimsJourneyPage() {
  const sectionTabs = useMemo(() => collectSectionTabs(gamePageSections), []);
  const initialSection = sectionTabs.find((tab) => tab.content)?.key ?? sectionTabs[0]?.key ?? '';
  const [currentTab, setCurrentTab] = useState<string>(initialSection);

  const handleSectionSelect = (sectionKey: string) => {
    setCurrentTab(sectionKey);
    const element = document.getElementById(sectionKey);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const renderSections = (tabs: GamePageSection[]) =>
    tabs.map((tab) => (
      <div key={tab.key}>
        {tab.content && (
          <section id={tab.key} className="page-section">
            <div className="section-header">
              <div className="hero-eyebrow">{tab.label.toUpperCase()}</div>
              <h2 className="section-heading">{tab.label}</h2>
              <div className="section-copy">{tab.content}</div>
            </div>
          </section>
        )}

        {tab.children && <div className="section-children">{renderSections(tab.children)}</div>}
      </div>
    ));

  return (
    <div>
      <Header
        returnTo={() => window.history.back()}
        logo="◆ Guqqy.dev"
        tabs={[] as TopbarTab[]}
        rightBar="OPEN TO WORK"
        onSwitchTab={setCurrentTab}
        currentTab={currentTab}
      />

      <div className="layout2">
        <Sidebar onFilter={handleSectionSelect} currentFilter={currentTab} gamePageSections={gamePageSections} />
        <div className="view" id="view-pilgrims-journey">
          <div className="hero">
            <div className="hero-eyebrow">// THE PILGRIM'S JOURNEY</div>
            <div className="hero-name">THE PILGRIM'S JOURNEY</div>
            <div className="hero-title">AN ADVENTURE BULLET HELL GAME</div>
            <div className="hero-bio">
              The Pilgrim's Journey is a top-down bullet hell adventure game where players explore a mysterious world,
              uncovering its secrets and battling challenging enemies.
              With a focus on tight mechanics and expressive visuals,
              the game offers an immersive experience that stays with players long after they stop playing.
            </div>
          </div>

          <div className="page-sections">{renderSections(sectionTabs)}</div>
        </div>
      </div>
    </div>
  );
}

export default PilgrimsJourneyPage;
