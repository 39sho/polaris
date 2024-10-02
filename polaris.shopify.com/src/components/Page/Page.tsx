import {useRef, useCallback, useEffect, useState} from 'react';
import {useTOC} from '../../utils/hooks';
import {className, toPascalCase} from '../../utils/various';
import Longform from '../Longform';
import Container from '../Container';
import {Box} from '../Box';

import styles from './Page.module.scss';
import TOC from '../TOC';
import Breadcrumbs from '../Breadcrumbs';
import {useRouter} from 'next/router';
import Link from 'next/link';

interface Props {
  title?: string;
  editPageLinkPath?: string;
  /* Content pages have a TOC, and a centered max-width column. To forcibly show
   * or hide the TOC, use showTOC */
  isContentPage?: boolean;
  showTOC?: boolean;
  collapsibleTOC?: boolean;
  children: React.ReactNode;
}

function Layout({
  title,
  isContentPage = false,
  showTOC = isContentPage,
  collapsibleTOC = false,
  editPageLinkPath,
  children,
}: Props) {
  const [TOCTop, setTOCTop] = useState<number | null>(null);
  const [tocItems] = useTOC(children);
  const {asPath} = useRouter();

  const githubIssueSubject = `[polaris.shopify.com] Feedback (on ${asPath})`;
  const feedbackUrl = `https://github.com/shopify/polaris/issues/new?title=${encodeURIComponent(
    githubIssueSubject,
  )}&amp;labels=polaris.shopify.com`;
  const editOnGithubUrl = editPageLinkPath
    ? `https://github.com/Shopify/polaris/tree/main${editPageLinkPath}`
    : '';
  const isComponentPage = asPath.includes('/components/');
  const componentTitle = toPascalCase(asPath.split('/').pop() ?? '');
  const TOCWrapperRef = useRef<HTMLDivElement | null>(null);

  const updateTOCTop = useCallback(() => {
    if (TOCWrapperRef.current) {
      setTOCTop(TOCWrapperRef.current.getBoundingClientRect().top);
    }
  }, []);

  useEffect(() => {
    updateTOCTop();
    window.addEventListener('resize', updateTOCTop);
    return () => {
      window.removeEventListener('resize', updateTOCTop);
    };
  }, [updateTOCTop]);

  return (
    <Container className={className(styles.Page, showTOC && styles.showTOC)}>
      <Box
        as="article"
        className={[styles.Post, isContentPage && styles.PostContent]}
        id="main"
      >
        <Breadcrumbs />
        {title && (
          <Longform>
            <h1>{title}</h1>
          </Longform>
        )}
        {children}
        <footer className={styles.Footer}>
          <p>
            {editOnGithubUrl && (
              <Link href={editOnGithubUrl}>Edit this page</Link>
            )}
            <Link href={feedbackUrl}>Leave feedback</Link>
            {isComponentPage && (
              <Link
                href={`https://github.com/Shopify/polaris/issues/new/choose?title=[${componentTitle}]`}
              >
                Create an issue
              </Link>
            )}
          </p>
        </footer>
      </Box>
      {showTOC && (
        <div
          className={styles.TOCWrapper}
          ref={TOCWrapperRef}
          style={{'--toc-top': `${TOCTop}px`} as React.CSSProperties}
        >
          <TOC items={tocItems} collapsibleTOC={collapsibleTOC} />
        </div>
      )}
    </Container>
  );
}

export default Layout;
