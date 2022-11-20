interface ApiConfigType {
    urlPath: string
    method: 'get' | 'post' | 'put' | 'delete'
    handlerName: string
    handlerPath: string
    authorizer: boolean
}

export type ApiConfigObj = {
    [key: string]: ApiConfigType
}

export const apiConfigs: ApiConfigObj = {
    testAPI: {
        urlPath: '/',
        method: 'get',
        handlerName: 'testAPI',
        handlerPath: './src/apis/testAPI.ts',
        authorizer: false,
    },
    authTestAPI: {
        urlPath: '/authtest',
        method: 'get',
        handlerName: 'authTestAPI',
        handlerPath: './src/apis/testAPI.ts',
        authorizer: true,
    },
    getUsers: {
        urlPath: '/users',
        method: 'get',
        handlerName: 'getUsers',
        handlerPath: './src/apis/users/user.ts',
        authorizer: false,
    },
    getIdxUser: {
        urlPath: '/users/:insertId',
        method: 'get',
        handlerName: 'getIdxUser',
        handlerPath: './src/apis/users/user.ts',
        authorizer: false,
    },
    deleteUsers: {
        urlPath: '/users',
        method: 'delete',
        handlerName: 'deleteUsers',
        handlerPath: './src/apis/users/user.ts',
        authorizer: false,
    },
    deleteIdxUser: {
        urlPath: '/users/:insertId',
        method: 'delete',
        handlerName: 'deleteIdxUser',
        handlerPath: './src/apis/users/user.ts',
        authorizer: false,
    },
    changeUserPassword: {
        urlPath: '/users/password',
        method: 'put',
        handlerName: 'changeUserPassword',
        handlerPath: './src/apis/users/user.ts',
        authorizer: false,
    },
    checkUserEmail: {
        urlPath: '/users/email',
        method: 'post',
        handlerName: 'checkUserEmail',
        handlerPath: './src/apis/users/user.ts',
        authorizer: false,
    },
    checkUserNickname: {
        urlPath: '/users/nickname',
        method: 'post',
        handlerName: 'checkUserNickname',
        handlerPath: './src/apis/users/user.ts',
        authorizer: false,
    },
    signin: {
        urlPath: '/users/login',
        method: 'post',
        handlerName: 'signin',
        handlerPath: './src/apis/users/signin.ts',
        authorizer: false,
    },
    signup: {
        urlPath: '/users',
        method: 'post',
        handlerName: 'signup',
        handlerPath: './src/apis/users/signup.ts',
        authorizer: false,
    },
    logout: {
        urlPath: '/users/logout',
        method: 'post',
        handlerName: 'logout',
        handlerPath: './src/apis/users/logout.ts',
        authorizer: false,
    },
    emailVerifyLink: {
        urlPath: '/verify',
        method: 'post',
        handlerName: 'emailVerifyLink',
        handlerPath: './src/apis/verify/emailVerify.ts',
        authorizer: false,
    },
    checkEmailLink: {
        urlPath: '/verify',
        method: 'get',
        handlerName: 'checkEmailLink',
        handlerPath: './src/apis/verify/emailVerify.ts',
        authorizer: false,
    },
    pwResetEmailLink: {
        urlPath: '/verify/password',
        method: 'post',
        handlerName: 'pwResetEmailLink',
        handlerPath: './src/apis/verify/pwVerify.ts',
        authorizer: false,
    },
    checkPwResetEmailLink: {
        urlPath: '/verify/password',
        method: 'get',
        handlerName: 'checkPwResetEmailLink',
        handlerPath: './src/apis/verify/pwVerify.ts',
        authorizer: false,
    },
    generateToken: {
        urlPath: '/auth',
        method: 'post',
        handlerName: 'generateToken',
        handlerPath: './src/apis/auth/generateToken.ts',
        authorizer: false,
    },
    getCookies: {
        urlPath: '/auth',
        method: 'get',
        handlerName: 'getCookies',
        handlerPath: './src/apis/auth/generateToken.ts',
        authorizer: false,
    },
    getPayloadToken: {
        urlPath: '/auth/verify',
        method: 'post',
        handlerName: 'getPayloadToken',
        handlerPath: './src/apis/auth/verifyToken.ts',
        authorizer: false,
    },
    refreshToken: {
        urlPath: '/auth/refresh',
        method: 'post',
        handlerName: 'refreshToken',
        handlerPath: './src/apis/auth/refreshToken.ts',
        authorizer: false,
    },
    getUserInfoKakao: {
        urlPath: '/auth/kakao',
        method: 'post',
        handlerName: 'getUserInfoKakao',
        handlerPath: './src/apis/auth/kakao.ts',
        authorizer: false,
    },
    getUserInfoGoogle: {
        urlPath: '/auth/google',
        method: 'post',
        handlerName: 'getUserInfoGoogle',
        handlerPath: './src/apis/auth/google.ts',
        authorizer: false,
    },
    getUserInfoNaver: {
        urlPath: '/auth/naver',
        method: 'post',
        handlerName: 'getUserInfoNaver',
        handlerPath: './src/apis/auth/naver.ts',
        authorizer: false,
    },
    getPopularMovies: {
        urlPath: '/movies/popular/:page',
        method: 'get',
        handlerName: 'getPopularMovies',
        handlerPath: './src/apis/movie/popular.ts',
        authorizer: false,
    },
    getMoviesDetails: {
        urlPath: '/movies/details/:movieId',
        method: 'get',
        handlerName: 'getMoviesDetails',
        handlerPath: './src/apis/movie/details.ts',
        authorizer: false,
    },
    getCredits: {
        urlPath: '/movies/credits/:movieId',
        method: 'get',
        handlerName: 'getCredits',
        handlerPath: './src/apis/movie/credits.ts',
        authorizer: false,
    },
    upcomingMovies: {
        urlPath: '/movies/upcoming/:page',
        method: 'get',
        handlerName: 'upcomingMovies',
        handlerPath: './src/apis/movie/playing.ts',
        authorizer: false,
    },
    nowPlayingMovies: {
        urlPath: '/movies/now_playing/:page',
        method: 'get',
        handlerName: 'nowPlayingMovies',
        handlerPath: './src/apis/movie/playing.ts',
        authorizer: false,
    },
    getAllThemes: {
        urlPath: '/movies/theme',
        method: 'get',
        handlerName: 'getAllThemes',
        handlerPath: './src/apis/movie/theme.ts',
        authorizer: false,
    },
    getMoviesFromTheme: {
        urlPath: '/movies/theme/:name',
        method: 'get',
        handlerName: 'getMoviesFromTheme',
        handlerPath: './src/apis/movie/theme.ts',
        authorizer: false,
    },
    insertMoviesInTheme: {
        urlPath: '/movies/theme',
        method: 'post',
        handlerName: 'insertMoviesInTheme',
        handlerPath: './src/apis/movie/theme.ts',
        authorizer: false,
    },
    checkLiked: {
        urlPath: '/movies/liked/:type',
        method: 'post',
        handlerName: 'checkLiked',
        handlerPath: './src/apis/movie/like.ts',
        authorizer: false,
    },
    liked: {
        urlPath: '/movies/liked',
        method: 'post',
        handlerName: 'liked',
        handlerPath: './src/apis/movie/like.ts',
        authorizer: false,
    },
    deleteLike: {
        urlPath: '/movies/liked',
        method: 'delete',
        handlerName: 'deleteLike',
        handlerPath: './src/apis/movie/like.ts',
        authorizer: false,
    },
    getLiked: {
        urlPath: '/movies/liked/:type',
        method: 'get',
        handlerName: 'getLiked',
        handlerPath: './src/apis/movie/like.ts',
        authorizer: false,
    },
    writeContents: {
        urlPath: '/community/content',
        method: 'post',
        handlerName: 'writeContents',
        handlerPath: './src/apis/community/contents.ts',
        authorizer: false,
    },
    modifyContents: {
        urlPath: '/community/content/:idx',
        method: 'put',
        handlerName: 'modifyContents',
        handlerPath: './src/apis/community/contents.ts',
        authorizer: false,
    },
    deleteContents: {
        urlPath: '/community/content/:idx',
        method: 'delete',
        handlerName: 'deleteContents',
        handlerPath: './src/apis/community/contents.ts',
        authorizer: false,
    },
    increaseHit: {
        urlPath: '/community/content/hit/:idx',
        method: 'put',
        handlerName: 'increaseHit',
        handlerPath: './src/apis/community/contents.ts',
        authorizer: false,
    },
    getTopHitContents: {
        urlPath: '/community/content/hit',
        method: 'get',
        handlerName: 'getTopHitContents',
        handlerPath: './src/apis/community/contents.ts',
        authorizer: false,
    },
    getAllContents: {
        urlPath: '/community/page/:page',
        method: 'get',
        handlerName: 'getAllContents',
        handlerPath: './src/apis/community/community.ts',
        authorizer: false,
    },
    getUserContent: {
        urlPath: '/community',
        method: 'get',
        handlerName: 'getUserContent',
        handlerPath: './src/apis/community/community.ts',
        authorizer: false,
    },
    getIdxContent: {
        urlPath: '/community/:idx',
        method: 'get',
        handlerName: 'getIdxContent',
        handlerPath: './src/apis/community/community.ts',
        authorizer: false,
    },
    writeComment: {
        urlPath: '/community/comment',
        method: 'post',
        handlerName: 'writeComment',
        handlerPath: './src/apis/community/comments.ts',
        authorizer: false,
    },
    modifyComment: {
        urlPath: '/community/comment',
        method: 'put',
        handlerName: 'modifyComment',
        handlerPath: './src/apis/community/comments.ts',
        authorizer: false,
    },
    deleteComment: {
        urlPath: '/community/comment',
        method: 'delete',
        handlerName: 'deleteComment',
        handlerPath: './src/apis/community/comments.ts',
        authorizer: false,
    },
    getIdxComments: {
        urlPath: '/community/comment/:contentIdx',
        method: 'get',
        handlerName: 'getIdxComments',
        handlerPath: './src/apis/community/comments.ts',
        authorizer: false,
    },
    getUserComments: {
        urlPath: '/community/comment/user/:nickname',
        method: 'get',
        handlerName: 'getUserComments',
        handlerPath: './src/apis/community/comments.ts',
        authorizer: false,
    },
    contentsSearch: {
        urlPath: '/search/content/:type',
        method: 'get',
        handlerName: 'contentsSearch',
        handlerPath: './src/apis/search/contentSearch.ts',
        authorizer: false,
    },
    movieSearch: {
        urlPath: '/search/movie',
        method: 'get',
        handlerName: 'movieSearch',
        handlerPath: './src/apis/search/movieSearch.ts',
        authorizer: false,
    },
    actorSearch: {
        urlPath: '/search/actor',
        method: 'get',
        handlerName: 'actorSearch',
        handlerPath: './src/apis/search/movieSearch.ts',
        authorizer: false,
    },
    genreSearch: {
        urlPath: '/search/genre',
        method: 'get',
        handlerName: 'genreSearch',
        handlerPath: './src/apis/search/movieSearch.ts',
        authorizer: false,
    },
}
