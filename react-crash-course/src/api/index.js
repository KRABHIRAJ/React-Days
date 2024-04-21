const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/krabhiraj');
    return response.json();
}

export {githubInfoLoader};