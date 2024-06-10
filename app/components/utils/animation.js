import React from 'react';
import styles from '../../styles/Mainstage.module.css';

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const Animation = () => (
  <span className={styles.track}>
    {/* eslint-disable-next-line prefer-spread */}
    {Array.apply(null, { length: 4 }).map((e, index) => (
      <p
        key={index}
        className={styles.emojiAnimationContainer}
        style={{
          color: 'red',
          overflow: 'hidden',
          animationDelay: `${getRandomInt(2000)}ms`,
          transform: `translate(${getRandomInt(40)}px, ${getRandomInt(0)}px)`,
        }}
      >
        ❤
      </p>
    ))}
    {/* eslint-disable-next-line prefer-spread */}
    {Array.apply(null, { length: 4 }).map((e, index) => (
      <p
        key={index}
        className={styles.emojiAnimationContainer}
        style={{
          overflow: 'hidden',
          animationDelay: `${getRandomInt(2000)}ms`,
          transform: `translate(${getRandomInt(40)}px, ${getRandomInt(0)}px)`,
        }}
      >
        👍
      </p>
    ))}
  </span>
);

export default React.memo(Animation);
