"use client";
import Header from "./Header";
import OpenStatus from "./OpenStatus";
import Reveal from "./Reveal";
import Image from "next/image";
import HeroMap from "./HeroMap";
import BookingForm from "./BookingForm";
import { site } from "@/lib/site";
import { useLang } from "@/lib/lang";

// Photos for each service, in the same order as t.care.items
const careImages = [
  { src: "/images/emergency.jpg", pos: "50% 30%" },
  { src: "/images/maternity.jpg", pos: "50% 40%" },
  { src: "/images/paediatrics.jpg", pos: "50% 35%" },
  { src: "/images/checkups.jpg", pos: "50% 30%" },
  { src: "/images/outpatient.jpg", pos: "50% 15%" },
  { src: "/images/nursing.jpg", pos: "50% 30%" },
];

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1z" />
  </svg>
);

export default function Site() {
  const { t } = useLang();
  const a = t.address;
  const marquee = [...t.care.items, ...t.care.items];

  return (
    <>
      <Reveal />

      <div className="strip">
        <div className="wrap strip__inner">
          <OpenStatus />
          <span className="strip__addr">{a.street}, {a.city} {site.pin}</span>
          <a className="strip__phone" href={site.phoneHref}>{site.phoneDisplay}</a>
        </div>
      </div>

      <Header />

      <main id="top">
        {/* Hero */}
        <section className="hero">
          <div className="wrap hero__grid">
            <div className="hero__copy">
              <p className="eyebrow reveal">{t.hero.eyebrow}</p>
              <h1 className="reveal">
                {t.hero.h1a}
                <br />
                <span>{t.hero.h1b}</span>
              </h1>
              <p className="lede reveal">{t.hero.lede}</p>
              <div className="hero__actions reveal">
                <a href={site.phoneHref} className="btn btn--accent">
                  <PhoneIcon />
                  {site.phoneDisplay}
                </a>
                <a href="#book" className="btn btn--line">{t.hero.book}</a>
              </div>
            </div>

            <div className="hero__visual reveal">
              <div className="hero__photo">
                <Image
                  src="/images/hero-doctor.jpg"
                  alt={t.hero.photoAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  style={{ objectFit: "cover", objectPosition: "50% 35%" }}
                />
                <span className="hero__tag" lang="ta">பவித்ரா</span>
              </div>
              <aside className="hero__card">
                <div className="card__top">
                  <span className="label">{t.card.today}</span>
                  <OpenStatus />
                </div>
                <div className="card__rating">
                  <b>{site.rating}</b>
                  <span>
                    <span className="stars" aria-label={`${site.rating} / 5`}>★★★★★</span>
                    <small>{t.card.rating}</small>
                  </span>
                </div>
                <p className="card__note">{t.card.note}</p>
                <a href={site.directionsUrl} target="_blank" rel="noopener" className="link-arrow link-arrow--light">
                  {t.hero.directions}
                </a>
              </aside>
            </div>
          </div>

          <div className="marquee" aria-hidden="true">
            <div className="marquee__track">
              {marquee.map((s, i) => (
                <span key={i}>{s.short}</span>
              ))}
            </div>
          </div>

          <dl className="wrap facts-row">
            {t.facts.map((f, i) => (
              <div key={i} className="reveal">
                <dt>{f.k}</dt>
                <dd>{f.v}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Care */}
        <section className="care" id="care">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">{t.care.eyebrow}</p>
              <h2>{t.care.title}</h2>
            </div>
            <ol className="care__list">
              {t.care.items.map((s, i) => (
                <li key={i} className="care__item reveal">
                  <div className="care__img">
                    <Image
                      src={careImages[i].src}
                      alt={s.title}
                      fill
                      sizes="(max-width: 680px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      style={{ objectFit: "cover", objectPosition: careImages[i].pos }}
                    />
                  </div>
                  <span className="care__num">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Emergency band */}
        <section className="sos">
          <div className="wrap sos__inner reveal">
            <div className="sos__icon" aria-hidden="true">
              <svg viewBox="0 0 32 32"><path d="M13 4h6v9h9v6h-9v9h-6v-9H4v-6h9z" /></svg>
            </div>
            <div className="sos__text">
              <h2>{t.emergency.title}</h2>
              <p>{t.emergency.body}</p>
            </div>
            <a href={site.phoneHref} className="btn btn--light">
              <PhoneIcon />
              {t.emergency.cta} · {site.phoneDisplay}
            </a>
          </div>
        </section>

        {/* Visit */}
        <section className="visit" id="visit">
          <div className="wrap visit__grid">
            <div className="visit__intro">
              <p className="eyebrow eyebrow--light">{t.visit.eyebrow}</p>
              <h2>
                {t.visit.title1}
                <br />
                {t.visit.title2}
              </h2>
              <p>{t.visit.intro}</p>
              <div className="visit__photo">
                <Image
                  src="/images/ward.jpg"
                  alt={t.visit.photoAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <ol className="steps">
              {t.visit.steps.map((s, i) => (
                <li key={i} className="reveal">
                  <span>{s.title}</span>
                  <p>{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Booking */}
        <section className="book" id="book">
          <div className="wrap book__grid">
            <div className="book__intro">
              <p className="eyebrow">{t.book.eyebrow}</p>
              <h2>{t.book.title}</h2>
              <p className="book__lede">{t.book.body}</p>
              <div className="book__call">
                <span className="label">{t.book.or}</span>
                <a href={site.phoneHref}>{site.phoneDisplay}</a>
              </div>
            </div>
            <div className="book__panel reveal">
              <BookingForm />
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="reviews" id="reviews">
          <div className="wrap reviews__grid">
            <div>
              <p className="eyebrow">{t.reviews.eyebrow}</p>
              <div className="score">
                {site.rating}
                <small>/5</small>
              </div>
              <p className="score__meta">
                <span className="stars">★★★★★</span> {t.reviews.meta}
              </p>
            </div>
            <div className="reviews__bars reveal">
              {site.ratingSplit.map((pct, i) => (
                <div className="bar" key={i}>
                  <span>{5 - i}</span>
                  <i style={{ ["--w" as string]: `${pct}%` }} />
                  <em>{pct}%</em>
                </div>
              ))}
              <a className="link-arrow" href={site.reviewsUrl} target="_blank" rel="noopener">
                {t.reviews.read}
              </a>
            </div>
            <div className="reviews__ask">
              <p>{t.reviews.ask}</p>
              <a className="btn btn--line" href={site.reviewsUrl} target="_blank" rel="noopener">
                {t.reviews.write}
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="faq" id="faq">
          <div className="wrap faq__grid">
            <div>
              <p className="eyebrow">{t.faq.eyebrow}</p>
              <h2>{t.faq.title}</h2>
            </div>
            <div className="faq__list">
              {t.faq.items.map((f, i) => (
                <details key={i} className="faq__item" open={i === 0}>
                  <summary>
                    {f.q}
                    <i aria-hidden="true" />
                  </summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Find us */}
        <section className="find" id="find">
          <div className="wrap find__grid">
            <div>
              <p className="eyebrow">{t.find.eyebrow}</p>
              <h2>{t.find.title}</h2>
              <dl className="facts">
                <div>
                  <dt>{t.find.address}</dt>
                  <dd>
                    {a.street},
                    <br />
                    {a.city}, {a.state} {site.pin}
                  </dd>
                </div>
                <div>
                  <dt>{t.find.phone}</dt>
                  <dd><a href={site.phoneHref}>{site.phoneDisplay}</a></dd>
                </div>
                <div>
                  <dt>{t.find.today}</dt>
                  <dd><OpenStatus /></dd>
                </div>
                <div>
                  <dt>{t.find.emergency}</dt>
                  <dd>{t.find.emergencyText}</dd>
                </div>
              </dl>
              <div className="find__actions">
                <a href={site.directionsUrl} target="_blank" rel="noopener" className="btn btn--dark">
                  {t.find.maps}
                </a>
                <a href={site.phoneHref} className="btn btn--line">{t.find.call}</a>
              </div>
            </div>
            <div className="find__map">
              <HeroMap />
              <a href={site.directionsUrl} target="_blank" rel="noopener" className="btn btn--accent find__mapbtn">
                {t.hero.directions}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer__grid">
          <div>
            <p className="footer__name">{site.name}</p>
            <p className="footer__ta" lang="ta">{site.nameTa}, பென்னாகரம்</p>
          </div>
          <div className="footer__cols">
            <div>
              <span className="label">{t.footer.visit}</span>
              <p>{a.street}<br />{a.city} {site.pin}</p>
            </div>
            <div>
              <span className="label">{t.footer.call}</span>
              <p><a href={site.phoneHref}>{site.phoneDisplay}</a></p>
            </div>
            <div>
              <span className="label">{t.footer.care}</span>
              <p>{t.footer.careText[0]}<br />{t.footer.careText[1]}</p>
            </div>
          </div>
        </div>
        <div className="wrap footer__base">
          <span>© {new Date().getFullYear()} {site.name}, Pennagaram</span>
          <span>{t.footer.base}</span>
        </div>
      </footer>

      <div className="callbar">
        <a href={site.phoneHref} className="btn btn--accent"><PhoneIcon />{t.callbar.call}</a>
        <a href={site.directionsUrl} target="_blank" rel="noopener" className="btn btn--line">{t.callbar.directions}</a>
      </div>
    </>
  );
}
