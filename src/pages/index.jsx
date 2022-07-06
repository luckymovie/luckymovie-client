import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

//assets
import spiderman from "../assets/images/hero/spiderman.png";
import lion from "../assets/images/hero/lion.png";
import pience from "../assets/images/hero/peince.png";

//components
import NowShowing from "../components/NowShowing";
import UpComing from "../components/UpComing";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous"
        />
      </Head>
      <section className="banner pb-5 mx-auto">
        <div className="mt-5">
          <div className="row">
            <div className="col-12 col-lg-6 col-xl-6 my-5">
              <div className="card-body m-5 justify-content-center">
                <h5 className="text-muted">Nearest Cinema, Newest Movie,</h5>
                <h1 className="text-purple fw-bold">Find out now!</h1>
              </div>
            </div>
            <div className="col-12 col-lg-6 col-xl-6 row justify-content-center my-0">
              <div className=" col-3 mt-5">
                <Image src={spiderman} alt="alt" />
              </div>
              <div className="col-3 mt-3">
                <Image src={lion} alt="alt" />
              </div>
              <div className="col-3 mt-0">
                <Image src={pience} alt="alt" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <main className={`${styles.horizontalList} row bg-grey`}>
        <div className="d-flex justify-content-between">
          <p className="p-5 fw-bold">Now Showing</p>
          <a href="/movie">
            <p className="p-5">view all</p>
          </a>
        </div>
        <div className="d-flex justify-content-evenly flex-wrap bd-highlight mt-3 mb-5">
          <NowShowing />
          <NowShowing />
          <NowShowing />
          <NowShowing />
          <NowShowing />
        </div>
      </main>
      <section>
        <div className="d-flex justify-content-between">
          <p className="p-5 fw-bold">Upcoming Movies</p>
          <a href="/movie">
            <p className="p-5">view all</p>
          </a>
        </div>
        <div className="d-flex flex-wrap justify-content-center py-5 px-3 ">
          <button className={`${styles.btnOutline} mx-3 btn btn-month`} id="1">
            January
          </button>
          <button className={`${styles.btnOutline} mx-3 btn btn-month`} id="2">
            February
          </button>
          <button className={`${styles.btnOutline} mx-3 btn btn-month`} id="3">
            March
          </button>
          <button className={`${styles.btnOutline} mx-3 btn btn-month`} id="4">
            April
          </button>
          <button className={`${styles.btnOutline} mx-3 btn btn-month`} id="5">
            May
          </button>
          <button className={`${styles.btnOutline} mx-3 btn btn-month`} id="6">
            June
          </button>
          <button className={`${styles.btnOutline} mx-3 btn btn-month`} id="7">
            July
          </button>
          <button className={`${styles.btnOutline} mx-3 btn btn-month`} id="8">
            August
          </button>
          <button className={`${styles.btnOutline} mx-3 btn btn-month`} id="9">
            September
          </button>
          <button className={`${styles.btnOutline} mx-3 btn btn-month`} id="10">
            October
          </button>
          <button className={`${styles.btnOutline} mx-3 btn btn-month`} id="11">
            November
          </button>
          <button className={`${styles.btnOutline} mx-3 btn btn-month`} id="12">
            December
          </button>
        </div>
        <div className="d-flex justify-content-between py-5 px-3 mb-5">
          <div className="d-flex flex-wrap mb-3">
            <UpComing /> <UpComing /> <UpComing />
            <UpComing /> <UpComing />
          </div>
        </div>
      </section>
      <section class="container shadow-lg mb-5">
        <div class="card-body">
          <div class="text-center my-5">
            <h5>Be the vanguard of the</h5>
            <h1 class="fw-bold text-purple">Moviegoers</h1>
          </div>
          <div class="d-flex justify-content-center">
            <form>
              <div class="row mb-3">
                <div class="col-8">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Type your email"
                    aria-label="First name"
                  />
                </div>
                <div class="col-4">
                  <button class="btn btn-purple"> Join Now </button>
                </div>
              </div>
            </form>
          </div>
          <div class="text-center my-5 text-muted">
            <span>By joining you as a Tickitz member,</span>
            <span>we will always send you the latest updates via email .</span>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
