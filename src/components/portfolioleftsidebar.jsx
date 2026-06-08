
function SidebarTab({ label, icon, active, onClick }){
    return(
        <button className={active ? "sidebar-item active" : "sidebar-item"} onClick={onClick}>
            <span className="icon">{icon}</span> {label}
        </button>
    );
}

function PortfolioLeftSidebar({ onFilter, currentFilter }) {
    return (
        <div className="sidebar">
            <div className="sidebar-section">
                <div className="sidebar-label">SCENE EXPLORER</div>
                <SidebarTab label="All Projects" icon="▣" active={currentFilter === 'all'} onClick={() => onFilter('all')} />
                <SidebarTab label="Commercial" icon="◈" active={currentFilter === 'commercial'} onClick={() => onFilter('commercial')} />
                <SidebarTab label="Prototypes" icon="◇" active={currentFilter === 'proto'} onClick={() => onFilter('proto')} />
            </div>

            <div className="sidebar-section">
                <div className="sidebar-label">FILTER BY TAG</div>
                <SidebarTab label="Unity" icon="◉" active={currentFilter === 'Unity'} onClick={() => onFilter('Unity')} />
                <SidebarTab label="Godot" icon="◉" active={currentFilter === 'Godot'} onClick={() => onFilter('Godot')} />
                <SidebarTab label="C#" icon="◉" active={currentFilter === 'C#'} onClick={() => onFilter('C#')} />
                <SidebarTab label="2D" icon="◉" active={currentFilter === '2D'} onClick={() => onFilter('2D')} />
                <SidebarTab label="3D" icon="◉" active={currentFilter === '3D'} onClick={() => onFilter('3D')} />
            </div>

            <div className="sidebar-section">
                <div className="sidebar-label">LINKS</div>
                <a className="sidebar-item" href="https://github.com/YOURUSERNAME" target="_blank">
                    <span className="icon">⇗</span> GitHub
                </a>
                <a className="sidebar-item" href="https://YOURUSERNAME.itch.io" target="_blank">
                    <span className="icon">⇗</span> itch.io
                </a>
            </div>
        </div>
    );
}

export default PortfolioLeftSidebar;