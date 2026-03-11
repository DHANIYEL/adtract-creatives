import { ArrowLeft, Maximize2, X } from "lucide-react";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

const ShimmerCard = () => (
  <div className="shimmer-card">
    <div className="shimmer-inner" />
    <style>{`
      .shimmer-card {
        border-radius: 12px;
        overflow: hidden;
        aspect-ratio: 3/4;
        background: #f0ebe3;
        position: relative;
      }
      .shimmer-inner {
        width: 100%;
        height: 100%;
        background: linear-gradient(
          90deg,
          #f0ebe3 0%,
          #e8e0d4 40%,
          #f5f0ea 60%,
          #f0ebe3 100%
        );
        background-size: 200% 100%;
        animation: shimmer 1.6s ease-in-out infinite;
      }
      @keyframes shimmer {
        0% { background-position: 200% 0; }
        100% { background-position: -200% 0; }
      }
    `}</style>
  </div>
);

const CardItem = ({ image, index, onClick }) => {
  const [loaded, setLoaded] = useState(false);
  const [preview, setPreview] = useState(false);

  return (
    <>
      <div
        className="card-item"
        onClick={() => onClick(image)}
        style={{ animationDelay: `${(index % 20) * 40}ms` }}
      >
        {!loaded && <ShimmerCard />}
        <img
          src={image}
          alt={`Wedding card ${index + 1}`}
          onLoad={() => setLoaded(true)}
          style={{
            display: loaded ? "block" : "none",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.4s ease",
          }}
        />

        <div className="card-overlay">
          <button
            className="expand-icon"
            onClick={(e) => {
              e.stopPropagation();
              setPreview(true);
            }}
            title="Preview"
          >
            <Maximize2 size={14} strokeWidth={1.5} />
          </button>

          <div className="card-footer">
            <span className="card-num">
              #{String(index + 1).padStart(3, "0")}
            </span>
            <span className="card-cta">Select</span>
          </div>
        </div>
      </div>

      {/* Portal-style overlay rendered outside card-item */}
      {preview && (
        <div className="preview-backdrop" onClick={() => setPreview(false)}>
          <div className="preview-modal" onClick={(e) => e.stopPropagation()}>
            <button className="preview-close" onClick={() => setPreview(false)}>
              <X size={18} strokeWidth={1.5} />
            </button>
            <img
              src={image}
              alt={`Preview ${index + 1}`}
              className="preview-img"
            />
            <div className="preview-label">
              #{String(index + 1).padStart(3, "0")}
            </div>
          </div>
        </div>
      )}

      <style>{`
        .card-item {
          border-radius: 12px;
          overflow: hidden;
          aspect-ratio: 3/4;
          position: relative;
          cursor: pointer;
          background: #fdf5f5;
          box-shadow: 0 2px 8px rgba(152,26,29,0.08);
          animation: fadeUp 0.5s ease both;
          transition: box-shadow 0.3s ease, transform 0.3s ease;
        }
        .card-item:hover {
          box-shadow: 0 12px 32px rgba(152,26,29,0.18);
          transform: translateY(-4px);
        }
        .card-item:hover img {
          transform: scale(1.05);
        }

        /* Overlay */
        .card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(42,10,11,0.72) 0%, transparent 55%);
          opacity: 0;
          transition: opacity 0.3s ease;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-end;
          padding: 10px;
        }
        .card-item:hover .card-overlay { opacity: 1; }

        /* Expand button */
        .expand-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.35);
          background: rgba(255,255,255,0.12);
          backdrop-filter: blur(4px);
          color: #fff;
          cursor: pointer;
          transform: scale(0.8);
          opacity: 0;
          transition: opacity 0.25s ease, transform 0.25s ease, background 0.2s;
        }
        .card-item:hover .expand-icon {
          opacity: 1;
          transform: scale(1);
        }
        .expand-icon:hover {
          background: rgba(152,26,29,0.6);
          border-color: rgba(255,255,255,0.6);
        }

        /* Card footer text */
        .card-footer {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
        }
        .card-num {
          font-size: 10px;
          color: rgba(255,255,255,0.55);
          letter-spacing: 2px;
          font-family: 'Courier New', monospace;
        }
        .card-cta {
          font-size: 12px;
          font-weight: 600;
          color: #fff;
          letter-spacing: 3px;
          text-transform: uppercase;
          font-family: 'Georgia', serif;
        }

        /* Preview backdrop */
        .preview-backdrop {
          position: fixed;
          inset: 0;
          z-index: 999;
          background: rgba(10,4,4,0.75);
          backdrop-filter: blur(6px);
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeIn 0.2s ease;
        }

        /* Preview modal */
        .preview-modal {
          position: relative;
          max-width: min(420px, 90vw);
          width: 100%;
          animation: scaleIn 0.25s ease;
        }
        .preview-img {
          width: 100%;
          aspect-ratio: 3/4;
          object-fit: cover;
          border-radius: 14px;
          display: block;
          box-shadow: 0 24px 64px rgba(0,0,0,0.5);
        }

        /* Close button */
        .preview-close {
          position: absolute;
          top: -14px;
          right: -14px;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.2);
          background: #981A1D;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          transition: background 0.2s, transform 0.2s;
          box-shadow: 0 4px 12px rgba(152,26,29,0.4);
        }
        .preview-close:hover {
          background: #6B1214;
          transform: scale(1.1);
        }

        /* Preview label */
        .preview-label {
          text-align: center;
          margin-top: 12px;
          font-size: 11px;
          letter-spacing: 3px;
          color: rgba(255,255,255,0.4);
          font-family: 'Courier New', monospace;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.92); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </>
  );
};

const WeddingCardScreen = () => {
  const Navigate = useNavigate();
  const BATCH = 20;
  const TOTAL = 165;

  const [visible, setVisible] = useState(BATCH);

  const allImages = Array.from(
    { length: TOTAL },
    (_, i) => `/wedding-cards/WD${String(i + 1).padStart(3, "0")}.JPG`,
  );

  const displayed = allImages.slice(0, visible);
  const hasMore = visible < TOTAL;

  const handleSeeMore = useCallback(() => {
    setVisible((v) => Math.min(v + BATCH, TOTAL));
  }, []);

  const handleClick = (image) => {
    const trimmedName = image
      .replace("/wedding-cards/", "")
      .replace(".JPG", "");

    const phone = "917012882165";
    const message = `Hello, I'm interested in the ${trimmedName} wedding card design. Could you please share more details?`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };
  return (
    <section style={{ minHeight: "100vh", background: "#faf7f3" }}>
      {/* Global styles */}
      <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Cormorant+Garamond:wght@300;400;600&display=swap');

          * { box-sizing: border-box; }

          .wc-root {
            min-height: 100vh;
            background: #fdf5f5;
            font-family: 'Cormorant Garamond', Georgia, serif;
          }

          .wc-header-bar {
            position: sticky;
            top: 0;
            z-index: 50;
            background: rgba(253,245,245,0.92);
            backdrop-filter: blur(12px);
            border-bottom: 1px solid rgba(152,26,29,0.12);
            padding: 16px 32px;
            display: flex;
            align-items: center;
            gap: 16px;
          }

          .back-btn {
            display: flex;
            align-items: center;
            gap: 8px;
            background: none;
            border: none;
            cursor: pointer;
            color: #981A1D;
            font-family: 'Cormorant Garamond', serif;
            font-size: 15px;
            letter-spacing: 1px;
            padding: 6px 12px;
            border-radius: 6px;
            transition: background 0.2s, color 0.2s;
          }
          .back-btn:hover {
            background: rgba(152,26,29,0.08);
            color: #6B1214;
          }

          .wc-hero {
            text-align: center;
            padding: 64px 24px 48px;
            position: relative;
          }

          .wc-eyebrow {
            font-size: 11px;
            letter-spacing: 5px;
            text-transform: uppercase;
            color: #C24E51;
            margin-bottom: 16px;
            font-family: 'Cormorant Garamond', serif;
            font-weight: 400;
          }

          .wc-title {
            font-family: 'Playfair Display', Georgia, serif;
            font-size: clamp(36px, 6vw, 72px);
            font-weight: 400;
            color: #2a0a0b;
            line-height: 1.1;
            margin: 0 0 8px;
          }

          .wc-title em {
            font-style: italic;
            color: #981A1D;
          }

          .wc-subtitle {
            font-size: 18px;
            color: #7a2e30;
            font-weight: 300;
            margin-top: 12px;
            letter-spacing: 0.5px;
          }

          .wc-divider {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            margin-top: 28px;
            color: #C24E51;
          }

          .wc-divider-line {
            height: 1px;
            width: 60px;
            background: linear-gradient(to right, transparent, #981A1D);
          }

          .wc-divider-line.right {
            background: linear-gradient(to left, transparent, #981A1D);
          }

          .wc-counter {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: rgba(152,26,29,0.06);
            border: 1px solid rgba(152,26,29,0.18);
            border-radius: 100px;
            padding: 6px 18px;
            margin: 0 auto 40px;
            font-size: 13px;
            color: #981A1D;
            letter-spacing: 1px;
          }

          .wc-grid {
            display: grid;
            grid-template-columns: repeat(1fr, 1fr);
            gap: 16px;
            padding: 0 16px;
            max-width: 1400px;
            margin: 0 auto;
          }
          @media (min-width: 380px) {
            .wc-grid { grid-template-columns: repeat(2, 1fr); gap: 18px; padding: 0 24px; }
          }
          @media (min-width: 480px) {
            .wc-grid { grid-template-columns: repeat(3, 1fr); gap: 18px; padding: 0 24px; }
          }
          @media (min-width: 768px) {
            .wc-grid { grid-template-columns: repeat(4, 1fr); gap: 20px; padding: 0 32px; }
          }
          @media (min-width: 1100px) {
            .wc-grid { grid-template-columns: repeat(5, 1fr); gap: 24px; }
          }

          .wc-footer {
            padding: 56px 24px 80px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 16px;
          }

          .see-more-btn {
            position: relative;
            background: #981A1D;
            color: #fff5f5;
            border: none;
            cursor: pointer;
            padding: 16px 48px;
            border-radius: 3px;
            font-family: 'Playfair Display', Georgia, serif;
            font-size: 16px;
            letter-spacing: 3px;
            text-transform: uppercase;
            transition: background 0.3s, color 0.3s, transform 0.2s;
            overflow: hidden;
          }
          .see-more-btn::after {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%);
            transform: translateX(-100%);
            transition: transform 0.5s ease;
          }
          .see-more-btn:hover {
            background: #6B1214;
            color: #fff;
            transform: translateY(-2px);
          }
          .see-more-btn:hover::after {
            transform: translateX(100%);
          }

          .progress-text {
            font-size: 12px;
            color: #7a2e30;
            letter-spacing: 2px;
            text-transform: uppercase;
          }

          .progress-bar {
            width: 200px;
            height: 2px;
            background: rgba(152,26,29,0.12);
            border-radius: 2px;
            overflow: hidden;
          }

          .progress-fill {
            height: 100%;
            background: linear-gradient(to right, #6B1214, #C24E51);
            border-radius: 2px;
            transition: width 0.6s ease;
          }

          .all-shown-badge {
            display: flex;
            align-items: center;
            gap: 10px;
            color: #981A1D;
            font-size: 14px;
            letter-spacing: 2px;
          }
        `}</style>

      <div className="wc-header-bar">
        <button onClick={() => Navigate(-1)} className="back-btn">
          <ArrowLeft size={16} />
          Back
        </button>
        <div style={{ flex: 1 }} />
        <span
          style={{
            fontSize: 12,
            color: "#a08060",
            letterSpacing: "2px",
            textTransform: "uppercase",
          }}
        >
          {visible} / {TOTAL} shown
        </span>
      </div>

      <div className="wc-hero">
        <p className="wc-eyebrow">✦ Curated Collection ✦</p>
        <h1 className="wc-title">
          Find Your <em>Perfect</em>
          <br />
          Wedding Card
        </h1>
        <p className="wc-subtitle">
          Browse {TOTAL} handpicked designs. Pick the vibe you love.
        </p>
        <div className="wc-divider">
          <div className="wc-divider-line" />
          <span style={{ fontSize: 18 }}>♡</span>
          <div className="wc-divider-line right" />
        </div>
      </div>

      <div
        style={{ display: "flex", justifyContent: "center", marginBottom: 32 }}
      >
        <div className="wc-counter">
          <span>✦</span>
          <span>{TOTAL} Designs Available</span>
          <span>✦</span>
        </div>
      </div>

      <div className="wc-grid">
        {displayed.map((image, index) => (
          <CardItem
            key={image}
            image={image}
            index={index}
            onClick={handleClick}
          />
        ))}
      </div>

      <div className="wc-footer">
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${(visible / TOTAL) * 100}%` }}
          />
        </div>
        <p className="progress-text">
          {visible} of {TOTAL} designs
        </p>

        {hasMore ? (
          <button className="see-more-btn" onClick={handleSeeMore}>
            Load More Designs
          </button>
        ) : (
          <div className="all-shown-badge">
            <span>✦</span>
            <span
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
              }}
            >
              All {TOTAL} designs shown
            </span>
            <span>✦</span>
          </div>
        )}
      </div>
    </section>
  );
};

export default WeddingCardScreen;
