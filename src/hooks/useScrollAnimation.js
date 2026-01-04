import { useEffect, useRef, useState } from 'react';

const useScrollAnimation = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null); // Added null as initial value

  useEffect(() => {
    // 1. Store the current ref in a variable inside the effect
    const currentRef = domRef.current;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // 2. Optimization: Stop observing once it's visible 
            // (unless you want the animation to repeat)
            if (currentRef) observer.unobserve(currentRef);
          }
        });
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px' // Adjusted margin for better mobile feel
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
    // 3. Added domRef.current to dependencies or ensure it runs on mount
  }, [threshold]); 

  return [domRef, isVisible];
};

export default useScrollAnimation;