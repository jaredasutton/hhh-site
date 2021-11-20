import Layout from '../components/layout';
import CardGrid from '../components/card-grid';
import Card from '../components/card';
import RoadMap from '../components/roadmap';
import Overview from '../components/overview';
import MusicSectionContent from '../components/music-section-content';
import { createMinter } from '../utils/web3/mint';
const { mintNFT } = createMinter();
import { useState } from 'react';

const mintingEnabled = true;

const lipsum = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`;

export default function HHH() {
  const [mintCount, setMintCount] = useState(1);
  const [txResult, setTxResult] = useState(null);
  return (
    <Layout>
      <section id="top-fold-banner">
        <div id="top-fold-text">
          <div className="count-available">5K Available</div>
          {`Minting 11/17 for .03 ETH each`}
        </div>
        <div className="buttons">
          {mintingEnabled && (
            <input
              id="mint-box"
              type="number"
              value={mintCount}
              onChange={({ target: { value } }) => {
                setMintCount(
                  isNaN(value) ? 1 : Math.max(Math.min(50, parseInt(value)), 1)
                );
              }}
            ></input>
          )}
          <button
            disabled={!mintingEnabled}
            onClick={() => {
              setTxResult(null);
              mintNFT(mintCount).then(setTxResult);
            }}
          >
            <div>Mint</div>
          </button>
          {txResult && (
            <div id="tx-result">
              {txResult.success ? (
                <a
                  href={`https://etherscan.io/tx/${txResult.txHash}`}
                  target="_blank"
                >
                  ✅ Check out your transaction on Etherscan: {txResult.txHash}
                </a>
              ) : (
                `😥 Something went wrong: ${txResult.errMsg}`
              )}
            </div>
          )}
          <div className="social-links mobile-only">
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
        </div>
      </section>
      <section id="art-section">
        <Overview></Overview>
      </section>
      <section id="util-section">
        <div className="section-header">Utility</div>
        <CardGrid>
          <Card
            imgSrc={'/images/util-icons/1.svg'}
            headerTxt={'Commercial Rights'}
          >
            Token holders receive a non-exclusive commercial rights usage
            license for the songs they hold.
            <br />
            <br />
            <a href="/commerical-rights-terms">
              Read the commercial rights usage license here.
            </a>
          </Card>
          <Card
            imgSrc={'/images/util-icons/2.svg'}
            headerTxt={'Ticket to Live Performance'}
          >
            Redeemable for a ticket to a live performance in a U.S. location
            voted on by the HHH community in 2022. HHH resident artists will be
            invited to perform. Only 1 ticket per Ethereum address. Redeemable
            only after sell out.
          </Card>
          <Card imgSrc={'/images/util-icons/3.svg'} headerTxt={'Voting Rights'}>
            Holders will vote on how money will be reinvested into the
            community, artists Louie should collaborate with, content included
            in future projects, who will be the next Hip Hop Heads resident
            artist, and more!
          </Card>
          <Card
            imgSrc={'/images/util-icons/4.svg'}
            headerTxt={'Physical Merch'}
          >
            Token holders will have exclusive access to Louie C Rhymes merch and
            apparel.
          </Card>
          <Card
            imgSrc={'/images/util-icons/5.png'}
            headerTxt={'Unlockable Content'}
          >
            Holders can download the 10 song album via gated HHH holders only
            channel in my discord server.
          </Card>
          <Card
            imgSrc={'/images/util-icons/6.svg'}
            headerTxt={'Community Parties & Giveaways'}
          >
            Exclusive access to NFT and Physical Merch giveaways via gated HHH
            holders only channel in my discord server.
          </Card>
        </CardGrid>
      </section>
      <section id="roadmap-section">
        <div className="section-header">Roadmap</div>
        <RoadMap />
      </section>
      <section id="team-section">
        <div className="section-header">The Team</div>
        <CardGrid>
          <a href="https://twitter.com/LouieCRhymes" target="_blank">
            <Card
              imgSrc={'/images/team/louie.png'}
              headerTxt={'Louie C Rhymes'}
            >
              Project Lead Metaverse MC
            </Card>
          </a>
          <a href="https://twitter.com/unidentifiedp13" target="_blank">
            <Card imgSrc={'/images/team/jay.png'} headerTxt={'Jay Lumba'}>
              Visual Artist
            </Card>
          </a>
          <a href="https://twitter.com/k00kl33" target="_blank">
            <Card imgSrc={'/images/team/k00kl33.png'} headerTxt={'k00kl33'}>
              Developer
            </Card>
          </a>
          <a href="https://twitter.com/0xfoobar" target="_blank">
            <Card imgSrc={'/images/team/foobar.jpeg'} headerTxt={'Foobar'}>
              Smart Contract Developer
            </Card>
          </a>
          <a href="https://twitter.com/MSEhacks" target="_blank">
            <Card imgSrc={'/images/team/jarrodt.png'} headerTxt={'Jarrod T'}>
              Marketing
            </Card>
          </a>
          <a href="https://twitter.com/geoppls" target="_blank">
            <Card imgSrc={'/images/team/geo.png'} headerTxt={'Geo'}>
              Community Moderator
            </Card>
          </a>
          <a href="https://twitter.com/GBOX0072" target="_blank">
            <Card imgSrc={'/images/team/gb.png'} headerTxt={'GB'}>
              Community Moderator{' '}
            </Card>
          </a>
          <a href="https://twitter.com/LouyFierce" target="_blank">
            <Card
              imgSrc={'/images/team/louyfierce.jpg'}
              headerTxt={'Louy Fierce'}
            >
              Resident HHH Producer
            </Card>
          </a>
          <a href="https://twitter.com/WingofCuriosity" target="_blank">
            <Card imgSrc={'/images/team/zal.jpeg'} headerTxt={'Zal'}>
              Resident HHH Guitarist/Singer
            </Card>
          </a>
          <a href="https://youtube.com/user/AlyssaKleo" target="_blank">
            <Card imgSrc={'/images/team/lyssa.png'} headerTxt={'Alyssa'}>
              Resident HHH Singer
            </Card>
          </a>
        </CardGrid>
      </section>
      <section id="challenge-section">
        <div className="section-header">Hip Hop Heads Challenge</div>
        <div className="section-content">
          <div className="video-container">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/TmcJBIMLHnA"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="challenge-desc regular-p">
            The Hip Hop Heads Challenge is a slice of what the community will
            see when the community wallet is created. The challenge is meant to
            find and celebrate a new artist in the NFT space and turn them into
            the first resident Hip Hop Head artist which the community will vote
            on. After 1 week from launch, the winner of the challenge will win
            1% of the revenue generated from initial sales – that’s over 1.5 ETH
            if we sell out! Along with that sweet sweet ETH, the winning artist
            will be featured on the official remix of Louie’s song “Hip Hop
            Heads” to be released on streaming services. This artist will
            collect royalties from the streams in addition to having their
            submission featured on our website.
            <br />
            <b style={{ color: 'red' }}>DEADLINE TO SUBMIT IS 11/17/21.</b>
            <br />
            <br />
            Requirements:
            <br />
            <ul>
              <li>
                <a href="/audio/hhhinstrumental.mp3" download>
                  Download the beat.
                </a>
              </li>
              <li>
                Remix the Hip Hop Heads instrumental. This means add your own
                vocals or instruments on top of the beat.
              </li>
              <li>
                Submit your remix. You can do this by duetting this post on{' '}
                <a href="https://vm.tiktok.com/ZMRoDbv9T/" target="_blank">
                  TikTok
                </a>{' '}
                or post your submission in the{' '}
                <a href="https://discord.gg/yUKpJXkSfj" target="_blank">
                  Hip Hop Heads Discord
                </a>
                .
              </li>
              <li>
                Note: All recordings accepted (video, mp3s, etc). Just show me
                your skills fam.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section id="music-section">
        <div className="section-header">The Music</div>
        <div className="regular-p">
          Over 500 bars from 10 songs separated into 30 different audio traits
          amongst 5000 visually unique Hip Hop Heads.
          <br />
          Click on a song below to listen.
        </div>
        <br />
        <MusicSectionContent></MusicSectionContent>
      </section>
    </Layout>
  );
}
