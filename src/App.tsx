/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Home } from '@/pages/Home';
import { News } from '@/pages/News';
import { Odds } from '@/pages/Odds';
import { ArticleDetail } from '@/pages/ArticleDetail';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="news" element={<News />} />
          <Route path="news/:id" element={<ArticleDetail />} />
          <Route path="odds" element={<Odds />} />
          {/* Fallback for other routes to Home for now */}
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

