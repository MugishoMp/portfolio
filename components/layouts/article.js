import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import { GridItemStyle } from '../grid-item';
// import { AnimatePresence } from 'framer-motion';

function Layout({ children, title }) {
  const t = `${title} - Mugisho Mpozi`;
  console.log(t);
  return (
    <AnimatePresence mode="sync">
      <motion.article
        key={title}
        initial={{
          opacity: 0,
          x: 0,
          y: 20,
          transition: { duration: 0.5, type: 'easeInOut' },
        }}
        animate={{
          opacity: 1,
          x: 0,
          y: 0,
          transition: { duration: 0.5, type: 'easeInOut', delay: 0.5 },
        }}
        exit={{
          opacity: 0,
          x: 0,
          y: 20,
          transition: { duration: 0.4, type: 'easeInOut' },
        }}
        // variants={variants}
        style={{ position: 'relative' }}
      >
        <>
          {title && (
            <Head>
              <title>
                {t}
              </title>
            </Head>
          )}
          {children}
          <GridItemStyle />
        </>
      </motion.article>
    </AnimatePresence>
  );
}

export default Layout;
