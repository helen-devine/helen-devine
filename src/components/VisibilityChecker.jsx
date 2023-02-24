export function checkVisibility(setVisible, domRef) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => setVisible(entry.isIntersecting));
  });
  observer.observe(domRef.current);
  return () => observer.unobserve(domRef.current);
}
