import { motion } from 'framer-motion';
import Head from 'next/head';
import { GridItemStyle } from '../grid-item';

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 20 },
};

function Layout({ children, title }) {
  const t = `${title} - Mugisho Mpozi`;
  return (
    <motion.article
      initial={{
        opacity: 0,
        x: 0,
        y: 20,
        transition: { duration: 0.9 },
      }}
      animate={{
        opacity: 1,
        x: 0,
        y: 0,
        transition: { duration: 0.9, type: 'easeInOut' },
      }}
      exit={{
        opacity: 0,
        x: -0,
        y: 20,
        transition: { duration: 0.9 },
      }}
      variants={variants}
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
  );
}

export default Layout;
