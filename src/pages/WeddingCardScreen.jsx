import { ArrowLeft, ChevronLeft, ChevronRight, X } from "lucide-react";
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

const CardItem = ({ image, index, onPreview }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <div
        className="card-item"
        onClick={() => onPreview(image, index)}
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
          <div className="card-footer">
            <span className="card-num">
              #{String(index + 1).padStart(3, "0")}
            </span>
            <span className="card-cta">Select</span>
          </div>
        </div>
      </div>

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

        .card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(42,10,11,0.72) 0%, transparent 55%);
          opacity: 0;
          transition: opacity 0.3s ease;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: center;
          padding: 10px;
        }
        .card-item:hover .card-overlay { opacity: 1; }

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

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
};

/* ── Preview Modal ── */
const PreviewModal = ({ image, index, onClose }) => {
  if (!image) return null;

  const cardCode = `WD${String(index + 1).padStart(3, "0")}`;
  const imageUrl = `http://adtractcreative.com/wedding-cards/${cardCode}.JPG`;

  const handleWhatsApp = async () => {
    // const phone = "919072501981"; // Adtract
    const phone = "917012882165"; // My Number
    const message =
      `Hello! I'm interested in the *${cardCode}* wedding card design.\n\n` +
      `Card: ${cardCode}\n` +
      `View: ${imageUrl}\n\n` +
      `Could you please share more details and pricing?`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="preview-backdrop" onClick={onClose}>
      <div className="preview-modal" onClick={(e) => e.stopPropagation()}>
        <button className="preview-close" onClick={onClose}>
          <X size={18} strokeWidth={1.5} />
        </button>

        <img src={image} alt={`Preview ${cardCode}`} className="preview-img" />

        <div className="preview-bottom">
          <div className="preview-label">#{cardCode}</div>

          <button className="wa-enquiry-btn" onClick={handleWhatsApp}>
            <svg
              className="wa-icon"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Enquire on WhatsApp
          </button>
        </div>
      </div>

      <style>{`
        .preview-backdrop {
          position: fixed;
          inset: 0;
          z-index: 999;
          background: rgba(10,4,4,0.78);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeIn 0.2s ease;
          padding: 24px;
        }

        .preview-modal {
          position: relative;
          max-width: min(400px, 90vw);
          width: 100%;
          animation: scaleIn 0.25s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .preview-img {
          width: 100%;
          aspect-ratio: 3/4;
          object-fit: cover;
          border-radius: 14px;
          display: block;
          box-shadow: 0 24px 64px rgba(0,0,0,0.55);
        }

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

        .preview-bottom {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
          margin-top: 16px;
        }

        .preview-label {
          font-size: 11px;
          letter-spacing: 3px;
          color: rgba(255,255,255,0.4);
          font-family: 'Courier New', monospace;
          text-align: center;
        }

        /* WhatsApp Button */
        .wa-enquiry-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: #25D366;
          color: #fff;
          border: none;
          border-radius: 50px;
          padding: 14px 32px;
          font-size: 15px;
          font-weight: 600;
          font-family: 'Cormorant Garamond', Georgia, serif;
          letter-spacing: 1px;
          cursor: pointer;
          box-shadow: 0 6px 24px rgba(37,211,102,0.35);
          transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
          width: 100%;
          max-width: 280px;
        }
        .wa-enquiry-btn:hover {
          background: #1ebe5b;
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(37,211,102,0.45);
        }
        .wa-enquiry-btn:active {
          transform: translateY(0);
        }

        .wa-icon {
          width: 20px;
          height: 20px;
          flex-shrink: 0;
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
    </div>
  );
};

/* ── Pagination ── */
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPages = () => {
    const pages = [];
    const delta = 2;
    const left = currentPage - delta;
    const right = currentPage + delta;

    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= left && i <= right)) {
        pages.push(i);
      } else if (i === left - 1 || i === right + 1) {
        pages.push("...");
      }
    }
    // deduplicate consecutive ellipses
    return pages.filter((p, idx) => !(p === "..." && pages[idx - 1] === "..."));
  };

  return (
    <div className="pagination-wrap">
      <button
        className="pg-arrow"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ChevronLeft size={16} strokeWidth={2} />
      </button>

      {getPages().map((p, i) =>
        p === "..." ? (
          <span key={`ellipsis-${i}`} className="pg-ellipsis">
            …
          </span>
        ) : (
          <button
            key={p}
            className={`pg-num ${p === currentPage ? "pg-active" : ""}`}
            onClick={() => onPageChange(p)}
          >
            {p}
          </button>
        ),
      )}

      <button
        className="pg-arrow"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <ChevronRight size={16} strokeWidth={2} />
      </button>

      <style>{`
        .pagination-wrap {
          display: flex;
          align-items: center;
          gap: 6px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .pg-arrow {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1.5px solid rgba(152,26,29,0.25);
          background: transparent;
          color: #981A1D;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .pg-arrow:hover:not(:disabled) {
          background: #981A1D;
          border-color: #981A1D;
          color: #fff;
          transform: scale(1.08);
        }
        .pg-arrow:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }

        .pg-num {
          width: 38px;
          height: 38px;
          border-radius: 8px;
          border: 1.5px solid rgba(152,26,29,0.18);
          background: transparent;
          color: #981A1D;
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          letter-spacing: 0.5px;
        }
        .pg-num:hover {
          background: rgba(152,26,29,0.08);
          border-color: #981A1D;
        }
        .pg-active {
          background: #981A1D !important;
          border-color: #981A1D !important;
          color: #fff !important;
          box-shadow: 0 4px 14px rgba(152,26,29,0.35);
        }

        .pg-ellipsis {
          color: #981A1D;
          font-size: 14px;
          padding: 0 2px;
          line-height: 38px;
          opacity: 0.6;
        }
      `}</style>
    </div>
  );
};

/* ── Main Screen ── */
const WeddingCardScreen = () => {
  const Navigate = useNavigate();
  const PER_PAGE = 20;
  const TOTAL = 165;
  const TOTAL_PAGES = Math.ceil(TOTAL / PER_PAGE);

  const [currentPage, setCurrentPage] = useState(1);
  const [preview, setPreview] = useState({ image: null, index: null });

  const allImages = Array.from(
    { length: TOTAL },
    (_, i) => `/wedding-cards/WD${String(i + 1).padStart(3, "0")}.JPG`,
  );

  const startIdx = (currentPage - 1) * PER_PAGE;
  const displayed = allImages.slice(startIdx, startIdx + PER_PAGE);

  const handlePageChange = useCallback((page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handlePreview = useCallback((image, index) => {
    setPreview({ image, index });
  }, []);

  const handleClosePreview = useCallback(() => {
    setPreview({ image: null, index: null });
  }, []);

  return (
    <section style={{ minHeight: "100vh", background: "#faf7f3" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Cormorant+Garamond:wght@300;400;600&display=swap');

        * { box-sizing: border-box; }

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
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          padding: 0 16px;
          max-width: 1400px;
          margin: 0 auto;
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
          padding: 48px 24px 80px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }

        .page-info {
          font-size: 12px;
          color: #7a2e30;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-family: 'Cormorant Garamond', serif;
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
          Page {currentPage} / {TOTAL_PAGES}
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
        {displayed.map((image, i) => (
          <CardItem
            key={image}
            image={image}
            index={startIdx + i}
            onPreview={handlePreview}
          />
        ))}
      </div>

      <div className="wc-footer">
        <Pagination
          currentPage={currentPage}
          totalPages={TOTAL_PAGES}
          onPageChange={handlePageChange}
        />
        <p className="page-info">
          Showing {startIdx + 1}–{Math.min(startIdx + PER_PAGE, TOTAL)} of{" "}
          {TOTAL} designs
        </p>
      </div>

      {/* Preview Modal */}
      {preview.image && (
        <PreviewModal
          image={preview.image}
          index={preview.index}
          onClose={handleClosePreview}
        />
      )}
    </section>
  );
};

export default WeddingCardScreen;
