import { makeScene2D, Circle, Txt, Rect } from "@motion-canvas/2d";
import { all, createRef, createSignal, waitFor } from "@motion-canvas/core";

export default makeScene2D(function* (view) {
  const path1 = createRef<Circle>();
  const path2 = createRef<Circle>();
  const singlal = createSignal(1);

  view.add(
    <>
      <Circle
        ref={path1}
        start={1}
        end={1}
        size={160}
        stroke={"white"}
        lineWidth={8}
        startAngle={320}
        endAngle={100}
      />
      <Circle
        ref={path2}
        size={160}
        start={1}
        end={1}
        stroke={"a09afb"}
        lineWidth={8}
        startAngle={120 + 20}
        endAngle={300 - 20}
      />
      <Rect layout>
      <Txt fontFamily={"Iosevka"} fill={"a09afb"} fontSize={80}>0</Txt>
      <Txt fontFamily={"Iosevka"} fill={"FAFAFA"} fontSize={80}>1</Txt>
      </Rect>
      <Circle
        size={20}
        lineWidth={8}
        stroke={"a09afb"}
        position={() => path2().getPointAtPercentage(singlal()).position}
      />
      <Circle
        size={20}
        lineWidth={8}
        stroke={"white"}
        position={() => path1().getPointAtPercentage(singlal()).position}
      />
      <Circle
        size={20}
        fill={"white"}
        position={() => path2().getPointAtPercentage(singlal()).position}
      />
      <Circle
        size={20}
        fill={"a09afb"}
        position={() => path1().getPointAtPercentage(singlal()).position}
      />
    </>,
  );



  yield* all(
   path1().end(0, 2),
   path2().end(0, 2),
   singlal(0, 2));
  yield* waitFor(1);
  // yield* path1().stroke('#e13238', 1);

});
