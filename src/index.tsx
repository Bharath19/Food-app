import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import { routes } from './routes';

const root = createRoot(document.getElementById("root")!);
root.render(<RouterProvider router={routes} />);