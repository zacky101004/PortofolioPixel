// ─── Pixel Art Vector Graphics & Artwork ─────────────────────────────────────
// Custom scalable pixel-art vector illustrations & tech icons

import React from 'react';

// ─── Project Artwork 1: PixelQuest Portfolio ─────────────────────────────────
export const PixelQuestArtwork: React.FC<{ interactive?: boolean }> = () => {
  return (
    <svg viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: '100%', imageRendering: 'pixelated' }}>
      <defs>
        <pattern id="pq-stars" width="40" height="40" patternUnits="userSpaceOnUse">
          <rect x="12" y="8" width="2" height="2" fill="#F4C95D" opacity="0.6" />
          <rect x="28" y="24" width="2" height="2" fill="#76B7E5" opacity="0.4" />
          <rect x="34" y="6" width="3" height="3" fill="#ffffff" opacity="0.8" />
          <rect x="6" y="32" width="2" height="2" fill="#A78BFA" opacity="0.5" />
        </pattern>
      </defs>

      {/* Background Starry Sky Window */}
      <rect x="20" y="16" width="360" height="130" rx="4" fill="#0c1219" />
      <rect x="20" y="16" width="360" height="130" fill="url(#pq-stars)" />

      {/* Distant pixel skyline */}
      <rect x="40" y="90" width="24" height="56" fill="#141f2d" />
      <rect x="70" y="70" width="32" height="76" fill="#182535" />
      <rect x="80" y="80" width="4" height="4" fill="#F4C95D" opacity="0.7" />
      <rect x="90" y="94" width="4" height="4" fill="#76B7E5" opacity="0.7" />
      <rect x="110" y="100" width="20" height="46" fill="#141f2d" />
      <rect x="270" y="80" width="36" height="66" fill="#182535" />
      <rect x="280" y="92" width="4" height="4" fill="#F4C95D" opacity="0.8" />
      <rect x="316" y="96" width="28" height="50" fill="#141f2d" />

      {/* Desk surface */}
      <rect x="0" y="160" width="400" height="60" fill="#1c2836" />
      <rect x="0" y="160" width="400" height="6" fill="#293b4f" />
      <rect x="0" y="166" width="400" height="2" fill="#F4C95D" opacity="0.25" />

      {/* Main Dual Monitor Setup */}
      {/* Left Vertical Monitor */}
      <rect x="50" y="52" width="80" height="114" rx="2" fill="#121820" stroke="#344655" strokeWidth="2" />
      <rect x="54" y="56" width="72" height="106" fill="#0d141d" />
      {/* Code lines on left screen */}
      <rect x="60" y="64" width="30" height="3" fill="#A78BFA" />
      <rect x="60" y="71" width="46" height="3" fill="#75B798" />
      <rect x="66" y="78" width="52" height="3" fill="#76B7E5" />
      <rect x="66" y="85" width="38" height="3" fill="#F4C95D" />
      <rect x="60" y="92" width="20" height="3" fill="#A78BFA" />
      <rect x="60" y="99" width="48" height="3" fill="#75B798" />
      <rect x="66" y="106" width="40" height="3" fill="#F4F0E6" opacity="0.8" />
      <rect x="66" y="113" width="50" height="3" fill="#76B7E5" />
      <rect x="60" y="120" width="28" height="3" fill="#F4C95D" />
      <rect x="60" y="127" width="54" height="3" fill="#75B798" />
      <rect x="66" y="134" width="32" height="3" fill="#A78BFA" />
      <rect x="66" y="141" width="44" height="3" fill="#F4F0E6" opacity="0.8" />
      <rect x="60" y="148" width="16" height="3" fill="#76B7E5" />

      {/* Main Center Monitor */}
      <rect x="142" y="38" width="160" height="118" rx="3" fill="#121820" stroke="#344655" strokeWidth="2" />
      <rect x="146" y="42" width="152" height="110" fill="#0f1722" />
      {/* Window titlebar */}
      <rect x="146" y="42" width="152" height="10" fill="#1e2c3c" />
      <rect x="150" y="45" width="4" height="4" fill="#FF5F56" />
      <rect x="156" y="45" width="4" height="4" fill="#FFBD2E" />
      <rect x="162" y="45" width="4" height="4" fill="#27C93F" />
      <rect x="174" y="46" width="50" height="3" fill="#6B7B8D" />

      {/* Pixel Game Canvas preview on Center Screen */}
      <rect x="152" y="56" width="140" height="90" fill="#090e14" />
      {/* Mini pixel hills in game canvas */}
      <polygon points="152,146 190,118 230,146" fill="#1b4231" />
      <polygon points="200,146 250,110 292,146" fill="#235c43" />
      {/* Mini pixel hero sprite on screen */}
      <rect x="218" y="104" width="8" height="10" fill="#F4C95D" />
      <rect x="220" y="98" width="6" height="6" fill="#F0C890" />
      <rect x="220" y="96" width="6" height="3" fill="#8B4513" />
      {/* Mini coin floating */}
      <rect x="238" y="96" width="4" height="6" fill="#FFD700" />
      <rect x="239" y="97" width="2" height="4" fill="#FFF" />
      {/* Monitor Stand */}
      <rect x="216" y="156" width="12" height="10" fill="#243343" />
      <rect x="200" y="164" width="44" height="4" fill="#18232d" />

      {/* Mechanical Keyboard */}
      <rect x="160" y="172" width="96" height="24" rx="2" fill="#0c1218" stroke="#2c3c4c" strokeWidth="1.5" />
      {/* Glowing keycaps row */}
      <rect x="164" y="176" width="88" height="3" fill="#F4C95D" opacity="0.8" />
      <rect x="164" y="181" width="88" height="3" fill="#76B7E5" opacity="0.8" />
      <rect x="164" y="186" width="88" height="3" fill="#A78BFA" opacity="0.8" />
      <rect x="186" y="191" width="44" height="3" fill="#75B798" opacity="0.9" /> {/* Spacebar */}

      {/* Mouse & Mousepad */}
      <rect x="270" y="174" width="34" height="22" rx="2" fill="#182535" />
      <rect x="282" y="178" width="10" height="14" rx="3" fill="#344655" />
      <rect x="286" y="180" width="2" height="4" fill="#F4C95D" />

      {/* Pixel Coffee Mug */}
      <rect x="120" y="170" width="16" height="20" rx="1" fill="#E2E8F0" />
      <rect x="134" y="174" width="6" height="12" fill="none" stroke="#E2E8F0" strokeWidth="2" />
      <rect x="123" y="173" width="10" height="3" fill="#6F4E37" />
      {/* Rising Steam */}
      <path d="M124 166 Q 126 162 124 158" stroke="#F4C95D" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />
      <path d="M129 164 Q 131 160 129 156" stroke="#F4C95D" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.4" />

      {/* Mini Desk Succulent Plant */}
      <rect x="328" y="172" width="18" height="16" fill="#C87860" />
      <rect x="326" y="170" width="22" height="3" fill="#A65842" />
      <rect x="333" y="158" width="8" height="12" rx="2" fill="#52B788" />
      <rect x="328" y="164" width="6" height="8" rx="2" fill="#74C69D" />
      <rect x="340" y="164" width="6" height="8" rx="2" fill="#74C69D" />

      {/* Ambient Glow Gradient */}
      <circle cx="222" cy="98" r="50" fill="#F4C95D" opacity="0.08" />
      <circle cx="90" cy="110" r="40" fill="#76B7E5" opacity="0.06" />
    </svg>
  );
};

// ─── Project Artwork 2: Task Manager Pro ──────────────────────────────────────
export const TaskManagerArtwork: React.FC = () => {
  return (
    <svg viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: '100%', imageRendering: 'pixelated' }}>
      {/* Window Container */}
      <rect x="16" y="16" width="368" height="188" rx="4" fill="#121A24" stroke="#344655" strokeWidth="2" />

      {/* Header Bar */}
      <rect x="16" y="16" width="368" height="28" fill="#182330" />
      <rect x="28" y="28" width="6" height="6" fill="#75B798" />
      <rect x="38" y="26" width="64" height="8" fill="#75B798" rx="1" opacity="0.9" />
      <rect x="110" y="27" width="40" height="6" fill="#6B7B8D" rx="1" />

      {/* Search & Team Avatar Stack in Header */}
      <rect x="250" y="24" width="70" height="12" fill="#0e151e" stroke="#2c3a4a" strokeWidth="1" rx="2" />
      <circle cx="336" cy="30" r="5" fill="#76B7E5" />
      <circle cx="346" cy="30" r="5" fill="#F4C95D" />
      <circle cx="356" cy="30" r="5" fill="#A78BFA" />

      {/* Kanban Board Columns */}
      {/* Column 1: Backlog */}
      <rect x="30" y="56" width="102" height="136" rx="2" fill="#16202c" />
      <rect x="38" y="64" width="44" height="6" fill="#6B7B8D" />
      <rect x="116" y="64" width="8" height="6" fill="#344655" />

      {/* Card 1.1 */}
      <rect x="36" y="78" width="90" height="42" rx="2" fill="#1e2c3c" stroke="#2f4255" strokeWidth="1" />
      <rect x="42" y="84" width="22" height="5" fill="#F4C95D" rx="1" /> {/* Tag: High */}
      <rect x="42" y="93" width="76" height="4" fill="#E2E8F0" opacity="0.9" />
      <rect x="42" y="100" width="50" height="3" fill="#6B7B8D" />
      <circle cx="116" cy="110" r="4" fill="#76B7E5" />

      {/* Card 1.2 */}
      <rect x="36" y="126" width="90" height="38" rx="2" fill="#1e2c3c" stroke="#2f4255" strokeWidth="1" />
      <rect x="42" y="132" width="26" height="5" fill="#76B7E5" rx="1" /> {/* Tag: Feature */}
      <rect x="42" y="141" width="60" height="4" fill="#E2E8F0" opacity="0.8" />
      <circle cx="116" cy="154" r="4" fill="#F4C95D" />

      {/* Column 2: In Progress */}
      <rect x="146" y="56" width="108" height="136" rx="2" fill="#16202c" stroke="#F4C95D" strokeWidth="1" strokeDasharray="3 3" />
      <rect x="154" y="64" width="56" height="6" fill="#F4C95D" />
      <rect x="236" y="64" width="10" height="6" fill="#F4C95D" opacity="0.4" />

      {/* Card 2.1 (Active / Hovered effect) */}
      <rect x="152" y="78" width="96" height="58" rx="2" fill="#223244" stroke="#F4C95D" strokeWidth="1.5" />
      <rect x="158" y="84" width="30" height="5" fill="#FF5F56" rx="1" /> {/* Urgent */}
      <rect x="158" y="94" width="82" height="5" fill="#FFF" />
      <rect x="158" y="102" width="68" height="4" fill="#AAB7C4" />
      {/* Progress Bar inside Card */}
      <rect x="158" y="112" width="84" height="4" rx="2" fill="#101820" />
      <rect x="158" y="112" width="56" height="4" rx="2" fill="#75B798" />
      <circle cx="236" cy="126" r="4" fill="#A78BFA" />

      {/* Column 3: Done */}
      <rect x="268" y="56" width="102" height="136" rx="2" fill="#16202c" />
      <rect x="276" y="64" width="36" height="6" fill="#75B798" />
      <rect x="354" y="64" width="8" height="6" fill="#75B798" opacity="0.3" />

      {/* Card 3.1 Done */}
      <rect x="274" y="78" width="90" height="38" rx="2" fill="#1c2734" stroke="#2c3a4a" strokeWidth="1" />
      <rect x="280" y="84" width="22" height="5" fill="#75B798" rx="1" />
      <rect x="280" y="93" width="70" height="4" fill="#6B7B8D" />
      {/* Checkmark badge */}
      <circle cx="352" cy="104" r="5" fill="#75B798" />
      <path d="M350 104 L 352 106 L 355 102" stroke="#121A24" strokeWidth="1.5" strokeLinecap="round" />

      {/* Card 3.2 Done */}
      <rect x="274" y="122" width="90" height="38" rx="2" fill="#1c2734" stroke="#2c3a4a" strokeWidth="1" />
      <rect x="280" y="128" width="22" height="5" fill="#75B798" rx="1" />
      <rect x="280" y="137" width="58" height="4" fill="#6B7B8D" />
      <circle cx="352" cy="148" r="5" fill="#75B798" />
      <path d="M350 148 L 352 150 L 355 146" stroke="#121A24" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
};

// ─── Project Artwork 3: DevBlog CMS ──────────────────────────────────────────
export const DevBlogArtwork: React.FC = () => {
  return (
    <svg viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: '100%', imageRendering: 'pixelated' }}>
      {/* Background Frame */}
      <rect x="16" y="16" width="368" height="188" rx="4" fill="#101822" stroke="#344655" strokeWidth="2" />

      {/* Top Titlebar */}
      <rect x="16" y="16" width="368" height="26" fill="#172230" />
      <rect x="26" y="24" width="5" height="5" fill="#FF5F56" />
      <rect x="35" y="24" width="5" height="5" fill="#FFBD2E" />
      <rect x="44" y="24" width="5" height="5" fill="#27C93F" />
      <rect x="60" y="25" width="80" height="6" fill="#76B7E5" rx="1" />

      {/* Live Publishing Badge */}
      <rect x="310" y="23" width="60" height="12" rx="2" fill="#75B798" opacity="0.2" stroke="#75B798" strokeWidth="1" />
      <circle cx="320" cy="29" r="2.5" fill="#75B798" />
      <rect x="328" y="26" width="34" height="5" fill="#75B798" />

      {/* Split View Editor */}
      {/* Left: Markdown Code Editor */}
      <rect x="28" y="52" width="168" height="140" rx="2" fill="#0d131b" stroke="#253545" strokeWidth="1" />
      <rect x="38" y="60" width="36" height="6" fill="#F4C95D" /> {/* # Heading */}
      <rect x="38" y="72" width="110" height="4" fill="#AAB7C4" />
      <rect x="38" y="80" width="94" height="4" fill="#AAB7C4" />

      {/* Code Block Fenced */}
      <rect x="34" y="90" width="156" height="46" rx="2" fill="#151e2a" stroke="#2b3d4f" strokeWidth="1" />
      <rect x="42" y="96" width="40" height="4" fill="#76B7E5" />
      <rect x="42" y="104" width="90" height="4" fill="#A78BFA" />
      <rect x="52" y="112" width="70" height="4" fill="#75B798" />
      <rect x="42" y="120" width="30" height="4" fill="#F4C95D" />

      {/* Blinking Cursor */}
      <rect x="38" y="146" width="70" height="4" fill="#AAB7C4" />
      <rect x="112" y="145" width="3" height="7" fill="#76B7E5" />

      {/* Right: Rich HTML Live Preview */}
      <rect x="204" y="52" width="168" height="140" rx="2" fill="#141c26" stroke="#253545" strokeWidth="1" />
      <rect x="216" y="60" width="80" height="9" fill="#FFF" rx="1" />
      <rect x="216" y="74" width="140" height="4" fill="#AAB7C4" />
      <rect x="216" y="82" width="126" height="4" fill="#AAB7C4" />

      {/* Styled Callout box in Preview */}
      <rect x="214" y="94" width="148" height="38" rx="2" fill="#1b2938" stroke="#76B7E5" strokeWidth="1" />
      <rect x="222" y="102" width="24" height="4" fill="#76B7E5" />
      <rect x="222" y="110" width="128" height="4" fill="#E2E8F0" opacity="0.9" />
      <rect x="222" y="118" width="96" height="4" fill="#AAB7C4" />

      {/* Floating Retro Floppy Disk Save Indicator */}
      <g transform="translate(330, 150)">
        <rect x="0" y="0" width="28" height="28" rx="2" fill="#2A4365" stroke="#76B7E5" strokeWidth="1.5" />
        <rect x="4" y="0" width="20" height="10" fill="#E2E8F0" />
        <rect x="7" y="2" width="5" height="6" fill="#1A202C" />
        <rect x="6" y="14" width="16" height="10" fill="#E2E8F0" />
        <rect x="8" y="17" width="12" height="2" fill="#76B7E5" />
      </g>
    </svg>
  );
};

// ─── Project Artwork 4: RetroSynth Audio Lab ─────────────────────────────────
export const RetroSynthArtwork: React.FC = () => {
  return (
    <svg viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: '100%', imageRendering: 'pixelated' }}>
      {/* Synthesizer Unit Shell */}
      <rect x="16" y="16" width="368" height="188" rx="4" fill="#121820" stroke="#344655" strokeWidth="2" />
      <rect x="16" y="16" width="368" height="22" fill="#1a2430" />
      <rect x="26" y="23" width="50" height="6" fill="#A78BFA" />

      {/* Oscilloscope Screen (Center Left) */}
      <rect x="30" y="48" width="170" height="96" rx="3" fill="#06120d" stroke="#22543d" strokeWidth="2" />
      {/* Grid on screen */}
      <path d="M30 96 H200 M115 48 V144" stroke="#163828" strokeWidth="1" strokeDasharray="3 3" />
      {/* Chiptune Waveform */}
      <path d="M34 96 Q 50 60 70 96 T 106 96 T 142 66 T 178 126 T 196 96"
        stroke="#38A169" strokeWidth="2.5" fill="none" />
      <path d="M34 96 Q 50 60 70 96 T 106 96 T 142 66 T 178 126 T 196 96"
        stroke="#68D391" strokeWidth="1" fill="none" opacity="0.9" />

      {/* LED VU Meter Bar (Right of oscilloscope) */}
      <g transform="translate(212, 48)">
        {[...Array(10)].map((_, i) => (
          <rect key={i} x="0" y={i * 9.5} width="16" height="6" rx="1"
            fill={i < 2 ? '#FF5F56' : i < 5 ? '#FFBD2E' : '#27C93F'} opacity={i < 8 ? 0.9 : 0.2} />
        ))}
        {[...Array(10)].map((_, i) => (
          <rect key={i} x="20" y={i * 9.5} width="16" height="6" rx="1"
            fill={i < 2 ? '#FF5F56' : i < 5 ? '#FFBD2E' : '#27C93F'} opacity={i < 6 ? 0.9 : 0.2} />
        ))}
      </g>

      {/* Dials & Knobs */}
      <g transform="translate(260, 48)">
        {/* Dial 1 */}
        <circle cx="20" cy="20" r="14" fill="#1F2A38" stroke="#4A5568" strokeWidth="2" />
        <line x1="20" y1="20" x2="28" y2="12" stroke="#F4C95D" strokeWidth="2" strokeLinecap="round" />
        <rect x="8" y="38" width="24" height="4" fill="#AAB7C4" />

        {/* Dial 2 */}
        <circle cx="68" cy="20" r="14" fill="#1F2A38" stroke="#4A5568" strokeWidth="2" />
        <line x1="68" y1="20" x2="62" y2="10" stroke="#76B7E5" strokeWidth="2" strokeLinecap="round" />
        <rect x="56" y="38" width="24" height="4" fill="#AAB7C4" />

        {/* Dial 3 */}
        <circle cx="114" cy="20" r="14" fill="#1F2A38" stroke="#4A5568" strokeWidth="2" />
        <line x1="114" y1="20" x2="122" y2="24" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" />
        <rect x="102" y="38" width="24" height="4" fill="#AAB7C4" />
      </g>

      {/* Vertical Sliders (Faders) */}
      <g transform="translate(262, 100)">
        {[0, 32, 64, 94].map((offset, idx) => (
          <g key={idx} transform={`translate(${offset}, 0)`}>
            <rect x="6" y="0" width="2" height="40" fill="#2D3748" />
            <rect x="0" y={8 + (idx % 3) * 8} width="14" height="8" rx="1" fill="#4A5568" stroke="#CBD5E0" strokeWidth="1" />
            <line x1="2" y1={12 + (idx % 3) * 8} x2="12" y2={12 + (idx % 3) * 8} stroke="#F4C95D" strokeWidth="1" />
          </g>
        ))}
      </g>

      {/* 8-Bit Piano Keys (Bottom) */}
      <g transform="translate(30, 154)">
        {/* White keys */}
        {[...Array(18)].map((_, i) => (
          <rect key={i} x={i * 18.5} y="0" width="17" height="38" rx="1" fill="#E2E8F0" stroke="#2D3748" strokeWidth="1" />
        ))}
        {/* Black keys */}
        {[0, 1, 3, 4, 5, 7, 8, 10, 11, 12, 14, 15].map((keyIdx, i) => (
          <rect key={i} x={keyIdx * 18.5 + 11} y="0" width="12" height="24" rx="1" fill="#1A202C" />
        ))}
      </g>
    </svg>
  );
};

// ─── Project Artwork 5: Pixel Weather & Sky Canvas ────────────────────────────
export const PixelWeatherArtwork: React.FC = () => {
  return (
    <svg viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: '100%', imageRendering: 'pixelated' }}>
      <defs>
        <linearGradient id="weather-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e3a8a" />
          <stop offset="60%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
      </defs>

      {/* Sky Canvas Window */}
      <rect x="16" y="16" width="368" height="188" rx="4" fill="url(#weather-sky)" stroke="#344655" strokeWidth="2" />

      {/* Pixel Sun */}
      <rect x="290" y="38" width="36" height="36" fill="#FBBF24" />
      <rect x="286" y="44" width="44" height="24" fill="#FBBF24" />
      <rect x="296" y="34" width="24" height="44" fill="#FBBF24" />
      <rect x="296" y="44" width="24" height="24" fill="#FFFBEB" />

      {/* Pixel Floating Clouds */}
      <g transform="translate(60, 44)">
        <rect x="12" y="12" width="72" height="20" fill="#FFFFFF" rx="2" />
        <rect x="24" y="0" width="36" height="20" fill="#FFFFFF" rx="2" />
        <rect x="44" y="6" width="28" height="18" fill="#FFFFFF" rx="2" />
        <rect x="8" y="24" width="76" height="8" fill="#E2E8F0" />
      </g>

      <g transform="translate(190, 70)">
        <rect x="10" y="8" width="56" height="16" fill="#FFFFFF" opacity="0.9" />
        <rect x="20" y="0" width="28" height="14" fill="#FFFFFF" opacity="0.9" />
      </g>

      {/* Pixel Raindrops (left side) */}
      {[
        [80, 80], [100, 96], [70, 110], [90, 126], [120, 84], [114, 114], [130, 130]
      ].map(([x, y], idx) => (
        <rect key={idx} x={x} y={y} width="3" height="10" fill="#93C5FD" transform="rotate(15)" />
      ))}

      {/* Mountain Silhouettes */}
      <polygon points="16,204 110,130 190,204" fill="#1e293b" />
      <polygon points="130,204 220,118 310,204" fill="#0f172a" />
      <polygon points="260,204 330,140 384,204" fill="#1e293b" />

      {/* Weather HUD Overlay */}
      <rect x="30" y="30" width="90" height="44" rx="2" fill="rgba(15, 23, 42, 0.75)" stroke="#60A5FA" strokeWidth="1" />
      <rect x="38" y="38" width="34" height="6" fill="#F4C95D" />
      <text x="38" y="64" fontFamily="monospace" fontSize="16" fontWeight="bold" fill="#FFF">24°C</text>
      <circle cx="82" cy="52" r="2" fill="#FFF" />
    </svg>
  );
};

// ─── Tech Stack Pixel Art Icons ──────────────────────────────────────────────
export const PixelTechIcon: React.FC<{ name: string; size?: number }> = ({ name, size = 20 }) => {
  const norm = name.toLowerCase();

  if (norm.includes('react')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ imageRendering: 'pixelated' }}>
        <circle cx="12" cy="12" r="3" fill="#61DAFB" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(30 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(90 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(150 12 12)" />
      </svg>
    );
  }

  if (norm.includes('typescript') || norm === 'ts') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ imageRendering: 'pixelated' }}>
        <rect width="24" height="24" rx="2" fill="#3178C6" />
        <path d="M5 8 H13 M9 8 V18" stroke="#FFF" strokeWidth="2.5" strokeLinecap="square" />
        <path d="M19 10 C19 8.5 15 8.5 15 11 C15 14 19 13.5 19 16 C19 18 15 18 14 17" stroke="#FFF" strokeWidth="2" strokeLinecap="square" />
      </svg>
    );
  }

  if (norm.includes('javascript') || norm === 'js') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ imageRendering: 'pixelated' }}>
        <rect width="24" height="24" rx="2" fill="#F7DF1E" />
        <path d="M7 14 V18 C7 19.5 5 19.5 5 18" stroke="#000" strokeWidth="2" strokeLinecap="square" />
        <path d="M18 12 C18 10 14 10 14 13 C14 16 18 15.5 18 18 C18 20 13 20 13 18" stroke="#000" strokeWidth="2" strokeLinecap="square" />
      </svg>
    );
  }

  if (norm.includes('tailwind')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ imageRendering: 'pixelated' }}>
        <path d="M6 12 C8 8 11 8 13 10 C15 12 17 12 18 10 C17 14 14 14 12 12 C10 10 8 10 6 12 Z" fill="#38BDF8" />
        <path d="M2 17 C4 13 7 13 9 15 C11 17 13 17 14 15 C13 19 10 19 8 17 C6 15 4 15 2 17 Z" fill="#38BDF8" />
      </svg>
    );
  }

  if (norm.includes('laravel')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ imageRendering: 'pixelated' }}>
        <rect width="24" height="24" rx="2" fill="#FF2D20" />
        <path d="M6 16 L12 6 L18 16 L14 16 L12 12 L10 16 Z" fill="#FFF" />
      </svg>
    );
  }

  if (norm.includes('node')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ imageRendering: 'pixelated' }}>
        <polygon points="12,2 22,7.5 22,18.5 12,24 2,18.5 2,7.5" fill="#339933" />
        <text x="12" y="16" textAnchor="middle" fill="#FFF" fontSize="10" fontFamily="sans-serif" fontWeight="bold">JS</text>
      </svg>
    );
  }

  if (norm.includes('php')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ imageRendering: 'pixelated' }}>
        <ellipse cx="12" cy="12" rx="11" ry="8" fill="#777BB4" />
        <text x="12" y="15" textAnchor="middle" fill="#FFF" fontSize="9" fontFamily="monospace" fontWeight="bold">PHP</text>
      </svg>
    );
  }

  if (norm.includes('mysql') || norm.includes('database') || norm.includes('sql')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ imageRendering: 'pixelated' }}>
        <rect x="4" y="3" width="16" height="5" rx="2" fill="#00758F" />
        <rect x="4" y="9.5" width="16" height="5" rx="2" fill="#00758F" />
        <rect x="4" y="16" width="16" height="5" rx="2" fill="#00758F" />
        <circle cx="8" cy="5.5" r="1.5" fill="#F29111" />
        <circle cx="8" cy="12" r="1.5" fill="#F29111" />
        <circle cx="8" cy="18.5" r="1.5" fill="#F29111" />
      </svg>
    );
  }

  if (norm.includes('docker')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ imageRendering: 'pixelated' }}>
        <rect x="6" y="8" width="3" height="3" fill="#2496ED" />
        <rect x="10" y="8" width="3" height="3" fill="#2496ED" />
        <rect x="14" y="8" width="3" height="3" fill="#2496ED" />
        <rect x="10" y="4" width="3" height="3" fill="#2496ED" />
        <path d="M2 13 C2 18 6 20 12 20 C18 20 22 17 22 13 C20 13 18 14 16 13 C14 12 6 12 2 13 Z" fill="#2496ED" />
      </svg>
    );
  }

  if (norm.includes('figma')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ imageRendering: 'pixelated' }}>
        <rect x="6" y="2" width="6" height="6" rx="3" fill="#F24E1E" />
        <rect x="12" y="2" width="6" height="6" rx="3" fill="#FF7262" />
        <rect x="6" y="8" width="6" height="6" rx="3" fill="#A259FF" />
        <circle cx="15" cy="11" r="3" fill="#1ABCFE" />
        <rect x="6" y="14" width="6" height="6" rx="3" fill="#0ACF83" />
      </svg>
    );
  }

  if (norm.includes('git')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ imageRendering: 'pixelated' }}>
        <rect width="24" height="24" rx="3" fill="#F05032" />
        <circle cx="9" cy="7" r="2" fill="#FFF" />
        <circle cx="15" cy="12" r="2" fill="#FFF" />
        <circle cx="9" cy="17" r="2" fill="#FFF" />
        <line x1="9" y1="7" x2="9" y2="17" stroke="#FFF" strokeWidth="1.5" />
        <line x1="9" y1="12" x2="15" y2="12" stroke="#FFF" strokeWidth="1.5" />
      </svg>
    );
  }

  // Fallback pixel chip icon
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ imageRendering: 'pixelated' }}>
      <rect x="5" y="5" width="14" height="14" rx="2" fill="#243040" stroke="#F4C95D" strokeWidth="1.5" />
      <rect x="9" y="9" width="6" height="6" fill="#F4C95D" />
      <line x1="2" y1="8" x2="5" y2="8" stroke="#F4C95D" strokeWidth="1.5" />
      <line x1="2" y1="16" x2="5" y2="16" stroke="#F4C95D" strokeWidth="1.5" />
      <line x1="19" y1="8" x2="22" y2="8" stroke="#F4C95D" strokeWidth="1.5" />
      <line x1="19" y1="16" x2="22" y2="16" stroke="#F4C95D" strokeWidth="1.5" />
    </svg>
  );
};

// ─── High-Fidelity Character Avatar ──────────────────────────────────────────
export const PixelAvatarFull: React.FC<{ size?: number }> = ({ size = 200 }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ imageRendering: 'pixelated' }}>
      {/* Background circular halo glow */}
      <circle cx="50" cy="50" r="46" fill="#182535" stroke="#F4C95D" strokeWidth="2" strokeDasharray="4 2" />
      <circle cx="50" cy="50" r="40" fill="#0E1620" />

      {/* Cyber Headset Band */}
      <rect x="26" y="24" width="48" height="6" fill="#4B5563" rx="2" />
      {/* Headset ear pads */}
      <rect x="22" y="32" width="6" height="14" fill="#F4C95D" rx="1" />
      <rect x="72" y="32" width="6" height="14" fill="#F4C95D" rx="1" />
      <rect x="23" y="44" width="12" height="3" fill="#4B5563" /> {/* Mic arm */}
      <circle cx="36" cy="45" r="2.5" fill="#38BDF8" /> {/* Glowing mic tip */}

      {/* Hair */}
      <rect x="28" y="20" width="44" height="12" fill="#2B1810" />
      <rect x="24" y="26" width="10" height="12" fill="#2B1810" />
      <rect x="66" y="26" width="10" height="12" fill="#2B1810" />
      <rect x="32" y="16" width="36" height="6" fill="#3D2314" />
      {/* Hair Highlights */}
      <rect x="36" y="18" width="12" height="3" fill="#F4C95D" opacity="0.6" />

      {/* Face & Ears */}
      <rect x="28" y="30" width="44" height="34" fill="#FCD34D" />
      <rect x="24" y="38" width="4" height="8" fill="#F59E0B" />
      <rect x="72" y="38" width="4" height="8" fill="#F59E0B" />

      {/* Stylish Cyber Glasses */}
      <rect x="32" y="38" width="15" height="10" rx="1" fill="#0F172A" stroke="#38BDF8" strokeWidth="2" />
      <rect x="53" y="38" width="15" height="10" rx="1" fill="#0F172A" stroke="#38BDF8" strokeWidth="2" />
      <rect x="47" y="42" width="6" height="2" fill="#38BDF8" />
      {/* Eye reflections in glasses */}
      <rect x="35" y="40" width="5" height="4" fill="#38BDF8" />
      <rect x="56" y="40" width="5" height="4" fill="#38BDF8" />
      <rect x="42" y="41" width="2" height="2" fill="#FFF" />
      <rect x="63" y="41" width="2" height="2" fill="#FFF" />

      {/* Friendly Smile */}
      <rect x="44" y="54" width="12" height="3" fill="#92400E" rx="1" />
      <rect x="42" y="52" width="2" height="3" fill="#92400E" />
      <rect x="56" y="52" width="2" height="3" fill="#92400E" />

      {/* Cyber Hoodie / Jacket */}
      <rect x="26" y="64" width="48" height="28" fill="#1E293B" />
      {/* Hoodie Collar */}
      <polygon points="34,64 50,76 66,64" fill="#334155" />
      <polygon points="42,64 50,73 58,64" fill="#0F172A" />
      {/* Jacket Accent Stripes */}
      <rect x="26" y="70" width="4" height="22" fill="#F4C95D" />
      <rect x="70" y="70" width="4" height="22" fill="#F4C95D" />
      {/* Developer Logo Badge on chest */}
      <rect x="58" y="72" width="8" height="8" rx="1" fill="#0284C7" />
      <text x="62" y="78" textAnchor="middle" fill="#FFF" fontSize="6" fontFamily="monospace" fontWeight="bold">&lt;&gt;</text>
    </svg>
  );
};

// ─── Pixel Gear & Inventory Icons ─────────────────────────────────────────────
export const PixelDualMonitorIcon: React.FC<{ size?: number }> = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" style={{ imageRendering: 'pixelated' }}>
    <rect x="2" y="6" width="16" height="14" fill="#0F172A" stroke="#38BDF8" strokeWidth="1.5" />
    <rect x="4" y="8" width="12" height="10" fill="#1E293B" />
    <rect x="5" y="10" width="8" height="2" fill="#38BDF8" />
    <rect x="5" y="14" width="10" height="2" fill="#34D399" />
    <rect x="16" y="8" width="14" height="14" fill="#0F172A" stroke="#F4C95D" strokeWidth="1.5" />
    <rect x="18" y="10" width="10" height="10" fill="#1E293B" />
    <rect x="19" y="12" width="6" height="2" fill="#F4C95D" />
    <rect x="8" y="20" width="4" height="4" fill="#64748B" />
    <rect x="5" y="24" width="10" height="2" fill="#475569" />
    <rect x="21" y="22" width="4" height="3" fill="#64748B" />
    <rect x="19" y="25" width="8" height="2" fill="#475569" />
  </svg>
);

export const PixelKeyboardIcon: React.FC<{ size?: number }> = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" style={{ imageRendering: 'pixelated' }}>
    <rect x="3" y="10" width="26" height="14" rx="1" fill="#1E293B" stroke="#F4C95D" strokeWidth="1.5" />
    <rect x="6" y="13" width="3" height="2" fill="#F4C95D" />
    <rect x="11" y="13" width="3" height="2" fill="#38BDF8" />
    <rect x="16" y="13" width="3" height="2" fill="#34D399" />
    <rect x="21" y="13" width="5" height="2" fill="#C084FC" />
    <rect x="6" y="17" width="3" height="2" fill="#CBD5E1" />
    <rect x="11" y="17" width="10" height="2" fill="#F4C95D" /> {/* Spacebar */}
    <rect x="23" y="17" width="3" height="2" fill="#CBD5E1" />
  </svg>
);

export const PixelHeadphoneIcon: React.FC<{ size?: number }> = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" style={{ imageRendering: 'pixelated' }}>
    <path d="M8 17 V12 C8 7.5 11.5 5 16 5 C20.5 5 24 7.5 24 12 V17" stroke="#A855F7" strokeWidth="2.5" strokeLinecap="square" />
    <rect x="4" y="15" width="6" height="10" rx="1" fill="#0F172A" stroke="#C084FC" strokeWidth="1.5" />
    <rect x="6" y="17" width="2" height="6" fill="#A855F7" />
    <rect x="22" y="15" width="6" height="10" rx="1" fill="#0F172A" stroke="#C084FC" strokeWidth="1.5" />
    <rect x="24" y="17" width="2" height="6" fill="#A855F7" />
  </svg>
);

export const PixelCoffeeIcon: React.FC<{ size?: number }> = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" style={{ imageRendering: 'pixelated' }}>
    <rect x="7" y="12" width="14" height="15" rx="1" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="1.5" />
    <rect x="21" y="15" width="5" height="8" rx="2" fill="none" stroke="#F8FAFC" strokeWidth="2" />
    <rect x="9" y="14" width="10" height="3" fill="#78350F" />
    {/* Pixel Steam */}
    <rect x="10" y="7" width="2" height="3" fill="#F4C95D" opacity="0.8" />
    <rect x="15" y="5" width="2" height="4" fill="#F4C95D" opacity="0.8" />
    <rect x="12" y="3" width="2" height="3" fill="#F4C95D" opacity="0.5" />
  </svg>
);

export const PixelFloppyIcon: React.FC<{ size?: number }> = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" style={{ imageRendering: 'pixelated' }}>
    <rect x="5" y="5" width="22" height="22" rx="2" fill="#1E3A8A" stroke="#38BDF8" strokeWidth="1.5" />
    <rect x="9" y="5" width="14" height="8" fill="#F1F5F9" />
    <rect x="11" y="7" width="4" height="5" fill="#0F172A" />
    <rect x="9" y="16" width="14" height="9" rx="1" fill="#F1F5F9" />
    <rect x="11" y="18" width="10" height="2" fill="#3B82F6" />
  </svg>
);

export const PixelCatIcon: React.FC<{ size?: number }> = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" style={{ imageRendering: 'pixelated' }}>
    <polygon points="7,8 11,14 7,14" fill="#F59E0B" />
    <polygon points="25,8 21,14 25,14" fill="#F59E0B" />
    <rect x="8" y="12" width="16" height="12" rx="2" fill="#F59E0B" />
    <rect x="11" y="15" width="3" height="3" fill="#1E293B" />
    <rect x="18" y="15" width="3" height="3" fill="#1E293B" />
    <rect x="12" y="15" width="1" height="1" fill="#FFF" />
    <rect x="19" y="15" width="1" height="1" fill="#FFF" />
    <polygon points="16,19 14,21 18,21" fill="#EC4899" />
    <rect x="10" y="24" width="12" height="6" rx="2" fill="#D97706" />
    <rect x="22" y="24" width="4" height="4" fill="#F59E0B" />
  </svg>
);

// ═══════════════════════════════════════════════════════════════════════════════
// ─── RETRO SPACE PIXEL ART ICONS ──────────────────────────────────────────────
// ═══════════════════════════════════════════════════════════════════════════════

export const PixelRocketIcon: React.FC<{ size?: number }> = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" style={{ imageRendering: 'pixelated' }}>
    {/* Rocket Nosecone */}
    <rect x="15" y="2" width="2" height="2" fill="#EF4444" />
    <rect x="14" y="4" width="4" height="2" fill="#EF4444" />
    <rect x="13" y="6" width="6" height="2" fill="#F8FAFC" />
    {/* Rocket Body */}
    <rect x="12" y="8" width="8" height="12" fill="#F8FAFC" />
    {/* Cyan Cockpit Porthole */}
    <rect x="14" y="10" width="4" height="4" fill="#0284C7" />
    <rect x="15" y="11" width="2" height="2" fill="#38BDF8" />
    <rect x="15" y="11" width="1" height="1" fill="#FFF" />
    {/* Body Stripe */}
    <rect x="12" y="16" width="8" height="2" fill="#38BDF8" />
    {/* Left & Right Booster Wings */}
    <polygon points="12,14 8,20 12,20" fill="#EF4444" />
    <polygon points="20,14 24,20 20,20" fill="#EF4444" />
    <rect x="8" y="20" width="4" height="2" fill="#B91C1C" />
    <rect x="20" y="20" width="4" height="2" fill="#B91C1C" />
    {/* Engine Nozzle */}
    <rect x="13" y="20" width="6" height="2" fill="#64748B" />
    {/* Thruster Flame (animated pixel flame) */}
    <rect x="14" y="22" width="4" height="3" fill="#F59E0B" />
    <rect x="15" y="25" width="2" height="3" fill="#EF4444" />
    <rect x="15" y="23" width="2" height="2" fill="#FEF08A" />
    {/* Spark particles */}
    <rect x="12" y="25" width="1" height="2" fill="#F59E0B" />
    <rect x="19" y="25" width="1" height="2" fill="#F59E0B" />
  </svg>
);

export const PixelPlanetSaturnIcon: React.FC<{ size?: number }> = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" style={{ imageRendering: 'pixelated' }}>
    {/* Outer Ring Behind Planet */}
    <ellipse cx="16" cy="16" rx="14" ry="4" stroke="#F4C95D" strokeWidth="1.5" strokeDasharray="16 2" opacity="0.6" />
    {/* Planet Body */}
    <circle cx="16" cy="16" r="8" fill="#4338CA" />
    <circle cx="16" cy="16" r="8" fill="url(#saturn-shading)" />
    {/* Planet Atmosphere Stripes */}
    <path d="M9 14 Q16 16 23 14" stroke="#818CF8" strokeWidth="1.5" />
    <path d="M9 17 Q16 19 23 17" stroke="#6366F1" strokeWidth="1.5" />
    <path d="M10 20 Q16 22 22 20" stroke="#312E81" strokeWidth="1.5" />
    {/* Front Ring Cutting in Front of Planet */}
    <path d="M2 16 Q16 22 30 16" stroke="#F4C95D" strokeWidth="2" strokeLinecap="square" />
    <path d="M4 17 Q16 23 28 17" stroke="#D97706" strokeWidth="1" strokeLinecap="square" />
    {/* Surface highlight spot */}
    <rect x="14" y="11" width="2" height="1" fill="#C7D2FE" />
  </svg>
);

export const PixelAstronautIcon: React.FC<{ size?: number }> = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" style={{ imageRendering: 'pixelated' }}>
    {/* Oxygen Backpack */}
    <rect x="6" y="10" width="4" height="12" rx="1" fill="#64748B" />
    <rect x="22" y="10" width="4" height="12" rx="1" fill="#64748B" />
    {/* Space Helmet Dome */}
    <rect x="10" y="4" width="12" height="11" rx="2" fill="#F1F5F9" stroke="#334155" strokeWidth="1" />
    {/* Gold Visor Shield */}
    <rect x="12" y="6" width="8" height="6" rx="1" fill="#0F172A" />
    <rect x="13" y="7" width="6" height="4" fill="#F59E0B" />
    {/* Visor Glare Reflection */}
    <rect x="14" y="7" width="2" height="2" fill="#FEF08A" />
    <rect x="17" y="8" width="1" height="1" fill="#FFF" />
    {/* Spacesuit Body */}
    <rect x="10" y="15" width="12" height="10" fill="#E2E8F0" />
    {/* Chest Utility Module */}
    <rect x="13" y="17" width="6" height="4" fill="#1E293B" />
    <rect x="14" y="18" width="2" height="2" fill="#38BDF8" />
    <rect x="17" y="18" width="1" height="1" fill="#22C55E" />
    {/* Space Boots & Legs */}
    <rect x="10" y="25" width="5" height="5" fill="#CBD5E1" />
    <rect x="17" y="25" width="5" height="5" fill="#CBD5E1" />
    <rect x="9" y="29" width="6" height="2" fill="#475569" />
    <rect x="17" y="29" width="6" height="2" fill="#475569" />
  </svg>
);

export const PixelSatelliteIcon: React.FC<{ size?: number }> = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" style={{ imageRendering: 'pixelated' }}>
    {/* Left Solar Panel */}
    <rect x="2" y="11" width="9" height="10" fill="#0284C7" stroke="#38BDF8" strokeWidth="1" />
    <line x1="2" y1="16" x2="11" y2="16" stroke="#38BDF8" strokeWidth="1" />
    <line x1="6" y1="11" x2="6" y2="21" stroke="#38BDF8" strokeWidth="1" />
    {/* Solar panel connecting strut */}
    <rect x="11" y="15" width="2" height="2" fill="#94A3B8" />
    {/* Main Satellite Core */}
    <rect x="13" y="12" width="6" height="8" fill="#F8FAFC" stroke="#475569" strokeWidth="1" />
    <rect x="15" y="14" width="2" height="2" fill="#22C55E" />
    <rect x="15" y="17" width="2" height="1" fill="#EF4444" />
    {/* Right Solar Panel */}
    <rect x="19" y="15" width="2" height="2" fill="#94A3B8" />
    <rect x="21" y="11" width="9" height="10" fill="#0284C7" stroke="#38BDF8" strokeWidth="1" />
    <line x1="21" y1="16" x2="30" y2="16" stroke="#38BDF8" strokeWidth="1" />
    <line x1="25" y1="11" x2="25" y2="21" stroke="#38BDF8" strokeWidth="1" />
    {/* Top Antenna & Transmit Dish */}
    <line x1="16" y1="12" x2="16" y2="6" stroke="#F4C95D" strokeWidth="1.5" />
    <circle cx="16" cy="5" r="2" fill="#F4C95D" />
    {/* Telemetry Radio Waves */}
    <path d="M12 3 Q16 1 20 3" stroke="#F4C95D" strokeWidth="1" strokeDasharray="2 1" />
  </svg>
);

export const PixelUFOIcon: React.FC<{ size?: number }> = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" style={{ imageRendering: 'pixelated' }}>
    {/* Glass Cockpit Dome */}
    <ellipse cx="16" cy="11" rx="6" ry="5" fill="#38BDF8" opacity="0.85" />
    <rect x="15" y="8" width="2" height="2" fill="#FFF" />
    {/* Saucer Hull */}
    <ellipse cx="16" cy="16" rx="13" ry="5" fill="#334155" stroke="#64748B" strokeWidth="1" />
    <ellipse cx="16" cy="16" rx="11" ry="3" fill="#475569" />
    {/* Alien Navigation Lights */}
    <circle cx="6" cy="16" r="1.5" fill="#22C55E" />
    <circle cx="11" cy="18" r="1.5" fill="#F59E0B" />
    <circle cx="16" cy="19" r="1.5" fill="#EC4899" />
    <circle cx="21" cy="18" r="1.5" fill="#F59E0B" />
    <circle cx="26" cy="16" r="1.5" fill="#22C55E" />
    {/* Tractor Beam */}
    <polygon points="12,21 4,30 28,30 20,21" fill="#4ADE80" opacity="0.25" />
    <line x1="16" y1="21" x2="16" y2="30" stroke="#4ADE80" strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />
  </svg>
);

export const PixelMeteorIcon: React.FC<{ size?: number }> = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" style={{ imageRendering: 'pixelated' }}>
    {/* Meteor Trail Plasma */}
    <polygon points="28,4 20,12 24,10" fill="#EF4444" opacity="0.4" />
    <polygon points="26,6 16,16 20,14" fill="#F59E0B" opacity="0.6" />
    <polygon points="22,10 12,20 16,18" fill="#FDE047" opacity="0.8" />
    {/* Burning Comet Core */}
    <circle cx="10" cy="22" r="5" fill="#78350F" />
    <circle cx="10" cy="22" r="4" fill="#EA580C" />
    <circle cx="9" cy="21" r="2" fill="#FEF08A" />
    {/* Particle sparks */}
    <rect x="25" y="3" width="2" height="2" fill="#F59E0B" />
    <rect x="18" y="8" width="1.5" height="1.5" fill="#FEF08A" />
    <rect x="14" y="13" width="2" height="2" fill="#EF4444" />
  </svg>
);

export const PixelGalaxyIcon: React.FC<{ size?: number }> = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" style={{ imageRendering: 'pixelated' }}>
    {/* Galaxy Core Glow */}
    <circle cx="16" cy="16" r="4" fill="#FEF08A" />
    <circle cx="16" cy="16" r="2" fill="#FFF" />
    {/* Spiral Arms */}
    <path d="M16 12 C18 9 24 9 26 13 C27 16 25 21 21 22" stroke="#C084FC" strokeWidth="2" strokeLinecap="round" />
    <path d="M16 20 C14 23 8 23 6 19 C5 16 7 11 11 10" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
    {/* Outer star dust clusters */}
    <rect x="25" y="11" width="1.5" height="1.5" fill="#E879F9" />
    <rect x="6" y="21" width="1.5" height="1.5" fill="#38BDF8" />
    <rect x="21" y="24" width="1" height="1" fill="#FEF08A" />
    <rect x="10" y="7" width="1" height="1" fill="#FEF08A" />
  </svg>
);

export const PixelRadarIcon: React.FC<{ size?: number }> = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" style={{ imageRendering: 'pixelated' }}>
    <circle cx="16" cy="16" r="13" fill="#022C22" stroke="#10B981" strokeWidth="1.5" />
    <circle cx="16" cy="16" r="9" stroke="#059669" strokeWidth="1" strokeDasharray="3 2" />
    <circle cx="16" cy="16" r="4" stroke="#059669" strokeWidth="1" />
    <line x1="16" y1="3" x2="16" y2="29" stroke="#047857" strokeWidth="1" />
    <line x1="3" y1="16" x2="29" y2="16" stroke="#047857" strokeWidth="1" />
    {/* Sweep Line */}
    <line x1="16" y1="16" x2="26" y2="7" stroke="#34D399" strokeWidth="2" />
    {/* Blip dots */}
    <rect x="20" y="10" width="2" height="2" fill="#6EE7B7" />
    <rect x="11" y="20" width="2" height="2" fill="#34D399" />
  </svg>
);

// ═══════════════════════════════════════════════════════════════════════════════
// ─── HIGH-FIDELITY SPACE ARTWORK 1: SPACE MISSION CONTROL ─────────────────────
// ═══════════════════════════════════════════════════════════════════════════════

export const SpaceMissionControlArtwork: React.FC<{ interactive?: boolean }> = () => {
  return (
    <svg viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: '100%', imageRendering: 'pixelated' }}>
      <defs>
        <pattern id="sm-stars" width="40" height="40" patternUnits="userSpaceOnUse">
          <rect x="8" y="12" width="2" height="2" fill="#F4C95D" opacity="0.8" />
          <rect x="24" y="6" width="1.5" height="1.5" fill="#38BDF8" opacity="0.6" />
          <rect x="34" y="28" width="2" height="2" fill="#FFFFFF" opacity="0.9" />
          <rect x="14" y="34" width="1" height="1" fill="#C084FC" opacity="0.7" />
        </pattern>
        <radialGradient id="nebula-glow" cx="70%" cy="30%" r="50%">
          <stop offset="0%" stopColor="#818CF8" stopOpacity="0.4" />
          <stop offset="60%" stopColor="#C084FC" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#0B0F19" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Deep Space Background Viewport */}
      <rect x="10" y="10" width="380" height="140" rx="4" fill="#080B14" />
      <rect x="10" y="10" width="380" height="140" fill="url(#nebula-glow)" />
      <rect x="10" y="10" width="380" height="140" fill="url(#sm-stars)" />

      {/* Distant Ringed Planet Saturn in Space */}
      <ellipse cx="310" cy="50" rx="28" ry="8" stroke="#F4C95D" strokeWidth="2" strokeDasharray="32 3" opacity="0.7" />
      <circle cx="310" cy="50" r="14" fill="#4338CA" />
      <path d="M298 48 Q310 52 322 48" stroke="#818CF8" strokeWidth="2" />
      <path d="M296 52 Q310 56 324 52" stroke="#6366F1" strokeWidth="2" />
      <path d="M282 50 Q310 60 338 50" stroke="#F4C95D" strokeWidth="2.5" />

      {/* Orbiting Satellite in Distance */}
      <rect x="60" y="35" width="6" height="4" fill="#E2E8F0" />
      <rect x="52" y="36" width="6" height="2" fill="#0284C7" />
      <rect x="68" y="36" width="6" height="2" fill="#0284C7" />
      <circle cx="63" cy="31" r="1" fill="#22C55E" />

      {/* Space Station Viewport Window Frame / Struts */}
      <polygon points="10,10 40,30 40,140 10,150" fill="#1E293B" opacity="0.9" />
      <polygon points="390,10 360,30 360,140 390,150" fill="#1E293B" opacity="0.9" />
      <rect x="195" y="10" width="10" height="135" fill="#1E293B" opacity="0.85" />
      <rect x="198" y="10" width="4" height="135" fill="#334155" />

      {/* Cockpit Bridge / Desk Surface */}
      <rect x="0" y="145" width="400" height="75" fill="#0F172A" />
      <rect x="0" y="145" width="400" height="6" fill="#1E293B" />
      <rect x="0" y="150" width="400" height="2" fill="#38BDF8" opacity="0.4" />

      {/* Left Station Monitor: Orbital Radar Telemetry */}
      <rect x="45" y="55" width="85" height="98" rx="2" fill="#091E19" stroke="#10B981" strokeWidth="2" />
      <rect x="49" y="59" width="77" height="90" fill="#022C22" />
      {/* Radar circles */}
      <circle cx="87" cy="100" r="30" stroke="#059669" strokeWidth="1" strokeDasharray="3 2" />
      <circle cx="87" cy="100" r="18" stroke="#059669" strokeWidth="1" />
      <circle cx="87" cy="100" r="6" stroke="#10B981" strokeWidth="1" fill="#064E3B" />
      <line x1="87" y1="70" x2="87" y2="130" stroke="#047857" strokeWidth="1" />
      <line x1="57" y1="100" x2="117" y2="100" stroke="#047857" strokeWidth="1" />
      <line x1="87" y1="100" x2="110" y2="82" stroke="#34D399" strokeWidth="1.5" />
      <rect x="100" y="86" width="3" height="3" fill="#6EE7B7" />
      {/* Radar stats text */}
      <text x="53" y="142" fill="#10B981" fontSize="7" fontFamily="monospace" fontWeight="bold">ORBIT: STABLE</text>

      {/* Center Console Monitor: Mission Flight & Terminal */}
      <rect x="145" y="42" width="155" height="110" rx="3" fill="#0F172A" stroke="#38BDF8" strokeWidth="2" />
      <rect x="149" y="46" width="147" height="102" fill="#080E1A" />
      {/* Title bar */}
      <rect x="149" y="46" width="147" height="12" fill="#0369A1" />
      <text x="154" y="55" fill="#E0F2FE" fontSize="7" fontFamily="monospace" fontWeight="bold">COSMOS_MISSION_CONTROL.EXE</text>
      <circle cx="288" cy="52" r="2" fill="#22C55E" />
      {/* Flight code lines */}
      <rect x="156" y="66" width="40" height="3" fill="#F4C95D" />
      <rect x="156" y="73" width="65" height="3" fill="#38BDF8" />
      <rect x="162" y="80" width="80" height="3" fill="#75B798" />
      <rect x="162" y="87" width="50" height="3" fill="#A78BFA" />
      <rect x="156" y="94" width="70" height="3" fill="#E2E8F0" opacity="0.8" />
      <rect x="156" y="101" width="95" height="3" fill="#38BDF8" />
      <rect x="162" y="108" width="60" height="3" fill="#F4C95D" />
      <rect x="156" y="115" width="85" height="3" fill="#75B798" />
      {/* Target Crosshair */}
      <rect x="250" y="75" width="35" height="35" stroke="#38BDF8" strokeWidth="1" strokeDasharray="4 2" />
      <line x1="267" y1="72" x2="267" y2="113" stroke="#38BDF8" strokeWidth="0.8" />
      <line x1="247" y1="92" x2="288" y2="92" stroke="#38BDF8" strokeWidth="0.8" />
      <circle cx="267" cy="92" r="3" fill="#EF4444" />
      <text x="154" y="138" fill="#F4C95D" fontSize="8" fontFamily="monospace">STATUS: ONLINE // SYS: 100%</text>

      {/* Right Monitor: Power & Fuel Cells */}
      <rect x="315" y="70" width="55" height="80" rx="2" fill="#18181B" stroke="#F59E0B" strokeWidth="1.5" />
      <rect x="318" y="73" width="49" height="74" fill="#09090B" />
      <text x="322" y="83" fill="#F59E0B" fontSize="6" fontFamily="monospace">THRUST: 98%</text>
      <rect x="322" y="88" width="40" height="6" fill="#27272A" />
      <rect x="322" y="88" width="38" height="6" fill="#22C55E" />
      <text x="322" y="105" fill="#38BDF8" fontSize="6" fontFamily="monospace">O2 TANK: OK</text>
      <rect x="322" y="110" width="40" height="6" fill="#27272A" />
      <rect x="322" y="110" width="36" height="6" fill="#38BDF8" />

      {/* Control Console Keyboard & Illuminated Switches */}
      <rect x="165" y="162" width="115" height="24" rx="2" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
      {/* Key rows */}
      {Array.from({ length: 10 }).map((_, i) => (
        <rect key={i} x={170 + i * 10.5} y="166" width="7" height="5" fill="#38BDF8" opacity="0.8" />
      ))}
      {Array.from({ length: 10 }).map((_, i) => (
        <rect key={i} x={170 + i * 10.5} y="174" width="7" height="5" fill="#CBD5E1" opacity="0.7" />
      ))}

      {/* Pilot Astro-Coffee Thermos */}
      <rect x="295" y="160" width="14" height="22" rx="2" fill="#0284C7" stroke="#38BDF8" strokeWidth="1" />
      <rect x="298" y="164" width="8" height="4" fill="#F4C95D" />
      <rect x="301" y="155" width="2" height="4" fill="#F4C95D" opacity="0.6" />

      {/* Left Console Gauge Levers & Buttons */}
      <rect x="65" y="165" width="8" height="8" rx="1" fill="#EF4444" />
      <rect x="80" y="165" width="8" height="8" rx="1" fill="#F59E0B" />
      <rect x="95" y="165" width="8" height="8" rx="1" fill="#22C55E" />
      <rect x="110" y="165" width="8" height="8" rx="1" fill="#38BDF8" />
    </svg>
  );
};

// ═══════════════════════════════════════════════════════════════════════════════
// ─── HIGH-FIDELITY PROJECT ARTWORK: SIPELMAD (KEMENAG KAMPAR) ─────────────────
// ═══════════════════════════════════════════════════════════════════════════════

export const SipelmadArtwork: React.FC<{ interactive?: boolean }> = () => {
  return (
    <svg viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: '100%', imageRendering: 'pixelated' }}>
      <defs>
        <pattern id="sp-grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <line x1="0" y1="20" x2="20" y2="20" stroke="#1E293B" strokeWidth="0.8" />
          <line x1="20" y1="0" x2="20" y2="20" stroke="#1E293B" strokeWidth="0.8" />
        </pattern>
      </defs>

      {/* Background Deep Cosmic Space */}
      <rect width="400" height="220" fill="#080C16" />
      <rect width="400" height="220" fill="url(#sp-grid)" opacity="0.5" />

      {/* Distant Orbit Stars */}
      <rect x="40" y="30" width="2" height="2" fill="#38BDF8" />
      <rect x="120" y="18" width="1.5" height="1.5" fill="#F4C95D" />
      <rect x="320" y="45" width="2" height="2" fill="#4ADE80" />
      <rect x="360" y="20" width="2" height="2" fill="#FFFFFF" />

      {/* Central Cloud Government Madrasah Data Station */}
      {/* Protective Sanctum Token Security Ring */}
      <circle cx="200" cy="110" r="75" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="12 6" opacity="0.5" />
      <circle cx="200" cy="110" r="88" stroke="#F4C95D" strokeWidth="1" strokeDasharray="6 10" opacity="0.4" />

      {/* Ministry Dome Center */}
      <rect x="155" y="80" width="90" height="70" rx="3" fill="#0F172A" stroke="#38BDF8" strokeWidth="2" />
      <polygon points="150,80 200,45 250,80" fill="#1E293B" stroke="#38BDF8" strokeWidth="2" />
      <rect x="195" y="32" width="10" height="15" fill="#F59E0B" />
      <polygon points="200,24 193,32 207,32" fill="#F59E0B" />

      {/* Badge on Dome: Kementerian Agama / Penmad */}
      <rect x="175" y="90" width="50" height="16" rx="2" fill="#0369A1" />
      <text x="200" y="101" fill="#FFFFFF" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">SIPELMAD</text>

      {/* Database Cylinders (MySQL) inside station */}
      <g transform="translate(170, 115)">
        <rect x="0" y="0" width="60" height="7" rx="3" fill="#0284C7" stroke="#38BDF8" strokeWidth="1" />
        <rect x="0" y="10" width="60" height="7" rx="3" fill="#0284C7" stroke="#38BDF8" strokeWidth="1" />
        <rect x="0" y="20" width="60" height="7" rx="3" fill="#0284C7" stroke="#38BDF8" strokeWidth="1" />
        <circle cx="50" cy="3.5" r="1.5" fill="#4ADE80" />
        <circle cx="50" cy="13.5" r="1.5" fill="#4ADE80" />
        <circle cx="50" cy="23.5" r="1.5" fill="#4ADE80" />
      </g>

      {/* Left Satellite: Madrasah Client Node */}
      <g transform="translate(45, 80)">
        <rect x="15" y="10" width="30" height="24" rx="2" fill="#1E293B" stroke="#F4C95D" strokeWidth="1.5" />
        <text x="30" y="24" fill="#F4C95D" fontSize="6" fontFamily="monospace" textAnchor="middle">MADRASAH</text>
        <rect x="22" y="27" width="16" height="3" fill="#38BDF8" />
        <line x1="45" y1="22" x2="85" y2="40" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="3 3" />
        <text x="70" y="32" fill="#4ADE80" fontSize="6" fontFamily="monospace">API POST</text>
      </g>

      {/* Right Satellite: Penmad Auditor Node */}
      <g transform="translate(295, 80)">
        <rect x="15" y="10" width="35" height="24" rx="2" fill="#1E293B" stroke="#4ADE80" strokeWidth="1.5" />
        <text x="32" y="24" fill="#4ADE80" fontSize="6" fontFamily="monospace" textAnchor="middle">PENMAD KAMPAR</text>
        <circle cx="32" cy="29" r="2" fill="#22C55E" />
        <line x1="15" y1="22" x2="-25" y2="40" stroke="#4ADE80" strokeWidth="1.5" strokeDasharray="3 3" />
        <text x="-15" y="32" fill="#F4C95D" fontSize="6" fontFamily="monospace">REKAP OK</text>
      </g>

      {/* Bottom Status Feed */}
      <rect x="60" y="180" width="280" height="26" rx="2" fill="#0F172A" stroke="#334155" strokeWidth="1" />
      <text x="75" y="196" fill="#38BDF8" fontSize="8" fontFamily="monospace">REST API: LARAVEL SANCTUM // AUTH: 200 OK // REKAP: VERIFIED</text>
      <circle cx="325" cy="193" r="3" fill="#22C55E" />
    </svg>
  );
};

// ═══════════════════════════════════════════════════════════════════════════════
// ─── HIGH-FIDELITY PROJECT ARTWORK: E-COMMERCE DATA MINING & ML ───────────────
// ═══════════════════════════════════════════════════════════════════════════════

export const EcommerceDataArtwork: React.FC<{ interactive?: boolean }> = () => {
  return (
    <svg viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: '100%', imageRendering: 'pixelated' }}>
      {/* Cosmic Nebula Void Background */}
      <rect width="400" height="220" fill="#0A0815" />

      {/* Star Constellations Background */}
      <circle cx="80" cy="50" r="1.5" fill="#FFFFFF" />
      <circle cx="120" cy="35" r="1.5" fill="#FFFFFF" />
      <circle cx="160" cy="65" r="1.5" fill="#FFFFFF" />
      <line x1="80" y1="50" x2="120" y2="35" stroke="#6366F1" strokeWidth="0.8" strokeDasharray="2 2" />
      <line x1="120" y1="35" x2="160" y2="65" stroke="#6366F1" strokeWidth="0.8" strokeDasharray="2 2" />

      {/* Cluster 1: High Performer Stars (Gold) */}
      <g transform="translate(60, 90)">
        <circle cx="30" cy="30" r="28" stroke="#F4C95D" strokeWidth="1.5" strokeDasharray="6 3" opacity="0.6" />
        <circle cx="20" cy="22" r="3" fill="#F4C95D" />
        <circle cx="34" cy="26" r="3.5" fill="#FEF08A" />
        <circle cx="26" cy="38" r="2.5" fill="#F59E0B" />
        <circle cx="40" cy="35" r="2" fill="#F4C95D" />
        <text x="30" y="55" fill="#F4C95D" fontSize="7" fontFamily="monospace" textAnchor="middle">CLUSTER A: TOP</text>
      </g>

      {/* Cluster 2: Moderate Sales Stars (Cyan) */}
      <g transform="translate(160, 60)">
        <circle cx="35" cy="35" r="32" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="6 3" opacity="0.6" />
        <circle cx="22" cy="28" r="3" fill="#38BDF8" />
        <circle cx="38" cy="22" r="2.5" fill="#0284C7" />
        <circle cx="45" cy="38" r="3" fill="#7DD3FC" />
        <circle cx="28" cy="45" r="2.5" fill="#38BDF8" />
        <text x="35" y="62" fill="#38BDF8" fontSize="7" fontFamily="monospace" textAnchor="middle">CLUSTER B: MID</text>
      </g>

      {/* Cluster 3: Low Volume / Emerging Stars (Purple) */}
      <g transform="translate(260, 100)">
        <circle cx="30" cy="30" r="26" stroke="#C084FC" strokeWidth="1.5" strokeDasharray="6 3" opacity="0.6" />
        <circle cx="20" cy="24" r="2.5" fill="#A855F7" />
        <circle cx="32" cy="22" r="2.5" fill="#C084FC" />
        <circle cx="36" cy="35" r="2" fill="#E879F9" />
        <text x="30" y="54" fill="#C084FC" fontSize="7" fontFamily="monospace" textAnchor="middle">CLUSTER C: LOW</text>
      </g>

      {/* Random Forest Decision Tree Hologram (Right Side) */}
      <g transform="translate(280, 25)">
        <rect x="40" y="0" width="16" height="10" rx="1" fill="#1E293B" stroke="#4ADE80" strokeWidth="1" />
        <text x="48" y="7" fill="#4ADE80" fontSize="5" fontFamily="monospace" textAnchor="middle">ROOT</text>
        <line x1="44" y1="10" x2="30" y2="20" stroke="#4ADE80" strokeWidth="1" />
        <line x1="52" y1="10" x2="66" y2="20" stroke="#4ADE80" strokeWidth="1" />
        <rect x="22" y="20" width="16" height="8" rx="1" fill="#1E293B" stroke="#4ADE80" strokeWidth="1" />
        <text x="30" y="26" fill="#4ADE80" fontSize="4" fontFamily="monospace" textAnchor="middle">RATING</text>
        <rect x="58" y="20" width="16" height="8" rx="1" fill="#1E293B" stroke="#4ADE80" strokeWidth="1" />
        <text x="66" y="26" fill="#4ADE80" fontSize="4" fontFamily="monospace" textAnchor="middle">SALES</text>
      </g>

      {/* Bottom Data Pipeline Console */}
      <rect x="30" y="170" width="340" height="34" rx="2" fill="#111827" stroke="#374151" strokeWidth="1" />
      <text x="45" y="185" fill="#F4C95D" fontSize="8" fontFamily="monospace">DATASET: TOKOPEDIA (KAGGLE) // PREPROCESSING: DONE</text>
      <text x="45" y="197" fill="#4ADE80" fontSize="8" fontFamily="monospace">ALGORITHMS: K-MEANS CLUSTERING + RANDOM FOREST CLASSIFIER</text>
      <rect x="330" y="180" width="26" height="14" rx="1" fill="#047857" />
      <text x="343" y="190" fill="#FFFFFF" fontSize="6" fontFamily="monospace" textAnchor="middle">ML RUN</text>
    </svg>
  );
};


