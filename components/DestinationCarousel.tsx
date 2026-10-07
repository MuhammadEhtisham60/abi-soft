"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import styles from "./DestinationCarousel.module.css";
import { services } from "./servicesData";

export interface DestinationItem {
  id: number | string;
  name: string;
  subtitle?: string;
  description: string;
  image: string;
  link: string;
  badge?: string;
}

// Map the 5 services directly from servicesData with their detail page images & content
const defaultServiceSlides: DestinationItem[] = services.map((s, idx) => ({
  id: s.slug || idx + 1,
  name: s.t,
  subtitle: s.p,
  description: s.desc || s.intro,
  image: s.image || "/images/service-tech-featured.jpg",
  link: `/services/${s.slug}`,
  badge: s.category || "Enterprise Solution",
}));

interface DestinationCarouselProps {
  destinations?: DestinationItem[];
  title?: string;
  badge?: string;
  autoPlay?: boolean;
  interval?: number;
}

const DestinationCarousel = ({
  destinations = defaultServiceSlides,
  title = "Everything Your Business Needs to Go Digital",
  badge = "Our Services",
  autoPlay = true,
  interval = 4000,
}: DestinationCarouselProps) => {
  const [items, setItems] = useState<DestinationItem[]>(destinations);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const isIntersectingRef = useRef(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Rotate to next slide
  const handleNext = useCallback(() => {
    setItems((prev) => [...prev.slice(1), prev[0]]);
  }, []);

  // Rotate to previous slide
  const handlePrev = useCallback(() => {
    setItems((prev) => [prev[prev.length - 1], ...prev.slice(0, -1)]);
  }, []);

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Intersection Observer to only auto-play when in viewport
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isIntersectingRef.current = entry.isIntersecting;
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Auto Slider Timer
  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      if (isIntersectingRef.current && !isPaused) {
        handleNext();
      }
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, isPaused, handleNext]);

  const activeItem = items[1] || items[0];

  return (
    <section
      ref={sectionRef}
      className={styles.sectionWrapper}
      id="showcase-carousel"
      aria-label="Featured services showcase carousel"
    >
      {/* Section Header */}
      <div className={styles.head}>
        <div className={styles.pillBadge}>
          <span className={styles.pillDot} />
          <span>{badge}</span>
        </div>
        <h2>
          {title.split(" ").slice(0, -2).join(" ")}{" "}
          <span className={styles.titleBlue}>{title.split(" ").slice(-2).join(" ")}</span>
        </h2>
      </div>

      {/* Carousel Container */}
      <div
        className={styles.container}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className={styles.slide}>
          {items.map((item, index) => {
            const isQueue = index > 1;
            return (
              <div
                key={item.id}
                className={styles.item}
                style={{
                  backgroundImage: `url('${item.image}')`,
                }}
                data-index={index}
                role={isQueue ? "button" : undefined}
                tabIndex={isQueue ? 0 : -1}
                aria-label={isQueue ? `Switch to ${item.name}` : undefined}
                onKeyDown={(e) => {
                  if (isQueue && (e.key === "Enter" || e.key === " ")) {
                    e.preventDefault();
                    setItems((prev) => {
                      const shiftCount = index - 1;
                      return [...prev.slice(shiftCount), ...prev.slice(0, shiftCount)];
                    });
                  }
                }}
                onClick={() => {
                  if (isQueue) {
                    // Jump to clicked card smoothly
                    setItems((prev) => {
                      const shiftCount = index - 1;
                      return [...prev.slice(shiftCount), ...prev.slice(0, shiftCount)];
                    });
                  }
                }}
              >
                {/* Overlays for smooth cross-fading without flash */}
                <div className={styles.cardOverlay} />
                <div className={styles.mainOverlay} />

                {/* Content overlay shown on active slide */}
                <div className={styles.content}>
                  {item.badge && (
                    <span className={styles.categoryPill}>{item.badge}</span>
                  )}
                  <div className={styles.name}>{item.name}</div>
                  {item.subtitle && (
                    <div className={styles.subtitle}>{item.subtitle}</div>
                  )}
                  <div className={styles.des}>{item.description}</div>
                  <Link className={styles.seeMore} href={item.link}>
                    <button type="button">
                      Explore Solution <span>→</span>
                    </button>
                  </Link>
                </div>

                {/* Service name label on queue thumbnail cards (faded via CSS on active) */}
                <div className={styles.queueCardLabel}>
                  <span className={styles.queueCardTag}>Service</span>
                  <span className={styles.queueCardName}>{item.name}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Floating Controls & Dots */}
        <div className={styles.controlsBar}>
          <div className={styles.button}>
            <button
              type="button"
              className={styles.prev}
              onClick={handlePrev}
              aria-label="Previous Slide"
            >
              ◁
            </button>
            <button
              type="button"
              className={styles.next}
              onClick={handleNext}
              aria-label="Next Slide"
            >
              ▷
            </button>
          </div>

          {/* Dots Indicator */}
          <div className={styles.dotsWrapper}>
            {destinations.map((orig, i) => {
              const isActive = activeItem.id === orig.id;
              return (
                <button
                  key={orig.id}
                  type="button"
                  aria-label={`Slide ${i + 1}: ${orig.name}`}
                  className={`${styles.dot} ${isActive ? styles.activeDot : ""}`}
                  onClick={() => {
                    const targetIdx = items.findIndex((it) => it.id === orig.id);
                    if (targetIdx !== -1 && targetIdx !== 1) {
                      setItems((prev) => {
                        const shiftCount = targetIdx === 0 ? prev.length - 1 : targetIdx - 1;
                        return [...prev.slice(shiftCount), ...prev.slice(0, shiftCount)];
                      });
                    }
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinationCarousel;
