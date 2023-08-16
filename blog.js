const posts = [
    {name: 'post1', yazar: 'yazar1'},
    {name: 'post2', yazar: 'yazar2'},
    {name: 'post3', yazar: 'yazar3'}
    ];

const listPosts = () => {
    posts.map(post => {
        console.log(post.name);
    });
};

const addPost = (newPost) => {
    const promisePost = new Promise((resolve,reject) => {
        posts.push(newPost);
        //resolve=('BLOG');
        reject('hatalı işlem');
    });
    return promisePost;  
}

async function showPost() {
    try {
        await addPost({name: 'post4', yazar: 'yazar4'});
        listPosts();
    } catch (error) {
        console.log(error);
    }
}

showPost();