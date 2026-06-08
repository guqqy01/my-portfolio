import { useState } from 'react';
import Topbar from '../../components/Topbar';
import Portfolio from './portfolio';
import About from './about';
import Contact from './contact';

function Home(){
    const [currentTab, setCurrentTab] = useState('portfolio');

    return (
        <div>
            <Topbar 
              onSwitchTab={(tab) => { setCurrentTab(tab); }} 
              currentTab={currentTab} 
            />

            <div className="main">
                {currentTab === 'portfolio' && <Portfolio />}
                {currentTab === 'about'     && <About />}
                {currentTab === 'contact'   && <Contact />}
            </div>

        </div>
    );
}

export default Home;