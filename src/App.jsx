
import { useState } from "react";
import "./index.css";

export default function App() {
  const [opened, setOpened] = useState(false);
  const [showSecondLetter, setShowSecondLetter] = useState(false);

  const hearts = Array.from({ length: 12 }, (_, i) => i);

  const decorations = (
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
  );

  if (showSecondLetter) {
    return (
      <main className="page">
        <div className="glow glow-one" />
        <div className="glow glow-two" />
        {decorations}

        <section className="letter-card second-letter-card">
          <div className="tiny-label">JUST ONE MORE THING ♡</div>

          <div className="letter-content">
            <div className="letter-icon">💌</div>

            <p className="eyebrow">A LITTLE MESSAGE FROM ME</p>

            <h1>
              I miss you, langga<span className="pink"> ♡</span>
            </h1>

            <div className="letter-text">
              <p>Hi again, langga,</p>

              <p>
                If you're reading this again, I just want you to
                know that I miss you so much. I hope you'll open
                this little letter whenever you feel like it and
                remember that someone is thinking about you.
              </p>

              <p>
                I miss our conversations and the little moments
                we shared more than I can explain. Things feel a
                little different without talking to you, and I
                just wanted to be honest about how I feel.
              </p>

              <p>
                I'm still here, langga. I'm willing to give you
                the time and space you need. I don't want you
                to feel pressured. I just want you to know that
                you still mean a lot to me.
              </p>

              <p>
                If you're reading this and you're ready to talk
                to me again, please message me, okay? I'd really
                love to hear from you. I'm still here, and I'll
                be happy to hear from you whenever you're ready.
              </p>

              <p className="closing">
                I miss you a lot, langga. Take care of yourself,
                okay? No pressure. Just know that I still care
                about you. ♡
              </p>

              <p className="signature">
                With love,
                <br />
                <span>Langga ♡</span>
              </p>
            </div>

            <div className="divider-heart">♡ · ♡ · ♡</div>

            <p className="ending">
              Whenever you're ready, langga. ♡
            </p>

            <button
              className="open-button replay-button"
              onClick={() => setShowSecondLetter(false)}
            >
              ← Back to my letter
            </button>
          </div>
        </section>

        <footer>made for you, with all my heart ♡</footer>
      </main>
    );
  }

  return (
    <main className="page">
      <div className="glow glow-one" />
      <div className="glow glow-two" />
      {decorations}

      <section className="letter-card">
        <div className="tiny-label">A LITTLE SOMETHING FOR YOU ♡</div>

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

            <p className="small-note">made with love, just for you</p>
          </div>
        ) : (
          <div className="letter-content">
            <div className="letter-icon">💌</div>

            <p className="eyebrow">A LITTLE MESSAGE FOR YOU</p>

            <h1>
              To my langga<span className="pink"> ♡</span>
            </h1>

            <div className="letter-text">
              <p>Hi, langga,</p>

              <p>
                I just wanted to make something simple to remind
                you how special you are to me. I know I may not
                always find the perfect words to say what I feel,
                but I hope you know how much you mean to me.
              </p>

              <p>
                I love the little things about us, the random
                conversations, the moments when we laugh, and
                even the simple times when we're just there for
                each other.
              </p>

              <p>
                I know there will be days when you're tired,
                stressed, or not feeling like yourself. You don't
                always have to be okay around me, langga. You
                can rest, take your time, and be yourself. I may
                not always know exactly what to say, but I'll
                always do my best to understand you and support you.
              </p>

              <p>
                I'm really happy that I get to know you more and
                share these little moments with you. Thank you
                for being you, langga. I hope I can keep giving
                you reasons to smile, even on ordinary days.
              </p>

              <p>
                No special occasion is needed for me to remind
                you that you matter to me. I just wanted you to
                have something you can open whenever you need
                a little reminder of that.
              </p>

              <p className="closing">
                I care about you so much, langga. I'm always
                cheering for you. ♡
              </p>

              <p className="signature">
                Always with love,
                <br />
                <span>Langga ♡</span>
              </p>
            </div>

            <div className="divider-heart">♡ · ♡ · ♡</div>

            <p className="ending">
              I hope this made you smile, langga.
            </p>

            <button
              className="message-link"
              onClick={() => setShowSecondLetter(true)}
            >
              ♡ read this when you're ready ♡
            </button>

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
