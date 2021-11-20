import styles from '../styles/music-section-content.module.scss';

const lipsum = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`;

const tracks = [
  { albumArtImgSrc: '/images/album-art/hhhalbumart.png', title: 'Hip Hop Heads', ytHref: 'https://www.youtube.com/watch?v=4FamsCdu3OA' },
  { albumArtImgSrc: '/images/album-art/onit.png', title: 'On It', ytHref: 'https://www.youtube.com/watch?v=BU3NvmWtoEk' },
  { albumArtImgSrc: '/images/album-art/bbk.jpg', title: 'BBK', ytHref: 'https://www.youtube.com/watch?v=BZb9fM_yrtA' },
  { albumArtImgSrc: '/images/album-art/throwstones.jpg', title: 'Throw Stones', ytHref: 'https://youtu.be/eEYyOEre9go' },
  { albumArtImgSrc: '/images/album-art/holdmytruth.jpg', title: 'Hold My Truth', ytHref: 'https://www.youtube.com/watch?v=d3UM9hmtXvQ' },
  // { albumArtImgSrc: '/images/album-art/yippeekiyay.png', title: 'Yippee Ki Yay', ytHref: 'https://www.youtube.com/watch?v=6B2Vb9ZISP4' },
  // { albumArtImgSrc: '/images/album-art/thecomedown.jpg', title: 'The Come Down', ytHref: 'https://www.youtube.com/watch?v=ww4NN4PeIko' },
  { albumArtImgSrc: '/images/album-art/whitelies.jpg', title: 'White Lies', ytHref: 'https://www.youtube.com/watch?v=MzWZb3oZuBw' },
  { albumArtImgSrc: '/images/album-art/essentialhysteria.jpg', title: 'Essential Hysteria', ytHref: 'https://www.youtube.com/watch?v=RBM2aNegY60' },
  // { albumArtImgSrc: '/images/album-art/thehigh.jpg', title: 'The High', ytHref: 'https://www.youtube.com/watch?v=diivbBm26GY' },
  // { albumArtImgSrc: '/images/album-art/wakeup.jpg', title: 'Wake Up', ytHref: 'https://www.youtube.com/watch?v=n1NfQprHffI' },
  { albumArtImgSrc: '/images/album-art/me.jpg', title: 'Me', ytHref: 'https://www.youtube.com/watch?v=6arRG82L-Jk' },
  { albumArtImgSrc: '/images/album-art/dreamwork.jpeg', title: 'Dream Work', ytHref: 'https://www.youtube.com/watch?v=CueEb7xQrVo' },
  { albumArtImgSrc: '/images/album-art/holes.jpeg', title: 'Holes', ytHref: 'https://www.youtube.com/watch?v=waLaYB6_dgg' },
];

export default function MusicSectionContent() {
  return (
    <div className={styles.MusicSectionContent}>
      {tracks.map(({ albumArtImgSrc, title, ytHref }, tI) => {
        return (
          <a target="_blank" className={styles.TrackCard} href={ytHref} key={tI}>
            <img
              className={styles.AlbumArt}
              src={albumArtImgSrc}
            />
            <div className={styles.TrackTitle}>{title}</div>
          </a>
        );
      })}
    </div>
  );
}
