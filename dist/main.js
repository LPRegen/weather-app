/*! For license information please see main.js.LICENSE.txt */
(() => {
  'use strict';
  var e = {
      315: (e, n, t) => {
        t.d(n, { Z: () => c });
        var r = t(537),
          o = t.n(r),
          a = t(645),
          i = t.n(a)()(o());
        i.push([
          e.id,
          'header{display:grid;gap:.5rem;padding:1.5rem 1rem;box-shadow:0 4px 12px 2px rgba(0,0,0,.5490196078);background-color:rgba(158,185,236,.6)}header .search-container{display:flex;justify-content:space-between;align-items:center}header .search-container .search-input{width:100%;margin-right:2rem;padding:.8rem .3rem;border-radius:10px;border:1px solid rgba(0,0,0,0);outline:solid 1px #94b1e6}header .search-container .search-input:focus,header .search-container .search-input:active{outline:2px solid #6a90d6}header .search-container .search-btn{all:unset;display:grid;align-content:center;padding:.8rem;border-radius:10px;margin-right:1rem;outline:solid 1px #94b1e6;background-color:#7ca0e2}header .search-container .search-btn:hover{cursor:pointer;background-color:#3564bd}header .search-container .search-btn:focus,header .search-container .search-btn:active{outline:3px solid #3564bd}header .sections{display:flex;padding:0 2rem;margin-top:1rem;justify-content:space-around;align-items:center;text-decoration:underline;text-underline-offset:4px}header .sections .section-name:hover{cursor:pointer}header .sections .section-name{padding:.4rem 1rem}header .sections .active-section{background-color:rgba(124,160,226,.7137254902);padding:.4rem 1rem;border-radius:8px}@media(min-width: 1280px){header{padding:1.5rem 8rem}header .search-container .search-input{padding-left:1rem}header .search-container .search-btn{margin-right:0}}.top-container{display:flex;margin:3rem 3rem 1.5rem 3rem;justify-content:space-between;align-items:flex-end}.top-container .location-info{display:grid;gap:.3rem}.top-container .location-info #date{font-size:.9rem}.top-container .location-info #city-location{font-size:1.5rem}.top-container .location-info #country-location{font-size:1.3rem}.current-feels-temp{display:flex;position:relative;justify-content:space-around}.current-feels-temp .temp-container{display:grid;gap:.4rem;justify-items:center;align-self:flex-end}.today-details{display:grid}.today-details .more-information{display:flex;margin:.2rem 2rem;justify-content:space-between}.daily-details .title-details{font-size:1.4rem;margin-bottom:3rem}.daily-details .cards{display:grid;margin-top:1.5rem;gap:1rem}.daily-details .cards .card-hourly{display:flex;justify-content:space-between;padding:.4rem 1.6rem 1.4rem 1.6rem;background-color:#bbcef1;border-radius:10px;box-shadow:0 4px 10px -2px rgba(0,0,0,.5490196078)}.daily-details .cards .card-hourly .detail-hours{padding-top:1rem}.daily-details .cards .card-hourly .detail-hours .hour{font-size:1.2rem}.daily-details .cards .card-hourly .detail-hours .detail-container{display:flex;justify-content:space-between;gap:2rem;padding-top:1rem}.daily-details .cards .card-hourly .weather-icon{display:flex;flex-direction:column;justify-content:center}.daily-details .cards .card-hourly .weather-icon .hourly-icon{display:flex;justify-content:center;width:100px}.daily-details .cards .card-hourly .weather-icon .icon-description{text-transform:capitalize;display:flex;justify-content:center}@media(min-width: 640px){.daily-details .cards .card-hourly{padding:1rem 4rem 2rem 4rem}}@media(min-width: 1280px){.daily-details .cards{display:grid;grid:auto/repeat(2, 1fr);gap:2rem}}footer{display:flex;justify-content:center;align-items:center;padding:1rem 0 .8rem 0;margin-top:1rem;background-color:rgba(158,185,236,.6);box-shadow:0 -2px 12px -2px rgba(0,0,0,.5490196078)}footer .github-icon{width:32px}footer .link-profile{padding:.3rem .2rem}.general-container>.six-days-details{margin-top:2rem;font-size:1.4rem}.general-container .cards>.six-days-card{display:grid}.general-container .cards>.six-days-card .upper-container{display:flex;background-color:#a2c9f7;justify-content:space-between;align-items:center;gap:.7rem;border-radius:10px;padding:0 1rem;z-index:99;box-shadow:0 4px 10px -2px rgba(0,0,0,.5490196078);margin-bottom:1rem}.general-container .cards>.six-days-card .upper-container .temperature{display:flex;align-items:center;gap:.3rem}.general-container .cards>.six-days-card .upper-container .card-date{font-size:.8rem;width:fit-content;white-space:nowrap}.general-container .cards>.six-days-card .upper-container .max-temp{font-size:1rem}.general-container .cards>.six-days-card .upper-container .min-temp{font-size:.8rem}.general-container .cards>.six-days-card .upper-container .six-days-icon{height:48px;width:48px}.general-container .cards>.six-days-card .upper-container span{cursor:pointer}.general-container .cards>.six-days-card .six-days-info{display:none;flex-direction:column;gap:.4rem;background-color:#a7c6e9;border-radius:10px;position:relative;top:-0.7rem;margin:0 1rem 0 1rem;padding:1rem .5rem .5rem .5rem}.general-container .cards>.six-days-card .six-days-info .more-information{display:flex;justify-content:space-between}.general-container .cards>.six-days-card .displayed-card{display:flex;margin-bottom:0}@media(min-width: 640px){.general-container .cards>.six-days-card .upper-container{height:4rem}.upper-container .general-container .cards>.six-days-card .displayed-card{height:4rem}.general-container .cards>.six-days-card .six-days-info{padding:2.5rem 1.5rem 2rem 1.5rem;gap:1rem}.general-container .cards>.six-days-card .displayed-card{padding-bottom:1.2rem;margin-bottom:0;padding:1.6rem 1.5rem 1rem 1.5rem}}@media(min-width: 1280px){.general-container .cards>.six-days-card .upper-container{height:4rem;margin-bottom:2rem;padding:.5rem 4rem .5rem 4rem}.upper-container .general-container .cards>.six-days-card .displayed-card{height:4rem;margin-bottom:2rem;padding:.5rem 4rem .5rem 4rem}.general-container .cards>.six-days-card .six-days-info{padding:2.5rem 1.5rem 2rem 1.5rem;gap:1rem}.general-container .cards>.six-days-card .displayed-card{padding-bottom:1.2rem;margin-bottom:0;padding:1.6rem 2.5rem 1rem 2.5rem}}*,*::before,*::after{box-sizing:border-box}*{margin:0;padding:0}html,body{height:100%;scroll-behavior:smooth}body{display:flex;flex-direction:column;line-height:1.5;font-family:"Roboto Flex",sans-serif;background-color:#d5dce4}img,svg{display:block;max-width:100%}input,button,textarea,select{font:inherit}p,h1,h2,h3,h4,h5,h6{overflow-wrap:break-word}#root,#__next{isolation:isolate}.general-container{display:grid;gap:3rem;margin:1rem;min-height:auto}.weather-details{display:flex;flex-direction:column;align-items:center}.weather-details #weather-icon{width:120px}.weather-details .icon-description{text-transform:capitalize}.back-to-top{margin:1rem auto}.load-container{min-height:60vh;padding:4rem 0}@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@media(min-width: 1280px){.general-container{margin:4rem 8rem 4rem 8rem;gap:5rem}}@media(min-width: 1536px){.general-container{margin:4rem 10rem 4rem 10rem;gap:5rem}}',
          '',
          {
            version: 3,
            sources: [
              'webpack://./src/styles/modules/Header.module.scss',
              'webpack://./src/styles/modules/TopContainer.module.scss',
              'webpack://./src/styles/modules/CurrentFeels.module.scss',
              'webpack://./src/styles/modules/TodayDetails.module.scss',
              'webpack://./src/styles/modules/HourlyDetails.module.scss',
              'webpack://./src/styles/modules/Footer.module.scss',
              'webpack://./src/styles/modules/SixDays.module.scss',
              'webpack://./src/styles/style.scss',
            ],
            names: [],
            mappings:
              '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',
            sourcesContent: [
              '$bgColor: rgba(158, 185, 236, 0.6);\n$outline: solid 1px #94b1e6;\n$outlineFocus: 2px solid #6a90d6;\n$outlineActive: 3px solid #3564bd;\n\nheader {\n  display: grid;\n  gap: 0.5rem;\n  padding: 1.5rem 1rem;\n  box-shadow: 0 4px 12px 2px #0000008c;\n  background-color: $bgColor;\n\n  .search-container {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    .search-input {\n      width: 100%;\n      margin-right: 2rem;\n      padding: 0.8rem 0.3rem;\n      border-radius: 10px;\n      border: 1px solid transparent;\n      outline: $outline;\n\n      &:focus,\n      &:active {\n        outline: $outlineFocus;\n      }\n    }\n\n    .search-btn {\n      all: unset;\n      display: grid;\n      align-content: center;\n      padding: 0.8rem;\n      border-radius: 10px;\n      margin-right: 1rem;\n      outline: $outline;\n      background-color: #7ca0e2;\n\n      &:hover {\n        cursor: pointer;\n        background-color: #3564bd;\n      }\n\n      &:focus,\n      &:active {\n        outline: $outlineActive;\n      }\n    }\n  }\n\n  .sections {\n    display: flex;\n    padding: 0 2rem;\n    margin-top: 1rem;\n    justify-content: space-around;\n    align-items: center;\n    text-decoration: underline;\n    text-underline-offset: 4px;\n\n    .section-name:hover {\n      cursor: pointer;\n    }\n\n    .section-name {\n      padding: 0.4rem 1rem;\n    }\n\n    .active-section {\n      background-color: #7ca0e2b6;\n      padding: 0.4rem 1rem;\n      border-radius: 8px;\n    }\n  }\n}\n\n@media (min-width: 1280px) {\n  header {\n    padding: 1.5rem 8rem;\n\n    .search-container {\n      .search-input {\n        padding-left: 1rem;\n      }\n\n      .search-btn {\n        margin-right: 0;\n      }\n    }\n  }\n}\n',
              '.top-container {\n  display: flex;\n  margin: 3rem 3rem 1.5rem 3rem;\n  justify-content: space-between;\n  align-items: flex-end;\n\n  .location-info {\n    display: grid;\n    gap: 0.3rem;\n\n    #date {\n      font-size: 0.9rem;\n    }\n\n    #city-location {\n      font-size: 1.5rem;\n    }\n\n    #country-location {\n      font-size: 1.3rem;\n    }\n  }\n}\n',
              '.current-feels-temp {\n  display: flex;\n  position: relative;\n  justify-content: space-around;\n\n  .temp-container {\n    display: grid;\n    gap: 0.4rem;\n    justify-items: center;\n    align-self: flex-end;\n  }\n}\n',
              '.today-details {\n  display: grid;\n\n  .more-information {\n    display: flex;\n    margin: 0.2rem 2rem;\n    justify-content: space-between;\n  }\n}\n',
              '.daily-details {\n  .title-details {\n    font-size: 1.4rem;\n    margin-bottom: 3rem;\n  }\n\n  .cards {\n    display: grid;\n    margin-top: 1.5rem;\n    gap: 1rem;\n\n    .card-hourly {\n      display: flex;\n      justify-content: space-between;\n      padding: 0.4rem 1.6rem 1.4rem 1.6rem;\n      background-color: #bbcef1;\n      border-radius: 10px;\n      box-shadow: 0 4px 10px -2px #0000008c;\n\n      .detail-hours {\n        padding-top: 1rem;\n        .hour {\n          font-size: 1.2rem;\n        }\n\n        .detail-container {\n          display: flex;\n          justify-content: space-between;\n          gap: 2rem;\n          padding-top: 1rem;\n        }\n      }\n\n      .weather-icon {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n\n        .hourly-icon {\n          display: flex;\n          justify-content: center;\n          width: 100px;\n        }\n\n        .icon-description {\n          text-transform: capitalize;\n          display: flex;\n          justify-content: center;\n        }\n      }\n    }\n  }\n}\n\n@media (min-width: 640px) {\n  .daily-details {\n    .cards {\n      .card-hourly {\n        padding: 1rem 4rem 2rem 4rem;\n      }\n    }\n  }\n}\n\n@media (min-width: 1280px) {\n  .daily-details {\n    .cards {\n      display: grid;\n      grid: auto / repeat(2, 1fr);\n      gap: 2rem;\n    }\n  }\n}\n',
              'footer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 1rem 0 0.8rem 0;\n  margin-top: 1rem;\n  background-color: rgba(158, 185, 236, 0.6);\n  box-shadow: 0 -2px 12px -2px #0000008c;\n\n  .github-icon {\n    width: 32px;\n  }\n\n  .link-profile {\n    padding: 0.3rem 0.2rem;\n  }\n}\n',
              '.general-container > .six-days-details {\n  margin-top: 2rem;\n  font-size: 1.4rem;\n}\n\n.general-container {\n  .cards > .six-days-card {\n    display: grid;\n\n    .upper-container {\n      display: flex;\n      background-color: #a2c9f7;\n      justify-content: space-between;\n      align-items: center;\n      gap: 0.7rem;\n      border-radius: 10px;\n      padding: 0 1rem;\n      z-index: 99;\n      box-shadow: 0 4px 10px -2px #0000008c;\n      margin-bottom: 1rem;\n\n      .temperature {\n        display: flex;\n        align-items: center;\n        gap: 0.3rem;\n      }\n\n      .card-date {\n        font-size: 0.8rem;\n        width: fit-content;\n        white-space: nowrap;\n      }\n\n      .max-temp {\n        font-size: 1rem;\n      }\n\n      .min-temp {\n        font-size: 0.8rem;\n      }\n\n      .six-days-icon {\n        height: 48px;\n        width: 48px;\n      }\n\n      span {\n        cursor: pointer;\n      }\n    }\n\n    .six-days-info {\n      display: none;\n      flex-direction: column;\n      gap: 0.4rem;\n      background-color: #a7c6e9;\n      border-radius: 10px;\n      position: relative;\n      top: -0.7rem;\n      margin: 0 1rem 0 1rem;\n      padding: 1rem 0.5rem 0.5rem 0.5rem;\n\n      .more-information {\n        display: flex;\n        justify-content: space-between;\n      }\n    }\n\n    .displayed-card {\n      display: flex;\n      margin-bottom: 0;\n    }\n  }\n}\n\n@media (min-width: 640px) {\n  .general-container {\n    .cards > .six-days-card {\n      .upper-container {\n        height: 4rem;\n      }\n\n      .upper-container & .displayed-card {\n        height: 4rem;\n      }\n\n      .six-days-info {\n        padding: 2.5rem 1.5rem 2rem 1.5rem;\n        gap: 1rem;\n      }\n\n      .displayed-card {\n        padding-bottom: 1.2rem;\n        margin-bottom: 0;\n        padding: 1.6rem 1.5rem 1rem 1.5rem;\n      }\n    }\n  }\n}\n\n@media (min-width: 1280px) {\n  .general-container {\n    .cards > .six-days-card {\n      .upper-container {\n        height: 4rem;\n        margin-bottom: 2rem;\n        padding: 0.5rem 4rem 0.5rem 4rem;\n      }\n\n      .upper-container & .displayed-card {\n        height: 4rem;\n        margin-bottom: 2rem;\n        padding: 0.5rem 4rem 0.5rem 4rem;\n      }\n\n      .six-days-info {\n        padding: 2.5rem 1.5rem 2rem 1.5rem;\n        gap: 1rem;\n      }\n\n      .displayed-card {\n        padding-bottom: 1.2rem;\n        margin-bottom: 0;\n        padding: 1.6rem 2.5rem 1rem 2.5rem;\n      }\n    }\n  }\n}\n',
              "@import 'modules/Header.module.scss';\n@import 'modules/TopContainer.module.scss';\n@import 'modules/CurrentFeels.module.scss';\n@import 'modules/TodayDetails.module.scss';\n@import 'modules/HourlyDetails.module.scss';\n@import 'modules/Footer.module.scss';\n@import 'modules/SixDays.module.scss';\n\n$background: #d5dce4;\n$card-background: #ffeedd;\n$card-shadow: rgba(0, 0, 0, 0.25);\n\n// ! Reset\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\nhtml,\nbody {\n  height: 100%;\n  scroll-behavior: smooth;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.5;\n  font-family: 'Roboto Flex', sans-serif;\n  background-color: $background;\n}\n\nimg,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n\n#root,\n#__next {\n  isolation: isolate;\n}\n\n.general-container {\n  display: grid;\n  gap: 3rem;\n  margin: 1rem;\n  min-height: auto;\n}\n\n.weather-details {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  #weather-icon {\n    width: 120px;\n  }\n\n  .icon-description {\n    text-transform: capitalize;\n  }\n}\n\n.back-to-top {\n  margin: 1rem auto;\n}\n\n.load-container {\n  min-height: 60vh;\n  padding: 4rem 0;\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@media (min-width: 1280px) {\n  .general-container {\n    margin: 4rem 8rem 4rem 8rem;\n    gap: 5rem;\n  }\n}\n\n@media (min-width: 1536px) {\n  .general-container {\n    margin: 4rem 10rem 4rem 10rem;\n    gap: 5rem;\n  }\n}\n",
            ],
            sourceRoot: '',
          },
        ]);
        const c = i;
      },
      645: (e) => {
        e.exports = function (e) {
          var n = [];
          return (
            (n.toString = function () {
              return this.map(function (n) {
                var t = '',
                  r = void 0 !== n[5];
                return (
                  n[4] && (t += '@supports ('.concat(n[4], ') {')),
                  n[2] && (t += '@media '.concat(n[2], ' {')),
                  r &&
                    (t += '@layer'.concat(
                      n[5].length > 0 ? ' '.concat(n[5]) : '',
                      ' {'
                    )),
                  (t += e(n)),
                  r && (t += '}'),
                  n[2] && (t += '}'),
                  n[4] && (t += '}'),
                  t
                );
              }).join('');
            }),
            (n.i = function (e, t, r, o, a) {
              'string' == typeof e && (e = [[null, e, void 0]]);
              var i = {};
              if (r)
                for (var c = 0; c < this.length; c++) {
                  var s = this[c][0];
                  null != s && (i[s] = !0);
                }
              for (var d = 0; d < e.length; d++) {
                var A = [].concat(e[d]);
                (r && i[A[0]]) ||
                  (void 0 !== a &&
                    (void 0 === A[5] ||
                      (A[1] = '@layer'
                        .concat(A[5].length > 0 ? ' '.concat(A[5]) : '', ' {')
                        .concat(A[1], '}')),
                    (A[5] = a)),
                  t &&
                    (A[2]
                      ? ((A[1] = '@media '
                          .concat(A[2], ' {')
                          .concat(A[1], '}')),
                        (A[2] = t))
                      : (A[2] = t)),
                  o &&
                    (A[4]
                      ? ((A[1] = '@supports ('
                          .concat(A[4], ') {')
                          .concat(A[1], '}')),
                        (A[4] = o))
                      : (A[4] = ''.concat(o))),
                  n.push(A));
              }
            }),
            n
          );
        };
      },
      537: (e) => {
        e.exports = function (e) {
          var n = e[1],
            t = e[3];
          if (!t) return n;
          if ('function' == typeof btoa) {
            var r = btoa(unescape(encodeURIComponent(JSON.stringify(t)))),
              o =
                'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
                  r
                ),
              a = '/*# '.concat(o, ' */'),
              i = t.sources.map(function (e) {
                return '/*# sourceURL='
                  .concat(t.sourceRoot || '')
                  .concat(e, ' */');
              });
            return [n].concat(i).concat([a]).join('\n');
          }
          return [n].join('\n');
        };
      },
      379: (e) => {
        var n = [];
        function t(e) {
          for (var t = -1, r = 0; r < n.length; r++)
            if (n[r].identifier === e) {
              t = r;
              break;
            }
          return t;
        }
        function r(e, r) {
          for (var a = {}, i = [], c = 0; c < e.length; c++) {
            var s = e[c],
              d = r.base ? s[0] + r.base : s[0],
              A = a[d] || 0,
              l = ''.concat(d, ' ').concat(A);
            a[d] = A + 1;
            var u = t(l),
              p = {
                css: s[1],
                media: s[2],
                sourceMap: s[3],
                supports: s[4],
                layer: s[5],
              };
            if (-1 !== u) n[u].references++, n[u].updater(p);
            else {
              var m = o(p, r);
              (r.byIndex = c),
                n.splice(c, 0, { identifier: l, updater: m, references: 1 });
            }
            i.push(l);
          }
          return i;
        }
        function o(e, n) {
          var t = n.domAPI(n);
          return (
            t.update(e),
            function (n) {
              if (n) {
                if (
                  n.css === e.css &&
                  n.media === e.media &&
                  n.sourceMap === e.sourceMap &&
                  n.supports === e.supports &&
                  n.layer === e.layer
                )
                  return;
                t.update((e = n));
              } else t.remove();
            }
          );
        }
        e.exports = function (e, o) {
          var a = r((e = e || []), (o = o || {}));
          return function (e) {
            e = e || [];
            for (var i = 0; i < a.length; i++) {
              var c = t(a[i]);
              n[c].references--;
            }
            for (var s = r(e, o), d = 0; d < a.length; d++) {
              var A = t(a[d]);
              0 === n[A].references && (n[A].updater(), n.splice(A, 1));
            }
            a = s;
          };
        };
      },
      569: (e) => {
        var n = {};
        e.exports = function (e, t) {
          var r = (function (e) {
            if (void 0 === n[e]) {
              var t = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                t instanceof window.HTMLIFrameElement
              )
                try {
                  t = t.contentDocument.head;
                } catch (e) {
                  t = null;
                }
              n[e] = t;
            }
            return n[e];
          })(e);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(t);
        };
      },
      216: (e) => {
        e.exports = function (e) {
          var n = document.createElement('style');
          return e.setAttributes(n, e.attributes), e.insert(n, e.options), n;
        };
      },
      565: (e, n, t) => {
        e.exports = function (e) {
          var n = t.nc;
          n && e.setAttribute('nonce', n);
        };
      },
      795: (e) => {
        e.exports = function (e) {
          var n = e.insertStyleElement(e);
          return {
            update: function (t) {
              !(function (e, n, t) {
                var r = '';
                t.supports && (r += '@supports ('.concat(t.supports, ') {')),
                  t.media && (r += '@media '.concat(t.media, ' {'));
                var o = void 0 !== t.layer;
                o &&
                  (r += '@layer'.concat(
                    t.layer.length > 0 ? ' '.concat(t.layer) : '',
                    ' {'
                  )),
                  (r += t.css),
                  o && (r += '}'),
                  t.media && (r += '}'),
                  t.supports && (r += '}');
                var a = t.sourceMap;
                a &&
                  'undefined' != typeof btoa &&
                  (r +=
                    '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      ' */'
                    )),
                  n.styleTagTransform(r, e, n.options);
              })(n, e, t);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(n);
            },
          };
        };
      },
      589: (e) => {
        e.exports = function (e, n) {
          if (n.styleSheet) n.styleSheet.cssText = e;
          else {
            for (; n.firstChild; ) n.removeChild(n.firstChild);
            n.appendChild(document.createTextNode(e));
          }
        };
      },
    },
    n = {};
  function t(r) {
    var o = n[r];
    if (void 0 !== o) return o.exports;
    var a = (n[r] = { id: r, exports: {} });
    return e[r](a, a.exports, t), a.exports;
  }
  (t.n = (e) => {
    var n = e && e.__esModule ? () => e.default : () => e;
    return t.d(n, { a: n }), n;
  }),
    (t.d = (e, n) => {
      for (var r in n)
        t.o(n, r) &&
          !t.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: n[r] });
    }),
    (t.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
    (t.nc = void 0),
    (() => {
      var e = t(379),
        n = t.n(e),
        r = t(795),
        o = t.n(r),
        a = t(569),
        i = t.n(a),
        c = t(565),
        s = t.n(c),
        d = t(216),
        A = t.n(d),
        l = t(589),
        u = t.n(l),
        p = t(315),
        m = {};
      function f(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
        return r;
      }
      (m.styleTagTransform = u()),
        (m.setAttributes = s()),
        (m.insert = i().bind(null, 'head')),
        (m.domAPI = o()),
        (m.insertStyleElement = A()),
        n()(p.Z, m),
        p.Z && p.Z.locals && p.Z.locals;
      var h,
        y,
        g,
        C,
        v,
        x,
        b,
        w,
        E,
        B,
        k =
          ((h = document.querySelector('.general-container')),
          (C = function (e) {
            var n = g('div', 'top-container'),
              t = g('div', 'current-feels-temp'),
              r = g('div', 'today-details'),
              o = g('div', 'daily-details'),
              a = g('div', 'cards');
            e ? h.append(a) : (o.append(a), h.append(n, t, r, o));
          }),
          (v = function (e, n) {
            var t = g('div', 'detail-container'),
              r = g('p', '', '', e),
              o = g('p', '', '', n + ' °C');
            return t.append(r, o), t;
          }),
          (x = function (e, n, t) {
            var r = g('div', 'location-info'),
              o = g('p', '', 'city-location', ''.concat(n, ',')),
              a = g('p', '', 'country-location', ' '.concat(_.regionNames(t))),
              i = g('p', '', 'date', ''.concat(_.convertDateToLocale(e)));
            return r.append(i, o, a), r;
          }),
          (b = function (e) {
            var n = g('div', 'weather-details'),
              t = g(
                'p',
                'icon-description',
                'weather-description',
                e.weather[0].description
              ),
              r = g('img', 'weather-icon', 'weather-icon');
            return (
              n.append(r, t),
              (r.alt = 'Weather icon.'),
              (r.src = 'http://openweathermap.org/img/wn/'.concat(
                e.weather[0].icon,
                '@2x.png'
              )),
              n
            );
          }),
          (w = function (e, n, t) {
            var r = [Math.round(e), Math.round(n)],
              o = g('h1', 'current-temp', '', ''.concat(r[0], ' °C')),
              a = g('h2', 'feels-temp', '', ''.concat(r[1], ' °C')),
              i = g(
                'small',
                'small-info',
                '',
                ''.concat(t ? 'Current temperature' : 'Max temperature')
              ),
              c = g(
                'small',
                'small-info',
                '',
                ''.concat(t ? 'Feels like' : 'Min temperature')
              ),
              s = g('div', 'temp-container'),
              d = g('div', 'temp-container');
            return s.append(o, i), d.append(a, c), [s, d];
          }),
          (E = function (e) {
            for (
              var n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 1,
                t =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : 9,
                r = [],
                o = g('h3', 'title-details', '', 'Hourly details'),
                a = n;
              a < t;
              a++
            ) {
              var i = g('div', 'card-hourly'),
                c = g('div', 'detail-hours'),
                s = g(
                  'h4',
                  'hour',
                  '',
                  ''.concat(_.convertDateToLocale(e[a].dt, !0))
                ),
                d = g('div', 'weather-icon'),
                A = g('img', 'hourly-icon'),
                l = g('p', 'icon-description', '', e[a].weather[0].description);
              d.append(A, l),
                c.append(
                  s,
                  v('Temperature', Math.round(e[a].temp)),
                  v('Feels like', Math.round(e[a].feels_like))
                ),
                i.append(c, d),
                (A.src = 'http://openweathermap.org/img/wn/'.concat(
                  e[a].weather[0].icon,
                  '@2x.png'
                )),
                (A.alt = 'Weather icon.'),
                r.push(i);
            }
            return (
              document
                .querySelector('.cards')
                .insertAdjacentElement('beforebegin', o),
              r
            );
          }),
          (B = function (e, n) {
            var t,
              r,
              o = [],
              a = _.destructureObject(
                e,
                (function (e) {
                  if (Array.isArray(e)) return f(e);
                })((r = n)) ||
                  (function (e) {
                    if (
                      ('undefined' != typeof Symbol &&
                        null != e[Symbol.iterator]) ||
                      null != e['@@iterator']
                    )
                      return Array.from(e);
                  })(r) ||
                  (function (e, n) {
                    if (e) {
                      if ('string' == typeof e) return f(e, n);
                      var t = Object.prototype.toString.call(e).slice(8, -1);
                      return (
                        'Object' === t &&
                          e.constructor &&
                          (t = e.constructor.name),
                        'Map' === t || 'Set' === t
                          ? Array.from(e)
                          : 'Arguments' === t ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                          ? f(e, n)
                          : void 0
                      );
                    }
                  })(r) ||
                  (function () {
                    throw new TypeError(
                      'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                    );
                  })()
              );
            for (var i in a) {
              var c = g('div', 'more-information'),
                s = g('p'),
                d = g('p');
              switch (
                (c.append(s, d),
                (s.textContent =
                  ((t = void 0),
                  (t = i.replace('_', ' ')).charAt(0).toUpperCase() +
                    t.slice(1))),
                i)
              ) {
                case 'humidity':
                  (s.textContent = 'Humidity'),
                    (d.textContent = ''.concat(a[i], ' %'));
                  break;
                case 'uvi':
                  (s.textContent = 'UV index'),
                    (d.textContent = ''.concat(a[i]));
                  break;
                case 'wind_speed':
                  (s.textContent = 'Wind speed'),
                    (d.textContent = ''.concat(a[i], ' km/h'));
              }
              o.push(c);
            }
            return o;
          }),
          {
            createElement: (g = function (e, n, t, r) {
              var o = document.createElement(e);
              return (
                n && o.classList.add(n),
                t && (o.id = t),
                r && (o.textContent = r),
                o
              );
            }),
            clearContent: (y = function () {
              h.textContent = '';
            }),
            createContainers: C,
            updateMoreInformation: B,
            displayLoader: function (e, n) {
              var t;
              y(),
                n
                  ? (t = g('div', 'error')).classList.add('small-x')
                  : (t = g('div', 'loader'));
              var r = g('div', 'load-container'),
                o = g(
                  'h2',
                  'loading-info',
                  '',
                  ''.concat(
                    n
                      ? ''.concat(e, ' Please enter a valid city name')
                      : ''.concat(e)
                  )
                );
              r.append(t, o), h.append(r);
            },
            toggleActiveSection: function (e) {
              var n = document.querySelector('.active-section');
              e.classList.contains('section-name') &&
                (n.classList.remove('active-section'),
                e.classList.add('active-section'));
            },
            todaySection: function (e, n, t) {
              delete h.dataset.searching, y(), C();
              var r = x(e.current.dt, n, t),
                o = b(e.current),
                a = w(e.current.temp, e.current.feels_like, !0),
                i = B(e.current, ['humidity', 'uvi', 'wind_speed']),
                c = E(e.hourly);
              document.querySelector('.top-container').append(r, o),
                a.forEach(function (e) {
                  return document
                    .querySelector('.current-feels-temp')
                    .append(e);
                }),
                i.forEach(function (e) {
                  return document.querySelector('.today-details').append(e);
                }),
                c.forEach(function (e) {
                  return document.querySelector('.cards').append(e);
                });
            },
            tomorrowSection: function (e, n, t) {
              y(), C();
              var r = x(e.daily[1].dt, n, t),
                o = b(e.daily[1]),
                a = B(e.daily[1], ['humidity', 'uvi', 'wind_speed']),
                i = w(e.current.temp, e.current.feels_like),
                c = E(e.hourly, 25, 47);
              document.querySelector('.top-container').append(r, o),
                a.forEach(function (e) {
                  return document.querySelector('.today-details').append(e);
                }),
                i.forEach(function (e) {
                  return document
                    .querySelector('.current-feels-temp')
                    .append(e);
                }),
                c.forEach(function (e) {
                  return document.querySelector('.cards').append(e);
                });
            },
            displayCardInfo: function (e) {
              var n = e.target.parentElement;
              e.target.parentElement.nextElementSibling.classList.toggle(
                'displayed-card'
              ),
                n.classList.toggle('displayed-card');
            },
          });
      function L(e) {
        return (
          (L =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          L(e)
        );
      }
      function S() {
        S = function () {
          return e;
        };
        var e = {},
          n = Object.prototype,
          t = n.hasOwnProperty,
          r = 'function' == typeof Symbol ? Symbol : {},
          o = r.iterator || '@@iterator',
          a = r.asyncIterator || '@@asyncIterator',
          i = r.toStringTag || '@@toStringTag';
        function c(e, n, t) {
          return (
            Object.defineProperty(e, n, {
              value: t,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[n]
          );
        }
        try {
          c({}, '');
        } catch (e) {
          c = function (e, n, t) {
            return (e[n] = t);
          };
        }
        function s(e, n, t, r) {
          var o = n && n.prototype instanceof l ? n : l,
            a = Object.create(o.prototype),
            i = new w(r || []);
          return (
            (a._invoke = (function (e, n, t) {
              var r = 'suspendedStart';
              return function (o, a) {
                if ('executing' === r)
                  throw new Error('Generator is already running');
                if ('completed' === r) {
                  if ('throw' === o) throw a;
                  return { value: void 0, done: !0 };
                }
                for (t.method = o, t.arg = a; ; ) {
                  var i = t.delegate;
                  if (i) {
                    var c = v(i, t);
                    if (c) {
                      if (c === A) continue;
                      return c;
                    }
                  }
                  if ('next' === t.method) t.sent = t._sent = t.arg;
                  else if ('throw' === t.method) {
                    if ('suspendedStart' === r)
                      throw ((r = 'completed'), t.arg);
                    t.dispatchException(t.arg);
                  } else 'return' === t.method && t.abrupt('return', t.arg);
                  r = 'executing';
                  var s = d(e, n, t);
                  if ('normal' === s.type) {
                    if (
                      ((r = t.done ? 'completed' : 'suspendedYield'),
                      s.arg === A)
                    )
                      continue;
                    return { value: s.arg, done: t.done };
                  }
                  'throw' === s.type &&
                    ((r = 'completed'), (t.method = 'throw'), (t.arg = s.arg));
                }
              };
            })(e, t, i)),
            a
          );
        }
        function d(e, n, t) {
          try {
            return { type: 'normal', arg: e.call(n, t) };
          } catch (e) {
            return { type: 'throw', arg: e };
          }
        }
        e.wrap = s;
        var A = {};
        function l() {}
        function u() {}
        function p() {}
        var m = {};
        c(m, o, function () {
          return this;
        });
        var f = Object.getPrototypeOf,
          h = f && f(f(E([])));
        h && h !== n && t.call(h, o) && (m = h);
        var y = (p.prototype = l.prototype = Object.create(m));
        function g(e) {
          ['next', 'throw', 'return'].forEach(function (n) {
            c(e, n, function (e) {
              return this._invoke(n, e);
            });
          });
        }
        function C(e, n) {
          function r(o, a, i, c) {
            var s = d(e[o], e, a);
            if ('throw' !== s.type) {
              var A = s.arg,
                l = A.value;
              return l && 'object' == L(l) && t.call(l, '__await')
                ? n.resolve(l.__await).then(
                    function (e) {
                      r('next', e, i, c);
                    },
                    function (e) {
                      r('throw', e, i, c);
                    }
                  )
                : n.resolve(l).then(
                    function (e) {
                      (A.value = e), i(A);
                    },
                    function (e) {
                      return r('throw', e, i, c);
                    }
                  );
            }
            c(s.arg);
          }
          var o;
          this._invoke = function (e, t) {
            function a() {
              return new n(function (n, o) {
                r(e, t, n, o);
              });
            }
            return (o = o ? o.then(a, a) : a());
          };
        }
        function v(e, n) {
          var t = e.iterator[n.method];
          if (void 0 === t) {
            if (((n.delegate = null), 'throw' === n.method)) {
              if (
                e.iterator.return &&
                ((n.method = 'return'),
                (n.arg = void 0),
                v(e, n),
                'throw' === n.method)
              )
                return A;
              (n.method = 'throw'),
                (n.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return A;
          }
          var r = d(t, e.iterator, n.arg);
          if ('throw' === r.type)
            return (
              (n.method = 'throw'), (n.arg = r.arg), (n.delegate = null), A
            );
          var o = r.arg;
          return o
            ? o.done
              ? ((n[e.resultName] = o.value),
                (n.next = e.nextLoc),
                'return' !== n.method &&
                  ((n.method = 'next'), (n.arg = void 0)),
                (n.delegate = null),
                A)
              : o
            : ((n.method = 'throw'),
              (n.arg = new TypeError('iterator result is not an object')),
              (n.delegate = null),
              A);
        }
        function x(e) {
          var n = { tryLoc: e[0] };
          1 in e && (n.catchLoc = e[1]),
            2 in e && ((n.finallyLoc = e[2]), (n.afterLoc = e[3])),
            this.tryEntries.push(n);
        }
        function b(e) {
          var n = e.completion || {};
          (n.type = 'normal'), delete n.arg, (e.completion = n);
        }
        function w(e) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            e.forEach(x, this),
            this.reset(!0);
        }
        function E(e) {
          if (e) {
            var n = e[o];
            if (n) return n.call(e);
            if ('function' == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var r = -1,
                a = function n() {
                  for (; ++r < e.length; )
                    if (t.call(e, r)) return (n.value = e[r]), (n.done = !1), n;
                  return (n.value = void 0), (n.done = !0), n;
                };
              return (a.next = a);
            }
          }
          return { next: B };
        }
        function B() {
          return { value: void 0, done: !0 };
        }
        return (
          (u.prototype = p),
          c(y, 'constructor', p),
          c(p, 'constructor', u),
          (u.displayName = c(p, i, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (e) {
            var n = 'function' == typeof e && e.constructor;
            return (
              !!n &&
              (n === u || 'GeneratorFunction' === (n.displayName || n.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, p)
                : ((e.__proto__ = p), c(e, i, 'GeneratorFunction')),
              (e.prototype = Object.create(y)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          g(C.prototype),
          c(C.prototype, a, function () {
            return this;
          }),
          (e.AsyncIterator = C),
          (e.async = function (n, t, r, o, a) {
            void 0 === a && (a = Promise);
            var i = new C(s(n, t, r, o), a);
            return e.isGeneratorFunction(t)
              ? i
              : i.next().then(function (e) {
                  return e.done ? e.value : i.next();
                });
          }),
          g(y),
          c(y, i, 'Generator'),
          c(y, o, function () {
            return this;
          }),
          c(y, 'toString', function () {
            return '[object Generator]';
          }),
          (e.keys = function (e) {
            var n = [];
            for (var t in e) n.push(t);
            return (
              n.reverse(),
              function t() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in e) return (t.value = r), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (e.values = E),
          (w.prototype = {
            constructor: w,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(b),
                !e)
              )
                for (var n in this)
                  't' === n.charAt(0) &&
                    t.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ('throw' === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var n = this;
              function r(t, r) {
                return (
                  (i.type = 'throw'),
                  (i.arg = e),
                  (n.next = t),
                  r && ((n.method = 'next'), (n.arg = void 0)),
                  !!r
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  i = a.completion;
                if ('root' === a.tryLoc) return r('end');
                if (a.tryLoc <= this.prev) {
                  var c = t.call(a, 'catchLoc'),
                    s = t.call(a, 'finallyLoc');
                  if (c && s) {
                    if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                  } else if (c) {
                    if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                  } else {
                    if (!s)
                      throw new Error('try statement without catch or finally');
                    if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, n) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var o = this.tryEntries[r];
                if (
                  o.tryLoc <= this.prev &&
                  t.call(o, 'finallyLoc') &&
                  this.prev < o.finallyLoc
                ) {
                  var a = o;
                  break;
                }
              }
              a &&
                ('break' === e || 'continue' === e) &&
                a.tryLoc <= n &&
                n <= a.finallyLoc &&
                (a = null);
              var i = a ? a.completion : {};
              return (
                (i.type = e),
                (i.arg = n),
                a
                  ? ((this.method = 'next'), (this.next = a.finallyLoc), A)
                  : this.complete(i)
              );
            },
            complete: function (e, n) {
              if ('throw' === e.type) throw e.arg;
              return (
                'break' === e.type || 'continue' === e.type
                  ? (this.next = e.arg)
                  : 'return' === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = 'return'),
                    (this.next = 'end'))
                  : 'normal' === e.type && n && (this.next = n),
                A
              );
            },
            finish: function (e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var t = this.tryEntries[n];
                if (t.finallyLoc === e)
                  return this.complete(t.completion, t.afterLoc), b(t), A;
              }
            },
            catch: function (e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var t = this.tryEntries[n];
                if (t.tryLoc === e) {
                  var r = t.completion;
                  if ('throw' === r.type) {
                    var o = r.arg;
                    b(t);
                  }
                  return o;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function (e, n, t) {
              return (
                (this.delegate = { iterator: E(e), resultName: n, nextLoc: t }),
                'next' === this.method && (this.arg = void 0),
                A
              );
            },
          }),
          e
        );
      }
      function j(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
        return r;
      }
      function F(e, n, t, r, o, a, i) {
        try {
          var c = e[a](i),
            s = c.value;
        } catch (e) {
          return void t(e);
        }
        c.done ? n(s) : Promise.resolve(s).then(r, o);
      }
      function G(e) {
        return function () {
          var n = this,
            t = arguments;
          return new Promise(function (r, o) {
            var a = e.apply(n, t);
            function i(e) {
              F(a, r, o, i, c, 'next', e);
            }
            function c(e) {
              F(a, r, o, i, c, 'throw', e);
            }
            i(void 0);
          });
        };
      }
      var _ = (function () {
          var e = '7f1fbcd5b4f7fd4e0d1795060fcd8a3c',
            n = document.querySelector('.general-container');
          function t() {
            return (t = G(
              S().mark(function t(r) {
                var o, a, i;
                return S().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0),
                            (n.dataset.searching = 'true'),
                            (t.next = 4),
                            fetch(
                              'http://api.openweathermap.org/geo/1.0/direct?q='
                                .concat(r, ',&limit=1&appid=')
                                .concat(e),
                              { mode: 'cors' }
                            )
                          );
                        case 4:
                          return (o = t.sent), (t.next = 7), o.json();
                        case 7:
                          return (
                            (a = t.sent),
                            (i = [a[0].lat.toFixed(2), a[0].lon.toFixed(2)]),
                            k.displayLoader('Searching location, please wait.'),
                            t.abrupt('return', {
                              country: a[0].country,
                              cityName: a[0].name,
                              state: a[0].state,
                              latLon: i,
                            })
                          );
                        case 13:
                          (t.prev = 13),
                            (t.t0 = t.catch(0)),
                            k.displayLoader(t.t0.message, t.t0),
                            delete n.dataset.searching;
                        case 17:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 13]]
                );
              })
            )).apply(this, arguments);
          }
          function r() {
            return (r = G(
              S().mark(function n(t) {
                var r, o;
                return S().wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (n.prev = 0),
                            (n.next = 3),
                            fetch(
                              'https://api.openweathermap.org/data/2.5/onecall?lat='
                                .concat(t[0], '&lon=')
                                .concat(
                                  t[1],
                                  '&exclude=minutely&units=metric&appid='
                                )
                                .concat(e),
                              { mode: 'cors' }
                            )
                          );
                        case 3:
                          return (r = n.sent), (n.next = 6), r.json();
                        case 6:
                          return (o = n.sent), n.abrupt('return', o);
                        case 10:
                          (n.prev = 10),
                            (n.t0 = n.catch(0)),
                            k.displayLoader(n.t0.message, n.t0);
                        case 13:
                        case 'end':
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[0, 10]]
                );
              })
            )).apply(this, arguments);
          }
          return {
            regionNames: function (e) {
              return new Intl.DisplayNames([navigator.language], {
                type: 'region',
              }).of(e);
            },
            convertDateToLocale: function (e, n) {
              var t = new Date(1e3 * e);
              if (n) {
                var r = ''.concat(t.getHours()),
                  o = '0'.concat(t.getMinutes()),
                  a = r >= 12 ? 'pm' : 'am';
                return ''.concat(
                  r < 10
                    ? '0'.concat(r, ':').concat(o, ' ').concat(a)
                    : ''.concat(r, ':').concat(o, ' ').concat(a)
                );
              }
              return t.toLocaleDateString(navigator.language, {
                weekday: 'long',
                month: 'long',
                day: 'numeric',
              });
            },
            fetchData: function (e) {
              return r.apply(this, arguments);
            },
            getLocation: function (e) {
              return t.apply(this, arguments);
            },
            destructureObject: function (e, n) {
              return Object.fromEntries(
                ((t = n),
                (function (e) {
                  if (Array.isArray(e)) return j(e);
                })(t) ||
                  (function (e) {
                    if (
                      ('undefined' != typeof Symbol &&
                        null != e[Symbol.iterator]) ||
                      null != e['@@iterator']
                    )
                      return Array.from(e);
                  })(t) ||
                  (function (e, n) {
                    if (e) {
                      if ('string' == typeof e) return j(e, n);
                      var t = Object.prototype.toString.call(e).slice(8, -1);
                      return (
                        'Object' === t &&
                          e.constructor &&
                          (t = e.constructor.name),
                        'Map' === t || 'Set' === t
                          ? Array.from(e)
                          : 'Arguments' === t ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                          ? j(e, n)
                          : void 0
                      );
                    }
                  })(t) ||
                  (function () {
                    throw new TypeError(
                      'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                    );
                  })()).map(function (n) {
                  return [n, Math.round(e[n])];
                })
              );
              var t;
            },
          };
        })(),
        O = function (e) {
          k.clearContent(),
            k.createContainers(!0),
            (function (e) {
              var n = document.querySelector('.cards'),
                t = [],
                r = k.createElement(
                  'h3',
                  'six-days-details',
                  '',
                  'Next six days'
                );
              n.insertAdjacentElement('beforebegin', r);
              for (
                var o = function (n) {
                    var r = k.createElement('div', 'six-days-card'),
                      o = k.createElement('div', 'upper-container'),
                      a = k.createElement('div', 'temperature'),
                      i = k.createElement(
                        'p',
                        'max-temp',
                        '',
                        ''.concat(Math.round(e[n].temp.max), ' °C')
                      ),
                      c = k.createElement(
                        'p',
                        'min-temp',
                        '',
                        ''.concat(Math.round(e[n].temp.min), ' °C')
                      ),
                      s = k.createElement(
                        'p',
                        'card-date',
                        '',
                        ''.concat(_.convertDateToLocale(e[n].dt))
                      ),
                      d = k.createElement('img', 'six-days-icon');
                    (d.alt = ''.concat(e[n].weather[0].description)),
                      (d.src = 'http://openweathermap.org/img/wn/'.concat(
                        e[n].weather[0].icon,
                        '@2x.png'
                      ));
                    var A = k.createElement(
                      'span',
                      'material-symbols-outlined',
                      '',
                      'expand_circle_down'
                    );
                    (A.title = 'Click for more information'),
                      A.classList.add('display-more');
                    var l = k.createElement('div', 'six-days-info'),
                      u = k.updateMoreInformation(e[n], [
                        'humidity',
                        'uvi',
                        'wind_speed',
                      ]);
                    r.append(o, l),
                      o.append(a, s, d, A),
                      a.append(i, c),
                      u.forEach(function (e) {
                        return l.append(e);
                      }),
                      t.push(r);
                  },
                  a = 1;
                a < e.length;
                a++
              )
                o(a);
              return t;
            })(e.daily).forEach(function (e) {
              return document.querySelector('.cards').append(e);
            });
        };
      function D(e) {
        return (
          (D =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          D(e)
        );
      }
      function q() {
        q = function () {
          return e;
        };
        var e = {},
          n = Object.prototype,
          t = n.hasOwnProperty,
          r = 'function' == typeof Symbol ? Symbol : {},
          o = r.iterator || '@@iterator',
          a = r.asyncIterator || '@@asyncIterator',
          i = r.toStringTag || '@@toStringTag';
        function c(e, n, t) {
          return (
            Object.defineProperty(e, n, {
              value: t,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[n]
          );
        }
        try {
          c({}, '');
        } catch (e) {
          c = function (e, n, t) {
            return (e[n] = t);
          };
        }
        function s(e, n, t, r) {
          var o = n && n.prototype instanceof l ? n : l,
            a = Object.create(o.prototype),
            i = new w(r || []);
          return (
            (a._invoke = (function (e, n, t) {
              var r = 'suspendedStart';
              return function (o, a) {
                if ('executing' === r)
                  throw new Error('Generator is already running');
                if ('completed' === r) {
                  if ('throw' === o) throw a;
                  return { value: void 0, done: !0 };
                }
                for (t.method = o, t.arg = a; ; ) {
                  var i = t.delegate;
                  if (i) {
                    var c = v(i, t);
                    if (c) {
                      if (c === A) continue;
                      return c;
                    }
                  }
                  if ('next' === t.method) t.sent = t._sent = t.arg;
                  else if ('throw' === t.method) {
                    if ('suspendedStart' === r)
                      throw ((r = 'completed'), t.arg);
                    t.dispatchException(t.arg);
                  } else 'return' === t.method && t.abrupt('return', t.arg);
                  r = 'executing';
                  var s = d(e, n, t);
                  if ('normal' === s.type) {
                    if (
                      ((r = t.done ? 'completed' : 'suspendedYield'),
                      s.arg === A)
                    )
                      continue;
                    return { value: s.arg, done: t.done };
                  }
                  'throw' === s.type &&
                    ((r = 'completed'), (t.method = 'throw'), (t.arg = s.arg));
                }
              };
            })(e, t, i)),
            a
          );
        }
        function d(e, n, t) {
          try {
            return { type: 'normal', arg: e.call(n, t) };
          } catch (e) {
            return { type: 'throw', arg: e };
          }
        }
        e.wrap = s;
        var A = {};
        function l() {}
        function u() {}
        function p() {}
        var m = {};
        c(m, o, function () {
          return this;
        });
        var f = Object.getPrototypeOf,
          h = f && f(f(E([])));
        h && h !== n && t.call(h, o) && (m = h);
        var y = (p.prototype = l.prototype = Object.create(m));
        function g(e) {
          ['next', 'throw', 'return'].forEach(function (n) {
            c(e, n, function (e) {
              return this._invoke(n, e);
            });
          });
        }
        function C(e, n) {
          function r(o, a, i, c) {
            var s = d(e[o], e, a);
            if ('throw' !== s.type) {
              var A = s.arg,
                l = A.value;
              return l && 'object' == D(l) && t.call(l, '__await')
                ? n.resolve(l.__await).then(
                    function (e) {
                      r('next', e, i, c);
                    },
                    function (e) {
                      r('throw', e, i, c);
                    }
                  )
                : n.resolve(l).then(
                    function (e) {
                      (A.value = e), i(A);
                    },
                    function (e) {
                      return r('throw', e, i, c);
                    }
                  );
            }
            c(s.arg);
          }
          var o;
          this._invoke = function (e, t) {
            function a() {
              return new n(function (n, o) {
                r(e, t, n, o);
              });
            }
            return (o = o ? o.then(a, a) : a());
          };
        }
        function v(e, n) {
          var t = e.iterator[n.method];
          if (void 0 === t) {
            if (((n.delegate = null), 'throw' === n.method)) {
              if (
                e.iterator.return &&
                ((n.method = 'return'),
                (n.arg = void 0),
                v(e, n),
                'throw' === n.method)
              )
                return A;
              (n.method = 'throw'),
                (n.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return A;
          }
          var r = d(t, e.iterator, n.arg);
          if ('throw' === r.type)
            return (
              (n.method = 'throw'), (n.arg = r.arg), (n.delegate = null), A
            );
          var o = r.arg;
          return o
            ? o.done
              ? ((n[e.resultName] = o.value),
                (n.next = e.nextLoc),
                'return' !== n.method &&
                  ((n.method = 'next'), (n.arg = void 0)),
                (n.delegate = null),
                A)
              : o
            : ((n.method = 'throw'),
              (n.arg = new TypeError('iterator result is not an object')),
              (n.delegate = null),
              A);
        }
        function x(e) {
          var n = { tryLoc: e[0] };
          1 in e && (n.catchLoc = e[1]),
            2 in e && ((n.finallyLoc = e[2]), (n.afterLoc = e[3])),
            this.tryEntries.push(n);
        }
        function b(e) {
          var n = e.completion || {};
          (n.type = 'normal'), delete n.arg, (e.completion = n);
        }
        function w(e) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            e.forEach(x, this),
            this.reset(!0);
        }
        function E(e) {
          if (e) {
            var n = e[o];
            if (n) return n.call(e);
            if ('function' == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var r = -1,
                a = function n() {
                  for (; ++r < e.length; )
                    if (t.call(e, r)) return (n.value = e[r]), (n.done = !1), n;
                  return (n.value = void 0), (n.done = !0), n;
                };
              return (a.next = a);
            }
          }
          return { next: B };
        }
        function B() {
          return { value: void 0, done: !0 };
        }
        return (
          (u.prototype = p),
          c(y, 'constructor', p),
          c(p, 'constructor', u),
          (u.displayName = c(p, i, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (e) {
            var n = 'function' == typeof e && e.constructor;
            return (
              !!n &&
              (n === u || 'GeneratorFunction' === (n.displayName || n.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, p)
                : ((e.__proto__ = p), c(e, i, 'GeneratorFunction')),
              (e.prototype = Object.create(y)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          g(C.prototype),
          c(C.prototype, a, function () {
            return this;
          }),
          (e.AsyncIterator = C),
          (e.async = function (n, t, r, o, a) {
            void 0 === a && (a = Promise);
            var i = new C(s(n, t, r, o), a);
            return e.isGeneratorFunction(t)
              ? i
              : i.next().then(function (e) {
                  return e.done ? e.value : i.next();
                });
          }),
          g(y),
          c(y, i, 'Generator'),
          c(y, o, function () {
            return this;
          }),
          c(y, 'toString', function () {
            return '[object Generator]';
          }),
          (e.keys = function (e) {
            var n = [];
            for (var t in e) n.push(t);
            return (
              n.reverse(),
              function t() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in e) return (t.value = r), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (e.values = E),
          (w.prototype = {
            constructor: w,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(b),
                !e)
              )
                for (var n in this)
                  't' === n.charAt(0) &&
                    t.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ('throw' === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var n = this;
              function r(t, r) {
                return (
                  (i.type = 'throw'),
                  (i.arg = e),
                  (n.next = t),
                  r && ((n.method = 'next'), (n.arg = void 0)),
                  !!r
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  i = a.completion;
                if ('root' === a.tryLoc) return r('end');
                if (a.tryLoc <= this.prev) {
                  var c = t.call(a, 'catchLoc'),
                    s = t.call(a, 'finallyLoc');
                  if (c && s) {
                    if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                  } else if (c) {
                    if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                  } else {
                    if (!s)
                      throw new Error('try statement without catch or finally');
                    if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, n) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var o = this.tryEntries[r];
                if (
                  o.tryLoc <= this.prev &&
                  t.call(o, 'finallyLoc') &&
                  this.prev < o.finallyLoc
                ) {
                  var a = o;
                  break;
                }
              }
              a &&
                ('break' === e || 'continue' === e) &&
                a.tryLoc <= n &&
                n <= a.finallyLoc &&
                (a = null);
              var i = a ? a.completion : {};
              return (
                (i.type = e),
                (i.arg = n),
                a
                  ? ((this.method = 'next'), (this.next = a.finallyLoc), A)
                  : this.complete(i)
              );
            },
            complete: function (e, n) {
              if ('throw' === e.type) throw e.arg;
              return (
                'break' === e.type || 'continue' === e.type
                  ? (this.next = e.arg)
                  : 'return' === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = 'return'),
                    (this.next = 'end'))
                  : 'normal' === e.type && n && (this.next = n),
                A
              );
            },
            finish: function (e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var t = this.tryEntries[n];
                if (t.finallyLoc === e)
                  return this.complete(t.completion, t.afterLoc), b(t), A;
              }
            },
            catch: function (e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var t = this.tryEntries[n];
                if (t.tryLoc === e) {
                  var r = t.completion;
                  if ('throw' === r.type) {
                    var o = r.arg;
                    b(t);
                  }
                  return o;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function (e, n, t) {
              return (
                (this.delegate = { iterator: E(e), resultName: n, nextLoc: t }),
                'next' === this.method && (this.arg = void 0),
                A
              );
            },
          }),
          e
        );
      }
      function I(e, n, t, r, o, a, i) {
        try {
          var c = e[a](i),
            s = c.value;
        } catch (e) {
          return void t(e);
        }
        c.done ? n(s) : Promise.resolve(s).then(r, o);
      }
      function N(e) {
        return function () {
          var n = this,
            t = arguments;
          return new Promise(function (r, o) {
            var a = e.apply(n, t);
            function i(e) {
              I(a, r, o, i, c, 'next', e);
            }
            function c(e) {
              I(a, r, o, i, c, 'throw', e);
            }
            i(void 0);
          });
        };
      }
      var Y,
        T,
        M,
        z = document.querySelector('#location-search'),
        P = document.querySelector('.search-container'),
        R = document.querySelector('#search-icon'),
        $ = document.querySelector('.sections'),
        U = document.querySelector('#today-section'),
        W = document.querySelector('.general-container');
      function J(e) {
        return Q.apply(this, arguments);
      }
      function Q() {
        return (Q = N(
          q().mark(function e(n) {
            return q().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      n.preventDefault(),
                      k.toggleActiveSection(U),
                      (e.next = 4),
                      _.getLocation(z.value)
                    );
                  case 4:
                    return (Y = e.sent), (e.next = 7), _.fetchData(Y.latLon);
                  case 7:
                    (T = e.sent),
                      console.log(T),
                      (z.value = ''),
                      k.todaySection(T, Y.cityName, Y.country);
                  case 11:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      ((M = N(
        q().mark(function e() {
          return q().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (e.next = 2), _.getLocation('Roma');
                case 2:
                  return (Y = e.sent), (e.next = 5), _.fetchData(Y.latLon);
                case 5:
                  (T = e.sent), k.todaySection(T, Y.cityName, Y.country);
                case 7:
                case 'end':
                  return e.stop();
              }
          }, e);
        })
      )),
      function () {
        return M.apply(this, arguments);
      })(),
        $.addEventListener(
          'click',
          (function () {
            var e = N(
              q().mark(function e(n) {
                return q().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        k.toggleActiveSection(n.target),
                          (e.t0 = n.target.id),
                          (e.next =
                            'today-section' === e.t0
                              ? 4
                              : 'tomorrow-section' === e.t0
                              ? 6
                              : 'six-days-section' === e.t0
                              ? 8
                              : 10);
                        break;
                      case 4:
                        return (
                          k.todaySection(T, Y.cityName, Y.country),
                          e.abrupt('break', 10)
                        );
                      case 6:
                        return (
                          k.tomorrowSection(T, Y.cityName, Y.country),
                          e.abrupt('break', 10)
                        );
                      case 8:
                        return O(T), e.abrupt('break', 10);
                      case 10:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (n) {
              return e.apply(this, arguments);
            };
          })()
        ),
        P.addEventListener('submit', function (e) {
          e.preventDefault(),
            W.dataset.searching || '' == z.value.trim() || J(e);
        }),
        R.addEventListener('click', function (e) {
          W.dataset.searching || '' == z.value.trim() || J(e);
        }),
        W.addEventListener('click', function (e) {
          e.stopPropagation(),
            e.target.classList.contains('display-more') && k.displayCardInfo(e);
        });
    })();
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNMEosUUFDM0RMLEVBQWVsTixFQUVsQixJQUVEK00sRUFBV08saUJBQWlCLFNBQVMsU0FBQ3ROLEdBQy9CaU4sRUFBaUIzRSxRQUFRQyxXQUF5QyxJQUE1QnNFLEVBQVloSixNQUFNMEosUUFDM0RMLEVBQWVsTixFQUVsQixJQUVEaU4sRUFBaUJLLGlCQUFpQixTQUFTLFNBQUN0TixHQUMxQ0EsRUFBRXdOLGtCQUNFeE4sRUFBRVIsT0FBT2tJLFVBQVVVLFNBQVMsaUJBQzlCaEYsRUFBSytGLGdCQUFnQm5KLEVBRXhCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzL3N0eWxlLnNjc3M/ZTVkOCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9qcy92aWV3LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2pzL21vZGVsLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2pzL3NpeC1kYXlzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaGVhZGVye2Rpc3BsYXk6Z3JpZDtnYXA6LjVyZW07cGFkZGluZzoxLjVyZW0gMXJlbTtib3gtc2hhZG93OjAgNHB4IDEycHggMnB4IHJnYmEoMCwwLDAsLjU0OTAxOTYwNzgpO2JhY2tncm91bmQtY29sb3I6cmdiYSgxNTgsMTg1LDIzNiwuNil9aGVhZGVyIC5zZWFyY2gtY29udGFpbmVye2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjthbGlnbi1pdGVtczpjZW50ZXJ9aGVhZGVyIC5zZWFyY2gtY29udGFpbmVyIC5zZWFyY2gtaW5wdXR7d2lkdGg6MTAwJTttYXJnaW4tcmlnaHQ6MnJlbTtwYWRkaW5nOi44cmVtIC4zcmVtO2JvcmRlci1yYWRpdXM6MTBweDtib3JkZXI6MXB4IHNvbGlkIHJnYmEoMCwwLDAsMCk7b3V0bGluZTpzb2xpZCAxcHggIzk0YjFlNn1oZWFkZXIgLnNlYXJjaC1jb250YWluZXIgLnNlYXJjaC1pbnB1dDpmb2N1cyxoZWFkZXIgLnNlYXJjaC1jb250YWluZXIgLnNlYXJjaC1pbnB1dDphY3RpdmV7b3V0bGluZToycHggc29saWQgIzZhOTBkNn1oZWFkZXIgLnNlYXJjaC1jb250YWluZXIgLnNlYXJjaC1idG57YWxsOnVuc2V0O2Rpc3BsYXk6Z3JpZDthbGlnbi1jb250ZW50OmNlbnRlcjtwYWRkaW5nOi44cmVtO2JvcmRlci1yYWRpdXM6MTBweDttYXJnaW4tcmlnaHQ6MXJlbTtvdXRsaW5lOnNvbGlkIDFweCAjOTRiMWU2O2JhY2tncm91bmQtY29sb3I6IzdjYTBlMn1oZWFkZXIgLnNlYXJjaC1jb250YWluZXIgLnNlYXJjaC1idG46aG92ZXJ7Y3Vyc29yOnBvaW50ZXI7YmFja2dyb3VuZC1jb2xvcjojMzU2NGJkfWhlYWRlciAuc2VhcmNoLWNvbnRhaW5lciAuc2VhcmNoLWJ0bjpmb2N1cyxoZWFkZXIgLnNlYXJjaC1jb250YWluZXIgLnNlYXJjaC1idG46YWN0aXZle291dGxpbmU6M3B4IHNvbGlkICMzNTY0YmR9aGVhZGVyIC5zZWN0aW9uc3tkaXNwbGF5OmZsZXg7cGFkZGluZzowIDJyZW07bWFyZ2luLXRvcDoxcmVtO2p1c3RpZnktY29udGVudDpzcGFjZS1hcm91bmQ7YWxpZ24taXRlbXM6Y2VudGVyO3RleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmU7dGV4dC11bmRlcmxpbmUtb2Zmc2V0OjRweH1oZWFkZXIgLnNlY3Rpb25zIC5zZWN0aW9uLW5hbWU6aG92ZXJ7Y3Vyc29yOnBvaW50ZXJ9aGVhZGVyIC5zZWN0aW9ucyAuc2VjdGlvbi1uYW1le3BhZGRpbmc6LjRyZW0gMXJlbX1oZWFkZXIgLnNlY3Rpb25zIC5hY3RpdmUtc2VjdGlvbntiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMTI0LDE2MCwyMjYsLjcxMzcyNTQ5MDIpO3BhZGRpbmc6LjRyZW0gMXJlbTtib3JkZXItcmFkaXVzOjhweH1AbWVkaWEobWluLXdpZHRoOiAxMjgwcHgpe2hlYWRlcntwYWRkaW5nOjEuNXJlbSA4cmVtfWhlYWRlciAuc2VhcmNoLWNvbnRhaW5lciAuc2VhcmNoLWlucHV0e3BhZGRpbmctbGVmdDoxcmVtfWhlYWRlciAuc2VhcmNoLWNvbnRhaW5lciAuc2VhcmNoLWJ0bnttYXJnaW4tcmlnaHQ6MH19LnRvcC1jb250YWluZXJ7ZGlzcGxheTpmbGV4O21hcmdpbjozcmVtIDNyZW0gMS41cmVtIDNyZW07anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47YWxpZ24taXRlbXM6ZmxleC1lbmR9LnRvcC1jb250YWluZXIgLmxvY2F0aW9uLWluZm97ZGlzcGxheTpncmlkO2dhcDouM3JlbX0udG9wLWNvbnRhaW5lciAubG9jYXRpb24taW5mbyAjZGF0ZXtmb250LXNpemU6LjlyZW19LnRvcC1jb250YWluZXIgLmxvY2F0aW9uLWluZm8gI2NpdHktbG9jYXRpb257Zm9udC1zaXplOjEuNXJlbX0udG9wLWNvbnRhaW5lciAubG9jYXRpb24taW5mbyAjY291bnRyeS1sb2NhdGlvbntmb250LXNpemU6MS4zcmVtfS5jdXJyZW50LWZlZWxzLXRlbXB7ZGlzcGxheTpmbGV4O3Bvc2l0aW9uOnJlbGF0aXZlO2p1c3RpZnktY29udGVudDpzcGFjZS1hcm91bmR9LmN1cnJlbnQtZmVlbHMtdGVtcCAudGVtcC1jb250YWluZXJ7ZGlzcGxheTpncmlkO2dhcDouNHJlbTtqdXN0aWZ5LWl0ZW1zOmNlbnRlcjthbGlnbi1zZWxmOmZsZXgtZW5kfS50b2RheS1kZXRhaWxze2Rpc3BsYXk6Z3JpZH0udG9kYXktZGV0YWlscyAubW9yZS1pbmZvcm1hdGlvbntkaXNwbGF5OmZsZXg7bWFyZ2luOi4ycmVtIDJyZW07anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW59LmRhaWx5LWRldGFpbHMgLnRpdGxlLWRldGFpbHN7Zm9udC1zaXplOjEuNHJlbTttYXJnaW4tYm90dG9tOjNyZW19LmRhaWx5LWRldGFpbHMgLmNhcmRze2Rpc3BsYXk6Z3JpZDttYXJnaW4tdG9wOjEuNXJlbTtnYXA6MXJlbX0uZGFpbHktZGV0YWlscyAuY2FyZHMgLmNhcmQtaG91cmx5e2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtwYWRkaW5nOi40cmVtIDEuNnJlbSAxLjRyZW0gMS42cmVtO2JhY2tncm91bmQtY29sb3I6I2JiY2VmMTtib3JkZXItcmFkaXVzOjEwcHg7Ym94LXNoYWRvdzowIDRweCAxMHB4IC0ycHggcmdiYSgwLDAsMCwuNTQ5MDE5NjA3OCl9LmRhaWx5LWRldGFpbHMgLmNhcmRzIC5jYXJkLWhvdXJseSAuZGV0YWlsLWhvdXJze3BhZGRpbmctdG9wOjFyZW19LmRhaWx5LWRldGFpbHMgLmNhcmRzIC5jYXJkLWhvdXJseSAuZGV0YWlsLWhvdXJzIC5ob3Vye2ZvbnQtc2l6ZToxLjJyZW19LmRhaWx5LWRldGFpbHMgLmNhcmRzIC5jYXJkLWhvdXJseSAuZGV0YWlsLWhvdXJzIC5kZXRhaWwtY29udGFpbmVye2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtnYXA6MnJlbTtwYWRkaW5nLXRvcDoxcmVtfS5kYWlseS1kZXRhaWxzIC5jYXJkcyAuY2FyZC1ob3VybHkgLndlYXRoZXItaWNvbntkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2p1c3RpZnktY29udGVudDpjZW50ZXJ9LmRhaWx5LWRldGFpbHMgLmNhcmRzIC5jYXJkLWhvdXJseSAud2VhdGhlci1pY29uIC5ob3VybHktaWNvbntkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcjt3aWR0aDoxMDBweH0uZGFpbHktZGV0YWlscyAuY2FyZHMgLmNhcmQtaG91cmx5IC53ZWF0aGVyLWljb24gLmljb24tZGVzY3JpcHRpb257dGV4dC10cmFuc2Zvcm06Y2FwaXRhbGl6ZTtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcn1AbWVkaWEobWluLXdpZHRoOiA2NDBweCl7LmRhaWx5LWRldGFpbHMgLmNhcmRzIC5jYXJkLWhvdXJseXtwYWRkaW5nOjFyZW0gNHJlbSAycmVtIDRyZW19fUBtZWRpYShtaW4td2lkdGg6IDEyODBweCl7LmRhaWx5LWRldGFpbHMgLmNhcmRze2Rpc3BsYXk6Z3JpZDtncmlkOmF1dG8vcmVwZWF0KDIsIDFmcik7Z2FwOjJyZW19fWZvb3RlcntkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7cGFkZGluZzoxcmVtIDAgLjhyZW0gMDttYXJnaW4tdG9wOjFyZW07YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDE1OCwxODUsMjM2LC42KTtib3gtc2hhZG93OjAgLTJweCAxMnB4IC0ycHggcmdiYSgwLDAsMCwuNTQ5MDE5NjA3OCl9Zm9vdGVyIC5naXRodWItaWNvbnt3aWR0aDozMnB4fWZvb3RlciAubGluay1wcm9maWxle3BhZGRpbmc6LjNyZW0gLjJyZW19LmdlbmVyYWwtY29udGFpbmVyPi5zaXgtZGF5cy1kZXRhaWxze21hcmdpbi10b3A6MnJlbTtmb250LXNpemU6MS40cmVtfS5nZW5lcmFsLWNvbnRhaW5lciAuY2FyZHM+LnNpeC1kYXlzLWNhcmR7ZGlzcGxheTpncmlkfS5nZW5lcmFsLWNvbnRhaW5lciAuY2FyZHM+LnNpeC1kYXlzLWNhcmQgLnVwcGVyLWNvbnRhaW5lcntkaXNwbGF5OmZsZXg7YmFja2dyb3VuZC1jb2xvcjojYTJjOWY3O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO2FsaWduLWl0ZW1zOmNlbnRlcjtnYXA6LjdyZW07Ym9yZGVyLXJhZGl1czoxMHB4O3BhZGRpbmc6MCAxcmVtO3otaW5kZXg6OTk7Ym94LXNoYWRvdzowIDRweCAxMHB4IC0ycHggcmdiYSgwLDAsMCwuNTQ5MDE5NjA3OCk7bWFyZ2luLWJvdHRvbToxcmVtfS5nZW5lcmFsLWNvbnRhaW5lciAuY2FyZHM+LnNpeC1kYXlzLWNhcmQgLnVwcGVyLWNvbnRhaW5lciAudGVtcGVyYXR1cmV7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtnYXA6LjNyZW19LmdlbmVyYWwtY29udGFpbmVyIC5jYXJkcz4uc2l4LWRheXMtY2FyZCAudXBwZXItY29udGFpbmVyIC5jYXJkLWRhdGV7Zm9udC1zaXplOi44cmVtO3dpZHRoOmZpdC1jb250ZW50O3doaXRlLXNwYWNlOm5vd3JhcH0uZ2VuZXJhbC1jb250YWluZXIgLmNhcmRzPi5zaXgtZGF5cy1jYXJkIC51cHBlci1jb250YWluZXIgLm1heC10ZW1we2ZvbnQtc2l6ZToxcmVtfS5nZW5lcmFsLWNvbnRhaW5lciAuY2FyZHM+LnNpeC1kYXlzLWNhcmQgLnVwcGVyLWNvbnRhaW5lciAubWluLXRlbXB7Zm9udC1zaXplOi44cmVtfS5nZW5lcmFsLWNvbnRhaW5lciAuY2FyZHM+LnNpeC1kYXlzLWNhcmQgLnVwcGVyLWNvbnRhaW5lciAuc2l4LWRheXMtaWNvbntoZWlnaHQ6NDhweDt3aWR0aDo0OHB4fS5nZW5lcmFsLWNvbnRhaW5lciAuY2FyZHM+LnNpeC1kYXlzLWNhcmQgLnVwcGVyLWNvbnRhaW5lciBzcGFue2N1cnNvcjpwb2ludGVyfS5nZW5lcmFsLWNvbnRhaW5lciAuY2FyZHM+LnNpeC1kYXlzLWNhcmQgLnNpeC1kYXlzLWluZm97ZGlzcGxheTpub25lO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtnYXA6LjRyZW07YmFja2dyb3VuZC1jb2xvcjojYTdjNmU5O2JvcmRlci1yYWRpdXM6MTBweDtwb3NpdGlvbjpyZWxhdGl2ZTt0b3A6LTAuN3JlbTttYXJnaW46MCAxcmVtIDAgMXJlbTtwYWRkaW5nOjFyZW0gLjVyZW0gLjVyZW0gLjVyZW19LmdlbmVyYWwtY29udGFpbmVyIC5jYXJkcz4uc2l4LWRheXMtY2FyZCAuc2l4LWRheXMtaW5mbyAubW9yZS1pbmZvcm1hdGlvbntkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW59LmdlbmVyYWwtY29udGFpbmVyIC5jYXJkcz4uc2l4LWRheXMtY2FyZCAuZGlzcGxheWVkLWNhcmR7ZGlzcGxheTpmbGV4O21hcmdpbi1ib3R0b206MH1AbWVkaWEobWluLXdpZHRoOiA2NDBweCl7LmdlbmVyYWwtY29udGFpbmVyIC5jYXJkcz4uc2l4LWRheXMtY2FyZCAudXBwZXItY29udGFpbmVye2hlaWdodDo0cmVtfS51cHBlci1jb250YWluZXIgLmdlbmVyYWwtY29udGFpbmVyIC5jYXJkcz4uc2l4LWRheXMtY2FyZCAuZGlzcGxheWVkLWNhcmR7aGVpZ2h0OjRyZW19LmdlbmVyYWwtY29udGFpbmVyIC5jYXJkcz4uc2l4LWRheXMtY2FyZCAuc2l4LWRheXMtaW5mb3twYWRkaW5nOjIuNXJlbSAxLjVyZW0gMnJlbSAxLjVyZW07Z2FwOjFyZW19LmdlbmVyYWwtY29udGFpbmVyIC5jYXJkcz4uc2l4LWRheXMtY2FyZCAuZGlzcGxheWVkLWNhcmR7cGFkZGluZy1ib3R0b206MS4ycmVtO21hcmdpbi1ib3R0b206MDtwYWRkaW5nOjEuNnJlbSAxLjVyZW0gMXJlbSAxLjVyZW19fUBtZWRpYShtaW4td2lkdGg6IDEyODBweCl7LmdlbmVyYWwtY29udGFpbmVyIC5jYXJkcz4uc2l4LWRheXMtY2FyZCAudXBwZXItY29udGFpbmVye2hlaWdodDo0cmVtO21hcmdpbi1ib3R0b206MnJlbTtwYWRkaW5nOi41cmVtIDRyZW0gLjVyZW0gNHJlbX0udXBwZXItY29udGFpbmVyIC5nZW5lcmFsLWNvbnRhaW5lciAuY2FyZHM+LnNpeC1kYXlzLWNhcmQgLmRpc3BsYXllZC1jYXJke2hlaWdodDo0cmVtO21hcmdpbi1ib3R0b206MnJlbTtwYWRkaW5nOi41cmVtIDRyZW0gLjVyZW0gNHJlbX0uZ2VuZXJhbC1jb250YWluZXIgLmNhcmRzPi5zaXgtZGF5cy1jYXJkIC5zaXgtZGF5cy1pbmZve3BhZGRpbmc6Mi41cmVtIDEuNXJlbSAycmVtIDEuNXJlbTtnYXA6MXJlbX0uZ2VuZXJhbC1jb250YWluZXIgLmNhcmRzPi5zaXgtZGF5cy1jYXJkIC5kaXNwbGF5ZWQtY2FyZHtwYWRkaW5nLWJvdHRvbToxLjJyZW07bWFyZ2luLWJvdHRvbTowO3BhZGRpbmc6MS42cmVtIDIuNXJlbSAxcmVtIDIuNXJlbX19KiwqOjpiZWZvcmUsKjo6YWZ0ZXJ7Ym94LXNpemluZzpib3JkZXItYm94fSp7bWFyZ2luOjA7cGFkZGluZzowfWh0bWwsYm9keXtoZWlnaHQ6MTAwJTtzY3JvbGwtYmVoYXZpb3I6c21vb3RofWJvZHl7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtsaW5lLWhlaWdodDoxLjU7Zm9udC1mYW1pbHk6XFxcIlJvYm90byBGbGV4XFxcIixzYW5zLXNlcmlmO2JhY2tncm91bmQtY29sb3I6I2Q1ZGNlNH1pbWcsc3Zne2Rpc3BsYXk6YmxvY2s7bWF4LXdpZHRoOjEwMCV9aW5wdXQsYnV0dG9uLHRleHRhcmVhLHNlbGVjdHtmb250OmluaGVyaXR9cCxoMSxoMixoMyxoNCxoNSxoNntvdmVyZmxvdy13cmFwOmJyZWFrLXdvcmR9I3Jvb3QsI19fbmV4dHtpc29sYXRpb246aXNvbGF0ZX0uZ2VuZXJhbC1jb250YWluZXJ7ZGlzcGxheTpncmlkO2dhcDozcmVtO21hcmdpbjoxcmVtO21pbi1oZWlnaHQ6YXV0b30ud2VhdGhlci1kZXRhaWxze2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47YWxpZ24taXRlbXM6Y2VudGVyfS53ZWF0aGVyLWRldGFpbHMgI3dlYXRoZXItaWNvbnt3aWR0aDoxMjBweH0ud2VhdGhlci1kZXRhaWxzIC5pY29uLWRlc2NyaXB0aW9ue3RleHQtdHJhbnNmb3JtOmNhcGl0YWxpemV9LmJhY2stdG8tdG9we21hcmdpbjoxcmVtIGF1dG99LmxvYWQtY29udGFpbmVye21pbi1oZWlnaHQ6NjB2aDtwYWRkaW5nOjRyZW0gMH1Aa2V5ZnJhbWVzIHNwaW57MCV7dHJhbnNmb3JtOnJvdGF0ZSgwZGVnKX0xMDAle3RyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKX19QG1lZGlhKG1pbi13aWR0aDogMTI4MHB4KXsuZ2VuZXJhbC1jb250YWluZXJ7bWFyZ2luOjRyZW0gOHJlbSA0cmVtIDhyZW07Z2FwOjVyZW19fUBtZWRpYShtaW4td2lkdGg6IDE1MzZweCl7LmdlbmVyYWwtY29udGFpbmVye21hcmdpbjo0cmVtIDEwcmVtIDRyZW0gMTByZW07Z2FwOjVyZW19fVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbW9kdWxlcy9IZWFkZXIubW9kdWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbW9kdWxlcy9Ub3BDb250YWluZXIubW9kdWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbW9kdWxlcy9DdXJyZW50RmVlbHMubW9kdWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbW9kdWxlcy9Ub2RheURldGFpbHMubW9kdWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbW9kdWxlcy9Ib3VybHlEZXRhaWxzLm1vZHVsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL21vZHVsZXMvRm9vdGVyLm1vZHVsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL21vZHVsZXMvU2l4RGF5cy5tb2R1bGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUtBLE9BQ0UsWUFBQSxDQUNBLFNBQUEsQ0FDQSxtQkFBQSxDQUNBLGlEQUFBLENBQ0EscUNBVlEsQ0FZUix5QkFDRSxZQUFBLENBQ0EsNkJBQUEsQ0FDQSxrQkFBQSxDQUVBLHVDQUNFLFVBQUEsQ0FDQSxpQkFBQSxDQUNBLG1CQUFBLENBQ0Esa0JBQUEsQ0FDQSw4QkFBQSxDQUNBLHlCQXRCSSxDQXdCSiwyRkFFRSx5QkF6Qk8sQ0E2QlgscUNBQ0UsU0FBQSxDQUNBLFlBQUEsQ0FDQSxvQkFBQSxDQUNBLGFBQUEsQ0FDQSxrQkFBQSxDQUNBLGlCQUFBLENBQ0EseUJBckNJLENBc0NKLHdCQUFBLENBRUEsMkNBQ0UsY0FBQSxDQUNBLHdCQUFBLENBR0YsdUZBRUUseUJBN0NRLENBa0RkLGlCQUNFLFlBQUEsQ0FDQSxjQUFBLENBQ0EsZUFBQSxDQUNBLDRCQUFBLENBQ0Esa0JBQUEsQ0FDQSx5QkFBQSxDQUNBLHlCQUFBLENBRUEscUNBQ0UsY0FBQSxDQUdGLCtCQUNFLGtCQUFBLENBR0YsaUNBQ0UsOENBQUEsQ0FDQSxrQkFBQSxDQUNBLGlCQUFBLENBS04sMEJBQ0UsT0FDRSxtQkFBQSxDQUdFLHVDQUNFLGlCQUFBLENBR0YscUNBQ0UsY0FBQSxDQUFBLENDeEZSLGVBQ0UsWUFBQSxDQUNBLDRCQUFBLENBQ0EsNkJBQUEsQ0FDQSxvQkFBQSxDQUVBLDhCQUNFLFlBQUEsQ0FDQSxTQUFBLENBRUEsb0NBQ0UsZUFBQSxDQUdGLDZDQUNFLGdCQUFBLENBR0YsZ0RBQ0UsZ0JBQUEsQ0NuQk4sb0JBQ0UsWUFBQSxDQUNBLGlCQUFBLENBQ0EsNEJBQUEsQ0FFQSxvQ0FDRSxZQUFBLENBQ0EsU0FBQSxDQUNBLG9CQUFBLENBQ0EsbUJBQUEsQ0NUSixlQUNFLFlBQUEsQ0FFQSxpQ0FDRSxZ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IDAuNik7XFxuJG91dGxpbmU6IHNvbGlkIDFweCAjOTRiMWU2O1xcbiRvdXRsaW5lRm9jdXM6IDJweCBzb2xpZCAjNmE5MGQ2O1xcbiRvdXRsaW5lQWN0aXZlOiAzcHggc29saWQgIzM1NjRiZDtcXG5cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMC41cmVtO1xcbiAgcGFkZGluZzogMS41cmVtIDFyZW07XFxuICBib3gtc2hhZG93OiAwIDRweCAxMnB4IDJweCAjMDAwMDAwOGM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmdDb2xvcjtcXG5cXG4gIC5zZWFyY2gtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICAuc2VhcmNoLWlucHV0IHtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XFxuICAgICAgcGFkZGluZzogMC44cmVtIDAuM3JlbTtcXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICAgIG91dGxpbmU6ICRvdXRsaW5lO1xcblxcbiAgICAgICY6Zm9jdXMsXFxuICAgICAgJjphY3RpdmUge1xcbiAgICAgICAgb3V0bGluZTogJG91dGxpbmVGb2N1cztcXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgLnNlYXJjaC1idG4ge1xcbiAgICAgIGFsbDogdW5zZXQ7XFxuICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgcGFkZGluZzogMC44cmVtO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbiAgICAgIG91dGxpbmU6ICRvdXRsaW5lO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3Y2EwZTI7XFxuXFxuICAgICAgJjpob3ZlciB7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzU2NGJkO1xcbiAgICAgIH1cXG5cXG4gICAgICAmOmZvY3VzLFxcbiAgICAgICY6YWN0aXZlIHtcXG4gICAgICAgIG91dGxpbmU6ICRvdXRsaW5lQWN0aXZlO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcblxcbiAgLnNlY3Rpb25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogMCAycmVtO1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIHRleHQtdW5kZXJsaW5lLW9mZnNldDogNHB4O1xcblxcbiAgICAuc2VjdGlvbi1uYW1lOmhvdmVyIHtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLnNlY3Rpb24tbmFtZSB7XFxuICAgICAgcGFkZGluZzogMC40cmVtIDFyZW07XFxuICAgIH1cXG5cXG4gICAgLmFjdGl2ZS1zZWN0aW9uIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2NhMGUyYjY7XFxuICAgICAgcGFkZGluZzogMC40cmVtIDFyZW07XFxuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICB9XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiAxMjgwcHgpIHtcXG4gIGhlYWRlciB7XFxuICAgIHBhZGRpbmc6IDEuNXJlbSA4cmVtO1xcblxcbiAgICAuc2VhcmNoLWNvbnRhaW5lciB7XFxuICAgICAgLnNlYXJjaC1pbnB1dCB7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICAgICAgfVxcblxcbiAgICAgIC5zZWFyY2gtYnRuIHtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXCIsXCIudG9wLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luOiAzcmVtIDNyZW0gMS41cmVtIDNyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuXFxuICAubG9jYXRpb24taW5mbyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMC4zcmVtO1xcblxcbiAgICAjZGF0ZSB7XFxuICAgICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgIH1cXG5cXG4gICAgI2NpdHktbG9jYXRpb24ge1xcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICB9XFxuXFxuICAgICNjb3VudHJ5LWxvY2F0aW9uIHtcXG4gICAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cIixcIi5jdXJyZW50LWZlZWxzLXRlbXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcblxcbiAgLnRlbXAtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAwLjRyZW07XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICB9XFxufVxcblwiLFwiLnRvZGF5LWRldGFpbHMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG5cXG4gIC5tb3JlLWluZm9ybWF0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luOiAwLjJyZW0gMnJlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgfVxcbn1cXG5cIixcIi5kYWlseS1kZXRhaWxzIHtcXG4gIC50aXRsZS1kZXRhaWxzIHtcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XFxuICB9XFxuXFxuICAuY2FyZHMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07XFxuICAgIGdhcDogMXJlbTtcXG5cXG4gICAgLmNhcmQtaG91cmx5IHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICBwYWRkaW5nOiAwLjRyZW0gMS42cmVtIDEuNHJlbSAxLjZyZW07XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2JiY2VmMTtcXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDEwcHggLTJweCAjMDAwMDAwOGM7XFxuXFxuICAgICAgLmRldGFpbC1ob3VycyB7XFxuICAgICAgICBwYWRkaW5nLXRvcDogMXJlbTtcXG4gICAgICAgIC5ob3VyIHtcXG4gICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuZGV0YWlsLWNvbnRhaW5lciB7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgICAgZ2FwOiAycmVtO1xcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMXJlbTtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuXFxuICAgICAgLndlYXRoZXItaWNvbiB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgICAgICAgLmhvdXJseS1pY29uIHtcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgIHdpZHRoOiAxMDBweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5pY29uLWRlc2NyaXB0aW9uIHtcXG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNjQwcHgpIHtcXG4gIC5kYWlseS1kZXRhaWxzIHtcXG4gICAgLmNhcmRzIHtcXG4gICAgICAuY2FyZC1ob3VybHkge1xcbiAgICAgICAgcGFkZGluZzogMXJlbSA0cmVtIDJyZW0gNHJlbTtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDEyODBweCkge1xcbiAgLmRhaWx5LWRldGFpbHMge1xcbiAgICAuY2FyZHMge1xcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgZ3JpZDogYXV0byAvIHJlcGVhdCgyLCAxZnIpO1xcbiAgICAgIGdhcDogMnJlbTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cIixcImZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMXJlbSAwIDAuOHJlbSAwO1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTU4LCAxODUsIDIzNiwgMC42KTtcXG4gIGJveC1zaGFkb3c6IDAgLTJweCAxMnB4IC0ycHggIzAwMDAwMDhjO1xcblxcbiAgLmdpdGh1Yi1pY29uIHtcXG4gICAgd2lkdGg6IDMycHg7XFxuICB9XFxuXFxuICAubGluay1wcm9maWxlIHtcXG4gICAgcGFkZGluZzogMC4zcmVtIDAuMnJlbTtcXG4gIH1cXG59XFxuXCIsXCIuZ2VuZXJhbC1jb250YWluZXIgPiAuc2l4LWRheXMtZGV0YWlscyB7XFxuICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxufVxcblxcbi5nZW5lcmFsLWNvbnRhaW5lciB7XFxuICAuY2FyZHMgPiAuc2l4LWRheXMtY2FyZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuXFxuICAgIC51cHBlci1jb250YWluZXIge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2EyYzlmNztcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBnYXA6IDAuN3JlbTtcXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgIHBhZGRpbmc6IDAgMXJlbTtcXG4gICAgICB6LWluZGV4OiA5OTtcXG4gICAgICBib3gtc2hhZG93OiAwIDRweCAxMHB4IC0ycHggIzAwMDAwMDhjO1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuXFxuICAgICAgLnRlbXBlcmF0dXJlIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZ2FwOiAwLjNyZW07XFxuICAgICAgfVxcblxcbiAgICAgIC5jYXJkLWRhdGUge1xcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICAgIH1cXG5cXG4gICAgICAubWF4LXRlbXAge1xcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICAgIH1cXG5cXG4gICAgICAubWluLXRlbXAge1xcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgICAgfVxcblxcbiAgICAgIC5zaXgtZGF5cy1pY29uIHtcXG4gICAgICAgIGhlaWdodDogNDhweDtcXG4gICAgICAgIHdpZHRoOiA0OHB4O1xcbiAgICAgIH1cXG5cXG4gICAgICBzcGFuIHtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgLnNpeC1kYXlzLWluZm8ge1xcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICBnYXA6IDAuNHJlbTtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTdjNmU5O1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIHRvcDogLTAuN3JlbTtcXG4gICAgICBtYXJnaW46IDAgMXJlbSAwIDFyZW07XFxuICAgICAgcGFkZGluZzogMXJlbSAwLjVyZW0gMC41cmVtIDAuNXJlbTtcXG5cXG4gICAgICAubW9yZS1pbmZvcm1hdGlvbiB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICAuZGlzcGxheWVkLWNhcmQge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNjQwcHgpIHtcXG4gIC5nZW5lcmFsLWNvbnRhaW5lciB7XFxuICAgIC5jYXJkcyA+IC5zaXgtZGF5cy1jYXJkIHtcXG4gICAgICAudXBwZXItY29udGFpbmVyIHtcXG4gICAgICAgIGhlaWdodDogNHJlbTtcXG4gICAgICB9XFxuXFxuICAgICAgLnVwcGVyLWNvbnRhaW5lciAmIC5kaXNwbGF5ZWQtY2FyZCB7XFxuICAgICAgICBoZWlnaHQ6IDRyZW07XFxuICAgICAgfVxcblxcbiAgICAgIC5zaXgtZGF5cy1pbmZvIHtcXG4gICAgICAgIHBhZGRpbmc6IDIuNXJlbSAxLjVyZW0gMnJlbSAxLjVyZW07XFxuICAgICAgICBnYXA6IDFyZW07XFxuICAgICAgfVxcblxcbiAgICAgIC5kaXNwbGF5ZWQtY2FyZCB7XFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMS4ycmVtO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgICAgIHBhZGRpbmc6IDEuNnJlbSAxLjVyZW0gMXJlbSAxLjVyZW07XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiAxMjgwcHgpIHtcXG4gIC5nZW5lcmFsLWNvbnRhaW5lciB7XFxuICAgIC5jYXJkcyA+IC5zaXgtZGF5cy1jYXJkIHtcXG4gICAgICAudXBwZXItY29udGFpbmVyIHtcXG4gICAgICAgIGhlaWdodDogNHJlbTtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICAgICAgICBwYWRkaW5nOiAwLjVyZW0gNHJlbSAwLjVyZW0gNHJlbTtcXG4gICAgICB9XFxuXFxuICAgICAgLnVwcGVyLWNvbnRhaW5lciAmIC5kaXNwbGF5ZWQtY2FyZCB7XFxuICAgICAgICBoZWlnaHQ6IDRyZW07XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbiAgICAgICAgcGFkZGluZzogMC41cmVtIDRyZW0gMC41cmVtIDRyZW07XFxuICAgICAgfVxcblxcbiAgICAgIC5zaXgtZGF5cy1pbmZvIHtcXG4gICAgICAgIHBhZGRpbmc6IDIuNXJlbSAxLjVyZW0gMnJlbSAxLjVyZW07XFxuICAgICAgICBnYXA6IDFyZW07XFxuICAgICAgfVxcblxcbiAgICAgIC5kaXNwbGF5ZWQtY2FyZCB7XFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMS4ycmVtO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgICAgIHBhZGRpbmc6IDEuNnJlbSAyLjVyZW0gMXJlbSAyLjVyZW07XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblwiLFwiQGltcG9ydCAnbW9kdWxlcy9IZWFkZXIubW9kdWxlLnNjc3MnO1xcbkBpbXBvcnQgJ21vZHVsZXMvVG9wQ29udGFpbmVyLm1vZHVsZS5zY3NzJztcXG5AaW1wb3J0ICdtb2R1bGVzL0N1cnJlbnRGZWVscy5tb2R1bGUuc2Nzcyc7XFxuQGltcG9ydCAnbW9kdWxlcy9Ub2RheURldGFpbHMubW9kdWxlLnNjc3MnO1xcbkBpbXBvcnQgJ21vZHVsZXMvSG91cmx5RGV0YWlscy5tb2R1bGUuc2Nzcyc7XFxuQGltcG9ydCAnbW9kdWxlcy9Gb290ZXIubW9kdWxlLnNjc3MnO1xcbkBpbXBvcnQgJ21vZHVsZXMvU2l4RGF5cy5tb2R1bGUuc2Nzcyc7XFxuXFxuJGJhY2tncm91bmQ6ICNkNWRjZTQ7XFxuJGNhcmQtYmFja2dyb3VuZDogI2ZmZWVkZDtcXG4kY2FyZC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuXFxuLy8gISBSZXNldFxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIEZsZXgnLCBzYW5zLXNlcmlmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQ7XFxufVxcblxcbmltZyxcXG5zdmcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbmlucHV0LFxcbmJ1dHRvbixcXG50ZXh0YXJlYSxcXG5zZWxlY3Qge1xcbiAgZm9udDogaW5oZXJpdDtcXG59XFxuXFxucCxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNiB7XFxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbn1cXG5cXG4jcm9vdCxcXG4jX19uZXh0IHtcXG4gIGlzb2xhdGlvbjogaXNvbGF0ZTtcXG59XFxuXFxuLmdlbmVyYWwtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDNyZW07XFxuICBtYXJnaW46IDFyZW07XFxuICBtaW4taGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4ud2VhdGhlci1kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICN3ZWF0aGVyLWljb24ge1xcbiAgICB3aWR0aDogMTIwcHg7XFxuICB9XFxuXFxuICAuaWNvbi1kZXNjcmlwdGlvbiB7XFxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgfVxcbn1cXG5cXG4uYmFjay10by10b3Age1xcbiAgbWFyZ2luOiAxcmVtIGF1dG87XFxufVxcblxcbi5sb2FkLWNvbnRhaW5lciB7XFxuICBtaW4taGVpZ2h0OiA2MHZoO1xcbiAgcGFkZGluZzogNHJlbSAwO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNwaW4ge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogMTI4MHB4KSB7XFxuICAuZ2VuZXJhbC1jb250YWluZXIge1xcbiAgICBtYXJnaW46IDRyZW0gOHJlbSA0cmVtIDhyZW07XFxuICAgIGdhcDogNXJlbTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDE1MzZweCkge1xcbiAgLmdlbmVyYWwtY29udGFpbmVyIHtcXG4gICAgbWFyZ2luOiA0cmVtIDEwcmVtIDRyZW0gMTByZW07XFxuICAgIGdhcDogNXJlbTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0IHsgd2VhdGhlckluZm9ybWF0aW9uIH0gZnJvbSAnLi9tb2RlbCc7XG5cbmNvbnN0IFZpZXcgPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCBfZ2VuZXJhbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nZW5lcmFsLWNvbnRhaW5lcicpO1xuXG4gIC8qKlxuICAgKiBEZWxldGUgY29udGVudCBvZiAuZ2VuZXJhbC1jb250YWluZXJcbiAgICovXG4gIGNvbnN0IGNsZWFyQ29udGVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICBfZ2VuZXJhbENvbnRhaW5lci50ZXh0Q29udGVudCA9ICcnO1xuICB9O1xuXG4gIC8qKlxuICAgKiBVcGRhdGVzIGRpc3BsYXllZCBsb2NhdGlvbiBhbmQgZGF0ZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBTdHJpbmcgdG8gbW9kaWZ5XG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IFN0cmluZyB3aXRob3V0IHNwYWNlIGFuZCB1bmRlcnNjb3JlLlxuICAgKi9cbiAgY29uc3QgX21vZGlmeVN0cmluZyA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICBsZXQgbW9kaWZpZWQgPSBzdHJpbmcucmVwbGFjZSgnXycsICcgJyk7XG4gICAgcmV0dXJuIG1vZGlmaWVkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgbW9kaWZpZWQuc2xpY2UoMSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgZGlzcGxheWVkIGxvY2F0aW9uIGFuZCBkYXRlLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZWxlbWVudCBFbGVtZW50IG5hbWUgdG8gY3JlYXRlLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lIENsYXNzIG5hbWUgdG8gYWRkLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgSWQgbmFtZSB0byBhZGQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0Q29udGVudCBUZXh0IGNvbnRlbnQgZm9yIHRoZSBuZXcgZWxlbWVudC5cbiAgICogQHJldHVybnMge2h0bWx9IE5ldyBodG1sIGVsZW1lbnQuXG4gICAqL1xuICBjb25zdCBjcmVhdGVFbGVtZW50ID0gZnVuY3Rpb24gKGVsZW1lbnQsIGNsYXNzTmFtZSwgaWQsIHRleHRDb250ZW50KSB7XG4gICAgY29uc3QgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XG4gICAgaWYgKGNsYXNzTmFtZSkgbmV3RWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgaWYgKGlkKSBuZXdFbGVtZW50LmlkID0gaWQ7XG4gICAgaWYgKHRleHRDb250ZW50KSBuZXdFbGVtZW50LnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XG4gICAgcmV0dXJuIG5ld0VsZW1lbnQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBjb250YWluZXIgZWxlbWVudHMgYW5kIGFwcGVuZCB0aGVtIGludG8gLmdlbmVyYWwtY29udGFpbmVyLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHNpeERheXMgSWYgdHJ1ZSwganVzdCBjcmVhdGUgX2NhcmRzIGNvbnRhaW5lci5cbiAgICovXG4gIGNvbnN0IGNyZWF0ZUNvbnRhaW5lcnMgPSBmdW5jdGlvbiAoc2l4RGF5cykge1xuICAgIGNvbnN0IF90b3BDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAndG9wLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IF9jdXJyZW50RmVlbHNUZW1wID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ2N1cnJlbnQtZmVlbHMtdGVtcCcpO1xuICAgIGNvbnN0IF90b2RheURldGFpbHMgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAndG9kYXktZGV0YWlscycpO1xuICAgIGNvbnN0IF9kYWlseURldGFpbHMgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnZGFpbHktZGV0YWlscycpO1xuICAgIGNvbnN0IF9jYXJkcyA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdjYXJkcycpO1xuICAgIGlmIChzaXhEYXlzKSB7XG4gICAgICBfZ2VuZXJhbENvbnRhaW5lci5hcHBlbmQoX2NhcmRzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgX2RhaWx5RGV0YWlscy5hcHBlbmQoX2NhcmRzKTtcbiAgICAgIF9nZW5lcmFsQ29udGFpbmVyLmFwcGVuZChcbiAgICAgICAgX3RvcENvbnRhaW5lcixcbiAgICAgICAgX2N1cnJlbnRGZWVsc1RlbXAsXG4gICAgICAgIF90b2RheURldGFpbHMsXG4gICAgICAgIF9kYWlseURldGFpbHNcbiAgICAgICk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBEaXNwbGF5IGxvYWRlciBhbmQvb3IgZXJyb3IgbWVzc2FnZSB1bnRpbCBBUEkgY2FsbCBoYXMgYSByZXNwb25zZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgTWVzc2FnZSB0byBkaXNwbGF5IHdoaWxlIGRhdGEgaXMgYmVpbmcgZmV0Y2hlZC5cbiAgICogQHBhcmFtIHtvYmplY3R9IGVycm9yIEVycm9yIG1lc3NhZ2UuXG4gICAqL1xuICBjb25zdCBkaXNwbGF5TG9hZGVyID0gZnVuY3Rpb24gKG1lc3NhZ2UsIGVycm9yKSB7XG4gICAgY2xlYXJDb250ZW50KCk7XG4gICAgbGV0IGxvYWRlcjtcbiAgICBpZiAoIWVycm9yKSB7XG4gICAgICBsb2FkZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnbG9hZGVyJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvYWRlciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdlcnJvcicpO1xuICAgICAgbG9hZGVyLmNsYXNzTGlzdC5hZGQoJ3NtYWxsLXgnKTtcbiAgICB9XG4gICAgY29uc3QgbG9hZENvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdsb2FkLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGxlZ2VuZCA9IGNyZWF0ZUVsZW1lbnQoXG4gICAgICAnaDInLFxuICAgICAgJ2xvYWRpbmctaW5mbycsXG4gICAgICAnJyxcbiAgICAgIGAke2Vycm9yID8gYCR7bWVzc2FnZX0gUGxlYXNlIGVudGVyIGEgdmFsaWQgY2l0eSBuYW1lYCA6IGAke21lc3NhZ2V9YH1gXG4gICAgKTtcbiAgICBsb2FkQ29udGFpbmVyLmFwcGVuZChsb2FkZXIsIGxlZ2VuZCk7XG4gICAgX2dlbmVyYWxDb250YWluZXIuYXBwZW5kKGxvYWRDb250YWluZXIpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBUb2dnbGUgYWN0aXZlIHNlY3Rpb24gb2Ygc2VjdGlvbiBlbGVtZW50cy5cbiAgICogQHBhcmFtIHtvYmplY3R9IGVsZW1lbnQgSFRNTCBlbGVtZW50IHRvIGFwcGx5ICcuYWN0aXZlLXNlY3Rpb24nLlxuICAgKi9cbiAgY29uc3QgdG9nZ2xlQWN0aXZlU2VjdGlvbiA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgbGV0IGFjdGl2ZVNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlLXNlY3Rpb24nKTtcbiAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3NlY3Rpb24tbmFtZScpKSB7XG4gICAgICBhY3RpdmVTZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1zZWN0aW9uJyk7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1zZWN0aW9uJyk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGRldGFpbHMgc2VjdGlvbi5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHByb3BlcnR5IFByb3BlcnR5IG5hbWUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSBWYWx1ZSBhc29jaWF0ZWQgdG8gcHJvcGVydHkuXG4gICAqIEByZXR1cm5zIHtvYmplY3R9IFJldHVybnMgSFRNTCBlbGVtZW50LlxuICAgKi9cbiAgY29uc3QgX2NyZWF0ZURldGFpbENvbnRhaW5lciA9IGZ1bmN0aW9uIChwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgICBjb25zdCBkZXRhaWxDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnZGV0YWlsLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IHByb3BlcnR5RWwgPSBjcmVhdGVFbGVtZW50KCdwJywgJycsICcnLCBwcm9wZXJ0eSk7XG4gICAgY29uc3QgdmFsdWVFbCA9IGNyZWF0ZUVsZW1lbnQoJ3AnLCAnJywgJycsIHZhbHVlICsgJyDCsEMnKTtcbiAgICBkZXRhaWxDb250YWluZXIuYXBwZW5kKHByb3BlcnR5RWwsIHZhbHVlRWwpO1xuICAgIHJldHVybiBkZXRhaWxDb250YWluZXI7XG4gIH07XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgZGlzcGxheWVkIGxvY2F0aW9uIGFuZCBkYXRlLlxuICAgKiBAcGFyYW0ge09iamVjdH0gd2VhdGhlck9iaiBPYmplY3Qgd2l0aCByZXRyaWV2ZWQgaW5mb3JtYXRpb24gZnJvbSBBUEkgY2FsbC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNpdHlOYW1lIENpdHkncyBuYW1lLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY291bnRyeU5hbWUgQ291bnRyeSdzIG5hbWUuXG4gICAqIEByZXR1cm5zIHtodG1sRWxlbWVudH0gSFRNTCBlbGVtZW50LlxuICAgKi9cbiAgY29uc3QgX2NyZWF0ZUxvY2F0aW9uQ29udGFpbmVyID0gZnVuY3Rpb24gKHRpbWVzdGFtcCwgY2l0eU5hbWUsIGNvdW50cnlOYW1lKSB7XG4gICAgY29uc3QgbG9jYXRpb25JbmZvID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ2xvY2F0aW9uLWluZm8nKTtcbiAgICBjb25zdCBjaXR5TG9jYXRpb24gPSBjcmVhdGVFbGVtZW50KFxuICAgICAgJ3AnLFxuICAgICAgJycsXG4gICAgICAnY2l0eS1sb2NhdGlvbicsXG4gICAgICBgJHtjaXR5TmFtZX0sYFxuICAgICk7XG4gICAgY29uc3QgY291bnRyeUxvY2F0aW9uID0gY3JlYXRlRWxlbWVudChcbiAgICAgICdwJyxcbiAgICAgICcnLFxuICAgICAgJ2NvdW50cnktbG9jYXRpb24nLFxuICAgICAgYCAke3dlYXRoZXJJbmZvcm1hdGlvbi5yZWdpb25OYW1lcyhjb3VudHJ5TmFtZSl9YFxuICAgICk7XG4gICAgY29uc3QgZGF0ZUVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KFxuICAgICAgJ3AnLFxuICAgICAgJycsXG4gICAgICAnZGF0ZScsXG4gICAgICBgJHt3ZWF0aGVySW5mb3JtYXRpb24uY29udmVydERhdGVUb0xvY2FsZSh0aW1lc3RhbXApfWBcbiAgICApO1xuICAgIGxvY2F0aW9uSW5mby5hcHBlbmQoZGF0ZUVsZW1lbnQsIGNpdHlMb2NhdGlvbiwgY291bnRyeUxvY2F0aW9uKTtcblxuICAgIHJldHVybiBsb2NhdGlvbkluZm87XG4gIH07XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgZGlzcGxheWVkIHdlYXRoZXIgZGVzY3JpcHRpb24uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB3ZWF0aGVyT2JqZWN0IFdlYXRoZXIncyBvYmplY3QuXG4gICAqIEByZXR1cm5zIHtodG1sRWxlbWVudH0gSFRNTCBFbGVtZW50LlxuICAgKi9cbiAgY29uc3QgX2NyZWF0ZVdlYXRoZXJEZXNjcmlwdGlvbiA9IGZ1bmN0aW9uICh3ZWF0aGVyT2JqZWN0KSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ3dlYXRoZXItZGV0YWlscycpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gY3JlYXRlRWxlbWVudChcbiAgICAgICdwJyxcbiAgICAgICdpY29uLWRlc2NyaXB0aW9uJyxcbiAgICAgICd3ZWF0aGVyLWRlc2NyaXB0aW9uJyxcbiAgICAgIHdlYXRoZXJPYmplY3Qud2VhdGhlclswXS5kZXNjcmlwdGlvblxuICAgICk7XG4gICAgY29uc3Qgd2VhdGhlckljb24gPSBjcmVhdGVFbGVtZW50KCdpbWcnLCAnd2VhdGhlci1pY29uJywgJ3dlYXRoZXItaWNvbicpO1xuICAgIGNvbnRhaW5lci5hcHBlbmQod2VhdGhlckljb24sIGRlc2NyaXB0aW9uKTtcbiAgICB3ZWF0aGVySWNvbi5hbHQgPSAnV2VhdGhlciBpY29uLic7XG4gICAgd2VhdGhlckljb24uc3JjID0gYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7d2VhdGhlck9iamVjdC53ZWF0aGVyWzBdLmljb259QDJ4LnBuZ2A7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgfTtcblxuICAvKipcbiAgICogVG9nZ2xlIGFjdGl2ZSBzZWN0aW9uIG9mIHNlY3Rpb24gZWxlbWVudHMuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBjdXJyVGVtcCBDdXJyZW50IHRlbXBlcmF0dXJlLlxuICAgKiBAcGFyYW0ge251bWJlcn0gZmVlbHNUZW1wIEN1cnJlbnQgZmVlbHMgdGVtcGVyYXR1cmUuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gdG9kYXlUZW1wIFRlbXBlcmF0dXJlIGZvciB0b2RheS5cbiAgICogQHJldHVybnMge2FycmF5fSBBcnJheSB0aGF0IGNvbnRhaW5zIEhUTUwgZWxlbWVudHMuXG4gICAqL1xuICBjb25zdCBfY3JlYXRlQ3VycmVudFRlbXAgPSBmdW5jdGlvbiAoY3VyclRlbXAsIGZlZWxzVGVtcCwgdG9kYXlUZW1wKSB7XG4gICAgY29uc3Qgcm91bmRlZFRlbXAgPSBbTWF0aC5yb3VuZChjdXJyVGVtcCksIE1hdGgucm91bmQoZmVlbHNUZW1wKV07XG4gICAgY29uc3QgY3VycmVudFRlbXAgPSBjcmVhdGVFbGVtZW50KFxuICAgICAgJ2gxJyxcbiAgICAgICdjdXJyZW50LXRlbXAnLFxuICAgICAgJycsXG4gICAgICBgJHtyb3VuZGVkVGVtcFswXX0gwrBDYFxuICAgICk7XG4gICAgY29uc3QgZmVlbHNMaWtlVGVtcCA9IGNyZWF0ZUVsZW1lbnQoXG4gICAgICAnaDInLFxuICAgICAgJ2ZlZWxzLXRlbXAnLFxuICAgICAgJycsXG4gICAgICBgJHtyb3VuZGVkVGVtcFsxXX0gwrBDYFxuICAgICk7XG4gICAgY29uc3Qgc21hbGxDdXJyZW50ID0gY3JlYXRlRWxlbWVudChcbiAgICAgICdzbWFsbCcsXG4gICAgICAnc21hbGwtaW5mbycsXG4gICAgICAnJyxcbiAgICAgIGAke3RvZGF5VGVtcCA/ICdDdXJyZW50IHRlbXBlcmF0dXJlJyA6ICdNYXggdGVtcGVyYXR1cmUnfWBcbiAgICApO1xuICAgIGNvbnN0IHNtYWxsRmVlbHMgPSBjcmVhdGVFbGVtZW50KFxuICAgICAgJ3NtYWxsJyxcbiAgICAgICdzbWFsbC1pbmZvJyxcbiAgICAgICcnLFxuICAgICAgYCR7dG9kYXlUZW1wID8gJ0ZlZWxzIGxpa2UnIDogJ01pbiB0ZW1wZXJhdHVyZSd9YFxuICAgICk7XG5cbiAgICBjb25zdCBjdXJyZW50Q29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ3RlbXAtY29udGFpbmVyJyk7XG4gICAgY29uc3QgZmVlbHNDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAndGVtcC1jb250YWluZXInKTtcblxuICAgIGN1cnJlbnRDb250YWluZXIuYXBwZW5kKGN1cnJlbnRUZW1wLCBzbWFsbEN1cnJlbnQpO1xuICAgIGZlZWxzQ29udGFpbmVyLmFwcGVuZChmZWVsc0xpa2VUZW1wLCBzbWFsbEZlZWxzKTtcblxuICAgIHJldHVybiBbY3VycmVudENvbnRhaW5lciwgZmVlbHNDb250YWluZXJdO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGNhcmQgd2l0aCBpbmZvcm1hdGlvbiBieSBob3Vycy5cbiAgICogQHBhcmFtIHtPYmplY3R9IGhvdXJseU9iamVjdCBIb3VybHkgb2JqZWN0IHJldHJpZXZlZCBmcm9tIEFQSSBjYWxsLlxuICAgKiBAcGFyYW0ge251bWJlcn0gZnJvbUhvdXIgU3RhcnRpbmcgaG91ciwgZGVmYXVsdCAxLlxuICAgKiBAcGFyYW0ge251bWJlcn0gdG9Ib3VyIEVuZGluZyBob3VyLCBkZWZhdWx0IDkuXG4gICAqIEByZXR1cm4gSFRNTCBlbGVtZW50IHdpdGggaW5mb3JtYXRpb24gYWJvdXQgd2VhdGhlciBpbiB0aGUgbmV4dCA4IGhvdXJzIChkZWZhdWx0KS5cbiAgICovXG4gIGNvbnN0IF9jcmVhdGVIb3VyQ2FyZCA9IGZ1bmN0aW9uIChob3VybHlPYmplY3QsIGZyb21Ib3VyID0gMSwgdG9Ib3VyID0gOSkge1xuICAgIGxldCBjYXJkRWxlbWVudHMgPSBbXTtcblxuICAgIGNvbnN0IHRpdGxlID0gY3JlYXRlRWxlbWVudCgnaDMnLCAndGl0bGUtZGV0YWlscycsICcnLCAnSG91cmx5IGRldGFpbHMnKTtcblxuICAgIGZvciAobGV0IGkgPSBmcm9tSG91cjsgaSA8IHRvSG91cjsgaSsrKSB7XG4gICAgICBjb25zdCBjYXJkID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ2NhcmQtaG91cmx5Jyk7XG4gICAgICBjb25zdCBkZXRhaWxIb3VycyA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdkZXRhaWwtaG91cnMnKTtcbiAgICAgIGNvbnN0IGhvdXJFbCA9IGNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdoNCcsXG4gICAgICAgICdob3VyJyxcbiAgICAgICAgJycsXG4gICAgICAgIGAke3dlYXRoZXJJbmZvcm1hdGlvbi5jb252ZXJ0RGF0ZVRvTG9jYWxlKGhvdXJseU9iamVjdFtpXS5kdCwgdHJ1ZSl9YFxuICAgICAgKTtcbiAgICAgIGNvbnN0IGljb25Db250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnd2VhdGhlci1pY29uJyk7XG4gICAgICBjb25zdCBzbWFsbEljb24gPSBjcmVhdGVFbGVtZW50KCdpbWcnLCAnaG91cmx5LWljb24nKTtcbiAgICAgIGNvbnN0IGljb25EZXNjcmlwdGlvbiA9IGNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdwJyxcbiAgICAgICAgJ2ljb24tZGVzY3JpcHRpb24nLFxuICAgICAgICAnJyxcbiAgICAgICAgaG91cmx5T2JqZWN0W2ldLndlYXRoZXJbMF0uZGVzY3JpcHRpb25cbiAgICAgICk7XG5cbiAgICAgIGljb25Db250YWluZXIuYXBwZW5kKHNtYWxsSWNvbiwgaWNvbkRlc2NyaXB0aW9uKTtcbiAgICAgIGRldGFpbEhvdXJzLmFwcGVuZChcbiAgICAgICAgaG91ckVsLFxuICAgICAgICBfY3JlYXRlRGV0YWlsQ29udGFpbmVyKCdUZW1wZXJhdHVyZScsIE1hdGgucm91bmQoaG91cmx5T2JqZWN0W2ldLnRlbXApKSxcbiAgICAgICAgX2NyZWF0ZURldGFpbENvbnRhaW5lcihcbiAgICAgICAgICAnRmVlbHMgbGlrZScsXG4gICAgICAgICAgTWF0aC5yb3VuZChob3VybHlPYmplY3RbaV0uZmVlbHNfbGlrZSksXG4gICAgICAgICAgaWNvbkNvbnRhaW5lclxuICAgICAgICApXG4gICAgICApO1xuICAgICAgY2FyZC5hcHBlbmQoZGV0YWlsSG91cnMsIGljb25Db250YWluZXIpO1xuICAgICAgc21hbGxJY29uLnNyYyA9IGBodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke2hvdXJseU9iamVjdFtpXS53ZWF0aGVyWzBdLmljb259QDJ4LnBuZ2A7XG4gICAgICBzbWFsbEljb24uYWx0ID0gJ1dlYXRoZXIgaWNvbi4nO1xuICAgICAgY2FyZEVsZW1lbnRzLnB1c2goY2FyZCk7XG4gICAgfVxuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcignLmNhcmRzJylcbiAgICAgIC5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWJlZ2luJywgdGl0bGUpO1xuXG4gICAgcmV0dXJuIGNhcmRFbGVtZW50cztcbiAgfTtcblxuICAvKipcbiAgICogQ3JlYXRlcyBjYXJkIHdpdGggaW5mb3JtYXRpb24gYnkgaG91cnMuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSB3ZWF0aGVyT2JqIFdlYXRoZXIgb2JqZWN0LlxuICAgKiBAcGFyYW0ge2FycmF5fSBvcHRpb25zIE9wdGlvbnMgdG8gcmV0cmlldmUgbW9yZSBkZXRhaWxzLlxuICAgKiBAcmV0dXJuIEhUTUwgZWxlbWVudHMuXG4gICAqL1xuICBjb25zdCB1cGRhdGVNb3JlSW5mb3JtYXRpb24gPSBmdW5jdGlvbiAod2VhdGhlck9iaiwgb3B0aW9ucykge1xuICAgIGxldCBlbGVtZW50cyA9IFtdO1xuICAgIGNvbnN0IGluZm9ybWF0aW9uID0gd2VhdGhlckluZm9ybWF0aW9uLmRlc3RydWN0dXJlT2JqZWN0KHdlYXRoZXJPYmosIFtcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgXSk7XG5cbiAgICBmb3IgKGNvbnN0IHByb3BlcnR5IGluIGluZm9ybWF0aW9uKSB7XG4gICAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnbW9yZS1pbmZvcm1hdGlvbicpO1xuICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBjcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICBjb25zdCB2YWx1ZSA9IGNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIGNvbnRhaW5lci5hcHBlbmQoZGVzY3JpcHRpb24sIHZhbHVlKTtcbiAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gX21vZGlmeVN0cmluZyhwcm9wZXJ0eSk7XG4gICAgICBzd2l0Y2ggKHByb3BlcnR5KSB7XG4gICAgICAgIGNhc2UgJ2h1bWlkaXR5JzpcbiAgICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9ICdIdW1pZGl0eSc7XG4gICAgICAgICAgdmFsdWUudGV4dENvbnRlbnQgPSBgJHtpbmZvcm1hdGlvbltwcm9wZXJ0eV19ICVgO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICd1dmknOlxuICAgICAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gJ1VWIGluZGV4JztcbiAgICAgICAgICB2YWx1ZS50ZXh0Q29udGVudCA9IGAke2luZm9ybWF0aW9uW3Byb3BlcnR5XX1gO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICd3aW5kX3NwZWVkJzpcbiAgICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9ICdXaW5kIHNwZWVkJztcbiAgICAgICAgICB2YWx1ZS50ZXh0Q29udGVudCA9IGAke2luZm9ybWF0aW9uW3Byb3BlcnR5XX0ga20vaGA7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGVsZW1lbnRzLnB1c2goY29udGFpbmVyKTtcbiAgICB9XG4gICAgcmV0dXJuIGVsZW1lbnRzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBUb2dnbGUgY2xhc3MgbGlzdCBvdmVyIEhUTUwgZWxlbWVudCB0byBkaXNwbGF5IG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgZGF5cy5cbiAgICogQHBhcmFtIHtvYmplY3R9IGUgRXZlbnQgb2JqZWN0LlxuICAgKi9cbiAgY29uc3QgZGlzcGxheUNhcmRJbmZvID0gZnVuY3Rpb24gKGUpIHtcbiAgICBjb25zdCBkYXlDYXJkID0gZS50YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICBjb25zdCBtb3JlSW5mb0NvbnRhaW5lciA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgIG1vcmVJbmZvQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ2Rpc3BsYXllZC1jYXJkJyk7XG4gICAgZGF5Q2FyZC5jbGFzc0xpc3QudG9nZ2xlKCdkaXNwbGF5ZWQtY2FyZCcpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHRvZGF5U2VjdGlvbih3ZWF0aGVyT2JqLCBjaXR5TmFtZSwgY291bnRyeU5hbWUpIHtcbiAgICBkZWxldGUgX2dlbmVyYWxDb250YWluZXIuZGF0YXNldC5zZWFyY2hpbmc7XG4gICAgY2xlYXJDb250ZW50KCk7XG4gICAgY3JlYXRlQ29udGFpbmVycygpO1xuICAgIGxldCBsb2NhdGlvbiA9IF9jcmVhdGVMb2NhdGlvbkNvbnRhaW5lcihcbiAgICAgIHdlYXRoZXJPYmouY3VycmVudC5kdCxcbiAgICAgIGNpdHlOYW1lLFxuICAgICAgY291bnRyeU5hbWVcbiAgICApO1xuICAgIGxldCB3ZWF0aGVyRGVzY3JpcHRpb24gPSBfY3JlYXRlV2VhdGhlckRlc2NyaXB0aW9uKHdlYXRoZXJPYmouY3VycmVudCk7XG4gICAgbGV0IGN1cnJlbnRUZW1wZXJhdHVyZSA9IF9jcmVhdGVDdXJyZW50VGVtcChcbiAgICAgIHdlYXRoZXJPYmouY3VycmVudC50ZW1wLFxuICAgICAgd2VhdGhlck9iai5jdXJyZW50LmZlZWxzX2xpa2UsXG4gICAgICB0cnVlXG4gICAgKTtcbiAgICBsZXQgbW9yZUluZm9ybWF0aW9uID0gdXBkYXRlTW9yZUluZm9ybWF0aW9uKHdlYXRoZXJPYmouY3VycmVudCwgW1xuICAgICAgJ2h1bWlkaXR5JyxcbiAgICAgICd1dmknLFxuICAgICAgJ3dpbmRfc3BlZWQnLFxuICAgIF0pO1xuICAgIGxldCBob3VybHlDYXJkcyA9IF9jcmVhdGVIb3VyQ2FyZCh3ZWF0aGVyT2JqLmhvdXJseSk7XG5cbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy50b3AtY29udGFpbmVyJylcbiAgICAgIC5hcHBlbmQobG9jYXRpb24sIHdlYXRoZXJEZXNjcmlwdGlvbik7XG4gICAgY3VycmVudFRlbXBlcmF0dXJlLmZvckVhY2goKGh0bWwpID0+XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC1mZWVscy10ZW1wJykuYXBwZW5kKGh0bWwpXG4gICAgKTtcbiAgICBtb3JlSW5mb3JtYXRpb24uZm9yRWFjaCgoaHRtbCkgPT5cbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RheS1kZXRhaWxzJykuYXBwZW5kKGh0bWwpXG4gICAgKTtcbiAgICBob3VybHlDYXJkcy5mb3JFYWNoKChodG1sKSA9PlxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRzJykuYXBwZW5kKGh0bWwpXG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvbW9ycm93U2VjdGlvbih3ZWF0aGVyT2JqLCBjaXR5TmFtZSwgY291bnRyeU5hbWUpIHtcbiAgICBjbGVhckNvbnRlbnQoKTtcbiAgICBjcmVhdGVDb250YWluZXJzKCk7XG4gICAgbGV0IGxvY2F0aW9uID0gX2NyZWF0ZUxvY2F0aW9uQ29udGFpbmVyKFxuICAgICAgd2VhdGhlck9iai5kYWlseVsxXS5kdCxcbiAgICAgIGNpdHlOYW1lLFxuICAgICAgY291bnRyeU5hbWVcbiAgICApO1xuICAgIGxldCB3ZWF0aGVyRGVzY3JpcHRpb24gPSBfY3JlYXRlV2VhdGhlckRlc2NyaXB0aW9uKHdlYXRoZXJPYmouZGFpbHlbMV0pO1xuICAgIGxldCBtb3JlSW5mb3JtYXRpb24gPSB1cGRhdGVNb3JlSW5mb3JtYXRpb24od2VhdGhlck9iai5kYWlseVsxXSwgW1xuICAgICAgJ2h1bWlkaXR5JyxcbiAgICAgICd1dmknLFxuICAgICAgJ3dpbmRfc3BlZWQnLFxuICAgIF0pO1xuICAgIGxldCBjdXJyZW50VGVtcGVyYXR1cmUgPSBfY3JlYXRlQ3VycmVudFRlbXAoXG4gICAgICB3ZWF0aGVyT2JqLmN1cnJlbnQudGVtcCxcbiAgICAgIHdlYXRoZXJPYmouY3VycmVudC5mZWVsc19saWtlXG4gICAgKTtcbiAgICBsZXQgaG91cmx5Q2FyZHMgPSBfY3JlYXRlSG91ckNhcmQod2VhdGhlck9iai5ob3VybHksIDI1LCA0Nyk7XG5cbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy50b3AtY29udGFpbmVyJylcbiAgICAgIC5hcHBlbmQobG9jYXRpb24sIHdlYXRoZXJEZXNjcmlwdGlvbik7XG4gICAgbW9yZUluZm9ybWF0aW9uLmZvckVhY2goKGh0bWwpID0+XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kYXktZGV0YWlscycpLmFwcGVuZChodG1sKVxuICAgICk7XG4gICAgY3VycmVudFRlbXBlcmF0dXJlLmZvckVhY2goKGh0bWwpID0+XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC1mZWVscy10ZW1wJykuYXBwZW5kKGh0bWwpXG4gICAgKTtcbiAgICBob3VybHlDYXJkcy5mb3JFYWNoKChodG1sKSA9PlxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRzJykuYXBwZW5kKGh0bWwpXG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY3JlYXRlRWxlbWVudCxcbiAgICBjbGVhckNvbnRlbnQsXG4gICAgY3JlYXRlQ29udGFpbmVycyxcbiAgICB1cGRhdGVNb3JlSW5mb3JtYXRpb24sXG4gICAgZGlzcGxheUxvYWRlcixcbiAgICB0b2dnbGVBY3RpdmVTZWN0aW9uLFxuICAgIHRvZGF5U2VjdGlvbixcbiAgICB0b21vcnJvd1NlY3Rpb24sXG4gICAgZGlzcGxheUNhcmRJbmZvLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IHsgVmlldyB9O1xuIiwiJ3VzZSBzdHJpY3QnO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gJy4vdmlldy5qcyc7XG5cbmNvbnN0IHdlYXRoZXJJbmZvcm1hdGlvbiA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IF9hcGlLZXkgPSAnN2YxZmJjZDViNGY3ZmQ0ZTBkMTc5NTA2MGZjZDhhM2MnO1xuICBjb25zdCBfZ2VuZXJhbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nZW5lcmFsLWNvbnRhaW5lcicpO1xuXG4gIC8qKlxuICAgKiBGZXRjaCBsYXQgYW5kIGxvbiBiYXNlZCBvbiBjaXR5TmFtZVxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IHJlZ2lvbk5hbWUgTmFtZSBvZiB0aGUgcmVnaW9uXG4gICAqIEByZXR1cm4gIHtzdHJpbmd9IENvdW50cnkgbmFtZSB0cmFuc2xhdGVkIHRvIGxvY2FsZSBsYW5ndWFnZS5cbiAgICovXG4gIGNvbnN0IHJlZ2lvbk5hbWVzID0gZnVuY3Rpb24gKHJlZ2lvbk5hbWUpIHtcbiAgICBjb25zdCB0cmFuc2xhdGVkID0gbmV3IEludGwuRGlzcGxheU5hbWVzKFtuYXZpZ2F0b3IubGFuZ3VhZ2VdLCB7XG4gICAgICB0eXBlOiAncmVnaW9uJyxcbiAgICB9KTtcbiAgICByZXR1cm4gdHJhbnNsYXRlZC5vZihyZWdpb25OYW1lKTtcbiAgfTtcblxuICAvKipcbiAgICogQ29udmVydHMgdGltZSBzdGFtcCB0byBsb2NhbGUncyBmb3JtYXQgZGF0ZS5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHRpbWVzdGFtcCBUaW1lIHN0YW1wLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGdldGhvdXIgSWYgdHJ1ZSwgcmV0dXJucyB0aGUgaG91ci5cbiAgICogQHJldHVybnMge3N0cmluZ30gRm9ybWF0ZWQgZGF0ZSB0byBsb2NhbGUuXG4gICAqL1xuICBjb25zdCBjb252ZXJ0RGF0ZVRvTG9jYWxlID0gZnVuY3Rpb24gKHRpbWVzdGFtcCwgZ2V0SG91cikge1xuICAgIGNvbnN0IGNvbnZlcnREYXRlID0gbmV3IERhdGUodGltZXN0YW1wICogMTAwMCk7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIHdlZWtkYXk6ICdsb25nJyxcbiAgICAgIG1vbnRoOiAnbG9uZycsXG4gICAgICBkYXk6ICdudW1lcmljJyxcbiAgICB9O1xuICAgIGlmIChnZXRIb3VyKSB7XG4gICAgICBsZXQgaG91cnMgPSBgJHtjb252ZXJ0RGF0ZS5nZXRIb3VycygpfWA7XG4gICAgICBsZXQgbWludXRlcyA9IGAwJHtjb252ZXJ0RGF0ZS5nZXRNaW51dGVzKCl9YDtcbiAgICAgIGxldCBhbVBtID0gaG91cnMgPj0gMTIgPyAncG0nIDogJ2FtJztcbiAgICAgIHJldHVybiBgJHtcbiAgICAgICAgaG91cnMgPCAxMFxuICAgICAgICAgID8gYDAke2hvdXJzfToke21pbnV0ZXN9ICR7YW1QbX1gXG4gICAgICAgICAgOiBgJHtob3Vyc306JHttaW51dGVzfSAke2FtUG19YFxuICAgICAgfWA7XG4gICAgfVxuICAgIHJldHVybiBjb252ZXJ0RGF0ZS50b0xvY2FsZURhdGVTdHJpbmcobmF2aWdhdG9yLmxhbmd1YWdlLCBvcHRpb25zKTtcbiAgfTtcblxuICAvKipcbiAgICogRmV0Y2ggbGF0IGFuZCBsb24gYmFzZWQgb24gY2l0eU5hbWVcbiAgICogQHBhcmFtICB7c3RyaW5nfSBjaXR5TmFtZSBOYW1lIG9mIHRoZSBjaXR5XG4gICAqIEByZXR1cm4ge29iamVjdH0gT2JqZWN0IHdpdGggaW5mb3JtYXRpb24gYWJvdXQgbG9jYXRpb24uXG4gICAqL1xuICBhc3luYyBmdW5jdGlvbiBnZXRMb2NhdGlvbihjaXR5TmFtZSkge1xuICAgIHRyeSB7XG4gICAgICBfZ2VuZXJhbENvbnRhaW5lci5kYXRhc2V0LnNlYXJjaGluZyA9ICd0cnVlJztcbiAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0ke2NpdHlOYW1lfSwmbGltaXQ9MSZhcHBpZD0ke19hcGlLZXl9YCxcbiAgICAgICAgeyBtb2RlOiAnY29ycycgfVxuICAgICAgKTtcbiAgICAgIGNvbnN0IGRhdGFSZXNwb25zZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIGxldCBjb29yZCA9IFtcbiAgICAgICAgZGF0YVJlc3BvbnNlWzBdLmxhdC50b0ZpeGVkKDIpLFxuICAgICAgICBkYXRhUmVzcG9uc2VbMF0ubG9uLnRvRml4ZWQoMiksXG4gICAgICBdO1xuICAgICAgVmlldy5kaXNwbGF5TG9hZGVyKCdTZWFyY2hpbmcgbG9jYXRpb24sIHBsZWFzZSB3YWl0LicpO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBjb3VudHJ5OiBkYXRhUmVzcG9uc2VbMF0uY291bnRyeSxcbiAgICAgICAgY2l0eU5hbWU6IGRhdGFSZXNwb25zZVswXS5uYW1lLFxuICAgICAgICBzdGF0ZTogZGF0YVJlc3BvbnNlWzBdLnN0YXRlLFxuICAgICAgICBsYXRMb246IGNvb3JkLFxuICAgICAgfTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgVmlldy5kaXNwbGF5TG9hZGVyKGVycm9yLm1lc3NhZ2UsIGVycm9yKTtcbiAgICAgIGRlbGV0ZSBfZ2VuZXJhbENvbnRhaW5lci5kYXRhc2V0LnNlYXJjaGluZztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRmV0Y2ggZGF0YSBmcm9tIHJlcXVlc3RlZCBjaXR5XG4gICAqIEBwYXJhbSAge2FycmF5fSBjb29yZFswXSBsYXRpdHVkZVxuICAgKiBAcGFyYW0gIHthcnJheX0gY29vcmRbMV0gbG9uZ2l0dWRcbiAgICovXG4gIGFzeW5jIGZ1bmN0aW9uIGZldGNoRGF0YShjb29yZCkge1xuICAgIHRyeSB7XG4gICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9vbmVjYWxsP2xhdD0ke2Nvb3JkWzBdfSZsb249JHtjb29yZFsxXX0mZXhjbHVkZT1taW51dGVseSZ1bml0cz1tZXRyaWMmYXBwaWQ9JHtfYXBpS2V5fWAsXG4gICAgICAgIHsgbW9kZTogJ2NvcnMnIH1cbiAgICAgICk7XG4gICAgICBjb25zdCBkYXRhUmVzcG9uc2UgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICByZXR1cm4gZGF0YVJlc3BvbnNlO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBWaWV3LmRpc3BsYXlMb2FkZXIoZXJyb3IubWVzc2FnZSwgZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGtleS12YWx1ZSBwYWlyIG9mIHNlbGVjdGVkIHByb3BlcnRpZXMuXG4gICAqIEBwYXJhbSAge29iamVjdH0gb2JqZWN0IE9iamVjdCB0byBmaWx0ZXIuXG4gICAqIEBwYXJhbSAge2FycmF5fSBwcm9wZXJ0aWVzIFByb3BlcnRpZXMgdG8gc2VsZWN0LlxuICAgKiBAcmV0dXJucyB7YXJyYXl9IFJldHVybnMgYXJyYXkgd2l0aCBrZXktdmFsdWUgcGFpcnMgb2Ygc2VsZWN0ZWQgcHJvcGVydGllcy5cbiAgICovXG4gIGNvbnN0IGRlc3RydWN0dXJlT2JqZWN0ID0gZnVuY3Rpb24gKG9iamVjdCwgcHJvcGVydGllcykge1xuICAgIGxldCBpbmZvcm1hdGlvbiA9IE9iamVjdC5mcm9tRW50cmllcyhcbiAgICAgIFsuLi5wcm9wZXJ0aWVzXS5tYXAoKGtleSkgPT4gW2tleSwgTWF0aC5yb3VuZChvYmplY3Rba2V5XSldKVxuICAgICk7XG4gICAgcmV0dXJuIGluZm9ybWF0aW9uO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgcmVnaW9uTmFtZXMsXG4gICAgY29udmVydERhdGVUb0xvY2FsZSxcbiAgICBmZXRjaERhdGEsXG4gICAgZ2V0TG9jYXRpb24sXG4gICAgZGVzdHJ1Y3R1cmVPYmplY3QsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgeyB3ZWF0aGVySW5mb3JtYXRpb24gfTtcbiIsImltcG9ydCB7IFZpZXcgfSBmcm9tICcuL3ZpZXcnO1xuaW1wb3J0IHsgd2VhdGhlckluZm9ybWF0aW9uIH0gZnJvbSAnLi9tb2RlbCc7XG5cbmNvbnN0IFNpeERheXNNb2R1bGUgPSAoZnVuY3Rpb24gKCkge1xuICAvKipcbiAgICogQ3JlYXRlIGNhcmRzIGZvciB0aGUgbmV4dCBzaXggZGF5cyB3aXRoIHdlYXRoZXIgaW5mb3JtYXRpb24uXG4gICAqIEBwYXJhbSB7b2JqZWN0fSB3ZWF0aGVyT2JqIFdlYXRoZXIgb2JqZWN0LlxuICAgKiBAcmV0dXJucyB7YXJyYXl9IFJldHVybnMgYXJyYXkgd2l0aCBodG1sIGVsZW1lbnRzXG4gICAqL1xuICBjb25zdCBfY3JlYXRlU2l4RGF5c0NhcmQgPSBmdW5jdGlvbiAod2VhdGhlck9iaikge1xuICAgIGNvbnN0IGNhcmRzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRzJyk7XG4gICAgbGV0IGNvbnRhaW5lckVsZW1lbnRzID0gW107XG4gICAgY29uc3Qgc2VjdGlvblRpdGxlID0gVmlldy5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2gzJyxcbiAgICAgICdzaXgtZGF5cy1kZXRhaWxzJyxcbiAgICAgICcnLFxuICAgICAgJ05leHQgc2l4IGRheXMnXG4gICAgKTtcbiAgICBjYXJkc0NvbnRhaW5lci5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWJlZ2luJywgc2VjdGlvblRpdGxlKTtcblxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgd2VhdGhlck9iai5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgY29udGFpbmVyID0gVmlldy5jcmVhdGVFbGVtZW50KCdkaXYnLCAnc2l4LWRheXMtY2FyZCcpO1xuICAgICAgY29uc3QgdXBwZXJDb250YWluZXIgPSBWaWV3LmNyZWF0ZUVsZW1lbnQoJ2RpdicsICd1cHBlci1jb250YWluZXInKTtcbiAgICAgIGNvbnN0IHRlbXBDb250YWluZXIgPSBWaWV3LmNyZWF0ZUVsZW1lbnQoJ2RpdicsICd0ZW1wZXJhdHVyZScpO1xuICAgICAgY29uc3QgbWF4VGVtcCA9IFZpZXcuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ3AnLFxuICAgICAgICAnbWF4LXRlbXAnLFxuICAgICAgICAnJyxcbiAgICAgICAgYCR7TWF0aC5yb3VuZCh3ZWF0aGVyT2JqW2ldLnRlbXAubWF4KX0gwrBDYFxuICAgICAgKTtcbiAgICAgIGNvbnN0IG1pblRlbXAgPSBWaWV3LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdwJyxcbiAgICAgICAgJ21pbi10ZW1wJyxcbiAgICAgICAgJycsXG4gICAgICAgIGAke01hdGgucm91bmQod2VhdGhlck9ialtpXS50ZW1wLm1pbil9IMKwQ2BcbiAgICAgICk7XG4gICAgICBjb25zdCBjYXJkRGF0ZSA9IFZpZXcuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ3AnLFxuICAgICAgICAnY2FyZC1kYXRlJyxcbiAgICAgICAgJycsXG4gICAgICAgIGAke3dlYXRoZXJJbmZvcm1hdGlvbi5jb252ZXJ0RGF0ZVRvTG9jYWxlKHdlYXRoZXJPYmpbaV0uZHQpfWBcbiAgICAgICk7XG4gICAgICBjb25zdCB3ZWF0aGVySWNvbiA9IFZpZXcuY3JlYXRlRWxlbWVudCgnaW1nJywgJ3NpeC1kYXlzLWljb24nKTtcbiAgICAgIHdlYXRoZXJJY29uLmFsdCA9IGAke3dlYXRoZXJPYmpbaV0ud2VhdGhlclswXS5kZXNjcmlwdGlvbn1gO1xuICAgICAgd2VhdGhlckljb24uc3JjID0gYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7d2VhdGhlck9ialtpXS53ZWF0aGVyWzBdLmljb259QDJ4LnBuZ2A7XG4gICAgICBjb25zdCBzcGFuTW9yZUluZm8gPSBWaWV3LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdzcGFuJyxcbiAgICAgICAgJ21hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQnLFxuICAgICAgICAnJyxcbiAgICAgICAgJ2V4cGFuZF9jaXJjbGVfZG93bidcbiAgICAgICk7XG4gICAgICBzcGFuTW9yZUluZm8udGl0bGUgPSAnQ2xpY2sgZm9yIG1vcmUgaW5mb3JtYXRpb24nO1xuICAgICAgc3Bhbk1vcmVJbmZvLmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXktbW9yZScpO1xuXG4gICAgICBjb25zdCBpbmZvQ29udGFpbmVyID0gVmlldy5jcmVhdGVFbGVtZW50KCdkaXYnLCAnc2l4LWRheXMtaW5mbycpO1xuICAgICAgbGV0IG1vcmVJbmZvcm1hdGlvbiA9IFZpZXcudXBkYXRlTW9yZUluZm9ybWF0aW9uKHdlYXRoZXJPYmpbaV0sIFtcbiAgICAgICAgJ2h1bWlkaXR5JyxcbiAgICAgICAgJ3V2aScsXG4gICAgICAgICd3aW5kX3NwZWVkJyxcbiAgICAgIF0pO1xuICAgICAgY29udGFpbmVyLmFwcGVuZCh1cHBlckNvbnRhaW5lciwgaW5mb0NvbnRhaW5lcik7XG4gICAgICB1cHBlckNvbnRhaW5lci5hcHBlbmQodGVtcENvbnRhaW5lciwgY2FyZERhdGUsIHdlYXRoZXJJY29uLCBzcGFuTW9yZUluZm8pO1xuICAgICAgdGVtcENvbnRhaW5lci5hcHBlbmQobWF4VGVtcCwgbWluVGVtcCk7XG4gICAgICBtb3JlSW5mb3JtYXRpb24uZm9yRWFjaCgoaHRtbCkgPT4gaW5mb0NvbnRhaW5lci5hcHBlbmQoaHRtbCkpO1xuICAgICAgY29udGFpbmVyRWxlbWVudHMucHVzaChjb250YWluZXIpO1xuICAgIH1cbiAgICByZXR1cm4gY29udGFpbmVyRWxlbWVudHM7XG4gIH07XG5cbiAgLyoqXG4gICAqIENsZWFyIGNvbnRlbnQsIGNyZWF0ZXMgY29udGFpbmVycyBhbmQgYXBwZW5kIG5leHQgc2l4IGRheXMgY2FyZHMuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSB3ZWF0aGVyT2JqIFdlYXRoZXIgb2JqZWN0LlxuICAgKlxuICAgKi9cbiAgZnVuY3Rpb24gc2l4RGF5c1NlY3Rpb24od2VhdGhlck9iaikge1xuICAgIFZpZXcuY2xlYXJDb250ZW50KCk7XG4gICAgVmlldy5jcmVhdGVDb250YWluZXJzKHRydWUpO1xuICAgIF9jcmVhdGVTaXhEYXlzQ2FyZCh3ZWF0aGVyT2JqLmRhaWx5KS5mb3JFYWNoKChodG1sKSA9PlxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRzJykuYXBwZW5kKGh0bWwpXG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgc2l4RGF5c1NlY3Rpb24sXG4gIH07XG59KSgpO1xuXG5leHBvcnQgeyBTaXhEYXlzTW9kdWxlIH07XG4iLCJpbXBvcnQgJy4vc3R5bGVzL3N0eWxlLnNjc3MnO1xuXG5pbXBvcnQgeyB3ZWF0aGVySW5mb3JtYXRpb24gfSBmcm9tICcuL2pzL21vZGVsLmpzJztcbmltcG9ydCB7IFZpZXcgfSBmcm9tICcuL2pzL3ZpZXcuanMnO1xuaW1wb3J0IHsgU2l4RGF5c01vZHVsZSB9IGZyb20gJy4vanMvc2l4LWRheXMuanMnO1xuXG5jb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2NhdGlvbi1zZWFyY2gnKTtcbmNvbnN0IHNlYXJjaEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWNvbnRhaW5lcicpO1xuY29uc3Qgc2VhcmNoSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gtaWNvbicpO1xuY29uc3Qgc2VjdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWN0aW9ucycpO1xuY29uc3QgdG9kYXlTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZGF5LXNlY3Rpb24nKTtcbmNvbnN0IGdlbmVyYWxDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2VuZXJhbC1jb250YWluZXInKTtcbmxldCBsb2NhdGlvbkluZm87XG5sZXQgd2VhdGhlckluZm87XG5cbi8qKlxuICogTWFrZXMgQVBJIGNhbGwgb24gcGFnZSBsb2FkLlxuICogQHBhcmFtIHtvYmplY3R9IGUgRXZlbnQgb2JqZWN0LlxuICovXG4oYXN5bmMgZnVuY3Rpb24gZGlzcGxheU9uTG9hZCgpIHtcbiAgbG9jYXRpb25JbmZvID0gYXdhaXQgd2VhdGhlckluZm9ybWF0aW9uLmdldExvY2F0aW9uKCdSb21hJyk7XG4gIHdlYXRoZXJJbmZvID0gYXdhaXQgd2VhdGhlckluZm9ybWF0aW9uLmZldGNoRGF0YShsb2NhdGlvbkluZm8ubGF0TG9uKTtcbiAgVmlldy50b2RheVNlY3Rpb24od2VhdGhlckluZm8sIGxvY2F0aW9uSW5mby5jaXR5TmFtZSwgbG9jYXRpb25JbmZvLmNvdW50cnkpO1xufSkoKTtcblxuLyoqXG4gKiBTZWFyY2hzIGxvY2F0aW9uIGdpdmVuIGJ5IHVzZXIuXG4gKiBAcGFyYW0ge29iamVjdH0gZSBFdmVudCBvYmplY3QuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHNlYXJjaExvY2F0aW9uKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBWaWV3LnRvZ2dsZUFjdGl2ZVNlY3Rpb24odG9kYXlTZWN0aW9uKTtcbiAgbG9jYXRpb25JbmZvID0gYXdhaXQgd2VhdGhlckluZm9ybWF0aW9uLmdldExvY2F0aW9uKHNlYXJjaElucHV0LnZhbHVlKTtcbiAgd2VhdGhlckluZm8gPSBhd2FpdCB3ZWF0aGVySW5mb3JtYXRpb24uZmV0Y2hEYXRhKGxvY2F0aW9uSW5mby5sYXRMb24pO1xuICBjb25zb2xlLmxvZyh3ZWF0aGVySW5mbyk7XG4gIHNlYXJjaElucHV0LnZhbHVlID0gJyc7XG4gIFZpZXcudG9kYXlTZWN0aW9uKHdlYXRoZXJJbmZvLCBsb2NhdGlvbkluZm8uY2l0eU5hbWUsIGxvY2F0aW9uSW5mby5jb3VudHJ5KTtcbn1cblxuc2VjdGlvbkNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIGZ1bmN0aW9uIChlKSB7XG4gIFZpZXcudG9nZ2xlQWN0aXZlU2VjdGlvbihlLnRhcmdldCk7XG4gIHN3aXRjaCAoZS50YXJnZXQuaWQpIHtcbiAgICBjYXNlICd0b2RheS1zZWN0aW9uJzpcbiAgICAgIFZpZXcudG9kYXlTZWN0aW9uKFxuICAgICAgICB3ZWF0aGVySW5mbyxcbiAgICAgICAgbG9jYXRpb25JbmZvLmNpdHlOYW1lLFxuICAgICAgICBsb2NhdGlvbkluZm8uY291bnRyeVxuICAgICAgKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3RvbW9ycm93LXNlY3Rpb24nOlxuICAgICAgVmlldy50b21vcnJvd1NlY3Rpb24oXG4gICAgICAgIHdlYXRoZXJJbmZvLFxuICAgICAgICBsb2NhdGlvbkluZm8uY2l0eU5hbWUsXG4gICAgICAgIGxvY2F0aW9uSW5mby5jb3VudHJ5XG4gICAgICApO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnc2l4LWRheXMtc2VjdGlvbic6XG4gICAgICBTaXhEYXlzTW9kdWxlLnNpeERheXNTZWN0aW9uKHdlYXRoZXJJbmZvKTtcbiAgICAgIGJyZWFrO1xuICB9XG59KTtcblxuc2VhcmNoRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGlmICghZ2VuZXJhbENvbnRhaW5lci5kYXRhc2V0LnNlYXJjaGluZyAmJiBzZWFyY2hJbnB1dC52YWx1ZS50cmltKCkgIT0gJycpIHtcbiAgICBzZWFyY2hMb2NhdGlvbihlKTtcbiAgfVxufSk7XG5cbnNlYXJjaEljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBpZiAoIWdlbmVyYWxDb250YWluZXIuZGF0YXNldC5zZWFyY2hpbmcgJiYgc2VhcmNoSW5wdXQudmFsdWUudHJpbSgpICE9ICcnKSB7XG4gICAgc2VhcmNoTG9jYXRpb24oZSk7XG4gIH1cbn0pO1xuXG5nZW5lcmFsQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZGlzcGxheS1tb3JlJykpIHtcbiAgICBWaWV3LmRpc3BsYXlDYXJkSW5mbyhlKTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiX19fQ1NTX0xPQURFUl9FWFBPUlRfX18iLCJwdXNoIiwibW9kdWxlIiwiaWQiLCJleHBvcnRzIiwiY3NzV2l0aE1hcHBpbmdUb1N0cmluZyIsImxpc3QiLCJ0b1N0cmluZyIsInRoaXMiLCJtYXAiLCJpdGVtIiwiY29udGVudCIsIm5lZWRMYXllciIsImNvbmNhdCIsImxlbmd0aCIsImpvaW4iLCJpIiwibW9kdWxlcyIsIm1lZGlhIiwiZGVkdXBlIiwic3VwcG9ydHMiLCJsYXllciIsInVuZGVmaW5lZCIsImFscmVhZHlJbXBvcnRlZE1vZHVsZXMiLCJrIiwiX2siLCJjc3NNYXBwaW5nIiwiYnRvYSIsImJhc2U2NCIsInVuZXNjYXBlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJzb3VyY2VNYXBwaW5nIiwic291cmNlVVJMcyIsInNvdXJjZXMiLCJzb3VyY2UiLCJzb3VyY2VSb290Iiwic3R5bGVzSW5ET00iLCJnZXRJbmRleEJ5SWRlbnRpZmllciIsImlkZW50aWZpZXIiLCJyZXN1bHQiLCJtb2R1bGVzVG9Eb20iLCJvcHRpb25zIiwiaWRDb3VudE1hcCIsImlkZW50aWZpZXJzIiwiYmFzZSIsImNvdW50IiwiaW5kZXhCeUlkZW50aWZpZXIiLCJvYmoiLCJjc3MiLCJzb3VyY2VNYXAiLCJyZWZlcmVuY2VzIiwidXBkYXRlciIsImFkZEVsZW1lbnRTdHlsZSIsImJ5SW5kZXgiLCJzcGxpY2UiLCJhcGkiLCJkb21BUEkiLCJ1cGRhdGUiLCJuZXdPYmoiLCJyZW1vdmUiLCJsYXN0SWRlbnRpZmllcnMiLCJuZXdMaXN0IiwiaW5kZXgiLCJuZXdMYXN0SWRlbnRpZmllcnMiLCJfaSIsIl9pbmRleCIsIm1lbW8iLCJpbnNlcnQiLCJzdHlsZSIsInRhcmdldCIsInN0eWxlVGFyZ2V0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwid2luZG93IiwiSFRNTElGcmFtZUVsZW1lbnQiLCJjb250ZW50RG9jdW1lbnQiLCJoZWFkIiwiZSIsImdldFRhcmdldCIsIkVycm9yIiwiYXBwZW5kQ2hpbGQiLCJlbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZXMiLCJhdHRyaWJ1dGVzIiwic3R5bGVFbGVtZW50Iiwibm9uY2UiLCJzZXRBdHRyaWJ1dGUiLCJpbnNlcnRTdHlsZUVsZW1lbnQiLCJzdHlsZVRhZ1RyYW5zZm9ybSIsImFwcGx5IiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwicmVtb3ZlU3R5bGVFbGVtZW50Iiwic3R5bGVTaGVldCIsImNzc1RleHQiLCJmaXJzdENoaWxkIiwiY3JlYXRlVGV4dE5vZGUiLCJfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJjYWNoZWRNb2R1bGUiLCJfX3dlYnBhY2tfbW9kdWxlc19fIiwibiIsImdldHRlciIsIl9fZXNNb2R1bGUiLCJkIiwiYSIsImRlZmluaXRpb24iLCJrZXkiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwicHJvcCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIm5jIiwiX2dlbmVyYWxDb250YWluZXIiLCJjbGVhckNvbnRlbnQiLCJjcmVhdGVDb250YWluZXJzIiwiX2NyZWF0ZURldGFpbENvbnRhaW5lciIsIl9jcmVhdGVMb2NhdGlvbkNvbnRhaW5lciIsIl9jcmVhdGVXZWF0aGVyRGVzY3JpcHRpb24iLCJfY3JlYXRlQ3VycmVudFRlbXAiLCJfY3JlYXRlSG91ckNhcmQiLCJ1cGRhdGVNb3JlSW5mb3JtYXRpb24iLCJWaWV3Iiwic2l4RGF5cyIsIl90b3BDb250YWluZXIiLCJfY3VycmVudEZlZWxzVGVtcCIsIl90b2RheURldGFpbHMiLCJfZGFpbHlEZXRhaWxzIiwiX2NhcmRzIiwiYXBwZW5kIiwicHJvcGVydHkiLCJ2YWx1ZSIsImRldGFpbENvbnRhaW5lciIsInByb3BlcnR5RWwiLCJ2YWx1ZUVsIiwidGltZXN0YW1wIiwiY2l0eU5hbWUiLCJjb3VudHJ5TmFtZSIsImxvY2F0aW9uSW5mbyIsImNpdHlMb2NhdGlvbiIsImNvdW50cnlMb2NhdGlvbiIsIndlYXRoZXJJbmZvcm1hdGlvbiIsInJlZ2lvbk5hbWVzIiwiZGF0ZUVsZW1lbnQiLCJjb252ZXJ0RGF0ZVRvTG9jYWxlIiwid2VhdGhlck9iamVjdCIsImNvbnRhaW5lciIsImRlc2NyaXB0aW9uIiwid2VhdGhlciIsIndlYXRoZXJJY29uIiwiYWx0Iiwic3JjIiwiaWNvbiIsImN1cnJUZW1wIiwiZmVlbHNUZW1wIiwidG9kYXlUZW1wIiwicm91bmRlZFRlbXAiLCJNYXRoIiwicm91bmQiLCJjdXJyZW50VGVtcCIsImZlZWxzTGlrZVRlbXAiLCJzbWFsbEN1cnJlbnQiLCJzbWFsbEZlZWxzIiwiY3VycmVudENvbnRhaW5lciIsImZlZWxzQ29udGFpbmVyIiwiaG91cmx5T2JqZWN0IiwiZnJvbUhvdXIiLCJ0b0hvdXIiLCJjYXJkRWxlbWVudHMiLCJ0aXRsZSIsImNhcmQiLCJkZXRhaWxIb3VycyIsImhvdXJFbCIsImR0IiwiaWNvbkNvbnRhaW5lciIsInNtYWxsSWNvbiIsImljb25EZXNjcmlwdGlvbiIsInRlbXAiLCJmZWVsc19saWtlIiwiaW5zZXJ0QWRqYWNlbnRFbGVtZW50Iiwid2VhdGhlck9iaiIsIm1vZGlmaWVkIiwiZWxlbWVudHMiLCJpbmZvcm1hdGlvbiIsImRlc3RydWN0dXJlT2JqZWN0IiwidGV4dENvbnRlbnQiLCJyZXBsYWNlIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsImNsYXNzTmFtZSIsIm5ld0VsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJkaXNwbGF5TG9hZGVyIiwibWVzc2FnZSIsImVycm9yIiwibG9hZGVyIiwibG9hZENvbnRhaW5lciIsImxlZ2VuZCIsInRvZ2dsZUFjdGl2ZVNlY3Rpb24iLCJhY3RpdmVTZWN0aW9uIiwiY29udGFpbnMiLCJ0b2RheVNlY3Rpb24iLCJkYXRhc2V0Iiwic2VhcmNoaW5nIiwibG9jYXRpb24iLCJjdXJyZW50Iiwid2VhdGhlckRlc2NyaXB0aW9uIiwiY3VycmVudFRlbXBlcmF0dXJlIiwibW9yZUluZm9ybWF0aW9uIiwiaG91cmx5Q2FyZHMiLCJob3VybHkiLCJmb3JFYWNoIiwiaHRtbCIsInRvbW9ycm93U2VjdGlvbiIsImRhaWx5IiwiZGlzcGxheUNhcmRJbmZvIiwiZGF5Q2FyZCIsInBhcmVudEVsZW1lbnQiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJ0b2dnbGUiLCJfYXBpS2V5IiwiZmV0Y2giLCJtb2RlIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YVJlc3BvbnNlIiwiY29vcmQiLCJsYXQiLCJ0b0ZpeGVkIiwibG9uIiwiY291bnRyeSIsIm5hbWUiLCJzdGF0ZSIsImxhdExvbiIsInJlZ2lvbk5hbWUiLCJJbnRsIiwiRGlzcGxheU5hbWVzIiwibmF2aWdhdG9yIiwibGFuZ3VhZ2UiLCJ0eXBlIiwib2YiLCJnZXRIb3VyIiwiY29udmVydERhdGUiLCJEYXRlIiwiaG91cnMiLCJnZXRIb3VycyIsIm1pbnV0ZXMiLCJnZXRNaW51dGVzIiwiYW1QbSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsIndlZWtkYXkiLCJtb250aCIsImRheSIsImZldGNoRGF0YSIsImdldExvY2F0aW9uIiwib2JqZWN0IiwicHJvcGVydGllcyIsImZyb21FbnRyaWVzIiwiU2l4RGF5c01vZHVsZSIsImNhcmRzQ29udGFpbmVyIiwiY29udGFpbmVyRWxlbWVudHMiLCJzZWN0aW9uVGl0bGUiLCJ1cHBlckNvbnRhaW5lciIsInRlbXBDb250YWluZXIiLCJtYXhUZW1wIiwibWF4IiwibWluVGVtcCIsIm1pbiIsImNhcmREYXRlIiwic3Bhbk1vcmVJbmZvIiwiaW5mb0NvbnRhaW5lciIsIl9jcmVhdGVTaXhEYXlzQ2FyZCIsIndlYXRoZXJJbmZvIiwic2VhcmNoSW5wdXQiLCJzZWFyY2hGb3JtIiwic2VhcmNoSWNvbiIsInNlY3Rpb25Db250YWluZXIiLCJnZW5lcmFsQ29udGFpbmVyIiwic2VhcmNoTG9jYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJhZGRFdmVudExpc3RlbmVyIiwidHJpbSIsInN0b3BQcm9wYWdhdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=
