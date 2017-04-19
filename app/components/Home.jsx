import React from 'react';

type Props = {
  greeting: ?string,
};

export default function Home({
  greeting = 'Hello',
}: Props) {
  return (
    <div>
      {greeting}
    </div>
  );
}
