function customReact(reactElement , container){
    /*
    let  docElement = document.createElement(reactElement.type);
    docElement.innerHTML = reactElement.children
    docElement.setAttribute("href" , reactElement.props.href);
    docElement.setAttribute("target" , reactElement.props.target);
    container.appendChild(docElement)
    */
    let  docElement = document.createElement(reactElement.type);
    docElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        docElement.setAttribute(prop , reactElement.props[prop])
    }
    container.appendChild(docElement)
}



const reactElement = {
    type : "a",
    props : {
        target : "_blank",
        href: 'https://google.com',
    },
    children : "click me to visit google"
}

const mainContainer = document.querySelector("#root")
customReact(reactElement , mainContainer);
