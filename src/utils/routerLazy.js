export default (name) => () => import(`@/modules/${name}.vue`);
