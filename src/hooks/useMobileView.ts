import { useState, useEffect } from 'react';

const useMobileView = (breakpoint: number = 950): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    // Function to check if viewport is mobile
    const checkMobileView = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    // Check on mount
    checkMobileView();

    // Add event listener for window resize
    window.addEventListener('resize', checkMobileView);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('resize', checkMobileView);
    };
  }, [breakpoint]);

  return isMobile;
};

export default useMobileView; 