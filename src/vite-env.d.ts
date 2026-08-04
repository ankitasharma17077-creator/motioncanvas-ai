/// <reference types="vite/client" />
/// <reference types="@motion-canvas/2d/editor" />

declare module '*?makeScene' {
  import {SceneDescription} from '@motion-canvas/core';
  const description: SceneDescription;
  export default description;
}