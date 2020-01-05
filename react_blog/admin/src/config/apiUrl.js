let url = 'http://127.0.0.1:7001/admin/'

let serverPath = {
    checkLogin: url + 'checkLogin',
    getTypeInfo: url + 'getTypeInfo',
    addArticle: url + 'addArticle',
    updateArticle: url + 'updateArticle',
    getArticleList: url + 'getArticleList',
    delArticle: url + 'delArticle/',
    delArticle: url + 'getArticleById/',
}

export default serverPath;