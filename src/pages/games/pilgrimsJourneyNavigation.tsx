import type { GamePageSidebarSection } from '../../types';
import ImageGrid from '../../components/ImageGrid';
import pjScreenshot from '../../assets/The Pilgrims Journey (Gameplay) Screenshot.png';
import pjScreenshot2 from '../../assets/The Pilgrims Journey (Gameplay 2) Screenshot.png';

import pjAttacksScreenshot1 from '../../assets/The Pilgrims Journey (Weapon upgrade choice) Screenshot.png';
import pjTilesScreenshot1 from '../../assets/The Pilgrims Journey (Tiles) Screenshot.png';
import pjMapGenerationScreenshot1 from '../../assets/The Pilgrims Journey (Map Generation) Screenshot.png'
import pjGlobalMapScreenshot1 from '../../assets/The Pilgrims Journey (Global Map) Screenshot.png'
export const gamePageSections: GamePageSidebarSection[] = [
  {
    label: 'Scene Explorer',
    sections: [
      {
        key: 'home',
        label: 'The Pilgrims journey',
        icon: '◉',
        header:(
          <>
            <div className="hero-eyebrow">// THE PILGRIM'S JOURNEY</div>
            <div className="hero-name">THE PILGRIM'S JOURNEY</div>
            <div className="hero-title">AN ADVENTURE BULLET HELL GAME</div>
          </>),
        content: (
          <>
            <div className="hero">
              <div className="hero-bio">
                The Pilgrim's Journey is a top-down bullet hell adventure game where players explore a mysterious world,
                uncovering its secrets and battling challenging enemies.
                With a focus on tight mechanics and expressive visuals,
                the game offers an immersive experience that stays with players long after they stop playing.
              </div>
            </div>

            <ImageGrid
              images={
                [
                  {
                    src: pjScreenshot,
                    alt: "Gameplay screenshot from The Pilgrim's Journey",
                    caption: "A gameplay snapshot from The Pilgrim's Journey."
                  },
                  {
                    src: pjScreenshot2,
                    alt: "Gameplay screenshot from The Pilgrim's Journey",
                  },
                ]
              }
            />
          </>
        ),
      },
      {
        key: 'overview',
        label: 'Overview',
        icon: '◉',
        content: (
          <>
            <p>
              <strong>The pilgrim's journey</strong> began as a project that was meant to ask the question, whats it like to be on the other side of a tower defence game?
              I started the development process by figuring out how to randomly generate a pathway and enemy towers that you would be able to send out units to get to the end of the pathway.
              After implementing this I found that it lacked a bit of something, so I experimented; creating equipment that you could put on the units, A tile system that spawns units based on the play time,
              spells, relics, and other things. I eventually realised that the player was lacking agency.
              <br/>
              <br/>
              After playing a game called 'Vampire Survivors' I got inspired. Vampire Survivors is a game where you become the bullet hell,
              gaining more over-powered upgrades and characters as you progress further through the run.
              <br/>
              <br/>
              This concept helped influence my game, creating a hero character that the player controlled, so while you were still playing a reverse tower defence you also have the agency to defend your units to help them reach the end of the map.
              <br/>
              <br/>
              The pilgrims journey is a work of love... and long hours. Its a mix of multiple different genres, but the general feeling I want the player to have is one of adventure, power and stratagy.
              <br/>
              <br/>
              I'm planning on releasing a demo in the near furture once the bare bones game is set up and most of the bugs are fixed.
            </p>
          </>
        ),
      },
      {
        key: 'story',
        label: 'Story',
        icon: '◉',
        content: (
          <>
            <p>
              <strong>The pilgrim's journey's</strong> story has not as of yet been fully fleshed out and there are still some changes that will be made. that said, here is the current premise:
              <br/><br/>
              The world is called Estrania. Monsters, demons and other evil beings have been awakening through out the world, people are scared and in need of a safe place.
              Talk of a sanctuary has been rumured and many are becoming more willing to take the treck to make it to this promised land.
              The hero you choose beings to lead and defend pilgrims as they make their way to this promised land, encountering mysterious creatures, demons, wizards, friends, worm-holes, and amazing new landscapes.
            </p>
          </>
        ),
      },
      {
        key: 'mechanics',
        label: 'Game Mechanics',
        icon: '◉',
        content: (
          <p>
            Here are some of the main mechanics in <strong>The Pilgrim's Journey</strong>
          </p>
        ),
        children: 
        [
          {
            key: 'attacks',
            label: 'Hero Attacks',
            icon: '◈',
            content: (
              <p>
                All heros start with an unique attack and are able to equip other attacks as well. All attacks stack on top of one another and fire automatically.
                Which means that most of the gameplay is movement and dodgeing away from monsters. and using spells to help defend your units and defeat your enemies.
                Below is an image of a weapon selection screen.

                <ImageGrid
                  images={
                    [
                      {
                        src: pjAttacksScreenshot1,
                        alt: "Gameplay screenshot from The Pilgrim's Journey",
                        caption: "A choice of different weapons."
                      },
                    ]
                  }
                />
              </p>
              
              
            ),
          },
          {
            key: 'enemies',
            label: 'Enemy AI',
            icon: '◈',
            content: (
              <p>
              Currently there are two different types of enemy AI; Direct movement and stationary movement, direct movement will find a target creature or position and move directly towards that target, usually the target is the main player character, but there are exceptions e.g there is a boss monster that will sometimes target random places on the map and move there.
              Stationary movement monsters are the ones designed to endanger the pilgrims traveling along the path, they spawn along side the path and will target pilgrims traveling on it. if they are pushed off there position they will map back to the position.
              <br/>
              <br/>
              Previously the monsters would move directly towards their target, however after I created more complicated terrain and enviroment, the enemies needed to be able to avoid obsticales.
              I originally thought about using A* pathfinding because I had used this before in another project, however I eventually thought against it because my game requires a large amount of enemies which would mean the game would probably begin to lag if there were a large amount of enemies maping towards
              their targets, and using the A* pathfinding algorithum for each entity would end up with a very large overhall.
              <br/>
              <br/>
              Looking at other options I eventually decided on flow mapping. Flow mapping is a pathing algorithm that starts at the target and branches out to all walkable parts of the map. Because the map is relativelty small and the target is mainly the player character, this method works very well.
              The flow map is updated each time the player character enters a different tile on the map, and previous flow maps to certain positions are stored in memory if the player enters that tile again.
              Now every enemy just needs to reference the current flow map to see were it needs to go to head towards the player character. this method means that we can have a large amount of enemies and not have to worry about pathing taking up a large amount of cpu.
              </p>
            ),
          },
          {
            key: 'tiles',
            label: 'Tiles',
            icon: '◈',
            content: (
              <p>
              The tile system is how both enemies and pilgrims are spawned, each round requires a certain amount of pilgrim tiles and monster tiles so as to balance the game.
              The tiles are read and played left to right, with each tile square representing a certain amount of time, the amount of tiles in the currently playing tile square is multiplying the spawn rate of the spawning entity.
              This gives the player more control over how they want to set up the level. I'm also playing with the idea of having it so that the player will get extra rewards if they meet certain conditions with the tiles. e.g if they fill a tile column with a certain amount of pilgrim and monster tiles.

              <ImageGrid
                  images={
                    [
                      {
                        src: pjTilesScreenshot1,
                        alt: "Screenshot of the tile player.",
                        caption: "The Tile player with monster and pilgrim tiles."
                      },
                    ]
                  }
                />
              </p>
            ),
          },
          {
            key: 'spells',
            label: 'Spells',
            icon: '◈',
            content: (
              <p>
                Spells are another mechanic added to help give players more agency, wether the spell is healing your own units, freezing enemies or giving a speed boost to you character. they are designed to help give the player more control over the whole map.
                Sometimes enemies may force you to leave the pilgrims you want to protect. Spells help to balance this out but letting you help them on the other side of the map or just give you more of an edge to defeat the enemies.
              </p>
            ) 
          },
        ],
      },
      {
        key: 'systems',
        label: 'Game Systems',
        icon: '◉',
        content: (
          <p>
            Supporting systems include progression, player upgrades, and environmental interactions.
          </p>
        ),
        children:[
          {
            key: 'localMapGeneration',
            label: 'Local Map Generation',
            icon: '◈',
            content: (
              <p>
                Local map generation uses a local map generation settings scriptable object to determine how the map will look like at play time.
                There are multiple different layers behind map generation to make it look the way it does.
                Here are some of the layers of local map generation: 
                <br/>
                <br/>
                Path generation.<br/>
                Base and path tile random placement. <br/>
                Terrain noise which is different sections of type of tile terrain e.g flowers, rocks etc.<br/>
                Map objects, e.g a tent, cactus, trees.<br/>
                Auto edge tileing e.g when two different tiles meet what should they look like.
                Its like a rule tile in the normal unity tile grid.
                <br/>
                <ImageGrid
                  images={
                    [
                      {
                        src: pjMapGenerationScreenshot1,
                        alt: "Screenshot of the local map.",
                        caption: "A local map generation example"
                      },
                    ]
                  }
                />

                In the Editor tool section you can see more about how the local map generation stacks different layers in the "Local Map Generator Settings Editor Window" section.
              </p>
            ) 
          },
          {
            key: 'globalMapGeneration',
            label: 'Global Map Generation',
            icon: '◈',
            content: (
              <p>
                The global map shows where the player and go and what to expect on certain paths that they take.
                Each point on the global map indicates a scenario that the player will be put into, that could be just a normal map map point where they have to defend pilgrims and fight enemies or it could be a randomm encounter where they might meet a mysterious
                entity, as well as boss fights and shops to stock up on equipment.
                The global map shows bother where the player has gone and where they can go.
                <ImageGrid
                  images={
                    [
                      {
                        src: pjGlobalMapScreenshot1,
                        alt: "Screenshot of the global map.",
                        caption: "A global map generation example"
                      },
                    ]
                  }
                />

              </p>
            ) 
          },
          {
            key: 'randomEvents',
            label: 'Random Events',
            icon: '◈',
            content: (
              <p>
                Test.
              </p>
            ) 
          },
          {
            key: 'shop',
            label: 'Shop',
            icon: '◈',
            content: (
              <p>
                Test.
              </p>
            ) 
          },
          {
            key: 'relics',
            label: 'Relics',
            icon: '◈',
            content: (
              <p>
                Test.
              </p>
            ) 
          },
        ]
      },
      {
        key: 'tools',
        label: 'Editor Tools Created',
        icon: '◉',
        content: (
          <p>
            These are the custom editor tools used to build levels, author encounters, and tweak gameplay quickly.
          </p>
        ),
      },
    ],
  },
];
