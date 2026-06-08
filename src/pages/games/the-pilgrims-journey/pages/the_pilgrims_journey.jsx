import { useState } from 'react';
import Topbar from '../../../../components/Topbar';
import LeftSidebar from '../../../../components/leftsidebar';
import { sidebarSections } from '../data/sidebar-sections';
function PilgrimsJourney()
{
    const [currentTab, setCurrentTab] = useState('home');
    const tabs = [];

    return (
        <div>
            <Topbar 
                returnTo = {() => window.history.back()}
                logo="◆ Guqqy.dev" 
                tabs={tabs} 
                rightBar="OPEN TO WORK" 
                onSwitchTab={setCurrentTab} 
                currentTab={currentTab} 
            />

            <div className = "layout2">
                <LeftSidebar onFilter = {setCurrentTab} currentFilter = {currentTab} sideBarSections={sidebarSections} />
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
                </div>
            </div>
        </div>
    );
}

export default PilgrimsJourney;