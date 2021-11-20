import styles from '../styles/roadmap.module.scss';

const lipsum = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`;

const milestones = [
  { progressPct: '0%', content: 'Remix Louie’s Hip Hop Heads instrumental!  One lucky artist will win 1% of initial sales after a one-week snapshot from launch. This is over 1.5 ETH if we sell out! Details below.' },
  { progressPct: '25%', content: '100 NFT’s redeemable for physical merch will be randomly air dropped to 100 holders.' },
  { progressPct: '50%', content: 'Purchase a metaverse parcel to display resident Hip Hop Head artists artwork.  Rizzle, the infamous co-founder of NFT 42 will host the first metaverse party in the parcel which will include NFT and ETH giveaways.' },
  { progressPct: '75%', content: 'Create the official "Hip Hop Heads" show. Louie is set to host the first episode with Crypto Punk rapper Spottie Wifi as his guest.  There will be live performances from Louie and other Hip Hop Head resident artists, NFT table talk, giveaways, and more.' },
  { progressPct: '100%', content: 'Create community wallet and donate to a charity voted on by the community. Vote on and schedule live performance location/venue.  Buy NFT’s voted on by the community for exclusive giveaways.  Initiate community governance over community wallet.' },
];

export default function RoadMap() {
  return (<div className={styles.RoadMap}>
    {milestones.map(({progressPct, content},mI) => {
      return (<div className={styles.Milestone} key={mI}>
        <div className={styles.ProgressPct}>
        {progressPct}
        </div>
        <div className={styles.MilestoneContent}>
          {content}
        </div>
      </div>)
    })}
  </div>);
}
