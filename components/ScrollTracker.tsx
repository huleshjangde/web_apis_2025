'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useEffect, useRef, useState } from 'react';

interface ScrollValues {
  windowScrollX: number;
  windowScrollY: number;
  elementScrollTop: number;
  elementScrollLeft: number;
  elementScrollHeight: number;
  elementScrollWidth: number;
}

const ScrollTracker: React.FC = () => {
  const [scrollValues, setScrollValues] = useState<ScrollValues>({
    windowScrollX: 0,
    windowScrollY: 0,
    elementScrollTop: 0,
    elementScrollLeft: 0,
    elementScrollHeight: 0,
    elementScrollWidth: 0,
  });

  const scrollableElementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = scrollableElementRef.current;

      setScrollValues({
        windowScrollX: window.scrollX,
        windowScrollY: window.scrollY,
        elementScrollTop: element?.scrollTop || 0,
        elementScrollLeft: element?.scrollLeft || 0,
        elementScrollHeight: element?.scrollHeight || 0,
        elementScrollWidth: element?.scrollWidth || 0,
      });
    };

    window.addEventListener('scroll', handleScroll);
    scrollableElementRef.current?.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      scrollableElementRef.current?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const {
    windowScrollX,
    windowScrollY,
    elementScrollTop,
    elementScrollLeft,
    elementScrollHeight,
    elementScrollWidth,
  } = scrollValues;

  return (
    <div className="space-y-4 p-4">
      <Card>
        <CardHeader>
          <CardTitle>Window Scroll Values</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p>Scroll X: {windowScrollX}px</p>
          <p>Scroll Y: {windowScrollY}px</p>
        </CardContent>
      </Card>

      <Separator />

      <div
        ref={scrollableElementRef}
        className="relative h-64 w-full max-w-md overflow-auto rounded-lg border border-border bg-background bg-green-500 p-4">
        {scrollValues.elementScrollTop > 100 && (
          <p className="absolute bottom-10 left-0 text-red-600">
            i am scrolled to the bottom of the page
          </p>
        )}
        <div className="h-[800px] w-[800px] bg-blue-600 p-4">
          <p>Scrollable content goes here...</p>
          <p>Scroll to see the values update in real time!</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Element Scroll Values</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p>Scroll Top: {elementScrollTop}px</p>
          <p>Scroll Left: {elementScrollLeft}px</p>
          <p>Scroll Height: {elementScrollHeight}px</p>
          <p>Scroll Width: {elementScrollWidth}px</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ScrollTracker;
