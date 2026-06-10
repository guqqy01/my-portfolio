import type { GamePageSidebarSection } from '../../types';
import ImageGrid from '../../components/ImageGrid';
import pjScreenshot from '../../assets/The Pilgrims Journey (Gameplay) Screenshot.png';
import pjScreenshot2 from '../../assets/The Pilgrims Journey (Gameplay 2) Screenshot.png';

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
        children: [
          {
            key: 'movement',
            label: 'Movement',
            icon: '◈',
            content: (
              <p>
                Player movement is built around momentum and tight directional control, with dash and dodge mechanics to
                avoid bullet patterns.
              </p>
            ),
            children: [
              {
                key: 'Test',
                label: 'Test',
                icon: '-',
                content: (
                  <p>
                    A Test Child element.
                  </p>
                ),
              }]
            },
          {
            key: 'attacks',
            label: 'Hero Attacks',
            icon: '◈',
            content: (
              <p>
                Attack systems are rhythm-based and allow precise counterplay against waves of enemies.
              </p>
            ),
          },
          {
            key: 'enemies',
            label: 'Enemy AI',
            icon: '◈',
            content: (
              <p>
                Enemies are designed to create dynamic bullet hell encounters that reward pattern recognition.
              </p>
            ),
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
