import React from 'react'

export const Artwork = props => (

  <svg width={605} height={95} {...props}>
    <defs>
      <linearGradient x1="95.449%" y1="50%" x2="0%" y2="81.87%" id="b">
        <stop stopColor="#3D00C3" offset="0%" />
        <stop stopColor="#81027E" offset="49.616%" />
        <stop stopColor="#CF0203" offset="100%" />
      </linearGradient>
      <path d="M472.46 399.24c1.04 1.36 1.6 2.64 1.6 6.56 0 2.32-.8 5.04-2.16 7.6-.64 1.2-.64 1.76-1.44 3.36-5.76 12-12.4 23.84-23.92 28.08-.88.32-1.76.32-2.56.32-2 0-4.16-.56-6-1.04-.08.72-.96.72-2.16.72-1.36 0-3.6-1.52-4.4-2.96-2.56-1.04-6.8-2.96-6.8-5.68 0-1.04.72-1.36 1.6-1.36.72 0 1.68.24 2.96.24.96 0 1.52.88 2.16.88.24 0 .4 0 .48-.24 2.4-9.76 5.84-19.68 9.76-29.2 0-.48-.08-.48-.32-.48-.64 0-2.48 1.84-3.84 1.84-.72 0-1.6-.72-1.6-1.76 0-3.76.08-4.16 5.68-8 4.48-3.04 11.04-5.92 16.88-5.92 2.32 0 5.52.32 7.68 1.84s4.4 2.56 6.4 5.2zm-6.32.56c-1.44-2.08-3.36-2.8-5.36-2.8-3.04 0-6.16 1.68-8.48 2.24.24.24.32.48.32.56 0 1.44-.88 1.12-1.52 2.56-5.36 12-11.28 23.92-13.04 36.56 0 .48 0 .56.48.72.56.16 1.68.24 2.48.24 2.96 0 5.52-1.28 7.68-3.36 7.6-7.52 12.64-16.48 16.56-26.08.72-1.76 1.84-4.56 1.84-6.48 0-.4-.32-3.2-.96-4.16zm30 6.4c.72 2 1.76 4.4 4.08 4.4 3.2 0 5.04-.24 6.88-.24 1.317 0 2.59.212 3.518.591.396.163-.443.866-.947 1.651-.61.95-.977 1.995-1.284 2.039-1.6.24-3.367.999-5.447 1.319-1.6.24-2.56.24-3.12.24-.64 0-.8.08-.96.64-2.08 8.56-4.96 16-10.08 21.44-2.24 2.4-4.4 4.72-7.2 4.72-.72 0-1.44-.16-1.92-.4-3.04-1.44-5.28-3.2-6-5.04-.88-2.24-1.2-4.64-1.2-6.64 0-6.56 3.28-12.32 6.96-17.84 1.12-1.68 1.12-1.28 1.92-2.4 2.56-3.6 5.92-7.36 9.44-7.36 1.28 0 2.88.32 4.24 1.52.64.56.88.72 1.12 1.36zm-4.08 5.28c-.4-.4-.56-.88-.64-1.2-.24-.8-.48-1.36-.8-1.36-.32 0-.8.32-1.2.8-.32.4-1.12.8-1.52 1.36-2.48 3.12-10 13.04-10 22.4 0 .24 0 .56.24 1.12.24.64 1.2 2.16 1.92 2.64.24.16.48.16.72.16.8 0 1.2-.48 1.52-.64.56-.24.72-.48 1.36-1.44 4.64-6.96 8.96-13.2 8.96-21.28 0-.32 0-1.28-.08-1.68-.08-.56-.24-.64-.48-.88zm13.28 10.24c2.4-5.52 4.24-9.36 7.76-14.72.64-.96.56-1.12 1.28-1.76.64-.56 1.6-.8 2.8-.8 1.84 0 2.88.48 3.2 1.2.16.4.4 1.04.4 1.44 0 .88-.4 2.32-1.76 3.76-.88.96-3.12 3.52-5.12 7.2-1.12 2.08-3.04 5.92-5.68 12.48-.56 1.44-1.6 5.36-1.6 5.6 0 .32 0 .8.24.8.48 0 .8-.24 1.36-1.04 10.8-15.36 16.72-18.56 18.48-22.32 1.44-3.04 1.76-3.28 2.8-3.28 1.2 0 1.6.72 2.88.8.88.08 1.6 1.2 1.6 2.16 0 .32-.4 1.44-.8 2.08-2.88 4.72-4.4 7.76-5.6 11.84-.48 1.6-.96 5.6-.96 7.2 0 1.44.48 2.64.64 3.44.24 1.44 2.24 2.48 2.8 2.88.64.48 1.2 1.04 1.2 1.84 0 .56-.56 1.92-2.08 1.92-.64 0-3.2-.24-4.16-1.12-1.12-1.04-2.08-1.36-3.12-2.8-.96-1.28-1.36-2.96-1.36-4.96 0-4.72.72-6.08.72-6.32 0-.16-.08-.32-.24-.32-.16 0-.24 0-.48.32-3.28 4.32-5.44 7.04-7.36 9.76-1.68 2.4-2.32 2.32-3.44 3.52-.64.72-2.24.88-2.96.88-.96 0-4.72-2.4-5.76-3.68-.32-.4-.56-1.44-.56-2.32 0-2.48.72-3.04.96-4.8.32-2.32 2.56-7.76 3.92-10.88zm42.16-21.6c.72-1.28 3.6-6.4 3.84-7.04.4-1.04 1.12-1.52 1.92-1.52.24 0 .56.08 1.04.08s1.76.24 2.4.88c.64.64.88 1.76.88 2.8 0 2.24-1.76 3.44-4.16 7.44l-4.96 8.4c-.48.8-1.84 1.28-2.56 1.28-1.52 0-2.24-.48-2.64-.56-.72-.16-1.2-1.04-1.2-1.92 0-.32.08-.48.48-1.2l4.96-8.64zm28.32-8.08c-1.04 6.24-4.88 11.68-7.44 17.12-.8 1.68-1.84 4.72-1.84 4.96 0 .16.16.24.32.24.24 0 1.2-.16 2-.32 3.52-.72 8.08-2.4 10.72-4 .4-.24.72-.4.88-.4 1.36 0 3.92 1.12 3.92 2.08 0 1.04-.88 2.32-2.64 3.04-2.16.88-2.16 1.12-3.6 1.68-3.92 1.52-10.72 3.04-12.4 3.6-.72.24-1.2.64-1.52 1.2-.64 1.12-1.04 2.64-1.36 3.84-.24.88-.72 1.68-.88 2.56-.48 2.64-3.2 9.44-3.68 13.44-.08.72-.88 2.8-2 3.36-.32.16-.88.24-1.2.24-.96 0-2.24-.4-2.88-.88-.64-.48-.88-1.2-.88-1.92 0-.64.08-1.68.32-2.4 2-5.92 3.44-12.88 6-19.04.08-.24.16-.4.16-.56 0-.16-.08-.32-.4-.48-2.88-1.44-3.36-3.52-5.2-5.04-.4-.32-.4-.72-.4-.96 0-.56.32-.72.96-1.04.48-.24.88-.4 1.6-.4 1.76 0 3.76 1.28 5.2 1.28.72 0 1.2-.4 1.36-1.12.24-.88.64-2.08 1.28-3.76 1.92-4.88 4.08-11.12 6.8-16.96.48-1.04.56-1.04.88-1.04 1.28 0 1.44-.4 2.24-.4.72 0 2.08.24 3.04.64.4.16.72.32.72.56 0 .16 0 .4-.08.88zm46.88 22.08c-8.32 14.88-10 19.44-10 20.32 0 .24.08.32.32.32 2.667-2.293 7.12-5.44 13.36-9.44-.356 1.66-.582 2.915-.678 3.765-.096.85-.096 1.597 0 2.24-12.372 10.607-19.773 18.793-22.202 24.555-2.72 6.56-5.68 13.44-6.64 15.2-1.68 3.12-2.72 3.36-5.76 3.36-1.52 0-3.76-.8-4.16-2.32-.16-.56-.24-1.2-.24-1.76 0-2 1.44-4.64 5.44-10.8 6.08-9.36 7.12-7.2 15.84-27.36v-.16c0-.08-.08-.16-.16-.16s-.16 0-.24.08c-3.6 3.44-7.04 7.28-11.04 7.28-.8 0-1.68-.16-2.4-.48-1.68-.72-3.36-2.24-4.8-3.68-.4-.4-.56-.64-.56-2.32 0-3.44 1.52-5.68 2.32-7.44.96-2.08 5.04-7.28 7.84-10.4 8.4-9.44 14.96-10.16 15.28-10.16 3.44 0 6.56 1.2 8.24 3.44.72.96.88 1.84.88 2.8 0 1.2-.08 2.08-.64 3.12zm-5.12-2.4c.16-.24.24-.4.24-.56 0-.16-.16-.32-.16-.48 0-.24 0-.48-.8-.8-.4-.16-.88-.24-1.36-.24-1.44 0-2.56.8-3.68 1.68-1.6 1.28-2.24 1.36-3.36 2.4-4.32 4-10.56 11.52-12.24 15.44-.48 1.12-.96 2.56-.96 3.04 0 .32.64.64.96.64.4 0 .96 0 1.6-.4 7.2-4.56 14.88-13.36 19.76-20.72zm24.08 31.52c-1.44.8-1.84.8-2.88.8-.96 0-1.76-.08-3.04-.56-1.76-.64-4.56-1.92-5.12-2.24-1.6-.88-3.12-2.88-4-5.52-.56-1.6-.96-4.64-.96-6.16 0-.72.08-1.52.4-2.64 2.24-8.16 7.68-15.2 13.76-21.68 1.36-1.44 4.64-3.6 8.56-3.6 2.16 0 3.28.32 4.88.88.88.32 2.56 1.76 2.56 4.96 0 2.08-.88 3.84-1.84 5.76-.8 1.6-1.44 2.48-2.56 3.76-5.52 6.24-11.76 13.2-18.56 16.96-.4.24-.48.4-.48.64 0 1.28 1.2 2.96 1.92 3.36.88.48 1.68.64 2.48.64 1.36 0 2.56-.32 6.16-2.24 5.52-2.96 8.88-7.28 13.68-10.32.88-.56 1.28-.56 1.6-.56.304 0 .651.082 1.022.52.115.137-.295 1.286-.617 2.404-.275.958-.444 1.9-.645 2.1-3.062 3.055-5.676 6.854-16.32 12.736zm6-32.08c.8-1.2 1.44-2.24 1.44-3.68 0-.64 0-.96-.48-.96s-.96.24-1.68.72c-.88.56-.8.32-1.6 1.04-5.2 4.64-10.8 11.2-12.56 18.32 0 .32.08.4.16.4.16 0 .32-.08.56-.24 4.72-3.6 8.64-8 12.24-12.32 1.2-1.44.88-1.68 1.92-3.28zm31.84-19.12c-1.04 6.24-4.88 11.68-7.44 17.12-.8 1.68-1.84 4.72-1.84 4.96 0 .16.16.24.32.24.24 0 1.2-.16 2-.32 3.52-.72 8.08-2.4 10.72-4 .4-.24.72-.4.88-.4 1.36 0 3.92 1.12 3.92 2.08 0 1.04-.88 2.32-2.64 3.04-2.16.88-2.16 1.12-3.6 1.68-3.92 1.52-10.72 3.04-12.4 3.6-.72.24-1.2.64-1.52 1.2-.64 1.12-1.04 2.64-1.36 3.84-.24.88-.72 1.68-.88 2.56-.48 2.64-3.2 9.44-3.68 13.44-.08.72-.88 2.8-2 3.36-.32.16-.88.24-1.2.24-.96 0-2.24-.4-2.88-.88-.64-.48-.88-1.2-.88-1.92 0-.64.08-1.68.32-2.4 2-5.92 3.44-12.88 6-19.04.08-.24.16-.4.16-.56 0-.16-.08-.32-.4-.48-2.88-1.44-3.36-3.52-5.2-5.04-.4-.32-.4-.72-.4-.96 0-.56.32-.72.96-1.04.48-.24.88-.4 1.6-.4 1.76 0 3.76 1.28 5.2 1.28.72 0 1.2-.4 1.36-1.12.24-.88.64-2.08 1.28-3.76 1.92-4.88 4.08-11.12 6.8-16.96.48-1.04.56-1.04.88-1.04 1.28 0 1.44-.4 2.24-.4.72 0 2.08.24 3.04.64.4.16.72.32.72.56 0 .16 0 .4-.08.88zm39.6 13.84c1.12 1.2 1.52 3.6 1.52 5.2 0 3.04-1.2 5.2-2.32 6.64-.64.8-.72.88-1.12.88-.88 0-2.24-.56-2.8-1.04-.72-.56-1.2-1.36-1.2-2.56 0-.16.08-.4.24-.64.72-1.2 1.36-2.32 1.36-3.68 0-.64-.24-1.6-.56-2.16-.32-.56-1.12-1.12-1.76-1.12-.56 0-4.24 4.56-4.88 8.24-.08.56-.16 1.12-.16 2.08 0 .48.4 4.08.56 5.12.72 6 2.56 14.96 2.56 18.24 0 .64-.32 1.12-.64 1.44-1.44 1.44-2.88 2.88-5.04 2.88-.72 0-1.6-.16-2-.32-5.28-2.16-9.04-6.32-11.68-10.72-.24-.4-.48-.96-.48-1.2 0-1.2 1.2-2.96 2.88-2.96 1.6 0 2.32.16 3.04 1.12 1.84 2.48 2.8 5.52 5.2 7.68.8.72 1.2.88 1.6.88.48 0 .8-.32.8-.64s0-.48-.4-2.48c-1.12-5.28-2.56-17.28-2.56-18.88 0-2.16.96-6.72 2.88-9.76 2.32-3.68 5.6-5.12 7.12-5.12 4.4 0 6.16 1.12 7.84 2.88zm15.635 33.7l-.755.7c-1.68 1.52-4.64 3.84-8.24 3.84-2.4 0-5.12-3.36-6-6.32-.32-1.12-.4-2.24-.4-3.36 0-2 .32-3.76 1.28-6.48.56-1.52.88-2.88 1.36-4 2.48-5.84 4.8-11.6 7.76-17.76.8-1.68 2.48-2.16 4-2.16.8 0 1.84.16 2.4.64.4.32.64.56.64 1.28 0 4.24-3.28 6.24-5.12 10.16-1.36 2.96-3.6 8.4-4.72 11.36-1.36 3.6-1.92 6.64-1.92 7.84 0 .72.08 2.56 1.44 2.56 1.76 0 2.64-.48 5.84-2.72.827-.586 1.402-.994 1.89-1.268.369-.207-.118 1.53 0 3.108.09 1.191.907 2.244.545 2.58zm9.405-51.86c.8.88.96 1.84.96 2.64 0 .48-.08 1.04-.4 1.44-1.44 1.76-3.36 3.92-5.12 3.92-1.6 0-2.8-.88-3.2-1.6-.4-.8-.56-1.84-.56-2.72 0-1.12.32-2.48 1.04-3.36.8-.96 2.24-1.36 3.92-1.36 1.28 0 2.8.4 3.36 1.04zm46.4-4.48c0 1.84-.64 2.88-1.68 4.4-.72 1.04-.96 2.08-1.84 3.44-4.64 7.44-10.72 15.52-13.36 22.8l-1.28 3.52c-4.8 13.44-6.08 19.28-6.08 22.16 0 2.88.64 3.84.64 4.48 0 .24-.08.32-.32.56-1.12 1.12-.88 1.68-2.88 1.68-.72 0-2.8-1.04-2.88-1.52-.32-1.84-.48-3.52-.48-5.2 0-4.16.88-7.6 2.08-11.84.64-2.24 2.48-5.6 2.48-5.76 0-.08 0-.16-.16-.16s-.32.16-.8.72c-6.4 7.44-12.64 15.28-20.48 20-.8.48-1.76.56-2.4.56-1.6 0-5.36-1.92-5.68-2.48-.88-1.52-1.36-2.96-1.36-4.56 0-2.24.88-4.88 2.8-8.56 3.84-7.28 10.16-13.52 16.88-18 1.2-.8 3.68-1.52 5.76-1.52.88 0 1.68.16 2.24.4 1.04.48 2.8.88 3.76 1.52.4 0 .56 0 .64-.08 8.32-9.04 11.76-19.2 18.64-28.24.48-.64.8-.96 1.84-.96s3.92 1.28 3.92 2.64zm-27.68 30.24c0-.48-.56-.8-1.84-.8-.8 0-1.36.08-2 .4-7.76 3.92-15.36 12.4-18.64 21.2-.08.24-.24.8-.24 1.04 0 .8.16 1.84.56 1.84.32 0 .48-.08.8-.32.48-.4.96-.4 1.68-.96 6.88-5.36 12.8-12.56 18-19.52.96-1.28 1.68-1.52 1.68-2.88zm29.68 29.76c-1.44.8-1.84.8-2.88.8-.96 0-1.76-.08-3.04-.56-1.76-.64-4.56-1.92-5.12-2.24-1.6-.88-3.12-2.88-4-5.52-.56-1.6-.96-4.64-.96-6.16 0-.72.08-1.52.4-2.64 2.24-8.16 7.68-15.2 13.76-21.68 1.36-1.44 4.64-3.6 8.56-3.6 2.16 0 3.28.32 4.88.88.88.32 2.56 1.76 2.56 4.96 0 2.08-.88 3.84-1.84 5.76-.8 1.6-1.44 2.48-2.56 3.76-5.52 6.24-11.76 13.2-18.56 16.96-.4.24-.48.4-.48.64 0 1.28 1.2 2.96 1.92 3.36.88.48 1.68.64 2.48.64 1.36 0 2.56-.32 6.16-2.24 5.52-2.96 8.88-7.28 13.68-10.32.88-.56 1.28-.56 1.6-.56.301 0 .643.127 1.013.56.1.116-.108.95-.348 1.866-.293 1.115-.66 2.353-.898 2.591-3.065 3.057-5.675 6.856-16.327 12.743zm6-32.08c.8-1.2 1.44-2.24 1.44-3.68 0-.64 0-.96-.48-.96s-.96.24-1.68.72c-.88.56-.8.32-1.6 1.04-5.2 4.64-10.8 11.2-12.56 18.32 0 .32.08.4.16.4.16 0 .32-.08.56-.24 4.72-3.6 8.64-8 12.24-12.32 1.2-1.44.88-1.68 1.92-3.28zm31.84-19.12c-1.04 6.24-4.88 11.68-7.44 17.12-.8 1.68-1.84 4.72-1.84 4.96 0 .16.16.24.32.24.24 0 1.2-.16 2-.32 3.52-.72 7.38-2.44 10.02-4.04.254-.152-.252 2.183-.63 4.04-.217 1.07-.03 1.97-.557 2.175-3.92 1.52-10.273 3.265-11.953 3.825-.72.24-1.2.64-1.52 1.2-.64 1.12-1.04 2.64-1.36 3.84-.24.88-.72 1.68-.88 2.56-.48 2.64-3.2 9.44-3.68 13.44-.08.72-.88 2.8-2 3.36-.32.16-.88.24-1.2.24-.96 0-2.24-.4-2.88-.88-.64-.48-.88-1.2-.88-1.92 0-.64.08-1.68.32-2.4 2-5.92 3.44-12.88 6-19.04.08-.24.16-.4.16-.56 0-.16-.08-.32-.4-.48-2.88-1.44-3.36-3.52-5.2-5.04-.4-.32-.4-.72-.4-.96 0-.56.32-.72.96-1.04.48-.24.88-.4 1.6-.4 1.76 0 3.76 1.28 5.2 1.28.72 0 1.2-.4 1.36-1.12.24-.88.64-2.08 1.28-3.76 1.92-4.88 4.08-11.12 6.8-16.96.48-1.04.56-1.04.88-1.04 1.28 0 1.44-.4 2.24-.4.72 0 2.08.24 3.04.64.4.16.72.32.72.56 0 .16 0 .4-.08.88zm8.16 15.92c.72 1.12 1.2 2.56 1.2 4.48 0 .88-.16 1.76-.48 2.72-.24.96-.32 1.12-.32 1.28 0 .24 0 .32.24.32.08 0 .4-.08 1.04-.64 4.4-3.36 8.24-5.6 11.12-6.56.24-.08.72-.16.96-.16 2.24 0 4.48.64 5.84 2.24.32.32.56.88.56 1.36 0 2.48-2.16 3.52-2.8 3.52-1.2 0-2.48-.8-3.6-.8-.24 0-.56 0-1.28.32-8.72 4.08-17.36 11.2-20.16 22.96-.56 2.4-1.44 3.44-2 3.84-.4.48-1.12.72-1.44.72-1.28-.08-1.84-1.04-2.4-1.68-.8-.8-1.44-2.08-1.52-3.04 0-2.72 3.36-5.36 4.32-8.4 2-6.08 4.24-12.08 5.52-18.48.08-.72.16-1.12.16-1.28 0-.48-.64-1.12-.72-1.84 0-.64 1.28-1.76 3.12-1.76 1.12 0 2.4.48 2.64.88zm47.36.24c.32.8 1.04 1.52 1.92 1.52.4 0 1.6.08 2.24 1.04.16.24.16.32.16.48 0 .32-.16.64-.32.88-3.52 4.8-7.76 10.8-9.28 16.96-.56 2.24-1.12 4.64-1.12 7.12 0 2.08.48 4.16 1.68 6 .08.16.16.32.16.48 0 .16-.32.96-1.68 1.12-.48.08-1.04.32-1.52.32-1.2 0-2.96-.56-3.44-1.6-1.04-2.32-1.36-4.64-1.36-6.88 0-2.4.32-3.76.32-4 0-.32 0-.4-.32-.4s-1.04.56-1.92 1.44l-4.32 4c-4.16 3.92-6.72 5.04-9.52 6-.48.16-.96.32-1.28.32-.88 0-1.84-.56-5.6-3.6-.4-.32-1.76-1.68-1.76-4.72 0-2.64.88-6 4.8-11.84 4.72-7.04 9.12-10.24 11.52-12 3.92-2.88 8.08-4.96 12.8-6.32.56-.16 1.2-.24 1.76-.24 1.84 0 3.44.88 4.88 2.32.4.4 1.04 1.12 1.2 1.6zm-5.12 1.04c-.24 0-1.44.24-2.48.8-7.52 4-13.44 8.4-18 13.92-3.36 4.08-6 8.8-6 11.12 0 .96.32 2.16 1.76 2.16.64 0 2.48-.88 3.92-2.24 7.44-6.96 15.84-12.32 19.92-19.92.56-1.04 1.44-2.16 2.32-3.04.24-.24.4-.72.4-1.2 0-.56-.48-1.6-1.84-1.6zm24.96 23.92c3.52-2.64 7.52-5.44 9.76-5.44.586 0 1.28.503 1.81 1.018.254.246-.53 1.184-.85 1.955-.29.7-.099 1.245-.257 1.326-2.253 1.166-4.825 3.181-7.823 5.621-4.48 3.6-8.48 5.92-11.84 5.92-4.4 0-7.68-3.12-8.08-3.92-.64-1.28-.96-2.48-.96-3.76 0-1.92.72-4 1.28-6 .16-.56.4-2 .96-3.12 4.16-8.32 9.92-18.08 16.64-21.44.48-.24.64-.24 1.28-.24 2.72 0 6.24 1.28 8.32 3.36.32.32.32.48.32 1.12 0 .88.16.96.16 1.2 0 .16 0 .24-.08.56-.24.96-2.72 4.72-2.72 7.52 0 .64-.48 1.2-1.52 1.2-.56 0-1.12-.16-1.6-.56l-2.08-1.52a2.12 2.12 0 0 1-.88-1.76c0-1.6 1.76-3.52 1.76-4.8 0-.32-.24-.8-.64-.8-.48 0-.64.16-1.28.8-3.36 3.36-7.04 8.08-9.76 12.88-2.8 4.96-4.64 10.24-4.64 12.24 0 1.04.64 1.68 1.36 1.68 3.68 0 7.44-2.08 11.36-5.04zm36.4-46c0 2.32-1.12 3.84-2.4 5.6-1.52 2.08-1.6 2.48-2 3.12-3.76 6.16-5.84 12.88-8.64 19.36-.16.32-.24.56-.24.72 0 .16.08.24.24.24.24 0 .56-.16.96-.4 5.12-3.12 10.32-6.8 13.6-12 .56-.88 1.04-1.28 1.6-1.68.8-.56 1.68-.8 2.4-.8s1.12.08 2.16.72 1.44 1.12 1.44 1.44c0 1.2-2 4-3.6 5.36-1.28 1.12-1.28 1.6-2.24 2.4-4.08 3.44-8.56 6.4-12.8 9.2-.48.32-.56.72-.56 1.04 0 .56.4 1.36 1.68 5.52.48 1.52 3.68 8.16 4.4 9.12 2.32 3.2 3.04 4.08 6.56 5.52.96.4 1.68-.32 1.68 1.2 0 1.04-1.36 1.52-1.68 2-.4.64-.88.88-1.92.88-3.04 0-4.88-1.04-6.16-2.32-.72-.72-1.12-1.12-1.44-1.36-.48-.4-1.04-.8-1.52-1.6-4.56-8.32-6.08-14.24-7.12-16.64-.24-.56-.48-.64-.64-.64-.08 0-.24.08-.32.32-1.76 4.24-3.6 9.04-4.48 14-.32 1.68-1.04 5.52-2.72 5.52-.64 0-1.12.24-2 .24-.4 0-2.8-.16-2.8-2.56 0-.56.24-1.6.56-2.4.16-.4.24-.88.32-1.12 5.36-16.56 13.04-32.64 19.92-48.96l.88-2.08c.4-1.04.88-1.52 1.28-1.52.64 0 .72.08 2.64.32 1.92.24 2.96 1.12 2.96 2.24zm19.84 56.08c-1.44.8-1.84.8-2.88.8-.96 0-1.76-.08-3.04-.56-1.76-.64-4.56-1.92-5.12-2.24-1.6-.88-3.12-2.88-4-5.52-.56-1.6-.96-4.64-.96-6.16 0-.72.08-1.52.4-2.64 2.24-8.16 7.68-15.2 13.76-21.68 1.36-1.44 4.64-3.6 8.56-3.6 2.16 0 3.28.32 4.88.88.88.32 2.56 1.76 2.56 4.96 0 2.08-.88 3.84-1.84 5.76-.8 1.6-1.44 2.48-2.56 3.76-5.52 6.24-11.76 13.2-18.56 16.96-.4.24-.48.4-.48.64 0 1.28 1.2 2.96 1.92 3.36.88.48 1.68.64 2.48.64 1.36 0 2.56-.32 6.16-2.24 4.944-2.651 8.155-6.393 12.22-9.33.284-.204-1.738 3.083-2.43 5.577a14.898 14.898 0 0 0-.517 3.593c-3.707 2.854-7.225 5.2-10.553 7.04zm6-32.08c.8-1.2 1.44-2.24 1.44-3.68 0-.64 0-.96-.48-.96s-.96.24-1.68.72c-.88.56-.8.32-1.6 1.04-5.2 4.64-10.8 11.2-12.56 18.32 0 .32.08.4.16.4.16 0 .32-.08.56-.24 4.72-3.6 8.64-8 12.24-12.32 1.2-1.44.88-1.68 1.92-3.28zm60.96-27.92c0 1.84-.64 2.88-1.68 4.4-.72 1.04-.96 2.08-1.84 3.44-4.64 7.44-10.72 15.52-13.36 22.8l-1.28 3.52c-4.8 13.44-6.08 19.28-6.08 22.16 0 2.88.64 3.84.64 4.48 0 .24-.08.32-.32.56-1.12 1.12-.88 1.68-2.88 1.68-.72 0-2.8-1.04-2.88-1.52-.32-1.84-.48-3.52-.48-5.2 0-4.16.88-7.6 2.08-11.84.64-2.24 2.48-5.6 2.48-5.76 0-.08 0-.16-.16-.16s-.32.16-.8.72c-6.4 7.44-12.64 15.28-20.48 20-.8.48-1.76.56-2.4.56-1.6 0-5.36-1.92-5.68-2.48-.88-1.52-1.36-2.96-1.36-4.56 0-2.24.88-4.88 2.8-8.56 3.84-7.28 10.16-13.52 16.88-18 1.2-.8 3.68-1.52 5.76-1.52.88 0 1.68.16 2.24.4 1.04.48 2.8.88 3.76 1.52.4 0 .56 0 .64-.08 8.32-9.04 11.76-19.2 18.64-28.24.48-.64.8-.96 1.84-.96s3.92 1.28 3.92 2.64zm-27.68 30.24c0-.48-.56-.8-1.84-.8-.8 0-1.36.08-2 .4-7.76 3.92-15.36 12.4-18.64 21.2-.08.24-.24.8-.24 1.04 0 .8.16 1.84.56 1.84.32 0 .48-.08.8-.32.48-.4.96-.4 1.68-.96 6.88-5.36 12.8-12.56 18-19.52.96-1.28 1.68-1.52 1.68-2.88z" id="a" />
    </defs>
    <g transform="translate(-424 -380)" fill="none" fillRule="evenodd">
      <use fill="#FFF" xlinkHref="#a" />
      <use fill="url(#b)" xlinkHref="#a" />
    </g>
  </svg>
)

export default Artwork