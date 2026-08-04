import {makeScene2D, Circle, Txt} from '@motion-canvas/2d';
import {createRef, all, easeInOutCubic} from '@motion-canvas/core';

export default makeScene2D(function* (view) {
  const circle = createRef<Circle>();
  const text = createRef<Txt>();

  view.add(
    <Circle
      ref={circle}
      width={140}
      height={140}
      fill="#e74c3c"
      y={-50}
    />
  );

  view.add(
    <Txt
      ref={text}
      text="Motion Canvas Working!"
      fill="#ffffff"
      fontSize={40}
      y={100}
      opacity={0}
    />
  );

  yield* all(
    circle().scale(2, 1.2).to(1, 1.2, easeInOutCubic),
    text().opacity(1, 1.5)
  );

  yield* circle().fill('#2ecc71', 1);
});