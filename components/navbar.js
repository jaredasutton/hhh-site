import styles from '../styles/layout.module.scss';
import WalletConnector from '../components/walletConnector';

export default function Navbar() {
  return (
    <header>
      <div className={styles.branding}>
        <a href="/" id="branding">
          <span className="desktop-only">Hip Hop Heads</span>
          <span className="mobile-only">HHH</span>
        </a>
      </div>
      <div className={styles.links}>
        <div className="social-links desktop-only">
          <a
            href="https://discord.com/channels/863598026873241631/885192647906586705/889534786169896982"
            target="_blank"
          >
            <img
              src="/images/social/discord.png"
              className="discord-social-icon"
            />
          </a>
          <a href="https://twitter.com/louiecrhymes" target="_blank">
            <img
              className="twitter-social-icon"
              src="/images/social/twitter.png"
            />
          </a>
          <a href="https://www.tiktok.com/@louiecrhymes" target="_blank">
            <img
              src="/images/social/tiktok.png"
              className="tiktok-social-icon"
            />
          </a>
        </div>
        <a className="nav-item" href="/#art-section">
          <span className="desktop-only">the project</span>
          <span className="mobile-only">project</span>
        </a>
        <a className="nav-item" href="/#util-section">
          utility
        </a>
        <a className="nav-item" href="/#roadmap-section">
          roadmap
        </a>
        <a className="nav-item" href="/#team-section">
          <span className="desktop-only">the team</span>
          <span className="mobile-only">team</span>
        </a>
        <a className="nav-item" href="/#challenge-section">
          <span className="desktop-only">HHH Challenge</span>
          <span className="mobile-only">Challenge</span>
        </a>
        <WalletConnector></WalletConnector>
      </div>
    </header>
  );
}
