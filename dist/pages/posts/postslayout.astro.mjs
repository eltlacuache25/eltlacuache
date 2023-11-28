export { renderers } from '../../renderers.mjs';
export { onRequest } from '../../_empty-middleware.mjs';

const page = () => import('../../chunks/pages/PostsLayout_cc6b30af.mjs').then(n => n.P);

export { page };
