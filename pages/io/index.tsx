import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Loader from './Loader';
import Item from './Item';

const Io = () => {
  const [target, setTarget] = useState<HTMLDivElement | null>(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [itemLists, setItemLists] = useState<number[]>([1, 2, 3]);

  const getMoreItem = async () => {
    setIsLoaded(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    let Items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    setItemLists((itemLists) => itemLists.concat(Items));
    setIsLoaded(false);
  };

  const onIntersect: IntersectionObserverCallback = async (
    [entry]: IntersectionObserverEntry[],
    observer: IntersectionObserver,
  ) => {
    if (entry.isIntersecting && !isLoaded) {
      observer.unobserve(entry.target);
      await getMoreItem();
      observer.observe(entry.target);
    }
  };

  useEffect(() => {
    let observer: IntersectionObserver;
    if (target) {
      observer = new IntersectionObserver(onIntersect, {
        threshold: 0.4,
      });
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
  }, [target]);

  return (
    <IoContainer>
      {itemLists.map((_, idx) => {
        return <Item number={idx + 1} key={idx.toString()} />;
      })}
      <div ref={setTarget} className="Target-Element">
        {isLoaded && <Loader />}
      </div>
    </IoContainer>
  );
};

export default Io;

const IoContainer = styled.main`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
`;
