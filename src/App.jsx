import { useState } from "react";
import "./index.css";

export default function App() {
  const [opened, setOpened] = useState(false);

  const hearts = Array.from({ length: 12 }, (_, i) => i);

  return (
    <main className="page">
      <div className="glow glow-one" />
      <div className="glow glow-two" />

      <div className="floating-hearts" aria-hidden="true">
        {hearts.map((heart) => (
          <span
            key={heart}
            style={{
              "--i": heart,
              "--delay": `${heart * -0.8}s`,
            }}
          >
            {heart % 3 === 0 ? "♡" : "♥"}
          </span>
        ))}
      </div>

      <section className="letter-card">
        <div className="tiny-label">
          A LITTLE SOMETHING FOR YOU ♡
        </div>

        {!opened ? (
          <div className="opening">
            <div className="envelope" aria-hidden="true">
              <div className="envelope-back" />
              <div className="letter-preview">
                <span>for my langga</span>
                <span className="preview-heart">♥</span>
              </div>
              <div className="envelope-flap" />
              <div className="envelope-front" />
              <div className="envelope-heart">♥</div>
            </div>

            <h1>
              Hi, langga<span className="pink"> ♡</span>
            </h1>

            <p className="subtitle">
              I made a little something for you.
              <br />
              Open it whenever you're ready.
            </p>

            <button
              className="open-button"
              onClick={() => setOpened(true)}
            >
              Open your letter <span>♡</span>
            </button>

            <p className="small-note">
              made with love, just for you
            </p>
          </div>
        ) : (
          <div className="letter-content">
            <div className="letter-icon">💌</div>

            <p className="eyebrow">A LITTLE MESSAGE FOR YOU</p>

            <h1>
              I miss you, langga<span className="pink"> ♡</span>
            </h1>

            <div className="letter-text">
              <p>Hi, langga,</p>

              <p>
                If you're reading this again, I just want
                you to know that I miss you so much.
                I hope you'll open this little letter
                whenever you feel like it and remember
                that someone is thinking about you.
              </p>

              <p>
                I don't know when we'll get to talk like
                before again, but I want you to know
                that you still mean a lot to me.
                I miss our conversations and the little
                moments we shared more than I can explain.
              </p>

              <p>
                I'm still here, langga. I'm willing to
                be patient and give you the time and
                space you need. I don't want you to feel
                pressured to reply or do anything before
                you're ready. I just wanted to be honest
                about how much I miss you.
              </p>

              <p>
                I hope you're doing okay, taking care of
                yourself, and finding little reasons to
                smile every day. Even when we're not
                talking, I still wish the best for you.
              </p>

              <p>
                Maybe one day, when you open this again,
                we'll have more little moments to look
                back on and smile about. Until then,
                please take care of yourself, okay?
              </p>

              <p className="closing">
                I miss you a lot, langga. I hope you know that.
                If you're reading this and you're ready to talk
                to me again, please message me, okay? I'd really
                love to hear from you. I'm still here, langga,
                and I'll be happy to hear from you whenever
                you're ready. No pressure. ♡ 
              </p>

              <p className="signature">
                With love,
                <br />
                <span>Langga ♡</span>
              </p>
            </div>

            <div className="divider-heart">♡ · ♡ · ♡</div>

            <p className="ending">
              Whenever you come back, I hope this makes you smile. ♡
            </p>

            <button
              className="open-button replay-button"
              onClick={() => setOpened(false)}
            >
              Read it again ↺
            </button>
          </div>
        )}
      </section>

      <footer>made for you, with all my heart ♡</footer>
    </main>
  );
}
