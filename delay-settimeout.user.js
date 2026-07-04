// ==UserScript==
// @name         Delay setTimeout
// @namespace    https://github.com/onozaty/tampermonkey-scripts
// @version      1.0
// @description  setTimeoutの遅延を一律で増やしてコンソールにログ出力する
// @match        https://example.com/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function () {
  // 追加する遅延(ms)
  const EXTRA = 3000;

  const _setTimeout = window.setTimeout;

  window.setTimeout = function (fn, delay, ...rest) {
    const original = (delay == null || delay < 0) ? 0 : delay;
    const delayed = original + EXTRA;

    console.log(`[setTimeout] ${original}ms → ${delayed}ms (+${EXTRA}ms)`);
    return _setTimeout.call(this, fn, delayed, ...rest);
  };

  console.log(`[setTimeout] window.setTimeoutを差し替えました (+${EXTRA}ms)`);
})();
