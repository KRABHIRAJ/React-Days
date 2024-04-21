const reactRender = (root, reactElement) => {
    const domelement = document.createElement(reactElement.type);
    domelement.innerHTML = reactElement.children;
    for(const prop in reactElement.props){
        domelement.setAttribute(prop, reactElement.props[prop])
    }
    root.appendChild(domelement);
}


const reactElement = {
    type:'a',
    props: {
        href: 'https://react.dev/learn/start-a-new-react-project',
        target: ''
    },
    children:'Please click me'
}
const root = document.getElementById('root');

reactRender(root, reactElement);

console.log();