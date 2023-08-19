import React from 'react';
import { createRoot } from 'react-dom/client';
import { AppLayout } from './AppLayout';

const rootDom = document.getElementById('root')!;
const root = createRoot(rootDom);
root.render(<AppLayout />);