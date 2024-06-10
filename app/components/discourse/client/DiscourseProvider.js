'use client';

import { useMemo } from 'react';
import { DiscourseClient } from '../lib';
import DiscourseContext from './DiscourseContext';

function DiscourseProvider({ host, discourseClient, children }) {
  const _discourseClient = useMemo(
    () => discourseClient || new DiscourseClient(host, { isClient: true }),
    [host, discourseClient]
  );

  const contextValue = useMemo(
    () => ({ discourseClient: _discourseClient }),
    [_discourseClient]
  );
  return (
    <DiscourseContext.Provider value={contextValue}>
      {children}
    </DiscourseContext.Provider>
  );
}

export default DiscourseProvider;
