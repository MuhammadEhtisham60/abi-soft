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

  // Rotate to next slide
  const handleNext = useCallback(() => {
    setItems((prev) => [...prev.slice(1), prev[0]]);
  }, []);

  // Rotate to previous slide
  const handlePrev = useCallback(() => {
    setItems((prev) => [prev[prev.length - 1], ...prev.slice(0, -1)]);
  }, []);

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
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <div className={styles.slide}>
          {items.map((item, index) => (
            <div
              key={item.id}
              className={styles.item}
              style={{
                backgroundImage: `url('${item.image}')`,
              }}
              data-index={index}
              onClick={() => {
                if (index > 1) {
                  // Jump to clicked card
                  setItems((prev) => {
                    const shiftCount = index - 1;
                    return [...prev.slice(shiftCount), ...prev.slice(0, shiftCount)];
                  });
                }
              }}
            >
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

              {/* Service name label on queue thumbnail cards */}
              {index > 1 && (
                <div className={styles.queueCardLabel}>
                  <span className={styles.queueCardTag}>Service</span>
                  <span className={styles.queueCardName}>{item.name}</span>
                </div>
              )}
            </div>
          ))}
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
