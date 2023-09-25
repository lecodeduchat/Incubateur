import React from 'react';
import { Routes, Route } from "react-router-dom";

// Pour pouvoir utiliser cette syntaxe, il faut créer un ficher index.js dans le dossier Public
import{Layout, Home, Service, Contact} from '@/pages/Public';
import Error from '@/_utils/Error';

const PublicRouter = () => {
    return (
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />

            <Route path="/home" element={<Home />} />
            <Route path="/service" element={<Service />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
    );
};

export default PublicRouter;