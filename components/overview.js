import styles from '../styles/overview.module.scss';

const overviewCopy = [
  <p key="p1">You’ve heard Louie rip the <a href="https://rarible.com/itslouiebaby" target="_blank">ILB! collection</a>, smash the Cipher scene, and turn up the metaverse with unrivaled energy as an emcee – and that’s just the beginning… </p>,
  <p key="p2">Hip Hop Heads (HHH) is Louie’s official debut album delivered through 5,000 uniquely generated NFTs with a twist; each one contains part of the album as an audio component with its own rarity!</p>,
  <p key="p3">Each token comes with a non-exclusive commercial rights usage license for the song that it plays but holding 10 or more will unlock the license for all 10 songs on the album.</p>,
  <p key="p4">The value doesn’t stop there. Louie is building a community of artists of all kinds and rewarding collectors that bring artists to the space. These rewards will come directly from the community wallet (funded by 16% of all initial and secondary sales) that will be created after the initial sale sells out. Funds will be used to reward active holders and pay resident artists voted in by the community. Holders will have direct access to collaborate with resident HHH artists at a discounted price among other benefits further detailed in the roadmap.</p>
];

const overviewCopyP2 = `You’ve heard Louie rip the ILB collection, smash the Cipher scene, and turn up the metaverse with unrivaled energy as an emcee – and that’s just the beginning… 
`;

export default function Overview() {
  return <div className={styles.Overview}>
    <div className={styles.TextAndButtons}>
      <div className={styles.Heading}>Louie C Rhymes Presents: Hip Hop Heads the NFT Album</div>
      {/* <div className={styles.Subheading}>by Louie C Rhymes</div> */}
      <div className={styles.SecondaryText}>
        {overviewCopy}
      </div>
      {/* <div className={styles.buttons}>
        <button disabled>Mint</button>
      </div> */}
    </div>
    <div className={styles.Video}>
    </div>
  </div>;
}
