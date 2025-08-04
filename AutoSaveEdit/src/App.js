import PostsPage from './PostsPage.js'
import PostEditPage from './PostEditPage.js'
import { initRouter } from './router.js'

// url 규칙
// 루트 : postsPage 그리기

// /posts/{id} - id에 해당하는 post 생성

export default function App({ $target }) {
    const postsPage = new PostsPage({ 
        $target,
    })

    const postEditPage = new PostEditPage({ 
        $target, 
        initialState : {
            postId: 'new',
            post: {
                title: '',
                content: ''
            }
        }
    })


    // url에 따라 페이지 렌더링
    this.route = () => {
        console.log('Current pathname:', window.location.pathname)

        $target.innerHTML = ''
        const { pathname } = window.location

        if(pathname === '/' || pathname.endsWith('/index.html') || pathname.includes('/AutoSaveEdit')) {
            postsPage.setState()
        } else if(pathname.indexOf('/posts/') === 0) {
            const [, , postId] = pathname.split('/')
            postEditPage.setState({ postId })
        }
    }    
    initRouter(() => this.route())

    
    this.route()

}