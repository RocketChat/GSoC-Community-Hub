'use client';

import { useContext } from 'react';
import DiscourseContext from './DiscourseContext';

/**
 * @returns {import('../lib').DiscourseClient}
 */
function useDiscourseClient() {
  const { discourseClient } = useContext(DiscourseContext);

  return discourseClient;
}

export default useDiscourseClient;
