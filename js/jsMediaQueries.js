'use strict';

const mediaLists = {};
const TypeMedia = {
  mob: '(min-width: 1023px)',
};
const keysTypeMedia = Object.keys(TypeMedia);
keysTypeMedia.forEach(media => {
  mediaLists[media] = window.matchMedia(TypeMedia[media]);
});

export function handleQueryListener(changemenuBtnLinesColor) {
  const updateMatches = keysTypeMedia.reduce((acc, media) => {
    acc[media] = mediaLists[media].matches;
    return acc;
  }, {});
  if (updateMatches.mob) {
    changemenuBtnLinesColor()
  }
};
keysTypeMedia.forEach(media => {
  mediaLists[media].addListener(handleQueryListener);
});
handleQueryListener();