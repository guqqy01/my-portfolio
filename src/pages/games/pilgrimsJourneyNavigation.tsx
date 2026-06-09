import type { GamePageSidebarSection } from '../../types';

export const gamePageSections: GamePageSidebarSection[] = [
  {
    label: 'Scene Explorer',
    sections: [
      {
        key: 'overview',
        label: 'Overview',
        icon: '◉',
        content: (
          <>
            <p>
              A quick introduction to <strong>The Pilgrim's Journey</strong>, its tone, and the player experience.
            </p>
            <ul>
              <li>Genre: Adventure + Bullet Hell</li>
              <li>Style: Top-down, atmospheric exploration</li>
              <li>Goal: survive by mastering dodging and movement</li>
            </ul>
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
              The Pilgrim walks through a strange world haunted by memories of past journeys and ancient guardians.
            </p>
            <p>
              The narrative is intentionally light, letting environmental details and gameplay present the world more than text.
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
            A high-level summary of the movement, combat, and enemy systems that give this game its signature feel.
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
