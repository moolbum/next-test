import React, { useState, useEffect, useRef, MutableRefObject } from 'react';
import styled from 'styled-components';

const FadeOut = ({ children }: any) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const ref = useRef<any>(null);
  // const ref = useRef<HTMLDivElement>(null);

  const onIntersect = (entery: IntersectionObserverEntry[]) => {
    entery.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    });
  };

  useEffect(() => {
    let observer = new IntersectionObserver(onIntersect, { threshold: 0.5 });
    observer.observe(ref.current);
  }, []);
  return <Div ref={ref}>{children}</Div>;
};

export default FadeOut;

const Div = styled.div``;
