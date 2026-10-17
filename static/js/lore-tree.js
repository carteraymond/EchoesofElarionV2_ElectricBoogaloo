const loreTree = {
    title: "Elarion",
    children: [
        {
            title: "The Heartlands",
            children: [
                { title: "Luminara", children: [] },
                { title: "The War of Sundering", children: [] }
            ]
        },
        {
            title: "Ancient Mysteries",
            children: [
                { title: "The Concordance", children: [] },
                { title: "The Well of Solis", children: [] }
            ]
        }
    ]
};

function displayLoreTree(node) {
    console.log(node.title);

    node.children.forEach(child => {
        displayLoreTree(child);
    });
}

displayLoreTree(loreTree);

function createLoreNode(node) {
    const item = document.createElement("li");
    item.textContent = node.title;

    if (node.children.length > 0) {
        const childList = document.createElement("ul");

        node.children.forEach(child => {
            childList.appendChild(createLoreNode(child));
        });

        item.appendChild(childList);
    }

    return item;
}

const treeContainer = document.querySelector("#lore-tree");

if (treeContainer) {
    const rootList = document.createElement("ul");
    rootList.appendChild(createLoreNode(loreTree));
    treeContainer.appendChild(rootList);
}