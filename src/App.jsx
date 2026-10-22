
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

            <p className="eyebrow">A LETTER FOR YOU</p>

            <h1>
              To my langga<span className="pink"> ♡</span>
            </h1>

            <div className="letter-text">
              <p>Hi, langga ko,</p>

              <p>
                I just wanted to make something simple
                to remind you how special you are to me.
                I know I may not always find the perfect
                words to say what I feel, but I hope you
                know how much you mean to me.
              </p>

              <p>
                I love the little things about us, the
                random conversations, the moments when
                we laugh, and even the simple times when
                we're just there for each other.
              </p>

              <p>
                I know there will be days when you're
                tired, stressed, or not feeling like
                yourself. You don't always have to be
                okay around me, langga. You can rest,
                take your time, and be yourself. I may
                not always know exactly what to say,
                but I'll always do my best to understand
                you and support you.
              </p>

              <p>
                I'm really happy that I get to know you
                more and share these little moments with
                you. Thank you for being you, langga.
                I hope I can keep giving you reasons to
                smile, even on ordinary days.
              </p>

              <p>
                No special occasion is needed for me to
                remind you that you matter to me.
                I just wanted you to have something you
                can open whenever you need a little
                reminder of that.
              </p>

              <p className="closing">
                I care about you so much, langga.
                I'm always cheering for you. ♡
              </p>

              <p className="signature">
                Always with love,
                <br />
                <span>Your person ♡</span>
              </p>
            </div>

            <div className="divider-heart">♡ · ♡ · ♡</div>

            <p className="ending">
              I hope this made you smile, langga.
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
