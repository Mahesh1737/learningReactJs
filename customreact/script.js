const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    children: "click me to visit google"
}

let root = document.querySelector('.container');

function customReactElement(reactElement, container){
    let a = document.createElement(reactElement.type);
    console.log(a);
    for (let prop in reactElement.props){
        if(prop === 'children') continue;
        a.setAttribute(prop, reactElement.props[prop]);
        a.innerHTML = reactElement.children;
        container.append(a);
    }
    // a.appendChild(root);
}


console.log(typeof anotherElement)

customReactElement(reactElement, root);