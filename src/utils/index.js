const findItemBySlug = (items, slug) => items.find(item => item.node.slug === slug).node;

export {
    findItemBySlug
};
