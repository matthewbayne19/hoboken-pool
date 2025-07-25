import React from 'react';

const RulesPage = () => {
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h2>📘 APA 8-Ball Rules (Simplified)</h2>

      <h3>🎯 Game Objective</h3>
      <p>
        Be the first to pocket all of your group (stripes or solids), then legally pocket the 8-ball.
      </p>

      <h3>🏁 Game Start</h3>
      <ul>
        <li>Must hit the rack and drive 4 balls to a rail or pocket a ball.</li>
        <li>If the 8-ball is made on the break: player wins.</li>
        <li>Scratching on the break - opponent place ball behind line. All other scratches are ball in hand.</li>
      </ul>

      <h3>⚖️ Open Table</h3>
      <ul>
        <li>After the break, the table is open. First legally pocketed group determines your group.</li>
      </ul>

      <h3>✅ Legal Shot</h3>
      <ul>
        <li>You must hit your group first.</li>
        <li>Then pocket a ball or drive any ball to a rail.</li>
      </ul>

      <h3>❌ Common Fouls</h3>
      <ul>
        <li>No rail contact after contact.</li>
        <li>Hitting the 8-ball first when it’s not your turn.</li>
        <li>Pocketing the cue ball (scratch).</li>
        <li>Failing to hit a ball from your group entirely. (scratch).</li>
      </ul>

      <h3>🎱 8-Ball Rules</h3>
      <ul>
        <li>Must call the 8-ball (no slop).</li>
        <li>If you pocket the 8-ball early or scratch while making it - automatic loss.</li>
        <li>If you pocket the cue ball regardless of making the 8-ball - automatic loss.</li>
      </ul>
    </div>
  );
};

export default RulesPage;
