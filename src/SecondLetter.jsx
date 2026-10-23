
import "./index.css";

export default function SecondLetter({ onBack }) {
  return (
    <main className="page">
      <div className="glow glow-one" />
      <div className="glow glow-two" />

      <section className="letter-card second-letter-card">
        <div className="tiny-label">
          JUST ONE MORE THING ♡
        </div>

        <div className="letter-content">
          <div className="letter-icon">💌</div>

          <p className="eyebrow">A LITTLE MESSAGE FROM ME</p>

          <h1>
            I miss you, langga<span className="pink"> ♡</span>
          </h1>

          <div className="letter-text">
            <p>Hi again, langga,</p>

            <p>
              If you're reading this again, I just want
              you to know that I miss you so much.
              I hope you'll open this little letter
              whenever you feel like it and remember
              that someone is thinking about you.
            </p>

            <p>
              I miss our conversations and the little
              moments we shared more than I can explain.
              Things feel a little different without
              talking to you, and I just wanted to be
              honest about how I feel.
            </p>

            <p>
              I'm still here, langga. I'm willing to
              give you the time and space you need.
              I don't want you to feel pressured.
              I just want you to know that you still
              mean a lot to me.
            </p>

            <p>
              If you're reading this and you're ready
              to talk to me again, please message me,
              okay? I'd really love to hear from you.
              I'm still here, and I'll be happy to hear
              from you whenever you're ready.
            </p>

            <p className="closing">
              I miss you a lot, langga. Take care of
              yourself, okay? No pressure. Just know
              that I still care about you. ♡
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
            onClick={onBack}
          >
            ← Back to my letter
          </button>
        </div>
      </section>

      <footer>made for you, with all my heart ♡</footer>
    </main>
  );
}
