{/* TODO: Replace result image files in public/images with real before/after photos. */}
        <img src={item.before} alt={`${item.service} before`} className="absolute inset-0 h-full w-full object-cover" />
        <img src={item.after} alt={`${item.service} after`} className="after-layer absolute inset-0 h-full w-full object-cover" />
        <img
          src={item.before}
          alt={`${item.service} before`}
          className="absolute inset-0 h-full w-full object-cover"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
        <img
          src={item.after}
          alt={`${item.service} after`}
          className="after-layer absolute inset-0 h-full w-full object-cover"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
        <div className="pointer-events-none absolute inset-y-0 w-1 bg-white shadow-[0_0_30px_rgba(255,255,255,0.9)]" style={{ left: `${split}%` }} />
          {resultItems.map((item) => (
            <div key={item.service} className="reveal-result opacity-0">
            <div key={item.service} className="reveal-result">
              <ResultCard item={item} />
